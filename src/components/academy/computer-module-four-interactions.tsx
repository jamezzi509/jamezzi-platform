"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import type { ComputerLessonInteraction } from "@/content/computer-course-v2";
import type { PreferredPlatform } from "@/lib/use-computer-platform";
import { cn } from "@/lib/cn";

type ModuleFourKind = Extract<
  ComputerLessonInteraction["kind"],
  | "power-decision-simulator"
  | "pointer-control-circuit"
  | "keyboard-key-trainer"
  | "text-editing-workbench"
  | "shortcut-key-trainer"
  | "accessibility-simulator"
>;

export function ComputerModuleFourInteraction({
  interaction,
  platform,
  onComplete,
}: {
  interaction: ComputerLessonInteraction;
  platform: PreferredPlatform | null;
  onComplete: () => void;
}) {
  const kind = interaction.kind as ModuleFourKind;
  if (kind === "power-decision-simulator")
    return <PowerDecision onComplete={onComplete} />;
  if (kind === "pointer-control-circuit")
    return <PointerCircuit onComplete={onComplete} />;
  if (kind === "keyboard-key-trainer")
    return <KeyboardTrainer onComplete={onComplete} />;
  if (kind === "text-editing-workbench")
    return <EditingWorkbench onComplete={onComplete} />;
  if (kind === "shortcut-key-trainer")
    return <ShortcutTrainer platform={platform} onComplete={onComplete} />;
  return <AccessibilitySimulator onComplete={onComplete} />;
}

function Shell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12 overflow-hidden rounded-[28px] border border-[#DCD7E8] bg-white shadow-[0_20px_60px_rgba(49,42,84,0.10)]">
      <header className="bg-[#272139] px-6 py-7 text-white sm:px-8">
        <p className="text-xs font-bold tracking-[0.14em] text-[#B9B1FF] uppercase">
          {eyebrow}
        </p>
        <h2 className="font-display mt-2 text-3xl leading-tight">{title}</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-[#E5E1F0]">{intro}</p>
      </header>
      <div className="p-6 sm:p-8">{children}</div>
    </section>
  );
}

function Success({ children }: { children: ReactNode }) {
  return (
    <p
      role="status"
      className="mt-5 rounded-2xl bg-[#EAF8EF] p-4 font-semibold text-[#17633A]"
    >
      ✓ {children}
    </p>
  );
}

const powerScenarios = [
  ["You are leaving for a 20-minute break.", "Sleep"],
  ["An app acts strangely, but the computer still responds.", "Restart"],
  ["You finished for the day and saved your work.", "Shut down"],
  ["The screen is dark, but you do not know why.", "Pause and check"],
] as const;

