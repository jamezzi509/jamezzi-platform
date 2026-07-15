export interface CourseSummary {
  slug: string;
  title: string;
  price: number | null;
  free: boolean;
  category: "foundation" | "technology" | "business";
  availability: "launching-first" | "planned";
  description: string;
}

export const courses: CourseSummary[] = [
  {
    slug: "english-for-beginners",
    title: "English for Beginners",
    price: 0,
    free: true,
    category: "foundation",
    availability: "launching-first",
    description:
      "Speak, understand, and use English in real life—starting with the words and patterns you need most.",
  },
  {
    slug: "build-better-money-habits",
    title: "Build Better Money Habits",
    price: 0,
    free: true,
    category: "foundation",
    availability: "planned",
    description:
      "Understand the habits and basic systems that make personal money easier to manage.",
  },
  {
    slug: "computer-internet-essentials",
    title: "Computer & Internet Essentials",
    price: 97,
    free: false,
    category: "technology",
    availability: "launching-first",
    description:
      "Learn the essential Windows, Mac, file, browser, email, and internet skills needed for modern work.",
  },
  {
    slug: "ai-for-work-business",
    title: "AI for Work & Business",
    price: 97,
    free: false,
    category: "technology",
    availability: "planned",
    description:
      "Use practical AI tools to research, communicate, organize work, and improve a business.",
  },
  {
    slug: "build-your-website",
    title: "Build Your Website",
    price: 97,
    free: false,
    category: "technology",
    availability: "planned",
    description:
      "Plan, build, publish, and manage a useful website without getting lost in technical language.",
  },
  {
    slug: "launch-your-store",
    title: "Launch Your Store",
    price: 97,
    free: false,
    category: "business",
    availability: "planned",
    description:
      "Turn a product idea into a clear online store with the right pages, payments, and launch plan.",
  },
  {
    slug: "digital-marketing-ai",
    title: "Digital Marketing & AI",
    price: 127,
    free: false,
    category: "business",
    availability: "launching-first",
    description:
      "Build a practical marketing system using content, customer research, and modern AI workflows.",
  },
  {
    slug: "freelancing-remote-work",
    title: "Freelancing & Remote Work",
    price: 127,
    free: false,
    category: "business",
    availability: "planned",
    description:
      "Choose a service, present your value, find clients, and operate professionally from anywhere.",
  },
  {
    slug: "make-money-online",
    title: "Make Money Online",
    price: 147,
    free: false,
    category: "business",
    availability: "planned",
    description:
      "Evaluate realistic online income models and choose one that fits your skills, resources, and time.",
  },
];

export const freeCourses = courses.filter((course) => course.free);
export const paidCourses = courses.filter((course) => !course.free);
export const launchingFirstCourses = courses.filter(
  (course) => course.availability === "launching-first",
);
export const plannedCourses = courses.filter(
  (course) => course.availability === "planned",
);
