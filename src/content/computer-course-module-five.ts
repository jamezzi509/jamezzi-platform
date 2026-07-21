import type { ComputerLessonV2 } from "@/content/computer-course-v2";

export const computerModuleFiveV2: ComputerLessonV2[] = [
  {
    id: "m5-l1-v2",
    slug: "desktop-taskbar-dock-menu-bar",
    moduleId: "m5",
    order: 1,
    title: "Know What You Are Looking At",
    promise:
      "Recognize the desktop, wallpaper, icons, pointer, taskbar, Dock, and menu bar without assuming the screen will match a picture exactly.",
    estimatedMinutes: "14–18 minutes",
    track: "windows-mac",
    badges: ["Desktop", "Orientation"],
    outcomes: [
      "Name the major parts of a Windows or Mac desktop.",
      "Separate the desktop workspace from the whole computer.",
      "Use position and behavior—not wallpaper—as evidence.",
    ],
    interaction: { kind: "desktop-identifier" },
    sections: [
      {
        type: "visual",
        title: "Two desktops, the same basic jobs",
        caption:
          "Windows normally places the taskbar at the bottom. macOS normally uses a menu bar at the top and a Dock. Both can be customized.",
        visual: { kind: "desktop-anatomy" },
      },
      {
        type: "comparison",
        title: "What each part does",
        items: [
          {
            label: "Desktop",
            description:
              "The background workspace visible behind application windows. It can hold icons, but it is not the whole computer.",
          },
          {
            label: "Taskbar or Dock",
            description:
              "A launcher and switcher for applications. Its location and contents can be changed.",
          },
          {
            label: "Menu bar",
            description:
              "On macOS, the top menu bar changes with the active application. Windows apps usually keep menus inside each window.",
          },
          {
            label: "System area",
            description:
              "Clock, network, sound, battery, and status controls. Exact icons vary by device and settings.",
          },
        ],
      },
      {
        type: "callout",
        title: "Wallpaper is not proof",
        body: "A Windows computer can use an Apple picture, and a Mac can use any wallpaper. Confirm the system using the taskbar or Dock and the verification path learned in Module 1.",
        tone: "warning",
      },
    ],
    practice: {
      title: "Orient yourself",
      intro: "Use the simulation first, then inspect your real screen.",
      tasks: [
        "Point to the desktop workspace.",
        "Locate the Taskbar or Dock.",
        "Locate the clock and status area.",
        "Name one part that may be customized.",
      ],
      evidence: [
        "I identified parts by function and position.",
        "I did not use wallpaper as proof of the operating system.",
      ],
    },
    check: {
      prompt: "Which clue is strongest when identifying the desktop interface?",
      options: [
        "The wallpaper picture",
        "The Taskbar or Dock and system controls",
        "The color of the computer",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Interface structure is stronger evidence than decoration.",
      incorrectFeedback:
        "Wallpaper and hardware color can be changed. Use interface structure and verify the operating system.",
    },
    closing:
      "You can read the workspace. Next, understand the movable windows inside it.",
    nextTitle: "Understand Apps and Windows",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m5-l2-v2",
    slug: "application-window-controls",
    moduleId: "m5",
    order: 2,
    title: "Understand Apps and Windows",
    promise:
      "Control an application window without confusing minimize, maximize, full screen, close, and quit.",
    estimatedMinutes: "16–20 minutes",
    track: "windows-mac",
    badges: ["Windows", "Controls"],
    outcomes: [
      "Distinguish an application from one of its windows.",
      "Use minimize, maximize or full screen, restore, and close deliberately.",
      "Explain why closing a window may not quit the application.",
    ],
    interaction: { kind: "window-control-simulator" },
    sections: [
      {
        type: "visual",
        title: "Anatomy of an application window",
        caption:
          "The controls look different on Windows and macOS, but the window still has a title area, content, scrolling, and controls.",
        visual: { kind: "window-anatomy" },
      },
      {
        type: "comparison",
        title: "Four controls, four results",
        items: [
          {
            label: "Minimize",
            description:
              "Hides the window while keeping it open. Return through the taskbar or Dock.",
          },
          {
            label: "Maximize / full screen",
            description:
              "Uses more or all of the screen. Full screen may hide system controls until you move the pointer to an edge.",
          },
          {
            label: "Restore",
            description:
              "Returns a maximized or full-screen window to a movable size.",
          },
          {
            label: "Close",
            description:
              "Closes that window. On macOS especially, the application may remain running.",
          },
        ],
      },
      {
        type: "steps",
        title: "Control one window safely",
        steps: [
          "Notice the application name and window title.",
          "Minimize it and return from the Taskbar or Dock.",
          "Enlarge it, then restore it.",
          "Save work before closing.",
        ],
        success: "You can predict the result before using each control.",
        recovery:
          "If controls disappear, move the pointer to the top edge or use Escape; do not restart immediately.",
      },
    ],
    practice: {
      title: "Operate a practice window",
      intro: "Use the simulated document; it cannot affect your files.",
      tasks: [
        "Minimize and return.",
        "Maximize or enter full screen and restore.",
        "Move and resize the window.",
        "Close it only after the practice is complete.",
      ],
      evidence: [
        "I predicted each visible result.",
        "I know closing and quitting are not always identical.",
      ],
    },
    check: {
      prompt: "You minimize a document window. What happened?",
      options: [
        "The document was deleted",
        "The window is hidden but still open",
        "The computer shut down",
      ],
      correctIndex: 1,
      correctFeedback: "Correct. Minimize hides a window without closing it.",
      incorrectFeedback:
        "Minimize keeps the window open and provides a route back through the Taskbar or Dock.",
    },
    closing:
      "You can control a window. Next, use the Taskbar or Dock without opening duplicates.",
    nextTitle: "Use the Taskbar or Dock",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m5-l3-v2",
    slug: "use-taskbar-or-dock",
    moduleId: "m5",
    order: 3,
    title: "Use the Taskbar or Dock",
    promise:
      "Launch, return to, and recognize open applications without mistaking a pinned icon for an installed or running app.",
    estimatedMinutes: "14–18 minutes",
    track: "windows-mac",
    badges: ["Taskbar", "Dock"],
    outcomes: [
      "Distinguish pinned, open, and frontmost applications using platform-appropriate evidence.",
      "Return to an open application.",
      "Explain why pinning is not installation.",
    ],
    interaction: { kind: "taskbar-dock-lab" },
    sections: [
      {
        type: "visual",
        title: "Launcher and switcher in one strip",
        caption:
          "Indicators vary by operating-system version and settings. Use the application name, visible window, and indicator together.",
        visual: { kind: "taskbar-dock" },
      },
      {
        type: "comparison",
        title: "Three states",
        items: [
          {
            label: "Pinned",
            description:
              "Its shortcut stays available for quick opening. This does not prove the app is running—or even explain how it was installed.",
          },
          {
            label: "Open",
            description:
              "The app is running and may have one or more windows, including minimized windows.",
          },
          {
            label: "Frontmost / active",
            description:
              "This is the application currently receiving keyboard and menu commands. Windows may highlight its taskbar icon. On macOS, confirm the front window and application name in the menu bar; the Dock does not provide a separate universal active marker.",
          },
        ],
      },
      {
        type: "callout",
        title: "One click may return to an existing window",
        body: "Before repeatedly selecting an app icon, pause and inspect. The app may already be open behind another window or minimized.",
        tone: "info",
      },
    ],
    practice: {
      title: "Read application states",
      intro: "Use the simulated Taskbar or Dock.",
      tasks: [
        "Identify a pinned but closed app.",
        "Open it once.",
        "Switch to another app.",
        "Return without creating a duplicate window.",
      ],
      evidence: [
        "I can name pinned, open, and active states.",
        "I checked before clicking repeatedly.",
      ],
    },
    check: {
      prompt: "What does a pinned application icon prove?",
      options: [
        "The app is open",
        "A shortcut is kept in the Taskbar or Dock",
        "The app is safe",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Pinning keeps a launcher available; it does not prove the app is open or safe.",
      incorrectFeedback:
        "Pinned means the shortcut stays available. Open, installed, and trustworthy are separate questions.",
    },
    closing:
      "You can read the launcher. Next, switch between active applications quickly.",
    nextTitle: "Switch Between Open Applications",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m5-l4-v2",
    slug: "switch-between-open-applications",
    moduleId: "m5",
    order: 4,
    title: "Switch Between Open Applications",
    promise:
      "Move between open work using visible controls or a keyboard shortcut and recover an application that appears to have disappeared.",
    estimatedMinutes: "14–18 minutes",
    track: "windows-mac",
    badges: ["Multitasking", "Switching"],
    outcomes: [
      "Identify the active application.",
      "Use the Taskbar or Alt+Tab to move among Windows windows, or the Dock or Command+Tab to move among Mac applications.",
      "Find an application behind or beneath another window.",
    ],
    interaction: { kind: "app-switcher-lab" },
    sections: [
      {
        type: "visual",
        title: "Switch focus; do not reopen your work",
        caption:
          "The switcher moves focus among running applications. It does not create another copy of the document.",
        visual: { kind: "application-switching" },
      },
      {
        type: "steps",
        title: "Use the application switcher",
        tracks: {
          windows: {
            steps: [
              "Hold Alt.",
              "Press Tab once to show open applications.",
              "Continue while holding Alt until the target is selected.",
              "Release Alt to switch.",
            ],
            success: "The named application becomes active.",
          },
          mac: {
            steps: [
              "Hold Command.",
              "Press Tab once to show open applications.",
              "Continue while holding Command until the target is selected.",
              "Release Command to switch.",
            ],
            success: "The named application becomes active.",
          },
        },
      },
      {
        type: "decision",
        title: "The document vanished",
        prompt: "Should you create a new document immediately?",
        answer:
          "No. Check the Taskbar or Dock, use the application switcher, and inspect minimized or covered windows first.",
        tone: "pause",
      },
    ],
    practice: {
      title: "Complete a switching circuit",
      intro: "Move among three simulated applications in the named order.",
      tasks: [
        "Switch by clicking an app indicator.",
        "Switch using the keyboard combination.",
        "Identify the active app.",
        "Recover a covered window.",
      ],
      evidence: [
        "I switched focus without reopening the work.",
        "I recovered a window that looked missing.",
      ],
    },
    check: {
      prompt: "What does Alt+Tab on Windows or Command+Tab on Mac normally do?",
      options: [
        "Deletes the active app",
        "Moves among running applications",
        "Turns off the screen",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. It changes which running application is active.",
      incorrectFeedback:
        "These combinations switch focus among running applications.",
    },
    closing:
      "You can move among open work. Next, read the controls inside an interface.",
    nextTitle: "Work With Menus and Controls",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m5-l5-v2",
    slug: "menus-buttons-and-interface-controls",
    moduleId: "m5",
    order: 5,
    title: "Work With Menus and Controls",
    promise:
      "Recognize common interface controls, understand disabled commands, and close a dialog without guessing.",
    estimatedMinutes: "18–22 minutes",
    track: "universal",
    badges: ["Menus", "Controls"],
    outcomes: [
      "Recognize menus, buttons, links, checkboxes, radio buttons, switches, lists, sliders, and dialogs.",
      "Explain why a command may be disabled.",
      "Use Cancel or close when a dialog should not be applied.",
    ],
    interaction: { kind: "interface-control-lab" },
    sections: [
      {
        type: "visual",
        title: "Controls communicate their behavior",
        caption:
          "Shape, label, selected state, and surrounding context work together. Color alone is not enough.",
        visual: { kind: "interface-controls" },
      },
      {
        type: "comparison",
        title: "Choose the control that matches the choice",
        items: [
          {
            label: "Checkbox",
            description:
              "Turns an independent option on or off; several checkboxes can be selected.",
          },
          {
            label: "Radio buttons",
            description: "Choose one option from a group.",
          },
          {
            label: "Switch",
            description:
              "Changes one setting between on and off, often immediately.",
          },
          {
            label: "Dropdown or menu",
            description: "Reveals more commands or one choice from a list.",
          },
        ],
      },
      {
        type: "callout",
        title: "Greyed out usually means unavailable",
        body: "A disabled command may require a selection, permission, or different context. Repeated clicking will not activate it; identify what the command needs.",
        tone: "info",
      },
    ],
    practice: {
      title: "Operate a settings dialog",
      intro:
        "Complete the requested configuration and cancel one deliberate wrong change.",
      tasks: [
        "Open a menu.",
        "Select one radio option and two independent checkboxes.",
        "Adjust a slider.",
        "Cancel a wrong dialog and apply the correct one.",
      ],
      evidence: [
        "I chose controls based on their behavior.",
        "I did not force a disabled command.",
      ],
    },
    check: {
      prompt: "A command is greyed out. What is the strongest next step?",
      options: [
        "Click it repeatedly",
        "Check whether it needs a selection, permission, or different context",
        "Restart the computer immediately",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Disabled commands usually lack a required condition.",
      incorrectFeedback:
        "Pause and identify the missing selection, permission, or context.",
    },
    closing:
      "You can read controls. Next, arrange more than one window deliberately.",
    nextTitle: "Manage Multiple Windows",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m5-l6-v2",
    slug: "move-resize-and-arrange-windows",
    moduleId: "m5",
    order: 6,
    title: "Manage Multiple Windows",
    promise:
      "Move, resize, and arrange two windows so you can compare or transfer information without losing either one.",
    estimatedMinutes: "16–20 minutes",
    track: "windows-mac",
    badges: ["Window layout", "Side by side"],
    outcomes: [
      "Move and resize a normal window.",
      "Arrange two windows side by side.",
      "Scroll the intended window and recover one that moves partly off-screen.",
    ],
    interaction: { kind: "window-arrangement-lab" },
    sections: [
      {
        type: "visual",
        title: "Two windows, one working view",
        caption:
          "Snapping and tiling automate the layout, but both windows remain separate and active one at a time.",
        visual: { kind: "window-layout" },
      },
      {
        type: "steps",
        title: "Arrange two windows",
        tracks: {
          windows: {
            steps: [
              "Restore both windows so they are movable.",
              "Drag one title bar to a screen edge or use a Snap layout.",
              "Choose the second window for the remaining space.",
              "Click inside the window you intend to scroll or type in.",
            ],
            success:
              "Both windows are visible and the correct one receives input.",
          },
          mac: {
            steps: [
              "Leave full screen if necessary.",
              "Use the green window control or Window menu to tile, or resize both windows manually.",
              "Choose the second window for the other side.",
              "Click inside the window you intend to scroll or type in.",
            ],
            success:
              "Both windows are visible and the correct one receives input.",
          },
        },
      },
      {
        type: "decision",
        title: "A window is partly off-screen",
        prompt: "Is the file lost?",
        answer:
          "No. The window position changed. Use its title bar, the Taskbar or Dock, the application switcher, or the operating system's arrange controls to bring it back.",
        tone: "green",
      },
    ],
    practice: {
      title: "Build a two-window workspace",
      intro: "Arrange the simulated notes and reference windows.",
      tasks: [
        "Restore both windows.",
        "Move and resize one.",
        "Place them side by side.",
        "Activate and scroll the named window.",
      ],
      evidence: [
        "Both windows stayed visible.",
        "I verified which window was active before typing or scrolling.",
      ],
    },
    check: {
      prompt: "Two windows are visible. How do you know which receives typing?",
      options: [
        "The larger one always does",
        "Click inside it and confirm its active appearance or insertion point",
        "Both receive the same typing",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Focus determines which window receives keyboard input.",
      incorrectFeedback:
        "Activate the target and confirm visible focus before typing.",
    },
    closing:
      "You can organize the workspace. Next, handle notifications and quick controls.",
    nextTitle: "Notifications and Quick Controls",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m5-l7-v2",
    slug: "notifications-and-quick-controls",
    moduleId: "m5",
    order: 7,
    title: "Notifications and Quick Controls",
    promise:
      "Read notifications without exposing private information and use quick controls without confusing a message with an error.",
    estimatedMinutes: "16–20 minutes",
    track: "windows-mac",
    badges: ["Notifications", "Quick controls"],
    outcomes: [
      "Distinguish information, an action request, a warning, and an error.",
      "Locate common quick controls.",
      "Protect private notification previews.",
    ],
    interaction: { kind: "notification-triage" },
    sections: [
      {
        type: "visual",
        title: "Messages and quick controls open from separate system surfaces",
        caption:
          "Windows 11 separates Notification Center from Quick Settings. macOS separates Notification Center from Control Center. They open from nearby system areas, and available controls depend on hardware and settings.",
        visual: { kind: "notifications-controls" },
      },
      {
        type: "comparison",
        title: "Read before acting",
        items: [
          {
            label: "Information",
            description:
              "Reports a completed event or status. It may need no action.",
          },
          {
            label: "Action request",
            description:
              "Asks for a decision. Confirm the application and purpose before allowing it.",
          },
          {
            label: "Warning or error",
            description:
              "Explains a risk or failure. Record the exact message before closing or troubleshooting.",
          },
          {
            label: "Suspicious notification",
            description:
              "Urgent prizes, threats, or unknown senders can be deceptive. Do not follow the prompt blindly.",
            tone: "warn",
          },
        ],
      },
      {
        type: "callout",
        title: "Previews can expose private information",
        body: "Messages, verification codes, calendar details, and account names can appear on a locked or shared screen. Adjust preview settings to match the privacy risk.",
        tone: "warning",
      },
    ],
    practice: {
      title: "Triage four notifications",
      intro:
        "Classify each message, choose whether to act now, later, or stop, and use one quick control.",
      tasks: [
        "Dismiss information that needs no action.",
        "Read a permission request before deciding.",
        "Record an exact error message.",
        "Reject a suspicious prompt and adjust one quick control.",
      ],
      evidence: [
        "I classified the message before acting.",
        "I protected private preview information.",
      ],
    },
    check: {
      prompt:
        "A notification says you won a prize and must act immediately. What is the strongest response?",
      options: [
        "Open it immediately",
        "Stop and verify the sender and destination without using the prompt",
        "Enter payment information",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Urgency and an unexpected reward are reasons to stop and verify.",
      incorrectFeedback:
        "Do not act through an unexpected urgent prize notification. Stop and verify independently.",
    },
    closing:
      "You can interpret system messages. Next, recover when the screen does not look as expected.",
    nextTitle: "Recover When the Screen Looks Wrong",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m5-l8-v2",
    slug: "recover-missing-hidden-or-full-screen-window",
    moduleId: "m5",
    order: 8,
    title: "Recover When the Screen Looks Wrong",
    promise:
      "Use a calm recovery sequence for hidden, minimized, covered, full-screen, busy, and unresponsive application windows.",
    estimatedMinutes: "20–25 minutes",
    track: "windows-mac",
    badges: ["Recovery", "Module mission"],
    outcomes: [
      "Distinguish hidden, minimized, covered, full-screen, busy, and frozen states.",
      "Use low-risk recovery before restarting.",
      "Organize and restore a complete working screen.",
    ],
    interaction: { kind: "missing-window-recovery" },
    sections: [
      {
        type: "visual",
        title: "What looks missing may still be open",
        caption:
          "The recovery path starts by observing the visible state and checking open applications—not by reopening files or forcing power off.",
        visual: { kind: "screen-recovery" },
      },
      {
        type: "steps",
        title: "Use the least disruptive recovery first",
        steps: [
          "Pause and read the entire screen, including dialogs and progress indicators.",
          "Check the Taskbar or Dock and application switcher.",
          "Exit full screen or restore a minimized window.",
          "Move or arrange covered and off-screen windows.",
          "If an app is busy, wait briefly and protect unsaved work.",
          "Only after safer steps fail, use the operating system's normal close or restart route.",
        ],
        success:
          "The missing work returns or you can name the exact failure state.",
        recovery:
          "Forced power-off remains an emergency action because it can lose unsaved work.",
      },
      {
        type: "comparison",
        title: "Busy is not always frozen",
        items: [
          {
            label: "Busy",
            description:
              "A progress indicator changes, the pointer may show waiting, or the app responds slowly. Give it time before repeating commands.",
          },
          {
            label: "Waiting for you",
            description:
              "A dialog may be behind another window or asking for a choice.",
          },
          {
            label: "Unresponsive",
            description:
              "The application does not react after reasonable waiting and safer checks. Record what happened before closing it.",
          },
        ],
      },
    ],
    practice: {
      title: "Module mission: Organize a working screen",
      intro:
        "Complete the full simulated mission, then demonstrate the safe parts on your real computer.",
      tasks: [
        "Identify the Windows or Mac interface.",
        "Open two apps and switch between them.",
        "Arrange both windows side by side.",
        "Use a menu and secondary-click menu.",
        "Triage one notification.",
        "Recover a hidden or full-screen window and restore the starting layout.",
      ],
      evidence: [
        "I completed every action and verified the visible result.",
        "I recovered without creating duplicate work or forcing power off.",
        "I returned the workspace to its starting state.",
      ],
      privacyNote:
        "Use invented practice content. Do not expose real messages, account names, verification codes, or private documents.",
    },
    check: {
      prompt:
        "A document seems to disappear after you select Minimize. What is the best first recovery?",
      options: [
        "Create a new document",
        "Check its application on the Taskbar or Dock and restore the window",
        "Hold the power button",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Minimized work is normally still open and can be restored.",
      incorrectFeedback:
        "Start with the lowest-risk explanation: the window is minimized and still open.",
    },
    closing:
      "Module 5 is complete when you can identify, switch, arrange, interpret, and recover the working screen without guessing.",
    verifiedAt: "2026-07-20",
  },
];
