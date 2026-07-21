"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { englishProgressStorageKey } from "@/components/academy/english-level-one-lessons";
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
        className="text-indigo-dark inline-flex min-h-9 items-center gap-1 rounded-full bg-white px-2.5 py-1.5 text-xs font-semibold"
        aria-label={`Koute pwononsyasyon pou ${text}`}
      >
        <VolumeIcon className="size-3.5" /> Jwe
      </button>
      <button
        type="button"
        onClick={() => playEnglishAudio(text, true)}
        className="border-border text-muted inline-flex min-h-9 items-center rounded-full border bg-white px-2.5 py-1.5 text-[11px] font-semibold"
        aria-label={`Koute ${text} pi dousman`}
      >
        0.7×
      </button>
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-lesson-mono text-indigo-dark/70 mb-2.5 text-[11px] tracking-[0.12em] uppercase">
      {children}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-indigo-light text-indigo-dark inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12.5px] font-semibold">
      {children}
    </span>
  );
}

function WelcomeIllustration() {
  return (
    <svg
      viewBox="0 0 240 160"
      className="block h-[140px] w-full"
      aria-hidden="true"
    >
      <rect width="240" height="160" rx="18" className="fill-indigo-light" />
      <circle cx="120" cy="66" r="34" className="fill-indigo" />
      <circle cx="108" cy="60" r="4" className="fill-white" />
      <circle cx="132" cy="60" r="4" className="fill-white" />
      <path
        d="M104 76 Q120 88 136 76"
        stroke="white"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M150 44 Q168 30 178 44"
        className="stroke-indigo-dark"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <rect
        x="30"
        y="118"
        width="60"
        height="14"
        rx="7"
        className="fill-indigo"
        opacity="0.35"
      />
      <rect
        x="150"
        y="118"
        width="60"
        height="14"
        rx="7"
        className="fill-indigo-dark"
        opacity="0.3"
      />
    </svg>
  );
}

function AlphabetIllustration() {
  const blocks = [
    { letter: "A", offsetY: 50 },
    { letter: "B", offsetY: 40 },
    { letter: "C", offsetY: 50 },
  ];
  return (
    <svg
      viewBox="0 0 240 160"
      className="block h-[140px] w-full"
      aria-hidden="true"
    >
      <rect width="240" height="160" rx="18" className="fill-indigo-light" />
      {blocks.map((block, index) => (
        <g
          key={block.letter}
          transform={`translate(${58 + index * 54}, ${block.offsetY})`}
        >
          <rect
            width="44"
            height="44"
            rx="8"
            className={index === 1 ? "fill-indigo-dark" : "fill-indigo"}
          />
          <text
            x="22"
            y="30"
            textAnchor="middle"
            fontWeight="700"
            fontSize="22"
            className="fill-white font-sans"
          >
            {block.letter}
          </text>
        </g>
      ))}
      <rect
        x="30"
        y="122"
        width="60"
        height="12"
        rx="6"
        className="fill-indigo-dark"
        opacity="0.3"
      />
      <rect
        x="150"
        y="122"
        width="60"
        height="12"
        rx="6"
        className="fill-indigo"
        opacity="0.25"
      />
    </svg>
  );
}

