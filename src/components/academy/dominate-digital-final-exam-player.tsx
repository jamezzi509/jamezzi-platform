"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { dominateDigitalProgressStorageKey } from "@/components/academy/dominate-digital-course-page";
import {
  ArrowRightIcon,
  GraduationCapIcon,
  SparklesIcon,
  StampIcon,
} from "@/components/ui/icons";
import type { CourseLesson, FinalExam } from "@/content/dominate-digital/schema";
import { cn } from "@/lib/cn";

export const dominateDigitalFinalExamStorageKey =
  "jamezzi:digital-marketing-ai:final-exam";

interface ExamAttemptRecord {
  attempts: number;
  bestPercent: number;
  passed: boolean;
}

interface AnswerState {
  checked: boolean;
  selected: number | null;
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

export function DominateDigitalFinalExamPlayer({
  exam,
  allLessons,
}: {
  exam: FinalExam;
  allLessons: CourseLesson[];
}) {
  const [loaded, setLoaded] = useState(false);
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
  const [record, setRecord] = useState<ExamAttemptRecord | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCompletedSlugs(
        readJson(dominateDigitalProgressStorageKey, [] as string[]),
      );
      setRecord(
        readJson(
          dominateDigitalFinalExamStorageKey,
          {} as Record<string, ExamAttemptRecord>,
        )[exam.id] ?? null,
      );
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [exam.id]);

  const [view, setView] = useState<"intro" | "quiz" | "results">("intro");
  const [attemptQuestions, setAttemptQuestions] = useState<
    FinalExam["bank"]
  >([]);
  const [answers, setAnswers] = useState<AnswerState[]>([]);

  const firstIncompleteLesson = allLessons.find(
    (lesson) => !completedSlugs.includes(lesson.slug),
  );
  const unlocked = loaded && !firstIncompleteLesson;

  function startAttempt() {
    const questions = shuffle(exam.bank).slice(0, exam.questionsPerAttempt);
    setAttemptQuestions(questions);
    setAnswers(questions.map(() => ({ checked: false, selected: null })));
    setView("quiz");
  }

  function selectAnswer(index: number, optionIndex: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = { checked: true, selected: optionIndex };
      return next;
    });
  }

  const allAnswered =
    answers.length > 0 && answers.every((a) => a.checked);
  const correctCount = attemptQuestions.filter(
    (question, index) => answers[index]?.selected === question.correctIndex,
  ).length;
  const percent =
    attemptQuestions.length > 0
      ? Math.round((correctCount / attemptQuestions.length) * 100)
      : 0;
  const passed = percent >= exam.passingPercent;
  const missed = attemptQuestions.filter(
    (question, index) => answers[index]?.selected !== question.correctIndex,
  );
  const missedModules = [
    ...new Map(missed.map((q) => [q.moduleId, q])).values(),
  ];

  function seeResults() {
    try {
      const all = readJson(
        dominateDigitalFinalExamStorageKey,
        {} as Record<string, ExamAttemptRecord>,
      );
      const prev = all[exam.id];
      const next: ExamAttemptRecord = {
        attempts: (prev?.attempts ?? 0) + 1,
        bestPercent: Math.max(prev?.bestPercent ?? 0, percent),
        passed: Boolean(prev?.passed) || passed,
      };
      all[exam.id] = next;
      window.localStorage.setItem(
        dominateDigitalFinalExamStorageKey,
        JSON.stringify(all),
      );
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
          Maketing Dijital &amp; AI{" "}
          <span className="text-indigo-dark">·</span> {exam.titleHt}
        </p>

        {!unlocked && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">
              FÈMEN POU KOUNYE A
            </p>
            <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
              Fini tout 20 modil yo dabò.
            </h1>
            <p className="text-muted mb-5 text-[15px] leading-[1.6]">
              Egzamen final la mande tout kou a konplete (tout 20 modil,
              ladan Pwojè Kapstòn nan) anvan ou ka kòmanse l.
            </p>
            {firstIncompleteLesson && (
              <Link
                href={`/academy/courses/digital-marketing-ai/learn/${firstIncompleteLesson.slug}`}
                className="bg-indigo mt-2 inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
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
            <p className="text-muted mb-6 text-[15px] leading-[1.6]">
              {exam.intro}
            </p>
            <div className="mb-7 grid grid-cols-1 gap-2.5 text-center sm:grid-cols-3">
              <div className="bg-indigo-light rounded-xl px-3 py-3.5">
                <p className="text-ink text-[18px] font-bold">
                  {exam.questionsPerAttempt}
                </p>
                <p className="text-muted text-[11.5px]">Kesyon</p>
              </div>
              <div className="bg-indigo-light rounded-xl px-3 py-3.5">
                <p className="text-ink text-[18px] font-bold">
                  {exam.passingPercent}%
                </p>
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
                {record.passed ? " — ou deja pase l ✅" : ""} ({record.attempts}{" "}
                eseye)
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
                {answers.filter((a) => a.checked).length} sou{" "}
                {attemptQuestions.length} reponn
              </p>
            </div>
            <div className="grid gap-8">
              {attemptQuestions.map((item, index) => {
                const answer = answers[index];
                return (
                  <div key={item.id}>
                    <p className="text-ink mb-3.5 text-[15.5px] leading-[1.5] font-semibold">
                      {index + 1}. {item.prompt}
                    </p>
                    <div className="grid gap-2">
                      {item.options.map((option, optionIndex) => {
                        const isSelected = answer?.selected === optionIndex;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => selectAnswer(index, optionIndex)}
                            className={cn(
                              "min-h-11 rounded-[10px] px-4 py-3 text-left text-[14.5px]",
                              isSelected
                                ? "border-indigo bg-indigo-light border-2 font-semibold"
                                : "border-border border bg-[#FCFCFE] font-medium",
                            )}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
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
                passed
                  ? "bg-indigo text-white"
                  : "bg-indigo-light text-indigo-dark",
              )}
            >
              <div
                className={cn(
                  "mx-auto mb-3.5 grid size-[70px] -rotate-6 place-items-center rounded-full border-[3px]",
                  passed
                    ? "border-white bg-white/15"
                    : "border-indigo bg-transparent",
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
                  href="/academy/courses/digital-marketing-ai/learn/certificate"
                  className="text-indigo-dark mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold"
                >
                  <GraduationCapIcon className="size-4" />
                  Jwenn Sètifika Ou
                  <ArrowRightIcon className="size-4" />
                </Link>
              )}
            </div>

            {missedModules.length > 0 && (
              <div className="mb-7">
                <p className="text-eyebrow text-indigo-dark mb-3">
                  MODIL POU REVIZE ({missed.length} kesyon manke)
                </p>
                <div className="grid gap-2.5">
                  {missedModules.map((item) => (
                    <Link
                      key={item.id}
                      href={`/academy/courses/digital-marketing-ai/learn/${item.recommendedLessonSlug}`}
                      className="border-border flex items-center justify-between rounded-xl border bg-[#FCFCFE] px-4 py-3.5"
                    >
                      <span className="text-ink text-[13.5px] font-semibold">
                        {item.prompt.length > 60
                          ? `${item.prompt.slice(0, 60)}…`
                          : item.prompt}
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
