"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ComputerLessonInteraction } from "@/content/computer-course-v2";
import { cn } from "@/lib/cn";

type ModuleTwoKind = Extract<
  ComputerLessonInteraction["kind"],
  | "computer-family-identifier"
  | "outside-parts-locator"
  | "port-photo-match"
  | "connection-builder"
  | "accessory-planner"
>;

export function ComputerModuleTwoInteraction({
  interaction,
  onComplete,
}: {
  interaction: ComputerLessonInteraction;
  onComplete: () => void;
}) {
  const kind = interaction.kind as ModuleTwoKind;
  if (kind === "computer-family-identifier")
    return <ComputerFamilyIdentifier onComplete={onComplete} />;
  if (kind === "outside-parts-locator")
    return <OutsidePartsLocator onComplete={onComplete} />;
  if (kind === "port-photo-match")
    return <PortPhotoMatch onComplete={onComplete} />;
  if (kind === "connection-builder")
    return <ConnectionBuilder onComplete={onComplete} />;
  return <AccessoryPlanner onComplete={onComplete} />;
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
      className="mt-5 rounded-xl border border-[#B7DECE] bg-[#EDF9F4] p-4 text-base font-semibold text-[#126E4E]"
      role="status"
    >
      ✓ {children}
    </p>
  );
}

const familyQuestions = [
  {
    label: "Laptop",
    file: "computer-family-laptop.webp",
    clue: "The screen, keyboard, touchpad, battery, and computer travel together.",
  },
  {
    label: "Desktop",
    file: "computer-family-desktop.webp",
    clue: "The monitor and computer tower are separate pieces.",
  },
  {
    label: "All-in-one",
    file: "computer-family-all-in-one.webp",
    clue: "The computer is built into the monitor housing.",
  },
  {
    label: "Tablet / 2-in-1",
    file: "computer-family-tablet-2-in-1.webp",
    clue: "The touchscreen is central and the keyboard folds or detaches.",
  },
];

function ComputerFamilyIdentifier({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const question = familyQuestions[index];
  const correct = selected === question.label;

  useEffect(() => {
    if (finished) onComplete();
  }, [finished, onComplete]);

  function next() {
    if (!correct) return;
    if (index === familyQuestions.length - 1) setFinished(true);
    else {
      setIndex((value) => value + 1);
      setSelected(null);
    }
  }

  return (
    <Shell
      title="Identify four computer families from photographs"
      intro="Use the physical arrangement. Brand, wallpaper, and operating system are not proof of the device family."
    >
      {!finished ? (
        <div className="grid gap-6 rounded-2xl border border-[#DDD8E6] bg-[#F8F7FB] p-4 sm:p-6 lg:grid-cols-[1.05fr_.95fr]">
          <Image
            src={`/images/academy/courses/computer-internet-essentials/v2/${question.file}`}
            alt={`Computer identification photograph ${index + 1}`}
            width={720}
            height={720}
            className="aspect-square w-full rounded-xl object-cover"
          />
          <div>
            <p className="text-sm font-bold text-[#5146CC]">
              Photograph {index + 1} of {familyQuestions.length}
            </p>
            <h3 className="font-display mt-3 text-2xl">
              Which physical arrangement is shown?
            </h3>
            <div className="mt-4 grid gap-2">
              {familyQuestions.map((family) => (
                <button
                  key={family.label}
                  type="button"
                  aria-pressed={selected === family.label}
                  onClick={() => setSelected(family.label)}
                  className={cn(
                    "min-h-12 rounded-xl border px-4 text-left font-semibold",
                    selected === family.label
                      ? "border-[#5146CC] bg-[#EFEDFF]"
                      : "border-[#D9D4E2] bg-white",
                  )}
                >
                  {family.label}
                </button>
              ))}
            </div>
            {selected && (
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
                  ? `Correct. ${question.clue}`
                  : "Try again. Ignore the logo and screen. Look at how the screen, keyboard, and computer unit are arranged."}
              </p>
            )}
            <button
              type="button"
              disabled={!correct}
              onClick={next}
              className="mt-4 min-h-11 rounded-xl bg-[#242036] px-5 font-bold text-white disabled:opacity-35"
            >
              {index === familyQuestions.length - 1
                ? "Finish identification"
                : "Next photograph"}
            </button>
          </div>
        </div>
      ) : (
        <Success>All four physical computer families were identified.</Success>
      )}
    </Shell>
  );
}

