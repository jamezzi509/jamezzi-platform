import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ComputerCoursePage } from "@/components/academy/computer-course-page";

describe("ComputerCoursePage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("presents available module resume cards in learning order", async () => {
    render(<ComputerCoursePage />);

    const moduleOne = await screen.findByRole("heading", {
      name: "Your first lesson is ready.",
    });
    const moduleTwo = screen.getAllByRole("heading", {
      name: "Know the Machine in Front of You",
    })[0];
    const moduleThree = screen.getAllByRole("heading", {
      name: "Choose and Buy Your First Computer",
    })[0];
    const moduleFour = screen.getAllByRole("heading", {
      name: "Control the Computer",
    })[0];
    const moduleFive = screen.getAllByRole("heading", {
      name: "Navigate Windows or macOS",
    })[0];
    const moduleSix = screen.getAllByRole("heading", {
      name: "Apps and Settings",
    })[0];

    expect(
      moduleOne.compareDocumentPosition(moduleTwo) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      moduleTwo.compareDocumentPosition(moduleThree) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      moduleThree.compareDocumentPosition(moduleFour) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      moduleFour.compareDocumentPosition(moduleFive) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      moduleFive.compareDocumentPosition(moduleSix) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      screen.getByText(/Modules 1–6 are available now/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Open Module 5/i }),
    ).toHaveAttribute(
      "href",
      "/academy/courses/computer-internet-essentials/learn/desktop-taskbar-dock-menu-bar",
    );
    expect(
      screen.getByRole("link", { name: /Open Module 6/i }),
    ).toHaveAttribute(
      "href",
      "/academy/courses/computer-internet-essentials/learn/understand-app-program-software",
    );
  });
});
