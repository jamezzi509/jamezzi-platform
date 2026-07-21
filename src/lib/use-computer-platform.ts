"use client";

import { useEffect, useState } from "react";

export const computerPlatformStorageKey =
  "jamezzi:computer:essentials:platform";
export const computerPlatformVerifiedStorageKey =
  "jamezzi:computer:essentials:platform-verified-v2";

export type PreferredPlatform = "windows" | "mac";

function readStoredPlatform(): PreferredPlatform | null {
  if (typeof window === "undefined") return null;
  try {
    const saved = window.localStorage.getItem(computerPlatformStorageKey);
    return saved === "windows" || saved === "mac" ? saved : null;
  } catch {
    return null;
  }
}

/**
 * Reads and writes the learner's Windows-or-Mac path (master brief Section 5.3/5.4).
 * `null` means the learner hasn't chosen yet — `loaded` distinguishes that from
 * "still reading localStorage" so callers can avoid a flash of the onboarding prompt.
 */
export function useComputerPlatform() {
  const [platform, setPlatformState] = useState<PreferredPlatform | null>(null);
  const [verified, setVerified] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPlatformState(readStoredPlatform());
      try {
        setVerified(
          window.localStorage.getItem(computerPlatformVerifiedStorageKey) ===
            "true",
        );
      } catch {
        setVerified(false);
      }
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function setPlatform(next: PreferredPlatform) {
    setPlatformState(next);
    setVerified(true);
    try {
      window.localStorage.setItem(computerPlatformStorageKey, next);
      window.localStorage.setItem(computerPlatformVerifiedStorageKey, "true");
    } catch {
      // Preference stays in-memory for this session if storage is blocked.
    }
  }

  function clearPlatform() {
    setPlatformState(null);
    setVerified(false);
    try {
      window.localStorage.removeItem(computerPlatformStorageKey);
      window.localStorage.removeItem(computerPlatformVerifiedStorageKey);
    } catch {
      // The in-memory preference is still cleared for this session.
    }
  }

  return { platform, verified, setPlatform, clearPlatform, loaded };
}
