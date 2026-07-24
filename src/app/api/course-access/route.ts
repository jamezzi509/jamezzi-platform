import { NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase/admin";
import { getSellableProduct } from "@/lib/payments/catalog";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const authorization = request.headers.get("authorization");
    const productId = new URL(request.url).searchParams.get("productId");

    if (!authorization?.startsWith("Bearer ")) {
      return NextResponse.json({ entitled: false }, { status: 401 });
    }

    const product = productId ? getSellableProduct(productId) : undefined;
    if (!product || product.kind !== "course") {
      return NextResponse.json({ entitled: false }, { status: 400 });
    }

    const token = authorization.slice("Bearer ".length);
    const user = await adminAuth.verifyIdToken(token);
    const entitlement = await adminDb
      .collection("users")
      .doc(user.uid)
      .collection("entitlements")
      .doc(product.id.replace(":", "__"))
      .get();

    return NextResponse.json({
      entitled: entitlement.exists && entitlement.get("active") === true,
    });
  } catch (error) {
    console.error("course_access_error", error);
    return NextResponse.json({ entitled: false }, { status: 401 });
  }
}
