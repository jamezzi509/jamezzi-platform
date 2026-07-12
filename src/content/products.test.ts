import { describe, expect, it } from "vitest";
import {
  products,
  featuredProduct,
  supportingProducts,
} from "@/content/products";

describe("products content", () => {
  it("has exactly one featured product", () => {
    const featured = products.filter((product) => product.featured);
    expect(featured).toHaveLength(1);
  });

  it("features Nichr", () => {
    expect(featuredProduct.slug).toBe("nichr");
  });

  it("lists Endize and clienIQ as supporting products", () => {
    expect(supportingProducts.map((product) => product.slug)).toEqual([
      "endize",
      "clieniq",
    ]);
  });

  it("gives every product an action label and href", () => {
    for (const product of products) {
      expect(product.actionLabel.length).toBeGreaterThan(0);
      expect(product.href.startsWith("/")).toBe(true);
    }
  });

  it("marks every homepage product as launching soon", () => {
    for (const product of products) {
      expect(product.status).toBe("launching-soon");
    }
  });

  it("gives every product a real image with meaningful alt text", () => {
    for (const product of products) {
      expect(product.image.src.endsWith(".webp")).toBe(true);
      expect(product.image.alt.length).toBeGreaterThan(20);
    }
  });
});
