import type { LessonVisual } from "@/content/computer-course-v2";
import { cn } from "@/lib/cn";

const kinds = new Set([
  "desktop-anatomy",
  "window-anatomy",
  "taskbar-dock",
  "application-switching",
  "interface-controls",
  "window-layout",
  "notifications-controls",
  "screen-recovery",
]);

export function isModuleFiveVisual(visual: LessonVisual) {
  return kinds.has(visual.kind);
}

export function ModuleFiveVisual({ visual }: { visual: LessonVisual }) {
  if (visual.kind === "desktop-anatomy")
    return (
      <div className="grid gap-5 lg:grid-cols-2">
        <Desktop os="windows" />
        <Desktop os="mac" />
      </div>
    );
  if (visual.kind === "window-anatomy") return <WindowAnatomy />;
  if (visual.kind === "taskbar-dock") return <LauncherVisual />;
  if (visual.kind === "application-switching") return <SwitcherVisual />;
  if (visual.kind === "interface-controls") return <ControlsVisual />;
  if (visual.kind === "window-layout") return <LayoutVisual />;
  if (visual.kind === "notifications-controls") return <NotificationsVisual />;
  return <RecoveryVisual />;
}

function Desktop({ os }: { os: "windows" | "mac" }) {
  const mac = os === "mac";
  return (
    <figure className="overflow-hidden rounded-[22px] border border-[#D9D4E4] bg-white shadow-[0_18px_45px_rgba(37,31,63,.12)]">
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden",
          mac
            ? "bg-[radial-gradient(circle_at_70%_25%,#EEA6C9,#7754C8_45%,#211C4E)]"
            : "bg-[radial-gradient(circle_at_60%_45%,#60C8F5,#1873CF_48%,#093D86)]",
        )}
      >
        {mac && (
          <div className="absolute inset-x-0 top-0 flex h-7 items-center justify-between bg-white/90 px-3 text-[10px] font-semibold text-black">
            <span>
              ● Jamezzi &nbsp; File &nbsp; Edit &nbsp; View &nbsp; Window
            </span>
            <span>Wi-Fi &nbsp; Sound &nbsp; 9:41</span>
          </div>
        )}
        <div className="absolute top-12 left-5 grid gap-4 text-center text-[10px] text-white">
          <span>
            📁<b className="block">Practice</b>
          </span>
          <span>
            📄<b className="block">Notes</b>
          </span>
        </div>
        {mac ? (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-2xl border border-white/30 bg-white/35 p-2 backdrop-blur">
            <AppIcons />
          </div>
        ) : (
          <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between bg-[#E9F3FC]/95 px-3">
            <span className="text-lg">⊞</span>
            <div className="flex gap-3">
              <AppIcons />
            </div>
            <span className="text-[10px]">Wi-Fi&nbsp; 🔊 &nbsp;9:41</span>
          </div>
        )}
      </div>
      <figcaption className="p-4">
        <strong>{mac ? "macOS desktop" : "Windows 11 desktop"}</strong>
        <p className="mt-1 text-sm text-[#66606E]">
          {mac
            ? "Menu bar above · Dock below"
            : "Desktop workspace · Taskbar below"}
        </p>
      </figcaption>
    </figure>
  );
}
function AppIcons() {
  return (
    <>
      <span className="flex size-7 items-center justify-center rounded-lg bg-blue-500 text-white">
        N
      </span>
      <span className="flex size-7 items-center justify-center rounded-lg bg-orange-500 text-white">
        W
      </span>
      <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-500 text-white">
        F
      </span>
    </>
  );
}

