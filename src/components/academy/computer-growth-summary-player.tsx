"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { computerSkillsIntakeStorageKey } from "@/components/academy/computer-platform-onboarding";
import { computerReadinessReflectionStorageKey } from "@/components/academy/computer-readiness-reflection-player";
import { ArrowRightIcon, SparklesIcon } from "@/components/ui/icons";
import { computerRebuildCoreCompetencies } from "@/content/computer-rebuild/competencies";
import { cn } from "@/lib/cn";

interface SkillsIntakeRecord {
  ratings: (number | null)[];
  savedAt: string;
}

interface ReadinessRecord {
  ratings: (number | null)[];
  answers: Record<string, string>;
  updatedAt: string;
}

const levelLabelsHt = ["Pa ka fè l toujou", "Ka fè l ak èd", "Ka fè l poukont li"];

function levelLabel(level: number | null): string {
  if (level === null || !levelLabelsHt[level]) return "Pa evalye";
  return levelLabelsHt[level];
}

function readJson<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(window.localStorage.getItem(key) ?? "") as T;
  } catch {
    return fallback;
  }
}

export function ComputerGrowthSummaryPlayer() {
  const [loaded, setLoaded] = useState(false);
  const [intake, setIntake] = useState<SkillsIntakeRecord | null>(null);
  const [after, setAfter] = useState<ReadinessRecord | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIntake(readJson<SkillsIntakeRecord | null>(computerSkillsIntakeStorageKey, null));
      const reflections = readJson(
        computerReadinessReflectionStorageKey,
        {} as Record<string, ReadinessRecord>,
      );
      setAfter(reflections["checkpoint-4"] ?? null);
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const eligible = loaded && Boolean(after);

  if (!loaded) {
    return <main className="bg-white pt-[72px]" />;
  }

  if (!eligible) {
    return (
      <main className="bg-white pt-[72px]">
        <div className="mx-auto max-w-[620px] px-5 pt-5 pb-16">
          <p className="text-muted mb-6 text-[12.5px]">
            Computer &amp; Internet Essentials{" "}
            <span className="text-indigo-dark">·</span> Kwasans Ou
          </p>
          <p className="text-eyebrow text-indigo-dark mb-3">POKO DISPONIB</p>
          <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
            Konplete Confidence Checkpoint 4 dabò.
          </h1>
          <p className="text-muted mb-7 text-[15px] leading-[1.6]">
            Rezime kwasans ou pral parèt apre ou fin sovgade Chèk Prepare
            Dijital Ou a, ki vini apre Kapstòn nan ak tout kou a.
          </p>
          <Link
            href="/academy/courses/computer-internet-essentials/rebuild/checkpoint-4"
            className="bg-indigo inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
          >
            Ale nan Checkpoint 4
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </main>
    );
  }

  const hasIntake = Boolean(intake) && intake!.ratings.some((r) => r !== null);
  const rows = computerRebuildCoreCompetencies.map((competency, index) => {
    const beforeLevel = intake?.ratings[index] ?? null;
    const afterLevel = after?.ratings[index] ?? null;
    const delta =
      beforeLevel !== null && afterLevel !== null ? afterLevel - beforeLevel : null;
    return { competency, beforeLevel, afterLevel, delta };
  });
  const improvedCount = rows.filter((r) => r.delta !== null && r.delta > 0).length;
  const comparableCount = rows.filter((r) => r.delta !== null).length;

  return (
    <main className="bg-white pt-[72px]">
      <div className="mx-auto max-w-[620px] px-5 pt-5 pb-16">
        <p className="text-muted mb-6 text-[12.5px]">
          Computer &amp; Internet Essentials{" "}
          <span className="text-indigo-dark">·</span> Kwasans Ou
        </p>

        <div className="bg-indigo-light text-indigo-dark mb-6 inline-flex size-14 items-center justify-center rounded-full">
          <SparklesIcon className="size-6" />
        </div>
        <p className="text-eyebrow text-indigo-dark mb-3">REZIME KWASANS OU</p>
        <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
          Gade wout ou fè.
        </h1>

        {hasIntake ? (
          <p className="text-muted mb-8 text-[15px] leading-[1.6]">
            {comparableCount > 0
              ? `${improvedCount} sou ${comparableCount} konpetans amelyore konpare ak lè ou te kòmanse kou a.`
              : "Men kijan ou santi w kounye a, konpare ak lè ou te kòmanse kou a."}
          </p>
        ) : (
          <p className="text-muted mb-8 text-[15px] leading-[1.6]">
            Ou pa t fè evalyasyon kòmansman an, donk nou pa ka montre w yon
            konparezon. Men men kote ou ye kounye a — sa ka sèvi kòm pwen
            depa ou pou pwochen kou ou.
          </p>
        )}

        <div className="mb-4">
          {rows.map(({ competency, beforeLevel, afterLevel, delta }) => (
            <div key={competency.skillHt} className="border-border border-b py-4.5 first:border-t">
              <p className="text-ink mb-2.5 text-[14.5px] font-semibold">
                {competency.skillHt}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[12.5px]">
                {beforeLevel !== null && (
                  <>
                    <span className="text-muted">
                      Anvan: {levelLabel(beforeLevel)}
                    </span>
                    <ArrowRightIcon className="text-muted size-3.5" />
                  </>
                )}
                <span className="text-ink font-semibold">
                  Kounye a: {levelLabel(afterLevel)}
                </span>
                {delta !== null && delta > 0 && (
                  <span className="text-success bg-success/10 rounded-full px-2 py-0.5 text-[11px] font-semibold">
                    +{delta}
                  </span>
                )}
                {delta === 0 && (
                  <span className="text-muted bg-border/60 rounded-full px-2 py-0.5 text-[11px] font-semibold">
                    Menm nivo
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "border-border mt-2 rounded-xl border bg-[#FCFCFE] px-4.5 py-4",
          )}
        >
          <p className="text-ink text-[13.5px] leading-[1.6]">
            Sa a se yon evalyasyon pèsonèl ou fè sou tèt ou, se pa yon nòt
            objektif. Egzamen Final la ak sètifika ou se mezi objektif kou a.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href="/academy/courses/computer-internet-essentials/rebuild/final-exam"
            className="bg-indigo inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
          >
            Ale nan Egzamen Final la
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
