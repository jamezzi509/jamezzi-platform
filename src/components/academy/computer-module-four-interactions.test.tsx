import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ComputerModuleFourInteraction } from "@/components/academy/computer-module-four-interactions";

type Kind =
  | "power-decision-simulator"
  | "pointer-control-circuit"
  | "keyboard-key-trainer"
  | "text-editing-workbench"
  | "shortcut-key-trainer"
  | "accessibility-simulator";

function renderInteraction(
  kind: Kind,
  platform: "windows" | "mac" = "windows",
) {
  const onComplete = vi.fn();
  render(
    <ComputerModuleFourInteraction
      interaction={{ kind }}
      platform={platform}
      onComplete={onComplete}
    />,
  );
  return onComplete;
}

describe("Module 4 interactive control practice", () => {
  it("completes four safe power decisions", async () => {
    const onComplete = renderInteraction("power-decision-simulator");
    for (const choice of ["Sleep", "Restart", "Shut down", "Pause and check"])
      fireEvent.click(screen.getByRole("button", { name: choice }));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("distinguishes pointer actions and recovery", async () => {
    const onComplete = renderInteraction("pointer-control-circuit");
    const target = screen.getByRole("button", { name: "Action target" });
    fireEvent.click(target);
    fireEvent.doubleClick(target);
    fireEvent.contextMenu(target);
    const panel = screen.getByText("Scroll this panel").parentElement!;
    Object.defineProperty(panel, "scrollTop", {
      value: 100,
      configurable: true,
    });
    fireEvent.scroll(panel);
    fireEvent.click(screen.getByRole("button", { name: "Move practice tile" }));
    fireEvent.click(screen.getByRole("button", { name: "Undo move" }));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("recognizes essential keys and multilingual characters", async () => {
    const onComplete = renderInteraction("keyboard-key-trainer");
    for (const name of [
      "Shift",
      "CapsLock",
      "Backspace",
      "Enter",
      "Tab",
      "← Arrow",
    ])
      fireEvent.click(screen.getByRole("button", { name }));
    fireEvent.change(screen.getByLabelText(/Type a short line/i), {
      target: { value: "Mèsi, français" },
    });
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("uses the private editing clipboard and undo", async () => {
    const onComplete = renderInteraction("text-editing-workbench");
    const editor = screen.getByRole("textbox") as HTMLTextAreaElement;
    editor.setSelectionRange(0, 3);
    fireEvent.click(screen.getByRole("button", { name: "Copy" }));
    fireEvent.click(screen.getByRole("button", { name: "Cut" }));
    editor.setSelectionRange(editor.value.length, editor.value.length);
    fireEvent.click(screen.getByRole("button", { name: "Paste" }));
    fireEvent.click(screen.getByRole("button", { name: "Undo" }));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("captures all seven Windows shortcut chords", async () => {
    const onComplete = renderInteraction("shortcut-key-trainer");
    const surface = screen.getByText(/Focus here, then press/i).parentElement!;
    for (const key of ["c", "v", "x", "z", "a", "s", "f"])
      fireEvent.keyDown(surface, { key, ctrlKey: true });
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("requires a settings change and restore", async () => {
    const onComplete = renderInteraction("accessibility-simulator");
    fireEvent.click(screen.getByLabelText("High contrast"));
    fireEvent.click(
      screen.getByRole("button", { name: "Restore starting view" }),
    );
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });
});
