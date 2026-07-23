"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { dominateDigitalProgressStorageKey } from "@/components/academy/dominate-digital-course-page";
import { dominateDigitalFinalExamStorageKey } from "@/components/academy/dominate-digital-final-exam-player";
import {
  ArrowRightIcon,
  GraduationCapIcon,
  StampIcon,
} from "@/components/ui/icons";
import type { CourseLesson } from "@/content/dominate-digital/schema";
import { cn } from "@/lib/cn";

const dominateDigitalCertificateStorageKey =
  "jamezzi:digital-marketing-ai:certificate";

interface CertificateRecord {
  studentName: string;
  certificateId: string;
  issuedAt: string;
}

interface ExamAttemptRecord {
  attempts: number;
  bestPercent: number;
  passed: boolean;
}

function readJson<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(window.localStorage.getItem(key) ?? "") as T;
  } catch {
    return fallback;
  }
}

function generateCertificateId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  const year = new Date().getFullYear();
  return `JMZ-DMA-${year}-${code}`;
}

export function DominateDigitalCertificatePlayer({
  allLessons,
}: {
  allLessons: CourseLesson[];
}) {
  const [loaded, setLoaded] = useState(false);
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
  const [examRecord, setExamRecord] = useState<ExamAttemptRecord | null>(null);
  const [certificate, setCertificate] = useState<CertificateRecord | null>(
    null,
  );
  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCompletedSlugs(
        readJson(dominateDigitalProgressStorageKey, [] as string[]),
      );
      setExamRecord(
        readJson(
          dominateDigitalFinalExamStorageKey,
          {} as Record<string, ExamAttemptRecord>,
        )["final-exam"] ?? null,
      );
      setCertificate(
        readJson<CertificateRecord | null>(
          dominateDigitalCertificateStorageKey,
          null,
        ),
      );
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const firstIncompleteLesson = allLessons.find(
    (lesson) => !completedSlugs.includes(lesson.slug),
  );
  const blockers: string[] = [];
  if (firstIncompleteLesson) {
    blockers.push(
      `Fini "${firstIncompleteLesson.titleHt}" ak lòt leson ki rete yo`,
    );
  }
  if (!examRecord?.passed) {
    blockers.push("Pase Egzamen Final la (80% oswa plis)");
  }
  const eligible = loaded && blockers.length === 0;

  function issueCertificate() {
    if (!nameInput.trim()) return;
    const record: CertificateRecord = {
      studentName: nameInput.trim(),
      certificateId: generateCertificateId(),
      issuedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(
        dominateDigitalCertificateStorageKey,
        JSON.stringify(record),
      );
    } catch {
      // Certificate stays ephemeral for this session if storage is blocked.
    }
    setCertificate(record);
  }

  if (!loaded) {
    return <main className="bg-white pt-[72px]" />;
  }

  return (
    <main className="bg-white pt-[72px]">
      <div className="mx-auto max-w-[680px] px-5 pt-5 pb-16">
        <p className="text-muted mb-6 text-[12.5px] print:hidden">
          Maketing Dijital &amp; AI <span className="text-indigo-dark">·</span>{" "}
          Sètifika
        </p>

        {!eligible && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">POKO DISPONIB</p>
            <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
              Fini rès kou a pou jwenn sètifika ou.
            </h1>
            <ul className="border-border grid gap-2.5 rounded-xl border bg-[#FCFCFE] px-4.5 py-4">
              {blockers.map((blocker) => (
                <li
                  key={blocker}
                  className="text-ink text-[13.5px] leading-[1.6]"
                >
                  • {blocker}
                </li>
              ))}
            </ul>
            {firstIncompleteLesson ? (
              <Link
                href={`/academy/courses/digital-marketing-ai/learn/${firstIncompleteLesson.slug}`}
                className="bg-indigo mt-6 inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
              >
                Kontinye ak {firstIncompleteLesson.titleHt}
                <ArrowRightIcon className="size-4" />
              </Link>
            ) : (
              <Link
                href="/academy/courses/digital-marketing-ai/learn/final-exam"
                className="bg-indigo mt-6 inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
              >
                Ale nan Egzamen Final la
                <ArrowRightIcon className="size-4" />
              </Link>
            )}
          </div>
        )}

        {eligible && !certificate && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">FELISITASYON</p>
            <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
              Ou pare pou dosye konplesyon ou!
            </h1>
            <p className="text-muted mb-6 text-[15px] leading-[1.6]">
              Antre non ou jan ou vle l parèt sou dosye a.
            </p>
            <label
              htmlFor="student-name"
              className="text-ink mb-2 block text-[13.5px] font-semibold"
            >
              Non Konplè
            </label>
            <input
              id="student-name"
              type="text"
              value={nameInput}
              onChange={(event) => setNameInput(event.target.value)}
              placeholder="Non ak siyati ou"
              className="border-border focus:border-indigo mb-5 w-full rounded-xl border bg-[#FCFCFE] px-3.5 py-3 text-[14.5px] outline-none"
            />
            <button
              type="button"
              disabled={!nameInput.trim()}
              onClick={issueCertificate}
              className={cn(
                "inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold",
                !nameInput.trim()
                  ? "bg-indigo-light text-muted cursor-not-allowed"
                  : "bg-indigo cursor-pointer text-white",
              )}
            >
              <GraduationCapIcon className="size-4" />
              Jenere Dosye Ou
            </button>
          </div>
        )}

        {eligible && certificate && (
          <div>
            <div className="border-indigo relative rounded-[18px] border-2 px-4 py-7 text-center sm:px-7 sm:py-10">
              <div className="bg-indigo-light text-indigo-dark mx-auto mb-5 inline-flex size-14 items-center justify-center rounded-full">
                <StampIcon className="size-6" />
              </div>
              <p className="text-eyebrow text-indigo-dark mb-2">
                JAMEZZI ACADEMY
              </p>
              <h1 className="font-fraunces text-ink mb-1 text-[22px] leading-[1.3] font-semibold italic">
                Dosye Konplesyon Kou
              </h1>
              <p className="text-muted mb-6 text-[13.5px]">
                Maketing Dijital &amp; AI
              </p>
              <p className="text-muted mb-1.5 text-[12px] tracking-wide uppercase">
                Konfime ke
              </p>
              <p className="font-fraunces text-ink mb-6 text-[24px] font-semibold break-words sm:text-[26px]">
                {certificate.studentName}
              </p>
              <p className="text-muted mb-6 text-[14px] leading-[1.6]">
                fin konplete avèk siksè tout 20 modil yo, Pwojè Kapstòn nan, ak
                Egzamen Final Maketing Dijital &amp; AI a, ak yon nòt{" "}
                {examRecord?.bestPercent}%.
              </p>
              <div className="border-border mb-6 grid grid-cols-1 gap-4 border-t pt-5 text-left sm:grid-cols-2">
                <div>
                  <p className="text-muted text-[11px] tracking-wide uppercase">
                    Dat
                  </p>
                  <p className="text-ink text-[13.5px] font-semibold">
                    {new Date(certificate.issuedAt).toLocaleDateString(
                      "fr-HT",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-muted text-[11px] tracking-wide uppercase">
                    ID Lokal
                  </p>
                  <p className="text-ink font-lesson-mono text-[13.5px] font-semibold break-all">
                    {certificate.certificateId}
                  </p>
                </div>
              </div>
              <p className="text-muted text-[11px] leading-[1.5]">
                Dosye sa a konfime konplete kou a sou aparèy sa a — li PA yon
                lisans gouvènman, yon sètifikasyon pwofesyonèl, oswa yon dosye
                ki ka verifye piblikman sou entènèt.
              </p>
            </div>

            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center print:hidden">
              <button
                type="button"
                onClick={() => window.print()}
                className="bg-indigo inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
              >
                Enprime Dosye Ou
              </button>
              <Link
                href="/academy/courses/digital-marketing-ai"
                className="border-border text-indigo-dark inline-flex min-h-11 items-center justify-center rounded-full border bg-white px-6 py-2.5 text-center text-sm font-semibold"
              >
                Retounen nan paj kou a →
              </Link>
            </div>
            <p className="text-muted mt-4 text-[12px] leading-[1.6] print:hidden">
              ID sa a jenere epi sovgade lokalman sou aparèy ou. Platfòm sa a
              poko gen yon paj verifikasyon piblik an liy kote yon lòt moun ka
              tape ID a pou konfime l — sa ta mande yon baz done sèvè ki poko
              konstwi. Pou kounye a, li sèvi sèlman kòm yon idantifyan lokal ou
              ka montre oswa anrejistre.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
