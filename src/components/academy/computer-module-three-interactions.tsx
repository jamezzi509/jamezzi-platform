"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import type { ComputerLessonInteraction } from "@/content/computer-course-v2";
import { cn } from "@/lib/cn";

type ModuleThreeKind = Extract<
  ComputerLessonInteraction["kind"],
  | "buying-brief-builder"
  | "specification-decoder"
  | "platform-buying-decision"
  | "condition-offer-audit"
  | "candidate-buying-mission"
>;

const buyingBriefStorageKey = "jamezzi:computer-course:buying-brief:v1";

type SavedBuyingBrief = {
  task: string;
  location: string;
  budget: string;
};

function readSavedBuyingBrief() {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(buyingBriefStorageKey) ?? "";
}

function useSavedBuyingBrief() {
  const stored = useSyncExternalStore(
    () => () => undefined,
    readSavedBuyingBrief,
    () => "",
  );
  if (!stored) return null;
  try {
    return JSON.parse(stored) as SavedBuyingBrief;
  } catch {
    return null;
  }
}

function SavedBriefNote() {
  const brief = useSavedBuyingBrief();
  if (!brief) return null;
  return (
    <aside className="mb-6 rounded-2xl border border-[#D9D4E5] bg-[#F8F7FB] p-4">
      <p className="text-xs font-bold tracking-[0.1em] text-[#5146CC] uppercase">
        Your saved buying brief
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[#565160]">
        <strong>Work:</strong> {brief.task} · <strong>Place:</strong>{" "}
        {brief.location} · <strong>Budget:</strong> {brief.budget}
      </p>
    </aside>
  );
}

export function ComputerModuleThreeInteraction({
  interaction,
  onComplete,
}: {
  interaction: ComputerLessonInteraction;
  onComplete: () => void;
}) {
  const kind = interaction.kind as ModuleThreeKind;
  if (kind === "buying-brief-builder")
    return <BuyingBriefBuilder onComplete={onComplete} />;
  if (kind === "specification-decoder")
    return <SpecificationDecoder onComplete={onComplete} />;
  if (kind === "platform-buying-decision")
    return <PlatformBuyingDecision onComplete={onComplete} />;
  if (kind === "condition-offer-audit")
    return <ConditionOfferAudit onComplete={onComplete} />;
  return <CandidateBuyingMission onComplete={onComplete} />;
}

function Shell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 rounded-[24px] border border-[#D9D4E5] bg-white p-5 shadow-[0_22px_65px_rgba(39,31,74,0.1)] sm:p-8">
      <p className="text-sm font-bold tracking-[0.12em] text-[#5146CC] uppercase">
        Practice here
      </p>
      <h2 className="font-display mt-2 text-3xl leading-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-[1.7] text-[#5A5663]">
        {intro}
      </p>
      <div className="mt-7">{children}</div>
    </section>
  );
}

function Success({ children }: { children: React.ReactNode }) {
  return (
    <p
      role="status"
      className="mt-5 rounded-xl border border-[#B7DECE] bg-[#EDF9F4] p-4 text-base font-semibold text-[#126E4E]"
    >
      ✓ {children}
    </p>
  );
}

function ChoiceButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "min-h-12 rounded-xl border px-4 text-left text-[15px] font-semibold",
        selected
          ? "border-[#5146CC] bg-[#EFEDFF] text-[#29236F] ring-1 ring-[#5146CC]"
          : "border-[#DDD8E6] bg-white text-[#3F3B48]",
      )}
    >
      {label}
    </button>
  );
}

