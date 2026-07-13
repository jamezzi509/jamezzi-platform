import type { Guide } from "@/types/content";

export const guides: Guide[] = [
  {
    slug: "how-i-decide-whether-an-idea-is-worth-building",
    title: "How I Decide Whether an Idea Is Worth Building",
    href: "/guides/how-i-decide-whether-an-idea-is-worth-building",
    dominant: true,
    category: "Product Strategy",
    readingTime: "6 min read",
    artwork: "decision",
    dek: "The framework I use to evaluate ideas for clarity—so I build fewer things, but better ones.",
  },
  {
    slug: "before-you-choose-a-youtube-niche-study-these-seven-signals",
    title: "Before You Choose a YouTube Niche, Study These Seven Signals",
    href: "/guides/before-you-choose-a-youtube-niche-study-these-seven-signals",
    dominant: false,
    category: "Content Research",
    readingTime: "8 min read",
    artwork: "signals",
    dek: "Use data, not guesswork, to find niches with real potential.",
  },
  {
    slug: "why-good-businesses-still-lose-contract-opportunities",
    title: "Why Good Businesses Still Lose Contract Opportunities",
    href: "/guides/why-good-businesses-still-lose-contract-opportunities",
    dominant: false,
    category: "Business Development",
    readingTime: "7 min read",
    artwork: "readiness",
    dek: "The hidden gaps that cost deals—and how to fix them fast.",
  },
];

export const dominantGuide = guides.find((guide) => guide.dominant)!;
export const supportingGuides = guides.filter((guide) => !guide.dominant);
