import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Payment not completed</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Nothing was charged.</h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
        You can return to the Academy and try again whenever you are ready.
      </p>
      <Link href="/academy" className="mt-8 inline-flex min-h-12 items-center rounded-xl border border-slate-300 bg-white px-6 font-semibold text-slate-900">
        Return to Academy
      </Link>
    </section>
  );
}
