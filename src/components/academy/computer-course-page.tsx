import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { CourseProgressBackup } from "@/components/academy/course-progress-backup";
import { PurchaseButton } from "@/components/payments/purchase-button";
import { CourseResumeCard } from "@/components/academy/course-resume-card";
import { computerProgressStorageKey } from "@/components/academy/computer-essentials-lesson-list";
import {
  computerRebuildLessons,
  computerRebuildLessonsForGating,
} from "@/content/computer-rebuild/lessons";
import { computerRebuildModules } from "@/content/computer-rebuild/modules";

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
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PurchaseButton
                productId="course:computer-internet-essentials"
                productKind="course"
                className="text-button bg-indigo hover:bg-indigo-dark inline-flex min-h-11 items-center justify-center rounded-[10px] px-6 text-white transition-colors disabled:opacity-60"
              >
                Buy Course — $97
              </PurchaseButton>
              <CtaLink href="#course-path" variant="secondary">
                See the Course Path
              </CtaLink>
            </div>
            <div className="border-border mt-7 grid max-w-xl grid-cols-3 gap-3 border-y py-4">
              <CourseFact label="Price" value="$97 once" />
              <CourseFact label="Access" value="Lifetime" />
              <CourseFact label="Includes" value="Certificate" />
            </div>
            <p className="text-sm text-muted mt-3">
              A free Jamezzi account is required before checkout so the course
              stays connected to the student.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <CourseResumeCard
          lessons={computerRebuildLessonsForGating.map((lesson) => ({
            slug: lesson.slug,
            title: lesson.titleHt,
          }))}
          progressStorageKey={computerProgressStorageKey}
          lessonBaseHref="/academy/courses/computer-internet-essentials/learn"
          assessmentHref="/academy/courses/computer-internet-essentials/learn/final-exam"
          language="ht"
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
              14 modules, from your first day with a computer to stronger
              digital independence — plus four confidence checkpoints, a final
              exam, and a course-completion certificate.
            </p>
          </div>

          <div className="border-border mt-12 grid border-t lg:grid-cols-2">
            {computerRebuildModules.map((module) => {
              const firstLesson = computerRebuildLessons
                .filter((lesson) => lesson.moduleId === module.id)
                .sort((a, b) => a.order - b.order)[0];

              return (
                <article
                  key={module.id}
                  className="border-border scroll-mt-28 border-b py-9 lg:px-8 lg:odd:border-r lg:odd:pl-0 lg:even:pr-0"
                >
                  <p className="text-eyebrow text-indigo-dark">
                    MODULE {module.order}
                  </p>
                  <h3 className="text-feature-headline-sm text-ink mt-4">
                    {module.titleEn}
                  </h3>
                  <p className="text-body text-muted mt-3">{module.purpose}</p>
                  {firstLesson && (
                    <CtaLink
                      href={`/academy/courses/computer-internet-essentials/learn/${firstLesson.slug}`}
                      variant="link"
                      className="mt-7"
                    >
                      Open Module {module.order}{" "}
                      <ArrowRightIcon className="size-4" />
                    </CtaLink>
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
              title="Windows, hands-on, step by step"
              copy="Every lesson is a real simulator you click through yourself — the exact screens and menus of a Windows computer — with common mistakes built in so you learn to spot them before they cost you."
            />
            <ApproachRow
              number="03"
              title="Real-world missions and a final exam"
              copy="Apply what you learn through practical missions, complete a comprehensive final exam, and generate a course-completion certificate on this device when you pass."
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
          <PurchaseButton
            productId="course:computer-internet-essentials"
            productKind="course"
            className="text-button inline-flex min-h-11 items-center justify-center rounded-[10px] bg-white px-6 text-indigo-dark transition-colors hover:bg-white/90 disabled:opacity-60"
          >
            Buy Course — $97
          </PurchaseButton>
        </Container>
      </section>

      <section className="bg-paper py-16 lg:py-20">
        <Container>
          <CourseProgressBackup course="computer" />
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

function CourseFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-metadata text-muted">{label}</p>
      <p className="text-ink mt-1 text-sm font-semibold sm:text-base">{value}</p>
    </div>
  );
}
