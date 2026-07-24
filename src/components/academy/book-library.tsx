import Image from "next/image";
import Link from "next/link";
import { academyBooks, type AcademyBook } from "@/content/books";
import { BookCheckoutButton } from "@/components/payments/book-checkout-button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";

export function BookLibrary() {
  return (
    <main className="bg-paper pt-28 lg:pt-36">
      <section className="pt-10 pb-14 lg:pt-16 lg:pb-20">
        <Container>
          <p className="text-eyebrow text-indigo-dark">JAMEZZI BOOKS</p>
          <div className="mt-4 grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h1 className="text-editorial-headline text-ink max-w-4xl">
              Practical knowledge you can keep close.
            </h1>
            <p className="text-intro text-muted max-w-xl lg:pb-2">
              Clear, useful books in Kreyòl for learning technology, building a
              business, creating content, and working with confidence.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 sm:gap-y-12 md:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
            {academyBooks.map((book, index) => (
              <article key={book.slug} className="group min-w-0">
                <Link href={`/academy/books/${book.slug}`} className="block">
                  <div
                    className="relative w-full overflow-hidden rounded-[10px] shadow-[0_18px_45px_rgba(29,24,46,0.12)]"
                    style={{ aspectRatio: "2 / 3" }}
                  >
                    <Image
                      src={book.cover}
                      alt={`Cover of ${book.title}`}
                      fill
                      sizes="(max-width: 767px) 45vw, (max-width: 1199px) 30vw, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      priority={index < 3}
                    />
                  </div>
                  <p className="text-metadata text-muted mt-4 sm:mt-5">
                    {book.topic} · {book.pages} pages
                  </p>
                  <h2 className="text-ink mt-2 line-clamp-3 text-base leading-snug font-semibold text-balance sm:text-xl">
                    {book.title}
                  </h2>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <span className="text-ink text-base font-semibold">
                      ${book.price.toFixed(2)}
                    </span>
                    <span className="text-button text-indigo-dark inline-flex min-h-11 items-center gap-2">
                      View Book <ArrowRightIcon className="size-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

export function BookDetail({ book }: { book: AcademyBook }) {
  const relatedBooks = academyBooks.filter((item) => item.slug !== book.slug).slice(0, 3);

  return (
    <main className="bg-paper pt-24 lg:pt-[72px]">
      <section className="py-10 lg:py-16">
        <Container>
          <Link
            href="/academy/books"
            className="text-button text-indigo-dark inline-flex min-h-11 items-center"
          >
            ← All Books
          </Link>

          <div className="mt-5 grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16 xl:gap-24">
            <div className="mx-auto w-full max-w-[340px] lg:max-w-[380px]">
              <div
                className="relative overflow-hidden rounded-[12px] shadow-[0_24px_60px_rgba(29,24,46,0.16)]"
                style={{ aspectRatio: "2 / 3" }}
              >
                <Image
                  src={book.cover}
                  alt={`Cover of ${book.title}`}
                  fill
                  priority
                  sizes="(max-width: 1023px) 340px, 380px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-eyebrow text-indigo-dark">
                {book.topic} · {book.language}
              </p>
              <h1 className="text-editorial-headline text-ink mt-4 max-w-4xl">
                {book.title}
              </h1>
              <p className="font-display text-ink mt-5 text-2xl leading-snug">
                {book.tagline}
              </p>
              <p className="text-body text-muted mt-5 max-w-2xl text-lg leading-relaxed">
                {book.description}
              </p>

              <div className="border-border mt-7 grid max-w-2xl grid-cols-3 gap-3 border-y py-5">
                <BookFact label="Format" value="Digital PDF" />
                <BookFact label="Length" value={`${book.pages} pages`} />
                <BookFact label="Access" value="Instant" />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <BookCheckoutButton
                  productId={`book:${book.slug}`}
                  price={book.price}
                />
                <p className="text-sm leading-relaxed text-muted">
                  Secure payment · No account required
                  <br />
                  Download immediately after purchase
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-eyebrow text-indigo-dark">WHAT YOU WILL LEARN</p>
              <h2 className="text-feature-headline-sm text-ink mt-4">
                Useful skills, explained clearly.
              </h2>
              <ul className="mt-7 space-y-4">
                {book.outcomes.map((outcome) => (
                  <li key={outcome} className="text-body text-muted flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e8f7f0] text-sm font-bold text-[#08785b]"
                    >
                      ✓
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[22px] bg-[#f6f3ff] p-7 sm:p-9">
              <p className="text-eyebrow text-indigo-dark">INSIDE THE BOOK</p>
              <h2 className="text-feature-headline-sm text-ink mt-4">
                Topics covered
              </h2>
              <ol className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {book.contents.map((item, index) => (
                  <li key={item} className="text-body text-ink flex gap-3">
                    <span className="text-metadata text-indigo-dark mt-0.5 min-w-6">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <InfoCard
              eyebrow="DELIVERY"
              title="Ready after payment"
              copy="After Stripe confirms your payment, the secure download button appears immediately. We also email you a private download link."
            />
            <InfoCard
              eyebrow="WHAT YOU RECEIVE"
              title="The complete sale edition"
              copy={`A high-quality ${book.pages}-page PDF in Kreyòl. Save it to your phone, tablet, or computer and read it at your own pace.`}
            />
            <InfoCard
              eyebrow="NEED HELP?"
              title="Support when you need it"
              copy="If your payment succeeds but the file does not arrive, contact Jamezzi with the email address used at checkout."
              href="/contact"
              linkText="Contact support"
            />
          </div>
          <p className="text-legal text-muted mt-7">
            Digital books are final sale except when the delivered file is
            damaged or inaccessible. Read the{" "}
            <Link href="/refund" className="text-indigo-dark underline underline-offset-2">
              refund policy
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-eyebrow text-indigo-dark">KEEP LEARNING</p>
              <h2 className="text-feature-headline-sm text-ink mt-3">
                More practical books
              </h2>
            </div>
            <Link
              href="/academy/books"
              className="text-button text-indigo-dark hidden items-center gap-2 sm:inline-flex"
            >
              View all <ArrowRightIcon className="size-4" />
            </Link>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-7">
            {relatedBooks.map((related) => (
              <Link
                key={related.slug}
                href={`/academy/books/${related.slug}`}
                className="group"
              >
                <div
                  className="relative overflow-hidden rounded-[10px] shadow-[0_14px_35px_rgba(29,24,46,0.11)]"
                  style={{ aspectRatio: "2 / 3" }}
                >
                  <Image
                    src={related.cover}
                    alt={`Cover of ${related.title}`}
                    fill
                    sizes="(max-width: 639px) 45vw, 260px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <h3 className="text-ink mt-4 text-base font-semibold leading-snug sm:text-lg">
                  {related.title}
                </h3>
                <p className="text-muted mt-1 text-sm">
                  ${related.price.toFixed(2)} · Digital PDF
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

function BookFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-metadata text-muted">{label}</p>
      <p className="text-ink mt-1 text-sm font-semibold sm:text-base">{value}</p>
    </div>
  );
}

function InfoCard({
  eyebrow,
  title,
  copy,
  href,
  linkText,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  href?: string;
  linkText?: string;
}) {
  return (
    <article className="border-border rounded-[18px] border bg-white p-7">
      <p className="text-metadata text-indigo-dark">{eyebrow}</p>
      <h3 className="font-display text-ink mt-3 text-2xl">{title}</h3>
      <p className="text-body text-muted mt-3">{copy}</p>
      {href && linkText ? (
        <Link href={href} className="text-button text-indigo-dark mt-5 inline-flex">
          {linkText}
        </Link>
      ) : null}
    </article>
  );
}
