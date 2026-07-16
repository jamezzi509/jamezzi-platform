import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { computerRebuildLessons } from "@/content/computer-rebuild/lessons";
import { computerRebuildModules } from "@/content/computer-rebuild/modules";

export function ComputerCoursePage() {
  return (
    <main className="bg-paper">
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#f8f5f0] pt-24 lg:min-h-[650px] lg:pt-[72px]">
        <div className="absolute inset-y-0 right-0 w-full sm:w-[72%] lg:w-[61%]">
          <Image
            src="/images/academy/courses/computer-internet-essentials.webp"
            alt="An adult learner using a computer with confidence"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 62vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5f0] via-[#f8f5f0]/95 to-[#f8f5f0]/10 sm:via-[#f8f5f0]/85 lg:via-[#f8f5f0]/72" />
        <Container className="relative z-10">
          <div className="max-w-2xl py-14">
            <p className="text-eyebrow text-indigo-dark">
              JAMEZZI ACADEMY · COMPUTERS &amp; THE INTERNET, NO FEAR
            </p>
            <h1 className="text-editorial-headline text-ink mt-5 max-w-4xl">
              Computer &amp; Internet Essentials
            </h1>
            <p className="font-display text-ink mt-5 max-w-3xl text-3xl leading-tight md:text-4xl">
              Concepts before buttons — build real digital confidence.
            </p>
            <p className="text-intro text-muted mt-7 max-w-xl">
              A practical course for complete beginners. No computer required to
              start. Every lesson explains what it is and why it matters before
              showing you where to click.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink href="/academy/courses/computer-internet-essentials/rebuild/start">
                Start Learning <ArrowRightIcon className="size-4" />
              </CtaLink>
              <CtaLink href="#course-path" variant="secondary">
                See the Course Path
              </CtaLink>
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
              You&rsquo;re not behind. Start where you are.
            </h2>
            <p className="text-body text-muted mt-4 max-w-2xl">
              14 modules, from your first day with a computer to full digital
              independence — plus four confidence checkpoints, a final exam,
              and a certificate.
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
                      href={`/academy/courses/computer-internet-essentials/rebuild/${firstLesson.slug}`}
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
              title="Windows and Mac, side by side"
              copy="Steps split by platform only where they genuinely differ, with phone-specific notes for Android and iPhone tasks."
            />
            <ApproachRow
              number="03"
              title="A capstone, exam, and free certificate"
              copy="Finish with a real-world mission in almost every lesson, a comprehensive final exam, and a free Computer & Internet Essentials certificate the moment you pass."
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
            href="/academy/courses/computer-internet-essentials/rebuild/start"
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
