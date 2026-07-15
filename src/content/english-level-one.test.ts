import { describe, expect, it } from "vitest";
import { englishLevelOneLessons } from "@/content/english-level-one";
import { englishInteractiveLessons } from "@/content/english-lessons";

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

  it("has interactive content for every classroom lesson", () => {
    expect(englishInteractiveLessons.map((lesson) => lesson.slug)).toEqual(
      englishLevelOneLessons.map((lesson) => lesson.slug),
    );
  });
});
