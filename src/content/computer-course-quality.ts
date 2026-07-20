export const paidCourseQualityStandardVersion = "jamezzi-paid-course-v1";

export type CourseQualityStatus = "needs-rebuild" | "approved";

export type InstructionalVisualType = "photo" | "screen" | "diagram" | "motion";

export interface ApprovedCourseQualityEvidence {
  beginnerLanguageAudit: "passed";
  factualAudit: "passed";
  missingStepAudit: "passed";
  windowsMacAudit: "passed" | "not-applicable";
  accessibilityAudit: "passed";
  mobileAudit: "passed";
  translationAudit: "passed";
  recoveryAudit: "passed";
  visuals: {
    id: string;
    type: InstructionalVisualType;
    teaches: string;
    translatableLabels: true;
  }[];
  interactions: {
    id: string;
    verifies: string;
    keyboardAccessible: true;
  }[];
  realDevicePractice: {
    id: string;
    verifies: string;
    browserCannotVerify: true;
  }[];
}

export type ComputerLessonQualityRecord =
  | {
      slug: string;
      status: "needs-rebuild";
      reason: string;
    }
  | {
      slug: string;
      status: "approved";
      standard: typeof paidCourseQualityStandardVersion;
      evidence: ApprovedCourseQualityEvidence;
    };

const moduleTwoCommonAudit = {
  beginnerLanguageAudit: "passed",
  factualAudit: "passed",
  missingStepAudit: "passed",
  windowsMacAudit: "not-applicable",
  accessibilityAudit: "passed",
  mobileAudit: "passed",
  translationAudit: "passed",
  recoveryAudit: "passed",
} as const;

