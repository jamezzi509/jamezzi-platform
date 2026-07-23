"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";
import {
  englishLevelOneLessons,
  type EnglishLessonSummary,
} from "@/content/english-level-one";
import { englishModules } from "@/content/english-course";
import { cn } from "@/lib/cn";
import {
  courseProgressChangedEvent,
  isProgressEventFor,
  readCompletedLessons,
} from "@/lib/course-progress";

export const englishProgressStorageKey =
  "jamezzi:english:first-english:completed";

export function EnglishLevelOneLessons({
  moduleNumbers,
  levelNumber,
  showFinalExam = false,
}: {
  moduleNumbers?: number[];
  levelNumber?: number;
  showFinalExam?: boolean;
}) {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const refresh = () => {
      setCompleted(readCompletedLessons(englishProgressStorageKey));
    };
    const handleProgress = (event: Event) => {
      if (isProgressEventFor(event, englishProgressStorageKey)) refresh();
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === englishProgressStorageKey) refresh();
    };
    const timer = window.setTimeout(refresh, 0);
    window.addEventListener(courseProgressChangedEvent, handleProgress);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(courseProgressChangedEvent, handleProgress);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const visibleLessons = moduleNumbers
    ? englishLevelOneLessons.filter((lesson) =>
        moduleNumbers.includes(lesson.moduleNumber),
      )
    : englishLevelOneLessons;

  const completedCount = completed.filter((slug) =>
    visibleLessons.some((lesson) => lesson.slug === slug),
  ).length;
  const visibleModules = englishModules.filter((module) =>
    moduleNumbers?.includes(module.number),
  );
  const currentSlug = englishLevelOneLessons.find(
    (lesson) => !completed.includes(lesson.slug),
  )?.slug;

  return (
    <div>
      <div className="border-border mb-6 flex items-center justify-between gap-5 border-y py-4">
        <p className="text-metadata text-muted" aria-live="polite">
          {completedCount} sou {visibleLessons.length} fini
        </p>
        <div
          className="bg-border h-1.5 w-28 overflow-hidden rounded-full sm:w-44"
          role="progressbar"
          aria-label="Pwogrè nivo a"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={
            visibleLessons.length
              ? Math.round((completedCount / visibleLessons.length) * 100)
              : 0
          }
        >
          <div
            className="bg-indigo h-full rounded-full transition-[width]"
            style={{
              width: `${visibleLessons.length ? (completedCount / visibleLessons.length) * 100 : 0}%`,
            }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {visibleModules.map((module, moduleIndex) => {
          const moduleLessons = visibleLessons.filter(
            (lesson) => lesson.moduleNumber === module.number,
          );
          const moduleCompleted = moduleLessons.filter((lesson) =>
            completed.includes(lesson.slug),
          ).length;
          const modulePercent = moduleLessons.length
            ? Math.round((moduleCompleted / moduleLessons.length) * 100)
            : 0;

          return (
            <details
              key={module.number}
              open={moduleIndex === 0 && moduleCompleted < moduleLessons.length}
              className="border-border bg-paper group overflow-hidden rounded-[18px] border"
            >
              <summary className="focus-visible:ring-indigo flex cursor-pointer list-none items-center gap-5 px-5 py-5 transition-colors hover:bg-white/70 focus-visible:ring-2 focus-visible:outline-none sm:px-6 [&::-webkit-details-marker]:hidden">
                <span className="border-border text-metadata text-indigo-dark flex size-11 shrink-0 items-center justify-center rounded-full border bg-white">
                  {String(module.number).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="text-card-title text-ink block">
                    {module.title}
                  </span>
                  <span className="text-metadata text-muted mt-1 block">
                    {moduleCompleted} sou {moduleLessons.length} leson fini
                  </span>
                </span>
                <span className="hidden items-center gap-3 sm:flex">
                  <span className="bg-border h-1.5 w-20 overflow-hidden rounded-full">
                    <span
                      className="bg-indigo block h-full rounded-full"
                      style={{ width: `${modulePercent}%` }}
                    />
                  </span>
                  <span className="text-metadata text-muted w-9 text-right">
                    {modulePercent}%
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-indigo-dark text-xl transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="border-border border-t bg-white px-5 sm:px-6">
                <p className="text-body text-muted border-border border-b py-5">
                  {module.promise}
                </p>
                <ol>
                  {moduleLessons.map((lesson, lessonIndex) => (
                    <LessonRow
                      key={lesson.slug}
                      lesson={lesson}
                      index={lessonIndex}
                      completed={completed.includes(lesson.slug)}
                      current={lesson.slug === currentSlug}
                      isLast={lessonIndex === moduleLessons.length - 1}
                    />
                  ))}
                </ol>
              </div>
            </details>
          );
        })}
      </div>

      {levelNumber && (
        <Link
          href={`/academy/courses/english-for-beginners/checkpoint/${levelNumber}`}
          className={cn(
            "mt-7 flex min-h-16 items-center justify-between rounded-[16px] border px-5 py-4",
            completedCount === visibleLessons.length
              ? "border-indigo/25 bg-indigo-light"
              : "border-border bg-paper",
          )}
        >
          <span>
            <span className="text-card-title text-ink block">
              Evalyasyon Nivo {levelNumber}
            </span>
            <span className="text-body text-muted">
              {completedCount === visibleLessons.length
                ? "Li louvri — verifye sa ou metrize anvan ou kontinye."
                : `${visibleLessons.length - completedCount} leson rete anvan li louvri.`}
            </span>
          </span>
          <span className="text-indigo-dark shrink-0 text-sm font-semibold">
            {completedCount === visibleLessons.length ? "Louvri →" : "Fèmen"}
          </span>
        </Link>
      )}

      {showFinalExam && (
        <Link
          href="/academy/courses/english-for-beginners/final-exam"
          className="border-border bg-paper mt-8 flex min-h-14 items-center justify-between rounded-[14px] border px-5 py-4"
        >
          <span>
            <span className="text-card-title text-ink block">
              Egzamen Final
            </span>
            <span className="text-body text-muted">
              Fini tout kat nivo yo pou debloke evalyasyon final la.
            </span>
          </span>
          <ArrowRightIcon className="text-indigo-dark size-4 shrink-0" />
        </Link>
      )}
    </div>
  );
}

function LessonRow({
  lesson,
  index,
  completed,
  current,
  isLast,
}: {
  lesson: EnglishLessonSummary;
  index: number;
  completed: boolean;
  current: boolean;
  isLast: boolean;
}) {
  if (!lesson.available) {
    return (
      <li className="grid min-h-28 gap-3 py-6 opacity-60 sm:grid-cols-[40px_1fr_auto] sm:items-start sm:gap-5">
        <PathNode index={index} state="upcoming" isLast={isLast} />
        <LessonCopy lesson={lesson} />
        <span className="text-metadata text-muted">Coming soon</span>
      </li>
    );
  }

  const state = completed ? "done" : current ? "current" : "upcoming";

  return (
    <li>
      <Link
        href={`/academy/courses/english-for-beginners/lessons/${lesson.slug}`}
        className="group grid min-h-28 gap-3 py-6 sm:grid-cols-[40px_1fr_auto] sm:items-start sm:gap-5"
      >
        <PathNode index={index} state={state} isLast={isLast} />
        <LessonCopy lesson={lesson} />
        <span className="text-button text-lesson-brand-2 inline-flex items-center gap-2 sm:pt-0.5">
          {completed ? "Revize" : "Kòmanse"}
          <ArrowRightIcon className="size-4" />
        </span>
      </Link>
    </li>
  );
}

function PathNode({
  index,
  state,
  isLast,
}: {
  index: number;
  state: "done" | "current" | "upcoming";
  isLast: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center sm:pt-0.5">
      <div
        className={cn(
          "grid size-8 shrink-0 place-items-center rounded-full text-[12px] font-bold shadow-[0_1px_2px_rgba(0,0,0,.08)]",
          state === "done" &&
            "bg-gradient-to-br from-[var(--color-lesson-mint)] to-[#2a9c72] text-white",
          state === "current" &&
            "bg-gradient-to-br from-[var(--color-lesson-brand)] to-[var(--color-lesson-brand-2)] text-white shadow-[0_0_0_4px_rgba(109,95,216,.18),0_2px_8px_rgba(109,95,216,.35)]",
          state === "upcoming" && "bg-lesson-line text-lesson-ink-dim",
        )}
      >
        {state === "done" ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          index + 1
        )}
      </div>
      {!isLast && (
        <div
          className={cn(
            "w-[3px] flex-1 rounded-full",
            state === "done"
              ? "bg-gradient-to-b from-[var(--color-lesson-mint)] to-[#2a9c72]"
              : "bg-lesson-line",
          )}
          style={{ minHeight: "24px" }}
        />
      )}
    </div>
  );
}

function LessonCopy({ lesson }: { lesson: EnglishLessonSummary }) {
  return (
    <div>
      <h3 className="text-card-title text-ink">{lesson.title}</h3>
      <p className="text-body text-muted mt-2">{lesson.outcome}</p>
    </div>
  );
}
