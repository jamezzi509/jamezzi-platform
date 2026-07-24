import Link from "next/link";
import { PurchaseButton } from "@/components/payments/purchase-button";
import { sellableProducts } from "@/lib/payments/catalog";

export const metadata = {
  title: "Courses & Books",
  description: "Purchase practical Jamezzi courses and Kreyòl PDF guides.",
};

function ProductGrid({ kind }: { kind: "course" | "book" }) {
  const products = sellableProducts.filter((product) => product.kind === kind);
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {products.map((product) => (
        <article
          key={product.id}
          className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-violet-700">
            {kind === "course" ? "Course · Lifetime access" : "Kreyòl PDF guide"}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            {product.name}
          </h3>
          <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
            {product.description}
          </p>
          <div className="mt-7 flex items-center justify-between gap-4">
            <span className="text-2xl font-semibold text-slate-950">
              ${(product.unitAmount / 100).toFixed(2)}
            </span>
            <PurchaseButton
              productId={product.id}
              productKind={product.kind}
              className="min-h-12 rounded-xl bg-violet-700 px-5 font-semibold text-white transition hover:bg-violet-800 disabled:opacity-60"
            >
              Buy securely
            </PurchaseButton>
          </div>
          {kind === "book" && (
            <p className="mt-4 text-sm leading-6 text-slate-500">
              No account required. Use the email where you want to receive access.
            </p>
          )}
        </article>
      ))}
    </div>
  );
}

export default function StorePage() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-700">
            Jamezzi
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Practical learning you can keep.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Pay once through Stripe’s secure checkout. Courses stay connected to your
            Jamezzi account; PDF books can be purchased without creating one.
          </p>
          <Link href="/account" className="mt-5 inline-block text-sm font-semibold text-violet-700 underline">
            Sign in or create an account
          </Link>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Courses</h2>
          <ProductGrid kind="course" />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">PDF books</h2>
          <ProductGrid kind="book" />
        </section>
      </section>
    </div>
  );
}
