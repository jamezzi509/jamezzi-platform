"use client";

import { useState } from "react";
import type { ComputerLessonInteraction } from "@/content/computer-course-v2";
import type { PreferredPlatform } from "@/lib/use-computer-platform";
import { cn } from "@/lib/cn";

type Question = {
  prompt: string;
  options: string[];
  correct: number;
  why: string;
};

const labs: Record<
  string,
  { title: string; intro: string; questions: Question[] }
> = {
  "app-type-classifier": {
    title: "What exactly are you looking at?",
    intro: "Classify the object before you delete, install, or pay for it.",
    questions: [
      {
        prompt:
          "A service runs inside your browser and is reached by a saved bookmark.",
        options: ["Installed app", "Web app", "System component"],
        correct: 1,
        why: "The browser delivers the service; the bookmark is only a route.",
      },
      {
        prompt:
          "You remove an icon from the desktop, but the program remains in Installed apps.",
        options: ["Shortcut", "Subscription", "Document"],
        correct: 0,
        why: "The icon was a route to the installed program.",
      },
      {
        prompt:
          "Software came with the operating system and its removal control is unavailable.",
        options: ["Web ad", "System component", "Installer"],
        correct: 1,
        why: "Some operating-system components cannot or should not be removed.",
      },
    ],
  },
  "installed-app-locator": {
    title: "Find it, then verify it",
    intro: "Choose the route that provides the requested evidence.",
    questions: [
      {
        prompt: "Windows: you need the full installed-software list.",
        options: [
          "Settings > Apps > Installed apps",
          "Browser history",
          "Downloads",
        ],
        correct: 0,
        why: "Installed apps is the current Windows 11 verification route.",
      },
      {
        prompt: "Mac: you know the name and want the fastest search.",
        options: ["Trash", "Spotlight", "Wallpaper settings"],
        correct: 1,
        why: "Spotlight searches applications by name.",
      },
      {
        prompt:
          "A web search shows a sponsored Install button for an app you expected to have.",
        options: ["Install again", "Verify locally first", "Enter a password"],
        correct: 1,
        why: "A web result is not proof of what is installed locally.",
      },
    ],
  },
  "trusted-source-gate": {
    title: "Source gate",
    intro: "Choose Continue, Investigate, or Reject using publisher evidence.",
    questions: [
      {
        prompt:
          "The app is in the platform store and the publisher matches the official organization.",
        options: [
          "Continue to listing audit",
          "Reject automatically",
          "Disable security",
        ],
        correct: 0,
        why: "The source passes the first gate; cost, fit, and permissions still need review.",
      },
      {
        prompt:
          "A sponsored Download button leads to a misspelled look-alike domain.",
        options: ["Continue", "Reject", "Share admin password"],
        correct: 1,
        why: "A look-alike domain and ad button are strong stop signals.",
      },
      {
        prompt:
          "The school IT portal supplies a required app on a managed laptop.",
        options: [
          "Follow verified school instructions",
          "Download a crack",
          "Bypass management",
        ],
        correct: 0,
        why: "A verified managed-device portal is an appropriate organizational source.",
      },
    ],
  },
  "app-listing-audit": {
    title: "Listing audit",
    intro: "Find the term that changes the decision.",
    questions: [
      {
        prompt: "Get free today; $12/month after seven days unless cancelled.",
        options: [
          "One-time free app",
          "Automatically renewing trial",
          "No-cost system component",
        ],
        correct: 1,
        why: "The later recurring price is part of today's decision.",
      },
      {
        prompt: "The listing supports macOS, but you saved a Windows path.",
        options: [
          "Compatible",
          "Not compatible with the saved path",
          "Ratings make it compatible",
        ],
        correct: 1,
        why: "Platform compatibility is a gate, not a popularity contest.",
      },
      {
        prompt:
          "The publisher name differs from the official product publisher.",
        options: [
          "Install",
          "Investigate before continuing",
          "Ignore publisher",
        ],
        correct: 1,
        why: "Publisher identity must be resolved before installation or payment.",
      },
    ],
  },
  "safe-installer": {
    title: "Installer decision room",
    intro:
      "Respond to each screen before the simulated installer can continue.",
    questions: [
      {
        prompt:
          "The verified app installer offers an unrelated toolbar selected by default.",
        options: ["Accept everything", "Decline the extra", "Disable security"],
        correct: 1,
        why: "Unrelated bundled software is not required for the intended app.",
      },
      {
        prompt:
          "An administrator prompt appears immediately after you start the verified installer, and the publisher matches.",
        options: [
          "Review and approve if expected",
          "Send password to the site",
          "Always reject every admin prompt",
        ],
        correct: 0,
        why: "Context and matching publisher make the prompt explainable; still review it.",
      },
      {
        prompt:
          "The installer demands that antivirus or Gatekeeper be disabled.",
        options: ["Continue", "Stop and verify", "Give remote access"],
        correct: 1,
        why: "Do not weaken protection to force an installation.",
      },
    ],
  },
  "app-update-router": {
    title: "Route the update",
    intro:
      "Open a known updater yourself instead of following a stranger's prompt.",
    questions: [
      {
        prompt: "An app was installed through the platform store.",
        options: [
          "Use the store Updates area",
          "Use a random popup",
          "Reinstall the operating system",
        ],
        correct: 0,
        why: "The store normally manages its app updates.",
      },
      {
        prompt: "A verified desktop app has its own Check for Updates command.",
        options: [
          "Use that verified command",
          "Use a browser ad",
          "Share a license key publicly",
        ],
        correct: 0,
        why: "Some publishers manage updates inside their applications.",
      },
      {
        prompt: "A webpage claims it scanned every installed app.",
        options: [
          "Install its cleaner",
          "Close it and check known sources",
          "Allow remote access",
        ],
        correct: 1,
        why: "A webpage cannot be trusted as an inventory of local software.",
      },
    ],
  },
  "app-removal-lab": {
    title: "What will removal affect?",
    intro: "Separate software, launchers, documents, and billing.",
    questions: [
      {
        prompt: "You delete a taskbar or Dock shortcut.",
        options: [
          "The app is necessarily uninstalled",
          "Only the launcher is normally removed",
          "The subscription ends",
        ],
        correct: 1,
        why: "Launcher removal and software removal are different actions.",
      },
      {
        prompt: "The Mac app folder contains its own verified Uninstaller.",
        options: [
          "Use the Uninstaller",
          "Delete random support files",
          "Format the computer",
        ],
        correct: 0,
        why: "The provided remover can clean related components correctly.",
      },
      {
        prompt: "You uninstall a paid app.",
        options: [
          "Billing always stops",
          "Cancel the subscription separately",
          "Documents always disappear",
        ],
        correct: 1,
        why: "Software installation and service billing are separate.",
      },
    ],
  },
  "permission-decision-lab": {
    title: "Permission follows purpose",
    intro:
      "Choose Allow, Deny, or Investigate based on the feature being used.",
    questions: [
      {
        prompt:
          "A meeting app requests microphone access as you join an audio call.",
        options: [
          "Allow for the intended feature",
          "Reject every time",
          "Share admin password",
        ],
        correct: 0,
        why: "The permission directly supports the call you started.",
      },
      {
        prompt: "A basic calculator requests contacts and location.",
        options: [
          "Allow",
          "Deny or investigate",
          "Turn off all computer security",
        ],
        correct: 1,
        why: "The permissions do not have a clear relationship to calculation.",
      },
      {
        prompt:
          "A school-managed computer prevents changing camera permission.",
        options: [
          "Bypass management",
          "Ask the authorized administrator",
          "Install a crack",
        ],
        correct: 1,
        why: "Managed settings require authorized support, not a bypass.",
      },
    ],
  },
  "default-app-mission": {
    title: "Safe-app final mission",
    intro: "Complete the chain from need to reversible result.",
    questions: [
      {
        prompt:
          "You want one PDF to open in another compatible app only this time.",
        options: [
          "Open with",
          "Change every default",
          "Uninstall the current app",
        ],
        correct: 0,
        why: "Open with is the one-time choice.",
      },
      {
        prompt:
          "You want every .txt file to use a verified editor from now on.",
        options: [
          "Change the default for .txt",
          "Rename every file",
          "Delete Windows or macOS",
        ],
        correct: 0,
        why: "The default controls future openings for that file type.",
      },
      {
        prompt: "After testing, the app is unnecessary and has a subscription.",
        options: [
          "Delete a shortcut only",
          "Uninstall and cancel billing separately",
          "Assume closing stops billing",
        ],
        correct: 1,
        why: "Removal and subscription cancellation are separate verified actions.",
      },
    ],
  },
};

