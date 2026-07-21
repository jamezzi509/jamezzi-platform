"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRightIcon,
  GraduationCapIcon,
  RotateCcwIcon,
  StampIcon,
} from "@/components/ui/icons";
import {
  computePlacement,
  placementQuestions,
  placementStartOver,
} from "@/content/english-placement-quiz";
import { englishLevelOneLessons } from "@/content/english-level-one";
import { cn } from "@/lib/cn";

type Screen = "intro" | "quiz" | "result";

const introPoints = [
  "15 kesyon, chwazi youn sèl repons",
  "Pa gen okenn tan limite -- reponn trankil",
  "Nan fen an, n ap di ou ki modil pou kòmanse",
];

const pastels = [
  "bg-indigo-light",
  "bg-indigo/10",
  "bg-success/10",
  "bg-coral/10",
];

export function EnglishPlacementQuiz() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<number | null>(null);

  const question = placementQuestions[index];
  const total = placementQuestions.length;

  function next() {
    const updated = { ...answers, [question.id]: selected as number };
    setAnswers(updated);
    setSelected(null);
    if (index + 1 < total) {
      setIndex(index + 1);
    } else {
      setScreen("result");
    }
  }

  function restart() {
    setScreen("intro");
    setIndex(0);
    setAnswers({});
    setSelected(null);
  }

  const placement = screen === "result" ? computePlacement(answers) : null;
  const alreadyAtStart = placement?.num === 1;
  const recommendedLesson = placement
    ? englishLevelOneLessons.find(
        (lesson) => lesson.moduleNumber === placement.num,
      )
    : null;

  return (
    <main className="bg-white pt-[72px]">
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-[620px] items-center justify-center px-5 py-10">
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
            {screen === "intro" && (
              <div>
                <h1 className="text-ink mb-1.5 text-[28px] leading-tight font-bold">
                  Tès{" "}
                  <span className="font-fraunces text-indigo font-semibold italic">
                    Plasman
                  </span>
                </h1>
                <p className="text-muted mb-5.5 text-[15px] leading-[1.55]">
                  Anvan ou kòmanse kou <strong>Anglè Pratik</strong> la, reponn
                  15 ti kesyon kout. Sa ap ede nou konnen egzakteman ki kote pou
                  ou kòmanse -- pou ou pa pèdi tan sou bagay ou konnen deja.
                </p>

                <div className="mb-6.5 grid gap-2.5">
                  {introPoints.map((line, index) => (
                    <div
                      key={line}
                      className={cn(
                        "flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5",
                        pastels[index % pastels.length],
                      )}
                    >
                      <span className="bg-indigo size-1.5 shrink-0 rounded-full" />
                      <span className="text-ink text-[14.5px]">{line}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setScreen("quiz")}
                  className="bg-indigo flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-[15.5px] font-semibold text-white shadow-[0_10px_24px_rgba(79,70,229,0.32)]"
                >
                  Kòmanse Tès la <ArrowRightIcon className="size-4.5" />
                </button>
              </div>
            )}

            {screen === "quiz" && (
              <div>
                <div className="mb-5.5 flex flex-wrap gap-1.5">
                  {placementQuestions.map((item, i) => {
                    const done =
                      i < index ||
                      (i === index && answers[item.id] !== undefined);
                    return (
                      <div
                        key={item.id}
                        aria-hidden="true"
                        className={cn(
                          "size-5 -rotate-6 rounded-full",
                          done
                            ? "bg-indigo shadow-[0_2px_4px_rgba(79,70,229,0.35)]"
                            : "border-indigo-light border border-dashed",
                        )}
                      />
                    );
                  })}
                </div>

                <div className="font-lesson-mono text-indigo-dark/70 mb-2 text-[11.5px] tracking-[0.1em] uppercase">
                  Kesyon {index + 1} sou {total}
                </div>

                <h2 className="font-fraunces text-ink mb-5.5 text-[23px] leading-[1.35] font-medium">
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

            {screen === "result" && placement && (
              <div className="text-center">
                <div className="border-indigo text-indigo relative mx-auto mb-5.5 flex size-[148px] -rotate-6 flex-col items-center justify-center rounded-full border-[3px]">
                  <div className="border-indigo absolute inset-2 rounded-full border border-dashed" />
                  <span className="font-lesson-mono text-[10px] tracking-[0.12em] uppercase">
                    Antre Otorize
                  </span>
                  <span className="font-fraunces my-1 text-[30px] leading-none font-semibold">
                    M{placement.num}
                  </span>
                  <span className="font-lesson-mono text-[9px] opacity-85">
                    ENG · BEG
                  </span>
                </div>

                <p className="font-lesson-mono text-indigo-dark/70 mb-1.5 text-[11.5px] tracking-[0.1em] uppercase">
                  Plasman ou
                </p>
                <h2 className="text-ink mb-1 text-2xl font-bold">
                  Modil {placement.num} --{" "}
                  <span className="font-fraunces text-indigo font-semibold italic">
                    {placement.name}
                  </span>
                </h2>
                <p className="text-indigo-dark/70 mb-5 text-[13px]">
                  {placement.eng}
                </p>

                <p className="text-muted mb-6.5 text-[14.5px] leading-[1.6]">
                  {alreadyAtStart
                    ? "Ou ka kòmanse depi nan kòmansman an, san sote anyen."
                    : `Nivo sa a montre kote ou ta ka kòmanse pi devan. Tout modil yo disponib, epi ou ka toujou kòmanse depi nan premye a si ou vle revize fondasyon yo.`}
                </p>

                <div className="grid gap-2.5">
                  {recommendedLesson && !alreadyAtStart && (
                    <Link
                      href={`/academy/courses/english-for-beginners/lessons/${recommendedLesson.slug}`}
                      className="bg-indigo flex min-h-12 items-center justify-center gap-2 rounded-full px-4 text-[14.5px] font-semibold text-white shadow-[0_10px_24px_rgba(79,70,229,0.28)]"
                    >
                      <GraduationCapIcon className="size-4" />
                      Kòmanse nan Modil {placement.num}
                    </Link>
                  )}
                  <Link
                    href="/academy/courses/english-for-beginners/learn#level-1"
                    className="border-border text-indigo-dark flex min-h-12 items-center justify-center gap-2 rounded-full border px-4 text-[14.5px] font-semibold"
                  >
                    <GraduationCapIcon className="size-4" />
                    Kòmanse Depi Kòmansman an -- Modil {placementStartOver.num}
                  </Link>

                  <button
                    type="button"
                    onClick={restart}
                    className="text-indigo-dark/70 flex min-h-9 items-center justify-center gap-1.5 rounded-full px-4 text-[13.5px] font-semibold"
                  >
                    <RotateCcwIcon className="size-3.5" /> Refè tès la
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
