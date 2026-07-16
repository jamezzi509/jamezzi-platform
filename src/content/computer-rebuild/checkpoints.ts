import type { Checkpoint } from "@/content/computer-rebuild/schema";

/**
 * Confidence checkpoints per computer-internet-essentials-master-brief.md
 * Section 8.4: larger scenarios combining multiple skills, 80% passing
 * recommendation, unlimited retries with targeted lesson recommendations.
 */
export const computerRebuildCheckpoints: Checkpoint[] = [
  {
    id: "checkpoint-1",
    order: 1,
    afterModuleId: "m3",
    titleHt: "Confidence Checkpoint 1",
    titleEn: "Confidence Checkpoint 1",
    scenario:
      "Ou fin konplete twa premye modil yo. Nan checkpoint sa a, ou pral demontre ou ka konbine tout konpetans yo ansanm nan yon sèl seri sitiyasyon reyèl — jan ou ta fè si ou t ap ede yon zanmi oswa itilize pwòp òdinatè ou san èd. Sa a se yon rekòmandasyon, pa yon egzamen ki bloke ou — ou ka eseye ankò otan fwa ou vle.",
    skillsCombined: [
      "Idantifye Platfòm",
      "Navigasyon Debaz",
      "Tape",
      "Kontwòl Fennèt",
      "Paramèt",
      "Screenshot",
    ],
    passingPercent: 80,
    questions: [
      {
        skillTag: "platform_identification",
        skillLabel: "Idantifye Platfòm",
        recommendedLessonSlug: "windows-macos-android-ios",
        question: {
          kind: "multiple_choice",
          prompt:
            "Ou wè yon bouton Windows nan kwen anba agoch ekran an, ak yon taskbar ki rete nan pati anba a. Ki sistèm opere sa a?",
          options: ["Windows", "macOS", "Android", "iOS"],
          correctIndex: 0,
          explanation:
            "Bouton Windows nan kwen anba agoch la ak taskbar la se de siy klè yon sistèm Windows.",
        },
      },
      {
        skillTag: "basic_navigation",
        skillLabel: "Navigasyon Debaz",
        recommendedLessonSlug: "cheche-aplikasyon-ak-paramet",
        question: {
          kind: "scenario_decision",
          prompt:
            "Ou bezwen louvri Kalkilatris (Calculator) men ou pa wè ikòn li sou Desktop la. Ki sa ki pi bon pou fè?",
          options: [
            "Rechèche non aplikasyon an nan bwat rechèch la",
            "Etenn epi rale limen òdinatè a ankò",
            "Kreye yon nouvo dosye ki rele 'Calculator'",
            "Chanje modpas ou",
          ],
          correctIndex: 0,
          explanation:
            "Rechèch la jwenn nenpòt aplikasyon ki enstale, menm si li pa gen rakousi sou Desktop la.",
        },
      },
      {
        skillTag: "typing",
        skillLabel: "Tape",
        recommendedLessonSlug: "kat-klavye-a",
        question: {
          kind: "match_term",
          prompt: "Matche chak tikè klavye ak sa li fè.",
          pairs: [
            { term: "Shift", meaning: "Ekri an majiskil oswa jwenn senbòl anwo yon tou" },
            { term: "Backspace", meaning: "Efase karaktè agoch kursè a" },
            { term: "Caps Lock", meaning: "Kenbe tout lèt an majiskil" },
          ],
          explanation:
            "Shift, Backspace, ak Caps Lock se twa tikè debaz ou itilize chak fwa ou tape.",
        },
      },
      {
        skillTag: "window_control",
        skillLabel: "Kontwòl Fennèt",
        recommendedLessonSlug: "louvri-chanje-feme-fennet",
        question: {
          kind: "order_steps",
          prompt:
            "Mete etap yo nan lòd kòrèk pou chanje ant de aplikasyon ki louvri epi fèmen yonn.",
          steps: [
            "Louvri de aplikasyon diferan",
            "Peze Alt+Tab (oswa Cmd+Tab) pou chanje ant yo",
            "Idantifye aplikasyon ou vle fèmen",
            "Fèmen aplikasyon an ak bouton X (oswa wouj)",
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            "Ou dwe gen de aplikasyon louvri anvan ou chanje ant yo, epi idantifye avan ou fèmen.",
        },
      },
      {
        skillTag: "settings",
        skillLabel: "Paramèt",
        recommendedLessonSlug: "paramet-ou-dwe-konnen",
        question: {
          kind: "multiple_choice",
          prompt:
            "Ki kote ou ale pou ogmante volim ekran an oswa chanje rezo Wi-Fi ou konekte a?",
          options: [
            "Nan Paramèt (Settings)",
            "Nan Recycle Bin/Trash",
            "Nan yon fichye PDF",
            "Nan bwat imèl ou",
          ],
          correctIndex: 0,
          explanation:
            "Paramèt (Settings) se kote ou jwenn kontwòl tankou volim, afichaj, ak konesyon Wi-Fi.",
        },
      },
      {
        skillTag: "screenshot",
        skillLabel: "Screenshot",
        recommendedLessonSlug: "screenshot-ak-anrejistreman-ekran",
        question: {
          kind: "scenario_decision",
          prompt:
            "Ou vle montre yon zanmi yon mesaj erè ki parèt sou ekran ou, san ou pa retape tout tèks la.",
          options: [
            "Pran yon screenshot epi voye l",
            "Li mesaj la a wot vwa nan telefòn",
            "Efase mesaj la epi kontinye",
            "Etenn òdinatè a",
          ],
          correctIndex: 0,
          explanation:
            "Yon screenshot kaptire egzakteman sa ki sou ekran an — pi rapid ak pi presi pase retape tèks.",
        },
      },
    ],
  },
];

export function getComputerRebuildCheckpoint(id: string) {
  return computerRebuildCheckpoints.find((checkpoint) => checkpoint.id === id);
}
