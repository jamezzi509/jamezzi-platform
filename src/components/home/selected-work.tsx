import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { StatusBadge } from "@/components/home/status-badge";
import { featuredProduct, supportingProducts } from "@/content/products";
import { NichrShowcase } from "@/components/home/nichr-showcase";

const imageAspect = {
  endize: "aspect-[1464/1030]",
  clieniq: "aspect-[1114/700]",
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

        <div className="mt-16">
          <NichrShowcase product={featuredProduct} />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-8">
          {supportingProducts.map((product) => (
            <article key={product.slug} className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-metadata text-muted">{product.category}</p>
                <StatusBadge status={product.status} />
              </div>
              <h3 className="text-feature-headline text-ink mt-3">
                {product.headline}
              </h3>
              <p className="text-body text-muted mt-4">{product.description}</p>
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
              <div
                className={`rounded-showcase border-border shadow-showcase relative mt-6 w-full overflow-hidden border ${imageAspect[product.slug as "endize" | "clieniq"]}`}
              >
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
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
