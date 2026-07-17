import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { StatusBadge } from "@/components/home/status-badge";
import { featuredProduct, supportingProducts } from "@/content/products";
import { NichrShowcase } from "@/components/home/nichr-showcase";

export function SelectedWork() {
  return (
    <section
      id="selected-work"
      className="bg-paper scroll-mt-24 py-[72px] lg:py-[88px]"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-eyebrow text-indigo-dark">SELECTED WORK</p>
          <h2 className="text-editorial-headline text-ink mt-3">
            Built to solve something real.
          </h2>
          <p className="text-intro text-muted mt-4">
            A selection of digital products I&rsquo;ve designed and built around
            problems worth solving.
          </p>
        </div>

        <div className="mt-10 lg:mt-12">
          <NichrShowcase product={featuredProduct} />
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {supportingProducts.map((product) => (
            <article
              key={product.slug}
              className="rounded-showcase border-border shadow-showcase flex flex-col border bg-white p-6"
            >
              <div className="flex items-center gap-2">
                <p className="text-metadata text-muted">{product.category}</p>
                <StatusBadge status={product.status} />
              </div>
              <h3 className="text-feature-headline-sm text-ink mt-2">
                {product.headline}
              </h3>
              <p className="text-body text-muted mt-2 line-clamp-2">
                {product.description}
              </p>
              <CtaLink href={product.href} variant="link" className="mt-3">
                {product.actionLabel}
                <ArrowRightIcon className="size-4" />
              </CtaLink>
              <div className="border-border relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-[10px] border bg-[#f7f8fb]">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CtaLink href="/portfolio" variant="link">
            View Complete Portfolio
            <ArrowRightIcon className="size-4" />
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
