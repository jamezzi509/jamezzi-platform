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
    id: "m3-l-windows",
    slug: "biwo-windows-la",
    moduleId: "m3",
    order: 1,
    titleHt: "Biwo Windows la",
    titleEn: "The Windows Desktop",
    estimatedMinutes: 9,
    mode: "platform_variant",
    objectives: [
      "Rekonèt Desktop, taskbar, ak Start menu sou Windows",
      "Louvri yon aplikasyon soti nan Start menu a",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka jwenn Desktop, taskbar, ak Start menu sou yon òdinatè Windows, epi louvri yon aplikasyon.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Desktop** la se premye ekran ou wè lè òdinatè a fin limen — tankou tab travay ou. **Taskbar** la se ba ki rete toujou nan pati anba ekran an, ak **Start menu** a (bouton Windows nan kwen agoch anba a) se kote ou jwenn tout pwogram ou enstale sou òdinatè a.",
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
    order: 2,
    titleHt: "Biwo Mac la",
    titleEn: "The Mac Desktop",
    estimatedMinutes: 9,
    mode: "platform_variant",
    objectives: [
      "Rekonèt Desktop, menu bar, ak Dock sou Mac",
      "Louvri yon aplikasyon soti nan Dock la",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka jwenn Desktop, menu bar, ak Dock sou yon òdinatè Mac, epi louvri yon aplikasyon.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Desktop** la se premye ekran ou wè lè òdinatè a fin limen. **Menu bar** a se ti ba fen ki rete toujou nan tèt ekran an, kèlkeswa sa ki louvri. **Dock** la se ranje ikòn ki rete anba (oswa sou kote) ekran an, kote ou jwenn aplikasyon ou itilize souvan.",
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
            term: "Dock",
            definition: "Ranje ikòn ki rete anba ekran an pou louvri aplikasyon rapid.",
            example: "Klike yon fwa sou ikòn nan Dock la pou louvri aplikasyon an.",
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
];

export function getComputerRebuildLesson(slug: string) {
  return computerRebuildLessons.find((lesson) => lesson.slug === slug);
}
