"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";
import {
  englishLevelOneLessons,
  type EnglishLessonSummary,
} from "@/content/english-level-one";

export const englishProgressStorageKey =
  "jamezzi:english:first-english:completed";

export function EnglishLevelOneLessons() {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    let savedLessons: string[] = [];
    try {
      const saved = window.localStorage.getItem(englishProgressStorageKey);
      if (saved) savedLessons = JSON.parse(saved) as string[];
    } catch {
      // Lessons remain available if browser storage is blocked.
    }
    const timer = window.setTimeout(() => setCompleted(savedLessons), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const completedCount = completed.filter((slug) =>
    englishLevelOneLessons.some((lesson) => lesson.slug === slug),
  ).length;

  return (
    <div>
      <div className="border-border mb-6 flex items-center justify-between gap-5 border-y py-4">
        <p className="text-metadata text-muted" aria-live="polite">
          {completedCount} of {englishLevelOneLessons.length} completed
        </p>
        <div className="bg-border h-1.5 w-28 overflow-hidden rounded-full sm:w-44">
          <div
            className="bg-indigo h-full rounded-full transition-[width]"
            style={{
              width: `${(completedCount / englishLevelOneLessons.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <ol className="border-border border-t">
        {englishLevelOneLessons.map((lesson, index) => (
          <LessonRow
            key={lesson.slug}
            lesson={lesson}
            index={index}
            completed={completed.includes(lesson.slug)}
          />
        ))}
      </ol>
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
        href={`/academy/courses/english-for-beginners/level-1/${lesson.slug}`}
        className="group grid min-h-28 gap-3 py-6 sm:grid-cols-[48px_1fr_auto] sm:items-center sm:gap-5"
      >
        <LessonNumber
          value={completed ? "✓" : String(index + 1).padStart(2, "0")}
        />
        <LessonCopy lesson={lesson} />
        <span className="text-button text-indigo-dark inline-flex items-center gap-2">
          {completed ? "Review" : "Begin"}
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
