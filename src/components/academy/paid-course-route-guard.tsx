"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useState } from "react";
import { PurchaseButton } from "@/components/payments/purchase-button";
import { firebaseAuth } from "@/lib/firebase/client";

const paidCourses = {
  "computer-internet-essentials": {
    productId: "course:computer-internet-essentials",
    title: "Computer & Internet Essentials",
    price: "$97",
  },
  "digital-marketing-ai": {
    productId: "course:digital-marketing-ai",
    title: "Digital Marketing & AI",
    price: "$127",
  },
} as const;

type CourseKey = keyof typeof paidCourses;

function protectedCourse(pathname: string) {
  const match = pathname.match(/^\/academy\/courses\/([^/]+)\/(learn|rebuild|lessons)(?:\/|$)/);
  const slug = match?.[1] as CourseKey | undefined;
  return slug && slug in paidCourses ? { slug, ...paidCourses[slug] } : null;
}

export function PaidCourseRouteGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const course = protectedCourse(pathname);
  const productId = course?.productId;
  const [status, setStatus] = useState<"loading" | "signed-out" | "locked" | "open">(
    course ? "loading" : "open",
  );

  useEffect(() => {
    if (!productId) {
      setStatus("open");
      return;
    }

    let cancelled = false;

    async function checkAccess(user: User | null) {
      if (!user) {
        if (!cancelled) setStatus("signed-out");
        return;
      }

      try {
        const response = await fetch(
          `/api/course-access?productId=${encodeURIComponent(productId)}`,
          {
            headers: {
              authorization: `Bearer ${await user.getIdToken()}`,
            },
            cache: "no-store",
          },
        );
        const result = (await response.json()) as { entitled?: boolean };
        if (!cancelled) setStatus(result.entitled ? "open" : "locked");
      } catch {
        if (!cancelled) setStatus("locked");
      }
    }

    setStatus("loading");
    const unsubscribe = onAuthStateChanged(firebaseAuth, checkAccess);
    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, [productId]);

  if (!course || status === "open") return children;

  if (status === "loading") {
    return (
      <section className="bg-paper flex min-h-[65vh] items-center justify-center px-6 pt-28">
        <div className="text-center">
          <div className="mx-auto size-9 animate-spin rounded-full border-2 border-indigo/20 border-t-indigo" />
          <p className="text-body text-muted mt-4">Checking course access…</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper min-h-[70vh] px-5 pt-32 pb-20">
      <div className="border-border mx-auto max-w-2xl rounded-[24px] border bg-white p-7 shadow-[0_24px_70px_rgba(29,24,46,0.08)] sm:p-10">
        <span className="flex size-12 items-center justify-center rounded-full bg-[#f0edff] text-2xl" aria-hidden="true">
          🔒
        </span>
        <p className="text-eyebrow text-indigo-dark mt-7">ENROLLED STUDENTS</p>
        <h1 className="text-feature-headline-sm text-ink mt-3">
          This lesson is part of {course.title}.
        </h1>
        <p className="text-body text-muted mt-4 max-w-xl">
          {status === "signed-out"
            ? "Sign in with the account used for your purchase. If you have not enrolled yet, review the full course before checkout."
            : "This account does not own the course yet. Enroll once for lifetime access to every module, assessment, and the certificate."}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {status === "signed-out" ? (
            <Link
              href={`/account?next=${encodeURIComponent(pathname)}`}
              className="text-button bg-indigo hover:bg-indigo-dark inline-flex min-h-11 items-center justify-center rounded-[10px] px-6 text-white transition-colors"
            >
              Sign In to Continue
            </Link>
          ) : (
            <PurchaseButton
              productId={course.productId}
              productKind="course"
              className="text-button bg-indigo hover:bg-indigo-dark inline-flex min-h-11 items-center justify-center rounded-[10px] px-6 text-white transition-colors disabled:opacity-60"
            >
              Enroll Now — {course.price}
            </PurchaseButton>
          )}
          <Link
            href={`/academy/courses/${course.slug}`}
            className="text-button border-border text-ink inline-flex min-h-11 items-center justify-center rounded-[10px] border bg-white px-6"
          >
            View Course Details
          </Link>
        </div>
        <p className="text-metadata text-muted mt-6">
          Secure checkout · Lifetime access · Course certificate included
        </p>
      </div>
    </section>
  );
}
