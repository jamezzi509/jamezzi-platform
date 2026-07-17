import type { FooterLinkGroup, NavLink } from "@/types/content";

export const footerGroups: FooterLinkGroup[] = [
  {
    heading: "Explore",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Guides", href: "/guides" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Academy",
    links: [
      { label: "Courses", href: "/academy/courses" },
      { label: "Books", href: "/academy/books" },
      { label: "Events & Seminars", href: "/academy/events" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Refund Policy", href: "/refund" },
];
