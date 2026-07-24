export const bookBlobPrefixes: Record<string, string> = {
  "book:entelijans-atifisyel-de-a-rive-nan-z":
    "Entelijans Atifisyel (AI) de A rive nan Z (Sale - 16MB)",
  "book:odinate-ak-entenet":
    "Tout Sa Ou Bezwen Konnen Sou ",
  "book:plis-lavant-sou-entenet":
    "Kijan Pou Fe Plis Lavant Sou Entenet (Sale - 18MB)",
  "book:youtube-de-a-rive-nan-z":
    "YouTube de A rive nan Z (Sale - 14MB)",
  "book:capcut-mobile-desktop":
    "CapCut Mobile + Desktop - Gid Konple (Sale - 18MB)",
};

export function getBookBlobPrefix(productId: string) {
  return bookBlobPrefixes[productId];
}
