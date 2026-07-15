import { describe, expect, it } from "vitest";
import {
  courses,
  freeCourses,
  launchingFirstCourses,
  paidCourses,
} from "@/content/courses";

describe("academy course catalog", () => {
  it("contains the revised nine-course lineup", () => {
    expect(courses).toHaveLength(9);
    expect(freeCourses).toHaveLength(2);
    expect(paidCourses).toHaveLength(7);
  });

  it("keeps every free course at zero dollars", () => {
    expect(freeCourses.every((course) => course.price === 0)).toBe(true);
  });

  it("uses the supplied price for Make Money Online", () => {
    expect(
      courses.find((course) => course.slug === "make-money-online")?.price,
    ).toBe(147);
  });

  it("removes Start Here and prioritizes the three launch courses", () => {
    expect(courses.some((course) => course.slug === "start-here")).toBe(false);
    expect(launchingFirstCourses.map((course) => course.slug)).toEqual([
      "english-for-beginners",
      "computer-internet-essentials",
      "digital-marketing-ai",
    ]);
  });

  it("uses unique slugs", () => {
    const slugs = courses.map((course) => course.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
