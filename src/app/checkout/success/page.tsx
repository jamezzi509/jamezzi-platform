import Link from "next/link";
import { getSellableProduct } from "@/lib/payments/catalog";
import { stripe } from "@/lib/payments/stripe";

export const dynamic = "force-dynamic";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  let productKind: "course" | "book" | undefined;
  let productName: string | undefined;
  let paid = false;

  if (sessionId?.startsWith("cs_")) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const product = session.metadata?.productId
        ? getSellableProduct(session.metadata.productId)
        : undefined;
      productKind = product?.kind;
      productName = product?.name;
      paid = session.payment_status === "paid";
    } catch {
      // Keep the confirmation page useful if Stripe is temporarily unavailable.
    }
  }

  const bookReady = paid && productKind === "book" && sessionId;

  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
        Payment received
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
        Your purchase is ready.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
        {bookReady
          ? `Your payment for ${productName ?? "this book"} is confirmed. Download your protected PDF below.`
          : "Stripe confirmed your payment. Your course access is being connected to your Jamezzi account."}
      </p>

      {bookReady ? (
        <a
          href={`/api/books/download?session_id=${encodeURIComponent(sessionId)}`}
          className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-violet-700 px-6 font-semibold text-white"
        >
          Download your book
        </a>
      ) : (
        <Link
          href="/academy"
          className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-violet-700 px-6 font-semibold text-white"
        >
          Go to Academy
        </Link>
      )}

      {bookReady && (
        <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-slate-500">
          Save the PDF to your device now. For help recovering a purchase, contact
          info@jamezzi.com using the same email entered at checkout.
        </p>
      )}
    </section>
  );
}
