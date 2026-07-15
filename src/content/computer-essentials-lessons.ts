export interface ComputerLessonSummary {
  slug: string;
  title: string;
  outcome: string;
  available: boolean;
  moduleNumber: number;
}

export const computerEssentialsLessons: ComputerLessonSummary[] = [
  {
    slug: "welcome-to-computers",
    title: "Welcome to Computers",
    outcome: "See how computers changed the world, and why you can learn this.",
    available: true,
    moduleNumber: 1,
  },
  {
    slug: "what-is-a-computer",
    title: "What Is a Computer?",
    outcome: "Understand what actually makes something a computer.",
    available: true,
    moduleNumber: 1,
  },
  {
    slug: "desktop-vs-laptop",
    title: "Desktop vs. Laptop",
    outcome: "Know the real difference and which one fits your life.",
    available: true,
    moduleNumber: 1,
  },
  {
    slug: "tablet-vs-phone",
    title: "Tablet vs. Phone",
    outcome: "Understand what each device is actually built for.",
    available: true,
    moduleNumber: 1,
  },
  {
    slug: "windows-vs-mac",
    title: "Windows vs. Mac",
    outcome: "Understand the difference so any computer feels less foreign.",
    available: true,
    moduleNumber: 1,
  },
  {
    slug: "android-vs-iphone",
    title: "Android vs. iPhone",
    outcome: "Know what's genuinely different between the two systems.",
    available: true,
    moduleNumber: 1,
  },
  {
    slug: "hardware-vs-software",
    title: "Hardware vs. Software",
    outcome:
      "Tell the physical parts apart from the programs that run on them.",
    available: true,
    moduleNumber: 1,
  },
  {
    slug: "what-is-an-operating-system",
    title: "What Is an Operating System?",
    outcome: "Understand the one program that controls everything else.",
    available: true,
    moduleNumber: 1,
  },
  {
    slug: "what-is-the-internet",
    title: "What Is the Internet?",
    outcome: "Understand what actually happens when you go online.",
    available: true,
    moduleNumber: 1,
  },
  {
    slug: "what-is-the-cloud",
    title: "What Is the Cloud?",
    outcome:
      'Understand where your files really go when they\'re "in the cloud."',
    available: true,
    moduleNumber: 1,
  },
  {
    slug: "digital-vocabulary",
    title: "Digital Vocabulary",
    outcome: "Learn the words you'll hear constantly around computers.",
    available: true,
    moduleNumber: 1,
  },
  {
    slug: "first-digital-mission",
    title: "Your First Digital Mission",
    outcome: "Combine everything from Module 1 into one real, confident task.",
    available: true,
    moduleNumber: 1,
  },
];
