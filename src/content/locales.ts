import type { LocaleOption } from "@/types/content";

export const locales: LocaleOption[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "ht", label: "HT", name: "Kreyòl" },
];

export const defaultLocale = locales[0];
