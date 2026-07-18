import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ComputerModuleOneInteraction } from "@/components/academy/computer-module-one-interactions";

function renderInteraction(
  kind:
    | "course-orientation"
    | "identify-device-and-system"
    | "risk-classifier"
    | "workspace-inspection",
) {
  const onComplete = vi.fn();
  const onChoosePlatform = vi.fn();
  render(
    <ComputerModuleOneInteraction
      interaction={{ kind }}
      platform={null}
      onChoosePlatform={onChoosePlatform}
      onComplete={onComplete}
    />,
  );
  return { onComplete, onChoosePlatform };
}

describe("Module 1 interactive practice", () => {
  it("requires opening, answering, resetting, and returning in orientation", async () => {
    const { onComplete } = renderInteraction("course-orientation");
    fireEvent.click(screen.getByRole("button", { name: /Open sample menu/i }));
    fireEvent.click(
      screen.getByRole("button", { name: /Completing verified practice/i }),
    );
    fireEvent.click(screen.getByRole("button", { name: /Reset sample/i }));
    expect(onComplete).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: /Open sample menu/i }));
    fireEvent.click(
      screen.getByRole("button", { name: /Completing verified practice/i }),
    );
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("records a physical device and system as separate choices", async () => {
    const { onComplete, onChoosePlatform } = renderInteraction(
      "identify-device-and-system",
    );
    fireEvent.click(screen.getByRole("button", { name: /Laptop:/i }));
    fireEvent.click(screen.getByRole("button", { name: /^Mac/i }));
    expect(onChoosePlatform).toHaveBeenCalledWith("mac");
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("requires all seven risk decisions", async () => {
    const { onComplete } = renderInteraction("risk-classifier");
    for (const answer of [
      "Green light",
      "Pause",
      "Stop",
      "Green light",
      "Pause",
      "Stop",
      "Stop",
    ]) {
      fireEvent.click(
        screen.getByRole("button", { name: new RegExp(`^${answer}$`, "i") }),
      );
      fireEvent.click(
        screen.getByRole("button", {
          name: /Next scenario|Finish scenarios/i,
        }),
      );
    }
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("requires every hotspot and every safer workspace choice", async () => {
    const { onComplete } = renderInteraction("workspace-inspection");
    screen
      .getAllByRole("button", { name: /^Inspect /i })
      .forEach((button) => fireEvent.click(button));
    for (const answer of [
      "Stable hard surface",
      "Vents open",
      "Drink moved away",
      "Cable routed safely",
    ]) {
      fireEvent.click(screen.getByRole("button", { name: answer }));
    }
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });
});
