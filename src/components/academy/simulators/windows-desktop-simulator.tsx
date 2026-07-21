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
  tileClassName: string;
  icon: string;
  render: () => React.ReactNode;
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

function PaintApp() {
  const canvasColors = ["#1f2937", "#dc2626", "#2563eb", "#16a34a", "#f59e0b"];
  const [color, setColor] = useState(canvasColors[0]);
  const [strokes, setStrokes] = useState<{ x: number; y: number; color: string }[][]>([]);
  const drawing = useRef(false);

  function pointFromEvent(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top, color };
  }

  return (
    <div className="w-[300px] p-2.5">
      <div className="mb-2 flex items-center gap-1.5">
        {canvasColors.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setColor(c)}
            aria-label={`Chwazi koulè ${c}`}
            className={cn(
              "size-6 rounded-full border-2 transition",
              color === c ? "border-ink" : "border-transparent",
            )}
            style={{ backgroundColor: c }}
          />
        ))}
        <button
          type="button"
          onClick={() => setStrokes([])}
          className="text-muted ml-auto text-[11.5px] font-semibold underline"
        >
          Efase
        </button>
      </div>
      <div
        onMouseDown={(event) => {
          drawing.current = true;
          setStrokes((prev) => [...prev, [pointFromEvent(event)]]);
        }}
        onMouseMove={(event) => {
          if (!drawing.current) return;
          setStrokes((prev) => {
            const next = [...prev];
            next[next.length - 1] = [...next[next.length - 1], pointFromEvent(event)];
            return next;
          });
        }}
        onMouseUp={() => {
          drawing.current = false;
        }}
        onMouseLeave={() => {
          drawing.current = false;
        }}
        className="border-border h-[180px] w-full cursor-crosshair rounded-md border bg-white"
      >
        <svg width="100%" height="100%" className="pointer-events-none">
          {strokes.map((stroke, i) => (
            <polyline
              key={i}
              points={stroke.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke={stroke[0]?.color ?? "#1f2937"}
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>
      </div>
      <p className="text-muted mt-1.5 text-[11.5px]">Klike epi trase ak souri a.</p>
    </div>
  );
}

function FileExplorerApp() {
  const folders = [
    { id: "documents", label: "Documents", icon: "📁" },
    { id: "pictures", label: "Pictures", icon: "🖼️" },
    { id: "downloads", label: "Downloads", icon: "📥" },
  ];
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="w-[300px] p-3">
      <div className="mb-2.5 grid grid-cols-3 gap-2">
        {folders.map((folder) => (
          <button
            key={folder.id}
            type="button"
            onClick={() => setOpen(folder.id)}
            className={cn(
              "flex flex-col items-center gap-1 rounded-md p-2 text-center",
              open === folder.id ? "bg-indigo-light" : "hover:bg-[#FCFCFE]",
            )}
          >
            <span className="text-[26px]">{folder.icon}</span>
            <span className="text-[11px]">{folder.label}</span>
          </button>
        ))}
      </div>
      <div className="border-border rounded-md border bg-[#FCFCFE] p-2.5 text-[12.5px]">
        {open ? (
          <p className="text-ink">
            📄 dosye-{open}.pdf<br />📄 nòt-{open}.txt
          </p>
        ) : (
          <p className="text-muted">Klike yon dosye pou wè sa ki anndan l.</p>
        )}
      </div>
    </div>
  );
}

const apps: AppDef[] = [
  { id: "calculator", label: "Calculator", icon: "🧮", tileClassName: "bg-[#eef2ff]", render: () => <CalculatorApp /> },
  { id: "notepad", label: "Notepad", icon: "📝", tileClassName: "bg-[#fef9c3]", render: () => <NotepadApp /> },
  { id: "explorer", label: "File Explorer", icon: "🗂️", tileClassName: "bg-[#fef3c7]", render: () => <FileExplorerApp /> },
  { id: "paint", label: "Paint", icon: "🎨", tileClassName: "bg-[#fee2e2]", render: () => <PaintApp /> },
  { id: "settings", label: "Settings", icon: "⚙️", tileClassName: "bg-[#e5e7eb]", render: () => <SettingsApp /> },
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
        { id, appId, title, x: 30 + prev.length * 24, y: 20 + prev.length * 18, minimized: false },
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
      className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] border border-[#c7d2e8] select-none"
      style={{
        background:
          "radial-gradient(circle at 20% 15%, #eaf1ff 0%, transparent 45%), radial-gradient(circle at 80% 75%, #dbe7ff 0%, transparent 50%), linear-gradient(160deg, #cfe0ff 0%, #7fa8e8 55%, #4d76c9 100%)",
      }}
    >
      <div className="absolute top-4 left-4 grid gap-3">
        {desktopIcons.map((icon) => (
          <button
            key={icon.id}
            type="button"
            className="flex w-16 flex-col items-center gap-1 rounded-md p-1.5 text-center hover:bg-white/15"
          >
            <span className="text-[26px] drop-shadow">{icon.icon}</span>
            <span className="text-[10.5px] font-medium text-white drop-shadow">{icon.label}</span>
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
            className="border-border absolute overflow-hidden rounded-lg border bg-white shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
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
            <div>{app?.render()}</div>
          </div>
        );
      })}

      {startOpen && (
        <div className="absolute bottom-16 left-1/2 w-[300px] -translate-x-1/2 overflow-hidden rounded-xl border border-black/5 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:w-[360px]">
          <div className="border-border mb-3 flex items-center gap-2 rounded-full border bg-[#f3f3f5] px-3.5 py-2">
            <span className="text-muted text-[13px]" aria-hidden="true">
              🔍
            </span>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Tape isit la pou chèche"
              autoFocus
              className="w-full bg-transparent text-[13px] outline-none"
            />
          </div>

          <div className="mb-1.5 flex items-center justify-between">
            <p className="text-ink text-[12.5px] font-semibold">Pinned</p>
            <span className="text-muted text-[11px]">Tout aplikasyon &gt;</span>
          </div>
          <div className="mb-4 grid grid-cols-5 gap-2">
            {filteredApps.map((app) => (
              <button
                key={app.id}
                type="button"
                onClick={() => openApp(app.id, app.label)}
                className="flex flex-col items-center gap-1 rounded-lg p-1.5 text-center hover:bg-black/5"
              >
                <span
                  className={cn(
                    "flex size-9 items-center justify-center rounded-md text-[16px]",
                    app.tileClassName,
                  )}
                >
                  {app.icon}
                </span>
                <span className="text-ink w-full truncate text-[9.5px] leading-tight">
                  {app.label}
                </span>
              </button>
            ))}
            {filteredApps.length === 0 && (
              <p className="text-muted col-span-5 py-2 text-center text-[12px]">
                Pa gen rezilta pou &ldquo;{search}&rdquo;.
              </p>
            )}
          </div>

          <div className="border-border flex items-center justify-between border-t pt-3">
            <span className="flex items-center gap-2 text-[12px]">
              <span className="bg-indigo-light flex size-6 items-center justify-center rounded-full text-[12px]">
                🙂
              </span>
              Elèv
            </span>
            <span className="text-muted text-[15px]" aria-hidden="true">
              ⏻
            </span>
          </div>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-2 flex justify-center">
        <div className="flex items-center gap-1 rounded-full bg-white/90 px-2 py-1.5 shadow-lg backdrop-blur-md">
          <button
            type="button"
            onClick={() => setStartOpen((prev) => !prev)}
            className={cn(
              "flex size-8 items-center justify-center rounded-md text-[15px] transition",
              startOpen ? "bg-black/10" : "hover:bg-black/5",
            )}
            aria-label="Start"
          >
            ⊞
          </button>
          <button
            type="button"
            onClick={() => setStartOpen((prev) => !prev)}
            className="flex size-8 items-center justify-center rounded-md text-[13px] hover:bg-black/5"
            aria-label="Search"
          >
            🔍
          </button>
          {apps.slice(0, 3).map((app) => (
            <button
              key={app.id}
              type="button"
              onClick={() => openApp(app.id, app.label)}
              className="flex size-8 items-center justify-center rounded-md text-[14px] hover:bg-black/5"
              aria-label={app.label}
            >
              {app.icon}
            </button>
          ))}
          {windows.length > 0 && (
            <span className="mx-1 h-5 w-px bg-black/10" aria-hidden="true" />
          )}
          {windows.map((win) => (
            <button
              key={win.id}
              type="button"
              onClick={() => toggleMinimize(win.id)}
              className={cn(
                "h-8 rounded-md px-2.5 text-[11.5px] font-medium transition",
                !win.minimized ? "bg-black/10" : "hover:bg-black/5",
              )}
            >
              {win.title}
            </button>
          ))}
          <span className="mx-1 h-5 w-px bg-black/10" aria-hidden="true" />
          <div className="flex items-center gap-1.5 px-1.5 text-[10.5px] text-[#333]">
            <span aria-hidden="true">📶</span>
            <span aria-hidden="true">🔊</span>
            <span className="whitespace-nowrap">2:14 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
