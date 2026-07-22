"use client";

/**
 * Digital Marketing & AI modules are standalone interactive simulators
 * (public/academy/digital-marketing-ai/module-<n>.html), same pattern as
 * ComputerModuleSimulator. The learning-workspace route already hides the
 * site header/footer (see isLearningWorkspace in site-header.tsx and
 * site-footer.tsx), so this renders full-viewport with no extra chrome.
 */
export function DominateDigitalModuleSimulator({
  moduleNumber,
  title,
}: {
  moduleNumber: number;
  title: string;
}) {
  return (
    <iframe
      src={`/academy/digital-marketing-ai/module-${moduleNumber}.html`}
      title={title}
      className="block h-[100dvh] w-full border-0"
    />
  );
}
