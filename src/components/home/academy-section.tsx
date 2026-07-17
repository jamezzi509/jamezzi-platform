import type { ReactNode } from "react";
import NextLink from "next/link";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import {
  CoursesGlyph,
  BooksGlyph,
  EventsGlyph,
} from "@/components/home/academy-glyphs";

function MicIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className="size-4"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className="size-4"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 8a6 6 0 1 1 12 0c0 3 1 5 2 6H4c1-1 2-3 2-6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 20a2 2 0 0 0 4 0" strokeLinecap="round" />
    </svg>
  );
}

const learningPaths = [
  {
    Glyph: CoursesGlyph,
    title: "Online Courses",
    copy: "Self-paced courses with frameworks, workflows, and tools you can apply now.",
    ctaLabel: "Explore Courses",
    href: "/academy/courses",
    preview: (
      <div className="flex items-center gap-4">
        <div className="relative flex aspect-square w-20 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-[linear-gradient(145deg,#1c2140,#4937aa)]">
          <span className="absolute inset-3 rounded-full border border-white/15" />
          <span className="relative text-2xl text-white/90">⌘</span>
        </div>
        <div>
          <p className="text-metadata text-night-muted">
            COURSE IN DEVELOPMENT
          </p>
          <p className="text-body text-night-text mt-1 font-medium">
            Computer &amp; Internet Essentials
          </p>
          <p className="text-metadata text-night-muted mt-2">
            6 modules · Self-paced
          </p>
        </div>
      </div>
    ),
  },
  {
    Glyph: BooksGlyph,
    title: "Books",
    copy: "Practical books that break down complex ideas into clear action.",
    ctaLabel: "Browse Books",
    href: "/academy/books",
    preview: (
      <div className="flex items-center gap-4">
        <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-sm bg-[#f2efe7] p-3 text-[#342b91] shadow-[8px_6px_0_rgba(255,255,255,0.08)]">
          <span className="block text-[17px] leading-[0.95] font-semibold">
            Clarity
            <br />
            Before
            <br />
            Build
          </span>
          <span className="absolute right-3 bottom-3 h-px w-7 bg-[#e87e65]" />
        </div>
        <div>
          <p className="text-metadata text-night-muted">FOR FOUNDERS</p>
          <p className="text-body text-night-text mt-1 font-medium">
            Clarity Before Build
          </p>
          <p className="text-metadata text-night-muted mt-2">
            Practical paperback · Coming soon
          </p>
        </div>
      </div>
    ),
  },
  {
    Glyph: EventsGlyph,
    title: "Events & Seminars",
    copy: "Live sessions and seminars on product, strategy, and growth.",
    ctaLabel: "Get Seminar Updates",
    href: "/academy/seminar-updates",
    preview: (
      <div className="relative min-h-28 overflow-hidden rounded-sm bg-[radial-gradient(circle_at_85%_25%,rgba(232,126,101,0.25),transparent_24%),linear-gradient(145deg,#171926,#101118)] p-4">
        <span className="text-metadata text-night-muted">LIVE SEMINAR</span>
        <p className="text-body text-night-text mt-2 max-w-[15rem] font-medium">
          Product Strategy That Drives Growth
        </p>
        <p className="text-metadata text-night-muted mt-2">
          Dates announced throughout the year
        </p>
        <span className="border-night-border absolute -right-5 -bottom-9 size-24 rounded-full border" />
      </div>
    ),
  },
];

export function AcademySection() {
  return (
    <section className="bg-night text-night-text py-16 lg:py-20">
      <Container>
        <div className="border-night-border flex flex-col gap-6 border-b pb-9 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <p className="text-eyebrow text-night-muted">JAMEZZI ACADEMY</p>
            <h2 className="text-editorial-headline text-night-text mt-2 lg:max-w-md">
              Practical knowledge, built to be used.
            </h2>
          </div>
          <p className="text-body text-night-muted max-w-md lg:pb-1">
            Courses, books, and live experiences that help you solve real
            problems and grow with clarity.
          </p>
        </div>

        <div className="divide-night-border grid gap-10 pt-10 lg:grid-cols-3 lg:gap-0 lg:divide-x">
          {learningPaths.map(
            ({ Glyph, title, copy, ctaLabel, href, preview }) => (
              <div
                key={title}
                className="flex flex-col lg:px-8 lg:first:pl-0 lg:last:pr-0"
              >
                <div className="flex items-center gap-2.5">
                  <span className="size-5 shrink-0">
                    <Glyph />
                  </span>
                  <h3 className="text-feature-headline-sm text-night-text">
                    {title}
                  </h3>
                </div>
                <p className="text-body text-night-muted mt-3 min-h-14">
                  {copy}
                </p>
                <div className="bg-night-raised border-night-border rounded-control mt-5 flex min-h-40 flex-1 flex-col justify-center border p-4">
                  {preview}
                </div>
                <CtaLink
                  href={href}
                  variant="outline-inverse"
                  className="mt-5 w-full justify-center"
                >
                  {ctaLabel}
                </CtaLink>
              </div>
            ),
          )}
        </div>

        <div className="border-night-border text-night-muted mt-10 flex flex-wrap items-center justify-center gap-4 border-t pt-7">
          <IconLink
            href="/contact?type=seminar-or-speaking"
            icon={<MicIcon />}
            label="Invite James to Speak"
          />
          <span aria-hidden="true" className="text-night-border">
            |
          </span>
          <IconLink
            href="/academy/seminar-updates"
            icon={<BellIcon />}
            label="Get Seminar Updates"
          />
        </div>

        <div className="mt-7 flex justify-center">
          <CtaLink href="/academy" variant="inverse">
            Explore Jamezzi Academy
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}

function IconLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <NextLink
      href={href}
      className="text-supporting duration-control ease-primary hover:text-night-text flex items-center gap-2 transition-colors"
    >
      {icon}
      {label}
    </NextLink>
  );
}
