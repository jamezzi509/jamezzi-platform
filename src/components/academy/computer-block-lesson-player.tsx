"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { computerProgressStorageKey } from "@/components/academy/computer-essentials-lesson-list";
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  GraduationCapIcon,
  SparklesIcon,
  StampIcon,
} from "@/components/ui/icons";
import { computerRebuildCheckpoints } from "@/content/computer-rebuild/checkpoints";
import { computerRebuildModules } from "@/content/computer-rebuild/modules";
import { computerRebuildReadinessReflections } from "@/content/computer-rebuild/readiness-reflection";
import type {
  Checkpoint,
  CourseLesson,
  KnowledgeCheckQuestion,
  LessonBlock,
  ReadinessReflection,
} from "@/content/computer-rebuild/schema";
import {
  useComputerPlatform,
  type PreferredPlatform,
} from "@/lib/use-computer-platform";
import { cn } from "@/lib/cn";
import { saveCompletedLesson } from "@/lib/course-progress";

const phaseOrder = [
  "learn",
  "words",
  "platform",
  "practice",
  "mission",
  "check",
  "reflect",
] as const;
type Phase = (typeof phaseOrder)[number];

const lessonImageBase =
  "/images/academy/courses/computer-internet-essentials/lessons";

const moduleVisuals: Record<string, string> = {
  m1: "welcome-to-computers",
  m2: "what-is-a-computer",
  m3: "mouse-and-trackpad",
  m4: "what-is-a-file-and-folder",
  m5: "working-with-pdf",
  m6: "what-is-the-internet",
  m7: "browser-basics",
  m8: "what-is-email",
  m9: "what-is-the-cloud",
  m10: "external-devices",
  m11: "creating-strong-passwords",
  m12: "desktop-vs-laptop",
  m13: "restart-vs-shutdown",
  m14: "using-your-computer-mission",
};

const visualKeywordRules = [
  ["operating system", "what-is-an-operating-system"],
  ["hardware", "hardware-vs-software"],
  ["software", "hardware-vs-software"],
  ["keyboard", "keyboard-basics"],
  ["mouse", "mouse-and-trackpad"],
  ["trackpad", "mouse-and-trackpad"],
  ["screenshot", "screenshots-and-screen-recording"],
  ["wi-fi", "wifi-and-connecting"],
  ["wifi", "wifi-and-connecting"],
  ["browser", "browser-basics"],
  ["search engine", "search-engines-and-the-address-bar"],
  ["email", "what-is-email"],
  ["password", "creating-strong-passwords"],
  ["cloud", "what-is-the-cloud"],
  ["bluetooth", "bluetooth-basics"],
  ["usb", "usb-and-hdmi"],
  ["hdmi", "usb-and-hdmi"],
  ["pdf", "working-with-pdf"],
  ["folder", "what-is-a-file-and-folder"],
  ["file", "what-is-a-file-and-folder"],
  ["virus", "what-is-a-virus"],
  ["scam", "spotting-online-scams"],
  ["artificial intelligence", "what-is-ai"],
  [" ai ", "what-is-ai"],
] as const;

function lessonVisual(lesson: CourseLesson) {
  const searchable = ` ${lesson.titleEn.toLowerCase()} ${lesson.slug.toLowerCase()} `;
  const matched = visualKeywordRules.find(([keyword]) =>
    searchable.includes(keyword),
  );
  const filename = matched?.[1] ?? moduleVisuals[lesson.moduleId];
  return `${lessonImageBase}/${filename}.webp`;
}

const phaseLabels: Record<Phase, string> = {
  learn: "Aprann",
  words: "Mo Dijital",
  platform: "Etap Ou Yo",
  practice: "Pratike",
  mission: "AI ak Misyon",
  check: "Quiz",
  reflect: "Reflechi",
};

function phaseFor(block: LessonBlock): Phase {
  switch (block.type) {
    case "goal":
    case "explanation":
    case "diagram":
      return "learn";
    case "vocabulary":
      return "words";
    case "platform_steps":
      return "platform";
    case "practice":
    case "mistake":
    case "safety":
      return "practice";
    case "ai_help":
    case "mission":
      return "mission";
    case "knowledge_check":
      return "check";
    case "reflection":
      return "reflect";
  }
}

function groupIntoPhases(blocks: LessonBlock[]) {
  const grouped = new Map<Phase, LessonBlock[]>();
  for (const block of blocks) {
    const phase = phaseFor(block);
    const existing = grouped.get(phase) ?? [];
    existing.push(block);
    grouped.set(phase, existing);
  }
  return phaseOrder
    .filter((phase) => grouped.has(phase))
    .map((phase) => ({ phase, blocks: grouped.get(phase)! }));
}

function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-lesson-mono text-indigo-dark/70 mb-2.5 text-[11px] tracking-[0.12em] uppercase">
      {children}
    </div>
  );
}

