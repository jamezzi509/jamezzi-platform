"use client";

import { useState } from "react";

export function BookCheckoutButton({
  productId,
  price,
}: {
  productId: string;
  price: number;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const result = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !result.url) {
        throw new Error(result.error ?? "Checkout could not be started.");
      }

      window.location.assign(result.url);
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Checkout could not be started.",
      );
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={startCheckout}
        disabled={loading}
        className="text-button bg-indigo hover:bg-indigo-dark disabled:bg-muted inline-flex min-h-11 items-center justify-center rounded-[10px] px-6 text-white transition-colors disabled:cursor-wait"
      >
        {loading ? "Opening secure checkout…" : `Buy PDF — $${price.toFixed(2)}`}
      </button>
      {error ? (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
