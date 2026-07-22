import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ComingSoon } from "@/components/coming-soon";
import { BookDetail, BookLibrary } from "@/components/academy/book-library";
import { CourseLibrary } from "@/components/academy/course-library";
import {
  CoursePreviewPage,
  hasCoursePreview,
} from "@/components/academy/course-preview-page";
import { ComputerBlockLessonPlayer } from "@/components/academy/computer-block-lesson-player";
import { ComputerCertificatePlayer } from "@/components/academy/computer-certificate-player";
import { ComputerCheckpointPlayer } from "@/components/academy/computer-checkpoint-player";
import { ComputerCoursePage } from "@/components/academy/computer-course-page";
import { ComputerFinalExamPlayer } from "@/components/academy/computer-final-exam-player";
import { ComputerGrowthSummaryPlayer } from "@/components/academy/computer-growth-summary-player";
import { ComputerModuleSimulator } from "@/components/academy/computer-module-simulator";
import { ComputerPlatformOnboarding } from "@/components/academy/computer-platform-onboarding";
import { ComputerReadinessReflectionPlayer } from "@/components/academy/computer-readiness-reflection-player";
import { EnglishCoursePage } from "@/components/academy/english-course-page";
import { EnglishFinalExam } from "@/components/academy/english-final-exam";
import { EnglishLevelCheckpoint } from "@/components/academy/english-level-checkpoint";
import { EnglishLevelOnePage } from "@/components/academy/english-level-one-page";
import { EnglishPlacementQuiz } from "@/components/academy/english-placement-quiz";
import { EnglishWelcomeLesson } from "@/components/academy/english-welcome-lesson";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import {
  ArrowRightIcon,
  BookOpenIcon,
  CalendarIcon,
  GraduationCapIcon,
} from "@/components/ui/icons";
import { academyBooks } from "@/content/books";
import { getComputerRebuildCheckpoint } from "@/content/computer-rebuild/checkpoints";
import { computerRebuildFinalExam } from "@/content/computer-rebuild/final-exam";
import {
  computerRebuildLessons,
  getComputerRebuildLesson,
} from "@/content/computer-rebuild/lessons";
import { getComputerRebuildReadinessReflection } from "@/content/computer-rebuild/readiness-reflection";
import { courses, launchingFirstCourses } from "@/content/courses";
import { titleFromSlug } from "@/lib/format";

/**
 * Modules built as standalone interactive simulators instead of the
 * text/block lesson format -- any lesson slug tagged with one of these
 * moduleIds renders the simulator (public/academy/computer-internet-essentials/
 * module-<n>.html) instead of ComputerBlockLessonPlayer.
 */
const computerSimulatorModules: Record<
  string,
  { moduleNumber: number; title: string }
> = {
  m1: {
    moduleNumber: 1,
    title: "Modil 1 — Ou Gen Plas Ou nan Monn Dijital la",
  },
  m2: { moduleNumber: 2, title: "Modil 2 — Kijan Yon Òdinatè Mache" },
  m3: { moduleNumber: 3, title: "Modil 3 — Kontwole Òdinatè Ou" },
  m4: { moduleNumber: 4, title: "Modil 4 — Fichye ak Dosye" },
  m5: { moduleNumber: 5, title: "Modil 5 — Aplikasyon ak Dokiman" },
  m6: { moduleNumber: 6, title: "Modil 6 — Entènèt ak Wi-Fi" },
  m7: { moduleNumber: 7, title: "Modil 7 — Navigatè ak Konpetans Wèb" },
  m8: { moduleNumber: 8, title: "Modil 8 — Imèl ak Kominikasyon" },
  m9: { moduleNumber: 9, title: "Modil 9 — Cloud ak Backup" },
  m10: { moduleNumber: 10, title: "Modil 10 — Aparèy ak Enprime" },
  m11: { moduleNumber: 11, title: "Modil 11 — Sekirite ak Vi Prive" },
  m12: { moduleNumber: 12, title: "Modil 12 — Achte yon Òdinatè" },
  m13: { moduleNumber: 13, title: "Modil 13 — Rezoud Pwoblèm" },
  m14: { moduleNumber: 14, title: "Modil 14 — Endepandans Dijital" },
};

