import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { contactInquiryOptions } from "@/content/contact";
import type { ContactInquiryType } from "@/types/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact James Alexandre about selected digital projects, product collaborations, partnerships, seminars, and speaking invitations.",
};

const contactNotes = [
  {
    title: "Selected projects",
    copy: "I take on a limited number of product, website, and collaboration opportunities where the problem and expected outcome are clear.",
  },
  {
    title: "Speaking and seminars",
    copy: "Invitations should include the audience, subject, location or format, possible dates, and the result you want participants to leave with.",
  },
  {
    title: "Email first",
    copy: "Email is the best starting point. A clear written message gives me enough context to respond thoughtfully before any meeting is considered.",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string | string[] }>;
}) {
  const { type } = await searchParams;
  const typeValue = Array.isArray(type) ? type[0] : type;
  const selected = contactInquiryOptions.find(
    (option) => option.value === (typeValue as ContactInquiryType),
  );
  const initialType = selected?.value ?? "product-or-website";

  return (
    <main className="bg-paper pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container>
        <header className="max-w-4xl">
          <p className="text-eyebrow text-indigo-dark">CONTACT</p>
          <h1 className="text-editorial-headline text-ink mt-4">
            Start with the problem, not the pitch.
          </h1>
          <p className="text-intro text-muted mt-6 max-w-2xl">
            Tell me what you&rsquo;re trying to build, improve, teach, or make
            possible. The more useful context you share, the more useful my
            response can be.
          </p>
        </header>

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
          <aside>
            <div className="border-border border-t">
              {contactNotes.map((note, index) => (
                <article
                  key={note.title}
                  className="border-border border-b py-6"
                >
                  <p className="text-metadata text-indigo-dark">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-card-title text-ink mt-3">
                    {note.title}
                  </h2>
                  <p className="text-body text-muted mt-2">{note.copy}</p>
                </article>
              ))}
            </div>

            <div className="bg-indigo-light rounded-card mt-7 p-6">
              <p className="text-metadata text-indigo-dark">DIRECT EMAIL</p>
              <Link
                href="mailto:info@jamezzi.com"
                className="font-display text-ink mt-2 inline-block text-2xl"
              >
                info@jamezzi.com
              </Link>
            </div>
          </aside>

          <section
            aria-labelledby="contact-form-title"
            className="rounded-showcase border-border shadow-showcase border bg-white p-6 md:p-8 lg:p-10"
          >
            <p className="text-eyebrow text-indigo-dark">YOUR MESSAGE</p>
            <h2
              id="contact-form-title"
              className="text-feature-headline-sm text-ink mt-3"
            >
              Give me enough context to understand the opportunity.
            </h2>
            <div className="mt-8">
              <ContactForm initialType={initialType} />
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
