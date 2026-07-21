"use client";

import { useEffect, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import type { ComputerLessonInteraction } from "@/content/computer-course-v2";
import type { PreferredPlatform } from "@/lib/use-computer-platform";
import { cn } from "@/lib/cn";

type Kind = Extract<
  ComputerLessonInteraction["kind"],
  | "desktop-identifier"
  | "window-control-simulator"
  | "taskbar-dock-lab"
  | "app-switcher-lab"
  | "interface-control-lab"
  | "window-arrangement-lab"
  | "notification-triage"
  | "missing-window-recovery"
>;

export function ComputerModuleFiveInteraction({
  interaction,
  platform,
  onComplete,
}: {
  interaction: ComputerLessonInteraction;
  platform: PreferredPlatform | null;
  onComplete: () => void;
}) {
  const kind = interaction.kind as Kind;
  if (kind === "desktop-identifier")
    return <DesktopIdentifier onComplete={onComplete} />;
  if (kind === "window-control-simulator")
    return <WindowSimulator onComplete={onComplete} />;
  if (kind === "taskbar-dock-lab")
    return <TaskbarDockLab onComplete={onComplete} />;
  if (kind === "app-switcher-lab")
    return <AppSwitcher platform={platform} onComplete={onComplete} />;
  if (kind === "interface-control-lab")
    return <ControlLab onComplete={onComplete} />;
  if (kind === "window-arrangement-lab")
    return <ArrangementLab onComplete={onComplete} />;
  if (kind === "notification-triage")
    return <NotificationLab onComplete={onComplete} />;
  return <RecoveryLab onComplete={onComplete} />;
}

function Shell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12 overflow-hidden rounded-[28px] border border-[#DCD7E8] bg-white shadow-[0_20px_60px_rgba(49,42,84,.1)]">
      <header className="bg-[#272139] px-6 py-7 text-white sm:px-8">
        <p className="text-xs font-bold tracking-[.14em] text-[#B9B1FF] uppercase">
          Interactive practice
        </p>
        <h2 className="font-display mt-2 text-3xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-[#E5E1F0]">{intro}</p>
      </header>
      <div className="p-6 sm:p-8">{children}</div>
    </section>
  );
}
function Success({ children }: { children: ReactNode }) {
  return (
    <p
      role="status"
      className="mt-5 rounded-xl bg-[#EAF8EF] p-4 font-bold text-[#17633A]"
    >
      ✓ {children}
    </p>
  );
}

const desktopQuestions = [
  [
    "Which part is the background workspace behind windows?",
    "Desktop",
    ["Desktop", "Taskbar", "Pointer"],
  ],
  [
    "Which Windows strip launches and switches applications?",
    "Taskbar",
    ["Wallpaper", "Taskbar", "Title bar"],
  ],
  [
    "Which macOS strip normally sits along the screen edge with app icons?",
    "Dock",
    ["Dock", "Menu", "Dialog"],
  ],
  [
    "Which macOS area changes menus with the active application?",
    "Menu bar",
    ["Taskbar", "Menu bar", "Wallpaper"],
  ],
] as const;
function ChoiceSequence({
  title,
  intro,
  questions,
  onComplete,
}: {
  title: string;
  intro: string;
  questions: readonly (readonly [string, string, readonly string[]])[];
  onComplete: () => void;
}) {
  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState(
    "Read the prompt, then choose once.",
  );
  const done = step === questions.length;
  const choose = (answer: string) => {
    if (answer !== questions[step][1]) {
      setFeedback(
        "Not yet. Use the name and visible function, then try again.",
      );
      return;
    }
    const next = step + 1;
    setStep(next);
    setFeedback("Correct. The visible state matches the named function.");
    if (next === questions.length) onComplete();
  };
  return (
    <Shell title={title} intro={intro}>
      {done ? (
        <Success>You completed every decision and verified the result.</Success>
      ) : (
        <>
          <p className="text-sm font-bold text-[#5146CC]">
            Step {step + 1} of {questions.length}
          </p>
          <p className="mt-4 rounded-2xl bg-[#F3F1FA] p-6 text-xl font-semibold">
            {questions[step][0]}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {questions[step][2].map((x) => (
              <button
                key={x}
                onClick={() => choose(x)}
                className="min-h-14 rounded-xl border border-[#D5D0E0] px-4 font-bold hover:border-[#5146CC]"
              >
                {x}
              </button>
            ))}
          </div>
          <p role="status" className="mt-3 text-sm text-[#655F6D]">
            {feedback}
          </p>
        </>
      )}
    </Shell>
  );
}
function DesktopIdentifier({ onComplete }: { onComplete: () => void }) {
  return (
    <ChoiceSequence
      title="Desktop identification board"
      intro="Identify each major part by its job. Wallpaper and color are deliberately ignored."
      questions={desktopQuestions}
      onComplete={onComplete}
    />
  );
}

