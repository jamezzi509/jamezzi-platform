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
    <div className="bg-night relative overflow-hidden rounded-[15px] lg:h-[556px]">
      <NichrBackdrop />
      <div className="relative grid gap-8 p-8 md:p-10 lg:h-full lg:grid-cols-12 lg:items-stretch lg:gap-8 lg:p-8">
        <div className="flex flex-col justify-center lg:col-span-4">
          <div className="flex items-center gap-2">
            <span
              className="flex size-6 items-center justify-center rounded-md text-[13px] font-bold text-white"
              style={{ background: "var(--color-nichr-accent)" }}
            >
              N
            </span>
            <span className="text-nav text-night-text font-semibold">
              Nichr
            </span>
            <StatusBadge status={product.status} tone="dark" />
          </div>
          <p className="text-metadata text-night-muted mt-3">
            {product.category}
          </p>
          <h3 className="text-feature-headline-sm text-night-text mt-2">
            {product.headline}
          </h3>
          <p className="text-body text-night-muted mt-2">
            {product.description}
          </p>
          <ul className="text-supporting text-night-muted mt-3 flex flex-wrap gap-x-2 gap-y-1">
            {product.proof.map((item, index) => (
              <li key={item} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">·</span>}
                {item}
              </li>
            ))}
          </ul>
          <CtaLink
            href={product.href}
            variant="primary"
            className="mt-4 self-start"
          >
            {product.actionLabel}
            <ArrowRightIcon className="size-4" />
          </CtaLink>
        </div>
        <div className="flex items-center lg:col-span-8 lg:h-full">
          <div className="border-night-border relative aspect-[16/9] w-full overflow-hidden rounded-[10px] border bg-[#f7f8fb] shadow-[0_22px_60px_rgba(0,0,0,0.28)]">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
