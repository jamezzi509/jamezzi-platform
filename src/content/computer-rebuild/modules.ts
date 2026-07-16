import type { CourseModule } from "@/content/computer-rebuild/schema";

/**
 * The 14-module curriculum per computer-internet-essentials-master-brief.md
 * Section 10. Metadata for every module is defined now so the course shell
 * has a complete skeleton; lesson content is built module by module.
 */
export const computerRebuildModules: CourseModule[] = [
  {
    id: "m1",
    order: 1,
    titleHt: "Ou Fè Pati Mond Dijital la",
    titleEn: "You Belong in the Digital World",
    purpose:
      "Remove fear, establish course expectations, select a platform, and give the learner their first successful actions.",
    learningOutcomes: [
      "Describe what the course will help them accomplish",
      "Identify whether they use Windows or Mac",
      "Explain that mistakes are part of learning",
      "Use basic computer language without fear",
      "Complete the first guided interaction",
    ],
  },
  {
    id: "m2",
    order: 2,
    titleHt: "Kijan Yon Òdinatè Mache",
    titleEn: "How a Computer Works",
    purpose: "Build the mental model that prevents future confusion.",
    learningOutcomes: [
      "Identify essential internal and external components",
      "Explain what happens from power-on to an open application",
      "Distinguish memory from storage",
      "Understand the roles of the operating system and applications",
      "Read common device specifications at a beginner level",
    ],
  },
  {
    id: "m3",
    order: 3,
    titleHt: "Kontwole Òdinatè Ou",
    titleEn: "Control Your Computer",
    purpose:
      "Develop physical and interface control until navigation feels natural.",
    learningOutcomes: [
      "Use a mouse or trackpad",
      "Type and edit text",
      "Navigate the selected operating system",
      "Manage windows and applications",
      "Change basic settings",
      "Use essential shortcuts",
    ],
  },
  {
    id: "m4",
    order: 4,
    titleHt: "Fichye ak Dosye",
    titleEn: "Files and Folders",
    purpose:
      "Make file management a core life skill rather than a mysterious technical task.",
    learningOutcomes: [
      "Distinguish files, folders, applications, and shortcuts",
      "Understand common file types",
      "Create and organize folders",
      "Save and locate files",
      "Copy, move, rename, delete, restore, compress, and search",
      "Use external storage safely",
    ],
  },
  {
    id: "m5",
    order: 5,
    titleHt: "Aplikasyon ak Dokiman",
    titleEn: "Applications and Everyday Documents",
    purpose:
      "Teach how software is acquired and used without becoming a Microsoft Office course.",
    learningOutcomes: [
      "Distinguish installed applications from websites",
      "Install and remove trusted applications",
      "Update applications",
      "Open and interact with common documents",
      "Save and export a basic document",
      "Understand application permissions",
    ],
  },
  {
    id: "m6",
    order: 6,
    titleHt: "Entènèt ak Wi-Fi",
    titleEn: "Internet and Wi-Fi",
    purpose:
      "Explain the internet as a system and build reliable connection skills.",
    learningOutcomes: [
      "Explain the difference between internet and Wi-Fi",
      "Understand the role of an internet provider, modem/router, and device",
      "Connect to a trusted network",
      "Use a phone hotspot when appropriate",
      "Recognize basic connection problems",
      "Understand data usage",
    ],
  },
  {
    id: "m7",
    order: 7,
    titleHt: "Navigatè ak Konpetans Entènèt",
    titleEn: "Browser and Web Skills",
    purpose: "Turn browsing into an intentional research skill.",
    learningOutcomes: [
      "Distinguish browser, search engine, website, page, link, and account",
      "Navigate tabs and history",
      "Use bookmarks",
      "Search effectively",
      "Assess basic credibility",
      "Manage downloads, cookies, cache, and private browsing appropriately",
    ],
  },
  {
    id: "m8",
    order: 8,
    titleHt: "Imèl ak Kominikasyon sou Entènèt",
    titleEn: "Email and Online Communication",
    purpose: "Build reliable and professional communication skills.",
    learningOutcomes: [
      "Understand email addresses and inboxes",
      "Send, receive, reply, forward, and organize email",
      "Attach and download files safely",
      "Write a clear basic professional email",
      "Recognize suspicious email",
      "Prepare for a basic video call",
    ],
  },
  {
    id: "m9",
    order: 9,
    titleHt: "Cloud, Backup, ak Deplase Fichye",
    titleEn: "Cloud, Backup, and Moving Files",
    purpose: "Prevent data loss and explain where information actually lives.",
    learningOutcomes: [
      "Distinguish local and cloud storage",
      "Explain sync vs. backup",
      "Upload and download from a cloud service",
      "Share with appropriate permission",
      "Back up essential files",
      "Move files between phone and computer",
    ],
  },
  {
    id: "m10",
    order: 10,
    titleHt: "Aparèy, Enprime, ak Koneksyon Chak Jou",
    titleEn: "Devices, Printing, and Everyday Connections",
    purpose:
      "Help learners connect common accessories and complete routine physical-digital tasks.",
    learningOutcomes: [
      "Identify common ports",
      "Connect common peripherals",
      "Use Bluetooth appropriately",
      "Understand printing and scanning",
      "Troubleshoot basic device connection issues",
    ],
  },
  {
    id: "m11",
    order: 11,
    titleHt: "Sekirite, Privasi, ak Lajan Dijital",
    titleEn: "Safety, Privacy, and Digital Money",
    purpose: "Protect the learner's identity, accounts, devices, and money.",
    learningOutcomes: [
      "Create and manage strong authentication",
      "Recognize common scams",
      "Inspect links and websites",
      "Protect personal data on shared and public devices",
      "Make safer decisions around online payment",
      "Respond appropriately after a suspected compromise",
    ],
  },
  {
    id: "m12",
    order: 12,
    titleHt: "Achte ak Pran Swen Yon Òdinatè",
    titleEn: "Buying and Caring for a Computer",
    purpose:
      "Help learners make financially sound decisions and extend device life.",
    learningOutcomes: [
      "Choose an appropriate computer category",
      "Interpret basic specifications",
      "Evaluate new, used, and refurbished options",
      "Inspect a used computer at a beginner level",
      "Practice safe maintenance",
      "Understand power, heat, battery, and storage care",
    ],
  },
  {
    id: "m13",
    order: 13,
    titleHt: "Rezoud Pwoblèm ak Antretyen",
    titleEn: "Troubleshooting and Maintenance",
    purpose: "Teach a repeatable, safe problem-solving method.",
    learningOutcomes: [
      "Separate symptoms from causes",
      "Use a basic troubleshooting process",
      "Solve common software, storage, connection, sound, and printer problems",
      "Perform routine updates and restarts",
      "Know when to stop and request help",
    ],
  },
  {
    id: "m14",
    order: 14,
    titleHt: "Endepandans Dijital",
    titleEn: "Digital Independence",
    purpose:
      "Combine the course into sustainable habits and demonstrate full readiness.",
    learningOutcomes: [
      "Organize a durable digital system",
      "Protect and maintain accounts and files",
      "Use AI responsibly as a tutor",
      "Complete a multi-step everyday project",
      "Create a personal digital routine",
      "Identify an appropriate next learning path",
    ],
  },
];
