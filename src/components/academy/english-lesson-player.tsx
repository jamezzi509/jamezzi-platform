"use client";

import Link from "next/link";
import { useState } from "react";
import { englishProgressStorageKey } from "@/components/academy/english-level-one-lessons";
import {
  englishInteractiveLessons,
  getEnglishInteractiveLesson,
  type EnglishInteractiveLesson,
  type LessonChoice,
} from "@/content/english-lessons";
import { cn } from "@/lib/cn";

const steps = ["Learn", "Listen", "Choose", "Practice", "Mission"] as const;

export function EnglishLessonPlayer({ lessonSlug }: { lessonSlug: string }) {
  const lesson =
    getEnglishInteractiveLesson(lessonSlug) ?? englishInteractiveLessons[0];
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const [complete, setComplete] = useState(false);

  function speak(word: string) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const voice = new SpeechSynthesisUtterance(word);
    voice.lang = "en-US";
    const availableVoices = window.speechSynthesis.getVoices();
    const preferredNames = [
      "Samantha",
      "Ava",
      "Google US English",
      "Aria",
      "Jenny",
    ];
    voice.voice =
      preferredNames
        .map((name) => availableVoices.find((item) => item.name.includes(name)))
        .find(Boolean) ??
      availableVoices.find((item) => item.lang === "en-US") ??
      null;
    voice.rate = 0.88;
    voice.pitch = 1;
    window.speechSynthesis.speak(voice);
  }

  function moveTo(nextStep: number) {
    setAnswer(null);
    setStep(Math.max(0, Math.min(nextStep, steps.length - 1)));
  }

  function finish() {
    try {
      const saved = JSON.parse(
        window.localStorage.getItem(englishProgressStorageKey) ?? "[]",
      ) as string[];
      window.localStorage.setItem(
        englishProgressStorageKey,
        JSON.stringify(Array.from(new Set([...saved, lesson.slug]))),
      );
    } finally {
      setComplete(true);
    }
  }

  return (
    <main className="bg-[#f6f4ef] pt-[72px]">
      <div className="border-border border-y bg-white">
        <div className="mx-auto flex max-w-[1500px] items-center gap-5 px-5 py-4 lg:px-10">
          <Link
            href="/academy/courses/english-for-beginners/level-1"
            className="text-button text-ink shrink-0"
          >
            ← First English
          </Link>
          <div className="bg-border h-2 flex-1 overflow-hidden rounded-full">
            <div
              className="bg-indigo h-full rounded-full transition-[width] duration-300"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
          <span className="text-metadata text-muted shrink-0">
            {step + 1} / {steps.length}
          </span>
        </div>
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-137px)] max-w-[1500px] lg:grid-cols-[240px_1fr]">
        <aside className="border-border hidden border-r bg-white p-8 lg:block">
          <p className="text-eyebrow text-indigo-dark">LESSON 1</p>
          <h1 className="font-display text-ink mt-3 text-3xl leading-tight">
            {lesson.title}
          </h1>
          <ol className="mt-10 space-y-5">
            {steps.map((label, index) => (
              <li
                key={label}
                className={cn(
                  "text-body flex items-center gap-3",
                  index === step ? "text-ink font-bold" : "text-muted",
                )}
              >
                <span
                  className={cn(
                    "grid size-7 place-items-center rounded-full text-sm",
                    index < step && "bg-indigo text-white",
                    index === step && "border-indigo text-indigo-dark border",
                    index > step && "bg-paper",
                  )}
                >
                  {index < step ? "✓" : index + 1}
                </span>
                {label}
              </li>
            ))}
          </ol>
        </aside>

        <section className="flex min-w-0 flex-col px-5 py-8 sm:px-8 lg:px-16 lg:py-12">
          <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center">
            {complete ? (
              <Completion />
            ) : (
              <>
                {step === 0 && <LearnStep lesson={lesson} speak={speak} />}
                {step === 1 && <ListenStep lesson={lesson} speak={speak} />}
                {step === 2 && (
                  <QuestionStep
                    eyebrow="CHOOSE"
                    choice={lesson.choice}
                    answer={answer}
                    setAnswer={setAnswer}
                  />
                )}
                {step === 3 && (
                  <QuestionStep
                    eyebrow="PRACTICE"
                    choice={lesson.practice}
                    answer={answer}
                    setAnswer={setAnswer}
                  />
                )}
                {step === 4 && <MissionStep lesson={lesson} />}

                <div className="border-border mt-10 flex items-center justify-between border-t pt-6">
                  <button
                    type="button"
                    onClick={() => moveTo(step - 1)}
                    disabled={step === 0}
                    className="text-button text-muted min-h-11 disabled:opacity-0"
                  >
                    ← Back
                  </button>
                  {step < steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => moveTo(step + 1)}
                      disabled={
                        (step === 2 || step === 3) && answer !== "correct"
                      }
                      className="bg-indigo text-button min-h-12 rounded-[10px] px-7 text-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={finish}
                      className="bg-indigo text-button min-h-12 rounded-[10px] px-7 text-white"
                    >
                      Complete Lesson
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function StepHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <header className="mb-8">
      <p className="text-eyebrow text-indigo-dark">{eyebrow}</p>
      <h2 className="font-display text-ink mt-3 text-4xl leading-tight sm:text-5xl">
        {title}
      </h2>
      <p className="text-intro text-muted mt-4 max-w-2xl">{copy}</p>
    </header>
  );
}

