"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Locale = "en" | "fr" | "ht";
type Stage =
  "source" | "download" | "installer" | "approval" | "warning" | "success";

const copy = {
  en: {
    lesson: "Install Without Lowering Security",
    module: "Apps and Settings",
    mission:
      "Install PhotoFix from its verified publisher without accepting unwanted software or weakening Windows security.",
    exit: "Course overview",
    progress: "Mission progress",
    task: "Current task",
    coach: "Safety coach",
    startTask: "Choose the trustworthy source.",
    sourceTitle: "Where should you download PhotoFix?",
    sourceHint: "Inspect the address and publisher before selecting a result.",
    official: "Official publisher",
    officialDomain: "photofix.example/download",
    store: "Windows app store",
    storeDetail: "Publisher: Northstar Imaging",
    mirror: "Fast Free Downloads",
    mirrorDomain: "photofix-free.example",
    sponsored: "Sponsored downloader",
    ad: "ADVERTISEMENT",
    download: "Download for Windows",
    filename: "PhotoFixSetup.exe",
    downloaded: "Download complete",
    openFile: "Open downloaded file",
    browserDownloads: "Downloads",
    installerTitle: "PhotoFix Setup",
    chooseOptions: "Review optional offers",
    core: "PhotoFix application files",
    required: "Required",
    toolbar: "Install SearchPlus browser toolbar",
    homepage: "Make SearchPlus my browser homepage",
    analytics: "Send anonymous usage statistics",
    continue: "Continue",
    install: "Install",
    uacTitle: "User Account Control",
    uacQuestion:
      "Do you want to allow this app to make changes to your device?",
    app: "App",
    publisher: "Verified publisher",
    publisherName: "Northstar Imaging LLC",
    fileOrigin: "File origin",
    hardDrive: "Hard drive on this computer",
    yes: "Yes",
    no: "No",
    warningTitle: "PhotoFix Update Helper",
    warningText:
      "Windows Security is blocking enhanced features. Turn off real-time protection to finish installation.",
    disable: "Turn off protection",
    keep: "Keep protection on",
    successTitle: "Installation completed safely",
    successText:
      "You verified the publisher, rejected bundled software, approved an expected administrator prompt, and kept Windows protection enabled.",
    finish: "Finish lesson",
    reset: "Restart simulation",
    next: "Next lesson unlocked",
    feedbackOfficial:
      "Good. The domain and publisher agree. Downloading from here is explainable.",
    feedbackStore:
      "This is also a reasonable source because the publisher matches. For this mission, use the official publisher result.",
    feedbackMirror:
      "Stop. The name looks familiar, but the domain is unrelated to the publisher. A mirror may repackage the installer.",
    feedbackAd:
      "That is an advertisement for a downloader, not the PhotoFix publisher. Close it and inspect the address.",
    feedbackOpen:
      "The file name matches the app you requested. Open it to inspect the installer and publisher.",
    feedbackBundle:
      "Not yet. SearchPlus is unrelated bundled software. Clear both SearchPlus boxes before continuing.",
    feedbackInstaller:
      "Correct. The required application stays selected while unrelated browser changes are removed.",
    feedbackNo:
      "Choosing No is safe, but it cancels the installation. Because you deliberately started this verified installer, review the details and choose Yes.",
    feedbackYes:
      "Correct. The app name, verified publisher, and action you started all agree.",
    feedbackDisable:
      "Stop. Legitimate installation should not require disabling Windows Security. Keep protection enabled.",
    feedbackKeep:
      "Correct. You refused an unsafe request and kept protection enabled.",
    differentWindows: "Your Windows may look different",
    versionNote:
      "Windows 10 and older versions may place downloads or security prompts differently. Use the app name, publisher, purpose, and button labels as recognition clues.",
  },
  fr: {
    lesson: "Installer sans réduire la sécurité",
    module: "Applications et paramètres",
    mission:
      "Installez PhotoFix depuis son éditeur vérifié sans accepter de logiciel indésirable ni affaiblir la sécurité de Windows.",
    exit: "Aperçu du cours",
    progress: "Progression de la mission",
    task: "Tâche actuelle",
    coach: "Guide de sécurité",
    startTask: "Choisissez la source fiable.",
    sourceTitle: "Où devez-vous télécharger PhotoFix ?",
    sourceHint: "Vérifiez l’adresse et l’éditeur avant de choisir.",
    official: "Éditeur officiel",
    officialDomain: "photofix.example/download",
    store: "Boutique d’applications Windows",
    storeDetail: "Éditeur : Northstar Imaging",
    mirror: "Téléchargements gratuits rapides",
    mirrorDomain: "photofix-free.example",
    sponsored: "Programme de téléchargement sponsorisé",
    ad: "PUBLICITÉ",
    download: "Télécharger pour Windows",
    filename: "PhotoFixSetup.exe",
    downloaded: "Téléchargement terminé",
    openFile: "Ouvrir le fichier téléchargé",
    browserDownloads: "Téléchargements",
    installerTitle: "Installation de PhotoFix",
    chooseOptions: "Vérifiez les offres facultatives",
    core: "Fichiers de l’application PhotoFix",
    required: "Requis",
    toolbar: "Installer la barre SearchPlus",
    homepage: "Définir SearchPlus comme page d’accueil",
    analytics: "Envoyer des statistiques anonymes",
    continue: "Continuer",
    install: "Installer",
    uacTitle: "Contrôle de compte d’utilisateur",
    uacQuestion:
      "Voulez-vous autoriser cette application à modifier votre appareil ?",
    app: "Application",
    publisher: "Éditeur vérifié",
    publisherName: "Northstar Imaging LLC",
    fileOrigin: "Origine du fichier",
    hardDrive: "Disque dur de cet ordinateur",
    yes: "Oui",
    no: "Non",
    warningTitle: "Assistant de mise à jour PhotoFix",
    warningText:
      "La sécurité Windows bloque des fonctions avancées. Désactivez la protection en temps réel.",
    disable: "Désactiver la protection",
    keep: "Garder la protection",
    successTitle: "Installation effectuée en toute sécurité",
    successText:
      "Vous avez vérifié l’éditeur, refusé les logiciels groupés, approuvé une demande attendue et conservé la protection Windows.",
    finish: "Terminer la leçon",
    reset: "Recommencer",
    next: "Leçon suivante déverrouillée",
    feedbackOfficial: "Bien. Le domaine et l’éditeur correspondent.",
    feedbackStore:
      "Cette source est raisonnable, mais utilisez l’éditeur officiel pour cette mission.",
    feedbackMirror:
      "Arrêtez. Le domaine n’appartient pas à l’éditeur et le programme peut être modifié.",
    feedbackAd: "C’est une publicité, pas l’éditeur de PhotoFix.",
    feedbackOpen:
      "Le nom du fichier correspond. Ouvrez-le pour vérifier l’installation.",
    feedbackBundle: "Pas encore. Décochez les deux offres SearchPlus.",
    feedbackInstaller:
      "Correct. L’application reste sélectionnée et les ajouts inutiles sont refusés.",
    feedbackNo:
      "Non annule sans danger. Ici, l’action et l’éditeur correspondent : choisissez Oui.",
    feedbackYes:
      "Correct. L’application, l’éditeur et votre action correspondent.",
    feedbackDisable:
      "Arrêtez. Ne désactivez pas la sécurité Windows pour installer.",
    feedbackKeep: "Correct. La protection reste active.",
    differentWindows: "Votre Windows peut être différent",
    versionNote:
      "Windows 10 et les versions plus anciennes peuvent placer ces commandes ailleurs. Utilisez le nom, l’éditeur, le but et les libellés comme indices.",
  },
  ht: {
    lesson: "Enstale san diminye sekirite",
    module: "Aplikasyon ak paramèt",
    mission:
      "Enstale PhotoFix nan men piblikatè verifye a san aksepte lojisyèl ou pa bezwen oswa febli sekirite Windows.",
    exit: "Apèsi kou a",
    progress: "Pwogrè misyon an",
    task: "Travay kounye a",
    coach: "Gid sekirite",
    startTask: "Chwazi sous ou ka fè konfyans lan.",
    sourceTitle: "Ki kote ou dwe telechaje PhotoFix?",
    sourceHint: "Gade adrès la ak piblikatè a anvan ou chwazi.",
    official: "Piblikatè ofisyèl",
    officialDomain: "photofix.example/download",
    store: "Magazen aplikasyon Windows",
    storeDetail: "Piblikatè: Northstar Imaging",
    mirror: "Telechajman gratis rapid",
    mirrorDomain: "photofix-free.example",
    sponsored: "Telechajè piblisite",
    ad: "PIBLISITE",
    download: "Telechaje pou Windows",
    filename: "PhotoFixSetup.exe",
    downloaded: "Telechajman fini",
    openFile: "Louvri fichye telechaje a",
    browserDownloads: "Telechajman",
    installerTitle: "Enstalasyon PhotoFix",
    chooseOptions: "Verifye òf ki pa obligatwa yo",
    core: "Fichye aplikasyon PhotoFix",
    required: "Obligatwa",
    toolbar: "Enstale ba SearchPlus",
    homepage: "Mete SearchPlus kòm paj dakèy",
    analytics: "Voye estatistik anonim",
    continue: "Kontinye",
    install: "Enstale",
    uacTitle: "Kontwòl kont itilizatè",
    uacQuestion: "Èske ou vle pèmèt aplikasyon sa a fè chanjman sou aparèy la?",
    app: "Aplikasyon",
    publisher: "Piblikatè verifye",
    publisherName: "Northstar Imaging LLC",
    fileOrigin: "Orijin fichye",
    hardDrive: "Disk di òdinatè sa a",
    yes: "Wi",
    no: "Non",
    warningTitle: "Asistan mizajou PhotoFix",
    warningText:
      "Sekirite Windows ap bloke kèk fonksyon. Fèmen pwoteksyon an pou fini.",
    disable: "Fèmen pwoteksyon",
    keep: "Kite pwoteksyon limen",
    successTitle: "Enstalasyon an fini an sekirite",
    successText:
      "Ou verifye piblikatè a, refize lojisyèl anplis, apwouve yon demann ou te espere, epi kite pwoteksyon Windows limen.",
    finish: "Fini leson an",
    reset: "Rekòmanse simulasyon an",
    next: "Pwochen leson an debloke",
    feedbackOfficial: "Bon. Domèn nan ak piblikatè a mache ansanm.",
    feedbackStore:
      "Sous sa a rezonab tou, men sèvi ak piblikatè ofisyèl la pou misyon sa a.",
    feedbackMirror:
      "Kanpe. Domèn nan pa pou piblikatè a; yo ka chanje enstalatè a.",
    feedbackAd: "Sa se yon piblisite, se pa piblikatè PhotoFix la.",
    feedbackOpen: "Non fichye a mache. Louvri li pou verifye enstalatè a.",
    feedbackBundle: "Poko. Dekoche toude òf SearchPlus yo.",
    feedbackInstaller:
      "Kòrèk. Aplikasyon an rete seleksyone pandan ou refize bagay ou pa bezwen.",
    feedbackNo:
      "Non anile enstalasyon an san danje. Isit la tout detay yo mache; chwazi Wi.",
    feedbackYes:
      "Kòrèk. Non aplikasyon an, piblikatè a ak aksyon ou te kòmanse a mache ansanm.",
    feedbackDisable: "Kanpe. Pa fèmen Sekirite Windows pou enstale.",
    feedbackKeep: "Kòrèk. Ou kite pwoteksyon an limen.",
    differentWindows: "Windows pa w la ka diferan",
    versionNote:
      "Windows 10 ak vèsyon ki pi ansyen yo ka mete kontwòl sa yo yon lòt kote. Sèvi ak non, piblikatè, objektif ak etikèt bouton yo kòm siy.",
  },
} as const;