/**
 * Lessons that exist in the computer-rebuild content model but are never
 * shown to a learner because this course is Windows-only -- Mac/Apple
 * Silicon variant lessons in Modules 3, 4, and 12. Progress-gated screens
 * (checkpoints, the readiness reflection, the final exam, the certificate)
 * must exclude these from their "every lesson complete" requirement, since
 * a Windows-only learner going through the module simulators can never mark
 * them complete -- they were never presented in the first place.
 */
const windowsOnlyExcludedLessonSlugs = new Set([
  "biwo-mac-la",
  "finder-sou-mac",
  "mac-intel-kont-mac-apple-silicon",
  "apple-m1-m2-m3-m4-m5-ak-chip-mseries-fiti",
  "enspeksyon-konple-yon-mac-itilize",
]);
const computerRebuildLessonsForGating = computerRebuildLessons.filter(
  (lesson) => !windowsOnlyExcludedLessonSlugs.has(lesson.slug),
);

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
      title: "Placement Quiz — Practical English",
      description:
        "Answer 15 quick questions to find the right starting point in Practical English for Haitian Creole Speakers.",
    };
  }

  if (
    slug?.[0] === "courses" &&
    slug[1] === "english-for-beginners" &&
    slug[2] === "final-exam"
  ) {
    return {
      title: "Final Exam — Practical English",
      description:
        "Take the comprehensive final assessment across all 18 modules of Practical English for Haitian Creole Speakers.",
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
  const featuredCourses = launchingFirstCourses.map((course) => ({
    course,
    image: `/images/academy/courses/${course.slug}.webp`,
  }));
  return (
    <main className="bg-paper">
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-[#f8f5f0] pt-20 sm:min-h-[620px] sm:pt-24 lg:min-h-[670px] lg:pt-[72px]">
        <div className="absolute inset-y-0 right-0 w-full sm:w-[72%] lg:w-[61%]">
          <Image
            src="/images/academy/academy-hero.webp"
            alt="An educator guiding adult learners through a practical lesson"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 62vw"
            className="object-cover object-[62%_center] sm:object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5f0] via-[#f8f5f0]/95 via-70% to-[#f8f5f0]/35 sm:via-[#f8f5f0]/85 sm:to-[#f8f5f0]/10 lg:via-[#f8f5f0]/72" />
        <Container className="relative z-10">
          <div className="max-w-2xl py-10 sm:py-14">
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
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <PathwayCard
              number="01"
              title="Online Courses"
              copy="Structured lessons and practical workflows you can follow at your own pace."
              href="/academy/courses"
              icon="courses"
            />
            <PathwayCard
              number="02"
              title="Books"
              copy="Useful references in Kreyòl that stay close while you do the work."
              href="/academy/books"
              icon="books"
            />
            <PathwayCard
              number="03"
              title="Events & Seminars"
              copy="Occasional live sessions for learning, questions, and real conversation."
              href="/academy/seminar-updates"
              icon="events"
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
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6 lg:gap-6">
            {academyBooks.map((book, index) => (
              <Link
                key={book.slug}
                href={`/academy/books/${book.slug}`}
                className="group min-w-0"
              >
                <div
                  className="relative w-full overflow-hidden rounded-[8px] shadow-[0_14px_35px_rgba(29,24,46,0.12)]"
                  style={{ aspectRatio: "2 / 3" }}
                >
                  <Image
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                    fill
                    sizes="(max-width: 639px) 44vw, (max-width: 1023px) 29vw, 180px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    priority={index < 3}
                  />
                </div>
                <p className="text-metadata text-muted mt-4">{book.topic}</p>
                <h3 className="text-ink mt-1 line-clamp-3 text-sm leading-snug font-semibold sm:text-base">
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
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featuredCourses.map(({ course, image }, index) => (
              <FeaturedCourseCard
                key={course.slug}
                course={course}
                image={image}
                wide={index === 0}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative min-h-[440px] overflow-hidden bg-[#eeeaff] py-16 sm:min-h-[500px] sm:py-20 lg:flex lg:items-center lg:py-24">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <Image
            src="/images/academy/academy-hero.webp"
            alt="James leading a practical seminar"
            fill
            sizes="(max-width: 1023px) 100vw, 58vw"
            className="object-cover object-[62%_center] lg:object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#eeeaff] via-[#eeeaff]/95 via-70% to-[#eeeaff]/40 sm:to-[#eeeaff]/15 lg:via-[#eeeaff]/88" />
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-indigo-dark">EVENTS & SEMINARS</p>
            <h2 className="text-editorial-headline text-ink mt-4 max-w-3xl">
              Learning becomes different when we share the room.
            </h2>
            <p className="text-intro text-muted mt-6 max-w-xl">
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
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="border-border bg-paper grid overflow-hidden rounded-[24px] border md:grid-cols-[0.72fr_1.28fr]">
            <div className="relative min-h-[320px]">
              <Image
                src="/about/james-alexandre.webp"
                alt="James Alexandre"
                fill
                sizes="(max-width: 767px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="text-eyebrow text-indigo-dark">LEARN FROM JAMES</p>
              <h2 className="text-feature-headline-sm text-ink mt-4">
                Practical. Clear. Built for real life.
              </h2>
              <p className="text-body text-muted mt-4 max-w-xl">
                James Alexandre creates learning experiences that are easier to
                understand, easier to apply, and useful beyond the lesson.
              </p>
              <CtaLink href="/about" variant="link" className="mt-6">
                More About James <ArrowRightIcon className="size-4" />
              </CtaLink>
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
    slug[2] === "final-exam"
  ) {
    return <EnglishFinalExam />;
  }

  if (
    slug[0] === "courses" &&
    slug[1] === "english-for-beginners" &&
    slug[2] === "checkpoint" &&
    slug[3]
  ) {
    const levelNumber = Number(slug[3]);
    if (Number.isInteger(levelNumber) && levelNumber >= 1 && levelNumber <= 4) {
      return <EnglishLevelCheckpoint levelNumber={levelNumber} />;
    }
  }

  if (
    slug[0] === "courses" &&
    slug[1] === "english-for-beginners" &&
    slug[2] === "lessons" &&
    slug[3]
  ) {
    return <EnglishWelcomeLesson lessonSlug={slug[3]} />;
  }

  if (
    slug[0] === "courses" &&
    slug[1] === "english-for-beginners" &&
    slug[2] === "learn"
  ) {
    return <EnglishLevelOnePage />;
  }

  if (
    slug[0] === "courses" &&
    slug[1] === "english-for-beginners" &&
    slug[2] === "level-1"
  ) {
    redirect(
      slug[3]
        ? `/academy/courses/english-for-beginners/lessons/${slug[3]}`
        : "/academy/courses/english-for-beginners/learn",
    );
  }

  if (
    slug[0] === "courses" &&
    slug[1] === "computer-internet-essentials" &&
    slug[2] === "learn" &&
    !slug[3]
  ) {
    return (
      <ComputerPlatformOnboarding
        firstLessonSlug={computerRebuildLessons[0].slug}
        lessons={computerRebuildLessons.map((lesson) => ({
          slug: lesson.slug,
          title: lesson.titleHt,
        }))}
      />
    );
  }

  if (
    slug[0] === "courses" &&
    slug[1] === "computer-internet-essentials" &&
    slug[2] === "learn" &&
    slug[3]
  ) {
    const checkpoint = getComputerRebuildCheckpoint(slug[3]);
    if (checkpoint) {
      return (
        <ComputerCheckpointPlayer
          checkpoint={checkpoint}
          allLessons={computerRebuildLessonsForGating}
        />
      );
    }
    const readinessReflection = getComputerRebuildReadinessReflection(slug[3]);
    if (readinessReflection) {
      return (
        <ComputerReadinessReflectionPlayer
          reflection={readinessReflection}
          allLessons={computerRebuildLessonsForGating}
        />
      );
    }
    if (slug[3] === "final-exam") {
      return (
        <ComputerFinalExamPlayer
          exam={computerRebuildFinalExam}
          allLessons={computerRebuildLessonsForGating}
        />
      );
    }
    if (slug[3] === "certificate") {
      return (
        <ComputerCertificatePlayer
          allLessons={computerRebuildLessonsForGating}
        />
      );
    }
    if (slug[3] === "growth-summary") {
      return <ComputerGrowthSummaryPlayer />;
    }
    const lesson = getComputerRebuildLesson(slug[3]);
    const simulatorModule = lesson
      ? computerSimulatorModules[lesson.moduleId]
      : undefined;
    if (simulatorModule) {
      return (
        <ComputerModuleSimulator
          moduleNumber={simulatorModule.moduleNumber}
          title={simulatorModule.title}
        />
      );
    }
    if (lesson) {
      return (
        <ComputerBlockLessonPlayer
          key={lesson.id}
          lesson={lesson}
          allLessons={computerRebuildLessons}
        />
      );
    }
  }

  if (
    slug[0] === "courses" &&
    slug[1] === "computer-internet-essentials" &&
    slug[2] === "rebuild"
  ) {
    redirect(
      slug[3] && slug[3] !== "start"
        ? `/academy/courses/computer-internet-essentials/learn/${slug[3]}`
        : "/academy/courses/computer-internet-essentials/learn",
    );
  }

  if (
    slug[0] === "courses" &&
    slug[1] === "computer-internet-essentials" &&
    slug[2] === "lessons"
  ) {
    redirect("/academy/courses/computer-internet-essentials/learn");
  }

  if (slug[0] === "courses" && slug[1] === "computer-internet-essentials") {
    return <ComputerCoursePage />;
  }

  if (slug[0] === "courses" && slug[1] === "english-for-beginners") {
    return <EnglishCoursePage />;
  }

  if (slug[0] === "courses" && slug[1] && hasCoursePreview(slug[1])) {
    const course = courses.find((item) => item.slug === slug[1]);
    if (course) return <CoursePreviewPage course={course} />;
  }

  const title = titleFromSlug(slug[slug.length - 1]);
  return <ComingSoon section="Jamezzi Academy" title={title} />;
}

function FeaturedCourseCard({
  course,
  image,
  wide = false,
}: {
  course: (typeof launchingFirstCourses)[number];
  image: string;
  wide?: boolean;
}) {
  return (
    <Link
      href={`/academy/courses/${course.slug}`}
      className={`group border-border bg-paper overflow-hidden rounded-[22px] border ${wide ? "lg:col-span-2 lg:grid lg:grid-cols-[1.08fr_0.92fr]" : ""}`}
    >
      <div
        className={`relative overflow-hidden ${wide ? "min-h-[320px] lg:min-h-[410px]" : "aspect-[16/10]"}`}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes={
            wide
              ? "(max-width: 1023px) 100vw, 55vw"
              : "(max-width: 1023px) 100vw, 50vw"
          }
          className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
        />
      </div>
      <div className="flex flex-col justify-center p-7 lg:p-10">
        <p className="text-metadata text-indigo-dark">
          {course.category} {course.free ? "· Free" : ""}
        </p>
        <h3 className="text-feature-headline-sm text-ink mt-4">
          {course.title}
        </h3>
        <p className="text-body text-muted mt-4">{course.description}</p>
        <span className="text-button text-indigo-dark mt-7 inline-flex items-center gap-2">
          Explore Course <ArrowRightIcon className="size-4" />
        </span>
      </div>
    </Link>
  );
}

function PathwayCard({
  number,
  title,
  copy,
  href,
  icon,
}: {
  number: string;
  title: string;
  copy: string;
  href: string;
  icon: "courses" | "books" | "events";
}) {
  const iconStyles = {
    courses: "bg-[#efedff] text-indigo-dark",
    books: "bg-[#e8f7f0] text-[#08785b]",
    events: "bg-[#fff0eb] text-[#e35b48]",
  };
  const iconContent = {
    courses: <GraduationCapIcon className="size-6" />,
    books: <BookOpenIcon className="size-6" />,
    events: <CalendarIcon className="size-6" />,
  };
  return (
    <Link
      href={href}
      className="border-border group rounded-[18px] border bg-[#fbfaf8] p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(29,24,46,0.07)] lg:p-7"
    >
      <div className="flex items-center justify-between">
        <span
          className={`flex size-12 items-center justify-center rounded-full ${iconStyles[icon]}`}
        >
          {iconContent[icon]}
        </span>
        <span className="text-metadata text-muted/70">{number}</span>
      </div>
      <h2 className="font-display text-ink mt-6 text-[2rem] leading-tight">
        {title}
      </h2>
      <p className="text-body text-muted mt-3 max-w-sm">{copy}</p>
      <span className="text-button text-indigo-dark mt-5 inline-flex items-center gap-2">
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
