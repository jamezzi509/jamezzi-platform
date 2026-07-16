"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  type CheckAnswer,
  isAnswerCorrect,
  QuestionCard,
} from "@/components/academy/computer-block-lesson-player";
import { computerCheckpointStorageKey } from "@/components/academy/computer-checkpoint-player";
import { computerProgressStorageKey } from "@/components/academy/computer-essentials-lesson-list";
import { computerReadinessReflectionStorageKey } from "@/components/academy/computer-readiness-reflection-player";
import {
  ArrowRightIcon,
  GraduationCapIcon,
  SparklesIcon,
  StampIcon,
} from "@/components/ui/icons";
import type {
  CourseLesson,
  ExamQuestion,
  FinalExam,
} from "@/content/computer-rebuild/schema";
import { cn } from "@/lib/cn";

export const computerFinalExamStorageKey =
  "jamezzi:computer:essentials:final-exam";

interface ExamAttemptRecord {
  attempts: number;
  bestPercent: number;
  passed: boolean;
}

interface CheckpointRecord {
  attempts: number;
  bestPercent: number;
  passed: boolean;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function readJson<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(window.localStorage.getItem(key) ?? "") as T;
  } catch {
    return fallback;
  }
}

export function ComputerFinalExamPlayer({
  exam,
  allLessons,
}: {
  exam: FinalExam;
  allLessons: CourseLesson[];
}) {
  const [loaded, setLoaded] = useState(false);
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
  const [checkpointRecords, setCheckpointRecords] = useState<
    Record<string, CheckpointRecord>
  >({});
  const [reflectionSaved, setReflectionSaved] = useState(false);
  const [record, setRecord] = useState<ExamAttemptRecord | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCompletedSlugs(readJson(computerProgressStorageKey, [] as string[]));
      setCheckpointRecords(
        readJson(computerCheckpointStorageKey, {} as Record<string, CheckpointRecord>),
      );
      const reflections = readJson(
        computerReadinessReflectionStorageKey,
        {} as Record<string, unknown>,
      );
      setReflectionSaved(Boolean(reflections["checkpoint-4"]));
      setRecord(
        readJson(computerFinalExamStorageKey, {} as Record<string, ExamAttemptRecord>)[
          exam.id
        ] ?? null,
      );
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [exam.id]);

  const [view, setView] = useState<"intro" | "quiz" | "results">("intro");
  const [attemptQuestions, setAttemptQuestions] = useState<ExamQuestion[]>([]);
  const [checkState, setCheckState] = useState<CheckAnswer[]>([]);

  const firstIncompleteLesson = allLessons.find(
    (lesson) => !completedSlugs.includes(lesson.slug),
  );
  const unpassedCheckpoint = ["checkpoint-1", "checkpoint-2", "checkpoint-3"].find(
    (id) => !checkpointRecords[id]?.passed,
  );
  const blockers: string[] = [];
  if (firstIncompleteLesson) {
    blockers.push(`Fini "${firstIncompleteLesson.titleHt}" ak lòt leson ki rete yo`);
  }
  if (unpassedCheckpoint) {
    blockers.push(
      `Pase Confidence Checkpoint ${unpassedCheckpoint.replace("checkpoint-", "")}`,
    );
  }
  if (!reflectionSaved) {
    blockers.push("Konplete Confidence Checkpoint 4 (Chèk Prepare Dijital Ou)");
  }
  const unlocked = loaded && blockers.length === 0;

  function startAttempt() {
    const questions = shuffle(exam.bank).slice(0, exam.questionsPerAttempt);
    setAttemptQuestions(questions);
    setCheckState(questions.map(() => ({ checked: false, correct: false })));
    setView("quiz");
  }

  function updateAnswer(index: number, partial: Partial<CheckAnswer>) {
    setCheckState((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], ...partial, checked: partial.checked ?? false };
      return next;
    });
  }

  function verify(index: number) {
    const question = attemptQuestions[index].question;
    setCheckState((prev) => {
      const answer = prev[index];
      const correct = isAnswerCorrect(question, answer);
      const next = [...prev];
      next[index] = { ...next[index], checked: true, correct };
      return next;
    });
  }

  const allAnswered = checkState.length > 0 && checkState.every((a) => a.checked);
  const correctCount = checkState.filter((a) => a.correct).length;
  const percent =
    attemptQuestions.length > 0
      ? Math.round((correctCount / attemptQuestions.length) * 100)
      : 0;
  const passed = percent >= exam.passingPercent;
  const missed = attemptQuestions.filter((_, index) => !checkState[index]?.correct);
  const missedLessons = [
    ...new Map(missed.map((q) => [q.recommendedLessonSlug, q])).values(),
  ];

  function seeResults() {
    try {
      const all = readJson(
        computerFinalExamStorageKey,
        {} as Record<string, ExamAttemptRecord>,
      );
      const prev = all[exam.id];
      const next: ExamAttemptRecord = {
        attempts: (prev?.attempts ?? 0) + 1,
        bestPercent: Math.max(prev?.bestPercent ?? 0, percent),
        passed: Boolean(prev?.passed) || passed,
      };
      all[exam.id] = next;
      window.localStorage.setItem(computerFinalExamStorageKey, JSON.stringify(all));
      setRecord(next);
    } catch {
      // Attempt stays ephemeral if storage is blocked.
    }
    setView("results");
  }

  if (!loaded) {
    return <main className="bg-white pt-[72px]" />;
  }

  return (
    <main className="bg-white pt-[72px]">
      <div className="mx-auto max-w-[680px] px-5 pt-5 pb-16">
        <p className="text-muted mb-6 text-[12.5px]">
          Computer &amp; Internet Essentials <span className="text-indigo-dark">·</span>{" "}
          {exam.titleHt}
        </p>

        {!unlocked && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">FÈMEN POU KOUNYE A</p>
            <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
              Fini rès kou a dabò.
            </h1>
            <p className="text-muted mb-5 text-[15px] leading-[1.6]">
              Egzamen final la mande tout kou a konplete anvan ou ka kòmanse l.
            </p>
            <ul className="border-border grid gap-2.5 rounded-xl border bg-[#FCFCFE] px-4.5 py-4">
              {blockers.map((blocker) => (
                <li key={blocker} className="text-ink text-[13.5px] leading-[1.6]">
                  • {blocker}
                </li>
              ))}
            </ul>
            {firstIncompleteLesson && (
              <Link
                href={`/academy/courses/computer-internet-essentials/rebuild/${firstIncompleteLesson.slug}`}
                className="bg-indigo mt-6 inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
              >
                Kontinye ak {firstIncompleteLesson.titleHt}
                <ArrowRightIcon className="size-4" />
              </Link>
            )}
          </div>
        )}

        {unlocked && view === "intro" && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">EGZAMEN FINAL</p>
            <h1 className="font-fraunces text-ink mb-3 text-[28px] leading-[1.2] font-semibold italic">
              {exam.titleHt}
            </h1>
            <p className="text-muted mb-6 text-[15px] leading-[1.6]">{exam.intro}</p>
            <div className="mb-7 grid grid-cols-3 gap-2.5 text-center">
              <div className="bg-indigo-light rounded-xl px-3 py-3.5">
                <p className="text-ink text-[18px] font-bold">
                  {exam.questionsPerAttempt}
                </p>
                <p className="text-muted text-[11.5px]">Kesyon</p>
              </div>
              <div className="bg-indigo-light rounded-xl px-3 py-3.5">
                <p className="text-ink text-[18px] font-bold">{exam.passingPercent}%</p>
                <p className="text-muted text-[11.5px]">Pou Pase</p>
              </div>
              <div className="bg-indigo-light rounded-xl px-3 py-3.5">
                <p className="text-ink text-[18px] font-bold">∞</p>
                <p className="text-muted text-[11.5px]">Eseye</p>
              </div>
            </div>
            {record && (
              <p className="text-muted mb-6 text-[13px]">
                Dènye rezilta ou: {record.bestPercent}%
                {record.passed ? " — ou deja pase l ✅" : ""} ({record.attempts} eseye)
              </p>
            )}
            <button
              type="button"
              onClick={startAttempt}
              className="bg-indigo inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
            >
              Kòmanse Egzamen <ArrowRightIcon className="size-4" />
            </button>
          </div>
        )}

        {unlocked && view === "quiz" && (
          <div>
            <div className="border-border sticky top-[72px] z-10 mb-6 border-b bg-white/95 pt-2.5 pb-3 backdrop-blur-sm">
              <p className="text-muted text-[12.5px]">
                {checkState.filter((a) => a.checked).length} sou {attemptQuestions.length}{" "}
                reponn
              </p>
            </div>
            <div className="grid gap-8">
              {attemptQuestions.map((item, index) => (
                <QuestionCard
                  key={item.id}
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
                  ? "Ou pase egzamen final la! 🎉"
                  : `Preske — objektif la se ${exam.passingPercent}%`}
              </p>
              {passed && (
                <Link
                  href="/academy/courses/computer-internet-essentials/rebuild/certificate"
                  className="text-indigo-dark mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold"
                >
                  <GraduationCapIcon className="size-4" />
                  Jwenn Sètifika Ou
                  <ArrowRightIcon className="size-4" />
                </Link>
              )}
            </div>

            {missedLessons.length > 0 && (
              <div className="mb-7">
                <p className="text-eyebrow text-indigo-dark mb-3">
                  LESON POU REVIZE ({missed.length} kesyon manke)
                </p>
                <div className="grid gap-2.5">
                  {missedLessons.map((item) => (
                    <Link
                      key={item.id}
                      href={`/academy/courses/computer-internet-essentials/rebuild/${item.recommendedLessonSlug}`}
                      className="border-border flex items-center justify-between rounded-xl border bg-[#FCFCFE] px-4 py-3.5"
                    >
                      <span className="text-ink text-[13.5px] font-semibold">
                        {item.question.prompt.length > 60
                          ? `${item.question.prompt.slice(0, 60)}…`
                          : item.question.prompt}
                      </span>
                      <span className="text-indigo-dark shrink-0 pl-3 text-[13px] font-semibold">
                        Revize →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={startAttempt}
              className="text-indigo-dark min-h-11 text-sm font-semibold"
            >
              ↻ Eseye Ankò (nouvo kesyon)
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