export function ComputerModuleSixInteraction({
  interaction,
  platform,
  onComplete,
}: {
  interaction: ComputerLessonInteraction;
  platform: PreferredPlatform | null;
  onComplete: () => void;
}) {
  const lab = labs[interaction.kind];
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState(
    "Choose the safest evidence-based response.",
  );
  if (!lab) return null;
  const done = step >= lab.questions.length;
  const question = lab.questions[Math.min(step, lab.questions.length - 1)];

  function choose(index: number) {
    setSelected(index);
    if (index !== question.correct) {
      setFeedback(
        "Not yet. Pause and use purpose, source, cost, compatibility, and reversibility.",
      );
      return;
    }
    setFeedback(question.why);
  }

  function next() {
    if (selected !== question.correct) return;
    if (step + 1 === lab.questions.length) {
      setStep(step + 1);
      onComplete();
      return;
    }
    setStep(step + 1);
    setSelected(null);
    setFeedback("Choose the safest evidence-based response.");
  }

  return (
    <section className="mt-12 overflow-hidden rounded-[28px] border border-[#DCD7E8] bg-white shadow-[0_20px_60px_rgba(49,42,84,.1)]">
      <header className="bg-[#272139] px-6 py-7 text-white sm:px-8">
        <p className="text-xs font-bold tracking-[.14em] text-[#B9B1FF] uppercase">
          Interactive practice ·{" "}
          {platform === "mac" ? "Mac path" : "Windows path"}
        </p>
        <h2 className="font-display mt-2 text-3xl">{lab.title}</h2>
        <p className="mt-3 max-w-3xl text-[#E5E1F0]">{lab.intro}</p>
      </header>
      <div className="p-6 sm:p-8">
        {done ? (
          <p
            role="status"
            className="rounded-2xl bg-[#EAF8EF] p-5 font-bold text-[#17633A]"
          >
            Practice passed. You explained all three decisions.
          </p>
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between text-sm font-bold text-[#696675]">
              <span>
                Decision {step + 1} of {lab.questions.length}
              </span>
              <span>{Math.round((step / lab.questions.length) * 100)}%</span>
            </div>
            <h3 className="text-xl leading-snug font-bold">
              {question.prompt}
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {question.options.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => choose(index)}
                  className={cn(
                    "min-h-24 rounded-2xl border p-4 text-left font-semibold",
                    selected === index
                      ? index === question.correct
                        ? "border-[#55A879] bg-[#EAF8EF]"
                        : "border-[#D77A72] bg-[#FFF0EE]"
                      : "border-[#DCD7E8] bg-[#F8F7FC] hover:border-[#7167E8]",
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
            <p
              role="status"
              className="mt-5 rounded-xl bg-[#F0EEFA] p-4 text-[#4E495C]"
            >
              {feedback}
            </p>
            <button
              type="button"
              disabled={selected !== question.correct}
              onClick={next}
              className="bg-indigo mt-5 rounded-full px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue →
            </button>
          </>
        )}
      </div>
    </section>
  );
}
