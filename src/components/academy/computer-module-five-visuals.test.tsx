import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ModuleFiveVisual } from "@/components/academy/computer-module-five-visuals";

describe("Module 5 platform-accurate visuals", () => {
  it("shows only the Windows switcher command on the Windows path", () => {
    render(
      <ModuleFiveVisual
        visual={{ kind: "application-switching" }}
        platform="windows"
      />,
    );
    expect(screen.getByText("Alt + Tab")).toBeInTheDocument();
    expect(screen.queryByText("Command + Tab")).not.toBeInTheDocument();
    expect(screen.getByText(/open windows/i)).toBeInTheDocument();
  });

  it("shows only the Mac switcher command on the Mac path", () => {
    render(
      <ModuleFiveVisual
        visual={{ kind: "application-switching" }}
        platform="mac"
      />,
    );
    expect(screen.getByText("Command + Tab")).toBeInTheDocument();
    expect(screen.queryByText("Alt + Tab")).not.toBeInTheDocument();
    expect(screen.getByText(/running applications/i)).toBeInTheDocument();
  });

  it("does not claim the Dock has a separate universal active marker", () => {
    render(
      <ModuleFiveVisual visual={{ kind: "taskbar-dock" }} platform="mac" />,
    );
    expect(screen.getByText(/not a special Dock marker/i)).toBeInTheDocument();
    expect(screen.queryByText("Windows Taskbar")).not.toBeInTheDocument();
  });

  it("presents notifications and quick controls as separate surfaces", () => {
    render(
      <ModuleFiveVisual
        visual={{ kind: "notifications-controls" }}
        platform="windows"
      />,
    );
    expect(screen.getByText("Windows Notification Center")).toBeInTheDocument();
    expect(screen.getByText("Windows Quick Settings")).toBeInTheDocument();
    expect(
      screen.getByText(/opens Notification Center.*and Quick Settings/i),
    ).toBeInTheDocument();
  });
});
