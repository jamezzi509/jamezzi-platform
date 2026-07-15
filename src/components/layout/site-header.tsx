"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, academyNav, signInNav } from "@/content/navigation";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";
import { JamezziMark } from "@/components/layout/jamezzi-mark";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const forcePaperHeader = pathname.startsWith("/academy");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "duration-control ease-primary fixed inset-x-0 top-0 z-40 transition-all",
        scrolled || forcePaperHeader
          ? "border-border bg-paper/90 border-b backdrop-blur-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between",
          scrolled || forcePaperHeader
            ? "py-3 lg:h-[72px] lg:py-0"
            : "py-5 lg:h-[72px] lg:py-0",
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${site.name} — Home`}
        >
          <JamezziMark heightPx={40} className="h-8 lg:h-10" priority />
          <span className="font-display text-ink text-[23px] font-medium tracking-tight lg:text-[28px]">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-nav text-ink duration-control ease-primary bg-paper/45 hover:bg-paper/70 hover:text-indigo rounded-full px-3 py-1.5 backdrop-blur-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={academyNav.href}
            className="text-button duration-control ease-primary bg-indigo hover:bg-indigo-dark ml-3 flex h-10 items-center rounded-[10px] px-4 text-white transition hover:-translate-y-px"
          >
            {academyNav.label}
          </Link>
          <div className="ml-3 flex items-center gap-1">
            <LanguageSwitcher />
            <Link
              href={signInNav.href}
              className="text-nav text-ink duration-control ease-primary bg-paper/45 hover:bg-paper/70 hover:text-indigo rounded-full px-3 py-1.5 backdrop-blur-sm transition-colors"
            >
              {signInNav.label}
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={academyNav.href}
            className="text-button duration-control ease-primary bg-indigo hover:bg-indigo-dark flex min-h-11 items-center rounded-[10px] px-4 text-white transition hover:-translate-y-px"
          >
            {academyNav.label}
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
