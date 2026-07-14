import type { LegalDocument } from "@/types/legal";

export const refundPolicy: LegalDocument = {
  title: "Refund Policy",
  lastUpdated: "July 9, 2026",
  sections: [
    {
      heading: "Course Refunds",
      blocks: [
        {
          type: "paragraph",
          text: "You may request a full refund within **3 calendar days** if:",
        },
        {
          type: "list",
          items: [
            "You completed **15% or less** of the course.",
            "You have **not** started the final assessment or certification challenge.",
            "You have not previously received a refund for the same course.",
          ],
        },
      ],
    },
    {
      heading: "Refunds Are Not Available If",
      blocks: [
        {
          type: "list",
          items: [
            "More than 15% of the course has been completed.",
            "The final assessment has been started.",
            "More than 3 calendar days have passed.",
            "You already received a refund for the same course.",
            "You earned the course certificate.",
          ],
        },
      ],
    },
    {
      heading: "Digital Books",
      blocks: [
        {
          type: "paragraph",
          text: "All digital book sales are final unless the downloaded file is damaged or cannot be opened.",
        },
      ],
    },
    {
      heading: "MonCash & NatCash",
      blocks: [
        {
          type: "paragraph",
          text: "Approved refunds follow the same rules and are processed manually.",
        },
      ],
    },
    {
      heading: "Refund Abuse",
      blocks: [
        {
          type: "paragraph",
          text: "Repeated abuse of the refund policy may result in refund requests being denied.",
        },
      ],
    },
    {
      heading: "Request a Refund",
      blocks: [
        {
          type: "paragraph",
          text: "Email **info@jamezzi.com** with your name, account email, course name, and a brief explanation.",
        },
        {
          type: "paragraph",
          text: "We aim to respond within **3 business days**.",
        },
      ],
    },
  ],
};
