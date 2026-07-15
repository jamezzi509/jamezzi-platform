import type { Metadata } from "next";
import Link from "next/link";
import { ComingSoon } from "@/components/coming-soon";
import { CourseLibrary } from "@/components/academy/course-library";
import { EnglishCoursePage } from "@/components/academy/english-course-page";
import { EnglishLevelOnePage } from "@/components/academy/english-level-one-page";
import { EnglishWelcomeLesson } from "@/components/academy/english-welcome-lesson";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { courses, launchingFirstCourses } from "@/content/courses";
import { titleFromSlug } from "@/lib/format";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course =
    slug?.[0] === "courses" && slug[1]
      ? courses.find((item) => item.slug === slug[1])
      : null;

  if (course) {
    return { title: course.title, description: course.description };
  }

  if (slug?.[0] === "courses" && !slug[1]) {
    return {
      title: "Online Courses",
      description:
        "Explore practical self-paced courses from Jamezzi Academy across foundations, technology, and business.",
    };
  }

  return {
    title: "Academy",
    description:
      "Practical courses, books, and occasional seminars from James Alexandre, designed to help people build useful skills and apply them.",
  };
}

function AcademyHub() {
  return (
    <main className="bg-paper">
      <section className="bg-night text-night-text pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container>
          <div className="max-w-4xl">
            <p className="text-eyebrow text-night-muted">JAMEZZI ACADEMY</p>
            <h1 className="text-editorial-headline text-night-text mt-5 max-w-4xl">
              Real skills. Real progress you can measure.
            </h1>
            <p className="text-intro text-night-muted mt-7 max-w-2xl">
              Learn practical technology, business, communication, and digital
              skills through clear courses, useful books, and occasional live
              teaching.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink href="#courses" variant="inverse">
                Explore Courses
              </CtaLink>
              <CtaLink href="/sign-in" variant="outline-inverse">
                Student Sign In
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="text-eyebrow text-indigo-dark">
                START WITH ENGLISH
              </p>
              <h2 className="text-editorial-headline text-ink mt-4">
                Learn freely. Sign up only when it helps.
              </h2>
              <p className="text-body text-muted mt-5 max-w-md">
                English for Beginners is the Academy’s public entrance: free
                lessons, audio, exercises, and quizzes with no account wall.
              </p>
            </div>

            <div className="border-border border-t">
              <CourseRow course={courses[0]} index={1} />
            </div>
          </div>
        </Container>
      </section>

      <section id="courses" className="bg-paper scroll-mt-24 py-20 lg:py-24">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-eyebrow text-indigo-dark">COURSE LIBRARY</p>
              <h2 className="text-editorial-headline text-ink mt-4">
                Learn a skill you can put to work.
              </h2>
            </div>
            <CtaLink href="/academy/courses" variant="link">
              View All Courses <ArrowRightIcon className="size-4" />
            </CtaLink>
          </div>

          <div className="border-border mt-10 grid border-t md:grid-cols-3">
            {launchingFirstCourses.map((course) => (
              <Link
                key={course.slug}
                href={`/academy/courses/${course.slug}`}
                className="border-border group border-b py-7 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-metadata text-muted">
                      {course.free
                        ? "FREE COURSE"
                        : course.category.toUpperCase()}
                    </p>
                    <h3 className="text-card-title text-ink group-hover:text-indigo-dark mt-3 transition-colors">
                      {course.title}
                    </h3>
                  </div>
                  <span className="text-button text-indigo-dark shrink-0">
                    {course.free ? "Free" : `$${course.price}`}
                  </span>
                </div>
                <p className="text-body text-muted mt-3 max-w-xl">
                  {course.description}
                </p>
                <span className="text-button text-indigo-dark mt-5 inline-flex items-center gap-2">
                  View Course <ArrowRightIcon className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-night text-night-text py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-eyebrow text-night-muted">MORE WAYS TO LEARN</p>
            <h2 className="text-editorial-headline text-night-text mt-4">
              Keep the knowledge, or learn together.
            </h2>
          </div>

          <div className="border-night-border mt-12 grid border-t md:grid-cols-2">
            <LearningPath
              number="01"
              title="Books"
              copy="Practical reference guides you can keep, revisit, and use while doing the work."
              href="/academy/books"
              cta="Browse Books"
            />
            <LearningPath
              number="02"
              title="Events & Seminars"
              copy="Occasional in-person and invited sessions on technology, digital skills, products, and entrepreneurship."
              href="/academy/seminar-updates"
              cta="Get Seminar Updates"
            />
          </div>
        </Container>
      </section>

      <section className="bg-indigo py-16 text-white lg:py-20">
        <Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-eyebrow text-white/70">READY TO BEGIN?</p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl leading-tight md:text-5xl">
              Start learning English. No account required.
            </h2>
          </div>
          <CtaLink
            href="/academy/courses/english-for-beginners"
            variant="inverse"
          >
            Start Learning <ArrowRightIcon className="size-4" />
          </CtaLink>
        </Container>
      </section>
    </main>
  );
}

export default async function AcademyPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  if (!slug?.length) return <AcademyHub />;

  if (slug[0] === "courses" && !slug[1]) return <CourseLibrary />;

  if (
    slug[0] === "courses" &&
    slug[1] === "english-for-beginners" &&
    slug[2] === "level-1" &&
    slug[3] === "hello-and-goodbye"
  ) {
    return <EnglishWelcomeLesson />;
  }

  if (
    slug[0] === "courses" &&
    slug[1] === "english-for-beginners" &&
    slug[2] === "level-1"
  ) {
    return <EnglishLevelOnePage />;
  }

  if (slug[0] === "courses" && slug[1] === "english-for-beginners") {
    return <EnglishCoursePage />;
  }

  const title = titleFromSlug(slug[slug.length - 1]);
  return <ComingSoon section="Jamezzi Academy" title={title} />;
}

function CourseRow({
  course,
  index,
}: {
  course: (typeof courses)[number];
  index: number;
}) {
  return (
    <Link
      href={`/academy/courses/${course.slug}`}
      className="border-border group grid gap-3 border-b py-7 sm:grid-cols-[48px_1fr_auto] sm:items-center sm:gap-5"
    >
      <span className="text-metadata text-indigo-dark">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-card-title text-ink group-hover:text-indigo-dark transition-colors">
          {course.title}
        </h3>
        <p className="text-body text-muted mt-2">{course.description}</p>
      </div>
      <span className="text-button text-indigo-dark">Free →</span>
    </Link>
  );
}

function LearningPath({
  number,
  title,
  copy,
  href,
  cta,
}: {
  number: string;
  title: string;
  copy: string;
  href: string;
  cta: string;
}) {
  return (
    <article className="border-night-border flex flex-col border-b py-9 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
      <p className="text-metadata text-night-muted">{number}</p>
      <h3 className="text-feature-headline-sm text-night-text mt-4">{title}</h3>
      <p className="text-body text-night-muted mt-4 max-w-xl flex-1">{copy}</p>
      <Link
        href={href}
        className="text-button text-night-text mt-7 inline-flex min-h-11 items-center gap-2"
      >
        {cta} <ArrowRightIcon className="size-4" />
      </Link>
    </article>
  );
}
