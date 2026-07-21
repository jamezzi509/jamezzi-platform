import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SiteFooter } from "@/components/layout/site-footer";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("SiteFooter", () => {
  it("renders the locked bottom-bar copyright line", () => {
    render(<SiteFooter />);
    expect(
      screen.getByText("© 2026 James Alexandre. All rights reserved."),
    ).toBeInTheDocument();
  });

  it("renders Privacy, Terms, and Cookies legal links", () => {
    render(<SiteFooter />);
    expect(screen.getByRole("link", { name: "Privacy" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Terms" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Cookies" })).toBeInTheDocument();
  });

  it("does not publish unfinished social links", () => {
    render(<SiteFooter />);
    for (const name of ["Facebook", "LinkedIn", "X", "Instagram"]) {
      expect(screen.queryByRole("link", { name })).not.toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: "Email" })).toBeInTheDocument();
  });

  it("does not render a newsletter form or a language switcher", () => {
    render(<SiteFooter />);
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /change language/i }),
    ).not.toBeInTheDocument();
  });
});
