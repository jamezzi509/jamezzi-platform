"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav, academyNav, signInNav } from "@/content/navigation";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

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
        scrolled
          ? "border-border bg-paper/90 border-b backdrop-blur-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <Link
          href="/"
          className="text-nav text-ink font-semibold"
          aria-label={`${site.name} — Home`}
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-nav text-ink duration-control ease-primary hover:text-indigo transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={academyNav.href}
            className="rounded-control border-indigo/30 bg-indigo-light text-nav text-indigo-dark duration-control ease-primary hover:border-indigo border px-3 py-1.5 font-semibold transition-colors"
          >
            {academyNav.label}
          </Link>
          <LanguageSwitcher />
          <Link
            href={signInNav.href}
            className="text-nav text-ink duration-control ease-primary hover:text-indigo transition-colors"
          >
            {signInNav.label}
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={academyNav.href}
            className="text-nav text-indigo-dark font-semibold"
          >
            {academyNav.label}
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
