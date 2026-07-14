import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { cookiePolicy } from "@/content/legal/cookies";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiesPage() {
  return <LegalPage document={cookiePolicy} />;
}
