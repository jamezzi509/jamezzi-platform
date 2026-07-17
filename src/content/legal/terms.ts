import type { LegalDocument } from "@/types/legal";

export const termsOfService: LegalDocument = {
  title: "Terms of Service",
  lastUpdated: "July 9, 2026",
  sections: [
    {
      heading: "1. Welcome",
      blocks: [
        {
          type: "paragraph",
          text: "Jamezzi is operated by **Xplicit Services LLC**.",
        },
        {
          type: "paragraph",
          text: "By accessing Jamezzi, creating an account, or purchasing any product or service, you agree to these Terms of Service.",
        },
        {
          type: "paragraph",
          text: "If you have any questions before purchasing, please contact us. We'd rather answer your questions first than have you make a purchase you're unsure about.",
        },
      ],
    },
    {
      heading: "2. Your Account",
      blocks: [
        {
          type: "paragraph",
          text: "You are responsible for keeping your account secure.",
        },
        {
          type: "list",
          items: [
            "Use a valid email address.",
            "Keep your password private.",
            "Do not share your account with others.",
          ],
        },
        {
          type: "paragraph",
          text: "You are responsible for all activity under your account.",
        },
      ],
    },
    {
      heading: "3. Course & Book Access",
      blocks: [
        {
          type: "paragraph",
          text: "Purchasing a course or digital book gives you a personal, non-transferable license to access the content through Jamezzi. You do not acquire ownership of the content or its intellectual property.",
        },
      ],
    },
    {
      heading: "4. Payments",
      blocks: [
        {
          type: "paragraph",
          text: "We accept Credit/Debit Cards, Apple Pay, Google Pay, PayPal, MonCash, and NatCash (where available). Local payment methods may require manual verification.",
        },
      ],
    },
    {
      heading: "5. Acceptable Use",
      blocks: [
        {
          type: "paragraph",
          text: "Do not copy, record, redistribute, resell, or share your account or our content.",
        },
      ],
    },
    {
      heading: "6. Intellectual Property",
      blocks: [
        {
          type: "paragraph",
          text: "All content is owned by Xplicit Services LLC or its licensors and is protected by applicable intellectual property laws.",
        },
      ],
    },
    {
      heading: "7. Changes",
      blocks: [
        {
          type: "paragraph",
          text: "We may update these Terms from time to time. Continued use means you accept the updated Terms.",
        },
      ],
    },
    {
      heading: "8. Disclaimer",
      blocks: [
        {
          type: "paragraph",
          text: "Jamezzi provides educational content only. We do not guarantee specific financial, employment, or business results.",
        },
      ],
    },
    {
      heading: "9. Governing Law",
      blocks: [
        {
          type: "paragraph",
          text: "These Terms are governed by the laws of the State of Florida, USA.",
        },
      ],
    },
    {
      heading: "10. Contact",
      blocks: [{ type: "paragraph", text: "info@jamezzi.com" }],
    },
  ],
};
