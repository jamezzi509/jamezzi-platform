import { computerModuleFourV2 } from "@/content/computer-course-module-four";
import { computerModuleFiveV2 } from "@/content/computer-course-module-five";

export { computerModuleFourV2 } from "@/content/computer-course-module-four";
export { computerModuleFiveV2 } from "@/content/computer-course-module-five";

export type CourseTrack = "universal" | "windows-mac";

export type ComputerLessonInteraction =
  | { kind: "course-orientation" }
  | { kind: "identify-device-and-system" }
  | { kind: "risk-classifier" }
  | { kind: "workspace-inspection" }
  | { kind: "computer-family-identifier" }
  | { kind: "outside-parts-locator" }
  | { kind: "port-photo-match" }
  | { kind: "connection-builder" }
  | { kind: "accessory-planner" }
  | { kind: "buying-brief-builder" }
  | { kind: "specification-decoder" }
  | { kind: "platform-buying-decision" }
  | { kind: "condition-offer-audit" }
  | { kind: "candidate-buying-mission" }
  | { kind: "power-decision-simulator" }
  | { kind: "pointer-control-circuit" }
  | { kind: "keyboard-key-trainer" }
  | { kind: "text-editing-workbench" }
  | { kind: "shortcut-key-trainer" }
  | { kind: "accessibility-simulator" }
  | { kind: "desktop-identifier" }
  | { kind: "window-control-simulator" }
  | { kind: "taskbar-dock-lab" }
  | { kind: "app-switcher-lab" }
  | { kind: "interface-control-lab" }
  | { kind: "window-arrangement-lab" }
  | { kind: "notification-triage" }
  | { kind: "missing-window-recovery" };

export type LessonVisual =
  | { kind: "course-method" }
  | { kind: "journey" }
  | { kind: "progress" }
  | { kind: "os-clues" }
  | { kind: "system-verification" }
  | { kind: "risk-levels" }
  | { kind: "workstation" }
  | { kind: "computer-families" }
  | { kind: "outside-parts" }
  | { kind: "port-map" }
  | { kind: "cable-match" }
  | { kind: "accessory-chain" }
  | { kind: "buying-needs" }
  | { kind: "specification-parts" }
  | { kind: "buying-platforms" }
  | { kind: "condition-comparison" }
  | { kind: "buying-inspection" }
  | { kind: "power-controls" }
  | { kind: "pointer-controls" }
  | { kind: "keyboard-map" }
  | { kind: "text-editing" }
  | { kind: "shortcut-map" }
  | { kind: "comfort-controls" }
  | { kind: "desktop-anatomy" }
  | { kind: "window-anatomy" }
  | { kind: "taskbar-dock" }
  | { kind: "application-switching" }
  | { kind: "interface-controls" }
  | { kind: "window-layout" }
  | { kind: "notifications-controls" }
  | { kind: "screen-recovery" };

export type LessonSection =
  | {
      type: "prose";
      eyebrow?: string;
      title: string;
      paragraphs: string[];
    }
  | {
      type: "visual";
      title: string;
      caption: string;
      visual: LessonVisual;
    }
  | {
      type: "comparison";
      title: string;
      items: {
        label: string;
        description: string;
        tone?: "plain" | "good" | "warn";
      }[];
    }
  | {
      type: "steps";
      eyebrow?: string;
      title: string;
      intro?: string;
      tracks?: {
        windows: { steps: string[]; success: string };
        mac: { steps: string[]; success: string };
      };
      steps?: string[];
      success?: string;
      recovery?: string;
    }
  | {
      type: "decision";
      title: string;
      prompt: string;
      answer: string;
      tone: "green" | "pause" | "stop";
    }
  | {
      type: "callout";
      title: string;
      body: string;
      tone: "info" | "warning" | "success";
    };

export interface CoursePractice {
  title: string;
  intro: string;
  tasks: string[];
  taskRequirement?: "one" | "all";
  evidence: string[];
  privacyNote?: string;
}

export interface CourseCheck {
  prompt: string;
  options: string[];
  correctIndex: number;
  correctFeedback: string;
  incorrectFeedback: string;
}

export interface ComputerLessonV2 {
  id: string;
  slug: string;
  moduleId: "m1" | "m2" | "m3" | "m4" | "m5";
  order: number;
  title: string;
  promise: string;
  estimatedMinutes: string;
  track: CourseTrack;
  badges: string[];
  outcomes: string[];
  sections: LessonSection[];
  interaction?: ComputerLessonInteraction;
  practice?: CoursePractice;
  check: CourseCheck;
  closing: string;
  nextTitle?: string;
  verifiedAt: string;
}

export const computerCourseModulesV2 = [
  [
    "Start with Confidence",
    "Prepare the learner, verify the operating system, judge risk, and set up the learning space.",
  ],
  [
    "Know the Machine in Front of You",
    "Recognize computer types, parts, ports, cables, and accessories.",
  ],
  [
    "Choose and Buy Your First Computer",
    "Turn real needs and budget into a Windows PC or Mac choice, read specifications without sales jargon, compare new and used options, and inspect a computer before paying.",
  ],
  [
    "Control the Computer",
    "Use power controls, mouse, touchpad, keyboard, shortcuts, and accessibility tools.",
  ],
  [
    "Navigate Windows or macOS",
    "Understand the desktop, windows, menus, notifications, and multitasking.",
  ],
  [
    "Apps and Settings",
    "Find, install, remove, update, and configure trustworthy software.",
  ],
  [
    "Files and Folders Without Confusion",
    "Create, organize, retrieve, move, copy, delete, restore, and compress files.",
  ],
  [
    "Documents and PDFs for Real Life",
    "Create, save, export, read, fill, sign, and share everyday documents.",
  ],
  [
    "Internet and Wi-Fi",
    "Understand the connection chain, connect safely, and locate common failures.",
  ],
  [
    "Browser, Search, Downloads, and Uploads",
    "Navigate the web deliberately and judge sources and prompts.",
  ],
  [
    "Email and Online Communication",
    "Write clear messages, handle attachments, organize mail, and join meetings.",
  ],
  [
    "Accounts, Passwords, Privacy, and Scams",
    "Protect accounts and respond appropriately to suspicious activity.",
  ],
  [
    "Storage, Backup, Printing, and Scanning",
    "Protect important files and move information between physical and digital forms.",
  ],
  [
    "Maintenance and Troubleshooting",
    "Use an evidence-based process for common computer problems.",
  ],
  [
    "Final Independence Mission",
    "Combine the course skills and verify readiness with real evidence.",
  ],
].map(([title, purpose], index) => ({
  id: `v2-m${index + 1}`,
  order: index + 1,
  title,
  purpose,
  status: index < 5 ? ("available" as const) : ("in-production" as const),
}));

