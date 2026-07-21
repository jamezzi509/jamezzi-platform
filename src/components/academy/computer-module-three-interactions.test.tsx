import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ComputerModuleThreeInteraction } from "@/components/academy/computer-module-three-interactions";

type Kind =
  | "buying-brief-builder"
  | "specification-decoder"
  | "platform-buying-decision"
  | "condition-offer-audit"
  | "candidate-buying-mission";

function renderInteraction(kind: Kind) {
  const onComplete = vi.fn();
  render(
    <ComputerModuleThreeInteraction
      interaction={{ kind }}
      onComplete={onComplete}
    />,
  );
  return onComplete;
}

describe("Module 3 interactive buying practice", () => {
  beforeEach(() => window.localStorage.clear());

  it("builds a buying brief from work, place, and budget", async () => {
    const onComplete = renderInteraction("buying-brief-builder");
    fireEvent.click(
      screen.getByRole("button", { name: /Browser, documents/i }),
    );
    fireEvent.click(
      screen.getByRole("button", { name: /Travel between school/i }),
    );
    fireEvent.click(screen.getByRole("button", { name: /Balanced:/i }));
    fireEvent.click(
      screen.getByRole("button", { name: /Build my practice brief/i }),
    );
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
    expect(
      window.localStorage.getItem("jamezzi:computer-course:buying-brief:v1"),
    ).toContain("Browser, documents");
  });

  it("decodes all five specifications", async () => {
    const onComplete = renderInteraction("specification-decoder");
    for (const answer of [
      "RAM",
      "The exact model and generation",
      "Storage capacity and drive type",
      "Incomplete evidence",
      "16 GB RAM and 512 GB SSD",
    ]) {
      fireEvent.click(screen.getByRole("button", { name: answer }));
      fireEvent.click(
        screen.getByRole("button", {
          name: /Next specification|Finish decoder/i,
        }),
      );
    }
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("makes four platform decisions from evidence", async () => {
    const onComplete = renderInteraction("platform-buying-decision");
    for (const answer of [
      "Windows is the stronger fit",
      "Both can work",
      "Mac is the stronger fit",
      "More information is required",
    ]) {
      fireEvent.click(screen.getByRole("button", { name: answer }));
      fireEvent.click(
        screen.getByRole("button", {
          name: /Next scenario|Finish platform decision/i,
        }),
      );
    }
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("audits new, refurbished, and used offers", async () => {
    const onComplete = renderInteraction("condition-offer-audit");
    for (const answer of ["Reject", "Consider", "Reject"]) {
      fireEvent.click(screen.getByRole("button", { name: answer }));
      fireEvent.click(
        screen.getByRole("button", { name: /Next offer|Finish offer audit/i }),
      );
    }
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });

  it("requires a finalist, all inspection gates, and an honest wait decision", async () => {
    const onComplete = renderInteraction("candidate-buying-mission");
    fireEvent.click(screen.getByRole("button", { name: "Select Candidate B" }));
    for (const gate of [
      "Physical condition",
      "System and ownership",
      "Functions and protection",
    ])
      fireEvent.click(screen.getByRole("button", { name: gate }));
    fireEvent.click(
      screen.getByRole("button", { name: /Wait and inspect Candidate B/i }),
    );
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
  });
});
