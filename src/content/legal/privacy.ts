import type { LegalDocument } from "@/types/legal";

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "July 9, 2026",
  sections: [
    {
      heading: "Introduction",
      blocks: [
        {
          type: "paragraph",
          text: "This Privacy Policy explains what information we collect, how we use it, and your choices.",
        },
      ],
    },
    {
      heading: "Information We Collect",
      blocks: [
        {
          type: "list",
          items: [
            "Name",
            "Email address",
            "Encrypted authentication credentials",
            "Payment confirmation and transaction IDs",
            "MonCash/NatCash reference numbers when applicable",
          ],
        },
        {
          type: "paragraph",
          text: "We never store your full payment card details.",
        },
      ],
    },
    {
      heading: "How We Use Information",
      blocks: [
        {
          type: "list",
          items: [
            "Manage your account",
            "Deliver purchased content",
            "Process payments",
            "Send receipts and account emails",
            "Improve Jamezzi",
            "Prevent fraud",
          ],
        },
      ],
    },
    {
      heading: "Third-Party Services",
      blocks: [
        {
          type: "list",
          items: ["Stripe", "PayPal", "Supabase", "Resend", "Google Analytics"],
        },
        {
          type: "paragraph",
          text: "We do not sell your personal information.",
        },
      ],
    },
    {
      heading: "Cookies",
      blocks: [{ type: "paragraph", text: "See our Cookie Policy." }],
    },
    {
      heading: "Security",
      blocks: [
        {
          type: "paragraph",
          text: "We use reasonable safeguards but no online service can guarantee absolute security.",
        },
      ],
    },
    {
      heading: "Your Rights",
      blocks: [
        {
          type: "paragraph",
          text: "You may request access, correction, or deletion of your personal information by contacting us.",
        },
      ],
    },
    {
      heading: "Children's Privacy",
      blocks: [
        {
          type: "paragraph",
          text: "Jamezzi is not intended for children under 13.",
        },
      ],
    },
    {
      heading: "Changes",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this policy and revise the date above.",
        },
      ],
    },
    {
      heading: "Contact",
      blocks: [{ type: "paragraph", text: "info@jamezzi.com" }],
    },
  ],
};
