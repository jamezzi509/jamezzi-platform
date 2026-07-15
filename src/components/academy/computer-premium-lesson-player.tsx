"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { computerProgressStorageKey } from "@/components/academy/computer-essentials-lesson-list";
import {
  CheckIcon,
  CopyIcon,
  GraduationCapIcon,
  SparklesIcon,
  StampIcon,
} from "@/components/ui/icons";
import { computerEssentialsLessons } from "@/content/computer-essentials-lessons";
import type {
  ComputerPlatform,
  ComputerPremiumLesson,
} from "@/content/computer-lessons-premium";
import { cn } from "@/lib/cn";

const platformLabels: Record<ComputerPlatform, string> = {
  windows: "🖥 Windows",
  mac: "🍎 Mac",
  android: "📱 Android",
  iphone: "📱 iPhone",
};

function renderLessonText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-lesson-mono text-indigo-dark/70 mb-2.5 text-[11px] tracking-[0.12em] uppercase">
      {children}
    </div>
  );
}

export function ComputerPremiumLessonPlayer({
  lesson,
}: {
  lesson: ComputerPremiumLesson;
}) {
  const hasPlatformExamples =
    !!lesson.platformExamples && lesson.platformExamples.length > 0;

  const steps = [
    { key: "learn", label: "Aprann" },
    { key: "words", label: "Mo Kle" },
    ...(hasPlatformExamples
      ? [{ key: "platform", label: "Platfòm" } as const]
      : []),
    { key: "attention", label: "Atansyon" },
    { key: "ai-mission", label: "AI ak Misyon" },
    { key: "quiz", label: "Quiz" },
    { key: "complete", label: "Fini" },
  ] as const;

  const [step, setStep] = useState(0);
  const [quizSelected, setQuizSelected] = useState<number | null>(null);
  const [quizChecked, setQuizChecked] = useState(false);
  const [missionDone, setMissionDone] = useState(false);
  const [copied, setCopied] = useState(false);

  const lessonIndex = computerEssentialsLessons.findIndex(
    (item) => item.slug === lesson.slug,
  );
  const totalLessons = computerEssentialsLessons.length;
  const currentModuleNumber =
    computerEssentialsLessons[lessonIndex]?.moduleNumber ?? 1;
  const moduleLessons = computerEssentialsLessons.filter(
    (item) => item.moduleNumber === currentModuleNumber,
  );
  const moduleLessonIndex = moduleLessons.findIndex(
    (item) => item.slug === lesson.slug,
  );
  const moduleProgressPercent = Math.round(
    ((moduleLessonIndex + 1) / moduleLessons.length) * 100,
  );
  const prevLesson =
    lessonIndex > 0 ? computerEssentialsLessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex >= 0 && lessonIndex < totalLessons - 1
      ? computerEssentialsLessons[lessonIndex + 1]
      : null;

  const quizCorrect = quizSelected === lesson.quiz.correctIndex;
  const unlocked = quizChecked && quizCorrect && missionDone;

  useEffect(() => {
    if (!unlocked) return;
    try {
      const saved = JSON.parse(
        window.localStorage.getItem(computerProgressStorageKey) ?? "[]",
      ) as string[];
      window.localStorage.setItem(
        computerProgressStorageKey,
        JSON.stringify(Array.from(new Set([...saved, lesson.slug]))),
      );
    } catch {
      // Progress remains ephemeral if storage is blocked.
    }
  }, [unlocked, lesson.slug]);

  function copyPrompt() {
    navigator.clipboard?.writeText(lesson.aiPrompt).catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  function moveTo(nextStep: number) {
    setStep(Math.max(0, Math.min(nextStep, steps.length - 1)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const quizStepIndex = steps.findIndex((item) => item.key === "quiz");
  const quizStepBlocked =
    step === quizStepIndex && !(quizChecked && quizCorrect);
  const continueDisabled = quizStepBlocked;

  const currentKey = steps[step].key;

  return (
    <main className="bg-white pt-[72px]">
      <div className="mx-auto max-w-[620px] px-5 pt-5 pb-16">
        {/* COURSE NAVIGATION */}
        <div className="border-border sticky top-[72px] z-10 mb-6 border-b bg-white/95 pt-2.5 pb-3 backdrop-blur-sm">
          <p className="text-muted mb-2 text-[12.5px]">
            Computer &amp; Internet Essentials{" "}
            <span className="text-indigo-dark">·</span> {lesson.moduleTitle}{" "}
            <span className="text-indigo-dark">·</span> Leson{" "}
            {moduleLessonIndex + 1}
          </p>
          <div className="mb-2 flex items-center gap-2.5">
            <div className="bg-indigo-light h-1.5 flex-1 overflow-hidden rounded-full">
              <div
                className="bg-indigo h-full rounded-full"
                style={{ width: `${moduleProgressPercent}%` }}
              />
            </div>
            <span className="text-muted shrink-0 text-[11.5px] whitespace-nowrap">
              Modil {currentModuleNumber} · {moduleProgressPercent}%
            </span>
          </div>
          <div className="flex items-center justify-between text-[12.5px]">
            {prevLesson ? (
              <Link
                href={`/academy/courses/computer-internet-essentials/lessons/${prevLesson.slug}`}
                className="text-indigo-dark inline-flex items-center gap-1 font-semibold"
              >
                ← {prevLesson.title}
              </Link>
            ) : (
              <span className="text-border">← Premye leson</span>
            )}
            {nextLesson ? (
              <Link
                href={`/academy/courses/computer-internet-essentials/lessons/${nextLesson.slug}`}
                className="text-indigo-dark inline-flex items-center gap-1 font-semibold"
              >
                {nextLesson.title} →
              </Link>
            ) : (
              <Link
                href="/academy/courses/computer-internet-essentials/lessons"
                className="text-indigo-dark inline-flex items-center gap-1 font-semibold"
              >
                Tout Leson →
              </Link>
            )}
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
          <p className="font-lesson-mono text-indigo-dark/70 text-[11px] tracking-[0.1em] uppercase">
            Etap {step + 1} sou {steps.length} · {steps[step].label}
          </p>
        </div>

        {/* STEP: LEARN — Goal, Simple Explanation, How It Works, Illustration */}
        {currentKey === "learn" && (
          <>
            <div className="mb-7">
              <div className="relative mb-4.5 h-[220px] w-full overflow-hidden rounded-[18px]">
                <Image
                  src={lesson.illustrationSrc}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 620px"
                  className="object-cover"
                />
              </div>
              <h1 className="font-fraunces text-indigo mb-1.5 text-[30px] leading-[1.15] font-semibold italic">
                {lesson.heroTitle}
              </h1>
              <p className="text-muted mb-2.5 text-[15.5px] leading-[1.55]">
                {lesson.heroLede}
              </p>
              <div className="bg-indigo-light text-ink rounded-[10px] px-3.5 py-3 text-sm">
                {lesson.goal}
              </div>
            </div>

            <div className="mb-7.5">
              <SectionLabel>🧠 Eksplikasyon Senp</SectionLabel>
              <p className="text-muted text-[14.5px] leading-[1.6]">
                {renderLessonText(lesson.simpleExplanation)}
              </p>
            </div>

            {lesson.howItWorks && (
              <div>
                <SectionLabel>💡 Kijan Sa Mache</SectionLabel>
                <div className="grid gap-2">
                  {lesson.howItWorks.map((step_, index) => (
                    <div
                      key={step_}
                      className="border-border flex items-center gap-3 rounded-xl border bg-[#FCFCFE] px-3.5 py-3"
                    >
                      <span className="bg-indigo flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="text-[14px]">{step_}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* STEP: DIGITAL WORDS */}
        {currentKey === "words" && (
          <div>
            <SectionLabel>🧠 Mo Dijital Yo</SectionLabel>
            <div className="grid gap-2.5">
              {lesson.digitalWords.map((item, index) => (
                <div
                  key={item.word}
                  className={cn(
                    "rounded-xl px-4 py-3.5",
                    index % 2 === 0 ? "bg-indigo-light" : "bg-indigo/10",
                  )}
                >
                  <div className="mb-1 text-[16.5px] font-bold">
                    {item.word}
                  </div>
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
        )}

        {/* STEP: PLATFORM EXAMPLES (conditional) */}
        {currentKey === "platform" && lesson.platformExamples && (
          <div>
            <SectionLabel>Egzanp Pa Platfòm</SectionLabel>
            <div className="grid gap-2.5">
              {lesson.platformExamples.map((example) => (
                <div
                  key={example.platform}
                  className="border-border rounded-xl border bg-[#FCFCFE] px-4 py-3.5"
                >
                  <div className="text-indigo-dark mb-1.5 text-[14px] font-bold">
                    {platformLabels[example.platform]}
                  </div>
                  <p className="text-muted text-[13.5px] leading-[1.55]">
                    {example.steps}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP: ATTENTION — Real-life example + Common mistake */}
        {currentKey === "attention" && (
          <>
            <div className="mb-7.5">
              <SectionLabel>Egzanp Nan Lavi Reyèl</SectionLabel>
              <p className="text-muted text-[14.5px] leading-[1.6]">
                {renderLessonText(lesson.realLifeExample)}
              </p>
            </div>

            <div>
              <SectionLabel>⚠️ Erè Komen</SectionLabel>
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
            </div>
          </>
        )}

        {/* STEP: AI EXPLANATION + MISSION */}
        {currentKey === "ai-mission" && (
          <>
            <div className="mb-7.5">
              <SectionLabel>🤖 Eksplikasyon AI</SectionLabel>
              <p className="text-muted mb-3.5 text-[14.5px] leading-[1.6]">
                {renderLessonText(lesson.aiExplanation)}
              </p>
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
            </div>

            <div>
              <SectionLabel>🎯 Misyon Nan Lavi Reyèl</SectionLabel>
              <div className="rounded-[10px] border-l-4 border-[#E07A3F] bg-[#FBEAE0] px-4.5 py-4">
                <p className="text-ink mb-3 text-[14.5px]">
                  {renderLessonText(lesson.mission)}
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

        {/* STEP: QUIZ */}
        {currentKey === "quiz" && (
          <div>
            <SectionLabel>✅ Quiz</SectionLabel>
            <p className="mb-3 text-[14.5px] font-semibold">
              {lesson.quiz.prompt}
            </p>
            <div className="mb-2.5 grid gap-2.5">
              {lesson.quiz.options.map((option, index) => {
                const isSelected = quizSelected === index;
                const showState = quizChecked && isSelected;
                const isCorrectOption = index === lesson.quiz.correctIndex;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setQuizSelected(index);
                      setQuizChecked(false);
                    }}
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
              disabled={quizSelected === null}
              onClick={() => setQuizChecked(true)}
              className={cn(
                "min-h-11 rounded-full px-5 py-2.5 text-sm font-semibold",
                quizSelected === null
                  ? "bg-indigo-light text-muted cursor-not-allowed"
                  : "bg-indigo-dark cursor-pointer text-white",
              )}
            >
              Verifye Repons lan
            </button>
            {quizChecked && (
              <p
                className={cn(
                  "mt-2.5 text-[13.5px]",
                  quizCorrect ? "text-success" : "text-error",
                )}
              >
                {quizCorrect
                  ? lesson.quiz.correctFeedback
                  : lesson.quiz.wrongFeedback}
              </p>
            )}
          </div>
        )}

        {/* STEP: COMPLETE — Recap + Progress */}
        {currentKey === "complete" && (
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
                    ? "Misyon Konplete! 🎉"
                    : "Reponn quiz la kòrèkteman epi koche misyon an pou dekloke stanp lan"}
                </h3>
                <p className={cn("text-[13.5px]", unlocked && "opacity-90")}>
                  {unlocked
                    ? nextLesson
                      ? `Stanp ajoute nan Pasaport Aprantisaj ou — ${nextLesson.title} louvri.`
                      : "Stanp ajoute nan Pasaport Aprantisaj ou — ou fini Modil 1!"
                    : "Reponn kesyon quiz la kòrèkteman epi koche misyon an."}
                </p>
                {unlocked && (
                  <Link
                    href={
                      nextLesson
                        ? `/academy/courses/computer-internet-essentials/lessons/${nextLesson.slug}`
                        : "/academy/courses/computer-internet-essentials/lessons"
                    }
                    className="text-indigo-dark mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold"
                  >
                    <GraduationCapIcon className="size-4" />
                    {nextLesson
                      ? `Kontinye ak ${nextLesson.title}`
                      : "Retounen nan Tout Leson"}
                  </Link>
                )}
              </div>
            </div>
          </>
        )}

        {/* STEP NAVIGATION */}
        {step < steps.length - 1 && (
          <div className="border-border mt-8 flex items-center justify-between border-t pt-6">
            <button
              type="button"
              onClick={() => moveTo(step - 1)}
              disabled={step === 0}
              className="text-indigo-dark min-h-11 text-sm font-semibold disabled:opacity-0"
            >
              ← Tounen
            </button>
            <button
              type="button"
              onClick={() => moveTo(step + 1)}
              disabled={continueDisabled}
              className={cn(
                "min-h-12 rounded-full px-7 text-sm font-semibold",
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
          <div className="mt-8">
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
