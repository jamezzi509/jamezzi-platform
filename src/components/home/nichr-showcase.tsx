import Image from "next/image";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { StatusBadge } from "@/components/home/status-badge";
import type { Product } from "@/types/content";

function NichrBackdrop() {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full"
      aria-hidden="true"
      focusable="false"
    >
      <g style={{ mixBlendMode: "screen" }}>
        <polygon
          points="720,-60 1260,140 1120,520 640,340"
          fill="var(--color-indigo)"
          opacity="0.16"
        />
        <polygon
          points="860,320 1260,420 1160,760 760,660"
          fill="var(--color-violet)"
          opacity="0.12"
        />
      </g>
      <g stroke="var(--color-indigo)" strokeWidth="1" opacity="0.18">
        <line x1="1200" y1="-100" x2="300" y2="500" />
        <line x1="1200" y1="60" x2="420" y2="700" />
        <line x1="1200" y1="220" x2="640" y2="820" />
      </g>
      <g
        fill="none"
        stroke="var(--color-coral)"
        strokeLinecap="round"
        opacity="0.4"
      >
        <path d="M 980 80 Q 1005 58, 1032 82" strokeWidth="2.5" />
        <path d="M 1060 150 Q 1080 132, 1102 152" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function NichrShowcase({ product }: { product: Product }) {
  return (
    <div className="rounded-showcase bg-night relative overflow-hidden">
      <NichrBackdrop />
      <div className="relative grid gap-8 p-8 md:p-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2">
            <span
              className="size-2 rounded-full"
              style={{ background: "var(--color-nichr-accent)" }}
            />
            <span className="text-metadata text-night-muted">NICHR</span>
            <StatusBadge status={product.status} tone="dark" />
          </div>
          <p className="text-metadata text-night-muted mt-3">
            {product.category}
          </p>
          <h3 className="text-feature-headline-sm text-night-text mt-2">
            {product.headline}
          </h3>
          <p className="text-body text-night-muted mt-3">
            {product.description}
          </p>
          <ul className="text-supporting text-night-muted mt-4 flex flex-wrap gap-x-2 gap-y-1">
            {product.proof.map((item, index) => (
              <li key={item} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">·</span>}
                {item}
              </li>
            ))}
          </ul>
          <CtaLink href={product.href} variant="link-inverse" className="mt-5">
            {product.actionLabel}
            <ArrowRightIcon className="size-4" />
          </CtaLink>
        </div>
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] sm:aspect-[16/9] lg:aspect-[2/1] xl:aspect-[2782/910]">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              className="object-cover object-left-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
