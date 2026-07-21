"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface OpenWindow {
  id: string;
  appId: string;
  title: string;
  x: number;
  y: number;
  minimized: boolean;
}

interface AppDef {
  id: string;
  label: string;
  icon: string;
  render: (props: { onClose: () => void }) => React.ReactNode;
}

function CalculatorApp() {
  const [display, setDisplay] = useState("0");
  const [pending, setPending] = useState<{ value: number; op: string } | null>(null);

  function pressDigit(d: string) {
    setDisplay((prev) => (prev === "0" ? d : prev + d));
  }

  function pressOp(op: string) {
    setPending({ value: Number(display), op });
    setDisplay("0");
  }

  function pressEquals() {
    if (!pending) return;
    const current = Number(display);
    let result = current;
    if (pending.op === "+") result = pending.value + current;
    if (pending.op === "-") result = pending.value - current;
    if (pending.op === "×") result = pending.value * current;
    if (pending.op === "÷") result = current !== 0 ? pending.value / current : 0;
    setDisplay(String(result));
    setPending(null);
  }

  function pressClear() {
    setDisplay("0");
    setPending(null);
  }

  return (
    <div className="w-[220px] p-3">
      <div className="border-border mb-2 rounded-md border bg-[#FCFCFE] px-3 py-3 text-right font-mono text-[22px]">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {["7", "8", "9", "÷"].map((k) => (
          <CalcKey key={k} label={k} onClick={() => (k === "÷" ? pressOp(k) : pressDigit(k))} />
        ))}
        {["4", "5", "6", "×"].map((k) => (
          <CalcKey key={k} label={k} onClick={() => (k === "×" ? pressOp(k) : pressDigit(k))} />
        ))}
        {["1", "2", "3", "-"].map((k) => (
          <CalcKey key={k} label={k} onClick={() => (k === "-" ? pressOp(k) : pressDigit(k))} />
        ))}
        {["C", "0", "=", "+"].map((k) => (
          <CalcKey
            key={k}
            label={k}
            accent={k === "="}
            onClick={() => {
              if (k === "C") return pressClear();
              if (k === "=") return pressEquals();
              if (k === "+") return pressOp(k);
              return pressDigit(k);
            }}
          />
        ))}
      </div>
    </div>
  );
}

function CalcKey({
  label,
  onClick,
  accent,
}: {
  label: string;
  onClick: () => void;
  accent?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-10 rounded-md text-[14px] font-semibold transition",
        accent
          ? "bg-indigo text-white"
          : "border-border border bg-white hover:bg-[#FCFCFE]",
      )}
    >
      {label}
    </button>
  );
}

function NotepadApp() {
  const [text, setText] = useState("");
  return (
    <div className="w-[280px] p-2.5">
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Tape yon bagay isit la..."
        rows={7}
        className="border-border w-full resize-none rounded-md border bg-white p-2.5 text-[13.5px] outline-none"
      />
    </div>
  );
}

