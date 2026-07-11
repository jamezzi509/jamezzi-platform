import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";

const learningPaths = [
  {
    index: "01",
    title: "Online Courses",
    copy: "Structured learning you can follow at your own pace.",
  },
  {
    index: "02",
    title: "Books",
    copy: "Practical guides you can keep and revisit.",
  },
  {
    index: "03",
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
          {learningPaths.map((path) => (
            <li
              key={path.index}
              className="flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="text-metadata text-night-muted">
                {path.index}
              </span>
              <div className="max-w-xl">
                <h3 className="text-feature-headline text-night-text">
                  {path.title}
                </h3>
                <p className="text-body text-night-muted mt-2">{path.copy}</p>
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
