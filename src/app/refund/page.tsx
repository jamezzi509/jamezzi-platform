import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { refundPolicy } from "@/content/legal/refund";

export const metadata: Metadata = {
  title: "Refund Policy",
};

export default function RefundPage() {
  return <LegalPage document={refundPolicy} />;
}
