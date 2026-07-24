import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { adminDb } from "@/lib/firebase/admin";
import { stripe } from "@/lib/payments/stripe";

export const runtime = "nodejs";

async function fulfillCheckout(session: Stripe.Checkout.Session) {
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
      await fulfillCheckout(event.data.object);
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("stripe_fulfillment_error", event.id, error);
    return NextResponse.json({ error: "Fulfillment failed." }, { status: 500 });
  }
}
