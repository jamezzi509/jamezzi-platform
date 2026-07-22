"use client";

/**
 * Module 1 ("You Belong in the Digital World") is a standalone interactive
 * simulator (public/academy/computer-internet-essentials/module-1.html)
 * rather than a text/block lesson. The learning-workspace route already
 * hides the site header/footer (see isLearningWorkspace in site-header.tsx
 * and site-footer.tsx), so this renders full-viewport with no extra chrome.
 */
export function ComputerModuleOneSimulator() {
  return (
    <iframe
      src="/academy/computer-internet-essentials/module-1.html"
      title="Modil 1 — Ou Gen Plas Ou nan Monn Dijital la"
      className="block h-[100dvh] w-full border-0"
    />
  );
}