function EmojiIllustration({ emoji }: { emoji: string }) {
  return (
    <div
      className="bg-indigo-light grid h-[140px] w-full place-items-center rounded-[18px] text-6xl"
      aria-hidden="true"
    >
      {emoji}
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
  const Illustration =
    lesson.illustrationKey === "welcome"
      ? WelcomeIllustration
      : lesson.illustrationKey === "alphabet"
        ? AlphabetIllustration
        : null;

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
    <main className="bg-white pt-[72px]">
      <div className="mx-auto max-w-[620px] px-4 pt-3 pb-28 sm:px-5 sm:pt-5 sm:pb-16">
        {/* COURSE NAVIGATION */}
        <div className="border-border sticky top-[72px] z-20 -mx-1 mb-5 border-b bg-white/95 px-1 pt-2.5 pb-3 backdrop-blur-sm sm:mb-6">
          <p
            className="text-muted mb-2 truncate text-[12px] sm:text-[12.5px]"
            title={`Nivo ${currentLevel?.number} · Modil ${currentModuleNumber}: ${lesson.moduleTitle}`}
          >
            Nivo {currentLevel?.number} · Modil {currentModuleNumber}:{" "}
            {lesson.moduleTitle} · Leson {moduleLessonIndex + 1} sou{" "}
            {moduleLessons.length}
          </p>
          <div className="mb-2 flex items-center gap-2.5">
            <div
              className="bg-indigo-light h-1.5 flex-1 overflow-hidden rounded-full"
              role="progressbar"
              aria-label={`Pwogrè Modil ${currentModuleNumber}`}
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
              Modil {currentModuleNumber} · {moduleProgressPercent}%
            </span>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-[12px] sm:gap-3 sm:text-[12.5px]">
            {prevLesson ? (
              <Link
                href={`/academy/courses/english-for-beginners/lessons/${prevLesson.slug}`}
                className="text-indigo-dark min-w-0 truncate font-semibold"
                title={prevLesson.title}
              >
                ← <span className="sm:hidden">Anvan</span>
                <span className="hidden sm:inline">{prevLesson.title}</span>
              </Link>
            ) : (
              <span className="text-border">← Premye leson</span>
            )}
            <Link
              href="/academy/courses/english-for-beginners/learn"
              className="text-muted hover:text-indigo-dark font-semibold"
            >
              <span className="sm:hidden">Plan</span>
              <span className="hidden sm:inline">Tout leson</span>
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

        {/* LESSON STEP PROGRESS */}
        <div className="mb-7">
          <div className="mb-2 flex gap-1.5">
            {steps.map((item, index) => (
              <div
                key={item.key}
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
            Etap {step + 1} sou {steps.length} · {steps[step].label}
          </p>
          {progressSaved && (
            <p className="text-metadata text-indigo-dark mt-2" role="status">
              ✓ Pwogrè leson sa a anrejistre sou aparèy sa a.
            </p>
          )}
        </div>

        {/* STEP 1: LEARN — Hero, Before You Start, Understand, See It In Action */}
        {step === 0 && (
          <>
            <div className="mb-7">
              {Illustration ? (
                <Illustration />
              ) : (
                <EmojiIllustration emoji={lesson.heroEmoji ?? "🇬🇧"} />
              )}
              <h1 className="font-fraunces text-indigo mt-4.5 mb-1.5 text-[30px] leading-[1.15] font-semibold italic">
                {lesson.heroTitle}
              </h1>
              <p className="text-muted mb-2.5 text-[15.5px] leading-[1.55]">
                {lesson.heroLede}
              </p>
              <div className="bg-indigo-light text-ink rounded-[10px] px-3.5 py-3 text-sm">
                {lesson.heroGoal}
              </div>
            </div>

            <div className="mb-7.5">
              <SectionLabel>Anvan Ou Kòmanse</SectionLabel>
              <div className="mb-3 grid gap-2.5">
                <div className="bg-indigo-light rounded-[10px] px-3.5 py-2.5 text-sm">
                  <b>Sa ou pral aprann:</b> {lesson.whatYouWillLearn}
                </div>
                <div className="bg-indigo/10 rounded-[10px] px-3.5 py-2.5 text-sm">
                  <b>Prerekizi:</b> {lesson.prerequisite}
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
              <h2 className="font-fraunces text-ink mb-2.5 text-[21px] leading-snug font-medium">
                {lesson.understandHeading}
              </h2>
              <p className="text-muted text-[14.5px] leading-[1.6]">
                {renderLessonText(lesson.understandBody)}
              </p>
            </div>

            <div>
              <SectionLabel>Wè Sa An Aksyon</SectionLabel>
              <div className="grid gap-2.5">
                {lesson.seeItInAction.map((example) => (
                  <div
                    key={example.line}
                    className="border-border flex items-center gap-2.5 rounded-xl border bg-[#FCFCFE] px-3.5 py-3"
                  >
                    <span className="text-lg" aria-hidden="true">
                      {example.emoji}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col items-start justify-between gap-3 text-[15px] font-semibold sm:flex-row sm:items-center">
                        <span>{example.line}</span>
                        <AudioControls text={example.line} />
                      </div>
                      <div className="text-indigo-dark/70 text-xs">
                        {example.tag}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* STEP 2: PATTERN BUILDER */}
        {step === 1 && (
          <div>
            <SectionLabel>⭐ Pattern Builder</SectionLabel>
            <p className="text-muted mb-3 text-sm">
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
                      ? "border-indigo bg-indigo-light border-2"
                      : "border-border border bg-[#FCFCFE]",
                  )}
                >
                  {option.chipLabel}
                </button>
              ))}
            </div>
            <div className="bg-indigo rounded-2xl px-5 py-5.5 text-center">
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
                      "rounded-xl px-4 py-3.5",
                      index % 2 === 0 ? "bg-indigo-light" : "bg-indigo/10",
                    )}
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[16.5px] font-bold">
                        {item.word}
                      </span>
                      <AudioControls text={item.word} />
                    </div>
                    <div className="text-muted mb-1 text-[13px]">
                      {item.ipa} · Kreyòl: <strong>{item.kreyol}</strong>
                    </div>
                    <div className="text-ink text-[13.5px] italic">
                      &ldquo;{item.example}&rdquo;
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel>Pwononsyasyon</SectionLabel>
              <div className="border-border rounded-xl border bg-[#FCFCFE] px-4.5 py-4">
                <div className="mb-2 flex items-center gap-2.5">
                  <span className="text-xl font-bold">
                    {lesson.pronunciationWord}
                  </span>
                  <span className="font-lesson-mono text-indigo-dark/70 text-[13px]">
                    {lesson.pronunciationIpa}
                  </span>
                  <AudioControls text={lesson.pronunciationWord} />
                </div>
                <p className="text-muted mb-1.5 text-[13.5px]">
                  💡 {renderLessonText(lesson.mouthTip)}
                </p>
                <p className="text-muted text-[13.5px]">
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
              <div className="bg-error/10 flex-1 rounded-[10px] px-3.5 py-2.5">
                <span className="text-error text-sm font-bold">
                  ❌ {lesson.mistakeWrong}
                </span>
              </div>
              <div className="bg-success/10 flex-1 rounded-[10px] px-3.5 py-2.5">
                <span className="text-success text-sm font-bold">
                  ✅ {lesson.mistakeCorrect}
                </span>
              </div>
            </div>
            <p className="text-muted text-[13.5px]">
              {renderLessonText(lesson.mistakeWhy)}
            </p>
            {lesson.mistakeExtraNote && (
              <div className="bg-error/10 mt-3.5 rounded-[10px] px-3.5 py-3">
                <p className="text-ink text-[13.5px]">
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
              <p className="mb-3 text-[14.5px] font-semibold">
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
              <button
                type="button"
                disabled={practiceSelected === null}
                onClick={() => setPracticeChecked(true)}
                className={cn(
                  "min-h-11 rounded-full px-5 py-2.5 text-sm font-semibold",
                  practiceSelected === null
                    ? "bg-indigo-light text-muted cursor-not-allowed"
                    : "bg-indigo-dark cursor-pointer text-white",
                )}
              >
                Verifye Repons lan
              </button>
              {practiceChecked && (
                <p
                  role={practiceCorrect ? "status" : "alert"}
                  className={cn(
                    "mt-2.5 text-[13.5px]",
                    practiceCorrect ? "text-success" : "text-error",
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
              <div className="bg-indigo-light mb-3 rounded-2xl py-6.5 text-center text-4xl">
                {lesson.thinkEmoji}
              </div>
              <p className="text-muted mb-2.5 text-sm">{lesson.thinkPrompt}</p>
              <textarea
                value={thinkText}
                onChange={(event) => setThinkText(event.target.value)}
                placeholder={lesson.thinkPlaceholder}
                aria-label="Ekri repons ou an Anglè"
                className="border-border min-h-16 w-full rounded-[10px] border p-3 text-[14.5px]"
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
              <p className="text-night-muted mt-2 text-[12.5px]">
                {lesson.aiHelperCopy}
              </p>
            </div>

            <div>
              <SectionLabel>Misyon</SectionLabel>
              <div className="rounded-[10px] border-l-4 border-[#E07A3F] bg-[#FBEAE0] px-4.5 py-4">
                <p className="text-ink mb-3 text-[14.5px]">
                  {renderLessonText(lesson.missionTask)}
                </p>
                <label className="flex min-h-6 cursor-pointer items-center gap-2 text-sm font-semibold">
                  <input
                    type="checkbox"
                    checked={missionDone}
                    onChange={(event) => setMissionDone(event.target.checked)}
                    className="accent-indigo size-4.5"
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
                    className="bg-paper rounded-[10px] p-3 text-[13px]"
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
                    className="text-indigo-dark mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold"
                  >
                    <GraduationCapIcon className="size-4" />
                    {isLastLessonInLevel
                      ? nextCourseLabel
                      : `Kontinye ak ${nextLesson?.title}`}
                  </Link>
                )}
              </div>
            </div>
          </>
        )}

        {/* STEP NAVIGATION */}
        {step < steps.length - 1 && (
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
        {step === steps.length - 1 && (
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
