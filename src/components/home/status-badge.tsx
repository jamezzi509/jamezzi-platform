import { cn } from "@/lib/cn";
import type { ProductStatus } from "@/types/content";

const toneClasses = {
  light: "border-border text-muted",
  dark: "border-night-border text-night-muted",
} as const;

export function StatusBadge({
  status,
  tone = "light",
}: {
  status: ProductStatus;
  tone?: "light" | "dark";
}) {
  if (status !== "launching-soon") return null;

  return (
    <span
      className={cn(
        "rounded-control text-metadata inline-flex items-center border px-2 py-0.5 font-normal",
        toneClasses[tone],
      )}
    >
      Launching Soon
    </span>
  );
}
