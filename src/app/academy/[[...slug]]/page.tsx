import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ComingSoon } from "@/components/coming-soon";
import { BookDetail, BookLibrary } from "@/components/academy/book-library";
import { CourseLibrary } from "@/components/academy/course-library";
import { EnglishCoursePage } from "@/components/academy/english-course-page";
import { EnglishLevelOnePage } from "@/components/academy/english-level-one-page";
import { EnglishPlacementQuiz } from "@/components/academy/english-placement-quiz";
import { EnglishWelcomeLesson } from "@/components/academy/english-welcome-lesson";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { academyBooks } from "@/content/books";
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
  const book =
    slug?.[0] === "books" && slug[1]
      ? academyBooks.find((item) => item.slug === slug[1])
      : null;

  if (book) {
    return {
      title: book.title,
      description: `${book.title}, a practical ${book.language} book from Jamezzi Academy.`,
    };
  }

  if (slug?.[0] === "books" && !slug[1]) {
    return {
      title: "Books",
      description:
        "Explore practical Jamezzi books in Kreyòl about technology, business, content, and digital skills.",
    };
  }

  if (course) {
    return { title: course.title, description: course.description };
  }

  if (
    slug?.[0] === "courses" &&
    slug[1] === "english-for-beginners" &&
    slug[2] === "placement"
  ) {
    return {
      title: "Placement Quiz — English for Beginners",
      description:
        "Answer 15 quick questions so we know exactly where to start you in English for Beginners.",
    };
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
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <div className="relative z-10 py-5 lg:py-12">
              <p className="text-eyebrow text-indigo-dark">JAMEZZI ACADEMY</p>
              <h1 className="text-editorial-headline text-ink mt-5 max-w-3xl">
                Practical knowledge, built to be used.
              </h1>
              <p className="text-intro text-muted mt-6 max-w-xl">
                Courses, books, and live learning that turn useful ideas into
                skills you can apply at work, in business, and in everyday life.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink href="#courses">Explore Courses</CtaLink>
                <CtaLink href="/academy/books" variant="secondary">
                  Browse Books
                </CtaLink>
              </div>
            </div>
            <div className="relative min-h-[390px] overflow-hidden rounded-[28px] bg-[#ebe7ff] sm:min-h-[500px] lg:min-h-[600px]">
              <Image
                src="/images/academy/academy-hero.webp"
                alt="An educator guiding adult learners through a practical lesson"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover object-center"
              />
              <div className="from-indigo-dark/15 absolute inset-0 bg-gradient-to-t via-transparent to-white/10" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/70 bg-white/85 px-4 py-2 backdrop-blur-sm">
                <p className="text-metadata text-ink">
                  Learn · Practice · Apply
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <PathwayCard
              number="01"
              title="Online Courses"
              copy="Structured lessons and practical workflows you can follow at your own pace."
              href="/academy/courses"
            />
            <PathwayCard
              number="02"
              title="Books"
              copy="Useful references in Kreyòl that stay close while you do the work."
              href="/academy/books"
            />
            <PathwayCard
              number="03"
              title="Events & Seminars"
              copy="Occasional live sessions for learning, questions, and real conversation."
              href="/academy/seminar-updates"
            />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="BOOKS"
            title="Read it. Keep it. Put it to work."
            copy="Practical books in Kreyòl for technology, business, content, and modern digital skills."
            href="/academy/books"
            cta="Browse All Books"
          />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {academyBooks.map((book, index) => (
              <Link
                key={book.slug}
                href={`/academy/books/${book.slug}`}
                className="group"
              >
                <div
                  className="border-border relative w-full overflow-hidden rounded-[14px] border bg-white p-2 shadow-[0_14px_35px_rgba(29,24,46,0.08)]"
                  style={{ aspectRatio: "2 / 3" }}
                >
                  <Image
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                    fill
                    sizes="(max-width: 639px) 44vw, (max-width: 1023px) 29vw, 180px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                    priority={index < 3}
                  />
                </div>
                <p className="text-metadata text-muted mt-4">{book.topic}</p>
                <h3 className="text-ink mt-1 text-base leading-snug font-semibold">
                  {book.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="courses" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="ONLINE COURSES"
            title="Build skills with a clear path."
            copy="Learn through focused courses designed around practical outcomes—not information for its own sake."
            href="/academy/courses"
            cta="Explore All Courses"
          />
          <div className="border-border mt-12 grid border-t md:grid-cols-3">
            {launchingFirstCourses.map((course, index) => (
              <Link
                key={course.slug}
                href={`/academy/courses/${course.slug}`}
                className="border-border group border-b py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <p className="text-metadata text-indigo-dark">
                  {String(index + 1).padStart(2, "0")} · {course.category}
                </p>
                <h3 className="text-card-title text-ink group-hover:text-indigo-dark mt-5 transition-colors">
                  {course.title}
                </h3>
                <p className="text-body text-muted mt-4">
                  {course.description}
                </p>
                <span className="text-button text-indigo-dark mt-6 inline-flex items-center gap-2">
                  View Course <ArrowRightIcon className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#eeeaff] py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-eyebrow text-indigo-dark">EVENTS & SEMINARS</p>
              <h2 className="text-editorial-headline text-ink mt-4 max-w-3xl">
                Learning becomes different when we share the room.
              </h2>
            </div>
            <div>
              <p className="text-intro text-muted">
                James teaches occasional sessions in Haiti and accepts selected
                speaking invitations throughout the year.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CtaLink href="/academy/seminar-updates">
                  Get Seminar Updates
                </CtaLink>
                <CtaLink href="/contact" variant="secondary">
                  Invite James to Speak
                </CtaLink>
              </div>
            </div>
          </div>
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

  if (slug[0] === "books" && !slug[1]) return <BookLibrary />;

  if (slug[0] === "books" && slug[1]) {
    const book = academyBooks.find((item) => item.slug === slug[1]);
    if (book) return <BookDetail book={book} />;
  }

  if (
    slug[0] === "courses" &&
    slug[1] === "english-for-beginners" &&
    slug[2] === "placement"
  ) {
    return <EnglishPlacementQuiz />;
  }

  if (
    slug[0] === "courses" &&
    slug[1] === "english-for-beginners" &&
    slug[2] === "level-1" &&
    slug[3]
  ) {
    return <EnglishWelcomeLesson lessonSlug={slug[3]} />;
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

function PathwayCard({
  number,
  title,
  copy,
  href,
}: {
  number: string;
  title: string;
  copy: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="border-border group bg-paper rounded-[20px] border p-7 transition-transform duration-300 hover:-translate-y-1 lg:p-9"
    >
      <p className="text-metadata text-indigo-dark">{number}</p>
      <h2 className="text-card-title text-ink mt-5">{title}</h2>
      <p className="text-body text-muted mt-3">{copy}</p>
      <span className="text-button text-indigo-dark mt-6 inline-flex items-center gap-2">
        Explore <ArrowRightIcon className="size-4" />
      </span>
    </Link>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  href,
  cta,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="text-eyebrow text-indigo-dark">{eyebrow}</p>
        <h2 className="text-editorial-headline text-ink mt-4">{title}</h2>
        <p className="text-intro text-muted mt-5 max-w-2xl">{copy}</p>
      </div>
      <CtaLink href={href} variant="link">
        {cta} <ArrowRightIcon className="size-4" />
      </CtaLink>
    </div>
  );
}
