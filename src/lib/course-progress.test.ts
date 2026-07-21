import { beforeEach, describe, expect, it } from "vitest";
import {
  clearCourseProgressFromBrowser,
  clearLessonProgressFromBrowser,
} from "@/lib/course-progress";

describe("clearCourseProgressFromBrowser", () => {
  beforeEach(() => window.localStorage.clear());

  it("clears only the selected course namespace", () => {
    window.localStorage.setItem("jamezzi:computer:essentials:completed", "[]");
    window.localStorage.setItem("jamezzi:computer:essentials:platform", "mac");
    window.localStorage.setItem("jamezzi:english:completed", "[]");
    window.localStorage.setItem("unrelated", "keep");

    clearCourseProgressFromBrowser("computer");

    expect(
      window.localStorage.getItem("jamezzi:computer:essentials:completed"),
    ).toBeNull();
    expect(
      window.localStorage.getItem("jamezzi:computer:essentials:platform"),
    ).toBeNull();
    expect(window.localStorage.getItem("jamezzi:english:completed")).toBe("[]");
    expect(window.localStorage.getItem("unrelated")).toBe("keep");
  });
});

describe("clearLessonProgressFromBrowser", () => {
  beforeEach(() => window.localStorage.clear());

  it("resets one module without removing another module or the platform", () => {
    const key = "jamezzi:computer:essentials:completed";
    window.localStorage.setItem(
      key,
      JSON.stringify(["m1-lesson", "m2-lesson"]),
    );
    window.localStorage.setItem(
      "jamezzi:computer:essentials:lesson-state:m2-lesson",
      "{}",
    );
    window.localStorage.setItem("jamezzi:computer:essentials:platform", "mac");

    clearLessonProgressFromBrowser(key, ["m2-lesson"]);

    expect(JSON.parse(window.localStorage.getItem(key) ?? "[]")).toEqual([
      "m1-lesson",
    ]);
    expect(
      window.localStorage.getItem(
        "jamezzi:computer:essentials:lesson-state:m2-lesson",
      ),
    ).toBeNull();
    expect(
      window.localStorage.getItem("jamezzi:computer:essentials:platform"),
    ).toBe("mac");
  });
});
