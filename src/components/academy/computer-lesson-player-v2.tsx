"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type {
  ComputerLessonV2,
  LessonSection,
  LessonVisual,
} from "@/content/computer-course-v2";
import {
  computerCourseModulesV2,
  getComputerModuleLessonsV2,
} from "@/content/computer-course-v2";
import {
  computerProgressStorageKey,
  readCompletedLessons,
  saveCompletedLesson,
} from "@/lib/course-progress";
import { cn } from "@/lib/cn";
import {
  useComputerPlatform,
  type PreferredPlatform,
} from "@/lib/use-computer-platform";
import { ComputerModuleOneInteraction } from "@/components/academy/computer-module-one-interactions";
import { ComputerModuleTwoInteraction } from "@/components/academy/computer-module-two-interactions";
import { ComputerModuleThreeInteraction } from "@/components/academy/computer-module-three-interactions";
import { ComputerModuleFourInteraction } from "@/components/academy/computer-module-four-interactions";
import { ComputerModuleFiveInteraction } from "@/components/academy/computer-module-five-interactions";
import {
  isModuleFiveVisual,
  ModuleFiveVisual,
} from "@/components/academy/computer-module-five-visuals";

type Platform = PreferredPlatform;

export function ComputerLessonPlayerV2({
  lesson,
}: {
  lesson: ComputerLessonV2;
}) {
  const { platform, verified, setPlatform, clearPlatform, loaded } =
    useComputerPlatform();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenuRef = useRef<HTMLButtonElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const [practiceTasks, setPracticeTasks] = useState<boolean[]>(() =>
    lesson.practice ? lesson.practice.tasks.map(() => false) : [],
  );
  const [practiceEvidence, setPracticeEvidence] = useState<boolean[]>(() =>
    lesson.practice ? lesson.practice.evidence.map(() => false) : [],
  );
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [interactiveComplete, setInteractiveComplete] = useState(
    !lesson.interaction,
  );
  const [interactionLoaded, setInteractionLoaded] = useState(false);
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);
  const checkCorrect = selectedAnswer === lesson.check.correctIndex;
  const taskComplete = lesson.practice
    ? lesson.practice.taskRequirement === "one"
      ? practiceTasks.some(Boolean)
      : practiceTasks.length > 0 && practiceTasks.every(Boolean)
    : true;
  const practiceComplete = lesson.practice
    ? taskComplete &&
      practiceEvidence.length > 0 &&
      practiceEvidence.every(Boolean)
    : true;
  const completionReady =
    practiceComplete && interactiveComplete && checkCorrect;

  const moduleLessons = getComputerModuleLessonsV2(lesson.moduleId);
  const moduleNumber = Number(lesson.moduleId.slice(1));
  const moduleTitle =
    computerCourseModulesV2.find((module) => module.order === moduleNumber)
      ?.title ?? "Computer & Internet Essentials";
  const index = moduleLessons.findIndex((item) => item.id === lesson.id);
  const previous = index > 0 ? moduleLessons[index - 1] : null;
  const next =
    index >= 0 && index < moduleLessons.length - 1
      ? moduleLessons[index + 1]
      : null;

  const lessonStateKey = `jamezzi:computer:essentials:lesson-state:${lesson.slug}`;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const completed = readCompletedLessons(computerProgressStorageKey);
      setCompletedSlugs(completed);
      setSaved(completed.includes(lesson.slug));
      try {
        const raw = window.localStorage.getItem(lessonStateKey);
        if (raw) {
          const state = JSON.parse(raw) as {
            tasks?: boolean[];
            evidence?: boolean[];
            selectedAnswer?: number | null;
            attempts?: number;
            interactiveComplete?: boolean;
          };
          if (Array.isArray(state.tasks)) setPracticeTasks(state.tasks);
          if (Array.isArray(state.evidence))
            setPracticeEvidence(state.evidence);
          if (
            state.selectedAnswer === null ||
            typeof state.selectedAnswer === "number"
          )
            setSelectedAnswer(state.selectedAnswer);
          if (typeof state.attempts === "number") setAttempts(state.attempts);
          if (state.interactiveComplete === true) setInteractiveComplete(true);
        }
      } catch {
        // A blocked or malformed local state starts this lesson cleanly.
      }
      setInteractionLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [lesson.slug, lessonStateKey]);

  useEffect(() => {
    if (!interactionLoaded) return;
    try {
      window.localStorage.setItem(
        lessonStateKey,
        JSON.stringify({
          tasks: practiceTasks,
          evidence: practiceEvidence,
          selectedAnswer,
          attempts,
          interactiveComplete,
        }),
      );
    } catch {
      // The lesson still works when browser storage is unavailable.
    }
  }, [
    attempts,
    interactionLoaded,
    interactiveComplete,
    lessonStateKey,
    practiceEvidence,
    practiceTasks,
    selectedAnswer,
  ]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const menuTrigger = menuTriggerRef.current;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
      if (event.key !== "Tab") return;
      const dialog = closeMenuRef.current?.closest('[role="dialog"]');
      const focusable = dialog?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeMenuRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      menuTrigger?.focus();
    };
  }, [mobileMenuOpen]);

  function markComplete() {
    if (!completionReady) return;
    const result = saveCompletedLesson(computerProgressStorageKey, lesson.slug);
    setSaved(result !== "blocked");
    if (result !== "blocked") {
      setCompletedSlugs((current) =>
        current.includes(lesson.slug) ? current : [...current, lesson.slug],
      );
    }
  }

  const completedCount = completedSlugs.filter((slug) =>
    moduleLessons.some((item) => item.slug === slug),
  ).length;
  const pageProgress = Math.round(
    (completedCount / moduleLessons.length) * 100,
  );

  if (!loaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F6FB] px-5">
        <p className="text-base text-[#696675]" role="status">
          Preparing your course path…
        </p>
      </main>
    );
  }

  if ((!platform || !verified) && lesson.track === "windows-mac")
    return <PlatformIdentification onChoose={setPlatform} />;

  return (
    <main className="min-h-screen bg-[#F7F6FB] text-[#171621]">
      <header className="sticky top-0 z-30 border-b border-[#E7E4EE] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/academy"
            className="font-display text-2xl font-semibold tracking-[-0.03em]"
          >
            Jamezzi<span className="text-indigo">.</span>
          </Link>
          <div className="flex items-center gap-3 text-sm text-[#696675]">
            <span className="hidden sm:inline">
              Module {moduleNumber} progress
            </span>
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[#ECEAF2] sm:w-36">
              <div
                className="bg-indigo h-full rounded-full"
                style={{ width: `${pageProgress}%` }}
              />
            </div>
            <strong className="text-[#302D3A]">{pageProgress}%</strong>
          </div>
        </div>
      </header>

      <nav
        className="sticky top-16 z-20 border-b border-[#E7E4EE] bg-white px-4 py-2.5 lg:hidden"
        aria-label="Mobile course navigation"
      >
        <div className="mx-auto flex max-w-[880px] items-center justify-between gap-3">
          <Link
            href="/academy/courses/computer-internet-essentials"
            className="text-[15px] font-semibold text-[#696675]"
          >
            ← Course overview
          </Link>
          <button
            ref={menuTriggerRef}
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-indigo-dark rounded-full border border-[#DCD7E5] bg-[#F7F6FB] px-3.5 py-2 text-[15px] font-bold"
            aria-haspopup="dialog"
          >
            Module {moduleNumber} · Lessons
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={`Module ${moduleNumber} lessons`}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#171621]/55"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close lesson navigation"
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[82vh] overflow-y-auto rounded-t-[24px] bg-white px-5 pt-5 pb-8 shadow-[0_-20px_60px_rgba(23,22,33,0.22)]">
            <div className="mx-auto mb-5 h-1.5 w-11 rounded-full bg-[#D7D2DE]" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-indigo-dark text-sm font-bold tracking-[0.12em] uppercase">
                  Module {moduleNumber}
                </p>
                <h2 className="font-display mt-1 text-2xl">{moduleTitle}</h2>
              </div>
              <button
                ref={closeMenuRef}
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex size-10 items-center justify-center rounded-full bg-[#F0EEF5] text-xl"
                aria-label="Close module lessons"
              >
                ×
              </button>
            </div>
            <ol className="mt-6 grid gap-2">
              {moduleLessons.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/academy/courses/computer-internet-essentials/learn/${item.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={item.id === lesson.id ? "page" : undefined}
                    className={cn(
                      "grid grid-cols-[34px_1fr] items-start gap-3 rounded-xl border px-3 py-3.5 text-[15px] leading-snug",
                      item.id === lesson.id
                        ? "border-[#CFC9FF] bg-[#EFEDFF] font-semibold text-[#302B62]"
                        : "border-[#E7E4EE] text-[#5F5A68]",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-7 items-center justify-center rounded-full text-sm font-bold",
                        item.id === lesson.id
                          ? "bg-indigo text-white"
                          : "bg-[#F0EEF5]",
                      )}
                    >
                      {item.order}
                    </span>
                    <span>
                      {item.title}
                      {item.id === lesson.id && (
                        <span className="text-indigo-dark mt-1 block text-sm font-medium">
                          Current lesson
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
            <Link
              href="/academy/courses/computer-internet-essentials"
              className="text-indigo-dark mt-5 flex min-h-12 items-center justify-center rounded-xl border border-[#DCD7E5] text-base font-bold"
            >
              View all 15 modules
            </Link>
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[270px_minmax(0,1fr)]">
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] overflow-y-auto border-r border-[#E7E4EE] bg-white px-5 py-7 lg:block">
          <Link
            href="/academy/courses/computer-internet-essentials"
            className="text-sm text-[#696675]"
          >
            ← Course overview
          </Link>
          <p className="text-indigo-dark mt-8 text-sm font-bold tracking-[0.13em] uppercase">
            Module {moduleNumber}
          </p>
          <h2 className="font-display mt-2 text-2xl leading-tight">
            {moduleTitle}
          </h2>
          <ol className="mt-6 grid gap-1.5">
            {moduleLessons.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/academy/courses/computer-internet-essentials/learn/${item.slug}`}
                  aria-current={item.id === lesson.id ? "page" : undefined}
                  className={cn(
                    "grid grid-cols-[28px_1fr] gap-2.5 rounded-xl px-2.5 py-3 text-[15px] leading-snug",
                    item.id === lesson.id
                      ? "bg-[#EFEDFF] font-semibold text-[#302B62]"
                      : "text-[#696675] hover:bg-[#F7F6FB]",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-6 items-center justify-center rounded-full text-sm font-bold",
                      item.id === lesson.id
                        ? "bg-indigo text-white"
                        : "bg-[#F0EEF5]",
                    )}
                  >
                    {item.order}
                  </span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-xl bg-[#F7F6FB] p-4 text-[15px] leading-relaxed text-[#696675]">
            <strong className="block text-[#302D3A]">
              Completion means evidence
            </strong>
            Read the lesson, perform the practice, verify the result, and answer
            the decision check.
          </div>
        </aside>

        <article className="min-w-0">
          <div className="mx-auto max-w-[880px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="text-indigo-dark flex flex-wrap items-center gap-2 text-sm font-bold tracking-[0.09em] uppercase">
              <span>Lesson {lesson.order}</span>
              <span className="size-1 rounded-full bg-[#B9B4C9]" />
              <span>{lesson.estimatedMinutes}</span>
            </div>
            <h1 className="font-display mt-5 max-w-[780px] text-4xl leading-[0.99] font-semibold tracking-[-0.04em] text-balance sm:text-6xl">
              {lesson.title}
            </h1>
            <p className="mt-6 max-w-[720px] text-xl leading-[1.65] text-[#55515F] sm:text-[21px]">
              {lesson.promise}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {lesson.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#E3DFEA] bg-white px-3 py-1.5 text-sm text-[#625E6C]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <section className="relative mt-10 overflow-hidden rounded-[22px] bg-[#242036] px-6 py-7 text-white shadow-[0_20px_55px_rgba(36,32,54,0.18)] sm:px-8">
              <div className="absolute -top-24 -right-20 size-56 rounded-full bg-[radial-gradient(circle,#756CEC,transparent_68%)] opacity-70" />
              <h2 className="font-display relative text-2xl">
                By the end, you can…
              </h2>
              <ul className="relative mt-4 grid gap-2 pl-5 text-[#E9E7F4]">
                {lesson.outcomes.map((outcome) => (
                  <li key={outcome} className="list-disc">
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>

            {lesson.interaction &&
              (lesson.moduleId === "m1" ? (
                <ComputerModuleOneInteraction
                  interaction={lesson.interaction}
                  platform={verified ? platform : null}
                  onChoosePlatform={setPlatform}
                  onComplete={() => setInteractiveComplete(true)}
                />
              ) : lesson.moduleId === "m2" ? (
                <ComputerModuleTwoInteraction
                  interaction={lesson.interaction}
                  onComplete={() => setInteractiveComplete(true)}
                />
              ) : lesson.moduleId === "m3" ? (
                <ComputerModuleThreeInteraction
                  interaction={lesson.interaction}
                  onComplete={() => setInteractiveComplete(true)}
                />
              ) : lesson.moduleId === "m4" ? (
                <ComputerModuleFourInteraction
                  interaction={lesson.interaction}
                  platform={verified ? platform : null}
                  onComplete={() => setInteractiveComplete(true)}
                />
              ) : lesson.moduleId === "m5" ? (
                <ComputerModuleFiveInteraction
                  interaction={lesson.interaction}
                  platform={verified ? platform : null}
                  onComplete={() => setInteractiveComplete(true)}
                />
              ) : null)}

            <div className="mt-20 grid gap-20">
              {lesson.sections.map((section, sectionIndex) => (
                <LessonSectionView
                  key={`${lesson.id}-${sectionIndex}`}
                  section={section}
                  platform={verified ? platform : null}
                  onChangePlatform={clearPlatform}
                />
              ))}
            </div>

            {lesson.practice && (
              <PracticeCard
                practice={lesson.practice}
                tasks={practiceTasks}
                evidence={practiceEvidence}
                onToggleTask={(itemIndex) =>
                  setPracticeTasks((current) =>
                    current.map((value, i) =>
                      i === itemIndex ? !value : value,
                    ),
                  )
                }
                onToggleEvidence={(itemIndex) =>
                  setPracticeEvidence((current) =>
                    current.map((value, i) =>
                      i === itemIndex ? !value : value,
                    ),
                  )
                }
              />
            )}

            <KnowledgeCheck
              check={lesson.check}
              selected={selectedAnswer}
              attempts={attempts}
              onSelect={(answer) => {
                if (checkCorrect) return;
                setSelectedAnswer(answer);
                setAttempts((count) => count + 1);
              }}
            />

            <section className="mt-16 border-t border-[#E2DFE8] pt-8">
              <p className="max-w-2xl text-[17px] leading-[1.7] text-[#55515F]">
                {lesson.closing}
              </p>
              {!completionReady && (
                <p className="mt-5 rounded-xl bg-[#FFF8E8] px-4 py-3 text-[15px] leading-relaxed text-[#875006]">
                  Complete the interactive practice, any real-device result
                  checks, and the knowledge check before recording this lesson.
                </p>
              )}
              {saved && (
                <p
                  className="mt-5 rounded-xl bg-[#EDF9F4] px-4 py-3 text-[15px] font-semibold text-[#126E4E]"
                  role="status"
                >
                  ✓ Lesson completion recorded from your practice confirmation
                  and knowledge check.
                </p>
              )}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  disabled={!completionReady || saved}
                  onClick={markComplete}
                  className={cn(
                    "min-h-12 rounded-xl px-5 text-[15px] font-bold",
                    completionReady && !saved
                      ? "bg-indigo text-white shadow-[0_10px_25px_rgba(79,70,229,0.24)]"
                      : "cursor-not-allowed bg-[#DDD9E3] text-[#8A8491]",
                  )}
                >
                  {saved ? "Lesson completed ✓" : "Complete lesson"}
                </button>
                {next ? (
                  <Link
                    href={`/academy/courses/computer-internet-essentials/learn/${next.slug}`}
                    className="text-sm text-[#696675] sm:text-right"
                  >
                    Next lesson
                    <strong className="block text-[#242036]">
                      {next.title} →
                    </strong>
                  </Link>
                ) : (
                  <Link
                    href="/academy/courses/computer-internet-essentials"
                    className="text-indigo-dark text-sm font-semibold"
                  >
                    Return to course overview →
                  </Link>
                )}
              </div>
              {previous && (
                <Link
                  href={`/academy/courses/computer-internet-essentials/learn/${previous.slug}`}
                  className="mt-7 inline-block text-sm text-[#696675]"
                >
                  ← {previous.title}
                </Link>
              )}
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

function PlatformIdentification({
  onChoose,
}: {
  onChoose: (platform: Platform) => void;
}) {
  const [unsure, setUnsure] = useState(false);
  return (
    <main className="min-h-screen bg-[#F7F6FB] px-5 py-16 text-[#171621] sm:py-20">
      <section className="mx-auto max-w-[820px]">
        <Link
          href="/academy/courses/computer-internet-essentials"
          className="text-base font-semibold text-[#696675]"
        >
          ← Course overview
        </Link>
        <p className="text-indigo-dark mt-10 text-sm font-bold tracking-[0.1em] uppercase">
          Lesson 2 · One-time setup
        </p>
        <h1 className="font-display mt-3 text-4xl leading-tight font-semibold sm:text-5xl">
          Which desktop appears on your computer?
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-[1.7] text-[#5C5865]">
          A laptop is the device type, not the operating system. Compare what
          appears on your screen. Your choice will be saved for later lessons,
          and you can change it intentionally from any platform-specific step.
        </p>
        <figure className="mt-7 overflow-hidden rounded-2xl border border-[#E3DFEA] bg-white">
          <Image
            src="/images/academy/courses/computer-internet-essentials/v2/windows-mac-laptop-comparison.webp"
            alt="A black Windows laptop showing the Windows 11 desktop beside a silver MacBook Air showing the macOS desktop"
            width={1680}
            height={945}
            priority
            sizes="(max-width: 860px) 100vw, 820px"
            className="h-auto w-full"
          />
          <figcaption className="border-t border-[#E3DFEA] px-4 py-3 text-base leading-[1.65] text-[#5E5966]">
            Windows usually shows a Start button and taskbar. macOS shows the
            Apple menu at the upper left and the Dock. Appearance is a clue; the
            lesson will show you how to verify the system itself.
          </figcaption>
        </figure>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => onChoose("windows")}
            className="min-h-24 rounded-2xl border border-[#C9D8F4] bg-[#F2F6FF] p-5 text-left transition hover:border-[#557DC4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5]"
          >
            <strong className="block text-xl">This looks like Windows</strong>
            <span className="mt-1 block text-base text-[#5C5865]">
              Start button · taskbar · File Explorer
            </span>
          </button>
          <button
            type="button"
            onClick={() => onChoose("mac")}
            className="min-h-24 rounded-2xl border border-[#DED2EA] bg-[#FAF5FF] p-5 text-left transition hover:border-[#8A68A4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5]"
          >
            <strong className="block text-xl">This looks like a Mac</strong>
            <span className="mt-1 block text-base text-[#5C5865]">
              Apple menu · Dock · Finder
            </span>
          </button>
        </div>
        <button
          type="button"
          onClick={() => setUnsure((value) => !value)}
          aria-expanded={unsure}
          className="text-indigo-dark mt-5 min-h-12 text-base font-semibold underline underline-offset-4"
        >
          Neither looks like mine / I am still unsure
        </button>
        {unsure && (
          <div className="mt-3 rounded-2xl border border-[#EAD49A] bg-[#FFF8E8] p-5">
            <h2 className="text-lg font-bold">Do not guess.</h2>
            <p className="mt-2 text-base leading-[1.7] text-[#6D5421]">
              You may have ChromeOS on a Chromebook, Linux, an older system, or
              a restricted work or school computer. Record the words and icons
              you see without sharing a serial number, password, email address,
              or product key. Ask a trusted person to help identify the system
              before choosing a path.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

function LessonSectionView({
  section,
  platform,
  onChangePlatform,
}: {
  section: LessonSection;
  platform: Platform | null;
  onChangePlatform: () => void;
}) {
  if (section.type === "prose") {
    return (
      <section>
        {section.eyebrow && <Eyebrow>{section.eyebrow}</Eyebrow>}
        <h2 className="font-display mt-2 text-3xl leading-tight sm:text-4xl">
          {section.title}
        </h2>
        <div className="mt-5 grid gap-4 text-lg leading-[1.75] text-[#494653]">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    );
  }
  if (section.type === "visual") {
    return (
      <section>
        <Eyebrow>See the idea</Eyebrow>
        <h2 className="font-display mt-2 text-3xl leading-tight sm:text-4xl">
          {section.title}
        </h2>
        <div className="mt-6">
          <LessonVisualView visual={section.visual} />
        </div>
        <p className="mt-4 text-base leading-[1.7] text-[#696675]">
          {section.caption}
        </p>
      </section>
    );
  }
  if (section.type === "comparison") {
    return (
      <section>
        <Eyebrow>Compare</Eyebrow>
        <h2 className="font-display mt-2 text-3xl leading-tight sm:text-4xl">
          {section.title}
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {section.items.map((item) => (
            <div
              key={item.label}
              className={cn(
                "rounded-2xl border p-5",
                item.tone === "good"
                  ? "border-[#B7DECE] bg-[#EDF9F4]"
                  : item.tone === "warn"
                    ? "border-[#EAD49A] bg-[#FFF8E8]"
                    : "border-[#E3DFEA] bg-white",
              )}
            >
              <h3 className="font-bold">{item.label}</h3>
              <p className="mt-2 text-base leading-[1.65] text-[#5C5865]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  if (section.type === "steps") {
    const current = platform ? section.tracks?.[platform] : undefined;
    const steps = current?.steps ?? section.steps ?? [];
    const success = current?.success ?? section.success;
    return (
      <section>
        {section.eyebrow && <Eyebrow>{section.eyebrow}</Eyebrow>}
        <h2 className="font-display mt-2 text-3xl leading-tight sm:text-4xl">
          {section.title}
        </h2>
        {section.intro && (
          <p className="mt-4 text-base leading-relaxed text-[#5A5663]">
            {section.intro}
          </p>
        )}
        {section.tracks && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#DCD7E5] bg-[#F7F6FB] px-4 py-3">
            <p className="text-base font-semibold text-[#34303D]">
              {platform
                ? `Showing your saved ${platform === "windows" ? "Windows" : "Mac"} path`
                : "Choose Windows or Mac in the practice above to reveal the matching steps."}
            </p>
            {platform && (
              <button
                type="button"
                onClick={onChangePlatform}
                className="text-indigo-dark text-[15px] font-semibold underline decoration-[#B9B3D7] underline-offset-4"
              >
                Change computer
              </button>
            )}
          </div>
        )}
        <ol className="mt-6 grid gap-3">
          {steps.map((step, index) => (
            <li
              key={step}
              className="grid grid-cols-[40px_1fr] gap-4 rounded-2xl border border-[#E3DFEA] bg-white p-4"
            >
              <span className="text-indigo-dark flex size-9 items-center justify-center rounded-full bg-[#EFEDFF] text-sm font-bold">
                {index + 1}
              </span>
              <span className="pt-1 text-[17px] leading-[1.65] text-[#494653]">
                {step}
              </span>
            </li>
          ))}
        </ol>
        {success && (
          <div className="mt-4 rounded-2xl border border-[#B7DECE] bg-[#EDF9F4] p-5 text-base leading-[1.65] text-[#126E4E]">
            <strong className="block">What success looks like</strong>
            {success}
          </div>
        )}
        {section.recovery && (
          <div className="mt-4 rounded-2xl border border-[#EAD49A] bg-[#FFF8E8] p-5 text-base leading-[1.65] text-[#7F4C08]">
            <strong className="block">If your screen does not match</strong>
            {section.recovery}
          </div>
        )}
      </section>
    );
  }
  if (section.type === "decision") {
    return (
      <details className="group rounded-2xl border border-[#E3DFEA] bg-white p-5">
        <summary className="cursor-pointer list-none">
          <span
            className={cn(
              "mr-2 inline-flex rounded-full px-2.5 py-1 text-sm font-bold uppercase",
              section.tone === "green"
                ? "bg-[#DDF3E8] text-[#126E4E]"
                : section.tone === "pause"
                  ? "bg-[#FFF0C8] text-[#855006]"
                  : "bg-[#FFE1DE] text-[#A63333]",
            )}
          >
            {section.tone === "green"
              ? "Green light"
              : section.tone === "pause"
                ? "Pause"
                : "Stop"}
          </span>
          <strong>{section.title}</strong>
          <p className="mt-3 text-base leading-[1.65] text-[#5C5865]">
            {section.prompt}
          </p>
          <span className="text-indigo-dark mt-3 inline-block text-sm font-semibold group-open:hidden">
            Reveal reasoning ↓
          </span>
        </summary>
        <p className="mt-4 border-t border-[#E7E4EE] pt-4 text-base leading-[1.65] text-[#45414E]">
          {section.answer}
        </p>
      </details>
    );
  }
  return (
    <section
      className={cn(
        "rounded-2xl border p-5",
        section.tone === "warning"
          ? "border-[#EAD49A] bg-[#FFF8E8]"
          : section.tone === "success"
            ? "border-[#B7DECE] bg-[#EDF9F4]"
            : "border-[#C9DAFB] bg-[#EFF5FF]",
      )}
    >
      <h2 className="font-bold">{section.title}</h2>
      <p className="mt-2 text-base leading-[1.65] text-[#514D59]">
        {section.body}
      </p>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-indigo-dark text-sm font-bold tracking-[0.12em] uppercase">
      {children}
    </p>
  );
}
function PracticeCard({
  practice,
  tasks,
  evidence,
  onToggleTask,
  onToggleEvidence,
}: {
  practice: NonNullable<ComputerLessonV2["practice"]>;
  tasks: boolean[];
  evidence: boolean[];
  onToggleTask: (index: number) => void;
  onToggleEvidence: (index: number) => void;
}) {
  return (
    <section className="mt-20 rounded-[22px] border border-[#E3DFEA] bg-white p-6 shadow-[0_18px_55px_rgba(35,27,73,0.09)] sm:p-8">
      <Eyebrow>Your turn</Eyebrow>
      <h2 className="font-display mt-2 text-3xl">{practice.title}</h2>
      <p className="mt-3 text-base leading-relaxed text-[#5B5764]">
        {practice.intro}
      </p>
      <div className="mt-6 grid gap-2.5">
        {practice.tasks.map((task, index) => (
          <label
            key={task}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 text-base leading-[1.65]",
              tasks[index]
                ? "border-[#CFC9FF] bg-[#F2F0FF]"
                : "border-[#E3DFEA]",
            )}
          >
            <input
              type="checkbox"
              checked={tasks[index] ?? false}
              onChange={() => onToggleTask(index)}
              className="accent-indigo mt-1 size-5"
            />
            <span>{task}</span>
          </label>
        ))}
      </div>
      <p className="mt-3 text-[15px] leading-relaxed text-[#696675]">
        {practice.taskRequirement === "one"
          ? "Choose at least one option that is true for you."
          : "Check each step only after you complete it."}
      </p>
      {practice.privacyNote && (
        <p className="mt-5 rounded-xl bg-[#FFF8E8] p-4 text-[15px] leading-relaxed text-[#7F4C08]">
          {practice.privacyNote}
        </p>
      )}
      <div className="mt-7 border-t border-[#E7E4EE] pt-6">
        <h3 className="text-lg font-bold">Confirm the result</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[#696675]">
          These checks are your confirmation, not automatic proof from your
          computer. Mark only what you actually verified.
        </p>
        <div className="mt-3 grid gap-2.5">
          {practice.evidence.map((item, index) => (
            <label
              key={item}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 text-base leading-[1.65]",
                evidence[index]
                  ? "border-[#B7DECE] bg-[#EDF9F4]"
                  : "border-[#E3DFEA]",
              )}
            >
              <input
                type="checkbox"
                checked={evidence[index] ?? false}
                onChange={() => onToggleEvidence(index)}
                className="accent-indigo mt-1 size-5"
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}

function KnowledgeCheck({
  check,
  selected,
  attempts,
  onSelect,
}: {
  check: ComputerLessonV2["check"];
  selected: number | null;
  attempts: number;
  onSelect: (index: number) => void;
}) {
  const correct = selected === check.correctIndex;
  return (
    <section className="mt-14 rounded-[22px] bg-[#242036] p-6 text-white sm:p-8">
      <Eyebrow>Prove the idea</Eyebrow>
      <h2 className="font-display mt-3 text-2xl leading-tight sm:text-3xl">
        {check.prompt}
      </h2>
      <div className="mt-6 grid gap-2.5">
        {check.options.map((option, index) => (
          <button
            key={option}
            type="button"
            disabled={correct}
            onClick={() => onSelect(index)}
            className={cn(
              "rounded-xl border px-4 py-3.5 text-left text-base leading-[1.55] text-[#332F40]",
              selected === index
                ? correct
                  ? "border-[#70C19B] bg-[#DFF5EA]"
                  : "border-[#DD8E88] bg-[#FFE5E3]"
                : "border-white/15 bg-white hover:border-[#A8A0FF]",
              correct && "cursor-default",
            )}
          >
            {option}
          </button>
        ))}
      </div>
      {selected !== null && (
        <p
          className="mt-4 rounded-xl bg-white/10 p-4 text-base leading-[1.65] text-[#E7E3F0]"
          role="status"
        >
          {correct ? check.correctFeedback : check.incorrectFeedback}
          {!correct && " Review the explanation, then try again."}
        </p>
      )}
      {attempts > 0 && (
        <p className="mt-3 text-[15px] text-[#CFC9DC]">
          Attempts recorded on this device: {attempts}
        </p>
      )}
    </section>
  );
}

function LessonVisualView({ visual }: { visual: LessonVisual }) {
  if (isModuleFiveVisual(visual)) return <ModuleFiveVisual visual={visual} />;
  if (visual.kind === "course-method")
    return (
      <div
        className="grid gap-3 sm:grid-cols-3"
        role="img"
        aria-label="Three-step course method: see the idea, practice safely, and use it on your computer"
      >
        {[
          ["1", "See the idea", "Learn the name, purpose, and visual clue."],
          [
            "2",
            "Practice safely",
            "Try it in the course and receive feedback.",
          ],
          [
            "3",
            "Use it for real",
            "Do it on your computer and check the result.",
          ],
        ].map(([number, label, detail]) => (
          <div
            key={number}
            className="rounded-2xl border border-[#DDD8EC] bg-white p-5"
          >
            <span className="bg-indigo flex size-9 items-center justify-center rounded-full text-sm font-bold text-white">
              {number}
            </span>
            <strong className="mt-4 block text-lg">{label}</strong>
            <p className="mt-2 text-[15px] leading-relaxed text-[#666170]">
              {detail}
            </p>
          </div>
        ))}
      </div>
    );
  if (visual.kind === "journey")
    return (
      <VisualRow
        items={[
          { label: "Know", icon: "know", detail: "Understand the machine" },
          {
            label: "Control",
            icon: "control",
            detail: "Use it with confidence",
          },
          { label: "Work", icon: "work", detail: "Complete useful tasks" },
          { label: "Protect", icon: "protect", detail: "Recognize real risk" },
          { label: "Solve", icon: "solve", detail: "Recover from problems" },
        ]}
      />
    );
  if (visual.kind === "progress")
    return (
      <div className="grid gap-3 sm:grid-cols-3">
        <VisualCard
          icon="viewed"
          title="Lesson viewed"
          text="You opened and read it."
        />
        <VisualCard
          icon="practice"
          title="Practice completed"
          text="You performed the task and checked the result."
        />
        <VisualCard
          icon="checkpoint"
          title="Checkpoint passed"
          text="You demonstrated understanding in scenarios."
        />
      </div>
    );
  if (visual.kind === "os-clues")
    return (
      <div>
        <figure className="overflow-hidden rounded-2xl border border-[#E3DFEA] bg-white">
          <Image
            src="/images/academy/courses/computer-internet-essentials/v2/windows-mac-laptop-comparison.webp"
            alt="A black Windows laptop showing the Windows 11 desktop beside a silver MacBook Air showing the macOS desktop"
            width={1680}
            height={945}
            sizes="(max-width: 900px) 100vw, 820px"
            className="h-auto w-full"
          />
          <figcaption className="border-t border-[#E3DFEA] px-4 py-3 text-base leading-[1.65] text-[#5E5966]">
            Compare what appears on the screen. The case color and laptop shape
            alone do not identify the operating system.
          </figcaption>
        </figure>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#D8E3FB] bg-[#F2F6FF] p-5">
            <p className="text-sm font-bold text-[#2455A4]">Windows clues</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <span className="rounded-lg bg-white p-3">⊞ Start</span>
              <span className="rounded-lg bg-white p-3">Taskbar</span>
              <span className="rounded-lg bg-white p-3">Settings</span>
              <span className="rounded-lg bg-white p-3">File Explorer</span>
            </div>
          </div>
          <div className="rounded-2xl border border-[#E6DDF1] bg-[#FAF5FF] p-5">
            <p className="text-sm font-bold text-[#6B3E87]">Mac clues</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <span className="rounded-lg bg-white p-3"> Apple menu</span>
              <span className="rounded-lg bg-white p-3">⌘ Command</span>
              <span className="rounded-lg bg-white p-3">Finder</span>
              <span className="rounded-lg bg-white p-3">Menu bar</span>
            </div>
          </div>
        </div>
      </div>
    );
  if (visual.kind === "system-verification")
    return (
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[22px] border border-[#C9D8F4] bg-[#F4F8FF]">
          <div className="flex items-center justify-between border-b border-[#C9D8F4] bg-[#E7F0FF] px-5 py-4">
            <div>
              <span className="text-xs font-bold tracking-[0.08em] text-[#2455A4] uppercase">
                Windows verification
              </span>
              <strong className="mt-1 block">Settings · System · About</strong>
            </div>
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#1769D2] text-xl text-white">
              ⊞
            </span>
          </div>
          <div className="p-5">
            <div className="rounded-xl bg-white p-5 shadow-[0_8px_25px_rgba(36,85,164,0.08)]">
              <p className="font-bold">Windows specifications</p>
              <dl className="mt-4 grid grid-cols-[110px_1fr] gap-y-3 text-sm">
                <dt className="text-[#647083]">Edition</dt>
                <dd className="font-semibold">Windows 11</dd>
                <dt className="text-[#647083]">Version</dt>
                <dd className="font-semibold">Your version appears here</dd>
              </dl>
              <p className="mt-5 rounded-lg bg-[#FFF8E8] p-3 text-sm text-[#7F4C08]">
                Leave device ID, product ID, and account details private.
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[22px] border border-[#DDD5E6] bg-[#F8F6FA]">
          <div className="flex items-center justify-between border-b border-[#DDD5E6] bg-[#EEEAF2] px-5 py-4">
            <div>
              <span className="text-xs font-bold tracking-[0.08em] text-[#5C426D] uppercase">
                Mac verification
              </span>
              <strong className="mt-1 block">
                Apple menu · About This Mac
              </strong>
            </div>
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#242036] text-xl text-white">
              
            </span>
          </div>
          <div className="p-5">
            <div className="rounded-xl bg-white p-5 text-center shadow-[0_8px_25px_rgba(70,53,82,0.08)]">
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#7168E8,#B45BDD)] text-2xl text-white">
                
              </span>
              <p className="mt-4 font-bold">macOS</p>
              <p className="mt-1 text-sm text-[#696675]">
                The system name and version appear here.
              </p>
              <p className="mt-5 rounded-lg bg-[#FFF8E8] p-3 text-left text-sm text-[#7F4C08]">
                Leave the serial number and account details private.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  if (visual.kind === "computer-families")
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          [
            "01",
            "Laptop",
            "computer-family-laptop.webp",
            "One folding unit with built-in keyboard and touchpad",
          ],
          [
            "02",
            "Desktop",
            "computer-family-desktop.webp",
            "Separate monitor, tower, keyboard, and mouse",
          ],
          [
            "03",
            "All-in-one",
            "computer-family-all-in-one.webp",
            "Computer built into the display housing",
          ],
          [
            "04",
            "Tablet / 2-in-1",
            "computer-family-tablet-2-in-1.webp",
            "Touchscreen with a detachable keyboard",
          ],
        ].map(([number, title, filename, detail]) => (
          <figure
            key={title}
            className="overflow-hidden rounded-2xl border border-[#DDD8E8] bg-white"
          >
            <Image
              src={`/images/academy/courses/computer-internet-essentials/v2/${filename}`}
              alt={`${title}: ${detail}`}
              width={720}
              height={720}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="aspect-square h-auto w-full object-cover"
            />
            <figcaption className="border-t border-[#E3DFEA] p-4">
              <span className="text-xs font-bold text-[#5146CC]">{number}</span>
              <strong className="mt-1 block text-lg">{title}</strong>
              <span className="mt-1 block text-sm leading-relaxed text-[#696675]">
                {detail}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    );
  if (visual.kind === "outside-parts")
    return (
      <div className="overflow-hidden rounded-[22px] border border-[#DDD8E8] bg-white">
        <div className="relative">
          <Image
            src="/images/academy/courses/computer-internet-essentials/v2/laptop-parts-photo.webp"
            alt="Open laptop photographed from above so its exterior parts can be identified"
            width={1680}
            height={945}
            sizes="(max-width: 900px) 100vw, 820px"
            className="h-auto w-full"
          />
          {[
            ["Camera", "top-[6%] left-[46%]"],
            ["Display", "top-[25%] left-[18%]"],
            ["Keyboard", "top-[66%] left-[43%]"],
            ["Touchpad", "top-[82%] left-[55%]"],
            ["Ports", "top-[72%] left-[5%]"],
          ].map(([label, position]) => (
            <span
              key={label}
              className={cn(
                "absolute rounded-full border border-white/70 bg-[#242036]/90 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur",
                position,
              )}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 border-t border-[#E3DFEA] sm:grid-cols-4">
          {[
            ["Input", "Keyboard · touchpad · camera"],
            ["Output", "Display · speakers"],
            ["Power", "Button · charger · battery"],
            ["Cooling", "Vents · airflow"],
          ].map(([label, detail]) => (
            <div
              key={label}
              className="border-r border-[#E3DFEA] p-4 last:border-r-0"
            >
              <strong className="block text-[15px]">{label}</strong>
              <span className="mt-1 block text-sm leading-snug text-[#696675]">
                {detail}
              </span>
            </div>
          ))}
        </div>
        <div className="grid gap-3 border-t border-[#E3DFEA] bg-[#F8F7FB] p-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Built-in camera",
              filename: "part-webcam-closeup.webp",
              alt: "Close-up of a built-in webcam centered in the top bezel of a laptop display",
              detail: "Usually in the frame above the screen",
            },
            {
              title: "Cooling vents",
              filename: "part-vents-closeup.webp",
              alt: "Close-up of cooling vent grilles on the underside and rear edge of a laptop",
              detail: "Openings that allow heat and moving air to escape",
            },
            {
              title: "Charging port",
              filename: "part-charging-port-closeup.webp",
              alt: "Close-up of a round laptop charging port and its matching barrel charger plug",
              detail:
                "This example uses a round barrel connector; other computers use USB-C or another shape",
            },
            {
              title: "Power button",
              filename: "power-button-windows-laptop.webp",
              alt: "Close-up of a laptop power button marked with the universal power symbol",
              detail:
                "Starts the computer; holding it down is not the normal shutdown method",
            },
            {
              title: "Desktop monitor and tower",
              filename: "computer-family-desktop.webp",
              alt: "Desktop setup with a separate monitor, computer tower, keyboard, and mouse",
              detail:
                "The monitor shows the picture; the tower is the computer unit",
            },
          ].map(({ title, filename, alt, detail }) => (
            <figure
              key={title}
              className="overflow-hidden rounded-xl border border-[#DDD8E8] bg-white"
            >
              <Image
                src={`/images/academy/courses/computer-internet-essentials/v2/${filename}`}
                alt={alt}
                width={1200}
                height={900}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 210px"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <figcaption className="p-3">
                <strong className="block text-[15px]">{title}</strong>
                <span className="mt-1 block text-sm leading-snug text-[#696675]">
                  {detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  if (visual.kind === "port-map")
    return (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["USB-A", "connector-usb-a.webp", "Rectangular USB plug"],
          ["USB-C", "connector-usb-c.webp", "Small reversible USB plug"],
          ["HDMI", "connector-hdmi.webp", "Full-size display plug"],
          [
            "Ethernet",
            "connector-ethernet.webp",
            "RJ45 plug with retaining clip",
          ],
          ["3.5 mm audio", "connector-audio-jack.webp", "Round audio plug"],
          [
            "SD card",
            "connector-sd-card.webp",
            "Full-size removable memory card",
          ],
        ].map(([name, filename, description], index) => (
          <figure
            key={name}
            className="overflow-hidden rounded-2xl border border-[#DDD8E8] bg-white"
          >
            <Image
              src={`/images/academy/courses/computer-internet-essentials/v2/${filename}`}
              alt={`${name}: ${description}`}
              width={720}
              height={720}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 270px"
              className="aspect-square h-auto w-full bg-[#F7F3ED] object-cover"
            />
            <figcaption className="border-t border-[#E3DFEA] p-4">
              <span className="text-xs font-bold text-[#5146CC]">
                0{index + 1}
              </span>
              <strong className="mt-1 block">{name}</strong>
              <span className="mt-1 block text-sm text-[#696675]">
                {description}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    );
  if (visual.kind === "cable-match")
    return (
      <div className="overflow-hidden rounded-[22px] border border-[#DDD8E8] bg-white">
        <Image
          src="/images/academy/courses/computer-internet-essentials/v2/connection-chain-photo.webp"
          alt="A laptop connected by USB-C to a hub, with the hub connected by HDMI to a monitor and by cable to a mouse"
          width={1680}
          height={945}
          sizes="(max-width: 900px) 100vw, 820px"
          className="h-auto w-full"
        />
        <div className="border-t border-[#E3DFEA] p-5 sm:p-7">
          <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {[
              ["1", "Computer", "source port"],
              ["2", "Cable / adapter", "connector + capability"],
              ["3", "Accessory", "destination port"],
            ].map(([number, title, detail], index) => (
              <div key={title} className="contents">
                {index > 0 && (
                  <span
                    className="hidden text-2xl text-[#7168E8] sm:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
                <div className="rounded-2xl bg-[#F3F1FA] p-5 text-center">
                  <span className="mx-auto flex size-8 items-center justify-center rounded-full bg-[#5146CC] text-sm font-bold text-white">
                    {number}
                  </span>
                  <strong className="mt-3 block">{title}</strong>
                  <span className="mt-1 block text-sm text-[#696675]">
                    {detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-xl bg-[#FFF6DD] p-4 text-center text-[15px] font-semibold text-[#76510D]">
            Physical fit + supported purpose + sufficient power
          </p>
        </div>
        <figure className="grid border-t border-[#E3DFEA] bg-[#F8F7FB] sm:grid-cols-[.9fr_1.1fr] sm:items-center">
          <Image
            src="/images/academy/courses/computer-internet-essentials/v2/charger-power-adapter.webp"
            alt="Laptop power adapter with its wall plug, power brick, cable, and round barrel charging connector"
            width={1200}
            height={900}
            sizes="(max-width: 640px) 100vw, 380px"
            className="aspect-[4/3] h-auto w-full object-cover"
          />
          <figcaption className="p-5 sm:p-7">
            <strong className="block text-lg">
              A charger is a complete power chain
            </strong>
            <span className="mt-2 block text-base leading-relaxed text-[#696675]">
              This example has a wall plug, cable, power adapter (the brick),
              and a round barrel connector. Other laptops use USB-C or another
              connector. The connector, charging standard, and power rating must
              meet the computer manufacturer&apos;s requirements.
            </span>
          </figcaption>
        </figure>
      </div>
    );
  if (visual.kind === "accessory-chain")
    return (
      <div className="rounded-[22px] bg-[#242036] p-6 text-white sm:p-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["01", "Name the need", "What problem are you solving?"],
            ["02", "Verify the match", "Ports, capability, power, trust"],
            ["03", "Prove the result", "Run one small functional test"],
          ].map(([number, title, detail]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/15 bg-white/[.07] p-5"
            >
              <span className="text-sm font-bold text-[#AFA8FF]">{number}</span>
              <strong className="mt-8 block text-lg">{title}</strong>
              <span className="mt-2 block text-sm leading-relaxed text-[#D7D3E4]">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  if (visual.kind === "buying-needs")
    return (
      <div className="overflow-hidden rounded-[22px] border border-[#DDD8E8] bg-white">
        <div className="grid gap-px bg-[#DDD8E8] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Tasks", "What must it do?", "Browser · classes · design · games"],
            [
              "Place",
              "Where will it live?",
              "Travel · one desk · shared space",
            ],
            [
              "Requirements",
              "What must work?",
              "Apps · ports · camera · access",
            ],
            ["Total cost", "What is the limit?", "Computer · extras · reserve"],
          ].map(([label, title, detail], index) => (
            <div key={label} className="bg-white p-5">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#EFEDFF] text-sm font-bold text-[#5146CC]">
                {index + 1}
              </span>
              <strong className="mt-4 block text-lg">{title}</strong>
              <span className="mt-2 block text-sm leading-relaxed text-[#696675]">
                {detail}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 bg-[#F8F7FB] p-4 sm:grid-cols-4">
          {[
            "computer-family-laptop.webp",
            "computer-family-desktop.webp",
            "computer-family-all-in-one.webp",
            "computer-family-tablet-2-in-1.webp",
          ].map((filename, index) => (
            <Image
              key={filename}
              src={`/images/academy/courses/computer-internet-essentials/v2/${filename}`}
              alt={
                [
                  "Laptop computer",
                  "Desktop computer with separate monitor and tower",
                  "All-in-one computer",
                  "Tablet-style two-in-one computer",
                ][index]
              }
              width={600}
              height={600}
              className="aspect-square w-full rounded-xl object-cover"
            />
          ))}
        </div>
        <p className="border-t border-[#E3DFEA] bg-[#242036] p-5 text-center font-semibold text-white">
          Need → requirement → verified specification → total cost
        </p>
      </div>
    );
  if (visual.kind === "specification-parts")
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [
            "CPU",
            "buying-cpu.webp",
            "Executes instructions",
            "Compare the exact model and generation—not GHz or a family label alone",
          ],
          [
            "RAM",
            "buying-ram.webp",
            "Temporary working space",
            "Helps keep active apps and work available",
          ],
          [
            "SSD",
            "buying-ssd.webp",
            "Fast permanent storage",
            "Keeps the system, apps, and files after shutdown",
          ],
          [
            "HDD",
            "buying-hdd.webp",
            "Older mechanical storage",
            "Often slower; still found in older or external equipment",
          ],
        ].map(([title, filename, short, detail]) => (
          <figure
            key={title}
            className="overflow-hidden rounded-2xl border border-[#DDD8E8] bg-white"
          >
            <Image
              src={`/images/academy/courses/computer-internet-essentials/v2/${filename}`}
              alt={`${title} computer component`}
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="p-4">
              <strong className="text-lg">{title}</strong>
              <span className="mt-1 block text-sm font-semibold text-[#5146CC]">
                {short}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-[#696675]">
                {detail}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    );
  if (visual.kind === "buying-platforms")
    return (
      <figure className="overflow-hidden rounded-[22px] border border-[#DDD8E8] bg-white">
        <Image
          src="/images/academy/courses/computer-internet-essentials/v2/buying-windows-mac.webp"
          alt="A modern Windows laptop and an Apple-silicon style Mac laptop shown side by side"
          width={1600}
          height={900}
          className="h-auto w-full"
        />
        <figcaption className="grid gap-px border-t border-[#DDD8E8] bg-[#DDD8E8] sm:grid-cols-4">
          {[
            "Required apps",
            "Devices + files",
            "People + support",
            "Complete cost",
          ].map((item, index) => (
            <span
              key={item}
              className="bg-white p-4 text-center text-sm font-semibold"
            >
              <b className="mr-2 text-[#5146CC]">0{index + 1}</b>
              {item}
            </span>
          ))}
        </figcaption>
      </figure>
    );
  if (visual.kind === "condition-comparison")
    return (
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          [
            "New",
            "buying-new-laptop.webp",
            "Unused does not replace exact specifications, returns, or warranty.",
          ],
          [
            "Refurbished",
            "buying-refurbished-laptop.webp",
            "Ask who tested or repaired it and what written protection applies.",
          ],
          [
            "Used",
            "buying-used-laptop.webp",
            "Recent and verified can be smart; old and merely cheap can be costly.",
          ],
        ].map(([title, filename, detail]) => (
          <figure
            key={title}
            className="overflow-hidden rounded-2xl border border-[#DDD8E8] bg-white"
          >
            <Image
              src={`/images/academy/courses/computer-internet-essentials/v2/${filename}`}
              alt={`${title} laptop condition example`}
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="p-4">
              <strong className="text-lg">{title}</strong>
              <span className="mt-2 block text-sm leading-relaxed text-[#696675]">
                {detail}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    );
  if (visual.kind === "buying-inspection")
    return (
      <div className="space-y-4">
        <figure className="overflow-hidden rounded-[22px] border border-[#DDD8E8] bg-white">
          <Image
            src="/images/academy/courses/computer-internet-essentials/v2/inspection-test-setup.webp"
            alt="Used laptop inspection setup with charger, mouse, headphones, and test flash drive"
            width={1200}
            height={900}
            className="h-auto w-full"
          />
          <figcaption className="p-4 text-sm leading-relaxed text-[#696675]">
            Bring only safe test items. Never use a private account, personal
            file, password, or payment information during a seller inspection.
          </figcaption>
        </figure>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Cracked hinge",
              "inspection-cracked-hinge.webp",
              "Structural blocker",
            ],
            [
              "Swollen battery",
              "inspection-swollen-battery.webp",
              "Stop: safety warning",
            ],
            [
              "Screen defects",
              "inspection-screen-defects.webp",
              "Visible functional defect",
            ],
            [
              "Frayed charger",
              "inspection-frayed-charger.webp",
              "Stop: replace damaged power equipment",
            ],
          ].map(([title, filename, detail]) => (
            <figure
              key={title}
              className="overflow-hidden rounded-xl border border-[#DDD8E8] bg-white"
            >
              <Image
                src={`/images/academy/courses/computer-internet-essentials/v2/${filename}`}
                alt={`${title} inspection example`}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-3">
                <strong className="block text-[15px]">{title}</strong>
                <span className="mt-1 block text-sm leading-snug text-[#696675]">
                  {detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  if (visual.kind === "power-controls")
    return (
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              number: "01",
              title: "Windows laptop",
              filename: "power-button-windows-laptop.webp",
              alt: "Close-up of a Windows laptop power button marked with the universal power symbol",
              detail: "Often above the keyboard or included in its top row",
            },
            {
              number: "02",
              title: "Desktop tower",
              filename: "power-button-desktop.webp",
              alt: "Close-up of the physical power button on the front of a desktop computer tower",
              detail:
                "Usually on the front or top of the computer tower—not the monitor",
            },
            {
              number: "03",
              title: "Mac Touch ID",
              filename: "power-button-mac-touch-id.webp",
              alt: "Close-up of the Touch ID key at the top-right of a Mac laptop keyboard, which is also its power button",
              detail:
                "On current Mac laptops, the top-right Touch ID key is also power",
            },
          ].map(({ number, title, filename, alt, detail }) => (
            <figure
              key={title}
              className="overflow-hidden rounded-2xl border border-[#DDD8E8] bg-white"
            >
              <div className="relative">
                <Image
                  src={`/images/academy/courses/computer-internet-essentials/v2/${filename}`}
                  alt={alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="aspect-[3/2] h-auto w-full object-cover"
                />
                <span className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-full bg-[#242036]/90 text-xs font-bold text-white shadow-lg">
                  {number}
                </span>
              </div>
              <figcaption className="border-t border-[#E3DFEA] p-4">
                <strong className="block text-base">{title}</strong>
                <span className="mt-1 block text-sm leading-relaxed text-[#696675]">
                  {detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[22px] border border-[#CBD9EF] bg-[#F4F8FF]">
            <div className="flex items-center gap-3 border-b border-[#CBD9EF] bg-[#E8F1FF] px-5 py-4">
              <span
                className="flex size-9 items-center justify-center rounded-lg bg-[#1769D2] text-lg text-white"
                aria-hidden="true"
              >
                ⊞
              </span>
              <div>
                <strong className="block">Windows 11</strong>
                <span className="text-sm text-[#53657C]">
                  Normal Restart path
                </span>
              </div>
            </div>
            <div className="p-5">
              <ol className="grid gap-3">
                {[
                  [
                    "1",
                    "Select Start",
                    "Choose the Windows logo on the taskbar.",
                  ],
                  [
                    "2",
                    "Select Power",
                    "Choose the circular power symbol in the Start menu.",
                  ],
                  [
                    "3",
                    "Select Restart",
                    "Read the word Restart before selecting it.",
                  ],
                ].map(([number, title, detail]) => (
                  <li
                    key={number}
                    className="grid grid-cols-[36px_1fr] gap-3 rounded-xl bg-white p-3 shadow-[0_4px_16px_rgba(49,81,130,0.08)]"
                  >
                    <span className="flex size-9 items-center justify-center rounded-full bg-[#1769D2] text-sm font-bold text-white">
                      {number}
                    </span>
                    <span>
                      <strong className="block">{title}</strong>
                      <span className="mt-0.5 block text-sm text-[#5E6875]">
                        {detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#182233] p-4 text-sm font-bold text-white">
                <span className="rounded-lg bg-[#1769D2] px-3 py-2">
                  ⊞ Start
                </span>
                <span aria-hidden="true">→</span>
                <span className="rounded-lg bg-white/10 px-3 py-2">
                  ⏻ Power
                </span>
                <span aria-hidden="true">→</span>
                <span className="rounded-lg bg-white px-3 py-2 text-[#182233]">
                  Restart
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-[#D9D3E3] bg-[#F8F6FA]">
            <div className="flex items-center gap-3 border-b border-[#D9D3E3] bg-[#EEEAF2] px-5 py-4">
              <span
                className="flex size-9 items-center justify-center rounded-lg bg-[#242036] text-xl text-white"
                aria-hidden="true"
              >
                
              </span>
              <div>
                <strong className="block">macOS</strong>
                <span className="text-sm text-[#665F70]">
                  Normal Restart path
                </span>
              </div>
            </div>
            <div className="p-5">
              <ol className="grid gap-3">
                {[
                  [
                    "1",
                    "Open the Apple menu",
                    "Choose  at the top-left of the screen.",
                  ],
                  [
                    "2",
                    "Choose Restart…",
                    "Read the menu item before selecting it.",
                  ],
                  [
                    "3",
                    "Read the confirmation",
                    "Decide whether open windows should return, then confirm.",
                  ],
                ].map(([number, title, detail]) => (
                  <li
                    key={number}
                    className="grid grid-cols-[36px_1fr] gap-3 rounded-xl bg-white p-3 shadow-[0_4px_16px_rgba(63,48,75,0.07)]"
                  >
                    <span className="flex size-9 items-center justify-center rounded-full bg-[#242036] text-sm font-bold text-white">
                      {number}
                    </span>
                    <span>
                      <strong className="block">{title}</strong>
                      <span className="mt-0.5 block text-sm text-[#68616F]">
                        {detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#242036] p-4 text-sm font-bold text-white">
                <span className="rounded-lg bg-white/10 px-3 py-2">
                   Apple menu
                </span>
                <span aria-hidden="true">→</span>
                <span className="rounded-lg bg-white px-3 py-2 text-[#242036]">
                  Restart…
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            [
              "◐",
              "Sleep",
              "Short break",
              "Session remains ready; some power use continues.",
            ],
            [
              "↻",
              "Restart",
              "Start fresh",
              "Closes the session and starts the operating system again.",
            ],
            [
              "⏻",
              "Shut down",
              "Turn off",
              "Closes the session and powers the computer off.",
            ],
          ].map(([icon, title, label, detail]) => (
            <div
              key={title}
              className="rounded-2xl border border-[#DDD8E8] bg-white p-5"
            >
              <span
                className="flex size-11 items-center justify-center rounded-xl bg-[#EFEDFF] text-2xl text-[#5146CC]"
                aria-hidden="true"
              >
                {icon}
              </span>
              <span className="mt-5 block text-xs font-bold tracking-[0.08em] text-[#5146CC] uppercase">
                {label}
              </span>
              <strong className="mt-1 block text-lg">{title}</strong>
              <span className="mt-2 block text-sm leading-relaxed text-[#696675]">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  if (visual.kind === "pointer-controls")
    return (
      <div className="grid gap-4 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-[22px] border border-[#DDD8E8] bg-white">
          <div className="relative">
            <Image
              src="/images/academy/courses/computer-internet-essentials/v2/control-mouse.webp"
              alt="A real computer mouse photographed from above with distinct left button, right button, and scroll wheel"
              width={1400}
              height={933}
              sizes="(max-width: 1024px) 100vw, 410px"
              className="h-auto w-full"
            />
            <span className="absolute top-[12%] left-[18%] rounded-full bg-[#242036]/90 px-3 py-1.5 text-xs font-bold text-white">
              1
            </span>
            <span className="absolute top-[12%] right-[18%] rounded-full bg-[#242036]/90 px-3 py-1.5 text-xs font-bold text-white">
              2
            </span>
            <span className="absolute top-[20%] left-1/2 -translate-x-1/2 rounded-full bg-[#5146CC] px-3 py-1.5 text-xs font-bold text-white">
              3
            </span>
          </div>
          <figcaption className="grid grid-cols-3 border-t border-[#E3DFEA] text-center text-sm">
            <span className="p-3">
              <b>1</b> Left click
            </span>
            <span className="border-x border-[#E3DFEA] p-3">
              <b>2</b> Right click
            </span>
            <span className="p-3">
              <b>3</b> Scroll wheel
            </span>
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-[22px] border border-[#DDD8E8] bg-white">
          <Image
            src="/images/academy/courses/computer-internet-essentials/v2/control-touchpads.webp"
            alt="Two real laptop pointing surfaces showing a smaller touchpad and a larger trackpad"
            width={1600}
            height={878}
            sizes="(max-width: 1024px) 100vw, 410px"
            className="h-auto w-full"
          />
          <figcaption className="grid grid-cols-2 border-t border-[#E3DFEA] text-center text-sm">
            <span className="p-3">Move with one finger</span>
            <span className="border-l border-[#E3DFEA] p-3">
              Scroll with two fingers
            </span>
          </figcaption>
        </figure>
      </div>
    );
  if (visual.kind === "keyboard-map")
    return (
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [
              "keyboard-windows-desktop.webp",
              "Windows desktop keyboard",
              "A full-size separate keyboard, including a number pad",
            ],
            [
              "keyboard-windows-laptop.webp",
              "Windows laptop keyboard",
              "A compact keyboard built into a laptop above its touchpad",
            ],
            [
              "keyboard-mac-laptop.webp",
              "Mac laptop keyboard",
              "A Mac keyboard with Command and Option modifier keys",
            ],
            [
              "keyboard-french-azerty.webp",
              "French AZERTY laptop keyboard",
              "Its first letter row begins A-Z-E-R-T-Y instead of Q-W-E-R-T-Y",
            ],
          ].map(([filename, title, detail]) => (
            <figure
              key={filename}
              className="overflow-hidden rounded-2xl border border-[#DDD8E8] bg-white"
            >
              <Image
                src={`/images/academy/courses/computer-internet-essentials/v2/${filename}`}
                alt={`${title} photographed from above with its printed key labels visible`}
                width={1600}
                height={900}
                className="aspect-video w-full object-cover"
              />
              <figcaption className="p-4">
                <strong className="block">{title}</strong>
                <span className="mt-1 block text-sm text-[#696675]">
                  {detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "keyboard-shift-caps.webp",
              "Shift and Caps Lock",
              "Shift changes one character; Caps Lock stays on until changed.",
            ],
            [
              "keyboard-enter-backspace.webp",
              "Enter and Backspace",
              "Enter confirms or starts a line; Backspace removes near the insertion point.",
            ],
            [
              "keyboard-arrows.webp",
              "Arrow keys",
              "Move through text or an interface without erasing anything.",
            ],
            [
              "keyboard-modifiers-windows-mac.webp",
              "Windows and Mac modifiers",
              "Control and Alt on Windows; Command and Option on Mac.",
            ],
          ].map(([filename, title, detail]) => (
            <figure
              key={filename}
              className="overflow-hidden rounded-2xl border border-[#DDD8E8] bg-white"
            >
              <Image
                src={`/images/academy/courses/computer-internet-essentials/v2/${filename}`}
                alt={`Close-up photograph showing ${title}`}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-4">
                <strong className="block text-[15px]">{title}</strong>
                <span className="mt-1 block text-sm leading-snug text-[#696675]">
                  {detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="rounded-[22px] border border-[#DDD8E8] bg-white p-5 sm:p-7">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Typing", "Letters · numbers · punctuation · Space"],
              ["02", "Editing", "Backspace · Delete · Enter · Tab"],
              ["03", "Navigation", "Arrow keys · Home · End · Page keys"],
              ["04", "Modifiers", "Shift · Control · Alt/Option · Command"],
            ].map(([number, title, keys]) => (
              <div key={number} className="rounded-2xl bg-[#F3F1FA] p-5">
                <span className="text-xs font-bold text-[#5146CC]">
                  {number}
                </span>
                <strong className="mt-4 block text-lg">{title}</strong>
                <span className="mt-2 block text-sm leading-relaxed text-[#696675]">
                  {keys}
                </span>
              </div>
            ))}
          </div>
          <div
            className="mt-4 flex flex-wrap gap-2"
            aria-label="Example keyboard keys"
          >
            {[
              "Shift",
              "Caps Lock",
              "Tab",
              "Enter ↵",
              "Backspace ⌫",
              "←",
              "↑",
              "↓",
              "→",
              "Ctrl",
              "Alt / Option",
              "⌘ Command",
            ].map((key) => (
              <kbd
                key={key}
                className="rounded-lg border border-[#CBC5D8] bg-[#FAF9FC] px-3 py-2 text-sm font-semibold shadow-[0_2px_0_#D8D3E1]"
              >
                {key}
              </kbd>
            ))}
          </div>
        </div>
      </div>
    );
  if (visual.kind === "text-editing")
    return (
      <div className="rounded-[22px] border border-[#DDD8E8] bg-white p-5 sm:p-7">
        <div className="rounded-xl border border-[#DDD8E8] bg-[#FCFBFD] p-5 text-lg leading-relaxed">
          The learner{" "}
          <mark className="rounded bg-[#DCD8FF] px-1 text-[#242036]">
            selects this text
          </mark>{" "}
          before choosing one editing action.
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          {[
            ["1", "Select", "Define the target"],
            ["2", "Act", "Copy, cut, paste, replace"],
            ["3", "Verify", "Read the visible result"],
            ["4", "Recover", "Undo when needed"],
          ].map(([number, title, detail]) => (
            <div key={number} className="rounded-xl bg-[#F3F1FA] p-4">
              <span className="flex size-7 items-center justify-center rounded-full bg-[#5146CC] text-xs font-bold text-white">
                {number}
              </span>
              <strong className="mt-3 block">{title}</strong>
              <span className="mt-1 block text-sm text-[#696675]">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  if (visual.kind === "shortcut-map")
    return (
      <div className="overflow-hidden rounded-[22px] border border-[#DDD8E8] bg-white">
        <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#242036] px-4 py-3 text-sm font-bold text-white sm:px-6">
          <span>Action</span>
          <span>Windows</span>
          <span>Mac</span>
        </div>
        {[
          ["Copy", "Ctrl+C", "⌘+C"],
          ["Paste", "Ctrl+V", "⌘+V"],
          ["Cut", "Ctrl+X", "⌘+X"],
          ["Undo", "Ctrl+Z", "⌘+Z"],
          ["Redo", "Ctrl+Y", "⌘+Shift+Z"],
          ["Select all", "Ctrl+A", "⌘+A"],
          ["Save", "Ctrl+S", "⌘+S"],
          ["Find", "Ctrl+F", "⌘+F"],
        ].map(([action, windows, mac], index) => (
          <div
            key={action}
            className={cn(
              "grid grid-cols-[1fr_1fr_1fr] items-center px-4 py-3 text-sm sm:px-6",
              index % 2 ? "bg-[#F7F5FB]" : "bg-white",
            )}
          >
            <strong>{action}</strong>
            <kbd>{windows}</kbd>
            <kbd>{mac}</kbd>
          </div>
        ))}
      </div>
    );
  if (visual.kind === "comfort-controls")
    return (
      <div className="overflow-hidden rounded-[22px] border border-[#DDD8E8] bg-white">
        <Image
          src="/images/academy/courses/computer-internet-essentials/v2/control-comfort-workstation.webp"
          alt="An adult learner at a comfortable workstation with the laptop raised, an external keyboard and mouse within reach, relaxed shoulders, and supported feet"
          width={1536}
          height={1024}
          sizes="(max-width: 900px) 100vw, 820px"
          className="h-auto w-full"
        />
        <div className="grid grid-cols-2 border-t border-[#E3DFEA] sm:grid-cols-4">
          {[
            "Screen near eye level",
            "Input within reach",
            "Shoulders relaxed",
            "Feet supported",
          ].map((label, index) => (
            <div
              key={label}
              className="border-r border-[#E3DFEA] p-4 text-sm last:border-r-0"
            >
              <span className="font-bold text-[#5146CC]">0{index + 1}</span>
              <strong className="mt-1 block">{label}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  if (visual.kind === "risk-levels")
    return (
      <div>
        <div className="grid gap-3 sm:grid-cols-3">
          <VisualCard
            number="✓"
            title="Green light"
            text="Ordinary, low-consequence exploration."
            tone="green"
          />
          <VisualCard
            number="…"
            title="Pause"
            text="Read, understand, and verify before continuing."
            tone="amber"
          />
          <VisualCard
            number="!"
            title="Stop"
            text="Serious, unclear, destructive, financial, or physical risk."
            tone="red"
          />
        </div>
      </div>
    );
  return (
    <div className="rounded-[22px] border border-[#E3DFEA] bg-white p-5 sm:p-7">
      <figure className="mb-6 overflow-hidden rounded-2xl border border-[#E3DFEA] bg-[#F7F4F0]">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/images/academy/courses/computer-internet-essentials/v2/workstation-before-after.webp"
            alt="The same learner before and after improving a home computer setup: the laptop moves from a pillow to a stable desk, the mouse comes closer, glare is reduced, feet gain support, and the cable is routed more safely"
            fill
            sizes="(max-width: 900px) 100vw, 820px"
            className="object-cover"
          />
        </div>
        <figcaption className="border-t border-[#E3DFEA] bg-white px-4 py-3 text-[15px] leading-relaxed text-[#5E5966]">
          Compare the same room and learner. Identify what changed before you
          read the eight inspection points below.
        </figcaption>
      </figure>
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
        <VisualCard
          number="1"
          title="Screen"
          text="Readable, in front, less glare"
        />
        <VisualCard
          number="2"
          title="Controls"
          text="Keyboard and mouse nearby"
        />
        <VisualCard
          number="3"
          title="Support"
          text="Stable chair, back and feet"
        />
        <VisualCard
          number="4"
          title="Airflow"
          text="Stable surface, vents open"
        />
        <VisualCard number="5" title="Power" text="Sound cord, safe charger" />
        <VisualCard number="6" title="Liquids" text="Away from electronics" />
        <VisualCard number="7" title="Cables" text="Away from walkways" />
        <VisualCard
          number="8"
          title="Movement"
          text="Change position periodically"
        />
      </div>
    </div>
  );
}

type CourseVisualIcon =
  | "know"
  | "control"
  | "work"
  | "protect"
  | "solve"
  | "viewed"
  | "practice"
  | "checkpoint";

function CourseStageIcon({ kind }: { kind: CourseVisualIcon }) {
  const paths: Record<CourseVisualIcon, ReactNode> = {
    know: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M9.5 12.2 11.2 14l3.7-4" />
      </>
    ),
    control: (
      <>
        <rect x="4" y="6" width="16" height="11" rx="2" />
        <path d="M8 20h8M12 17v3M8 10h8M8 13h5" />
      </>
    ),
    work: (
      <>
        <path d="M5 8h14v11H5zM9 8V5h6v3" />
        <path d="M5 12h14M10 12v2h4v-2" />
      </>
    ),
    protect: (
      <>
        <path d="M12 3 19 6v5c0 4.8-2.9 8.2-7 10-4.1-1.8-7-5.2-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    solve: (
      <>
        <path d="M9 18h6M10 21h4" />
        <path d="M8.5 14.8A6 6 0 1 1 15.5 14.8c-.9.7-1.5 1.5-1.5 2.2h-4c0-.7-.6-1.5-1.5-2.2Z" />
        <path d="M12 6v2M7.8 8l1.4 1.2M16.2 8l-1.4 1.2" />
      </>
    ),
    viewed: (
      <>
        <path d="M3 12s3.2-5 9-5 9 5 9 5-3.2 5-9 5-9-5-9-5Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    practice: (
      <>
        <path d="M7 4h10v16H7zM9 4V2h6v2" />
        <path d="m9.5 11 1.5 1.5 3.5-3.5M10 16h4" />
      </>
    ),
    checkpoint: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-6 fill-none stroke-current"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[kind]}
    </svg>
  );
}

function VisualRow({
  items,
}: {
  items: { label: string; icon: CourseVisualIcon; detail: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#DDD8EB] bg-gradient-to-br from-white via-[#F8F6FF] to-[#EFEAFF] p-5 shadow-[0_18px_50px_rgba(63,52,120,0.08)] sm:p-7">
      <div className="grid gap-3 sm:grid-cols-5">
        {items.map((item, index) => (
          <div
            key={item.label}
            className="group relative rounded-2xl border border-white/80 bg-white/80 px-3 py-5 text-center shadow-sm"
          >
            <span className="bg-indigo-light text-indigo-dark mx-auto flex size-12 items-center justify-center rounded-2xl transition-transform group-hover:-translate-y-0.5">
              <CourseStageIcon kind={item.icon} />
            </span>
            <strong className="mt-3 block text-base">{item.label}</strong>
            <span className="mt-1 block text-[13px] leading-snug text-[#6D6878]">
              {item.detail}
            </span>
            {index < items.length - 1 && (
              <span className="text-indigo absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 text-lg sm:block">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
function VisualCard({
  number,
  icon,
  title,
  text,
  tone = "plain",
}: {
  number?: string;
  icon?: CourseVisualIcon;
  title: string;
  text: string;
  tone?: "plain" | "green" | "amber" | "red";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-5 shadow-[0_10px_30px_rgba(63,52,120,0.06)]",
        tone === "green"
          ? "border-[#B7DECE] bg-[#EDF9F4]"
          : tone === "amber"
            ? "border-[#EAD49A] bg-[#FFF8E8]"
            : tone === "red"
              ? "border-[#E7B4B0] bg-[#FFF2F1]"
              : "border-[#E3DFEA] bg-white",
      )}
    >
      <span className="text-indigo-dark flex size-11 items-center justify-center rounded-xl bg-[#EFEDFF] text-sm font-bold">
        {icon ? <CourseStageIcon kind={icon} /> : number}
      </span>
      <strong className="mt-3 block text-[15px]">{title}</strong>
      <p className="mt-1 text-[15px] leading-[1.55] text-[#696675]">{text}</p>
    </div>
  );
}
