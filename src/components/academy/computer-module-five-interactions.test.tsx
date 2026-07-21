import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ComputerModuleFiveInteraction } from "@/components/academy/computer-module-five-interactions";

type Kind =
  | "desktop-identifier"
  | "window-control-simulator"
  | "taskbar-dock-lab"
  | "app-switcher-lab"
  | "interface-control-lab"
  | "window-arrangement-lab"
  | "notification-triage"
  | "missing-window-recovery";
function renderLab(kind: Kind) {
  const onComplete = vi.fn();
  render(
    <ComputerModuleFiveInteraction
      interaction={{ kind }}
      platform="windows"
      onComplete={onComplete}
    />,
  );
  return onComplete;
}

describe("Module 5 navigation practice", () => {
  it("identifies the desktop interface", async () => {
    const done = renderLab("desktop-identifier");
    for (const answer of ["Desktop", "Taskbar", "Dock", "Menu bar"])
      fireEvent.click(screen.getByRole("button", { name: answer }));
    await waitFor(() => expect(done).toHaveBeenCalled());
  });
  it("operates every window control", async () => {
    const done = renderLab("window-control-simulator");
    fireEvent.click(screen.getByRole("button", { name: "Minimize" }));
    fireEvent.click(
      screen.getByRole("button", { name: /Return to Practice/i }),
    );
    fireEvent.click(screen.getByRole("button", { name: "Maximize" }));
    fireEvent.click(screen.getByRole("button", { name: "Restore" }));
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() => expect(done).toHaveBeenCalled());
  });
  it("reads Taskbar and Dock states", async () => {
    const done = renderLab("taskbar-dock-lab");
    for (const answer of [
      "Pinned",
      "Open",
      "Active",
      "Select its existing indicator",
    ])
      fireEvent.click(screen.getByRole("button", { name: answer }));
    await waitFor(() => expect(done).toHaveBeenCalled());
  });
  it("switches among three apps", async () => {
    const done = renderLab("app-switcher-lab");
    fireEvent.click(screen.getByRole("button", { name: "Browser" }));
    fireEvent.click(screen.getByRole("button", { name: "Files" }));
    await waitFor(() => expect(done).toHaveBeenCalled());
  });
  it("operates settings controls and cancels", async () => {
    const done = renderLab("interface-control-lab");
    fireEvent.click(screen.getByLabelText("Captions"));
    fireEvent.click(screen.getByLabelText("Large pointer"));
    fireEvent.click(screen.getByLabelText("Comfort"));
    fireEvent.change(screen.getByLabelText("Brightness"), {
      target: { value: "75" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Cancel change" }));
    await waitFor(() => expect(done).toHaveBeenCalled());
  });
  it("arranges and activates two windows", async () => {
    const done = renderLab("window-arrangement-lab");
    fireEvent.click(screen.getByRole("button", { name: /Reference/ }));
    fireEvent.click(screen.getByRole("button", { name: /^Notes/ }));
    fireEvent.click(
      screen.getByRole("button", { name: /Scroll Notes alternative/ }),
    );
    await waitFor(() => expect(done).toHaveBeenCalled());
  });
  it("triages notifications", async () => {
    const done = renderLab("notification-triage");
    for (const answer of [
      "Dismiss",
      "Stop and verify",
      "Record error",
      "Stop and verify",
    ])
      fireEvent.click(screen.getByRole("button", { name: answer }));
    await waitFor(() => expect(done).toHaveBeenCalled());
  });
  it("uses least-disruptive recovery", async () => {
    const done = renderLab("missing-window-recovery");
    for (const answer of [
      "Taskbar or Dock",
      "Exit full screen",
      "Switch or arrange windows",
      "Bring the dialog forward",
      "Wait and observe",
    ])
      fireEvent.click(screen.getByRole("button", { name: answer }));
    await waitFor(() => expect(done).toHaveBeenCalled());
  });
});
