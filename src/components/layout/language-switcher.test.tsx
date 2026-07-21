import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("LanguageSwitcher", () => {
  it("opens the menu and lists English, French, and Haitian Creole by name", () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByRole("button", { name: /change language/i }));

    expect(
      screen.getByRole("menuitem", { name: /english/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: /français/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: /kreyòl/i }),
    ).toBeInTheDocument();
  });

  it("closes on Escape and returns focus to the trigger", () => {
    render(<LanguageSwitcher />);
    const trigger = screen.getByRole("button", { name: /change language/i });

    fireEvent.click(trigger);
    expect(screen.getByRole("menu")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
