"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ComputerLessonInteraction } from "@/content/computer-course-v2";
import type { PreferredPlatform } from "@/lib/use-computer-platform";
import { cn } from "@/lib/cn";

export function ComputerModuleOneInteraction({
  interaction,
  platform,
  onChoosePlatform,
  onComplete,
}: {
  interaction: ComputerLessonInteraction;
  platform: PreferredPlatform | null;
  onChoosePlatform: (platform: PreferredPlatform) => void;
  onComplete: () => void;
}) {
  if (interaction.kind === "course-orientation") {
    return <CourseOrientationSandbox onComplete={onComplete} />;
  }
  if (interaction.kind === "identify-device-and-system") {
    return (
      <DeviceAndSystemIdentifier
        platform={platform}
        onChoosePlatform={onChoosePlatform}
        onComplete={onComplete}
      />
    );
  }
  if (interaction.kind === "risk-classifier") {
    return <RiskClassifier onComplete={onComplete} />;
  }
  return <WorkspaceInspection onComplete={onComplete} />;
}

function InteractionShell({
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

function SuccessMessage({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mt-5 rounded-xl border border-[#B7DECE] bg-[#EDF9F4] p-4 text-base font-semibold text-[#126E4E]"
      role="status"
    >
      ✓ {children}
    </p>
  );
}

function CourseOrientationSandbox({ onComplete }: { onComplete: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [resetUsed, setResetUsed] = useState(false);

  useEffect(() => {
    if (menuOpen && answer && resetUsed) onComplete();
  }, [answer, menuOpen, onComplete, resetUsed]);

  function resetSample() {
    setAnswer(null);
    setMenuOpen(false);
    setResetUsed(true);
  }

  return (
    <InteractionShell
      title="Try the course controls safely"
      intro="This is a sample. It cannot change your real lesson progress. Open the sample menu, answer the sample question, then reset it."
    >
      <div className="overflow-hidden rounded-2xl border border-[#DCD7E5] bg-[#F8F7FB]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#DCD7E5] bg-white p-4">
          <div>
            <span className="text-xs font-bold text-[#5146CC] uppercase">
              Sample lesson
            </span>
            <strong className="mt-1 block">Practice without risk</strong>
          </div>
          <button
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="min-h-11 rounded-xl border border-[#CFC9DD] bg-white px-4 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5146CC]"
          >
            {menuOpen ? "Close sample menu" : "Open sample menu"}
          </button>
        </div>
        {menuOpen && (
          <div className="border-b border-[#DCD7E5] bg-[#242036] p-4 text-white">
            <p className="text-sm font-bold">Sample menu opened</p>
            <p className="mt-1 text-sm text-[#D8D4E3]">
              Real module menus let you move between lessons. This one stays in
              the sandbox.
            </p>
          </div>
        )}
        <div className="p-5">
          <p className="font-bold">Which action changes real progress?</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {["Opening a lesson", "Completing verified practice"].map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setAnswer(option)}
                  className={cn(
                    "min-h-12 rounded-xl border p-3 text-left font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5146CC]",
                    answer === option
                      ? "border-[#5146CC] bg-[#EFEDFF]"
                      : "border-[#DDD8E6] bg-white",
                  )}
                >
                  {option}
                </button>
              ),
            )}
          </div>
          {answer && (
            <p
              className={cn(
                "mt-3 rounded-xl p-3 text-sm",
                answer === "Completing verified practice"
                  ? "bg-[#EDF9F4] text-[#126E4E]"
                  : "bg-[#FFF8E8] text-[#7F4C08]",
              )}
              role="status"
            >
              {answer === "Completing verified practice"
                ? "Correct. Opening a page is not proof of the skill."
                : "Not yet. Opening a page only means it was viewed."}
            </p>
          )}
          <button
            type="button"
            disabled={!answer}
            onClick={resetSample}
            className="mt-4 min-h-11 rounded-xl bg-[#242036] px-4 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Reset sample
          </button>
        </div>
      </div>
      {resetUsed && (
        <div className="mt-4 flex items-start gap-3 rounded-xl bg-[#F2F0FF] p-4">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#5146CC] text-sm font-bold text-white">
            3
          </span>
          <p className="text-sm leading-relaxed text-[#4F4A5B]">
            Reset worked. Now reopen the menu and choose the correct answer to
            finish the sandbox.
          </p>
        </div>
      )}
      {menuOpen && answer && resetUsed && (
        <SuccessMessage>
          You opened, answered, reset, and returned to the sample.
        </SuccessMessage>
      )}
    </InteractionShell>
  );
}

const deviceFamilies = [
  {
    id: "laptop",
    label: "Laptop",
    image: "computer-family-laptop.webp",
    detail: "Screen, keyboard, and computer fold together.",
  },
  {
    id: "desktop",
    label: "Desktop",
    image: "computer-family-desktop.webp",
    detail: "Monitor and computer tower are separate.",
  },
  {
    id: "all-in-one",
    label: "All-in-one",
    image: "computer-family-all-in-one.webp",
    detail: "The computer is built into the monitor housing.",
  },
  {
    id: "two-in-one",
    label: "Tablet / 2-in-1",
    image: "computer-family-tablet-2-in-1.webp",
    detail: "Touchscreen with a keyboard that folds or detaches.",
  },
];

function DeviceAndSystemIdentifier({
  platform,
  onChoosePlatform,
  onComplete,
}: {
  platform: PreferredPlatform | null;
  onChoosePlatform: (platform: PreferredPlatform) => void;
  onComplete: () => void;
}) {
  const [family, setFamily] = useState<string | null>(null);
  const [systemChoice, setSystemChoice] = useState<
    PreferredPlatform | "unsure" | null
  >(platform);

  const complete = Boolean(family && systemChoice);
  useEffect(() => {
    if (complete) onComplete();
  }, [complete, onComplete]);

  function chooseSystem(choice: PreferredPlatform | "unsure") {
    setSystemChoice(choice);
    if (choice !== "unsure") onChoosePlatform(choice);
  }

  return (
    <InteractionShell
      title="Identify the device, then the system"
      intro="These are two different questions. First choose the physical device in front of you. Then compare what appears on its screen."
    >
      <fieldset>
        <legend className="text-lg font-bold">
          Step 1: What physical device do you have?
        </legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {deviceFamilies.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={family === item.id}
              onClick={() => setFamily(item.id)}
              className={cn(
                "overflow-hidden rounded-2xl border bg-white text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5146CC]",
                family === item.id
                  ? "border-[#5146CC] ring-2 ring-[#CBC6FF]"
                  : "border-[#DDD8E6]",
              )}
            >
              <Image
                src={`/images/academy/courses/computer-internet-essentials/v2/${item.image}`}
                alt={`${item.label}: ${item.detail}`}
                width={720}
                height={720}
                sizes="(max-width: 640px) 50vw, 200px"
                className="aspect-square w-full object-cover"
              />
              <span className="block border-t border-[#E3DFEA] p-3">
                <strong className="block">{item.label}</strong>
                <span className="mt-1 block text-sm leading-snug text-[#696675]">
                  {item.detail}
                </span>
              </span>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8 border-t border-[#E3DFEA] pt-7">
        <legend className="text-lg font-bold">
          Step 2: Which main screen appears on it?
        </legend>
        <figure className="mt-4 overflow-hidden rounded-2xl border border-[#DDD8E6]">
          <Image
            src="/images/academy/courses/computer-internet-essentials/v2/windows-mac-laptop-comparison.webp"
            alt="Windows desktop with Start and taskbar beside a macOS desktop with Apple menu, menu bar, and Dock"
            width={1680}
            height={945}
            sizes="(max-width: 900px) 100vw, 820px"
            className="h-auto w-full"
          />
        </figure>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ["windows", "Windows", "Start button and taskbar"],
            ["mac", "Mac", "Apple menu, menu bar, and Dock"],
            ["unsure", "Neither / unsure", "Do not force a guess"],
          ].map(([value, label, detail]) => (
            <button
              key={value}
              type="button"
              aria-pressed={systemChoice === value}
              onClick={() =>
                chooseSystem(value as PreferredPlatform | "unsure")
              }
              className={cn(
                "min-h-24 rounded-2xl border p-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5146CC]",
                systemChoice === value
                  ? "border-[#5146CC] bg-[#EFEDFF]"
                  : "border-[#DDD8E6] bg-white",
              )}
            >
              <strong className="block">{label}</strong>
              <span className="mt-1 block text-sm text-[#696675]">
                {detail}
              </span>
            </button>
          ))}
        </div>
        {systemChoice === "unsure" && (
          <p className="mt-4 rounded-xl border border-[#EAD49A] bg-[#FFF8E8] p-4 text-sm leading-relaxed text-[#754B0B]">
            Stop here rather than guessing. Your computer may use ChromeOS,
            Linux, an older system, or a restricted remote screen. Ask a trusted
            person to identify it before following Windows or Mac instructions.
          </p>
        )}
      </fieldset>
      {complete && (
        <SuccessMessage>
          Device and system choices recorded. The next step is verification on
          the real computer.
        </SuccessMessage>
      )}
    </InteractionShell>
  );
}

type RiskLevel = "green" | "pause" | "stop";

const riskScenarios: {
  title: string;
  detail: string;
  answer: RiskLevel;
  feedback: string;
}[] = [
  {
    title: "Change the volume",
    detail: "You lower the speaker volume and can raise it again.",
    answer: "green",
    feedback: "This is a reversible, low-consequence control.",
  },
  {
    title: "Microphone permission",
    detail: "A meeting app asks for microphone access as you join a call.",
    answer: "pause",
    feedback: "Confirm the app and understand the privacy permission first.",
  },
  {
    title: "Unexpected payment warning",
    detail:
      "A browser says to call a number and pay immediately to remove a virus.",
    answer: "stop",
    feedback: "Do not call, pay, or install anything from the warning.",
  },
  {
    title: "Open the Start or Apple menu",
    detail: "You open the menu only to look at the available commands.",
    answer: "green",
    feedback: "Opening a known menu does not install or remove anything.",
  },
  {
    title: "Delete a school file",
    detail:
      "The computer asks whether to replace or permanently delete a file.",
    answer: "pause",
    feedback: "Check the file, backup, destination, and consequence first.",
  },
  {
    title: "Password request",
    detail: "An unfamiliar installer asks for an administrator password.",
    answer: "stop",
    feedback: "Cancel and verify the installer through an official route.",
  },
  {
    title: "Smoke or swelling",
    detail:
      "The computer smells burnt, smokes, sparks, or has a swollen battery.",
    answer: "stop",
    feedback: "Stop using it and get appropriate physical-safety help.",
  },
];

function RiskClassifier({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<RiskLevel | null>(null);
  const [completed, setCompleted] = useState(false);
  const scenario = riskScenarios[index];
  const correct = selected === scenario.answer;

  useEffect(() => {
    if (completed) onComplete();
  }, [completed, onComplete]);

  function continuePractice() {
    if (!correct) return;
    if (index === riskScenarios.length - 1) {
      setCompleted(true);
      return;
    }
    setIndex((current) => current + 1);
    setSelected(null);
  }

  function reset() {
    setIndex(0);
    setSelected(null);
    setCompleted(false);
  }

  return (
    <InteractionShell
      title="Classify seven real situations"
      intro="Choose from the possible consequence—not from the color or appearance of a button. Incorrect answers explain what was missed and can be retried."
    >
      <div className="rounded-2xl border border-[#DDD8E6] bg-[#F8F7FB] p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-bold text-[#5146CC]">
            Scenario {Math.min(index + 1, riskScenarios.length)} of{" "}
            {riskScenarios.length}
          </span>
          <button
            type="button"
            onClick={reset}
            className="min-h-10 text-sm font-semibold text-[#5F5869] underline underline-offset-4"
          >
            Reset scenarios
          </button>
        </div>
        {!completed ? (
          <>
            <h3 className="font-display mt-5 text-2xl">{scenario.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-[#55515F]">
              {scenario.detail}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {(["green", "pause", "stop"] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  aria-pressed={selected === level}
                  onClick={() => setSelected(level)}
                  className={cn(
                    "min-h-14 rounded-xl border px-4 font-bold capitalize focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5146CC]",
                    selected === level
                      ? level === "green"
                        ? "border-[#3F9B76] bg-[#DFF4EA] text-[#126E4E]"
                        : level === "pause"
                          ? "border-[#CA922D] bg-[#FFF0C8] text-[#7D4B05]"
                          : "border-[#CF5A54] bg-[#FFE1DE] text-[#9A302B]"
                      : "border-[#D9D4E2] bg-white",
                  )}
                >
                  {level === "green" ? "Green light" : level}
                </button>
              ))}
            </div>
            {selected && (
              <div
                className={cn(
                  "mt-4 rounded-xl p-4 text-sm leading-relaxed",
                  correct
                    ? "bg-[#EDF9F4] text-[#126E4E]"
                    : "bg-[#FFF8E8] text-[#7F4C08]",
                )}
                role="status"
              >
                <strong>{correct ? "Correct. " : "Try again. "}</strong>
                {scenario.feedback}
              </div>
            )}
            <button
              type="button"
              disabled={!correct}
              onClick={continuePractice}
              className="mt-4 min-h-11 rounded-xl bg-[#242036] px-5 font-bold text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              {index === riskScenarios.length - 1
                ? "Finish scenarios"
                : "Next scenario"}
            </button>
          </>
        ) : (
          <SuccessMessage>
            All seven situations were classified correctly.
          </SuccessMessage>
        )}
      </div>
    </InteractionShell>
  );
}

const workspaceHazards = [
  {
    id: "reach",
    label: "Long reach",
    position: "top-[38%] left-[18%]",
    feedback: "Move the input device closer so the shoulder can relax.",
  },
  {
    id: "pillow",
    label: "Blocked airflow",
    position: "top-[30%] left-[34%]",
    feedback: "Soft bedding can block vents. Use a stable hard surface.",
  },
  {
    id: "drink",
    label: "Liquid near computer",
    position: "top-[48%] left-[33%]",
    feedback: "Move drinks away from the computer and power equipment.",
  },
  {
    id: "glare",
    label: "Screen glare",
    position: "top-[24%] left-[39%]",
    feedback: "Change screen or light position and adjust brightness.",
  },
  {
    id: "cable",
    label: "Cable hazard",
    position: "top-[83%] left-[31%]",
    feedback:
      "Route the cable where it cannot trip someone or pull the laptop.",
  },
  {
    id: "support",
    label: "Limited support",
    position: "top-[61%] left-[12%]",
    feedback:
      "Use available back or foot support and change position regularly.",
  },
];

const workspaceChoices = [
  ["surface", "Stable hard surface", "Soft pillow or bedding"],
  ["airflow", "Vents open", "Vents covered"],
  ["liquid", "Drink moved away", "Drink beside laptop"],
  ["cable", "Cable routed safely", "Cable across walkway"],
] as const;

function WorkspaceInspection({ onComplete }: { onComplete: () => void }) {
  const [found, setFound] = useState<string[]>([]);
  const [choices, setChoices] = useState<Record<string, boolean>>({});
  const allHazards = found.length === workspaceHazards.length;
  const allChoices = workspaceChoices.every(([id]) => choices[id] === true);
  const complete = allHazards && allChoices;

  useEffect(() => {
    if (complete) onComplete();
  }, [complete, onComplete]);

  function reset() {
    setFound([]);
    setChoices({});
  }

  return (
    <InteractionShell
      title="Inspect and improve the learning space"
      intro="Find six problems in the left side of the photograph. Each numbered button works with touch, mouse, or keyboard. Then choose the safer setup options."
    >
      <div className="overflow-hidden rounded-2xl border border-[#DDD8E6] bg-white">
        <div className="relative">
          <Image
            src="/images/academy/courses/computer-internet-essentials/v2/workstation-before-after.webp"
            alt="The same learner shown in an unsafe workstation on the left and an improved workstation on the right"
            width={1600}
            height={900}
            sizes="(max-width: 900px) 100vw, 820px"
            className="h-auto w-full"
          />
          {workspaceHazards.map((hazard, index) => {
            const isFound = found.includes(hazard.id);
            return (
              <button
                key={hazard.id}
                type="button"
                aria-label={`Inspect ${hazard.label}`}
                aria-pressed={isFound}
                onClick={() =>
                  setFound((current) =>
                    current.includes(hazard.id)
                      ? current
                      : [...current, hazard.id],
                  )
                }
                className={cn(
                  "absolute flex size-9 items-center justify-center rounded-full border-2 border-white text-sm font-bold text-white shadow-lg focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#242036] sm:size-11",
                  hazard.position,
                  isFound ? "bg-[#13805A]" : "bg-[#A63731]",
                )}
              >
                {isFound ? "✓" : index + 1}
              </button>
            );
          })}
        </div>
        <div className="border-t border-[#DDD8E6] p-5">
          <div className="flex items-center justify-between gap-3">
            <strong>{found.length} of 6 hazards inspected</strong>
            <button
              type="button"
              onClick={reset}
              className="min-h-10 text-sm font-semibold underline underline-offset-4"
            >
              Reset activity
            </button>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {workspaceHazards
              .filter((hazard) => found.includes(hazard.id))
              .map((hazard) => (
                <div
                  key={hazard.id}
                  className="rounded-xl bg-[#EDF9F4] p-3 text-sm leading-relaxed text-[#126E4E]"
                >
                  <strong>{hazard.label}: </strong>
                  {hazard.feedback}
                </div>
              ))}
          </div>
        </div>
      </div>

      <fieldset className="mt-7">
        <legend className="text-lg font-bold">
          Build the safer arrangement
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {workspaceChoices.map(([id, safe, unsafe]) => (
            <div key={id} className="rounded-2xl border border-[#DDD8E6] p-4">
              <p className="text-sm font-bold text-[#5D5767]">Choose one</p>
              <div className="mt-3 grid gap-2">
                <button
                  type="button"
                  aria-pressed={choices[id] === true}
                  onClick={() =>
                    setChoices((current) => ({ ...current, [id]: true }))
                  }
                  className={cn(
                    "min-h-11 rounded-xl border p-3 text-left font-semibold",
                    choices[id] === true
                      ? "border-[#3F9B76] bg-[#EDF9F4] text-[#126E4E]"
                      : "border-[#DDD8E6]",
                  )}
                >
                  {safe}
                </button>
                <button
                  type="button"
                  aria-pressed={choices[id] === false}
                  onClick={() =>
                    setChoices((current) => ({ ...current, [id]: false }))
                  }
                  className={cn(
                    "min-h-11 rounded-xl border p-3 text-left",
                    choices[id] === false
                      ? "border-[#D6A247] bg-[#FFF8E8] text-[#7F4C08]"
                      : "border-[#DDD8E6]",
                  )}
                >
                  {unsafe}
                </button>
              </div>
              {choices[id] === false && (
                <p className="mt-2 text-sm text-[#7F4C08]" role="status">
                  Try the option that reduces the hazard.
                </p>
              )}
            </div>
          ))}
        </div>
      </fieldset>
      {complete && (
        <SuccessMessage>
          All hazards were inspected and the safer arrangement was built.
        </SuccessMessage>
      )}
    </InteractionShell>
  );
}
