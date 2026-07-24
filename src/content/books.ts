export interface AcademyBook {
  slug: string;
  title: string;
  topic: string;
  language: "Kreyòl";
  cover: string;
  price: number;
}

export const academyBooks: AcademyBook[] = [
  {
    slug: "entelijans-atifisyel-de-a-rive-nan-z",
    title: "Entèlijans Atifisyèl (AI) de A rive nan Z",
    topic: "Artificial Intelligence",
    language: "Kreyòl",
    cover: "/images/academy/books/ai-de-a-rive-nan-z.webp",
    price: 14.99,
  },
  {
    slug: "odinate-ak-entenet",
    title: "Tout sa ou bezwen konnen sou òdinatè ak entènèt",
    topic: "Digital Skills",
    language: "Kreyòl",
    cover: "/images/academy/books/odinate-ak-entenet.webp",
    price: 19.99,
  },
  {
    slug: "plis-lavant-sou-entenet",
    title: "Kijan pou fè plis lavant sou entènèt",
    topic: "Digital Marketing",
    language: "Kreyòl",
    cover: "/images/academy/books/plis-lavant-sou-entenet.webp",
    price: 14.99,
  },
  {
    slug: "youtube-de-a-rive-nan-z",
    title: "YouTube de A rive nan Z",
    topic: "Content Creation",
    language: "Kreyòl",
    cover: "/images/academy/books/youtube-de-a-rive-nan-z.webp",
    price: 19.99,
  },
  {
    slug: "capcut-mobile-desktop",
    title: "CapCut Mobile + Desktop",
    topic: "Video Editing",
    language: "Kreyòl",
    cover: "/images/academy/books/capcut-mobile-desktop.webp",
    price: 9.99,
  },
];
