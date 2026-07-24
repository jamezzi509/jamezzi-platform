"use client";

import { FormEvent, useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { firebaseAuth } from "@/lib/firebase/client";

export default function AccountPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    try {
      if (mode === "signup") {
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
      } else {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
      }
      const next = new URLSearchParams(window.location.search).get("next");
      const destination =
        next?.startsWith("/") && !next.startsWith("//") ? next : "/academy";
      router.replace(destination);
    } catch {
      setMessage("We could not complete that request. Check your email and password, then try again.");
    } finally {
      setBusy(false);
    }
  }

  async function resetPassword() {
    const emailInput = document.querySelector<HTMLInputElement>('input[name="email"]');
    const email = emailInput?.value.trim();
    if (!email) {
      setMessage("Enter your email address first.");
      return;
    }
    try {
      await sendPasswordResetEmail(firebaseAuth, email);
      setMessage("Password reset instructions were sent if that account exists.");
    } catch {
      setMessage("Password reset could not be sent. Try again in a moment.");
    }
  }

  return (
    <section className="mx-auto w-full max-w-lg px-6 py-16 sm:py-24">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-violet-700">
        Jamezzi Academy
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
        {mode === "signin" ? "Welcome back." : "Create your account."}
      </h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
        Your account keeps your courses, books, purchases, and progress together.
      </p>

      <form onSubmit={submit} className="mt-10 space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Email address</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Password</span>
          <input
            name="password"
            type="password"
            minLength={8}
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            required
            className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
          />
        </label>
        {message && (
          <p role="status" className="rounded-xl bg-violet-50 px-4 py-3 text-sm text-violet-950">
            {message}
          </p>
        )}
        <button
          type="submit"
          disabled={busy}
          className="min-h-12 w-full rounded-xl bg-violet-700 px-5 text-base font-semibold text-white disabled:opacity-60"
        >
          {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
        </button>
      </form>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="font-semibold text-violet-700"
        >
          {mode === "signin" ? "Create an account" : "I already have an account"}
        </button>
        {mode === "signin" && (
          <button type="button" onClick={resetPassword} className="text-slate-600 underline">
            Forgot password?
          </button>
        )}
      </div>
    </section>
  );
}
