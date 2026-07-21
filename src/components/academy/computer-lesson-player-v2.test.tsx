import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ComputerLessonPlayerV2 } from "@/components/academy/computer-lesson-player-v2";
import {
  computerModuleOneV2,
  computerModuleFourV2,
  computerModuleThreeV2,
  computerModuleTwoV2,
} from "@/content/computer-course-v2";
import {
  computerPlatformStorageKey,
  computerPlatformVerifiedStorageKey,
} from "@/lib/use-computer-platform";

describe("ComputerLessonPlayerV2", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.body.style.overflow = "";
  });

  it("opens universal Lesson 1 without asking for a platform", async () => {
    render(<ComputerLessonPlayerV2 lesson={computerModuleOneV2[0]} />);

    expect(
      await screen.findByRole("heading", {
        name: computerModuleOneV2[0].title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        name: /Which desktop appears on your computer/i,
      }),
    ).not.toBeInTheDocument();
  });

  it("identifies the device and persists the selected system inside Lesson 2", async () => {
    render(<ComputerLessonPlayerV2 lesson={computerModuleOneV2[1]} />);

    expect(
      await screen.findByRole("heading", {
        name: computerModuleOneV2[1].title,
      }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Laptop:/i }));
    fireEvent.click(screen.getByRole("button", { name: /^Windows/i }));

    await waitFor(() =>
      expect(window.localStorage.getItem(computerPlatformStorageKey)).toBe(
        "windows",
      ),
    );
    expect(
      window.localStorage.getItem(computerPlatformVerifiedStorageKey),
    ).toBe("true");
    expect(
      screen.getByText(/Showing your saved Windows path/i),
    ).toBeInTheDocument();
  });

  it("does not preselect an older unverified saved system", async () => {
    window.localStorage.setItem(computerPlatformStorageKey, "windows");

    render(<ComputerLessonPlayerV2 lesson={computerModuleOneV2[1]} />);

    const windowsChoice = await screen.findByRole("button", {
      name: /^Windows/i,
    });
    expect(windowsChoice).toHaveAttribute("aria-pressed", "false");
    expect(
      screen.getByText(/Choose Windows or Mac in the practice above/i),
    ).toBeInTheDocument();
  });

  it("closes mobile lesson navigation with Escape", async () => {
    render(<ComputerLessonPlayerV2 lesson={computerModuleOneV2[0]} />);
    const trigger = await screen.findByRole("button", {
      name: /Module 1 · Lessons/i,
    });
    fireEvent.click(trigger);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("uses Module 2 navigation and progress for a Module 2 lesson", async () => {
    render(<ComputerLessonPlayerV2 lesson={computerModuleTwoV2[0]} />);

    expect(
      await screen.findByRole("heading", {
        name: computerModuleTwoV2[0].title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Module 2 · Lessons/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Module 2 progress")).toBeInTheDocument();
  });

  it("uses Module 3 navigation and progress for a Module 3 lesson", async () => {
    render(<ComputerLessonPlayerV2 lesson={computerModuleThreeV2[0]} />);

    expect(
      await screen.findByRole("heading", {
        name: computerModuleThreeV2[0].title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Module 3 · Lessons/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Module 3 progress")).toBeInTheDocument();
  });

  it("uses Module 4 navigation and progress for a Module 4 lesson", async () => {
    window.localStorage.setItem(computerPlatformStorageKey, "windows");
    window.localStorage.setItem(computerPlatformVerifiedStorageKey, "true");
    render(<ComputerLessonPlayerV2 lesson={computerModuleFourV2[0]} />);

    expect(
      await screen.findByRole("heading", {
        name: computerModuleFourV2[0].title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Module 4 · Lessons/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Module 4 progress")).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /Windows laptop power button/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /desktop computer tower/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /Touch ID key.*power button/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("⊞ Start")).toBeInTheDocument();
    expect(screen.getAllByText("Restart…").length).toBeGreaterThan(0);
  });
});
