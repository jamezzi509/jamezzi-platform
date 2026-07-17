export type CourseTrack = "universal" | "windows-mac";

export type LessonVisual =
  | { kind: "journey" }
  | { kind: "progress" }
  | { kind: "os-clues" }
  | { kind: "risk-levels" }
  | { kind: "workstation" }
  | { kind: "computer-families" }
  | { kind: "outside-parts" }
  | { kind: "port-map" }
  | { kind: "cable-match" }
  | { kind: "accessory-chain" };

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
  moduleId: "m1" | "m2";
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
  status: index < 2 ? ("available" as const) : ("in-production" as const),
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
    verifiedAt: "2026-07-17",
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
    verifiedAt: "2026-07-17",
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
        title: "Shape starts the search; purpose finishes it",
        caption:
          "The diagram is simplified for recognition. Confirm the exact capability in the device specifications before buying a cable or adapter.",
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
    verifiedAt: "2026-07-17",
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
    verifiedAt: "2026-07-17",
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
        ],
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
    verifiedAt: "2026-07-17",
  },
];

export const computerLessonsV2 = [
  ...computerModuleOneV2,
  ...computerModuleTwoV2,
];

export function getComputerModuleLessonsV2(moduleId: "m1" | "m2") {
  return moduleId === "m1" ? computerModuleOneV2 : computerModuleTwoV2;
}

export function getComputerLessonV2(slug: string) {
  return computerLessonsV2.find((lesson) => lesson.slug === slug);
}
