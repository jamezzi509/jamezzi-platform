import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SiteHeader } from "@/components/layout/site-header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("SiteHeader", () => {
  it("uses the logo as the only Home link and does not render a separate Home nav item", () => {
    render(<SiteHeader />);

    expect(
      screen.getByRole("link", { name: /jamezzi — home/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /^home$/i }),
    ).not.toBeInTheDocument();
  });

  it("orders desktop navigation as Portfolio, Guides, About, Academy, then Sign In", () => {
    render(<SiteHeader />);
    const nav = screen.getByRole("navigation", { name: /primary/i });
    const labels = Array.from(nav.querySelectorAll("a, button")).map((el) =>
      el.textContent?.replace("Change language", "").trim(),
    );

    expect(labels).toEqual([
      "Portfolio",
      "Guides",
      "About",
      "Academy",
      "EN",
      "Sign In",
    ]);
  });

  it("styles the mobile Academy link as a solid indigo button with a 44px touch target", () => {
    render(<SiteHeader />);
    const academyLinks = screen.getAllByRole("link", { name: "Academy" });
    const mobileAcademyLink = academyLinks[academyLinks.length - 1];

    expect(mobileAcademyLink.className).toContain("bg-indigo");
    expect(mobileAcademyLink.className).toContain("text-white");
    expect(mobileAcademyLink.className).toContain("rounded-[10px]");
    expect(mobileAcademyLink.className).toContain("min-h-11");
  });

  it("uses the Jamezzi symbol and wordmark as the only Home link", () => {
    render(<SiteHeader />);
    const homeLink = screen.getByRole("link", { name: /jamezzi — home/i });
    const img = homeLink.querySelector("img");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "");
    expect(homeLink).toHaveTextContent("Jamezzi");
  });
});