function LearnStep({
  lesson,
  speak,
}: {
  lesson: EnglishInteractiveLesson;
  speak: (word: string) => void;
}) {
  return (
    <div>
      <StepHeading
        eyebrow="LEARN"
        title={lesson.learnTitle}
        copy={lesson.learnCopy}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {lesson.words.map((item) => (
          <WordCard
            key={item.word}
            emoji={item.emoji}
            moment={item.context}
            word={item.word}
            speak={speak}
          />
        ))}
      </div>
    </div>
  );
}

function WordCard({
  emoji,
  moment,
  word,
  speak,
}: {
  emoji: string;
  moment: string;
  word: string;
  speak: (word: string) => void;
}) {
  return (
    <article className="rounded-showcase border-border border bg-white p-6 shadow-[0_14px_40px_rgba(15,15,15,0.05)] sm:p-8">
      <span className="text-6xl" aria-hidden="true">
        {emoji}
      </span>
      <p className="text-eyebrow text-muted mt-8">{moment}</p>
      <p className="font-display text-ink mt-2 text-5xl">{word}</p>
      <button
        type="button"
        onClick={() => speak(word)}
        className="text-button text-indigo-dark mt-6 min-h-11"
      >
        🔊 Listen
      </button>
    </article>
  );
}

function ListenStep({
  lesson,
  speak,
}: {
  lesson: EnglishInteractiveLesson;
  speak: (word: string) => void;
}) {
  return (
    <div className="text-center">
      <StepHeading
        eyebrow="LISTEN & REPEAT"
        title={lesson.listenWord}
        copy="Listen. Then say the word aloud. You do not need a perfect accent."
      />
      <button
        type="button"
        onClick={() => speak(lesson.listenWord)}
        className="bg-indigo mx-auto grid size-28 place-items-center rounded-full text-4xl text-white shadow-[0_18px_45px_rgba(79,70,229,0.3)]"
        aria-label={`Play ${lesson.listenWord} pronunciation`}
      >
        🔊
      </button>
      <p className="text-body text-muted mt-7">{lesson.phonetic}</p>
    </div>
  );
}

interface AnswerProps {
  answer: string | null;
  setAnswer: (answer: string) => void;
}

function QuestionStep({
  eyebrow,
  choice,
  ...props
}: AnswerProps & { eyebrow: string; choice: LessonChoice }) {
  return (
    <div>
      <StepHeading
        eyebrow={eyebrow}
        title={choice.prompt}
        copy="Choose the word that fits the moment."
      />
      <AnswerButtons
        {...props}
        correct={choice.correct}
        options={choice.options}
      />
    </div>
  );
}

function AnswerButtons({
  answer,
  setAnswer,
  correct,
  options,
}: AnswerProps & { correct: string; options: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setAnswer(option === correct ? "correct" : "wrong")}
          className={cn(
            "rounded-showcase border-border text-card-title text-ink min-h-24 border bg-white px-6 text-left transition",
            answer === "correct" &&
              option === correct &&
              "border-[#29a867] bg-[#eaf8ef]",
            answer === "wrong" &&
              option !== correct &&
              "border-[#dc5b55] bg-[#fff0ef]",
          )}
        >
          {option}
        </button>
      ))}
      {answer && (
        <p
          className={cn(
            "text-body sm:col-span-2",
            answer === "correct" ? "text-[#17643a]" : "text-[#a22f2a]",
          )}
        >
          {answer === "correct"
            ? "Correct! You matched the word to the moment."
            : "Try again. Is the person arriving or leaving?"}
        </p>
      )}
    </div>
  );
}

function MissionStep({ lesson }: { lesson: EnglishInteractiveLesson }) {
  return (
    <div>
      <StepHeading
        eyebrow="REAL-LIFE MISSION"
        title="Use English once today."
        copy={lesson.mission}
      />
      <div className="bg-night rounded-showcase text-night-text p-7 sm:p-10">
        <p className="text-eyebrow text-night-muted">YOU CAN NOW</p>
        <p className="font-display mt-3 text-3xl">{lesson.outcome}</p>
      </div>
    </div>
  );
}

function Completion() {
  return (
    <div className="text-center">
      <div className="mx-auto grid size-24 place-items-center rounded-full bg-[#eaf8ef] text-5xl">
        ✓
      </div>
      <p className="text-eyebrow text-indigo-dark mt-8">LESSON COMPLETE</p>
      <h2 className="font-display text-ink mt-3 text-5xl">
        You used your first English.
      </h2>
      <p className="text-intro text-muted mt-5">
        Your progress was saved on this device.
      </p>
      <Link
        href="/academy/courses/english-for-beginners/level-1"
        className="bg-indigo text-button mt-8 inline-flex min-h-12 items-center rounded-[10px] px-7 text-white"
      >
        Return to Level 1 →
      </Link>
    </div>
  );
}
