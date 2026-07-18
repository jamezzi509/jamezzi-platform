"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";
import {
  courseProgressChangedEvent,
  clearLessonProgressFromBrowser,
  clearCourseProgressFromBrowser,
  isProgressEventFor,
  readCompletedLessons,
  type CourseProgressNamespace,
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
  completionHref,
  completionTitle,
  completionAction,
  completionEyebrow,
  resetCourse,
  resetLessonSlugs,
  newEyebrow,
  newTitle,
  newAction,
  resetLabel = "Module 1",
  language = "en",
}: {
  lessons: ResumeLesson[];
  progressStorageKey: string;
  lessonBaseHref: string;
  assessmentHref: string;
  completionHref?: string;
  completionTitle?: string;
  completionAction?: string;
  completionEyebrow?: string;
  resetCourse?: CourseProgressNamespace;
  resetLessonSlugs?: string[];
  newEyebrow?: string;
  newTitle?: string;
  newAction?: string;
  resetLabel?: string;
  language?: "en" | "ht" | "fr";
}) {
  const [completed, setCompleted] = useState<string[] | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

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
    ? (completionHref ?? assessmentHref)
    : `${lessonBaseHref}/${nextLesson.slug}`;

  const copy =
    language === "ht"
      ? {
          eyebrow: isComplete
            ? (completionEyebrow ?? "LESON YO FINI")
            : isNew
              ? "KÒMANSE LÈ OU PARE"
              : "KONTINYE KOTE OU TE RETE A",
          title: isComplete
            ? (completionTitle ?? "Ou pare pou evalyasyon final la.")
            : isNew
              ? "Premye leson ou pare."
              : nextLesson.title,
          action: isComplete
            ? (completionAction ?? "Pran evalyasyon final la")
            : isNew
              ? "Kòmanse premye leson an"
              : "Kontinye aprann",
          progress: `${completedCount} sou ${lessons.length} leson fini`,
        }
      : language === "fr"
        ? {
            eyebrow: isComplete
              ? (completionEyebrow ?? "LEÇONS TERMINÉES")
              : isNew
                ? (newEyebrow ?? "COMMENCEZ QUAND VOUS ÊTES PRÊT")
                : "REPRENEZ OÙ VOUS VOUS ÊTES ARRÊTÉ",
            title: isComplete
              ? (completionTitle ?? "Vous êtes prêt pour l’évaluation finale.")
              : isNew
                ? (newTitle ?? "Votre première leçon est prête.")
                : nextLesson.title,
            action: isComplete
              ? (completionAction ?? "Passer l’évaluation finale")
              : isNew
                ? (newAction ?? "Commencer la première leçon")
                : "Continuer à apprendre",
            progress: `${completedCount} leçons terminées sur ${lessons.length}`,
          }
        : {
            eyebrow: isComplete
              ? (completionEyebrow ?? "COURSE LESSONS COMPLETE")
              : isNew
                ? (newEyebrow ?? "READY WHEN YOU ARE")
                : "CONTINUE WHERE YOU LEFT OFF",
            title: isComplete
              ? (completionTitle ?? "You’re ready for the final assessment.")
              : isNew
                ? (newTitle ?? "Your first lesson is ready.")
                : nextLesson.title,
            action: isComplete
              ? (completionAction ?? "Take the final assessment")
              : isNew
                ? (newAction ?? "Start the first lesson")
                : "Continue learning",
            progress: `${completedCount} of ${lessons.length} lessons completed`,
          };

  const resetCopy =
    language === "ht"
      ? {
          prompt: `Efase pwogrè ${resetLabel} nan navigatè sa a?`,
          cancel: "Anile",
          confirm: "Wi, rekòmanse",
          trigger: `Rekòmanse ${resetLabel}`,
        }
      : language === "fr"
        ? {
            prompt: `Effacer la progression de ${resetLabel} dans ce navigateur ?`,
            cancel: "Annuler",
            confirm: "Oui, recommencer",
            trigger: `Recommencer ${resetLabel}`,
          }
        : {
            prompt: `Clear ${resetLabel} progress on this browser?`,
            cancel: "Cancel",
            confirm: "Yes, start over",
            trigger: `Start ${resetLabel} over`,
          };

  function resetProgress() {
    if (!resetCourse) return;
    if (resetLessonSlugs) {
      clearLessonProgressFromBrowser(progressStorageKey, resetLessonSlugs);
    } else {
      clearCourseProgressFromBrowser(resetCourse);
    }
    setCompleted([]);
    setConfirmReset(false);
    window.location.reload();
  }

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
        <div className="flex flex-col items-stretch gap-3 sm:items-start lg:items-end">
          <Link
            href={href}
            className="bg-indigo inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold text-white"
          >
            {copy.action} <ArrowRightIcon className="size-4" />
          </Link>
          {resetCourse &&
            !isNew &&
            (confirmReset ? (
              <div className="flex flex-wrap items-center justify-end gap-2 rounded-xl border border-[#E4AAA5] bg-[#FFF2F1] p-3">
                <span className="w-full text-right text-[15px] font-semibold text-[#7F2824]">
                  {resetCopy.prompt}
                </span>
                <button
                  type="button"
                  onClick={() => setConfirmReset(false)}
                  className="min-h-10 px-3 text-[15px] font-semibold text-[#5E5966]"
                >
                  {resetCopy.cancel}
                </button>
                <button
                  type="button"
                  onClick={resetProgress}
                  className="min-h-10 rounded-full bg-[#A63731] px-4 text-[15px] font-semibold text-white"
                >
                  {resetCopy.confirm}
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmReset(true)}
                className="min-h-11 px-3 text-base font-semibold text-[#8C302B] underline underline-offset-4"
              >
                {resetCopy.trigger}
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}
