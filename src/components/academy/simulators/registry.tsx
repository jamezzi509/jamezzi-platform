import { WindowsDesktopSimulator } from "@/components/academy/simulators/windows-desktop-simulator";

/**
 * Maps a diagram block's diagramId to a real interactive component. Any
 * diagramId not listed here falls back to the static placeholder in
 * LearnPhase -- this registry grows lesson by lesson rather than requiring
 * every lesson to have a simulator before any of them can ship.
 */
export const lessonSimulators: Record<string, () => React.ReactNode> = {
  "windows-desktop-basic": () => <WindowsDesktopSimulator />,
};