function WindowSimulator({ onComplete }: { onComplete: () => void }) {
  const [state, setState] = useState<
    "normal" | "minimized" | "maximized" | "closed"
  >("normal");
  const [seen, setSeen] = useState<string[]>([]);
  const act = (next: typeof state, label: string) => {
    setState(next);
    setSeen((s) => (s.includes(label) ? s : [...s, label]));
  };
  const done = ["minimize", "return", "maximize", "restore", "close"].every(
    (x) => seen.includes(x),
  );
  useEffect(() => {
    if (done) onComplete();
  }, [done, onComplete]);
  return (
    <Shell
      title="Window-control simulator"
      intro="Use each control, observe what changes, and return the practice window before continuing."
    >
      <div className="rounded-2xl bg-[#ECEAF2] p-5">
        {state === "minimized" ? (
          <button
            onClick={() => act("normal", "return")}
            className="rounded-xl bg-[#5146CC] px-5 py-3 font-bold text-white"
          >
            Return to Practice notes
          </button>
        ) : state === "closed" ? (
          <p className="rounded-xl bg-white p-5">
            The window closed. The practice document was not deleted.
          </p>
        ) : (
          <div
            className={cn(
              "overflow-hidden rounded-xl border bg-white transition-all",
              state === "maximized" ? "min-h-72" : "mx-auto max-w-xl",
            )}
          >
            <div className="flex justify-between border-b p-3">
              <strong>Practice notes</strong>
              <span className="flex gap-2">
                <button
                  aria-label="Minimize"
                  onClick={() => act("minimized", "minimize")}
                >
                  —
                </button>
                <button
                  aria-label={state === "maximized" ? "Restore" : "Maximize"}
                  onClick={() =>
                    act(
                      state === "maximized" ? "normal" : "maximized",
                      state === "maximized" ? "restore" : "maximize",
                    )
                  }
                >
                  □
                </button>
                <button
                  aria-label="Close"
                  onClick={() => act("closed", "close")}
                >
                  ×
                </button>
              </span>
            </div>
            <p className="p-6">
              Observe the window before and after every action.
            </p>
          </div>
        )}
      </div>
      <p className="mt-4 font-semibold text-[#5146CC]">
        Verified actions: {seen.length}/5
      </p>
      {done && (
        <Success>
          You minimized, returned, enlarged, restored, and closed deliberately.
        </Success>
      )}
    </Shell>
  );
}

function TaskbarDockLab({ onComplete }: { onComplete: () => void }) {
  const q = [
    [
      "The icon stays visible, but the app is not running.",
      "Pinned",
      ["Pinned", "Open", "Active"],
    ],
    [
      "The app is running behind another window.",
      "Open",
      ["Pinned", "Open", "Active"],
    ],
    [
      "The app currently receives keyboard commands.",
      "Active",
      ["Pinned", "Open", "Active"],
    ],
    [
      "The app is already open. How should you return?",
      "Select its existing indicator",
      ["Install it again", "Select its existing indicator", "Click repeatedly"],
    ],
  ] as const;
  return (
    <ChoiceSequence
      title="Taskbar and Dock state lab"
      intro="Read pinned, open, and active as different states."
      questions={q}
      onComplete={onComplete}
    />
  );
}

