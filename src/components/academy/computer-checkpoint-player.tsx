"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  type CheckAnswer,
  isAnswerCorrect,
  QuestionCard,
} from "@/components/academy/computer-block-lesson-player";
import { computerProgressStorageKey } from "@/components/academy/computer-essentials-lesson-list";
import {
  ArrowRightIcon,
  GraduationCapIcon,
  SparklesIcon,
  StampIcon,
} from "@/components/ui/icons";
import { computerRebuildModules } from "@/content/computer-rebuild/modules";
import type { Checkpoint, CourseLesson } from "@/content/computer-rebuild/schema";
import { cn } from "@/lib/cn";

export const computerCheckpointStorageKey =
  "jamezzi:computer:essentials:checkpoints";

interface CheckpointAttemptRecord {
  attempts: number;
  bestPercent: number;
  passed: boolean;
}

function readCheckpointRecords(): Record<string, CheckpointAttemptRecord> {
  try {
    return JSON.parse(
      window.localStorage.getItem(computerCheckpointStorageKey) ?? "{}",
    ) as Record<string, CheckpointAttemptRecord>;
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

export function ComputerCheckpointPlayer({
  checkpoint,
  allLessons,
}: {
  checkpoint: Checkpoint;
  allLessons: CourseLesson[];
}) {
  const [loaded, setLoaded] = useState(false);
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
  const [record, setRecord] = useState<CheckpointAttemptRecord | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCompletedSlugs(readCompletedSlugs());
      setRecord(readCheckpointRecords()[checkpoint.id] ?? null);
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [checkpoint.id]);

  const [view, setView] = useState<"intro" | "quiz" | "results">("intro");
  const [checkState, setCheckState] = useState<CheckAnswer[]>(() =>
    checkpoint.questions.map(() => ({ checked: false, correct: false })),
  );

  const afterModuleOrder =
    computerRebuildModules.find((m) => m.id === checkpoint.afterModuleId)
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

  const nextModule = computerRebuildModules.find(
    (m) => m.order === afterModuleOrder + 1,
  );
  const nextModuleFirstLesson = nextModule
    ? allLessons.find((lesson) => lesson.moduleId === nextModule.id)
    : undefined;

  const allAnswered = checkState.every((a) => a.checked);
  const correctCount = checkState.filter((a) => a.correct).length;
  const percent = Math.round((correctCount / checkpoint.questions.length) * 100);
  const passed = percent >= checkpoint.passingPercent;
  const missed = checkpoint.questions.filter((_, index) => !checkState[index].correct);

  function updateAnswer(index: number, partial: Partial<CheckAnswer>) {
    setCheckState((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], ...partial, checked: partial.checked ?? false };
      return next;
    });
  }

  function verify(index: number) {
    const question = checkpoint.questions[index].question;
    setCheckState((prev) => {
      const answer = prev[index];
      const correct = isAnswerCorrect(question, answer);
      const next = [...prev];
      next[index] = { ...next[index], checked: true, correct };
      return next;
    });
  }

  function seeResults() {
    const finalCorrect = checkState.filter((a) => a.correct).length;
    const finalPercent = Math.round(
      (finalCorrect / checkpoint.questions.length) * 100,
    );
    const finalPassed = finalPercent >= checkpoint.passingPercent;
    try {
      const all = readCheckpointRecords();
      const prev = all[checkpoint.id];
      const next: CheckpointAttemptRecord = {
        attempts: (prev?.attempts ?? 0) + 1,
        bestPercent: Math.max(prev?.bestPercent ?? 0, finalPercent),
        passed: Boolean(prev?.passed) || finalPassed,
      };
      all[checkpoint.id] = next;
      window.localStorage.setItem(
        computerCheckpointStorageKey,
        JSON.stringify(all),
      );
      setRecord(next);
    } catch {
      // Attempt stays ephemeral if storage is blocked.
    }
    setView("results");
  }

  function retry() {
    setCheckState(
      checkpoint.questions.map(() => ({ checked: false, correct: false })),
    );
    setView("quiz");
  }

  if (!loaded) {
    return <main className="bg-white pt-[72px]" />;
  }

  return (
    <main className="bg-white pt-[72px]">
      <div className="mx-auto max-w-[620px] px-5 pt-5 pb-16">
        <p className="text-muted mb-6 text-[12.5px]">
          Computer &amp; Internet Essentials <span className="text-indigo-dark">·</span>{" "}
          {checkpoint.titleHt}
        </p>

        {!unlocked && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">CHECKPOINT FÈMEN</p>
            <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
              Fini leson ki anvan yo dabò.
            </h1>
            <p className="text-muted mb-7 text-[15px] leading-[1.6]">
              {checkpoint.titleHt} konbine konpetans nan plizyè modil ansanm.
              Ou bezwen fini tout leson yo anvan ou eseye l.
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

        {unlocked && view === "intro" && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">
              CONFIDENCE CHECKPOINT {checkpoint.order}
            </p>
            <h1 className="font-fraunces text-ink mb-3 text-[28px] leading-[1.2] font-semibold italic">
              {checkpoint.titleHt}
            </h1>
            <p className="text-muted mb-6 text-[15px] leading-[1.6]">
              {checkpoint.scenario}
            </p>
            <div className="mb-7 flex flex-wrap gap-2">
              {checkpoint.skillsCombined.map((skill) => (
                <span
                  key={skill}
                  className="bg-indigo-light text-indigo-dark rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
            {record && (
              <p className="text-muted mb-6 text-[13px]">
                Dènye rezilta ou: {record.bestPercent}%
                {record.passed ? " — ou deja pase l ✅" : ""} ({record.attempts}{" "}
                eseye)
              </p>
            )}
            <button
              type="button"
              onClick={() => setView("quiz")}
              className="bg-indigo inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
            >
              Kòmanse Checkpoint <ArrowRightIcon className="size-4" />
            </button>
          </div>
        )}

        {unlocked && view === "quiz" && (
          <div>
            <h1 className="font-fraunces text-ink mb-6 text-[24px] leading-[1.2] font-semibold italic">
              {checkpoint.titleHt}
            </h1>
            <div className="grid gap-8">
              {checkpoint.questions.map((item, index) => (
                <QuestionCard
                  key={item.question.prompt}
                  question={item.question}
                  answer={checkState[index] ?? { checked: false, correct: false }}
                  onAnswerChange={(partial) => updateAnswer(index, partial)}
                  onVerify={() => verify(index)}
                />
              ))}
            </div>
            <div className="border-border mt-8 flex items-center justify-end border-t pt-6">
              <button
                type="button"
                disabled={!allAnswered}
                onClick={seeResults}
                className={cn(
                  "min-h-12 rounded-full px-7 text-sm font-semibold",
                  !allAnswered
                    ? "bg-indigo-light text-muted cursor-not-allowed"
                    : "bg-indigo cursor-pointer text-white",
                )}
              >
                Wè Rezilta w →
              </button>
            </div>
          </div>
        )}

        {unlocked && view === "results" && (
          <div>
            <div
              className={cn(
                "mb-7 rounded-[18px] px-5.5 py-7.5 text-center",
                passed ? "bg-indigo text-white" : "bg-indigo-light text-indigo-dark",
              )}
            >
              <div
                className={cn(
                  "mx-auto mb-3.5 grid size-[70px] -rotate-6 place-items-center rounded-full border-[3px]",
                  passed ? "border-white bg-white/15" : "border-indigo bg-transparent",
                )}
              >
                {passed ? (
                  <SparklesIcon className="size-7" />
                ) : (
                  <StampIcon className="size-6.5" />
                )}
              </div>
              <h2
                className={cn(
                  "mb-1.5 text-[22px] font-semibold",
                  passed && "font-fraunces italic",
                )}
              >
                {percent}%
              </h2>
              <p className="text-[14.5px]">
                {passed
                  ? "Ou pase checkpoint la! 🎉"
                  : `Preske — objektif la se ${checkpoint.passingPercent}%`}
              </p>
              {passed && nextModuleFirstLesson && (
                <Link
                  href={`/academy/courses/computer-internet-essentials/rebuild/${nextModuleFirstLesson.slug}`}
                  className="text-indigo-dark mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold"
                >
                  <GraduationCapIcon className="size-4" />
                  Kontinye ak {nextModule?.titleHt}
                  <ArrowRightIcon className="size-4" />
                </Link>
              )}
            </div>

            {missed.length > 0 && (
              <div className="mb-7">
                <p className="text-eyebrow text-indigo-dark mb-3">
                  KONPETANS POU REVIZE
                </p>
                <div className="grid gap-2.5">
                  {missed.map((item) => (
                    <Link
                      key={item.skillTag}
                      href={`/academy/courses/computer-internet-essentials/rebuild/${item.recommendedLessonSlug}`}
                      className="border-border flex items-center justify-between rounded-xl border bg-[#FCFCFE] px-4 py-3.5"
                    >
                      <span className="text-ink text-[14px] font-semibold">
                        {item.skillLabel}
                      </span>
                      <span className="text-indigo-dark text-[13px] font-semibold">
                        Revize leson an →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={retry}
              className="text-indigo-dark min-h-11 text-sm font-semibold"
            >
              ↻ Eseye Ankò
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
