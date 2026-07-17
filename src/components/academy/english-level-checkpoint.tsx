"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { englishProgressStorageKey } from "@/components/academy/english-level-one-lessons";
import {
  ArrowRightIcon,
  CheckIcon,
  RotateCcwIcon,
} from "@/components/ui/icons";
import { englishLevels, englishModules } from "@/content/english-course";
import { finalExamQuestions } from "@/content/english-final-exam";
import { englishLevelOneLessons } from "@/content/english-level-one";
import { cn } from "@/lib/cn";

type Screen = "locked" | "intro" | "quiz" | "result";

export function EnglishLevelCheckpoint({
  levelNumber,
}: {
  levelNumber: number;
}) {
  const level = englishLevels.find((item) => item.number === levelNumber);
  const levelLessons = useMemo(
    () =>
      englishLevelOneLessons.filter((lesson) =>
        level?.moduleNumbers.includes(lesson.moduleNumber),
      ),
    [level],
  );
  const questions = useMemo(
    () =>
      finalExamQuestions.filter((question) =>
        level?.moduleNumbers.includes(question.moduleNumber),
      ),
    [level],
  );
  const [screen, setScreen] = useState<Screen>("locked");
  const [completedCount, setCompletedCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    let completed: string[] = [];
    try {
      completed = JSON.parse(
        window.localStorage.getItem(englishProgressStorageKey) ?? "[]",
      ) as string[];
    } catch {
      // Keep the checkpoint locked if browser storage is unavailable.
    }
    const count = levelLessons.filter((lesson) =>
      completed.includes(lesson.slug),
    ).length;
    const timer = window.setTimeout(() => {
      setCompletedCount(count);
      setScreen(count === levelLessons.length ? "intro" : "locked");
    }, 0);
    return () => window.clearTimeout(timer);
  }, [levelLessons]);

  if (!level) return null;

  const question = questions[index];
  const correctCount = questions.filter(
    (item) => answers[item.id] === item.correctIndex,
  ).length;
  const passed = correctCount / questions.length >= 0.8;
  const missedModules = Array.from(
    new Set(
      questions
        .filter((item) => answers[item.id] !== item.correctIndex)
        .map((item) => item.moduleNumber),
    ),
  );
  const nextLevel = englishLevels.find(
    (item) => item.number === level.number + 1,
  );
  const nextLevelFirstLesson = nextLevel
    ? englishLevelOneLessons.find((item) =>
        nextLevel.moduleNumbers.includes(item.moduleNumber),
      )
    : null;

  function start() {
    setIndex(0);
    setAnswers({});
    setSelected(null);
    setScreen("quiz");
  }

  function submitAnswer() {
    if (selected === null) return;
    const nextAnswers = { ...answers, [question.id]: selected };
    setAnswers(nextAnswers);
    setSelected(null);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      const finalCorrectCount = questions.filter(
        (item) => nextAnswers[item.id] === item.correctIndex,
      ).length;
      const score = Math.round((finalCorrectCount / questions.length) * 100);
      try {
        const storageKey = `jamezzi:english:level-${levelNumber}:checkpoint`;
        const previousRaw = window.localStorage.getItem(storageKey);
        const previous = previousRaw
          ? (JSON.parse(previousRaw) as {
              passed?: boolean;
              bestScore?: number;
            })
          : null;
        window.localStorage.setItem(
          storageKey,
          JSON.stringify({
            answers: nextAnswers,
            score,
            bestScore: Math.max(previous?.bestScore ?? 0, score),
            passed: Boolean(previous?.passed) || score >= 80,
            completedAt: new Date().toISOString(),
          }),
        );
      } catch {
        // Results remain available for the current session.
      }
      setScreen("result");
    }
  }

  return (
    <main className="bg-paper pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-2xl px-5">
        <p className="text-eyebrow text-indigo-dark">
          EVALYASYON NIVO {level.number}
        </p>
        <h1 className="text-editorial-headline text-ink mt-4">{level.title}</h1>

        <div className="border-border mt-10 rounded-[22px] border bg-white p-6 shadow-[0_20px_50px_rgba(29,24,46,0.07)] sm:p-9">
          {screen === "locked" && (
            <div>
              <h2 className="text-feature-headline-sm text-ink">
                Fini nivo sa a anvan.
              </h2>
              <p className="text-body text-muted mt-4">
                Ou fini {completedCount} sou {levelLessons.length} leson. Fini
                leson ki rete yo anvan ou fè evalyasyon sa a.
              </p>
              <Link
                href={`/academy/courses/english-for-beginners/learn#level-${level.number}`}
                className="bg-indigo text-button mt-7 inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-white"
              >
                Retounen nan Nivo {level.number}{" "}
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          )}

          {screen === "intro" && (
            <div>
              <h2 className="text-feature-headline-sm text-ink">
                Verifye sa ou metrize.
              </h2>
              <p className="text-body text-muted mt-4">
                Reponn {questions.length} kesyon ki kouvri tout modil nivo sa a.
                Fè omwen 80% pou kontinye ak konfyans.
              </p>
              <button
                type="button"
                onClick={start}
                className="bg-indigo text-button mt-7 inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-white"
              >
                Kòmanse Evalyasyon an <ArrowRightIcon className="size-4" />
              </button>
            </div>
          )}

          {screen === "quiz" && question && (
            <div>
              <div className="flex items-center justify-between gap-5">
                <p className="text-metadata text-muted">
                  Kesyon {index + 1} sou {questions.length}
                </p>
                <p className="text-metadata text-indigo-dark">
                  Modil {question.moduleNumber}
                </p>
              </div>
              <div
                className="bg-border mt-3 h-1.5 overflow-hidden rounded-full"
                role="progressbar"
                aria-label="Pwogrè evalyasyon an"
                aria-valuemin={0}
                aria-valuemax={questions.length}
                aria-valuenow={index + 1}
              >
                <div
                  className="bg-indigo h-full rounded-full"
                  style={{
                    width: `${((index + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
              <h2 className="text-card-title text-ink mt-8">
                {question.prompt}
              </h2>
              <div className="mt-6 grid gap-3">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelected(optionIndex)}
                    aria-pressed={selected === optionIndex}
                    className={cn(
                      "border-border text-body min-h-14 rounded-[14px] border px-5 py-3 text-left transition-colors",
                      selected === optionIndex
                        ? "border-indigo bg-indigo-light text-indigo-dark"
                        : "text-ink hover:bg-paper",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                type="button"
                disabled={selected === null}
                onClick={submitAnswer}
                className="bg-indigo text-button mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-white disabled:cursor-not-allowed disabled:opacity-45"
              >
                {index + 1 === questions.length
                  ? "Gade Rezilta Mwen"
                  : "Pwochen Kesyon"}{" "}
                <ArrowRightIcon className="size-4" />
              </button>
            </div>
          )}

          {screen === "result" && (
            <div>
              <div
                className={cn(
                  "flex size-14 items-center justify-center rounded-full",
                  passed
                    ? "bg-success/10 text-success"
                    : "bg-coral/10 text-coral",
                )}
              >
                {passed ? (
                  <CheckIcon className="size-7" />
                ) : (
                  <RotateCcwIcon className="size-6" />
                )}
              </div>
              <h2 className="text-feature-headline-sm text-ink mt-5">
                {passed
                  ? `Nivo ${level.number} fini.`
                  : "Revize epi eseye ankò."}
              </h2>
              <p className="text-body text-muted mt-3">
                Ou reponn {correctCount} sou {questions.length} kesyon
                kòrèkteman.
              </p>
              {!passed && missedModules.length > 0 && (
                <div className="border-border mt-6 border-t pt-5">
                  <p className="text-metadata text-muted">
                    Sa nou konseye w revize
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {missedModules.map((moduleNumber) => {
                      const courseModule = englishModules.find(
                        (item) => item.number === moduleNumber,
                      );
                      const lesson = englishLevelOneLessons.find(
                        (item) => item.moduleNumber === moduleNumber,
                      );
                      return lesson ? (
                        <Link
                          key={moduleNumber}
                          href={`/academy/courses/english-for-beginners/lessons/${lesson.slug}`}
                          className="border-border text-button text-indigo-dark rounded-full border px-4 py-2"
                        >
                          Modil {moduleNumber}: {courseModule?.title}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
              <div className="mt-7 flex flex-wrap gap-3">
                {passed && nextLevel && nextLevelFirstLesson ? (
                  <Link
                    href={`/academy/courses/english-for-beginners/lessons/${nextLevelFirstLesson.slug}`}
                    className="bg-indigo text-button inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-white"
                  >
                    Kòmanse Nivo {nextLevel.number}{" "}
                    <ArrowRightIcon className="size-4" />
                  </Link>
                ) : passed ? (
                  <Link
                    href="/academy/courses/english-for-beginners/final-exam"
                    className="bg-indigo text-button inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-white"
                  >
                    Egzamen Final <ArrowRightIcon className="size-4" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={start}
                    className="bg-indigo text-button inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-white"
                  >
                    <RotateCcwIcon className="size-4" /> Eseye Ankò
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
