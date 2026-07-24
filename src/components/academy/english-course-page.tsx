import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { englishLevels, englishModules } from "@/content/english-course";
import { englishLevelOneLessons } from "@/content/english-level-one";

export function EnglishCoursePage() {
  return (
    <main className="bg-paper">
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-[#f8f5f0] pt-20 sm:min-h-[620px] sm:pt-24 lg:min-h-[650px] lg:pt-[72px]">
        <div className="absolute inset-y-0 right-0 w-full sm:w-[72%] lg:w-[61%]">
          <Image
            src="/images/academy/courses/english-for-beginners.webp"
            alt="Adult learners practicing English together"
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
              JAMEZZI ACADEMY · FREE COURSE
            </p>
            <h1 className="text-editorial-headline text-ink mt-5 max-w-4xl">
              Practical English for Haitian Creole Speakers
            </h1>
            <p className="font-display text-ink mt-5 max-w-3xl text-2xl leading-tight sm:text-3xl md:text-4xl">
              Speak, understand, and use English in real life.
            </p>
            <p className="text-intro text-muted mt-7 max-w-xl">
              Begin with your first words, then progress toward everyday,
              professional, and confident English. The complete course is free,
              and you do not need an account to begin.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink href="/academy/courses/english-for-beginners/learn">
                Start Free Course <ArrowRightIcon className="size-4" />
              </CtaLink>
              <CtaLink href="#course-path" variant="secondary">
                See the Course Path
              </CtaLink>
            </div>
            <div className="border-border mt-7 grid max-w-xl grid-cols-3 gap-3 border-y py-4">
              <CourseFact label="Price" value="Free" />
              <CourseFact label="Lessons" value="151" />
              <CourseFact label="Account" value="Not required" />
            </div>
          </div>
        </Container>
      </section>

      <section
        id="course-path"
        className="scroll-mt-24 bg-white py-20 lg:py-24"
      >
        <Container>
          <div className="max-w-3xl">
            <p className="text-eyebrow text-indigo-dark">YOUR COURSE PATH</p>
            <h2 className="text-editorial-headline text-ink mt-4">
              Start simple. Build toward real confidence.
            </h2>
            <p className="text-body text-muted mt-4 max-w-2xl">
              Four achievable levels. All 18 modules and 151 lessons are open.
            </p>
          </div>

          <div className="border-border mt-12 grid border-t lg:grid-cols-2">
            {englishLevels.map((level) => {
              const levelModules = englishModules.filter((module) =>
                level.moduleNumbers.includes(module.number),
              );
              const firstLesson = englishLevelOneLessons.find(
                (lesson) => lesson.moduleNumber === level.moduleNumbers[0],
              );

              return (
                <article
                  key={level.number}
                  className="border-border scroll-mt-28 border-b py-9 lg:px-8 lg:odd:border-r lg:odd:pl-0 lg:even:pr-0"
                >
                  <p className="text-eyebrow text-indigo-dark">
                    LEVEL {level.number}
                  </p>
                  <h3 className="text-feature-headline-sm text-ink mt-4">
                    {level.title}
                  </h3>
                  <p className="text-body text-muted mt-3">{level.promise}</p>
                  <p className="text-metadata text-muted mt-4">
                    {levelModules.map((module) => module.title).join(" · ")}
                  </p>
                  {firstLesson && (
                    <CtaLink
                      href={`/academy/courses/english-for-beginners/learn#level-${level.number}`}
                      variant="link"
                      className="mt-7"
                    >
                      Explore Level {level.number}{" "}
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
            <p className="text-eyebrow text-indigo-dark">YOUR CHOICE</p>
            <h2 className="text-editorial-headline text-ink mt-4">
              No account wall.
            </h2>
          </div>
          <div className="border-border border-t">
            <AccessRow
              number="01"
              title="Learn as a guest"
              copy="Open every free lesson, listen, practice, take quizzes, and finish the course without signing up. Progress is saved locally on your device."
            />
            <AccessRow
              number="02"
              title="Create a free account when it helps"
              copy="Account-based progress syncing is planned. For now, guest progress stays in this browser on this device."
            />
            <AccessRow
              number="03"
              title="Complete the final assessment"
              copy="The final exam is free. After passing, you can print a device-issued completion record. Public certificate verification will come later with student accounts."
            />
          </div>
        </Container>
      </section>

      <section className="bg-indigo py-16 text-white lg:py-20">
        <Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-eyebrow text-white/70">START WHERE YOU ARE</p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl leading-tight md:text-5xl">
              Start learning practical English today.
            </h2>
          </div>
          <CtaLink
            href="/academy/courses/english-for-beginners/learn"
            variant="inverse"
          >
            Start Learning <ArrowRightIcon className="size-4" />
          </CtaLink>
        </Container>
      </section>
    </main>
  );
}

function AccessRow({
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
