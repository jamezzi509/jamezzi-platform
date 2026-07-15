import { describe, expect, it } from "vitest";
import { englishLevelOneLessons } from "@/content/english-level-one";
import { englishPremiumLessons } from "@/content/english-lessons-premium";

describe("First English curriculum", () => {
  it("moves from first words to a real conversation mission", () => {
    expect(englishLevelOneLessons[0].slug).toBe("hello-and-goodbye");
    expect(englishLevelOneLessons.at(-1)?.slug).toBe(
      "first-conversation-mission",
    );
  });

  it("exposes the complete Level 1 lesson set", () => {
    expect(
      englishLevelOneLessons.filter((lesson) => lesson.available),
    ).toHaveLength(englishLevelOneLessons.length);
  });

  it("has premium interactive content for every classroom lesson", () => {
    const premiumSlugs = new Set(
      englishPremiumLessons.map((lesson) => lesson.slug),
    );
    expect(premiumSlugs.size).toBe(englishLevelOneLessons.length);
    expect(
      englishLevelOneLessons.every((lesson) => premiumSlugs.has(lesson.slug)),
    ).toBe(true);
  });
});
