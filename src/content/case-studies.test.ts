import { describe, expect, it } from "vitest";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

describe("case studies", () => {
  it("publishes all five portfolio projects", () => {
    expect(caseStudies.map((study) => study.slug)).toEqual([
      "nichr",
      "endize",
      "clieniq",
      "roadize",
      "pepinye",
    ]);
  });

  it("provides complete reusable content for every project", () => {
    for (const study of caseStudies) {
      expect(study.challenge).toHaveLength(2);
      expect(study.solution).toHaveLength(2);
      expect(study.capabilities).toHaveLength(6);
      expect(study.outcomes).toHaveLength(4);
      expect(study.stack.length).toBeGreaterThanOrEqual(7);
      expect(study.nextProject.href).toMatch(/^\/portfolio\//);
      expect(study.image.src).toMatch(/^\/portfolio\/.+\.webp$/);
    }
  });

  it("finds a case study by slug", () => {
    expect(getCaseStudy("roadize")?.name).toBe("Roadize");
    expect(getCaseStudy("missing")).toBeUndefined();
  });
});
