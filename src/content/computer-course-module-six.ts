import type {
  ComputerLessonInteraction,
  ComputerLessonV2,
  LessonVisual,
} from "@/content/computer-course-v2";

type LessonSeed = {
  slug: string;
  title: string;
  promise: string;
  minutes: string;
  badges: string[];
  outcomes: string[];
  interaction: ComputerLessonInteraction;
  visual: LessonVisual;
  visualTitle: string;
  visualCaption: string;
  compareTitle: string;
  comparisons: [string, string][];
  stepsTitle: string;
  windows: string[];
  mac: string[];
  warningTitle: string;
  warning: string;
  tasks: string[];
  evidence: string[];
  question: string;
  options: string[];
  correct: number;
  feedback: string;
  closing: string;
  next?: string;
};

function makeLesson(seed: LessonSeed, index: number): ComputerLessonV2 {
  return {
    id: `m6-l${index + 1}-v2`,
    slug: seed.slug,
    moduleId: "m6",
    order: index + 1,
    title: seed.title,
    promise: seed.promise,
    estimatedMinutes: seed.minutes,
    track: "windows-mac",
    badges: seed.badges,
    outcomes: seed.outcomes,
    interaction: seed.interaction,
    sections: [
      {
        type: "visual",
        title: seed.visualTitle,
        caption: seed.visualCaption,
        visual: seed.visual,
      },
      {
        type: "comparison",
        title: seed.compareTitle,
        items: seed.comparisons.map(([label, description]) => ({
          label,
          description,
        })),
      },
      {
        type: "steps",
        title: seed.stepsTitle,
        tracks: {
          windows: {
            steps: seed.windows,
            success: "You can describe what changed and how to reverse it.",
          },
          mac: {
            steps: seed.mac,
            success: "You can describe what changed and how to reverse it.",
          },
        },
        recovery:
          "If your screen differs, stop and search Settings or System Settings by the named control. Do not choose an unfamiliar option just to continue.",
      },
      {
        type: "callout",
        title: seed.warningTitle,
        body: seed.warning,
        tone: "warning",
      },
    ],
    practice: {
      title: `Practice: ${seed.title}`,
      intro:
        "Complete the safe simulation first. Then inspect your computer without installing, buying, or removing anything unless the task explicitly says to do so.",
      tasks: seed.tasks,
      evidence: seed.evidence,
      privacyNote:
        "Do not enter a password, payment number, license key, account email, or other private information into the course.",
    },
    check: {
      prompt: seed.question,
      options: seed.options,
      correctIndex: seed.correct,
      correctFeedback: seed.feedback,
      incorrectFeedback:
        "Pause and use the source, purpose, cost, compatibility, and reversibility evidence before deciding.",
    },
    closing: seed.closing,
    nextTitle: seed.next,
    verifiedAt: "2026-07-21",
  };
}

