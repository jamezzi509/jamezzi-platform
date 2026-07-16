"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { computerProgressStorageKey } from "@/components/academy/computer-essentials-lesson-list";
import { ArrowRightIcon, CheckIcon, SparklesIcon } from "@/components/ui/icons";
import { computerRebuildModules } from "@/content/computer-rebuild/modules";
import type {
  CourseLesson,
  ReadinessReflection,
} from "@/content/computer-rebuild/schema";
import { cn } from "@/lib/cn";

export const computerReadinessReflectionStorageKey =
  "jamezzi:computer:essentials:readiness";

interface ReadinessRecord {
  ratings: (number | null)[];
  answers: Record<string, string>;
  updatedAt: string;
}

function readReadinessRecords(): Record<string, ReadinessRecord> {
  try {
    return JSON.parse(
      window.localStorage.getItem(computerReadinessReflectionStorageKey) ?? "{}",
    ) as Record<string, ReadinessRecord>;
  } catch {
    return {};
  }
}

function readCompletedSlugs(): string[] {
  try {
    return JSON.parse(
      window.localStorage.getItem(computerProgressStorageKey) ?? "[]",
    ) as string[];
  } catch {
    return [];
  }
}

export function ComputerReadinessReflectionPlayer({
  reflection,
  allLessons,
}: {
  reflection: ReadinessReflection;
  allLessons: CourseLesson[];
}) {
  const [loaded, setLoaded] = useState(false);
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
  const [ratings, setRatings] = useState<(number | null)[]>(() =>
    reflection.competencies.map(() => null),
  );
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCompletedSlugs(readCompletedSlugs());
      const record = readReadinessRecords()[reflection.id];
      if (record) {
        setRatings(record.ratings);
        setAnswers(record.answers);
        setSaved(true);
      }
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [reflection.id]);

  const afterModuleOrder =
    computerRebuildModules.find((m) => m.id === reflection.afterModuleId)
      ?.order ?? 0;
  const prerequisiteModuleIds = new Set(
    computerRebuildModules
      .filter((m) => m.order <= afterModuleOrder)
      .map((m) => m.id),
  );
  const prerequisiteLessons = allLessons.filter((lesson) =>
    prerequisiteModuleIds.has(lesson.moduleId),
  );
  const firstIncompleteLesson = prerequisiteLessons.find(
    (lesson) => !completedSlugs.includes(lesson.slug),
  );
  const unlocked = loaded && !firstIncompleteLesson;

  const allRated = ratings.every((r) => r !== null);

  function setRating(index: number, value: number) {
    setRatings((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
    setSaved(false);
  }

  function setAnswer(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setSaved(false);
  }

  function save() {
    try {
      const all = readReadinessRecords();
      all[reflection.id] = {
        ratings,
        answers,
        updatedAt: new Date().toISOString(),
      };
      window.localStorage.setItem(
        computerReadinessReflectionStorageKey,
        JSON.stringify(all),
      );
      setSaved(true);
    } catch {
      // Reflection stays ephemeral if storage is blocked.
    }
  }

  if (!loaded) {
    return <main className="bg-white pt-[72px]" />;
  }

  return (
    <main className="bg-white pt-[72px]">
      <div className="mx-auto max-w-[620px] px-5 pt-5 pb-16">
        <p className="text-muted mb-6 text-[12.5px]">
          Computer &amp; Internet Essentials <span className="text-indigo-dark">·</span>{" "}
          {reflection.titleHt}
        </p>

        {!unlocked && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">FÈMEN POU KOUNYE A</p>
            <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
              Fini leson ki anvan yo dabò.
            </h1>
            <p className="text-muted mb-7 text-[15px] leading-[1.6]">
              Chèk prepare sa a vini apre ou fin konplete Kapstòn nan ak tout kou a.
            </p>
            {firstIncompleteLesson && (
              <Link
                href={`/academy/courses/computer-internet-essentials/rebuild/${firstIncompleteLesson.slug}`}
                className="bg-indigo inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
              >
                Kontinye ak {firstIncompleteLesson.titleHt}
                <ArrowRightIcon className="size-4" />
              </Link>
            )}
          </div>
        )}

        {unlocked && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">
              CONFIDENCE CHECKPOINT {reflection.order}
            </p>
            <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
              {reflection.titleHt}
            </h1>
            <p className="text-muted mb-8 text-[15px] leading-[1.6]">
              {reflection.intro}
            </p>

            <div className="mb-9">
              {reflection.competencies.map((item, index) => (
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
                  <div className="grid grid-cols-3 gap-2">
                    {reflection.scaleLabelsHt.map((label, scaleIndex) => {
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
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-9 grid gap-6">
              {reflection.openQuestions.map((q) => (
                <div key={q.id}>
                  <label
                    htmlFor={q.id}
                    className="text-ink mb-2 block text-[14.5px] font-semibold"
                  >
                    {q.promptHt}
                  </label>
                  <textarea
                    id={q.id}
                    value={answers[q.id] ?? ""}
                    onChange={(event) => setAnswer(q.id, event.target.value)}
                    rows={3}
                    className="border-border focus:border-indigo w-full rounded-xl border bg-[#FCFCFE] px-3.5 py-3 text-[14px] outline-none"
                    placeholder="Ekri repons ou a..."
                  />
                </div>
              ))}
            </div>

            <div className="border-border flex flex-wrap items-center gap-3 border-t pt-6">
              <button
                type="button"
                disabled={!allRated}
                onClick={save}
                className={cn(
                  "inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold",
                  !allRated
                    ? "bg-indigo-light text-muted cursor-not-allowed"
                    : "bg-indigo cursor-pointer text-white",
                )}
              >
                <SparklesIcon className="size-4" />
                {saved ? "Mizajou Sovgade" : "Sovgade Reflechi Ou"}
              </button>
              {saved && (
                <span className="text-success inline-flex items-center gap-1.5 text-[13px] font-semibold">
                  <CheckIcon className="size-4" />
                  Sovgade
                </span>
              )}
            </div>
            {!allRated && (
              <p className="text-muted mt-3 text-[12.5px]">
                Reponn tout konpetans yo anvan ou sovgade — kesyon ouvè yo pa obligatwa.
              </p>
            )}

            {saved && (
              <div className="bg-indigo-light mt-8 rounded-[18px] px-5.5 py-6 text-center">
                <p className="text-ink mb-4 text-[14.5px] leading-[1.6]">
                  Mèsi pou pran tan reflechi sou kwasans ou! Ou ka retounen gade
                  oswa chanje repons ou yo nenpòt lè.
                </p>
                <Link
                  href="/academy/courses/computer-internet-essentials/rebuild/final-exam"
                  className="bg-indigo inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
                >
                  Ale nan Egzamen Final la
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