const partHotspots = [
  ["Camera", "top-[8%] left-[48%]", "Captures video as an input."],
  ["Display", "top-[30%] left-[20%]", "Shows visual output."],
  ["Keyboard", "top-[67%] left-[43%]", "Sends typed input."],
  ["Touchpad", "top-[83%] left-[55%]", "Controls the pointer."],
  ["Ports", "top-[73%] left-[7%]", "Connect cables and accessories."],
] as const;

function OutsidePartsLocator({ onComplete }: { onComplete: () => void }) {
  const [found, setFound] = useState<string[]>([]);
  const [purposeAnswers, setPurposeAnswers] = useState<Record<string, boolean>>(
    {},
  );
  const complete =
    found.length === partHotspots.length &&
    ["input", "output", "cooling", "power"].every(
      (key) => purposeAnswers[key] === true,
    );

  useEffect(() => {
    if (complete) onComplete();
  }, [complete, onComplete]);

  const jobs = [
    ["input", "Keyboard and camera", "Display and speakers"],
    ["output", "Display and speakers", "Touchpad and microphone"],
    ["cooling", "Vents and fans", "Charging port and battery"],
    ["power", "Power button, charger, and battery", "Camera and display"],
  ] as const;

  return (
    <Shell
      title="Locate the outside parts and match their jobs"
      intro="Select every numbered location on the photograph, then identify input, output, cooling, and power parts."
    >
      <div className="overflow-hidden rounded-2xl border border-[#DDD8E6]">
        <div className="relative">
          <Image
            src="/images/academy/courses/computer-internet-essentials/v2/laptop-parts-photo.webp"
            alt="Open laptop photographed from above for exterior-parts practice"
            width={1680}
            height={945}
            className="h-auto w-full"
          />
          {partHotspots.map(([label, position], index) => {
            const active = found.includes(label);
            return (
              <button
                key={label}
                type="button"
                aria-label={`Locate ${label}`}
                aria-pressed={active}
                onClick={() =>
                  setFound((current) =>
                    current.includes(label) ? current : [...current, label],
                  )
                }
                className={cn(
                  "absolute flex size-9 items-center justify-center rounded-full border-2 border-white text-sm font-bold text-white shadow-lg sm:size-11",
                  position,
                  active ? "bg-[#13805A]" : "bg-[#5146CC]",
                )}
              >
                {active ? "✓" : index + 1}
              </button>
            );
          })}
        </div>
        <div className="grid gap-2 border-t border-[#DDD8E6] bg-white p-4 sm:grid-cols-2">
          {partHotspots
            .filter(([label]) => found.includes(label))
            .map(([label, , purpose]) => (
              <p key={label} className="rounded-lg bg-[#EDF9F4] p-3 text-sm">
                <strong>{label}: </strong>
                {purpose}
              </p>
            ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {jobs.map(([key, correctLabel, wrongLabel]) => (
          <fieldset
            key={key}
            className="rounded-2xl border border-[#DDD8E6] p-4"
          >
            <legend className="px-1 font-bold capitalize">{key}</legend>
            {[correctLabel, wrongLabel].map((label, answerIndex) => (
              <button
                key={label}
                type="button"
                aria-pressed={purposeAnswers[key] === (answerIndex === 0)}
                onClick={() =>
                  setPurposeAnswers((current) => ({
                    ...current,
                    [key]: answerIndex === 0,
                  }))
                }
                className={cn(
                  "mt-2 min-h-11 w-full rounded-xl border p-3 text-left",
                  purposeAnswers[key] === (answerIndex === 0)
                    ? answerIndex === 0
                      ? "border-[#3F9B76] bg-[#EDF9F4]"
                      : "border-[#D6A247] bg-[#FFF8E8]"
                    : "border-[#DDD8E6]",
                )}
              >
                {label}
              </button>
            ))}
            {purposeAnswers[key] === false && (
              <p className="mt-2 text-sm text-[#7F4C08]" role="status">
                Try again. Match the part to information entering, information
                leaving, heat leaving, or electrical power.
              </p>
            )}
          </fieldset>
        ))}
      </div>
      {complete && (
        <Success>Exterior parts and their jobs were matched.</Success>
      )}
    </Shell>
  );
}

const ports = [
  ["USB-A", "connector-usb-a.webp", "Rectangular; one orientation"],
  ["USB-C", "connector-usb-c.webp", "Small, oval, and reversible"],
  ["HDMI", "connector-hdmi.webp", "Wide display connector"],
  ["Ethernet", "connector-ethernet.webp", "Network plug with a clip"],
  ["3.5 mm audio", "connector-audio-jack.webp", "Round audio plug"],
  ["SD card", "connector-sd-card.webp", "Flat removable memory card"],
] as const;

function PortPhotoMatch({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [capabilityChoice, setCapabilityChoice] = useState<boolean | null>(
    null,
  );
  const item = ports[index];
  const correct = selected === item[0];

  useEffect(() => {
    if (finished && capabilityChoice === true) onComplete();
  }, [capabilityChoice, finished, onComplete]);

  function next() {
    if (!correct) return;
    if (index === ports.length - 1) setFinished(true);
    else {
      setIndex((value) => value + 1);
      setSelected(null);
    }
  }

  return (
    <Shell
      title="Identify each connector from a real close-up"
      intro="Match the photographed connector by shape. Then confirm what physical fit does—and does not—prove."
    >
      {!finished ? (
        <div className="grid gap-6 rounded-2xl border border-[#DDD8E6] bg-[#F8F7FB] p-4 sm:p-6 lg:grid-cols-[1fr_1fr]">
          <Image
            src={`/images/academy/courses/computer-internet-essentials/v2/${item[1]}`}
            alt={`Close-up connector photograph ${index + 1}`}
            width={960}
            height={640}
            className="aspect-[3/2] w-full rounded-xl object-cover"
          />
          <div>
            <p className="text-sm font-bold text-[#5146CC]">
              Connector {index + 1} of {ports.length}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {ports.map(([label]) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={selected === label}
                  onClick={() => setSelected(label)}
                  className={cn(
                    "min-h-12 rounded-xl border p-3 text-left font-semibold",
                    selected === label
                      ? "border-[#5146CC] bg-[#EFEDFF]"
                      : "border-[#DDD8E6] bg-white",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
            {selected && (
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
                  ? `Correct. ${item[2]}.`
                  : "Try again. Compare the opening, corners, orientation, and clip—not color."}
              </p>
            )}
            <button
              type="button"
              disabled={!correct}
              onClick={next}
              className="mt-4 min-h-11 rounded-xl bg-[#242036] px-5 font-bold text-white disabled:opacity-35"
            >
              {index === ports.length - 1 ? "Finish photos" : "Next photo"}
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-[#DDD8E6] p-5">
          <h3 className="font-display text-2xl">USB-C capability check</h3>
          <p className="mt-3">A USB-C plug fits. What does that prove?</p>
          <div className="mt-4 grid gap-2">
            {[
              [
                false,
                "It supports every speed, display, and charging feature.",
              ],
              [
                true,
                "The connector shapes fit; capabilities still need verification.",
              ],
            ].map(([answer, label]) => (
              <button
                key={String(label)}
                type="button"
                onClick={() => setCapabilityChoice(answer === true)}
                className="min-h-12 rounded-xl border border-[#DDD8E6] p-3 text-left"
              >
                {label}
              </button>
            ))}
          </div>
          {capabilityChoice === false && (
            <p
              className="mt-4 rounded-xl bg-[#FFF8E8] p-4 text-sm text-[#7F4C08]"
              role="status"
            >
              Try again. USB-C describes the connector shape. The port, cable,
              and device specifications determine speed, video, and charging.
            </p>
          )}
          {capabilityChoice === true && (
            <Success>
              All six connectors and the USB-C limitation were identified.
            </Success>
          )}
        </div>
      )}
    </Shell>
  );
}

const connectionScenarios = [
  {
    task: "Connect a laptop's HDMI port to a monitor's HDMI port.",
    answers: [
      "HDMI-to-HDMI cable",
      "3.5 mm audio cable",
      "USB-A charging cable",
    ],
    correct: 0,
    why: "Both endpoints and the required video-and-audio purpose match.",
  },
  {
    task: "Connect wired internet to an Ethernet port.",
    answers: ["HDMI cable", "Ethernet cable", "SD card"],
    correct: 1,
    why: "The clipped Ethernet connector matches the wired-network job.",
  },
  {
    task: "Charge a USB-C laptop safely.",
    answers: [
      "Any cable that physically fits",
      "A verified USB-C power adapter and cable meeting the laptop's requirements",
      "An HDMI adapter",
    ],
    correct: 1,
    why: "Charging depends on the connector, supported charging standard, cable, and sufficient power.",
  },
  {
    task: "Your plug does not slide in easily.",
    answers: [
      "Push harder",
      "Turn it repeatedly while forcing it",
      "Stop and identify both connector shapes",
    ],
    correct: 2,
    why: "Force can damage the connector and port. Identification comes first.",
  },
];

function ConnectionBuilder({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const scenario = connectionScenarios[index];
  const correct = selected === scenario.correct;

  useEffect(() => {
    if (finished) onComplete();
  }, [finished, onComplete]);

  return (
    <Shell
      title="Build four complete connection chains"
      intro="Choose by source, destination, connector at both ends, required job, and power—not by physical fit alone."
    >
      <figure className="overflow-hidden rounded-2xl border border-[#DDD8E6]">
        <Image
          src="/images/academy/courses/computer-internet-essentials/v2/connection-chain-photo.webp"
          alt="Laptop, cable and adapter, and accessory arranged as a complete connection chain"
          width={1680}
          height={945}
          className="h-auto w-full"
        />
      </figure>
      {!finished ? (
        <div className="mt-5 rounded-2xl border border-[#DDD8E6] bg-[#F8F7FB] p-5">
          <p className="text-sm font-bold text-[#5146CC]">
            Connection {index + 1} of {connectionScenarios.length}
          </p>
          <h3 className="font-display mt-3 text-2xl">{scenario.task}</h3>
          <div className="mt-4 grid gap-2">
            {scenario.answers.map((answer, answerIndex) => (
              <button
                key={answer}
                type="button"
                aria-pressed={selected === answerIndex}
                onClick={() => setSelected(answerIndex)}
                className={cn(
                  "min-h-12 rounded-xl border p-3 text-left",
                  selected === answerIndex
                    ? "border-[#5146CC] bg-[#EFEDFF]"
                    : "border-[#DDD8E6] bg-white",
                )}
              >
                {answer}
              </button>
            ))}
          </div>
          {selected !== null && (
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
                ? `Correct. ${scenario.why}`
                : `Try again. ${scenario.why}`}
            </p>
          )}
          <button
            type="button"
            disabled={!correct}
            onClick={() => {
              if (index === connectionScenarios.length - 1) setFinished(true);
              else {
                setIndex((value) => value + 1);
                setSelected(null);
              }
            }}
            className="mt-4 min-h-11 rounded-xl bg-[#242036] px-5 font-bold text-white disabled:opacity-35"
          >
            {index === connectionScenarios.length - 1
              ? "Finish connections"
              : "Next connection"}
          </button>
        </div>
      ) : (
        <Success>All four connection chains were solved safely.</Success>
      )}
    </Shell>
  );
}

const accessoryChoices = [
  ["Mouse", "accessory-mouse.webp", "Comfortable pointer control"],
  ["Keyboard", "accessory-keyboard.webp", "Comfortable typing"],
  ["Headset", "accessory-headset.webp", "Private listening and a microphone"],
  [
    "Webcam",
    "accessory-webcam.webp",
    "Video when the built-in camera is absent or inadequate",
  ],
  ["External drive", "accessory-external-drive.webp", "Move or protect files"],
  ["USB hub", "accessory-usb-hub.webp", "Add compatible ports when needed"],
  [
    "Dock",
    "accessory-dock.webp",
    "Add displays, network, charging, and ports when supported",
  ],
  ["Printer", "accessory-printer.webp", "Produce paper copies"],
  ["Monitor", "accessory-monitor.webp", "Add screen space"],
  [
    "Surge protector",
    "accessory-surge-protector.webp",
    "Add properly rated outlets and limited surge protection",
  ],
] as const;

function AccessoryPlanner({ onComplete }: { onComplete: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const required = ["Headset"];
  const optional = ["Webcam"];
  const unnecessary = [
    "Mouse",
    "Keyboard",
    "Printer",
    "Monitor",
    "External drive",
    "USB hub",
    "Dock",
    "Surge protector",
  ];
  const valid =
    required.every((item) => selected.includes(item)) &&
    unnecessary.every((item) => !selected.includes(item));

  useEffect(() => {
    if (checked && valid) onComplete();
  }, [checked, onComplete, valid]);

  return (
    <Shell
      title="Build the smallest useful student setup"
      intro="Scenario: the learner already has a working laptop, keyboard, touchpad, camera, and Wi-Fi. They attend online classes in a shared room and need clearer private audio. Select only what solves a stated need."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {accessoryChoices.map(([label, file, purpose]) => (
          <button
            key={label}
            type="button"
            aria-pressed={selected.includes(label)}
            onClick={() => {
              setChecked(false);
              setSelected((current) =>
                current.includes(label)
                  ? current.filter((item) => item !== label)
                  : [...current, label],
              );
            }}
            className={cn(
              "overflow-hidden rounded-2xl border bg-white text-left",
              selected.includes(label)
                ? "border-[#5146CC] ring-2 ring-[#CBC6FF]"
                : "border-[#DDD8E6]",
            )}
          >
            <Image
              src={`/images/academy/courses/computer-internet-essentials/v2/${file}`}
              alt={`${label}: ${purpose}`}
              width={720}
              height={540}
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="block border-t border-[#E3DFEA] p-3">
              <strong className="block">{label}</strong>
              <span className="mt-1 block text-sm leading-snug text-[#696675]">
                {purpose}
              </span>
            </span>
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setChecked(true)}
        className="mt-5 min-h-12 rounded-xl bg-[#242036] px-5 font-bold text-white"
      >
        Check this setup
      </button>
      {checked && (
        <div
          role="status"
          className={cn(
            "mt-4 rounded-xl p-4 text-sm leading-relaxed",
            valid
              ? "bg-[#EDF9F4] text-[#126E4E]"
              : "bg-[#FFF8E8] text-[#7F4C08]",
          )}
        >
          {valid ? (
            <>
              <strong>Good decision. </strong>A headset solves the named
              private-audio need. A webcam is optional only if the built-in
              camera fails the test. The other items solve no stated need here.
            </>
          ) : (
            <>
              <strong>Revise the setup. </strong>Choose a headset for private
              listening and speaking. Do not add equipment merely because it is
              available. A webcam is optional, not required.
            </>
          )}
        </div>
      )}
      {checked && valid && (
        <Success>
          The setup solves the need without unnecessary equipment.
        </Success>
      )}
      <p className="mt-4 text-sm text-[#696675]">
        Optional choices accepted in this scenario: {optional.join(", ")}.
      </p>
    </Shell>
  );
}
