import type { LegalDocument } from "@/types/legal";

export const cookiePolicy: LegalDocument = {
  title: "Cookie Policy",
  lastUpdated: "July 9, 2026",
  sections: [
    {
      heading: "What Are Cookies?",
      blocks: [
        {
          type: "paragraph",
          text: "Cookies are small files stored on your device to help websites function and improve your experience.",
        },
      ],
    },
    {
      heading: "Essential Cookies",
      blocks: [
        {
          type: "paragraph",
          text: "Used for login, security, and core functionality. These cannot be disabled because the platform depends on them.",
        },
      ],
    },
    {
      heading: "Analytics Cookies",
      blocks: [
        {
          type: "paragraph",
          text: "With your permission, Google Analytics helps us understand website usage in an anonymous, aggregated way.",
        },
      ],
    },
    {
      heading: "Why We Use Cookies",
      blocks: [
        {
          type: "list",
          items: [
            "Keep you signed in",
            "Improve performance",
            "Remember preferences",
            "Measure website usage",
            "Improve our services",
          ],
        },
      ],
    },
    {
      heading: "Your Choices",
      blocks: [
        {
          type: "paragraph",
          text: "You may accept or decline analytics cookies. Declining them will not affect your ability to use Jamezzi.",
        },
      ],
    },
    {
      heading: "Third-Party Cookies",
      blocks: [
        {
          type: "paragraph",
          text: "Google Analytics, Stripe, and PayPal may set cookies required for their services.",
        },
      ],
    },
    {
      heading: "Changes",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this policy from time to time.",
        },
      ],
    },
    {
      heading: "Contact",
      blocks: [{ type: "paragraph", text: "info@jamezzi.com" }],
    },
  ],
};
