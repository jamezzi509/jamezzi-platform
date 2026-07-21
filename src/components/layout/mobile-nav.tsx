"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, signInNav } from "@/content/navigation";
import { locales } from "@/content/locales";
import { currentLocaleFromPathname, localizedPath } from "@/lib/locale-path";
import { useDismissableMenu } from "@/lib/use-dismissable-menu";
import { cn } from "@/lib/cn";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";

export function MobileNav() {
  const pathname = usePathname();
  const activeLocale = currentLocaleFromPathname(pathname);
  const { open, setOpen, triggerRef, panelRef, close } = useDismissableMenu();

  return (
    <div className="relative lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="rounded-control text-ink flex size-11 items-center justify-center"
      >
        {open ? (
          <CloseIcon className="size-6" />
        ) : (
          <MenuIcon className="size-6" />
        )}
      </button>

      {open && (
        <div
          ref={panelRef}
          role="menu"
          aria-label="Site menu"
          className="rounded-card border-border shadow-card absolute top-full right-0 z-50 mt-2 w-64 border bg-white p-2"
        >
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              role="menuitem"
              href={link.href}
              onClick={close}
              className="rounded-control text-nav text-ink hover:bg-paper block px-4 py-3"
            >
              {link.label}
            </Link>
          ))}

          <div className="border-border my-2 border-t" />

          <p className="text-metadata text-muted px-4 pb-1">Language</p>
          <div className="flex flex-wrap gap-1 px-2 pb-2">
            {locales.map((locale) => (
              <Link
                key={locale.code}
                role="menuitem"
                href={localizedPath(pathname, locale.code)}
                onClick={close}
                className={cn(
                  "rounded-control text-nav px-3 py-2",
                  locale.code === activeLocale
                    ? "bg-indigo-light text-indigo font-semibold"
                    : "text-ink hover:bg-paper",
                )}
              >
                {locale.name}
              </Link>
            ))}
          </div>

          <div className="border-border my-2 border-t" />

          <Link
            role="menuitem"
            href={signInNav.href}
            onClick={close}
            className="rounded-control text-nav text-ink hover:bg-paper block px-4 py-3"
          >
            {signInNav.label}
          </Link>
        </div>
      )}
    </div>
  );
}
