export interface AcademyBook {
  slug: string;
  title: string;
  topic: string;
  language: "Kreyòl";
  cover: string;
}

export const academyBooks: AcademyBook[] = [
  {
    slug: "entelijans-atifisyel-de-a-rive-nan-z",
    title: "Entèlijans Atifisyèl (AI) de A rive nan Z",
    topic: "Artificial Intelligence",
    language: "Kreyòl",
    cover: "/images/academy/books/ai-de-a-rive-nan-z.webp",
  },
  {
    slug: "lajan-ak-biznis",
    title: "Lajan & Biznis",
    topic: "Money & Business",
    language: "Kreyòl",
    cover: "/images/academy/books/lajan-ak-biznis.webp",
  },
  {
    slug: "odinate-ak-entenet",
    title: "Tout sa ou bezwen konnen sou òdinatè ak entènèt",
    topic: "Digital Skills",
    language: "Kreyòl",
    cover: "/images/academy/books/odinate-ak-entenet.webp",
  },
  {
    slug: "plis-lavant-sou-entenet",
    title: "Kijan pou fè plis lavant sou entènèt",
    topic: "Digital Marketing",
    language: "Kreyòl",
    cover: "/images/academy/books/plis-lavant-sou-entenet.webp",
  },
  {
    slug: "youtube-de-a-rive-nan-z",
    title: "YouTube de A rive nan Z",
    topic: "Content Creation",
    language: "Kreyòl",
    cover: "/images/academy/books/youtube-de-a-rive-nan-z.webp",
  },
  {
    slug: "capcut-mobile-desktop",
    title: "CapCut Mobile + Desktop",
    topic: "Video Editing",
    language: "Kreyòl",
    cover: "/images/academy/books/capcut-mobile-desktop.webp",
  },
];
