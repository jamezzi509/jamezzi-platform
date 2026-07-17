import { beforeEach, describe, expect, it } from "vitest";
import { clearCourseProgressFromBrowser } from "@/lib/course-progress";

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
