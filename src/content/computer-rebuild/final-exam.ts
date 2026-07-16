import type { FinalExam } from "@/content/computer-rebuild/schema";

/**
 * Final exam per brief Section 8.5: 50 scenario-heavy questions covering
 * every module, randomly drawn from a larger bank each attempt (5 questions
 * per module x 14 modules = 70 in the bank), 80% required, unlimited
 * retries. The bank is intentionally larger than questionsPerAttempt so a
 * retry produces a genuinely different set of questions, not the same 50
 * every time.
 */
export const computerRebuildFinalExam: FinalExam = {
  id: "final-exam",
  titleHt: "Egzamen Final — Òdinatè ak Entènèt Esansyèl",
  titleEn: "Final Exam — Computer & Internet Essentials",
  intro:
    "Sa a se egzamen final kou a. Ou pral reponn 50 kesyon chwazi aza nan yon bank 70 kesyon ki kouvri tout 14 modil yo. Ou bezwen 80% pou pase. Pa gen limit tan, epi ou ka eseye ankò otan fwa ou vle — chak eseye a bay yon nouvo seleksyon kesyon.",
  questionsPerAttempt: 50,
  passingPercent: 80,
  bank: [
    // Module 1 — You Belong in the Digital World
    {
      id: "eq-m1-1",
      moduleId: "m1",
      recommendedLessonSlug: "antre-trete-soti-ak-estokaj",
      question: {
        kind: "multiple_choice",
        prompt: "Ki kat karakteristik ki fè yon aparèy konte kòm yon 'òdinatè'?",
        options: [
          "Antre, Trete, Sòti, ak Estokaj",
          "Ekran, Klavye, Souri, ak Wi-Fi",
          "Windows, Mac, Android, ak iOS",
          "Pri, Mak, Gwosè, ak Koulè",
        ],
        correctIndex: 0,
        explanation: "Antre-Trete-Sòti-Estokaj se kat karakteristik debaz ki defini yon òdinatè, kèlkeswa fòm li.",
      },
    },
    {
      id: "eq-m1-2",
      moduleId: "m1",
      recommendedLessonSlug: "byenveni-ou-pa-pral-kraze-anyen",
      question: {
        kind: "scenario_decision",
        prompt:
          "Ou fèk resevwa yon nouvo laptop epi ou pè pou ou pa 'kraze' li lè ou eksplore meni yo. Ki atitid ki pi bon?",
        options: [
          "Pa touche anyen ditou pou pa gen risk",
          "Eksplore ak konfyans — pifò aksyon debaz yo fasil pou ranvèse",
          "Mande yon pwofesyonèl fè tout bagay pou ou",
          "Retounen laptop la si ou pa konprann yon meni",
        ],
        correctIndex: 1,
        explanation: "Pifò aksyon debaz (louvri meni, chanje paramèt afichaj) fasil pou ranvèse — eksplore san danje ede w aprann.",
      },
    },
    {
      id: "eq-m1-3",
      moduleId: "m1",
      recommendedLessonSlug: "odinate-gen-plizye-fom",
      question: {
        kind: "select_all",
        prompt: "Ki nan aparèy sa yo ki gen tout kat karakteristik yon òdinatè (antre, trete, sòti, estokaj)?",
        options: [
          "Yon smartphone",
          "Yon kalkilatris debaz senp",
          "Yon smart TV",
          "Yon radyo AM/FM tradisyonèl",
        ],
        correctIndexes: [0, 2],
        explanation: "Smartphone ak smart TV gen tout kat karakteristik yo — yon kalkilatris debaz ak yon radyo tradisyonèl pa gen estokaj oswa kapasite chanje.",
      },
    },
    {
      id: "eq-m1-4",
      moduleId: "m1",
      recommendedLessonSlug: "adwe-ak-lojisyel",
      question: {
        kind: "match_term",
        prompt: "Matche chak tèm ak definisyon li.",
        pairs: [
          { term: "Adwè (Hardware)", meaning: "Pati fizik ou ka touche nan yon òdinatè" },
          { term: "Lojisyèl (Software)", meaning: "Pwogram ak enstriksyon ki fè adwè a fonksyone" },
          { term: "Sistèm Opere", meaning: "Lojisyèl prensipal ki jere tout lòt aplikasyon yo" },
        ],
        explanation: "Adwè se sa ou touche; lojisyèl se enstriksyon yo; sistèm opere se lojisyèl prensipal la.",
      },
    },
    {
      id: "eq-m1-5",
      moduleId: "m1",
      recommendedLessonSlug: "odinate-gen-plizye-fom",
      question: {
        kind: "multiple_choice",
        prompt:
          "Ou wè yon aparèy ki gen ekran tach, li pi piti pase yon laptop, epi li pa gen klavye fizik. Ki fòm òdinatè sa a genyen chans ye?",
        options: ["Yon tablèt", "Yon desktop", "Yon sèvè", "Yon routè"],
        correctIndex: 0,
        explanation: "Yon aparèy ekran tach san klavye fizik ki pi piti pase yon laptop se souvan yon tablèt.",
      },
    },

    // Module 2 — How a Computer Works
    {
      id: "eq-m2-1",
      moduleId: "m2",
      recommendedLessonSlug: "sa-ki-rive-le-ou-peze-bouton-pouvwa-a",
      question: {
        kind: "order_steps",
        prompt: "Mete etap yo nan lòd ki rive lè ou peze bouton pouvwa yon òdinatè.",
        steps: [
          "Kouran rive nan machin nan",
          "Sistèm opere a chaje",
          "Ekran akèy/Desktop parèt",
          "Ou ka louvri aplikasyon",
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Kouran an rive dabò, sistèm opere a chaje, epi Desktop parèt anvan ou ka itilize aplikasyon.",
      },
    },
    {
      id: "eq-m2-2",
      moduleId: "m2",
      recommendedLessonSlug: "cpu-travaye-odinate-a",
      question: {
        kind: "multiple_choice",
        prompt: "Ki pati sa a yo rele 'sèvo' òdinatè a, ki trete pifò kalkil yo?",
        options: ["CPU", "RAM", "SSD", "Motherboard"],
        correctIndex: 0,
        explanation: "CPU a se pwosesè a, souvan rele 'sèvo' òdinatè a paske li trete pifò kalkil yo.",
      },
    },
    {
      id: "eq-m2-3",
      moduleId: "m2",
      recommendedLessonSlug: "ram-espas-travay-tanpore-a",
      question: {
        kind: "scenario_decision",
        prompt: "Ou gen 15 onglè navigatè louvri anmenm tan epi òdinatè a vin lan. Ki eksplikasyon ki pi gen chans?",
        options: [
          "Òdinatè a gen twòp RAM",
          "Òdinatè a itilize twòp memwa (RAM) pou kenbe tout onglè yo aktif",
          "Sa pa gen anyen pou wè ak RAM",
          "Se yon pwoblèm ak kès òdinatè a sèlman",
        ],
        correctIndex: 1,
        explanation: "Chak onglè louvri konsome memwa — twòp onglè ka konsome tout RAM disponib epi fè òdinatè a lan.",
      },
    },
    {
      id: "eq-m2-4",
      moduleId: "m2",
      recommendedLessonSlug: "estokaj-kote-fichye-rete",
      question: {
        kind: "match_term",
        prompt: "Matche chak tip estokaj ak karakteristik li.",
        pairs: [
          { term: "SSD", meaning: "Rapid, san pati ki bouje" },
          { term: "HDD", meaning: "Pi lan, gen yon disk ki vire" },
          { term: "Estokaj Cloud", meaning: "Mande entènèt pou aksede" },
        ],
        explanation: "SSD rapid san pati mobil; HDD pi lan ak yon disk ki vire; estokaj cloud mande entènèt.",
      },
    },
    {
      id: "eq-m2-5",
      moduleId: "m2",
      recommendedLessonSlug: "li-espesifikasyon-debaz-yon-odinate",
      question: {
        kind: "select_all",
        prompt: "Ou ap gade yon lis espesifikasyon pou yon òdinatè. Ki eleman sa yo fè pati 'espesifikasyon debaz'?",
        options: ["Pwosesè (CPU)", "Kantite RAM", "Koulè kès la", "Kapasite estokaj"],
        correctIndexes: [0, 1, 3],
        explanation: "Pwosesè, RAM, ak estokaj se espesifikasyon debaz — koulè kès la pa afekte pèfòmans.",
      },
    },

    // Module 3 — Control Your Computer
    {
      id: "eq-m3-1",
      moduleId: "m3",
      recommendedLessonSlug: "konfyans-souri-ak-trackpad",
      question: {
        kind: "match_term",
        prompt: "Matche chak jès souri/trackpad ak sa li fè.",
        pairs: [
          { term: "Klik senp", meaning: "Chwazi yon bagay" },
          { term: "Doub klik", meaning: "Louvri yon fichye/aplikasyon" },
          { term: "Right-click", meaning: "Louvri yon meni ak plis opsyon" },
        ],
        explanation: "Klik senp chwazi, doub klik louvri, right-click bay plis opsyon.",
      },
    },
    {
      id: "eq-m3-2",
      moduleId: "m3",
      recommendedLessonSlug: "kopye-koupe-kole-anile-refe",
      question: {
        kind: "scenario_decision",
        prompt: "Ou vle kopye yon fraz soti nan yon dokiman pou kole l nan yon lòt. Ki de rakousi klavye ou bezwen?",
        options: [
          "Ctrl+C epi Ctrl+V (Cmd+C/Cmd+V sou Mac)",
          "Ctrl+Z epi Ctrl+Y",
          "Ctrl+S epi Ctrl+P",
          "Ctrl+A epi Ctrl+X",
        ],
        correctIndex: 0,
        explanation: "Ctrl+C (Cmd+C) kopye, Ctrl+V (Cmd+V) kole — de rakousi debaz pou kopye-kole.",
      },
    },
    {
      id: "eq-m3-3",
      moduleId: "m3",
      recommendedLessonSlug: "screenshot-ak-anrejistreman-ekran",
      question: {
        kind: "order_steps",
        prompt: "Mete etap yo nan lòd pou pran yon screenshot san danje.",
        steps: [
          "Peze rakousi screenshot la (Windows+Shift+S oswa Cmd+Shift+4)",
          "Chwazi zòn ekran an",
          "Verifye screenshot la pa montre modpas oswa enfòmasyon sansib",
          "Sovgade oswa kole screenshot la kote ou bezwen l",
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Toujou verifye enfòmasyon sansib anvan ou pataje oswa sovgade yon screenshot.",
      },
    },
    {
      id: "eq-m3-4",
      moduleId: "m3",
      recommendedLessonSlug: "cheche-aplikasyon-ak-paramet",
      question: {
        kind: "multiple_choice",
        prompt: "Ou vle jwenn yon aplikasyon rapid san chèche l sou Desktop. Ki sa ki pi efikas?",
        options: [
          "Rale-lage yon nouvo ikòn",
          "Itilize rechèch nan Start menu (Windows) oswa Spotlight (Mac)",
          "Rekòmanse òdinatè a",
          "Chanje fon ekran an",
        ],
        correctIndex: 1,
        explanation: "Rechèch la (Start menu/Spotlight) jwenn nenpòt aplikasyon enstale, menm san rakousi sou Desktop.",
      },
    },
    {
      id: "eq-m3-5",
      moduleId: "m3",
      recommendedLessonSlug: "screenshot-ak-anrejistreman-ekran",
      question: {
        kind: "select_all",
        prompt: "Ki aksyon sa yo ou dwe fè anvan ou pataje yon screenshot?",
        options: [
          "Verifye pa gen modpas vizib",
          "Verifye pa gen kòd verifikasyon vizib",
          "Ogmante rezolisyon ekran an",
          "Verifye pa gen enfòmasyon labank vizib",
        ],
        correctIndexes: [0, 1, 3],
        explanation: "Verifye modpas, kòd verifikasyon, ak enfòmasyon labank pa vizib anvan ou pataje yon screenshot.",
      },
    },

    // Module 4 — Files and Folders
    {
      id: "eq-m4-1",
      moduleId: "m4",
      recommendedLessonSlug: "kisa-yon-dosye-ye",
      question: {
        kind: "multiple_choice",
        prompt: "Ki diferans prensipal ant yon fichye ak yon dosye?",
        options: [
          "Yo se menm bagay",
          "Yon dosye se yon kontenè ki gwoupe fichye; yon fichye se enfòmasyon ki sovgade anba yon non",
          "Yon fichye pi gwo pase yon dosye toujou",
          "Dosye yo sèlman itilize pou foto",
        ],
        correctIndex: 1,
        explanation: "Yon dosye se yon kontenè òganizasyonèl; yon fichye se kontni reyèl la (dokiman, foto, elatriye).",
      },
    },
    {
      id: "eq-m4-2",
      moduleId: "m4",
      recommendedLessonSlug: "non-fichye-ki-ede-ou-pita",
      question: {
        kind: "scenario_decision",
        prompt:
          "Ou gen twa vèsyon menm rapò a: 'rapò-final.docx', 'rapò-final-2.docx', 'rapò-final-VRE.docx'. Ki pwoblèm sa a ye?",
        options: [
          "Pa gen pwoblèm, se nòmal",
          "Pwoblèm 'final-final' — non yo pa klè sou ki vèsyon ki bon an",
          "Ou dwe efase yo tout",
          "Ou dwe chanje yo an PDF imedyatman",
        ],
        correctIndex: 1,
        explanation: "Repete mo 'final' san dat oswa nimewo vèsyon klè kreye konfizyon sou ki vèsyon ki bon an.",
      },
    },
    {
      id: "eq-m4-3",
      moduleId: "m4",
      recommendedLessonSlug: "kreye-chanje-non-kopye-ak-deplase",
      question: {
        kind: "order_steps",
        prompt: "Mete etap yo nan lòd pou deplase yon fichye san danje nan yon nouvo dosye.",
        steps: [
          "Kreye nouvo dosye a dabò",
          "Chwazi fichye a",
          "Konfime kote ou vle voye l",
          "Deplase fichye a",
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Kreye dosye a anvan, chwazi fichye a, konfime destinasyon an, epi deplase — sa evite erè.",
      },
    },
    {
      id: "eq-m4-4",
      moduleId: "m4",
      recommendedLessonSlug: "ekstansyon-fichye-ak-foma-komen",
      question: {
        kind: "match_term",
        prompt: "Matche chak ekstansyon ak tip fichye li.",
        pairs: [
          { term: ".pdf", meaning: "Dokiman ki gade menm jan sou tout aparèy" },
          { term: ".jpg", meaning: "Foto" },
          { term: ".zip", meaning: "Gwoup fichye konprese" },
        ],
        explanation: "Chak ekstansyon di ou egzakteman ki tip kontni fichye a genyen.",
      },
    },
    {
      id: "eq-m4-5",
      moduleId: "m4",
      recommendedLessonSlug: "efase-ak-restore",
      question: {
        kind: "scenario_decision",
        prompt: "Ou efase yon fichye pa aksidan epi ou vide Recycle Bin/Trash la deja. Ki sa ki rive?",
        options: [
          "Fichye a fasil pou jwenn ankò",
          "Fichye a disparèt pou tout tan, difisil pou rekipere",
          "Fichye a otomatikman retounen apre yon semèn",
          "Anyen pa chanje",
        ],
        correctIndex: 1,
        explanation: "Vide Recycle Bin/Trash la efase fichye a pou tout tan — se pou sa ou dwe verifye anvan.",
      },
    },

    // Module 5 — Applications and Everyday Documents
    {
      id: "eq-m5-1",
      moduleId: "m5",
      recommendedLessonSlug: "kote-san-danje-pou-jwenn-aplikasyon",
      question: {
        kind: "multiple_choice",
        prompt: "Ki kote ki pi san danje pou telechaje yon nouvo aplikasyon?",
        options: [
          "Premye lyen ki parèt nan yon rechèch",
          "Magazen aplikasyon ofisyèl la oswa sit devlopè a",
          "Yon imèl ki ofri l gratis",
          "Yon rezo sosyal",
        ],
        correctIndex: 1,
        explanation: "Magazen aplikasyon ofisyèl yo ak sit devlopè a se sous ki pi san danje.",
      },
    },
    {
      id: "eq-m5-2",
      moduleId: "m5",
      recommendedLessonSlug: "enstale-yon-aplikasyon",
      question: {
        kind: "scenario_decision",
        prompt:
          "Pandan yon enstalasyon, ou wè yon kaz ki deja tcheke pou enstale yon lòt aplikasyon ou pa rekonèt. Ki sa ou dwe fè?",
        options: [
          "Kite l tcheke",
          "Dekache l anvan ou kontinye",
          "Anile tout enstalasyon an",
          "Enstale l epi efase l pita",
        ],
        correctIndex: 1,
        explanation: "Dekache kaz ki deja tcheke pou lojisyèl anplis anvan ou kontinye enstalasyon an.",
      },
    },
    {
      id: "eq-m5-3",
      moduleId: "m5",
      recommendedLessonSlug: "pemisyon-aplikasyon",
      question: {
        kind: "select_all",
        prompt: "Ki pèmisyon sa yo ta fè sans pou yon aplikasyon kalkilatris senp mande?",
        options: ["Kamera", "Mikwofòn", "Okenn nan yo — yon kalkilatris senp pa bezwen pèmisyon sa yo", "Lokalizasyon"],
        correctIndexes: [2],
        explanation: "Yon kalkilatris senp pa gen rezon pou bezwen kamera, mikwofòn, oswa lokalizasyon.",
      },
    },
    {
      id: "eq-m5-4",
      moduleId: "m5",
      recommendedLessonSlug: "mete-ajou-ak-retire-yon-aplikasyon",
      question: {
        kind: "multiple_choice",
        prompt: "Ou dezenstale yon aplikasyon tretman tèks. Sa k ap rive ak dokiman ou te kreye avè l yo?",
        options: [
          "Yo efase otomatikman",
          "Yo rete sou òdinatè a — se sèlman aplikasyon an ki dezenstale",
          "Yo konprese nan yon fichye ZIP",
          "Yo voye nan cloud otomatikman",
        ],
        correctIndex: 1,
        explanation: "Dezenstale yon aplikasyon retire aplikasyon an sèlman — dokiman ou kreye yo rete.",
      },
    },
    {
      id: "eq-m5-5",
      moduleId: "m5",
      recommendedLessonSlug: "sa-ou-dwe-konnen-sou-pdf",
      question: {
        kind: "scenario_decision",
        prompt: "Ou bezwen sèlman yon vèsyon dijital yon dokiman, pa yon kopi papye. Ki sa ou dwe fè nan bwat enprime a?",
        options: [
          "Enprime l sou papye epi eskane l apre",
          "Chwazi 'Save as PDF' olye enprime fizikman",
          "Anile tout pwosesis la",
          "Voye l bay yon zanmi pou yo enprime l",
        ],
        correctIndex: 1,
        explanation: "'Save as PDF' kreye yon vèsyon dijital dirèkteman, san bezwen papye.",
      },
    },

    // Module 6 — Internet and Wi-Fi
    {
      id: "eq-m6-1",
      moduleId: "m6",
      recommendedLessonSlug: "kisa-ki-se-entenet-la",
      question: {
        kind: "multiple_choice",
        prompt: "Ki afimasyon ki pi kòrèk sou entènèt ak Wi-Fi?",
        options: [
          "Yo se menm bagay egzakteman",
          "Wi-Fi se yon SÈL fason pou konekte sou entènèt — pa entènèt la limenm",
          "Entènèt la se yon konpayi",
          "Wi-Fi mande yon kab toujou",
        ],
        correctIndex: 1,
        explanation: "Wi-Fi se yon fason pou konekte san fil — entènèt la se rezo a li menm, pi laj pase Wi-Fi.",
      },
    },
    {
      id: "eq-m6-2",
      moduleId: "m6",
      recommendedLessonSlug: "founise-entenet-modem-route-ak-wifi",
      question: {
        kind: "order_steps",
        prompt: "Mete pati chèn koneksyon an nan lòd, soti nan founisè a rive nan aparèy ou.",
        steps: ["Founisè Entènèt (ISP)", "Modèm", "Routè", "Aparèy ou (Wi-Fi)"],
        correctOrder: [0, 1, 2, 3],
        explanation: "Koneksyon an vwayaje: founisè, modèm, routè, epi aparèy ou.",
      },
    },
    {
      id: "eq-m6-3",
      moduleId: "m6",
      recommendedLessonSlug: "le-wifi-di-konekte-men-entenet-pa-mache",
      question: {
        kind: "scenario_decision",
        prompt: "Ikòn Wi-Fi ou montre 'konekte' men okenn sit pa louvri. Ki sa sa vle di?",
        options: [
          "Ou gen aksè entènèt reyèl garanti",
          "Ou konekte lokalman sou routè a, men sa pa garanti aksè entènèt reyèl",
          "Ou dwe achte yon nouvo òdinatè",
          "Pwoblèm nan toujou nan aparèy ou",
        ],
        correctIndex: 1,
        explanation: "Ikòn Wi-Fi la montre koneksyon lokal sèlman — routè a ka pa gen entènèt reyèl.",
      },
    },
    {
      id: "eq-m6-4",
      moduleId: "m6",
      recommendedLessonSlug: "vites-konesyon-siyal-ak-itilizasyon-done",
      question: {
        kind: "select_all",
        prompt: "Ki aktivite sa yo konsome plis done sou yon koneksyon limite?",
        options: ["Gade yon videyo an HD", "Li yon atik tèks", "Telechaje yon gwo fichye", "Voye yon mesaj tèks kout"],
        correctIndexes: [0, 2],
        explanation: "Videyo an HD ak gwo telechajman konsome anpil plis done pase tèks senp.",
      },
    },
    {
      id: "eq-m6-5",
      moduleId: "m6",
      recommendedLessonSlug: "kod-qr-lyen-ak-adres-web",
      question: {
        kind: "scenario_decision",
        prompt:
          "Ou wè yon kòd QR nan yon afich piblik san non biznis sou li, ki pwomèt yon kado gratis. Ki sa ou dwe fè?",
        options: [
          "Eskane l imedyatman",
          "Sispèk li epi evite eskane l san plis kontèks",
          "Pataje l ak zanmi ou pou yo eskane l",
          "Antre enfòmasyon labank ou pou resevwa kado a",
        ],
        correctIndex: 1,
        explanation: "Yon kòd QR san kontèks klè ki pwomèt yon kado se yon siy avètisman komen.",
      },
    },

    // Module 7 — Browser and Web Skills
    {
      id: "eq-m7-1",
      moduleId: "m7",
      recommendedLessonSlug: "navigate-mote-rechech-sit-web-ak-paj-web",
      question: {
        kind: "match_term",
        prompt: "Matche chak tèm ak sa li ye.",
        pairs: [
          { term: "Navigatè", meaning: "Aplikasyon pou vizite sit entènèt" },
          { term: "Motè Rechèch", meaning: "Sit ki ede w jwenn lòt sit" },
          { term: "Domèn", meaning: "Non prensipal yon sit web" },
        ],
        explanation: "Navigatè se aplikasyon an, motè rechèch se yon sit espesyal, domèn se non prensipal yon sit.",
      },
    },
    {
      id: "eq-m7-2",
      moduleId: "m7",
      recommendedLessonSlug: "cheche-pi-byen",
      question: {
        kind: "scenario_decision",
        prompt:
          "Ou ap chèche enfòmasyon sou kont labank ou epi ou panse pou tape nimewo kont ou nan Google. Ki sa ou dwe fè?",
        options: [
          "Tape l pou jwenn repons pi vit",
          "Pa janm tape enfòmasyon sansib nan yon bwat rechèch",
          "Tape l men efase l apre",
          "Mande yon zanmi tape l pou ou",
        ],
        correctIndex: 1,
        explanation: "Enfòmasyon sansib pa dwe janm tape nan yon bwat rechèch — sa ka rete nan istorik oswa sèvè yo.",
      },
    },
    {
      id: "eq-m7-3",
      moduleId: "m7",
      recommendedLessonSlug: "eske-enfomasyon-sa-a-fyab",
      question: {
        kind: "select_all",
        prompt: "Ki bagay sa yo ou dwe verifye pou jije si yon sous enfòmasyon fyab?",
        options: ["Ki moun ki ekri l", "Koulè background sit la", "Dat piblikasyon an", "Si lòt sous konfime menm enfòmasyon an"],
        correctIndexes: [0, 2, 3],
        explanation: "Otè, dat, ak korobore ak lòt sous konte — koulè sit la pa gen rapò ak fyabilite.",
      },
    },
    {
      id: "eq-m7-4",
      moduleId: "m7",
      recommendedLessonSlug: "favori-istorik-ak-li-pita",
      question: {
        kind: "multiple_choice",
        prompt: "Ou vizite yon paj itil jodi a men ou pa bookmark li epi ou bliye adrès la. Kote ou ta chèche l dabò?",
        options: ["Nan favori ou", "Nan istorik navigatè a", "Nan Recycle Bin/Trash", "Nan Paramèt"],
        correctIndex: 1,
        explanation: "Istorik la kenbe yon lis otomatik tout paj ou vizite, menm si ou pa bookmark yo.",
      },
    },
    {
      id: "eq-m7-5",
      moduleId: "m7",
      recommendedLessonSlug: "cookies-cache-ak-navigasyon-prive",
      question: {
        kind: "multiple_choice",
        prompt: "Èske navigasyon prive kache tout aktivite w bay founisè entènèt ou?",
        options: [
          "Wi, konplètman",
          "Non, li sèlman anpeche navigatè a sonje istorik lokal",
          "Li fè entènèt ou pi rapid",
          "Li pwoteje kont tout kalite malveyan",
        ],
        correctIndex: 1,
        explanation: "Navigasyon prive jis anpeche navigatè a sonje istorik lokal — li pa kache aktivite bay founisè yo.",
      },
    },

    // Module 8 — Email and Online Communication
    {
      id: "eq-m8-1",
      moduleId: "m8",
      recommendedLessonSlug: "kijan-imel-mache",
      question: {
        kind: "match_term",
        prompt: "Matche chak pati imèl ak wòl li.",
        pairs: [
          { term: "Ekspeditè", meaning: "Moun ki voye imèl la" },
          { term: "Destinatè", meaning: "Moun ki resevwa imèl la" },
          { term: "Sijè", meaning: "Rezime kout kontni imèl la" },
        ],
        explanation: "Ekspeditè voye, destinatè resevwa, sijè a rezime kontni imèl la.",
      },
    },
    {
      id: "eq-m8-2",
      moduleId: "m8",
      recommendedLessonSlug: "kreye-oswa-sekirize-yon-kont-imel",
      question: {
        kind: "scenario_decision",
        prompt: "Yon moun rele w epi mande w bay yo modpas kont imèl ou pou yo 'ranje yon pwoblèm'. Ki sa ou dwe fè?",
        options: [
          "Bay modpas la",
          "Refize — okenn sipò lejitim pa mande modpas",
          "Bay yon vèsyon modifye",
          "Mande yo rele tounen pita",
        ],
        correctIndex: 1,
        explanation: "Okenn sèvis lejitim pa janm mande modpas ou dirèkteman.",
      },
    },
    {
      id: "eq-m8-3",
      moduleId: "m8",
      recommendedLessonSlug: "reponn-reponn-tout-moun-ak-transfere",
      question: {
        kind: "scenario_decision",
        prompt:
          "Ou resevwa yon imèl gwoup ak 20 moun, ou vle mande yon kesyon PÈSONÈL sèlman bay ekspeditè a. Ki sa ou dwe fè?",
        options: ["Klike Reply All", "Klike Reply (sèlman)", "Transfere l bay tout moun", "Voye yon nouvo imèl separe bay tout 20 moun"],
        correctIndex: 1,
        explanation: "Reply voye repons ou sèlman bay ekspeditè a — bon chwa pou yon kesyon pèsonèl.",
      },
    },
    {
      id: "eq-m8-4",
      moduleId: "m8",
      recommendedLessonSlug: "eskrokri-imel-ak-fichye-tache-danjere",
      question: {
        kind: "select_all",
        prompt: "Ki siy sa yo se avètisman komen yon imèl eskrokri?",
        options: [
          "Mesaj la mande ou aji 'kounye a' oswa kont ou ap fèmen",
          "Sijè a ekri klèman epi kout",
          "Mesaj la mande kòd verifikasyon ou",
          "Adrès ekspeditè a pa matche non konpayi a di yo ye a",
        ],
        correctIndexes: [0, 2, 3],
        explanation: "Ijans fòse, demann kòd verifikasyon, ak adrès ki pa matche se twa siy klasik eskrokri.",
      },
    },
    {
      id: "eq-m8-5",
      moduleId: "m8",
      recommendedLessonSlug: "fichye-tache",
      question: {
        kind: "multiple_choice",
        prompt: "Ou resevwa yon fichye tache ki soti nan yon ekspeditè ou pa rekonèt ditou. Ki sa ou dwe fè?",
        options: [
          "Telechaje l pou wè sa li ye",
          "Pa telechaje l — se yon gwo risk sekirite",
          "Transfere l bay tout kontak ou",
          "Reponn mande plis detay sou fichye a",
        ],
        correctIndex: 1,
        explanation: "Yon fichye tache ki soti nan yon ekspeditè enkoni se yon gwo risk sekirite.",
      },
    },

    // Module 9 — Cloud, Backup, and Moving Files
    {
      id: "eq-m9-1",
      moduleId: "m9",
      recommendedLessonSlug: "estokaj-lokal-ak-estokaj-cloud",
      question: {
        kind: "multiple_choice",
        prompt: "Ki de bagay yon fichye cloud mande pou li aksesib (san yon kopi lokal senkronize)?",
        options: [
          "Yon kle USB ak yon modpas",
          "Entènèt ak yon kont konekte",
          "Yon enprimant ak papye",
          "Yon disk dur ekstèn ak yon kab",
        ],
        correctIndex: 1,
        explanation: "Fichye cloud mande entènèt AK yon kont konekte pou aksesib.",
      },
    },
    {
      id: "eq-m9-2",
      moduleId: "m9",
      recommendedLessonSlug: "sync-pa-toujou-yon-backup",
      question: {
        kind: "scenario_decision",
        prompt: "Ou efase yon fichye pa aksidan sou telefòn ou, epi telefòn nan sync ak òdinatè ou. Ki sa ki gen chans rive?",
        options: [
          "Fichye a rete an sekirite sou òdinatè a",
          "Fichye a ka efase sou òdinatè a tou, paske sync pwopaje chanjman yo",
          "Fichye a otomatikman backup pou tout tan",
          "Sync anpeche fichye efase sou tout aparèy",
        ],
        correctIndex: 1,
        explanation: "Sync pwopaje chanjman (ki gen ladan efasman) sou tout aparèy konekte.",
      },
    },
    {
      id: "eq-m9-3",
      moduleId: "m9",
      recommendedLessonSlug: "pataje-yon-fichye-oswa-dosye-san-danje",
      question: {
        kind: "scenario_decision",
        prompt: "Ou vle yon kolèg revize yon rapò san chanje kontni li. Ki nivo pèmisyon ou dwe bay?",
        options: ["Gade sèlman (viewer)", "Modifye (editor)", "Lyen piblik san restriksyon", "Pèmisyon total sou tout dosye ou"],
        correctIndex: 0,
        explanation: "'Gade sèlman' kite moun nan li san risk yo modifye kontni orijinal la pa aksidan.",
      },
    },
    {
      id: "eq-m9-4",
      moduleId: "m9",
      recommendedLessonSlug: "yon-plan-backup-senp",
      question: {
        kind: "order_steps",
        prompt: "Mete etap yo nan lòd kòrèk pou kreye yon plan backup senp.",
        steps: [
          "Idantifye fichye enpòtan yo",
          "Kreye yon dezyèm kopi nan yon lòt kote",
          "Etabli yon orè regilye",
          "Teste ke kopi a louvri toujou",
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Idantifye, kopye nan yon lòt kote, planifye yon orè, epi toujou teste.",
      },
    },
    {
      id: "eq-m9-5",
      moduleId: "m9",
      recommendedLessonSlug: "oganizasyon-ak-backup-foto",
      question: {
        kind: "multiple_choice",
        prompt: "Ki diferans prensipal ant yon dosye ak yon albòm foto?",
        options: [
          "Yo se menm bagay egzakteman",
          "Yon albòm gwoupe foto san deplase orijinal yo; yon dosye deplase fichye a nan yon sèl kote",
          "Yon dosye pi rapid pase yon albòm",
          "Albòm sèlman disponib sou telefòn, pa sou òdinatè",
        ],
        correctIndex: 1,
        explanation: "Yon albòm se yon gwoupman ki pa deplase fichye a — yon foto ka nan plizyè albòm anmenm tan.",
      },
    },

    // Module 10 — Devices, Printing, and Everyday Connections
    {
      id: "eq-m10-1",
      moduleId: "m10",
      recommendedLessonSlug: "po-ak-konekte",
      question: {
        kind: "match_term",
        prompt: "Matche chak pò ak sa li sèvi pou li.",
        pairs: [
          { term: "USB-C", meaning: "Pò ovalè de sans pou done/kouran/videyo" },
          { term: "HDMI", meaning: "Konekte ak yon ekran oswa televizyon" },
          { term: "Odyo", meaning: "Konekte kaskèt oswa opalè" },
        ],
        explanation: "Chak pò gen yon rezon prensipal, menm si kèk ka fè plizyè travay.",
      },
    },
    {
      id: "eq-m10-2",
      moduleId: "m10",
      recommendedLessonSlug: "kle-usb-ak-disk-eksten-revizyon",
      question: {
        kind: "scenario_decision",
        prompt: "Ou jwenn yon kle USB atè nan yon espas piblik, san ou pa konnen ki moun li ye. Ki sa ou dwe fè?",
        options: [
          "Konekte l nan òdinatè ou pou wè sa ki ladan l",
          "Pa konekte l — li ka pote malveyan",
          "Konekte l epi eskane l apre",
          "Voye l bay yon zanmi pou yo tcheke l",
        ],
        correctIndex: 1,
        explanation: "Yon kle USB enkoni ou jwenn ka yon zouti eskrokri komen — pi bon pratik se pa konekte l ditou.",
      },
    },
    {
      id: "eq-m10-3",
      moduleId: "m10",
      recommendedLessonSlug: "bluetooth",
      question: {
        kind: "order_steps",
        prompt: "Mete etap yo nan lòd kòrèk pou pè yon nouvo aparèy Bluetooth.",
        steps: [
          "Aktive Bluetooth sou òdinatè a",
          "Mete aparèy la nan mòd dekouvèt",
          "Chwazi aparèy la nan lis la",
          "Konfime koneksyon an reyisi",
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Aktive Bluetooth òdinatè a, mete aparèy la an dekouvèt, chwazi l, epi konfime.",
      },
    },
    {
      id: "eq-m10-4",
      moduleId: "m10",
      recommendedLessonSlug: "enprimant-sa-ki-rive-le-ou-enprime",
      question: {
        kind: "multiple_choice",
        prompt: "Kisa yon 'driver' fè nan chèn enprime a?",
        options: [
          "Li tradwi enfòmasyon soti nan òdinatè a pou enprimant lan konprann",
          "Li se papye enprimant lan itilize",
          "Li se dosye kote dokiman enprime yo sovgade",
          "Li se yon tip lank espesyal",
        ],
        correctIndex: 0,
        explanation: "Driver a se lojisyèl ki fè òdinatè a ak enprimant lan ka 'pale' menm lang.",
      },
    },
    {
      id: "eq-m10-5",
      moduleId: "m10",
      recommendedLessonSlug: "le-yon-apare-konekte-pa-mache",
      question: {
        kind: "scenario_decision",
        prompt: "Yon souri USB sispann mache sibitman. Ki premye bagay ou dwe verifye?",
        options: [
          "Achte yon nouvo souri imedyatman",
          "Kouran, kab, ak pò, epi si se bon aparèy ki chwazi nan paramèt",
          "Rekòmanse tout rezo lakay ou",
          "Chanje sistèm opere a",
        ],
        correctIndex: 1,
        explanation: "Verifikasyon senp yo (kouran, kab, pò, aparèy chwazi) se premye etap anvan konklizyon pi dramatik.",
      },
    },

    // Module 11 — Safety, Privacy, and Digital Money
    {
      id: "eq-m11-1",
      moduleId: "m11",
      recommendedLessonSlug: "2fa-ak-kod-verifikasyon",
      question: {
        kind: "scenario_decision",
        prompt: "Yon moun rele w epi mande w li yo kòd verifikasyon ou fèk resevwa pa SMS. Ki sa ou dwe fè?",
        options: [
          "Li yo kòd la",
          "Refize — okenn sèvis lejitim pa mande yon kòd konsa",
          "Li mwatye kòd la sèlman",
          "Mande yo rele tounen pita",
        ],
        correctIndex: 1,
        explanation: "Yon kòd verifikasyon se pou OU sèlman — okenn sèvis lejitim pa janm mande l pa telefòn.",
      },
    },
    {
      id: "eq-m11-2",
      moduleId: "m11",
      recommendedLessonSlug: "modpas-fo-ak-jerans-modpas",
      question: {
        kind: "multiple_choice",
        prompt: "Poukisa ou pa dwe reyitilize menm modpas la pou plizyè kont enpòtan?",
        options: [
          "Sa fè modpas ou pi fò",
          "Si yon kont pirate, tout lòt kont ak menm modpas la an danje",
          "Sa akselere koneksyon ou",
          "Pa gen okenn risk",
        ],
        correctIndex: 1,
        explanation: "Reyitilize modpas fè si YON kont pirate, TOUT lòt kont ak menm modpas la an danje.",
      },
    },
    {
      id: "eq-m11-3",
      moduleId: "m11",
      recommendedLessonSlug: "phishing-fo-sipo-ak-ijans",
      question: {
        kind: "select_all",
        prompt: "Ki kanal sa yo phishing ka rive ladan?",
        options: ["Imèl", "Tèks (SMS)", "WhatsApp", "Yon apèl telefòn"],
        correctIndexes: [0, 1, 2, 3],
        explanation: "Phishing ka rive nan nenpòt kanal kominikasyon — pa sèlman imèl.",
      },
    },
    {
      id: "eq-m11-4",
      moduleId: "m11",
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
        explanation: "Yon estati 'anatant' pa vle di echèk — verifye ofisyèlman anvan ou eseye ankò.",
      },
    },
    {
      id: "eq-m11-5",
      moduleId: "m11",
      recommendedLessonSlug: "sa-pou-fe-si-yon-bagay-mal-rive",
      question: {
        kind: "order_steps",
        prompt: "Mete etap yo nan lòd kòrèk si ou sispèk yon kont konpwomèt.",
        steps: [
          "Sispann epi rete kalm",
          "Chanje modpas soti nan yon aparèy ou fè konfyans",
          "Kontakte founisè sèvis la atravè kanal ofisyèl",
          "Chèche èd pwofesyonèl si sitiyasyon an depase w",
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Yon sekans kalm ak lojik kòmanse ak sispann, epi ale nan chanje modpas, kontakte founisè, epi chèche èd si nesesè.",
      },
    },

    // Module 12 — Buying and Caring for a Computer
    {
      id: "eq-m12-1",
      moduleId: "m12",
      recommendedLessonSlug: "anvan-ou-achte-kominse-ak-travay-la",
      question: {
        kind: "scenario_decision",
        prompt: "Yon zanmi di 'achte machin ki pi chè a, se toujou pi bon an'. Ki repons ki pi kòrèk?",
        options: [
          "Vre, pi chè toujou pi bon",
          "Pa nesesèman — pi bon an se machin ki fè travay reyèl ou an fyab, nan limit bijè total ou",
          "Pi bon an se toujou machin ki gen non mak ki pi popilè a",
          "Pri pa gen okenn enpòtans",
        ],
        correctIndex: 1,
        explanation: "'Pi bon' vle di li fè travay ou, pa ke li se machin ki pi chè a.",
      },
    },
    {
      id: "eq-m12-2",
      moduleId: "m12",
      recommendedLessonSlug: "intel-kont-amd-sou-odinate-windows",
      question: {
        kind: "multiple_choice",
        prompt: "Ki anons ki manke enfòmasyon esansyèl pou fè yon bon desizyon acha?",
        options: [
          "Yon anons ak jenerasyon/modèl pwosesè egzat",
          "Yon anons ki di sèlman 'Laptop ak Core i7, bon eta'",
          "Yon anons ak eta batri site klèman",
          "Yon anons ak foto reyèl machin nan",
        ],
        correctIndex: 1,
        explanation: "San jenerasyon/modèl egzat, ou pa ka evalye pèfòmans reyèl pwosesè a.",
      },
    },
    {
      id: "eq-m12-3",
      moduleId: "m12",
      recommendedLessonSlug: "mac-intel-kont-mac-apple-silicon",
      question: {
        kind: "multiple_choice",
        prompt: "Nan 'About This Mac', ki mo endike Mac la itilize Apple Silicon (pa Intel)?",
        options: ["'Processor' swiv pa Intel", "'Chip' swiv pa yon non seri M", "'Storage' sèlman", "'Serial Number' sèlman"],
        correctIndex: 1,
        explanation: "'Chip' swiv pa yon non seri M (tankou M1, M2) endike Apple Silicon.",
      },
    },
    {
      id: "eq-m12-4",
      moduleId: "m12",
      recommendedLessonSlug: "enspeksyon-konple-yon-mac-itilize",
      question: {
        kind: "scenario_decision",
        prompt: "Yon Mac itilize gen yon pri trè ba men vandè a admèt Activation Lock la 'poko retire'. Ki sa ou dwe fè?",
        options: [
          "Achte l kanmenm paske pri a bon",
          "Rejte acha a — Activation Lock ki pa retire fè machin nan pa itilizab",
          "Peye epi mande vandè a retire l apre",
          "Achte l epi eseye 'debloke' l ou menm",
        ],
        correctIndex: 1,
        explanation: "Yon Activation Lock ki pa retire se yon rezon pou rejte acha a.",
      },
    },
    {
      id: "eq-m12-5",
      moduleId: "m12",
      recommendedLessonSlug: "siy-danje-ak-eskrokri-acha-komen",
      question: {
        kind: "select_all",
        prompt: "Ki sa sa yo se siy danje nan yon anons òdinatè itilize?",
        options: [
          "Vandè a ensiste pou peman imedya anvan enspeksyon",
          "Anons lan gen modèl ak jenerasyon pwosesè egzat",
          "Pri a trè ba anpil pase valè mache",
          "Vandè a refize fè yon apèl videyo pou montre machin nan",
        ],
        correctIndexes: [0, 2, 3],
        explanation: "Presyon peman, pri twò ba, ak refi videyo se twa siy danje klasik.",
      },
    },

    // Module 13 — Troubleshooting and Maintenance
    {
      id: "eq-m13-1",
      moduleId: "m13",
      recommendedLessonSlug: "panse-tankou-yon-moun-ki-rezoud-pwoblem",
      question: {
        kind: "order_steps",
        prompt: "Mete etap yo nan lòd kalm pou rezoud yon pwoblèm òdinatè.",
        steps: ["Sispann epi li", "Dekri sentòm egzat la", "Verifye kòz senp yo", "Eskalade lè sa nesesè"],
        correctOrder: [0, 1, 2, 3],
        explanation: "Sispann, dekri sentòm lan, verifye kòz senp, epi eskalade si nesesè — yon sekans kalm ak lojik.",
      },
    },
    {
      id: "eq-m13-2",
      moduleId: "m13",
      recommendedLessonSlug: "rekomanse-etenn-domi-ak-fose-femen",
      question: {
        kind: "scenario_decision",
        prompt: "Yon aplikasyon rete bloke — souri a vire men anyen pa reponn depi plizyè minit. Ki premye bagay ou dwe eseye?",
        options: [
          "Kenbe bouton pouvwa a imedyatman",
          "Fòse fèmen aplikasyon an sèlman",
          "Deprann tout kab yo",
          "Ranje aplikasyon an ou menm",
        ],
        correctIndex: 1,
        explanation: "Fòse fèmen aplikasyon an sèlman se premye etap apwopriye — kenbe bouton pouvwa a se dènye rekou.",
      },
    },
    {
      id: "eq-m13-3",
      moduleId: "m13",
      recommendedLessonSlug: "pa-gen-entenet",
      question: {
        kind: "multiple_choice",
        prompt: "Ki apwòch ki pi bon lè entènèt pa mache, pou izole si pwoblèm nan nan aparèy, routè, oswa founisè?",
        options: [
          "Sipoze pwoblèm nan toujou nan navigatè a sèlman",
          "Fè yon tès kouch pa kouch: aparèy, routè, founisè, sit",
          "Rekòmanse achte yon nouvo routè imedyatman",
          "Chanje modpas Wi-Fi ou",
        ],
        correctIndex: 1,
        explanation: "Yon tès kouch pa kouch izole ki nivo pwoblèm nan ye, olye sipoze san verifye.",
      },
    },
    {
      id: "eq-m13-4",
      moduleId: "m13",
      recommendedLessonSlug: "konnen-kile-pou-sispann",
      question: {
        kind: "select_all",
        prompt: "Ki sitiyasyon sa yo mande sispann imedyatman epi chèche èd pwofesyonèl?",
        options: [
          "Ou wè yon batri ki anfle",
          "Yon aplikasyon lan yon ti kras",
          "Ou santi yon odè brile ki soti nan aparèy la",
          "Ou remake likid ki antre anndan aparèy la",
        ],
        correctIndexes: [0, 2, 3],
        explanation: "Batri anfle, odè brile, ak likid anndan aparèy la mande sispann imedyatman — yon aplikasyon lan pa yon ijans.",
      },
    },
    {
      id: "eq-m13-5",
      moduleId: "m13",
      recommendedLessonSlug: "mesaj-ere-ak-jwenn-ed",
      question: {
        kind: "scenario_decision",
        prompt: "Ou vle chèche sou entènèt pou konprann yon mesaj erè. Ki apwòch ki pi bon chans bay yon bon repons?",
        options: [
          "Chèche 'òdinatè m gen yon pwoblèm'",
          "Chèche tèks EGZAK mesaj erè a ansanm ak kontèks aparèy ou",
          "Pa chèche ditou, jis rekòmanse òdinatè a",
          "Chèche non moun ki fè òdinatè a sèlman",
        ],
        correctIndex: 1,
        explanation: "Tèks egzat ak kontèks aparèy bay rezilta rechèch pi presi ak itil.",
      },
    },

    // Module 14 — Digital Independence
    {
      id: "eq-m14-1",
      moduleId: "m14",
      recommendedLessonSlug: "itilize-ai-kom-yon-tite-odinate",
      question: {
        kind: "select_all",
        prompt: "Ki itilizasyon sa yo se bon fason pou itilize AI kòm titè òdinatè?",
        options: [
          "Mande l eksplike yon tèm teknik nan mo pi senp",
          "Pataje modpas kont ou pou l ede w pi vit",
          "Konpare de espesifikasyon òdinatè",
          "Kreye yon lis verifikasyon rezoud-pwoblèm",
        ],
        correctIndexes: [0, 2, 3],
        explanation: "Eksplikasyon, konparezon, ak lis verifikasyon se bon itilizasyon — pataje modpas pa janm apwopriye.",
      },
    },
    {
      id: "eq-m14-2",
      moduleId: "m14",
      recommendedLessonSlug: "aprann-nan-paj-ed-ak-tutoryel",
      question: {
        kind: "multiple_choice",
        prompt: "Ki premye sous ou ta dwe chèche pou èd sou yon pwoblèm òdinatè?",
        options: [
          "Premye videyo ki parèt san verifye sous li",
          "Sipò ofisyèl fabrikan aparèy/lojisyèl la",
          "Yon blog san dat piblikasyon",
          "Yon kòmantè aza sou rezo sosyal",
        ],
        correctIndex: 1,
        explanation: "Sipò ofisyèl la se sous ki pi fyab paske li soti dirèkteman nan konpayi ki fè aparèy/lojisyèl la.",
      },
    },
    {
      id: "eq-m14-3",
      moduleId: "m14",
      recommendedLessonSlug: "byennet-dijital-ak-atansyon",
      question: {
        kind: "scenario_decision",
        prompt:
          "Ou resevwa yon mesaj ki kreye yon santiman ijans fò ak laperèz, ki mande w aji san reflechi. Sa ta dwe fè w panse a...",
        options: [
          "Anyen, sa se jis yon mesaj nòmal",
          "Yon posib siy eskrokri — ijans emosyonèl se yon tektik komen",
          "Ou dwe toujou aji vit lè ou santi ijans",
          "Sa vle di mesaj la vrèman ijan",
        ],
        correctIndex: 1,
        explanation: "Ijans emosyonèl fò se yon tektik eskrokri komen — sa ta dwe fè w sispèk epi verifye.",
      },
    },
    {
      id: "eq-m14-4",
      moduleId: "m14",
      recommendedLessonSlug: "kapston-yon-travay-dijital-konple-nan-lavi-reyel",
      question: {
        kind: "multiple_choice",
        prompt: "Kapstòn nan mande ou itilize yon aplikasyon espesifik pou modifye dokiman an?",
        options: [
          "Wi, sèlman Microsoft Word aksepte",
          "Non, nenpòt aplikasyon ki ka sovgade/ekspòte PDF aksepte",
          "Wi, sèlman aplikasyon Windows aksepte",
          "Non, Kapstòn nan pa mande okenn dokiman ditou",
        ],
        correctIndex: 1,
        explanation: "Kapstòn nan aksepte nenpòt platfòm/aplikasyon ki bay menm rezilta a.",
      },
    },
    {
      id: "eq-m14-5",
      moduleId: "m14",
      recommendedLessonSlug: "kreye-woutin-dijital-semenn-ak-chak-mwa-ou",
      question: {
        kind: "match_term",
        prompt: "Matche chak zouti/konsèp ak sa li fè.",
        pairs: [
          { term: "Woutin Chak Semèn", meaning: "Òganize downloads, revize mesaj, sovgade travay" },
          { term: "Woutin Chak Mwa", meaning: "Mizajou, estokaj, sekirite kont" },
          { term: "Plan Pratik", meaning: "Lis kout aksyon pou kontinye ranfòse konpetans" },
        ],
        explanation: "Woutin chak semèn ak chak mwa gen wòl diferan, epi yon plan pratik kenbe kwasans lan kontinye.",
      },
    },
  ],
};

export function getComputerRebuildFinalExam() {
  return computerRebuildFinalExam;
}
