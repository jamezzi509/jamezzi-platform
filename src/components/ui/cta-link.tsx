import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant =
  | "primary"
  | "secondary"
  | "inverse"
  | "outline-inverse"
  | "link"
  | "link-inverse";

interface CtaLinkProps {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

const filledBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-control px-6 text-button transition-colors duration-control ease-primary";

const linkBase =
  "inline-flex min-h-11 items-center gap-1.5 text-button transition-colors duration-control ease-primary";

const variantClasses: Record<Variant, string> = {
  primary: cn(filledBase, "bg-indigo text-white hover:bg-indigo-dark"),
  secondary: cn(
    filledBase,
    "border border-border bg-transparent text-ink hover:bg-white",
  ),
  inverse: cn(filledBase, "bg-paper text-ink hover:bg-white"),
  "outline-inverse": cn(
    filledBase,
    "border border-night-border text-night-text hover:border-night-text",
  ),
  link: cn(linkBase, "text-indigo hover:text-indigo-dark"),
  "link-inverse": cn(linkBase, "text-night-text hover:text-white"),
};

export function CtaLink({
  href,
  variant = "primary",
  className,
  children,
}: CtaLinkProps) {
  return (
    <Link href={href} className={cn(variantClasses[variant], className)}>
      {children}
    </Link>
  );
}