export const computerLessonQualityRecords: ComputerLessonQualityRecord[] = [
  {
    slug: "welcome-build-computer-independence",
    status: "approved",
    standard: paidCourseQualityStandardVersion,
    evidence: {
      beginnerLanguageAudit: "passed",
      factualAudit: "passed",
      missingStepAudit: "passed",
      windowsMacAudit: "not-applicable",
      accessibilityAudit: "passed",
      mobileAudit: "passed",
      translationAudit: "passed",
      recoveryAudit: "passed",
      visuals: [
        {
          id: "m1-course-method",
          type: "diagram",
          teaches: "The see, practice, and real-device learning sequence",
          translatableLabels: true,
        },
        {
          id: "m1-progress-states",
          type: "diagram",
          teaches:
            "The difference between viewing, practicing, and demonstrating",
          translatableLabels: true,
        },
      ],
      interactions: [
        {
          id: "m1-course-orientation-sandbox",
          verifies:
            "Open, answer, reset, reopen, and recover inside a sample lesson",
          keyboardAccessible: true,
        },
      ],
      realDevicePractice: [],
    },
  },
  {
    slug: "choose-windows-or-mac",
    status: "approved",
    standard: paidCourseQualityStandardVersion,
    evidence: {
      beginnerLanguageAudit: "passed",
      factualAudit: "passed",
      missingStepAudit: "passed",
      windowsMacAudit: "passed",
      accessibilityAudit: "passed",
      mobileAudit: "passed",
      translationAudit: "passed",
      recoveryAudit: "passed",
      visuals: [
        {
          id: "m1-device-family-photos",
          type: "photo",
          teaches:
            "Laptop, desktop, all-in-one, and tablet or 2-in-1 recognition",
          translatableLabels: true,
        },
        {
          id: "m1-windows-mac-desktop-comparison",
          type: "screen",
          teaches: "Visible Windows and macOS desktop recognition clues",
          translatableLabels: true,
        },
        {
          id: "m1-system-verification-panels",
          type: "screen",
          teaches: "Where Windows and macOS identify their name and version",
          translatableLabels: true,
        },
      ],
      interactions: [
        {
          id: "m1-device-system-identifier",
          verifies:
            "Separate physical device family from operating system without guessing",
          keyboardAccessible: true,
        },
      ],
      realDevicePractice: [
        {
          id: "m1-real-system-verification",
          verifies:
            "Open the real system information screen and find system name and version",
          browserCannotVerify: true,
        },
      ],
    },
  },
  {
    slug: "explore-safely",
    status: "approved",
    standard: paidCourseQualityStandardVersion,
    evidence: {
      beginnerLanguageAudit: "passed",
      factualAudit: "passed",
      missingStepAudit: "passed",
      windowsMacAudit: "not-applicable",
      accessibilityAudit: "passed",
      mobileAudit: "passed",
      translationAudit: "passed",
      recoveryAudit: "passed",
      visuals: [
        {
          id: "m1-risk-levels",
          type: "diagram",
          teaches: "Green Light, Pause, and Stop consequences",
          translatableLabels: true,
        },
      ],
      interactions: [
        {
          id: "m1-risk-classifier",
          verifies:
            "Correctly classify seven ordinary, privacy, scam, file, password, and physical-safety situations",
          keyboardAccessible: true,
        },
      ],
      realDevicePractice: [
        {
          id: "m1-reversible-volume-change",
          verifies:
            "Change and restore a low-risk setting on the real computer",
          browserCannotVerify: true,
        },
      ],
    },
  },
  {
    slug: "prepare-learning-space",
    status: "approved",
    standard: paidCourseQualityStandardVersion,
    evidence: {
      beginnerLanguageAudit: "passed",
      factualAudit: "passed",
      missingStepAudit: "passed",
      windowsMacAudit: "not-applicable",
      accessibilityAudit: "passed",
      mobileAudit: "passed",
      translationAudit: "passed",
      recoveryAudit: "passed",
      visuals: [
        {
          id: "m1-workstation-before-after",
          type: "photo",
          teaches:
            "Visible reach, airflow, liquid, glare, cable, and support problems",
          translatableLabels: true,
        },
      ],
      interactions: [
        {
          id: "m1-workstation-inspection",
          verifies: "Inspect six hotspots and build a safer arrangement",
          keyboardAccessible: true,
        },
      ],
      realDevicePractice: [
        {
          id: "m1-real-workspace-reset",
          verifies:
            "Make two real setup improvements and inspect physical warning signs",
          browserCannotVerify: true,
        },
      ],
    },
  },
  {
    slug: "recognize-computer-families",
    status: "approved",
    standard: paidCourseQualityStandardVersion,
    evidence: {
      ...moduleTwoCommonAudit,
      visuals: [
        {
          id: "m2-four-computer-family-photos",
          type: "photo",
          teaches: "Laptop, desktop, all-in-one, and 2-in-1 arrangements",
          translatableLabels: true,
        },
      ],
      interactions: [
        {
          id: "m2-family-photo-identifier",
          verifies: "Identify all four physical arrangements from photographs",
          keyboardAccessible: true,
        },
      ],
      realDevicePractice: [
        {
          id: "m2-real-device-family-inspection",
          verifies:
            "Name the learner's physical computer family from visible evidence",
          browserCannotVerify: true,
        },
      ],
    },
  },
  {
    slug: "outside-computer-parts",
    status: "approved",
    standard: paidCourseQualityStandardVersion,
    evidence: {
      ...moduleTwoCommonAudit,
      visuals: [
        {
          id: "m2-laptop-exterior-and-part-closeups",
          type: "photo",
          teaches:
            "Camera, display, keyboard, touchpad, ports, charging, power, and cooling context",
          translatableLabels: true,
        },
      ],
      interactions: [
        {
          id: "m2-exterior-hotspot-locator",
          verifies:
            "Locate exterior parts and match input, output, cooling, and power jobs",
          keyboardAccessible: true,
        },
      ],
      realDevicePractice: [
        {
          id: "m2-real-exterior-inspection",
          verifies:
            "Locate applicable parts and inspect physical warning signs without opening the case",
          browserCannotVerify: true,
        },
      ],
    },
  },
  {
    slug: "recognize-computer-ports",
    status: "approved",
    standard: paidCourseQualityStandardVersion,
    evidence: {
      ...moduleTwoCommonAudit,
      visuals: [
        {
          id: "m2-six-connector-closeups",
          type: "photo",
          teaches: "USB-A, USB-C, HDMI, Ethernet, audio, and SD recognition",
          translatableLabels: true,
        },
      ],
      interactions: [
        {
          id: "m2-port-photo-match",
          verifies:
            "Match six connector photographs and reject the USB-C capability myth",
          keyboardAccessible: true,
        },
      ],
      realDevicePractice: [
        {
          id: "m2-real-port-inventory",
          verifies:
            "Inspect visible ports without inserting or forcing a connector",
          browserCannotVerify: true,
        },
      ],
    },
  },
  {
    slug: "match-cables-adapters-chargers",
    status: "approved",
    standard: paidCourseQualityStandardVersion,
    evidence: {
      ...moduleTwoCommonAudit,
      visuals: [
        {
          id: "m2-connection-chain-photo-diagram",
          type: "photo",
          teaches:
            "Source, cable or adapter, destination, capability, and power as one chain",
          translatableLabels: true,
        },
        {
          id: "m2-power-adapter-photo",
          type: "photo",
          teaches:
            "Wall plug, cable, power adapter, and charging connector as one power chain",
          translatableLabels: true,
        },
      ],
      interactions: [
        {
          id: "m2-connection-builder",
          verifies:
            "Solve display, network, charging, and do-not-force connection decisions",
          keyboardAccessible: true,
        },
      ],
      realDevicePractice: [
        {
          id: "m2-real-accessory-connection",
          verifies: "Plan, connect, and test one owned low-risk accessory",
          browserCannotVerify: true,
        },
      ],
    },
  },
  {
    slug: "build-accessory-setup",
    status: "approved",
    standard: paidCourseQualityStandardVersion,
    evidence: {
      ...moduleTwoCommonAudit,
      visuals: [
        {
          id: "m2-ten-accessory-photos",
          type: "photo",
          teaches:
            "Mouse, keyboard, headset, webcam, external drive, hub, dock, printer, monitor, and surge protector recognition",
          translatableLabels: true,
        },
        {
          id: "m2-need-match-test-diagram",
          type: "diagram",
          teaches: "Choose by need, verify compatibility, and prove the result",
          translatableLabels: true,
        },
      ],
      interactions: [
        {
          id: "m2-accessory-planner",
          verifies:
            "Build the smallest compatible setup for a stated student need",
          keyboardAccessible: true,
        },
      ],
      realDevicePractice: [
        {
          id: "m2-module-evidence-mission",
          verifies:
            "Identify, connect or inspect, and demonstrate one useful accessory result",
          browserCannotVerify: true,
        },
      ],
    },
  },
  {
    slug: "define-computer-needs-budget",
    status: "needs-rebuild",
    reason:
      "Restart review: the buying brief needs a guided interactive builder.",
  },
  {
    slug: "read-computer-specifications",
    status: "needs-rebuild",
    reason:
      "Restart review: specifications need real listing examples and a decoder interaction.",
  },
  {
    slug: "choose-windows-or-mac-to-buy",
    status: "needs-rebuild",
    reason:
      "Restart review: platform comparison needs concrete visual examples and decision evidence.",
  },
  {
    slug: "compare-new-refurbished-used-computers",
    status: "needs-rebuild",
    reason:
      "Restart review: condition labels need real visual examples and seller-protection comparison.",
  },
  {
    slug: "compare-inspect-buy-computer",
    status: "needs-rebuild",
    reason:
      "Restart review: inspection needs a guided visual checklist and candidate-scoring interaction.",
  },
  {
    slug: "power-sleep-restart-shutdown",
    status: "needs-rebuild",
    reason:
      "Restart review: new power visuals still require beginner-language, UI, and interaction validation.",
  },
  {
    slug: "mouse-touchpad-pointer-control",
    status: "needs-rebuild",
    reason:
      "Restart review: gesture demonstrations and a real pointer-control practice board are missing.",
  },
  {
    slug: "keyboard-map-multilingual-typing",
    status: "needs-rebuild",
    reason:
      "Restart review: real keyboard photography and multilingual typing interaction are missing.",
  },
  {
    slug: "select-edit-copy-paste-text",
    status: "needs-rebuild",
    reason:
      "Restart review: editing needs a functional practice surface and complete visual sequence.",
  },
  {
    slug: "essential-keyboard-shortcuts",
    status: "needs-rebuild",
    reason:
      "Restart review: shortcut chords need visual key states and keyboard-event practice.",
  },
  {
    slug: "computer-comfort-accessibility-controls",
    status: "needs-rebuild",
    reason:
      "Restart review: accessibility controls need Windows/Mac visuals and reversible simulation.",
  },
];

export function validateApprovedCourseQuality(
  record: ComputerLessonQualityRecord,
): string[] {
  if (record.status !== "approved") return [];

  const failures: string[] = [];
  if (record.standard !== paidCourseQualityStandardVersion) {
    failures.push("uses the wrong paid-course standard version");
  }
  if (record.evidence.visuals.length === 0) {
    failures.push("has no instructional visual evidence");
  }
  const browserSkills = record.evidence.interactions.length;
  const realDeviceSkills = record.evidence.realDevicePractice.length;
  if (browserSkills + realDeviceSkills === 0) {
    failures.push("has no verifiable practice evidence");
  }
  if (
    record.evidence.visuals.some((visual) => visual.translatableLabels !== true)
  ) {
    failures.push("contains a visual without translatable labels");
  }
  if (
    record.evidence.interactions.some(
      (interaction) => interaction.keyboardAccessible !== true,
    )
  ) {
    failures.push("contains an interaction without a keyboard alternative");
  }
  return failures;
}
