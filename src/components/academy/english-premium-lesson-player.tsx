"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { englishProgressStorageKey } from "@/components/academy/english-level-one-lessons";
import { LessonIllustration, LessonMascot } from "@/components/academy/english-lesson-illustrations";
import {
  CheckIcon,
  CopyIcon,
  GraduationCapIcon,
  SparklesIcon,
  StampIcon,
  VolumeIcon,
} from "@/components/ui/icons";
import { englishLevelOneLessons } from "@/content/english-level-one";
import { englishLevels } from "@/content/english-course";
import type { EnglishPremiumLesson } from "@/content/english-lessons-premium";
import { getEnglishRecordedAudio } from "@/content/english-audio";
import { cn } from "@/lib/cn";
import { saveCompletedLesson } from "@/lib/course-progress";

const steps = [
  { key: "learn", label: "Aprann" },
  { key: "pattern", label: "Modèl" },
  { key: "vocab", label: "Vokabilè" },
  { key: "mistakes", label: "Atansyon" },
  { key: "practice", label: "Pratike" },
  { key: "apply", label: "Aplike" },
  { key: "complete", label: "Fini" },
] as const;

function renderLessonText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
}

let activeAudio: HTMLAudioElement | null = null;

function getPreferredVoice() {
  const voices = window.speechSynthesis.getVoices();
  const preferredNames = [
    "Microsoft Aria Online (Natural)",
    "Microsoft Jenny Online (Natural)",
    "Google US English",
    "Samantha",
    "Ava",
  ];
  return (
    preferredNames
      .map((name) => voices.find((voice) => voice.name.includes(name)))
      .find(Boolean) ??
    voices.find((voice) => voice.lang === "en-US" && !voice.localService) ??
    voices.find((voice) => voice.lang === "en-US") ??
    voices.find((voice) => voice.lang.startsWith("en")) ??
    null
  );
}

function speakWithDeviceVoice(text: string, slow: boolean) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.voice = getPreferredVoice();
  utterance.rate = slow ? 0.68 : 0.9;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function playEnglishAudio(text: string, slow = false) {
  if (typeof window === "undefined") return;
  activeAudio?.pause();
  window.speechSynthesis?.cancel();

  const recordedAudio = getEnglishRecordedAudio(text);
  if (!recordedAudio) {
    speakWithDeviceVoice(text, slow);
    return;
  }

  const audio = new Audio(recordedAudio);
  activeAudio = audio;
  audio.playbackRate = slow ? 0.72 : 1;
  audio.preservesPitch = true;
  audio.play().catch(() => speakWithDeviceVoice(text, slow));
}

function AudioControls({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <button
        type="button"
        onClick={() => playEnglishAudio(text)}
        className="text-lesson-brand-2 inline-flex min-h-9 items-center gap-1 rounded-full bg-white px-2.5 py-1.5 text-xs font-semibold shadow-[0_1px_3px_rgba(20,20,50,.12)]"
        aria-label={`Koute pwononsyasyon pou ${text}`}
      >
        <VolumeIcon className="size-3.5" /> Jwe
      </button>
      <button
        type="button"
        onClick={() => playEnglishAudio(text, true)}
        className="border-lesson-line text-lesson-ink-dim inline-flex min-h-9 items-center rounded-full border bg-white px-2.5 py-1.5 text-[11px] font-semibold"
        aria-label={`Koute ${text} pi dousman`}
      >
        0.7×
      </button>
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-lesson-mono text-lesson-brand-2 mb-3.5 flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase before:h-[2px] before:w-[18px] before:rounded-full before:bg-[var(--color-lesson-brand)] before:content-['']">
      {children}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-lesson-brand/10 text-lesson-brand-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12.5px] font-semibold">
      {children}
    </span>
  );
}

