import type { Guide } from "@/types/content";

export const guides: Guide[] = [
  {
    slug: "how-i-decide-whether-an-idea-is-worth-building",
    title: "How I Decide Whether an Idea Is Worth Building",
    href: "/guides/how-i-decide-whether-an-idea-is-worth-building",
    dominant: true,
    category: "Product Strategy",
    readingTime: "8 min read",
    artwork: "decision",
    dek: "The practical questions I use to separate an interesting idea from a problem worth solving.",
    coverImage: "/guides/idea-worth-building.webp",
  },
  {
    slug: "before-you-choose-a-youtube-niche-study-these-seven-signals",
    title: "Before You Choose a YouTube Niche, Study These Seven Signals",
    href: "/guides/before-you-choose-a-youtube-niche-study-these-seven-signals",
    dominant: false,
    category: "Content Research",
    readingTime: "8 min read",
    artwork: "signals",
    dek: "Seven practical signals to study before committing your time, energy, and money to a YouTube niche.",
    coverImage: "/guides/youtube-niche-seven-signals.webp",
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
