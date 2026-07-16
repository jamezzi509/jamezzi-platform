"use client";

import { useEffect, useState } from "react";

export const computerPlatformStorageKey = "jamezzi:computer:essentials:platform";

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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPlatformState(readStoredPlatform());
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function setPlatform(next: PreferredPlatform) {
    setPlatformState(next);
    try {
      window.localStorage.setItem(computerPlatformStorageKey, next);
    } catch {
      // Preference stays in-memory for this session if storage is blocked.
    }
  }

  return { platform, setPlatform, loaded };
}
