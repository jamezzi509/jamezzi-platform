"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { firebaseAuth } from "@/lib/firebase/client";

export function PurchaseButton({
  productId,
  children = "Buy now",
  className = "",
}: {
  productId: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function purchase() {
    const user = firebaseAuth.currentUser;
    if (!user) {
      router.push(`/account?next=${encodeURIComponent(pathname)}`);
      return;
    }

    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${await user.getIdToken()}`,
        },
        body: JSON.stringify({ productId }),
      });
      const result = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !result.url) throw new Error(result.error);
      window.location.assign(result.url);
    } catch {
      setError("Checkout could not be opened. Please try again.");
      setBusy(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={purchase}
        disabled={busy}
        className={className}
      >
        {busy ? "Opening secure checkout…" : children}
      </button>
      {error && <p role="alert" className="mt-2 text-sm text-red-700">{error}</p>}
    </div>
  );
}
