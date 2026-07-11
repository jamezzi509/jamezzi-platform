import type { FooterLinkGroup, NavLink } from "@/types/content";

export const footerGroups: FooterLinkGroup[] = [
  {
    heading: "Explore",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Guides", href: "/guides" },
      { label: "About James", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Academy",
    links: [
      { label: "Online Courses", href: "/academy/courses" },
      { label: "Books", href: "/academy/books" },
      { label: "Events & Seminars", href: "/academy/events" },
      { label: "Get Seminar Updates", href: "/academy/seminar-updates" },
      { label: "Academy Help", href: "/academy/help" },
      { label: "Student Sign In", href: "/sign-in" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];
