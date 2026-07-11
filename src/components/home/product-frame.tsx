import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ProductFrameProps {
  accent: string;
  productName: string;
  children: ReactNode;
  className?: string;
}

export function ProductFrame({
  accent,
  productName,
  children,
  className,
}: ProductFrameProps) {
  return (
    <figure
      className={cn(
        "rounded-frame border-border shadow-showcase overflow-hidden border bg-white",
        className,
      )}
    >
      <div className="border-border bg-paper flex items-center gap-2 border-b px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="bg-border size-2 rounded-full" />
          <span className="bg-border size-2 rounded-full" />
          <span className="bg-border size-2 rounded-full" />
        </span>
        <span className="text-metadata text-muted">
          {productName} — sample preview
        </span>
      </div>
      <div
        className="p-6"
        style={{ "--accent": accent } as React.CSSProperties}
      >
        {children}
      </div>
      <figcaption className="sr-only">
        Illustrative placeholder preview of the {productName} interface. Final
        product screenshots will replace this artwork.
      </figcaption>
    </figure>
  );
}
