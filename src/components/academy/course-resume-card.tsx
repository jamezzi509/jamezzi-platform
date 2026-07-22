"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";
import {
  courseProgressChangedEvent,
  isProgressEventFor,
  readCompletedLessons,
} from "@/lib/course-progress";

interface ResumeLesson {
  slug: string;
  title: string;
}

export function CourseResumeCard({
  lessons,
  progressStorageKey,
  lessonBaseHref,
  assessmentHref,
  language = "en",
  completeOverride,
}: {
  lessons: ResumeLesson[];
  progressStorageKey: string;
  lessonBaseHref: string;
  assessmentHref: string;
  language?: "en" | "ht";
  /**
   * Override the "all lessons complete" state -- default copy/href assumes
   * a final assessment exists. Courses still mid-build (more modules coming)
   * should pass this so "complete" means "everything published so far",
   * not a false claim that the whole course or a final exam is done.
   */
  completeOverride?: {
    href: string;
    eyebrow: string;
    title: string;
    action: string;
  };
}) {
  const [completed, setCompleted] = useState<string[] | null>(null);

  useEffect(() => {
    const refresh = () => {
      setCompleted(readCompletedLessons(progressStorageKey));
    };
    const handleProgress = (event: Event) => {
      if (isProgressEventFor(event, progressStorageKey)) refresh();
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === progressStorageKey) refresh();
    };
    const timer = window.setTimeout(refresh, 0);
    window.addEventListener(courseProgressChangedEvent, handleProgress);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(courseProgressChangedEvent, handleProgress);
      window.removeEventListener("storage", handleStorage);
    };
  }, [progressStorageKey]);

  if (completed === null || lessons.length === 0) return null;

  const completedSet = new Set(completed);
  const completedCount = lessons.filter((lesson) =>
    completedSet.has(lesson.slug),
  ).length;
  const nextLesson = lessons.find((lesson) => !completedSet.has(lesson.slug));
  const percent = Math.round((completedCount / lessons.length) * 100);
  const isComplete = !nextLesson;
  const isNew = completedCount === 0;
  const href = isComplete
    ? (completeOverride?.href ?? assessmentHref)
    : `${lessonBaseHref}/${nextLesson.slug}`;

  const copy =
    language === "ht"
      ? {
          eyebrow: isComplete
            ? (completeOverride?.eyebrow ?? "LESON YO FINI")
            : isNew
              ? "KÒMANSE LÈ OU PARE"
              : "KONTINYE KOTE OU TE RETE A",
          title: isComplete
            ? (completeOverride?.title ?? "Ou pare pou evalyasyon final la.")
            : isNew
              ? "Premye leson ou pare."
              : nextLesson.title,
          action: isComplete
            ? (completeOverride?.action ?? "Pran evalyasyon final la")
            : isNew
              ? "Kòmanse premye leson an"
              : "Kontinye aprann",
          progress: `${completedCount} sou ${lessons.length} leson fini`,
        }
      : {
          eyebrow: isComplete
            ? (completeOverride?.eyebrow ?? "COURSE LESSONS COMPLETE")
            : isNew
              ? "READY WHEN YOU ARE"
              : "CONTINUE WHERE YOU LEFT OFF",
          title: isComplete
            ? (completeOverride?.title ?? "You’re ready for the final assessment.")
            : isNew
              ? "Your first lesson is ready."
              : nextLesson.title,
          action: isComplete
            ? (completeOverride?.action ?? "Take the final assessment")
            : isNew
              ? "Start the first lesson"
              : "Continue learning",
          progress: `${completedCount} of ${lessons.length} lessons completed`,
        };

  return (
    <section className="border-border mt-12 overflow-hidden rounded-2xl border bg-white shadow-[0_18px_55px_rgba(35,31,70,0.06)]">
      <div className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
        <div>
          <p className="text-eyebrow text-indigo-dark">{copy.eyebrow}</p>
          <h2 className="text-feature-headline-sm text-ink mt-3">
            {copy.title}
          </h2>
          <p className="text-metadata text-muted mt-3">{copy.progress}</p>
          <div
            className="mt-4 h-2 max-w-xl overflow-hidden rounded-full bg-[#ECEAF5]"
            role="progressbar"
            aria-label={copy.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent}
          >
            <div
              className="bg-indigo h-full rounded-full transition-[width]"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
        <Link
          href={href}
          className="bg-indigo inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
        >
          {copy.action} <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </section>
  );
}
