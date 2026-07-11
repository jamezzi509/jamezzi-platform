import type { Locale } from "@/types/content";

const localePrefixes: Locale[] = ["fr", "ht"];

export function currentLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return (localePrefixes as string[]).includes(segment)
    ? (segment as Locale)
    : "en";
}

export function localizedPath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (localePrefixes.includes(segments[0] as Locale)) {
    segments.shift();
  }
  const rest = segments.join("/");
  if (locale === "en") return rest ? `/${rest}` : "/";
  return rest ? `/${locale}/${rest}` : `/${locale}`;
}
