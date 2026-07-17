import Link from "next/link";
import { EnglishLevelOneLessons } from "@/components/academy/english-level-one-lessons";
import { Container } from "@/components/ui/container";
import { CourseResumeCard } from "@/components/academy/course-resume-card";
import { englishProgressStorageKey } from "@/components/academy/english-level-one-lessons";
import { englishLevels } from "@/content/english-course";
import { englishLevelOneLessons } from "@/content/english-level-one";

export function EnglishLevelOnePage() {
  return (
    <main className="bg-paper pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container>
        <nav aria-label="Breadcrumb" className="text-metadata text-muted">
          <Link href="/academy" className="hover:text-indigo-dark">
            Academy
          </Link>
          <span aria-hidden="true"> / </span>
          <Link
            href="/academy/courses/english-for-beginners"
            className="hover:text-indigo-dark"
          >
            Practical English
          </Link>
          <span aria-hidden="true"> / Kou</span>
        </nav>

        <header className="mt-10 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-24">
          <div>
            <p className="text-eyebrow text-indigo-dark">KOU KONPLÈ · GRATIS</p>
            <h1 className="text-editorial-headline text-ink mt-4">
              Chemen Aprantisaj Anglè Ou
            </h1>
            <p className="text-intro text-muted mt-6 max-w-2xl">
              Kòmanse ak premye fraz itil ou epi avanse rive nan yon Anglè
              pratik ak plis konfyans atravè kat nivo klè.
            </p>
          </div>
          <div className="border-border border-y py-6">
            <p className="text-body text-ink">
              Tout 18 modil ak 151 leson disponib. Kòmanse nan premye leson an
              oswa itilize tès plasman an pou jwenn bon modil la.
            </p>
            <Link
              href="/academy/courses/english-for-beginners/placement"
              className="text-button text-indigo-dark mt-5 inline-flex items-center gap-2"
            >
              Ou deja konnen yon ti Anglè? Fè tès plasman an →
            </Link>
          </div>
        </header>

        <CourseResumeCard
          lessons={englishLevelOneLessons.map((lesson) => ({
            slug: lesson.slug,
            title: lesson.title,
          }))}
          progressStorageKey={englishProgressStorageKey}
          lessonBaseHref="/academy/courses/english-for-beginners/lessons"
          assessmentHref="/academy/courses/english-for-beginners/final-exam"
        />

        <div className="mt-16 space-y-24">
          {englishLevels.map((level) => (
            <section
              id={`level-${level.number}`}
              key={level.number}
              className="grid scroll-mt-28 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24"
            >
              <div>
                <p className="text-eyebrow text-indigo-dark">
                  NIVO {level.number}
                </p>
                <h2 className="font-display text-ink mt-4 text-4xl leading-tight md:text-5xl">
                  {level.title}
                </h2>
                <p className="text-body text-muted mt-5">{level.promise}</p>
              </div>
              <EnglishLevelOneLessons
                moduleNumbers={level.moduleNumbers}
                levelNumber={level.number}
                showFinalExam={level.number === englishLevels.length}
              />
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
