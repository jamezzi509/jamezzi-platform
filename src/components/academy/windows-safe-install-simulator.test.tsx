import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { WindowsSafeInstallSimulator } from "@/components/academy/windows-safe-install-simulator";

describe("WindowsSafeInstallSimulator", () => {
  it("blocks unsafe sources and explains the mistake", () => {
    render(<WindowsSafeInstallSimulator onComplete={vi.fn()} />);

    fireEvent.click(
      screen.getByRole("button", { name: /Fast Free Downloads/i }),
    );

    expect(
      screen.getByText(/domain is unrelated to the publisher/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Where should you download PhotoFix/i,
      }),
    ).toBeInTheDocument();
  });

  it("requires the complete safe-install action sequence", () => {
    const onComplete = vi.fn();
    render(<WindowsSafeInstallSimulator onComplete={onComplete} />);

    fireEvent.click(
      screen.getByRole("button", { name: /Official publisher/i }),
    );
    fireEvent.click(
      screen.getByRole("button", { name: /Open downloaded file/i }),
    );

    fireEvent.click(
      screen.getByRole("checkbox", {
        name: /Install SearchPlus browser toolbar/i,
      }),
    );
    fireEvent.click(
      screen.getByRole("checkbox", {
        name: /Make SearchPlus my browser homepage/i,
      }),
    );
    fireEvent.click(screen.getByRole("button", { name: "Continue" }));
    fireEvent.click(screen.getByRole("button", { name: "Yes" }));
    fireEvent.click(
      screen.getByRole("button", { name: /Keep protection on/i }),
    );

    expect(
      screen.getByRole("heading", {
        name: /Installation completed safely/i,
      }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Finish lesson/i }));
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it("switches the simulation interface to Haitian Creole", () => {
    render(<WindowsSafeInstallSimulator onComplete={vi.fn()} />);

    fireEvent.change(screen.getByLabelText("Language"), {
      target: { value: "ht" },
    });

    expect(
      screen.getByRole("heading", {
        name: /Ki kote ou dwe telechaje PhotoFix/i,
      }),
    ).toBeInTheDocument();
  });
});