function SettingsApp() {
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);
  const [brightness, setBrightness] = useState(70);
  return (
    <div className="w-[260px] p-3.5">
      <SettingRow label="Wi-Fi" value={wifi} onChange={setWifi} />
      <SettingRow label="Bluetooth" value={bluetooth} onChange={setBluetooth} />
      <div className="mt-3">
        <p className="text-ink mb-1.5 text-[12.5px] font-semibold">Klète Ekran</p>
        <input
          type="range"
          min={0}
          max={100}
          value={brightness}
          onChange={(event) => setBrightness(Number(event.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}

function SettingRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <div className="border-border flex items-center justify-between border-b py-2.5 text-[13px]">
      <span className="text-ink">{label}</span>
      <button
        type="button"
        onClick={() => onChange(!value)}
        aria-pressed={value}
        className={cn(
          "relative h-5.5 w-10 rounded-full transition",
          value ? "bg-indigo" : "bg-border",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 size-4.5 rounded-full bg-white transition",
            value ? "left-5" : "left-0.5",
          )}
        />
      </button>
    </div>
  );
}

const apps: AppDef[] = [
  { id: "calculator", label: "Calculator", icon: "🧮", render: () => <CalculatorApp /> },
  { id: "notepad", label: "Notepad", icon: "📝", render: () => <NotepadApp /> },
  { id: "settings", label: "Settings", icon: "⚙️", render: () => <SettingsApp /> },
];

const desktopIcons = [
  { id: "this-pc", label: "This PC", icon: "🖥️" },
  { id: "recycle-bin", label: "Recycle Bin", icon: "🗑️" },
];

export function WindowsDesktopSimulator() {
  const [startOpen, setStartOpen] = useState(false);
  const [windows, setWindows] = useState<OpenWindow[]>([]);
  const [zOrder, setZOrder] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const dragState = useRef<{ id: string; offsetX: number; offsetY: number } | null>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const nextWindowId = useRef(0);

  function bringToFront(id: string) {
    setZOrder((prev) => [...prev.filter((w) => w !== id), id]);
  }

  function openApp(appId: string, title: string) {
    const existing = windows.find((w) => w.appId === appId);
    if (existing) {
      setWindows((prev) =>
        prev.map((w) => (w.id === existing.id ? { ...w, minimized: false } : w)),
      );
      bringToFront(existing.id);
    } else {
      nextWindowId.current += 1;
      const id = `${appId}-${nextWindowId.current}`;
      setWindows((prev) => [
        ...prev,
        { id, appId, title, x: 40 + prev.length * 24, y: 24 + prev.length * 20, minimized: false },
      ]);
      bringToFront(id);
    }
    setStartOpen(false);
    setSearch("");
  }

  function closeWindow(id: string) {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    setZOrder((prev) => prev.filter((w) => w !== id));
  }

  function toggleMinimize(id: string) {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w)),
    );
    bringToFront(id);
  }

  function startDrag(id: string, event: React.MouseEvent) {
    const win = windows.find((w) => w.id === id);
    if (!win) return;
    dragState.current = { id, offsetX: event.clientX - win.x, offsetY: event.clientY - win.y };
    bringToFront(id);
  }

  function onMouseMove(event: React.MouseEvent) {
    if (!dragState.current) return;
    const { id, offsetX, offsetY } = dragState.current;
    const bounds = surfaceRef.current?.getBoundingClientRect();
    let x = event.clientX - offsetX;
    let y = event.clientY - offsetY;
    if (bounds) {
      x = Math.max(0, Math.min(x, bounds.width - 160));
      y = Math.max(0, Math.min(y, bounds.height - 140));
    }
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)));
  }

  function stopDrag() {
    dragState.current = null;
  }

  const filteredApps = search
    ? apps.filter((a) => a.label.toLowerCase().includes(search.toLowerCase()))
    : apps;

  return (
    <div
      ref={surfaceRef}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] border border-[#0e1638] select-none"
      style={{
        background: "linear-gradient(160deg, #1d2a5e 0%, #0e1638 100%)",
      }}
    >
      <div className="absolute top-4 left-4 grid gap-3">
        {desktopIcons.map((icon) => (
          <button
            key={icon.id}
            type="button"
            className="flex w-16 flex-col items-center gap-1 rounded-md p-1.5 text-center hover:bg-white/10"
          >
            <span className="text-[26px]">{icon.icon}</span>
            <span className="text-[10.5px] text-white/90">{icon.label}</span>
          </button>
        ))}
      </div>

      {windows.map((win) => {
        if (win.minimized) return null;
        const app = apps.find((a) => a.id === win.appId);
        return (
          <div
            key={win.id}
            style={{ left: win.x, top: win.y, zIndex: 10 + zOrder.indexOf(win.id) }}
            className="border-border absolute overflow-hidden rounded-lg border bg-white shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            onMouseDown={() => bringToFront(win.id)}
          >
            <div
              onMouseDown={(event) => startDrag(win.id, event)}
              className="flex cursor-move items-center justify-between bg-[#f1f1f4] px-3 py-1.5"
            >
              <span className="text-ink text-[12.5px] font-semibold">{win.title}</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleMinimize(win.id);
                  }}
                  className="text-muted flex size-5 items-center justify-center rounded text-[13px] hover:bg-black/5"
                  aria-label="Minimize"
                >
                  &#8211;
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    closeWindow(win.id);
                  }}
                  className="text-error flex size-5 items-center justify-center rounded text-[13px] hover:bg-black/5"
                  aria-label="Close"
                >
                  &#10005;
                </button>
              </div>
            </div>
            <div>{app?.render({ onClose: () => closeWindow(win.id) })}</div>
          </div>
        );
      })}

      {startOpen && (
        <div className="absolute bottom-12 left-2 w-64 overflow-hidden rounded-xl border border-white/10 bg-[#1c2440]/95 p-3 shadow-2xl backdrop-blur-sm">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Tape non yon aplikasyon..."
            autoFocus
            className="mb-2.5 w-full rounded-md border border-white/15 bg-white/10 px-3 py-2 text-[13px] text-white placeholder:text-white/50 outline-none"
          />
          <div className="grid gap-1">
            {filteredApps.map((app) => (
              <button
                key={app.id}
                type="button"
                onClick={() => openApp(app.id, app.label)}
                className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[13px] text-white hover:bg-white/10"
              >
                <span className="text-[17px]">{app.icon}</span>
                {app.label}
              </button>
            ))}
            {filteredApps.length === 0 && (
              <p className="px-2.5 py-2 text-[12.5px] text-white/60">Pa gen rezilta.</p>
            )}
          </div>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center gap-2 bg-[#111428]/90 px-2 backdrop-blur-sm">
        <button
          type="button"
          onClick={() => setStartOpen((prev) => !prev)}
          className={cn(
            "flex h-7 items-center gap-1.5 rounded px-2.5 text-[12.5px] font-semibold text-white transition",
            startOpen ? "bg-white/20" : "hover:bg-white/10",
          )}
        >
          <span aria-hidden="true">⊞</span> Start
        </button>
        <div className="flex items-center gap-1">
          {windows.map((win) => (
            <button
              key={win.id}
              type="button"
              onClick={() => toggleMinimize(win.id)}
              className={cn(
                "h-7 rounded px-2.5 text-[12px] text-white/90 transition",
                !win.minimized ? "bg-white/15" : "hover:bg-white/10",
              )}
            >
              {win.title}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2.5 pr-2 text-[11.5px] text-white/80">
          <span aria-hidden="true">📶</span>
          <span aria-hidden="true">🔊</span>
          <span>2:14 PM</span>
        </div>
      </div>
    </div>
  );
}
