import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return <LegalPage document={privacyPolicy} />;
}
