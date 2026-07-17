"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon, LaptopIcon } from "@/components/ui/icons";
import {
  computerProgressStorageKey,
  readCompletedLessons,
} from "@/lib/course-progress";

export function ComputerPlatformOnboarding({
  firstLessonSlug,
  lessons,
}: {
  firstLessonSlug: string;
  lessons: { slug: string; title: string }[];
}) {
  const [completed, setCompleted] = useState<string[] | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(
      () => setCompleted(readCompletedLessons(computerProgressStorageKey)),
      0,
    );
    return () => window.clearTimeout(timer);
  }, []);

  if (completed === null) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-5">
        <p className="text-muted text-base" role="status">
          Preparing your course…
        </p>
      </main>
    );
  }

  const completedSet = new Set(completed);
  const nextLesson = lessons.find((lesson) => !completedSet.has(lesson.slug));
  const completedCount = lessons.filter((lesson) =>
    completedSet.has(lesson.slug),
  ).length;
  const hasStarted = completedCount > 0;
  const moduleComplete = !nextLesson;

  return (
    <main className="min-h-screen bg-white pt-[72px]">
      <div className="mx-auto max-w-[680px] px-5 py-14 sm:py-20">
        <div className="bg-indigo-light text-indigo-dark mb-7 inline-flex size-14 items-center justify-center rounded-full">
          <LaptopIcon className="size-6" />
        </div>
        <p className="text-indigo-dark text-sm font-bold tracking-[0.1em] uppercase">
          {moduleComplete
            ? "MODULE 1 COMPLETE"
            : hasStarted
              ? "CONTINUE MODULE 1"
              : "WELCOME TO THE COURSE"}
        </p>
        <h1 className="font-display text-ink mt-3 text-[34px] leading-[1.12] font-semibold sm:text-[44px]">
          {moduleComplete
            ? "You completed Start with Confidence."
            : hasStarted
              ? "Continue where you left off."
              : "Start without guessing what kind of computer you have."}
        </h1>

        {moduleComplete ? (
          <p className="text-muted mt-5 text-lg leading-[1.7]">
            All four lessons in Module 1 are recorded. The remaining modules are
            still in production, so there is no final exam or certificate yet.
            You can review any Module 1 lesson from the course overview.
          </p>
        ) : (
          <>
            <p className="text-muted mt-5 text-lg leading-[1.7]">
              The first lesson works for everyone and does not require a
              computer. In the next lesson, a clear visual will help you
              identify Windows or Mac, confirm it from the computer itself, and
              save that path once for later lessons.
            </p>
            <p className="text-muted mt-4 text-lg leading-[1.7]">
              A laptop is the type of device—not the operating system. If your
              screen is neither Windows nor Mac, the course will tell you to
              pause instead of forcing you to guess.
            </p>
          </>
        )}

        {hasStarted && (
          <div className="mt-7">
            <div className="text-muted mb-2 flex items-center justify-between gap-4 text-base">
              <span>
                {completedCount} of {lessons.length} Module 1 lessons completed
              </span>
              <strong className="text-ink">
                {Math.round((completedCount / lessons.length) * 100)}%
              </strong>
            </div>
            <div
              className="h-2 overflow-hidden rounded-full bg-[#ECEAF5]"
              role="progressbar"
              aria-label={`${completedCount} of ${lessons.length} Module 1 lessons completed`}
              aria-valuemin={0}
              aria-valuemax={lessons.length}
              aria-valuenow={completedCount}
            >
              <div
                className="bg-indigo h-full rounded-full"
                style={{ width: `${(completedCount / lessons.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href={
              moduleComplete
                ? "/academy/courses/computer-internet-essentials"
                : `/academy/courses/computer-internet-essentials/learn/${nextLesson?.slug ?? firstLessonSlug}`
            }
            className="bg-indigo inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-base font-semibold text-white"
          >
            {moduleComplete
              ? "View the course overview"
              : hasStarted
                ? "Continue learning"
                : "Start Lesson 1"}
            <ArrowRightIcon className="size-4" />
          </Link>
          {hasStarted && !moduleComplete && nextLesson && (
            <p className="text-muted text-base">Next: {nextLesson.title}</p>
          )}
        </div>
      </div>
    </main>
  );
}
