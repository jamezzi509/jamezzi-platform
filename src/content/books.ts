export interface AcademyBook {
  slug: string;
  title: string;
  topic: string;
  language: "Kreyòl";
  cover: string;
  price: number;
  pages: number;
  edition: string;
  tagline: string;
  description: string;
  outcomes: string[];
  contents: string[];
}

export const academyBooks: AcademyBook[] = [
  {
    slug: "entelijans-atifisyel-de-a-rive-nan-z",
    title: "Entèlijans Atifisyèl (AI) de A rive nan Z",
    topic: "Artificial Intelligence",
    language: "Kreyòl",
    cover: "/images/academy/books/ai-de-a-rive-nan-z.webp",
    price: 14.99,
    pages: 137,
    edition: "First edition · 2026",
    tagline: "A practical path from understanding AI to using it with confidence.",
    description:
      "Learn what artificial intelligence can and cannot do, how to communicate with AI clearly, and how to use modern tools for learning, work, creativity, and business—without losing your judgment.",
    outcomes: [
      "Understand AI fundamentals, capabilities, and limitations",
      "Write clearer prompts and improve weak AI responses",
      "Use AI for learning, writing, planning, and problem-solving",
      "Explore tools for images, video, code, and content",
      "Verify important information and use AI responsibly",
    ],
    contents: [
      "Understanding artificial intelligence",
      "How AI works and where it appears in daily life",
      "Communicating with AI effectively",
      "Prompting foundations and advanced techniques",
      "AI for learning, work, and productivity",
      "AI for business and content creation",
      "Creative AI tools",
      "Safety, privacy, and verification",
    ],
  },
  {
    slug: "odinate-ak-entenet",
    title: "Tout sa ou bezwen konnen sou òdinatè ak entènèt",
    topic: "Digital Skills",
    language: "Kreyòl",
    cover: "/images/academy/books/odinate-ak-entenet.webp",
    price: 19.99,
    pages: 73,
    edition: "First edition · 2026",
    tagline: "A friendly, practical introduction to computers and the internet.",
    description:
      "Built for true beginners, this guide explains the computer, Windows, files, internet access, Google, Gmail, PDFs, online safety, and common problems in clear Haitian Creole.",
    outcomes: [
      "Recognize the main parts of a computer and use them confidently",
      "Navigate Windows and organize files and folders",
      "Connect to the internet and search more effectively",
      "Use Gmail, YouTube, documents, PDFs, and screenshots",
      "Stay safer online and solve common computer problems",
    ],
    contents: [
      "What a computer is and how it works",
      "Knowing your laptop",
      "Starting a laptop for the first time",
      "Discovering Windows 11",
      "Files, folders, and documents",
      "Internet connections and web basics",
      "Google, YouTube, and Gmail",
      "Documents, PDFs, photos, and screenshots",
      "Online safety",
      "Common troubleshooting and personalization",
    ],
  },
  {
    slug: "plis-lavant-sou-entenet",
    title: "Kijan pou fè plis lavant sou entènèt",
    topic: "Digital Marketing",
    language: "Kreyòl",
    cover: "/images/academy/books/plis-lavant-sou-entenet.webp",
    price: 14.99,
    pages: 103,
    edition: "First edition · 2026",
    tagline: "Turn social-media attention into trust, conversations, and sales.",
    description:
      "A practical guide for small businesses and independent sellers who want to use Facebook, Instagram, TikTok, and WhatsApp Business with a clearer plan and stronger content.",
    outcomes: [
      "Choose the platforms that fit your business",
      "Build a simple content system you can maintain",
      "Create stronger photos and videos with your phone",
      "Use Facebook, Instagram, and TikTok to attract customers",
      "Organize products and conversations in WhatsApp Business",
    ],
    contents: [
      "Why social media matters for business",
      "Choosing the right platform",
      "Knowing what to post",
      "Building a simple content system",
      "Taking better photos and videos",
      "Facebook and Instagram for business",
      "TikTok for business growth",
      "Turning followers into customers",
      "WhatsApp Business and product catalogs",
    ],
  },
  {
    slug: "youtube-de-a-rive-nan-z",
    title: "YouTube de A rive nan Z",
    topic: "Content Creation",
    language: "Kreyòl",
    cover: "/images/academy/books/youtube-de-a-rive-nan-z.webp",
    price: 19.99,
    pages: 86,
    edition: "First edition · 2026",
    tagline: "Build, publish, improve, and monetize a YouTube channel step by step.",
    description:
      "Follow the full YouTube journey—from creating and verifying a channel to planning videos, editing, publishing, understanding analytics, protecting monetization, and working with AdSense.",
    outcomes: [
      "Create, verify, and configure a YouTube channel",
      "Plan and record useful videos for a clear audience",
      "Publish with stronger titles, descriptions, thumbnails, and SEO",
      "Understand YouTube Studio, analytics, watch time, CTR, and traffic",
      "Prepare for monetization and avoid common mistakes",
    ],
    contents: [
      "Starting on YouTube",
      "Understanding YouTube Studio",
      "Planning and recording good videos",
      "Video editing fundamentals",
      "Publishing and optimizing videos",
      "Growing a channel",
      "Useful YouTube tools and analytics",
      "Monetization, AdSense, and taxes",
    ],
  },
  {
    slug: "capcut-mobile-desktop",
    title: "CapCut Mobile + Desktop",
    topic: "Video Editing",
    language: "Kreyòl",
    cover: "/images/academy/books/capcut-mobile-desktop.webp",
    price: 9.99,
    pages: 103,
    edition: "First edition · 2026",
    tagline: "Go from your first edit to a faster, more professional workflow.",
    description:
      "Learn CapCut on mobile and desktop through practical levels covering editing, sound, text, captions, effects, AI tools, cloud collaboration, social formats, professional workflow, and paid client work.",
    outcomes: [
      "Navigate CapCut Mobile and Desktop confidently",
      "Cut, trim, crop, arrange, and export video",
      "Improve audio, captions, text, effects, and animation",
      "Use available AI tools with better judgment",
      "Prepare social content and organize client projects",
    ],
    contents: [
      "Getting started with CapCut",
      "Editing fundamentals and export",
      "Audio and voice-over",
      "Text, captions, and translation",
      "Effects, animation, keyframes, and chroma key",
      "CapCut AI tools",
      "Advanced desktop editing",
      "Cloud and team collaboration",
      "Editing for major social platforms",
      "Professional workflow and earning with CapCut",
    ],
  },
];
