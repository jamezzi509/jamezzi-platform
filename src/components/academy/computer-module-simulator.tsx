"use client";

/**
 * Some Computer & Internet Essentials modules are standalone interactive
 * simulators (public/academy/computer-internet-essentials/module-<n>.html)
 * rather than text/block lessons. The learning-workspace route already
 * hides the site header/footer (see isLearningWorkspace in site-header.tsx
 * and site-footer.tsx), so this renders full-viewport with no extra chrome.
 */
export function ComputerModuleSimulator({
  moduleNumber,
  title,
}: {
  moduleNumber: number;
  title: string;
}) {
  return (
    <iframe
      src={`/academy/computer-internet-essentials/module-${moduleNumber}.html`}
      title={title}
      className="block h-[100dvh] w-full border-0"
    />
  );
}
