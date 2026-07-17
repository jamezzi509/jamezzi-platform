"use client";

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
    <main className="bg-white pt-[72px]">
      <div className="mx-auto max-w-[620px] px-4 pt-3 pb-28 sm:px-5 sm:pt-5 sm:pb-16">
        <div className="border-border sticky top-[72px] z-20 -mx-1 mb-5 border-b bg-white/95 px-1 pt-2.5 pb-3 backdrop-blur-sm sm:mb-6">
          <p
            className="text-muted mb-2 truncate text-[12px] sm:text-[12.5px]"
            title={`Modil ${currentModule?.order}: ${currentModule?.titleHt ?? currentModule?.titleEn}`}
          >
            Modil {currentModule?.order}:{" "}
            {currentModule?.titleHt ?? currentModule?.titleEn} · Leson{" "}
            {moduleLessonIndex + 1} sou {moduleLessons.length}
            {lesson.mode === "platform_variant" && (
              <>
                {" "}
                <span className="text-indigo-dark">·</span> Vèsyon{" "}
                {viewPlatform === "windows" ? "Windows" : "Mac"}
              </>
            )}
          </p>
          <div className="mb-2 flex items-center gap-2.5">
            <div
              className="bg-indigo-light h-1.5 flex-1 overflow-hidden rounded-full"
              role="progressbar"
              aria-label={`Pwogrè Modil ${currentModule?.order ?? ""}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={moduleProgressPercent}
            >
              <div
                className="bg-indigo h-full rounded-full"
                style={{ width: `${moduleProgressPercent}%` }}
              />
            </div>
            <span className="text-muted shrink-0 text-[11.5px] whitespace-nowrap">
              {moduleProgressPercent}%
            </span>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-[12px] sm:gap-3 sm:text-[12.5px]">
            {prevLesson ? (
              <Link
                href={`/academy/courses/computer-internet-essentials/learn/${prevLesson.slug}`}
                className="text-indigo-dark min-w-0 truncate font-semibold"
                title={prevLesson.titleHt}
              >
                ← <span className="sm:hidden">Anvan</span>
                <span className="hidden sm:inline">{prevLesson.titleHt}</span>
              </Link>
            ) : (
              <span className="text-border">← Premye leson</span>
            )}
            <Link
              href="/academy/courses/computer-internet-essentials"
              className="text-muted hover:text-indigo-dark font-semibold"
            >
              <span className="sm:hidden">Plan</span>
              <span className="hidden sm:inline">Plan kou a</span>
            </Link>
            <Link
              href={nextCourseHref}
              className="text-indigo-dark min-w-0 truncate text-right font-semibold"
              title={nextCourseLabel}
            >
              <span className="sm:hidden">Apre</span>
              <span className="hidden sm:inline">{nextCourseLabel}</span> →
            </Link>
          </div>
        </div>

        <div className="mb-7">
          <div className="mb-2 flex gap-1.5">
            {phases.map((item, index) => (
              <div
                key={item.phase}
                className={cn(
                  "h-1.5 flex-1 rounded-full",
                  index <= step ? "bg-indigo" : "bg-indigo-light",
                )}
              />
            ))}
          </div>
          <p
            ref={stepStatusRef}
            tabIndex={-1}
            aria-live="polite"
            className="font-lesson-mono text-indigo-dark/70 focus-visible:ring-indigo rounded-sm text-[11px] tracking-[0.1em] uppercase focus-visible:ring-2 focus-visible:outline-none"
          >
            Etap {step + 1} sou {phases.length} ·{" "}
            {phaseLabels[currentPhase.phase]}
          </p>
          {progressSaved && (
            <p className="text-metadata text-indigo-dark mt-2" role="status">
              ✓ Pwogrè leson sa a anrejistre sou aparèy sa a.
            </p>
          )}
        </div>

        {currentPhase.phase === "learn" && (
          <LearnPhase blocks={currentPhase.blocks} />
        )}
        {currentPhase.phase === "words" && (
          <WordsPhase blocks={currentPhase.blocks} />
        )}
        {currentPhase.phase === "platform" && (
          <PlatformPhase
            blocks={currentPhase.blocks}
            viewPlatform={viewPlatform}
            onSwap={() =>
              setViewPlatform(viewPlatform === "windows" ? "mac" : "windows")
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

        {!isLastStep && (
          <div className="border-border sticky bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-20 -mx-1 mt-8 flex items-center justify-between rounded-full border bg-white/95 p-2 pl-4 shadow-[0_12px_35px_rgba(29,24,46,0.16)] backdrop-blur sm:static sm:mx-0 sm:rounded-none sm:border-x-0 sm:border-b-0 sm:bg-transparent sm:px-0 sm:pt-6 sm:pb-0 sm:shadow-none">
            <button
              type="button"
              onClick={() => moveTo(step - 1)}
              disabled={step === 0}
              className="text-indigo-dark min-h-11 px-2 text-sm font-semibold disabled:pointer-events-none disabled:opacity-0"
            >
              ← Tounen
            </button>
            <button
              type="button"
              onClick={() => moveTo(step + 1)}
              disabled={continueDisabled}
              className={cn(
                "min-h-12 min-w-[132px] rounded-full px-6 text-sm font-semibold",
                continueDisabled
                  ? "bg-indigo-light text-muted cursor-not-allowed"
                  : "bg-indigo cursor-pointer text-white",
              )}
            >
              Kontinye →
            </button>
          </div>
        )}
        {isLastStep && (
          <div className="border-border sticky bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-20 -mx-1 mt-8 rounded-full border bg-white/95 p-2 pl-4 shadow-[0_12px_35px_rgba(29,24,46,0.16)] backdrop-blur sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
            <button
              type="button"
              onClick={() => moveTo(step - 1)}
              className="text-indigo-dark min-h-11 text-sm font-semibold"
            >
              ← Tounen
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

function LearnPhase({ blocks }: { blocks: LessonBlock[] }) {
  const goal = blocks.find((b) => b.type === "goal");
  const explanation = blocks.find((b) => b.type === "explanation");
  const diagram = blocks.find((b) => b.type === "diagram");
  return (
    <div>
      {diagram?.type === "diagram" && (
        <div className="border-border bg-paper mb-6 flex aspect-[16/9] w-full items-center justify-center rounded-[18px] border">
          <p className="text-muted px-8 text-center text-[13px]">
            [Diagram: {diagram.diagram.diagramId}]
            {diagram.diagram.caption ? ` — ${diagram.diagram.caption}` : ""}
          </p>
        </div>
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
