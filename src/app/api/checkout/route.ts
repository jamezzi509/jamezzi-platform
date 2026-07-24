import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase/admin";
import { getSellableProduct } from "@/lib/payments/catalog";
import { stripe } from "@/lib/payments/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const authorization = request.headers.get("authorization");
    if (!authorization?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Sign in before purchasing." }, { status: 401 });
    }

    const token = authorization.slice("Bearer ".length);
    const user = await adminAuth.verifyIdToken(token);
    if (!user.email) {
      return NextResponse.json({ error: "Your account needs a verified email." }, { status: 400 });
    }

    const body = (await request.json()) as { productId?: string };
    const product = body.productId ? getSellableProduct(body.productId) : undefined;
    if (!product) {
      return NextResponse.json({ error: "This product is unavailable." }, { status: 400 });
    }

    const origin = new URL(request.url).origin;
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: user.email,
      client_reference_id: user.uid,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: product.currency,
            unit_amount: product.unitAmount,
            product_data: {
              name: product.name,
              description: product.description,
              metadata: { productId: product.id, kind: product.kind },
            },
          },
        },
      ],
      metadata: {
        firebaseUid: user.uid,
        productId: product.id,
        productKind: product.kind,
      },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel?product=${encodeURIComponent(product.id)}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("checkout_session_error", error);
    return NextResponse.json({ error: "Checkout could not be started." }, { status: 500 });
  }
}
