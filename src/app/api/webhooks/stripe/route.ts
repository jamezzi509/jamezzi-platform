import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { adminDb } from "@/lib/firebase/admin";
import { stripe } from "@/lib/payments/stripe";

export const runtime = "nodejs";

async function fulfillCheckout(session: Stripe.Checkout.Session) {
  if (session.payment_status !== "paid") return;

  const uid = session.metadata?.firebaseUid;
  const productId = session.metadata?.productId;
  const productKind = session.metadata?.productKind;
  if (!uid || !productId || !productKind) {
    throw new Error(`Checkout session ${session.id} is missing fulfillment metadata.`);
  }

  const orderRef = adminDb.collection("orders").doc(session.id);
  const entitlementRef = adminDb
    .collection("users")
    .doc(uid)
    .collection("entitlements")
    .doc(productId.replace(":", "__"));

  await adminDb.runTransaction(async (transaction) => {
    const existing = await transaction.get(orderRef);
    if (existing.exists) return;

    transaction.set(orderRef, {
      uid,
      productId,
      productKind,
      stripeSessionId: session.id,
      stripePaymentIntentId: session.payment_intent ?? null,
      customerEmail: session.customer_details?.email ?? session.customer_email ?? null,
      amountTotal: session.amount_total,
      currency: session.currency,
      paymentStatus: session.payment_status,
      createdAt: FieldValue.serverTimestamp(),
    });

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
