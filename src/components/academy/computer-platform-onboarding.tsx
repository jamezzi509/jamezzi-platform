"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRightIcon,
  LaptopIcon,
  SparklesIcon,
} from "@/components/ui/icons";
import { computerRebuildSkillsIntake } from "@/content/computer-rebuild/skills-intake";
import {
  useComputerPlatform,
  type PreferredPlatform,
} from "@/lib/use-computer-platform";
import { cn } from "@/lib/cn";
import { computerProgressStorageKey } from "@/components/academy/computer-essentials-lesson-list";

export const computerSkillsIntakeStorageKey =
  "jamezzi:computer:essentials:skills-intake";

type Step =
  | "loading"
  | "returning"
  | "welcome"
  | "choose"
  | "unsure"
  | "confirm"
  | "skills";

export function ComputerPlatformOnboarding({
  firstLessonSlug,
  lessons,
}: {
  firstLessonSlug: string;
  lessons: { slug: string; title: string }[];
}) {
  const { platform, setPlatform, loaded } = useComputerPlatform();
  const initialized = useRef(false);
  const [step, setStep] = useState<Step>("loading");
  const [chosen, setChosen] = useState<PreferredPlatform | null>(platform);
  const [completed, setCompleted] = useState<string[]>([]);
  const [ratings, setRatings] = useState<(number | null)[]>(() =>
    computerRebuildSkillsIntake.competencies.map(() => null),
  );

  useEffect(() => {
    if (!loaded || initialized.current) return;
    initialized.current = true;
    let saved: string[] = [];
    try {
      const raw = window.localStorage.getItem(computerProgressStorageKey);
      if (raw) saved = JSON.parse(raw) as string[];
    } catch {
      // Start onboarding normally when storage is unavailable.
    }
    setCompleted(saved);
    setChosen(platform);
    // Choosing a platform is enough to prove onboarding was completed. A
    // learner who skipped the optional intake should not be sent through the
    // welcome flow again on the next visit.
    setStep(platform ? "returning" : "welcome");
  }, [loaded, platform]);

  const completedSet = new Set(completed);
  const nextLesson = lessons.find((lesson) => !completedSet.has(lesson.slug));
  const completedCount = lessons.filter((lesson) =>
    completedSet.has(lesson.slug),
  ).length;

  function choose(next: PreferredPlatform) {
    setChosen(next);
    setPlatform(next);
    setStep("skills");
  }

  function setRating(index: number, value: number) {
    setRatings((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }

  function saveIntakeIfRated() {
    if (ratings.every((r) => r === null)) return;
    try {
      // Never overwrite an existing intake: it's a one-time "day one"
      // baseline, and a later revisit to onboarding (e.g. to switch
      // Windows/Mac preference mid-course) must not clobber it with
      // today's more-experienced ratings.
      if (window.localStorage.getItem(computerSkillsIntakeStorageKey)) return;
      window.localStorage.setItem(
        computerSkillsIntakeStorageKey,
        JSON.stringify({ ratings, savedAt: new Date().toISOString() }),
      );
    } catch {
      // Intake stays unrecorded if storage is blocked — the growth summary
      // just falls back to showing current levels with no comparison.
    }
  }

  return (
    <main className="bg-white pt-[72px]">
      <div className="mx-auto max-w-[620px] px-5 py-16">
        {step === "loading" && (
          <p className="text-muted text-sm" role="status">
            N ap prepare chemen aprantisaj ou…
          </p>
        )}

        {step === "returning" && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">BYENVENI ANKÒ</p>
            <h1 className="font-fraunces text-ink mb-3 text-[30px] leading-[1.15] font-semibold italic">
              {nextLesson
                ? "Kontinye kote ou te rete a."
                : "Ou fini tout leson yo."}
            </h1>
            <p className="text-muted mb-2 text-[15.5px] leading-[1.6]">
              {completedCount} sou {lessons.length} leson fini
            </p>
            {nextLesson && (
              <p className="text-ink mb-7 text-[17px] font-semibold">
                Pwochen leson: {nextLesson.title}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={
                  nextLesson
                    ? `/academy/courses/computer-internet-essentials/learn/${nextLesson.slug}`
                    : "/academy/courses/computer-internet-essentials/learn/final-exam"
                }
                className="bg-indigo inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
              >
                {nextLesson ? "Kontinye aprann" : "Pran evalyasyon final la"}
                <ArrowRightIcon className="size-4" />
              </Link>
              <button
                type="button"
                onClick={() => setStep("choose")}
                className="text-indigo-dark min-h-11 text-sm font-semibold"
              >
                Chanje Windows/Mac
              </button>
            </div>
          </div>
        )}

        {step === "welcome" && (
          <div>
            <div className="bg-indigo-light text-indigo-dark mb-6 inline-flex size-14 items-center justify-center rounded-full">
              <LaptopIcon className="size-6" />
            </div>
            <h1 className="font-fraunces text-ink mb-3 text-[30px] leading-[1.15] font-semibold italic">
              Ou pa pral kraze anyen.
            </h1>
            <p className="text-muted mb-3 text-[15.5px] leading-[1.6]">
              Kou sa a pral ede w konprann kijan òdinatè ak entènèt la reyèlman
              fonksyone, itilize pwòp òdinatè ou ak konfyans, pwoteje tèt ou sou
              entènèt, òganize fichye ou, kominike klèman, epi rezoud pwoblèm ki
              rive nan wout la.
            </p>
            <p className="text-muted mb-8 text-[15.5px] leading-[1.6]">
              Ou pa pral aprann tout bagay sou òdinatè. Ou pral aprann sa ou
              bezwen pou ou sispann santi w pèdi, yon ti aksyon nan yon fwa. Yon
              ekran ou pa rekonèt se pa yon òdinatè domaje — erè isit se yon
              pati nan aprantisaj la, se pa yon bagay pou ou pè.
            </p>
            <button
              type="button"
              onClick={() => setStep("choose")}
              className="bg-indigo inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
            >
              Kontinye <ArrowRightIcon className="size-4" />
            </button>
          </div>
        )}

        {step === "choose" && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">
              CHWAZI CHEMEN APRANTISAJ OU
            </p>
            <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
              Ki òdinatè ou pral itilize pi plis?
            </h1>
            <p className="text-muted mb-7 text-[15px] leading-[1.6]">
              Pifò leson mache menm jan toupatou. Lè etap yo reyèlman diferan, n
              ap montre w vèsyon pou òdinatè pa ou. Ou ka chanje sa nenpòt lè
              nan meni kou a.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <PlatformCard
                label="Windows"
                description="Start menu, taskbar, File Explorer"
                onClick={() => choose("windows")}
              />
              <PlatformCard
                label="Mac"
                description="Menu bar, Dock, Finder"
                onClick={() => choose("mac")}
              />
            </div>
            <button
              type="button"
              onClick={() => setStep("unsure")}
              className="text-indigo-dark mt-5 min-h-11 text-sm font-semibold"
            >
              Mwen pa sèten kilès mwen genyen →
            </button>
          </div>
        )}

        {step === "unsure" && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">
              ANNOU FIGIRE SA A
            </p>
            <h1 className="font-fraunces text-ink mb-5 text-[26px] leading-[1.2] font-semibold italic">
              Gade pwòp ekran ou pou yon moman.
            </h1>
            <div className="mb-4 grid gap-2.5">
              <div className="border-border rounded-xl border bg-[#FCFCFE] px-4.5 py-4">
                <p className="text-ink mb-1 text-[14.5px] font-bold">
                  Yon ba rete nan pati anba ekran an, epi nan kwen anba agoch la
                  gen yon bouton ou ka klike pou louvri yon meni pwogram.
                </p>
                <button
                  type="button"
                  onClick={() => choose("windows")}
                  className="text-indigo-dark mt-1.5 text-[13.5px] font-semibold"
                >
                  Sa sanble ak òdinatè mwen → Windows
                </button>
              </div>
              <div className="border-border rounded-xl border bg-[#FCFCFE] px-4.5 py-4">
                <p className="text-ink mb-1 text-[14.5px] font-bold">
                  Yon ti ba fen ak mo tankou &ldquo;File, Edit, View&rdquo; rete
                  toupatou nan tèt ekran an, kèlkeswa sa ki louvri, epi yon
                  ranje ikòn pwogram rete anba oswa sou kote ekran an.
                </p>
                <button
                  type="button"
                  onClick={() => choose("mac")}
                  className="text-indigo-dark mt-1.5 text-[13.5px] font-semibold"
                >
                  Sa sanble ak òdinatè mwen → Mac
                </button>
              </div>
            </div>
            <p className="text-muted text-[13px]">
              Ou toujou pa sèten? Chwazi youn kanmenm — ou ka chanje nenpòt lè
              nan meni kou a, epi anyen ou fin fè pa pèdi.
            </p>
            <button
              type="button"
              onClick={() => setStep("choose")}
              className="text-indigo-dark mt-4 min-h-11 text-sm font-semibold"
            >
              ← Tounen
            </button>
          </div>
        )}

        {step === "skills" && (
          <div>
            <div className="bg-indigo-light text-indigo-dark mb-6 inline-flex size-14 items-center justify-center rounded-full">
              <SparklesIcon className="size-6" />
            </div>
            <p className="text-eyebrow text-indigo-dark mb-3">
              YON DENYE BAGAY ANVAN OU KÒMANSE
            </p>
            <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
              {computerRebuildSkillsIntake.titleHt}
            </h1>
            <p className="text-muted mb-7 text-[15px] leading-[1.6]">
              {computerRebuildSkillsIntake.intro}
            </p>
            <div className="mb-7">
              {computerRebuildSkillsIntake.competencies.map((item, index) => (
                <div
                  key={item.skillHt}
                  className={cn(
                    "border-border border-b py-4.5",
                    index === 0 && "border-t",
                  )}
                >
                  <p className="text-ink mb-3 text-[14.5px] font-semibold">
                    {item.skillHt}
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {computerRebuildSkillsIntake.scaleLabelsHt.map(
                      (label, scaleIndex) => {
                        const selected = ratings[index] === scaleIndex;
                        return (
                          <button
                            key={label}
                            type="button"
                            onClick={() => setRating(index, scaleIndex)}
                            className={cn(
                              "min-h-14 rounded-[10px] px-2 py-2 text-center text-[12px] leading-[1.35] transition",
                              selected
                                ? "border-indigo bg-indigo-light border-2 font-semibold"
                                : "border-border border bg-[#FCFCFE]",
                            )}
                          >
                            {label}
                          </button>
                        );
                      },
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  saveIntakeIfRated();
                  setStep("confirm");
                }}
                className="bg-indigo inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
              >
                Kontinye <ArrowRightIcon className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setStep("confirm")}
                className="text-indigo-dark min-h-11 text-sm font-semibold"
              >
                Sote etap sa a
              </button>
            </div>
          </div>
        )}

        {step === "confirm" && chosen && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">
              TOUT BAGAY PARE
            </p>
            <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
              Ou nan chemen {chosen === "windows" ? "Windows" : "Mac"} la.
            </h1>
            <p className="text-muted mb-8 text-[15px] leading-[1.6]">
              Chak leson pral montre w etap{" "}
              {chosen === "windows" ? "Windows" : "Mac"} pa default. Si yon
              leson mache menm jan sou tou de òdinatè yo, nou p ap fè w chwazi
              san rezon. Ou ka chanje chemen nenpòt lè — anyen ou fin fè p ap
              pèdi.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/academy/courses/computer-internet-essentials/learn/${firstLessonSlug}`}
                className="bg-indigo inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
              >
                Kòmanse Modil 1 <ArrowRightIcon className="size-4" />
              </Link>
              <button
                type="button"
                onClick={() => setStep("choose")}
                className="text-indigo-dark min-h-11 text-sm font-semibold"
              >
                Chanje chwa mwen an
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function PlatformCard({
  label,
  description,
  onClick,
}: {
  label: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border-border hover:border-indigo min-h-[92px] rounded-xl border bg-[#FCFCFE] px-4.5 py-4 text-left transition",
      )}
    >
      <div className="text-ink mb-1 text-[16px] font-bold">{label}</div>
      <div className="text-muted text-[13px]">{description}</div>
    </button>
  );
}
