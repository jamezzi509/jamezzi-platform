"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  GraduationCapIcon,
  RotateCcwIcon,
  SparklesIcon,
  StampIcon,
} from "@/components/ui/icons";
import { englishLevels, englishModules } from "@/content/english-course";
import {
  computeFinalExamResult,
  EXAM_PASS_THRESHOLD,
  finalExamQuestions,
  type FinalExamResult,
} from "@/content/english-final-exam";
import { englishLevelOneLessons } from "@/content/english-level-one";
import { englishProgressStorageKey } from "@/components/academy/english-level-one-lessons";
import { cn } from "@/lib/cn";

type Screen = "locked" | "intro" | "quiz" | "fail" | "capstone" | "certificate";

const examStorageKey = "jamezzi:english:first-english:exam";

interface ExamState {
  passed: boolean;
  lastScore: number;
  attempts: number;
  missedModules: number[];
  capstoneText: string;
  capstoneSubmittedAt: string | null;
  studentName: string;
}

const emptyExamState: ExamState = {
  passed: false,
  lastScore: 0,
  attempts: 0,
  missedModules: [],
  capstoneText: "",
  capstoneSubmittedAt: null,
  studentName: "",
};

const totalLessons = englishLevelOneLessons.length;

export function EnglishFinalExam() {
  const [screen, setScreen] = useState<Screen>("locked");
  const [completedCount, setCompletedCount] = useState<number | null>(null);
  const [firstUnpassedLevel, setFirstUnpassedLevel] = useState<number | null>(
    null,
  );
  const [examState, setExamState] = useState<ExamState>(emptyExamState);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [lastResult, setLastResult] = useState<FinalExamResult | null>(null);
  const [capstoneDraft, setCapstoneDraft] = useState("");
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    let completed: string[] = [];
    let savedExam = emptyExamState;
    let unpassedLevel: number | null = null;
    try {
      const savedProgress = window.localStorage.getItem(
        englishProgressStorageKey,
      );
      if (savedProgress) completed = JSON.parse(savedProgress) as string[];
      const savedExamRaw = window.localStorage.getItem(examStorageKey);
      if (savedExamRaw)
        savedExam = { ...emptyExamState, ...JSON.parse(savedExamRaw) };
      unpassedLevel =
        englishLevels.find((level) => {
          const raw = window.localStorage.getItem(
            `jamezzi:english:level-${level.number}:checkpoint`,
          );
          if (!raw) return true;
          const result = JSON.parse(raw) as { passed?: boolean };
          return !result.passed;
        })?.number ?? null;
    } catch {
      // Progress and exam state remain empty if storage is blocked.
    }

    const count = completed.filter((slug) =>
      englishLevelOneLessons.some((lesson) => lesson.slug === slug),
    ).length;

    const timer = window.setTimeout(() => {
      setCompletedCount(count);
      setFirstUnpassedLevel(unpassedLevel);
      setExamState(savedExam);
      setCapstoneDraft(savedExam.capstoneText);
      setStudentName(savedExam.studentName);
      if (!savedExam.passed && (count < totalLessons || unpassedLevel)) {
        setScreen("locked");
      } else if (!savedExam.passed) {
        setScreen("intro");
      } else if (!savedExam.capstoneSubmittedAt) {
        setScreen("capstone");
      } else {
        setScreen("certificate");
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function saveExamState(next: ExamState) {
    setExamState(next);
    try {
      window.localStorage.setItem(examStorageKey, JSON.stringify(next));
    } catch {
      // Non-fatal if storage is blocked; state still lives in memory.
    }
  }

  function startExam() {
    setIndex(0);
    setAnswers({});
    setSelected(null);
    setScreen("quiz");
  }

  function next() {
    const question = finalExamQuestions[index];
    const updated = { ...answers, [question.id]: selected as number };
    setAnswers(updated);
    setSelected(null);

    if (index + 1 < finalExamQuestions.length) {
      setIndex(index + 1);
      return;
    }

    const result = computeFinalExamResult(updated);
    setLastResult(result);
    saveExamState({
      ...examState,
      passed: result.passed || examState.passed,
      lastScore: result.score,
      attempts: examState.attempts + 1,
      missedModules: result.missedModules,
    });
    setScreen(result.passed ? "capstone" : "fail");
  }

  function submitCapstone() {
    saveExamState({
      ...examState,
      passed: true,
      capstoneText: capstoneDraft,
      capstoneSubmittedAt: new Date().toISOString(),
    });
    setScreen("certificate");
  }

  function retakeExam() {
    saveExamState({ ...emptyExamState });
    setCapstoneDraft("");
    startExam();
  }

  const question = finalExamQuestions[index];
  const total = finalExamQuestions.length;

  return (
    <main className="bg-white pt-[72px]">
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-[640px] items-center justify-center px-5 py-10">
        <div className="border-border w-full overflow-hidden rounded-[18px] border shadow-[0_24px_60px_rgba(79,70,229,0.14)]">
          <div className="bg-indigo flex items-center justify-between px-6 py-4.5 text-white">
            <div className="flex items-center gap-2.5">
              <StampIcon className="size-4.5" />
              <span className="font-lesson-mono text-xs tracking-[0.14em] uppercase">
                Pasaport Aprantisaj
              </span>
            </div>
            <span className="font-lesson-mono text-[11px] tracking-[0.08em] opacity-85">
              JAMEZZI
            </span>
          </div>

          <div className="px-5 pt-6 pb-7 sm:px-7 sm:pt-7.5 sm:pb-8">
            {screen === "locked" && (
              <div>
                <h1 className="text-ink mb-1.5 text-[26px] leading-tight font-bold">
                  Egzamen{" "}
                  <span className="font-fraunces text-indigo font-semibold italic">
                    Final
                  </span>
                </h1>
                <p className="text-muted mb-6 text-[15px] leading-[1.55]">
                  Fini tout leson yo epi pase kat evalyasyon nivo yo anvan ou fè
                  egzamen final la. Sa asire w gen tout sa ou bezwen pou reyisi.
                </p>
                <div className="mb-6.5">
                  <p className="text-metadata text-muted mb-2">
                    {completedCount ?? 0} nan {totalLessons} leson fini
                  </p>
                  <div className="bg-border h-1.5 w-full overflow-hidden rounded-full">
                    <div
                      className="bg-indigo h-full rounded-full transition-[width]"
                      style={{
                        width: `${((completedCount ?? 0) / totalLessons) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <Link
                  href={
                    (completedCount ?? 0) < totalLessons
                      ? "/academy/courses/english-for-beginners/learn"
                      : `/academy/courses/english-for-beginners/checkpoint/${firstUnpassedLevel ?? 1}`
                  }
                  className="bg-indigo flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-[15.5px] font-semibold text-white shadow-[0_10px_24px_rgba(79,70,229,0.32)]"
                >
                  {(completedCount ?? 0) < totalLessons
                    ? "Kontinye Leson yo"
                    : `Pase Evalyasyon Nivo ${firstUnpassedLevel ?? 1}`}{" "}
                  <ArrowRightIcon className="size-4.5" />
                </Link>
              </div>
            )}

            {screen === "intro" && (
              <div>
                <h1 className="text-ink mb-1.5 text-[28px] leading-tight font-bold">
                  Egzamen{" "}
                  <span className="font-fraunces text-indigo font-semibold italic">
                    Final
                  </span>
                </h1>
                <p className="text-muted mb-5.5 text-[15px] leading-[1.55]">
                  Ou fini tout 18 modil yo — bèl travay! Kounye a, reponn{" "}
                  {total} kesyon ki kouvri tout sa ou aprann. Ou bezwen{" "}
                  {Math.round(EXAM_PASS_THRESHOLD * 100)}% pou reyisi.
                </p>
                <div className="mb-6.5 grid gap-2.5">
                  <InfoRow text={`${total} kesyon, chwazi youn sèl repons`} />
                  <InfoRow text="Pa gen okenn tan limite -- reponn trankil" />
                  <InfoRow text="Si ou pa reyisi, n ap montre w ki modil pou revize" />
                </div>
                {examState.attempts > 0 && !examState.passed && (
                  <p className="text-muted mb-5 text-[13.5px]">
                    Dènye eseye ou: {Math.round(examState.lastScore * 100)}%.
                  </p>
                )}
                <button
                  type="button"
                  onClick={startExam}
                  className="bg-indigo flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-[15.5px] font-semibold text-white shadow-[0_10px_24px_rgba(79,70,229,0.32)]"
                >
                  Kòmanse Egzamen an <ArrowRightIcon className="size-4.5" />
                </button>
              </div>
            )}

            {screen === "quiz" && question && (
              <div>
                <div className="mb-5.5">
                  <div className="font-lesson-mono text-indigo-dark/70 mb-2 text-[11.5px] tracking-[0.1em] uppercase">
                    Kesyon {index + 1} sou {total}
                  </div>
                  <div className="bg-border h-1.5 w-full overflow-hidden rounded-full">
                    <div
                      className="bg-indigo h-full rounded-full transition-[width]"
                      style={{ width: `${((index + 1) / total) * 100}%` }}
                    />
                  </div>
                </div>

                <h2 className="font-fraunces text-ink mb-5.5 text-[21px] leading-[1.35] font-medium">
                  {question.prompt}
                </h2>

                <div className="mb-6 grid gap-2.5">
                  {question.options.map((option, i) => {
                    const isSelected = selected === i;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelected(i)}
                        className={cn(
                          "min-h-11 rounded-[10px] px-4 py-3.5 text-left text-[15px]",
                          isSelected
                            ? "border-indigo bg-indigo-light border-2 font-semibold"
                            : "border-border border bg-[#FCFCFE] font-medium",
                        )}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={next}
                  disabled={selected === null}
                  className={cn(
                    "flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-[15px] font-semibold",
                    selected === null
                      ? "bg-indigo-light text-muted cursor-not-allowed"
                      : "bg-indigo-dark cursor-pointer text-white",
                  )}
                >
                  {index + 1 < total ? "Kesyon Swivan" : "Wè Rezilta w"}{" "}
                  <ArrowRightIcon className="size-4" />
                </button>
              </div>
            )}

            {screen === "fail" && lastResult && (
              <div>
                <p className="font-lesson-mono text-indigo-dark/70 mb-1.5 text-[11.5px] tracking-[0.1em] uppercase">
                  Rezilta ou
                </p>
                <h2 className="text-ink mb-3 text-2xl font-bold">
                  {Math.round(lastResult.score * 100)}%
                </h2>
                <p className="text-muted mb-6 text-[14.5px] leading-[1.6]">
                  Ou bezwen {Math.round(EXAM_PASS_THRESHOLD * 100)}% pou reyisi.
                  Revize modil sa yo epi eseye ankò:
                </p>
                <div className="mb-6.5 grid gap-2">
                  {lastResult.missedModules.map((moduleNumber) => {
                    const moduleInfo = englishModules.find(
                      (item) => item.number === moduleNumber,
                    );
                    const firstLesson = englishLevelOneLessons.find(
                      (lesson) => lesson.moduleNumber === moduleNumber,
                    );
                    if (!moduleInfo || !firstLesson) return null;
                    return (
                      <Link
                        key={moduleNumber}
                        href={`/academy/courses/english-for-beginners/lessons/${firstLesson.slug}`}
                        className="border-border flex items-center justify-between rounded-[10px] border bg-[#FCFCFE] px-4 py-3"
                      >
                        <span className="text-ink text-[14px] font-medium">
                          Modil {moduleNumber} — {moduleInfo.title}
                        </span>
                        <ArrowRightIcon className="text-indigo-dark size-4" />
                      </Link>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={() => setScreen("intro")}
                  className="bg-indigo flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(79,70,229,0.32)]"
                >
                  <RotateCcwIcon className="size-4" /> Eseye Ankò
                </button>
              </div>
            )}

            {screen === "capstone" && (
              <div>
                <p className="font-lesson-mono text-indigo-dark/70 mb-1.5 text-[11.5px] tracking-[0.1em] uppercase">
                  Felisitasyon
                </p>
                <h2 className="text-ink mb-3 text-2xl font-bold">
                  Ou pase egzamen final la! 🎉
                </h2>
                <p className="text-muted mb-5.5 text-[14.5px] leading-[1.6]">
                  Yon dènye bagay anvan sètifika ou: ekri yon ti tèks kout —
                  pale de tèt ou ak semèn ou, an Anglè. Sa se dènye pratik ou
                  anvan ou fini kou a.
                </p>
                <textarea
                  value={capstoneDraft}
                  onChange={(event) => setCapstoneDraft(event.target.value)}
                  placeholder="My name is... This week I..."
                  rows={5}
                  className="border-border mb-5 w-full rounded-[12px] border bg-[#FCFCFE] px-4 py-3.5 text-[15px]"
                />
                <button
                  type="button"
                  onClick={submitCapstone}
                  disabled={capstoneDraft.trim().length < 20}
                  className={cn(
                    "flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-[15px] font-semibold",
                    capstoneDraft.trim().length < 20
                      ? "bg-indigo-light text-muted cursor-not-allowed"
                      : "bg-indigo-dark cursor-pointer text-white",
                  )}
                >
                  Soumèt <ArrowRightIcon className="size-4" />
                </button>
              </div>
            )}

            {screen === "certificate" && (
              <div className="text-center">
                <div className="border-indigo text-indigo relative mx-auto mb-5.5 flex size-[148px] -rotate-6 flex-col items-center justify-center rounded-full border-[3px]">
                  <div className="border-indigo absolute inset-2 rounded-full border border-dashed" />
                  <SparklesIcon className="mb-1 size-5" />
                  <span className="font-lesson-mono text-[9px] tracking-[0.1em] uppercase">
                    Konplete
                  </span>
                  <span className="font-lesson-mono text-[9px] opacity-85">
                    ENG · PRACTICAL
                  </span>
                </div>

                <p className="font-lesson-mono text-indigo-dark/70 mb-1.5 text-[11.5px] tracking-[0.1em] uppercase">
                  Dosye Konplesyon Sou Aparèy Sa a
                </p>
                <h2 className="text-ink mb-1 text-2xl font-bold">
                  <span className="font-fraunces text-indigo font-semibold italic">
                    Anglè Pratik
                  </span>
                </h2>
                <p className="text-indigo-dark/70 mb-6 text-[13px]">
                  Skò final: {Math.round(examState.lastScore * 100)}%
                </p>

                <div className="border-border rounded-[14px] border bg-[#FCFCFE] px-6 py-7">
                  {!examState.studentName ? (
                    <div>
                      <label
                        htmlFor="english-certificate-name"
                        className="text-ink mb-2 block text-left text-[13.5px] font-semibold"
                      >
                        Non ou jan ou vle li parèt
                      </label>
                      <input
                        id="english-certificate-name"
                        value={studentName}
                        onChange={(event) => setStudentName(event.target.value)}
                        className="border-border focus:border-indigo w-full rounded-xl border bg-white px-4 py-3 text-[14.5px] outline-none"
                        placeholder="Non ak siyati ou"
                      />
                      <button
                        type="button"
                        disabled={!studentName.trim()}
                        onClick={() =>
                          saveExamState({
                            ...examState,
                            studentName: studentName.trim(),
                          })
                        }
                        className="bg-indigo mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-[14.5px] font-semibold text-white disabled:opacity-45"
                      >
                        <GraduationCapIcon className="size-4" /> Prepare Dosye
                        Mwen
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="text-muted text-[12px] tracking-wide uppercase">
                        Konplete pa
                      </p>
                      <p className="font-fraunces text-ink mt-2 text-2xl font-semibold">
                        {examState.studentName}
                      </p>
                      <p className="text-muted mt-4 text-[13px] leading-[1.6]">
                        Dosye sa a pwodwi epi sovgade sou aparèy sa a. Li poko
                        gen verifikasyon piblik sou entènèt.
                      </p>
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="bg-indigo mt-5 inline-flex min-h-11 items-center justify-center rounded-full px-5 text-[14.5px] font-semibold text-white print:hidden"
                      >
                        Enprime Dosye Konplesyon
                      </button>
                      <Link
                        href="/academy/courses/english-for-beginners"
                        className="text-indigo-dark mt-3 inline-flex min-h-10 items-center justify-center px-4 text-[13.5px] font-semibold print:hidden"
                      >
                        Retounen nan paj kou a →
                      </Link>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={retakeExam}
                  className="text-indigo-dark/70 mt-5 flex min-h-9 w-full items-center justify-center gap-1.5 rounded-full px-4 text-[13.5px] font-semibold"
                >
                  <RotateCcwIcon className="size-3.5" /> Refè egzamen an
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoRow({ text }: { text: string }) {
  return (
    <div className="bg-indigo-light flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5">
      <CheckIcon className="text-indigo-dark size-3.5 shrink-0" />
      <span className="text-ink text-[14.5px]">{text}</span>
    </div>
  );
}
