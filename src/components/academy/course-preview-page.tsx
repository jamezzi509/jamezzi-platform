import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { CourseSummary } from "@/content/courses";

const previews = {
  "digital-marketing-ai": {
    image: "/images/academy/courses/digital-marketing-ai.webp",
    promise:
      "Create a clearer marketing system by connecting customer insight, useful content, and practical AI workflows.",
    outcomes: [
      "Understand who you are trying to reach and what they need",
      "Plan useful content around a clear business goal",
      "Use AI to support research and execution without losing judgment",
    ],
  },
} as const;

export function hasCoursePreview(slug: string): slug is keyof typeof previews {
  return slug in previews;
}

export function CoursePreviewPage({ course }: { course: CourseSummary }) {
  if (!hasCoursePreview(course.slug)) return null;
  const preview = previews[course.slug];
  return (
    <main className="bg-paper">
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#f8f5f0] pt-24 lg:min-h-[650px] lg:pt-[72px]">
        <div className="absolute inset-y-0 right-0 w-full sm:w-[72%] lg:w-[61%]">
          <Image
            src={preview.image}
            alt=""
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 62vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5f0] via-[#f8f5f0]/95 to-[#f8f5f0]/10 sm:via-[#f8f5f0]/86 lg:via-[#f8f5f0]/72" />
        <Container className="relative z-10">
          <div className="max-w-2xl py-14">
            <p className="text-eyebrow text-indigo-dark">
              JAMEZZI ACADEMY · {course.category}
            </p>
            <h1 className="text-editorial-headline text-ink mt-5">
              {course.title}
            </h1>
            <p className="text-intro text-muted mt-6 max-w-xl">
              {preview.promise}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/contact">Get Course Updates</CtaLink>
              <CtaLink href="/academy/courses" variant="secondary">
                All Courses
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-eyebrow text-indigo-dark">WHAT YOU WILL BUILD</p>
            <h2 className="text-feature-headline-sm text-ink mt-4">
              A practical foundation, not a pile of information.
            </h2>
          </div>
          <ol className="border-border border-t">
            {preview.outcomes.map((outcome, i) => (
              <li
                key={outcome}
                className="border-border grid grid-cols-[48px_1fr] gap-5 border-b py-7"
              >
                <span className="text-metadata text-indigo-dark">0{i + 1}</span>
                <p className="text-card-title text-ink">{outcome}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="bg-[#eeeaff] py-14">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-eyebrow text-indigo-dark">IN DEVELOPMENT</p>
            <p className="text-body text-muted mt-2">
              We will publish the complete course structure and release details
              when they are ready.
            </p>
          </div>
          <Link
            href="/contact"
            className="text-button text-indigo-dark inline-flex items-center gap-2"
          >
            Ask about this course <ArrowRightIcon className="size-4" />
          </Link>
        </Container>
      </section>
    </main>
  );
}
