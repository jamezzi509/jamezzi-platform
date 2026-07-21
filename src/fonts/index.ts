import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

export const dmSans = localFont({
  src: "./dm-sans/DMSans-Variable.woff2",
  variable: "--font-dm-sans",
  weight: "400 700",
  display: "swap",
});

export const newsreader = localFont({
  src: "./newsreader/Newsreader-Variable.woff2",
  variable: "--font-newsreader",
  weight: "400 700",
  display: "swap",
});

// Dedicated to the English for Beginners premium lesson shell (see
// break-through-english-brief.md) — kept separate from the site-wide
// DM Sans / Newsreader pairing used everywhere else.
export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});
