import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { bookPurchaseEmail, getResend } from "@/lib/email/resend";
import { adminDb } from "@/lib/firebase/admin";
import { getSellableProduct } from "@/lib/payments/catalog";
import { stripe } from "@/lib/payments/stripe";

export const runtime = "nodejs";

async function sendBookEmail({
  session,
  customerEmail,
  origin,
}: {
  session: Stripe.Checkout.Session;
  customerEmail: string;
  origin: string;
}) {
  const productId = session.metadata?.productId;
  const product = productId ? getSellableProduct(productId) : undefined;
  if (!product || product.kind !== "book") return;

  const orderRef = adminDb.collection("orders").doc(session.id);
  const order = await orderRef.get();
  if (order.get("emailSentAt")) return;

  const downloadUrl = `${origin}/api/books/download?session_id=${encodeURIComponent(session.id)}`;
  const message = bookPurchaseEmail({
    productName: product.name,
    downloadUrl,
  });

  const { data, error } = await getResend().emails.send(
    {
      from: "Jamezzi <info@jamezzi.com>",
      to: customerEmail,
      subject: message.subject,
      text: message.text,
      html: message.html,
    },
    {
      headers: {
        "Idempotency-Key": `book-purchase-${session.id}`,
      },
    },
  );

  if (error) {
    throw new Error(`Resend could not send the purchase email: ${error.message}`);
  }

  await orderRef.set(
    {
      emailSentAt: FieldValue.serverTimestamp(),
      resendEmailId: data?.id ?? null,
    },
    { merge: true },
  );
}

async function fulfillCheckout(
  session: Stripe.Checkout.Session,
  origin: string,
) {
  if (session.payment_status !== "paid") return;

  const rawUid = session.metadata?.firebaseUid;
  const uid = rawUid && rawUid !== "guest" ? rawUid : undefined;
  const productId = session.metadata?.productId;
  const productKind = session.metadata?.productKind;
  const customerEmail =
    session.customer_details?.email?.trim().toLowerCase() ??
    session.customer_email?.trim().toLowerCase();

  if (!productId || !productKind || !customerEmail) {
    throw new Error(`Checkout session ${session.id} is missing fulfillment metadata.`);
  }
  if (productKind === "course" && !uid) {
    throw new Error(`Course checkout ${session.id} is not connected to an account.`);
  }

  const orderRef = adminDb.collection("orders").doc(session.id);

  await adminDb.runTransaction(async (transaction) => {
    const existing = await transaction.get(orderRef);
    if (existing.exists) return;

    transaction.set(orderRef, {
      uid: uid ?? null,
      productId,
      productKind,
      purchaseType: uid ? "account" : "guest",
      stripeSessionId: session.id,
      stripePaymentIntentId: session.payment_intent ?? null,
      customerEmail,
      amountTotal: session.amount_total,
      currency: session.currency,
      paymentStatus: session.payment_status,
      createdAt: FieldValue.serverTimestamp(),
    });

    if (uid) {
      const entitlementRef = adminDb
        .collection("users")
        .doc(uid)
        .collection("entitlements")
        .doc(productId.replace(":", "__"));

      transaction.set(
        entitlementRef,
        {
          productId,
          productKind,
          active: true,
          source: "stripe",
          stripeSessionId: session.id,
          grantedAt: FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
    } else {
      const guestPurchaseRef = adminDb.collection("guestPurchases").doc(session.id);
      transaction.set(guestPurchaseRef, {
        customerEmail,
        productId,
        productKind,
        stripeSessionId: session.id,
        claimedByUid: null,
        createdAt: FieldValue.serverTimestamp(),
      });
    }
  });

  if (productKind === "book") {
    await sendBookEmail({ session, customerEmail, origin });
  }
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !secret) {
    return NextResponse.json({ error: "Webhook is not configured." }, { status: 503 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(await request.text(), signature, secret);
  } catch {
    return NextResponse.json({ error: "Invalid webhook signature." }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      await fulfillCheckout(event.data.object, new URL(request.url).origin);
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("stripe_fulfillment_error", event.id, error);
    return NextResponse.json({ error: "Fulfillment failed." }, { status: 500 });
  }
}
