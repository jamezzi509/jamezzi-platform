export type CourseTrack = "universal" | "windows-mac";

export type LessonVisual =
  | { kind: "journey" }
  | { kind: "progress" }
  | { kind: "os-clues" }
  | { kind: "risk-levels" }
  | { kind: "workstation" };

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
  moduleId: "m1";
  order: number;
  title: string;
  promise: string;
  estimatedMinutes: string;
  track: CourseTrack;
  badges: string[];
  outcomes: string[];
  sections: LessonSection[];
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
  status: index === 0 ? ("available" as const) : ("in-production" as const),
}));

export const computerModuleOneV2: ComputerLessonV2[] = [
  {
    id: "m1-l1-v2",
    slug: "welcome-build-computer-independence",
    moduleId: "m1",
    order: 1,
    title: "Welcome: Build Independence with Your Computer",
    promise:
      "See exactly how this course turns reading into real computer ability—and choose the result that matters most to you.",
    estimatedMinutes: "8–10 minutes",
    track: "universal",
    badges: ["Read anywhere", "Course orientation"],
    outcomes: [
      "Explain what you will be able to do by the end of the course.",
      "Distinguish viewing a lesson, completing practice, and passing a checkpoint.",
      "Choose one personal result that gives the course a purpose.",
    ],
    sections: [
      {
        type: "prose",
        eyebrow: "A different promise",
        title: "Uncertainty is not inability",
        paragraphs: [
          "You may already use a phone every day and still feel uncertain when you sit in front of a computer. A window disappears. A message asks you to choose something. A file downloads, but you cannot find it. You may worry that one wrong click will damage the computer.",
          "Those experiences do not mean you are bad with technology. They usually mean nobody has shown you how the parts fit together.",
          "This course will not ask you to memorize dozens of buttons without understanding them. You will learn what the computer is doing, see the action clearly, perform it yourself, and check the result.",
        ],
      },
      {
        type: "visual",
        title: "The journey ahead",
        caption:
          "Each stage supports the next. You first understand the machine, then control it, use it, protect it, and solve ordinary problems.",
        visual: { kind: "journey" },
      },
      {
        type: "prose",
        title: "Independence does not mean knowing everything",
        paragraphs: [
          "By the end, you should depend less on another person for ordinary computer tasks. You will still ask for help when a problem involves real risk.",
          "Independence means knowing what you can handle, how to investigate a problem, and when to stop. Pretending to understand a risky action is not confidence.",
        ],
      },
      {
        type: "visual",
        title: "Three kinds of progress",
        caption:
          "A green checkmark means different things depending on the evidence. The course never treats opening a page as proof that you can perform the skill.",
        visual: { kind: "progress" },
      },
      {
        type: "callout",
        title: "Your screen may not look identical",
        body: "Screens vary by operating-system version, manufacturer, language, settings, and updates. Follow the named label and recognition cues. If your screen is substantially different, use the alternate route or stop and ask for help instead of choosing random options.",
        tone: "info",
      },
    ],
    practice: {
      title: "Choose your reason for learning",
      intro:
        "Select the result that matters most to you now. This is your first evidence of progress—not a test.",
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
        "I selected at least one goal that is personally useful to me.",
      ],
    },
    check: {
      prompt:
        "A learner read a lesson about creating folders but did not try the steps. Which statement is accurate?",
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
      "You now know how this course defines progress. Next, identify the system in front of you so every later procedure can show the correct path.",
    nextTitle: "Choose Your Path: Windows or Mac",
    verifiedAt: "2026-07-17",
  },
  {
    id: "m1-l2-v2",
    slug: "choose-windows-or-mac",
    moduleId: "m1",
    order: 2,
    title: "Choose Your Path: Windows or Mac",
    promise:
      "Identify the operating system in front of you and verify it from the computer itself—not from appearance alone.",
    estimatedMinutes: "10–15 minutes",
    track: "windows-mac",
    badges: ["Practice on your computer", "Windows + Mac"],
    outcomes: [
      "Identify whether the computer uses Windows or macOS.",
      "Confirm the system and version from the computer’s information screen.",
      "Select the correct course track without guessing from brand alone.",
    ],
    sections: [
      {
        type: "prose",
        eyebrow: "Build the idea",
        title: "The operating system is the main environment",
        paragraphs: [
          "The operating system is the main software that manages the computer and gives you the environment where you open apps, organize files, connect devices, and change settings.",
          "This course teaches Windows 11, made by Microsoft, and macOS, made by Apple for Mac computers. The concepts often match, but labels and locations can differ. Choosing the correct track prevents you from searching for a control that does not exist on your system.",
        ],
      },
      {
        type: "visual",
        title: "Recognition clues—not final proof",
        caption:
          "Use these clues to orient yourself, then confirm the result through the operating system’s information screen.",
        visual: { kind: "os-clues" },
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
      "Your platform choice is now based on evidence. Next, learn when it is safe to explore and when an unfamiliar action deserves a pause or a stop.",
    nextTitle: "Explore Safely: Green Light, Pause, or Stop",
    verifiedAt: "2026-07-17",
  },
  {
    id: "m1-l3-v2",
    slug: "explore-safely",
    moduleId: "m1",
    order: 3,
    title: "Explore Safely: Green Light, Pause, or Stop",
    promise:
      "Replace fear with a practical judgment system for ordinary actions, privacy choices, and serious warnings.",
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
        eyebrow: "Controlled confidence",
        title: "Fear and care are not the same",
        paragraphs: [
          "If you fear every button, you cannot practice. If you accept every prompt, you can create unnecessary risk. The goal is controlled confidence.",
          "Most ordinary navigation is recoverable. Other actions deserve more care because they can remove information, share private data, install software, spend money, or change the system.",
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
    practice: {
      title: "Classify six actions",
      intro:
        "Use the consequence—not your fear level—to choose Green light, Pause, or Stop.",
      tasks: [
        "Open a trusted app already installed.",
        "Allow a website to use your location.",
        "Edit one word in a practice sentence.",
        "Enter an administrator password for an unfamiliar installer.",
        "Choose Erase All Content and Settings before making a backup.",
        "Respond to unexpected smoke, sparks, swelling, or burning smell.",
      ],
      evidence: [
        "I can explain why each action is Green light, Pause, or Stop.",
        "I used the four-question pause for the unfamiliar requests.",
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
      "You now have a way to explore without accepting every prompt. Next, make the physical learning space safer and easier to use.",
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
    practice: {
      title: "Reset your real learning space",
      intro:
        "Make the safest useful improvements available now. Expensive furniture is not required.",
      tasks: [
        "Adjust the screen for readable text and reduced glare.",
        "Bring the keyboard and pointing device closer.",
        "Improve foot or back support if possible.",
        "Clear the vents and stabilize the computer.",
        "Move drinks and unsafe cables.",
        "Inspect power equipment and the device for physical warning signs.",
        "Plan a position change or short movement break.",
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

export function getComputerLessonV2(slug: string) {
  return computerModuleOneV2.find((lesson) => lesson.slug === slug);
}
