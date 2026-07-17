import { describe, expect, it } from "vitest";
import { guides, dominantGuide, supportingGuides } from "@/content/guides";

describe("guides content", () => {
  it("has exactly one dominant guide", () => {
    const dominant = guides.filter((guide) => guide.dominant);
    expect(dominant).toHaveLength(1);
  });

  it("has two supporting guides", () => {
    expect(supportingGuides).toHaveLength(2);
  });

  it("features the idea-worth-building guide as dominant", () => {
    expect(dominantGuide.slug).toBe(
      "how-i-decide-whether-an-idea-is-worth-building",
    );
  });
});
