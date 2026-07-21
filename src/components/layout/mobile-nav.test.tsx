import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MobileNav } from "@/components/layout/mobile-nav";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("MobileNav", () => {
  it("opens to reveal Portfolio, Guides, About, and Sign In", () => {
    render(<MobileNav />);

    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));

    expect(
      screen.getByRole("menuitem", { name: "Portfolio" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: "Guides" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: "About" })).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: "Sign In" }),
    ).toBeInTheDocument();
  });

  it("closes on outside click", () => {
    render(
      <div>
        <MobileNav />
        <button>outside</button>
      </div>,
    );

    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    expect(screen.getByRole("menu")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByRole("button", { name: "outside" }));
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});
