import { academyBooks } from "@/content/books";
import { courses } from "@/content/courses";

export type ProductKind = "course" | "book";

export interface SellableProduct {
  id: string;
  slug: string;
  name: string;
  description: string;
  kind: ProductKind;
  unitAmount: number;
  currency: "usd";
}

const courseProducts: SellableProduct[] = courses
  .filter((course) => !course.free && course.availability === "launching-first")
  .map((course) => ({
    id: `course:${course.slug}`,
    slug: course.slug,
    name: course.title,
    description: course.description,
    kind: "course",
    unitAmount: Math.round((course.price ?? 0) * 100),
    currency: "usd",
  }));

const bookProducts: SellableProduct[] = academyBooks.map((book) => ({
  id: `book:${book.slug}`,
  slug: book.slug,
  name: book.title,
  description: `${book.topic} · PDF · ${book.language}`,
  kind: "book",
  unitAmount: Math.round(book.price * 100),
  currency: "usd",
}));

export const sellableProducts = [...courseProducts, ...bookProducts];

export function getSellableProduct(id: string) {
  return sellableProducts.find((product) => product.id === id);
}
