import { describe, expect, it } from "vitest";
import { computerModules } from "@/content/computer-course";

describe("Computer & Internet Essentials structure", () => {
  it("lists all 17 modules from the course brief, in order", () => {
    expect(computerModules).toHaveLength(17);
    expect(computerModules.map((module) => module.number)).toEqual(
      Array.from({ length: 17 }, (_, index) => index + 1),
    );
  });

  it("starts with Welcome to the Digital World and ends with Digital Life", () => {
    expect(computerModules[0].title).toBe("Welcome to the Digital World");
    expect(computerModules.at(-1)?.title).toBe("Digital Life");
  });
});
