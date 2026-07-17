"use client";

import { useRef, useState } from "react";
import { CheckIcon } from "@/components/ui/icons";
import {
  clearCourseProgressFromBrowser,
  type CourseProgressNamespace,
} from "@/lib/course-progress";

interface BackupFile {
  version: 1;
  course: "english" | "computer";
  exportedAt: string;
  values: Record<string, string>;
}

const prefixes = {
  english: "jamezzi:english:",
  computer: "jamezzi:computer:",
} as const;

export function CourseProgressBackup({
  course,
}: {
  course: CourseProgressNamespace;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");
  const [confirmReset, setConfirmReset] = useState(false);

  function resetProgress() {
    clearCourseProgressFromBrowser(course);
    setConfirmReset(false);
    setMessage("Course progress cleared. Reloading from the beginning…");
    window.setTimeout(() => window.location.reload(), 500);
  }

  function downloadBackup() {
    const values: Record<string, string> = {};
    for (let index = 0; index < window.localStorage.length; index += 1) {
      const key = window.localStorage.key(index);
      if (key?.startsWith(prefixes[course])) {
        values[key] = window.localStorage.getItem(key) ?? "";
      }
    }
    const backup: BackupFile = {
      version: 1,
      course,
      exportedAt: new Date().toISOString(),
      values,
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `jamezzi-${course}-progress.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    setMessage("Progress backup downloaded.");
  }

  async function restoreBackup(file: File) {
    try {
      const backup = JSON.parse(await file.text()) as Partial<BackupFile>;
      if (
        backup.version !== 1 ||
        backup.course !== course ||
        !backup.values ||
        typeof backup.values !== "object"
      ) {
        throw new Error("invalid");
      }
      const validEntries = Object.entries(backup.values).filter(
        ([key, value]) =>
          key.startsWith(prefixes[course]) && typeof value === "string",
      );
      if (!validEntries.length) throw new Error("empty");
      validEntries.forEach(([key, value]) =>
        window.localStorage.setItem(key, value),
      );
      setMessage("Progress restored. Refreshing the course…");
      window.setTimeout(() => window.location.reload(), 700);
    } catch {
      setMessage("This is not a valid progress backup for this course.");
    } finally {
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="border-border rounded-[18px] border bg-white p-6 sm:p-7">
      <p className="text-eyebrow text-indigo-dark">SAVE YOUR PROGRESS</p>
      <h2 className="text-card-title text-ink mt-3">Keep a private backup.</h2>
      <p className="text-body text-muted mt-3 max-w-2xl">
        Guest progress stays in this browser. Download a small backup file if
        you want to protect it or move it to another device. It contains course
        progress only—not passwords or personal account information.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={downloadBackup}
          className="bg-indigo text-button min-h-11 rounded-full px-5 text-white"
        >
          Download Progress
        </button>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="border-border text-button text-ink min-h-11 rounded-full border bg-white px-5"
        >
          Restore Progress
        </button>
        {confirmReset ? (
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-[#E4AAA5] bg-[#FFF2F1] px-4 py-3">
            <span className="text-base font-semibold text-[#7F2824]">
              Clear this course on this browser?
            </span>
            <button
              type="button"
              onClick={resetProgress}
              className="min-h-11 rounded-full bg-[#A63731] px-5 text-base font-semibold text-white"
            >
              Yes, start over
            </button>
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="min-h-11 px-3 text-base font-semibold text-[#5E5966]"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="min-h-11 rounded-full border border-[#D8A19D] bg-white px-5 text-base font-semibold text-[#8C302B]"
          >
            Start course over
          </button>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="application/json,.json"
          className="sr-only"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void restoreBackup(file);
          }}
        />
      </div>
      {message && (
        <p
          className="text-metadata text-indigo-dark mt-4 flex items-center gap-2"
          aria-live="polite"
        >
          <CheckIcon className="size-4" /> {message}
        </p>
      )}
    </div>
  );
}
