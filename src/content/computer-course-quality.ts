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
    status: "needs-rebuild",
    reason:
      "Restart review: photographs exist but recognition practice is not interactive.",
  },
  {
    slug: "outside-computer-parts",
    status: "needs-rebuild",
    reason:
      "Restart review: the parts photograph needs a learner-controlled identification exercise.",
  },
  {
    slug: "recognize-computer-ports",
    status: "needs-rebuild",
    reason:
      "Restart review: connector photography needs matching and misconception feedback.",
  },
  {
    slug: "match-cables-adapters-chargers",
    status: "needs-rebuild",
    reason:
      "Restart review: the connection chain needs an interactive matching simulation.",
  },
  {
    slug: "build-accessory-setup",
    status: "needs-rebuild",
    reason:
      "Restart review: setup decisions need visual candidates and result verification.",
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
