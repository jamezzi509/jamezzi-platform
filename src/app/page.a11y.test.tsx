import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import Home from "@/app/page";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Homepage accessibility", () => {
  it("has no detectable axe violations across header, homepage sections, and footer", async () => {
    const { container } = render(
      <>
        <SiteHeader />
        <main>
          <Home />
        </main>
        <SiteFooter />
      </>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  }, 20000);
});
