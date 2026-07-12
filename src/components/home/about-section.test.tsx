import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { AboutSection } from "@/components/home/about-section";

describe("AboutSection", () => {
  it("renders the James Alexandre photo with meaningful alt text", () => {
    render(<AboutSection />);
    const img = screen.getByAltText("James Alexandre working on a laptop.");
    expect(img).toBeInTheDocument();
    expect(img.tagName).toBe("IMG");
  });

  it("does not render any placeholder copy", () => {
    render(<AboutSection />);
    expect(screen.queryByText(/photo placeholder/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/coming soon/i)).not.toBeInTheDocument();
  });
});