function Frame({
  children,
  title = "Practice notes",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-[#D9D4E4] bg-[#ECEAF2] shadow-[0_18px_45px_rgba(37,31,63,.12)]">
      <div className="flex items-center justify-between bg-white px-4 py-3">
        <span className="flex gap-1.5">
          <i className="size-3 rounded-full bg-red-400" />
          <i className="size-3 rounded-full bg-amber-400" />
          <i className="size-3 rounded-full bg-green-400" />
        </span>
        <strong className="text-sm">{title}</strong>
        <span className="text-sm">— □ ×</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
function WindowAnatomy() {
  return (
    <Frame>
      <div className="grid gap-3 sm:grid-cols-4">
        {[
          ["01", "Title bar"],
          ["02", "Toolbar"],
          ["03", "Content area"],
          ["04", "Scroll bar"],
        ].map(([n, t]) => (
          <div key={n} className="rounded-xl bg-white p-4">
            <b className="text-[#5146CC]">{n}</b>
            <strong className="mt-5 block">{t}</strong>
          </div>
        ))}
      </div>
      <div className="mt-4 h-32 rounded-xl bg-white p-5 text-[#696471]">
        The visible document or application content lives here.
        <span className="float-right h-20 w-2 rounded bg-[#CBC5D8]" />
      </div>
    </Frame>
  );
}
function LauncherVisual() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Frame title="Windows Taskbar">
        <div className="flex justify-center gap-5 rounded-xl bg-[#DDEBFA] p-5">
          <span>⊞</span>
          <span className="border-b-4 border-blue-600">📝</span>
          <span className="border-b-4 border-blue-600 bg-white">🌐</span>
          <span>📁</span>
        </div>
        <Legend />
      </Frame>
      <Frame title="macOS Dock">
        <div className="flex justify-center gap-5 rounded-2xl bg-white/60 p-5">
          <span>
            📝
            <i className="mx-auto block size-1 rounded-full bg-black" />
          </span>
          <span>
            🌐
            <i className="mx-auto block size-1 rounded-full bg-black" />
          </span>
          <span>📁</span>
        </div>
        <Legend />
      </Frame>
    </div>
  );
}
function Legend() {
  return (
    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
      <span>📌 Pinned</span>
      <span>● Open</span>
      <strong>▣ Active</strong>
    </div>
  );
}
function SwitcherVisual() {
  return (
    <Frame title="Application switcher">
      <div className="grid gap-3 sm:grid-cols-3">
        {["Notes", "Browser", "Files"].map((x, i) => (
          <div
            key={x}
            className={cn(
              "rounded-2xl border-2 bg-white p-6 text-center",
              i === 1 ? "border-[#5146CC]" : "border-transparent",
            )}
          >
            <span className="text-3xl">
              {i === 0 ? "📝" : i === 1 ? "🌐" : "📁"}
            </span>
            <strong className="mt-3 block">{x}</strong>
            {i === 1 && <small className="text-[#5146CC]">Active</small>}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center">
        <kbd className="rounded bg-[#272139] px-3 py-2 text-white">
          Alt/Command + Tab
        </kbd>
      </p>
    </Frame>
  );
}
function ControlsVisual() {
  return (
    <Frame title="Common controls">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="rounded-xl bg-white p-4">
          <input type="checkbox" defaultChecked /> Checkbox
        </label>
        <div className="rounded-xl bg-white p-4">
          <input type="radio" defaultChecked readOnly /> One choice
        </div>
        <div className="rounded-xl bg-white p-4">
          <span className="inline-block rounded-full bg-[#5146CC] px-3 py-1 text-white">
            On
          </span>{" "}
          Switch
        </div>
        <div className="rounded-xl bg-white p-4">Choose… ▾</div>
        <label className="rounded-xl bg-white p-4 sm:col-span-2">
          Slider
          <input type="range" className="block w-full" readOnly />
        </label>
        <button
          disabled
          className="rounded-xl bg-white p-4 text-left opacity-40"
        >
          Disabled command
        </button>
        <button className="rounded-xl bg-[#5146CC] p-4 font-bold text-white">
          Apply
        </button>
      </div>
    </Frame>
  );
}
function LayoutVisual() {
  return (
    <Frame title="Side-by-side workspace">
      <div className="grid grid-cols-2 gap-2">
        <div className="h-52 rounded-xl border-2 border-blue-500 bg-white p-4">
          <b>Reference</b>
          <div className="mt-4 space-y-2">
            <i className="block h-2 rounded bg-slate-200" />
            <i className="block h-2 w-4/5 rounded bg-slate-200" />
          </div>
        </div>
        <div className="h-52 rounded-xl border-2 border-purple-500 bg-white p-4">
          <b>Notes</b>
          <p className="mt-4 text-sm">
            Insertion point <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-[#625D69]">
        Activate one window before scrolling or typing.
      </p>
    </Frame>
  );
}
function NotificationsVisual() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Frame title="Notification Center">
        <div className="space-y-3">
          {[
            ["✓", "Backup completed", "Information"],
            ["🎙", "Allow microphone?", "Action request"],
            ["!", "Document could not save", "Error"],
          ].map(([i, t, k]) => (
            <div key={t} className="rounded-xl bg-white p-4">
              <span className="mr-3">{i}</span>
              <strong>{t}</strong>
              <small className="block pl-7 text-[#6B6572]">{k}</small>
            </div>
          ))}
        </div>
      </Frame>
      <Frame title="Quick controls">
        <div className="grid grid-cols-2 gap-3">
          {[
            "Wi-Fi",
            "Bluetooth",
            "Sound",
            "Brightness",
            "Focus",
            "Battery",
          ].map((x) => (
            <div key={x} className="rounded-xl bg-white p-4 font-semibold">
              {x}
            </div>
          ))}
        </div>
      </Frame>
    </div>
  );
}
function RecoveryVisual() {
  return (
    <Frame title="Calm recovery sequence">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["1", "Observe", "Read the whole screen"],
          ["2", "Find", "Taskbar, Dock, switcher"],
          ["3", "Restore", "Exit full screen or minimize"],
          ["4", "Escalate", "Close or restart only if needed"],
        ].map(([n, t, d]) => (
          <div key={n} className="rounded-xl bg-white p-4">
            <span className="flex size-8 items-center justify-center rounded-full bg-[#5146CC] font-bold text-white">
              {n}
            </span>
            <strong className="mt-3 block">{t}</strong>
            <small className="text-[#686270]">{d}</small>
          </div>
        ))}
      </div>
    </Frame>
  );
}
