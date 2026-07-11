import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { featuredProduct, supportingProducts } from "@/content/products";
import { ProductFrame } from "@/components/home/product-frame";
import { ProductVisualNichr } from "@/components/home/product-visual-nichr";
import { ProductVisualEndize } from "@/components/home/product-visual-endize";
import { ProductVisualClienIQ } from "@/components/home/product-visual-clieniq";

const supportingVisuals = {
  endize: ProductVisualEndize,
  clieniq: ProductVisualClienIQ,
} as const;

const accents = {
  nichr: "var(--color-nichr-accent)",
  endize: "var(--color-endize-accent)",
  clieniq: "var(--color-clieniq-accent)",
} as const;

export function SelectedWork() {
  return (
    <section
      id="selected-work"
      className="bg-paper scroll-mt-24 py-20 lg:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-eyebrow text-indigo-dark">SELECTED WORK</p>
          <h2 className="text-section-headline text-ink mt-4">
            Built to solve something real.
          </h2>
          <p className="text-intro text-muted mt-5">
            A selection of digital products I&rsquo;ve designed and built around
            problems worth solving.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-metadata text-muted">
              {featuredProduct.category}
            </p>
            <h3 className="text-feature-headline text-ink mt-3">
              {featuredProduct.headline}
            </h3>
            <p className="text-body text-muted mt-4">
              {featuredProduct.description}
            </p>
            <ul className="text-supporting text-muted mt-5 flex flex-wrap gap-x-2 gap-y-1">
              {featuredProduct.proof.map((item, index) => (
                <li key={item} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">·</span>}
                  {item}
                </li>
              ))}
            </ul>
            <CtaLink
              href={featuredProduct.href}
              variant="link"
              className="mt-6"
            >
              {featuredProduct.actionLabel}
              <ArrowRightIcon className="size-4" />
            </CtaLink>
          </div>
          <div className="lg:col-span-7">
            <ProductFrame
              accent={accents.nichr}
              productName={featuredProduct.name}
            >
              <ProductVisualNichr />
            </ProductFrame>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-8">
          {supportingProducts.map((product) => {
            const Visual =
              supportingVisuals[product.slug as "endize" | "clieniq"];
            return (
              <article key={product.slug} className="flex flex-col">
                <p className="text-metadata text-muted">{product.category}</p>
                <h3 className="text-feature-headline text-ink mt-3">
                  {product.headline}
                </h3>
                <p className="text-body text-muted mt-4">
                  {product.description}
                </p>
                <ul className="text-supporting text-muted mt-5 flex flex-wrap gap-x-2 gap-y-1">
                  {product.proof.map((item, index) => (
                    <li key={item} className="flex items-center gap-2">
                      {index > 0 && <span aria-hidden="true">·</span>}
                      {item}
                    </li>
                  ))}
                </ul>
                <CtaLink href={product.href} variant="link" className="mt-6">
                  {product.actionLabel}
                  <ArrowRightIcon className="size-4" />
                </CtaLink>
                <div className="mt-6">
                  <ProductFrame
                    accent={accents[product.slug]}
                    productName={product.name}
                  >
                    <Visual />
                  </ProductFrame>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <CtaLink href="/portfolio" variant="link">
            View Complete Portfolio
            <ArrowRightIcon className="size-4" />
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
