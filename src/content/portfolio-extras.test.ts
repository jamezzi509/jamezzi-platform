import { describe, expect, it } from "vitest";
import { portfolioExtras } from "@/content/portfolio-extras";

describe("portfolio extras content", () => {
  it("marks Pepinyè as live and Roadize as launching soon", () => {
    const pepinye = portfolioExtras.find((item) => item.slug === "pepinye");
    const roadize = portfolioExtras.find((item) => item.slug === "roadize");

    expect(pepinye?.status).toBe("live");
    expect(roadize?.status).toBe("launching-soon");
  });
});
