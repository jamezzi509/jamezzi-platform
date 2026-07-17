"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { footerGroups, legalLinks } from "@/content/footer";
import { Container } from "@/components/ui/container";
import { JamezziMark } from "@/components/layout/jamezzi-mark";

export function SiteFooter() {
  const pathname = usePathname();
  const isLearningWorkspace =
    pathname.includes("/academy/courses/") && pathname.includes("/learn/");

  if (isLearningWorkspace) return null;

  return (
    <footer className="bg-night text-night-text">
      <Container className="py-10">
        <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">
          <div className="col-span-4 md:col-span-8 lg:col-span-3">
            <div className="flex items-center gap-2.5">
              <JamezziMark heightPx={40} className="h-7 lg:h-8" />
              <p className="font-display text-[21px] font-medium tracking-tight lg:text-[24px]">
                {site.name}
              </p>
            </div>
            <p className="text-body text-night-muted mt-3">
              {site.description}
            </p>
          </div>

          <div className="hidden lg:col-span-1 lg:block" aria-hidden="true" />

          {footerGroups.map((group) => (
            <nav
              key={group.heading}
              aria-label={group.heading}
              className="col-span-2 md:col-span-4 lg:col-span-3"
            >
              <p className="text-metadata text-night-muted">{group.heading}</p>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body text-night-text duration-control ease-primary transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav
            aria-label="Connect"
            className="col-span-4 md:col-span-8 lg:col-span-2"
          >
            <p className="text-metadata text-night-muted">Connect</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-body text-night-text duration-control ease-primary flex items-center gap-2 transition-colors hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    className="size-5"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <rect x="4" y="5" width="16" height="14" rx="2" />
                    <path d="m5 7 7 6 7-6" />
                  </svg>
                  Email
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-night-border mt-6 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-legal text-night-muted">
            © 2026 {site.legalName}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-legal text-night-muted duration-control ease-primary hover:text-night-text transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
