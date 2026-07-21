import type { ComputerLessonV2 } from "@/content/computer-course-v2";

export const computerModuleFourV2: ComputerLessonV2[] = [
  {
    id: "m4-l1-v2",
    slug: "power-sleep-restart-shutdown",
    moduleId: "m4",
    order: 1,
    title: "Start, Sleep, Restart, and Shut Down Safely",
    promise:
      "Choose the right power action, protect open work, and reserve forced power-off for a genuine emergency.",
    estimatedMinutes: "12–15 minutes",
    track: "windows-mac",
    badges: ["Power control", "Safe recovery"],
    outcomes: [
      "Distinguish sleep, restart, shut down, and wake.",
      "Save work before a power action.",
      "Explain why holding the power button is an emergency action.",
    ],
    interaction: { kind: "power-decision-simulator" },
    sections: [
      {
        type: "visual",
        title: "Find the physical button—and use the screen menu for Restart",
        caption:
          "Power-button location varies by computer. Use the photographed examples to recognize the hardware; use the Windows or Mac screen path for ordinary Sleep, Restart, and Shut Down actions.",
        visual: { kind: "power-controls" },
      },
      {
        type: "comparison",
        title: "Four actions with different results",
        items: [
          {
            label: "Sleep",
            description:
              "Keeps your session ready while using less power. Use it for a shorter break; some battery use continues.",
          },
          {
            label: "Restart",
            description:
              "Closes the current session and starts the operating system again. It can complete updates and clear some temporary problems.",
            tone: "good",
          },
          {
            label: "Shut down",
            description:
              "Closes the session and powers the computer off. Save work first and wait until the screen and activity stop.",
          },
          {
            label: "Force power off",
            description:
              "Holding the physical power button interrupts normal shutdown. Use it only when the computer is unresponsive and safer recovery has failed.",
            tone: "warn",
          },
        ],
      },
      {
        type: "steps",
        title: "Use the operating-system power menu",
        tracks: {
          windows: {
            steps: [
              "Save open work.",
              "Open Start, then choose the Power control.",
              "Choose Sleep, Restart, or Shut down by name.",
              "If an update message appears, read it before choosing.",
            ],
            success:
              "You can point to the named power choices without holding the physical button.",
          },
          mac: {
            steps: [
              "Save open work.",
              "Open the Apple menu at the top-left of the screen.",
              "Choose Sleep, Restart, or Shut Down by name.",
              "Read any confirmation about reopening windows before continuing.",
            ],
            success:
              "You can point to the named power choices without holding the physical button.",
          },
        },
      },
      {
        type: "decision",
        title: "The screen is dark",
        prompt: "Should you immediately hold the power button?",
        answer:
          "No. First check power, brightness, the charger, and whether a key or brief power-button press wakes the computer. A dark screen does not prove the computer is frozen.",
        tone: "pause",
      },
    ],
    practice: {
      title: "Rehearse a safe power decision",
      intro: "Use a harmless unsaved note so the save step is visible.",
      tasks: [
        "Save the note.",
        "Point to Sleep, Restart, and Shut Down without selecting the wrong action.",
        "Put the computer to sleep and wake it once if the device is ready.",
        "Explain which action you would choose for a short break, an ordinary software problem, and the end of the day.",
      ],
      evidence: [
        "I saved before changing power state.",
        "I know forced power-off is not the normal shutdown method.",
      ],
    },
    check: {
      prompt:
        "An application is behaving strangely, but the computer still responds. What is the strongest next power action after saving?",
      options: [
        "Hold the physical power button until everything stops",
        "Use the operating-system Restart command",
        "Disconnect the charger and wait",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. A normal restart closes the session safely and starts it again.",
      incorrectFeedback:
        "When the computer still responds, save and use the normal Restart command rather than interrupting power.",
    },
    closing:
      "You can now change power state deliberately. Next, make the pointer go exactly where you intend.",
    nextTitle: "Control the Pointer",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m4-l2-v2",
    slug: "mouse-touchpad-pointer-control",
    moduleId: "m4",
    order: 2,
    title: "Control the Pointer",
    promise:
      "Use a mouse or touchpad deliberately enough to click, open, inspect, scroll, and drag without guessing.",
    estimatedMinutes: "18–22 minutes",
    track: "universal",
    badges: ["Mouse", "Touchpad"],
    outcomes: [
      "Distinguish pointer movement from clicking.",
      "Use single-click, double-click, secondary click, scroll, and drag.",
      "Recover when a click or drag produces the wrong result.",
    ],
    interaction: { kind: "pointer-control-circuit" },
    sections: [
      {
        type: "visual",
        title: "Mouse and touchpad controls",
        caption:
          "The surface may look different, but the core actions are the same. Labels stay outside the photographs so the lesson can be translated.",
        visual: { kind: "pointer-controls" },
      },
      {
        type: "comparison",
        title: "Name the action before doing it",
        items: [
          {
            label: "Single-click",
            description:
              "Selects an item or activates a button or link. One deliberate press and release.",
          },
          {
            label: "Double-click",
            description:
              "Two quick presses, commonly used to open an item on the desktop or in a file window. Web links normally need only one click.",
          },
          {
            label: "Secondary click",
            description:
              "Opens a context menu of actions related to the item. Often right-click on a mouse or a two-finger click on a touchpad.",
          },
          {
            label: "Click-and-drag",
            description:
              "Press, keep holding, move to a visible destination, then release. Undo immediately if the result is wrong.",
            tone: "warn",
          },
        ],
      },
      {
        type: "steps",
        title: "Build control slowly",
        steps: [
          "Move the pointer without clicking and stop on a large target.",
          "Single-click once and observe whether the item becomes selected.",
          "Scroll in small amounts and watch which area moves.",
          "Open a safe item using the action appropriate to its location.",
          "Practice dragging only inside the lesson activity, where the destination is obvious.",
        ],
        success:
          "You can say which pointer action you are about to perform and verify its visible result.",
      },
    ],
    practice: {
      title: "Complete the pointer-control circuit",
      intro:
        "Use the lesson targets; do not rearrange real files for practice.",
      tasks: [
        "Land on five targets without clicking outside them.",
        "Single-click, double-click, and secondary-click the named targets.",
        "Scroll to a marked stopping point.",
        "Drag one practice tile to its matching destination and undo one deliberate wrong move.",
      ],
      evidence: [
        "I completed every pointer action by name.",
        "I checked the result instead of repeating clicks blindly.",
      ],
    },
    check: {
      prompt: "What is the safest way to learn click-and-drag?",
      options: [
        "Practice by moving important files around the desktop",
        "Use a harmless practice target with a visible destination and know how to undo",
        "Hold the button while moving randomly until something happens",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. A controlled practice target makes the action and recovery visible.",
      incorrectFeedback:
        "Dragging can move real items. Practice with a harmless target, a clear destination, and an undo route.",
    },
    closing:
      "Your pointer is now a controlled tool. Next, map the keys that make typing and navigation possible.",
    nextTitle: "Understand the Keyboard and Type Confidently",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m4-l3-v2",
    slug: "keyboard-map-multilingual-typing",
    moduleId: "m4",
    order: 3,
    title: "Understand the Keyboard and Type Confidently",
    promise:
      "Recognize essential key groups, correct ordinary mistakes, and prepare to type Haitian Creole and French accurately.",
    estimatedMinutes: "20–25 minutes",
    track: "windows-mac",
    badges: ["Keyboard map", "Multilingual typing"],
    outcomes: [
      "Identify typing, editing, navigation, and modifier keys.",
      "Use Shift, Caps Lock, Backspace, Delete, Tab, Enter, and arrows correctly.",
      "Choose a reliable method for accented characters.",
    ],
    interaction: { kind: "keyboard-key-trainer" },
    sections: [
      {
        type: "visual",
        title: "A functional keyboard map",
        caption:
          "Your keyboard may place or name a few keys differently. Match the printed label and function rather than memorizing an exact position.",
        visual: { kind: "keyboard-map" },
      },
      {
        type: "comparison",
        title: "The letters printed on the keys reveal the layout",
        items: [
          {
            label: "QWERTY",
            description:
              "The first letter row begins Q-W-E-R-T-Y. It is common on English-language keyboards, but language and region settings still determine the characters produced.",
          },
          {
            label: "AZERTY",
            description:
              "The first letter row begins A-Z-E-R-T-Y. It is common on French-language keyboards. Do not assume the keys match a QWERTY picture.",
          },
          {
            label: "Printed label vs. active layout",
            description:
              "The printed key is physical; the active keyboard layout is software. If they do not match, pressing a key can produce a different character.",
            tone: "warn",
          },
        ],
      },
      {
        type: "comparison",
        title: "Keys beginners commonly confuse",
        items: [
          {
            label: "Shift vs. Caps Lock",
            description:
              "Hold Shift for one capital or upper symbol. Caps Lock stays active until changed and is not a general shortcut key.",
          },
          {
            label: "Backspace vs. Delete",
            description:
              "Their direction can depend on the operating system and keyboard. Watch which side of the insertion point changes before repeating.",
          },
          {
            label: "Enter/Return vs. Tab",
            description:
              "Enter confirms or starts a new paragraph; Tab moves between fields or creates indentation depending on the app.",
          },
          {
            label: "Control/Alt vs. Command/Option",
            description:
              "Windows commonly uses Control for shortcuts; macOS commonly uses Command. The printed keys tell you which path to follow.",
          },
        ],
      },
      {
        type: "steps",
        title: "Prepare Haitian Creole and French typing",
        tracks: {
          windows: {
            steps: [
              "Open Settings and locate Time & language, then Language & region or Typing.",
              "Add or choose the keyboard layout required for the language.",
              "Use the visible input-language indicator to confirm the active layout.",
              "Test é, è, à, ò, ù, and ç in a harmless note before relying on the layout.",
            ],
            success:
              "You can identify the active keyboard layout and produce the required characters in a test note.",
          },
          mac: {
            steps: [
              "Open System Settings and locate Keyboard, then Text Input or Input Sources.",
              "Add or choose the input source required for the language.",
              "Use the input menu when visible to confirm the active source.",
              "Test é, è, à, ò, ù, and ç in a harmless note; press-and-hold may also offer accents in supported apps.",
            ],
            success:
              "You can identify the active input source and produce the required characters in a test note.",
          },
        },
      },
    ],
    practice: {
      title: "Type and repair a multilingual paragraph",
      intro:
        "Use a blank local note. The goal is accurate control, not typing speed.",
      tasks: [
        "Type two sentences with capitals, punctuation, and a new paragraph.",
        "Use arrows to move the insertion point without deleting text.",
        "Correct one letter with Backspace or Delete.",
        "Type at least four relevant accented characters, including one used in Haitian Creole and one used in French.",
      ],
      evidence: [
        "I know which keyboard layout or input source is active.",
        "I corrected text without erasing the whole sentence.",
      ],
      privacyNote:
        "Practice with invented text, not passwords, identification numbers, or private messages.",
    },
    check: {
      prompt: "What is the strongest way to type accented characters reliably?",
      options: [
        "Guess key combinations every time",
        "Choose and verify an appropriate keyboard layout or input source, then test it",
        "Replace every accented character with an unaccented one",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. A verified input method is repeatable and preserves accurate spelling.",
      incorrectFeedback:
        "Use a known keyboard layout or input source and test it before important writing.",
    },
    closing:
      "You can now produce and correct characters. Next, control whole pieces of text without fear.",
    nextTitle: "Select and Edit Text Without Fear",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m4-l4-v2",
    slug: "select-edit-copy-paste-text",
    moduleId: "m4",
    order: 4,
    title: "Select and Edit Text Without Fear",
    promise:
      "Select, replace, copy, cut, paste, undo, and redo while understanding what changes and how to recover.",
    estimatedMinutes: "18–22 minutes",
    track: "universal",
    badges: ["Text selection", "Clipboard"],
    outcomes: [
      "Distinguish the insertion point, pointer, and selected text.",
      "Explain the clipboard and the difference between copy and cut.",
      "Use undo and redo as deliberate recovery tools.",
    ],
    interaction: { kind: "text-editing-workbench" },
    sections: [
      {
        type: "visual",
        title: "The editing chain",
        caption:
          "Selection defines the target. The action changes it. Verification and undo protect you from an unintended result.",
        visual: { kind: "text-editing" },
      },
      {
        type: "comparison",
        title: "Copy is safer than cut for first attempts",
        items: [
          {
            label: "Copy",
            description:
              "Places a duplicate on the clipboard while the original remains. Use this first when losing the source would matter.",
            tone: "good",
          },
          {
            label: "Cut",
            description:
              "Removes the selected content and places it on the clipboard. Paste promptly and verify the destination.",
            tone: "warn",
          },
          {
            label: "Paste",
            description:
              "Inserts the clipboard contents at the current insertion point or selected destination.",
          },
        ],
      },
      {
        type: "steps",
        title: "Edit with a recovery loop",
        steps: [
          "Place the insertion point and type one character to confirm the location.",
          "Select exactly the text you intend to change.",
          "Perform one action: replace, copy, cut, or delete.",
          "Read the result before continuing.",
          "Undo immediately if the result is wrong; redo only when you intend to restore the undone action.",
        ],
        success:
          "You can name the selected target, the action, the visible result, and the recovery route.",
      },
    ],
    practice: {
      title: "Repair a deliberately messy paragraph",
      intro: "The lesson supplies harmless text designed for this exercise.",
      tasks: [
        "Replace one incorrect word.",
        "Copy one sentence and paste it below the paragraph.",
        "Move one sentence using cut and paste.",
        "Make one deliberate error, undo it, then redo and undo once more.",
      ],
      evidence: [
        "The final paragraph matches the target order.",
        "I recovered from an editing mistake without starting over.",
      ],
    },
    check: {
      prompt:
        "You need the same sentence in two places and cannot risk losing the original. Which action should come first?",
      options: ["Cut", "Copy", "Delete"],
      correctIndex: 1,
      correctFeedback:
        "Correct. Copy keeps the original while placing a duplicate on the clipboard.",
      incorrectFeedback:
        "Copy is the safer first action because the source remains in place.",
    },
    closing:
      "You can now edit with a recovery route. Next, turn repeated actions into a small set of useful shortcuts.",
    nextTitle: "Use Essential Shortcuts",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m4-l5-v2",
    slug: "essential-keyboard-shortcuts",
    moduleId: "m4",
    order: 5,
    title: "Use Essential Shortcuts",
    promise:
      "Use a small, practical shortcut set while keeping menu commands as a visible alternative.",
    estimatedMinutes: "15–18 minutes",
    track: "windows-mac",
    badges: ["Eight shortcuts", "Menus still work"],
    outcomes: [
      "Use shortcuts for copy, paste, cut, undo, redo, select all, save, and find.",
      "Match Control on Windows with Command on Mac for common shortcuts.",
      "Use a menu when a shortcut is forgotten or intercepted by an app.",
    ],
    interaction: { kind: "shortcut-key-trainer" },
    sections: [
      {
        type: "visual",
        title: "Eight shortcuts worth learning first",
        caption:
          "Learn the action first. The shortcut is a faster route, not a test of intelligence or memory.",
        visual: { kind: "shortcut-map" },
      },
      {
        type: "callout",
        title: "Shortcuts can vary",
        body: "Applications, languages, keyboard layouts, and accessibility settings can change or reserve a key combination. If a shortcut does not behave as expected, stop repeating it, use the named menu command, and check that application’s help.",
        tone: "info",
      },
      {
        type: "steps",
        title: "Use a shortcut deliberately",
        steps: [
          "Name the action you need.",
          "Confirm the target or insertion point.",
          "Hold the modifier key, tap the letter key once, then release.",
          "Verify the visible result.",
          "Use the menu command if the result is unclear.",
        ],
        success:
          "You can perform the action by shortcut and locate its menu alternative.",
      },
    ],
    practice: {
      title: "Complete one task two ways",
      intro: "Use at least four shortcuts, then repeat the actions from menus.",
      tasks: [
        "Copy and paste one sentence.",
        "Undo and redo one change.",
        "Select all and copy without replacing the original.",
        "Save the note and find one word.",
        "Repeat four actions using named menus instead of shortcuts.",
      ],
      evidence: [
        "I used at least four shortcuts correctly.",
        "I can still complete the actions when I forget a shortcut.",
      ],
    },
    check: {
      prompt: "What should you do when a shortcut produces an unclear result?",
      options: [
        "Repeat it rapidly",
        "Stop, verify the target, undo if needed, and use the named menu command",
        "Hold every modifier key together",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. The named action and visible menu route remain the reliable foundation.",
      incorrectFeedback:
        "Do not repeat an unclear shortcut. Verify, recover if needed, and use the named command.",
    },
    closing:
      "You now have a compact shortcut toolkit. Finish the module by making the computer physically and visually comfortable to control.",
    nextTitle: "Make the Computer Comfortable and Accessible",
    verifiedAt: "2026-07-20",
  },
  {
    id: "m4-l6-v2",
    slug: "computer-comfort-accessibility-controls",
    moduleId: "m4",
    order: 6,
    title: "Make the Computer Comfortable and Accessible",
    promise:
      "Adjust safe comfort and accessibility controls, verify the result, and restore a setting that does not help.",
    estimatedMinutes: "18–22 minutes",
    track: "windows-mac",
    badges: ["Accessibility", "Comfort"],
    outcomes: [
      "Identify useful visual, hearing, pointer, keyboard, and caption tools.",
      "Change one safe setting and verify its effect.",
      "Arrange a workstation to reduce avoidable strain.",
    ],
    interaction: { kind: "accessibility-simulator" },
    sections: [
      {
        type: "visual",
        title: "Comfort is part of control",
        caption:
          "A raised screen, supported feet, relaxed shoulders, and reachable input devices can make practice easier. Adapt the setup to the learner rather than forcing one posture.",
        visual: { kind: "comfort-controls" },
      },
      {
        type: "comparison",
        title: "Choose the tool that matches the barrier",
        items: [
          {
            label: "Seeing",
            description:
              "Text size, zoom, pointer size, contrast, magnifier, and screen readers support different needs.",
          },
          {
            label: "Hearing",
            description:
              "Captions, visual alerts, balance, and volume controls can make information easier to receive.",
          },
          {
            label: "Movement + typing",
            description:
              "Pointer speed, touchpad settings, Sticky Keys, keyboard repeat, and alternative input can reduce difficult movements.",
          },
          {
            label: "Attention + comfort",
            description:
              "Reduced motion, fewer notifications, comfortable brightness, breaks, and a stable workspace can reduce strain and distraction.",
          },
        ],
      },
      {
        type: "steps",
        title: "Change one setting safely",
        tracks: {
          windows: {
            steps: [
              "Open Settings and search for the named need, such as text size, pointer size, captions, or accessibility.",
              "Record or photograph the original value without exposing private information.",
              "Change one setting by a small amount.",
              "Test it in the task that was difficult.",
              "Keep the change only if it helps; otherwise restore the original value.",
            ],
            success:
              "You can explain what changed, whether it helped, and how to restore it.",
          },
          mac: {
            steps: [
              "Open System Settings and search for the named need, such as display, pointer, captions, or Accessibility.",
              "Record or photograph the original value without exposing private information.",
              "Change one setting by a small amount.",
              "Test it in the task that was difficult.",
              "Keep the change only if it helps; otherwise restore the original value.",
            ],
            success:
              "You can explain what changed, whether it helped, and how to restore it.",
          },
        },
      },
      {
        type: "callout",
        title: "Accessibility tools are ordinary tools",
        body: "A tool is useful when it removes a barrier. Learners do not need a diagnosis or permission from the course to explore reversible accessibility settings. Organization-managed computers may restrict changes, so follow school or workplace rules.",
        tone: "success",
      },
      {
        type: "callout",
        title: "Browser zoom and system text size are not the same",
        body: "Browser zoom usually changes one website. System text size or display scaling affects more of the computer. Start with the smallest change that solves the problem, test the difficult task, and keep a route back to the original value.",
        tone: "info",
      },
    ],
    practice: {
      title: "Module mission: Control Without Guessing",
      intro: "Combine the module skills in one evidence-based performance.",
      tasks: [
        "Wake the computer and identify the normal power choices.",
        "Complete single-click, double-click, secondary-click, scroll, and controlled drag.",
        "Type and correct a short multilingual paragraph.",
        "Select, copy, paste, and undo text.",
        "Use at least four essential shortcuts and show one menu alternative.",
        "Change one safe comfort or accessibility setting, test it, and restore it if it does not help.",
      ],
      evidence: [
        "I demonstrated each action and verified the result.",
        "I recovered from one deliberate mistake.",
        "I can explain when to sleep, restart, shut down, or stop and ask for help.",
      ],
      privacyNote:
        "Use invented text and avoid showing private notifications, accounts, passwords, or personal documents.",
    },
    check: {
      prompt:
        "You enlarge text, but part of an application becomes harder to use. What should you do?",
      options: [
        "Keep increasing it because accessibility settings cannot be reversed",
        "Test a smaller change or another tool, and restore the original setting if the result does not help",
        "Stop using accessibility tools permanently",
      ],
      correctIndex: 1,
      correctFeedback:
        "Correct. Safe personalization is a test-and-verify process, and reversible settings can be adjusted again.",
      incorrectFeedback:
        "Accessibility is not all-or-nothing. Test one change, verify the task, and restore or try another tool when needed.",
    },
    closing:
      "Module 4 is complete when you can control power, pointer, keyboard, text, shortcuts, and one comfort setting while explaining and verifying each result.",
    verifiedAt: "2026-07-20",
  },
];
