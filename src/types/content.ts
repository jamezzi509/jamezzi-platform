export type Locale = "en" | "fr" | "ht";

export interface LocaleOption {
  code: Locale;
  label: string;
  name: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: NavLink[];
}

export interface Product {
  slug: "nichr" | "endize" | "clieniq";
  name: string;
  featured: boolean;
  category: string;
  headline: string;
  description: string;
  proof: string[];
  actionLabel: string;
  href: string;
  visualFocus: string[];
}

export interface Guide {
  slug: string;
  title: string;
  href: string;
  dominant: boolean;
  dek?: string;
}

export type ContactInquiryType =
  | "product-or-website"
  | "product-collaboration"
  | "partnership"
  | "seminar-or-speaking"
  | "something-else";

export interface ContactInquiryOption {
  value: ContactInquiryType;
  label: string;
}