export function ComputerBlockLessonPlayer({
  lesson,
  allLessons,
}: {
  lesson: CourseLesson;
  allLessons: CourseLesson[];
}) {
  const { platform: storedPlatform } = useComputerPlatform();
  const [viewPlatform, setViewPlatform] =
    useState<PreferredPlatform>("windows");

  useEffect(() => {
    if (!storedPlatform) return;
    const timer = window.setTimeout(() => setViewPlatform(storedPlatform), 0);
    return () => window.clearTimeout(timer);
  }, [storedPlatform]);

  const phases = useMemo(() => groupIntoPhases(lesson.blocks), [lesson.blocks]);
  const [step, setStep] = useState(0);
  const [progressSaved, setProgressSaved] = useState(false);
  const stepStatusRef = useRef<HTMLParagraphElement>(null);

  const moduleOrderById = new Map(
    computerRebuildModules.map((module) => [module.id, module.order]),
  );
  const courseSequenceKey = (item: CourseLesson) =>
    (moduleOrderById.get(item.moduleId) ?? 0) * 1000 + item.order;
  const sortedLessons = [...allLessons].sort(
    (a, b) => courseSequenceKey(a) - courseSequenceKey(b),
  );
  const lessonIndex = sortedLessons.findIndex((item) => item.id === lesson.id);
  const moduleLessons = sortedLessons.filter(
    (item) => item.moduleId === lesson.moduleId,
  );
  const moduleLessonIndex = moduleLessons.findIndex(
    (item) => item.id === lesson.id,
  );
  const moduleProgressPercent = moduleLessons.length
    ? Math.round(((moduleLessonIndex + 1) / moduleLessons.length) * 100)
    : 0;
  const prevLesson = lessonIndex > 0 ? sortedLessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex >= 0 && lessonIndex < sortedLessons.length - 1
      ? sortedLessons[lessonIndex + 1]
      : null;

  const nextCheckpoint = lesson.requiredMission
    ? computerRebuildCheckpoints.find(
        (checkpoint) => checkpoint.afterModuleId === lesson.moduleId,
      )
    : undefined;

  const nextReadinessReflection = lesson.requiredMission
    ? computerRebuildReadinessReflections.find(
        (reflection) => reflection.afterModuleId === lesson.moduleId,
      )
    : undefined;
  const currentModule = computerRebuildModules.find(
    (module) => module.id === lesson.moduleId,
  );
  const nextCourseHref = nextCheckpoint
    ? `/academy/courses/computer-internet-essentials/learn/${nextCheckpoint.id}`
    : nextReadinessReflection
      ? `/academy/courses/computer-internet-essentials/learn/${nextReadinessReflection.id}`
      : nextLesson
        ? `/academy/courses/computer-internet-essentials/learn/${nextLesson.slug}`
        : "/academy/courses/computer-internet-essentials/learn/final-exam";
  const nextCourseLabel = nextCheckpoint
    ? nextCheckpoint.titleHt
    : nextReadinessReflection
      ? nextReadinessReflection.titleHt
      : (nextLesson?.titleHt ?? "Egzamen final");

  const missionBlock = lesson.blocks.find((b) => b.type === "mission");
  const checkBlock = lesson.blocks.find((b) => b.type === "knowledge_check");
  const [stepsDone, setStepsDone] = useState<boolean[]>(() =>
    missionBlock?.type === "mission"
      ? missionBlock.mission.requiredSteps.map(() => false)
      : [],
  );
  const [checkState, setCheckState] = useState<CheckAnswer[]>(() =>
    checkBlock?.type === "knowledge_check"
      ? checkBlock.questions.map(() => ({ checked: false, correct: false }))
      : [],
  );

  function toggleStep(index: number) {
    setStepsDone((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  }

  const requiresMission =
    Boolean(missionBlock) && lesson.requiredMission !== false;
  const requiresCheck = Boolean(checkBlock);
  const checkPassed =
    !requiresCheck || checkState.every((q) => q.checked && q.correct);
  const missionDone = stepsDone.length > 0 && stepsDone.every(Boolean);
  const missionPassed = !requiresMission || missionDone;
  const unlocked = checkPassed && missionPassed;

  useEffect(() => {
    if (!unlocked) return;
    const saved =
      saveCompletedLesson(computerProgressStorageKey, lesson.slug) !==
      "blocked";
    const timer = window.setTimeout(() => setProgressSaved(saved), 0);
    return () => window.clearTimeout(timer);
  }, [unlocked, lesson.slug]);

  function moveTo(next: number) {
    setStep(Math.max(0, Math.min(next, phases.length - 1)));
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setTimeout(() => stepStatusRef.current?.focus(), 0);
  }

  const currentPhase = phases[step];
  const checkStepIndex = phases.findIndex((p) => p.phase === "check");
  const blockedOnCheck =
    step === checkStepIndex && requiresCheck && !checkPassed;
  const continueDisabled = blockedOnCheck;
  const isLastStep = step === phases.length - 1;

  return (
    <main className="min-h-screen bg-[#F4F2ED]">
      <header className="bg-night text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
          <Link href="/academy" className="flex items-center gap-3">
            <span className="bg-indigo font-display flex size-10 items-center justify-center rounded-xl text-xl">
              J
            </span>
            <span>
              <span className="block text-base font-bold tracking-wide">
                Jamezzi Academy
              </span>
              <span className="text-night-muted block text-xs">
                Computer & Internet Essentials
              </span>
            </span>
          </Link>
          <div className="hidden min-w-72 md:block">
            <div className="text-night-muted mb-1.5 flex justify-between text-[11px]">
              <span>
                Modil {currentModule?.order} · Leson {moduleLessonIndex + 1}/
                {moduleLessons.length}
              </span>
              <span>{moduleProgressPercent}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
              <div
                className="bg-coral h-full rounded-full"
                style={{ width: `${moduleProgressPercent}%` }}
              />
            </div>
          </div>
          <Link
            href="/academy/courses/computer-internet-essentials"
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold hover:bg-white/10"
          >
            Plan kou a
          </Link>
        </div>
      </header>

      <nav className="border-border bg-white" aria-label="Lesson navigation">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3 text-xs sm:px-6 lg:px-10">
          {prevLesson ? (
            <Link
              href={`/academy/courses/computer-internet-essentials/learn/${prevLesson.slug}`}
              className="text-indigo-dark truncate font-semibold"
            >
              ← {prevLesson.titleHt}
            </Link>
          ) : (
            <span />
          )}
          <span className="text-muted hidden sm:block">
            {currentModule?.titleHt ?? currentModule?.titleEn}
          </span>
          <Link
            href={nextCourseHref}
            className="text-indigo-dark truncate text-right font-semibold"
          >
            {nextCourseLabel} →
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6 lg:px-10 lg:py-8">
        <div className="mb-4 flex gap-1.5 lg:hidden">
          {phases.map((item, index) => (
            <button
              key={item.phase}
              type="button"
              onClick={() => moveTo(index)}
              aria-label={phaseLabels[item.phase]}
              className={cn(
                "h-2 flex-1 rounded-full",
                index <= step ? "bg-indigo" : "bg-indigo-light",
              )}
            />
          ))}
        </div>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_270px]">
          <section className="border-border min-w-0 rounded-[24px] border bg-white p-5 shadow-[0_24px_70px_rgba(29,24,46,0.08)] sm:p-8 lg:p-10">
            <p
              ref={stepStatusRef}
              tabIndex={-1}
              aria-live="polite"
              className="font-lesson-mono text-indigo-dark mb-6 text-xs tracking-[0.12em] uppercase focus:outline-none"
            >
              Etap {step + 1} sou {phases.length} ·{" "}
              {phaseLabels[currentPhase.phase]}
            </p>
            {progressSaved && (
              <p className="text-metadata text-success mb-4" role="status">
                ✓ Pwogrè leson sa a anrejistre.
              </p>
            )}
            {currentPhase.phase === "learn" && (
              <LearnPhase lesson={lesson} blocks={currentPhase.blocks} />
            )}
            {currentPhase.phase === "words" && (
              <WordsPhase blocks={currentPhase.blocks} />
            )}
            {currentPhase.phase === "platform" && (
              <PlatformPhase
                blocks={currentPhase.blocks}
                viewPlatform={viewPlatform}
                onSwap={() =>
                  setViewPlatform(
                    viewPlatform === "windows" ? "mac" : "windows",
                  )
                }
              />
            )}
            {currentPhase.phase === "practice" && (
              <PracticePhase blocks={currentPhase.blocks} />
            )}
            {currentPhase.phase === "mission" && (
              <MissionPhase
                blocks={currentPhase.blocks}
                stepsDone={stepsDone}
                onToggleStep={toggleStep}
              />
            )}
            {currentPhase.phase === "check" &&
              checkBlock?.type === "knowledge_check" && (
                <CheckPhase
                  questions={checkBlock.questions}
                  state={checkState}
                  onChange={setCheckState}
                />
              )}
            {currentPhase.phase === "reflect" && (
              <ReflectPhase
                blocks={currentPhase.blocks}
                unlocked={unlocked}
                nextLesson={nextLesson}
                nextCheckpoint={nextCheckpoint}
                nextReadinessReflection={nextReadinessReflection}
              />
            )}

            <div className="border-border mt-10 flex items-center justify-between border-t pt-5">
              <button
                type="button"
                onClick={() => moveTo(step - 1)}
                disabled={step === 0}
                className="text-indigo-dark min-h-11 text-sm font-semibold disabled:opacity-0"
              >
                ← Tounen
              </button>
              {!isLastStep && (
                <button
                  type="button"
                  onClick={() => moveTo(step + 1)}
                  disabled={continueDisabled}
                  className={cn(
                    "min-h-12 rounded-full px-7 text-sm font-semibold",
                    continueDisabled
                      ? "bg-indigo-light text-muted"
                      : "bg-indigo text-white shadow-[0_10px_25px_rgba(79,70,229,0.25)]",
                  )}
                >
                  Kontinye →
                </button>
              )}
            </div>
          </section>

          <aside className="border-border sticky top-5 hidden overflow-hidden rounded-[20px] border bg-white shadow-[0_18px_50px_rgba(29,24,46,0.07)] lg:block">
            <div className="bg-night px-5 py-5 text-white">
              <p className="text-coral text-xs font-bold tracking-[0.14em] uppercase">
                Nan leson sa a
              </p>
              <p className="mt-2 text-sm leading-snug font-semibold">
                {lesson.titleHt}
              </p>
              <p className="text-night-muted mt-1 text-xs">
                {lesson.estimatedMinutes} minit
              </p>
            </div>
            <ol className="p-2">
              {phases.map((item, index) => (
                <li key={item.phase}>
                  <button
                    type="button"
                    onClick={() => moveTo(index)}
                    aria-current={index === step ? "step" : undefined}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition",
                      index === step
                        ? "bg-indigo-light text-indigo-dark"
                        : "text-muted hover:bg-paper",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
                        index < step
                          ? "bg-success text-white"
                          : index === step
                            ? "bg-indigo text-white"
                            : "bg-paper text-muted",
                      )}
                    >
                      {index < step ? "✓" : index + 1}
                    </span>
                    <span>
                      <span className="block text-xs font-bold">
                        {phaseLabels[item.phase]}
                      </span>
                      <span className="block text-xs opacity-70">
                        {index === step
                          ? "W ap travay la"
                          : index < step
                            ? "Konplete"
                            : "Apre sa"}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <div className="border-border border-t px-5 py-4">
              <p className="text-muted text-xs leading-relaxed">
                Objektif: konprann konsèp la, wè li sou ekran, epi pratike li.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function LearnPhase({
  lesson,
  blocks,
}: {
  lesson: CourseLesson;
  blocks: LessonBlock[];
}) {
  const goal = blocks.find((b) => b.type === "goal");
  const explanation = blocks.find((b) => b.type === "explanation");
  const diagram = blocks.find((b) => b.type === "diagram");
  const isConceptBenchmark =
    lesson.slug === "sistem-operasyon-aplikasyon-navigate-sit-ak-fichye";
  return (
    <div>
      <div className="mb-6">
        <p className="text-eyebrow text-indigo-dark mb-3">
          LESON {lesson.order} · {lesson.estimatedMinutes} MINIT
        </p>
        <h1 className="font-display text-ink max-w-3xl text-4xl leading-[1.02] text-balance sm:text-5xl">
          {lesson.titleHt}
        </h1>
        <p className="text-muted mt-3 text-base sm:text-lg">{lesson.titleEn}</p>
      </div>
      {isConceptBenchmark ? (
        <>
          <OperatingSystemHeroVisual />
          <OperatingSystemConceptVisual />
        </>
      ) : (
        <div className="border-border bg-paper relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-[18px] border shadow-[0_16px_45px_rgba(29,24,46,0.10)]">
          <Image
            src={lessonVisual(lesson)}
            alt={`Vizyal leson: ${lesson.titleHt}`}
            fill
            priority
            sizes="(max-width: 860px) 100vw, 820px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 pt-14 pb-4 text-white">
            <p className="text-xs font-semibold tracking-wide uppercase">
              Gade · Konprann · Pratike
            </p>
          </div>
        </div>
      )}
      {!isConceptBenchmark && diagram?.type === "diagram" && (
        <InstructionalDiagram
          id={diagram.diagram.diagramId}
          caption={diagram.diagram.caption}
        />
      )}
      {goal?.type === "goal" && (
        <div className="bg-indigo-light text-ink mb-6 rounded-[10px] px-3.5 py-3 text-sm">
          🎯 {goal.outcome}
        </div>
      )}
      {explanation?.type === "explanation" && (
        <div>
          <SectionLabel>🧠 Eksplikasyon Senp</SectionLabel>
          <p className="text-muted text-[14.5px] leading-[1.6]">
            {renderText(explanation.text)}
          </p>
        </div>
      )}
    </div>
  );
}

const operatingSystemConcepts = [
  {
    label: "Operating System",
    example: "Windows 11 · macOS",
    explanation: "Fondasyon ki fè aparèy la mache",
    accent: "bg-[#E8EEFF] text-[#2452A5]",
    icon: "os",
  },
  {
    label: "App",
    example: "Word · WhatsApp",
    explanation: "Zouti ou louvri pou fè yon travay",
    accent: "bg-[#E8F7F1] text-[#147A61]",
    icon: "app",
  },
  {
    label: "Browser",
    example: "Chrome · Safari",
    explanation: "Pòt ou itilize pou antre sou entènèt",
    accent: "bg-[#F0EAFE] text-[#6041B5]",
    icon: "browser",
  },
  {
    label: "Website",
    example: "Google.com · Jamezzi.com",
    explanation: "Yon kote ou vizite anndan Browser la",
    accent: "bg-[#FFF0E8] text-[#B9522F]",
    icon: "website",
  },
  {
    label: "File",
    example: "PDF · Photo · Document",
    explanation: "Yon bagay ki gen non epi ki sovgade",
    accent: "bg-[#FFF7D9] text-[#8B6414]",
    icon: "file",
  },
] as const;

function OperatingSystemHeroVisual() {
  return (
    <figure className="border-border bg-night relative mb-6 min-h-[280px] overflow-hidden rounded-[20px] border shadow-[0_20px_55px_rgba(29,24,46,0.16)] sm:min-h-[360px]">
      <Image
        src={`${lessonImageBase}/what-is-an-operating-system.webp`}
        alt="Yon laptop ki montre yon sistèm operasyon sou ekran li"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 1000px"
        className="object-cover object-center"
      />
      <div className="from-night via-night/60 absolute inset-0 bg-gradient-to-r to-transparent" />
      <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center p-6 text-white sm:p-9">
        <p className="font-lesson-mono text-coral text-xs font-bold tracking-[0.14em] uppercase">
          Wè li sou ekran an
        </p>
        <h2 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
          Operating System lan se fondasyon aparèy la.
        </h2>
        <p className="text-night-text mt-4 text-sm leading-relaxed sm:text-base">
          Windows ak macOS kontwole ekran an, fichye yo, aplikasyon yo, ak
          aparèy ki konekte yo.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="text-night rounded-full bg-white px-3 py-2 text-xs font-bold">
            Windows 11
          </span>
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur">
            macOS
          </span>
        </div>
      </div>
    </figure>
  );
}

function ConceptIcon({
  type,
}: {
  type: (typeof operatingSystemConcepts)[number]["icon"];
}) {
  if (type === "os") {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="size-7"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="5"
          width="24"
          height="17"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 27h12M13 22l-1 5m7-5 1 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M8 9h7v9H8zm9 0h7v9h-7z" fill="currentColor" opacity=".22" />
      </svg>
    );
  }
  if (type === "app") {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="size-7"
        aria-hidden="true"
      >
        <rect x="5" y="5" width="9" height="9" rx="2.5" />
        <rect x="18" y="5" width="9" height="9" rx="2.5" opacity=".35" />
        <rect x="5" y="18" width="9" height="9" rx="2.5" opacity=".35" />
        <rect x="18" y="18" width="9" height="9" rx="2.5" opacity=".35" />
      </svg>
    );
  }
  if (type === "browser") {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="size-7"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" />
        <path
          d="M5 16h22M16 5c3 3.2 4.5 6.9 4.5 11S19 23.8 16 27c-3-3.2-4.5-6.9-4.5-11S13 8.2 16 5Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }
  if (type === "website") {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="size-7"
        aria-hidden="true"
      >
        <rect
          x="3.5"
          y="5"
          width="25"
          height="22"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4 11h24M8 16h10M8 20h15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity=".75"
        />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
        <circle cx="12" cy="8" r="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" fill="none" className="size-7" aria-hidden="true">
      <path
        d="M8 3.5h11l6 6V28H8V3.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 4v6h6M12 16h9M12 21h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OperatingSystemConceptVisual() {
  return (
    <figure className="border-border mb-6 overflow-hidden rounded-[18px] border bg-[#FBFAF7] p-4 shadow-[0_16px_45px_rgba(29,24,46,0.10)] sm:p-6">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-eyebrow text-indigo-dark">MODÈL MANTAL LA</p>
          <h2 className="font-display text-ink mt-2 text-2xl leading-tight sm:text-3xl">
            Senk bagay. Senk travay diferan.
          </h2>
        </div>
        <p className="text-muted max-w-xs text-xs leading-relaxed">
          Swiv yo agoch pou adwat jan ou itilize yo sou yon òdinatè.
        </p>
      </div>
      <div className="grid gap-2.5 lg:grid-cols-5">
        {operatingSystemConcepts.map((concept, index) => (
          <div key={concept.label} className="relative flex lg:block">
            <div className="border-border flex min-h-32 w-full flex-col rounded-2xl border bg-white p-3.5">
              <span
                className={cn(
                  "mb-4 inline-flex size-12 items-center justify-center rounded-xl",
                  concept.accent,
                )}
              >
                <ConceptIcon type={concept.icon} />
              </span>
              <p className="text-ink text-base font-bold">{concept.label}</p>
              <p className="text-indigo-dark mt-1 text-xs font-semibold">
                {concept.example}
              </p>
              <p className="text-muted mt-3 text-sm leading-snug">
                {concept.explanation}
              </p>
            </div>
            {index < operatingSystemConcepts.length - 1 && (
              <span
                className="text-coral absolute top-1/2 -right-2.5 z-10 hidden -translate-y-1/2 rounded-full bg-[#FBFAF7] px-1 text-lg lg:block"
                aria-hidden="true"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <figcaption className="bg-indigo-light text-ink mt-4 rounded-xl px-4 py-3 text-sm leading-relaxed">
        <strong>Egzanp:</strong> Windows fè òdinatè a mache → ou louvri Chrome →
        ou vizite Jamezzi.com → ou telechaje yon PDF File.
      </figcaption>
    </figure>
  );
}

const diagramContent: Record<
  string,
  { eyebrow: string; title: string; nodes: string[] }
> = {
  "input-processing-output-storage": {
    eyebrow: "KIJAN ÒDINATÈ A PANSE",
    title: "Done antre, òdinatè a travay sou yo, epi li bay yon rezilta.",
    nodes: [
      "Antre\nKlavye · Sourit",
      "Pwosesis\nCPU",
      "Sòti\nEkran · Son",
      "Depo\nFichye",
    ],
  },
  "isp-modem-router-device-chain": {
    eyebrow: "CHEMEN ENTÈNÈT LA",
    title: "Koneksyon an pase atravè plizyè etap anvan li rive sou aparèy ou.",
    nodes: ["Founisè\nEntènèt", "Modèm", "Routeur\nWi-Fi", "Aparèy ou"],
  },
  "folder-hierarchy-example": {
    eyebrow: "ÒGANIZE FICHYE YO",
    title: "Yon gwo dosye ka genyen ti dosye ki klase fichye yo.",
    nodes: ["Dokiman", "Travay", "Fakti 2026", "Fakti_Jiyè.pdf"],
  },
  "browser-search-engine-website-page-map": {
    eyebrow: "PA KONFONN YO",
    title: "Navigatè a louvri motè rechèch la, ki ede w jwenn sit ak paj.",
    nodes: [
      "Navigatè\nChrome",
      "Motè rechèch\nGoogle",
      "Sit entènèt",
      "Yon paj",
    ],
  },
  "email-sender-recipient-delivery-chain": {
    eyebrow: "KIJAN IMÈL VWAYAJE",
    title:
      "Mesaj la soti nan bwat ou, pase sou entènèt, epi rive nan bwat moun nan.",
    nodes: ["Ou menm", "Sèvè imèl ou", "Entènèt", "Moun k ap resevwa"],
  },
  "local-vs-cloud-storage-comparison": {
    eyebrow: "DE KOTE FICHYE KA RETE",
    title:
      "Depo lokal rete sou aparèy la; cloud la rete sou yon sèvis entènèt.",
    nodes: ["Depo lokal\nAparèy ou", "Senkronizasyon", "Cloud\nSou entènèt"],
  },
  "computer-ports-usb-hdmi-audio-power": {
    eyebrow: "PÒ ÒDINATÈ YO",
    title: "Fòm pò a ede w konnen ki kab oswa aparèy ki mache ladan l.",
    nodes: [
      "USB\nDone + kouran",
      "HDMI\nVideyo + son",
      "Audio\nKas",
      "Power\nChajè",
    ],
  },
  "print-chain-computer-driver-printer-paper": {
    eyebrow: "CHEMEN ENPRIMAN AN",
    title: "Dokiman an bezwen lojisyèl, koneksyon, enprimant, epi papye.",
    nodes: ["Dokiman", "Driver", "Enprimant", "Papye"],
  },
};

function InstructionalDiagram({
  id,
  caption,
}: {
  id: string;
  caption?: string;
}) {
  const content = diagramContent[id];
  if (!content) return null;

  return (
    <figure className="border-border bg-night mb-6 overflow-hidden rounded-[18px] border px-5 py-6 text-white sm:px-7 sm:py-8">
      <p className="font-lesson-mono text-coral mb-2 text-[10px] tracking-[0.14em] uppercase">
        {content.eyebrow}
      </p>
      <h2 className="font-display max-w-2xl text-2xl leading-tight sm:text-3xl">
        {content.title}
      </h2>
      <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {content.nodes.map((node, index) => (
          <div key={node} className="flex min-w-0 items-center gap-2">
            <div className="flex min-h-20 flex-1 items-center rounded-xl border border-white/15 bg-white/8 px-4 py-3">
              <p className="text-sm leading-snug font-semibold whitespace-pre-line">
                {node}
              </p>
            </div>
            {index < content.nodes.length - 1 && (
              <span
                className="text-coral hidden shrink-0 text-lg lg:block"
                aria-hidden="true"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="text-night-text mt-4 text-xs leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function WordsPhase({ blocks }: { blocks: LessonBlock[] }) {
  const vocab = blocks.find((b) => b.type === "vocabulary");
  if (vocab?.type !== "vocabulary") return null;
  return (
    <div>
      <SectionLabel>🧠 Mo Dijital Yo</SectionLabel>
      <div className="grid gap-2.5">
        {vocab.words.map((item, index) => (
          <div
            key={item.term}
            className={cn(
              "rounded-xl px-4 py-3.5",
              index % 2 === 0 ? "bg-indigo-light" : "bg-indigo/10",
            )}
          >
            <div className="mb-1 text-[16.5px] font-bold">{item.term}</div>
            <div className="text-muted mb-1.5 text-[13.5px]">
              {item.definition}
            </div>
            <div className="text-ink text-[13.5px] italic">
              &ldquo;{item.example}&rdquo;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlatformPhase({
  blocks,
  viewPlatform,
  onSwap,
}: {
  blocks: LessonBlock[];
  viewPlatform: PreferredPlatform;
  onSwap: () => void;
}) {
  const block = blocks.find((b) => b.type === "platform_steps");
  if (block?.type !== "platform_steps") return null;
  const steps = block.steps;
  const primary = steps[viewPlatform];
  const other = viewPlatform === "windows" ? "mac" : "windows";
  const otherHasSteps = Boolean(steps[other]);
  const crossDevice = [
    steps.android ? { label: "Android", items: steps.android } : null,
    steps.iphone ? { label: "iPhone", items: steps.iphone } : null,
  ].filter((item): item is { label: string; items: string[] } => Boolean(item));

  return (
    <div>
      <SectionLabel>
        {viewPlatform === "windows" ? "🖥 Etap Windows" : "🍎 Etap Mac"}
      </SectionLabel>
      {primary && primary.length > 0 ? (
        <div className="grid gap-2">
          {primary.map((text, index) => (
            <div
              key={text}
              className="border-border flex items-center gap-3 rounded-xl border bg-[#FCFCFE] px-3.5 py-3"
            >
              <span className="bg-indigo flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                {index + 1}
              </span>
              <span className="text-[14px]">{text}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted text-[13.5px]">
          Leson sa a pa bezwen etap espesifik pou{" "}
          {viewPlatform === "windows" ? "Windows" : "Mac"}.
        </p>
      )}
      {block.steps.recoveryNote && (
        <p className="text-muted mt-3 text-[13px] italic">
          Si ekran ou sanble diferan: {block.steps.recoveryNote}
        </p>
      )}
      {otherHasSteps && (
        <button
          type="button"
          onClick={onSwap}
          className="text-indigo-dark mt-4 text-[13.5px] font-semibold"
        >
          Gade etap {other === "windows" ? "Windows" : "Mac"} yo pito →
        </button>
      )}
      {crossDevice.length > 0 && (
        <div className="mt-6">
          <SectionLabel>Sou Telefòn Ou Tou</SectionLabel>
          <div className="grid gap-2.5">
            {crossDevice.map((device) => (
              <div
                key={device.label}
                className="border-border rounded-xl border bg-[#FCFCFE] px-4 py-3.5"
              >
                <p className="text-indigo-dark mb-1 text-[13px] font-bold">
                  📱 {device.label}
                </p>
                <ul className="text-muted list-inside list-disc text-[13.5px] leading-[1.6]">
                  {device.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PracticePhase({ blocks }: { blocks: LessonBlock[] }) {
  const practice = blocks.find((b) => b.type === "practice");
  const mistake = blocks.find((b) => b.type === "mistake");
  const safety = blocks.find((b) => b.type === "safety");
  return (
    <div className="grid gap-7">
      {practice?.type === "practice" && (
        <div>
          <SectionLabel>Pratike San Danje</SectionLabel>
          <p className="text-muted text-[14.5px] leading-[1.6]">
            {renderText(practice.instructions)}
          </p>
        </div>
      )}
      {mistake?.type === "mistake" && (
        <div>
          <SectionLabel>⚠️ Erè Komen</SectionLabel>
          <div className="mb-2 flex flex-wrap gap-2.5">
            <div className="bg-error/10 flex-1 rounded-[10px] px-3.5 py-2.5">
              <span className="text-error text-sm font-bold">
                ❌ {mistake.mistake.wrong}
              </span>
            </div>
            <div className="bg-success/10 flex-1 rounded-[10px] px-3.5 py-2.5">
              <span className="text-success text-sm font-bold">
                ✅ {mistake.mistake.right}
              </span>
            </div>
          </div>
          <p className="text-muted text-[13.5px]">
            {renderText(mistake.mistake.why)}
          </p>
        </div>
      )}
      {safety?.type === "safety" && (
        <div className="border-border rounded-xl border bg-[#FBEAE0] px-4.5 py-4">
          <p className="text-ink mb-2 text-[13px] font-bold">
            Anvan ou kontinye
          </p>
          <ul className="text-ink list-inside list-disc text-[13.5px] leading-[1.6]">
            {safety.reminders.map((reminder) => (
              <li key={reminder}>{reminder}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MissionPhase({
  blocks,
  stepsDone,
  onToggleStep,
}: {
  blocks: LessonBlock[];
  stepsDone: boolean[];
  onToggleStep: (index: number) => void;
}) {
  const aiHelp = blocks.find((b) => b.type === "ai_help");
  const mission = blocks.find((b) => b.type === "mission");
  const [copied, setCopied] = useState(false);

  function copyPrompt(prompt: string) {
    navigator.clipboard?.writeText(prompt).catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="grid gap-7">
      {aiHelp?.type === "ai_help" && (
        <div>
          <SectionLabel>🤖 Mande AI</SectionLabel>
          <div className="bg-night text-night-text font-lesson-mono relative rounded-xl px-4.5 py-4 text-[13px] leading-relaxed">
            {aiHelp.aiHelp.prompt}
            <button
              type="button"
              onClick={() => copyPrompt(aiHelp.aiHelp.prompt)}
              className="bg-indigo absolute top-3 right-3 inline-flex min-h-8 items-center gap-1.5 rounded-full px-3 py-1.5 font-sans text-[11.5px] font-semibold text-white"
            >
              {copied ? (
                <CheckIcon className="size-3.5" />
              ) : (
                <CopyIcon className="size-3.5" />
              )}{" "}
              {copied ? "Kopye!" : "Kopye"}
            </button>
          </div>
          <p className="text-muted mt-2.5 text-[12.5px] italic">
            {aiHelp.aiHelp.reminder}
          </p>
        </div>
      )}
      {mission?.type === "mission" && (
        <div>
          <SectionLabel>🎯 Misyon Nan Lavi Reyèl</SectionLabel>
          <div className="rounded-[10px] border-l-4 border-[#E07A3F] bg-[#FBEAE0] px-4.5 py-4">
            <p className="text-ink mb-2 text-[14.5px] font-semibold">
              {mission.mission.scenario}
            </p>
            <p className="text-ink mb-3 text-[13.5px]">
              {mission.mission.objective}
            </p>
            <div className="mb-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-indigo-dark text-[11.5px] font-bold tracking-wide uppercase">
                  Travay Pou Fè
                </p>
                <p className="text-muted text-[11.5px] font-semibold">
                  {stepsDone.filter(Boolean).length} sou{" "}
                  {mission.mission.requiredSteps.length} konplete
                </p>
              </div>
              <div className="grid gap-1.5">
                {mission.mission.requiredSteps.map((step, index) => {
                  const done = stepsDone[index] ?? false;
                  return (
                    <label
                      key={step}
                      className="flex min-h-9 cursor-pointer items-start gap-2.5 rounded-lg bg-white/60 px-3 py-2"
                    >
                      <input
                        type="checkbox"
                        checked={done}
                        onChange={() => onToggleStep(index)}
                        className="accent-indigo mt-0.5 size-4.5 shrink-0"
                      />
                      <span
                        className={cn(
                          "text-ink text-[13.5px] leading-[1.5]",
                          done && "text-muted line-through",
                        )}
                      >
                        {step}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="border-border/60 mb-3 rounded-lg border bg-white/60 px-3.5 py-3">
              <p className="text-indigo-dark mb-1.5 text-[11.5px] font-bold tracking-wide uppercase">
                Ou fini lè
              </p>
              <ul className="text-ink list-inside list-disc text-[13px] leading-[1.6]">
                {mission.mission.successCriteria.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {mission.mission.hint && (
              <p className="text-muted mb-3 text-[12.5px] italic">
                Konsèy: {mission.mission.hint}
              </p>
            )}
            {mission.mission.stretchChallenge && (
              <p className="text-muted mb-3 text-[12.5px]">
                <span className="font-semibold">Vle plis?</span>{" "}
                {mission.mission.stretchChallenge}
              </p>
            )}
            {stepsDone.length > 0 && stepsDone.every(Boolean) && (
              <p className="text-success flex items-center gap-1.5 text-[13px] font-semibold">
                <CheckIcon className="size-4" />
                Tout travay yo konplete!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export interface CheckAnswer {
  checked: boolean;
  correct: boolean;
  selectedIndex?: number;
  selectedIndexes?: number[];
  order?: number[];
}

export function isAnswerCorrect(
  question: KnowledgeCheckQuestion,
  answer: CheckAnswer,
): boolean {
  switch (question.kind) {
    case "multiple_choice":
    case "scenario_decision":
      return answer.selectedIndex === question.correctIndex;
    case "select_all": {
      const selected = new Set(answer.selectedIndexes ?? []);
      const correct = new Set(question.correctIndexes);
      return (
        selected.size === correct.size &&
        [...selected].every((i) => correct.has(i))
      );
    }
    case "order_steps":
      return (
        JSON.stringify(answer.order ?? []) ===
        JSON.stringify(question.correctOrder)
      );
    case "match_term":
      return Boolean(answer.checked) && answer.correct;
  }
}

function CheckPhase({
  questions,
  state,
  onChange,
}: {
  questions: KnowledgeCheckQuestion[];
  state: CheckAnswer[];
  onChange: (updater: (prev: CheckAnswer[]) => CheckAnswer[]) => void;
}) {
  function updateAnswer(index: number, partial: Partial<CheckAnswer>) {
    onChange((prev) => {
      const next = [...prev];
      // match_term self-verifies and passes checked:true directly; every other
      // kind only records a selection here and relies on verify() to set it.
      next[index] = {
        ...next[index],
        ...partial,
        checked: partial.checked ?? false,
      };
      return next;
    });
  }

  function verify(index: number) {
    const question = questions[index];
    onChange((prev) => {
      const answer = prev[index];
      const correct = isAnswerCorrect(question, answer);
      const next = [...prev];
      next[index] = { ...next[index], checked: true, correct };
      return next;
    });
  }

  return (
    <div className="grid gap-8">
      <SectionLabel>✅ Quiz</SectionLabel>
      {questions.map((question, index) => (
        <QuestionCard
          key={question.prompt}
          question={question}
          answer={state[index] ?? { checked: false, correct: false }}
          onAnswerChange={(partial) => updateAnswer(index, partial)}
          onVerify={() => verify(index)}
        />
      ))}
    </div>
  );
}

export function QuestionCard({
  question,
  answer,
  onAnswerChange,
  onVerify,
}: {
  question: KnowledgeCheckQuestion;
  answer: CheckAnswer;
  onAnswerChange: (partial: Partial<CheckAnswer>) => void;
  onVerify: () => void;
}) {
  const canVerify =
    question.kind === "match_term"
      ? true
      : question.kind === "order_steps"
        ? (answer.order?.length ?? 0) === question.steps.length
        : question.kind === "select_all"
          ? (answer.selectedIndexes?.length ?? 0) > 0
          : answer.selectedIndex !== undefined;

  return (
    <div>
      <p className="mb-3 text-[14.5px] font-semibold">{question.prompt}</p>

      {(question.kind === "multiple_choice" ||
        question.kind === "scenario_decision") && (
        <div className="mb-2.5 grid gap-2.5">
          {question.options.map((option, index) => {
            const isSelected = answer.selectedIndex === index;
            const showState = answer.checked && isSelected;
            const isCorrectOption = index === question.correctIndex;
            return (
              <button
                key={option}
                type="button"
                onClick={() => onAnswerChange({ selectedIndex: index })}
                aria-pressed={isSelected}
                className={cn(
                  "min-h-11 rounded-[10px] px-4 py-3 text-left text-[14.5px] transition",
                  isSelected
                    ? "border-indigo border-2 font-semibold"
                    : "border-border border bg-[#FCFCFE] font-medium",
                  showState &&
                    (isCorrectOption ? "bg-success/10" : "bg-error/10"),
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}

      {question.kind === "select_all" && (
        <div className="mb-2.5 grid gap-2.5">
          {question.options.map((option, index) => {
            const selected = answer.selectedIndexes ?? [];
            const isSelected = selected.includes(index);
            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  onAnswerChange({
                    selectedIndexes: isSelected
                      ? selected.filter((i) => i !== index)
                      : [...selected, index],
                  })
                }
                aria-pressed={isSelected}
                className={cn(
                  "min-h-11 rounded-[10px] px-4 py-3 text-left text-[14.5px] transition",
                  isSelected
                    ? "border-indigo border-2 font-semibold"
                    : "border-border border bg-[#FCFCFE] font-medium",
                )}
              >
                {isSelected ? "☑" : "☐"} {option}
              </button>
            );
          })}
        </div>
      )}

      {question.kind === "order_steps" && (
        <OrderStepsInput
          steps={question.steps}
          order={answer.order ?? []}
          onChange={(order) => onAnswerChange({ order })}
        />
      )}

      {question.kind === "match_term" && (
        <MatchTermInput
          pairs={question.pairs}
          onAllMatched={(correct) => onAnswerChange({ correct, checked: true })}
        />
      )}

      {question.kind !== "match_term" && (
        <button
          type="button"
          disabled={!canVerify}
          onClick={onVerify}
          className={cn(
            "min-h-11 rounded-full px-5 py-2.5 text-sm font-semibold",
            !canVerify
              ? "bg-indigo-light text-muted cursor-not-allowed"
              : "bg-indigo-dark cursor-pointer text-white",
          )}
        >
          Verifye Repons lan
        </button>
      )}
      {answer.checked && (
        <p
          role={answer.correct ? "status" : "alert"}
          className={cn(
            "mt-2.5 text-[13.5px]",
            answer.correct ? "text-success" : "text-error",
          )}
        >
          {answer.correct
            ? `✅ Wi! ${question.explanation}`
            : `❌ Eseye ankò — ${question.explanation}`}
        </p>
      )}
    </div>
  );
}

function OrderStepsInput({
  steps,
  order,
  onChange,
}: {
  steps: string[];
  order: number[];
  onChange: (order: number[]) => void;
}) {
  return (
    <div className="mb-2.5">
      <div className="mb-3 grid gap-2">
        {steps.map((step, index) => {
          const position = order.indexOf(index);
          const isPicked = position !== -1;
          return (
            <button
              key={step}
              type="button"
              onClick={() =>
                onChange(
                  isPicked
                    ? order.filter((i) => i !== index)
                    : [...order, index],
                )
              }
              aria-pressed={isPicked}
              className={cn(
                "flex min-h-11 items-center gap-3 rounded-[10px] px-4 py-3 text-left text-[14px] transition",
                isPicked
                  ? "border-indigo border-2 font-semibold"
                  : "border-border border bg-[#FCFCFE]",
              )}
            >
              {isPicked && (
                <span className="bg-indigo flex size-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white">
                  {position + 1}
                </span>
              )}
              {step}
            </button>
          );
        })}
      </div>
      {order.length > 0 && (
        <button
          type="button"
          onClick={() => onChange([])}
          className="text-indigo-dark text-[12.5px] font-semibold"
        >
          Rekòmanse lòd la
        </button>
      )}
    </div>
  );
}

function MatchTermInput({
  pairs,
  onAllMatched,
}: {
  pairs: { term: string; meaning: string }[];
  onAllMatched: (allCorrect: boolean) => void;
}) {
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [shuffledMeanings] = useState(() =>
    [...pairs.map((p) => p.meaning)].sort(() => 0.5 - Math.random()),
  );

  function choose(term: string, meaning: string) {
    const next = { ...choices, [term]: meaning };
    setChoices(next);
    const allChosen = pairs.every((p) => next[p.term]);
    if (allChosen) {
      onAllMatched(pairs.every((p) => next[p.term] === p.meaning));
    }
  }

  return (
    <div className="grid gap-3">
      {pairs.map((pair) => (
        <div key={pair.term} className="border-border rounded-xl border p-3.5">
          <p className="text-ink mb-2 text-[14px] font-bold">{pair.term}</p>
          <div className="grid gap-1.5">
            {shuffledMeanings.map((meaning) => {
              const isSelected = choices[pair.term] === meaning;
              return (
                <button
                  key={meaning}
                  type="button"
                  onClick={() => choose(pair.term, meaning)}
                  aria-pressed={isSelected}
                  className={cn(
                    "min-h-9 rounded-lg px-3 py-2 text-left text-[13px]",
                    isSelected
                      ? "border-indigo border-2 font-semibold"
                      : "border-border border bg-[#FCFCFE]",
                  )}
                >
                  {meaning}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function ReflectPhase({
  blocks,
  unlocked,
  nextLesson,
  nextCheckpoint,
  nextReadinessReflection,
}: {
  blocks: LessonBlock[];
  unlocked: boolean;
  nextLesson: CourseLesson | null;
  nextCheckpoint?: Checkpoint;
  nextReadinessReflection?: ReadinessReflection;
}) {
  const reflection = blocks.find((b) => b.type === "reflection");
  const [chosen, setChosen] = useState<number | null>(null);

  return (
    <div className="grid gap-7">
      {reflection?.type === "reflection" && (
        <div>
          <SectionLabel>Kijan ou santi w?</SectionLabel>
          <div className="grid gap-2">
            {reflection.prompts.map((prompt, index) => (
              <button
                key={prompt.statement}
                type="button"
                onClick={() => setChosen(index)}
                aria-pressed={chosen === index}
                className={cn(
                  "min-h-11 rounded-[10px] px-4 py-3 text-left text-[14px]",
                  chosen === index
                    ? "border-indigo border-2 font-semibold"
                    : "border-border border bg-[#FCFCFE]",
                )}
              >
                {prompt.statement}
              </button>
            ))}
          </div>
          <p className="text-muted mt-2 text-[12px]">
            Sa a pa yon nòt — li sèlman ede w remake sa ou ta dwe pratike ankò.
          </p>
        </div>
      )}

      <div>
        <SectionLabel>🏆 Pwogrè</SectionLabel>
        <div
          className={cn(
            "rounded-[18px] px-5.5 py-7.5 text-center",
            unlocked
              ? "bg-indigo text-white"
              : "bg-indigo-light text-indigo-dark/70",
          )}
        >
          <div
            className={cn(
              "mx-auto mb-3.5 grid size-[70px] -rotate-6 place-items-center rounded-full border-[3px]",
              unlocked
                ? "border-white bg-white/15"
                : "border-indigo-light bg-transparent",
            )}
          >
            {unlocked ? (
              <SparklesIcon className="size-7" />
            ) : (
              <StampIcon className="size-6.5" />
            )}
          </div>
          <h3
            className={cn(
              "mb-1.5 text-[19px] font-semibold",
              unlocked && "font-fraunces italic",
            )}
          >
            {unlocked
              ? "Leson Konplete! 🎉"
              : "Fini quiz la ak misyon an pou dekloke stanp lan"}
          </h3>
          {unlocked && (
            <div className="mt-5 flex flex-col items-center gap-3">
              {nextCheckpoint && (
                <Link
                  href={`/academy/courses/computer-internet-essentials/learn/${nextCheckpoint.id}`}
                  className="text-indigo-dark inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold"
                >
                  <StampIcon className="size-4" />
                  Pran {nextCheckpoint.titleHt}
                  <ArrowRightIcon className="size-4" />
                </Link>
              )}
              {nextReadinessReflection && (
                <Link
                  href={`/academy/courses/computer-internet-essentials/learn/${nextReadinessReflection.id}`}
                  className="text-indigo-dark inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold"
                >
                  <SparklesIcon className="size-4" />
                  Fè {nextReadinessReflection.titleHt}
                  <ArrowRightIcon className="size-4" />
                </Link>
              )}
              <Link
                href={
                  nextLesson
                    ? `/academy/courses/computer-internet-essentials/learn/${nextLesson.slug}`
                    : "/academy/courses/computer-internet-essentials/learn"
                }
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold",
                  nextCheckpoint || nextReadinessReflection
                    ? "text-white/85"
                    : "text-indigo-dark bg-white",
                )}
              >
                <GraduationCapIcon className="size-4" />
                {nextLesson
                  ? `Kontinye ak ${nextLesson.titleHt}`
                  : "Tounen nan Tout Leson"}
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