function AppSwitcher({
  platform,
  onComplete,
}: {
  platform: PreferredPlatform | null;
  onComplete: () => void;
}) {
  const [active, setActive] = useState("Notes");
  const [visited, setVisited] = useState(["Notes"]);
  const mod = platform === "mac" ? "Command" : "Alt";
  const switchTo = (name: string) => {
    setActive(name);
    setVisited((v) => (v.includes(name) ? v : [...v, name]));
  };
  const key = (e: KeyboardEvent<HTMLDivElement>) => {
    const held = platform === "mac" ? e.metaKey : e.altKey;
    if (held && e.key === "Tab") {
      e.preventDefault();
      switchTo(
        active === "Notes"
          ? "Browser"
          : active === "Browser"
            ? "Files"
            : "Notes",
      );
    }
  };
  const done = visited.length === 3;
  useEffect(() => {
    if (done) onComplete();
  }, [done, onComplete]);
  return (
    <Shell
      title="Application switching circuit"
      intro={`Use visible app buttons and the ${mod}+Tab combination inside the focused practice surface.`}
    >
      <div
        tabIndex={0}
        onKeyDown={key}
        className="rounded-2xl border-2 border-dashed border-[#766BE1] bg-[#F5F3FF] p-6 focus:outline-3 focus:outline-[#5146CC]"
      >
        <p className="font-bold">
          Active application: <span className="text-[#5146CC]">{active}</span>
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {["Notes", "Browser", "Files"].map((x) => (
            <button
              key={x}
              onClick={() => switchTo(x)}
              className={cn(
                "rounded-xl px-5 py-3 font-bold",
                active === x ? "bg-[#5146CC] text-white" : "bg-white",
              )}
            >
              {x}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm">
          Focus this area and press <kbd>{mod} + Tab</kbd>, or use the visible
          buttons as the touch alternative.
        </p>
      </div>
      {done && (
        <Success>
          You activated all three running applications without reopening them.
        </Success>
      )}
    </Shell>
  );
}

function ControlLab({ onComplete }: { onComplete: () => void }) {
  const [checks, setChecks] = useState<string[]>([]);
  const [radio, setRadio] = useState("");
  const [slider, setSlider] = useState(0);
  const [wrong, setWrong] = useState(true);
  const done =
    checks.length === 2 && radio === "Comfort" && slider > 50 && !wrong;
  useEffect(() => {
    if (done) onComplete();
  }, [done, onComplete]);
  return (
    <Shell
      title="Interface control laboratory"
      intro="Configure the requested settings: two independent options, one exclusive choice, a slider above halfway, and cancel the wrong dialog."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <fieldset className="rounded-xl border p-4">
          <legend className="font-bold">Independent options</legend>
          {["Captions", "Large pointer"].map((x) => (
            <label key={x} className="mt-2 block">
              <input
                type="checkbox"
                checked={checks.includes(x)}
                onChange={() =>
                  setChecks((c) =>
                    c.includes(x) ? c.filter((v) => v !== x) : [...c, x],
                  )
                }
              />{" "}
              {x}
            </label>
          ))}
        </fieldset>
        <fieldset className="rounded-xl border p-4">
          <legend className="font-bold">Choose one</legend>
          {["Standard", "Comfort"].map((x) => (
            <label key={x} className="mt-2 block">
              <input
                type="radio"
                name="mode"
                checked={radio === x}
                onChange={() => setRadio(x)}
              />{" "}
              {x}
            </label>
          ))}
        </fieldset>
        <label className="rounded-xl border p-4">
          Brightness
          <input
            aria-label="Brightness"
            type="range"
            value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
            className="block w-full"
          />
        </label>
        <div className="rounded-xl border p-4">
          <p>Wrong change waiting</p>
          <button
            onClick={() => setWrong(false)}
            className="mt-2 rounded-lg bg-[#5146CC] px-4 py-2 font-bold text-white"
          >
            Cancel change
          </button>
        </div>
      </div>
      {done && (
        <Success>
          You matched each choice to the correct control and cancelled the wrong
          change.
        </Success>
      )}
    </Shell>
  );
}

function ArrangementLab({ onComplete }: { onComplete: () => void }) {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const done = left && right && active === "Notes" && scrolled;
  useEffect(() => {
    if (done) onComplete();
  }, [done, onComplete]);
  return (
    <Shell
      title="Two-window workspace"
      intro="Place Reference on the left and Notes on the right, activate Notes, then scroll it."
    >
      <div className="grid min-h-60 grid-cols-2 gap-3 rounded-2xl bg-[#ECEAF2] p-4">
        <button
          onClick={() => {
            setLeft(true);
            setActive("Reference");
          }}
          className={cn(
            "rounded-xl border-2 bg-white p-5 text-left",
            left ? "col-start-1 border-blue-500" : "col-span-2",
          )}
        >
          <strong>Reference</strong>
          <span className="block text-sm">Move to left</span>
        </button>
        <button
          onClick={() => {
            setRight(true);
            setActive("Notes");
          }}
          onWheel={() => setScrolled(true)}
          className={cn(
            "rounded-xl border-2 bg-white p-5 text-left",
            right ? "col-start-2 border-purple-500" : "col-span-2",
            active === "Notes" && "ring-4 ring-purple-200",
          )}
        >
          <strong>Notes</strong>
          <span className="block text-sm">Move to right · scroll here</span>
        </button>
      </div>
      <button
        onClick={() => setScrolled(true)}
        className="mt-3 rounded-xl border px-4 py-2 font-semibold"
      >
        Scroll Notes alternative
      </button>
      {done && (
        <Success>
          Both windows are arranged and the intended window received the action.
        </Success>
      )}
    </Shell>
  );
}

const notices = [
  [
    "Backup completed.",
    "Dismiss",
    ["Dismiss", "Stop and verify", "Record error"],
  ],
  [
    "Allow microphone for an unknown game?",
    "Stop and verify",
    ["Allow", "Stop and verify", "Dismiss"],
  ],
  [
    "Document could not save: storage unavailable.",
    "Record error",
    ["Ignore", "Record error", "Restart immediately"],
  ],
  [
    "You won a prize—pay now!",
    "Stop and verify",
    ["Pay", "Stop and verify", "Share it"],
  ],
] as const;
function NotificationLab({ onComplete }: { onComplete: () => void }) {
  return (
    <ChoiceSequence
      title="Notification triage"
      intro="Classify the message before choosing whether to dismiss, record, or stop and verify."
      questions={notices}
      onComplete={onComplete}
    />
  );
}

const recovery = [
  [
    "The document was minimized.",
    "Taskbar or Dock",
    ["Create another", "Taskbar or Dock", "Force power off"],
  ],
  [
    "The app fills the screen and system controls are hidden.",
    "Exit full screen",
    ["Delete it", "Exit full screen", "Install again"],
  ],
  [
    "Another window covers the document.",
    "Switch or arrange windows",
    ["Switch or arrange windows", "Restart", "Open a duplicate"],
  ],
  [
    "A dialog behind the window is waiting.",
    "Bring the dialog forward",
    ["Force quit", "Bring the dialog forward", "Ignore forever"],
  ],
  [
    "A progress indicator is still changing.",
    "Wait and observe",
    ["Repeat commands", "Wait and observe", "Hold power"],
  ],
] as const;
function RecoveryLab({ onComplete }: { onComplete: () => void }) {
  return (
    <ChoiceSequence
      title="Find the missing window mission"
      intro="Use the least disruptive recovery that matches each visible state."
      questions={recovery}
      onComplete={onComplete}
    />
  );
}