function PowerDecision({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState("Choose the safest action.");
  const done = step === powerScenarios.length;
  const choose = (choice: string) => {
    const answer = powerScenarios[step]?.[1];
    if (choice !== answer) {
      setMessage(
        answer === "Pause and check"
          ? "A dark screen does not prove the computer is frozen. Check power, brightness, and wake it first."
          : `Not this time. Save first, then choose ${answer}.`,
      );
      return;
    }
    const next = step + 1;
    setStep(next);
    setMessage("Correct—read the situation before touching a power control.");
    if (next === powerScenarios.length) onComplete();
  };
  return (
    <Shell
      eyebrow="Try it safely"
      title="Power decision simulator"
      intro="Nothing here changes your real computer. Read each situation and choose the action you would use."
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-[#5146CC]">
          Situation {Math.min(step + 1, 4)} of 4
        </p>
        <p className="text-sm text-[#6C6675]">Save → choose → verify</p>
      </div>
      {done ? (
        <Success>
          You completed every power decision without using a forced power-off.
        </Success>
      ) : (
        <>
          <p className="mt-5 rounded-2xl bg-[#F4F1FF] p-6 text-xl font-semibold text-[#282334]">
            {powerScenarios[step][0]}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {["Sleep", "Restart", "Shut down", "Pause and check"].map(
              (choice) => (
                <button
                  key={choice}
                  onClick={() => choose(choice)}
                  className="min-h-14 rounded-xl border border-[#D8D2E6] bg-white px-4 font-semibold hover:border-[#5146CC] focus:outline-3 focus:outline-[#5146CC]"
                >
                  {choice}
                </button>
              ),
            )}
          </div>
          <p role="status" className="mt-4 text-sm text-[#635D6C]">
            {message}
          </p>
        </>
      )}
    </Shell>
  );
}

const pointerTasks = [
  "single",
  "double",
  "secondary",
  "scroll",
  "drag",
  "undo",
] as const;
function PointerCircuit({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [moved, setMoved] = useState(false);
  const [message, setMessage] = useState("Start with one deliberate click.");
  const task = pointerTasks[index];
  const advance = (action: (typeof pointerTasks)[number]) => {
    if (action !== task) {
      setMessage(`That was ${action}. The named action is ${task}.`);
      return;
    }
    if (action === "drag") setMoved(true);
    if (action === "undo") setMoved(false);
    const next = index + 1;
    setIndex(next);
    setMessage("Good. The visible result confirms the action.");
    if (next === pointerTasks.length) onComplete();
  };
  return (
    <Shell
      eyebrow="Hands-on practice"
      title="Pointer-control circuit"
      intro="Perform the named action once. The activity tells single-click, double-click, and secondary-click apart."
    >
      {index === pointerTasks.length ? (
        <Success>
          You selected, opened, inspected, scrolled, moved, and undid with
          control.
        </Success>
      ) : (
        <>
          <p className="text-lg font-bold">
            Current action:{" "}
            <span className="text-[#5146CC]">
              {task === "secondary" ? "secondary-click / right-click" : task}
            </span>
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => advance("single")}
              onDoubleClick={() => advance("double")}
              onContextMenu={(event) => {
                event.preventDefault();
                advance("secondary");
              }}
              className="h-36 rounded-2xl border-2 border-dashed border-[#8378E8] bg-[#F2F0FF] text-lg font-bold"
            >
              Action target
            </button>
            <div
              onScroll={(event) => {
                if (task === "scroll" && event.currentTarget.scrollTop > 80)
                  advance("scroll");
              }}
              className="h-36 overflow-y-auto rounded-2xl border border-[#D9D4E4] bg-[#FAF9FC] p-5"
              tabIndex={0}
            >
              <p className="font-semibold">Scroll this panel</p>
              <div className="h-28" />
              <p className="rounded-lg bg-[#EAF8EF] p-3 font-bold">
                Marked stopping point
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {(["single", "double", "secondary", "scroll"] as const).map(
              (action) => (
                <button
                  key={action}
                  onClick={() => advance(action)}
                  className="rounded-xl border border-[#D5D0DF] px-4 py-3 text-sm font-semibold"
                >
                  {action === "secondary"
                    ? "Secondary-click alternative"
                    : `${action[0].toUpperCase()}${action.slice(1)} alternative`}
                </button>
              ),
            )}
            <button
              onClick={() => advance("drag")}
              className={cn(
                "rounded-xl px-5 py-3 font-semibold",
                moved ? "bg-[#E9E7EF]" : "bg-[#5146CC] text-white",
              )}
            >
              {moved ? "Tile moved" : "Move practice tile"}
            </button>
            <button
              onClick={() => advance("undo")}
              disabled={!moved}
              className="rounded-xl border border-[#D5D0DF] px-5 py-3 font-semibold disabled:opacity-40"
            >
              Undo move
            </button>
            <span role="status" className="text-sm text-[#655F6E]">
              {message}
            </span>
          </div>
        </>
      )}
    </Shell>
  );
}

const requiredKeys = [
  "Shift",
  "CapsLock",
  "Backspace",
  "Enter",
  "Tab",
  "ArrowLeft",
];
function KeyboardTrainer({ onComplete }: { onComplete: () => void }) {
  const [keys, setKeys] = useState<string[]>([]);
  const [text, setText] = useState("");
  const complete =
    requiredKeys.every((key) => keys.includes(key)) &&
    /[èò]/i.test(text) &&
    /[éàçù]/i.test(text);
  const record = (key: string) =>
    setKeys((current) => (current.includes(key) ? current : [...current, key]));
  const keyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (["Tab", "ArrowLeft"].includes(event.key)) event.preventDefault();
    record(event.key);
  };
  useEffect(() => {
    if (complete) onComplete();
  }, [complete, onComplete]);
  return (
    <Shell
      eyebrow="Key laboratory"
      title="Press it—do not just memorize it"
      intro="Use your physical keyboard in the outlined area. On a phone or tablet, the on-screen key bank provides an equivalent practice route."
    >
      <div
        tabIndex={0}
        onKeyDown={keyDown}
        className="rounded-2xl border-2 border-dashed border-[#7569E5] bg-[#F5F3FF] p-6 focus:bg-white focus:outline-3 focus:outline-[#5146CC]"
      >
        <p className="font-bold">
          Click or tap here, then press each named key.
        </p>
        <p className="mt-2 text-sm text-[#625C6C]">
          The activity reads only the key name—not passwords or text typed
          elsewhere.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {requiredKeys.map((key) => (
          <button
            key={key}
            onClick={() => record(key)}
            className={cn(
              "rounded-lg border px-3 py-2 font-mono text-sm",
              keys.includes(key)
                ? "border-[#4A9B68] bg-[#EAF8EF]"
                : "border-[#D8D3E2] bg-white",
            )}
          >
            {key === "ArrowLeft" ? "← Arrow" : key}
          </button>
        ))}
      </div>
      <label className="mt-6 block font-bold" htmlFor="multilingual-practice">
        Type a short line containing Haitian Creole è or ò and French é, à, ù,
        or ç.
      </label>
      <input
        id="multilingual-practice"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Example: Mèsi — français"
        className="mt-2 w-full rounded-xl border border-[#CBC5D8] px-4 py-3 text-lg"
      />
      {complete ? (
        <Success>
          You used the editing/navigation keys and produced characters from both
          language needs.
        </Success>
      ) : (
        <p className="mt-3 text-sm text-[#665F70]">
          Keys found: {keys.length}/6 · Creole character:{" "}
          {/[èò]/i.test(text) ? "yes" : "not yet"} · French character:{" "}
          {/[éàçù]/i.test(text) ? "yes" : "not yet"}
        </p>
      )}
    </Shell>
  );
}

function EditingWorkbench({ onComplete }: { onComplete: () => void }) {
  const original =
    "The student saved the document. The student checked the result.";
  const [text, setText] = useState(original);
  const [clipboard, setClipboard] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [done, setDone] = useState<string[]>([]);
  const area = useRef<HTMLTextAreaElement>(null);
  const mark = (name: string) =>
    setDone((d) => (d.includes(name) ? d : [...d, name]));
  const selection = () => {
    const el = area.current;
    return el ? text.slice(el.selectionStart, el.selectionEnd) : "";
  };
  const replaceSelection = (value: string) => {
    const el = area.current;
    if (!el) return;
    setHistory((h) => [...h, text]);
    setText(
      text.slice(0, el.selectionStart) + value + text.slice(el.selectionEnd),
    );
  };
  const copy = () => {
    const value = selection();
    if (value) {
      setClipboard(value);
      mark("copy");
    }
  };
  const cut = () => {
    const value = selection();
    if (value) {
      setClipboard(value);
      replaceSelection("");
      mark("cut");
    }
  };
  const paste = () => {
    if (clipboard) {
      replaceSelection(clipboard);
      mark("paste");
    }
  };
  const undo = () => {
    const previous = history.at(-1);
    if (previous !== undefined) {
      setText(previous);
      setHistory((h) => h.slice(0, -1));
      mark("undo");
    }
  };
  const complete = ["copy", "cut", "paste", "undo"].every((x) =>
    done.includes(x),
  );
  useEffect(() => {
    if (complete) onComplete();
  }, [complete, onComplete]);
  return (
    <Shell
      eyebrow="Functional workbench"
      title="Select, change, verify, recover"
      intro="This editor has its own private practice clipboard. Select some text first, then watch what each action changes."
    >
      <textarea
        ref={area}
        value={text}
        onChange={(e) => {
          setHistory((h) => [...h, text]);
          setText(e.target.value);
        }}
        rows={5}
        className="w-full rounded-2xl border border-[#CFC9DA] p-4 text-lg leading-relaxed"
      />
      <div className="mt-3 flex flex-wrap gap-2">
        <EditingButton label="Copy" onClick={copy} />
        <EditingButton label="Cut" onClick={cut} />
        <EditingButton label="Paste" onClick={paste} />
        <EditingButton label="Undo" onClick={undo} />
      </div>
      <p className="mt-3 text-sm text-[#655F6E]">
        Practice clipboard:{" "}
        {clipboard || "empty—select text and choose Copy or Cut"}
      </p>
      {complete ? (
        <Success>
          You used Copy, Cut, Paste, and Undo and verified the visible text
          after each action.
        </Success>
      ) : (
        <p className="mt-3 font-semibold text-[#5146CC]">
          Completed: {done.length}/4 actions
        </p>
      )}
    </Shell>
  );
}

function EditingButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl border border-[#D4CEDF] bg-white px-4 py-2 font-semibold hover:border-[#5146CC]"
    >
      {label}
    </button>
  );
}

