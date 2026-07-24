import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Payment received</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Your purchase is ready.</h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
        Stripe confirmed your payment. Your course or book will appear in your Jamezzi account as soon as secure processing finishes.
      </p>
      <Link href="/academy" className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-violet-700 px-6 font-semibold text-white">
        Go to Academy
      </Link>
    </section>
  );
}
