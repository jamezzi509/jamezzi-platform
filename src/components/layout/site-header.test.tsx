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
});