/** Path-style step progress: connected circular nodes, not a plain thin bar. */
function PathProgress({ currentStep }: { currentStep: number }) {
  return (
    <div className="mb-2.5 flex items-center gap-1 sm:gap-1.5">
      {steps.map((item, index) => {
        const done = index < currentStep;
        const current = index === currentStep;
        return (
          <div key={item.key} className="flex flex-1 items-center gap-1 sm:gap-1.5">
            <div
              className={cn(
                "grid size-[22px] shrink-0 place-items-center rounded-full text-[10px] font-bold shadow-[0_1px_2px_rgba(0,0,0,.1)] sm:size-[26px] sm:text-[11px]",
                done && "bg-gradient-to-br from-[var(--color-lesson-mint)] to-[#2a9c72] text-white",
                current &&
                  "bg-gradient-to-br from-[var(--color-lesson-brand)] to-[var(--color-lesson-brand-2)] scale-[1.15] text-white shadow-[0_0_0_4px_rgba(109,95,216,.18),0_3px_8px_rgba(109,95,216,.35)]",
                !done && !current && "bg-lesson-line text-lesson-ink-dim",
              )}
            >
              {done ? (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              ) : (
                index + 1
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-[3px] flex-1 rounded-full",
                  done
                    ? "bg-gradient-to-r from-[var(--color-lesson-mint)] to-[#2a9c72]"
                    : "bg-lesson-line",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

const avatarTones = [
  "from-[#F08A5D] to-[#E85D75]",
  "from-[var(--color-lesson-mint)] to-[#2a9c72]",
  "from-[var(--color-lesson-brand)] to-[var(--color-lesson-brand-2)]",
];

function DialogueCard({
  line,
  tag,
  emoji,
  index,
}: {
  line: string;
  tag: string;
  emoji: string;
  index: number;
}) {
  const tone = avatarTones[index % avatarTones.length];
  return (
    <div className="border-lesson-line group flex items-center gap-3.5 rounded-2xl border bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(20,20,50,.05)] transition-[box-shadow,transform] hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(109,95,216,.14)]">
      <div
        className={cn(
          "grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br text-lg shadow-[0_2px_6px_rgba(0,0,0,.15)]",
          tone,
        )}
        aria-hidden="true"
      >
        {emoji}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <span className="text-[15.5px] font-semibold text-[var(--color-lesson-ink)]">
            {line}
          </span>
          <AudioControls text={line} />
        </div>
        <div className="text-lesson-brand-2 mt-0.5 text-xs font-semibold">{tag}</div>
      </div>
    </div>
  );
}

export function EnglishPremiumLessonPlayer({
  lesson,
}: {
  lesson: EnglishPremiumLesson;
}) {
  const [step, setStep] = useState(0);
  const [patternIndex, setPatternIndex] = useState(0);
  const [practiceSelected, setPracticeSelected] = useState<number | null>(null);
  const [practiceChecked, setPracticeChecked] = useState(false);
  const [missionDone, setMissionDone] = useState(false);
  const [thinkText, setThinkText] = useState("");
  const [copied, setCopied] = useState(false);
  const [progressSaved, setProgressSaved] = useState(false);
  const stepStatusRef = useRef<HTMLParagraphElement>(null);

  const lessonIndex = englishLevelOneLessons.findIndex(
    (item) => item.slug === lesson.slug,
  );
  const totalLessons = englishLevelOneLessons.length;
  const currentModuleNumber =
    englishLevelOneLessons[lessonIndex]?.moduleNumber ?? 1;
  const moduleLessons = englishLevelOneLessons.filter(
    (item) => item.moduleNumber === currentModuleNumber,
  );
  const moduleLessonIndex = moduleLessons.findIndex(
    (item) => item.slug === lesson.slug,
  );
  const moduleProgressPercent = Math.round(
    ((moduleLessonIndex + 1) / moduleLessons.length) * 100,
  );
  const prevLesson =
    lessonIndex > 0 ? englishLevelOneLessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex >= 0 && lessonIndex < totalLessons - 1
      ? englishLevelOneLessons[lessonIndex + 1]
      : null;
  const currentLevel = englishLevels.find((level) =>
    level.moduleNumbers.includes(currentModuleNumber),
  );
  const isLastLessonInLevel = Boolean(
    currentLevel &&
    !englishLevelOneLessons
      .slice(lessonIndex + 1)
      .some((item) => currentLevel.moduleNumbers.includes(item.moduleNumber)),
  );
  const nextCourseHref = isLastLessonInLevel
    ? currentLevel?.number === englishLevels.length
      ? "/academy/courses/english-for-beginners/final-exam"
      : `/academy/courses/english-for-beginners/checkpoint/${currentLevel?.number}`
    : nextLesson
      ? `/academy/courses/english-for-beginners/lessons/${nextLesson.slug}`
      : "/academy/courses/english-for-beginners/final-exam";
  const nextCourseLabel = isLastLessonInLevel
    ? currentLevel?.number === englishLevels.length
      ? "Evalyasyon final"
      : `Evalyasyon Nivo ${currentLevel?.number}`
    : (nextLesson?.title ?? "Evalyasyon final");

  const activePattern = lesson.patternBuilderOptions[patternIndex];
  const practiceCorrect = practiceSelected === lesson.practice.correctIndex;
  const unlocked = practiceChecked && practiceCorrect && missionDone;

  useEffect(() => {
    if (!unlocked) return;
    const saved =
      saveCompletedLesson(englishProgressStorageKey, lesson.slug) !== "blocked";
    const timer = window.setTimeout(() => setProgressSaved(saved), 0);
    return () => window.clearTimeout(timer);
  }, [unlocked, lesson.slug]);

  function copyPrompt() {
    navigator.clipboard?.writeText(lesson.aiPrompt).catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  function moveTo(nextStep: number) {
    setStep(Math.max(0, Math.min(nextStep, steps.length - 1)));
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setTimeout(() => stepStatusRef.current?.focus(), 0);
  }

  const practiceStepBlocked =
    step === 4 && !(practiceChecked && practiceCorrect);
  const applyStepBlocked = step === 5 && !missionDone;
  const continueDisabled = practiceStepBlocked || applyStepBlocked;

  return (
    <main className="bg-lesson-paper pt-[72px]">
      <div className="mx-auto max-w-[680px] px-4 pt-3 pb-28 sm:px-5 sm:pt-5 sm:pb-16">
        {/* COURSE NAVIGATION */}
        <div className="border-lesson-line sticky top-[72px] z-20 -mx-1 mb-5 border-b bg-white/95 px-1 pt-2.5 pb-3 backdrop-blur-sm sm:mb-6">
          <p
            className="text-lesson-ink-dim mb-2 truncate text-[12px] sm:text-[12.5px]"
            title={`Nivo ${currentLevel?.number} · Modil ${currentModuleNumber}: ${lesson.moduleTitle}`}
          >
            Nivo {currentLevel?.number} · Modil {currentModuleNumber}:{" "}
            {lesson.moduleTitle} · Leson {moduleLessonIndex + 1} sou{" "}
            {moduleLessons.length}
          </p>
          <div className="mb-2 flex items-center gap-2.5">
            <div
              className="bg-lesson-line h-1.5 flex-1 overflow-hidden rounded-full"
              role="progressbar"
              aria-label={`Pwogrè Modil ${currentModuleNumber}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={moduleProgressPercent}
            >
              <div
                className="bg-lesson-brand h-full rounded-full"
                style={{ width: `${moduleProgressPercent}%` }}
              />
            </div>
            <span className="text-lesson-ink-dim shrink-0 text-[11.5px] whitespace-nowrap">
              Modil {currentModuleNumber} · {moduleProgressPercent}%
            </span>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-[12px] sm:gap-3 sm:text-[12.5px]">
            {prevLesson ? (
              <Link
                href={`/academy/courses/english-for-beginners/lessons/${prevLesson.slug}`}
                className="text-lesson-brand-2 min-w-0 truncate font-semibold"
                title={prevLesson.title}
              >
                ← <span className="sm:hidden">Anvan</span>
                <span className="hidden sm:inline">{prevLesson.title}</span>
              </Link>
            ) : (
              <span className="text-lesson-line">← Premye leson</span>
            )}
            <Link
              href="/academy/courses/english-for-beginners/learn"
              className="text-lesson-ink-dim hover:text-lesson-brand-2 font-semibold"
            >
              <span className="sm:hidden">Plan</span>
              <span className="hidden sm:inline">Tout leson</span>
            </Link>
            <Link
              href={nextCourseHref}
              className="text-lesson-brand-2 min-w-0 truncate text-right font-semibold"
              title={nextCourseLabel}
            >
              <span className="sm:hidden">Apre</span>
              <span className="hidden sm:inline">{nextCourseLabel}</span> →
            </Link>
          </div>
        </div>

        {/* LESSON STEP PROGRESS -- path-style, not a plain bar */}
        <div className="mb-7">
          <PathProgress currentStep={step} />
          <p
            ref={stepStatusRef}
            tabIndex={-1}
            aria-live="polite"
            className="font-lesson-mono text-lesson-brand-2 focus-visible:ring-lesson-brand rounded-sm text-[11px] tracking-[0.1em] uppercase focus-visible:ring-2 focus-visible:outline-none"
          >
            Etap {step + 1} sou {steps.length} · {steps[step].label}
          </p>
          {progressSaved && (
            <p className="text-lesson-brand-2 mt-2 text-[12.5px] font-medium" role="status">
              ✓ Pwogrè leson sa a anrejistre sou aparèy sa a.
            </p>
          )}
        </div>

        {/* STEP 1: LEARN — Hero, Before You Start, Understand, See It In Action */}
        {step === 0 && (
          <>
            <div className="mb-7">
              <LessonIllustration
                slug={lesson.slug}
                illustrationKey={lesson.illustrationKey}
                heroEmoji={lesson.heroEmoji}
              />
              <h1 className="font-fraunces text-lesson-brand-2 mt-5 mb-2 text-[28px] leading-[1.2] font-semibold italic sm:text-[30px]">
                {lesson.heroTitle}
              </h1>
              <p className="text-lesson-ink-dim mb-4 text-[15.5px] leading-[1.6]">
                {lesson.heroLede}
              </p>

              <div className="from-lesson-gold/15 border-lesson-gold/40 mb-3 flex items-start gap-3 rounded-2xl border bg-gradient-to-br to-[#FDF1DC] px-4 py-4 shadow-[0_2px_8px_rgba(232,171,63,.14)]">
                <div className="from-lesson-gold grid size-8 shrink-0 place-items-center rounded-[9px] bg-gradient-to-br to-[#d99a2e] shadow-[0_2px_6px_rgba(217,154,46,.4)]">
                  <svg viewBox="0 0 24 24" className="size-4.5" fill="none" stroke="#fff" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div>
                  <div className="mb-0.5 text-[11px] font-extrabold tracking-[0.04em] text-[#a3781f] uppercase">
                    Objektif leson
                  </div>
                  <p className="text-[14px] leading-[1.5] text-[#4a3d1f]">
                    {lesson.heroGoal.replace(
                      /^🎯\s*(Objektif\s+[Ll]eson|Lesson\s+[Gg]oal)\s*:\s*/,
                      "",
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-7.5">
              <div className="bg-lesson-brand/[.06] border-lesson-brand/15 mb-3 flex items-start gap-3 rounded-2xl border px-4 py-4 shadow-[0_2px_8px_rgba(83,74,183,.08)]">
                <div className="from-lesson-brand to-lesson-brand-2 grid size-8 shrink-0 place-items-center rounded-[9px] bg-gradient-to-br shadow-[0_2px_6px_rgba(109,95,216,.4)]">
                  <svg viewBox="0 0 24 24" className="size-4.5" fill="none" stroke="#fff" strokeWidth="2.2">
                    <path d="M12 5v16" />
                    <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="text-lesson-brand-2 mb-0.5 text-[11px] font-extrabold tracking-[0.04em] uppercase">
                      Anvan Ou Kòmanse
                    </div>
                    <p className="text-[14px] leading-[1.5] text-[#3a3550]">
                      <b className="text-[var(--color-lesson-ink)]">Sa ou pral aprann:</b>{" "}
                      {lesson.whatYouWillLearn}
                    </p>
                  </div>
                  <p className="text-[13.5px] leading-[1.5] text-[#3a3550]">
                    <b className="text-[var(--color-lesson-ink)]">Prerekizi:</b>{" "}
                    {lesson.prerequisite}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip>{lesson.difficultyLabel}</Chip>
                <Chip>{lesson.readingTime}</Chip>
                <Chip>{lesson.completionTime}</Chip>
              </div>
            </div>

            <div className="mb-7.5">
              <SectionLabel>Konprann</SectionLabel>
              <h2 className="font-fraunces text-[var(--color-lesson-ink)] mb-2.5 text-[21px] leading-snug font-medium">
                {lesson.understandHeading}
              </h2>
              <p className="text-lesson-ink-dim text-[14.5px] leading-[1.6]">
                {renderLessonText(lesson.understandBody)}
              </p>
            </div>

            <div>
              <SectionLabel>Wè Sa An Aksyon</SectionLabel>
              <div className="grid gap-2.5">
                {lesson.seeItInAction.map((example, index) => (
                  <DialogueCard
                    key={example.line}
                    line={example.line}
                    tag={example.tag}
                    emoji={example.emoji}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {/* STEP 2: PATTERN BUILDER */}
        {step === 1 && (
          <div>
            <SectionLabel>⭐ Pattern Builder</SectionLabel>
            <p className="text-lesson-ink-dim mb-3 text-sm">
              {lesson.patternBuilderIntro}
            </p>
            <div className="mb-3.5 flex flex-wrap gap-2">
              {lesson.patternBuilderOptions.map((option, index) => (
                <button
                  key={option.chipLabel}
                  type="button"
                  onClick={() => setPatternIndex(index)}
                  aria-pressed={index === patternIndex}
                  className={cn(
                    "min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition",
                    index === patternIndex
                      ? "border-lesson-brand bg-lesson-brand/10 border-2"
                      : "border-lesson-line border bg-[#FCFCFE]",
                  )}
                >
                  {option.chipLabel}
                </button>
              ))}
            </div>
            <div className="from-lesson-brand to-lesson-brand-2 rounded-2xl bg-gradient-to-br px-5 py-5.5 text-center shadow-[0_10px_26px_rgba(109,95,216,.28)]">
              <span className="font-fraunces block text-2xl font-semibold text-white italic">
                {activePattern.display}
              </span>
              <span className="mt-3 inline-flex">
                <AudioControls text={activePattern.display} />
              </span>
              {activePattern.caption && (
                <span className="mt-2 block text-[13px] text-white/80">
                  {activePattern.caption}
                </span>
              )}
            </div>
          </div>
        )}

        {/* STEP 3: VOCABULARY IN CONTEXT + PRONUNCIATION */}
        {step === 2 && (
          <>
            <div className="mb-7.5">
              <SectionLabel>⭐ Vokabilè An Kontèks</SectionLabel>
              <div className="grid gap-2.5">
                {lesson.vocabulary.map((item, index) => (
                  <div
                    key={item.word}
                    className={cn(
                      "rounded-2xl px-4 py-3.5 shadow-[0_2px_8px_rgba(20,20,50,.05)]",
                      index % 2 === 0 ? "bg-lesson-brand/[.07]" : "bg-lesson-mint/10",
                    )}
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[16.5px] font-bold text-[var(--color-lesson-ink)]">
                        {item.word}
                      </span>
                      <AudioControls text={item.word} />
                    </div>
                    <div className="text-lesson-ink-dim mb-1 text-[13px]">
                      {item.ipa} · Kreyòl: <strong>{item.kreyol}</strong>
                    </div>
                    <div className="text-[13.5px] text-[var(--color-lesson-ink)] italic">
                      &ldquo;{item.example}&rdquo;
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel>Pwononsyasyon</SectionLabel>
              <div className="border-lesson-line rounded-2xl border bg-[#FCFCFE] px-4.5 py-4 shadow-[0_2px_8px_rgba(20,20,50,.05)]">
                <div className="mb-2 flex items-center gap-2.5">
                  <span className="text-xl font-bold text-[var(--color-lesson-ink)]">
                    {lesson.pronunciationWord}
                  </span>
                  <span className="font-lesson-mono text-lesson-brand-2 text-[13px]">
                    {lesson.pronunciationIpa}
                  </span>
                  <AudioControls text={lesson.pronunciationWord} />
                </div>
                <p className="text-lesson-ink-dim mb-1.5 text-[13.5px]">
                  💡 {renderLessonText(lesson.mouthTip)}
                </p>
                <p className="text-lesson-ink-dim text-[13.5px]">
                  ⚠️ {renderLessonText(lesson.pronunciationMistake)}
                </p>
              </div>
            </div>
          </>
        )}

        {/* STEP 4: COMMON MISTAKES */}
        {step === 3 && (
          <div>
            <SectionLabel>⭐ Erè Komen</SectionLabel>
            <div className="mb-2 flex flex-wrap gap-2.5">
              <div className="bg-error/10 flex-1 rounded-2xl px-3.5 py-3">
                <span className="text-error text-sm font-bold">
                  ❌ {lesson.mistakeWrong}
                </span>
              </div>
              <div className="bg-lesson-mint/10 flex-1 rounded-2xl px-3.5 py-3">
                <span className="font-bold text-[#1f7a54] text-sm">
                  ✅ {lesson.mistakeCorrect}
                </span>
              </div>
            </div>
            <p className="text-lesson-ink-dim text-[13.5px]">
              {renderLessonText(lesson.mistakeWhy)}
            </p>
            {lesson.mistakeExtraNote && (
              <div className="bg-error/10 mt-3.5 rounded-2xl px-3.5 py-3">
                <p className="text-[13.5px] text-[var(--color-lesson-ink)]">
                  {renderLessonText(lesson.mistakeExtraNote)}
                </p>
              </div>
            )}
          </div>
        )}

        {/* STEP 5: PRACTICE + THINK IN ENGLISH */}
        {step === 4 && (
          <>
            <div className="mb-7.5">
              <SectionLabel>Pratike</SectionLabel>
              <p className="mb-3 text-[14.5px] font-semibold text-[var(--color-lesson-ink)]">
                {lesson.practice.prompt}
              </p>
              <div className="mb-2.5 grid gap-2.5">
                {lesson.practice.options.map((option, index) => {
                  const isSelected = practiceSelected === index;
                  const showState = practiceChecked && isSelected;
                  const isCorrectOption =
                    index === lesson.practice.correctIndex;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setPracticeSelected(index);
                        setPracticeChecked(false);
                      }}
                      aria-pressed={isSelected}
                      className={cn(
                        "min-h-11 rounded-xl px-4 py-3 text-left text-[14.5px] transition",
                        isSelected
                          ? "border-lesson-brand border-2 font-semibold"
                          : "border-lesson-line border bg-[#FCFCFE] font-medium",
                        showState &&
                          (isCorrectOption ? "bg-lesson-mint/10" : "bg-error/10"),
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                disabled={practiceSelected === null}
                onClick={() => setPracticeChecked(true)}
                className={cn(
                  "min-h-11 rounded-full px-5 py-2.5 text-sm font-semibold",
                  practiceSelected === null
                    ? "bg-lesson-brand/10 text-lesson-ink-dim cursor-not-allowed"
                    : "bg-lesson-brand-2 cursor-pointer text-white",
                )}
              >
                Verifye Repons lan
              </button>
              {practiceChecked && (
                <p
                  role={practiceCorrect ? "status" : "alert"}
                  className={cn(
                    "mt-2.5 text-[13.5px]",
                    practiceCorrect ? "text-[#1f7a54]" : "text-error",
                  )}
                >
                  {practiceCorrect
                    ? lesson.practice.correctFeedback
                    : lesson.practice.wrongFeedback}
                </p>
              )}
            </div>

            <div>
              <SectionLabel>⭐ Panse An Anglè</SectionLabel>
              <div className="bg-lesson-brand/[.07] mb-3 rounded-2xl py-6.5 text-center text-4xl">
                {lesson.thinkEmoji}
              </div>
              <p className="text-lesson-ink-dim mb-2.5 text-sm">{lesson.thinkPrompt}</p>
              <textarea
                value={thinkText}
                onChange={(event) => setThinkText(event.target.value)}
                placeholder={lesson.thinkPlaceholder}
                aria-label="Ekri repons ou an Anglè"
                className="border-lesson-line min-h-16 w-full rounded-xl border p-3 text-[14.5px]"
              />
            </div>
          </>
        )}

        {/* STEP 6: AI PRACTICE + MISSION */}
        {step === 5 && (
          <>
            <div className="mb-7.5">
              <SectionLabel>Pratike Ak AI</SectionLabel>
              <div className="bg-night text-night-text font-lesson-mono relative rounded-xl px-4.5 py-4 text-[13px] leading-relaxed">
                {lesson.aiPrompt}
                <button
                  type="button"
                  onClick={copyPrompt}
                  className="bg-lesson-brand absolute top-3 right-3 inline-flex min-h-8 items-center gap-1.5 rounded-full px-3 py-1.5 font-sans text-[11.5px] font-semibold text-white"
                >
                  {copied ? (
                    <CheckIcon className="size-3.5" />
                  ) : (
                    <CopyIcon className="size-3.5" />
                  )}{" "}
                  {copied ? "Kopye!" : "Kopye"}
                </button>
              </div>
              <p className="text-night-muted mt-2 text-[12.5px]">
                {lesson.aiHelperCopy}
              </p>
            </div>

            <div>
              <SectionLabel>Misyon</SectionLabel>
              <div className="rounded-2xl border-l-4 border-[#E07A3F] bg-[#FBEAE0] px-4.5 py-4">
                <p className="mb-3 text-[14.5px] text-[var(--color-lesson-ink)]">
                  {renderLessonText(lesson.missionTask)}
                </p>
                <label className="flex min-h-6 cursor-pointer items-center gap-2 text-sm font-semibold">
                  <input
                    type="checkbox"
                    checked={missionDone}
                    onChange={(event) => setMissionDone(event.target.checked)}
                    className="accent-lesson-brand size-4.5"
                  />
                  Mwen fè misyon an
                </label>
              </div>
            </div>
          </>
        )}

        {/* STEP 7: RECAP + ACHIEVEMENT */}
        {step === 6 && (
          <>
            <div className="mb-7.5">
              <SectionLabel>Rezime Leson An</SectionLabel>
              <div className="grid grid-cols-2 gap-2.5">
                {lesson.recap.map((item) => (
                  <div
                    key={item.text}
                    className="bg-lesson-brand/[.06] rounded-xl p-3 text-[13px]"
                  >
                    <div className="mb-1 text-lg">{item.emoji}</div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel>Reyalizasyon</SectionLabel>
              <div
                className={cn(
                  "rounded-[20px] px-5.5 py-7.5 text-center",
                  unlocked
                    ? "bg-gradient-to-br from-[var(--color-lesson-brand)] to-[var(--color-lesson-brand-2)] text-white shadow-[0_14px_34px_rgba(109,95,216,.32)]"
                    : "bg-lesson-brand/[.08] text-lesson-brand-2",
                )}
              >
                <div
                  className={cn(
                    "mx-auto mb-3.5 grid size-[70px] -rotate-6 place-items-center rounded-full border-[3px]",
                    unlocked
                      ? "border-white bg-white/15"
                      : "border-lesson-brand/25 bg-transparent",
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
                    ? "Misyon Konplete! 🎉"
                    : "Retounen nan Pratike ak Misyon pou dekloke stanp lan"}
                </h3>
                <p className={cn("text-[13.5px]", unlocked && "opacity-90")}>
                  {unlocked
                    ? nextLesson
                      ? `Stanp ajoute nan Pasaport Aprantisaj ou — ${nextLesson.title} louvri.`
                      : `Stanp ajoute nan Pasaport Aprantisaj ou — ou fini Nivo ${currentLevel?.number ?? 4}!`
                    : "Reponn kesyon pratik la kòrèkteman epi koche misyon an."}
                </p>
                {unlocked && (
                  <Link
                    href={nextCourseHref}
                    className="text-lesson-brand-2 mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold"
                  >
                    <GraduationCapIcon className="size-4" />
                    {isLastLessonInLevel
                      ? nextCourseLabel
                      : `Kontinye ak ${nextLesson?.title}`}
                  </Link>
                )}
              </div>
              {unlocked && (
                <div className="bg-lesson-brand/[.07] mt-4 flex items-center gap-3.5 rounded-2xl px-4.5 py-4 shadow-[0_2px_10px_rgba(109,95,216,.1)]">
                  <LessonMascot />
                  <p className="text-[14px] leading-[1.5] text-[#3a3550]">
                    <b className="text-lesson-brand-2">Bon travay!</b> Ou fèk aprann yon
                    lòt bout Anglè. Kontinye pou vin pi alèz chak jou.
                  </p>
                </div>
              )}
            </div>
          </>
        )}

        {/* STEP NAVIGATION */}
        {step < steps.length - 1 && (
          <div className="border-lesson-line sticky bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-20 -mx-1 mt-8 flex items-center justify-between rounded-full border bg-white/95 p-2 pl-4 shadow-[0_12px_35px_rgba(29,24,46,0.16)] backdrop-blur sm:static sm:mx-0 sm:rounded-none sm:border-x-0 sm:border-b-0 sm:bg-transparent sm:px-0 sm:pt-6 sm:pb-0 sm:shadow-none">
            <button
              type="button"
              onClick={() => moveTo(step - 1)}
              disabled={step === 0}
              className="text-lesson-brand-2 min-h-11 px-2 text-sm font-semibold disabled:pointer-events-none disabled:opacity-0"
            >
              ← Tounen
            </button>
            <button
              type="button"
              onClick={() => moveTo(step + 1)}
              disabled={continueDisabled}
              className={cn(
                "flex min-h-12 min-w-[132px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold",
                continueDisabled
                  ? "bg-lesson-brand/10 text-lesson-ink-dim cursor-not-allowed"
                  : "bg-gradient-to-br from-[var(--color-lesson-brand)] to-[var(--color-lesson-brand-2)] cursor-pointer text-white shadow-[0_6px_18px_rgba(109,95,216,.35)]",
              )}
            >
              Kontinye
              {!continueDisabled && (
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="#fff" strokeWidth="2.4">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              )}
            </button>
          </div>
        )}
        {step === steps.length - 1 && (
          <div className="border-lesson-line sticky bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-20 -mx-1 mt-8 rounded-full border bg-white/95 p-2 pl-4 shadow-[0_12px_35px_rgba(29,24,46,0.16)] backdrop-blur sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
            <button
              type="button"
              onClick={() => moveTo(step - 1)}
              className="text-lesson-brand-2 min-h-11 text-sm font-semibold"
            >
              ← Tounen
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
