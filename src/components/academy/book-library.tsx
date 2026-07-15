import Image from "next/image";
import Link from "next/link";
import { academyBooks, type AcademyBook } from "@/content/books";
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
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
            {academyBooks.map((book, index) => (
              <article key={book.slug} className="group">
                <div
                  className="bg-paper border-border relative w-full overflow-hidden rounded-[18px] border p-3 shadow-[0_18px_45px_rgba(29,24,46,0.08)] sm:p-5"
                  style={{ aspectRatio: "2 / 3" }}
                >
                  <Image
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                    fill
                    sizes="(max-width: 767px) 45vw, (max-width: 1199px) 30vw, 360px"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.025] sm:p-5"
                    priority={index < 3}
                  />
                </div>
                <p className="text-metadata text-muted mt-5">
                  {book.topic} · {book.language}
                </p>
                <h2 className="text-card-title text-ink mt-2 text-balance">
                  {book.title}
                </h2>
                <Link
                  href={`/academy/books/${book.slug}`}
                  className="text-button text-indigo-dark mt-4 inline-flex min-h-11 items-center gap-2"
                >
                  View Book <ArrowRightIcon className="size-4" />
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
  return (
    <main className="bg-paper pt-28 lg:pt-36">
      <section className="pt-10 pb-20 lg:pt-16 lg:pb-28">
        <Container>
          <Link
            href="/academy/books"
            className="text-button text-indigo-dark inline-flex min-h-11 items-center"
          >
            ← All Books
          </Link>
          <div className="mt-7 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
            <div
              className="border-border relative mx-auto w-full max-w-md overflow-hidden rounded-[24px] border bg-white p-5 shadow-[0_24px_60px_rgba(29,24,46,0.1)]"
              style={{ aspectRatio: "2 / 3" }}
            >
              <Image
                src={book.cover}
                alt={`Cover of ${book.title}`}
                fill
                priority
                sizes="(max-width: 1023px) 80vw, 420px"
                className="object-contain p-5"
              />
            </div>
            <div>
              <p className="text-eyebrow text-indigo-dark">
                {book.topic} · {book.language}
              </p>
              <h1 className="text-editorial-headline text-ink mt-5 max-w-4xl">
                {book.title}
              </h1>
              <p className="text-intro text-muted mt-7 max-w-2xl">
                A practical Jamezzi book created to make useful knowledge clear,
                accessible, and easier to apply in Kreyòl.
              </p>
              <p className="text-body text-muted border-border mt-8 max-w-2xl border-t pt-7">
                Release and purchase details will be published here when they
                are ready.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="text-button bg-indigo hover:bg-indigo-dark inline-flex min-h-11 items-center justify-center rounded-[10px] px-6 text-white transition-colors"
                >
                  Ask About This Book
                </Link>
                <Link
                  href="/academy/books"
                  className="text-button border-border inline-flex min-h-11 items-center justify-center rounded-[10px] border px-6 transition-colors hover:bg-white"
                >
                  Browse More Books
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
