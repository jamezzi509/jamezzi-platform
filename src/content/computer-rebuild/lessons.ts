import type { CourseLesson } from "@/content/computer-rebuild/schema";

/**
 * Phase 2 prototype lessons per computer-internet-essentials-master-brief.md
 * Section 17. These validate the new block-based shell across all four
 * lesson modes before mass production begins — see docs/computer-course-migration-audit.md.
 *
 * Language: Haitian Creole (brief Section 7.4), English interface terms kept
 * in parentheses where the learner will see them on-screen.
 */
export const computerRebuildLessons: CourseLesson[] = [
  {
    id: "m1-l1",
    slug: "byenveni-ou-pa-pral-kraze-anyen",
    moduleId: "m1",
    order: 1,
    titleHt: "Byenveni: Ou Pa Pral Kraze Anyen",
    titleEn: "Welcome: You Will Not Break Everything",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Eksplike sa kou a pral ede w akonpli",
      "Konprann erè fè pati aprantisaj la, se pa yon bagay pou pè",
      "Fè premye aksyon gide ou nan kou a",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka eksplike sa kou a pral ede w fè, epi konnen yon ekran ou pa rekonèt se pa yon òdinatè domaje.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Kou sa a pral ede w konprann kijan òdinatè ak entènèt la reyèlman fonksyone, itilize pwòp òdinatè ou ak konfyans, pwoteje tèt ou sou entènèt, òganize fichye ou, kominike klèman, epi rezoud pwoblèm ki rive nan wout la. **Ou pa pral aprann tout bagay sou òdinatè** — ou pral aprann sa ou bezwen pou ou sispann santi w pèdi, yon ti aksyon nan yon fwa. Sa ka santi l pa familye nan kòmansman. Nou pral separe l an ti aksyon senp.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Konfyans Dijital (Digital Confidence)",
            definition:
              "Kapasite pou itilize yon òdinatè san pè, menm lè yon bagay pa fè sans imedyatman.",
            example: "Konfyans dijital pa vle di konnen tout bagay — li vle di pa pè eseye.",
          },
          {
            term: "Undo",
            definition: "Yon kòmand ki anile dènye aksyon ou fè.",
            example: "Prèske chak erè ou fè ka anile ak Undo.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Panse klike sou move bouton an ka 'kraze' òdinatè a nèt.",
          right: "Konprann yon ekran ou pa rekonèt se pa yon domaj — pifò aksyon ka anile.",
          why: "Pè eseye anpeche w aprann — konprann sa a bay ou libète pou eksplore san estrès.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I'm just starting to learn how to use a computer. Can you explain, in very simple terms, what a computer actually does?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario:
            "Ou pral fè premye aksyon konfyans ou sou yon òdinatè — pa gen okenn fason pou fè sa a mal.",
          objective:
            "Louvri kou sa a sou yon òdinatè (oswa telefòn si ou pa gen aksè a yon òdinatè kounye a) epi navige jiskaske ou jwenn leson sa a ankò.",
          requiredSteps: [
            "Louvri yon navigatè (browser) sou aparèy ou",
            "Ale sou paj kou sa a",
            "Jwenn leson sa a ankò nan lis leson yo",
          ],
          successCriteria: [
            "Ou jwenn paj kou a yon dezyèm fwa san èd",
            "Ou santi w yon ti kras pi alèz pase anvan ou kòmanse",
          ],
          hint: "Si ou pèdi, itilize bouton 'Tounen' navigatè a — li pa janm twò ta pou tounen dèyè.",
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kisa ki rive lè ou klike sou yon bouton ou pa rekonèt?",
            options: [
              "Òdinatè a kraze pou tout bon",
              "Yon nouvo ekran louvri — pifò tan ou ka tounen dèyè",
              "Ou pèdi tout fichye ou yo otomatikman",
              "Òdinatè a fèmen nèt",
            ],
            correctIndex: 1,
            explanation:
              "Pifò aksyon ka anile oswa tounen dèyè — sa a se egzakteman sa ki fè eksplorasyon an sekirite.",
          },
          {
            kind: "scenario_decision",
            prompt:
              "Ou louvri yon paj ou pa rekonèt sou òdinatè a pa aksidan. Kisa ki pi bon aksyon an?",
            options: [
              "Panike epi fèmen òdinatè a nèt",
              "Gade paj la, epi si li pa sa ou t ap chèche, tounen dèyè",
              "Rale fich elektrik la",
              "Rele yon teknisyen imedyatman",
            ],
            correctIndex: 1,
            explanation:
              "Yon paj ou pa rekonèt pa yon ijans — gade l kalmman epi tounen dèyè si li pa itil.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m1-l2",
    slug: "kisa-yon-odinate-ye",
    moduleId: "m1",
    order: 2,
    titleHt: "Kisa Yon Òdinatè Ye?",
    titleEn: "What Is a Computer?",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Dekri yon òdinatè kòm yon machin ki resevwa, trete, sovgade, epi pwodwi enfòmasyon",
      "Distenge yon òdinatè de yon kalkilatris ak yon telefòn entelijan",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka eksplike kisa ki fè yon aparèy vin yon 'òdinatè', pa selman aparans li.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **òdinatè** se yon machin ki **resevwa enfòmasyon** (input), **trete l** (processing), **sovgade l** (storage), epi **pwodwi yon rezilta** (output). Yon laptop, yon telefòn entelijan, ak menm kèk televizyon modèn se tout òdinatè, paske yo tout fè kat aksyon sa yo — menm si yo pa sanble menm. Nan pwochen leson an, n ap gade pi fon nan chak nan kat aksyon sa yo.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panse yon kalkilatris se yon òdinatè paske li 'kalkile' bagay.",
          right: "Konprann yon kalkilatris pa gen estokaj oswa kapasite pou chanje sa li fè.",
          why: "Yon òdinatè ka fè plizyè travay diferan ak menm kat etap yo — yon kalkilatris fèt pou yon sèl travay sèlman.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you give me three more everyday examples of devices that count as computers, and explain why?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario:
            "Gade otou w kounye a — anpil aparèy nan lavi chak jou ou se òdinatè san ou pa remake sa.",
          objective:
            "Idantifye twa aparèy nan lakay ou (oswa ou konnen) ki gen kat karakteristik yon òdinatè.",
          requiredSteps: [
            "Panse a twa aparèy diferan (telefòn, televizyon, machin lave, elatriye)",
            "Pou chak aparèy, idantifye ki antre, trete, sòti, ak estokaj li genyen",
          ],
          successCriteria: [
            "Ou ka nonmen twa aparèy ki gen kat karakteristik sa yo",
            "Ou ka eksplike poukisa yo konte kòm 'òdinatè'",
          ],
          hint: "Yon telefòn entelijan se yon bon premye egzanp — l ap resevwa touch ou, trete l, montre yon rezilta, epi sovgade done ou.",
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki nan aparèy sa yo ki konte kòm yon òdinatè?",
            options: [
              "Yon laptop",
              "Yon telefòn entelijan",
              "Yon kalkilatris debaz ki fè sèlman adisyon",
              "Yon televizyon entelijan (smart TV)",
            ],
            correctIndexes: [0, 1, 3],
            explanation:
              "Laptop, telefòn entelijan, ak televizyon entelijan yo tout resevwa, trete, sovgade, epi pwodwi enfòmasyon — yon kalkilatris debaz sèlman fè yon sèl travay fiks.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m1-l3",
    slug: "antre-trete-soti-ak-estokaj",
    moduleId: "m1",
    order: 3,
    titleHt: "Antre, Trete, Sòti, ak Estokaj",
    titleEn: "Input, Processing, Output, and Storage",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Idantifye klavye ak souri kòm antre",
      "Eksplike wòl CPU a nan trete",
      "Idantifye ekran ak opalè kòm sòti",
      "Eksplike sa SSD la fè kòm estokaj",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka montre ki pati fizik yon òdinatè fè chak nan kat aksyon yo: antre, trete, sòti, estokaj.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Chak nan kat aksyon yon òdinatè fè gen yon pati fizik ki fè travay la. **Klavye ak souri** se antre — se konsa ou 'pale' ak òdinatè a. **CPU** a (processè santral la) se sèvo ki trete tout enfòmasyon an. **Ekran ak opalè** se sòti — se konsa òdinatè a 'reponn' ou. **SSD** la (oswa disk di) se estokaj — kote tout bagay rete menm apre ou etenn aparèy la.",
      },
      {
        id: "b3",
        type: "diagram",
        diagram: {
          diagramId: "input-processing-output-storage",
          caption: "Klavye/Souri → CPU → Ekran/Opalè, ak SSD kenbe done yo",
        },
      },
      {
        id: "b4",
        type: "vocabulary",
        words: [
          {
            term: "CPU (Processè Santral)",
            definition: "Pati òdinatè a ki trete tout enfòmasyon — sèvo òdinatè a.",
            example: "Yon CPU rapid fè òdinatè a reponn pi vit.",
          },
          {
            term: "SSD",
            definition: "Yon kalite disk estokaj modèn ki rapid, kote fichye ou rete.",
            example: "Yon SSD 256 GB ka kenbe anpil foto ak dokiman.",
          },
        ],
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Konfonn 'memwa ap travay' (RAM) ak 'kote fichye rete pou tout tan' (estokaj/SSD).",
          right: "Konprann SSD la kenbe fichye ou pou tout tan; RAM la se yon espas travay tanporè.",
          why: "Konfizyon sa a fè moun panse fèmen yon aplikasyon efase travay yo — se pa vre si yo te sovgade l nan estokaj.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain the difference between RAM and storage (SSD) in very simple terms, without technical jargon?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle konprann pwòp òdinatè ou pi byen.",
          objective:
            "Idantifye kat pati fizik sou aparèy ou ki reprezante antre, trete, sòti, ak estokaj.",
          requiredSteps: [
            "Gade aparèy ou (laptop, telefòn, elatriye)",
            "Idantifye kisa ki sèvi antre (klavye/ekran touch)",
            "Idantifye kisa ki sèvi sòti (ekran, opalè)",
          ],
          successCriteria: [
            "Ou ka montre oswa nonmen yon egzanp pou chak nan kat aksyon yo sou aparèy pa ou",
          ],
          hint: "Sou yon telefòn, ekran touch la se toude antre AK sòti an menm tan.",
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak pati ak wòl li.",
            pairs: [
              { term: "Klavye", meaning: "Antre" },
              { term: "CPU", meaning: "Trete" },
              { term: "Ekran", meaning: "Sòti" },
              { term: "SSD", meaning: "Estokaj" },
            ],
            explanation:
              "Klavye bay antre, CPU trete, ekran bay sòti, SSD kenbe estokaj.",
          },
          {
            kind: "multiple_choice",
            prompt: "Kisa ki rive fichye ou sovgade sou SSD lè ou etenn òdinatè a?",
            options: [
              "Yo disparèt otomatikman",
              "Yo rete la, menm apre òdinatè a etenn",
              "Yo tounen an foto",
              "Yo voye sou entènèt otomatikman",
            ],
            correctIndex: 1,
            explanation:
              "SSD la se estokaj pèmanan — fichye rete la jiskaske ou efase yo manyèlman.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m1-l4",
    slug: "adwe-ak-lojisyel",
    moduleId: "m1",
    order: 4,
    titleHt: "Adwè ak Lojisyèl",
    titleEn: "Hardware and Software",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Distenge hadwè (pati fizik) de lojisyèl (pwogram)",
      "Idantifye egzanp chak kategori",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka distenge yon pati fizik òdinatè (adwè) de yon pwogram (lojisyèl).",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Adwè** (hardware) se tout pati fizik ou ka touche — klavye, ekran, CPU, souri. **Lojisyèl** (software) se pwogram ak enstriksyon ki fè adwè a travay — yon navigatè entènèt, yon aplikasyon foto, sistèm operasyon an menm. Adwè san lojisyèl se yon bwat mouri; lojisyèl san adwè pa gen anyen pou fonksyone sou li.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Adwè (Hardware)",
            definition: "Pati fizik yon òdinatè ou ka touche.",
            example: "Klavye, ekran, ak souri se egzanp adwè.",
          },
          {
            term: "Lojisyèl (Software)",
            definition: "Pwogram ak enstriksyon ki fè adwè a travay.",
            example: "Yon navigatè entènèt se yon egzanp lojisyèl.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Panse 'chanje sistèm operasyon an' vle di achte yon nouvo òdinatè.",
          right: "Konprann sistèm operasyon an se lojisyèl — li ka enstale ankò san chanje adwè a.",
          why: "Konfonn de sa yo fè moun panse yo bezwen yon nouvo aparèy pou pwoblèm ki ka rezoud ak yon senp mizajou lojisyèl.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you give me 5 examples of hardware and 5 examples of software on a typical computer?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle byen konprann diferans lan sou pwòp aparèy ou.",
          objective: "Nonmen twa egzanp adwè ak twa egzanp lojisyèl sou aparèy ou.",
          requiredSteps: [
            "Gade aparèy ou epi nonmen twa pati fizik ou ka touche",
            "Panse a twa aplikasyon oswa pwogram ou itilize souvan",
          ],
          successCriteria: [
            "Ou ka separe kòrèkteman lis ou a an de kategori: adwè ak lojisyèl",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki nan sa yo ki se lojisyèl (pa adwè)?",
            options: [
              "Yon navigatè entènèt",
              "Yon klavye",
              "Yon sistèm operasyon",
              "Yon ekran",
            ],
            correctIndexes: [0, 2],
            explanation:
              "Navigatè a ak sistèm operasyon an se lojisyèl (pwogram) — klavye ak ekran se adwè (pati fizik).",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m1-l5",
    slug: "odinate-gen-plizye-fom",
    moduleId: "m1",
    order: 5,
    titleHt: "Òdinatè Gen Plizyè Fòm",
    titleEn: "Computers Come in Different Forms",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Rekonèt desktop, laptop, all-in-one, tablet, ak smartphone",
      "Eksplike ki fòm ki bon pou ki bezwen",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rekonèt diferan fòm òdinatè yo epi eksplike ki fòm ki bon pou ki bezwen.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **òdinatè debiwo** (desktop) rete nan yon sèl kote, souvan pi pwisan. Yon **laptop** pòtatif, bon pou moun ki deplase. Yon **all-in-one** konbine ekran ak òdinatè a nan yon sèl pyès. Yon **tablet** oswa **smartphone** fèt sitou pou touch, pi senp pou navige men limite pou travay konplèks. Yon **Chromebook** se yon laptop senp ki depann anpil sou entènèt.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "All-in-One",
            definition: "Yon òdinatè kote ekran an ak tout pati yo nan yon sèl pyès.",
            example: "Yon iMac se yon egzanp popilè all-in-one.",
          },
          {
            term: "Chromebook",
            definition: "Yon laptop senp ki depann anpil sou entènèt pou fonksyone.",
            example: "Chromebook bon pou navige entènèt ak dokiman senp.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Panse yon tablet ka ranplase yon laptop pou nenpòt travay.",
          right: "Konprann tablet bon pou navige ak gade kontni, men limite pou travay konplèks tankou dokiman long.",
          why: "Chwazi bon fòm pou bezwen ou evite fristrasyon ak depans initil.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I need a device mainly for browsing the internet, email, and video calls. Would a tablet, laptop, or Chromebook be a better fit, and why?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Twa moun diferan bezwen yon aparèy pou rezon diferan.",
          objective:
            "Chwazi yon fòm òdinatè pou twa moun fiktif epi eksplike chwa ou.",
          requiredSteps: [
            "Yon elèv ki bezwen ekri devwa ak fè rechèch pou lekòl",
            "Yon granmoun ki sèlman vle rele fanmi ak gade foto",
            "Yon moun k ap vwayaje souvan pou travay",
          ],
          successCriteria: [
            "Ou chwazi yon fòm diferan (oswa menm youn ak yon bon rezon) pou chak moun",
            "Ou ka eksplike poukisa chak chwa fè sans",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt:
              "Yon granmoun ki vwayaje souvan bezwen yon aparèy lejè pou verifye imèl ak fè apèl videyo. Ki fòm ki pi bon?",
            options: ["Yon desktop pwisan", "Yon laptop lejè", "Yon all-in-one", "Pa gen diferans"],
            correctIndex: 1,
            explanation: "Yon laptop lejè bon pou pòtabilite ak bezwen debaz tankou imèl ak apèl videyo.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m1-l6",
    slug: "windows-macos-android-ios",
    moduleId: "m1",
    order: 6,
    titleHt: "Windows, macOS, Android, ak iOS",
    titleEn: "Windows, macOS, Android, and iOS",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Eksplike wòl yon sistèm operasyon",
      "Rekonèt Windows, macOS, Android, ak iOS kòm sistèm operasyon diferan",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka eksplike poukisa aparèy diferan sanble diferan, san panse youn pi bon pase lòt.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **sistèm operasyon** se lojisyèl prensipal ki kontwole tout òdinatè a — li fè posib pou ou itilize aplikasyon, jere fichye, ak konekte sou entènèt. **Windows** ak **macOS** se sistèm operasyon pou laptop/desktop; **Android** ak **iOS** se pou telefòn/tablet. Yo tout fè menm travay debaz la, men chak gen pwòp fason pou fè l — se poutèt sa enstriksyon yo ka diferan.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Sistèm Operasyon (Operating System)",
            definition: "Lojisyèl prensipal ki kontwole tout aparèy la.",
            example: "Windows ak macOS se de sistèm operasyon popilè.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Panse yon sistèm operasyon pi bon pase yon lòt pou tout moun.",
          right: "Konprann chak gen fòs ak fèblès — bon chwa a depann de bezwen ak abitid ou.",
          why: "Konpare san rezon ka fè w pè eseye yon sistèm ki ta ka byen adapte ak bezwen ou.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain what an operating system does, using an analogy that would make sense to someone who has never used a computer?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle konnen ki sistèm operasyon ou itilize kounye a.",
          objective: "Idantifye sistèm operasyon aparèy ou (laptop ak/oswa telefòn).",
          requiredSteps: [
            "Gade laptop ou (si ou genyen) epi idantifye si li Windows oswa Mac",
            "Gade telefòn ou epi idantifye si li Android oswa iPhone",
          ],
          successCriteria: [
            "Ou ka nonmen sistèm operasyon chak aparèy ou itilize",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak sistèm operasyon ak kalite aparèy li ye pou li.",
            pairs: [
              { term: "Windows", meaning: "Laptop/Desktop" },
              { term: "Android", meaning: "Telefòn/Tablet" },
            ],
            explanation:
              "Windows fèt pou laptop/desktop; Android fèt pou telefòn/tablet.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m1-l7",
    slug: "premye-misyon-dijital-ou",
    moduleId: "m1",
    order: 7,
    titleHt: "Premye Misyon Dijital Ou",
    titleEn: "Your First Digital Mission",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Limen yon òdinatè epi idantifye ekran, klavye, ak endikatè pouvwa/entènèt",
      "Retounen an sekirite nan leson an apre eksplorasyon",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka limen yon aparèy, idantifye pati prensipal li, epi retounen an sekirite nan kou a.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Se lè a pou konbine tout sa ou aprann nan Modil 1 nan yon premye aksyon reyèl. Pa gen okenn presyon — objektif la se santi w alèz limen yon aparèy epi navige piti piti, pa vin yon ekspè imedyatman.",
      },
      {
        id: "b3",
        type: "practice",
        instructions:
          "Limen òdinatè ou (oswa telefòn si se sa ou genyen kounye a). Pran tan ou pou idantifye ekran an, klavye a (si genyen), ak nenpòt limyè ki montre pouvwa oswa koneksyon entènèt.",
      },
      {
        id: "b4",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I just turned on my computer for the first time in a while. What are the basic things I should check are working before I start using it?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b5",
        type: "mission",
        mission: {
          scenario: "Se premye fwa ou ap eksplore aparèy ou avèk konfyans, etap pa etap.",
          objective:
            "Limen aparèy ou, louvri kou sa a sou li, epi jwenn leson sa a ankò san èd.",
          requiredSteps: [
            "Limen aparèy ou",
            "Louvri yon navigatè epi ale sou paj kou a",
            "Jwenn leson sa a ankò nan lis leson yo",
          ],
          successCriteria: [
            "Ou jwenn paj kou a yon dezyèm fwa san èd",
            "Ou idantifye ekran, klavye (si genyen), ak yon endikatè pouvwa oswa entènèt",
          ],
          hint: "Si ou pèdi, bouton 'Tounen' navigatè a toujou la pou ede w.",
        },
      },
      {
        id: "b6",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kisa ki pi bon aksyon si ou pèdi nan navigatè a?",
            options: [
              "Etenn aparèy la nèt",
              "Itilize bouton 'Tounen' navigatè a",
              "Panike",
              "Chanje modpas ou",
            ],
            correctIndex: 1,
            explanation:
              "Bouton 'Tounen' navigatè a toujou yon fason sekirize pou remèt ou kote ou te ye.",
          },
        ],
      },
      {
        id: "b7",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m1-mission",
    slug: "misyon-fe-konesans-ak-odinate-ou",
    moduleId: "m1",
    order: 8,
    titleHt: "Misyon: Fè Konesans ak Òdinatè Ou",
    titleEn: "Module Mission: Meet Your Computer",
    estimatedMinutes: 12,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 1 pou dekri pwòp òdinatè ou",
      "Anrejistre yon rezon pèsonèl pou vle konfyans dijital",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka dekri pwòp òdinatè ou konplètman, epi ou konnen poukisa ou vle konfyans dijital.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 1 la. Ou pral konbine tout sa ou aprann — kisa yon òdinatè ye, kat aksyon li fè, adwè vs lojisyèl, diferan fòm, ak sistèm operasyon — pou dekri pwòp aparèy ou pou premye fwa avèk vokabilè klè.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario:
            "Yon zanmi mande w eksplike aparèy ou ba yo, tankou si yo pa janm itilize yon òdinatè.",
          objective:
            "Idantifye kalite aparèy ou, sistèm operasyon li, ak yon egzanp pou chak nan kat aksyon (antre/trete/sòti/estokaj), epi anrejistre yon rezon ou vle konfyans dijital.",
          requiredSteps: [
            "Idantifye kalite aparèy ou (laptop, telefòn, elatriye) ak sistèm operasyon li",
            "Nonmen yon egzanp antre, yon egzanp sòti, ak konsèp estokaj li",
            "Ekri yon fraz kout sou poukisa ou vle vin pi alèz ak teknoloji",
          ],
          successCriteria: [
            "Ou ka dekri aparèy ou nan yon fraz oswa de, ak vokabilè kout leson sa yo",
            "Ou ekri yon rezon pèsonèl pou konfyans dijital",
          ],
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete kat aksyon yon òdinatè fè nan lòd lojik la.",
            steps: ["Antre (Input)", "Trete (Processing)", "Sòti (Output)", "Estokaj (Storage)"],
            correctOrder: [0, 1, 2, 3],
            explanation:
              "Enfòmasyon antre, li trete, li pwodwi yon sòti, epi li ka sovgade nan estokaj.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen fin konprann pwòp òdinatè mwen pi byen kounye a." },
          { statement: "Mwen ta renmen plis egzanp anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 2." },
        ],
      },
    ],
  },
  {
    id: "m2-l1",
    slug: "sa-ki-rive-le-ou-peze-bouton-pouvwa-a",
    moduleId: "m2",
    order: 1,
    titleHt: "Sa Ki Rive Lè Ou Peze Bouton Pouvwa a?",
    titleEn: "What Happens When You Press the Power Button?",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Dekri etap debaz ant limen aparèy la ak wè yon ekran koneksyon",
      "Konprann poukisa limen yon aparèy pran kèk segonn",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka eksplike an gwo liy sa ki rive ant ou peze bouton pouvwa a ak ou wè ekran an pare pou itilize.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè ou peze bouton pouvwa a, aparèy la fè yon seri verifikasyon rapid pou asire tout pati fizik yo (klavye, ekran, elatriye) mache byen. Apre sa, li chaje **sistèm operasyon** an (Windows, macOS, elatriye) — sa ki pran pifò tan an. Finalman, ou wè yon ekran koneksyon kote ou antre modpas ou pou rive nan Desktop la.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Chaje (Boot/Startup)",
            definition: "Pwosesis limen ak prepare òdinatè a pou itilize.",
            example: "Chaje a ka pran 10-30 segonn selon aparèy la.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Peze bouton pouvwa a plizyè fwa paske aparèy la sanble pa reponn pandan chaje a.",
          right: "Tann kèk segonn — chaje a nòmalman pran tan, se pa yon siy pwoblèm.",
          why: "Peze bouton pouvwa a plizyè fwa pandan chaje a ka enterompi pwosesis la epi kreye yon pwoblèm reyèl.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My computer takes a long time to start up after I press the power button. Is that normal, and when should I be concerned?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle obsève pwosesis chaje a yon fwa san estrès.",
          objective: "Limen aparèy ou epi kwonometre (apeprè) konbyen tan li pran pou rive nan ekran koneksyon an.",
          requiredSteps: [
            "Etenn epi limen aparèy ou (si posib) oswa sonje dènye fwa ou fè l",
            "Obsève chak etap: verifikasyon, chajman, ekran koneksyon",
          ],
          successCriteria: [
            "Ou ka dekri de nan twa etap yo (verifikasyon, chajman sistèm operasyon, ekran koneksyon)",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kòrèk apati ou peze bouton pouvwa a.",
            steps: [
              "Aparèy la fè verifikasyon rapid",
              "Sistèm operasyon an chaje",
              "Ekran koneksyon parèt",
            ],
            correctOrder: [0, 1, 2],
            explanation:
              "Verifikasyon dabò, apre sa sistèm operasyon an chaje, epi finalman ekran koneksyon an parèt.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m2-l2",
    slug: "motherboard-kote-pati-yo-konekte",
    moduleId: "m2",
    order: 2,
    titleHt: "Motherboard: Kote Pati Yo Konekte",
    titleEn: "The Motherboard: Where Parts Connect",
    estimatedMinutes: 7,
    mode: "universal",
    objectives: [
      "Konprann wòl motherboard la san bezwen louvri òdinatè a",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka eksplike wòl motherboard la nan yon fraz senp, san bezwen janm louvri yon òdinatè.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Motherboard** la se gwo plak elektwonik anndan òdinatè a kote tout lòt pati yo (CPU, RAM, estokaj) konekte epi kominike youn ak lòt. Panse a li tankou sistèm nève santral kò a — ou pa bezwen wè l pou konprann li fè posib pou tout pati yo travay ansanm. Ou pa janm bezwen louvri òdinatè a pou konprann sa.",
      },
      {
        id: "b3",
        type: "mistake",
        mistake: {
          wrong: "Louvri òdinatè a pou eseye 'wè' oswa 'ranje' motherboard la san konesans teknik.",
          right: "Konprann motherboard la se yon konsèp pou konprann, pa yon bagay pou ou manipile.",
          why: "Louvri yon òdinatè san konesans ka domaje l oswa anile garanti a — sa se travay pou yon teknisyen fòme.",
        },
      },
      {
        id: "b4",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain what a motherboard does using a simple analogy, without any technical engineering detail?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b5",
        type: "mission",
        mission: {
          scenario: "Ou vle konsolide konprann konsèp motherboard la san manipile okenn pyès.",
          objective: "Eksplike ak pwòp mo ou wòl motherboard la bay yon lòt moun.",
          requiredSteps: [
            "Panse a yon analoji pèsonèl (tankou yon sant telefòn ki konekte apèl, oswa yon gid trafik)",
            "Ekri oswa di analoji sa a apiye sou sa ou aprann",
          ],
          successCriteria: [
            "Ou ka eksplike motherboard la san mo teknik konplike",
          ],
        },
      },
      {
        id: "b6",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ki aksyon ou pa ta dwe fè si ou vle konprann motherboard la?",
            options: [
              "Li sou entènèt sou li",
              "Louvri òdinatè a pou manipile l san konesans teknik",
              "Mande yon AI eksplike l",
              "Panse a yon analoji senp",
            ],
            correctIndex: 1,
            explanation:
              "Louvri yon òdinatè san konesans teknik ka domaje l — sa se travay pou yon teknisyen fòme.",
          },
        ],
      },
      {
        id: "b7",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m2-l3",
    slug: "cpu-travaye-odinate-a",
    moduleId: "m2",
    order: 3,
    titleHt: "CPU: Travayè Òdinatè a",
    titleEn: "CPU: The Computer's Worker",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Eksplike wòl CPU a nan trete enstriksyon",
      "Konprann vitès pa detèmine sèlman pa non CPU a",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka eksplike wòl CPU a san panse yon non CPU sèl detèmine vitès òdinatè a.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**CPU** a (processè santral la) trete enstriksyon — li se pati ki fè 'travay panse' a nan òdinatè a. Moun rele l 'sèvo' òdinatè a pafwa, men se yon senplifikasyon: yon CPU pa 'panse' tankou yon moun, li sèlman egzekite enstriksyon trè rapid. Vitès reyèl yon òdinatè pa depann sèlman de non CPU a — RAM, estokaj, ak konsepsyon jeneral aparèy la konte tou.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "CPU (Processè)",
            definition: "Pati ki trete tout enstriksyon nan yon òdinatè.",
            example: "Chak fwa ou klike sou yon bagay, CPU a trete kòmand lan.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Panse yon CPU ak yon non enprsyonan (tankou 'i7') otomatikman siyifi yon òdinatè rapid.",
          right: "Konprann non CPU a sèlman se yon pati nan istwa a — jenerasyon, ak rès aparèy la konte tou.",
          why: "Nou pral wè sa an detay nan Modil 12 lè n ap pale de achte yon òdinatè — pou kounye a, sonje se pa non sèl ki konte.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain what a CPU does using an everyday analogy, and clarify that it doesn't 'think' the way a human brain does?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle konprann pwòp CPU aparèy ou apeprè.",
          objective: "Chèche non CPU aparèy ou (si posib) san bezwen konprann tout detay li.",
          requiredSteps: [
            "Chèche 'About This Mac' (Mac) oswa 'System Information' (Windows) nan paramèt aparèy ou",
            "Idantifye non CPU a, san w pa bezwen konprann tout detay li kounye a",
          ],
          successCriteria: [
            "Ou jwenn non CPU a (oswa konprann kote pou chèche l pita)",
          ],
          hint: "Pa gen presyon pou konprann non an kounye a — Modil 12 ap eksplike sa pi devan.",
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt:
              "Yon vandè di w 'CPU sa a gen non i7, li dwe pi rapid pase tout lòt yo.' Ki repons ki pi kòrèk?",
            options: [
              "Vre, non an sèl garanti vitès",
              "Pa nesesèman — jenerasyon ak rès aparèy la konte tou",
              "Non an pa gen okenn enpòtans ditou",
              "Sèlman pri a konte",
            ],
            correctIndex: 1,
            explanation:
              "Yon non CPU sèl pa garanti vitès — jenerasyon, konfigirasyon, ak rès aparèy la enpòtan tou.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m2-l4",
    slug: "ram-espas-travay-tanpore-a",
    moduleId: "m2",
    order: 4,
    titleHt: "RAM: Espas Travay Tanporè a",
    titleEn: "RAM: The Working Space",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Eksplike RAM kòm memwa travay tanporè",
      "Distenge RAM de estokaj pèmanan",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka eksplike diferans ant RAM (espas travay tanporè) ak estokaj (kote fichye rete pou tout tan).",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**RAM** se yon espas travay tanporè — panse a yon tab travay kote ou mete dokiman ou ap itilize kounye a. Lè ou gen twòp aplikasyon louvri an menm tan, tab la vin twò chaje epi òdinatè a vin dousman. Kontrèman ak estokaj (SSD), tout sa ki nan RAM la disparèt lè ou etenn aparèy la — se poutèt sa ou dwe **sovgade** travay ou nan estokaj anvan ou fèmen yon aplikasyon.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "RAM",
            definition: "Memwa travay tanporè yon òdinatè itilize pandan li ap fonksyone.",
            example: "Plis RAM ou genyen, plis aplikasyon ou ka kenbe louvri san pwoblèm.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Panse fèmen yon aplikasyon san sovgade pa gen okenn konsekans paske 'li nan òdinatè a'.",
          right: "Konprann travay ki pa sovgade nan yon fichye ka pèdi si RAM la efase l (fèmen aplikasyon, koupi kouran, elatriye).",
          why: "Sa se youn nan konfizyon debaz ki fè moun pèdi travay enpòtan pa aksidan.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain the difference between RAM and storage using a desk-and-filing-cabinet analogy?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou remake òdinatè ou vin dousman lè ou gen anpil bagay louvri.",
          objective: "Konte konbyen aplikasyon/tab ou gen louvri kounye a epi fèmen sa ou pa itilize.",
          requiredSteps: [
            "Gade tout aplikasyon ak tab navigatè ou gen louvri",
            "Fèmen sa ou pa itilize aktivman",
          ],
          successCriteria: [
            "Ou remake si aparèy la reponn pi vit apre ou fèmen sa ou pa bezwen",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kisa ki rive done ki nan RAM lè ou etenn aparèy la?",
            options: [
              "Yo rete la pou tout tan",
              "Yo disparèt",
              "Yo tounen an foto",
              "Yo voye sou entènèt",
            ],
            correctIndex: 1,
            explanation:
              "RAM se memwa tanporè — tout sa ki ladan disparèt lè aparèy la etenn.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m2-l5",
    slug: "estokaj-kote-fichye-rete",
    moduleId: "m2",
    order: 5,
    titleHt: "Estokaj: Kote Fichye Rete",
    titleEn: "Storage: Where Files Stay",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Distenge SSD ak HDD",
      "Konprann inite kapasite estokaj",
      "Eksplike poukisa estokaj plen kreye pwoblèm",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka eksplike kisa estokaj ye, kisa inite kapasite yo vle di, ak poukisa estokaj plen kreye pwoblèm.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Estokaj lokal** se kote fichye ou rete pou tout tan sou aparèy la menm — **SSD** (rapid, modèn) ak **HDD** (pi ansyen, pi lan) se de kalite. Kapasite mezire an **GB** (gigabit) oswa **TB** (terabit — 1000 GB). Lè estokaj la prèske plen, aparèy la ka vin dousman, echwe pou mizajou, oswa refize sovgade nouvo fichye.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "SSD",
            definition: "Kalite estokaj modèn ki rapid, san pati k ap deplase.",
            example: "Pifò laptop modèn itilize SSD kounye a.",
          },
          {
            term: "HDD",
            definition: "Kalite estokaj pi ansyen, pi lan, ak pati k ap deplase anndan l.",
            example: "Kèk desktop ansyen toujou itilize HDD.",
          },
          {
            term: "GB / TB",
            definition: "Inite ki mezire kapasite estokaj — 1 TB egal 1000 GB.",
            example: "Yon telefòn ka gen 128 GB estokaj.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Kite estokaj la ranpli nèt san janm verifye konbyen plas ki rete.",
          right: "Verifye espas estokaj ou regilyèman epi netwaye fichye ou pa bezwen ankò.",
          why: "Yon aparèy ki plen nèt ka vin dousman, echwe fè mizajou, oswa refize pran nouvo foto enpòtan.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain how to check how much storage space I have left on my phone or computer?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle konnen konbyen espas ki rete sou aparèy ou.",
          objective: "Jwenn konbyen espas estokaj total ak konbyen ki toujou disponib sou aparèy ou.",
          requiredSteps: [
            "Ale nan paramèt aparèy ou epi chèche seksyon 'Storage' oswa 'Estokaj'",
            "Note total la ak sa ki rete disponib",
          ],
          successCriteria: [
            "Ou ka di apeprè konbyen GB/TB ou genyen ak konbyen ki rete",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki pwoblèm ki ka rive lè estokaj yon aparèy prèske plen?",
            options: [
              "Aparèy la vin dousman",
              "Mizajou ka echwe",
              "Aparèy la vin pi rapid",
              "Ou ka pa ka sovgade nouvo foto",
            ],
            correctIndexes: [0, 1, 3],
            explanation:
              "Estokaj plen ka fè aparèy la dousman, fè mizajou echwe, epi anpeche nouvo fichye sovgade — li pa fè aparèy la pi rapid.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m2-l6",
    slug: "grafik-ekran-son-kamera-ak-mikwofon",
    moduleId: "m2",
    order: 6,
    titleHt: "Grafik, Ekran, Son, Kamera, ak Mikwofòn",
    titleEn: "Graphics, Screen, Sound, Camera, and Microphone",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Rekonèt pati sòti ak kominikasyon yon òdinatè",
      "Konnen endikatè privasi kamera/mikwofòn",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rekonèt pati ki fè òdinatè a 'montre' ak 'tande/pale' ak ou, epi konnen kijan pou verifye privasi kamera ou.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Kat grafik** la (entegre oswa separe) kontwole sa ki parèt sou ekran an. **Ekran an**, **opalè yo**, **kamera a**, ak **mikwofòn nan** se tout pati sòti ak kominikasyon — yo fè posib pou ou wè, tande, ak pataje imaj/vwa ou. Pifò aparèy modèn gen yon **limyè endikatè** ki limen lè kamera a ap itilize — bon abitid se verifye limyè sa a pou konnen si kamera ou aktive san ou pa konnen.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Grafik Entegre vs. Separe",
            definition: "Grafik entegre pataje resous ak CPU a; grafik separe gen pwòp memwa li pou travay grafik lou.",
            example: "Jwèt konplèks souvan bezwen grafik separe.",
          },
          {
            term: "Endikatè Privasi (Privacy Indicator)",
            definition: "Yon limyè oswa senbòl ki montre lè kamera/mikwofòn ap itilize.",
            example: "Verifye limyè kamera a limen sèlman lè ou vle itilize l.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Pa janm verifye endikatè privasi kamera/mikwofòn ou.",
          right: "Verifye endikatè a detanzantan, sitou apre ou enstale yon nouvo aplikasyon.",
          why: "Sa ede w remake si yon aplikasyon ap itilize kamera/mikwofòn ou san ou pa konnen.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain how to check which apps have permission to use my camera and microphone on my computer or phone?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle konfime kamera ak mikwofòn ou an sekirite.",
          objective: "Jwenn lis aplikasyon ki gen pèmisyon pou kamera ak mikwofòn ou.",
          requiredSteps: [
            "Ale nan paramèt privasi aparèy ou",
            "Gade lis aplikasyon ki gen aksè a kamera ak mikwofòn",
          ],
          successCriteria: [
            "Ou idantifye si gen yon aplikasyon ki gen aksè ou pa rekonèt oswa pa itilize ankò",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kisa yon endikatè privasi kamera montre w?",
            options: [
              "Batri ou ba",
              "Kamera a ap itilize kounye a",
              "Wi-Fi ou dekonekte",
              "Estokaj ou plen",
            ],
            correctIndex: 1,
            explanation:
              "Yon endikatè privasi limen lè kamera (oswa mikwofòn) ap itilize aktivman.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m2-l7",
    slug: "batri-chaje-ak-kouran",
    moduleId: "m2",
    order: 7,
    titleHt: "Batri, Chajè, ak Kouran",
    titleEn: "Battery, Charger, and Power",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Chaje aparèy la ak bon chajè a san danje",
      "Konprann vyeyisman batri ak koupi kouran",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka chaje aparèy ou an sekirite epi pwoteje batri li pi lontan.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Toujou itilize **chajè kòrèk** aparèy la (oswa youn ki gen menm spesifikasyon) — yon chajè ki pa kòrèk ka domaje batri a. Batri yo **vyeyi** avèk tan — yo kenbe mwens chaj apre plizyè ane itilizasyon, sa se nòmal. Kote **kouran enstab** oswa **koupi kouran** rive souvan, yon **pwotektè sirtansyon** (surge protector) ede pwoteje aparèy ou, epi sonje **sovgade travay ou souvan** an ka gen yon koupi sibitman.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Pwotektè Sirtansyon (Surge Protector)",
            definition: "Yon aparèy ki pwoteje elektwonik ou kont chanjman sibit nan kouran an.",
            example: "Konekte chajè ou nan yon pwotektè sirtansyon si kouran an enstab.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Itilize yon chajè ki pa kòrèk pou aparèy la paske 'li antre nan pò a'.",
          right: "Verifye spesifikasyon chajè a matche ak sa aparèy la mande anvan ou itilize l.",
          why: "Yon chajè ki pa kòrèk ka chaje twò lant, twò cho, oswa domaje batri a avèk tan.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! How do I know if a charger is the correct one for my laptop or phone, and what happens if I use the wrong one?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "safety",
        reminders: [
          "Sonje sovgade travay ou souvan si kouran an ka koupi sibitman",
          "Pa itilize yon chajè ki domaje oswa ki gen fil ekspoze",
        ],
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle asire w aparèy ou chaje an sekirite.",
          objective: "Verifye chajè ou se bon youn pou aparèy ou epi tcheke si batri li ap kenbe chaj byen.",
          requiredSteps: [
            "Gade chajè ou epi konfime li se orijinal la oswa youn ki gen menm spesifikasyon",
            "Verifye nivo batri ou nan paramèt aparèy la",
          ],
          successCriteria: [
            "Ou konfime chajè ou apwopriye pou aparèy ou",
          ],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Poukisa itilize yon pwotektè sirtansyon itil kote kouran an enstab?",
            options: [
              "Li fè aparèy la chaje pi vit",
              "Li pwoteje aparèy ou kont chanjman sibit nan kouran an",
              "Li ogmante estokaj aparèy la",
              "Li pa gen okenn efè",
            ],
            correctIndex: 1,
            explanation:
              "Yon pwotektè sirtansyon pwoteje elektwonik ou kont domaj cho chanjman sibit nan kouran an ka koze.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m2-l8",
    slug: "sistem-operasyon-aplikasyon-navigate-sit-ak-fichye",
    moduleId: "m2",
    order: 8,
    titleHt: "Sistèm Operasyon, Aplikasyon, Navigatè, Sit, ak Fichye",
    titleEn: "Operating System, Application, Browser, Website, and File",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Distenge sistèm operasyon de aplikasyon",
      "Distenge navigatè de sit entènèt",
      "Konprann yon sit pa yon aplikasyon enstale",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka distenge sistèm operasyon, aplikasyon, navigatè, sit entènèt, ak fichye san konfizyon.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se modèl mantal konplè a. **Sistèm operasyon** an (Windows/macOS) se pa Microsoft Office — Office se yon aplikasyon ki mache SOU sistèm operasyon an. **Chrome/Safari** se yon navigatè, li pa Google oswa entènèt la limenm — navigatè a se pòt dantre a. Yon **sit entènèt** pa yon aplikasyon enstale — ou vizite l atravè navigatè a, ou pa telechaje l tankou yon aplikasyon.",
      },
      {
        id: "b3",
        type: "mistake",
        mistake: {
          wrong: "Konfonn 'Windows' oswa 'Mac' ak 'Microsoft Office' oswa 'Chrome' ak 'Google/entènèt la'.",
          right: "Konprann sistèm operasyon an se fondasyon; aplikasyon (Office), navigatè (Chrome), ak sit (Google.com) se twa bagay diferan ki mache sou fondasyon sa a.",
          why: "Konfizyon sa a se youn nan pi gwo sous konfizyon debaz — konprann li klèman fè tout rès kou a pi fasil.",
        },
      },
      {
        id: "b4",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain the difference between an operating system, an app, a browser, and a website with one simple example for each?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b5",
        type: "mission",
        mission: {
          scenario: "Ou vle teste konprann modèl mantal la sou pwòp aparèy ou.",
          objective:
            "Idantifye yon egzanp pou chak nan senk konsèp yo sou aparèy ou (sistèm operasyon, aplikasyon, navigatè, sit, fichye).",
          requiredSteps: [
            "Nonmen sistèm operasyon aparèy ou",
            "Nonmen yon aplikasyon ou itilize souvan",
            "Nonmen navigatè ou itilize ak yon sit ou vizite souvan",
          ],
          successCriteria: [
            "Ou ka separe kòrèkteman chak egzanp nan bon kategori li",
          ],
        },
      },
      {
        id: "b6",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak tèm ak kategori kòrèk li.",
            pairs: [
              { term: "Windows", meaning: "Sistèm Operasyon" },
              { term: "Microsoft Word", meaning: "Aplikasyon" },
              { term: "Chrome", meaning: "Navigatè" },
              { term: "Google.com", meaning: "Sit Entènèt" },
            ],
            explanation:
              "Chak nivo bati sou lòt la: sistèm operasyon fè fondasyon, aplikasyon mache sou li, navigatè se yon aplikasyon espesyal, epi sit yo viv anndan navigatè a.",
          },
        ],
      },
      {
        id: "b7",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m2-l9",
    slug: "li-espesifikasyon-debaz-yon-odinate",
    moduleId: "m2",
    order: 9,
    titleHt: "Li Espesifikasyon Debaz Yon Òdinatè",
    titleEn: "Reading Basic Computer Specifications",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Idantifye pwosesè, RAM, estokaj, ak sistèm operasyon nan yon lis espesifikasyon",
      "Li espesifikasyon debaz san bezwen fè analiz konplèks",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka li yon lis espesifikasyon debaz òdinatè epi konprann sa chak liy vle di.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè ou gade yon lis espesifikasyon (spec sheet), chèche: **fanmi pwosesè** a (Intel/AMD/Apple), **RAM** (an GB), **kalite ak kapasite estokaj** (SSD, GB/TB), **gwosè ekran**, **sistèm operasyon**, **pò** (USB, HDMI), ak **kondisyon batri** si se yon aparèy itilize. Ou pa bezwen fè yon analiz konplèks kounye a — objektif la se rekonèt kategori yo, pa jije yo an detay (n ap fè sa nan Modil 12).",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Espesifikasyon (Specs)",
            definition: "Lis detay teknik yon aparèy — pwosesè, RAM, estokaj, elatriye.",
            example: "Verifye espesifikasyon anvan ou achte yon aparèy.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Eseye konprann tout detay teknik yon lis espesifikasyon konplèks imedyatman.",
          right: "Konsantre sou rekonèt sèt kategori debaz yo dabò — detay yo vin pita.",
          why: "Eseye konprann tout bagay yon sèl kou ka fè w santi w dekouraje san rezon.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Here are the specs for a laptop I'm looking at: [paste specs]. Can you explain each line in simple terms?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle pratike li espesifikasyon pwòp aparèy ou.",
          objective: "Jwenn ak nonmen sèt kategori espesifikasyon debaz aparèy ou.",
          requiredSteps: [
            "Ale nan 'About This Mac' oswa 'System Information' (Windows) sou aparèy ou",
            "Nonmen pwosesè, RAM, ak estokaj aparèy ou",
          ],
          successCriteria: [
            "Ou jwenn ak nonmen omwen twa nan sèt kategori yo sou pwòp aparèy ou",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki nan sa yo ki fè pati yon lis espesifikasyon debaz?",
            options: ["RAM", "Fanmi pwosesè a", "Koulè ki pi popilè", "Kapasite estokaj"],
            correctIndexes: [0, 1, 3],
            explanation:
              "RAM, fanmi pwosesè a, ak kapasite estokaj se tout kategori espesifikasyon debaz — koulè popilè pa gen rapò ak espesifikasyon teknik.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m2-mission",
    slug: "misyon-eksplike-odinate-ou",
    moduleId: "m2",
    order: 10,
    titleHt: "Misyon: Eksplike Òdinatè Ou",
    titleEn: "Module Mission: Explain Your Computer",
    estimatedMinutes: 12,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 2 pou eksplike pwòp òdinatè ou an detay",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka jwenn enfòmasyon debaz aparèy ou epi eksplike, ak mo senp, sistèm operasyon, RAM, estokaj, ak itilizasyon prensipal li.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 2 la. Ou pral konbine tout sa ou aprann — sa ki rive lè ou limen aparèy la, motherboard, CPU, RAM, estokaj, grafik/ekran/son, batri, modèl mantal OS/aplikasyon/navigatè/sit/fichye, ak li espesifikasyon — pou eksplike pwòp aparèy ou konplètman pou premye fwa.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario:
            "Yon zanmi ki pral achte yon òdinatè mande w eksplike pwòp aparèy ou ba yo kòm egzanp.",
          objective:
            "Jwenn enfòmasyon debaz aparèy ou epi eksplike sistèm operasyon, RAM, estokaj, ak itilizasyon prensipal li.",
          requiredSteps: [
            "Jwenn sistèm operasyon, RAM, ak kapasite estokaj aparèy ou",
            "Ekri oswa di yon fraz kout ki eksplike chak nan twa bagay sa yo",
            "Ekri yon fraz sou ki jan ou itilize aparèy ou pi souvan",
          ],
          successCriteria: [
            "Ou ka nonmen sistèm operasyon, RAM, ak estokaj aparèy ou san gade nòt",
            "Ou ka eksplike itilizasyon prensipal aparèy ou nan yon fraz",
          ],
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak pati ak wòl li nan òdinatè a.",
            pairs: [
              { term: "RAM", meaning: "Espas travay tanporè" },
              { term: "SSD", meaning: "Estokaj pèmanan" },
              { term: "CPU", meaning: "Trete enstriksyon" },
              { term: "Motherboard", meaning: "Konekte tout pati yo ansanm" },
            ],
            explanation:
              "Chak pati gen yon wòl espesifik: RAM travay tanporè, SSD estokaj pèmanan, CPU trete, motherboard konekte tout bagay.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen fin konprann kijan pwòp òdinatè mwen mache pi byen kounye a." },
          { statement: "Mwen ta renmen plis egzanp anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 3." },
        ],
      },
    ],
  },
  {
    id: "m3-l1",
    slug: "konfyans-souri-ak-trackpad",
    moduleId: "m3",
    order: 1,
    titleHt: "Konfyans ak Souri ak Trackpad",
    titleEn: "Mouse and Trackpad Confidence",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Itilize klik senp, doub klik, ak right-click ak konfyans",
      "Fè scroll ak drag-and-drop",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka itilize souri oswa trackpad pou klike, doub klike, right-click, scroll, ak rale (drag) ak konfyans.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Klik senp** (single-click) chwazi yon bagay. **Doub klik** (double-click, de fwa rapid) louvri yon fichye oswa aplikasyon. **Right-click** (klike ak bouton dwat la, oswa de dwèt sou trackpad la) louvri yon meni ak plis opsyon. **Scroll** deplase paj la anwo/anba. **Rale** (click-and-drag) kenbe bouton an anfonse pandan ou deplase souri a pou deplase yon bagay.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Kursè (Pointer)",
            definition: "Ti flèch ki montre kote souri/trackpad ou ye sou ekran an.",
            example: "Deplase kursè a sou yon bouton anvan ou klike.",
          },
          {
            term: "Right-Click",
            definition: "Klike ak bouton dwat souri a (oswa de dwèt sou trackpad) pou wè plis opsyon.",
            example: "Right-click sou yon fichye pou wè opsyon 'Rename' ak 'Delete'.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Eseye chak jès sou Desktop ou: yon klik senp sou yon espas vid, yon doub klik sou yon ikòn, epi yon right-click pou wè meni an parèt.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Klike plizyè fwa rapid lè yon sèl klik ta sifi, panse sa ap fè aksyon an mache pi vit.",
          right: "Yon sèl klik pou chwazi, doub klik sèlman pou louvri — plis klik pa fè anyen mache pi vit.",
          why: "Klike twòp fwa ka louvri menm aplikasyon an plizyè fwa oswa deplase seleksyon ou pa aksidan.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain the difference between a single-click, double-click, and right-click, and when to use each one?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle santi w konfòtab ak chak jès souri/trackpad debaz.",
          objective: "Pratike kat jès (klik, doub klik, right-click, scroll) sou pwòp aparèy ou.",
          requiredSteps: [
            "Klik senp sou yon ikòn pou chwazi l",
            "Doub klik sou yon ikòn pou louvri l",
            "Right-click sou yon espas vid pou wè meni an",
            "Fè scroll sou yon paj oswa dosye ki gen anpil kontni",
          ],
          successCriteria: [
            "Ou konplete kat jès yo san konfizyon",
          ],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak jès ak sa li fè.",
            pairs: [
              { term: "Klik senp", meaning: "Chwazi yon bagay" },
              { term: "Doub klik", meaning: "Louvri yon fichye/aplikasyon" },
              { term: "Right-click", meaning: "Louvri yon meni ak plis opsyon" },
            ],
            explanation:
              "Klik senp chwazi, doub klik louvri, right-click bay plis opsyon.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l2",
    slug: "kat-klavye-a",
    moduleId: "m3",
    order: 2,
    titleHt: "Kat Klavye a",
    titleEn: "Keyboard Map",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Rekonèt zòn prensipal klavye a: lèt, chif, Espas, Enter",
      "Rekonèt Shift, Caps Lock, Tab, flèch, ak tous modifikatè",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rekonèt tous prensipal klavye a epi eksplike wòl chak grenn.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Klavye a gen plizyè zòn: **lèt ak chif** pou tape, **Espas** pou separe mo, **Enter/Return** pou konfime oswa kòmanse yon nouvo liy, **Backspace/Delete** pou efase, **Shift** pou lèt majiskil oswa senbòl, **Caps Lock** pou kenbe tout lèt majiskil, **Tab** pou deplase ant chan (fields), **flèch** yo pou deplase kursè a, ak **tous modifikatè** (Ctrl/Cmd, Alt/Option) ki travay ansanm ak lòt tous pou rakousi.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Tous Modifikatè (Modifier Key)",
            definition: "Yon tous (Ctrl, Cmd, Alt, Shift) ki chanje sa yon lòt tous fè lè ou peze yo ansanm.",
            example: "Ctrl+C (oswa Cmd+C) se yon rakousi ki itilize yon tous modifikatè.",
          },
          {
            term: "Tab",
            definition: "Tous ki deplase kursè a bay pwochen chan nan yon fòm.",
            example: "Peze Tab pou deplase soti nan chan 'Non' pou al nan chan 'Adrès'.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Kite Caps Lock aktive pa aksidan epi tape tout mesaj an majiskil.",
          right: "Verifye limyè Caps Lock la (oswa senbòl ki parèt sou ekran) anvan ou tape yon mesaj enpòtan.",
          why: "Ekri tout an majiskil ka sanble ou ap rele nan kominikasyon dijital.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain what modifier keys (Ctrl, Cmd, Alt, Shift) are used for on a keyboard?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle konnen klavye ou pi byen anvan ou kòmanse tape long tèks.",
          objective: "Idantifye Shift, Caps Lock, Tab, ak tous modifikatè yo sou pwòp klavye ou.",
          requiredSteps: [
            "Gade klavye ou epi lokalize Shift, Caps Lock, ak Tab",
            "Lokalize tous Ctrl/Cmd ak Alt/Option",
          ],
          successCriteria: [
            "Ou ka montre chak tous san chèche twò lontan",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ki tous ou peze pou deplase ant chan nan yon fòm?",
            options: ["Shift", "Tab", "Caps Lock", "Espas"],
            correctIndex: 1,
            explanation: "Tab deplase kursè a bay pwochen chan nan yon fòm.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l3",
    slug: "chwazi-ak-modifye-teks",
    moduleId: "m3",
    order: 3,
    titleHt: "Chwazi ak Modifye Teks",
    titleEn: "Selecting and Editing Text",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Chwazi yon pòsyon tèks",
      "Distenge Backspace de Delete",
      "Itilize Undo pou anile yon erè",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka chwazi tèks, modifye l, epi anile yon erè ak konfyans.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Kursè** a se ti liy ki klipe (blinking) ki montre kote pwochen lèt ap parèt. Pou **chwazi** tèks, klike epi rale sou tèks la, oswa doub klike sou yon sèl mo. **Backspace** efase karaktè agoch kursè a; **Delete** efase karaktè adwat li. Ou ka **ranplase** tèks chwazi a lè ou tape nouvo tèks dirèkteman sou li. **Undo** (Ctrl+Z oswa Cmd+Z) anile dènye aksyon ou fè — youn nan zouti ki pi itil pou konfyans.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Kursè Tèks (Text Cursor)",
            definition: "Ti liy klipe ki montre kote pwochen karaktè ap parèt.",
            example: "Klike nan mitan yon fraz pou deplase kursè a la.",
          },
          {
            term: "Undo",
            definition: "Kòmand ki anile dènye aksyon ou fè.",
            example: "Peze Ctrl+Z (oswa Cmd+Z) si ou efase yon bagay pa erè.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Konfonn Backspace ak Delete epi efase mo ki nan move direksyon.",
          right: "Sonje: Backspace efase agoch kursè a, Delete efase adwat li.",
          why: "Konfonn yo ka fè w efase pati tèks ou pa t vle efase.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain the difference between Backspace and Delete, and give me a simple way to remember which is which?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle pratike modifye tèks san pè fè erè.",
          objective: "Tape yon fraz, chwazi yon mo, ranplase l, epi itilize Undo pou tounen dèyè.",
          requiredSteps: [
            "Tape yon fraz kout nan nenpòt aplikasyon tèks",
            "Chwazi yon mo epi ranplase l ak yon lòt",
            "Peze Ctrl+Z (oswa Cmd+Z) pou anile chanjman an",
          ],
          successCriteria: [
            "Fraz la retounen nan orijinal li apre Undo",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou efase yon paragraf antye pa aksidan. Ki premye aksyon ou ta dwe fè?",
            options: [
              "Tape paragraf la ankò de memwa",
              "Peze Ctrl+Z (oswa Cmd+Z) imedyatman",
              "Fèmen dokiman an san sovgade",
              "Rele yon teknisyen",
            ],
            correctIndex: 1,
            explanation:
              "Undo (Ctrl+Z/Cmd+Z) souvan ka restore travay ou pèdi pa aksidan imedyatman.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l4",
    slug: "tape-aksan-kreyol-ak-franse",
    moduleId: "m3",
    order: 4,
    titleHt: "Tape Aksan Kreyòl ak Franse",
    titleEn: "Typing Haitian Creole and French Accents",
    estimatedMinutes: 10,
    mode: "shared_steps",
    objectives: [
      "Aktive yon klavye ki gen aksan (Kreyòl/Franse)",
      "Tape é, è, à, ò, ù, ak ç",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka aktive yon klavye ki gen aksan epi tape é, è, à, ò, ù, ak ç san frustrasyon.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Anpil klavye Ozetazini pa gen tous dirèk pou aksan Kreyòl/Franse yo. Ou dwe **ajoute yon klavye** (tankou 'French' oswa 'Haitian Creole' si li disponib) nan paramèt lang aparèy ou, epi **chanje ant klavye yo** lè ou bezwen. Yon fwa ou fè sa, konbinezon tous espesyal fè posib pou ou tape é, è, à, ò, ù, ak ç.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Klavye Lang (Keyboard Layout)",
            definition: "Yon konfigirasyon klavye ki fè posib pou tape karaktè espesyal yon lang.",
            example: "Ajoute klavye 'French' pou jwenn aksè fasil a aksan yo.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Ale nan Settings > Time & Language > Language & Region",
            "Ajoute 'French' (oswa lang ki gen aksan ou bezwen)",
            "Klike ikòn lang nan taskbar la pou chanje ant klavye yo",
          ],
          mac: [
            "Ale nan System Settings > Keyboard > Input Sources",
            "Klike '+' epi ajoute 'French'",
            "Klike ikòn drapo/lang nan menu bar a pou chanje ant klavye yo",
          ],
          recoveryNote:
            "Si aksan yo pa parèt kòrèkteman apre ou chanje klavye a, verifye ou chwazi bon klavye a nan meni chanjman rapid la.",
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Kopye-kole aksan yo soti nan yon lòt sit chak fwa ou bezwen yo.",
          right: "Konfigire yon klavye ki gen aksan yon sèl fwa pou tape yo dirèkteman.",
          why: "Kopye-kole chak fwa pèdi anpil tan konpare ak konfigire klavye a yon sèl fwa.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you walk me through adding a French keyboard so I can type accented characters like é, è, and ò?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle ekri yon mesaj an Kreyòl ak aksan kòrèk.",
          objective: "Aktive yon klavye ki gen aksan epi tape yon ti fraz Kreyòl ak omwen de aksan.",
          requiredSteps: [
            "Ajoute yon klavye ki gen aksan nan paramèt aparèy ou",
            "Tape yon fraz tankou 'Mwen renmen aprann bagay nouvo' ak aksan kòrèk",
          ],
          successCriteria: [
            "Fraz ou tape a gen omwen de aksan kòrèk (é, è, oswa ò)",
          ],
          hint: "Sou telefòn, kenbe tous la anfonse pou wè opsyon aksan yo parèt.",
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kisa ou dwe fè anvan ou ka tape aksan Kreyòl/Franse fasil?",
            options: [
              "Achte yon nouvo klavye fizik",
              "Ajoute yon klavye lang nan paramèt aparèy ou",
              "Chanje sistèm operasyon an nèt",
              "Pa gen anyen pou fè",
            ],
            correctIndex: 1,
            explanation:
              "Ajoute yon klavye lang (tankou French) nan paramèt aparèy ou bay aksè a aksan yo san bezwen nouvo materyèl.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l-windows",
    slug: "biwo-windows-la",
    moduleId: "m3",
    order: 5,
    titleHt: "Biwo Windows la",
    titleEn: "The Windows Desktop",
    estimatedMinutes: 10,
    mode: "platform_variant",
    objectives: [
      "Rekonèt Desktop, taskbar, ak Start menu sou Windows",
      "Rekonèt system tray a ak notifikasyon yo",
      "Louvri yon aplikasyon soti nan Start menu a",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka jwenn Desktop, taskbar, Start menu, ak system tray sou yon òdinatè Windows, epi louvri yon aplikasyon.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Desktop** la se premye ekran ou wè lè òdinatè a fin limen — tankou tab travay ou. **Taskbar** la se ba ki rete toujou nan pati anba ekran an, ak **Start menu** a (bouton Windows nan kwen agoch anba a) se kote ou jwenn tout pwogram ou enstale sou òdinatè a. Nan kwen anba dwat taskbar la, **system tray** a montre ti ikòn pou Wi-Fi, volim, ak lè — se la **notifikasyon** yo parèt tou. Ou ka **pinen** (pin) yon aplikasyon nan taskbar la pou jwenn li pi vit pwochen fwa.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Taskbar",
            definition: "Ba ki rete nan pati anba ekran Windows la, ak pwogram ki louvri kounye a.",
            example: "Klike sou ikòn nan taskbar la pou retounen nan yon pwogram ki deja louvri.",
          },
          {
            term: "Start Menu",
            definition: "Meni ou louvri pou jwenn tout pwogram ki enstale sou òdinatè a.",
            example: "Klike bouton Windows nan kwen agoch anba a pou louvri Start menu.",
          },
          {
            term: "System Tray",
            definition: "Ti zòn nan kwen anba dwat taskbar la ak ikòn Wi-Fi, volim, ak lè.",
            example: "Klike ikòn Wi-Fi la nan system tray a pou wè rezo ki disponib.",
          },
          {
            term: "Pinen (Pin)",
            definition: "Kenbe yon aplikasyon vizib nan taskbar la pou jwenn li pi vit.",
            example: "Pinen aplikasyon ou itilize chak jou pou pa bezwen chèche l chak fwa.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Klike bouton Windows la (kwen anba agoch ekran an) pou louvri Start menu a, epi tape non yon pwogram ou konnen (tankou 'Calculator') pou chèche l.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Chèche pwogram yo sou Desktop la sèlman.",
          right: "Itilize Start menu a — tout pwogram ou enstale parèt la, menm si yo pa gen ikòn sou Desktop.",
          why: "Desktop la sèlman montre rakousi (shortcuts) ou mete la manyèlman — Start menu a montre tout bagay.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I'm on Windows and can't find a program I installed. Can you explain how to search for it using the Start menu?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou fèk resevwa yon nouvo laptop Windows epi ou vle jwenn yon aplikasyon rapid.",
          objective: "Louvri Start menu a epi jwenn yon aplikasyon lè ou tape non li.",
          requiredSteps: [
            "Klike bouton Windows la nan kwen anba agoch",
            "Tape non yon aplikasyon (tankou 'Calculator' oswa 'Notepad')",
            "Klike sou rezilta a pou louvri l",
          ],
          successCriteria: [
            "Aplikasyon an louvri sou ekran an",
            "Ou ka repete pwosesis la ak yon lòt aplikasyon san èd",
          ],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kote ou jwenn tout pwogram ki enstale sou yon òdinatè Windows?",
            options: ["Sou Desktop la sèlman", "Nan Start menu a", "Nan taskbar la sèlman", "Nan Trash"],
            correctIndex: 1,
            explanation: "Start menu a montre tout pwogram ki enstale, menm sa ki pa gen rakousi sou Desktop.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l-mac",
    slug: "biwo-mac-la",
    moduleId: "m3",
    order: 6,
    titleHt: "Biwo Mac la",
    titleEn: "The Mac Desktop",
    estimatedMinutes: 10,
    mode: "platform_variant",
    objectives: [
      "Rekonèt Desktop, menu bar, Apple menu, Dock, ak Control Center sou Mac",
      "Louvri yon aplikasyon soti nan Dock la",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka jwenn Desktop, menu bar, Apple menu, Dock, ak Control Center sou yon òdinatè Mac, epi louvri yon aplikasyon.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Desktop** la se premye ekran ou wè lè òdinatè a fin limen. **Menu bar** a se ti ba fen ki rete toujou nan tèt ekran an, kèlkeswa sa ki louvri — nan kwen agoch li, **Apple menu** a (ti ikòn pòm nan) bay aksè a paramèt sistèm ak opsyon etenn/rebooté. **Dock** la se ranje ikòn ki rete anba (oswa sou kote) ekran an, kote ou jwenn aplikasyon ou itilize souvan. Nan kwen anwo dwat, **Control Center** a bay aksè rapid a Wi-Fi, volim, ak notifikasyon.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Menu Bar",
            definition: "Ba fen ki rete nan tèt ekran Mac la, ak non aplikasyon k ap louvri kounye a.",
            example: "Menu bar a toujou montre 'File, Edit, View' pou aplikasyon ki aktif la.",
          },
          {
            term: "Apple Menu",
            definition: "Ti ikòn pòm nan kwen agoch anwo ki bay aksè a paramèt sistèm ak opsyon etenn.",
            example: "Klike Apple menu a pou jwenn 'Restart' oswa 'Shut Down'.",
          },
          {
            term: "Dock",
            definition: "Ranje ikòn ki rete anba ekran an pou louvri aplikasyon rapid.",
            example: "Klike yon fwa sou ikòn nan Dock la pou louvri aplikasyon an.",
          },
          {
            term: "Control Center",
            definition: "Meni rapid nan kwen anwo dwat pou Wi-Fi, volim, ak notifikasyon.",
            example: "Klike Control Center a pou ajiste volim san louvri Settings.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Gade Dock la nan pati anba ekran an, epi klike yon fwa sou yon ikòn ou rekonèt (tankou Calculator oswa Notes) pou louvri l.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panse fèmen fennèt yon aplikasyon (bouton wouj la) etenn aplikasyon an nèt.",
          right: "Konprann sou Mac, fèmen fennèt la souvan kite aplikasyon an louvri toujou an background.",
          why: "Sou Mac, X wouj la fèmen fennèt la, men aplikasyon an ka rete aktif — gade Dock la pou konfime.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I'm on a Mac and closed a window with the red X, but I think the app is still open. How can I tell, and how do I fully quit an app?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou fèk resevwa yon nouvo Mac epi ou vle jwenn yon aplikasyon rapid.",
          objective: "Louvri yon aplikasyon soti nan Dock la epi remake non li nan menu bar a.",
          requiredSteps: [
            "Gade Dock la nan pati anba ekran an",
            "Klike yon fwa sou yon ikòn aplikasyon",
            "Gade non aplikasyon an parèt nan menu bar a",
          ],
          successCriteria: [
            "Aplikasyon an louvri sou ekran an",
            "Ou ka idantifye non aplikasyon aktif la nan menu bar a",
          ],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kisa ki rive lè ou klike bouton wouj la pou fèmen yon fennèt sou Mac?",
            options: [
              "Aplikasyon an etenn nèt otomatikman",
              "Fennèt la fèmen, men aplikasyon an ka rete louvri an background",
              "Òdinatè a etenn",
              "Tout fichye ou yo sovgade otomatikman",
            ],
            correctIndex: 1,
            explanation:
              "Sou Mac, fèmen yon fennèt pa menm bagay ak kite yon aplikasyon — verifye Dock la pou konfime si l toujou aktif.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l7",
    slug: "louvri-chanje-feme-fennet",
    moduleId: "m3",
    order: 7,
    titleHt: "Louvri, Chanje, Minimize, Maximize, ak Fèmen",
    titleEn: "Open, Switch, Minimize, Maximize, and Close",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Minimize, maximize, ak fèmen yon fennèt",
      "Distenge fèmen yon fennèt de kite yon aplikasyon",
      "Chanje ant aplikasyon ak Alt+Tab (Windows) oswa Cmd+Tab (Mac)",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka jere fennèt (minimize, maximize, fèmen) epi chanje ant aplikasyon rapid.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Minimize** kache fennèt la san fèmen l (li rete louvri, ou ka retounen nan li). **Maximize** fè fennèt la ranpli tout ekran an. **Fèmen** yon fennèt pa toujou vle di **kite** (quit) yon aplikasyon — sitou sou Mac, aplikasyon an ka rete aktif menm apre fennèt li fèmen. Ou ka **chanje** rapid ant aplikasyon ki louvri ak yon rakousi klavye.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Minimize",
            definition: "Kache yon fennèt san fèmen aplikasyon an — li rete aktif.",
            example: "Minimize fennèt la pou wè Desktop la san fèmen aplikasyon an.",
          },
          {
            term: "Kite (Quit)",
            definition: "Fèmen yon aplikasyon konplètman, pa sèlman fennèt li.",
            example: "Kite yon aplikasyon lib memwa RAM pou lòt travay.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Peze Alt+Tab pou chanje ant aplikasyon ki louvri",
            "Klike bouton '_' pou minimize, bouton kare pou maximize, X pou fèmen",
          ],
          mac: [
            "Peze Cmd+Tab pou chanje ant aplikasyon ki louvri",
            "Klike bouton jòn pou minimize, vèt pou maximize, wouj pou fèmen fennèt (aplikasyon ka rete aktif)",
          ],
          recoveryNote:
            "Si ou pa ka jwenn yon aplikasyon ou panse ou fèmen, li ka toujou aktif — chèche l nan taskbar/Dock la.",
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panse fèmen fennèt yon aplikasyon toujou vle di li kite nèt.",
          right: "Sonje sou Mac sitou, fèmen fennèt la pa toujou kite aplikasyon an — verifye Dock la.",
          why: "Sa ka fè w panse yon aplikasyon fèmen alòske li toujou ap itilize RAM an background.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What's the difference between closing a window and quitting an application, and how do I fully quit an app?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou ap travay ak de aplikasyon an menm tan epi bezwen chanje ant yo.",
          objective: "Louvri de aplikasyon, chanje ant yo ak rakousi klavye, epi minimize youn.",
          requiredSteps: [
            "Louvri de aplikasyon diferan",
            "Itilize Alt+Tab (oswa Cmd+Tab) pou chanje ant yo",
            "Minimize youn nan yo",
          ],
          successCriteria: [
            "Ou chanje ant de aplikasyon san itilize souri a",
          ],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Sou Mac, kisa ki ka rive apre ou fèmen fennèt yon aplikasyon ak bouton wouj la?",
            options: [
              "Aplikasyon an kite nèt otomatikman",
              "Aplikasyon an ka rete aktif an background",
              "Òdinatè a etenn",
              "Tout lòt aplikasyon fèmen tou",
            ],
            correctIndex: 1,
            explanation:
              "Sou Mac, bouton wouj la fèmen fennèt la sèlman — aplikasyon an ka rete aktif jiskaske ou kite l konplètman.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l8",
    slug: "meni-bouton-ak-bwat-dyalog",
    moduleId: "m3",
    order: 8,
    titleHt: "Meni, Bouton, Checkbox, Lis, ak Bwat Dyalòg",
    titleEn: "Menus, Buttons, Checkboxes, Lists, and Dialogs",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Rekonèt kontwòl entèfas komen: bouton, checkbox, dropdown, dyalòg",
      "Konprann yon kontwòl grize (disabled)",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rekonèt kontwòl entèfas komen yo epi konprann kisa yo fè.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Prèske tout aplikasyon itilize menm kontwòl debaz yo: **bouton** ou klike pou fè yon aksyon, **checkbox** ou koche oswa dekoche, **lis dewoulan** (dropdown) ou klike pou wè plizyè chwa, ak **bwat dyalòg** (dialog) ki parèt pou konfime yon aksyon oswa mande enfòmasyon. Yon kontwòl **grize** (disabled, koulè pal) vle di ou pa ka klike sou li kounye a — souvan paske yon lòt bagay dwe fèt anvan.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Bwat Dyalòg (Dialog)",
            definition: "Yon ti fennèt ki parèt pou konfime yon aksyon oswa mande enfòmasyon.",
            example: "Yon bwat dyalòg parèt lè ou eseye efase yon fichye, pou konfime ou vle fè sa.",
          },
          {
            term: "Grize (Disabled)",
            definition: "Yon kontwòl ki pal ak ou pa ka klike sou li kounye a.",
            example: "Yon bouton 'Voye' ka grize jiskaske ou ranpli tout chan obligatwa yo.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Klike repete sou yon bouton grize panse sa ap fè l travay.",
          right: "Gade sa ki mank (yon chan vid, yon checkbox ou pa koche) anvan ou eseye ankò.",
          why: "Yon kontwòl grize la eksprè — li atann yon kondisyon ranpli anvan li aktive.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I see a grayed-out button in an app and I don't understand why I can't click it. What are common reasons a button might be disabled?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle rekonèt kontwòl entèfas yo nan yon aplikasyon ou deja genyen.",
          objective: "Jwenn yon egzanp bouton, checkbox, ak lis dewoulan nan yon aplikasyon ou itilize.",
          requiredSteps: [
            "Louvri yon aplikasyon oswa paramèt aparèy ou",
            "Idantifye yon bouton, yon checkbox, ak yon lis dewoulan",
          ],
          successCriteria: [
            "Ou ka montre egzanp chak nan twa kontwòl yo",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kisa yon bouton grize (disabled) vle di?",
            options: [
              "Li kraze pou tout tan",
              "Ou pa ka klike sou li kounye a, souvan paske yon kondisyon poko ranpli",
              "Li se yon erè nan aplikasyon an",
              "Li mande yon mizajou",
            ],
            correctIndex: 1,
            explanation:
              "Yon bouton grize atann yon kondisyon (tankou yon chan ranpli) anvan li vin aktive.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l9",
    slug: "kopye-koupe-kole-anile-refe",
    moduleId: "m3",
    order: 9,
    titleHt: "Kopye, Koupe, Kole, Anile, ak Refè",
    titleEn: "Copy, Cut, Paste, Undo, and Redo",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Kopye ak kole tèks oswa fichye",
      "Konprann poukisa Koupe pi riske pase Kopye pou yon debitan",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka kopye, koupe, kole, anile, ak refè ak konfyans, ak klavye oswa meni.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Clipboard** la se yon 'panyen' tanporè ki kenbe dènye bagay ou kopye oswa koupe. **Kopye** kenbe orijinal la, ajoute yon dupliya nan clipboard. **Koupe** retire bagay la kite kite li nan orijinal la, kenbe l nan clipboard sèlman. **Kole** mete sa ki nan clipboard la kote kursè ou ye. **Anile** (Undo) tounen dèyè yon aksyon; **Refè** (Redo) fè l ankò si ou anile pa erè.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Clipboard",
            definition: "Panyen tanporè ki kenbe dènye bagay ou kopye oswa koupe.",
            example: "Sa ki nan clipboard la disparèt lè ou kopye yon lòt bagay.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: ["Ctrl+C pou kopye", "Ctrl+X pou koupe", "Ctrl+V pou kole", "Ctrl+Z pou anile, Ctrl+Y pou refè"],
          mac: ["Cmd+C pou kopye", "Cmd+X pou koupe", "Cmd+V pou kole", "Cmd+Z pou anile, Cmd+Shift+Z pou refè"],
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Itilize Koupe (Cut) lè ou pa sèten kote ou pral kole, pandan ou toujou nan aprann.",
          right: "Itilize Kopye pito lè ou pa sèten — orijinal la rete si yon bagay mal pase.",
          why: "Si ou koupe epi ou pa reyisi kole, ou ka pèdi bagay la nèt pou tanporè — kopye pi an sekirite pou yon debitan.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Why is 'Cut' considered riskier than 'Copy' for beginners? Can you explain with an example?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle deplase yon moso tèks soti nan yon kote pou al nan yon lòt.",
          objective: "Kopye yon fraz epi kole l yon lòt kote, apre sa eseye Koupe ak Kole yon lòt fraz.",
          requiredSteps: [
            "Chwazi yon fraz, kopye l (Ctrl+C/Cmd+C), epi kole l yon lòt kote",
            "Chwazi yon lòt fraz, koupe l (Ctrl+X/Cmd+X), epi kole l",
          ],
          successCriteria: [
            "Toude operasyon reyisi san ou pa pèdi tèks",
          ],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt:
              "Ou pa sèten ki kote ou pral kole yon moso tèks enpòtan. Ki chwa ki pi an sekirite?",
            options: ["Koupe l imedyatman", "Kopye l pito", "Efase l epi tape l ankò", "Pa gen diferans"],
            correctIndex: 1,
            explanation:
              "Kopye kenbe orijinal la an sekirite — si kole a echwe, ou pa pèdi anyen.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l10",
    slug: "rale-lage-san-pedi-anyen",
    moduleId: "m3",
    order: 10,
    titleHt: "Rale ak Lage San Pèdi Anyen",
    titleEn: "Drag and Drop Without Losing Things",
    estimatedMinutes: 7,
    mode: "universal",
    objectives: [
      "Deplase yon fichye ak rale-lage",
      "Distenge deplase de kopye pandan yon rale-lage",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rale-lage yon fichye an sekirite san w pa pèdi kote li te ye.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Rale-lage** (drag and drop) se kenbe klik la anfonse sou yon bagay epi deplase souri a pou pote l yon lòt kote anvan ou lage klik la. Pa default, sa **deplase** fichye a — men sou kèk sistèm, kenbe yon tous modifikatè pandan ou rale ka **kopye** l pito. Toujou gade **destinasyon vizyèl la** (dosye a klere) anvan ou lage, epi sonje ou ka toujou anile ak Ctrl+Z/Cmd+Z si ou fè yon erè.",
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Rale yon fichye san gade kote li ap ateri, kite l tonbe nan move dosye.",
          right: "Gade destinasyon vizyèl la klere anvan ou lage klik la.",
          why: "Yon fichye ki tonbe nan move dosye ka difisil pou jwenn ankò si ou pa sonje kote ou te rale l.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! When I drag and drop a file, how can I tell if it will be moved or copied? Is there a way to control this?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle deplase yon fichye tès nan yon lòt dosye san estrès.",
          objective: "Rale yon fichye soti nan yon dosye pou al nan yon lòt.",
          requiredSteps: [
            "Chwazi yon fichye tès ou ka deplase san danje",
            "Rale l sou yon dosye destinasyon epi lage l",
          ],
          successCriteria: [
            "Fichye a rive nan bon dosye a",
          ],
          hint: "Si ou fè yon erè, Ctrl+Z (oswa Cmd+Z) souvan ka anile deplasman an.",
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kisa ki pi bon abitid anvan ou lage yon fichye pandan yon rale-lage?",
            options: [
              "Lage l kèlkeswa kote souri a ye",
              "Gade destinasyon vizyèl la klere anvan ou lage",
              "Fèmen je ou",
              "Rale l pi vit posib",
            ],
            correctIndex: 1,
            explanation:
              "Verifye destinasyon an klere anvan ou lage evite pèdi fichye nan move dosye.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l11",
    slug: "cheche-aplikasyon-ak-paramet",
    moduleId: "m3",
    order: 11,
    titleHt: "Chèche Aplikasyon ak Paramèt",
    titleEn: "Search for Applications and Settings",
    estimatedMinutes: 7,
    mode: "shared_steps",
    objectives: [
      "Itilize rechèch pou jwenn yon aplikasyon oswa yon paramèt",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka itilize rechèch pou jwenn yon aplikasyon oswa yon paramèt san bezwen navige manyèlman.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Olye de eseye sonje EGZAKTEMAN kote yon bouton ye sou ekran an, **chèche pa objektif** — tape sa ou vle fè (tankou 'volim' oswa 'Wi-Fi') epi kite rechèch la jwenn li pou ou. Sa pi rapid e pi fyab pase eseye sonje pozisyon egzat yon bagay.",
      },
      {
        id: "b3",
        type: "platform_steps",
        steps: {
          windows: ["Klike ikòn rechèch la nan taskbar la (oswa peze tous Windows)", "Tape sa ou chèche"],
          mac: ["Peze Cmd+Espas pou louvri Spotlight", "Tape sa ou chèche"],
        },
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Navige manyèlman nan plizyè meni paramèt pou chèche yon bagay espesifik.",
          right: "Tape sa ou chèche nan rechèch la premye bagay.",
          why: "Rechèch la fèt egzakteman pou sitiyasyon sa a — li pi rapid pase navige manyèlman.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain how to use search to quickly find a setting or app instead of navigating through menus?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle chanje volim ou san chèche manyèlman nan meni yo.",
          objective: "Itilize rechèch pou jwenn paramèt volim (oswa yon lòt paramèt) rapid.",
          requiredSteps: [
            "Louvri rechèch la (Windows Search oswa Spotlight)",
            "Tape 'volim' oswa 'sound'",
          ],
          successCriteria: [
            "Rezilta rechèch la mennen w dirèkteman nan paramèt la",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ki rakousi louvri Spotlight sou Mac?",
            options: ["Ctrl+F", "Cmd+Espas", "Alt+Tab", "Cmd+Z"],
            correctIndex: 1,
            explanation: "Cmd+Espas louvri Spotlight sou Mac.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l12",
    slug: "paramet-ou-dwe-konnen",
    moduleId: "m3",
    order: 12,
    titleHt: "Paramèt Ou Dwe Konnen",
    titleEn: "Settings You Should Know",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Rekonèt paramèt debaz: brightness, volim, Wi-Fi, Bluetooth, lang, gwosè tèks",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka jwenn ak ajiste paramèt debaz ki pi itil chak jou yo.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Kèk paramèt ou pral bezwen souvan: **brightness** (klète ekran), **volim**, **Wi-Fi**, **Bluetooth**, **lang**, **gwosè tèks**, **fon ekran** (wallpaper), **tan avan vewouye** (lock timeout), ak **dat/lè**. Tout sa yo jwenn nan aplikasyon Settings/System Preferences aparèy ou.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Lock Timeout",
            definition: "Konbyen tan aparèy la tann anvan li vewouye tèt li otomatikman.",
            example: "Mete lock timeout kout pou plis sekirite sou yon aparèy pataje.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Chanje yon paramèt san sonje valè orijinal li, nan ka ou vle tounen dèyè.",
          right: "Sonje (oswa note) valè orijinal la anvan ou fè gwo chanjman.",
          why: "Sa fè w ka toujou tounen nan orijinal la si nouvo paramèt la pa fè w kontan.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you give me a list of the most useful settings a beginner should know how to find on their computer?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle santi w konfòtab navige nan Settings san pè.",
          objective: "Chanje yon paramèt san danje (tankou wallpaper) epi tounen l nan orijinal li si ou vle.",
          requiredSteps: [
            "Louvri Settings/System Preferences",
            "Chanje yon paramèt san danje (wallpaper, gwosè tèks, elatriye)",
            "Si ou vle, tounen l nan orijinal li",
          ],
          successCriteria: [
            "Ou fè chanjman an san estrès",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki nan sa yo ki se paramèt debaz ou ta jwenn nan Settings?",
            options: ["Brightness", "Volim", "Non fichye yon dokiman espesifik", "Wi-Fi"],
            correctIndexes: [0, 1, 3],
            explanation:
              "Brightness, volim, ak Wi-Fi se paramèt aparèy debaz — non yon fichye espesifik pa yon paramèt sistèm.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l13",
    slug: "screenshot-ak-anrejistreman-ekran",
    moduleId: "m3",
    order: 13,
    titleHt: "Screenshot ak Anrejistreman Ekran",
    titleEn: "Screenshots and Basic Screen Recording",
    estimatedMinutes: 8,
    mode: "shared_steps",
    objectives: [
      "Pran yon screenshot sou Windows ak Mac",
      "Konnen kote screenshot yo sovgade",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka pran yon screenshot, jwenn kote li sovgade, epi konnen sa pou verifye anvan ou pataje l.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **screenshot** kaptire tou sa ki sou ekran ou nan yon moman presi, tankou yon foto. Se itil pou montre yon moun yon pwoblèm oswa sovgade enfòmasyon. **Anvan ou pataje** yon screenshot, toujou verifye li pa montre enfòmasyon pèsonèl (modpas, nimewo kont, elatriye) san w pa fè espre.",
      },
      {
        id: "b3",
        type: "platform_steps",
        steps: {
          windows: [
            "Peze Windows+Shift+S pou chwazi yon zòn epi kaptire l",
            "Screenshot la kopye nan clipboard — kole l (Ctrl+V) nan yon dokiman si ou vle sovgade l",
          ],
          mac: [
            "Peze Cmd+Shift+4 pou chwazi yon zòn epi kaptire l",
            "Screenshot la sovgade otomatikman sou Desktop la",
          ],
        },
      },
      {
        id: "b4",
        type: "safety",
        reminders: [
          "Verifye screenshot la pa montre modpas, kòd verifikasyon, oswa enfòmasyon labank anvan ou pataje l",
        ],
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain how to take a screenshot on Windows or Mac, and where the file gets saved?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou bezwen montre yon moun sa ki sou ekran ou.",
          objective: "Pran yon screenshot, jwenn kote li sovgade, epi verifye li anvan ou pataje l.",
          requiredSteps: [
            "Pran yon screenshot ak rakousi platfòm ou",
            "Jwenn fichye a (Desktop pou Mac, clipboard/Screenshots pou Windows)",
            "Verifye li pa montre enfòmasyon sansib",
          ],
          successCriteria: [
            "Ou jwenn screenshot la epi konfime li san enfòmasyon sansib",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kisa ou dwe toujou fè anvan ou pataje yon screenshot?",
            options: [
              "Anyen, pataje l imedyatman",
              "Verifye li pa montre enfòmasyon sansib",
              "Efase l",
              "Chanje koulè li",
            ],
            correctIndex: 1,
            explanation:
              "Verifye enfòmasyon sansib anvan pataje evite ekspoze modpas oswa done pèsonèl pa aksidan.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-l14",
    slug: "aksesibilite-ak-konfo",
    moduleId: "m3",
    order: 14,
    titleHt: "Aksesibilite ak Konfò",
    titleEn: "Accessibility and Comfort",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Rekonèt fonksyon aksesibilite debaz: gwosè tèks, zoom, magnifier, kontras",
      "Konnen abitid ergonomik debaz",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka jwenn fonksyon aksesibilite ki ka fè aparèy ou pi konfòtab pou itilize.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Anpil aparèy gen fonksyon aksesibilite ki itil pou nenpòt moun, pa sèlman moun ki gen bezwen espesifik: **gwosè tèks** pi gwo, **zoom** pou agrandi kontni, **magnifier** (loup) pou agrandi zòn espesifik, **kontras** pi wo pou li pi fasil, ak **soutit** (captions) pou videyo. Genyen tou **lekti ekran** (screen reader) pou moun ki gen difikilte wè. Pou konfò, sonje pran **poz regilyèman** epi ajiste pozisyon ekran ou pou evite doulè nan kou/do.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Magnifier (Loup)",
            definition: "Zouti ki agrandi yon zòn espesifik ekran an.",
            example: "Itilize magnifier pou li yon ti tèks pi fasil.",
          },
          {
            term: "Lekti Ekran (Screen Reader)",
            definition: "Zouti ki li kontni ekran an awotvwa pou moun ki gen difikilte wè.",
            example: "Screen reader ede yon moun navige san bezwen wè ekran an dirèkteman.",
          },
        ],
      },
      {
        id: "b4",
        type: "mistake",
        mistake: {
          wrong: "Panse fonksyon aksesibilite yo se sèlman pou moun ki gen andikap.",
          right: "Konprann tout moun ka benefisye de yo — tèks pi gwo, plis kontras, elatriye.",
          why: "Anpil moun (sitou granmoun) jwenn aparèy pi konfòtab lè yo ajiste sa yo, menm san yo pa gen okenn andikap.",
        },
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain what accessibility features are available on Windows or Mac that could help make my screen easier to read?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou vle jwenn si gen yon fonksyon aksesibilite ki ta fè aparèy ou pi konfòtab pou ou.",
          objective: "Eksplore paramèt Aksesibilite aparèy ou epi eseye yon fonksyon (tankou gwosè tèks).",
          requiredSteps: [
            "Ale nan Settings > Accessibility (oswa Ease of Access sou Windows)",
            "Eseye yon fonksyon tankou gwosè tèks oswa kontras",
          ],
          successCriteria: [
            "Ou jwenn omwen twa fonksyon aksesibilite diferan ki disponib",
          ],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt:
              "Yon granmoun di w tèks sou telefòn li twò piti pou li. Ki solisyon ki pi bon?",
            options: [
              "Di yo achte yon nouvo telefòn",
              "Montre yo kijan pou ogmante gwosè tèks nan Accessibility",
              "Di yo pa gen solisyon",
              "Chanje sistèm operasyon an",
            ],
            correctIndex: 1,
            explanation:
              "Ogmante gwosè tèks nan paramèt Aksesibilite se yon solisyon rapid ak gratis.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m3-mission",
    slug: "misyon-fe-odinate-a-pou-ou",
    moduleId: "m3",
    order: 15,
    titleHt: "Misyon: Fè Òdinatè a Pou Ou",
    titleEn: "Module Mission: Make the Computer Yours",
    estimatedMinutes: 15,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 3 nan yon sesyon konfyan sou pwòp aparèy ou",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka chanje yon paramèt, tape ak aksan, kopye-kole, pran yon screenshot, ak chanje ant aplikasyon — tout nan yon sèl sesyon konfyan.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 3 la. Ou pral konbine tout sa ou aprann — souri/trackpad, klavye, tèks, aksan, Desktop, fennèt, meni, kopye-kole, rale-lage, rechèch, paramèt, screenshot, ak aksesibilite — nan yon sèl sesyon reyèl.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario: "Ou pral demontre konfyans total ou sou pwòp òdinatè ou nan yon sèl sesyon.",
          objective:
            "Chanje yon paramèt afichaj san danje, tape yon paragraf kout an Kreyòl ak aksan, kopye-kole tèks, pran yon screenshot, chanje ant de aplikasyon, epi restore paramèt orijinal la si ou vle.",
          requiredSteps: [
            "Chanje yon paramèt afichaj san danje (tankou wallpaper oswa gwosè tèks)",
            "Tape yon ti paragraf an Kreyòl ak omwen de aksan",
            "Kopye yon fraz epi kole l yon lòt kote",
            "Pran yon screenshot",
            "Chanje ant de aplikasyon ak Alt+Tab/Cmd+Tab",
            "Si ou vle, restore paramèt orijinal ou te chanje a",
          ],
          successCriteria: [
            "Ou konplete tout sis aksyon yo san bezwen èd pou pi fò nan yo",
            "Ou santi w plis alèz ak Desktop ou pase lè ou te kòmanse Modil 3",
          ],
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak rakousi klavye ak aksyon li fè.",
            pairs: [
              { term: "Ctrl+C / Cmd+C", meaning: "Kopye" },
              { term: "Ctrl+V / Cmd+V", meaning: "Kole" },
              { term: "Ctrl+Z / Cmd+Z", meaning: "Anile" },
            ],
            explanation:
              "Sa yo se twa rakousi klavye ki pi itil ou pral itilize chak jou.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen santi m gen kontwòl total sou òdinatè mwen kounye a." },
          { statement: "Mwen ta renmen plis pratik anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 4." },
        ],
      },
    ],
  },
  {
    id: "m6-l1",
    slug: "konekte-sou-wifi-san-danje",
    moduleId: "m6",
    order: 1,
    titleHt: "Konekte sou Wi-Fi San Danje",
    titleEn: "Connect to Wi-Fi Safely",
    estimatedMinutes: 10,
    mode: "shared_steps",
    objectives: [
      "Konekte yon aparèy sou yon rezo Wi-Fi ou fè konfyans",
      "Distenge yon rezo ou fè konfyans de yon rezo piblik",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka konekte aparèy ou sou yon rezo Wi-Fi ou fè konfyans, sou nenpòt platfòm.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Wi-Fi** se yon siyal san fil ki konekte aparèy ou ak entènèt la, pa mwayen yon **routè**. Chak rezo Wi-Fi gen yon non (ou wè l nan lis rezo yo) ak souvan yon modpas. Yon fwa ou antre modpas la kòrèkteman, aparèy ou sonje l pou pwochen fwa.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Routè (Router)",
            definition: "Aparèy ki voye siyal Wi-Fi la nan yon espas.",
            example: "Routè a anjeneral gen yon limyè ki klere lè li mache byen.",
          },
          {
            term: "Modpas Rezo (Network Password)",
            definition: "Kòd ou antre yon sèl fwa pou konekte sou yon rezo Wi-Fi espesifik.",
            example: "Mande moun k ap resevwa w lakay yo modpas rezo a.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Klike ikòn Wi-Fi la nan kwen anba dwat ekran an",
            "Chwazi non rezo a nan lis la",
            "Antre modpas la epi klike 'Connect'",
          ],
          mac: [
            "Klike ikòn Wi-Fi la nan menu bar a, anwo dwat ekran an",
            "Chwazi non rezo a nan lis la",
            "Antre modpas la epi klike 'Join'",
          ],
          android: ["Ale nan Settings > Wi-Fi, chwazi rezo a, epi antre modpas la"],
          iphone: ["Ale nan Settings > Wi-Fi, chwazi rezo a, epi antre modpas la"],
          recoveryNote:
            "Si ou pa wè rezo a nan lis la, verifye ou pre ase routè a, epi ke Wi-Fi a aktive sou aparèy ou.",
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Konekte sou yon rezo Wi-Fi piblik san modpas pou fè bagay sansib (labank, modpas enpòtan).",
          right: "Rezève aktivite sansib pou Wi-Fi ou fè konfyans, tankou lakay ou.",
          why: "Sou yon rezo piblik san pwoteksyon, lòt moun konekte sou menm rezo a ka pafwa wè aktivite ou.",
        },
      },
      {
        id: "b6",
        type: "safety",
        reminders: [
          "Pa antre modpas labank sou yon rezo Wi-Fi piblik san w pa sèten li an sekirite",
          "Toujou verifye non rezo a byen anvan ou antre yon modpas",
        ],
      },
      {
        id: "b7",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My device won't connect to Wi-Fi even though I'm entering the right password. What are some simple things to try?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b8",
        type: "mission",
        mission: {
          scenario: "Ou lakay ou (oswa yon kote ou fè konfyans) epi ou bezwen konekte sou entènèt.",
          objective: "Konekte aparèy ou sou yon rezo Wi-Fi ou fè konfyans.",
          requiredSteps: [
            "Louvri paramèt Wi-Fi sou aparèy ou",
            "Chwazi rezo a epi antre modpas la si nesesè",
          ],
          successCriteria: ["Aparèy ou montre l konekte", "Ou ka louvri yon sit entènèt san pwoblèm"],
          hint: "Si ou deja konekte, verifye w ka jwenn non rezo a nan paramèt Wi-Fi ou.",
        },
      },
      {
        id: "b9",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kòrèk pou konekte sou Wi-Fi.",
            steps: [
              "Louvri paramèt Wi-Fi sou aparèy ou",
              "Chwazi non rezo a nan lis la",
              "Antre modpas la",
              "Konfime konesyon an reyisi",
            ],
            correctOrder: [0, 1, 2, 3],
            explanation: "Sa a se lòd lojik la: louvri paramèt, chwazi rezo, antre modpas, konfime.",
          },
          {
            kind: "match_term",
            prompt: "Matche chak tèm ak definisyon kòrèk li.",
            pairs: [
              { term: "Routè", meaning: "Aparèy ki voye siyal Wi-Fi la" },
              { term: "Modpas Rezo", meaning: "Kòd pou konekte sou yon rezo espesifik" },
            ],
            explanation: "Routè a voye siyal la; modpas rezo a bay aksè a rezo espesifik la.",
          },
        ],
      },
      {
        id: "b10",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l1",
    slug: "kisa-yon-fichye-ye",
    moduleId: "m4",
    order: 1,
    titleHt: "Ki Sa Yon Fichye Ye?",
    titleEn: "What Is a File?",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Defini yon fichye ak enfòmasyon li kenbe",
      "Rekonèt tip fichye ak ki aplikasyon ki louvri l",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike ki sa yon fichye ye epi rekonèt ki aplikasyon ki louvri yon tip fichye espesifik.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **fichye (file)** se enfòmasyon ki sovgade sou òdinatè a anba yon non — yon foto, yon dokiman, yon chanson, yon videyo. Chak fichye gen yon **non** ak souvan yon **ekstansyon** (twa oswa kat lèt apre yon pwen, tankou .jpg oswa .docx) ki di òdinatè a ki tip fichye li ye. Ekstansyon an tou di òdinatè a ki **aplikasyon** pou l itilize pou louvri fichye a — yon .jpg louvri nan yon aplikasyon foto, yon .docx louvri nan yon aplikasyon tèks.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Fichye (File)",
            definition: "Enfòmasyon ki sovgade sou òdinatè a anba yon non.",
            example: "Yon foto ou pran ak kamera a vin yon fichye tankou 'vakans-2026.jpg'.",
          },
          {
            term: "Ekstansyon (Extension)",
            definition: "Lèt apre yon pwen nan non fichye a ki di ki tip fichye li ye.",
            example: "Nan 'rapò.pdf', '.pdf' se ekstansyon an — li di se yon dokiman PDF.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Gade nan Documents oswa Downloads ou pou jwenn twa fichye diferan. Pou chak yonn, di ki tip li ye (foto, dokiman, videyo) daprè ekstansyon an oswa ikòn nan.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panse yon ikòn ki sanble ak yon aplikasyon se menm bagay ak yon fichye.",
          right: "Rekonèt yon aplikasyon (tankou Word) se zouti ki louvri fichye, pandan fichye a se dokiman ou kreye a.",
          why: "Fè konfizyon ant de a fè moun panse yo 'pèdi' travay yo lè an reyalite se jis fichye a ki nan yon lòt kote.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I found a file with the extension .xlsx on my computer. What kind of file is that and what application usually opens it?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle kòmanse rekonèt fichye ou gen sou òdinatè ou.",
          objective: "Jwenn twa fichye diferan epi idantifye tip chak yonn.",
          requiredSteps: [
            "Louvri Documents oswa Downloads",
            "Idantifye ekstansyon twa fichye diferan",
            "Di ki aplikasyon ki ta ka louvri chak fichye",
          ],
          successCriteria: ["Ou ka idantifye tip twa fichye san èd"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ki sa ekstansyon yon fichye di òdinatè a?",
            options: [
              "Non moun ki kreye fichye a",
              "Ki tip fichye li ye ak ki aplikasyon pou louvri l",
              "Dat fichye a te kreye",
              "Gwosè fichye a sèlman",
            ],
            correctIndex: 1,
            explanation: "Ekstansyon an (tankou .pdf oswa .jpg) di òdinatè a ki tip fichye li ye ak ki aplikasyon pou itilize.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l2",
    slug: "kisa-yon-dosye-ye",
    moduleId: "m4",
    order: 2,
    titleHt: "Ki Sa Yon Dosye Ye?",
    titleEn: "What Is a Folder?",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Defini yon dosye ak wòl li nan òganizasyon",
      "Konprann yerachi dosye (dosye anndan dosye)",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike diferans ant yon dosye ak yon fichye, epi konprann kijan dosye ka anndan lòt dosye.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **dosye (folder)** pa yon fichye — se yon **kontenè** ki ede w òganize fichye yo ansanm. Panse a yon **klasè dijital**: menm jan ou ta mete dokiman papye nan yon klasè fizik pou ou pa mele yo, yon dosye kenbe fichye ki gen rapò ansanm. Ou ka mete dosye **anndan** lòt dosye — sa rele yon **yerachi**. Pa egzanp, ou ka gen yon dosye 'Travay' ki gen anndan l yon dosye 'Rapò 2026'.",
      },
      {
        id: "b3",
        type: "diagram",
        diagram: {
          diagramId: "folder-hierarchy-example",
          caption: "Travay → Rapò 2026 → rapò-janvye.docx, rapò-fevriye.docx",
        },
      },
      {
        id: "b4",
        type: "vocabulary",
        words: [
          {
            term: "Dosye (Folder)",
            definition: "Kontenè ki ede w gwoupe fichye ki gen rapò ansanm — li pa yon fichye limenm.",
            example: "Kreye yon dosye 'Foto Fanmi' pou mete tout foto fanmi ou yo ansanm.",
          },
          {
            term: "Yerachi (Hierarchy)",
            definition: "Fason dosye anndan lòt dosye ye, tankou branch yon pyebwa.",
            example: "Dosye 'Rapò 2026' ka anndan dosye 'Travay', ki anndan 'Documents'.",
          },
        ],
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Louvri Documents ou epi gade si gen dosye deja la. Louvri youn nan yo pou wè si gen lòt dosye anndan l.",
      },
      {
        id: "b6",
        type: "mistake",
        mistake: {
          wrong: "Panse lè ou efase yon dosye, se sèlman dosye a menm ki disparèt.",
          right: "Konprann lè ou efase yon dosye, TOUT fichye ki anndan l efase tou.",
          why: "Yon dosye se yon kontenè — efase kontenè a efase tou sa ki anndan l.",
        },
      },
      {
        id: "b7",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain the difference between a file and a folder in simple terms, with an everyday example?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou gen 15 foto vakans sou òdinatè ou, mele ak lòt fichye. Ki sa ki pi bon pou òganize yo?",
            options: [
              "Kite yo tout mele ansanm nan Downloads",
              "Kreye yon dosye 'Foto Vakans' epi deplase tout foto yo ladan",
              "Chanje non chak foto youn pa youn san mete yo nan yon dosye",
              "Efase yo epi pran yo ankò pita",
            ],
            correctIndex: 1,
            explanation: "Yon dosye dedye ('Foto Vakans') gwoupe fichye ki gen rapò ansanm, sa fè yo pi fasil pou jwenn.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l3",
    slug: "file-explorer-sou-windows",
    moduleId: "m4",
    order: 3,
    titleHt: "File Explorer sou Windows",
    titleEn: "File Explorer on Windows",
    estimatedMinutes: 9,
    mode: "platform_variant",
    objectives: [
      "Navige nan File Explorer sou Windows",
      "Itilize navigation pane, chemen adrès, ak rechèch",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka louvri File Explorer sou Windows epi navige ant dosye yo ak navigation pane a, chemen adrès la, ak rechèch la.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**File Explorer** se aplikasyon ki montre w tout fichye ak dosye ki sou òdinatè Windows ou. Sou kote goch la, **navigation pane** a montre yon lis rakousi (Desktop, Documents, Downloads, elatriye) ou ka klike pou ale dirèkteman. Anwo fennèt la, **chemen adrès (address bar)** la montre egzakteman kote ou ye kounye a — tankou 'This PC > Documents > Travay'. Ou ka klike sou nenpòt pati nan chemen an pou retounen la. Gen tou yon bwat **rechèch** nan kwen anwo dwat pou jwenn yon fichye rapid.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "File Explorer",
            definition: "Aplikasyon Windows ki montre tout fichye ak dosye sou òdinatè a.",
            example: "Klike ikòn dosye jòn nan taskbar la pou louvri File Explorer.",
          },
          {
            term: "Navigation Pane",
            definition: "Lis rakousi sou kote goch File Explorer pou ale dirèkteman nan yon kote komen.",
            example: "Klike 'Downloads' nan navigation pane a pou wè fichye ou fèk telechaje.",
          },
          {
            term: "Chemen Adrès (Address Bar)",
            definition: "Ba anwo fennèt la ki montre kote ou ye nan yerachi dosye a.",
            example: "Klike sou 'Documents' nan chemen adrès la pou retounen nan dosye sa a.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Louvri File Explorer (ikòn dosye jòn nan taskbar la). Klike 'Documents' nan navigation pane a, epi gade chemen adrès la anwo pou wè kote ou ye.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Fèmen File Explorer epi rouvri l chak fwa ou vle jwenn yon dosye diferan.",
          right: "Itilize navigation pane a oswa chemen adrès la pou deplase san fèmen fennèt la.",
          why: "Navigation pane a ak chemen adrès la fèt pou fè w deplase rapid san bezwen fèmen ak rouvri.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I'm using File Explorer on Windows and I want to see my files as large icons instead of a list. How do I change the view?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen jwenn yon fichye byen vit sou òdinatè Windows ou.",
          objective: "Navige nan File Explorer pou rive nan Documents, epi itilize rechèch pou jwenn yon fichye.",
          requiredSteps: [
            "Louvri File Explorer",
            "Klike 'Documents' nan navigation pane a",
            "Tape yon mo nan bwat rechèch la pou jwenn yon fichye",
          ],
          successCriteria: ["Ou rive nan Documents san konfizyon", "Rechèch la montre rezilta ki gen rapò"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kisa chemen adrès la montre nan File Explorer?",
            options: [
              "Non moun ki posede òdinatè a",
              "Kote ou ye kounye a nan yerachi dosye yo",
              "Gwosè disk dur la",
              "Lis aplikasyon ki enstale",
            ],
            correctIndex: 1,
            explanation: "Chemen adrès la (tankou 'This PC > Documents > Travay') montre egzakteman kote ou ye.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l4",
    slug: "finder-sou-mac",
    moduleId: "m4",
    order: 4,
    titleHt: "Finder sou Mac",
    titleEn: "Finder on Mac",
    estimatedMinutes: 9,
    mode: "platform_variant",
    objectives: [
      "Navige nan Finder sou Mac",
      "Itilize sidebar, chemen, view options, ak tag",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka louvri Finder sou Mac epi navige ant dosye yo ak sidebar la, chanje jan fichye yo parèt, epi rekonèt tag koulè.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Finder** se aplikasyon ki montre w tout fichye ak dosye sou Mac ou — li louvri otomatikman souvan, oswa ou ka klike ikòn li nan Dock la. Sou kote goch la, **sidebar** la montre rakousi tankou Desktop, Documents, ak Downloads. Ou ka chanje jan fichye yo parèt (lis, ikòn, kolòn) nan **view options** yo, anwo fennèt la. Mac gen tou yon sistèm **tag koulè** ou ka mete sou fichye pou make yo (tankou 'Ijan' an wouj), epi yon bwat **rechèch** nan kwen anwo dwat la.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Finder",
            definition: "Aplikasyon Mac ki montre tout fichye ak dosye sou òdinatè a.",
            example: "Klike ikòn figi ble a nan Dock la pou louvri Finder.",
          },
          {
            term: "Sidebar",
            definition: "Lis rakousi sou kote goch Finder pou ale dirèkteman nan yon kote komen.",
            example: "Klike 'Downloads' nan sidebar la pou wè fichye ou fèk telechaje.",
          },
          {
            term: "Tag",
            definition: "Etikèt koulè ou ka mete sou yon fichye pou make l san chanje non li.",
            example: "Mete tag wouj sou yon dosye pou raple w li ijan.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Louvri Finder (ikòn figi ble a nan Dock la). Klike 'Documents' nan sidebar la, epi eseye chanje view a soti nan lis pou ale nan ikòn (anwo fennèt la).",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panse ou dwe sèvi ak Spotlight sèlman pou jwenn nenpòt fichye.",
          right: "Itilize sidebar Finder a pou navige dirèkteman nan yon kote ou konnen deja.",
          why: "Sidebar la pi rapid lè ou konnen ki dosye w ap chèche a — rechèch se pou lè ou pa sèten kote fichye a ye.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I'm using Finder on a Mac and I want to add a color tag to a file to mark it as important. How do I do that?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen jwenn yon fichye byen vit sou Mac ou.",
          objective: "Navige nan Finder pou rive nan Documents, epi itilize rechèch pou jwenn yon fichye.",
          requiredSteps: [
            "Louvri Finder",
            "Klike 'Documents' nan sidebar la",
            "Tape yon mo nan bwat rechèch la pou jwenn yon fichye",
          ],
          successCriteria: ["Ou rive nan Documents san konfizyon", "Rechèch la montre rezilta ki gen rapò"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kisa yon tag koulè fè pou yon fichye nan Finder?",
            options: [
              "Li chanje non fichye a otomatikman",
              "Li make fichye a san chanje non li, pou ede w rekonèt li",
              "Li efase fichye a",
              "Li konprese fichye a",
            ],
            correctIndex: 1,
            explanation: "Yon tag koulè se yon etikèt vizyèl — li ede w rekonèt fichye a san chanje non li.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l5",
    slug: "kote-komen-tankou-desktop-documents-ak-downloads",
    moduleId: "m4",
    order: 5,
    titleHt: "Desktop, Documents, Downloads, ak Lòt Kote Komen",
    titleEn: "Desktop, Documents, Downloads, Pictures, and Other Common Locations",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Konprann pou ki sa chak dosye komen sèvi",
      "Evite kite tout fichye sou Desktop la oswa nan Downloads",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike pou ki sa chak dosye komen (Desktop, Documents, Downloads, Pictures) sèvi, epi konprann poukisa Downloads pa yon kote pou estoke fichye pou tout tan.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Chak òdinatè gen kèk dosye ki deja kreye pou ou: **Desktop** (kote fichye parèt sou premye ekran an), **Documents** (pou dokiman travay), **Downloads** (kote tout bagay ou telechaje soti sou entènèt ateri otomatikman), ak **Pictures** (pou foto). **Downloads pa yon kote pou òganize pou tout tan** — se yon kote tanporè. Si ou kite tout bagay ladan, li vin plen ak fichye mele ki soti nan diferan sit. Menm jan an, mete twòp fichye dirèkteman sou Desktop la fè l vin dezòdone e pi difisil pou jwenn sa ou bezwen.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Downloads",
            definition: "Dosye kote fichye ou telechaje soti sou entènèt ateri otomatikman.",
            example: "Apre ou telechaje yon PDF, l ateri nan Downloads jiskaske ou deplase l.",
          },
          {
            term: "Documents",
            definition: "Dosye ki fèt pou kenbe dokiman travay ou (rapò, lèt, fèy kalkil).",
            example: "Sovgade rapò ou nan Documents olye de Desktop la.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Nan File Explorer, klike Documents, Downloads, oswa Pictures nan navigation pane a",
          ],
          mac: [
            "Nan Finder, klike Documents, Downloads, oswa Pictures nan sidebar la",
          ],
          recoveryNote:
            "Si ou pa wè youn nan dosye sa yo nan lis la, chèche l nan 'This PC' (Windows) oswa 'Go > Home' (Mac).",
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Kite santèn fichye antasse nan Downloads paske 'li deja la'.",
          right: "Deplase fichye enpòtan soti Downloads pou ale nan Documents oswa Pictures apre ou fin itilize yo.",
          why: "Downloads ki plen fè li difisil pou jwenn yon fichye resan, epi li ka ranpli espas estokaj san ou pa remake.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My Downloads folder has hundreds of files in it and I can't find anything. What's a simple way to start organizing it?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle konnen ki kote fichye ou yo rele lakay yo.",
          objective: "Louvri chak dosye komen (Desktop, Documents, Downloads, Pictures) epi konte konbyen fichye gen ladan chak.",
          requiredSteps: [
            "Louvri Documents epi gade konbyen fichye ladan",
            "Louvri Downloads epi gade konbyen fichye ladan",
            "Idantifye si Downloads bezwen netwaye",
          ],
          successCriteria: ["Ou ka di ki dosye ki gen plis fichye", "Ou idantifye si Downloads twò plen"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Poukisa Downloads pa yon bon kote pou estoke fichye pou tout tan?",
            options: [
              "Li otomatikman efase fichye apre yon semèn",
              "Se yon kote tanporè ki ka vin mele ak fichye ki soti nan diferan sit",
              "Li pa gen ase espas",
              "Se sèlman pou foto",
            ],
            correctIndex: 1,
            explanation: "Downloads se yon kote tanporè kote tout bagay ateri san klasman — li bezwen netwaye regilyèman.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l6",
    slug: "non-fichye-ki-ede-ou-pita",
    moduleId: "m4",
    order: 6,
    titleHt: "Non Fichye Ki Ede Ou Pita",
    titleEn: "File Names That Help You Later",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Chwazi non fichye ki gen sans ak dat",
      "Evite pwoblèm 'final-final-2' la",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka bay fichye ou non ki gen sans, ki gen dat lè sa nesesè, epi evite karaktè ki ka kreye pwoblèm.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon bon non fichye ede ou (ak lòt moun) konprann sa ki nan fichye a san ou pa bezwen louvri l. Olye de 'Document1.docx', ekri 'Rapò-Vant-Janvye-2026.docx'. Lè ou gen plizyè vèsyon menm dokiman an, ajoute yon dat oswa yon nimewo vèsyon (v1, v2) olye de kontinye ajoute mo 'final' — sa a rele **pwoblèm 'final-final-2'**: 'rapò-final.docx', 'rapò-final-2.docx', 'rapò-final-VRÈ.docx' — pèsòn pa konnen ki youn ki bon an. Evite karaktè espesyal tankou / \\ : * ? \" < > | nan non fichye, paske sa ka kreye erè sou kèk sistèm.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Vèsyon (Version)",
            definition: "Yon kopi espesifik yon dokiman nan yon moman patikilye.",
            example: "'rapò-v2.docx' se dezyèm vèsyon rapò a, apre premye chanjman yo.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Chwazi twa fichye ou genyen ki gen non tankou 'IMG_2847.jpg' oswa 'Document1.docx'. Panse a ki non ki ta pi klè pou chak, ki gen sans ak dat si nesesè.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Kontinye kreye 'rapò-final-2.docx', 'rapò-final-3.docx' san janm efase ansyen vèsyon yo.",
          right: "Itilize dat oswa nimewo vèsyon klè ('rapò-2026-01-15.docx') epi efase oswa achive ansyen vèsyon ki pa itil ankò.",
          why: "San yon sistèm klè, pèsòn pa ka di ki vèsyon ki bon an — sa ka lakòz moun voye oswa itilize move vèsyon an.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I have several versions of the same document saved with names like 'final' and 'final-2'. What's a better way to name and organize them?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou gen fichye ak non ki pa klè, tankou 'IMG_2847.jpg' oswa 'Document1.docx'.",
          objective: "Chanje non twa fichye pou ba yo non ki gen sans ak dat si nesesè.",
          requiredSteps: [
            "Chwazi twa fichye ak non ki pa klè",
            "Chanje non yo pou dekri kontni yo",
            "Ajoute dat kote sa itil",
          ],
          successCriteria: ["Non nouvo yo dekri kontni fichye a klèman", "Pa gen karaktè espesyal ki ka kreye pwoblèm"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou fin modifye yon rapò pou twazyèm fwa. Ki non ki pi bon?",
            options: [
              "rapò-final-final-VRE.docx",
              "rapò-vant-2026-01-15.docx",
              "Document1.docx",
              "rapò!!!.docx",
            ],
            correctIndex: 1,
            explanation: "Yon non ak sijè ak dat klè ('rapò-vant-2026-01-15.docx') pi fasil pou konprann pase mo tankou 'final' repete.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l7",
    slug: "save-save-as-ak-export",
    moduleId: "m4",
    order: 7,
    titleHt: "Save, Save As, ak Export",
    titleEn: "Save, Save As, and Export",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Konprann diferans ant Save ak Save As",
      "Ekspòte yon dokiman an PDF",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike diferans ant Save ak Save As, epi ekspòte yon dokiman an fòma PDF.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Save** (Ctrl+S sou Windows, Cmd+S sou Mac) anrejistre chanjman yo **sou menm fichye a** — li ranplase vèsyon ki te la anvan an. **Save As** kreye yon **nouvo kopi** ak yon non diferan (oswa nan yon kote diferan), pandan orijinal la rete jan l te ye a. Sa itil lè ou vle kenbe orijinal la san chanjman, epi kreye yon nouvo vèsyon apa. **Export** kreye yon kopi nan yon **lòt fòma fichye** — pa egzanp, ekspòte yon dokiman Word an **PDF** pou pataje l ak yon fòma ki pa chanje sou lòt aparèy.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Save As",
            definition: "Kreye yon nouvo kopi fichye a ak yon non oswa kote diferan, san afekte orijinal la.",
            example: "Itilize Save As pou kenbe vèsyon orijinal yon kontra san chanjman.",
          },
          {
            term: "Export",
            definition: "Kreye yon kopi fichye a nan yon lòt fòma, tankou PDF.",
            example: "Ekspòte yon rapò Word an PDF anvan ou voye l bay yon anplwayè.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Peze Ctrl+S pou Save, oswa Ctrl+Shift+S pou Save As nan pifò aplikasyon",
            "Pou ekspòte an PDF, chèche 'File > Export' oswa 'File > Print > Save as PDF'",
          ],
          mac: [
            "Peze Cmd+S pou Save, oswa Cmd+Shift+S pou Save As nan pifò aplikasyon",
            "Pou ekspòte an PDF, chèche 'File > Export as PDF' oswa 'File > Print > Save as PDF'",
          ],
          recoveryNote:
            "Si ou pa wè opsyon 'Export', chèche nan meni 'File' la — souvan li rele 'Save As' epi ou chwazi PDF kòm fòma.",
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Itilize Save lè ou vle kenbe orijinal la — sa ranplase l pou tout tan.",
          right: "Itilize Save As anvan ou fè gwo chanjman si ou vle kenbe yon kopi orijinal la.",
          why: "Save ranplase fichye a definitivman — pa gen fason pou retounen nan vèsyon anvan an apre.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What's the difference between Save and Save As, and when should I use Export to PDF instead?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou gen yon dokiman ou vle modifye san pèdi orijinal la, epi pataje yon kopi PDF.",
          objective: "Itilize Save As pou kreye yon nouvo kopi, epi ekspòte yon vèsyon an PDF.",
          requiredSteps: [
            "Louvri yon dokiman",
            "Itilize Save As pou kreye yon kopi ak yon nouvo non",
            "Ekspòte yon vèsyon an PDF",
          ],
          successCriteria: ["De fichye egziste: orijinal la ak nouvo kopi a", "Yon fichye PDF kreye"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ki sa Save As fè ke Save pa fè?",
            options: [
              "Li efase fichye orijinal la",
              "Li kreye yon nouvo kopi san afekte orijinal la",
              "Li konprese fichye a",
              "Li voye fichye a pa imèl otomatikman",
            ],
            correctIndex: 1,
            explanation: "Save As kreye yon nouvo fichye apa, pandan Save ranplase fichye ki egziste deja a.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l8",
    slug: "kreye-chanje-non-kopye-ak-deplase",
    moduleId: "m4",
    order: 8,
    titleHt: "Kreye, Chanje Non, Kopye, ak Deplase",
    titleEn: "Create, Rename, Copy, and Move",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Kreye yon nouvo dosye",
      "Chanje non, kopye, ak deplase fichye ak konfyans",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka kreye yon nouvo dosye, chanje non yon fichye, kopye l, epi deplase l san ou pa pè fè erè.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Kreye** yon dosye ba ou yon kote pou òganize. **Chanje non (rename)** yon fichye chanje sèlman etikèt li, pa kontni li. **Kopye** kreye yon **doub** fichye a nan yon lòt kote — orijinal la rete kote l te ye. **Deplase** wete fichye a nan yon kote pou mete l nan yon lòt — pa gen doub, se menm fichye a ki chanje adrès. Sekans san danje a: **kreye dosye a dabò, epi chwazi fichye a, epi konfime kote ou vle voye l anvan ou lage l**.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Kopye (Copy)",
            definition: "Kreye yon doub fichye a nan yon lòt kote — orijinal la rete.",
            example: "Kopye yon foto nan dosye 'Foto Vakans' san efase l nan kote orijinal la.",
          },
          {
            term: "Deplase (Move)",
            definition: "Wete fichye a nan yon kote pou mete l nan yon lòt — pa gen doub.",
            example: "Deplase yon rapò ki soti Downloads pou ale nan Documents.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Right-click nan yon espas vid epi chwazi 'New > Folder' pou kreye yon dosye",
            "Right-click sou yon fichye epi chwazi 'Rename', 'Copy', oswa 'Cut' (pou deplase, kole apre ak Ctrl+V)",
            "Rakousi: F2 pou rename, Ctrl+C pou kopye, Ctrl+X pou koupe, Ctrl+V pou kole",
          ],
          mac: [
            "Right-click nan yon espas vid epi chwazi 'New Folder' pou kreye yon dosye",
            "Klike yon fichye epi peze Return pou rename, oswa Cmd+C pou kopye, epi Cmd+V pou kole",
            "Pou deplase, itilize Cmd+C pou kopye epi Cmd+Option+V pou 'Move Item Here'",
          ],
          recoveryNote:
            "Si ou pa sèten si ou kopye oswa deplase yon fichye, verifye si li toujou nan kote orijinal la — si li la toujou, se yon kopi.",
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Rale-lage yon fichye san verifye kote ou lage l — li ka ateri nan move dosye.",
          right: "Toujou verifye non dosye destinasyon an anvan ou lage yon fichye, oswa itilize kopye/kole pou plis kontwòl.",
          why: "Yon fichye ki lage nan move dosye ka difisil pou jwenn ankò, sitou si ou pa remake kote l ale.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What's the safest way to move a file into a different folder without accidentally losing track of it?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle kreye yon sistèm dosye pou òganize fichye ou yo.",
          objective: "Kreye yon nouvo dosye, chanje non yon fichye, epi deplase l nan nouvo dosye a.",
          requiredSteps: [
            "Kreye yon nouvo dosye ak yon non klè",
            "Chanje non yon fichye ki egziste deja",
            "Deplase fichye a nan nouvo dosye a",
          ],
          successCriteria: ["Nouvo dosye a egziste ak bon non", "Fichye a nan nouvo dosye a, pa nan kote orijinal la ankò"],
          hint: "Si ou pa sèten Copy oswa Move, sonje: Move wete fichye a nan ansyen kote a.",
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kòrèk pou deplase yon fichye san danje nan yon nouvo dosye.",
            steps: [
              "Kreye nouvo dosye a dabò",
              "Chwazi fichye ou vle deplase a",
              "Konfime kote ou vle voye l",
              "Deplase fichye a nan nouvo dosye a",
            ],
            correctOrder: [0, 1, 2, 3],
            explanation: "Kreye dosye a anvan, chwazi fichye a, konfime destinasyon an, epi deplase — sa evite erè.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l9",
    slug: "efase-ak-restore",
    moduleId: "m4",
    order: 9,
    titleHt: "Efase ak Restore",
    titleEn: "Delete and Restore",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Efase yon fichye san danje",
      "Restore yon fichye ou efase pa aksidan",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka efase yon fichye san danje epi restore l si ou fè erè, epi konprann lè yon fichye disparèt pou tout tan.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè ou efase yon fichye sou òdinatè a, li pa disparèt imedyatman — li ale nan **Recycle Bin** (Windows) oswa **Trash** (Mac), yon kote tanporè. Ou ka **restore** (retounen) fichye a soti la si ou fè erè. Men si ou **vide** Recycle Bin/Trash la, fichye a disparèt **pou tout tan** epi pa gen fason fasil pou jwenn li ankò. Enpòtan tou: fichye ki sou yon **kle USB oswa disk ekstèn** pafwa pa gen Recycle Bin/Trash — yo ka efase dirèkteman.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Recycle Bin / Trash",
            definition: "Kote tanporè fichye ale lè ou efase yo, anvan yo disparèt pou tout tan.",
            example: "Ouvri Recycle Bin la pou jwenn yon fichye ou efase pa aksidan.",
          },
          {
            term: "Restore",
            definition: "Retounen yon fichye soti nan Recycle Bin/Trash nan kote li te ye a.",
            example: "Right-click sou fichye a nan Recycle Bin epi chwazi 'Restore'.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Louvri Recycle Bin la (ikòn sou Desktop la)",
            "Right-click sou fichye a epi chwazi 'Restore' pou retounen l kote l te ye",
          ],
          mac: [
            "Louvri Trash la (ikòn nan Dock la)",
            "Right-click sou fichye a epi chwazi 'Put Back' pou retounen l kote l te ye",
          ],
          recoveryNote:
            "Si ou vide Recycle Bin/Trash la deja, fichye a pa disponib fasil ankò — evite vide l san verifye li.",
        },
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Verifye Recycle Bin/Trash anvan ou vide l pou tout tan",
          "Fichye sou kle USB pa toujou gen yon Recycle Bin/Trash — yo ka efase dirèkteman",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I accidentally deleted a file. How do I check if it's still recoverable from the Recycle Bin or Trash?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou efase yon fichye pa aksidan epi ou bezwen l ankò.",
          objective: "Efase yon fichye tès, epi restore l soti nan Recycle Bin/Trash.",
          requiredSteps: [
            "Efase yon fichye tès",
            "Louvri Recycle Bin/Trash la",
            "Restore fichye a",
          ],
          successCriteria: ["Fichye a retounen kote l te ye a", "Ou konprann kilè fichye a disparèt pou tout tan"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kisa ki rive lè ou vide Recycle Bin/Trash apre ou efase yon fichye?",
            options: [
              "Fichye a retounen otomatikman apre yon semèn",
              "Fichye a disparèt pou tout tan, difisil pou jwenn ankò",
              "Fichye a voye bay yon lòt aparèy",
              "Anyen pa chanje",
            ],
            correctIndex: 1,
            explanation: "Vide Recycle Bin/Trash la efase fichye a pou tout tan — se poutèt sa ou dwe verifye anvan.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l10",
    slug: "cheche-yon-fichye-ou-pedi",
    moduleId: "m4",
    order: 10,
    titleHt: "Chèche Yon Fichye Ou Pèdi",
    titleEn: "Search for a Lost File",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Chèche yon fichye pa non, tip, dat, oswa kote",
      "Swiv yon sekans rechèch kalm san panike",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka chèche yon fichye ou pèdi lè ou itilize non, tip, dat, oswa fichye resan, san panike.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè ou pa jwenn yon fichye, gen yon sekans kalm pou swiv olye ou panike: 1) **Chèche pa non** — tape yon mo ou sonje nan bwat rechèch la. 2) **Chèche pa tip** — si ou sonje se te yon foto oswa yon PDF. 3) **Chèche pa dat** — kèk sistèm kite w filtre pa 'jodi a' oswa 'semèn sa a'. 4) **Gade fichye resan** — File Explorer ak Finder gen souvan yon lis 'Recent' ki montre dènye fichye ou te louvri. Sonje: yon fichye ki 'pèdi' souvan senpleman nan yon dosye ou pa panse a — li ra pou l disparèt nèt.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Rechèch (Search)",
            definition: "Zouti ki jwenn fichye lè ou tape yon mo ki gen rapò ak non oswa kontni li.",
            example: "Tape 'rapò' nan bwat rechèch la pou jwenn tout fichye ak mo sa a nan non yo.",
          },
          {
            term: "Fichye Resan (Recent Files)",
            definition: "Lis fichye ou te louvri dènyèman, souvan aksesib rapid.",
            example: "Gade lis 'Recent' la si ou sonje ou te travay sou fichye a jodi a.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Klike bwat rechèch la nan taskbar la, oswa nan File Explorer, epi tape non fichye a",
            "Pou wè fichye resan, gade 'Quick Access' nan File Explorer",
          ],
          mac: [
            "Peze Cmd+Espas pou louvri Spotlight, epi tape non fichye a",
            "Pou wè fichye resan, gade 'Recents' nan sidebar Finder a",
          ],
          recoveryNote:
            "Si rechèch la pa jwenn anyen, verifye òtograf mo a, epi eseye yon mo pi jeneral (tankou 'rapò' olye 'rapò-final-vant').",
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panike epi kòmanse klike toupatou lè ou pa jwenn yon fichye.",
          right: "Swiv sekans lan: chèche pa non, epi pa tip, epi gade fichye resan anvan ou sipoze fichye a disparèt.",
          why: "Yon apwòch kalm ak sistematik jwenn fichye 'pèdi' yo pi souvan pase panik — yo ra pou vrèman disparèt.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I can't find a file I saved yesterday. What's a calm, step-by-step way to search for it?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou pa sonje egzakteman kote ou te sovgade yon fichye.",
          objective: "Itilize rechèch pou jwenn yon fichye espesifik san panike.",
          requiredSteps: [
            "Louvri bwat rechèch la (Windows) oswa Spotlight (Mac)",
            "Tape yon mo ki gen rapò ak fichye a",
            "Konfime fichye a nan rezilta yo",
          ],
          successCriteria: ["Ou jwenn fichye a atravè rechèch", "Ou swiv sekans lan san panike"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kòrèk pou chèche yon fichye pèdi san panike.",
            steps: [
              "Chèche pa non fichye a",
              "Si sa pa mache, chèche pa tip fichye",
              "Gade lis fichye resan",
              "Si toujou pa jwenn, chèche nan dosye ki gen plis sans",
            ],
            correctOrder: [0, 1, 2, 3],
            explanation: "Yon sekans kalm ak sistematik ogmante chans ou jwenn fichye a san estrès.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l11",
    slug: "ekstansyon-fichye-ak-foma-komen",
    moduleId: "m4",
    order: 11,
    titleHt: "Ekstansyon Fichye ak Fòma Komen",
    titleEn: "File Extensions and Common Formats",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Rekonèt fòma fichye komen yo",
      "Rekonèt fòma ki ka danjere (EXE, DMG)",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rekonèt fòma fichye komen yo (PDF, DOCX, JPG, MP3, MP4, ZIP) epi rekonèt ki fòma bezwen plis atansyon (EXE, DMG).",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Chak tip fichye gen yon fòma diferan ki di ou ki kalite kontni li genyen. **PDF** se dokiman ki gade menm jan sou tout aparèy. **DOCX** se dokiman Word. **XLSX** se yon fèy kalkil (Excel). **JPG/PNG** se foto. **MP3** se son. **MP4** se videyo. **TXT** se tèks senp san mizanpaj. **ZIP** se yon gwoup fichye konprese ansanm. **EXE** (Windows) ak **DMG** (Mac) enstale pwogram — se fòma sa yo ki bezwen **plis atansyon**, paske yo ka enstale lojisyèl danjere si yo pa soti nan yon sous ou fè konfyans.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: ".PDF",
            definition: "Fòma dokiman ki gade menm jan sou tout aparèy ak sistèm.",
            example: "Ekspòte yon rapò an .pdf anvan ou pataje l ak yon anplwayè.",
          },
          {
            term: ".EXE / .DMG",
            definition: "Fòma ki enstale pwogram sou Windows (.exe) oswa Mac (.dmg) — mande atansyon sou sous la.",
            example: "Pa louvri yon fichye .exe ou resevwa nan yon imèl san ou pa konnen egzakteman ki moun ki voye l.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Gade nan Documents oswa Downloads ou epi jwenn omwen kat fichye ak ekstansyon diferan. Idantifye ki kalite kontni chak youn genyen.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa janm louvri yon fichye .exe oswa .dmg ki soti nan yon sous ou pa fè konfyans",
          "Verifye moun ki voye anvan ou louvri yon fichye ki mande pou enstale yon bagay",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I received a file with the extension .exe in an email I wasn't expecting. Is it safe to open?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle ka rekonèt fòma fichye rapid pou konnen kijan pou trete yo.",
          objective: "Idantifye tip kat fichye diferan daprè ekstansyon yo, epi di si youn nan yo bezwen plis atansyon.",
          requiredSteps: [
            "Jwenn kat fichye ak ekstansyon diferan",
            "Idantifye kalite chak fichye",
            "Idantifye si youn se .exe oswa .dmg",
          ],
          successCriteria: ["Ou rekonèt kòrèkteman kat fòma", "Ou eksplike poukisa .exe/.dmg mande plis atansyon"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak ekstansyon ak kalite fichye li ye.",
            pairs: [
              { term: ".pdf", meaning: "Dokiman ki gade menm jan sou tout aparèy" },
              { term: ".jpg", meaning: "Foto" },
              { term: ".mp3", meaning: "Son" },
              { term: ".zip", meaning: "Gwoup fichye konprese" },
            ],
            explanation: "Chak ekstansyon di ou egzakteman ki tip kontni fichye a genyen.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l12",
    slug: "fichye-zip-ak-konpresyon",
    moduleId: "m4",
    order: 12,
    titleHt: "Fichye ZIP ak Konpresyon",
    titleEn: "ZIP Files and Compression",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Konprann poukisa konpresyon egziste",
      "Konprese ak ekstrè fichye ZIP",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka konprese plizyè fichye nan yon dosye ZIP, epi ekstrè kontni yon fichye ZIP ou resevwa.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Konpresyon** diminye gwosè yon fichye oswa yon gwoup fichye, sa fè yo pi fasil pou voye pa imèl oswa telechaje pi vit. Yon **fichye ZIP** se yon 'sak' ki kenbe plizyè fichye ansanm nan yon fòma pi piti. Pou **konprese**, ou chwazi fichye yo epi mande òdinatè a kreye yon ZIP. Pou **ekstrè** (dekonprese), ou double-klike sou ZIP la epi chwazi kote pou mete kontni li. **Pa janm ekstrè yon ZIP ou resevwa nan yon sous ou pa fè konfyans** — li ka kenbe lojisyèl danjere.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Konprese (Compress)",
            definition: "Diminye gwosè yon fichye oswa gwoupe plizyè fichye nan yon sèl fichye ZIP.",
            example: "Konprese 20 foto nan yon sèl fichye ZIP anvan ou voye yo pa imèl.",
          },
          {
            term: "Ekstrè (Extract)",
            definition: "Dekonprese yon fichye ZIP pou jwenn fichye orijinal yo ladan.",
            example: "Ekstrè fichye ZIP la pou jwenn tout foto ki te konprese ladan.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Chwazi fichye yo, right-click, epi chwazi 'Send to > Compressed (zipped) folder' pou konprese",
            "Double-klike yon fichye ZIP epi chwazi 'Extract All' pou ekstrè",
          ],
          mac: [
            "Chwazi fichye yo, right-click, epi chwazi 'Compress Items' pou konprese",
            "Double-klike yon fichye ZIP pou l ekstrè otomatikman nan menm dosye a",
          ],
          recoveryNote:
            "Si ekstraksyon an echwe, verifye fichye ZIP la pa domaje — eseye telechaje l ankò si li soti sou entènèt.",
        },
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa ekstrè yon fichye ZIP ki soti nan yon imèl oswa sit ou pa fè konfyans",
          "Verifye moun ki voye anvan ou ekstrè yon ZIP enkonni",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I need to send 15 photos to someone by email but they're too large individually. How can compressing them into a ZIP file help?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen voye plizyè fichye ansanm san yo pran twòp espas.",
          objective: "Konprese plizyè fichye nan yon ZIP, epi ekstrè yon lòt fichye ZIP pou konfime li mache.",
          requiredSteps: [
            "Chwazi plizyè fichye epi konprese yo nan yon ZIP",
            "Verifye fichye ZIP la kreye",
            "Ekstrè yon fichye ZIP tès pou konfime kontni li aksesib",
          ],
          successCriteria: ["Yon fichye ZIP kreye avèk siksè", "Ekstraksyon montre fichye orijinal yo"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ki sa ki pi bon pratik anvan ou ekstrè yon fichye ZIP?",
            options: [
              "Ekstrè l imedyatman san gade",
              "Verifye moun ki voye l ou fè konfyans",
              "Chanje ekstansyon an anvan",
              "Voye l bay yon zanmi anvan ou ekstrè l",
            ],
            correctIndex: 1,
            explanation: "Yon fichye ZIP ki soti nan yon sous ou pa fè konfyans ka kenbe lojisyèl danjere.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l13",
    slug: "kle-usb-ak-estokaj-eksten",
    moduleId: "m4",
    order: 13,
    titleHt: "Kle USB ak Estokaj Ekstèn",
    titleEn: "USB Drives and External Storage",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Konekte, itilize, ak ejekte yon kle USB san danje",
      "Konprann diferans ant yon kopi ak yon backup",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka konekte yon kle USB, kopye fichye sou li, ejekte l san danje, epi konprann poukisa yon sèl kopi pa yon backup reyèl.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **kle USB** oswa yon **disk dur ekstèn** se yon ti aparèy ou ka konekte nan òdinatè a pou estoke fichye anplis, oswa pou pote yo ale yon lòt kote. Ou konekte l nan yon **pò USB**, epi li parèt tankou yon nouvo dosye/disk nan File Explorer oswa Finder. **Enpòtan anpil**: anvan ou wete kle a fizikman, ou dwe **ejekte l san danje** — sinon ou ka domaje fichye ki t ap kopye a, oswa menm domaje kle a limenm. Kle USB yo ka pote **malveyan (malware)** tou, sitou si yo te konekte nan lòt òdinatè piblik. Sonje: yon sèl kopi sou yon kle USB **pa yon backup reyèl** — si kle a pèdi oswa domaje, fichye a disparèt tou.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Ejekte San Danje (Eject Safely)",
            definition: "Di òdinatè a fini ak yon aparèy ekstèn anvan ou wete l fizikman.",
            example: "Klike ikòn 'Eject' anvan ou rale kle USB la soti nan pò a.",
          },
          {
            term: "Backup",
            definition: "Plizyè kopi yon fichye nan diferan kote, pou li pa pèdi si yon sèl kote domaje.",
            example: "Gen yon kopi sou kle USB AK yon kopi nan cloud — se sa ki fè yon vrè backup.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Konekte kle a nan yon pò USB epi tann li parèt nan File Explorer",
            "Kopye fichye ale/soti nan kle a menm jan ak nenpòt lòt dosye",
            "Anvan ou wete l, klike ikòn 'Safely Remove Hardware' nan system tray a",
          ],
          mac: [
            "Konekte kle a nan yon pò USB epi tann li parèt sou Desktop oswa nan Finder",
            "Kopye fichye ale/soti nan kle a menm jan ak nenpòt lòt dosye",
            "Anvan ou wete l, rale ikòn kle a nan Trash (li vin tounen yon ikòn 'Eject'), oswa klike bouton eject akote non li nan Finder",
          ],
          recoveryNote:
            "Si ou wete kle a san ejekte l epi yon fichye sanble domaje, eseye rekonekte l ankò — pafwa fichye a toujou la men li pa parèt imedyatman.",
        },
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Toujou ejekte yon kle USB san danje anvan ou wete l fizikman",
          "Fè eskanè yon kle USB ou pa konnen anvan ou louvri fichye ladan, sitou si l te konekte nan yon aparèy piblik",
          "Yon sèl kopi sou yon kle USB pa yon backup — kenbe omwen de kopi nan de kote diferan",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What does it mean to 'safely eject' a USB drive, and why does it matter if I just unplug it directly?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen kopye fichye enpòtan sou yon kle USB pou pote yo ale yon lòt kote.",
          objective: "Konekte yon kle USB, kopye fichye sou li, epi ejekte l san danje.",
          requiredSteps: [
            "Konekte kle USB la",
            "Kopye omwen yon fichye sou li",
            "Ejekte kle a san danje anvan ou wete l",
          ],
          successCriteria: ["Fichye a kopye avèk siksè sou kle a", "Kle a ejekte san danje anvan li wete"],
          hint: "Si kle a pa parèt, eseye yon lòt pò USB oswa verifye kle a byen enkli.",
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Poukisa yon sèl kopi sou yon kle USB pa yon backup reyèl?",
            options: [
              "Paske kle USB pa ka kenbe anpil fichye",
              "Paske si kle a pèdi oswa domaje, fichye a disparèt nèt",
              "Paske kle USB pa mache sou Mac",
              "Paske kle USB toujou pi lan pase disk dur la",
            ],
            correctIndex: 1,
            explanation: "Yon vrè backup mande plizyè kopi nan plizyè kote — yon sèl kle USB se yon sèl pwen echèk.",
          },
        ],
      },
      {
        id: "b9",
        type: "reflection",
        prompts: [
          { statement: "Mwen ka fè sa poukont mwen." },
          { statement: "Mwen ka fè l si yon moun raple m." },
          { statement: "Mwen bezwen plis pratik." },
        ],
      },
    ],
  },
  {
    id: "m4-l14",
    slug: "misyon-oganize-yon-vre-dosye",
    moduleId: "m4",
    order: 14,
    titleHt: "Misyon: Òganize Yon Vrè Dosye",
    titleEn: "Module Mission: Organize a Real Folder",
    estimatedMinutes: 15,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 4 nan yon egzèsis òganizasyon reyèl",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka ekstrè yon ZIP, kreye yon sistèm dosye, chanje non fichye, deplase yo nan bon kote, restore yon fichye efase, epi jwenn yon lòt atravè rechèch — tout nan yon sèl sesyon.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 4 la. Ou pral konbine tout sa ou aprann sou fichye ak dosye — kreye, chanje non, kopye, deplase, efase, restore, ak chèche — nan yon sèl egzèsis reyèl ak yon dosye pratik (practice pack).",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario: "Ou resevwa yon dosye pratik (ZIP) ki gen fichye mele, san bon òganizasyon.",
          objective:
            "Ekstrè ZIP la, kreye yon sistèm dosye lojik, chanje non fichye pou yo gen sans, deplase yo nan bon kote, restore yon fichye ou efase pa aksidan, epi jwenn yon lòt fichye atravè rechèch.",
          requiredSteps: [
            "Ekstrè fichye ZIP practice pack la",
            "Kreye omwen de nouvo dosye pou òganize kontni li",
            "Chanje non omwen twa fichye pou yo gen sans klè",
            "Deplase fichye yo nan dosye ki apwopriye",
            "Efase yon fichye epi restore l soti nan Recycle Bin/Trash",
            "Itilize rechèch pou jwenn yon lòt fichye espesifik",
          ],
          successCriteria: [
            "Sistèm dosye a klè ak lojik",
            "Non fichye yo fè sans san ou pa bezwen louvri yo pou konprann kontni",
            "Ou konplete tout sis etap yo san bezwen èd pou pi fò nan yo",
          ],
          stretchChallenge: "Konprese nouvo sistèm dosye ou fèk òganize a nan yon fichye ZIP pou pratike konpresyon ankò.",
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak aksyon ak sa li fè ak yon fichye.",
            pairs: [
              { term: "Kopye", meaning: "Kreye yon doub — orijinal la rete" },
              { term: "Deplase", meaning: "Chanje kote fichye a — pa gen doub" },
              { term: "Restore", meaning: "Retounen yon fichye soti nan Recycle Bin/Trash" },
            ],
            explanation: "Konprann diferans ant kopye, deplase, ak restore evite pèt fichye pa aksidan.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen santi m gen kontwòl total sou fichye ak dosye mwen kounye a." },
          { statement: "Mwen ta renmen plis pratik anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 5." },
        ],
      },
    ],
  },
];

export function getComputerRebuildLesson(slug: string) {
  return computerRebuildLessons.find((lesson) => lesson.slug === slug);
}
