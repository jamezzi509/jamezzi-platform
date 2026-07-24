import { get, list } from "@vercel/blob";
import { NextResponse } from "next/server";
import { getBookBlobPrefix } from "@/lib/payments/book-files";
import { getSellableProduct } from "@/lib/payments/catalog";
import { stripe } from "@/lib/payments/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const sessionId = new URL(request.url).searchParams.get("session_id");
    if (!sessionId?.startsWith("cs_")) {
      return NextResponse.json({ error: "A valid purchase is required." }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const productId = session.metadata?.productId;
    const product = productId ? getSellableProduct(productId) : undefined;

    if (
      session.payment_status !== "paid" ||
      !product ||
      product.kind !== "book"
    ) {
      return NextResponse.json({ error: "This purchase does not include a downloadable book." }, { status: 403 });
    }

    const prefix = getBookBlobPrefix(product.id);
    if (!prefix) {
      return NextResponse.json({ error: "This book file is not configured." }, { status: 404 });
    }

    const result = await list({ prefix, limit: 2 });
    const file = result.blobs.find((blob) => blob.pathname.toLowerCase().endsWith(".pdf"));
    if (!file) {
      return NextResponse.json({ error: "The book file could not be found." }, { status: 404 });
    }

    const downloaded = await get(file.url, { access: "private" });
    if (!downloaded || downloaded.statusCode !== 200) {
      return NextResponse.json({ error: "The book file could not be opened." }, { status: 404 });
    }

    const safeFilename = `${product.slug}.pdf`;
    return new Response(downloaded.stream, {
      headers: {
        "content-type": "application/pdf",
        "content-disposition": `attachment; filename="${safeFilename}"`,
        "cache-control": "private, no-store, max-age=0",
        "x-content-type-options": "nosniff",
      },
    });
  } catch (error) {
    console.error("book_download_error", error);
    return NextResponse.json({ error: "The secure download could not be prepared." }, { status: 500 });
  }
}
