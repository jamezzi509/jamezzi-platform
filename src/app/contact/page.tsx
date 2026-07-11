import { ComingSoon } from "@/components/coming-soon";
import { contactInquiryOptions } from "@/content/contact";
import type { ContactInquiryType } from "@/types/content";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const inquiry = contactInquiryOptions.find(
    (option) => option.value === (type as ContactInquiryType),
  );

  return (
    <ComingSoon section="Contact" title={inquiry ? inquiry.label : undefined} />
  );
}
