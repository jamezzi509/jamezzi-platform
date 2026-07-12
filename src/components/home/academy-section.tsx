import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import {
  CoursesGlyph,
  BooksGlyph,
  EventsGlyph,
} from "@/components/home/academy-glyphs";

const learningPaths = [
  {
    Glyph: CoursesGlyph,
    title: "Online Courses",
    copy: "Structured learning you can follow at your own pace.",
  },
  {
    Glyph: BooksGlyph,
    title: "Books",
    copy: "Practical guides you can keep and revisit.",
  },
  {
    Glyph: EventsGlyph,
    title: "Events & Seminars",
    copy: "Occasional in-person sessions where James teaches practical technology, digital skills, and entrepreneurship.",
  },
];

export function AcademySection() {
  return (
    <section className="bg-night text-night-text py-20 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="text-eyebrow text-night-muted">JAMEZZI ACADEMY</p>
          <h2 className="text-section-headline text-night-text mt-4">
            Practical knowledge, built to be used.
          </h2>
          <p className="text-intro text-night-muted mt-5">
            Learn directly from James through self-paced courses, practical
            books, and occasional in-person seminars.
          </p>
        </div>

        <ol className="divide-night-border border-night-border mt-16 flex flex-col divide-y border-y">
          {learningPaths.map(({ Glyph, title, copy }) => (
            <li
              key={title}
              className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:gap-8"
            >
              <span className="border-night-border bg-night-raised rounded-control flex size-16 shrink-0 items-center justify-center border p-3">
                <Glyph />
              </span>
              <div className="max-w-xl">
                <h3 className="text-feature-headline text-night-text">
                  {title}
                </h3>
                <p className="text-body text-night-muted mt-2">{copy}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <CtaLink href="/academy" variant="inverse">
            Explore Jamezzi Academy
          </CtaLink>
          <CtaLink href="/academy/seminar-updates" variant="outline-inverse">
            Get Seminar Updates
          </CtaLink>
          <CtaLink
            href="/contact?type=seminar-or-speaking"
            variant="link-inverse"
          >
            Invite James to Speak
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
