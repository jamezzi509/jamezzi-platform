import Link from "next/link";
import { site } from "@/content/site";
import { footerGroups, legalLinks } from "@/content/footer";
import { socialLinks } from "@/content/social";
import { Container } from "@/components/ui/container";
import { JamezziMark } from "@/components/layout/jamezzi-mark";
import {
  FacebookIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
} from "@/components/ui/icons";

const socialIcons = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
  Instagram: InstagramIcon,
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-night text-night-text">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-4">
            <div className="flex items-center gap-2">
              <JamezziMark heightPx={24} />
              <p className="text-nav font-semibold tracking-wide">
                {site.name.toUpperCase()}
              </p>
            </div>
            <p className="text-body text-night-muted mt-4">{site.tagline}</p>
            <p className="text-body text-night-muted mt-2">
              {site.description}
            </p>

            <ul className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const SocialIcon =
                  socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      aria-label={social.label}
                      className="rounded-control border-night-border text-night-text duration-control ease-primary hover:border-night-text flex size-11 items-center justify-center border transition-colors"
                    >
                      <SocialIcon className="size-5" />
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/contact"
                  aria-label="Email — opens Contact"
                  className="rounded-control border-night-border text-night-text duration-control ease-primary hover:border-night-text flex size-11 items-center justify-center border transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    className="size-5"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <rect x="4" y="5" width="16" height="14" rx="2" />
                    <path d="m5 7 7 6 7-6" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {footerGroups.map((group) => (
            <nav
              key={group.heading}
              aria-label={group.heading}
              className="col-span-2 md:col-span-4 lg:col-span-4"
            >
              <p className="text-metadata text-night-muted">{group.heading}</p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body text-night-text duration-control ease-primary transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-night-border mt-12 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-legal text-night-muted">
            © 2026 {site.legalName}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-legal text-night-muted duration-control ease-primary hover:text-night-text transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
