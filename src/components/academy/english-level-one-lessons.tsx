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
}: {
  lesson: EnglishLessonSummary;
  index: number;
  completed: boolean;
}) {
  if (!lesson.available) {
    return (
      <li className="border-border grid min-h-28 gap-3 border-b py-6 opacity-60 sm:grid-cols-[48px_1fr_auto] sm:items-center sm:gap-5">
        <LessonNumber value={String(index + 1).padStart(2, "0")} muted />
        <LessonCopy lesson={lesson} />
        <span className="text-metadata text-muted">Coming soon</span>
      </li>
    );
  }

  return (
    <li className="border-border border-b">
      <Link
        href={`/academy/courses/english-for-beginners/lessons/${lesson.slug}`}
        className="group grid min-h-28 gap-3 py-6 sm:grid-cols-[48px_1fr_auto] sm:items-center sm:gap-5"
      >
        <LessonNumber
          value={completed ? "✓" : String(index + 1).padStart(2, "0")}
        />
        <LessonCopy lesson={lesson} />
        <span className="text-button text-indigo-dark inline-flex items-center gap-2">
          {completed ? "Revize" : "Kòmanse"}
          <ArrowRightIcon className="size-4" />
        </span>
      </Link>
    </li>
  );
}

function LessonNumber({
  value,
  muted = false,
}: {
  value: string;
  muted?: boolean;
}) {
  return (
    <span
      className={
        muted ? "text-metadata text-muted" : "text-metadata text-indigo-dark"
      }
    >
      {value}
    </span>
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
