import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ComputerLessonPlayerV2 } from "@/components/academy/computer-lesson-player-v2";
import { computerModuleOneV2 } from "@/content/computer-course-v2";
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

  it("asks once in Lesson 2 and persists the selected path", async () => {
    render(<ComputerLessonPlayerV2 lesson={computerModuleOneV2[1]} />);

    expect(
      await screen.findByRole("heading", {
        name: /Which desktop appears on your computer/i,
      }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: /This looks like Windows/i }),
    );

    await waitFor(() =>
      expect(window.localStorage.getItem(computerPlatformStorageKey)).toBe(
        "windows",
      ),
    );
    expect(
      window.localStorage.getItem(computerPlatformVerifiedStorageKey),
    ).toBe("true");
    expect(
      await screen.findByRole("heading", {
        name: computerModuleOneV2[1].title,
      }),
    ).toBeInTheDocument();
  });

  it("does not let an older unverified saved value bypass the choice", async () => {
    window.localStorage.setItem(computerPlatformStorageKey, "windows");

    render(<ComputerLessonPlayerV2 lesson={computerModuleOneV2[1]} />);

    expect(
      await screen.findByRole("heading", {
        name: /Which desktop appears on your computer/i,
      }),
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
});