export const computerModuleOneV2: ComputerLessonV2[] = [
  {
    id: "m1-l1-v2",
    slug: "welcome-build-computer-independence",
    moduleId: "m1",
    order: 1,
    title: "How This Course Works",
    promise:
      "Learn how to move through a lesson, practice safely, check a result, and reset without damaging your progress.",
    estimatedMinutes: "8–10 minutes",
    track: "universal",
    badges: ["Read anywhere", "Course orientation"],
    outcomes: [
      "Recognize the lesson menu, practice area, result check, and progress control.",
      "Explain why opening a page is different from demonstrating a skill.",
      "Use and reset a sample activity without changing real progress.",
    ],
    sections: [
      {
        type: "prose",
        eyebrow: "Start here",
        title: "You do not need to know the computer already",
        paragraphs: [
          "A lesson is one part of the course. It explains one skill and gives you a safe place to practice it. A module is a group of lessons that work toward a larger result.",
          "The lesson menu moves between lessons. The practice area lets you try the skill. The result check asks what actually happened. Progress is recorded only after the required practice and question are complete.",
          "If you make a mistake in a course activity, use its Reset button and try again. Resetting a sample is not the same as deleting your files or resetting the computer.",
        ],
      },
      {
        type: "visual",
        title: "How each skill becomes useful",
        caption:
          "First see the idea, then practice it safely, then use it on the real computer and check the result.",
        visual: { kind: "course-method" },
      },
      {
        type: "prose",
        title: "Practice comes before course credit",
        paragraphs: [
          "Seeing an instruction helps you understand it. Practicing shows whether you can perform it. A result check confirms what happened after the action.",
          "Some skills can be checked inside the course, such as choosing, typing, or dragging. Other skills must happen on the real computer. For those, the lesson tells you exactly what result to look for and when to stop.",
        ],
      },
      {
        type: "visual",
        title: "Three kinds of progress",
        caption:
          "Not started means no practice is recorded. Practicing means you are working through the activity. Demonstrated means the required practice and result check were completed.",
        visual: { kind: "progress" },
      },
      {
        type: "callout",
        title: "Your screen may not look identical",
        body: "Your screen may use a different language, color, version, or layout. Follow the written label and the surrounding clues—not color alone. If the named control is missing, stop and use the recovery instructions instead of choosing random buttons.",
        tone: "info",
      },
    ],
    interaction: { kind: "course-orientation" },
    practice: {
      title: "Choose your reason for learning",
      intro:
        "After completing the sample activity above, choose one reason that makes this course useful to you.",
      tasks: [
        "I want to use a computer without fear.",
        "I want to manage my documents and files.",
        "I want to use a computer for work or school.",
        "I want to communicate and complete online tasks.",
        "I want to protect myself from scams and mistakes.",
        "I want to solve basic problems without immediately calling someone.",
      ],
      taskRequirement: "one",
      evidence: [
        "I completed and reset the sample activity.",
        "I selected at least one useful goal.",
      ],
    },
    check: {
      prompt:
        "A learner opens a lesson about changing volume but does not try the practice. What has happened?",
      options: [
        "The skill has been mastered.",
        "The lesson was viewed, but the practice is not yet complete.",
        "The checkpoint has automatically been passed.",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Reading builds understanding; practice is the separate step where the learner performs the skill and verifies the result.",
      incorrectFeedback:
        "Not yet. Opening or reading a lesson does not prove the learner performed the skill. Practice and checkpoint evidence are recorded separately.",
    },
    closing:
      "You can now use the lesson controls and recover inside a sample. Next, identify the physical computer and the system shown on its screen.",
    nextTitle: "Identify Your Computer and Its System",
    verifiedAt: "2026-07-17",
  },
  {
    id: "m1-l2-v2",
    slug: "choose-windows-or-mac",
    moduleId: "m1",
    order: 2,
    title: "Identify Your Computer and Its System",
    promise:
      "Separate the physical device from the software on its screen, then verify Windows, Mac, or an honest unsure result.",
    estimatedMinutes: "10–15 minutes",
    track: "universal",
    badges: ["Practice on your computer", "Windows + Mac"],
    outcomes: [
      "Name the physical device as a laptop, desktop, all-in-one, or 2-in-1.",
      "Identify whether the computer uses Windows or macOS without using case color or wallpaper as proof.",
      "Confirm the system and version from the computer’s information screen.",
      "Select the correct course track without guessing from brand alone.",
    ],
    sections: [
      {
        type: "prose",
        eyebrow: "Two different questions",
        title: "The device is physical; the operating system is software",
        paragraphs: [
          "Laptop, desktop, all-in-one, and 2-in-1 describe the physical computer. You can see and touch the device.",
          "The operating system is the main software that starts when the computer turns on. It displays the desktop, opens apps, manages files, and provides settings. This course gives separate instructions for Windows 11 and macOS when their labels or locations differ.",
          "A Windows laptop and a MacBook are both laptops. The word laptop alone does not tell you which operating system appears on the screen.",
        ],
      },
      {
        type: "visual",
        title: "Recognition clues—not final proof",
        caption:
          "The desktop provides clues. Verification comes from the computer’s own information screen.",
        visual: { kind: "os-clues" },
      },
      {
        type: "visual",
        title: "What the verification screen should contain",
        caption:
          "Windows places its edition and version under Windows specifications. About This Mac displays the macOS name and version. Do not copy serial numbers, product keys, account email addresses, or passwords into the course.",
        visual: { kind: "system-verification" },
      },
      {
        type: "steps",
        eyebrow: "Verify from the computer",
        title: "Find the operating-system name and version",
        intro:
          "Follow only the track that matches your computer. Do not record a serial number, product key, account email, or password.",
        tracks: {
          windows: {
            steps: [
              "Open Start, then open Settings.",
              "Select System.",
              "Select About. You may need to scroll.",
              "Under Windows specifications, read the Edition and Version fields.",
            ],
            success:
              "The page identifies Windows under Windows specifications and displays an edition and version.",
          },
          mac: {
            steps: [
              "Open the Apple menu  in the upper-left corner.",
              "Select About This Mac.",
              "Read the macOS name and version number.",
            ],
            success:
              "The window identifies macOS and displays its name and version number.",
          },
        },
        recovery:
          "If neither route matches, you may be using ChromeOS, an older or different system, a restricted work/school device, or a remote computer. Record what you see and ask a trusted person to identify it before changing important settings.",
      },
      {
        type: "callout",
        title: "Privacy boundary",
        body: "Record only the operating-system family, name or edition, and version. Do not enter a serial number, product key, account email, or device password into the course.",
        tone: "warning",
      },
    ],
    interaction: { kind: "identify-device-and-system" },
    practice: {
      title: "Verify your system",
      intro:
        "Use the computer’s own information screen and collect only the evidence below.",
      tasks: [
        "Open the correct system-information screen.",
        "Find the operating-system name.",
        "Find the edition or version information shown.",
        "Choose the matching Windows or Mac course track.",
      ],
      evidence: [
        "I verified the system from the computer itself.",
        "I did not enter private device or account information into the course.",
      ],
      privacyNote:
        "Never paste a serial number, product key, email address, password, or verification code here.",
    },
    check: {
      prompt:
        "An HP laptop has a Windows key. What is the strongest evidence that it runs Windows 11?",
      options: [
        "The HP logo.",
        "The shape of the laptop.",
        "System > About identifies Windows 11 under Windows specifications.",
      ],
      correctIndex: 2,
      correctFeedback:
        "Correct. The brand and keyboard are clues; the system-information page directly identifies the installed operating system.",
      incorrectFeedback:
        "A brand or keyboard is only a clue. The operating system’s own information page is stronger evidence.",
    },
    closing:
      "You separated the device from the system and checked the system’s own information. Next, judge what is safe to explore and what requires a pause or stop.",
    nextTitle: "Green Light, Pause, or Stop",
    verifiedAt: "2026-07-17",
  },
  {
    id: "m1-l3-v2",
    slug: "explore-safely",
    moduleId: "m1",
    order: 3,
    title: "Green Light, Pause, or Stop",
    promise:
      "Judge an unfamiliar action by what it can change, then choose whether to continue, pause, or stop.",
    estimatedMinutes: "12–15 minutes",
    track: "universal",
    badges: ["Decision practice", "Safety foundation"],
    outcomes: [
      "Classify an action as safe to explore, requiring a pause, or requiring help.",
      "Recognize actions that can affect files, accounts, money, privacy, or the system.",
      "Use four questions before accepting an unfamiliar prompt.",
    ],
    sections: [
      {
        type: "prose",
        eyebrow: "Judge the possible result",
        title: "A button's color does not tell you whether it is safe",
        paragraphs: [
          "Green Light means the action is ordinary, low-consequence, and easy to reverse. Pause means you need to read, verify, save, or ask a question first. Stop means money, secrets, permanent loss, unknown software, physical danger, or unclear ownership is involved.",
          "A green button can still cause a risky action. A red message can be a fake warning. Read what the action will do and decide from the consequence.",
        ],
      },
      {
        type: "visual",
        title: "Three action levels",
        caption:
          "The level depends on the possible consequence and the context—not only the color or appearance of a button.",
        visual: { kind: "risk-levels" },
      },
      {
        type: "comparison",
        title: "Examples at each level",
        items: [
          {
            label: "Green light",
            description:
              "Open a menu, scroll, resize a window, change volume, type in a practice document, or look inside a folder you recognize.",
            tone: "good",
          },
          {
            label: "Pause",
            description:
              "Install software, grant camera/location/file access, upload information, delete or replace a file, change account recovery, subscribe, purchase, or restart with unsaved work.",
            tone: "warn",
          },
          {
            label: "Stop",
            description:
              "Unexpected urgent payment, remote-access demand, fake virus phone number, erase/reset action, request for secrets, liquid damage, swelling, smoke, sparks, burning smell, or dangerous heat.",
            tone: "plain",
          },
        ],
      },
      {
        type: "steps",
        title: "The four-question pause",
        steps: [
          "Did I start this action?",
          "Who is asking—and how did I verify them?",
          "What will change if I continue?",
          "Can I cancel and verify through an official route?",
        ],
        success:
          "You can explain the likely consequence and verify the source before accepting the request.",
      },
      {
        type: "decision",
        title: "Opening the Start menu",
        prompt: "You open the Start menu only to see which apps are installed.",
        answer:
          "Green light. Opening a menu is ordinary navigation and does not install or remove anything.",
        tone: "green",
      },
      {
        type: "decision",
        title: "A microphone request",
        prompt:
          "A trusted meeting app asks to use the microphone as you attempt to join a meeting.",
        answer:
          "Pause. The request may be reasonable, but confirm the app and understand that permission allows microphone use.",
        tone: "pause",
      },
      {
        type: "decision",
        title: "A browser demands a phone call",
        prompt:
          "A browser page flashes red and says your computer is infected and you must call support now.",
        answer:
          "Stop. Do not call the displayed number or install anything from the page. Use a separately verified support route if help is needed.",
        tone: "stop",
      },
      {
        type: "callout",
        title: "If you already clicked",
        body: "Stop interacting, read and record the exact message without entering secrets, and use a separate trusted route for help if money, an account, remote access, or private information may be involved. Do not keep clicking in panic.",
        tone: "warning",
      },
    ],
    interaction: { kind: "risk-classifier" },
    practice: {
      title: "Try one reversible Green Light action",
      intro:
        "The seven scenarios above are checked automatically. Now perform one harmless change on the real computer and restore it.",
      tasks: [
        "Change the volume by a small amount, confirm that it changed, then return it to a comfortable level.",
      ],
      evidence: [
        "I completed all seven browser scenarios correctly.",
        "I changed and restored one low-risk setting on the real computer.",
      ],
    },
    check: {
      prompt: "Which action belongs in the Pause category?",
      options: [
        "Scrolling through this lesson.",
        "A website requests permission to access your location.",
        "Smoke is coming from the computer.",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. A location request may be legitimate, but it affects privacy and should be understood before approval.",
      incorrectFeedback:
        "Scrolling is ordinarily low-risk. Smoke is a physical danger that requires stopping. A location request is the action that requires a pause and informed choice.",
    },
    closing:
      "You can now judge an action by its possible result. Next, inspect the physical space around the computer.",
    nextTitle: "Prepare a Safe, Comfortable Learning Space",
    verifiedAt: "2026-07-17",
  },
  {
    id: "m1-l4-v2",
    slug: "prepare-learning-space",
    moduleId: "m1",
    order: 4,
    title: "Prepare a Safe, Comfortable Learning Space",
    promise:
      "Improve the screen, controls, support, airflow, power, and cables using the equipment you already have.",
    estimatedMinutes: "12–20 minutes",
    track: "universal",
    badges: ["Practice on your computer", "Physical setup"],
    outcomes: [
      "Arrange the screen, keyboard, pointing device, chair, light, charger, and cables more safely.",
      "Identify discomfort or physical warning signs that require adjustment or a break.",
      "Complete a practical setup inspection before longer sessions.",
    ],
    sections: [
      {
        type: "prose",
        eyebrow: "Your environment matters",
        title: "A useful setup does not need to look expensive",
        paragraphs: [
          "A powerful computer can still be difficult to use if the screen is hard to see, the mouse requires reaching, the charger creates a trip hazard, or your body stays in one uncomfortable position.",
          "There is no single arrangement that fits every body, room, or device. The goal is to reduce awkward positions and make small adjustments based on comfort and the work you are doing.",
          "If you have pain, an injury, a disability, or a medical condition, general workstation guidance may not meet your needs. Use appropriate professional guidance and accessibility tools.",
        ],
      },
      {
        type: "visual",
        title: "Seven areas to inspect",
        caption:
          "Improve what you can with the furniture and equipment available. Safety and readability matter more than creating a perfect office photograph.",
        visual: { kind: "workstation" },
      },
      {
        type: "comparison",
        title: "Practical adjustments",
        items: [
          {
            label: "Screen",
            description:
              "Place it in front of you, reduce glare, and enlarge text instead of repeatedly leaning forward.",
          },
          {
            label: "Keyboard and mouse",
            description:
              "Keep them close enough for relaxed shoulders and avoid prolonged sharply bent wrists.",
          },
          {
            label: "Body support",
            description:
              "Use a stable chair, support your back and feet as available, and change position periodically.",
          },
          {
            label: "Airflow",
            description:
              "Keep vents open and place the computer on a stable surface rather than soft bedding or cushions.",
          },
          {
            label: "Power and liquids",
            description:
              "Keep drinks away from the computer and electrical equipment; stop using damaged power equipment.",
          },
          {
            label: "Cables",
            description:
              "Route cables away from walkways and places where they can pull the computer down.",
          },
          {
            label: "Attention",
            description:
              "Have power available, enough light, a place for notes, and fewer avoidable distractions.",
          },
        ],
      },
      {
        type: "callout",
        title: "Physical stop signs",
        body: "Stop using the device and get appropriate help for smoke, sparks, burning smell, exposed wires, liquid damage, a visibly swollen battery, or persistent dangerous heat. This course does not ask you to repair electrical or battery hazards.",
        tone: "warning",
      },
      {
        type: "steps",
        title: "Five-minute setup reset",
        steps: [
          "Place the screen in front of you and make the lesson readable without leaning or squinting.",
          "Bring the keyboard and pointing device within comfortable reach.",
          "Support your feet and back as well as your available furniture allows.",
          "Confirm the computer is stable and its vents are open.",
          "Move drinks and route cables away from danger areas.",
          "Check for damaged cords, swelling, abnormal heat, smell, smoke, or sparks.",
          "Remove one distraction and decide when you will change position or move.",
        ],
        success:
          "The lesson is readable, controls are within reach, the computer is stable with open vents, and no physical warning sign is present.",
      },
    ],
    interaction: { kind: "workspace-inspection" },
    practice: {
      title: "Improve your real learning space",
      intro:
        "The hotspot and builder activities above are checked automatically. Now make at least two useful improvements around the real device. Expensive furniture is not required.",
      tasks: [
        "Make at least two improvements: screen readability, control reach, support, airflow, liquids, cables, or distractions.",
        "Inspect the device and power equipment for smoke, sparks, burning smell, exposed wires, swelling, liquid damage, or dangerous heat.",
      ],
      evidence: [
        "I can read without leaning or squinting.",
        "The controls are within comfortable reach.",
        "The computer is stable and vents are open.",
        "No physical warning sign requires me to stop.",
      ],
    },
    check: {
      prompt:
        "A laptop is on a soft pillow and its underside feels unusually hot. What is the best first action?",
      options: [
        "Continue because laptops work safely on every surface.",
        "Move it to a stable hard surface with open vents and stop if dangerous heat continues.",
        "Place another pillow underneath it.",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Soft material can block airflow and create an unstable setup. Continuing dangerous heat requires stopping and appropriate help.",
      incorrectFeedback:
        "A soft surface can block airflow. Move the computer to a stable hard surface and stop if dangerous heat or another warning sign continues.",
    },
    closing:
      "Module 1 is complete when you have verified your system, can judge unfamiliar actions, and have improved the learning space using evidence—not when you merely reach the bottom of the page.",
    verifiedAt: "2026-07-17",
  },
];

export const computerModuleTwoV2: ComputerLessonV2[] = [
  {
    id: "m2-l1-v2",
    slug: "recognize-computer-families",
    moduleId: "m2",
    order: 1,
    title: "Recognize the Computer in Front of You",
    promise:
      "Tell a laptop, desktop, all-in-one, and tablet-style computer apart—and know what that difference changes.",
    estimatedMinutes: "10–12 minutes",
    track: "universal",
    badges: ["Visual identification", "No jargon required"],
    outcomes: [
      "Name the main physical computer families from visible evidence.",
      "Separate the device type from its operating system and manufacturer.",
      "Locate the computer unit that contains the processor, memory, and storage.",
    ],
    sections: [
      {
        type: "prose",
        eyebrow: "Begin with what is physical",
        title: "Device type is not operating system",
        paragraphs: [
          "Laptop, desktop, all-in-one, and tablet describe physical arrangements. Windows, macOS, and ChromeOS are operating systems. Dell, HP, Lenovo, and Apple are manufacturers. These labels answer different questions and should not be used as substitutes for one another.",
          "The computer unit contains the main processing hardware, memory, and storage. In a laptop it sits beneath the keyboard. In a desktop it is usually a separate tower or small box. In an all-in-one it is built into the display housing.",
        ],
      },
      {
        type: "visual",
        title: "Four common computer families",
        caption:
          "Identify the arrangement first. Brand, color, and screen wallpaper are not reliable evidence of the device family.",
        visual: { kind: "computer-families" },
      },
      {
        type: "comparison",
        title: "What changes with the form",
        items: [
          {
            label: "Laptop",
            description:
              "Screen, keyboard, pointing surface, battery, and computer unit travel together.",
          },
          {
            label: "Desktop",
            description:
              "A separate computer unit connects to a monitor, keyboard, mouse, and power.",
          },
          {
            label: "All-in-one",
            description:
              "The computer unit and display share one housing; keyboard and mouse remain separate.",
          },
          {
            label: "Tablet or 2-in-1",
            description:
              "Touch is central. A detachable or folding keyboard may change how it is used.",
          },
        ],
      },
      {
        type: "callout",
        title: "A Chromebook is not simply a Windows laptop",
        body: "A Chromebook may look like another laptop but normally runs ChromeOS. This course's split procedures cover Windows 11 and macOS. Do not choose Windows merely because the computer is not a Mac.",
        tone: "warning",
      },
    ],
    interaction: { kind: "computer-family-identifier" },
    practice: {
      title: "Identify your physical setup",
      intro:
        "Look at the arrangement—not the logo—and select every statement you verified.",
      tasks: [
        "I identified whether the computer unit is beneath the keyboard, inside the display, or in a separate case.",
        "I identified whether the keyboard and pointing device are built in or separate.",
        "I named the device family without using the operating-system name as evidence.",
      ],
      evidence: [
        "I can name the physical computer family and point to the computer unit.",
      ],
    },
    check: {
      prompt:
        "A computer has a separate monitor, keyboard, mouse, and tower. Which description is strongest?",
      options: [
        "A Windows computer",
        "A desktop computer",
        "A Dell operating system",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. The separate computer unit and peripherals identify the desktop arrangement; they do not prove the brand or operating system.",
      incorrectFeedback:
        "Use the visible physical arrangement. A separate tower and monitor identify a desktop, while brand and operating system require different evidence.",
    },
    closing:
      "You can now identify the arrangement. Next, learn the outside parts you can inspect safely without opening the computer.",
    nextTitle: "Know the Parts You Can See and Touch",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m2-l2-v2",
    slug: "outside-computer-parts",
    moduleId: "m2",
    order: 2,
    title: "Know the Parts You Can See and Touch",
    promise:
      "Build a useful map of the screen, camera, microphone, keyboard, pointing device, speakers, vents, and power controls.",
    estimatedMinutes: "12–15 minutes",
    track: "universal",
    badges: ["Hands-on inspection", "Safe handling"],
    outcomes: [
      "Locate common exterior parts without opening the computer.",
      "Explain the difference between input, output, power, and cooling parts.",
      "Inspect vents and physical warning signs safely.",
    ],
    sections: [
      {
        type: "prose",
        eyebrow: "Build the map before touching anything",
        title: "The outside parts have different jobs",
        paragraphs: [
          "An exterior part is a part you can see or use without opening the computer. The display is the surface that shows pictures and words. On a desktop, the display is usually called a monitor; the separate tower or small box is the computer unit. Turning off the monitor does not necessarily turn off the computer.",
          "A camera captures video, a microphone captures sound, and speakers play sound. A keyboard enters letters and commands. A mouse, touchpad, or touchscreen moves or selects what is on the screen. These are controls you use; they are not the same thing as the operating system.",
          "The power button starts the computer. The charging port receives power from a compatible charger. Cooling vents let air and heat move. Do not cover vents, probe an unknown opening, or open the case for this lesson.",
        ],
      },
      {
        type: "visual",
        title: "A practical outside-parts map",
        caption:
          "Your model may place parts elsewhere. Use the function and the manufacturer's guide when a symbol or opening is unclear.",
        visual: { kind: "outside-parts" },
      },
      {
        type: "comparison",
        title: "Four jobs the parts perform",
        items: [
          {
            label: "Input",
            description:
              "Keyboard, mouse, touchpad, touchscreen, camera, and microphone send information into the computer.",
          },
          {
            label: "Output",
            description:
              "Display, speakers, and connected printers present information from the computer.",
          },
          {
            label: "Power",
            description:
              "Power button, battery, charging port, adapter, and cable supply or control electrical power.",
          },
          {
            label: "Cooling",
            description:
              "Vents and fans move heat away. Blocking them can reduce cooling.",
          },
        ],
      },
      {
        type: "steps",
        title: "Inspect without taking anything apart",
        steps: [
          "Save your work and place the computer on a stable, dry surface.",
          "Locate the display, camera area, keyboard, pointing device, speakers, and power button.",
          "Look along the sides and back for vents and connection openings.",
          "Check for damage, swelling, liquid, smoke, sparks, burning smell, or dangerous heat.",
        ],
        success:
          "You can point to the common exterior parts without forcing, probing, or opening the case.",
        recovery:
          "If you see swelling, smoke, sparks, liquid damage, a burning smell, or dangerous heat, stop using and charging the device and seek qualified help. Do not press or puncture a swollen battery area.",
      },
      {
        type: "callout",
        title: "An opening is not automatically a vent",
        body: "Ports, speaker grilles, microphone holes, and vents can look similar. Never insert a tool or cable merely because it seems to fit. Look for a label, symbol, model guide, or known connector shape.",
        tone: "warning",
      },
    ],
    interaction: { kind: "outside-parts-locator" },
    practice: {
      title: "Point, name, and explain",
      intro:
        "Using your own computer or a trusted photo, locate the parts without opening the case.",
      tasks: [
        "Point to two input parts.",
        "Point to two output parts.",
        "Locate the power control and charging connection.",
        "Locate a likely cooling vent without inserting anything into it.",
      ],
      evidence: [
        "I can name each part and explain its job.",
        "I completed the inspection without forcing or opening anything.",
      ],
    },
    check: {
      prompt:
        "You find a narrow opening on the side of a laptop but cannot identify it. What should you do?",
      options: [
        "Test every cable until one fits",
        "Use its symbol, model guide, or specifications to identify it",
        "Push a paper clip into it",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Identification comes before insertion. Symbols and model documentation are safer evidence than trial and force.",
      incorrectFeedback:
        "Do not probe or force an unknown opening. Identify it from a symbol, known shape, or the model's documentation first.",
    },
    closing:
      "You have a safe exterior map. Next, organize ports by the job they can perform rather than memorizing a wall of names.",
    nextTitle: "Recognize Ports by Purpose",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m2-l3-v2",
    slug: "recognize-computer-ports",
    moduleId: "m2",
    order: 3,
    title: "Recognize Ports by Purpose",
    promise:
      "Identify the most common connection shapes and avoid the dangerous assumption that matching shapes guarantee matching abilities.",
    estimatedMinutes: "15–18 minutes",
    track: "universal",
    badges: ["Port map", "USB-C truth"],
    outcomes: [
      "Recognize common USB-A, USB-C, HDMI, audio, Ethernet, and SD openings.",
      "Match a port to data, display, network, audio, storage, or power purposes.",
      "Explain why USB-C shape alone does not prove speed, video, or charging capability.",
    ],
    sections: [
      {
        type: "visual",
        title: "Recognize each connector from a real close-up",
        caption:
          "Shape starts the search; purpose finishes it. Confirm the exact capability in the device specifications before buying a cable or adapter.",
        visual: { kind: "port-map" },
      },
      {
        type: "comparison",
        title: "Common purposes",
        items: [
          {
            label: "USB-A",
            description:
              "Rectangular USB connector used by many keyboards, mice, printers, flash drives, and other accessories.",
          },
          {
            label: "USB-C",
            description:
              "Small reversible connector. Depending on the device and cable, it may carry data, power, video, or a combination.",
          },
          {
            label: "HDMI",
            description:
              "Common digital display connection that can carry video and audio to a monitor, TV, or projector.",
          },
          {
            label: "Ethernet",
            description:
              "Wired network connection with a wider modular plug and retaining clip.",
          },
          {
            label: "3.5 mm audio",
            description:
              "Round analog connection commonly used for headphones, headsets, speakers, or microphones, depending on its label.",
          },
          {
            label: "SD or microSD",
            description:
              "Slot for a removable memory card. The card size and supported format must match.",
          },
        ],
      },
      {
        type: "callout",
        title: "USB-C is a connector, not one guaranteed feature set",
        body: "Two USB-C ports can look identical while supporting different data speeds, charging power, display output, or Thunderbolt/USB4 features. Check the symbols and the exact model specifications; also check the cable's supported data rate and power rating.",
        tone: "warning",
      },
      {
        type: "steps",
        title: "Identify a port without guessing",
        steps: [
          "Observe the shape without inserting anything.",
          "Look for a nearby symbol or label.",
          "Find the exact computer model and its official port specifications.",
          "Match the required purpose—data, power, video, audio, network, or storage—to both the port and accessory.",
        ],
        success:
          "You can state the connector shape, intended purpose, and source that confirms the capability.",
      },
    ],
    interaction: { kind: "port-photo-match" },
    practice: {
      title: "Create a port inventory",
      intro:
        "Inspect the outside of your computer and record only what you can verify.",
      tasks: [
        "Count the USB-A openings you can verify.",
        "Count the USB-C openings you can verify.",
        "Locate any display, audio, network, or card opening.",
        "Choose one uncertain port and find it in the official specifications for the exact model.",
      ],
      evidence: [
        "I separated connector shape from confirmed capability.",
        "I did not force a cable into an uncertain opening.",
      ],
    },
    check: {
      prompt:
        "A USB-C plug physically fits a laptop port. What does that fact alone prove?",
      options: [
        "The port supports every USB-C feature",
        "The connector shapes are compatible",
        "The cable can definitely charge the laptop at full power",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Physical fit proves the connector shapes match, not that every data, display, or power feature is supported.",
      incorrectFeedback:
        "USB-C capabilities vary. A physical fit does not guarantee a particular speed, display mode, or charging level.",
    },
    closing:
      "You can now identify a likely connection and verify its purpose. Next, match the entire connection: both ends, the cable, the adapter, and power requirements.",
    nextTitle: "Match Cables, Adapters, and Chargers",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m2-l4-v2",
    slug: "match-cables-adapters-chargers",
    moduleId: "m2",
    order: 4,
    title: "Match Cables, Adapters, and Chargers",
    promise:
      "Choose connections by both endpoints and required capability—not by appearance or a sales claim.",
    estimatedMinutes: "15–18 minutes",
    track: "universal",
    badges: ["Connection planning", "Power safety"],
    outcomes: [
      "Distinguish a cable, adapter, hub, dock, and power adapter.",
      "Check both endpoint connectors before connecting equipment.",
      "Verify that a charger and cable meet the device manufacturer's requirements.",
    ],
    sections: [
      {
        type: "visual",
        title: "Every connection is a chain",
        caption:
          "A connection works only when the source, port, cable or adapter, destination, and required capability agree.",
        visual: { kind: "cable-match" },
      },
      {
        type: "comparison",
        title: "The pieces do different jobs",
        items: [
          {
            label: "Cable",
            description:
              "Carries power, data, audio, video, or a supported combination between two connectors.",
          },
          {
            label: "Adapter",
            description:
              "Changes one connector or interface into another for a specific supported purpose.",
          },
          {
            label: "Hub",
            description:
              "Expands one connection into several accessory ports; capabilities vary by model.",
          },
          {
            label: "Dock",
            description:
              "Provides a larger set of connections and may add charging, displays, networking, and peripherals; compatibility still must be checked.",
          },
        ],
      },
      {
        type: "steps",
        title: "Use the five-check connection rule",
        steps: [
          "Name the source device and the destination accessory.",
          "Identify the connector at both ends.",
          "Name the required job: power, data, display, audio, or network.",
          "Verify that every port, cable, and adapter in the chain supports that job.",
          "Connect without force, then check the expected result.",
        ],
        success:
          "The connector seats easily and the expected result appears without heat, smell, sparks, or damage.",
        recovery:
          "If it does not fit easily, stop. If it fits but does not work, disconnect safely and verify capability and settings instead of repeatedly forcing or reconnecting it.",
      },
      {
        type: "callout",
        title: "Charging requires more than a fitting plug",
        body: "Use a power adapter and cable that meet the computer manufacturer's requirements for connector, supported charging standard, and power. A lower-capability supply may charge slowly or not keep up; damaged, counterfeit, or incompatible power equipment can create risk.",
        tone: "warning",
      },
    ],
    interaction: { kind: "connection-builder" },
    practice: {
      title: "Plan one connection before making it",
      intro:
        "Choose a real accessory you already own. Do not purchase anything for this practice.",
      tasks: [
        "Name the source and destination.",
        "Identify both connector ends.",
        "State the job the connection must perform.",
        "Verify the port, cable, and adapter capabilities from labels or specifications.",
        "Connect gently and confirm the expected result.",
      ],
      evidence: [
        "I checked both ends and the required capability before connecting.",
        "I stopped rather than forcing an uncertain connector.",
      ],
    },
    check: {
      prompt:
        "A USB-C cable transfers phone photos but will not power a laptop correctly. What is the best explanation?",
      options: [
        "Every USB-C cable has identical capability",
        "The cable or power adapter may not support the laptop's required charging power",
        "The connector must actually be HDMI",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Matching USB-C shapes do not guarantee the cable and adapter support the required charging power.",
      incorrectFeedback:
        "USB-C cables and power adapters have different supported capabilities. Check the laptop requirements and cable/adapter ratings.",
    },
    closing:
      "You can now plan a complete connection instead of buying by shape alone. Finish the module by choosing and verifying useful accessories without collecting unnecessary hardware.",
    nextTitle: "Build a Useful Accessory Setup",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m2-l5-v2",
    slug: "build-accessory-setup",
    moduleId: "m2",
    order: 5,
    title: "Build a Useful Accessory Setup",
    promise:
      "Choose only the accessories that solve a real problem, connect one safely, and prove the result.",
    estimatedMinutes: "12–15 minutes",
    track: "universal",
    badges: ["Module mission", "Evidence required"],
    outcomes: [
      "Match accessories to a specific need.",
      "Distinguish built-in, wired, wireless, and adapter-dependent options.",
      "Complete and verify one low-risk accessory connection.",
    ],
    sections: [
      {
        type: "visual",
        title: "Need first, accessory second",
        caption:
          "A premium setup is not the one with the most objects. It is the smallest reliable setup that solves the learner's actual needs.",
        visual: { kind: "accessory-chain" },
      },
      {
        type: "comparison",
        title: "Start with the problem",
        items: [
          {
            label: "More comfortable control",
            description:
              "An external mouse, keyboard, or ergonomic pointing device may help when built-in controls are uncomfortable.",
          },
          {
            label: "Clearer communication",
            description:
              "Headphones, a headset, microphone, camera, or better lighting may improve calls after built-in equipment is tested.",
          },
          {
            label: "More screen space",
            description:
              "A monitor can help only when the computer, port, cable, and display support the planned connection.",
          },
          {
            label: "Move or protect files",
            description:
              "A compatible external drive or memory card can help, but it is not automatically a complete backup system.",
          },
          {
            label: "More compatible connections",
            description:
              "A hub adds several basic ports. A dock may add displays, network, charging, and more ports, but the computer and dock must support the same features.",
          },
          {
            label: "Paper output",
            description:
              "A printer is useful only when paper copies are a repeated need and its ink, paper, software, and connection costs are understood.",
          },
          {
            label: "Power protection",
            description:
              "A properly rated surge protector can add outlets and limited surge protection. It does not repair unsafe wiring, and power strips must not be chained together.",
          },
        ],
      },
      {
        type: "callout",
        title: "Do not buy every accessory by default",
        body: "Test the computer's built-in keyboard, touchpad, camera, microphone, speakers, screen, and ports first. Buy a mouse, keyboard, webcam, monitor, printer, drive, hub, dock, or surge protector only for a named need and after checking compatibility and safety. More equipment does not automatically make a better student setup.",
        tone: "warning",
      },
      {
        type: "steps",
        eyebrow: "Module 2 mission",
        title: "Connect one low-risk accessory and prove it works",
        steps: [
          "State the problem the accessory solves.",
          "Inspect the accessory and computer for damage.",
          "Identify whether the connection is built-in, wired, wireless, or adapter-dependent.",
          "Use the five-check connection rule from the previous lesson.",
          "Perform a small test: move the pointer, type a sentence, play test audio, view the display, or open a non-private test file.",
          "Disconnect or store it safely when finished.",
        ],
        success:
          "You can name the need, explain the connection, and demonstrate the expected result.",
        recovery:
          "If the accessory requests unexpected permissions, software, payment, secrets, or administrator access, pause and verify the manufacturer and purpose before continuing.",
      },
      {
        type: "callout",
        title: "Wireless is still a connection",
        body: "Bluetooth and other wireless accessories still require compatibility, power, pairing, and sometimes permission. Do not accept an unknown pairing request simply because it appears nearby.",
        tone: "info",
      },
    ],
    interaction: { kind: "accessory-planner" },
    practice: {
      title: "Complete the Module 2 evidence mission",
      intro:
        "Use an accessory you already own or inspect a trusted setup with its owner. Do not buy equipment for this activity.",
      tasks: [
        "Name the device family and locate the computer unit.",
        "Point to two input/output parts and one verified port.",
        "Explain the complete connection chain.",
        "Connect or inspect one low-risk accessory.",
        "Demonstrate the expected result.",
      ],
      evidence: [
        "I identified the computer and connection without guessing from brand or shape alone.",
        "I demonstrated a working result or clearly explained why I stopped.",
        "I did not expose private files, account details, serial numbers, or passwords.",
      ],
    },
    check: {
      prompt:
        "Which is the strongest evidence that an accessory setup is appropriate?",
      options: [
        "It includes many expensive devices",
        "It solves a named need, is compatible, and passes a safe functional test",
        "Its connector can be pushed into an opening",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Need, verified compatibility, safe connection, and a demonstrated result are meaningful evidence.",
      incorrectFeedback:
        "Price, quantity, and physical fit do not prove usefulness or compatibility. Start with the need and verify the result.",
    },
    closing:
      "Module 2 is complete when you can identify the machine, map its exterior parts and ports, plan a compatible connection, and demonstrate one useful accessory result.",
    verifiedAt: "2026-07-20",
  },
];

export const computerModuleThreeV2: ComputerLessonV2[] = [
  {
    id: "m3-l1-v2",
    slug: "define-computer-needs-budget",
    moduleId: "m3",
    order: 1,
    title: "Start with Needs, Not Advertisements",
    promise:
      "Turn the work you actually do, where you do it, and what you can spend into a short buying brief.",
    estimatedMinutes: "12–15 minutes",
    track: "universal",
    badges: ["Buying brief", "Budget protection"],
    outcomes: [
      "Separate required tasks from attractive extras.",
      "Choose the physical computer family that fits the real setting.",
      "Calculate a total budget that includes necessary accessories and support.",
    ],
    sections: [
      {
        type: "prose",
        eyebrow: "Reverse the sales process",
        title: "The computer is a tool for a job",
        paragraphs: [
          "A product page begins with the machine. A good buying decision begins with your work. Write down the tasks, software, places, connections, and files the computer must handle before comparing models.",
          "Price alone is not value. A cheap computer that cannot run required software is expensive. A powerful computer that spends its life opening email may also waste money.",
        ],
      },
      {
        type: "visual",
        title: "Choose the work before the machine",
        caption:
          "The same advertised computer can be sensible for one learner and wrong for another. Tasks, location, portability, required connections, and total cost come first.",
        visual: { kind: "buying-needs" },
      },
      {
        type: "comparison",
        title: "Required, preferred, and unnecessary",
        items: [
          {
            label: "Required",
            description:
              "Without it, a named task, app, connection, accessibility need, or school/work rule fails.",
            tone: "good",
          },
          {
            label: "Preferred",
            description:
              "It improves comfort, speed, battery life, screen space, or convenience but the work can continue without it.",
          },
          {
            label: "Unnecessary now",
            description:
              "It sounds impressive but does not solve a need in the buying brief. Do not pay for it accidentally.",
            tone: "warn",
          },
        ],
      },
      {
        type: "steps",
        title: "Build the total budget",
        steps: [
          "Set the maximum amount you can pay without risking essential expenses.",
          "List required computer, tax, delivery, charger, adapter, mouse, bag, monitor, software, or setup costs.",
          "Keep a reserve for a return trip, data transfer, repair, or missing accessory.",
          "Reject offers whose real total exceeds the limit.",
        ],
        success:
          "You know the maximum total, required tasks, required connections, and acceptable device family before shopping.",
      },
    ],
    interaction: { kind: "buying-brief-builder" },
    practice: {
      title: "Write a one-page buying brief",
      intro: "Do this before opening a store or marketplace.",
      tasks: [
        "List five tasks the computer must perform.",
        "Name required apps or confirm that browser-based tools are acceptable.",
        "Choose laptop, desktop, all-in-one, or 2-in-1 and explain why.",
        "List required ports, screen, camera, microphone, keyboard, or accessibility needs.",
        "Calculate the maximum total cost, not only the advertised computer price.",
      ],
      evidence: [
        "I separated requirements from preferences.",
        "My total budget includes required extras.",
      ],
    },
    check: {
      prompt: "Which is the strongest first step before comparing computers?",
      options: [
        "Choose the model with the largest discount",
        "Write the tasks, required software, setting, connections, and total budget",
        "Choose the processor with the longest name",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. A buying brief creates criteria that offers can be tested against.",
      incorrectFeedback:
        "Discounts and product names do not define your needs. Begin with tasks, constraints, and total cost.",
    },
    closing:
      "Your buying brief is the standard every offer must meet. Next, translate common specifications into consequences you can actually use.",
    nextTitle: "Read Specifications Without Sales Jargon",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m3-l2-v2",
    slug: "read-computer-specifications",
    moduleId: "m3",
    order: 2,
    title: "Read Specifications Without Sales Jargon",
    promise:
      "Understand processor, memory, storage, graphics, display, battery, and ports well enough to reject a misleading offer.",
    estimatedMinutes: "18–22 minutes",
    track: "universal",
    badges: ["Specification decoder", "Minimum ≠ recommendation"],
    outcomes: [
      "Explain what CPU, RAM, storage, GPU, display, and ports affect.",
      "Distinguish an operating-system minimum from a sensible purchase target.",
      "Record exact specifications instead of accepting vague labels such as fast or powerful.",
    ],
    sections: [
      {
        type: "visual",
        title: "Memory and storage are different physical parts",
        caption:
          "RAM holds active work temporarily. SSD and HDD storage retain the system, apps, and files. Most current laptops use SSD storage; an HDD may still appear in older or external equipment.",
        visual: { kind: "specification-parts" },
      },
      {
        type: "comparison",
        title: "Six specifications, six different jobs",
        items: [
          {
            label: "Processor (CPU)",
            description:
              "Executes instructions. Exact model and generation matter; a family name alone does not establish performance.",
          },
          {
            label: "Memory (RAM)",
            description:
              "Holds active work. More memory helps keep more or heavier apps active without slowing from memory pressure.",
          },
          {
            label: "Storage",
            description:
              "Holds the system, apps, and files. Capacity and drive type are different facts; SSD storage is generally faster than HDD storage.",
          },
          {
            label: "Graphics (GPU)",
            description:
              "Produces graphics and may accelerate games, video, design, and some AI work. Everyday tasks often use integrated graphics.",
          },
          {
            label: "Display",
            description:
              "Size, resolution, brightness, color, touch, and refresh rate affect different needs. One number does not describe the whole screen.",
          },
          {
            label: "Ports + wireless",
            description:
              "Determine what connects directly. Verify exact capabilities; USB-C shape alone does not promise video or charging.",
          },
        ],
      },
      {
        type: "callout",
        title: "Windows 11 minimums are an eligibility floor",
        body: "Microsoft currently lists 4 GB RAM and 64 GB storage among Windows 11 minimum requirements. Those figures mean the system can qualify; they are not a promise of comfortable everyday use or enough room for your files. Microsoft’s current consumer guidance describes 8 GB RAM for everyday tasks and 16 GB or more for gaming or creative work. Recheck official guidance when buying because requirements change.",
        tone: "warning",
      },
      {
        type: "callout",
        title:
          "Do not buy a Windows 10-only computer as a normal recommendation",
        body: "Microsoft ended standard Windows 10 support on October 14, 2025. A computer may still turn on after support ends, but normal security updates are no longer provided unless an applicable extended-support option is used. For a purchase, verify official Windows 11 eligibility on the exact model rather than trusting the seller's statement.",
        tone: "warning",
      },
      {
        type: "comparison",
        title: "A practical student starting point",
        items: [
          {
            label: "Processor target",
            description:
              "For ordinary student work, begin comparisons with a recent midrange processor such as an Intel Core i5/Core 5 class, AMD Ryzen 5 class, or Apple M-series Mac. These names are not proof that models are equal: verify the exact chip, age, operating-system support, and required apps.",
            tone: "good",
          },
          {
            label: "Recommended for most students",
            description:
              "Look for 16 GB memory, a 512 GB SSD, and a recent midrange processor. This is a buying target—not a guarantee that every required app will work.",
            tone: "good",
          },
          {
            label: "When the budget is tight",
            description:
              "8 GB memory and a 256 GB SSD can handle basic schoolwork, but provide less room for many open apps, large files, and future needs.",
            tone: "warn",
          },
          {
            label: "No honest universal GHz minimum",
            description:
              "A newer processor can outperform an older processor at a lower clock speed. Do not set a buying rule such as at least 3 GHz. Use the exact model, generation, independent evidence, and the software maker's requirements.",
            tone: "warn",
          },
        ],
      },
      {
        type: "steps",
        title: "Capture an offer accurately",
        steps: [
          "Record the exact model number of the computer.",
          "Record the exact processor name, installed RAM, storage capacity and type, graphics, display size and resolution, ports, wireless, and operating system.",
          "Mark any missing fact as unknown—not as acceptable.",
          "Verify important claims on the manufacturer’s specification page for that exact model.",
        ],
        success:
          "A second person could identify the exact configuration from your notes without relying on the seller’s adjectives.",
      },
      {
        type: "callout",
        title:
          "Storage shown in the advertisement is not fully available space",
        body: "The operating system, built-in apps, recovery data, formatting, and future updates use part of the advertised capacity. Plan from the files and apps you expect to keep, plus free space for normal operation and updates.",
        tone: "info",
      },
    ],
    interaction: { kind: "specification-decoder" },
    practice: {
      title: "Decode one real specification sheet",
      intro:
        "Use a manufacturer page or a written offer; do not buy anything for this activity.",
      tasks: [
        "Find the exact computer model.",
        "Record CPU, RAM, storage capacity and type, graphics, display, ports, wireless, and operating system.",
        "Circle every missing or vague fact.",
        "Match each specification to one requirement in your buying brief.",
      ],
      evidence: [
        "I recorded exact facts rather than fast, pro, or powerful.",
        "I treated minimum requirements as a floor, not a buying recommendation.",
      ],
      privacyNote:
        "Do not record a serial number, service tag, account identifier, or product key.",
    },
    check: {
      prompt:
        "A listing says a computer has 4 GB RAM and 64 GB storage and meets Windows 11 minimums. What can you conclude?",
      options: [
        "It is automatically a good purchase for every learner",
        "It may meet part of the eligibility floor, but comfort, usable space, processor compatibility, and the learner’s tasks still require verification",
        "It will edit video smoothly",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Minimum eligibility is not a complete buying recommendation.",
      incorrectFeedback:
        "The operating-system floor does not prove comfort, capacity, compatibility, or fitness for a particular workload.",
    },
    closing:
      "You can now turn a listing into verifiable facts. Next, choose Windows or Mac from required software, workflow, support, and total cost—not from social pressure.",
    nextTitle: "Choose Windows or Mac for the Work",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m3-l3-v2",
    slug: "choose-windows-or-mac-to-buy",
    moduleId: "m3",
    order: 3,
    title: "Choose Windows or Mac for the Work",
    promise:
      "Make the platform decision from compatibility, support, workflow, and full cost while keeping your saved course path separate.",
    estimatedMinutes: "12–15 minutes",
    track: "universal",
    badges: ["Platform decision", "No brand loyalty test"],
    outcomes: [
      "Check required software and peripherals before choosing a platform.",
      "Compare support, workflow, integration, repair, and total cost.",
      "Avoid assuming that your current computer path must determine your next purchase.",
    ],
    sections: [
      {
        type: "visual",
        title: "Two capable computers; one evidence-based decision",
        caption:
          "A familiar desktop or attractive body does not prove compatibility. Check the exact software, devices, support, ownership cost, and current operating-system support.",
        visual: { kind: "buying-platforms" },
      },
      {
        type: "prose",
        eyebrow: "A fresh decision",
        title: "What you own and what you should buy are different questions",
        paragraphs: [
          "Your saved Windows or Mac course path controls the instructions you see for the computer you are using now. It does not force the purchase decision.",
          "Choose the next computer from evidence: required apps, file formats, school or employer rules, peripherals, people who can support you, accessibility tools, and total cost.",
        ],
      },
      {
        type: "comparison",
        title: "Compare the complete environment",
        items: [
          {
            label: "Software + services",
            description:
              "Confirm the exact required app, version, license, browser, plug-in, and file format on the intended operating system.",
          },
          {
            label: "People + support",
            description:
              "Consider who can help locally, warranty service, documentation language, training, and repair availability.",
          },
          {
            label: "Devices + files",
            description:
              "Check printers, monitors, drives, cameras, phones, specialized equipment, and file exchange with other people.",
          },
          {
            label: "Total ownership",
            description:
              "Include adapters, software subscriptions, storage, warranty, repairs, data transfer, and replacement accessories.",
          },
        ],
      },
      {
        type: "comparison",
        title: "Important platform buying checks",
        items: [
          {
            label: "Windows computer",
            description:
              "Verify Windows 11 support, exact hardware, required apps and drivers, repair options, and the total price. The Windows name does not make every Windows computer equally capable.",
          },
          {
            label: "Apple-silicon Mac",
            description:
              "M-series Macs use Apple-designed processors. For a used Mac, verify the exact model, current macOS support, required apps, ports, storage, battery, and Activation Lock before paying.",
          },
          {
            label: "Older Intel Mac",
            description:
              "Some Intel Macs can still run supported macOS versions, but the supported list is shrinking. Buy only after checking the exact model against Apple's current compatibility list and required software.",
            tone: "warn",
          },
          {
            label: "Chromebook",
            description:
              "A Chromebook normally runs ChromeOS, not Windows or macOS. It can fit browser-based work, but required desktop apps, device support, storage, and the automatic-update date must be verified.",
            tone: "warn",
          },
        ],
      },
      {
        type: "steps",
        title: "Use a blocking-requirement test",
        steps: [
          "List anything that absolutely must work.",
          "Find official compatibility evidence for Windows and for macOS.",
          "If one platform fails a required item, record the exact blocker.",
          "If both work, compare comfort, support, total cost, and preference.",
          "Keep the decision provisional until the exact model passes inspection and return-policy checks.",
        ],
        success:
          "You can explain the chosen platform using named requirements, not status, fear, or brand loyalty.",
      },
      {
        type: "callout",
        title: "A web app may reduce platform differences—but verify",
        body: "Some work happens entirely in a modern browser, while other tools require a specific desktop app, driver, security system, or organization-managed device. Test the real workflow instead of assuming that a website name guarantees equivalence.",
        tone: "info",
      },
    ],
    interaction: { kind: "platform-buying-decision" },
    practice: {
      title: "Build a platform evidence table",
      intro: "Compare only the requirements in your buying brief.",
      tasks: [
        "Check each required app or service on Windows.",
        "Check each required app or service on macOS.",
        "Check required peripherals and file exchange.",
        "Compare local help, warranty service, and total cost.",
        "Write the strongest reason for the current choice and the fact that could change it.",
      ],
      evidence: [
        "Every blocking requirement has evidence or is marked unknown.",
        "My current saved course path did not automatically decide the purchase.",
      ],
    },
    check: {
      prompt:
        "A learner currently uses Windows. What is the strongest reason to buy another Windows computer?",
      options: [
        "The course saved Windows earlier",
        "Required software, devices, support, and total cost are verified and Windows is the better fit",
        "Mac computers are always wrong",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. The new purchase must be justified independently from the current-device setting.",
      incorrectFeedback:
        "The saved path only controls instructions for the current computer. A purchase requires fresh compatibility and cost evidence.",
    },
    closing:
      "You have a platform decision that can survive questions. Next, compare new, refurbished, and used computers without treating those words as guarantees.",
    nextTitle: "Compare New, Refurbished, and Used",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m3-l4-v2",
    slug: "compare-new-refurbished-used-computers",
    moduleId: "m3",
    order: 4,
    title: "Compare New, Refurbished, and Used Computers",
    promise:
      "Judge condition, seller responsibility, warranty, returns, ownership locks, and support instead of trusting a condition label.",
    estimatedMinutes: "15–18 minutes",
    track: "universal",
    badges: ["Condition evidence", "Seller protection"],
    outcomes: [
      "Distinguish condition claims from enforceable protections.",
      "Check warranty and return terms before payment.",
      "Recognize ownership, account, and management locks that can make a computer unusable.",
    ],
    sections: [
      {
        type: "visual",
        title: "Condition words need visible and written evidence",
        caption:
          "New, refurbished, and used describe different histories—not automatic quality levels. Exact model, support, testing, battery, ownership, returns, and warranty still decide the risk.",
        visual: { kind: "condition-comparison" },
      },
      {
        type: "comparison",
        title: "The label is only the beginning",
        items: [
          {
            label: "New",
            description:
              "Normally sold as unused, but still verify exact configuration, sealed contents, warranty start, seller, return window, and regional coverage.",
          },
          {
            label: "Refurbished",
            description:
              "May have been inspected, repaired, cleaned, tested, or repackaged. A recent refurbished computer can be a better value than a brand-new low-end one. Ask who did the work, what was tested, and what warranty applies.",
          },
          {
            label: "Used",
            description:
              "Has a prior owner or use history. Used does not have to mean old: prefer a recent model that still receives security updates and supports required software, then inspect its battery, condition, ownership, and return risk.",
          },
        ],
      },
      {
        type: "steps",
        title: "Read protection before condition",
        steps: [
          "Identify the legal seller and obtain a receipt.",
          "Read the return deadline, allowed reasons, fees, required condition, and who pays shipping.",
          "Read who provides the warranty, what it covers, exclusions, duration, and remedy.",
          "Ask whether the battery, charger, storage, display, keyboard, ports, and enclosure were tested.",
          "Confirm the device is removed from the previous owner’s accounts and organization management.",
        ],
        success:
          "You can state who must help, for how long, under which written terms, and what evidence you must keep.",
      },
      {
        type: "callout",
        title: "Buy used when it is recent—not merely cheap",
        body: "A well-built recent used business computer may outlast a brand-new bargain model. Verify the exact model and year, current operating-system support, required software, battery condition, account or organization locks, and written return or warranty terms. Reject a computer whose low price depends on missing support or an unresolved lock.",
        tone: "info",
      },
      {
        type: "callout",
        title: "A warranty is a written promise with limits",
        body: "Do not treat the word warranty as complete protection. Read the written coverage and remedy. Consumer rights vary by country and seller, so preserve the listing, receipt, serial or service record privately, and all written terms.",
        tone: "warning",
      },
      {
        type: "decision",
        title: "A cheap computer is still signed into another owner",
        prompt:
          "The seller says the account can be removed later after payment.",
        answer:
          "Stop. Ownership or organization locks can prevent setup or normal use. Require the seller to remove the device from their accounts and management, then verify setup before paying.",
        tone: "stop",
      },
    ],
    interaction: { kind: "condition-offer-audit" },
    practice: {
      title: "Audit one condition offer",
      intro:
        "Use an advertisement or written quote without contacting or paying a seller.",
      tasks: [
        "Identify new, refurbished, or used—and who makes that claim.",
        "Find the exact seller and return terms.",
        "Find the written warranty provider, duration, coverage, and remedy.",
        "List the physical and account checks still required.",
        "Record every missing answer as risk.",
      ],
      evidence: [
        "I did not treat refurbished or warranty as self-explanatory.",
        "I know what must be verified before money changes hands.",
      ],
      privacyNote:
        "Keep real serial numbers, addresses, receipts, and account information private.",
    },
    check: {
      prompt: "Which refurbished offer provides the strongest evidence?",
      options: [
        "Like new, trust me",
        "A named seller provides the exact model, test report, written condition, return policy, and warranty terms",
        "No returns because it is cheap",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Named responsibility and written, testable terms are stronger than adjectives.",
      incorrectFeedback:
        "A condition word is not evidence. Look for exact configuration, testing, seller responsibility, returns, and warranty terms.",
    },
    closing:
      "You can now compare the protection around an offer. Finish the module by scoring candidates and inspecting the finalist before paying.",
    nextTitle: "Compare, Inspect, and Decide",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m3-l5-v2",
    slug: "compare-inspect-buy-computer",
    moduleId: "m3",
    order: 5,
    title: "Compare, Inspect, and Decide",
    promise:
      "Use one evidence sheet to compare offers, test the finalist, protect payment, and walk away when a required fact fails.",
    estimatedMinutes: "20–25 minutes",
    track: "universal",
    badges: ["Buying mission", "Walk-away rules"],
    outcomes: [
      "Compare offers using the same requirements and total-cost method.",
      "Inspect a computer without exposing private information or accepting ownership locks.",
      "Make a buy, wait, or reject decision with written evidence.",
    ],
    sections: [
      {
        type: "visual",
        title: "Inspect evidence before transferring money",
        caption:
          "Some problems are cosmetic; others are blockers or safety warnings. Inspect the physical computer, start it, verify ownership and specifications, and test the required functions.",
        visual: { kind: "buying-inspection" },
      },
      {
        type: "steps",
        eyebrow: "Before meeting or checkout",
        title: "Build the comparison sheet",
        steps: [
          "Create one row per required task, specification, connection, support term, and cost.",
          "Create one column per candidate.",
          "Enter verified facts, source links or documents, and unknowns.",
          "Calculate the same total-cost period for every candidate.",
          "Reject any candidate that fails a true requirement; do not average away a blocker.",
        ],
        success:
          "Every candidate is measured against the same buying brief, with missing information visible.",
      },
      {
        type: "steps",
        eyebrow: "Before payment",
        title: "Inspect the finalist",
        steps: [
          "Verify exact model and configuration from the system information and written specification.",
          "Inspect enclosure, hinges, screen, keyboard, touchpad or mouse, camera, microphone, speakers, ports, charger, cable, and vents.",
          "Start or restart it; look for account, activation, firmware, organization-management, or setup locks.",
          "Check battery status with the operating system or manufacturer tool when available; runtime claims are estimates, not guarantees.",
          "Test Wi-Fi, charging, required ports, and one non-private file or app workflow.",
          "Confirm receipt, return terms, warranty, included items, total price, and payment method before transferring money.",
        ],
        success:
          "The exact computer passes required physical, system, ownership, connection, and protection checks.",
        recovery:
          "If the seller prevents inspection, pressures immediate payment, changes the terms, requests secrets, or asks for an unsafe payment method, leave. A missed deal is cheaper than an unusable computer.",
      },
      {
        type: "comparison",
        title: "Three honest decisions",
        items: [
          {
            label: "Buy",
            description:
              "All requirements pass, unknowns are resolved, total cost fits, inspection succeeds, and written protection is acceptable.",
            tone: "good",
          },
          {
            label: "Wait",
            description:
              "The computer may fit, but a material fact, test, budget item, or term remains unresolved.",
            tone: "warn",
          },
          {
            label: "Reject",
            description:
              "A requirement fails, ownership is unclear, risk is unacceptable, evidence conflicts, or pressure replaces verification.",
          },
        ],
      },
      {
        type: "callout",
        title: "Payment safety depends on context",
        body: "Prefer a lawful payment method that provides a receipt and any available dispute protection. Never expose passwords or verification codes. Do not meet an unknown seller alone or in an unsafe location. Local laws and protections differ; verify them where the purchase occurs.",
        tone: "warning",
      },
    ],
    interaction: { kind: "candidate-buying-mission" },
    practice: {
      title: "Complete the first-computer decision mission",
      intro:
        "Compare at least two real offers without purchasing during the exercise.",
      tasks: [
        "Apply the same buying brief to both offers.",
        "Record exact specifications and total cost.",
        "Audit condition, seller, returns, and warranty.",
        "Write the inspection plan for the leading candidate.",
        "Choose Buy, Wait, or Reject and cite the evidence.",
      ],
      evidence: [
        "My decision traces back to requirements and verified facts.",
        "I have written walk-away rules before payment.",
        "I kept private account, payment, and device identifiers out of the course.",
      ],
      privacyNote:
        "Do not upload receipts, IDs, payment details, addresses, serial numbers, passwords, or verification codes.",
    },
    check: {
      prompt:
        "A candidate has the lowest price but fails one required app and the seller will not allow inspection. What is the evidence-based decision?",
      options: [
        "Buy because price outweighs every other fact",
        "Reject it; a blocking requirement fails and inspection is refused",
        "Send the seller your password for remote testing",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. A blocker and refused inspection are not balanced away by a low price.",
      incorrectFeedback:
        "Required compatibility and inspection are gates. Price cannot make an unusable or unverifiable computer suitable.",
    },
    closing:
      "Module 3 is complete when you can define the need, read the facts, compare platforms and condition, inspect the finalist, and defend a Buy, Wait, or Reject decision without sales pressure deciding for you.",
    verifiedAt: "2026-07-20",
  },
];

export const computerLessonsV2 = [
  ...computerModuleOneV2,
  ...computerModuleTwoV2,
  ...computerModuleThreeV2,
  ...computerModuleFourV2,
  ...computerModuleFiveV2,
];

export function getComputerModuleLessonsV2(
  moduleId: "m1" | "m2" | "m3" | "m4" | "m5",
) {
  if (moduleId === "m1") return computerModuleOneV2;
  if (moduleId === "m2") return computerModuleTwoV2;
  if (moduleId === "m3") return computerModuleThreeV2;
  if (moduleId === "m4") return computerModuleFourV2;
  return computerModuleFiveV2;
}

export function getComputerLessonV2(slug: string) {
  return computerLessonsV2.find((lesson) => lesson.slug === slug);
}
