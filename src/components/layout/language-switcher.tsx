"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/content/locales";
import { currentLocaleFromPathname, localizedPath } from "@/lib/locale-path";
import { useDismissableMenu } from "@/lib/use-dismissable-menu";
import { cn } from "@/lib/cn";
import { ChevronDownIcon } from "@/components/ui/icons";

export function LanguageSwitcher({ inverse = false }: { inverse?: boolean }) {
  const pathname = usePathname();
  const activeLocale = currentLocaleFromPathname(pathname);
  const { open, setOpen, triggerRef, panelRef, close } = useDismissableMenu();

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={cn(
          "text-nav duration-control ease-primary flex min-h-11 items-center gap-1 rounded-full px-3 transition-colors",
          inverse
            ? "text-night-text hover:text-white"
            : "bg-paper/45 hover:bg-paper/70 text-ink backdrop-blur-sm hover:text-indigo",
        )}
      >
        {locales.find((locale) => locale.code === activeLocale)?.label}
        <ChevronDownIcon
          className={cn(
            "duration-control size-4 transition-transform",
            open && "rotate-180",
          )}
        />
        <span className="sr-only">Change language</span>
      </button>

      {open && (
        <div
          ref={panelRef}
          role="menu"
          aria-label="Select language"
          className="rounded-card border-border shadow-card absolute top-full right-0 z-50 mt-2 min-w-40 border bg-white py-2"
        >
          {locales.map((locale) => (
            <Link
              key={locale.code}
              role="menuitem"
              href={localizedPath(pathname, locale.code)}
              onClick={close}
              className={cn(
                "text-nav text-ink hover:bg-paper flex items-center justify-between px-4 py-2",
                locale.code === activeLocale && "text-indigo font-semibold",
              )}
            >
              <span>{locale.name}</span>
              <span className="text-metadata text-muted">{locale.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
