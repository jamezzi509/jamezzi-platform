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
  {
    id: "checkpoint-2",
    order: 2,
    afterModuleId: "m6",
    titleHt: "Confidence Checkpoint 2",
    titleEn: "Confidence Checkpoint 2",
    scenario:
      "Ou fin konplete sis premye modil yo. Checkpoint sa a konbine jwenn yon fichye, louvri yon PDF, konekte sou entènèt, telechaje, sovgade, ak rekonèt yon sous aplikasyon san danje — tout konpetans ou itilize ansanm nan lavi reyèl. Sa a se yon rekòmandasyon, pa yon egzamen ki bloke ou — ou ka eseye ankò otan fwa ou vle.",
    skillsCombined: [
      "Jwenn Yon Fichye",
      "Louvri PDF",
      "Konekte Sou Entènèt",
      "Telechaje",
      "Sovgade",
      "Sous Aplikasyon San Danje",
    ],
    passingPercent: 80,
    questions: [
      {
        skillTag: "finding_a_file",
        skillLabel: "Jwenn Yon Fichye",
        recommendedLessonSlug: "cheche-yon-fichye-ou-pedi",
        question: {
          kind: "multiple_choice",
          prompt: "Ou pa sonje kote ou te sovgade yon rapò sou òdinatè ou. Ki premye bagay ou ta dwe fè?",
          options: [
            "Tape non li nan bwat rechèch la",
            "Efase tout dosye Documents ou",
            "Kreye yon nouvo rapò pou ranplase l",
            "Rekòmanse (restart) òdinatè a",
          ],
          correctIndex: 0,
          explanation: "Rechèch pa non se premye etap kalm lan — pifò fichye 'pèdi' jwenn konsa.",
        },
      },
      {
        skillTag: "opening_pdf",
        skillLabel: "Louvri PDF",
        recommendedLessonSlug: "sa-ou-dwe-konnen-sou-pdf",
        question: {
          kind: "scenario_decision",
          prompt:
            "Ou resevwa yon kontra kòm PDF epi ou bezwen jwenn yon mo espesifik ladan l san li tout paj yo. Ki sa ou dwe fè?",
          options: [
            "Itilize Ctrl+F (oswa Cmd+F) pou chèche mo a",
            "Enprime tout dokiman an epi li l sou papye",
            "Voye l bay yon zanmi pou yo chèche pou ou",
            "Efase l epi mande yon nouvo kopi",
          ],
          correctIndex: 0,
          explanation: "Chèche nan yon PDF ak Ctrl+F/Cmd+F jwenn yon mo espesifik pi vit pase li tout dokiman an.",
        },
      },
      {
        skillTag: "connecting_to_internet",
        skillLabel: "Konekte Sou Entènèt",
        recommendedLessonSlug: "konekte-sou-wifi-san-danje",
        question: {
          kind: "order_steps",
          prompt: "Mete etap yo nan lòd kòrèk pou konekte sou yon rezo Wi-Fi ou fè konfyans.",
          steps: [
            "Louvri paramèt Wi-Fi sou aparèy ou",
            "Chwazi non rezo a nan lis la",
            "Antre modpas la",
            "Konfime konesyon an reyisi",
          ],
          correctOrder: [0, 1, 2, 3],
          explanation: "Sa a se lòd lojik la: louvri paramèt, chwazi rezo, antre modpas, konfime.",
        },
      },
      {
        skillTag: "downloading",
        skillLabel: "Telechaje",
        recommendedLessonSlug: "telechaje-ak-voye",
        question: {
          kind: "multiple_choice",
          prompt: "Ki sa ki rive lè ou 'telechaje' yon fichye?",
          options: [
            "Fichye a soti sou entènèt pou antre sou aparèy ou",
            "Fichye a soti sou aparèy ou pou ale sou entènèt",
            "Fichye a efase pou tout tan",
            "Fichye a konprese otomatikman",
          ],
          correctIndex: 0,
          explanation: "Telechaje (download) mennen yon fichye SOTI sou entènèt POU antre sou aparèy ou.",
        },
      },
      {
        skillTag: "saving",
        skillLabel: "Sovgade",
        recommendedLessonSlug: "save-save-as-ak-export",
        question: {
          kind: "match_term",
          prompt: "Matche chak zouti ak sa li fè.",
          pairs: [
            { term: "Save", meaning: "Ranplase vèsyon ki egziste deja a" },
            { term: "Save As", meaning: "Kreye yon nouvo kopi apa, san afekte orijinal la" },
            { term: "Export", meaning: "Kreye yon kopi nan yon lòt fòma, tankou PDF" },
          ],
          explanation: "Save ranplase; Save As kreye yon nouvo kopi; Export chanje fòma a.",
        },
      },
      {
        skillTag: "recognizing_safe_software_source",
        skillLabel: "Sous Aplikasyon San Danje",
        recommendedLessonSlug: "kote-san-danje-pou-jwenn-aplikasyon",
        question: {
          kind: "scenario_decision",
          prompt: "Ou vle telechaje yon nouvo aplikasyon. Ki kote ki pi san danje pou fè sa?",
          options: [
            "Magazen aplikasyon ofisyèl la oswa sit ofisyèl devlopè a",
            "Premye lyen ki parèt nan yon rechèch",
            "Yon sit ak anpil bouton 'Download' konfizyonan",
            "Yon lyen yon enkoni voye ba ou nan yon mesaj",
          ],
          correctIndex: 0,
          explanation: "Magazen aplikasyon ofisyèl yo ak sit devlopè a se sous ki pi san danje pou telechaje aplikasyon.",
        },
      },
    ],
  },
  {
    id: "checkpoint-3",
    order: 3,
    afterModuleId: "m11",
    titleHt: "Confidence Checkpoint 3",
    titleEn: "Confidence Checkpoint 3",
    scenario:
      "Ou fin konplete Modil 11 sou sekirite ak vi prive. Checkpoint sa a konbine rekonèt yon imèl sispèk, jere fichye tache danjere, verifye yon sit web, itilize 2FA, fè yon peman san danje, ak pwoteje vi prive w sou yon òdinatè pataje. Sa a se yon rekòmandasyon, pa yon egzamen ki bloke ou — ou ka eseye ankò otan fwa ou vle.",
    skillsCombined: [
      "Imèl Sispèk",
      "Fichye Tache",
      "Verifye Sit Web",
      "2FA",
      "Sekirite Peman",
      "Vi Prive Òdinatè Pataje",
    ],
    passingPercent: 80,
    questions: [
      {
        skillTag: "suspicious_email",
        skillLabel: "Imèl Sispèk",
        recommendedLessonSlug: "phishing-fo-sipo-ak-ijans",
        question: {
          kind: "scenario_decision",
          prompt:
            "Ou resevwa yon imèl ki di 'AJI KOUNYE A OSWA KONT OU AP FÈMEN' epi ki mande w klike yon lyen pou 'konfime' enfòmasyon ou. Ki sa ou dwe fè?",
          options: [
            "Klike lyen an vit anvan kont lan fèmen",
            "Sispèk li — ijans fòse se yon siy klasik eskrokri, verifye atravè yon lòt kanal",
            "Reponn imèl la mande plis enfòmasyon",
            "Transfere l bay tout kontak ou pou avèti yo",
          ],
          correctIndex: 1,
          explanation: "Ijans fòse se yon siy klasik phishing — verifye toujou atravè yon kanal endepandan.",
        },
      },
      {
        skillTag: "attachment",
        skillLabel: "Fichye Tache",
        recommendedLessonSlug: "eskrokri-imel-ak-fichye-tache-danjere",
        question: {
          kind: "multiple_choice",
          prompt:
            "Ou resevwa yon imèl ak yon fichye tache ki soti nan yon ekspeditè ou pa rekonèt ditou. Ki sa ou dwe fè?",
          options: [
            "Telechaje l pou wè sa li ye",
            "Pa telechaje l — se yon gwo risk sekirite",
            "Transfere l bay yon zanmi pou yo tcheke l",
            "Reponn mande plis detay sou fichye a",
          ],
          correctIndex: 1,
          explanation: "Yon fichye tache ki soti nan yon ekspeditè enkoni se yon gwo risk — pa telechaje l.",
        },
      },
      {
        skillTag: "website_verification",
        skillLabel: "Verifye Sit Web",
        recommendedLessonSlug: "fo-sit-web-lyen-ak-telechajman",
        question: {
          kind: "order_steps",
          prompt: "Mete etap yo nan lòd kòrèk pou verifye yon sit anvan ou antre enfòmasyon sansib.",
          steps: [
            "Gade domèn nan pou fòt ortograf sispèk",
            "Verifye si sit la se sous ofisyèl la",
            "Chèche kadna HTTPS la, san sipoze li sifi pou li sèl",
            "Antre enfòmasyon sansib sèlman si tout verifikasyon yo pase",
          ],
          correctOrder: [0, 1, 2, 3],
          explanation: "Verifye domèn nan, sous ofisyèl la, ak HTTPS anvan ou fè konfyans total ak yon sit.",
        },
      },
      {
        skillTag: "2fa",
        skillLabel: "2FA",
        recommendedLessonSlug: "2fa-ak-kod-verifikasyon",
        question: {
          kind: "match_term",
          prompt: "Matche chak tèm ak definisyon kòrèk li.",
          pairs: [
            { term: "Modpas", meaning: "Premye faktè otantifikasyon" },
            { term: "Kòd Verifikasyon (2FA)", meaning: "Dezyèm faktè — pa janm pataje l ak pèsòn" },
            { term: "Kòd Rekiperasyon", meaning: "Backup si ou pèdi aksè a metòd 2FA nòmal ou" },
          ],
          explanation: "Modpas, kòd verifikasyon, ak kòd rekiperasyon se twa pati diferan nan yon sistèm otantifikasyon solid.",
        },
      },
      {
        skillTag: "payment_safety",
        skillLabel: "Sekirite Peman",
        recommendedLessonSlug: "sekirite-acha-ak-peman-dijital",
        question: {
          kind: "scenario_decision",
          prompt: "Ou fèk fè yon peman lajan mobil epi li parèt 'anatant' depi 10 minit. Ki sa ki pi bon aksyon?",
          options: [
            "Eseye voye menm peman an ankò imedyatman",
            "Tann yon ti tan epi kontakte sèvis la ofisyèlman si sa kontinye",
            "Pataje kòd PIN ou ak yon 'ajan' ki ofri ede w vit",
            "Efase aplikasyon an epi telechaje l ankò",
          ],
          correctIndex: 1,
          explanation: "Yon estati 'anatant' pa vle di echèk — verifye ofisyèlman anvan ou eseye ankò, pou pa peye de fwa.",
        },
      },
      {
        skillTag: "shared_computer_privacy",
        skillLabel: "Vi Prive Òdinatè Pataje",
        recommendedLessonSlug: "vi-prive-sou-odinate-pataje-ak-piblik",
        question: {
          kind: "select_all",
          prompt: "Ki aksyon sa yo ou dwe fè lè ou itilize yon òdinatè pataje oswa piblik? (Chwazi tout ki aplike.)",
          options: [
            "Dekonekte kont ou yo apre",
            "Sove modpas ou nan navigatè a pou pwochen fwa",
            "Verifye pa gen enfòmasyon sansib ki rete vizib",
            "Evite aktivite sansib san koneksyon chifre",
          ],
          correctIndexes: [0, 2, 3],
          explanation: "Dekonekte, verifye, ak evite aktivite sansib san chifreman se bon pratik — sove modpas se yon risk.",
        },
      },
    ],
  },
];

export function getComputerRebuildCheckpoint(id: string) {
  return computerRebuildCheckpoints.find((checkpoint) => checkpoint.id === id);
}