const shortcutActions = [
  "Copy",
  "Paste",
  "Cut",
  "Undo",
  "Select all",
  "Save",
  "Find",
];
function ShortcutTrainer({
  platform,
  onComplete,
}: {
  platform: PreferredPlatform | null;
  onComplete: () => void;
}) {
  const [done, setDone] = useState<string[]>([]);
  const modifier = platform === "mac" ? "Command" : "Control";
  const letterMap: Record<string, string> = {
    c: "Copy",
    v: "Paste",
    x: "Cut",
    z: "Undo",
    a: "Select all",
    s: "Save",
    f: "Find",
  };
  const mark = (action: string) =>
    setDone((d) => (d.includes(action) ? d : [...d, action]));
  const keyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const held = platform === "mac" ? event.metaKey : event.ctrlKey;
    const action = letterMap[event.key.toLowerCase()];
    if (held && action) {
      event.preventDefault();
      mark(action);
    }
  };
  const complete = done.length === shortcutActions.length;
  useEffect(() => {
    if (complete) onComplete();
  }, [complete, onComplete]);
  return (
    <Shell
      eyebrow="Shortcut trainer"
      title={`${modifier} is your shortcut key`}
      intro="Focus the practice surface and press each combination. The activity blocks the browser action only while you practice here."
    >
      <div
        tabIndex={0}
        onKeyDown={keyDown}
        className="rounded-2xl border-2 border-dashed border-[#7569E5] bg-[#F5F3FF] p-6 text-center focus:outline-3 focus:outline-[#5146CC]"
      >
        <strong>Focus here, then press the combinations below.</strong>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {shortcutActions.map((action) => {
          const letter = Object.entries(letterMap)
            .find(([, value]) => value === action)?.[0]
            .toUpperCase();
          return (
            <button
              key={action}
              onClick={() => mark(action)}
              className={cn(
                "flex items-center justify-between rounded-xl border px-4 py-3 text-left",
                done.includes(action)
                  ? "border-[#4A9B68] bg-[#EAF8EF]"
                  : "border-[#D6D0E1]",
              )}
            >
              <span>{action}</span>
              <kbd className="rounded bg-[#282334] px-2 py-1 text-xs text-white">
                {modifier} + {letter}
              </kbd>
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-[#625C6B]">
        On-screen buttons are the menu/touch fallback. On a keyboard, use the
        actual combination.
      </p>
      {complete && (
        <Success>
          You practiced all seven core shortcuts and know their named actions.
        </Success>
      )}
    </Shell>
  );
}

function AccessibilitySimulator({ onComplete }: { onComplete: () => void }) {
  const [textSize, setTextSize] = useState(18);
  const [pointer, setPointer] = useState(20);
  const [contrast, setContrast] = useState(false);
  const [captions, setCaptions] = useState(false);
  const [motion, setMotion] = useState(false);
  const [changed, setChanged] = useState(false);
  const restored =
    textSize === 18 && pointer === 20 && !contrast && !captions && !motion;
  const update = (fn: () => void) => {
    setChanged(true);
    fn();
  };
  useEffect(() => {
    if (changed && restored) onComplete();
  }, [changed, restored, onComplete]);
  return (
    <Shell
      eyebrow="Reversible settings lab"
      title="Change it, test it, restore it"
      intro="These controls affect only this lesson preview. Explore what helps, then restore the starting view to prove you can recover."
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border p-6",
          contrast
            ? "border-yellow-300 bg-black text-white"
            : "border-[#D7D1E1] bg-[#F8F7FB]",
        )}
      >
        <span
          aria-hidden
          className="absolute top-5 right-6 rounded-full bg-[#5146CC]"
          style={{ width: pointer, height: pointer }}
        />
        <p style={{ fontSize: textSize }} className="max-w-2xl leading-relaxed">
          A readable computer should fit the person using it. Larger text is not
          cheating, captions are not only for quiet rooms, and reduced motion
          can make movement easier to follow.
        </p>
        {captions && (
          <p className="mt-4 rounded-lg bg-yellow-200 p-2 text-sm font-bold text-black">
            [Caption] A notification sound plays.
          </p>
        )}
        <div
          className={cn(
            "mt-4 h-2 w-28 rounded-full bg-[#5146CC]",
            !motion && "animate-pulse",
          )}
        />
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label>
          Text size: {textSize}px
          <input
            className="block w-full"
            type="range"
            min="16"
            max="28"
            value={textSize}
            onChange={(e) => update(() => setTextSize(Number(e.target.value)))}
          />
        </label>
        <label>
          Pointer size: {pointer}px
          <input
            className="block w-full"
            type="range"
            min="16"
            max="40"
            value={pointer}
            onChange={(e) => update(() => setPointer(Number(e.target.value)))}
          />
        </label>
        {[
          ["High contrast", contrast, setContrast],
          ["Captions", captions, setCaptions],
          ["Reduce motion", motion, setMotion],
        ].map(([label, value, setter]) => (
          <label
            key={label as string}
            className="flex items-center gap-3 rounded-xl border border-[#D7D1E1] p-3"
          >
            <input
              type="checkbox"
              checked={value as boolean}
              onChange={(e) =>
                update(() => (setter as (v: boolean) => void)(e.target.checked))
              }
            />
            {label as string}
          </label>
        ))}
      </div>
      <button
        onClick={() => {
          setTextSize(18);
          setPointer(20);
          setContrast(false);
          setCaptions(false);
          setMotion(false);
        }}
        className="mt-5 rounded-xl bg-[#5146CC] px-5 py-3 font-bold text-white"
      >
        Restore starting view
      </button>
      {changed && restored ? (
        <Success>
          You changed the view, tested the result, and restored it safely.
        </Success>
      ) : (
        <p className="mt-3 text-sm text-[#655F6E]">
          Change at least one control, observe the preview, then restore the
          starting view.
        </p>
      )}
    </Shell>
  );
}