function BuyingBriefBuilder({ onComplete }: { onComplete: () => void }) {
  const [task, setTask] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [checked, setChecked] = useState(false);
  const complete = Boolean(task && location && budget && checked);

  useEffect(() => {
    if (complete) onComplete();
  }, [complete, onComplete]);

  useEffect(() => {
    if (!checked || !task || !location || !budget) return;
    window.localStorage.setItem(
      buyingBriefStorageKey,
      JSON.stringify({ task, location, budget } satisfies SavedBuyingBrief),
    );
  }, [budget, checked, location, task]);

  const family =
    location === "Travel between school and home"
      ? "A laptop is the practical starting family."
      : location === "One desk with room for separate pieces"
        ? "A desktop or all-in-one can be compared with laptops."
        : "A laptop or small desktop may fit; measure the space first.";

  return (
    <Shell
      title="Build a first buying brief"
      intro="Choose one realistic answer in each group. This is a practice brief, not a store recommendation or a promise that one model fits everyone."
    >
      <div className="grid gap-7">
        {[
          [
            "Main work",
            [
              "Browser, documents, email, and video classes",
              "Design, video editing, or technical software",
              "Gaming or other graphics-heavy work",
            ],
            task,
            setTask,
          ],
          [
            "Where it will be used",
            [
              "Travel between school and home",
              "One desk with room for separate pieces",
              "A small shared space",
            ],
            location,
            setLocation,
          ],
          [
            "Total budget approach",
            [
              "Tight: protect required tasks and leave a small reserve",
              "Balanced: pay for useful life and comfortable basics",
              "Flexible: spend more only where the work benefits",
            ],
            budget,
            setBudget,
          ],
        ].map(([legend, options, value, setter]) => (
          <fieldset key={legend as string}>
            <legend className="mb-3 text-lg font-bold">
              {legend as string}
            </legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {(options as string[]).map((option) => (
                <ChoiceButton
                  key={option}
                  label={option}
                  selected={value === option}
                  onClick={() => {
                    (setter as (answer: string) => void)(option);
                    setChecked(false);
                  }}
                />
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <button
        type="button"
        disabled={!task || !location || !budget}
        onClick={() => setChecked(true)}
        className="mt-6 min-h-12 rounded-xl bg-[#242036] px-5 font-bold text-white disabled:opacity-35"
      >
        Build my practice brief
      </button>
      {checked && (
        <div role="status" className="mt-5 rounded-2xl bg-[#F3F1FA] p-5">
          <strong className="text-lg">Your evidence starting point</strong>
          <p className="mt-2 text-base leading-relaxed text-[#565160]">
            {family} Your main work is “{task}.” Your budget rule is “{budget}.”
            The next step is to name required apps, ports, screen needs, and the
            complete cost before comparing products.
          </p>
        </div>
      )}
      {complete && <Success>The practice buying brief is complete.</Success>}
    </Shell>
  );
}

const specQuestions = [
  {
    prompt: "Which part holds the apps and work that are active right now?",
    answers: ["RAM", "SSD storage", "Screen resolution"],
    correct: "RAM",
    why: "RAM is temporary working space. It is not permanent file storage.",
  },
  {
    prompt: "Which fact is strongest when comparing processors?",
    answers: [
      "The exact model and generation",
      "The words very fast",
      "GHz by itself",
    ],
    correct: "The exact model and generation",
    why: "Clock speed alone cannot compare different processor designs and generations.",
  },
  {
    prompt: "What does a 512 GB SSD describe?",
    answers: [
      "Storage capacity and drive type",
      "The amount of RAM",
      "The processor speed",
    ],
    correct: "Storage capacity and drive type",
    why: "512 GB is the advertised capacity; SSD identifies the storage technology.",
  },
  {
    prompt: "A listing says Core i7 but hides the exact model. What is it?",
    answers: [
      "Incomplete evidence",
      "Always a premium computer",
      "Enough detail",
    ],
    correct: "Incomplete evidence",
    why: "The family label alone hides generation, exact model, power class, and age.",
  },
  {
    prompt:
      "Which is the balanced starting target for most students in this course?",
    answers: [
      "16 GB RAM and 512 GB SSD",
      "4 GB RAM and 64 GB storage",
      "The cheapest computer with no exact specifications",
    ],
    correct: "16 GB RAM and 512 GB SSD",
    why: "It is a practical starting target, not a guarantee; required software still decides.",
  },
] as const;

function SpecificationDecoder({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [finished, setFinished] = useState(false);
  const question = specQuestions[index];
  const correct = answer === question.correct;

  useEffect(() => {
    if (finished) onComplete();
  }, [finished, onComplete]);

  return (
    <Shell
      title="Decode the specification instead of the advertisement"
      intro="Answer all five. Wrong answers explain the missing idea and remain retryable."
    >
      <SavedBriefNote />
      {!finished ? (
        <div className="rounded-2xl border border-[#DDD8E6] bg-[#F8F7FB] p-5 sm:p-7">
          <p className="text-sm font-bold text-[#5146CC]">
            Question {index + 1} of 5
          </p>
          <h3 className="mt-3 text-xl font-bold">{question.prompt}</h3>
          <div className="mt-5 grid gap-2">
            {question.answers.map((option) => (
              <ChoiceButton
                key={option}
                label={option}
                selected={answer === option}
                onClick={() => setAnswer(option)}
              />
            ))}
          </div>
          {answer && (
            <p
              role="status"
              className={cn(
                "mt-4 rounded-xl p-4 text-sm leading-relaxed",
                correct
                  ? "bg-[#EDF9F4] text-[#126E4E]"
                  : "bg-[#FFF8E8] text-[#7F4C08]",
              )}
            >
              {correct
                ? `Correct. ${question.why}`
                : "Not yet. Read the question again and choose the fact that describes the part or proves the claim."}
            </p>
          )}
          <button
            type="button"
            disabled={!correct}
            onClick={() => {
              if (index === specQuestions.length - 1) setFinished(true);
              else {
                setIndex(index + 1);
                setAnswer("");
              }
            }}
            className="mt-4 min-h-11 rounded-xl bg-[#242036] px-5 font-bold text-white disabled:opacity-35"
          >
            {index === specQuestions.length - 1
              ? "Finish decoder"
              : "Next specification"}
          </button>
        </div>
      ) : (
        <Success>
          All five specification decisions were decoded correctly.
        </Success>
      )}
    </Shell>
  );
}

const platformScenarios = [
  {
    prompt:
      "A school requires a Windows-only desktop application and a specialized USB device whose manufacturer lists Windows drivers only.",
    correct: "Windows is the stronger fit",
    explanation:
      "Two blocking requirements have official Windows support and no verified Mac support.",
  },
  {
    prompt:
      "All required work runs in a verified modern browser. Both systems support the printer, files, and accessibility needs. Both totals fit.",
    correct: "Both can work",
    explanation:
      "With no blocker, support, comfort, price, and preference can decide.",
  },
  {
    prompt:
      "The learner needs a Mac-only creative app, already owns compatible devices, and has verified local support and the complete cost.",
    correct: "Mac is the stronger fit",
    explanation:
      "A required Mac-only workflow is a genuine blocker for the other platform.",
  },
  {
    prompt:
      "The seller says every app works everywhere, but the learner has not checked the required app, printer, or school rule.",
    correct: "More information is required",
    explanation: "A seller's general claim is not compatibility evidence.",
  },
] as const;

function PlatformBuyingDecision({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [finished, setFinished] = useState(false);
  const item = platformScenarios[index];
  const correct = answer === item.correct;
  useEffect(() => {
    if (finished) onComplete();
  }, [finished, onComplete]);
  return (
    <Shell
      title="Choose a platform from blockers, not loyalty"
      intro="Decide from the named evidence. Your saved Windows or Mac lesson path does not answer these buying scenarios."
    >
      <SavedBriefNote />
      {!finished ? (
        <div className="rounded-2xl border border-[#DDD8E6] p-5 sm:p-7">
          <p className="text-sm font-bold text-[#5146CC]">
            Scenario {index + 1} of 4
          </p>
          <p className="mt-3 text-lg leading-relaxed">{item.prompt}</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {[
              "Windows is the stronger fit",
              "Mac is the stronger fit",
              "Both can work",
              "More information is required",
            ].map((option) => (
              <ChoiceButton
                key={option}
                label={option}
                selected={answer === option}
                onClick={() => setAnswer(option)}
              />
            ))}
          </div>
          {answer && (
            <p
              role="status"
              className={cn(
                "mt-4 rounded-xl p-4 text-sm",
                correct
                  ? "bg-[#EDF9F4] text-[#126E4E]"
                  : "bg-[#FFF8E8] text-[#7F4C08]",
              )}
            >
              {correct
                ? `Correct. ${item.explanation}`
                : "That conclusion is stronger than the evidence. Look for a verified blocker or an unresolved fact."}
            </p>
          )}
          <button
            type="button"
            disabled={!correct}
            onClick={() => {
              if (index === 3) setFinished(true);
              else {
                setIndex(index + 1);
                setAnswer("");
              }
            }}
            className="mt-4 min-h-11 rounded-xl bg-[#242036] px-5 font-bold text-white disabled:opacity-35"
          >
            {index === 3 ? "Finish platform decision" : "Next scenario"}
          </button>
        </div>
      ) : (
        <Success>All platform decisions were supported by evidence.</Success>
      )}
    </Shell>
  );
}

const conditionOffers = [
  {
    title: "Offer A · New bargain laptop",
    facts: "4 GB RAM, 64 GB storage, Windows 10 only, final sale.",
    correct: "Reject",
    reason:
      "The low-end configuration is a poor general student target, Windows 10 standard support ended, and there is no return protection.",
  },
  {
    title: "Offer B · Recent refurbished business laptop",
    facts:
      "16 GB RAM, 512 GB SSD, Windows 11 support verified, test report, charger, 30-day returns, one-year written warranty.",
    correct: "Consider",
    reason:
      "The offer provides a recent supported configuration and written testing and protection. Physical inspection is still required.",
  },
  {
    title: "Offer C · Cheap used Mac",
    facts:
      "Seller will remove Activation Lock after payment; battery and returns unknown.",
    correct: "Reject",
    reason:
      "An unresolved ownership lock before payment is a blocker, and other important facts are unknown.",
  },
] as const;

function ConditionOfferAudit({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [finished, setFinished] = useState(false);
  const offer = conditionOffers[index];
  const correct = answer === offer.correct;
  useEffect(() => {
    if (finished) onComplete();
  }, [finished, onComplete]);
  return (
    <Shell
      title="Audit the protection around three offers"
      intro="A condition word is not a quality guarantee. Judge the exact model, support, testing, ownership, returns, and warranty."
    >
      <SavedBriefNote />
      {!finished ? (
        <div className="grid gap-6 rounded-2xl border border-[#DDD8E6] bg-[#F8F7FB] p-5 sm:p-7 lg:grid-cols-[.8fr_1.2fr]">
          <Image
            src={`/images/academy/courses/computer-internet-essentials/v2/${["buying-new-laptop.webp", "buying-refurbished-laptop.webp", "buying-used-laptop.webp"][index]}`}
            alt={`${offer.title} condition example`}
            width={720}
            height={540}
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
          <div>
            <p className="text-sm font-bold text-[#5146CC]">
              Offer {index + 1} of 3
            </p>
            <h3 className="mt-2 text-xl font-bold">{offer.title}</h3>
            <p className="mt-3 leading-relaxed text-[#565160]">{offer.facts}</p>
            <div className="mt-5 grid gap-2">
              {["Consider", "Needs verification", "Reject"].map((option) => (
                <ChoiceButton
                  key={option}
                  label={option}
                  selected={answer === option}
                  onClick={() => setAnswer(option)}
                />
              ))}
            </div>
            {answer && (
              <p
                role="status"
                className={cn(
                  "mt-4 rounded-xl p-4 text-sm leading-relaxed",
                  correct
                    ? "bg-[#EDF9F4] text-[#126E4E]"
                    : "bg-[#FFF8E8] text-[#7F4C08]",
                )}
              >
                {correct
                  ? `Correct. ${offer.reason}`
                  : "That choice misses a blocker or treats missing evidence as proof. Recheck support, ownership, and written protection."}
              </p>
            )}
            <button
              type="button"
              disabled={!correct}
              onClick={() => {
                if (index === 2) setFinished(true);
                else {
                  setIndex(index + 1);
                  setAnswer("");
                }
              }}
              className="mt-4 min-h-11 rounded-xl bg-[#242036] px-5 font-bold text-white disabled:opacity-35"
            >
              {index === 2 ? "Finish offer audit" : "Next offer"}
            </button>
          </div>
        </div>
      ) : (
        <Success>
          All three offers were judged from evidence rather than labels.
        </Success>
      )}
    </Shell>
  );
}

function CandidateBuyingMission({ onComplete }: { onComplete: () => void }) {
  const [selected, setSelected] = useState("");
  const [decision, setDecision] = useState("");
  const [inspection, setInspection] = useState<string[]>([]);
  const correctCandidate = selected === "Candidate B";
  const correctDecision = decision === "Wait and inspect Candidate B";
  const required = [
    "Physical condition",
    "System and ownership",
    "Functions and protection",
  ];
  const complete =
    correctCandidate &&
    correctDecision &&
    required.every((item) => inspection.includes(item));
  useEffect(() => {
    if (complete) onComplete();
  }, [complete, onComplete]);
  return (
    <Shell
      title="Make the final evidence-based buying decision"
      intro="The learner needs browser schoolwork, video calls, Windows 11 support, at least 8 GB RAM and 256 GB SSD, a $600 total limit, and written returns. Nothing should be bought inside this exercise."
    >
      <SavedBriefNote />
      <div className="grid gap-3 lg:grid-cols-3">
        {[
          [
            "Candidate A",
            "$329 · 4 GB · 64 GB · Windows 10 · final sale",
            "Fails support, memory, storage, and return requirements.",
          ],
          [
            "Candidate B",
            "$479 total · 16 GB · 512 GB SSD · Windows 11 · 30-day returns",
            "Passes the written brief; physical and ownership inspection remain.",
          ],
          [
            "Candidate C",
            "$399 · 16 GB · 512 GB · seller refuses restart or inspection",
            "Specifications look strong, but refused inspection is a blocker.",
          ],
        ].map(([name, facts, note]) => (
          <button
            key={name}
            type="button"
            aria-label={`Select ${name}`}
            aria-pressed={selected === name}
            onClick={() => setSelected(name)}
            className={cn(
              "rounded-2xl border p-5 text-left",
              selected === name
                ? "border-[#5146CC] bg-[#EFEDFF] ring-1 ring-[#5146CC]"
                : "border-[#DDD8E6]",
            )}
          >
            <strong className="text-lg">{name}</strong>
            <span className="mt-2 block text-sm leading-relaxed text-[#565160]">
              {facts}
            </span>
            <span className="mt-4 block text-xs leading-relaxed text-[#777181]">
              {note}
            </span>
          </button>
        ))}
      </div>
      <fieldset className="mt-7">
        <legend className="text-lg font-bold">
          Before payment, include all three inspection gates
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {required.map((item) => (
            <ChoiceButton
              key={item}
              label={item}
              selected={inspection.includes(item)}
              onClick={() =>
                setInspection((current) =>
                  current.includes(item)
                    ? current.filter((value) => value !== item)
                    : [...current, item],
                )
              }
            />
          ))}
        </div>
      </fieldset>
      <fieldset className="mt-7">
        <legend className="text-lg font-bold">
          What is the honest decision now?
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {[
            "Buy Candidate A now",
            "Wait and inspect Candidate B",
            "Buy Candidate C without restarting",
          ].map((item) => (
            <ChoiceButton
              key={item}
              label={item}
              selected={decision === item}
              onClick={() => setDecision(item)}
            />
          ))}
        </div>
      </fieldset>
      {(selected || decision) && !complete && (
        <p
          role="status"
          className="mt-5 rounded-xl bg-[#FFF8E8] p-4 text-sm leading-relaxed text-[#7F4C08]"
        >
          Choose the candidate that passes the written brief, but do not call it
          a completed purchase before physical, system, ownership, functional,
          return, and warranty checks.
        </p>
      )}
      {complete && (
        <Success>
          Candidate B is the finalist—not an automatic purchase. The decision is
          to wait, inspect, and buy only if every remaining gate passes.
        </Success>
      )}
    </Shell>
  );
}