export function WindowsSafeInstallSimulator({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [locale, setLocale] = useState<Locale>("en");
  const [stage, setStage] = useState<Stage>("source");
  const [feedback, setFeedback] = useState<string>(copy.en.startTask);
  const [tone, setTone] = useState<"neutral" | "error" | "good">("neutral");
  const [toolbar, setToolbar] = useState(true);
  const [homepage, setHomepage] = useState(true);
  const [analytics, setAnalytics] = useState(true);
  const [completed, setCompleted] = useState(false);
  const t = copy[locale];
  const stages: Stage[] = [
    "source",
    "download",
    "installer",
    "approval",
    "warning",
    "success",
  ];
  const progress = Math.round(
    (stages.indexOf(stage) / (stages.length - 1)) * 100,
  );

  function message(text: string, nextTone: "neutral" | "error" | "good") {
    setFeedback(text);
    setTone(nextTone);
  }
  function selectSource(kind: "official" | "store" | "mirror" | "ad") {
    if (kind === "official") {
      setStage("download");
      message(t.feedbackOfficial, "good");
    } else if (kind === "store") message(t.feedbackStore, "neutral");
    else if (kind === "mirror") message(t.feedbackMirror, "error");
    else message(t.feedbackAd, "error");
  }
  function reset() {
    setStage("source");
    setFeedback(t.startTask);
    setTone("neutral");
    setToolbar(true);
    setHomepage(true);
    setAnalytics(true);
    setCompleted(false);
  }
  function finish() {
    if (!completed) {
      setCompleted(true);
      onComplete();
    }
  }

  return (
    <main className="min-h-screen bg-[#0c1118] text-white">
      <header className="border-b border-white/10 bg-[#101720] px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
          <Link
            href="/academy/courses/computer-internet-essentials"
            className="font-display text-2xl font-semibold"
          >
            Jamezzi<span className="text-[#7770ff]">.</span>
          </Link>
          <div className="flex items-center gap-2">
            <label className="sr-only" htmlFor="sim-language">
              Language
            </label>
            <select
              id="sim-language"
              value={locale}
              onChange={(event) => {
                const next = event.target.value as Locale;
                setLocale(next);
                setFeedback(copy[next].startTask);
                setTone("neutral");
              }}
              className="rounded-lg border border-white/15 bg-[#18212c] px-3 py-2 text-sm"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ht">Kreyòl</option>
            </select>
            <Link
              href="/academy/courses/computer-internet-essentials"
              className="hidden rounded-lg border border-white/15 px-3 py-2 text-sm text-[#d8dee8] sm:block"
            >
              ← {t.exit}
            </Link>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1500px] gap-4 p-3 sm:p-5 xl:grid-cols-[260px_minmax(0,1fr)_300px]">
        <aside className="rounded-2xl border border-white/10 bg-[#121a24] p-5">
          <p className="text-xs font-bold tracking-[.14em] text-[#7f78ff] uppercase">
            {t.module}
          </p>
          <h1 className="mt-3 text-xl leading-tight font-bold">{t.lesson}</h1>
          <p className="mt-4 text-sm leading-relaxed text-[#aeb8c6]">
            {t.mission}
          </p>
          <div className="mt-7">
            <div className="flex justify-between text-xs text-[#9da8b8]">
              <span>{t.progress}</span>
              <strong>{progress}%</strong>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#283342]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#5bd5ba] to-[#7d72ff] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <ol className="mt-7 space-y-3 text-sm">
            {stages.slice(0, -1).map((item, index) => (
              <li
                key={item}
                className={cn(
                  "flex items-center gap-3",
                  index <= stages.indexOf(stage)
                    ? "text-white"
                    : "text-[#677384]",
                )}
              >
                <span
                  className={cn(
                    "flex size-7 items-center justify-center rounded-full border text-xs font-bold",
                    index < stages.indexOf(stage)
                      ? "border-[#55d2ae] bg-[#173e36] text-[#6ce4c1]"
                      : index === stages.indexOf(stage)
                        ? "border-[#8178ff] bg-[#292454]"
                        : "border-[#3a4554]",
                  )}
                >
                  {index < stages.indexOf(stage) ? "✓" : index + 1}
                </span>
                {
                  [
                    t.sourceTitle,
                    t.downloaded,
                    t.chooseOptions,
                    t.uacTitle,
                    t.warningTitle,
                  ][index]
                }
              </li>
            ))}
          </ol>
        </aside>

        <section className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#17202b] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#202a36] px-4 py-3">
            <div>
              <p className="text-xs font-bold tracking-[.12em] text-[#8f88ff] uppercase">
                {t.task}
              </p>
              <p className="mt-1 text-sm text-[#dce2eb]">
                {stage === "source"
                  ? t.startTask
                  : stage === "download"
                    ? t.openFile
                    : stage === "installer"
                      ? t.chooseOptions
                      : stage === "approval"
                        ? t.uacQuestion
                        : stage === "warning"
                          ? t.keep
                          : t.successTitle}
              </p>
            </div>
            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-white/15 px-3 py-2 text-xs text-[#c5ceda]"
            >
              ↻ {t.reset}
            </button>
          </div>
          <div className="min-h-[600px] bg-[#dfe9f5] p-3 text-[#17202b] sm:p-6">
            {stage === "source" && (
              <BrowserSource t={t} onChoose={selectSource} />
            )}
            {stage === "download" && (
              <DownloadPanel
                t={t}
                onOpen={() => {
                  setStage("installer");
                  message(t.feedbackOpen, "good");
                }}
              />
            )}
            {stage === "installer" && (
              <Installer
                t={t}
                toolbar={toolbar}
                homepage={homepage}
                analytics={analytics}
                setToolbar={setToolbar}
                setHomepage={setHomepage}
                setAnalytics={setAnalytics}
                onContinue={() => {
                  if (toolbar || homepage) message(t.feedbackBundle, "error");
                  else {
                    setStage("approval");
                    message(t.feedbackInstaller, "good");
                  }
                }}
              />
            )}
            {stage === "approval" && (
              <Approval
                t={t}
                onNo={() => message(t.feedbackNo, "neutral")}
                onYes={() => {
                  setStage("warning");
                  message(t.feedbackYes, "good");
                }}
              />
            )}
            {stage === "warning" && (
              <SecurityWarning
                t={t}
                onDisable={() => message(t.feedbackDisable, "error")}
                onKeep={() => {
                  setStage("success");
                  message(t.feedbackKeep, "good");
                }}
              />
            )}
            {stage === "success" && (
              <SuccessScreen t={t} completed={completed} onFinish={finish} />
            )}
          </div>
        </section>

        <aside className="space-y-4">
          <div
            className={cn(
              "rounded-2xl border p-5",
              tone === "error"
                ? "border-[#f07178]/60 bg-[#351d25]"
                : tone === "good"
                  ? "border-[#56d2ad]/50 bg-[#14332d]"
                  : "border-white/10 bg-[#121a24]",
            )}
          >
            <p className="text-xs font-bold tracking-[.14em] text-[#9f98ff] uppercase">
              {t.coach}
            </p>
            <p
              className="mt-3 text-sm leading-relaxed text-[#e2e7ee]"
              role="status"
              aria-live="polite"
            >
              {feedback}
            </p>
          </div>
          <details className="rounded-2xl border border-white/10 bg-[#121a24] p-5">
            <summary className="cursor-pointer font-semibold">
              {t.differentWindows}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[#aeb8c6]">
              {t.versionNote}
            </p>
          </details>
        </aside>
      </div>
    </main>
  );
}

type T = (typeof copy)[Locale];
function Window({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-[#8fa0b3] bg-white shadow-[0_25px_70px_rgba(22,41,64,.25)]">
      <div className="flex items-center justify-between border-b border-[#c7d0db] bg-[#f7f9fb] px-4 py-2 text-sm font-semibold">
        <span>{title}</span>
        <span className="tracking-[.3em] text-[#647285]">— □ ×</span>
      </div>
      {children}
    </div>
  );
}
function BrowserSource({
  t,
  onChoose,
}: {
  t: T;
  onChoose: (kind: "official" | "store" | "mirror" | "ad") => void;
}) {
  const results = [
    ["official", t.official, t.officialDomain, "Northstar Imaging"],
    ["store", t.store, t.storeDetail, "Microsoft"],
    ["mirror", t.mirror, t.mirrorDomain, "Unknown publisher"],
    ["ad", t.sponsored, t.ad, "QuickDownload LLC"],
  ] as const;
  return (
    <Window title="Browser">
      <div className="border-b bg-[#edf3f8] p-3">
        <div className="rounded-full border border-[#aebbc9] bg-white px-4 py-2 text-sm">
          Search: PhotoFix official download
        </div>
      </div>
      <div className="p-4 sm:p-7">
        <h2 className="text-xl font-bold">{t.sourceTitle}</h2>
        <p className="mt-1 text-sm text-[#5d6a79]">{t.sourceHint}</p>
        <div className="mt-5 grid gap-3">
          {results.map(([kind, title, domain, publisher]) => (
            <button
              key={kind}
              type="button"
              onClick={() => onChoose(kind)}
              className="rounded-xl border border-[#cbd5df] p-4 text-left hover:border-[#417bd8] hover:bg-[#f4f8ff]"
            >
              <div className="flex items-center justify-between gap-3">
                <strong>{title}</strong>
                {kind === "ad" && (
                  <span className="rounded bg-[#f4dfad] px-2 py-1 text-[10px] font-bold">
                    {t.ad}
                  </span>
                )}
              </div>
              <p
                className={cn(
                  "mt-1 text-sm",
                  kind === "mirror" || kind === "ad"
                    ? "text-[#a33d46]"
                    : "text-[#28775b]",
                )}
              >
                {domain}
              </p>
              <p className="mt-2 text-xs text-[#657383]">
                Publisher: {publisher}
              </p>
            </button>
          ))}
        </div>
      </div>
    </Window>
  );
}
function DownloadPanel({ t, onOpen }: { t: T; onOpen: () => void }) {
  return (
    <Window title={t.browserDownloads}>
      <div className="p-6 sm:p-10">
        <div className="rounded-xl border border-[#b8c5d2] bg-[#f5f8fb] p-5">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-lg bg-[#4169a8] font-bold text-white">
              EXE
            </div>
            <div className="min-w-0 flex-1">
              <strong className="block truncate">{t.filename}</strong>
              <span className="text-sm text-[#587063]">
                {t.downloaded} · Northstar Imaging
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpen}
            className="mt-5 rounded-md bg-[#1467c7] px-5 py-2.5 font-semibold text-white"
          >
            {t.openFile}
          </button>
        </div>
      </div>
    </Window>
  );
}
function Installer({
  t,
  toolbar,
  homepage,
  analytics,
  setToolbar,
  setHomepage,
  setAnalytics,
  onContinue,
}: {
  t: T;
  toolbar: boolean;
  homepage: boolean;
  analytics: boolean;
  setToolbar: (v: boolean) => void;
  setHomepage: (v: boolean) => void;
  setAnalytics: (v: boolean) => void;
  onContinue: () => void;
}) {
  return (
    <Window title={t.installerTitle}>
      <div className="grid sm:grid-cols-[190px_1fr]">
        <div className="bg-gradient-to-b from-[#2b6cb0] to-[#1b3d6f] p-6 text-white">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-white/15 text-2xl font-bold">
            PF
          </div>
          <h2 className="mt-5 text-xl font-bold">PhotoFix</h2>
          <p className="mt-2 text-sm text-blue-100">Northstar Imaging LLC</p>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold">{t.chooseOptions}</h2>
          <div className="mt-5 space-y-3">
            <label className="flex items-start gap-3 rounded-lg bg-[#edf3f8] p-3">
              <input type="checkbox" checked disabled className="mt-1 size-5" />
              <span>
                <strong>{t.core}</strong>
                <small className="block text-[#667482]">{t.required}</small>
              </span>
            </label>
            {[
              [toolbar, setToolbar, t.toolbar],
              [homepage, setHomepage, t.homepage],
              [analytics, setAnalytics, t.analytics],
            ].map(([checked, setter, label]) => (
              <label
                key={String(label)}
                className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#d0d8e1] p-3"
              >
                <input
                  type="checkbox"
                  checked={Boolean(checked)}
                  onChange={(e) =>
                    (setter as (v: boolean) => void)(e.target.checked)
                  }
                  className="mt-1 size-5"
                />
                <span>{String(label)}</span>
              </label>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onContinue}
              className="rounded-md bg-[#1467c7] px-5 py-2.5 font-semibold text-white"
            >
              {t.continue}
            </button>
          </div>
        </div>
      </div>
    </Window>
  );
}
function Approval({
  t,
  onNo,
  onYes,
}: {
  t: T;
  onNo: () => void;
  onYes: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[540px] max-w-3xl items-center justify-center rounded-xl bg-[#1768b3] p-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-2xl">
        <div className="flex gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f3c63d] text-2xl font-bold">
            ?
          </div>
          <div>
            <h2 className="text-xl font-bold">{t.uacTitle}</h2>
            <p className="mt-2">{t.uacQuestion}</p>
          </div>
        </div>
        <dl className="mt-6 grid grid-cols-[130px_1fr] gap-2 rounded-lg bg-[#eef3f7] p-4 text-sm">
          <dt>{t.app}</dt>
          <dd className="font-semibold">PhotoFix Setup</dd>
          <dt>{t.publisher}</dt>
          <dd className="font-semibold">{t.publisherName}</dd>
          <dt>{t.fileOrigin}</dt>
          <dd>{t.hardDrive}</dd>
        </dl>
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onNo}
            className="rounded-md border border-[#8493a2] px-6 py-2"
          >
            {t.no}
          </button>
          <button
            type="button"
            onClick={onYes}
            className="rounded-md bg-[#1467c7] px-6 py-2 font-semibold text-white"
          >
            {t.yes}
          </button>
        </div>
      </div>
    </div>
  );
}
function SecurityWarning({
  t,
  onDisable,
  onKeep,
}: {
  t: T;
  onDisable: () => void;
  onKeep: () => void;
}) {
  return (
    <Window title={t.warningTitle}>
      <div className="p-6 sm:p-10">
        <div className="rounded-xl border border-[#df9b56] bg-[#fff8e8] p-5">
          <h2 className="text-xl font-bold text-[#7c4317]">{t.warningTitle}</h2>
          <p className="mt-3 leading-relaxed">{t.warningText}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onDisable}
              className="rounded-md border border-[#b44c4c] px-5 py-2.5 font-semibold text-[#a43737]"
            >
              {t.disable}
            </button>
            <button
              type="button"
              onClick={onKeep}
              className="rounded-md bg-[#176b4c] px-5 py-2.5 font-semibold text-white"
            >
              {t.keep}
            </button>
          </div>
        </div>
      </div>
    </Window>
  );
}
function SuccessScreen({
  t,
  completed,
  onFinish,
}: {
  t: T;
  completed: boolean;
  onFinish: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[540px] max-w-3xl items-center justify-center">
      <div className="w-full rounded-2xl border border-[#87c8af] bg-white p-7 text-center shadow-xl sm:p-12">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#daf5e8] text-4xl font-bold text-[#19744f]">
          ✓
        </div>
        <h2 className="mt-6 text-2xl font-bold">{t.successTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#596777]">
          {t.successText}
        </p>
        <button
          type="button"
          onClick={onFinish}
          className="mt-7 rounded-md bg-[#176b4c] px-6 py-3 font-bold text-white"
        >
          {completed ? t.next : t.finish}
        </button>
      </div>
    </div>
  );
}
