import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { CourseProgressBackup } from "@/components/academy/course-progress-backup";
import { PurchaseButton } from "@/components/payments/purchase-button";
import { CourseResumeCard } from "@/components/academy/course-resume-card";
import { dominateDigitalLessons } from "@/content/dominate-digital/lessons";
import { dominateDigitalModules } from "@/content/dominate-digital/modules";

export const dominateDigitalProgressStorageKey =
  "jamezzi:digital-marketing-ai:completed";

const learnBase = "/academy/courses/digital-marketing-ai/learn";

export function DominateDigitalCoursePage() {
  const firstLesson = dominateDigitalLessons[0];

  return (
    <main className="bg-paper">
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-[#f8f5f0] pt-20 sm:min-h-[620px] sm:pt-24 lg:min-h-[650px] lg:pt-[72px]">
        <div className="absolute inset-y-0 right-0 w-full sm:w-[72%] lg:w-[61%]">
          <Image
            src="/images/academy/courses/digital-marketing-ai.webp"
            alt="A small business owner planning digital marketing on a laptop"
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
              JAMEZZI ACADEMY · MARKETING &amp; AI
            </p>
            <h1 className="text-editorial-headline text-ink mt-5 max-w-4xl">
              Digital Marketing &amp; AI
            </h1>
            <p className="font-display text-ink mt-5 max-w-3xl text-2xl leading-tight sm:text-3xl md:text-4xl">
              Marketing &amp; AI for real businesses.
            </p>
            <p className="text-intro text-muted mt-7 max-w-xl">
              Build a practical marketing system using customer research,
              useful content, and modern AI workflows. All 20 modules are
              ready now, from foundations to a full capstone project.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PurchaseButton
                productId="course:digital-marketing-ai"
                productKind="course"
                className="text-button bg-indigo hover:bg-indigo-dark inline-flex min-h-11 items-center justify-center rounded-[10px] px-6 text-white transition-colors disabled:opacity-60"
              >
                Buy Course — $127
              </PurchaseButton>
              <CtaLink href="#course-path" variant="secondary">
                See the Course Path
              </CtaLink>
            </div>
            <div className="border-border mt-7 grid max-w-xl grid-cols-3 gap-3 border-y py-4">
              <CourseFact label="Price" value="$127 once" />
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
          lessons={dominateDigitalLessons.map((lesson) => ({
            slug: lesson.slug,
            title: lesson.titleHt,
          }))}
          progressStorageKey={dominateDigitalProgressStorageKey}
          lessonBaseHref={learnBase}
          assessmentHref={`${learnBase}/final-exam`}
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
              20 modules, from foundations to a full capstone.
            </h2>
            <p className="text-body text-muted mt-4 max-w-2xl">
              Every module is ready now, in order, ending with a capstone
              project that pulls everything together for your own business.
            </p>
          </div>

          <div className="border-border mt-12 grid border-t lg:grid-cols-2">
            {dominateDigitalModules.map((module) => {
              const firstModuleLesson = dominateDigitalLessons
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
                  <p className="text-body text-muted mt-3">
                    {module.purpose}
                  </p>
                  {firstModuleLesson ? (
                    <CtaLink
                      href={`${learnBase}/${firstModuleLesson.slug}`}
                      variant="link"
                      className="mt-7"
                    >
                      Open Module {module.order}{" "}
                      <ArrowRightIcon className="size-4" />
                    </CtaLink>
                  ) : (
                    <p className="text-metadata text-muted mt-7">
                      Coming soon
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
              title="Concepts before tactics"
              copy="Every lesson explains what it is and why it matters before it asks you to do anything."
            />
            <ApproachRow
              number="02"
              title="Real, hands-on lessons"
              copy="Each lesson is an interactive simulator with a quiz, a real exercise, and a ready-to-use AI prompt — not a wall of text."
            />
            <ApproachRow
              number="03"
              title="Built for your own business"
              copy="Every assignment is a real task you do for your own business or client work, with a stamp in your Learning Passport when you finish."
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
            productId="course:digital-marketing-ai"
            productKind="course"
            className="text-button inline-flex min-h-11 items-center justify-center rounded-[10px] bg-white px-6 text-indigo-dark transition-colors hover:bg-white/90 disabled:opacity-60"
          >
            Buy Course — $127
          </PurchaseButton>
        </Container>
      </section>

      <section className="bg-paper py-16 lg:py-20">
        <Container>
          <CourseProgressBackup course="digitalMarketing" />
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
