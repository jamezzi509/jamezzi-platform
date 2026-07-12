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
        "rounded-showcase border-border shadow-showcase overflow-hidden border bg-white",
        className,
      )}
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <div className="h-1" style={{ background: accent }} />
      <div className="p-6 md:p-8">{children}</div>
      <figcaption className="sr-only">
        Illustrative placeholder preview of the {productName} interface. Final
        product screenshots will replace this artwork.
      </figcaption>
    </figure>
  );
}