const seeds: LessonSeed[] = [
  {
    slug: "understand-app-program-software",
    title: "Understand What an App Is",
    promise:
      "Separate an installed app, web app, shortcut, and system component before changing anything.",
    minutes: "14–18 minutes",
    badges: ["Apps", "Vocabulary"],
    outcomes: [
      "Explain app, program, and software in plain language.",
      "Distinguish an installed app from a website and a shortcut.",
      "Recognize free, paid, trial, subscription, and in-app purchase models.",
    ],
    interaction: { kind: "app-type-classifier" },
    visual: { kind: "apps-what-is-app" },
    visualTitle: "Apps live in more than one place",
    visualCaption:
      "The photograph provides real computer context. The activity below carries the exact labels so translation never depends on text inside an image.",
    compareTitle: "Four things beginners often confuse",
    comparisons: [
      [
        "Installed app",
        "Software stored on the computer and available even when its shortcut moves.",
      ],
      [
        "Web app",
        "A service used mainly through a browser; it may still offer an optional installed app.",
      ],
      [
        "Shortcut",
        "A route to an app, file, or website. Deleting it normally removes only the route.",
      ],
      [
        "System component",
        "Software supplied with the operating system; some components cannot or should not be removed.",
      ],
    ],
    stepsTitle: "Confirm what something is",
    windows: [
      "Open Start and locate the item.",
      "Use Settings > Apps > Installed apps to confirm installation.",
      "Do not uninstall it during this inspection.",
    ],
    mac: [
      "Open Finder > Applications or use Spotlight.",
      "Confirm the app exists in Applications.",
      "Do not move it to Trash during this inspection.",
    ],
    warningTitle: "An icon does not prove installation",
    warning:
      "A browser bookmark, website shortcut, installer file, and installed application can all have convincing icons. Confirm the location and behavior.",
    tasks: [
      "Classify every example in the simulation.",
      "Find one installed app on your computer.",
      "Identify whether its launcher is a shortcut.",
    ],
    evidence: [
      "I used location and behavior, not the icon alone.",
      "I can explain whether the example needs internet access.",
    ],
    question:
      "You delete a desktop shortcut to a writing app. What normally happened?",
    options: [
      "The app and every document were deleted",
      "Only that route to the app was removed",
      "The subscription was cancelled",
    ],
    correct: 1,
    feedback:
      "Correct. A shortcut is a route, not normally the installed application or its documents.",
    closing: "You can identify the object before acting on it.",
    next: "Find Apps Already on Your Computer",
  },
  {
    slug: "find-installed-apps",
    title: "Find Apps Already on Your Computer",
    promise:
      "Use the operating system to locate and confirm an installed application without opening duplicates.",
    minutes: "14–18 minutes",
    badges: ["Search", "Installed apps"],
    outcomes: [
      "Find an app by name.",
      "Open the complete installed-app list.",
      "Separate a pinned launcher from proof of installation.",
    ],
    interaction: { kind: "installed-app-locator" },
    visual: { kind: "apps-find-installed" },
    visualTitle: "Search first; browse second",
    visualCaption:
      "A real learner uses search while the platform-specific practice supplies the exact route and feedback.",
    compareTitle: "Fast routes and verification routes",
    comparisons: [
      ["Start / Spotlight", "Fastest when you know the name."],
      ["All apps / Applications", "Useful for browsing what is available."],
      [
        "Installed apps / Applications folder",
        "Stronger evidence that software is installed.",
      ],
      [
        "Taskbar / Dock",
        "Convenient launchers, but their icons do not explain the installation source.",
      ],
    ],
    stepsTitle: "Locate an installed app",
    windows: [
      "Open Start and type the exact app name.",
      "For the full list, open Start > Settings > Apps > Installed apps.",
      "Check the publisher and installed entry before changing it.",
    ],
    mac: [
      "Press Command-Space and type the exact app name.",
      "For the full location, open Finder > Applications.",
      "Use Get Info when you need version or location evidence.",
    ],
    warningTitle: "Search results can include the web",
    warning:
      "Do not treat a sponsored web result as the application already installed on your computer.",
    tasks: [
      "Find an app with search.",
      "Confirm it in the installed-app location.",
      "Return without opening another copy.",
    ],
    evidence: [
      "I confirmed installation separately from a web result.",
      "I know the route to the complete app list.",
    ],
    question:
      "Which Windows route gives a direct list of installed applications?",
    options: [
      "Settings > Apps > Installed apps",
      "The browser download page",
      "The desktop wallpaper menu",
    ],
    correct: 0,
    feedback:
      "Correct. Installed apps is the verification list in current Windows 11 Settings.",
    closing:
      "You can find what is already present before downloading another copy.",
    next: "Choose a Trustworthy Download Source",
  },
  {
    slug: "choose-trustworthy-app-source",
    title: "Choose a Trustworthy Download Source",
    promise:
      "Prefer a store or verified publisher and reject fake buttons, mirrors, bundles, and cracked software.",
    minutes: "18–22 minutes",
    badges: ["Trust", "Downloads"],
    outcomes: [
      "Rank download sources by risk.",
      "Verify a publisher website and domain.",
      "Recognize misleading advertisements and unofficial mirrors.",
    ],
    interaction: { kind: "trusted-source-gate" },
    visual: { kind: "apps-trusted-store" },
    visualTitle: "Use a safer source before judging the file",
    visualCaption:
      "Stores are safer starting points, not a promise that every app fits your needs. Verify the publisher, cost, permissions, and purpose too.",
    compareTitle: "A practical source order",
    comparisons: [
      [
        "Microsoft Store / App Store",
        "Preferred starting point for many beginner needs.",
      ],
      [
        "Official publisher site",
        "Reasonable when the exact domain and publisher are verified.",
      ],
      [
        "School or employer portal",
        "Use when the organization instructs you and manages the device.",
      ],
      [
        "Mirror, crack, or download portal",
        "Reject unless a qualified administrator has a specific verified reason.",
      ],
    ],
    stepsTitle: "Verify before downloading",
    windows: [
      "Search Microsoft Store first.",
      "If using the web, verify the publisher's exact domain.",
      "Reject sponsored look-alike buttons and bundled downloaders.",
    ],
    mac: [
      "Search the App Store first.",
      "If using the web, verify the publisher's exact domain.",
      "Keep Gatekeeper enabled and stop at unidentified-developer warnings.",
    ],
    warningTitle: "Popular is not the same as trustworthy",
    warning:
      "Reviews, search rank, familiar colors, and a professional logo can be manipulated. Source and publisher evidence matter more.",
    tasks: [
      "Rank the simulated sources.",
      "Identify the exact publisher domain.",
      "Reject the fake Download advertisement.",
    ],
    evidence: [
      "I can name the publisher and source.",
      "I did not rely on the first search result.",
    ],
    question:
      "A page offers a cracked paid app for free. What is the beginner-safe action?",
    options: [
      "Disable security and install it",
      "Reject it and use the store or verified publisher",
      "Send the site your administrator password",
    ],
    correct: 1,
    feedback:
      "Correct. Cracked software is unlawful in many places and carries serious security risk.",
    closing:
      "You can choose the source before a persuasive page chooses for you.",
    next: "Read the Listing Before Installing",
  },
  {
    slug: "audit-app-listing-cost-compatibility",
    title: "Read the Listing Before Installing",
    promise:
      "Check publisher, cost, renewal, compatibility, storage, and permissions before selecting Get, Buy, or Install.",
    minutes: "18–22 minutes",
    badges: ["Cost", "Compatibility"],
    outcomes: [
      "Find the true total and renewal terms.",
      "Confirm operating-system compatibility.",
      "Treat ratings as clues rather than proof.",
    ],
    interaction: { kind: "app-listing-audit" },
    visual: { kind: "apps-review-listing" },
    visualTitle: "Slow down before the purchase button",
    visualCaption:
      "The real-world photograph shows the decision moment; the audit below makes every required field readable and translatable.",
    compareTitle: "Read beyond the headline",
    comparisons: [
      [
        "Publisher",
        "Must match the organization responsible for the software.",
      ],
      [
        "Price",
        "Check one-time price, subscription, trial end, renewal frequency, and in-app purchases.",
      ],
      [
        "Compatibility",
        "Confirm the supported Windows or macOS version and required hardware.",
      ],
      [
        "Permissions",
        "Ask whether each request supports a feature you intend to use.",
      ],
    ],
    stepsTitle: "Audit one listing",
    windows: [
      "Confirm publisher and source.",
      "Read price, in-app purchase, and subscription details.",
      "Check system requirements and permissions before Get or Buy.",
    ],
    mac: [
      "Confirm developer and source.",
      "Read price, in-app purchase, and subscription details.",
      "Check compatibility and privacy details before Get or Buy.",
    ],
    warningTitle: "Free can still create a bill",
    warning:
      "A free download can include paid features or an automatically renewing trial. Record the renewal date and cancellation route before accepting.",
    tasks: [
      "Complete every field in the listing audit.",
      "Identify the renewal terms.",
      "Decide Install, Investigate, or Reject.",
    ],
    evidence: [
      "I found the publisher and total cost model.",
      "I confirmed compatibility before installation.",
    ],
    question:
      "A seven-day free trial renews monthly unless cancelled. What should you record before starting?",
    options: [
      "Only the app icon color",
      "Renewal price, date, and cancellation route",
      "Your password inside the course",
    ],
    correct: 1,
    feedback:
      "Correct. A trial decision includes the later charge and a verified cancellation route.",
    closing:
      "You can read the agreement hidden behind a simple Install button.",
    next: "Install Without Lowering Security",
  },
  {
    slug: "install-apps-without-lowering-security",
    title: "Install Without Lowering Security",
    promise:
      "Recognize normal install routes and stop when an installer asks for unrelated software or weakened protection.",
    minutes: "20–24 minutes",
    badges: ["Installer", "Security"],
    outcomes: [
      "Recognize Store, EXE/MSI, DMG, and PKG routes.",
      "Judge administrator prompts by the action you started.",
      "Reject bundled extras and security bypasses.",
    ],
    interaction: { kind: "safe-installer" },
    visual: { kind: "apps-safe-install" },
    visualTitle: "A pause is part of installation",
    visualCaption:
      "The photograph shows the safe pause. The simulator supplies platform-correct controls rather than relying on generated screen text.",
    compareTitle: "Common installation packages",
    comparisons: [
      [
        "Store install",
        "The store downloads, installs, and usually updates the app.",
      ],
      ["EXE or MSI", "Common Windows installers from verified publishers."],
      [
        "DMG",
        "A Mac disk image that may ask you to drag an app into Applications.",
      ],
      ["PKG", "A Mac installer package that guides a multi-step installation."],
    ],
    stepsTitle: "Install deliberately",
    windows: [
      "Start from Microsoft Store or the verified publisher.",
      "Confirm the app name and publisher in the prompt.",
      "Decline unrelated extras; do not disable Windows Security.",
    ],
    mac: [
      "Start from App Store or the verified publisher.",
      "Use the Applications destination or verified package instructions.",
      "Keep Gatekeeper enabled; investigate an unidentified developer instead of bypassing it.",
    ],
    warningTitle: "Administrator approval is powerful",
    warning:
      "An administrator prompt is reasonable only when it matches an action you deliberately began from a verified source. An unexpected prompt is a stop signal.",
    tasks: [
      "Complete the simulated installer.",
      "Reject both bundled offers.",
      "Stop at the mismatched publisher prompt.",
    ],
    evidence: [
      "I matched the prompt to an action I started.",
      "I kept security protections enabled.",
    ],
    question:
      "An installer says security must be disabled to continue. What should a beginner do?",
    options: [
      "Disable it immediately",
      "Stop and verify the app and source",
      "Share the administrator password with the website",
    ],
    correct: 1,
    feedback:
      "Correct. Do not weaken protection just to force an installation.",
    closing:
      "You can install an app without surrendering control of the computer.",
    next: "Keep Apps Updated",
  },
  {
    slug: "keep-apps-updated",
    title: "Keep Apps Updated",
    promise:
      "Route an update through the store, the verified application, or its publisher without clicking a fake browser warning.",
    minutes: "16–20 minutes",
    badges: ["Updates", "Maintenance"],
    outcomes: [
      "Separate app updates from operating-system updates.",
      "Recognize store and publisher-managed updates.",
      "Reject browser pages pretending to scan installed software.",
    ],
    interaction: { kind: "app-update-router" },
    visual: { kind: "apps-update" },
    visualTitle: "Updates need a known route",
    visualCaption:
      "Some apps update through a store; others use their own verified updater. A random webpage cannot reliably inventory your installed applications.",
    compareTitle: "Match the app to its updater",
    comparisons: [
      [
        "Store app",
        "Update through Microsoft Store or Mac App Store, often automatically.",
      ],
      [
        "Publisher app",
        "Use its built-in updater or the verified publisher site.",
      ],
      [
        "Web app",
        "The service usually updates on its servers; refresh or sign in again if needed.",
      ],
      [
        "Browser warning page",
        "Reject a page claiming every app is outdated or infected.",
      ],
    ],
    stepsTitle: "Check for app updates",
    windows: [
      "Open Microsoft Store > Profile > Settings and review App updates.",
      "For other desktop apps, use the app's Help, About, or Update control.",
      "Save work before an update that may close the app.",
    ],
    mac: [
      "Open App Store > Updates for App Store purchases.",
      "Review App Store > Settings > Automatic Updates.",
      "For other apps, use the app's verified update control.",
    ],
    warningTitle: "Update buttons can be fake advertisements",
    warning:
      "Open the store or application yourself instead of trusting an unsolicited page, popup, email, or support call.",
    tasks: [
      "Route each update scenario correctly.",
      "Reject the fake browser scan.",
      "Identify when work should be saved first.",
    ],
    evidence: [
      "I opened a known updater myself.",
      "I did not trust an unsolicited update message.",
    ],
    question:
      "A webpage says it scanned your computer and found twelve outdated apps. What is safest?",
    options: [
      "Install its updater",
      "Close it and check the store or apps directly",
      "Give it remote access",
    ],
    correct: 1,
    feedback:
      "Correct. Verify updates from known stores or the applications themselves.",
    closing: "You can maintain apps without following a stranger's button.",
    next: "Remove an App Safely",
  },
  {
    slug: "remove-apps-safely",
    title: "Remove an App Safely",
    promise:
      "Uninstall software while protecting documents, understanding subscriptions, and preserving a recovery route when available.",
    minutes: "18–22 minutes",
    badges: ["Uninstall", "Recovery"],
    outcomes: [
      "Use the correct removal route.",
      "Explain what happens to documents and subscriptions.",
      "Recognize apps that require their own uninstaller.",
    ],
    interaction: { kind: "app-removal-lab" },
    visual: { kind: "apps-uninstall" },
    visualTitle: "Remove the application—not the wrong object",
    visualCaption:
      "A shortcut, installer, application, document, and subscription are separate things. The removal lab makes those relationships explicit.",
    compareTitle: "Removal has separate consequences",
    comparisons: [
      [
        "Application",
        "Uninstalling releases its storage and removes the software.",
      ],
      ["Shortcut", "Removing it normally leaves the application installed."],
      [
        "Documents",
        "Usually remain, but may need another compatible app to open.",
      ],
      [
        "Subscription",
        "Usually continues until cancelled through the seller or account.",
      ],
    ],
    stepsTitle: "Remove one verified app",
    windows: [
      "Quit the app and save work.",
      "Open Settings > Apps > Installed apps.",
      "Choose More > Uninstall for the exact app and follow its verified remover.",
    ],
    mac: [
      "Quit the app and save work.",
      "Check the app folder for its own Uninstaller first.",
      "Otherwise move the app from Applications to Trash when the publisher's instructions allow it.",
    ],
    warningTitle: "Uninstall is not subscription cancellation",
    warning:
      "Cancel paid service separately and keep confirmation. Do not assume deleting an app stops billing.",
    tasks: [
      "Sort app, shortcut, document, installer, and subscription.",
      "Choose the correct removal route.",
      "Preserve the sample document and cancel the sample subscription separately.",
    ],
    evidence: [
      "I know what will remain after removal.",
      "I used the verified uninstall route.",
    ],
    question:
      "You uninstall a subscribed app. What should you assume about billing?",
    options: [
      "Billing definitely stopped",
      "The subscription may continue until separately cancelled",
      "Every document was erased",
    ],
    correct: 1,
    feedback:
      "Correct. Uninstalling software and cancelling a service are separate actions.",
    closing:
      "You can remove software without confusing it with your work or account.",
    next: "Control App Permissions",
  },
  {
    slug: "control-app-permissions",
    title: "Control App Permissions",
    promise:
      "Allow camera, microphone, location, files, and notifications only when the request supports a feature you intend to use.",
    minutes: "18–22 minutes",
    badges: ["Privacy", "Permissions"],
    outcomes: [
      "Match a permission to a feature.",
      "Use Privacy and security controls to review access.",
      "Recognize managed-device restrictions.",
    ],
    interaction: { kind: "permission-decision-lab" },
    visual: { kind: "apps-permissions" },
    visualTitle: "Permission should follow purpose",
    visualCaption:
      "A meeting app may need the camera during a call. A calculator asking for contacts needs investigation. Context changes the decision.",
    compareTitle: "Ask what the feature needs",
    comparisons: [
      [
        "Camera and microphone",
        "Reasonable for a call or recording you deliberately start.",
      ],
      [
        "Location",
        "Useful for maps or local results; unnecessary for many offline tools.",
      ],
      [
        "Files and folders",
        "Grant only the scope needed to open or save your work.",
      ],
      [
        "Notifications",
        "Useful for time-sensitive events; optional for many apps.",
      ],
    ],
    stepsTitle: "Review and change access",
    windows: [
      "Open Settings > Privacy & security.",
      "Choose the permission category such as Camera or Location.",
      "Review the app and change access when Windows provides the control.",
    ],
    mac: [
      "Open System Settings > Privacy & Security.",
      "Choose Camera, Microphone, Location Services, Files and Folders, or another category.",
      "Review the app and change access deliberately.",
    ],
    warningTitle: "Some controls differ by app and device",
    warning:
      "Traditional Windows desktop apps may not appear or behave like Store apps. School and work administrators may lock permission settings. Do not try to bypass management.",
    tasks: [
      "Decide Allow, Deny, or Investigate for every scenario.",
      "Explain the feature-permission relationship.",
      "Find the permission review page on your platform.",
    ],
    evidence: [
      "Every permission I allowed supports an intended feature.",
      "I know how to revoke access later.",
    ],
    question:
      "A simple calculator requests access to contacts. What is the best first response?",
    options: [
      "Allow because every prompt is required",
      "Deny or investigate because the purpose is unclear",
      "Give it the administrator password",
    ],
    correct: 1,
    feedback:
      "Correct. The permission has no clear relationship to ordinary calculation.",
    closing:
      "You can make access temporary and purposeful instead of automatic.",
    next: "Choose Which App Opens a File",
  },
  {
    slug: "choose-default-app-open-with",
    title: "Choose Which App Opens a File",
    promise:
      "Use Open with for one file, change a default deliberately, and complete the module's safe-app mission.",
    minutes: "22–28 minutes",
    badges: ["Default apps", "Final mission"],
    outcomes: [
      "Use a different compatible app once.",
      "Change the default for a file type.",
      "Complete a full install-to-removal decision mission.",
    ],
    interaction: { kind: "default-app-mission" },
    visual: { kind: "apps-default-open-with" },
    visualTitle: "One file or every file of this type?",
    visualCaption:
      "Opening once and changing a default are different decisions. Neither action converts or rewrites the file itself.",
    compareTitle: "Two choices with different reach",
    comparisons: [
      [
        "Open with once",
        "Uses a selected compatible app for this opening without changing the general rule.",
      ],
      [
        "Default app",
        "Controls which app normally opens that file type or link in the future.",
      ],
      [
        "Compatibility",
        "An app must understand the file format; changing the default cannot add support.",
      ],
      [
        "Conversion",
        "Opening or changing the default does not convert the file to another format.",
      ],
    ],
    stepsTitle: "Choose once or change the rule",
    windows: [
      "For one file, right-click it and choose Open with.",
      "For defaults, open Settings > Apps > Default apps.",
      "Choose by app or file type and test one non-private sample.",
    ],
    mac: [
      "For one file, Control-click and choose Open With.",
      "For all files of that type, choose Get Info > Open with > Change All.",
      "Use Change All only when you intend to change the general rule.",
    ],
    warningTitle: "A default is not ownership",
    warning:
      "Changing the default does not delete the old app, transfer a subscription, or guarantee that the new app supports every feature in the file.",
    tasks: [
      "Complete the one-time Open with choice.",
      "Set and reverse a simulated default.",
      "Finish the source, listing, install, update, permission, default, and removal mission.",
    ],
    evidence: [
      "I can explain the scope before changing a default.",
      "My final mission decisions use evidence rather than pressure.",
    ],
    question:
      "You want one PDF to open in another app without changing every PDF. What should you use?",
    options: [
      "Open with for that file",
      "Uninstall every other app",
      "Change All",
    ],
    correct: 0,
    feedback:
      "Correct. Open with handles a one-time choice without changing the default for every file of that type.",
    closing:
      "Module 6 is complete when you can identify, find, evaluate, install, update, configure, choose, and remove apps without lowering security or confusing software with documents and subscriptions.",
  },
];

export const computerModuleSixV2 = seeds.map(makeLesson);
