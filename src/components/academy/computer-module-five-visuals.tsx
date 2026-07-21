import type { LessonVisual } from "@/content/computer-course-v2";
import type { PreferredPlatform } from "@/lib/use-computer-platform";
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

export function ModuleFiveVisual({
  visual,
  platform,
}: {
  visual: LessonVisual;
  platform: PreferredPlatform | null;
}) {
  const selectedPlatform = platform ?? "windows";
  let diagram: ReactNode;
  if (visual.kind === "desktop-anatomy")
    diagram = (
      <div>
        <p className="mb-3 text-sm font-bold tracking-[.08em] text-[#5146CC] uppercase">
          Your saved {selectedPlatform === "mac" ? "Mac" : "Windows"} path
          appears first
        </p>
        <div className="grid gap-5 lg:grid-cols-2">
          <Desktop os={selectedPlatform} />
          <Desktop os={selectedPlatform === "windows" ? "mac" : "windows"} />
        </div>
      </div>
    );
  else if (visual.kind === "window-anatomy")
    diagram = <WindowAnatomy platform={selectedPlatform} />;
  else if (visual.kind === "taskbar-dock")
    diagram = <LauncherVisual platform={selectedPlatform} />;
  else if (visual.kind === "application-switching")
    diagram = <SwitcherVisual platform={selectedPlatform} />;
  else if (visual.kind === "interface-controls") diagram = <ControlsVisual />;
  else if (visual.kind === "window-layout") diagram = <LayoutVisual />;
  else if (visual.kind === "notifications-controls")
    diagram = <NotificationsVisual platform={selectedPlatform} />;
  else diagram = <RecoveryVisual platform={selectedPlatform} />;

  const photos: Record<string, [string, string, string]> = {
    "desktop-anatomy": [
      "navigation-desktop-real.webp",
      "A real Windows laptop displaying its desktop workspace",
      "Real-world view: the desktop fills the screen and the taskbar sits along the bottom.",
    ],
    "window-anatomy": [
      "navigation-window-real.webp",
      "A real laptop with a document application open in a movable window",
      "Real-world view: an application window sits over the desktop without filling the entire screen.",
    ],
    "taskbar-dock": [
      "navigation-taskbar-dock-real.webp",
      "Windows and Mac laptops side by side showing their different launch areas",
      "Real-world comparison: Windows uses a taskbar; macOS uses a menu bar and Dock.",
    ],
    "application-switching": [
      "navigation-switching-real.webp",
      "An adult learner working with several open application windows",
      "Real-world view: several applications can remain open while only one receives input.",
    ],
    "interface-controls": [
      "navigation-controls-real.webp",
      "A hand using a mouse while a settings window is open",
      "Real-world view: checkboxes, a list, a slider, and action buttons appear together in one settings window.",
    ],
    "window-layout": [
      "navigation-layout-real.webp",
      "A monitor displaying two application windows arranged side by side",
      "Real-world view: two separate windows share the screen for comparison and note-taking.",
    ],
    "notifications-controls": [
      "navigation-notifications-real.webp",
      "A real Windows laptop displaying only its Quick Settings flyout",
      "Real-world view: Windows Quick Settings provides frequently used controls. Notification Center is a separate surface, demonstrated below.",
    ],
    "screen-recovery": [
      "navigation-recovery-real.webp",
      "An adult learner recovering an application window hidden behind another",
      "Real-world view: overlapping windows can make open work appear missing even though it is still available.",
    ],
  };
  const [filename, alt, caption] = photos[visual.kind];
  return (
    <div className="space-y-6">
      <figure className="overflow-hidden rounded-[24px] border border-[#D9D4E4] bg-white shadow-[0_18px_48px_rgba(37,31,63,.12)]">
        <Image
          src={`/images/academy/courses/computer-internet-essentials/v2/${filename}`}
          alt={alt}
          width={1600}
          height={900}
          sizes="(max-width: 1024px) 100vw, 900px"
          className="aspect-video w-full object-cover"
        />
        <figcaption className="border-t border-[#E2DEE8] p-4 text-sm leading-relaxed text-[#625D69]">
          <strong className="text-[#282334]">Photographic context.</strong>{" "}
          {caption} Exact controls and translated labels are shown in the
          interactive diagram below.
        </figcaption>
      </figure>
      {diagram}
    </div>
  );
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
              ● Notes &nbsp; File &nbsp; Edit &nbsp; View &nbsp; Window
            </span>
            <span>Wi-Fi &nbsp; Sound &nbsp; 9:41</span>
          </div>
        )}
        <div className="absolute top-12 left-5 grid gap-4 text-center text-[10px] text-white">
          <span className="grid justify-items-center">
            <span className="w-7 text-amber-300">
              <AppSymbol kind="files" />
            </span>
            <b className="block">Practice</b>
          </span>
          <span className="grid justify-items-center">
            <span className="w-7 text-white">
              <AppSymbol kind="notes" />
            </span>
            <b className="block">Notes</b>
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
            <span className="text-[10px]">
              Network &nbsp; Sound &nbsp; 9:41
            </span>
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
      <AppTile kind="notes" compact />
      <AppTile kind="browser" compact />
      <AppTile kind="files" compact />
    </>
  );
}

