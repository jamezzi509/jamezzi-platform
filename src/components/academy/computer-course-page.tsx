import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { CourseResumeCard } from "@/components/academy/course-resume-card";
import { computerProgressStorageKey } from "@/lib/course-progress";
import {
  computerCourseModulesV2,
  computerModuleFiveV2,
  computerModuleSixV2,
  computerModuleFourV2,
  computerModuleOneV2,
  computerModuleThreeV2,
  computerModuleTwoV2,
} from "@/content/computer-course-v2";

const availableComputerModuleLessons = [
  computerModuleOneV2,
  computerModuleTwoV2,
  computerModuleThreeV2,
  computerModuleFourV2,
  computerModuleFiveV2,
  computerModuleSixV2,
];

const availableComputerModuleCount = computerCourseModulesV2.filter(
  (module) => module.status === "available",
).length;

export function ComputerCoursePage() {
  return (
    <main className="bg-paper">
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-[#f8f5f0] pt-20 sm:min-h-[620px] sm:pt-24 lg:min-h-[650px] lg:pt-[72px]">
        <div className="absolute inset-y-0 right-0 w-full sm:w-[72%] lg:w-[61%]">
          <Image
            src="/images/academy/courses/computer-internet-essentials.webp"
            alt="An adult learner using a computer with confidence"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 62vw"
            className="object-cover object-[65%_center] sm:object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5f0] via-[#f8f5f0]/95 via-70% to-[#f8f5f0]/35 sm:via-[#f8f5f0]/85 sm:to-[#f8f5f0]/10 lg:via-[#f8f5f0]/72" />
        <Container className="relative z-10">
          <div className="max-w-2xl py-10 sm:py-14">
            <p className="text-eyebrow text-indigo-dark">
              JAMEZZI ACADEMY · BEGINNER DIGITAL SKILLS
            </p>
            <h1 className="text-editorial-headline text-ink mt-5 max-w-4xl">
              Computer &amp; Internet Essentials
            </h1>
            <p className="font-display text-ink mt-5 max-w-3xl text-2xl leading-tight sm:text-3xl md:text-4xl">
              Concepts before buttons — build real digital confidence.
            </p>
            <p className="text-intro text-muted mt-7 max-w-xl">
              A practical course for complete beginners. No computer required to
              start. Every lesson explains what it is and why it matters before
              showing you where to click.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink href="/academy/courses/computer-internet-essentials/learn">
                Start Learning <ArrowRightIcon className="size-4" />
              </CtaLink>
              <CtaLink href="#course-path" variant="secondary">
                See the Course Path
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <CourseResumeCard
          lessons={computerModuleOneV2.map((lesson) => ({
            slug: lesson.slug,
            title: lesson.title,
          }))}
          progressStorageKey={computerProgressStorageKey}
          lessonBaseHref="/academy/courses/computer-internet-essentials/learn"
          assessmentHref="/academy/courses/computer-internet-essentials"
          completionHref="/academy/courses/computer-internet-essentials#course-path"
          completionEyebrow="MODULE 1 COMPLETE"
          completionTitle="You completed Start with Confidence."
          completionAction="Review the course path"
          resetCourse="computer"
          resetLessonSlugs={computerModuleOneV2.map((lesson) => lesson.slug)}
          language="en"
        />
        <CourseResumeCard
          lessons={computerModuleTwoV2.map((lesson) => ({
            slug: lesson.slug,
            title: lesson.title,
          }))}
          progressStorageKey={computerProgressStorageKey}
          lessonBaseHref="/academy/courses/computer-internet-essentials/learn"
          assessmentHref="/academy/courses/computer-internet-essentials"
          completionHref="/academy/courses/computer-internet-essentials#course-path"
          completionEyebrow="MODULE 2 COMPLETE"
          completionTitle="You know the machine in front of you."
          completionAction="Review the course path"
          newEyebrow="MODULE 2 · READY WHEN YOU ARE"
          newTitle="Know the Machine in Front of You"
          newAction="Start Module 2"
          resetCourse="computer"
          resetLessonSlugs={computerModuleTwoV2.map((lesson) => lesson.slug)}
          resetLabel="Module 2"
          language="en"
        />
        <CourseResumeCard
          lessons={computerModuleThreeV2.map((lesson) => ({
            slug: lesson.slug,
            title: lesson.title,
          }))}
          progressStorageKey={computerProgressStorageKey}
          lessonBaseHref="/academy/courses/computer-internet-essentials/learn"
          assessmentHref="/academy/courses/computer-internet-essentials"
          completionHref="/academy/courses/computer-internet-essentials#course-path"
          completionEyebrow="MODULE 3 COMPLETE"
          completionTitle="You can choose a computer from evidence."
          completionAction="Review the course path"
          newEyebrow="MODULE 3 · READY WHEN YOU ARE"
          newTitle="Choose and Buy Your First Computer"
          newAction="Start Module 3"
          resetCourse="computer"
          resetLessonSlugs={computerModuleThreeV2.map((lesson) => lesson.slug)}
          resetLabel="Module 3"
          language="en"
        />
        <CourseResumeCard
          lessons={computerModuleFourV2.map((lesson) => ({
            slug: lesson.slug,
            title: lesson.title,
          }))}
          progressStorageKey={computerProgressStorageKey}
          lessonBaseHref="/academy/courses/computer-internet-essentials/learn"
          assessmentHref="/academy/courses/computer-internet-essentials"
          completionHref="/academy/courses/computer-internet-essentials#course-path"
          completionEyebrow="MODULE 4 COMPLETE"
          completionTitle="You can control the computer deliberately."
          completionAction="Review the course path"
          newEyebrow="MODULE 4 · READY WHEN YOU ARE"
          newTitle="Control the Computer"
          newAction="Start Module 4"
          resetCourse="computer"
          resetLessonSlugs={computerModuleFourV2.map((lesson) => lesson.slug)}
          resetLabel="Module 4"
          language="en"
        />
        <CourseResumeCard
          lessons={computerModuleFiveV2.map((lesson) => ({
            slug: lesson.slug,
            title: lesson.title,
          }))}
          progressStorageKey={computerProgressStorageKey}
          lessonBaseHref="/academy/courses/computer-internet-essentials/learn"
          assessmentHref="/academy/courses/computer-internet-essentials"
          completionHref="/academy/courses/computer-internet-essentials#course-path"
          completionEyebrow="MODULE 5 COMPLETE"
          completionTitle="You can navigate Windows or macOS deliberately."
          completionAction="Review the course path"
          newEyebrow="MODULE 5 · READY WHEN YOU ARE"
          newTitle="Navigate Windows or macOS"
          newAction="Start Module 5"
          resetCourse="computer"
          resetLessonSlugs={computerModuleFiveV2.map((lesson) => lesson.slug)}
          resetLabel="Module 5"
          language="en"
        />
        <CourseResumeCard
          lessons={computerModuleSixV2.map((lesson) => ({
            slug: lesson.slug,
            title: lesson.title,
          }))}
          progressStorageKey={computerProgressStorageKey}
          lessonBaseHref="/academy/courses/computer-internet-essentials/learn"
          assessmentHref="/academy/courses/computer-internet-essentials"
          completionHref="/academy/courses/computer-internet-essentials#course-path"
          completionEyebrow="MODULE 6 COMPLETE"
          completionTitle="You can manage applications safely and deliberately."
          completionAction="Review the course path"
          newEyebrow="MODULE 6 · READY WHEN YOU ARE"
          newTitle="Apps and Settings"
          newAction="Start Module 6"
          resetCourse="computer"
          resetLessonSlugs={computerModuleSixV2.map((lesson) => lesson.slug)}
          resetLabel="Module 6"
          language="en"
        />
      </Container>

      <section
        id="course-path"
        className="scroll-mt-24 bg-white py-20 lg:py-24"
      >
        <Container>
          <div className="max-w-3xl">
            <p className="text-eyebrow text-indigo-dark">YOUR COURSE PATH</p>
            <h2 className="text-editorial-headline text-ink mt-4">
              You&rsquo;re not behind. Start where you are.
            </h2>
            <p className="text-body text-muted mt-4 max-w-2xl">
              A 15-module course architecture built around real computer
              independence. Modules 1–{availableComputerModuleCount} are
              available now; every later module stays unavailable until its
              lessons and assessments meet this standard.
            </p>
          </div>

          <div className="border-border mt-12 grid border-t lg:grid-cols-2">
            {computerCourseModulesV2.map((module) => {
              const firstLesson =
                module.status === "available"
                  ? availableComputerModuleLessons[module.order - 1]?.[0]
                  : null;

              return (
                <article
                  key={module.id}
                  className="border-border scroll-mt-28 border-b py-9 lg:px-8 lg:odd:border-r lg:odd:pl-0 lg:even:pr-0"
                >
                  <p className="text-eyebrow text-indigo-dark">
                    MODULE {module.order}
                  </p>
                  <h3 className="text-feature-headline-sm text-ink mt-4">
                    {module.title}
                  </h3>
                  <p className="text-body text-muted mt-3">{module.purpose}</p>
                  {firstLesson ? (
                    <CtaLink
                      href={`/academy/courses/computer-internet-essentials/learn/${firstLesson.slug}`}
                      variant="link"
                      className="mt-7"
                    >
                      Open Module {module.order}{" "}
                      <ArrowRightIcon className="size-4" />
                    </CtaLink>
                  ) : (
                    <p className="text-metadata text-muted mt-7 font-semibold">
                      In production — unavailable until it meets the new
                      standard
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-eyebrow text-indigo-dark">HOW IT WORKS</p>
            <h2 className="text-editorial-headline text-ink mt-4">
              Not a pile of information.
            </h2>
          </div>
          <div className="border-border border-t">
            <ApproachRow
              number="01"
              title="Concepts before buttons"
              copy="Every lesson answers what it is, why it exists, and when people use it, before showing where to click."
            />
            <ApproachRow
              number="02"
              title="Windows and Mac, side by side"
              copy="The course saves one verified computer path, then splits steps only where Windows and macOS genuinely differ."
            />
            <ApproachRow
              number="03"
              title="Practice before completion"
              copy="A lesson is recorded only after the learner completes its practice confirmation and answers the knowledge check correctly."
            />
          </div>
        </Container>
      </section>

      <section className="bg-indigo py-16 text-white lg:py-20">
        <Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-eyebrow text-white/70">START WHERE YOU ARE</p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl leading-tight md:text-5xl">
              You&rsquo;re not behind. You just haven&rsquo;t started yet.
            </h2>
          </div>
          <CtaLink
            href="/academy/courses/computer-internet-essentials/learn"
            variant="inverse"
          >
            Start Learning <ArrowRightIcon className="size-4" />
          </CtaLink>
        </Container>
      </section>
    </main>
  );
}

function ApproachRow({
  number,
  title,
  copy,
}: {
  number: string;
  title: string;
  copy: string;
}) {
  return (
    <article className="border-border grid gap-3 border-b py-7 sm:grid-cols-[48px_1fr] sm:gap-5">
      <span className="text-metadata text-indigo-dark">{number}</span>
      <div>
        <h3 className="text-card-title text-ink">{title}</h3>
        <p className="text-body text-muted mt-2">{copy}</p>
      </div>
    </article>
  );
}
