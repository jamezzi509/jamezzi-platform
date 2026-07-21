import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ComputerModuleTwoInteraction } from "@/components/academy/computer-module-two-interactions";

type Kind =
  | "computer-family-identifier"
  | "outside-parts-locator"
  | "port-photo-match"
  | "connection-builder"
  | "accessory-planner";

function renderInteraction(kind: Kind) {
  const onComplete = vi.fn();
  render(
    <ComputerModuleTwoInteraction
      interaction={{ kind }}
      onComplete={onComplete}
    />,
  );
  return onComplete;
}

describe("Module 2 interactive practice", () => {
  it("identifies all four computer families from photographs", async () => {
    const onComplete = renderInteraction("computer-family-identifier");
    for (const answer of [
      "Laptop",
      "Desktop",
      "All-in-one",
      "Tablet / 2-in-1",
    ]) {
      fireEvent.click(screen.getByRole("button", { name: answer }));
      fireEvent.click(
        screen.getByRole("button", {
          name: /Next photograph|Finish identification/i,
        }),
      );
    }
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("requires every exterior hotspot and each correct part job", async () => {
    const onComplete = renderInteraction("outside-parts-locator");
    screen
      .getAllByRole("button", { name: /^Locate /i })
      .forEach((button) => fireEvent.click(button));
    const correct: [string, string][] = [
      ["Input", "Keyboard and camera"],
      ["Output", "Display and speakers"],
      ["Cooling", "Vents and fans"],
      ["Power", "Power button, charger, and battery"],
    ];
    correct.forEach(([group, answer]) =>
      fireEvent.click(
        within(
          screen.getByRole("group", { name: new RegExp(`^${group}$`, "i") }),
        ).getByRole("button", { name: answer }),
      ),
    );
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("matches six connector photographs and rejects the USB-C myth", async () => {
    const onComplete = renderInteraction("port-photo-match");
    for (const answer of [
      "USB-A",
      "USB-C",
      "HDMI",
      "Ethernet",
      "3.5 mm audio",
      "SD card",
    ]) {
      fireEvent.click(screen.getByRole("button", { name: answer }));
      fireEvent.click(
        screen.getByRole("button", { name: /Next photo|Finish photos/i }),
      );
    }
    fireEvent.click(
      screen.getByRole("button", {
        name: /connector shapes fit; capabilities still need verification/i,
      }),
    );
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("solves all four connection decisions", async () => {
    const onComplete = renderInteraction("connection-builder");
    for (const answer of [
      "HDMI-to-HDMI cable",
      "Ethernet cable",
      "A verified USB-C power adapter and cable meeting the laptop's requirements",
      "Stop and identify both connector shapes",
    ]) {
      fireEvent.click(screen.getByRole("button", { name: answer }));
      fireEvent.click(
        screen.getByRole("button", {
          name: /Next connection|Finish connections/i,
        }),
      );
    }
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("accepts the smallest accessory setup that solves the named need", async () => {
    const onComplete = renderInteraction("accessory-planner");
    fireEvent.click(screen.getByRole("button", { name: /Headset:/i }));
    fireEvent.click(screen.getByRole("button", { name: /Check this setup/i }));
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });
});