function AppSymbol({ kind }: { kind: "notes" | "browser" | "files" }) {
  if (kind === "notes")
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v4h4M9 11h6M9 15h6" />
      </svg>
    );
  if (kind === "browser")
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </svg>
    );
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M3 7h7l2 2h9v10H3z" />
      <path d="M3 7V5h7l2 2" />
    </svg>
  );
}

function AppTile({
  kind,
  compact = false,
}: {
  kind: "notes" | "browser" | "files";
  compact?: boolean;
}) {
  const colors =
    kind === "notes"
      ? "bg-[#3568D4]"
      : kind === "browser"
        ? "bg-[#168A88]"
        : "bg-[#D28A24]";
  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-[22%] text-white shadow-sm",
        colors,
        compact ? "size-8 p-1.5" : "size-14 p-3",
      )}
    >
      <AppSymbol kind={kind} />
    </span>
  );
}

function Frame({
  children,
  title = "Practice notes",
  platform = null,
}: {
  children: React.ReactNode;
  title?: string;
  platform?: PreferredPlatform | null;
}) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-[#D9D4E4] bg-[#ECEAF2] shadow-[0_18px_45px_rgba(37,31,63,.12)]">
      <div
        className={cn(
          "flex min-h-12 items-center bg-white px-4 py-3",
          platform === "windows"
            ? "justify-between"
            : "relative justify-center",
        )}
      >
        {platform === "mac" && (
          <span
            className="absolute left-4 flex gap-1.5"
            aria-label="Mac window controls"
          >
            <i className="size-3 rounded-full bg-[#FF5F57]" />
            <i className="size-3 rounded-full bg-[#FEBC2E]" />
            <i className="size-3 rounded-full bg-[#28C840]" />
          </span>
        )}
        <strong className="text-sm">{title}</strong>
        {platform === "windows" && (
          <span
            className="flex items-center gap-4 text-sm"
            aria-label="Windows window controls"
          >
            <span aria-label="Minimize">—</span>
            <span aria-label="Maximize">□</span>
            <span aria-label="Close">×</span>
          </span>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
function WindowAnatomy({ platform }: { platform: PreferredPlatform }) {
  return (
    <Frame
      platform={platform}
      title={
        platform === "mac"
          ? "Practice Notes — macOS"
          : "Practice Notes — Windows"
      }
    >
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
function LauncherVisual({ platform }: { platform: PreferredPlatform }) {
  const windows = platform === "windows";
  return (
    <Frame
      title={windows ? "Your Windows Taskbar path" : "Your macOS Dock path"}
      platform={platform}
    >
      <div
        className={cn(
          "mx-auto flex max-w-xl items-end justify-center gap-5 p-5",
          windows
            ? "rounded-xl bg-[#DDEBFA]"
            : "rounded-2xl border border-white/70 bg-white/60 shadow-lg",
        )}
      >
        {windows && (
          <span className="flex size-10 items-center justify-center rounded-lg text-xl font-semibold text-[#1C355A]">
            ⊞
          </span>
        )}
        {(["notes", "browser", "files"] as const).map((kind, index) => (
          <span key={kind} className="relative flex flex-col items-center">
            <AppTile kind={kind} />
            {windows && index < 2 && (
              <i
                className={cn(
                  "mt-1 h-1 rounded-full bg-[#2563D9]",
                  index === 1 ? "w-6" : "w-2",
                )}
              />
            )}
            {!windows && index < 2 && (
              <i className="mt-1 size-1.5 rounded-full bg-[#34303A]" />
            )}
          </span>
        ))}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <StateKey
          marker="○"
          title="Pinned"
          detail="Available here; not necessarily open."
        />
        <StateKey
          marker="●"
          title="Open"
          detail={
            windows
              ? "A small line or dot appears."
              : "A dot may appear below the icon."
          }
        />
        <StateKey
          marker="▣"
          title="Frontmost"
          detail={
            windows
              ? "The highlighted icon matches the active window."
              : "Confirm with the front window and menu bar—not a special Dock marker."
          }
        />
      </div>
    </Frame>
  );
}
function StateKey({
  marker,
  title,
  detail,
}: {
  marker: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl bg-white p-4">
      <span className="font-bold text-[#5146CC]">{marker}</span>
      <strong className="ml-2">{title}</strong>
      <p className="mt-1 text-sm text-[#686270]">{detail}</p>
    </div>
  );
}

function SwitcherVisual({ platform }: { platform: PreferredPlatform }) {
  const windows = platform === "windows";
  return (
    <Frame
      title={
        windows ? "Windows open-window switcher" : "macOS application switcher"
      }
      platform={platform}
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {["Notes", "Browser", "Files"].map((x, i) => (
          <div
            key={x}
            className={cn(
              "rounded-2xl border-2 bg-white p-6 text-center",
              i === 1 ? "border-[#5146CC]" : "border-transparent",
            )}
          >
            <span className="mx-auto block w-fit">
              <AppTile
                kind={i === 0 ? "notes" : i === 1 ? "browser" : "files"}
              />
            </span>
            <strong className="mt-3 block">{x}</strong>
            {i === 1 && <small className="text-[#5146CC]">Active</small>}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center">
        <kbd className="rounded bg-[#272139] px-3 py-2 text-white">
          {windows ? "Alt + Tab" : "Command + Tab"}
        </kbd>
      </p>
      <p className="mt-4 text-sm leading-relaxed text-[#625D69]">
        {windows
          ? "Windows usually moves among open windows. Depending on settings, browser tabs may also appear."
          : "macOS moves among running applications. A separate window command may be needed for another window in the same app."}
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
function NotificationsVisual({ platform }: { platform: PreferredPlatform }) {
  const windows = platform === "windows";
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Frame
        title={
          windows ? "Windows Notification Center" : "macOS Notification Center"
        }
        platform={platform}
      >
        <div className="space-y-3">
          {[
            ["i", "Backup completed", "Information"],
            ["?", "Allow microphone?", "Action request"],
            ["!", "Document could not save", "Error"],
          ].map(([symbol, t, k]) => (
            <div key={t} className="rounded-xl bg-white p-4">
              <span className="mr-3 inline-flex size-7 items-center justify-center rounded-full bg-[#E9E6FA] text-sm font-bold text-[#5146CC]">
                {symbol}
              </span>
              <strong>{t}</strong>
              <small className="block pl-7 text-[#6B6572]">{k}</small>
            </div>
          ))}
        </div>
      </Frame>
      <Frame
        title={windows ? "Windows Quick Settings" : "macOS Control Center"}
        platform={platform}
      >
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
      <p className="text-sm leading-relaxed text-[#625D69] lg:col-span-2">
        <strong>Separate surfaces:</strong>{" "}
        {windows
          ? "Windows 11 opens Notification Center from the clock/date area and Quick Settings from the network, volume, or battery area."
          : "macOS opens Notification Center and Control Center separately from the menu bar."}
      </p>
    </div>
  );
}
function RecoveryVisual({ platform }: { platform: PreferredPlatform }) {
  return (
    <Frame
      title={`Calm recovery sequence · ${platform === "mac" ? "macOS" : "Windows"}`}
      platform={platform}
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["1", "Observe", "Read the whole screen"],
          ["2", "Find", "Taskbar, Dock, switcher"],
          [
            "3",
            "Restore",
            platform === "mac"
              ? "Reveal controls, leave full screen, or restore from Dock"
              : "Reveal controls, leave full screen, or restore from Taskbar",
          ],
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
import Image from "next/image";
import type { ReactNode } from "react";
