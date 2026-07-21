import { describe, expect, it } from "vitest";
import {
  computerCourseModulesV2,
  computerLessonsV2,
  computerModuleFourV2,
  computerModuleFiveV2,
  computerModuleSixV2,
  computerModuleOneV2,
  computerModuleThreeV2,
  computerModuleTwoV2,
  getComputerLessonV2,
} from "@/content/computer-course-v2";

describe("Computer & Internet Essentials V2 architecture", () => {
  it("locks the course to 15 ordered modules with Modules 1–6 available", () => {
    expect(computerCourseModulesV2).toHaveLength(15);
    expect(computerCourseModulesV2.map((module) => module.order)).toEqual(
      Array.from({ length: 15 }, (_, index) => index + 1),
    );
    expect(computerCourseModulesV2[0].status).toBe("available");
    expect(computerCourseModulesV2[1].status).toBe("available");
    expect(computerCourseModulesV2[2].status).toBe("available");
    expect(computerCourseModulesV2[3].status).toBe("available");
    expect(computerCourseModulesV2[4].status).toBe("available");
    expect(computerCourseModulesV2[5].status).toBe("available");
    expect(
      computerCourseModulesV2
        .slice(6)
        .every((module) => module.status === "in-production"),
    ).toBe(true);
  });

  it("contains nine unique, interactive, photographed Module 6 lessons", () => {
    expect(computerModuleSixV2).toHaveLength(9);
    expect(computerModuleSixV2.map((lesson) => lesson.order)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
    expect(new Set(computerModuleSixV2.map((lesson) => lesson.slug)).size).toBe(
      9,
    );
    expect(
      computerModuleSixV2.every(
        (lesson) =>
          lesson.moduleId === "m6" &&
          lesson.interaction &&
          lesson.sections.some(
            (section) =>
              section.type === "visual" &&
              section.visual.kind.startsWith("apps-"),
          ),
      ),
    ).toBe(true);
  });

  it("contains eight unique, interactive Module 5 lessons", () => {
    expect(computerModuleFiveV2).toHaveLength(8);
    expect(computerModuleFiveV2.map((lesson) => lesson.order)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
    expect(
      new Set(computerModuleFiveV2.map((lesson) => lesson.slug)).size,
    ).toBe(8);
    expect(
      computerModuleFiveV2.every(
        (lesson) =>
          lesson.moduleId === "m5" &&
          lesson.interaction &&
          lesson.sections.some((section) => section.type === "visual"),
      ),
    ).toBe(true);
  });

  it("contains six unique, ordered Module 4 lessons", () => {
    expect(computerModuleFourV2).toHaveLength(6);
    expect(computerModuleFourV2.map((lesson) => lesson.order)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
    expect(
      new Set(computerModuleFourV2.map((lesson) => lesson.slug)).size,
    ).toBe(6);
    expect(
      computerModuleFourV2.every((lesson) => lesson.moduleId === "m4"),
    ).toBe(true);
    expect(computerModuleFourV2.every((lesson) => lesson.interaction)).toBe(
      true,
    );
  });

  it("requires every lesson from Module 4 forward to include an instructional visual", () => {
    const lessonsUnderPremiumVisualStandard = computerLessonsV2.filter(
      (lesson) => Number(lesson.moduleId.slice(1)) >= 4,
    );
    expect(
      lessonsUnderPremiumVisualStandard.every((lesson) =>
        lesson.sections.some((section) => section.type === "visual"),
      ),
    ).toBe(true);
    expect(computerModuleFourV2[0].sections).toContainEqual(
      expect.objectContaining({
        type: "visual",
        visual: { kind: "power-controls" },
      }),
    );
  });

  it("contains five unique, ordered Module 3 lessons", () => {
    expect(computerModuleThreeV2).toHaveLength(5);
    expect(computerModuleThreeV2.map((lesson) => lesson.order)).toEqual([
      1, 2, 3, 4, 5,
    ]);
    expect(
      new Set(computerModuleThreeV2.map((lesson) => lesson.slug)).size,
    ).toBe(5);
    expect(
      computerModuleThreeV2.every((lesson) => lesson.moduleId === "m3"),
    ).toBe(true);
    expect(computerModuleThreeV2.every((lesson) => lesson.interaction)).toBe(
      true,
    );
    expect(
      computerModuleThreeV2.every((lesson) =>
        lesson.sections.some((section) => section.type === "visual"),
      ),
    ).toBe(true);
  });

  it("gives beginners a concise buying baseline without treating used as old", () => {
    const moduleThreeCopy = JSON.stringify(computerModuleThreeV2);

    expect(moduleThreeCopy).toContain("16 GB memory");
    expect(moduleThreeCopy).toContain("512 GB SSD");
    expect(moduleThreeCopy).toContain("Used does not have to mean old");
    expect(moduleThreeCopy).toContain("still receives security updates");
  });

  it("contains five unique, ordered Module 2 lessons", () => {
    expect(computerModuleTwoV2).toHaveLength(5);
    expect(computerModuleTwoV2.map((lesson) => lesson.order)).toEqual([
      1, 2, 3, 4, 5,
    ]);
    expect(new Set(computerModuleTwoV2.map((lesson) => lesson.slug)).size).toBe(
      5,
    );
    expect(
      computerModuleTwoV2.every((lesson) => lesson.moduleId === "m2"),
    ).toBe(true);
    expect(computerModuleTwoV2.every((lesson) => lesson.interaction)).toBe(
      true,
    );
  });

  it("contains four unique, ordered Module 1 lessons", () => {
    expect(computerModuleOneV2).toHaveLength(4);
    expect(computerModuleOneV2.map((lesson) => lesson.order)).toEqual([
      1, 2, 3, 4,
    ]);
    expect(new Set(computerModuleOneV2.map((lesson) => lesson.slug)).size).toBe(
      4,
    );
    expect(computerModuleOneV2[0].track).toBe("universal");
    expect(computerModuleOneV2[1].track).toBe("universal");
    expect(computerModuleOneV2.every((lesson) => lesson.interaction)).toBe(
      true,
    );
  });

  it("does not resolve retired legacy assessment routes", () => {
    expect(getComputerLessonV2("final-exam")).toBeUndefined();
    expect(getComputerLessonV2("certificate")).toBeUndefined();
    expect(getComputerLessonV2("growth-summary")).toBeUndefined();
  });

  it("requires a real practice choice in the orientation lesson", () => {
    expect(computerModuleOneV2[0].practice?.taskRequirement).toBe("one");
    expect(computerModuleOneV2[0].practice?.tasks.length).toBeGreaterThan(1);
  });
});
