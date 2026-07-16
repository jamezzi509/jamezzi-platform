"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { computerCheckpointStorageKey } from "@/components/academy/computer-checkpoint-player";
import { computerProgressStorageKey } from "@/components/academy/computer-essentials-lesson-list";
import { computerFinalExamStorageKey } from "@/components/academy/computer-final-exam-player";
import { computerReadinessReflectionStorageKey } from "@/components/academy/computer-readiness-reflection-player";
import { ArrowRightIcon, GraduationCapIcon, StampIcon } from "@/components/ui/icons";
import type { CourseLesson } from "@/content/computer-rebuild/schema";
import { cn } from "@/lib/cn";

const computerCertificateStorageKey = "jamezzi:computer:essentials:certificate";

interface CertificateRecord {
  studentName: string;
  certificateId: string;
  issuedAt: string;
}

interface CheckpointRecord {
  attempts: number;
  bestPercent: number;
  passed: boolean;
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
  return `JMZ-CIE-${year}-${code}`;
}

export function ComputerCertificatePlayer({
  allLessons,
}: {
  allLessons: CourseLesson[];
}) {
  const [loaded, setLoaded] = useState(false);
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
  const [checkpointRecords, setCheckpointRecords] = useState<
    Record<string, CheckpointRecord>
  >({});
  const [reflectionSaved, setReflectionSaved] = useState(false);
  const [examRecord, setExamRecord] = useState<ExamAttemptRecord | null>(null);
  const [certificate, setCertificate] = useState<CertificateRecord | null>(null);
  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCompletedSlugs(readJson(computerProgressStorageKey, [] as string[]));
      setCheckpointRecords(
        readJson(computerCheckpointStorageKey, {} as Record<string, CheckpointRecord>),
      );
      const reflections = readJson(
        computerReadinessReflectionStorageKey,
        {} as Record<string, unknown>,
      );
      setReflectionSaved(Boolean(reflections["checkpoint-4"]));
      setExamRecord(
        readJson(computerFinalExamStorageKey, {} as Record<string, ExamAttemptRecord>)[
          "final-exam"
        ] ?? null,
      );
      setCertificate(readJson<CertificateRecord | null>(computerCertificateStorageKey, null));
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const firstIncompleteLesson = allLessons.find(
    (lesson) => !completedSlugs.includes(lesson.slug),
  );
  const unpassedCheckpoint = ["checkpoint-1", "checkpoint-2", "checkpoint-3"].find(
    (id) => !checkpointRecords[id]?.passed,
  );
  const blockers: string[] = [];
  if (firstIncompleteLesson) {
    blockers.push(`Fini "${firstIncompleteLesson.titleHt}" ak lòt leson ki rete yo`);
  }
  if (unpassedCheckpoint) {
    blockers.push(
      `Pase Confidence Checkpoint ${unpassedCheckpoint.replace("checkpoint-", "")}`,
    );
  }
  if (!reflectionSaved) {
    blockers.push("Konplete Confidence Checkpoint 4 (Chèk Prepare Dijital Ou)");
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
      window.localStorage.setItem(computerCertificateStorageKey, JSON.stringify(record));
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
          Computer &amp; Internet Essentials <span className="text-indigo-dark">·</span>{" "}
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
                <li key={blocker} className="text-ink text-[13.5px] leading-[1.6]">
                  • {blocker}
                </li>
              ))}
            </ul>
            {firstIncompleteLesson && (
              <Link
                href={`/academy/courses/computer-internet-essentials/rebuild/${firstIncompleteLesson.slug}`}
                className="bg-indigo mt-6 inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white"
              >
                Kontinye ak {firstIncompleteLesson.titleHt}
                <ArrowRightIcon className="size-4" />
              </Link>
            )}
          </div>
        )}

        {eligible && !certificate && (
          <div>
            <p className="text-eyebrow text-indigo-dark mb-3">FELISITASYON</p>
            <h1 className="font-fraunces text-ink mb-3 text-[26px] leading-[1.2] font-semibold italic">
              Ou pare pou sètifika ou!
            </h1>
            <p className="text-muted mb-6 text-[15px] leading-[1.6]">
              Antre non ou jan ou vle l parèt sou sètifika a.
            </p>
            <label htmlFor="student-name" className="text-ink mb-2 block text-[13.5px] font-semibold">
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
              Jenere Sètifika Ou
            </button>
          </div>
        )}

        {eligible && certificate && (
          <div>
            <div className="border-indigo relative rounded-[18px] border-2 px-7 py-10 text-center">
              <div className="bg-indigo-light text-indigo-dark mx-auto mb-5 inline-flex size-14 items-center justify-center rounded-full">
                <StampIcon className="size-6" />
              </div>
              <p className="text-eyebrow text-indigo-dark mb-2">JAMEZZI ACADEMY</p>
              <h1 className="font-fraunces text-ink mb-1 text-[22px] leading-[1.3] font-semibold italic">
                Sètifika Fòmasyon
              </h1>
              <p className="text-muted mb-6 text-[13.5px]">
                Òdinatè ak Entènèt Esansyèl
              </p>
              <p className="text-muted mb-1.5 text-[12px] tracking-wide uppercase">
                Sètifye ke
              </p>
              <p className="font-fraunces text-ink mb-6 text-[26px] font-semibold">
                {certificate.studentName}
              </p>
              <p className="text-muted mb-6 text-[14px] leading-[1.6]">
                fin konplete avèk siksè tout 14 modil, kat Confidence Checkpoint,
                Kapstòn nan, ak Egzamen Final Computer &amp; Internet Essentials la,
                ak yon nòt {examRecord?.bestPercent}%.
              </p>
              <div className="border-border mb-6 grid grid-cols-2 gap-4 border-t pt-5 text-left">
                <div>
                  <p className="text-muted text-[11px] tracking-wide uppercase">Dat</p>
                  <p className="text-ink text-[13.5px] font-semibold">
                    {new Date(certificate.issuedAt).toLocaleDateString("fr-HT", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-muted text-[11px] tracking-wide uppercase">
                    Kòd Sètifika
                  </p>
                  <p className="text-ink font-lesson-mono text-[13.5px] font-semibold">
                    {certificate.certificateId}
                  </p>
                </div>
              </div>
              <p className="text-muted text-[11px] leading-[1.5]">
                Sètifika sa a konfime konplete kou a — li PA yon lisans gouvènman
                ni yon sètifikasyon repare pwofesyonèl.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
              <button
                type="button"
                onClick={() => window.print()}
                className="bg-indigo inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
              >
                Enprime Sètifika Ou
              </button>
            </div>
            <p className="text-muted mt-4 text-[12px] leading-[1.6] print:hidden">
              Kòd sètifika sa a jenere epi sovgade lokalman sou aparèy ou. Platfòm
              sa a poko gen yon paj verifikasyon piblik an liy kote yon lòt moun
              ka tape kòd la pou konfime l — sa ta mande yon baz done sèvè ki poko
              konstwi. Pou kounye a, kòd la sèvi kòm yon idantifyan inik ou ka
              montre oswa anrejistre.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
