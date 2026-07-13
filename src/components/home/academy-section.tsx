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
      <>
        <p className="text-metadata text-night-muted">Courses in development</p>
        <p className="text-body text-night-text mt-1 font-medium">
          Computer &amp; Internet Essentials
        </p>
      </>
    ),
  },
  {
    Glyph: BooksGlyph,
    title: "Books",
    copy: "Practical books that break down complex ideas into clear action.",
    ctaLabel: "Browse Books",
    href: "/academy/books",
    preview: (
      <>
        <div className="bg-indigo/20 border-night-border h-10 w-7 rounded-sm border" />
        <p className="text-body text-night-text mt-2 font-medium">
          New title coming soon
        </p>
      </>
    ),
  },
  {
    Glyph: EventsGlyph,
    title: "Events & Seminars",
    copy: "Live sessions and seminars on product, strategy, and growth.",
    ctaLabel: "Get Seminar Updates",
    href: "/academy/seminar-updates",
    preview: (
      <p className="text-body text-night-text">
        Occasional sessions announced throughout the year.
      </p>
    ),
  },
];

export function AcademySection() {
  return (
    <section className="bg-night text-night-text py-14 lg:py-16">
      <Container>
        <div className="border-night-border flex flex-col gap-4 border-b pb-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-eyebrow text-night-muted">JAMEZZI ACADEMY</p>
            <h2 className="text-editorial-headline text-night-text mt-2 lg:max-w-md">
              Practical knowledge, built to be used.
            </h2>
          </div>
          <p className="text-body text-night-muted max-w-sm">
            Courses, books, and live experiences that help you solve real
            problems and grow with clarity.
          </p>
        </div>

        <div className="divide-night-border grid gap-8 pt-8 lg:grid-cols-3 lg:gap-0 lg:divide-x">
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
                <p className="text-body text-night-muted mt-2">{copy}</p>
                <div className="bg-night-raised border-night-border rounded-control mt-4 flex flex-1 flex-col justify-center border p-4">
                  {preview}
                </div>
                <CtaLink
                  href={href}
                  variant="outline-inverse"
                  className="mt-4 self-start"
                >
                  {ctaLabel}
                </CtaLink>
              </div>
            ),
          )}
        </div>

        <div className="border-night-border text-night-muted mt-6 flex flex-wrap items-center justify-center gap-4 border-t pt-6">
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

        <div className="mt-6 flex justify-center">
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
