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
    id: "m6-l0a",
    slug: "kisa-ki-se-entenet-la",
    moduleId: "m6",
    order: 1,
    titleHt: "Ki Sa Ki Se Entènèt La?",
    titleEn: "What Is the Internet?",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Esplike entènèt la kòm yon rezo rezo, pa yon sèl konpayi",
      "Rekonèt egzanp sèvis ki mache sou entènèt la",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike ki sa entènèt la ye — yon rezo rezo, pa yon sèl konpayi oswa aplikasyon.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Entènèt la** se yon **rezo rezo** — anpil milyon òdinatè ak aparèy nan tout mond lan ki konekte ansanm epi ki ka pataje enfòmasyon. Li pa yon sèl konpayi, ni yon sèl aplikasyon: Google, Facebook, ak WhatsApp se **sèvis** ki mache SOU entènèt la, men yo pa entènèt la limenm. Menm si tout sit ak aplikasyon sa yo ta disparèt, entènèt la (rezo a) ta toujou egziste — se sa moun konstwi sou li ki chanje.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Entènèt (Internet)",
            definition: "Yon gwo rezo rezo òdinatè ki konekte nan tout mond lan.",
            example: "Entènèt la kite òdinatè ou pale ak yon òdinatè lòt bò lemond.",
          },
          {
            term: "Sèvis Sou Entènèt (Online Service)",
            definition: "Yon sit oswa aplikasyon ki mache SOU entènèt la, men ki pa entènèt la limenm.",
            example: "Google se yon sèvis sou entènèt — li itilize entènèt la, li pa ranplase l.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a twa sèvis ou itilize sou entènèt chak jou (imèl, rezo sosyal, videyo). Pou chak youn, raple tèt ou se yon sèvis KI MACHE sou entènèt la, pa entènèt la limenm.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panse Facebook oswa Google 'se' entènèt la.",
          right: "Konprann Facebook ak Google se sèvis ki mache sou entènèt la — entènèt la se rezo a anba yo.",
          why: "Konprann diferans lan ede w wè poukisa yon sèvis ka gen pwoblèm pandan entènèt la limenm ap mache byen.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain in simple terms what the internet actually is, as opposed to apps like Google or Facebook that run on it?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle ka eksplike bay yon lòt moun diferans ant entènèt la ak yon sèvis tankou Google.",
          objective: "Site twa sèvis ou itilize sou entènèt epi eksplike poukisa yo pa 'se' entènèt la.",
          requiredSteps: [
            "Site twa sèvis ou itilize sou entènèt",
            "Eksplike ak pwòp mo pa w poukisa yo diferan de entènèt la limenm",
          ],
          successCriteria: ["Ou bay eksplikasyon an san konfizyon"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Yon zanmi di 'Facebook ap boge, sa vle di entènèt la pa mache.' Ki sa ki pi kòrèk?",
            options: [
              "Se vre, si Facebook pa mache, entènèt la pa mache",
              "Facebook se yon sèvis sou entènèt la — li ka gen pwoblèm pandan entènèt la limenm mache byen",
              "Entènèt la ak Facebook se menm bagay",
              "Facebook se yon konpayi ki posede tout entènèt la",
            ],
            correctIndex: 1,
            explanation: "Yon sèvis endividyèl ka gen pwoblèm san sa vle di rezo entènèt la limenm ki gen pwoblèm.",
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
    id: "m6-l0b",
    slug: "founise-entenet-modem-route-ak-wifi",
    moduleId: "m6",
    order: 2,
    titleHt: "Founisè Entènèt, Modèm, Routè, ak Wi-Fi",
    titleEn: "Internet Provider, Modem, Router, and Wi-Fi",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Konprann chèn koneksyon senp la: founisè, modèm, routè, aparèy",
      "Rekonèt Wi-Fi se yon SÈL fason pou konekte, pa entènèt la limenm",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike chèn koneksyon senp ant founisè entènèt, modèm, routè, ak aparèy ou, epi konprann Wi-Fi se yon sèl fason pou konekte.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **founisè entènèt (ISP)** se konpayi ki pote koneksyon entènèt la lakay ou. Koneksyon an antre nan yon **modèm**, ki tradwi siyal founisè a an yon fòm òdinatè ou ka itilize. Yon **routè** pran sa epi **pataje l** ak plizyè aparèy nan menm kay la — pafwa pa fil (Ethernet), pafwa san fil (**Wi-Fi**). Sou anpil kay, modèm ak routè a se **yon sèl aparèy konbine**. Enpòtan: **Wi-Fi se sèlman YON fason pou konekte sou entènèt la** — ou ka konekte tou ak yon kab Ethernet, oswa ak done selilè sou telefòn.",
      },
      {
        id: "b3",
        type: "diagram",
        diagram: {
          diagramId: "isp-modem-router-device-chain",
          caption: "Founisè Entènèt → Modèm → Routè → Wi-Fi → Aparèy Ou",
        },
      },
      {
        id: "b4",
        type: "vocabulary",
        words: [
          {
            term: "Founisè Entènèt (ISP)",
            definition: "Konpayi ki pote koneksyon entènèt la lakay ou.",
            example: "Ou peye yon abònman chak mwa bay founisè entènèt ou a.",
          },
          {
            term: "Modèm",
            definition: "Aparèy ki tradwi siyal founisè a an yon fòm òdinatè ou ka itilize.",
            example: "Limyè sou modèm nan montre si koneksyon founisè a ap mache.",
          },
          {
            term: "Routè (Router)",
            definition: "Aparèy ki pataje koneksyon entènèt la ak plizyè aparèy, pa fil oswa san fil.",
            example: "Routè a se sa ki kreye rezo Wi-Fi ou konekte telefòn ak òdinatè ou sou li.",
          },
        ],
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Si ou gen aksè a yon modèm/routè lakay ou, gade l epi idantifye si se de aparèy apa oswa yon sèl aparèy konbine.",
      },
      {
        id: "b6",
        type: "mistake",
        mistake: {
          wrong: "Panse Wi-Fi 'se' entènèt la, epi si Wi-Fi la off, panse pa gen okenn lòt fason pou konekte.",
          right: "Konprann Wi-Fi se yon sèl fason pou konekte — kab Ethernet ak done selilè se lòt fason.",
          why: "Konprann sa ede w rezoud pwoblèm pi vit, paske ou konnen ki lòt opsyon ou genyen.",
        },
      },
      {
        id: "b7",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain the difference between my internet provider, my modem, and my router in simple terms?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b8",
        type: "mission",
        mission: {
          scenario: "Ou vle konprann chèn koneksyon lakay ou.",
          objective: "Idantifye chak pati nan chèn lan lakay ou (oswa yon kay ou konnen) epi eksplike wòl chak youn.",
          requiredSteps: [
            "Idantifye ki konpayi ki bay entènèt la",
            "Idantifye modèm ak/oswa routè a",
            "Eksplike diferans ant Wi-Fi ak entènèt la ak pwòp mo pa w",
          ],
          successCriteria: ["Ou eksplike chèn lan san konfizyon"],
        },
      },
      {
        id: "b9",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete pati chèn koneksyon an nan lòd kòrèk, soti nan founisè a rive nan aparèy ou.",
            steps: ["Founisè Entènèt (ISP)", "Modèm", "Routè", "Aparèy ou (Wi-Fi)"],
            correctOrder: [0, 1, 2, 3],
            explanation: "Koneksyon an vwayaje nan lòd sa a: founisè, modèm, routè, epi aparèy ou pa Wi-Fi oswa fil.",
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
    id: "m6-l1",
    slug: "konekte-sou-wifi-san-danje",
    moduleId: "m6",
    order: 3,
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
    id: "m6-l4",
    slug: "wifi-done-selile-ak-hotspot",
    moduleId: "m6",
    order: 4,
    titleHt: "Wi-Fi, Done Selilè, ak Hotspot",
    titleEn: "Wi-Fi, Mobile Data, and Hotspots",
    estimatedMinutes: 9,
    mode: "cross_device",
    objectives: [
      "Konprann kilè pou itilize done selilè oswa hotspot yon telefòn",
      "Konekte yon òdinatè sou hotspot yon telefòn san danje",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike diferans ant Wi-Fi ak done selilè, epi konekte òdinatè ou sou hotspot yon telefòn lè sa nesesè.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Wi-Fi** anjeneral pa koute anyen anplis lè ou deja konekte lakay ou oswa yon kote ki bay li gratis. **Done selilè (mobile data)** se entènèt telefòn ou jwenn nan konpayi telefòn ou an, ki gen limit ak yon kou. Yon **hotspot** kite telefòn ou **pataje** done selilè li ak lòt aparèy tankou yon òdinatè — itil lè pa gen Wi-Fi disponib. Fè atansyon: itilize hotspot konsome bakri telefòn ou vit, epi li ka konsome anpil done selilè si ou fè bagay tankou gade videyo.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Done Selilè (Mobile Data)",
            definition: "Entènèt ou jwenn nan konpayi telefòn ou an, ki gen limit ak yon kou.",
            example: "Si Wi-Fi pa disponib, telefòn ou ka itilize done selilè pou konekte sou entènèt.",
          },
          {
            term: "Hotspot",
            definition: "Fonksyon ki kite telefòn ou pataje done selilè li ak lòt aparèy.",
            example: "Ou ka aktive hotspot telefòn ou pou konekte laptop ou lè pa gen Wi-Fi.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          android: [
            "Ale nan Settings > Network & Internet > Hotspot & Tethering",
            "Aktive 'Wi-Fi Hotspot' epi note non ak modpas rezo a",
          ],
          iphone: [
            "Ale nan Settings > Personal Hotspot",
            "Aktive l epi note modpas la ki parèt anba a",
          ],
          recoveryNote:
            "Si lòt aparèy la pa jwenn hotspot la, verifye done selilè telefòn ou aktive ak li gen siyal.",
        },
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Etenn hotspot la lè ou fini pou ekonomize bakri ak done selilè",
          "Itilize yon modpas fò pou hotspot ou pou pèsòn pa konekte san ou pa konnen",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I need to connect my laptop to the internet using my phone's hotspot. What should I know about data use and battery before I do that?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou pa gen aksè a Wi-Fi men ou bezwen konekte òdinatè ou sou entènèt.",
          objective: "Aktive hotspot telefòn ou epi konekte yon lòt aparèy sou li.",
          requiredSteps: [
            "Aktive hotspot sou telefòn ou",
            "Konekte yon lòt aparèy sou hotspot la",
            "Etenn hotspot la lè ou fini",
          ],
          successCriteria: ["Lòt aparèy la konekte sou entènèt atravè hotspot la", "Hotspot la etenn apre"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou nan yon kote ki pa gen Wi-Fi epi ou bezwen konekte laptop ou pou 10 minit. Ki sa ki pi bon opsyon?",
            options: [
              "Aktive hotspot telefòn ou pou 10 minit yo, epi etenn li apre",
              "Kite hotspot la aktive tout jounen an",
              "Ale kay yon vwazen san mande pèmisyon pou itilize Wi-Fi yo",
              "Tann jiskaske ou jwenn Wi-Fi gratis",
            ],
            correctIndex: 0,
            explanation: "Aktive hotspot la sèlman pou tan ou bezwen l epi etenn li apre ekonomize bakri ak done.",
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
    id: "m6-l5",
    slug: "vites-konesyon-siyal-ak-itilizasyon-done",
    moduleId: "m6",
    order: 5,
    titleHt: "Vitès Koneksyon, Siyal, ak Itilizasyon Done",
    titleEn: "Connection Speed, Signal, and Data Use",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Distenge vitès koneksyon de fòs siyal",
      "Fè chwa entelijan pou ekonomize done sou koneksyon limite",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka distenge vitès koneksyon de fòs siyal, epi fè chwa entelijan pou ekonomize done sou yon koneksyon limite.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Fòs siyal** montre ki jan koneksyon Wi-Fi ou solid (baton sou telefòn/òdinatè ou). **Vitès koneksyon** se ki jan enfòmasyon vwayaje vit — ou ka gen bon siyal men vitès lan lan si anpil moun ap itilize menm rezo a. **Telechajman (download)** konsome done — plis fichye a gwo, plis li konsome. **Videyo konsome PLIS done** pase tèks oswa foto senp. Sou yon koneksyon limite (tankou done selilè), chwazi kalite videyo pi ba, evite telechajman gwo lè ou pa oblije, epi bay priyorite a bagay ki pi enpòtan.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Fòs Siyal (Signal Strength)",
            definition: "Ki jan koneksyon Wi-Fi ou solid, souvan montre ak baton.",
            example: "Si ou gen sèlman yon baton siyal, konesyon an ka lan oswa entèwonp.",
          },
          {
            term: "Itilizasyon Done (Data Use)",
            definition: "Kantite enfòmasyon ou telechaje oswa voye sou entènèt.",
            example: "Gade yon videyo itilize plis done pase li yon atik tèks.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Gade endikatè siyal Wi-Fi ou (baton yo). Deplase w nan yon lòt pyès epi wè si siyal la chanje.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panse bon siyal vle di vitès rapid otomatikman.",
          right: "Konprann ou ka gen bon siyal men vitès lan si anpil moun ap pataje menm rezo a.",
          why: "Konprann diferans lan ede w konnen si pwoblèm nan se siyal, oswa se rezo a ki chaje.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My phone shows full Wi-Fi signal bars but everything still loads slowly. What's the difference between signal and speed?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou sou yon koneksyon limite epi ou bezwen ekonomize done.",
          objective: "Idantifye twa aksyon ou ta ka pran pou ekonomize done sou yon koneksyon limite.",
          requiredSteps: [
            "Idantifye ki aktivite konsome plis done (videyo, telechajman gwo)",
            "Site twa chwa ou ta fè pou ekonomize done",
          ],
          successCriteria: ["Ou eksplike rezònman w pou chak chwa"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki aktivite sa yo konsome PLIS done sou entènèt? (Chwazi tout ki aplike.)",
            options: [
              "Gade yon videyo an HD",
              "Li yon atik tèks",
              "Telechaje yon gwo fichye",
              "Voye yon mesaj tèks kout",
            ],
            correctIndexes: [0, 2],
            explanation: "Videyo an HD ak telechajman gwo fichye konsome anpil plis done pase tèks senp.",
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
    id: "m6-l6",
    slug: "le-wifi-di-konekte-men-entenet-pa-mache",
    moduleId: "m6",
    order: 6,
    titleHt: "Lè Wi-Fi Di Konekte Men Entènèt Pa Mache",
    titleEn: "When Wi-Fi Says Connected but the Internet Does Not Work",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Swiv yon sekans kalm pou rezoud pwoblèm koneksyon",
      "Konnen kilè pou kontakte founisè entènèt la",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka swiv yon sekans kalm pou rezoud pwoblèm lè Wi-Fi di konekte men entènèt la pa mache.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè aparèy ou montre 'konekte' sou Wi-Fi men okenn sit pa louvri, swiv yon sekans kalm: 1) **Eseye yon lòt sit** — si youn sèl pa mache, se sit la, pa koneksyon an. 2) **Eseye yon lòt aparèy** sou menm rezo a — si li menm pa mache, pwoblèm nan pi laj. 3) **Rekonekte** — dekonekte epi rekonekte sou Wi-Fi la. 4) **Rekòmanse routè a SÈLMAN si se pa w li ye oswa ou gen pèmisyon** — mande dabò si se yon lòt moun ki responsab li. 5) Konsidere si gen yon **pàn sèvis (outage)** lakay founisè a. 6) Konsidere si se yon **portal kaptif (captive portal)** — yon paj konesyon ki mande w konekte anvan entènèt la mache (souvan nan otèl oswa kafe). Si anyen pa mache, **kontakte founisè entènèt la**.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Pàn Sèvis (Outage)",
            definition: "Yon moman kote founisè entènèt la limenm gen yon pwoblèm ki afekte anpil moun.",
            example: "Si vwazen ou yo tou pa gen entènèt, sa ka yon pàn sèvis.",
          },
          {
            term: "Portal Kaptif (Captive Portal)",
            definition: "Yon paj ki parèt pou mande w konekte oswa aksepte kondisyon anvan entènèt la mache.",
            example: "Wi-Fi otèl souvan mande w louvri yon portal kaptif anvan ou ka navige lib.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a yon fwa Wi-Fi ou te 'konekte' men entènèt la pa t mache. Ki nan etap sekans lan ta ka rezoud pwoblèm nan?",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Rekòmanse (restart) routè a san mande pèmisyon lè se pa pwòp aparèy ou li ye.",
          right: "Mande moun ki responsab routè a anvan ou rekòmanse l, sof si se pwòp aparèy ou.",
          why: "Rekòmanse yon routè ki pa pou ou ka deranje lòt moun ki konekte sou menm rezo a.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My Wi-Fi says connected but no websites load. What's a calm, step-by-step way to figure out what's wrong?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou senmile yon sitiyasyon kote Wi-Fi di konekte men entènèt la pa mache.",
          objective: "Site sekans etap ou ta swiv pou idantifye ak rezoud pwoblèm nan.",
          requiredSteps: [
            "Site premye etap ou ta fè (eseye yon lòt sit)",
            "Site dezyèm etap ou ta fè si sa pa mache",
            "Eksplike kilè li ta apwopriye pou kontakte founisè a",
          ],
          successCriteria: ["Sekans lan swiv yon lòd lojik ak kalm"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kalm pou rezoud yon pwoblèm koneksyon.",
            steps: [
              "Eseye yon lòt sit entènèt",
              "Eseye yon lòt aparèy sou menm rezo a",
              "Dekonekte epi rekonekte sou Wi-Fi la",
              "Kontakte founisè entènèt la si anyen pa mache",
            ],
            correctOrder: [0, 1, 2, 3],
            explanation: "Yon sekans kalm ak lojik chèche kòz la anvan li rive nan kontakte founisè a.",
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
    id: "m6-l7",
    slug: "telechaje-ak-voye",
    moduleId: "m6",
    order: 7,
    titleHt: "Telechaje ak Voye (Download ak Upload)",
    titleEn: "Download and Upload",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Distenge telechajman (download) de voye (upload)",
      "Fè atansyon a sa ou voye sou entènèt",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka distenge telechajman de voye, jwenn kote fichye telechaje ateri, epi fè atansyon a enfòmasyon prive ou voye.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Telechaje (download)** vle di pran yon fichye SOTI sou entènèt la POU MET li sou aparèy ou. **Voye (upload)** se lòt sans lan — ou pran yon fichye SOU aparèy ou POU voye l SOU entènèt la (tankou lè ou voye yon foto nan yon mesaj). Pandan tou de aksyon yo, souvan yon **endikatè pwogrè** montre konbyen ki fin fèt. Enpòtan: fè atansyon a **sa ou voye** — yon fwa yon foto oswa dokiman voye sou entènèt, li ka difisil pou retire l nèt.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Telechaje (Download)",
            definition: "Pran yon fichye soti sou entènèt pou mete l sou aparèy ou.",
            example: "Telechaje yon PDF soti sou yon sit pou li l pita san entènèt.",
          },
          {
            term: "Voye (Upload)",
            definition: "Voye yon fichye soti sou aparèy ou pou mete l sou entènèt.",
            example: "Voye yon foto nan yon mesaj se yon egzanp upload.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a yon fwa ou te telechaje yon fichye ak yon fwa ou te voye yon fichye (tankou yon foto). Idantifye ki aksyon se download, ki aksyon se upload.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Reflechi de fwa anvan ou voye yon foto oswa dokiman ki gen enfòmasyon prive",
          "Yon fwa yon bagay voye sou entènèt, li ka difisil pou retire l nèt",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What's the actual difference between downloading and uploading a file, in simple terms?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen pratike de aksyon debaz sou entènèt.",
          objective: "Telechaje yon fichye soti sou entènèt, epi idantifye kote li ateri.",
          requiredSteps: [
            "Telechaje yon fichye soti sou yon sit",
            "Jwenn fichye a nan dosye Downloads ou",
          ],
          successCriteria: ["Fichye a telechaje avèk siksè", "Ou jwenn li san konfizyon"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak aksyon ak direksyon li mache.",
            pairs: [
              { term: "Download", meaning: "Soti sou entènèt, antre sou aparèy ou" },
              { term: "Upload", meaning: "Soti sou aparèy ou, antre sou entènèt" },
            ],
            explanation: "Download antre sou aparèy ou; upload soti sou aparèy ou pou ale sou entènèt.",
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
    id: "m6-l8",
    slug: "kod-qr-lyen-ak-adres-web",
    moduleId: "m6",
    order: 8,
    titleHt: "Kòd QR, Lyen, ak Adrès Wèb",
    titleEn: "QR Codes, Links, and Web Addresses",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Rekonèt yon kòd QR pa otomatikman san danje",
      "Verifye destinasyon yon lyen anvan ou klike",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka evalye yon kòd QR ak yon lyen anvan ou fè konfyans nan yo, epi rekonèt baz yon domèn.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **kòd QR** se yon ti kare ki gen yon lyen kache ladan l — kamera telefòn ou ka li l. **Kòd QR PA otomatikman san danje**: li ka mennen w nan yon sit danjere menm jan ak yon move lyen. Anvan ou klike yon lyen, gade **destinasyon** an (kote li mennen w) — pifò navigatè montre l anba ekran an lè ou pase sourit sou li. Yon **domèn** se non prensipal yon sit web (tankou 'google.com'). Fè atansyon ak **lyen kout (shortened links)** oswa ki sanble bizarre — yo kache vrè destinasyon an.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Kòd QR",
            definition: "Yon ti kare ki kenbe yon lyen kache, kamera telefòn ka li.",
            example: "Yon meni restoran ka gen yon kòd QR ki mennen w sou vèsyon dijital li.",
          },
          {
            term: "Domèn (Domain)",
            definition: "Non prensipal yon sit web, tankou 'google.com'.",
            example: "Verifye domèn nan byen anvan ou antre enfòmasyon sansib sou yon sit.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou wè yon lyen nan yon mesaj oswa imèl, gade adrès la byen (san klike) — idantifye domèn nan anvan ou deside si ou fè l konfyans.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa eskane yon kòd QR ou pa fè konfyans, sitou nan yon kote piblik san sipèvizyon",
          "Verifye domèn nan yon lyen anvan ou antre modpas oswa enfòmasyon sansib",
          "Fè atansyon ak lyen kout ki kache vrè destinasyon yo",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I scanned a QR code and it's about to open a link. What should I check before I trust it?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou resevwa yon lyen nan yon mesaj epi ou vle verifye l anvan ou klike.",
          objective: "Idantifye domèn yon lyen san klike sou li, epi deside si ou ta fè l konfyans.",
          requiredSteps: [
            "Jwenn yon lyen (nan yon mesaj oswa imèl)",
            "Idantifye domèn nan san klike",
            "Deside si domèn nan sanble fyab",
          ],
          successCriteria: ["Ou idantifye domèn nan kòrèkteman", "Ou eksplike rezònman deside w la"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou wè yon kòd QR nan yon afich piblik san non biznis sou li, ki pwomèt yon kado gratis. Ki sa ou dwe fè?",
            options: [
              "Eskane l imedyatman pou pa rate kado a",
              "Sispèk li epi evite eskane l san plis kontèks",
              "Pataje kòd la ak zanmi ou pou yo eskane l pou ou",
              "Antre enfòmasyon labank ou pou resevwa kado a",
            ],
            correctIndex: 1,
            explanation: "Yon kòd QR san kontèks klè ki pwomèt yon kado se yon siy avètisman kominman itilize nan eskrokri.",
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
    id: "m6-l9",
    slug: "misyon-konekte-epi-eksplike",
    moduleId: "m6",
    order: 9,
    titleHt: "Misyon: Konekte epi Eksplike",
    titleEn: "Module Mission: Connect and Explain",
    estimatedMinutes: 15,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 6 nan yon egzèsis koneksyon reyèl",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka konekte sou yon rezo ou fè konfyans, idantifye si se Wi-Fi oswa hotspot, telechaje yon fichye, jwenn li, epi eksplike diferans ant Wi-Fi ak entènèt.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 6 la. Ou pral konbine tout sa ou aprann sou entènèt, Wi-Fi, hotspot, ak koneksyon — nan yon sèl sesyon reyèl.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario: "Ou bezwen demontre konfyans total ou sou koneksyon entènèt.",
          objective:
            "Konekte aparèy ou sou yon rezo ou fè konfyans, idantifye si se Wi-Fi oswa hotspot telefòn, telechaje yon fichye pratik, jwenn li, epi eksplike diferans ant Wi-Fi ak entènèt.",
          requiredSteps: [
            "Konekte aparèy ou sou yon rezo ou fè konfyans",
            "Idantifye si koneksyon an se Wi-Fi oswa hotspot",
            "Telechaje yon fichye pratik",
            "Jwenn fichye a nan dosye Downloads ou",
            "Eksplike ak pwòp mo pa w diferans ant Wi-Fi ak entènèt",
          ],
          successCriteria: [
            "Ou konplete tout senk aksyon yo san bezwen èd pou pi fò nan yo",
            "Eksplikasyon w lan klè epi kòrèk",
          ],
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak tèm ak definisyon kòrèk li.",
            pairs: [
              { term: "Entènèt", meaning: "Gwo rezo rezo òdinatè nan tout mond lan" },
              { term: "Wi-Fi", meaning: "Yon fason san fil pou konekte sou entènèt" },
              { term: "Hotspot", meaning: "Fonksyon ki pataje done selilè yon telefòn" },
            ],
            explanation: "Entènèt la se rezo a; Wi-Fi ak hotspot se de fason diferan pou konekte sou li.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen santi m gen kontwòl total sou koneksyon entènèt mwen kounye a." },
          { statement: "Mwen ta renmen plis pratik anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 7." },
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
  {
    id: "m5-l1",
    slug: "kisa-yon-aplikasyon-ye",
    moduleId: "m5",
    order: 1,
    titleHt: "Ki Sa Yon Aplikasyon Ye?",
    titleEn: "What Is an Application?",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Distenge yon aplikasyon enstale de yon sit entènèt",
      "Rekonèt diferans ant aplikasyon gratis ak peye, sistèm ak twazyèm pati",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike ki sa yon aplikasyon ye epi distenge yon aplikasyon enstale de yon sit ou vizite nan navigatè a.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **aplikasyon (application)** — yo rele l tou **pwogram** oswa **lojisyèl** — se yon zouti ou enstale sou òdinatè ou pou fè yon travay espesifik: ekri, kalkile, gade foto, jwe. Gen de kalite: yon **aplikasyon enstale** viv dirèkteman sou òdinatè a epi ou ka louvri l san entènèt; yon **aplikasyon wèb (web app)** mache nan navigatè a (tankou Chrome oswa Safari) epi souvan mande entènèt. Gen tou aplikasyon **gratis** ak aplikasyon **peye**, ak aplikasyon **sistèm** (ki vini deja enstale, tankou Kalkilatris) kont aplikasyon **twazyèm pati** (ou enstale ou menm apre).",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Aplikasyon (Application)",
            definition: "Yon pwogram ou enstale sou òdinatè a pou fè yon travay espesifik.",
            example: "Yon aplikasyon tretman tèks se yon aplikasyon ou itilize pou ekri dokiman.",
          },
          {
            term: "Aplikasyon Wèb (Web App)",
            definition: "Yon zouti ki mache dirèkteman nan navigatè a, san bezwen enstale l.",
            example: "Anpil sèvis imèl mache tankou aplikasyon wèb ou louvri nan Chrome oswa Safari.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Gade sou òdinatè ou epi jwenn twa aplikasyon ki deja enstale. Idantifye si chak youn se yon aplikasyon sistèm oswa yon aplikasyon twazyèm pati.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panse tout sa ou wè nan navigatè a se yon 'aplikasyon' menm jan ak sa ki enstale sou òdinatè a.",
          right: "Rekonèt yon sit entènèt ou vizite nan navigatè a diferan de yon aplikasyon ki enstale dirèkteman sou òdinatè a.",
          why: "Konprann diferans lan ede w konnen kote pou chèche yon zouti, epi si ou bezwen entènèt pou itilize l.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What's the difference between an application I install on my computer and a web app I use inside my browser?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle konnen ki aplikasyon ou deja genyen sou òdinatè ou.",
          objective: "Jwenn twa aplikasyon diferan epi idantifye si yo se sistèm, twazyèm pati, gratis, oswa peye.",
          requiredSteps: [
            "Jwenn twa aplikasyon ki enstale sou òdinatè ou",
            "Idantifye si chak se yon aplikasyon sistèm oswa twazyèm pati",
          ],
          successCriteria: ["Ou ka idantifye tip twa aplikasyon san èd"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou itilize yon sèvis imèl dirèkteman nan Chrome, san ou pa enstale anyen. Sa a se ki kalite zouti?",
            options: [
              "Yon aplikasyon wèb",
              "Yon aplikasyon sistèm",
              "Yon fichye ZIP",
              "Yon dosye",
            ],
            correctIndex: 0,
            explanation: "Yon zouti ki mache dirèkteman nan navigatè a, san enstalasyon, se yon aplikasyon wèb.",
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
    id: "m5-l2",
    slug: "kote-san-danje-pou-jwenn-aplikasyon",
    moduleId: "m5",
    order: 2,
    titleHt: "Kote San Danje Pou Jwenn Aplikasyon",
    titleEn: "Safe Places to Get Applications",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Rekonèt kote ofisyèl pou telechaje aplikasyon",
      "Rekonèt siy avètisman sou sit telechajman ki pa san danje",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka jwenn magazen aplikasyon ofisyèl sou òdinatè ou, epi rekonèt siy avètisman sou sit ki pa san danje.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Kote ki pi san danje pou jwenn yon aplikasyon se yon **magazen aplikasyon ofisyèl** (Microsoft Store sou Windows, Mac App Store sou Mac) oswa **sit ofisyèl devlopè** aplikasyon an limenm. Evite sit telechajman ki mande w telechaje soti nan yon lyen ou pa rekonèt, ki gen anpil bouton 'Download' ki fè konfizyon, oswa ki mande enfòmasyon pèsonèl anvan ou telechaje. Yon siy avètisman kle: si sit la mande w peye oswa antre modpas anvan ou wè aplikasyon an, sispann.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Magazen Aplikasyon (App Store)",
            definition: "Yon plas ofisyèl kote ou ka telechaje aplikasyon ki verifye.",
            example: "Microsoft Store sou Windows ak Mac App Store sou Mac se de magazen aplikasyon ofisyèl.",
          },
          {
            term: "Sit Ofisyèl Devlopè a",
            definition: "Sit entènèt konpayi ki fè aplikasyon an limenm pibliye.",
            example: "Si ou pa jwenn yon aplikasyon nan magazen an, chèche sit ofisyèl konpayi ki fè l la.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: ["Chèche 'Microsoft Store' nan bwat rechèch la epi louvri l pou wè aplikasyon ofisyèl"],
          mac: ["Chèche 'App Store' nan bwat rechèch la (Spotlight) epi louvri l pou wè aplikasyon ofisyèl"],
          recoveryNote:
            "Si ou pa jwenn aplikasyon an nan magazen an, chèche non konpayi a ansanm ak mo 'sit ofisyèl' anvan ou telechaje nenpòt bagay.",
        },
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Evite sit ki gen anpil bouton 'Download' konfizyonan — souvan se piyèj",
          "Pa antre modpas oswa enfòmasyon peman sou yon sit ou pa rekonèt anvan ou telechaje",
          "Si yon sit ensiste anpil pou ou telechaje vit, sa se yon siy avètisman",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I want to download a specific application but I'm not sure if the website I found is official. What signs should make me suspicious?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen jwenn yon nouvo aplikasyon san mete òdinatè ou an danje.",
          objective: "Louvri magazen aplikasyon ofisyèl la epi chèche yon aplikasyon ou konnen.",
          requiredSteps: [
            "Louvri Microsoft Store (Windows) oswa App Store (Mac)",
            "Chèche non yon aplikasyon ou konnen",
          ],
          successCriteria: ["Ou jwenn magazen an san konfizyon", "Rechèch la montre rezilta ki gen rapò"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Yon sit telechajman ensiste anpil pou ou klike yon bouton 'Download' klere, epi genyen plizyè lòt bouton 'Download' ki fè konfizyon. Ki sa ou dwe fè?",
            options: [
              "Klike premye bouton 'Download' ou wè a",
              "Sispann epi chèche aplikasyon an nan magazen ofisyèl la oswa sit devlopè a",
              "Antre modpas ou pou verifye idantite w",
              "Pataje sit la ak yon zanmi anvan ou telechaje",
            ],
            correctIndex: 1,
            explanation: "Anpil bouton 'Download' konfizyonan se yon gwo siy avètisman — chèche sous ofisyèl la pito.",
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
    id: "m5-l3",
    slug: "enstale-yon-aplikasyon",
    moduleId: "m5",
    order: 3,
    titleHt: "Enstale Yon Aplikasyon",
    titleEn: "Install an Application",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Enstale yon aplikasyon san danje",
      "Rekonèt pèmisyon ak akò lisans anvan ou aksepte yo",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka enstale yon aplikasyon soti nan yon sous ou fè konfyans, epi rekonèt pèmisyon ak lojisyèl anplis ou pa mande.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè ou enstale yon aplikasyon, òdinatè a souvan mande w konfime **pèmisyon** (tankou kapasite pou li kreye fichye) ak montre yon **akò lisans** ou dwe li anvan ou aksepte. Pran tan pou gade si gen kaz ki deja tcheke pou enstale **lojisyèl anplis (bundled software)** ou pa mande — desanble yo si yo la. Sou Windows, enstalasyon an souvan mache atravè yon **asistan enstalasyon (installer)** ki mennen ou etap pa etap. Sou Mac, ou souvan **rale ikòn aplikasyon an nan dosye Applications**.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Pèmisyon (Permission)",
            definition: "Otorizasyon yon aplikasyon mande pou l ka fè yon bagay espesifik sou òdinatè ou.",
            example: "Yon aplikasyon foto ka mande pèmisyon pou l aksede nan foto ou yo.",
          },
          {
            term: "Lojisyèl Anplis (Bundled Software)",
            definition: "Yon lòt aplikasyon ki tante enstale ansanm ak sa ou vle a, souvan san w pa remake.",
            example: "Dekache kaz ki tcheke pou 'enstale tou' yon lòt aplikasyon pandan enstalasyon an.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Louvri fichye enstalasyon an epi swiv etap asistan enstalasyon an",
            "Dekache kaz ki tcheke pou lojisyèl anplis ou pa mande",
            "Li akò lisans lan anvan ou aksepte, epi klike 'Install' pou fini",
          ],
          mac: [
            "Louvri fichye .dmg la epi rale ikòn aplikasyon an nan dosye Applications",
            "Louvri aplikasyon an soti nan Applications oswa Launchpad",
          ],
          recoveryNote:
            "Si sistèm nan mande konfimasyon anplis anvan aplikasyon an louvri pou premye fwa, se yon etap sekirite nòmal.",
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Klike 'Next' rapid san li anyen pandan enstalasyon an, epi aksepte tout kaz ki deja tcheke.",
          right: "Pran tan pou gade chak etap epi dekache kaz pou lojisyèl anplis ou pa mande.",
          why: "Anpil enstalasyon eseye ajoute lòt aplikasyon oswa chanje paramèt navigatè a si ou pa fè atansyon.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! During an installation, I saw a checkbox already checked that says it will also install another program. Should I leave it checked?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle enstale yon aplikasyon ou telechaje soti nan yon sous ou fè konfyans.",
          objective: "Enstale aplikasyon an pandan ou fè atansyon a chak etap, epi verifye pa gen lojisyèl anplis.",
          requiredSteps: [
            "Louvri fichye enstalasyon an",
            "Verifye pa gen kaz tcheke pou lojisyèl anplis",
            "Fini enstalasyon an epi louvri aplikasyon an yon fwa",
          ],
          successCriteria: ["Aplikasyon an enstale san lòt lojisyèl anplis", "Aplikasyon an louvri kòrèkteman"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Pandan yon enstalasyon, ou wè yon kaz ki deja tcheke pou enstale yon lòt aplikasyon ou pa rekonèt. Ki sa ou dwe fè?",
            options: [
              "Kite l tcheke epi kontinye",
              "Dekache kaz la anvan ou kontinye",
              "Sispann tout enstalasyon an",
              "Enstale l epi efase l pita",
            ],
            correctIndex: 1,
            explanation: "Dekache kaz ki deja tcheke pou lojisyèl anplis anvan ou kontinye enstalasyon an.",
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
    id: "m5-l4",
    slug: "mete-ajou-ak-retire-yon-aplikasyon",
    moduleId: "m5",
    order: 4,
    titleHt: "Mete Ajou ak Retire Yon Aplikasyon",
    titleEn: "Update and Remove an Application",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Mete ajou yon aplikasyon",
      "Dezenstale yon aplikasyon san danje",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka mete yon aplikasyon ajou epi dezenstale yon aplikasyon ou pa bezwen ankò, san efase fichye ou kreye ak li.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Mete ajou (update)** yon aplikasyon enpòtan paske sa ranje pwoblèm ak souvan fèmen twou sekirite. Aplikasyon yo souvan mete ajou tèt yo, oswa ou ka verifye nan magazen aplikasyon an. Pou retire yon aplikasyon, itilize **dezenstale (uninstall)** — sa diferan de efase yon rakousi (shortcut) sou Desktop la, ki sèlman retire aksè rapid la san retire aplikasyon an vrèman. Enpòtan: dezenstale yon aplikasyon **pa toujou efase fichye ou te kreye avè l** — dokiman ou te sovgade rete sou òdinatè a.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Mete Ajou (Update)",
            definition: "Enstale yon nouvo vèsyon yon aplikasyon ki ranje pwoblèm oswa ajoute fonksyon.",
            example: "Mete aplikasyon yo ajou regilyèman pou pwoteje òdinatè ou.",
          },
          {
            term: "Dezenstale (Uninstall)",
            definition: "Retire yon aplikasyon nèt sou òdinatè a, diferan de efase yon rakousi.",
            example: "Dezenstale yon aplikasyon ou pa itilize ankò pou libere espas.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Ale nan Settings > Apps",
            "Chèche non aplikasyon an epi klike 'Uninstall'",
          ],
          mac: [
            "Louvri Finder > Applications",
            "Rale ikòn aplikasyon an nan Trash pou dezenstale l",
          ],
          recoveryNote:
            "Si aplikasyon an pa disparèt apre sa, sonje l ka mande yon rekòmansaj (restart) òdinatè a pou fini pwosesis la.",
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Efase sèlman ikòn aplikasyon an sou Desktop la epi panse aplikasyon an dezenstale.",
          right: "Itilize opsyon 'Uninstall' (Windows) oswa rale aplikasyon an nan Trash (Mac) pou vrèman retire l.",
          why: "Efase yon rakousi sèlman retire aksè rapid la — aplikasyon an ak espas li itilize rete sou òdinatè a.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I uninstalled an application but I'm worried the documents I created with it are gone too. Is that usually the case?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou gen yon aplikasyon ou pa itilize ankò epi ou vle libere espas.",
          objective: "Verifye si gen mizajou disponib pou yon aplikasyon, epi dezenstale yon aplikasyon ou pa bezwen.",
          requiredSteps: [
            "Verifye si yon aplikasyon gen mizajou disponib",
            "Dezenstale yon aplikasyon ou pa itilize ankò",
          ],
          successCriteria: ["Aplikasyon an pa parèt ankò nan lis aplikasyon yo", "Ou konprann fichye ou kreye yo rete"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ou dezenstale yon aplikasyon tretman tèks. Sa k ap rive ak dokiman ou te ekri avè l yo?",
            options: [
              "Yo efase otomatikman",
              "Yo rete sou òdinatè a — se sèlman aplikasyon an ki dezenstale",
              "Yo voye nan Recycle Bin/Trash",
              "Yo konprese nan yon fichye ZIP",
            ],
            correctIndex: 1,
            explanation: "Dezenstale yon aplikasyon retire aplikasyon an sèlman — dokiman ou te kreye yo rete sou òdinatè a.",
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
    id: "m5-l5",
    slug: "louvri-modifye-sovgade-ak-feme-yon-dokiman",
    moduleId: "m5",
    order: 5,
    titleHt: "Louvri, Modifye, Sovgade, ak Fèmen Yon Dokiman Debaz",
    titleEn: "Open, Edit, Save, and Close a Basic Document",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Louvri, modifye, sovgade, ak fèmen yon dokiman debaz",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka louvri yon dokiman senp, fè yon ti modifikasyon, sovgade l, epi fèmen l san pèdi travay ou.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sekans debaz pou travay ak yon dokiman se: **louvri** l (doub klik oswa 'Open' nan aplikasyon an), **modifye** l (ajoute oswa chanje tèks), **sovgade** l (Ctrl+S/Cmd+S), epi **fèmen** l lè ou fini. Leson sa a pa yon fòmasyon konplè sou yon aplikasyon tretman tèks espesifik — se sèlman sekans debaz la ou ka aplike nan nenpòt aplikasyon dokiman senp. Toujou sovgade anvan ou fèmen, sinon dènye chanjman ou yo ka pèdi.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Modifye (Edit)",
            definition: "Chanje kontni yon dokiman — ajoute, retire, oswa chanje tèks.",
            example: "Modifye dat la nan dokiman an anvan ou sovgade l.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: ["Peze Ctrl+S pou sovgade chanjman yo pandan ou ap travay"],
          mac: ["Peze Cmd+S pou sovgade chanjman yo pandan ou ap travay"],
          recoveryNote:
            "Si aplikasyon an mande w yon non fichye lè ou sovgade pou premye fwa, bay li yon non ki gen sans.",
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Fèmen yon dokiman san sovgade apre ou fin fè chanjman.",
          right: "Sovgade (Ctrl+S/Cmd+S) anvan ou fèmen yon dokiman ou modifye.",
          why: "Chanjman ki pa sovgade disparèt lè ou fèmen dokiman an san konfimasyon.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I made changes to a document but I'm not sure if I saved them before closing it. How can I avoid losing work like that?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou resevwa yon dokiman senp epi ou bezwen fè yon ti modifikasyon.",
          objective: "Louvri dokiman an, fè yon ti chanjman, sovgade l, epi fèmen l.",
          requiredSteps: [
            "Louvri yon dokiman ki egziste deja",
            "Fè yon ti modifikasyon (ajoute yon fraz oswa chanje yon mo)",
            "Sovgade dokiman an",
            "Fèmen dokiman an",
          ],
          successCriteria: ["Chanjman an rete apre ou fèmen epi rouvri dokiman an"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kòrèk pou travay ak yon dokiman san pèdi chanjman.",
            steps: ["Louvri dokiman an", "Modifye kontni li", "Sovgade dokiman an", "Fèmen dokiman an"],
            correctOrder: [0, 1, 2, 3],
            explanation: "Toujou sovgade apre ou modifye, epi anvan ou fèmen, pou pa pèdi chanjman ou yo.",
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
    id: "m5-l6",
    slug: "sa-ou-dwe-konnen-sou-pdf",
    moduleId: "m5",
    order: 6,
    titleHt: "Sa Ou Dwe Konnen Sou PDF",
    titleEn: "PDF Essentials",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Louvri, navige, zoom, ak chèche nan yon PDF",
      "Telechaje ak enprime yon PDF",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka louvri yon PDF, navige ladan l, chèche yon mo, epi telechaje oswa enprime l.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **PDF** se yon fòma dokiman ki gade menm jan sou tout aparèy — se poutèt sa moun itilize l pou rapò, kontra, ak fòmilè. Ou ka **navige** ant paj yo, **zoom** pou li pi klè, ak **chèche** yon mo espesifik nan tout dokiman an. Kèk PDF gen **jaden ranpli (fillable fields)** ou ka klike pou antre enfòmasyon. Leson sa a pa yon fòmasyon sou modifye yon PDF an pwofondè — se sèlman baz pou li, navige, ak enprime yon PDF.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "PDF",
            definition: "Yon fòma dokiman ki gade menm jan sou tout aparèy ak sistèm opere.",
            example: "Ekspòte yon rapò an PDF anvan ou pataje l pou l gade menm jan pou tout moun.",
          },
          {
            term: "Jaden Ranpli (Fillable Field)",
            definition: "Yon espas nan yon PDF ou ka klike pou antre enfòmasyon dirèkteman.",
            example: "Kèk fòmilè PDF gen jaden ranpli pou non ak dat san ou pa bezwen enprime yo.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Doub klike yon fichye .pdf pou louvri l nan aplikasyon PDF debaz la",
            "Itilize Ctrl+F pou chèche yon mo, epi Ctrl+P pou enprime",
          ],
          mac: [
            "Doub klike yon fichye .pdf pou louvri l nan Preview",
            "Itilize Cmd+F pou chèche yon mo, epi Cmd+P pou enprime",
          ],
          recoveryNote:
            "Si PDF la louvri nan navigatè a olye yon aplikasyon apa, ou ka toujou navige, zoom, ak chèche menm jan an.",
        },
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Louvri yon fichye PDF ou genyen deja. Eseye zoom pou li pi gwo, navige ant de paj, epi chèche yon mo ak Ctrl+F/Cmd+F.",
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I have a long PDF and I need to find a specific word in it without reading every page. How do I search inside a PDF?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou resevwa yon dokiman PDF ou bezwen egzamine.",
          objective: "Louvri PDF la, chèche yon mo espesifik ladan l, epi enprime oswa ekspòte l.",
          requiredSteps: [
            "Louvri yon fichye PDF",
            "Chèche yon mo espesifik nan dokiman an",
            "Enprime oswa ekspòte yon kopi",
          ],
          successCriteria: ["Rechèch la jwenn mo a", "Ou konplete enpresyon oswa ekspòtasyon an san konfizyon"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Poukisa moun itilize fòma PDF pito pase fòma tankou .docx pou pataje yon dokiman final?",
            options: [
              "Paske PDF gade menm jan sou tout aparèy ak sistèm",
              "Paske PDF pi piti toujou pase lòt fòma",
              "Paske ou pa ka enprime yon PDF",
              "Paske PDF otomatikman efase apre yon semèn",
            ],
            correctIndex: 0,
            explanation: "PDF gade menm jan kèlkeswa aparèy la, se pou sa li popilè pou dokiman final.",
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
    id: "m5-l7",
    slug: "aplikasyon-pa-defo",
    moduleId: "m5",
    order: 7,
    titleHt: "Aplikasyon Pa Defo",
    titleEn: "Default Applications",
    estimatedMinutes: 8,
    mode: "shared_steps",
    objectives: [
      "Konprann poukisa yon fichye louvri nan yon aplikasyon espesifik",
      "Itilize 'Open With' pou chwazi yon lòt aplikasyon",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike poukisa yon fichye louvri nan yon sèten aplikasyon, epi itilize 'Open With' pou chwazi yon lòt aplikasyon lè sa nesesè.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Chak tip fichye gen yon **aplikasyon pa defo (default application)** — se aplikasyon ki louvri otomatikman lè ou double-klike fichye a. Pa egzanp, tout .pdf ka louvri toujou nan menm aplikasyon. Si ou vle louvri yon fichye nan yon LÒT aplikasyon pou yon fwa sèlman, itilize **'Open With'** (right-click sou fichye a). Chanje aplikasyon pa defo pou tout tan se yon desizyon ou pa dwe fè san reflechi — fè l sèlman lè ou gen yon rezon klè.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Aplikasyon Pa Defo (Default Application)",
            definition: "Aplikasyon ki louvri otomatikman lè ou double-klike yon tip fichye.",
            example: "Si aplikasyon foto pa defo ou a se Photos, tout .jpg louvri ladan l otomatikman.",
          },
          {
            term: "Open With",
            definition: "Opsyon ki kite w chwazi yon lòt aplikasyon pou louvri yon fichye, pou yon fwa sèlman.",
            example: "Right-click sou yon fichye epi chwazi 'Open With' pou eseye yon lòt aplikasyon.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: ["Right-click sou fichye a, chwazi 'Open with', epi chwazi aplikasyon ou vle a"],
          mac: ["Right-click sou fichye a, chwazi 'Open With', epi chwazi aplikasyon ou vle a"],
          recoveryNote:
            "Si ou pa wè aplikasyon ou vle a nan lis la, li ka poko enstale sou òdinatè a.",
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Chanje aplikasyon pa defo pou TOUT tip fichye san w pa konprann konsekans lan.",
          right: "Itilize 'Open With' pou yon fwa sèlman, san chanje default la, sof si ou gen yon bon rezon.",
          why: "Chanje default la pou tout tan afekte KIYÈS fwa ou double-klike menm tip fichye a alavni.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! When I double-click a file, it always opens in the same app. How do I open it in a different app just this once?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle louvri yon fichye nan yon lòt aplikasyon pase sa ki louvri otomatikman.",
          objective: "Itilize 'Open With' pou chwazi yon lòt aplikasyon pou yon fichye espesifik.",
          requiredSteps: [
            "Right-click sou yon fichye",
            "Chwazi 'Open With'",
            "Chwazi yon lòt aplikasyon nan lis la",
          ],
          successCriteria: ["Fichye a louvri nan aplikasyon ou chwazi a", "Aplikasyon pa defo a pa chanje"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou vle louvri yon foto nan yon lòt aplikasyon pou yon fwa sèlman, san chanje aplikasyon pa defo a pou tout tan. Ki sa ou dwe fè?",
            options: [
              "Right-click epi itilize 'Open With'",
              "Chanje default la nan Settings",
              "Dezenstale aplikasyon pa defo a",
              "Kreye yon nouvo dosye",
            ],
            correctIndex: 0,
            explanation: "'Open With' kite w chwazi yon lòt aplikasyon pou yon fwa, san afekte default la pou tout tan.",
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
    id: "m5-l8",
    slug: "pemisyon-aplikasyon",
    moduleId: "m5",
    order: 8,
    titleHt: "Pèmisyon Aplikasyon",
    titleEn: "Application Permissions",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Konprann diferan kalite pèmisyon aplikasyon ka mande",
      "Deside chwazi yon pèmisyon daprè objektif reyèl aplikasyon an",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rekonèt diferan kalite pèmisyon yon aplikasyon ka mande, epi deside si yo fè sans daprè objektif aplikasyon an.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Aplikasyon yo mande **pèmisyon** anvan yo itilize kèk pati sansib nan òdinatè ou: **kamera**, **mikwofòn**, **lokalizasyon (location)**, **fichye**, ak **notifikasyon**. Règ senp lan: mande tèt ou si pèmisyon an fè sans pou sa aplikasyon an fèt pou fè. Yon aplikasyon foto ki mande kamera fè sans; yon aplikasyon kalkilatris ki mande kamera pa fè sans. Ou ka toujou refize yon pèmisyon epi chanje desizyon w pita nan Paramèt.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Pèmisyon Lokalizasyon (Location Permission)",
            definition: "Otorizasyon ki kite yon aplikasyon konnen kote ou ye.",
            example: "Yon aplikasyon kat (map) mande pèmisyon lokalizasyon pou l ka montre chemen an.",
          },
          {
            term: "Notifikasyon (Notifications)",
            definition: "Pèmisyon ki kite yon aplikasyon voye w mesaj menm lè aplikasyon an fèmen.",
            example: "Yon aplikasyon imèl ka mande pèmisyon notifikasyon pou avèti w lè yon nouvo mesaj rive.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a twa aplikasyon ou itilize. Pou chak youn, di ki pèmisyon (kamera, mikwofòn, lokalizasyon, fichye, notifikasyon) ki ta fè sans pou li mande, e poukisa.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Aksepte tout pèmisyon yon aplikasyon mande san reflechi si yo fè sans.",
          right: "Mande tèt ou si pèmisyon an gen rapò ak objektif reyèl aplikasyon an anvan ou aksepte l.",
          why: "Yon aplikasyon ki gen aksè pèmisyon li pa bezwen ka itilize enfòmasyon sa yo pou rezon ou pa dakò avè yo.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! A simple calculator app is asking for camera and location permission. Does that make sense, and how should I decide?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle konprann pèmisyon aplikasyon ou deja genyen yo.",
          objective: "Chwazi twa aplikasyon epi deside si pèmisyon yo mande fè sans pou objektif yo.",
          requiredSteps: [
            "Chwazi twa aplikasyon ou itilize",
            "Idantifye ki pèmisyon chak youn mande",
            "Deside si chak pèmisyon fè sans",
          ],
          successCriteria: ["Ou eksplike rezònman w pou chak desizyon"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Yon aplikasyon kalkilatris senp mande pèmisyon pou kamera ak mikwofòn ou. Ki sa sa ta dwe fè w panse?",
            options: [
              "Sa nòmal, tout aplikasyon bezwen tout pèmisyon",
              "Sa etranj — yon kalkilatris pa gen rezon pou bezwen kamera oswa mikwofòn",
              "Sa vle di aplikasyon an gratis",
              "Sa vle di aplikasyon an pral mache pi vit",
            ],
            correctIndex: 1,
            explanation: "Yon pèmisyon ki pa gen rapò ak objektif aplikasyon an se yon siy pou poze kesyon anvan ou aksepte.",
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
    id: "m5-l9",
    slug: "misyon-prepare-yon-dokiman",
    moduleId: "m5",
    order: 9,
    titleHt: "Misyon: Prepare Yon Dokiman",
    titleEn: "Module Mission: Prepare a Document",
    estimatedMinutes: 15,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 5 nan yon egzèsis dokiman reyèl",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka louvri yon dokiman, modifye l, sovgade yon nouvo kopi ak yon bon non, ekspòte oswa enprime an PDF, epi jwenn fichye final la.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 5 la. Ou pral konbine sa ou aprann sou aplikasyon ak dokiman — louvri, modifye, Save As, ak ekspòte an PDF — nan yon sèl egzèsis reyèl.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario: "Ou resevwa yon dokiman senp ou bezwen prepare pou pataje.",
          objective:
            "Louvri dokiman an, fè yon ti modifikasyon, sovgade yon nouvo kopi ak yon non ki gen sans, ekspòte oswa enprime yon vèsyon PDF, epi jwenn fichye final la.",
          requiredSteps: [
            "Louvri yon dokiman ki egziste deja",
            "Fè yon ti modifikasyon nan dokiman an",
            "Itilize Save As pou kreye yon nouvo kopi ak yon non ki gen sans",
            "Ekspòte oswa enprime yon vèsyon PDF",
            "Jwenn fichye PDF final la nan dosye ou te sovgade l la",
          ],
          successCriteria: [
            "Nouvo kopi a gen yon non ki gen sans",
            "Yon fichye PDF egziste ak menm kontni modifye a",
            "Ou konplete tout etap yo san bezwen èd pou pi fò nan yo",
          ],
          stretchChallenge: "Ouvri PDF final la epi chèche yon mo espesifik ladan l pou konfime li kòrèk.",
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak zouti ak sa li fè.",
            pairs: [
              { term: "Save As", meaning: "Kreye yon nouvo kopi san afekte orijinal la" },
              { term: "Open With", meaning: "Louvri yon fichye nan yon lòt aplikasyon pou yon fwa" },
              { term: "Uninstall", meaning: "Retire yon aplikasyon nèt" },
            ],
            explanation: "Save As, Open With, ak Uninstall se twa zouti debaz ou itilize souvan ak aplikasyon ak dokiman.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen santi m gen kontwòl total sou aplikasyon ak dokiman mwen kounye a." },
          { statement: "Mwen ta renmen plis pratik anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 6." },
        ],
      },
    ],
  },
  {
    id: "m7-l1",
    slug: "navigate-mote-rechech-sit-web-ak-paj-web",
    moduleId: "m7",
    order: 1,
    titleHt: "Navigatè, Motè Rechèch, Sit Web, ak Paj Web",
    titleEn: "Browser, Search Engine, Website, and Web Page",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Distenge navigatè, motè rechèch, sit web, ak paj web",
      "Rekonèt egzanp popilè chak youn",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka distenge yon navigatè, yon motè rechèch, yon sit web, ak yon paj web san konfizyon.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **navigatè (browser)** se aplikasyon ou itilize pou vizite entènèt la — Chrome, Edge, Safari, ak Firefox se kat egzanp popilè. Yon **motè rechèch (search engine)**, tankou Google oswa Bing, se yon sit espesyal ki ede w JWENN lòt sit — li mache DEDANN navigatè a, li pa navigatè a limenm. Yon **sit web (website)** se yon koleksyon paj ki gen menm **domèn** (tankou 'wikipedia.org'). Yon **paj web (web page)** se YON sèl paj espesifik nan yon sit — yon sit ka gen anpil paj.",
      },
      {
        id: "b3",
        type: "diagram",
        diagram: {
          diagramId: "browser-search-engine-website-page-map",
          caption: "Navigatè (Chrome) → Motè Rechèch (Google) → Sit Web (wikipedia.org) → Paj Web espesifik",
        },
      },
      {
        id: "b4",
        type: "vocabulary",
        words: [
          {
            term: "Navigatè (Browser)",
            definition: "Aplikasyon ou itilize pou vizite sit entènèt.",
            example: "Chrome, Edge, Safari, ak Firefox se kat navigatè popilè.",
          },
          {
            term: "Motè Rechèch (Search Engine)",
            definition: "Yon sit espesyal ki ede w jwenn lòt sit, tankou Google oswa Bing.",
            example: "Tape yon kesyon nan Google pou jwenn sit ki gen repons lan.",
          },
        ],
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Louvri navigatè ou a. Idantifye si sa ou wè kounye a se yon motè rechèch, yon sit web espesifik, oswa yon sèl paj.",
      },
      {
        id: "b6",
        type: "mistake",
        mistake: {
          wrong: "Panse Google (motè rechèch) ak Chrome (navigatè) se menm bagay.",
          right: "Konprann Chrome se aplikasyon ou louvri; Google se yon sit ou vizite ladan l pou chèche.",
          why: "Konfizyon sa a fè moun pèdi tan lè yo eseye rezoud yon pwoblèm san yo pa konnen ki pati ki gen pwoblèm.",
        },
      },
      {
        id: "b7",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain the difference between a browser, a search engine, a website, and a web page with simple examples?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b8",
        type: "mission",
        mission: {
          scenario: "Ou vle ka non chak pati lè ou navige sou entènèt.",
          objective: "Louvri navigatè ou, ale sou yon motè rechèch, epi vizite yon sit web ak plizyè paj.",
          requiredSteps: [
            "Louvri navigatè ou a",
            "Ale sou yon motè rechèch (Google oswa Bing)",
            "Vizite yon sit web epi ale sou omwen de paj diferan ladan l",
          ],
          successCriteria: ["Ou idantifye kòrèkteman chak pati (navigatè, motè rechèch, sit, paj)"],
        },
      },
      {
        id: "b9",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak tèm ak sa li ye.",
            pairs: [
              { term: "Chrome", meaning: "Yon navigatè" },
              { term: "Google", meaning: "Yon motè rechèch" },
              { term: "wikipedia.org", meaning: "Yon sit web" },
            ],
            explanation: "Chrome se navigatè a, Google se motè rechèch la, wikipedia.org se yon sit web.",
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
    id: "m7-l2",
    slug: "ba-adres-lyen-tounen-avanse-rafrechi-ak-akey",
    moduleId: "m7",
    order: 2,
    titleHt: "Ba Adrès, Lyen, Tounen, Avanse, Rafrechi, ak Akèy",
    titleEn: "Address Bar, Links, Back, Forward, Refresh, and Home",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Itilize kontwòl navigasyon debaz nan yon navigatè",
      "Rekonèt yon fo bwat rechèch",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka itilize ba adrès la, bouton Tounen/Avanse/Rafrechi, ak rekonèt yon fo bwat rechèch.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Ba adrès (address bar)** la, anwo navigatè a, montre adrès paj kote ou ye a — ou ka tape yon adrès dirèkteman ladan l, oswa yon rechèch. Bouton **Tounen (Back)** ak **Avanse (Forward)** deplase w nan paj ou te deja vizite. **Rafrechi (Refresh)** rechaje paj la si li pa fin chaje byen. Bouton **Akèy (Home)** mennen w tounen nan paj prensipal ou chwazi a. **Fè atansyon**: kèk sit gen yon 'fo bwat rechèch' ki sanble ak bwat rechèch reyèl la men ki mennen w sou piblisite oswa move sit.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Ba Adrès (Address Bar)",
            definition: "Espas anwo navigatè a kote ou tape yon adrès oswa yon rechèch.",
            example: "Tape 'wikipedia.org' nan ba adrès la pou ale dirèkteman sou sit la.",
          },
          {
            term: "Fo Bwat Rechèch (Fake Search Box)",
            definition: "Yon bwat sou yon sit ki sanble ak yon rechèch men ki mennen sou piblisite.",
            example: "Fè atansyon a gwo bouton 'Search' klere ki pa nan vrè zòn rechèch sit la.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Nan navigatè ou, vizite de sit diferan, epi itilize bouton Tounen pou retounen nan premye a san tape adrès la ankò.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Klike premye bwat 'Search' klere ou wè sou yon sit, san verifye si se vrè rechèch la.",
          right: "Verifye ke bwat rechèch la se pati OFISYÈL sit la anvan ou tape ladan l.",
          why: "Fo bwat rechèch yo souvan mennen sou piblisite oswa sit danjere olye rezilta reyèl yo.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! A website I visited has a big flashy 'Search' box that doesn't look like the site's real search bar. How can I tell if it's fake?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle pratike navige ant plizyè paj ak kontwòl debaz yo.",
          objective: "Vizite twa paj diferan, itilize Tounen pou retounen, epi rafrechi yon paj.",
          requiredSteps: [
            "Vizite twa paj diferan youn apre lòt",
            "Itilize bouton Tounen pou retounen de fwa",
            "Rafrechi paj ou ye a kounye a",
          ],
          successCriteria: ["Ou navige san konfizyon ant paj yo"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ki bouton ou itilize pou retounen nan paj ou te vizite anvan an?",
            options: ["Rafrechi (Refresh)", "Tounen (Back)", "Akèy (Home)", "Avanse (Forward)"],
            correctIndex: 1,
            explanation: "Bouton Tounen (Back) mennen w nan dènye paj ou te vizite a.",
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
    id: "m7-l3",
    slug: "ongle-ak-fennet",
    moduleId: "m7",
    order: 3,
    titleHt: "Onglè ak Fennèt",
    titleEn: "Tabs and Windows",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Louvri, chanje, ak fèmen onglè nan yon navigatè",
      "Rouvri yon onglè ou fèmen pa aksidan",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka jere plizyè onglè nan navigatè ou — louvri, chanje, fèmen, ak rouvri yon onglè ou fèmen pa aksidan.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **onglè (tab)** kite w gen plizyè paj web louvri anndan yon SÈL fennèt navigatè, epi chanje ant yo rapid. Yon **fennèt (window)** se tout aplikasyon navigatè a limenm — ou ka gen plizyè fennèt, chak youn ak plizyè onglè ladan l. Twòp onglè louvri anmenm tan ka fè navigatè a lan epi difisil pou jwenn sa ou bezwen. Si ou fèmen yon onglè pa aksidan, gen souvan yon fason pou **rouvri dènye onglè fèmen an**.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Onglè (Tab)",
            definition: "Yon paj web louvri anndan yon fennèt navigatè, akote lòt onglè.",
            example: "Louvri de onglè pou konpare de sit sou pri yon menm pwodwi.",
          },
          {
            term: "Fennèt (Window)",
            definition: "Yon fenèt aplikasyon navigatè a, ki ka gen plizyè onglè ladan l.",
            example: "Ou ka gen de fennèt navigatè louvri anmenm tan, chak youn ak plizyè onglè.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Louvri twa onglè nan navigatè ou ak twa sit diferan. Chanje ant yo, epi fèmen youn — eseye rouvri l ankò.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Kite trant onglè louvri anmenm tan epi bliye kisa ki nan chak youn.",
          right: "Fèmen onglè ou fin itilize, epi itilize favori pou sovgade paj ou vle retounen sou yo pita.",
          why: "Twòp onglè fè navigatè a konsome plis memwa epi vin lan, epi fè li difisil pou jwenn onglè ou bezwen.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I accidentally closed a browser tab I needed. Is there a way to reopen it without retyping the address?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle konpare enfòmasyon sou de sit diferan anmenm tan.",
          objective: "Louvri de onglè ak de sit diferan, chanje ant yo, epi fèmen youn epi rouvri l.",
          requiredSteps: [
            "Louvri de onglè ak de sit diferan",
            "Chanje ant de onglè yo",
            "Fèmen yon onglè epi rouvri l ankò",
          ],
          successCriteria: ["Ou chanje ant onglè yo san konfizyon", "Onglè fèmen an rouvri avèk siksè"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou fèmen yon onglè enpòtan pa aksidan. Ki sa ou dwe fè?",
            options: [
              "Chèche fason pou rouvri dènye onglè fèmen an",
              "Fèmen tout navigatè a epi rekòmanse chèche a",
              "Panse enfòmasyon an pèdi pou tout tan",
              "Rekòmanse (restart) òdinatè a",
            ],
            correctIndex: 0,
            explanation: "Pifò navigatè gen yon fason rapid pou rouvri dènye onglè ou fèmen pa aksidan.",
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
    id: "m7-l4",
    slug: "cheche-pi-byen",
    moduleId: "m7",
    order: 4,
    titleHt: "Chèche Pi Byen",
    titleEn: "Search Better",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Itilize mo espesifik pou jwenn rezilta pi kòrèk",
      "Evite tape enfòmasyon prive nan yon rechèch",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka fè rechèch ki bay rezilta pi kòrèk, epi evite tape enfòmasyon prive nan yon rechèch.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon bon rechèch itilize **mo espesifik** olye de fraz vag — 'orè otobis Pòtoprens Kap Ayisyen' bay pi bon rezilta pase 'otobis'. Mete yon fraz ant **gilmè (\"...\")** fè motè rechèch la jwenn EGZAKTEMAN fraz sa a. Ajoute yon **kote oswa dat** ka afine rezilta yo. Konpare **plizyè sous** anvan ou fè konfyans a yon repons. Enpòtan anpil: **pa janm tape yon kesyon konplè ki gen enfòmasyon sansib** (tankou nimewo kont bankè ou) nan yon bwat rechèch.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Fraz Egzat (Exact Phrase)",
            definition: "Mete yon fraz ant gilmè pou jwenn rezilta ki gen menm mo yo nan menm lòd.",
            example: "'orè liv otobis' ant gilmè jwenn paj ki gen egzakteman fraz sa a.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Chèche yon bagay pratik ou vle konnen (tankou yon orè oswa yon adrès biznis). Eseye premye ak mo vag, epi ankò ak mo espesifik — konpare rezilta yo.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa tape nimewo kont bankè, modpas, oswa kòd verifikasyon nan yon bwat rechèch",
          "Konpare omwen de sous anvan ou fè konfyans a yon repons enpòtan",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I searched for something but the results weren't helpful. How can I write a better, more specific search?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen jwenn yon enfòmasyon pratik rapid.",
          objective: "Fè yon rechèch ak mo espesifik, epi konpare rezilta ak yon dezyèm rechèch pi vag.",
          requiredSteps: [
            "Fè yon rechèch ak mo vag",
            "Fè menm rechèch la ak mo pi espesifik",
            "Konpare kalite rezilta yo",
          ],
          successCriteria: ["Ou eksplike diferans lan ant de rechèch yo"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou ap chèche enfòmasyon sou kont labank ou epi ou panse pou tape nimewo kont ou nan Google pou jwenn repons rapid. Ki sa ou dwe fè?",
            options: [
              "Tape nimewo kont ou pou jwenn repons pi vit",
              "Pa janm tape enfòmasyon sansib tankou sa nan yon bwat rechèch",
              "Tape l men efase l apre",
              "Mande yon zanmi tape l pou ou",
            ],
            correctIndex: 1,
            explanation: "Enfòmasyon sansib pa dwe janm tape nan yon bwat rechèch — sa ka rete nan istorik oswa sèvè yo.",
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
    id: "m7-l5",
    slug: "eske-enfomasyon-sa-a-fyab",
    moduleId: "m7",
    order: 5,
    titleHt: "Èske Enfòmasyon Sa a Fyab?",
    titleEn: "Is This Information Trustworthy?",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Evalye fyabilite yon sous enfòmasyon",
      "Rekonèt rezilta peye ak kontni ki ka fèt ak AI",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka evalye si yon paj web fyab lè ou gade otè, sous, dat, prèv, ak objektif li.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Anvan ou fè konfyans a yon enfòmasyon sou entènèt, poze tèt ou sis kesyon: Ki **otè** (moun oswa òganizasyon) ki ekri l? Ki **sous** li ye — yon sit ofisyèl, yon blog pèsonèl? Ki **dat** li pibliye — li ka demode. Ki **prèv** li bay pou sipòte sa l di a? Ki **objektif** li — enfòme, vann, oswa konvenk? Èske lòt sous **konfime** menm enfòmasyon an (**korobore**)? Fè atansyon tou ak **rezilta peye (sponsored)** ki parèt anlè yo, ak **kontni ki ka fèt ak AI** ki ka gen erè san moun pa remake.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Korobore (Corroborate)",
            definition: "Konfime yon enfòmasyon lè plizyè sous diferan di menm bagay la.",
            example: "Si twa sit diferan bay menm dat pou yon evènman, sa korobore enfòmasyon an.",
          },
          {
            term: "Rezilta Peye (Sponsored Result)",
            definition: "Yon rezilta rechèch yon konpayi peye pou parèt anlè, souvan make 'Ad' oswa 'Sponsored'.",
            example: "Verifye si yon rezilta make 'Sponsored' anvan ou fè l menm konfyans ak yon rezilta òdinè.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Chwazi yon paj web ou vizite souvan. Poze tèt ou sis kesyon fyabilite yo: otè, sous, dat, prèv, objektif, ak korobore.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Fè konfyans a premye rezilta rechèch la san verifye ki moun ki ekri l oswa kilè.",
          right: "Verifye otè a, dat la, ak konpare ak omwen yon lòt sous anvan ou fè konfyans total.",
          why: "Premye rezilta a pa toujou pi kòrèk la — pafwa se sèlman pi popilè oswa pi byen anrejistre pou motè rechèch la.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I found information online that seems important but I'm not sure if it's trustworthy. What should I check?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou jwenn yon enfòmasyon enpòtan sou entènèt epi ou vle verifye si li fyab.",
          objective: "Evalye yon paj web lè ou aplike sis kesyon fyabilite yo, epi konpare ak yon dezyèm sous.",
          requiredSteps: [
            "Chwazi yon paj web ak yon enfòmasyon espesifik",
            "Aplike kesyon fyabilite yo (otè, dat, prèv, objektif)",
            "Konpare ak yon dezyèm sous",
          ],
          successCriteria: ["Ou eksplike poukisa sous la fyab oswa pa fyab"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki bagay sa yo ou dwe verifye pou jije si yon sous enfòmasyon fyab? (Chwazi tout ki aplike.)",
            options: [
              "Ki moun oswa òganizasyon ki ekri l",
              "Koulè background sit la",
              "Dat piblikasyon an",
              "Si lòt sous konfime menm enfòmasyon an",
            ],
            correctIndexes: [0, 2, 3],
            explanation: "Otè, dat, ak korobore ak lòt sous se twa faktè kle — koulè sit la pa gen rapò ak fyabilite.",
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
    id: "m7-l6",
    slug: "favori-istorik-ak-li-pita",
    moduleId: "m7",
    order: 6,
    titleHt: "Favori, Istorik, ak Li Pita",
    titleEn: "Bookmarks, History, and Reading Later",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Sovgade yon paj kòm favori",
      "Itilize istorik pou jwenn yon paj ou te vizite",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka sovgade yon paj itil kòm favori, epi itilize istorik pou jwenn yon paj ou te vizite anvan.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **favori (bookmark)** kenbe yon lyen dirèk a yon paj ou vle jwenn fasil ankò, san bezwen chèche l chak fwa. Ou ka **òganize** favori yo lejèman nan dosye si ou gen anpil. **Istorik (history)** la se yon lis otomatik tout paj ou te vizite — li itil pou **rekipere** yon paj ou bliye bookmark men ou sonje ou te vizite l. Fè atansyon a **vi prive istorik la**: nenpòt moun ki itilize menm òdinatè a ka wè istorik ou si ou pa efase l oswa itilize navigasyon prive.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Favori (Bookmark)",
            definition: "Yon lyen sovgade pou jwenn yon paj rapid san chèche l ankò.",
            example: "Mete yon sit ou konsilte chak semèn nan favori ou.",
          },
          {
            term: "Istorik (History)",
            definition: "Lis otomatik tout paj ou te vizite nan navigatè a.",
            example: "Gade istorik ou pou jwenn yon paj ou te vizite jodi a men ou pa bookmark.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Vizite yon sit ou konsilte souvan epi mete l nan favori ou. Apre, gade istorik ou pou jwenn yon paj ou te vizite pi bonè jodi a.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Sispann eseye jwenn yon paj lè ou pa bookmark li epi ou bliye adrès la.",
          right: "Gade istorik navigatè a — li anjeneral kenbe paj ou vizite pandan plizyè jou oswa semèn.",
          why: "Anpil moun bliye istorik la ka jwenn yon paj yo panse yo 'pèdi' pou tout tan.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I visited a useful page yesterday but forgot to bookmark it and can't remember the address. How can I find it again?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle sistematize fason ou sovgade ak jwenn paj itil.",
          objective: "Bookmark yon paj itil, epi itilize istorik pou jwenn yon lòt paj ou te vizite pi bonè.",
          requiredSteps: [
            "Bookmark yon paj ou konsidere itil",
            "Louvri istorik navigatè a",
            "Jwenn yon paj ou te vizite pi bonè nan istorik la",
          ],
          successCriteria: ["Favori a sovgade avèk siksè", "Ou jwenn paj la nan istorik san konfizyon"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ou vizite yon paj itil jodi a men ou pa bookmark li, epi ou bliye adrès la. Kote ou ta chèche l dabò?",
            options: ["Nan favori ou", "Nan istorik navigatè a", "Nan Recycle Bin/Trash", "Nan Paramèt"],
            correctIndex: 1,
            explanation: "Istorik la kenbe yon lis otomatik tout paj ou vizite, menm si ou pa bookmark yo.",
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
    id: "m7-l7",
    slug: "telechajman-nan-navigate-a",
    moduleId: "m7",
    order: 7,
    titleHt: "Telechajman nan Navigatè a",
    titleEn: "Downloads in the Browser",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Itilize jerans telechajman navigatè a",
      "Rekonèt fo bouton telechajman",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka telechaje yon fichye san danje soti nan navigatè a, epi rekonèt fo bouton telechajman.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Chak navigatè gen yon **jerans telechajman (download manager)** ki montre tout fichye ou telechaje ak pwogrè yo. Fè atansyon a **tip fichye** ou telechaje — evite fichye .exe/.dmg soti nan sit ou pa fè konfyans. Anpil sit gen **fo bouton telechajman** — plizyè bouton 'Download' klere ki se piblisite, pandan vrè lyen an pi piti oswa pi ba. Anvan ou louvri yon fichye ou telechaje, panse a si ou dwe **verifye** l anvan ou louvri l.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Jerans Telechajman (Download Manager)",
            definition: "Zouti nan navigatè a ki montre tout fichye ou telechaje ak pwogrè yo.",
            example: "Louvri jerans telechajman an pou jwenn yon fichye ou fèk telechaje.",
          },
          {
            term: "Fo Bouton Telechajman (Fake Download Button)",
            definition: "Yon bouton 'Download' ki se piblisite, ki pa vrè lyen telechajman an.",
            example: "Sou kèk sit, gen plizyè gwo bouton 'Download' — sèlman youn se vrè a.",
          },
        ],
      },
      {
        id: "b4",
        type: "safety",
        reminders: [
          "Chwazi ak atansyon lè gen plizyè bouton 'Download' sou yon sit",
          "Pa louvri fichye .exe oswa .dmg soti nan yon sous ou pa fè konfyans",
          "Verifye ki fichye ou telechaje anvan ou louvri l",
        ],
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! A website has three different 'Download' buttons and I'm not sure which one is real. How can I tell?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou bezwen telechaje yon fichye san danje soti nan navigatè a.",
          objective: "Telechaje yon fichye soti sou yon sit ou fè konfyans, epi jwenn li nan jerans telechajman an.",
          requiredSteps: [
            "Telechaje yon fichye soti sou yon sit ou fè konfyans",
            "Louvri jerans telechajman navigatè a",
            "Jwenn fichye a nan dosye Downloads ou",
          ],
          successCriteria: ["Fichye a telechaje avèk siksè", "Ou jwenn li nan jerans telechajman an"],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Yon sit montre twa gwo bouton 'Download' klere kolore diferan. Ki sa ou dwe fè?",
            options: [
              "Klike premye a rapid",
              "Gade byen pou jwenn vrè lyen telechajman an, souvan pi piti oswa mwens klere",
              "Klike tout twa youn apre lòt",
              "Fèmen navigatè a san telechaje anyen",
            ],
            correctIndex: 1,
            explanation: "Fo bouton telechajman souvan pi gwo ak pi klere pase vrè lyen an — verifye byen anvan ou klike.",
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
    id: "m7-l8",
    slug: "cookies-cache-ak-navigasyon-prive",
    moduleId: "m7",
    order: 8,
    titleHt: "Cookies, Cache, ak Navigasyon Prive",
    titleEn: "Cookies, Cache, and Private Browsing",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Konprann ki sa cookies ak cache ye ak yon fason senp",
      "Konprann sa navigasyon prive FÈ ak sa li PA fè",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike ki sa cookies ak cache ye ak yon fason senp, epi konprann limit reyèl navigasyon prive.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Cookies** se ti moso enfòmasyon yon sit sovgade sou navigatè ou pou l sonje w (tankou rete konekte, oswa sonje panyen acha ou). **Cache** se kopi tanporè imaj ak paj sit yo sovgade pou fè sit yo louvri pi vit pwochen fwa. **Navigasyon prive (private browsing)** anpeche navigatè a sonje istorik ak cookies APRE ou fèmen fennèt la — MEN li **PA** kache aktivite w bay founisè entènèt ou, patwon ou (sou yon rezo travay), oswa sit ou vizite yo. Efase cache ka ede si yon sit chaje mal, men **pa efase cookies san rezon** — sa ka dekonekte w nan sit ou konekte souvan.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Cookies",
            definition: "Ti moso enfòmasyon yon sit sovgade pou sonje w, tankou rete konekte.",
            example: "Cookies fè yon sit sonje panyen acha ou apre ou fèmen l epi retounen.",
          },
          {
            term: "Navigasyon Prive (Private Browsing)",
            definition: "Yon mòd ki pa sonje istorik/cookies apre ou fèmen fennèt la, men ki pa kache aktivite w bay founisè entènèt oswa sit yo.",
            example: "Itilize navigasyon prive sou yon òdinatè pataje pou pa kite istorik ou.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Louvri yon fennèt navigasyon prive nan navigatè ou. Vizite yon sit, epi fèmen fennèt la — remake li pa parèt nan istorik regilye a.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panse navigasyon prive fè w 'envizib' konplètman sou entènèt.",
          right: "Konprann navigasyon prive sèlman anpeche NAVIGATÈ A sonje istorik lokal — founisè entènèt ak sit yo ka toujou wè aktivite w.",
          why: "Panse ou envizib ka mennen w pran move desizyon sou sa ou fè an lign, sitou sou yon rezo travay oswa lekòl.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Does private/incognito browsing actually hide what I do online from my internet provider or workplace?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle konprann limit reyèl navigasyon prive ak wòl cookies/cache.",
          objective: "Louvri yon fennèt navigasyon prive, vizite yon sit, epi eksplike sa mòd sa a fè ak sa li pa fè.",
          requiredSteps: [
            "Louvri yon fennèt navigasyon prive",
            "Vizite yon sit epi fèmen fennèt la",
            "Eksplike sa navigasyon prive FÈ ak sa li PA fè",
          ],
          successCriteria: ["Eksplikasyon w lan klè ak kòrèk"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ki afimasyon sa a ki KÒREK sou navigasyon prive?",
            options: [
              "Li kache tout aktivite w bay founisè entènèt ou konplètman",
              "Li sèlman anpeche navigatè a sonje istorik/cookies apre ou fèmen l",
              "Li pwoteje w kont tout kalite malveyan",
              "Li fè entènèt ou pi rapid",
            ],
            correctIndex: 1,
            explanation: "Navigasyon prive jis anpeche navigatè a sonje istorik lokal — li pa kache aktivite bay founisè oswa sit yo.",
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
    id: "m7-l9",
    slug: "kont-konekte-dekonekte-ak-pwofil",
    moduleId: "m7",
    order: 9,
    titleHt: "Kont, Konekte, Dekonekte, ak Pwofil",
    titleEn: "Accounts, Sign-In, Sign-Out, and Profiles",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Distenge yon kont sit web de yon pwofil navigatè",
      "Dekonekte san danje sou yon òdinatè pataje",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka distenge yon kont sit web de yon pwofil navigatè, epi dekonekte san danje sou yon òdinatè pataje.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **kont sit web (website account)** se idantite w SOU yon sit espesifik (tankou yon kont imèl). Yon **pwofil navigatè (browser profile)** se yon espas apa NAN navigatè a limenm ki kenbe favori, istorik, ak modpas sovgade w — itil si plizyè moun pataje menm òdinatè a, chak moun ka gen pwòp pwofil yo. Sou yon **òdinatè pataje**, TOUJOU **dekonekte (sign out)** kont ou lè ou fini, sitou sit sansib tankou imèl oswa labank. Fè atansyon ak **modpas sovgade** nan navigatè a sou yon òdinatè ki pa pou ou.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Pwofil Navigatè (Browser Profile)",
            definition: "Espas apa nan navigatè a ki kenbe favori, istorik, ak modpas pou yon moun espesifik.",
            example: "Kreye yon pwofil apa pou chak moun ki itilize menm òdinatè a lakay ou.",
          },
          {
            term: "Dekonekte (Sign Out)",
            definition: "Fèmen sesyon kont ou sou yon sit, pou lòt moun pa ka aksede l.",
            example: "Dekonekte kont imèl ou anvan ou kite yon òdinatè pataje.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou konekte sou yon sit kounye a, gade kote ou ta jwenn opsyon 'Sign Out' oswa 'Log Out' — souvan nan yon meni ki gen non oswa foto pwofil ou.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Toujou dekonekte kont sansib sou yon òdinatè ki pa pou ou",
          "Pa sove modpas nan navigatè a sou yon òdinatè pataje",
          "Verifye ki pwofil navigatè ou ye anvan ou antre enfòmasyon sansib",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I used a shared computer to check my email. What should I do before I leave to make sure my account stays secure?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou itilize yon òdinatè pataje epi ou bezwen konekte ak dekonekte san danje.",
          objective: "Konekte sou yon kont, itilize l, epi dekonekte kòrèkteman anvan ou fini.",
          requiredSteps: [
            "Konekte sou yon kont sit web",
            "Jwenn opsyon 'Sign Out' nan meni pwofil la",
            "Dekonekte kòrèkteman",
          ],
          successCriteria: ["Kont la dekonekte avèk siksè", "Ou verifye pa gen modpas sove san rezon"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ou fin itilize kont imèl ou sou yon òdinatè lekòl (pataje ak lòt moun). Ki sa ou dwe fè anvan ou kite l?",
            options: [
              "Kite l konekte pou pwochen fwa vin pi rapid",
              "Dekonekte (sign out) kont ou",
              "Chanje modpas ou epi kite l konekte",
              "Fèmen navigatè a san dekonekte",
            ],
            correctIndex: 1,
            explanation: "Sou yon òdinatè pataje, toujou dekonekte kont ou pou lòt moun pa ka aksede l.",
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
    id: "m7-l10",
    slug: "misyon-cheche-verifye-ak-sovgade-enfomasyon",
    moduleId: "m7",
    order: 10,
    titleHt: "Misyon: Chèche, Verifye, ak Sovgade Enfòmasyon",
    titleEn: "Module Mission: Find, Verify, and Save Information",
    estimatedMinutes: 15,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 7 nan yon egzèsis rechèch reyèl",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka chèche yon enfòmasyon pratik, konpare de sous, sovgade paj ki pi fyab la kòm favori, telechaje yon fichye san danje, epi jwenn li.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 7 la. Ou pral konbine tout sa ou aprann — chèche pi byen, evalye fyabilite, favori, ak telechajman — nan yon sèl egzèsis rechèch reyèl.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario: "Ou bezwen jwenn epi verifye yon enfòmasyon pratik pou lavi chak jou ou.",
          objective:
            "Chèche yon enfòmasyon pratik ou bezwen, konpare de sous diferan, ekri poukisa youn pi fyab pase lòt la, mete paj ki pi fyab la nan favori ou, telechaje yon fichye san danje, epi jwenn li.",
          requiredSteps: [
            "Chèche yon enfòmasyon pratik (tankou yon orè, yon adrès, oswa yon pri)",
            "Konpare de sous diferan sou menm sijè a",
            "Ekri poukisa youn nan sous yo pi fyab pase lòt la",
            "Mete paj ki pi fyab la nan favori ou",
            "Telechaje yon fichye san danje epi jwenn li",
          ],
          successCriteria: [
            "Ou konplete tout senk aksyon yo san bezwen èd pou pi fò nan yo",
            "Rezònman fyabilite w lan klè ak byen panse",
          ],
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak tèm ak definisyon kòrèk li.",
            pairs: [
              { term: "Favori", meaning: "Lyen sovgade pou jwenn yon paj rapid" },
              { term: "Istorik", meaning: "Lis otomatik paj ou vizite" },
              { term: "Korobore", meaning: "Konfime yon enfòmasyon ak plizyè sous" },
            ],
            explanation: "Favori, istorik, ak korobore se twa zouti debaz pou fè rechèch san danje.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen santi m gen kontwòl total sou fason mwen fè rechèch sou entènèt kounye a." },
          { statement: "Mwen ta renmen plis pratik anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 8." },
        ],
      },
    ],
  },
  {
    id: "m8-l1",
    slug: "kijan-imel-mache",
    moduleId: "m8",
    order: 1,
    titleHt: "Kijan Imèl Mache",
    titleEn: "How Email Works",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Esplike pati debaz yon imèl (adrès, ekspeditè, destinatè, sijè, kò)",
      "Konprann kijan yon imèl vwayaje jiskaske li rive nan bwat resevwa a",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka idantifye tout pati debaz yon imèl epi eksplike kijan li vwayaje soti nan ekspeditè a rive nan destinatè a.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **adrès imèl** se idantite dijital ou pou voye ak resevwa mesaj (tankou 'non@sèvis.com'). Chak imèl gen yon **ekspeditè (sender)** — moun ki voye l — ak yon **destinatè (recipient)** — moun ki resevwa l. Yon imèl gen yon **sijè (subject)** kout ki rezime l, ak yon **kò (body)** ki se mesaj konplè a. Lè ou voye yon imèl, li pran yon ti moman pou **livre (deliver)**, epi li ateri nan **bwat resevwa (inbox)** destinatè a.",
      },
      {
        id: "b3",
        type: "diagram",
        diagram: {
          diagramId: "email-sender-recipient-delivery-chain",
          caption: "Ekspeditè → Sijè + Kò → Livrezon → Bwat Resevwa Destinatè a",
        },
      },
      {
        id: "b4",
        type: "vocabulary",
        words: [
          {
            term: "Adrès Imèl (Email Address)",
            definition: "Idantite dijital ou pou voye ak resevwa mesaj, tankou 'non@sèvis.com'.",
            example: "Bay moun ki bezwen kontakte w adrès imèl ou, pa modpas ou.",
          },
          {
            term: "Sijè (Subject)",
            definition: "Yon rezime kout ki di sou ki sa imèl la ye anvan ou li kò a.",
            example: "Yon bon sijè tankou 'Rankont Vandredi — Konfimasyon' ede destinatè a konprann rapid.",
          },
        ],
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Louvri kont imèl ou (oswa panse a dènye imèl ou resevwa). Idantifye ekspeditè, sijè, ak kò mesaj la.",
      },
      {
        id: "b6",
        type: "mistake",
        mistake: {
          wrong: "Konfonn adrès imèl ak modpas, oswa panse yon moun bezwen modpas ou pou voye w yon imèl.",
          right: "Konprann sèl bagay yon moun bezwen pou voye w yon imèl se ADRÈS imèl ou — jamè modpas.",
          why: "Yon moun ki mande modpas ou 'pou voye yon imèl' se toujou yon siy eskrokri.",
        },
      },
      {
        id: "b7",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain in simple terms what happens between the moment I click 'Send' on an email and when it arrives in someone's inbox?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b8",
        type: "mission",
        mission: {
          scenario: "Ou vle konprann pati debaz yon imèl anvan ou kòmanse voye yo.",
          objective: "Idantifye ekspeditè, destinatè, sijè, ak kò nan yon imèl ou resevwa deja.",
          requiredSteps: [
            "Louvri yon imèl ou resevwa deja",
            "Idantifye ekspeditè ak destinatè",
            "Idantifye sijè ak kò mesaj la",
          ],
          successCriteria: ["Ou idantifye kòrèkteman tout kat pati yo san èd"],
        },
      },
      {
        id: "b9",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak tèm ak definisyon kòrèk li.",
            pairs: [
              { term: "Ekspeditè (Sender)", meaning: "Moun ki voye imèl la" },
              { term: "Destinatè (Recipient)", meaning: "Moun ki resevwa imèl la" },
              { term: "Sijè (Subject)", meaning: "Rezime kout ki di sou ki sa imèl la ye" },
            ],
            explanation: "Ekspeditè voye, destinatè resevwa, ak sijè a rezime kontni imèl la.",
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
    id: "m8-l2",
    slug: "kreye-oswa-sekirize-yon-kont-imel",
    moduleId: "m8",
    order: 2,
    titleHt: "Kreye oswa Sekirize Yon Kont Imèl",
    titleEn: "Create or Secure an Email Account",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Konprann eleman yon kont imèl solid (modpas, enfòmasyon rekiperasyon)",
      "Konprann préparasyon 2FA ak enpòtans pa pataje enfòmasyon idantifikasyon",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike eleman yon kont imèl solid — non itilizatè, modpas fò, enfòmasyon rekiperasyon, ak 2FA — san ou pa bezwen kreye yon nouvo kont si ou deja gen yon kont solid.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Si ou deja gen yon kont imèl ki solid, ou PA bezwen kreye yon nouvo — leson sa a se pou fè kont ou pi solid. Yon kont solid gen: yon **modpas fò** (long, ak melanj lèt/nimewo/senbòl, pa itilize pou lòt kont), **enfòmasyon rekiperasyon** (yon lòt imèl oswa nimewo telefòn pou rekipere kont ou si ou bliye modpas), ak **2FA (otantifikasyon de faktè)** — yon dezyèm etap verifikasyon (tankou yon kòd sou telefòn) anplis modpas la. **Pa janm pataje idantifyan (credentials) ou** — non itilizatè AK modpas — ak nenpòt moun, menm si yo di yo se sipò teknik.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Enfòmasyon Rekiperasyon (Recovery Information)",
            definition: "Yon lòt imèl oswa nimewo telefòn ki ka ede w rekipere kont ou si ou bliye modpas.",
            example: "Ajoute yon nimewo telefòn kòm enfòmasyon rekiperasyon pou kont imèl ou.",
          },
          {
            term: "2FA (Otantifikasyon De Faktè)",
            definition: "Yon dezyèm etap verifikasyon anplis modpas, tankou yon kòd voye sou telefòn ou.",
            example: "Aktive 2FA sou kont imèl ou pou pwoteje l menm si yon moun jwenn modpas ou.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Verifye si kont imèl ou deja gen enfòmasyon rekiperasyon ajoute. Si ou pa sèten, chèche nan paramèt sekirite kont la.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa janm bay non itilizatè AK modpas ou bay yon moun, menm si yo pretann yo se sipò teknik",
          "Itilize yon modpas diferan pou chak kont enpòtan",
          "Aktive 2FA lè sa disponib pou pwoteksyon anplis",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What makes an email password 'strong', and why is two-factor authentication worth setting up?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle asire kont imèl ou solid san danje.",
          objective: "Verifye ke kont imèl ou gen enfòmasyon rekiperasyon ak yon modpas fò.",
          requiredSteps: [
            "Verifye enfòmasyon rekiperasyon kont ou",
            "Evalye si modpas ou fò (long, melanje, inik)",
          ],
          successCriteria: ["Ou konnen si kont ou gen sa li bezwen pou l solid"],
          hint: "Si kont ou deja solid, pa gen okenn rezon pou chanje anyen — sa a se yon verifikasyon, pa yon obligasyon.",
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Yon moun rele w epi di yo se 'sipò teknik' epi yo bezwen modpas kont imèl ou pou 'ranje yon pwoblèm'. Ki sa ou dwe fè?",
            options: [
              "Bay modpas la paske yo di yo se sipò teknik",
              "Refize bay modpas la — okenn vrè sipò teknik pa bezwen l",
              "Bay yon vèsyon modpas la ki chanje yon ti kras",
              "Mande yo rele ou tounen pita epi bay li lè sa a",
            ],
            correctIndex: 1,
            explanation: "Okenn sèvis lejitim pa janm mande modpas ou dirèkteman — se toujou yon siy eskrokri.",
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
    id: "m8-l3",
    slug: "bwat-resevwa-voye-bouyon-spam-ak-poubel",
    moduleId: "m8",
    order: 3,
    titleHt: "Bwat Resevwa, Voye, Bouyon, Spam, ak Poubèl",
    titleEn: "Inbox, Sent, Drafts, Spam, and Trash",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Konprann rezon dosye debaz yon bwat imèl",
      "Chèche yon imèl espesifik",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka navige ant dosye debaz bwat imèl ou (Bwat Resevwa, Voye, Bouyon, Spam, Poubèl) epi chèche yon imèl espesifik.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Bwat Resevwa (Inbox)** kenbe imèl ou resevwa. **Voye (Sent)** kenbe kopi tout imèl OU te voye. **Bouyon (Drafts)** kenbe imèl ou kòmanse ekri men ou poko voye. **Spam** (oswa Junk) filtre otomatikman imèl ki sanble ensiyifyan oswa danjere — verifye l detanzantan paske pafwa yon bon imèl ateri la pa erè. **Poubèl (Trash)** kenbe imèl ou efase pou yon ti tan anvan yo disparèt pou tout tan. Yon imèl **san li** (unread) souvan parèt an gra (bold) nan lis la.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Bouyon (Draft)",
            definition: "Yon imèl ou kòmanse ekri men ou poko voye — li rete sovgade otomatikman.",
            example: "Si ou fèmen navigatè a pandan ou ap ekri, imèl la souvan rete nan Bouyon.",
          },
          {
            term: "Spam / Junk",
            definition: "Dosye kote imèl ki sanble ensiyifyan oswa danjere ateri otomatikman.",
            example: "Verifye dosye Spam detanzantan pou asire yon bon imèl pa t ateri la pa erè.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Nan kont imèl ou, gade chak dosye (Bwat Resevwa, Voye, Bouyon, Spam, Poubèl) youn apre lòt. Idantifye konbyen mesaj gen nan chak.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Pa janm gade dosye Spam la, pandan yon imèl enpòtan ka ateri la pa erè.",
          right: "Verifye dosye Spam detanzantan, sitou si ou tann yon imèl enpòtan ou pa jwenn nan Bwat Resevwa a.",
          why: "Filtè spam yo pa toujou pafè — yo pafwa mete bon imèl nan move dosye a.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I'm expecting an important email but it's not in my inbox. Where else should I check?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen ka navige nan tout dosye kont imèl ou ak konfyans.",
          objective: "Vizite chak dosye debaz yo epi chèche yon imèl espesifik ak bwat rechèch la.",
          requiredSteps: [
            "Vizite Bwat Resevwa, Voye, Bouyon, Spam, ak Poubèl",
            "Itilize bwat rechèch la pou jwenn yon imèl espesifik",
          ],
          successCriteria: ["Ou navige ant tout dosye yo san konfizyon", "Rechèch la jwenn imèl ou chèche a"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak dosye ak sa li kenbe.",
            pairs: [
              { term: "Bwat Resevwa", meaning: "Imèl ou resevwa" },
              { term: "Voye", meaning: "Kopi imèl ou te voye" },
              { term: "Bouyon", meaning: "Imèl ou kòmanse men poko voye" },
            ],
            explanation: "Chak dosye gen yon wòl espesifik nan òganize imèl ou.",
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
    id: "m8-l4",
    slug: "ekri-ak-voye-yon-imel-kle",
    moduleId: "m8",
    order: 4,
    titleHt: "Ekri ak Voye Yon Imèl Klè",
    titleEn: "Compose and Send a Clear Email",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Ekri yon imèl ki gen sijè, salitasyon, objektif, detay, ak klotiraj klè",
      "Korije yon imèl anvan ou voye l",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka ekri yon imèl klè ak pwofesyonèl ki gen tout pati enpòtan yo, epi korije l anvan ou voye l.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon imèl klè gen sis pati: 1) yon **sijè** espesifik (pa 'Bonjou' oswa vid). 2) yon **salitasyon** kout ('Bonjou Mesye Pierre,'). 3) **objektif** la klè nan premye fraz la — poukisa ou ekri. 4) **detay nesesè** yo, pa plis. 5) yon **klotiraj** kout ('Mèsi, [Non ou]'). 6) **korije** l anvan ou voye — li l yon fwa pou verifye fot ak klète. Yon bon imèl fasil pou lòt moun li vit epi konprann sa ou bezwen.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Objektif (Purpose)",
            definition: "Rezon prensipal ki fè ou ekri imèl la — dwe klè nan premye fraz la.",
            example: "'Mwen ekri pou konfime randevou Vandredi a' se yon objektif klè nan premye fraz.",
          },
          {
            term: "Klotiraj (Closing)",
            definition: "Fraz kout ki fini imèl la anvan siyati ou.",
            example: "'Mèsi davans' oswa 'Byen kòdyalman' se de egzanp klotiraj kout.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Ekri yon imèl pratik kout (pa voye l ankò) ki gen sijè, salitasyon, objektif klè, detay nesesè, ak klotiraj. Li l ankò pou korije fot.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Ekri yon imèl ak yon sijè vag tankou 'Kesyon' oswa kite sijè a vid.",
          right: "Ekri yon sijè espesifik ki di egzakteman sou ki sa imèl la ye, tankou 'Kesyon sou orè reyinyon Jedi a'.",
          why: "Yon sijè vag fè destinatè a pa konnen si imèl la ijan, epi fè l pi difisil pou jwenn pita.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you help me check if this email sounds clear and professional? [paste your draft]",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen ekri yon imèl pwofesyonèl pratik.",
          objective: "Ekri yon imèl konplè ak sijè, salitasyon, objektif, detay, ak klotiraj.",
          requiredSteps: [
            "Ekri yon sijè espesifik",
            "Ekri yon salitasyon ak yon objektif klè nan premye fraz la",
            "Ajoute detay nesesè yo epi yon klotiraj",
            "Li ankò epi korije fot anvan ou konsidere l fini",
          ],
          successCriteria: ["Imèl la gen tout sis pati yo", "Yon lòt moun ta konprann objektif la nan premye fraz la"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete pati yon imèl klè nan lòd kòrèk.",
            steps: ["Sijè espesifik", "Salitasyon", "Objektif ak detay", "Klotiraj"],
            correctOrder: [0, 1, 2, 3],
            explanation: "Sijè a parèt anvan menm ou louvri imèl la; kò a swiv ak salitasyon, objektif/detay, epi klotiraj.",
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
    id: "m8-l5",
    slug: "reponn-reponn-tout-moun-ak-transfere",
    moduleId: "m8",
    order: 5,
    titleHt: "Reponn, Reponn Tout Moun, ak Transfere",
    titleEn: "Reply, Reply All, and Forward",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Distenge Reply, Reply All, ak Forward",
      "Evite erè komen 'Reply All'",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka chwazi kòrèkteman ant Reply, Reply All, ak Forward, epi ajoute kontèks lè ou transfere yon imèl.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Reply (Reponn)** voye repons ou SÈLMAN bay moun ki te voye imèl la. **Reply All (Reponn Tout Moun)** voye repons ou bay TOUT moun ki te sou imèl orijinal la — itilize l sèlman lè tout moun sa yo bezwen wè repons ou. **Forward (Transfere)** voye imèl orijinal la bay yon NOUVO moun — ajoute yon ti mo pou eksplike POUKISA ou transfere l, pou moun nan konprann kontèks la.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Reply All (Reponn Tout Moun)",
            definition: "Voye repons bay tout moun ki te resevwa imèl orijinal la, pa sèlman ekspeditè a.",
            example: "Itilize Reply All sèlman lè tout gwoup la vrèman bezwen wè repons ou.",
          },
          {
            term: "Forward (Transfere)",
            definition: "Voye yon imèl ou resevwa bay yon lòt moun.",
            example: "Transfere imèl la bay kòlèg ou ak yon ti mo ki eksplike poukisa.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Gade yon imèl gwoup ou resevwa deja. Panse a: si ou reponn, èske ou ta itilize Reply oswa Reply All, epi poukisa?",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Klike Reply All san reflechi, epi voye yon mesaj pèsonèl bay yon gwo gwoup san rezon.",
          right: "Mande tèt ou si TOUT moun sou lis la bezwen wè repons ou anvan ou klike Reply All.",
          why: "Yon 'erè Reply All' se yon erè komen ki ka mete moun nan sitiyasyon jennan nan travay.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I received a group email and I'm not sure if I should Reply or Reply All. How do I decide?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou resevwa yon imèl ak plizyè moun ladan l, epi yon lòt imèl ou vle transfere bay yon zanmi.",
          objective: "Deside kòrèkteman ant Reply ak Reply All pou premye imèl la, epi transfere dezyèm nan ak yon ti kontèks.",
          requiredSteps: [
            "Deside si yon repons dwe Reply oswa Reply All",
            "Transfere yon imèl bay yon lòt moun ak yon ti mo kontèks",
          ],
          successCriteria: ["Ou eksplike rezònman deside w la", "Imèl transfere a gen yon ti kontèks ajoute"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou resevwa yon imèl gwoup travay ak 20 moun ladan l. Ou vle mande yon kesyon PÈSONÈL sèlman bay moun ki voye a. Ki sa ou dwe fè?",
            options: [
              "Klike Reply All",
              "Klike Reply (sèlman)",
              "Transfere l bay tout moun ankò",
              "Voye yon nouvo imèl separe bay tout 20 moun yo",
            ],
            correctIndex: 1,
            explanation: "Reply voye repons ou sèlman bay ekspeditè a — bon chwa pou yon kesyon pèsonèl.",
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
    id: "m8-l6",
    slug: "fichye-tache",
    moduleId: "m8",
    order: 6,
    titleHt: "Fichye Tache (Attachments)",
    titleEn: "Attachments",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Tache yon fichye kòrèk sou yon imèl",
      "Telechaje yon fichye tache san danje",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka tache bon fichye a sou yon imèl, tann li telechaje anvan ou voye, epi telechaje yon fichye tache san danje.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **fichye tache (attachment)** se yon dokiman, foto, oswa lòt fichye ou jwenn ansanm ak yon imèl. Anvan ou voye, **konfime se bon fichye a** ou tache — anpil moun voye move fichye pa erè. Tann fichye a fin **telechaje (upload)** nan imèl la anvan ou voye — yon ba pwogrè montre sa. Fè atansyon a **gwosè fichye** a — kèk fichye twò gwo pou voye dirèkteman, epi kèk sèvis voye yon **lyen cloud** olye de fichye a limenm nan ka sa a. Lè ou resevwa yon fichye tache, telechaje l **sèlman si ou fè ekspeditè a konfyans**.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Fichye Tache (Attachment)",
            definition: "Yon dokiman oswa lòt fichye ou jwenn ansanm ak yon imèl.",
            example: "Verifye ou tache bon fichye a anvan ou klike 'Send'.",
          },
          {
            term: "Lyen Cloud (Cloud Link)",
            definition: "Yon lyen ki mennen w telechaje yon fichye twò gwo pou tache dirèkteman.",
            example: "Si yon fichye twò gwo, kèk sèvis imèl voye yon lyen cloud olye de fichye a limenm.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Kòmanse yon imèl pratik (pa voye l) epi tache yon fichye. Verifye non fichye a byen anvan ou imajine voye l.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa telechaje yon fichye tache ki soti nan yon moun ou pa rekonèt",
          "Verifye ekstansyon fichye a (.pdf, .jpg) fè sans anvan ou louvri l",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I want to attach a large video file to an email but it seems too big. What are my options?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen voye yon imèl ak yon fichye tache, epi telechaje yon fichye ou resevwa.",
          objective: "Tache yon fichye sou yon imèl pratik, epi telechaje yon fichye tache soti nan yon imèl ou fè konfyans.",
          requiredSteps: [
            "Tache yon fichye sou yon imèl pratik",
            "Konfime se bon fichye a anvan ou 'voye' l",
            "Telechaje yon fichye tache ou resevwa soti nan yon sous ou fè konfyans",
          ],
          successCriteria: ["Fichye a tache kòrèkteman", "Fichye telechaje a nan dosye Downloads ou"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ou resevwa yon imèl ak yon fichye tache ki soti nan yon moun ou pa rekonèt ditou. Ki sa ou dwe fè?",
            options: [
              "Telechaje l imedyatman pou wè sa li ye",
              "Pa telechaje l — sispèk imèl ki soti nan moun ou pa rekonèt",
              "Transfere l bay tout kontak ou yo",
              "Reponn epi mande plis detay sou fichye a",
            ],
            correctIndex: 1,
            explanation: "Fichye tache ki soti nan yon ekspeditè enkoni se yon gwo risk sekirite — pa telechaje l.",
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
    id: "m8-l7",
    slug: "oganize-ak-jwenn-imel",
    moduleId: "m8",
    order: 7,
    titleHt: "Òganize ak Jwenn Imèl",
    titleEn: "Organize and Find Email",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Chèche, achive, ak make imèl enpòtan",
      "Dezabòne nan maketing lejitim",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka chèche yon imèl espesifik, achive oswa make imèl enpòtan, epi dezabòne nan maketing ou pa vle ankò.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Pou jwenn yon imèl rapid, itilize **rechèch** la (tape non ekspeditè a oswa yon mo nan sijè a). **Etikèt/dosye (labels/folders)** ede w gwoupe imèl ki gen rapò. **Achive (archive)** wete yon imèl nan Bwat Resevwa a san efase l — li rete disponib pa rechèch. Yon **zetwal/drapo (star/flag)** make yon imèl enpòtan pou jwenn li fasil pita. Pou maketing **lejitim** (yon biznis ou konnen ki voye twòp imèl), **dezabòne (unsubscribe)** olye de make l Spam — gen souvan yon lyen anba imèl la.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Achive (Archive)",
            definition: "Wete yon imèl nan Bwat Resevwa a san efase l — li rete jwenn pa rechèch.",
            example: "Achive imèl ou fin trete pou kenbe Bwat Resevwa a pwòp.",
          },
          {
            term: "Dezabòne (Unsubscribe)",
            definition: "Sispann resevwa imèl maketing lejitim atravè yon lyen nan imèl la.",
            example: "Klike lyen 'Unsubscribe' anba yon imèl maketing ou pa vle resevwa ankò.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Nan kont imèl ou, chèche yon imèl espesifik ak bwat rechèch la. Si ou jwenn yon imèl maketing ou pa vle ankò, chèche lyen 'Unsubscribe' anba l.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Make imèl maketing lejitim kòm Spam olye dezabòne.",
          right: "Dezabòne nan maketing lejitim atravè lyen ofisyèl la, epi kenbe 'Spam' pou vrè eskrokri sèlman.",
          why: "Make yon biznis lejitim kòm Spam pa toujou sispann imèl yo, epi sa ka afekte filtè spam ou pou lòt imèl.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My inbox has hundreds of marketing emails I don't want anymore. What's the safest way to stop receiving them?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle netwaye ak òganize bwat imèl ou.",
          objective: "Chèche yon imèl espesifik, achive oswa make yon lòt kòm enpòtan, epi dezabòne nan yon maketing lejitim si ou jwenn youn.",
          requiredSteps: [
            "Chèche yon imèl espesifik ak bwat rechèch la",
            "Achive oswa make yon imèl kòm enpòtan",
            "Dezabòne nan yon maketing lejitim si ou jwenn youn",
          ],
          successCriteria: ["Bwat imèl ou pi òganize apre egzèsis la"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou resevwa twòp imèl maketing chak semèn soti nan yon magazen lejitim ou konn achte. Ki sa ki pi bon aksyon?",
            options: [
              "Make l kòm Spam",
              "Klike lyen 'Unsubscribe' anba imèl la",
              "Efase kont imèl ou epi kreye yon lòt",
              "Reponn imèl la mande yo sispann",
            ],
            correctIndex: 1,
            explanation: "Dezabòne se fason kòrèk pou sispann maketing lejitim — sa respekte prefrans ou san afekte filtè spam ou.",
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
    id: "m8-l8",
    slug: "eskrokri-imel-ak-fichye-tache-danjere",
    moduleId: "m8",
    order: 8,
    titleHt: "Eskrokri Imèl ak Fichye Tache Danjere",
    titleEn: "Email Scams and Dangerous Attachments",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Rekonèt siy komen yon imèl eskrokri",
      "Verifye yon mesaj sispèk atravè yon lòt kanal anvan ou aji",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rekonèt siy komen yon imèl eskrokri epi verifye yon mesaj sispèk atravè yon lòt kanal anvan ou aji sou li.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Siy komen yon imèl eskrokri: **ijans fòse** ('aji KOUNYE A oswa kont ou fèmen'); **adrès ekspeditè ki pa matche** non moun/konpayi a di yo ye a; yon **fakti ou pa t tann**; yon mesaj ki mande **reset modpas** ou pa t mande; yon mesaj ki mande **kòd verifikasyon** ou; ak **fichye tache danjere** (.exe, .zip enkoni). **Règ kle a**: si yon imèl mande ijans oswa enfòmasyon sansib, **verifye atravè yon LÒT kanal** — rele biznis la dirèkteman ak yon nimewo ou konnen (pa nimewo ki nan imèl la), oswa vizite sit ofisyèl la dirèkteman san klike lyen nan imèl la.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Ijans Fòse (Forced Urgency)",
            definition: "Yon tektik eskrokri ki mande aksyon imedyat pou pa kite ou reflechi.",
            example: "'Kont ou pral fèmen nan 1 èdtan si ou pa aji kounye a' se yon siy klasik ijans fòse.",
          },
          {
            term: "Verifye Atravè Yon Lòt Kanal",
            definition: "Konfime yon mesaj sispèk lè ou kontakte moun/biznis la yon lòt fason, pa repons dirèk.",
            example: "Si yon 'labank' voye w yon imèl sispèk, rele labank la ak nimewo ki sou kat ou, pa nimewo nan imèl la.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Gade dosye Spam ou (san klike anyen ladan l). Idantifye si gen siy komen eskrokri: ijans, adrès ki pa matche, oswa demann enfòmasyon sansib.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa janm klike yon lyen nan yon imèl ki mande modpas oswa kòd verifikasyon",
          "Verifye adrès ekspeditè a byen — li ka sanble ak yon non ou konnen men gen yon ti diferans",
          "Rele oswa vizite sit ofisyèl la dirèkteman pou verifye, pa itilize enfòmasyon kontak ki nan imèl sispèk la",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I got an email saying my account will be closed unless I click a link and enter my password right away. Is this likely a scam?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou resevwa yon imèl sispèk ki mande ijans ak enfòmasyon sansib.",
          objective: "Idantifye siy eskrokri nan yon imèl egzanp, epi eksplike ki jan ou ta verifye l atravè yon lòt kanal.",
          requiredSteps: [
            "Idantifye omwen twa siy eskrokri nan yon imèl sispèk",
            "Eksplike kòman ou ta verifye mesaj la atravè yon lòt kanal",
          ],
          successCriteria: ["Ou idantifye siy yo kòrèkteman", "Plan verifikasyon w lan pa depann sèlman de imèl la"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki siy sa yo se avètisman komen yon imèl eskrokri? (Chwazi tout ki aplike.)",
            options: [
              "Mesaj la mande ou aji 'kounye a' oswa kont ou ap fèmen",
              "Sijè a ekri klèman epi kout",
              "Mesaj la mande kòd verifikasyon ou",
              "Adrès ekspeditè a pa matche non konpayi a di yo ye a",
            ],
            correctIndexes: [0, 2, 3],
            explanation: "Ijans fòse, demann kòd verifikasyon, ak adrès ki pa matche se twa siy klasik eskrokri.",
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
    id: "m8-l9",
    slug: "prepare-pou-yon-apel-videyo",
    moduleId: "m8",
    order: 9,
    titleHt: "Prepare Pou Yon Apèl Videyo",
    titleEn: "Basic Video-Call Readiness",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Prepare pou yon apèl videyo (kamera, mikwofòn, kaskèt)",
      "Konprann fonksyon mit ak konsyans fon/vi prive",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka prepare epi antre nan yon apèl videyo ak konfyans — verifye kamera, mikwofòn, mit, ak vi prive fon an.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Anvan yon apèl videyo, klike **lyen envitasyon** an pou antre nan reyinyon an. Verifye **kamera** ak **mikwofòn** ou mache — souvan gen yon aperçu anvan ou antre. Yon **kaskèt (headphones)** ka ede evite eko. Bouton **mit (mute)** koupe son ou san koupe videyo a — itil lè ou pa pale. Panse a sa ki dèyè w — **fon (background)** — anvan ou antre, pou vi prive. Leson sa a se prensip jeneral yo, pa yon fòmasyon apwofondi sou yon sèvis espesifik tankou Zoom, Meet, oswa Teams — prensip yo menm jan sou tout sèvis.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Mit (Mute)",
            definition: "Bouton ki koupe son mikwofòn ou san koupe videyo a.",
            example: "Mit ou lè ou pa pale pou evite bri fon deranje lòt moun.",
          },
          {
            term: "Fon (Background)",
            definition: "Sa ki vizib dèyè w nan kamera a pandan yon apèl videyo.",
            example: "Verifye fon ou anvan ou antre nan yon apèl pwofesyonèl pou vi prive.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou gen aksè a yon aplikasyon apèl videyo, teste kamera ak mikwofòn ou nan paramèt li anvan yon vrè apèl.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Antre yon apèl videyo san verifye kamera/mikwofòn oswa san reflechi sou fon an.",
          right: "Teste kamera ak mikwofòn nan aperçu a, epi verifye fon an anvan ou antre nan apèl la.",
          why: "Verifye alavans evite pwoblèm teknik oswa jennman pandan yon apèl enpòtan.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I have a video call coming up and I want to make sure I'm ready. What should I check beforehand?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou gen yon apèl videyo ki pral kòmanse byento.",
          objective: "Klike yon lyen envitasyon, verifye kamera ak mikwofòn, epi pratike mit/demit.",
          requiredSteps: [
            "Klike lyen envitasyon an (oswa senmile sa)",
            "Verifye kamera ak mikwofòn nan aperçu a",
            "Pratike mit epi demit",
          ],
          successCriteria: ["Ou antre nan apèl la san pwoblèm teknik", "Ou konprann kòman mit mache"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ki sa bouton 'Mute' fè pandan yon apèl videyo?",
            options: [
              "Li koupe videyo a sèlman",
              "Li koupe son mikwofòn ou san koupe videyo a",
              "Li fèmen apèl la nèt",
              "Li chanje fon dèyè w",
            ],
            correctIndex: 1,
            explanation: "Mute koupe sèlman son mikwofòn ou — lòt moun toujou wè videyo ou.",
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
    id: "m8-l10",
    slug: "misyon-voye-yon-mesaj-konple",
    moduleId: "m8",
    order: 10,
    titleHt: "Misyon: Voye Yon Mesaj Konplè",
    titleEn: "Module Mission: Send a Complete Message",
    estimatedMinutes: 15,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 8 nan yon egzèsis imèl reyèl",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka ekri yon imèl pwofesyonèl konplè, tache bon fichye a, verifye destinatè ak sijè, voye l, epi jwenn li nan dosye Voye a.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 8 la. Ou pral konbine tout sa ou aprann — ekri klè, tache fichye, verifye anvan voye, ak jwenn imèl ou voye a — nan yon sèl egzèsis reyèl.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario: "Ou bezwen voye yon imèl pwofesyonèl konplè ak yon fichye tache.",
          objective:
            "Ekri yon imèl pratik pwofesyonèl, tache bon fichye PDF la, verifye destinatè ak sijè, voye l bay yon adrès pratik san danje oswa bay tèt ou, epi jwenn mesaj la nan dosye Voye a.",
          requiredSteps: [
            "Ekri yon imèl pratik ak sijè, salitasyon, objektif, detay, ak klotiraj",
            "Tache bon fichye PDF la",
            "Verifye destinatè ak sijè yo kòrèk anvan ou voye",
            "Voye imèl la bay yon adrès pratik san danje oswa bay tèt ou",
            "Jwenn mesaj la nan dosye Voye a",
          ],
          successCriteria: [
            "Imèl la voye avèk siksè ak bon fichye tache",
            "Ou jwenn mesaj la nan dosye Voye a san konfizyon",
          ],
          stretchChallenge: "Reponn tèt ou (oswa senmile yon repons) pou pratike Reply.",
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak aksyon ak sa li fè.",
            pairs: [
              { term: "Reply", meaning: "Voye repons sèlman bay ekspeditè a" },
              { term: "Reply All", meaning: "Voye repons bay tout moun sou lis la" },
              { term: "Forward", meaning: "Voye yon imèl bay yon nouvo moun" },
            ],
            explanation: "Reply, Reply All, ak Forward gen chak yon rezon diferan pou itilize yo.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen santi m gen kontwòl total sou fason mwen kominike pa imèl kounye a." },
          { statement: "Mwen ta renmen plis pratik anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 9." },
        ],
      },
    ],
  },
  {
    id: "m9-l1",
    slug: "estokaj-lokal-ak-estokaj-cloud",
    moduleId: "m9",
    order: 1,
    titleHt: "Estokaj Lokal ak Estokaj Cloud",
    titleEn: "Local Storage and Cloud Storage",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Distenge estokaj lokal de estokaj cloud",
      "Konprann estokaj cloud depann de entènèt ak yon kont",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka distenge yon fichye ki sou aparèy ou (lokal) de yon fichye ki sou yon sèvis cloud, epi konprann sa chak mande.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Estokaj lokal (local storage)** se fichye ki sou aparèy fizik ou — disk dur òdinatè a oswa memwa telefòn ou. Ou ka aksede yo san entènèt. **Estokaj cloud (cloud storage)** se fichye ki sovgade sou **sèvè lwen**, aksesib atravè entènèt ak yon **kont**. Estokaj cloud mande **entènèt** pou aksede l (sof si li senkronize yon kopi lokal), epi li depann de yon **kont** ou konekte pou wè fichye yo. Gen plizyè sèvis cloud diferan — leson sa a pa rekòmande yon sèl, paske chak moun ka gen yon prefrans oswa yon sèvis deja bay pa travay/lekòl yo.",
      },
      {
        id: "b3",
        type: "diagram",
        diagram: {
          diagramId: "local-vs-cloud-storage-comparison",
          caption: "Estokaj Lokal (disk dur ou, san entènèt) vs. Estokaj Cloud (sèvè lwen, mande entènèt + kont)",
        },
      },
      {
        id: "b4",
        type: "vocabulary",
        words: [
          {
            term: "Estokaj Lokal (Local Storage)",
            definition: "Fichye ki sou aparèy fizik ou, aksesib san entènèt.",
            example: "Yon foto sovgade dirèkteman sou disk dur òdinatè ou se estokaj lokal.",
          },
          {
            term: "Estokaj Cloud (Cloud Storage)",
            definition: "Fichye sovgade sou yon sèvè lwen, aksesib atravè entènèt ak yon kont.",
            example: "Yon dokiman ou wè sou plizyè aparèy san kopye l manyèlman se souvan sou cloud.",
          },
        ],
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Panse a twa fichye ou itilize souvan. Idantifye si chak youn sou aparèy ou sèlman (lokal), oswa aksesib atravè yon kont sou entènèt (cloud).",
      },
      {
        id: "b6",
        type: "mistake",
        mistake: {
          wrong: "Panse yon fichye ki 'sou cloud' disponib menm si ou pa gen entènèt AK ou pa konekte sou kont ou.",
          right: "Konprann fichye cloud mande ni entènèt ni yon kont konekte pou aksesib, sof si yo gen yon kopi lokal senkronize.",
          why: "Sa evite konfizyon lè yon fichye 'pa parèt' — souvan se yon pwoblèm koneksyon oswa kont, pa fichye a ki pèdi.",
        },
      },
      {
        id: "b7",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What's the actual difference between saving a file on my computer versus saving it 'in the cloud'?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b8",
        type: "mission",
        mission: {
          scenario: "Ou vle konprann kote fichye ou yo rele lakay yo.",
          objective: "Idantifye twa fichye ou itilize epi klase yo kòm lokal oswa cloud.",
          requiredSteps: [
            "Chwazi twa fichye ou itilize souvan",
            "Idantifye si chak youn lokal oswa cloud",
          ],
          successCriteria: ["Ou eksplike rezònman w pou chak klasman"],
        },
      },
      {
        id: "b9",
        type: "knowledge_check",
        questions: [
          {
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
    id: "m9-l2",
    slug: "sync-pa-toujou-yon-backup",
    moduleId: "m9",
    order: 2,
    titleHt: "Sync Pa Toujou Yon Backup",
    titleEn: "Sync Is Not Always Backup",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Konprann diferans ant sync ak backup",
      "Rekonèt risk lè yon fichye efase pwopaje pa sync",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike poukisa sync pa toujou yon backup reyèl, epi konprann règ plizyè kopi a.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Sync (senkronizasyon)** fè chanjman ou fè yon kote **pwopaje otomatikman** sou tout lòt aparèy konekte yo. Sa itil, men gen yon **risk**: si ou EFASE yon fichye sou yon aparèy, sync ka efase l sou TOUT lòt aparèy tou — se poutèt sa sync PA menm bagay ak yon backup. Kèk sèvis gen **istorik vèsyon (version history)** ki ka ede rekipere yon ansyen vèsyon, men se pa tout sèvis ki genyen l. **Règ plizyè kopi a**: yon vrè backup mande OMWEN de kopi nan de KOTE apa — pa sèlman yon sèl kopi ki sync ant plizyè aparèy.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Sync (Senkronizasyon)",
            definition: "Fè chanjman pwopaje otomatikman ant plizyè aparèy konekte.",
            example: "Si ou chanje yon dokiman sou telefòn ou, sync fè menm chanjman an parèt sou òdinatè ou tou.",
          },
          {
            term: "Istorik Vèsyon (Version History)",
            definition: "Yon lis ansyen vèsyon yon fichye ou ka retounen jwenn, si sèvis la ofri l.",
            example: "Itilize istorik vèsyon pou retounen nan yon vèsyon dokiman anvan yon chanjman ou regrèt.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou itilize yon sèvis ki sync fichye, chèche si li gen yon opsyon 'istorik vèsyon' oswa 'ansyen vèsyon' nan paramèt li.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panse fichye ou yo 'an sekirite' paske yo sync ant plizyè aparèy.",
          right: "Konprann yon vrè backup mande plizyè kopi nan plizyè kote apa, pa sèlman sync.",
          why: "Si yon sèl kopi efase oswa domaje (oswa chifre pa yon viris), sync ka pwopaje pwoblèm nan sou TOUT kopi yo.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I thought my files were safe because they sync across my devices. Can you explain why that's not the same as a backup?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle evalye si fichye enpòtan ou yo vrèman pwoteje.",
          objective: "Idantifye si yon fichye enpòtan ou genyen sèlman sync, oswa si li gen yon vrè dezyèm kopi apa.",
          requiredSteps: [
            "Chwazi yon fichye enpòtan ou genyen",
            "Idantifye si li sync sèlman oswa si li gen yon dezyèm kopi vrè",
          ],
          successCriteria: ["Ou eksplike diferans lan ak pwòp mo pa w"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou efase yon fichye pa aksidan sou telefòn ou, epi telefòn nan sync ak òdinatè ou. Ki sa ki gen chans rive?",
            options: [
              "Fichye a rete an sekirite sou òdinatè a",
              "Fichye a ka efase sou òdinatè a tou, paske sync pwopaje chanjman yo",
              "Fichye a otomatikman backup pou tout tan",
              "Sync anpeche fichye efase sou tout aparèy",
            ],
            correctIndex: 1,
            explanation: "Sync pwopaje chanjman (ki gen ladan efasman) sou tout aparèy konekte — se pou sa li pa yon backup.",
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
    id: "m9-l3",
    slug: "telechaje-voye-ak-sync",
    moduleId: "m9",
    order: 3,
    titleHt: "Telechaje, Voye, ak Sync",
    titleEn: "Upload, Download, and Sync",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Revize telechaje ak voye nan kontèks cloud",
      "Konprann konsyans done ak aksè san entènèt",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka voye ak telechaje fichye ak yon sèvis cloud, epi konprann konsyans done ak limit aksè san entènèt.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Menm jan ak nan navigatè a, **voye (upload)** mete yon fichye SOTI sou aparèy ou POU ale sou cloud, ak **telechaje (download)** pran yon fichye SOTI sou cloud POU antre sou aparèy ou. Yon **ba pwogrè** montre konbyen ki fin fèt. San entènèt, ou ka **pèdi aksè** a fichye cloud ki pa gen yon kopi lokal sovgade — sa rele **konsyans san entènèt (offline awareness)**. Voye ak telechaje gwo fichye konsome anpil **done**, sitou sou done selilè.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Konsyans San Entènèt (Offline Awareness)",
            definition: "Konprann ke fichye cloud san kopi lokal pa aksesib san entènèt.",
            example: "Telechaje dokiman enpòtan alavans si ou konnen ou pral san entènèt.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou itilize yon sèvis cloud, voye yon fichye pratik epi tann ba pwogrè a fini. Apre, telechaje l ankò pou konfime li mache.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Konte sou aksè a yon fichye cloud enpòtan san verifye ou gen entènèt anvan yon vwayaj oswa yon randevou.",
          right: "Telechaje yon kopi lokal fichye enpòtan yo si ou konnen ou pral san entènèt.",
          why: "Yon fichye cloud san kopi lokal pa aksesib ditou san koneksyon entènèt.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I need to access an important document tomorrow but I might not have internet access. What should I do to make sure I can open it?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen mete yon fichye sou cloud epi asire w ou ka jwenn li san entènèt pita.",
          objective: "Voye yon fichye sou yon sèvis cloud, epi telechaje yon kopi lokal pou aksè san entènèt.",
          requiredSteps: [
            "Voye yon fichye sou yon sèvis cloud",
            "Telechaje yon kopi lokal sou aparèy ou",
          ],
          successCriteria: ["Fichye a disponib sou cloud AK an lokal"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ou pral yon kote san entènèt demen epi ou bezwen yon dokiman ki sou cloud. Ki sa ou dwe fè jodi a?",
            options: [
              "Anyen — cloud toujou disponib",
              "Telechaje yon kopi lokal dokiman an jodi a",
              "Efase dokiman an sou cloud",
              "Chanje modpas kont cloud ou",
            ],
            correctIndex: 1,
            explanation: "Telechaje yon kopi lokal alavan asire w ou ka aksede dokiman an menm san entènèt.",
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
    id: "m9-l4",
    slug: "pataje-yon-fichye-oswa-dosye-san-danje",
    moduleId: "m9",
    order: 4,
    titleHt: "Pataje Yon Fichye oswa Dosye San Danje",
    titleEn: "Share a File or Folder Safely",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Distenge pèmisyon 'gade' de pèmisyon 'modifye'",
      "Retire aksè yon moun lè sa nesesè",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka pataje yon fichye oswa dosye ak bon nivo pèmisyon, epi retire aksè yon moun lè sa nesesè.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè ou pataje yon fichye sou cloud, ou souvan chwazi ant **gade sèlman (viewer)** — moun nan ka LI men pa chanje anyen — ak **modifye (editor)** — moun nan ka CHANJE kontni an. Fè atansyon a **lyen piblik (public link)**: nenpòt moun ki gen lyen an ka aksede fichye a, menm san ou pa konnen ki moun egzakteman. Ou ka toujou **retire aksè (remove access)** yon moun pita si ou chanje lide. Anvan ou pataje, **konfime se bon fichye a** ou pataje — pa yon lòt fichye pa erè.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Gade Sèlman (Viewer)",
            definition: "Yon nivo pèmisyon ki kite moun nan LI yon fichye san chanje l.",
            example: "Bay yon kolèg aksè 'gade sèlman' pou yo revize yon dokiman san modifye l.",
          },
          {
            term: "Lyen Piblik (Public Link)",
            definition: "Yon lyen ki bay aksè a nenpòt moun ki genyen l, menm san yo pa nan lis kontak ou.",
            example: "Evite kreye yon lyen piblik pou dokiman ki gen enfòmasyon sansib.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou itilize yon sèvis cloud, gade opsyon pataje yon fichye — idantifye kote ou chwazi ant 'gade sèlman' ak 'modifye'.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Evite kreye lyen piblik pou fichye ki gen enfòmasyon sansib",
          "Konfime se bon fichye a anvan ou pataje l",
          "Retire aksè yon moun ki pa bezwen l ankò",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What's the difference between giving someone 'viewer' access versus 'editor' access to a shared file?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen pataje yon dokiman ak yon lòt moun san danje.",
          objective: "Pataje yon fichye pratik ak nivo pèmisyon apwopriye, epi retire aksè apre.",
          requiredSteps: [
            "Konfime se bon fichye a ou vle pataje",
            "Pataje l ak nivo pèmisyon apwopriye (gade sèlman oswa modifye)",
            "Retire aksè a apre ou fin pratike",
          ],
          successCriteria: ["Pèmisyon an apwopriye pou sitiyasyon an", "Aksè a retire avèk siksè apre"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou vle yon kolèg revize yon rapò san chanje kontni li. Ki nivo pèmisyon ou dwe bay?",
            options: ["Gade sèlman (viewer)", "Modifye (editor)", "Lyen piblik san restriksyon", "Pèmisyon total sou tout dosye ou"],
            correctIndex: 0,
            explanation: "'Gade sèlman' kite moun nan li san risk yo modifye kontni orijinal la pa aksidan.",
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
    id: "m9-l5",
    slug: "yon-plan-backup-senp",
    moduleId: "m9",
    order: 5,
    titleHt: "Yon Plan Backup Senp",
    titleEn: "A Simple Backup Plan",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Kreye yon plan backup senp pou fichye enpòtan",
      "Teste yon backup pou konfime li mache",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka kreye yon plan backup senp pou fichye enpòtan ou yo, ak yon orè, epi teste ke backup la vrèman mache.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon plan backup senp gen sis pati: 1) Idantifye **fichye enpòtan** yo (foto fanmi, dokiman ofisyèl, elatriye). 2) Kenbe yo nan **de kote** apa (tankou cloud AK yon disk ekstèn). 3) Etabli yon **orè** (tankou chak mwa). 4) Konsidere yon **disk ekstèn** pou yon kopi ki pa depann de entènèt. 5) Konsidere **cloud** pou yon kopi ki pa depann de yon sèl aparèy fizik. 6) **Teste restore** — louvri kopi backup la detanzantan pou konfime li mache toujou, pa sipoze l mache san verifye. Panse tou a **kouran ak done** — yon backup ki mande elektrisite oswa done pou fèt regilyèman.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Teste Restore (Test Restore)",
            definition: "Louvri yon kopi backup pou konfime li mache toujou, pa sipoze l fonksyone.",
            example: "Chak twa mwa, louvri yon fichye nan backup ou pou konfime li poko domaje.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Fè yon lis kout twa fichye ou konsidere pi enpòtan (foto, dokiman ofisyèl, elatriye). Panse a kote ou ta mete yon dezyèm kopi chak youn.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Kreye yon backup yon sèl fwa epi pa janm verifye l ankò pandan ane.",
          right: "Teste backup ou detanzantan lè ou louvri yon fichye ladan l pou konfime li toujou mache.",
          why: "Yon backup ki domaje san ou pa remake se menm jan ak pa gen backup ditou.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I have some really important files (family photos, official documents). Can you help me think through a simple backup plan?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle pwoteje fichye enpòtan ou kont pèt.",
          objective: "Idantifye twa fichye enpòtan, kreye yon dezyèm kopi nan yon lòt kote, epi teste li louvri.",
          requiredSteps: [
            "Idantifye twa fichye ou konsidere enpòtan",
            "Kreye yon dezyèm kopi nan yon kote apa (cloud oswa disk ekstèn)",
            "Louvri kopi a pou konfime li mache",
          ],
          successCriteria: ["De kopi egziste nan de kote apa", "Kopi backup la louvri san pwoblèm"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kòrèk pou kreye yon plan backup senp.",
            steps: [
              "Idantifye fichye enpòtan yo",
              "Kreye yon dezyèm kopi nan yon lòt kote",
              "Etabli yon orè regilye",
              "Teste ke kopi a louvri toujou",
            ],
            correctOrder: [0, 1, 2, 3],
            explanation: "Idantifye, kopye nan yon lòt kote, planifye yon orè, epi toujou teste — sa a se yon plan backup solid.",
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
    id: "m9-l6",
    slug: "deplase-fichye-ant-telefon-ak-odinate",
    moduleId: "m9",
    order: 6,
    titleHt: "Deplase Fichye Ant Telefòn ak Òdinatè",
    titleEn: "Transfer Files Between Phone and Computer",
    estimatedMinutes: 10,
    mode: "cross_device",
    objectives: [
      "Konnen plizyè fason pou deplase fichye ant telefòn ak òdinatè",
      "Chwazi bon metòd selon gwosè ak sansiblite fichye a",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka chwazi ak itilize yon bon metòd pou deplase fichye ant telefòn ou ak òdinatè ou.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Gen plizyè fason pou deplase fichye ant telefòn ak òdinatè: **kab USB** (konekte telefòn dirèkteman nan òdinatè a), **teknoloji transfè san fil** (tankou AirDrop pou aparèy Apple, oswa Quick Share/Nearby pou kèk aparèy Android — disponiblite depann de MODÈL ou genyen), **cloud** (voye sou yon sèvis cloud epi telechaje sou lòt aparèy la), ak **imèl/WhatsApp** — sa a sèlman pou **ti fichye ki pa sansib**, pa dokiman gwo oswa prive. Chwazi metòd la selon **gwosè** fichye a ak **si li sansib** oswa non.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Kab USB",
            definition: "Yon kòd fizik ki konekte telefòn dirèkteman ak òdinatè pou transfè fichye.",
            example: "Konekte telefòn ou ak yon kab USB pou transfere anpil foto vit san entènèt.",
          },
          {
            term: "Transfè San Fil (Wireless Transfer)",
            definition: "Teknoloji ki deplase fichye san kab, disponiblite depann de modèl aparèy ou.",
            example: "Verifye si aparèy ou sipòte yon teknoloji transfè san fil anvan ou konte sou li.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          android: [
            "Konekte telefòn ak yon kab USB nan òdinatè a pou transfè dirèk",
            "Verifye si aparèy ou ak lòt aparèy la sipòte yon teknoloji transfè san fil (tankou Quick Share) pou fichye pi piti",
          ],
          iphone: [
            "Konekte iPhone ak yon kab pou transfè dirèk nan Photos/Finder",
            "Si lòt aparèy la se yon Mac, verifye si AirDrop disponib pou transfè san fil",
          ],
          recoveryNote:
            "Si transfè san fil pa mache, kab USB toujou yon fason fyab ki mache kèlkeswa modèl ou genyen.",
        },
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa voye dokiman sansib (kat idantite, enfòmasyon labank) atravè imèl oswa WhatsApp san chifreman",
          "Verifye disponiblite yon teknoloji transfè san fil pou modèl SPESIFIK ou anvan ou konte sou li",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I need to move about 200 photos from my phone to my computer. What's the most reliable way to do that?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen deplase kèk fichye ant telefòn ou ak òdinatè ou.",
          objective: "Chwazi yon metòd apwopriye epi deplase omwen yon fichye ant de aparèy yo.",
          requiredSteps: [
            "Chwazi yon metòd (kab USB, transfè san fil, oswa cloud) selon fichye a",
            "Deplase fichye a ant telefòn ak òdinatè",
            "Konfime fichye a rive kòrèkteman",
          ],
          successCriteria: ["Fichye a rive san domaj sou lòt aparèy la"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou bezwen transfere yon dokiman ki gen kopi kat idantite ou soti nan telefòn ou pou ale nan òdinatè ou. Ki metòd ki pi apwopriye?",
            options: [
              "Voye l pa imèl bay tèt ou san atansyon",
              "Itilize yon kab USB oswa yon sèvis cloud ki chifre",
              "Pataje l sou yon rezo sosyal",
              "Voye l nan yon gwoup WhatsApp",
            ],
            correctIndex: 1,
            explanation: "Yon dokiman sansib tankou yon kat idantite merite yon metòd pi sekirize pase imèl/WhatsApp senp.",
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
    id: "m9-l7",
    slug: "oganizasyon-ak-backup-foto",
    moduleId: "m9",
    order: 7,
    titleHt: "Òganizasyon ak Backup Foto",
    titleEn: "Photo Organization and Backup",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Enpòte ak òganize foto nan dosye/albòm",
      "Konprann diferans ant dosye ak albòm, epi konsève orijinal yo",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka enpòte ak òganize foto ou yo, distenge dosye de albòm, epi konsève foto orijinal yo pandan ou backup yo.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Enpòte (import)** foto vle di kopye yo soti nan kamera/telefòn pou antre nan yon aplikasyon oswa dosye estokaj. Ou ka **chwazi** ki foto ou vle enpòte olye tout yo. Yon **albòm** gwoupe foto ki gen rapò SAN deplase orijinal fichye a (yon foto ka nan plizyè albòm), pandan yon **dosye** deplase fichye a nan yon SÈL kote. Fè atansyon ak **doub (duplicates)** — anpil aplikasyon kreye plizyè kopi menm foto a san w pa remake. Toujou **konsève orijinal yo** — pa efase orijinal apre ou fè yon modifikasyon, gade **vi prive** foto sansib yo tou.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Albòm (Album)",
            definition: "Gwoup foto ki gen rapò, san deplase fichye orijinal yo — yon foto ka nan plizyè albòm.",
            example: "Kreye yon albòm 'Vakans 2026' san retire foto yo nan dosye orijinal yo.",
          },
          {
            term: "Doub (Duplicate)",
            definition: "Plizyè kopi menm foto a, souvan kreye san w pa remake pandan enpòtasyon.",
            example: "Verifye pa gen doub apre ou enpòte foto soti nan de aparèy diferan.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou gen foto sou telefòn ou, gade si ou ka kreye yon albòm san deplase foto yo — remake diferans lan ak yon dosye.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Efase foto orijinal apre ou fè yon modifikasyon (tankou rekaste), panse ou pa bezwen l ankò.",
          right: "Konsève foto orijinal la apa, epi sovgade vèsyon modifye a kòm yon nouvo fichye.",
          why: "Si ou pa renmen modifikasyon an pita, ou pèdi foto orijinal la nèt si ou pa t konsève l.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What's the difference between putting my photos in a folder versus an album, and why does it matter?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle òganize foto ou yo epi asire yo backup san danje.",
          objective: "Enpòte foto, kreye yon albòm tematik, epi verifye pa gen doub.",
          requiredSteps: [
            "Enpòte omwen kèk foto nan yon dosye/aplikasyon",
            "Kreye yon albòm tematik san deplase orijinal yo",
            "Verifye pa gen doub evidan",
          ],
          successCriteria: ["Albòm nan kreye san domaje fichye orijinal yo"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
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
    id: "m9-l8",
    slug: "estokaj-plen-sa-sa-vle-di",
    moduleId: "m9",
    order: 8,
    titleHt: "Estokaj Plen: Sa Sa Vle Di",
    titleEn: "Storage Full: What It Means",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Idantifye ki kategori fichye konsome plis espas",
      "Netwaye espas san danje san efase fichye sistèm enkoni",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka idantifye kategori ki konsome plis espas estokaj, epi netwaye espas san danje san efase fichye sistèm enkoni.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè yon mesaj di **estokaj plen**, kèk kategori souvan responsab: dosye **Downloads** ki plen fichye ou pa bezwen ankò, **doub** fichye, **ansyen enstalatè (installers)** ou pa itilize ankò, ak **plasholder cloud** (fichye ki 'la' men ki oblije telechaje anvan ou ka louvri yo, konte kòm espas pafwa). Règ enpòtan: **pa janm efase fichye sistèm ou pa rekonèt** — yo souvan nesesè pou òdinatè a fonksyone, menm si non yo pa fè sans pou ou.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Ansyen Enstalatè (Old Installer)",
            definition: "Yon fichye ki te sèvi pou enstale yon aplikasyon, souvan pa bezwen ankò apre enstalasyon an fini.",
            example: "Efase ansyen enstalatè yo nan Downloads apre aplikasyon an fin enstale.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Gade dosye Downloads ou — idantifye si gen ansyen enstalatè, doub fichye, oswa lòt bagay ou pa bezwen ankò.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa janm efase yon fichye ou pa rekonèt ki sanble fè pati sistèm nan",
          "Verifye ou pa bezwen yon fichye ankò anvan ou efase l pou tout tan",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My computer says storage is full. What's a safe way to figure out what's taking up space without deleting something important?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou resevwa yon mesaj ki di estokaj ou prèske plen.",
          objective: "Idantifye ak netwaye omwen yon kategori fichye ou pa bezwen ankò, san touche fichye sistèm.",
          requiredSteps: [
            "Gade dosye Downloads pou fichye ou pa bezwen ankò",
            "Idantifye ansyen enstalatè oswa doub fichye",
            "Efase sèlman sa ou sèten ou pa bezwen ankò",
          ],
          successCriteria: ["Espas lib ogmante san ou pa touche fichye sistèm enkoni"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou wè yon fichye ak yon non teknik ou pa rekonèt ditou nan yon dosye sistèm pandan ou ap chèche libere espas. Ki sa ou dwe fè?",
            options: [
              "Efase l imedyatman paske li pran espas",
              "Kite l — pa efase fichye sistèm ou pa rekonèt",
              "Deplase l nan Downloads",
              "Chanje non li",
            ],
            correctIndex: 1,
            explanation: "Fichye sistèm ou pa rekonèt yo souvan nesesè pou òdinatè a fonksyone — pa efase yo.",
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
    id: "m9-l9",
    slug: "misyon-pwoteje-fichye-enpotan-yo",
    moduleId: "m9",
    order: 9,
    titleHt: "Misyon: Pwoteje Fichye Enpòtan Yo",
    titleEn: "Module Mission: Protect Important Files",
    estimatedMinutes: 15,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 9 nan yon egzèsis pwoteksyon fichye reyèl",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka chwazi fichye enpòtan, kreye yon dosye klè, fè yon dezyèm kopi nan yon kote apwouve, epi konfime kopi a louvri.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 9 la. Ou pral konbine tout sa ou aprann — lokal vs. cloud, sync vs. backup, pataj san danje, ak plan backup — nan yon sèl egzèsis reyèl pou pwoteje fichye enpòtan.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario: "Ou vle asire fichye ki pi enpòtan pou ou yo pwoteje kont pèt.",
          objective:
            "Chwazi twa fichye pratik enpòtan, kreye yon dosye klè pou yo, fè yon dezyèm kopi nan yon kote apwouve (cloud oswa disk ekstèn), epi verifye kopi a louvri kòrèkteman.",
          requiredSteps: [
            "Chwazi twa fichye pratik ou konsidere enpòtan",
            "Kreye yon dosye klè pou kenbe yo ansanm",
            "Fè yon dezyèm kopi nan yon kote apa (cloud oswa disk ekstèn)",
            "Louvri kopi a pou konfime li mache",
          ],
          successCriteria: [
            "Twa fichye yo byen òganize nan yon dosye klè",
            "Dezyèm kopi a egziste nan yon kote apa epi li louvri san pwoblèm",
          ],
          stretchChallenge: "Etabli yon dat regilye (tankou premye jou chak mwa) pou repete backup sa a.",
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak tèm ak definisyon kòrèk li.",
            pairs: [
              { term: "Sync", meaning: "Pwopaje chanjman ant aparèy — pa yon backup" },
              { term: "Backup", meaning: "Yon dezyèm kopi nan yon kote apa" },
              { term: "Teste Restore", meaning: "Konfime yon kopi backup toujou louvri" },
            ],
            explanation: "Sync ak backup se de bagay diferan — yon vrè backup mande plizyè kopi ki teste regilyèman.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen santi m gen kontwòl total sou fason mwen pwoteje fichye enpòtan mwen kounye a." },
          { statement: "Mwen ta renmen plis pratik anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 10." },
        ],
      },
    ],
  },
  {
    id: "m10-l1",
    slug: "po-ak-konekte",
    moduleId: "m10",
    order: 1,
    titleHt: "Pò ak Konektè",
    titleEn: "Ports and Connectors",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Rekonèt pò komen (USB-A, USB-C, HDMI, odyo, kouran)",
      "Konprann fòm konektè a pa tout espesifikasyon an",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rekonèt pò komen sou yon òdinatè epi konprann fòm yon konektè pa di tout sa ou bezwen konnen sou li.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**USB-A** se pò rektangilè klasik la — ou dwe mete l nan bon sans. **USB-C** se pò ovalè pi nouvo a — ou ka mete l nan de sans, epi li ka fè plizyè travay (done, kouran, videyo) selon aparèy la. **HDMI** konekte òdinatè a ak yon ekran oswa televizyon pou videyo/son. Pò **odyo** (yon ti twou wonn) konekte kaskèt oswa opalè. Pò **kouran** chaje batri a. Kèk òdinatè gen yon **fant SD kat** pou kat memwa kamera. **Enpòtan**: menm fòm konektè a (tankou USB-C) pa vle di menm **vitès** oswa menm **kapasite** — de kab USB-C ka gade menm jan men fè bagay diferan.",
      },
      {
        id: "b3",
        type: "diagram",
        diagram: {
          diagramId: "computer-ports-usb-hdmi-audio-power",
          caption: "USB-A (rektangilè) · USB-C (ovalè, de sans) · HDMI (videyo) · Odyo · Kouran",
        },
      },
      {
        id: "b4",
        type: "vocabulary",
        words: [
          {
            term: "USB-C",
            definition: "Yon pò ovalè modèn ou ka mete nan de sans, ki ka fè plizyè travay selon aparèy la.",
            example: "Anpil laptop ak telefòn resan itilize USB-C pou chaje ak transfè done.",
          },
          {
            term: "HDMI",
            definition: "Pò ki konekte òdinatè a ak yon ekran oswa televizyon pou videyo ak son.",
            example: "Konekte laptop ou nan yon televizyon ak yon kab HDMI pou montre yon prezantasyon.",
          },
        ],
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Gade kote sou òdinatè ou epi idantifye chak pò ou wè — USB-A, USB-C, HDMI, odyo, kouran, oswa fant SD kat.",
      },
      {
        id: "b6",
        type: "mistake",
        mistake: {
          wrong: "Sipoze de kab USB-C fè EGZAKteman menm bagay paske yo gen menm fòm.",
          right: "Konprann fòm konektè a se sèlman yon pati — vitès ak kapasite ka diferan menm ak menm fòm nan.",
          why: "Sa evite frustrasyon lè yon kab 'ki sanble bon' pa fè travay la (tankou chaje rapid oswa transfè videyo).",
        },
      },
      {
        id: "b7",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My laptop has an oval-shaped port and a rectangular one. What are the differences between USB-A and USB-C?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b8",
        type: "mission",
        mission: {
          scenario: "Ou vle ka rekonèt chak pò sou òdinatè ou.",
          objective: "Idantifye tout pò ou wè sou òdinatè ou epi non yo kòrèkteman.",
          requiredSteps: [
            "Gade tout kote sou òdinatè ou",
            "Idantifye ak non chak pò ou wè",
          ],
          successCriteria: ["Ou idantifye omwen twa pò diferan kòrèkteman"],
        },
      },
      {
        id: "b9",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak pò ak sa li sèvi pou li.",
            pairs: [
              { term: "USB-C", meaning: "Pò ovalè de sans pou done/kouran/videyo" },
              { term: "HDMI", meaning: "Konekte ak yon ekran oswa televizyon" },
              { term: "Odyo", meaning: "Konekte kaskèt oswa opalè" },
            ],
            explanation: "Chak pò gen yon rezon prensipal, menm si kèk ka fè plizyè travay.",
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
    id: "m10-l2",
    slug: "kle-usb-ak-disk-eksten-revizyon",
    moduleId: "m10",
    order: 2,
    titleHt: "Kle USB ak Disk Ekstèn — Revizyon",
    titleEn: "USB Drives and External Drives Revisited",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Revize wòl kle USB ak disk ekstèn pou estokaj ak transfè",
      "Aplike sekans ejekte san danje ak sekirite aparèy enkoni",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka itilize yon kle USB oswa disk ekstèn pou estokaj, backup, ak transfè, epi ejekte l san danje.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Ou deja aprann sou kle USB nan Modil 4 — leson sa a revize wòl yo nan kontèks **aparèy fizik**. Yon kle USB oswa yon **disk ekstèn** ka sèvi pou **estokaj** anplis, pou yon **backup** fizik ki pa depann de entènèt, oswa pou **transfere** fichye ant òdinatè. Toujou **ejekte san danje** anvan ou wete l fizikman. Fè atansyon ak yon kle USB **enkoni** ou jwenn — pa konekte l san verifye sitiyasyon an, paske li ka pote malveyan.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Disk Ekstèn (External Drive)",
            definition: "Yon aparèy estokaj pi gwo pase yon kle USB, souvan itilize pou backup.",
            example: "Yon disk ekstèn ka kenbe yon backup konplè tout foto ou yo.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou gen aksè a yon kle USB oswa disk ekstèn, konekte l, kopye yon fichye sou li, epi ejekte l san danje.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa konekte yon kle USB enkoni ou jwenn san verifye sitiyasyon an",
          "Toujou ejekte san danje anvan ou wete yon aparèy USB fizikman",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I found a USB drive that isn't mine. Is it safe to plug it into my computer to see what's on it?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle itilize yon aparèy estokaj fizik pou backup oswa transfè.",
          objective: "Konekte yon kle USB oswa disk ekstèn, kopye yon fichye, epi ejekte l san danje.",
          requiredSteps: [
            "Konekte yon kle USB oswa disk ekstèn",
            "Kopye yon fichye sou li",
            "Ejekte l san danje",
          ],
          successCriteria: ["Fichye a kopye avèk siksè", "Aparèy la ejekte san danje"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
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
    id: "m10-l3",
    slug: "bluetooth",
    moduleId: "m10",
    order: 3,
    titleHt: "Bluetooth",
    titleEn: "Bluetooth",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Pè (pair) yon aparèy Bluetooth ak òdinatè ou",
      "Dekonekte ak retire yon aparèy Bluetooth",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka pè yon aparèy Bluetooth (tankou yon kaskèt oswa souri) ak òdinatè ou, epi dekonekte oswa retire l lè sa nesesè.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Bluetooth** se yon teknoloji san fil pou konekte aparèy ki toupre (kaskèt, souri, klavye) san kab. **Pè (pairing)** se premye etap la — ou mete aparèy la nan mòd **dekouvèt (discovery)**, epi chwazi l nan lis Bluetooth òdinatè a. Yon fwa pè, aparèy la ka **dekonekte** (tanporèman) epi **rekonekte** otomatikman pita, oswa ou ka **retire l (remove)** nèt si ou pa bezwen l ankò. Sou sekirite: pa aksepte yon demann pè Bluetooth ou pa rekonèt.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Pè (Pairing)",
            definition: "Premye koneksyon ant de aparèy Bluetooth, ki fèt yon sèl fwa.",
            example: "Pè yon kaskèt Bluetooth nouvo ak òdinatè ou anvan premye itilizasyon.",
          },
          {
            term: "Dekouvèt (Discovery)",
            definition: "Mòd yon aparèy Bluetooth antre ladan pou lòt aparèy ka jwenn li.",
            example: "Mete kaskèt ou nan mòd dekouvèt (souvan kenbe yon bouton) pou òdinatè a ka jwenn li.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Ale nan Settings > Bluetooth & devices",
            "Aktive Bluetooth epi klike 'Add device'",
            "Chwazi aparèy la nan lis la lè li parèt",
          ],
          mac: [
            "Ale nan System Settings > Bluetooth",
            "Aktive Bluetooth si li pa deja aktive",
            "Chwazi aparèy la nan lis la lè li parèt epi klike 'Connect'",
          ],
          recoveryNote:
            "Si aparèy la pa parèt nan lis la, verifye li nan mòd dekouvèt (souvan kenbe yon bouton pandan plizyè segond).",
        },
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa aksepte yon demann pè Bluetooth ou pa rekonèt",
          "Retire aparèy Bluetooth ou pa itilize ankò nan lis pè ou",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I'm trying to pair my Bluetooth headphones with my computer but they're not showing up in the list. What should I check?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou gen yon aparèy Bluetooth (kaskèt, souri, elatriye) ou vle konekte ak òdinatè ou.",
          objective: "Pè aparèy la ak òdinatè ou, epi konfime li konekte kòrèkteman.",
          requiredSteps: [
            "Mete aparèy la nan mòd dekouvèt",
            "Chwazi l nan lis Bluetooth òdinatè a",
            "Konfime li konekte",
          ],
          successCriteria: ["Aparèy la parèt kòm 'konekte' nan paramèt Bluetooth"],
          hint: "Si ou pa gen yon aparèy Bluetooth disponib, eksplike etap yo ak pwòp mo pa w.",
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kòrèk pou pè yon nouvo aparèy Bluetooth.",
            steps: [
              "Mete aparèy la nan mòd dekouvèt",
              "Aktive Bluetooth sou òdinatè a",
              "Chwazi aparèy la nan lis la",
              "Konfime koneksyon an reyisi",
            ],
            correctOrder: [1, 0, 2, 3],
            explanation: "Aktive Bluetooth òdinatè a, mete aparèy la an dekouvèt, chwazi l, epi konfime.",
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
    id: "m10-l4",
    slug: "kamera-web-mikwofon-ak-opale",
    moduleId: "m10",
    order: 4,
    titleHt: "Kamera Wèb, Mikwofòn, ak Opalè",
    titleEn: "Webcam, Microphone, and Speakers",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Chwazi bon aparèy kamera/mikwofòn/opalè nan paramèt",
      "Teste chak aparèy anvan yon apèl enpòtan",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka chwazi bon aparèy kamera, mikwofòn, ak opalè nan paramèt ou, epi teste yo anvan ou bezwen yo.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Si ou gen plizyè aparèy konekte (tankou yon kaskèt Bluetooth AK opalè entegre), òdinatè a ka **chwazi move a pa default**. Verifye nan paramèt son/videyo pou **chwazi bon aparèy la**. **Mit (mute)** koupe mikwofòn ou san koupe videyo. Panse a **vi prive** kamera a — kèk òdinatè gen yon limyè ki montre lè kamera a aktif. **Teste** kamera ak mikwofòn nan paramèt anvan yon apèl enpòtan, pa pandan l. **Pèmisyon** aplikasyon yo bezwen pou aksede kamera/mikwofòn ka mande konfimasyon ou.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Aparèy Pa Default (Default Device)",
            definition: "Kamera, mikwofòn, oswa opalè ki chwazi otomatikman lè plizyè disponib.",
            example: "Chanje aparèy pa default si yon apèl itilize opalè òdinatè a olye kaskèt ou.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Louvri paramèt son/videyo òdinatè ou. Idantifye ki kamera, mikwofòn, ak opalè ki chwazi kounye a.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Antre yon apèl enpòtan san teste kamera/mikwofòn alavans, epi dekouvri yo pa mache pandan l ap kòmanse.",
          right: "Teste kamera ak mikwofòn nan paramèt kèk minit anvan yon apèl enpòtan.",
          why: "Teste alavan evite yon kòmansman jennan pandan yon reyinyon oswa apèl enpòtan.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I have Bluetooth headphones connected but my video call keeps using my computer's built-in speakers instead. How do I fix that?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle prepare kamera, mikwofòn, ak opalè ou anvan yon apèl enpòtan.",
          objective: "Verifye ak teste chak aparèy nan paramèt anvan yon apèl.",
          requiredSteps: [
            "Louvri paramèt son/videyo",
            "Verifye bon aparèy chwazi pou kamera, mikwofòn, ak opalè",
            "Teste chak youn",
          ],
          successCriteria: ["Tout twa aparèy yo teste ak konfime yo mache"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Pandan yon apèl videyo, lòt moun tande yon eko oswa son etranj. Ki sa ki gen chans se pwoblèm nan?",
            options: [
              "Move mikwofòn oswa opalè chwazi nan paramèt",
              "Entènèt ou pa mache ditou",
              "Kamera a pa aktive",
              "Modpas ou pa fò ase",
            ],
            correctIndex: 0,
            explanation: "Yon move aparèy son chwazi (oswa de aparèy son aktif anmenm tan) souvan lakòz eko.",
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
    id: "m10-l5",
    slug: "enprimant-sa-ki-rive-le-ou-enprime",
    moduleId: "m10",
    order: 5,
    titleHt: "Enprimant: Sa Ki Rive Lè Ou Enprime",
    titleEn: "Printers: What Happens When You Print",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Esplike chèn debaz ant òdinatè ak enprimant",
      "Konprann wòl driver, papye, lank/toner, ak liy datant",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike chèn debaz ki fèt lè ou voye yon dokiman pou enprime, ak wòl chak pati.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè ou klike 'Print', **òdinatè a** voye dokiman an atravè yon **driver** (lojisyèl ki 'tradwi' pou enprimant lan konprann) bay **enprimant lan**. Enprimant lan bezwen **papye** ak **lank oswa toner** pou fè travay la. Si plizyè moun voye enprime anmenm tan, dokiman yo antre nan yon **liy datant (queue)** — premye rive, premye sèvi. Si enprimant lan pa reponn, souvan pwoblèm nan se yonn nan sa yo: pa gen papye, pa gen lank/toner, oswa driver a bezwen mizajou.",
      },
      {
        id: "b3",
        type: "diagram",
        diagram: {
          diagramId: "print-chain-computer-driver-printer-paper",
          caption: "Òdinatè → Driver → Liy Datant → Enprimant (Papye + Lank/Toner) → Dokiman Enprime",
        },
      },
      {
        id: "b4",
        type: "vocabulary",
        words: [
          {
            term: "Driver",
            definition: "Lojisyèl ki tradwi enfòmasyon soti nan òdinatè a pou enprimant lan konprann.",
            example: "Enstale driver ofisyèl enprimant lan pou l fonksyone kòrèkteman.",
          },
          {
            term: "Liy Datant (Queue)",
            definition: "Lis dokiman k ap tann pou enprime, nan lòd yo te voye yo.",
            example: "Si enprimant lan lan, gade liy datant lan pou wè konbyen dokiman ki devan ou.",
          },
        ],
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Si ou gen aksè a yon enprimant, gade nan paramèt òdinatè a pou jwenn liy datant enprimant lan (print queue).",
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I clicked print but nothing came out and the printer seems stuck. What's a calm way to figure out what's wrong?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle konprann chèn debaz enprimant lan anvan ou eseye enprime pou premye fwa.",
          objective: "Eksplike chèn lan (òdinatè, driver, liy datant, enprimant, papye, lank/toner) ak pwòp mo pa w.",
          requiredSteps: [
            "Site chak pati nan chèn lan nan lòd",
            "Eksplike wòl chak pati",
          ],
          successCriteria: ["Eksplikasyon w lan klè ak konplè"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
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
    id: "m10-l6",
    slug: "enprime-yon-dokiman",
    moduleId: "m10",
    order: 6,
    titleHt: "Enprime Yon Dokiman",
    titleEn: "Print a Document",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Enprime yon dokiman ak bon paramèt (paj, kopi, koulè, oryantasyon)",
      "Sovgade yon dokiman kòm PDF olye enprime l fizikman",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka enprime yon dokiman ak bon paramèt, oswa sovgade l kòm PDF olye enprime l sou papye.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Anvan ou enprime, yon **aperçu (preview)** montre kòman dokiman an ap parèt sou papye. Chwazi bon **enprimant** si ou gen plizyè. Chwazi ki **paj** ou vle enprime (tout, oswa yon ranj espesifik), konbyen **kopi**, si se an **koulè** oswa nwa-e-blan, ak **oryantasyon** (dwat oswa kouche). Si ou pa vrèman bezwen yon kopi papye, ou ka chwazi 'Save as PDF' olye — sa evite gaspiye papye ak lank.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Aperçu (Preview)",
            definition: "Yon vèsyon vizyèl ki montre kòman dokiman an ap parèt anvan ou enprime l.",
            example: "Gade aperçu a pou konfime paj yo byen aliyen anvan ou gaspiye papye.",
          },
          {
            term: "Oryantasyon (Orientation)",
            definition: "Si paj la enprime dwat (portrait) oswa kouche (landscape).",
            example: "Chwazi oryantasyon kouche pou yon tablo ki laj.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Peze Ctrl+P pou louvri bwat enprime a",
            "Chwazi enprimant, paj, kopi, koulè, ak oryantasyon",
            "Klike 'Print', oswa chwazi 'Save as PDF' kòm 'enprimant' pou kreye yon PDF olye",
          ],
          mac: [
            "Peze Cmd+P pou louvri bwat enprime a",
            "Chwazi enprimant, paj, kopi, koulè, ak oryantasyon",
            "Klike 'Print', oswa klike bouton 'PDF' nan kwen anba agoch pou 'Save as PDF' olye",
          ],
          recoveryNote:
            "Si enprimant ou pa parèt nan lis la, verifye li limen ak konekte (Wi-Fi oswa kab) sou menm rezo ak òdinatè a.",
        },
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Louvri bwat enprime a (Ctrl+P/Cmd+P) pou yon dokiman. San enprime vrèman, eksplore opsyon paj, kopi, ak oryantasyon.",
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I only need a digital copy of this document, not a paper one. How do I save it as a PDF instead of printing it?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen enprime yon dokiman ak bon paramèt, oswa sovgade l kòm PDF.",
          objective: "Louvri bwat enprime a, chwazi bon paramèt, epi sovgade dokiman an kòm PDF.",
          requiredSteps: [
            "Louvri bwat enprime a (Ctrl+P/Cmd+P)",
            "Chwazi paj, kopi, ak oryantasyon apwopriye",
            "Sovgade kòm PDF olye enprime fizikman",
          ],
          successCriteria: ["Yon fichye PDF kreye ak bon kontni"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ou pa bezwen yon kopi papye, sèlman yon vèsyon dijital pou voye pa imèl. Ki sa ou dwe fè nan bwat enprime a?",
            options: [
              "Enprime l sou papye epi eskane l apre",
              "Chwazi 'Save as PDF' olye enprime fizikman",
              "Anile tout pwosesis la",
              "Chanje oryantasyon an sèlman",
            ],
            correctIndex: 1,
            explanation: "'Save as PDF' kreye yon vèsyon dijital dirèkteman, san bezwen papye.",
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
    id: "m10-l7",
    slug: "eskane-yon-dokiman",
    moduleId: "m10",
    order: 7,
    titleHt: "Eskane Yon Dokiman",
    titleEn: "Scan a Document",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Eskane yon dokiman ak yon eskanè oswa telefòn",
      "Chwazi ant fòma PDF ak foto selon bezwen an",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka eskane yon dokiman papye ak yon eskanè oswa telefòn, epi chwazi ant fòma PDF ak foto selon bezwen an.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **eskanè** (souvan konbine ak enprimant lan kòm yon **aparèy miltifonksyon**) tounen yon dokiman papye an yon fichye dijital. Si ou pa gen yon eskanè, ou ka **eskane ak telefòn ou** — anpil aplikasyon eskanè telefòn kreye yon PDF pwòp ki koupe fon an otomatikman. Chwazi **PDF** pou dokiman ofisyèl (li pwofesyonèl ak fasil pou li), oswa yon **foto** senp lè se sèlman yon souvni rapid. Asire **kalite li kapab** — limyè klè, san lonbraj, tèks li kapab. Fè atansyon a **vi prive** dokiman sansib ou eskane.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Aparèy Miltifonksyon (Multifunction Printer)",
            definition: "Yon aparèy ki konbine enprimant ak eskanè (pafwa fax tou) nan yon sèl machin.",
            example: "Anpil biwo gen yon aparèy miltifonksyon pou enprime AK eskane.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou gen aksè a yon telefòn ak yon aplikasyon eskanè, eskane yon dokiman papye pratik epi verifye kalite l li kapab.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Fè atansyon a dokiman sansib (kat idantite, kontra) ou eskane — kote ou sovgade yo enpòtan",
          "Verifye kalite eskanè a li kapab anvan ou konsidere travay la fini",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I don't have a scanner but I need to send a scanned copy of a document. Can I use my phone instead?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen tounen yon dokiman papye an yon fichye dijital klè.",
          objective: "Eskane yon dokiman pratik (ak eskanè oswa telefòn), chwazi bon fòma, epi verifye kalite li.",
          requiredSteps: [
            "Eskane yon dokiman papye pratik",
            "Chwazi fòma apwopriye (PDF pou dokiman ofisyèl)",
            "Verifye kalite eskanè a li kapab",
          ],
          successCriteria: ["Fichye eskane a klè ak li kapab", "Fòma a apwopriye pou itilizasyon an"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou bezwen voye yon kopi dijital yon kontra ofisyèl pou siyati. Ki fòma ki pi apwopriye?",
            options: [
              "Yon foto pran nan yon limyè fèb",
              "Yon PDF klè ak byen limen",
              "Yon videyo dokiman an",
              "Yon odyo ki dekri kontra a",
            ],
            correctIndex: 1,
            explanation: "Yon PDF klè se fòma ki pi pwofesyonèl ak fasil pou li pou yon dokiman ofisyèl.",
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
    id: "m10-l8",
    slug: "le-yon-apare-konekte-pa-mache",
    moduleId: "m10",
    order: 8,
    titleHt: "Lè Yon Aparèy Konekte Pa Mache",
    titleEn: "When a Connected Device Does Not Work",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Swiv yon sekans kalm pou rezoud pwoblèm yon aparèy konekte",
      "Konnen kilè pou sispann anvan yon entèvansyon danjere",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka swiv yon sekans kalm pou rezoud pwoblèm yon aparèy konekte (souri, kaskèt, enprimant) ki pa mache.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè yon aparèy konekte pa mache, swiv yon sekans kalm: 1) Verifye **kouran** — aparèy la limen/chaje? 2) Verifye **kab** la byen enkli nan de bout yo. 3) Verifye ou nan bon **pò**. 4) Verifye se **bon aparèy** ki chwazi nan paramèt (pa yon lòt). 5) **Dekonekte epi rekonekte** aparèy la. 6) **Rekòmanse (restart)** òdinatè a si sa nesesè. 7) Verifye si aparèy la bezwen yon **mizajou**. 8) **Teste sou yon lòt aparèy** si posib, pou wè si pwoblèm nan aparèy la limenm oswa òdinatè a. **Sispann** anvan yon entèvansyon ou pa sèten — pa demonte oswa fòse anyen ki ka domaje aparèy la.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Teste Sou Yon Lòt Aparèy",
            definition: "Konekte yon akseswa ki pa mache sou yon lòt òdinatè pou izole si pwoblèm nan se akseswa a oswa òdinatè a.",
            example: "Si yon souri pa mache, teste l sou yon lòt òdinatè pou wè si se souri a ki gen pwoblèm.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a yon fwa yon aparèy konekte (souri, kaskèt, enprimant) pa t mache pou ou. Ki nan etap sekans lan ta ka rezoud pwoblèm nan?",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa demonte oswa fòse yon aparèy ou pa sèten sou li",
          "Sispann epi mande èd si yon sekans debaz pa rezoud pwoblèm nan",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My USB mouse suddenly stopped working. What's a calm, step-by-step way to figure out what's wrong?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou senmile yon sitiyasyon kote yon aparèy konekte pa mache.",
          objective: "Site sekans etap ou ta swiv pou idantifye ak rezoud pwoblèm nan, jiskaske ou konnen kilè pou sispann.",
          requiredSteps: [
            "Site premye twa etap ou ta verifye (kouran, kab, pò)",
            "Site yon etap ki ta izole si se aparèy la oswa òdinatè a",
            "Eksplike kilè li ta apwopriye pou sispann ak mande èd",
          ],
          successCriteria: ["Sekans lan swiv yon lòd lojik ak kalm"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kalm pou rezoud yon aparèy konekte ki pa mache.",
            steps: [
              "Verifye kouran ak kab la byen enkli",
              "Verifye se bon aparèy ki chwazi nan paramèt",
              "Dekonekte epi rekonekte aparèy la",
              "Teste aparèy la sou yon lòt òdinatè si posib",
            ],
            correctOrder: [0, 1, 2, 3],
            explanation: "Yon sekans kalm ak sistematik izole pwoblèm nan anvan li rive nan teste sou yon lòt aparèy.",
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
    id: "m10-l9",
    slug: "misyon-konplete-yon-travay-papye-a-dijital",
    moduleId: "m10",
    order: 9,
    titleHt: "Misyon: Konplete Yon Travay Papye-a-Dijital",
    titleEn: "Module Mission: Complete a Paper-to-Digital Task",
    estimatedMinutes: 15,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 10 nan yon egzèsis papye-a-dijital reyèl",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka sovgade oswa enprime yon dokiman kòm PDF, eskane oswa fotografye yon dokiman papye pratik klèman, bay li yon non ki gen sans, epi mete l nan bon dosye.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 10 la. Ou pral konbine tout sa ou aprann — enprime/sovgade PDF, eskane, ak òganize fichye — nan yon sèl egzèsis papye-a-dijital reyèl.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario: "Ou bezwen konvèti yon dokiman ant fòma papye ak dijital.",
          objective:
            "Sovgade oswa enprime yon dokiman ki ba w kòm PDF, eskane oswa fotografye yon dokiman papye pratik klèman, bay rezilta a yon non ki gen sans, epi mete l nan bon dosye.",
          requiredSteps: [
            "Sovgade oswa enprime yon dokiman ki ba w kòm PDF",
            "Eskane oswa fotografye yon dokiman papye pratik klèman",
            "Bay rezilta a yon non ki gen sans",
            "Mete l nan bon dosye",
          ],
          successCriteria: [
            "Fichye PDF la kreye kòrèkteman",
            "Eskanè/foto a klè ak li kapab",
            "Fichye a byen non ak byen klase",
          ],
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak tèm ak definisyon kòrèk li.",
            pairs: [
              { term: "Driver", meaning: "Lojisyèl ki tradwi pou enprimant lan konprann" },
              { term: "Liy Datant", meaning: "Lis dokiman k ap tann enprime" },
              { term: "Pè (Pairing)", meaning: "Premye koneksyon ant de aparèy Bluetooth" },
            ],
            explanation: "Driver, liy datant, ak pè se twa konsèp debaz pou konekte ak itilize aparèy.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen santi m gen kontwòl total sou aparèy ak koneksyon mwen kounye a." },
          { statement: "Mwen ta renmen plis pratik anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 11." },
        ],
      },
    ],
  },
  {
    id: "m11-l1",
    slug: "kisa-ki-bezwen-pwoteje",
    moduleId: "m11",
    order: 1,
    titleHt: "Ki Sa Ki Bezwen Pwoteje?",
    titleEn: "What Needs Protection?",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Idantifye tout kalite bagay dijital ou bezwen pwoteje",
      "Konprann poukisa chak kategori merite atansyon",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka site tout kategori bagay dijital ou bezwen pwoteje, epi konprann poukisa chak youn enpòtan.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sekirite dijital pa sèlman 'modpas' — li gen ladan l plizyè kategori: **idantite** ou (enfòmasyon ki pwouve ki moun ou ye), **kont** ou yo (imèl, rezo sosyal, labank), **fichye** ak **foto** pèsonèl, **kontak** ou yo (ki ka afekte lòt moun si yo pirate), **lajan** ou, ak **repitasyon** ou (sa moun wè piblikman sou ou). Chak kategori bezwen yon kalite pwoteksyon apwopriye — se pou sa modil sa a pral kouvri plizyè zouti ak abitid diferan.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Idantite Dijital (Digital Identity)",
            definition: "Enfòmasyon ak kont ki reprezante ki moun ou ye sou entènèt.",
            example: "Adrès imèl ou ak kont rezo sosyal ou fè pati idantite dijital ou.",
          },
          {
            term: "Repitasyon (Reputation)",
            definition: "Fason lòt moun wè ou piblikman, ki ka afekte pa sa ou poste oswa pataje.",
            example: "Yon foto oswa mesaj ou poste ka afekte repitasyon ou pandan lontan.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Fè yon lis kout: pou chak kategori (idantite, kont, fichye, kontak, lajan, repitasyon), site yon egzanp konkrè nan lavi w.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panse sekirite dijital se sèlman 'gen yon bon modpas'.",
          right: "Konprann sekirite dijital kouvri plizyè kategori — modpas se sèlman youn nan plizyè zouti.",
          why: "Yon apròch ki twò etwat kite lòt kategori (tankou vi prive foto oswa lajan) san pwoteksyon.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! When people talk about 'digital security,' what are all the different things that actually need protecting?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle gen yon vi ansanm klè de sa ou bezwen pwoteje nan lavi dijital ou.",
          objective: "Site yon egzanp pèsonèl pou chak sis kategori pwoteksyon yo.",
          requiredSteps: [
            "Site yon egzanp pou idantite, kont, ak fichye/foto",
            "Site yon egzanp pou kontak, lajan, ak repitasyon",
          ],
          successCriteria: ["Ou bay egzanp konkrè pou tout sis kategori yo"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki bagay sa yo fè pati sa ou bezwen pwoteje nan lavi dijital ou? (Chwazi tout ki aplike.)",
            options: [
              "Kont imèl ak rezo sosyal ou",
              "Koulè fon ekran (wallpaper) ou",
              "Enfòmasyon labank ou",
              "Foto ak kontak pèsonèl ou",
            ],
            correctIndexes: [0, 2, 3],
            explanation: "Kont, enfòmasyon labank, ak foto/kontak se tout bagay ki merite pwoteksyon — koulè fon ekran pa gen enpòtans sekirite.",
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
    id: "m11-l2",
    slug: "modpas-fo-ak-jerans-modpas",
    moduleId: "m11",
    order: 2,
    titleHt: "Modpas Fò ak Jerans Modpas",
    titleEn: "Strong Passwords and Password Managers",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Kreye yon modpas fò ak konsèp fraz-modpas",
      "Konprann konsèp yon jerans modpas",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike sa ki fè yon modpas fò, epi konprann kòman yon jerans modpas ka ede w san w pa bezwen sonje chak modpas pa kè.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon **modpas fò** se **inik** (diferan pou chak kont enpòtan) epi **long**. Yon fason fasil pou kreye youn se yon **fraz-modpas (passphrase)** — plizyè mo san rapò mete ansanm (tankou 'zetwal-kabrit-32-lapli'), ki pi fasil pou sonje pase karaktè aza epi ki toujou solid. Yon **jerans modpas (password manager)** se yon zouti ki kenbe tout modpas ou an sekirite epi ranpli yo otomatikman, pou ou pa bezwen sonje yo tout pa kè — ou sonje SÈLMAN yon sèl modpas prensipal. **Pa janm reyitilize menm modpas la** pou kont enpòtan (imèl, labank). Leson sa a pa mande ou antre yon vrè modpas okenn kote — se sèlman konsèp yo.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Fraz-Modpas (Passphrase)",
            definition: "Yon modpas fèt ak plizyè mo san rapò, pi fasil pou sonje men toujou solid.",
            example: "'flanm-tòti-19-mango' se yon egzanp fraz-modpas — pa itilize egzanp sa a vrèman.",
          },
          {
            term: "Jerans Modpas (Password Manager)",
            definition: "Yon zouti ki kenbe tout modpas ou an sekirite epi ranpli yo otomatikman.",
            example: "Yon jerans modpas ede w itilize yon modpas diferan pou chak kont san bezwen sonje yo tout.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "San antre okenn vrè modpas, panse a yon fraz-modpas ou ta ka itilize (plizyè mo san rapò ak yon nimewo). Pa ekri l okenn kote pèmanan.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Itilize menm modpas la (oswa yon vèsyon ki chanje yon ti kras) pou tout kont ou, ki gen ladan imèl ak labank.",
          right: "Itilize yon modpas inik pou chak kont enpòtan, oswa yon jerans modpas pou jere yo.",
          why: "Si yon sèl kont pirate epi ou reyitilize modpas la, TOUT lòt kont ou an danje tou.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you explain what a passphrase is and why it might be easier to remember than a random password, without me sharing any real password with you?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle konprann si modpas ou yo solid san ou pa antre yo okenn kote.",
          objective: "Evalye (san tape yo) si kont enpòtan ou yo itilize modpas inik, epi eksplike konsèp yon jerans modpas.",
          requiredSteps: [
            "Panse a konbyen kont ou reyitilize menm modpas la",
            "Eksplike ak pwòp mo pa w ki jan yon jerans modpas ta ka ede",
          ],
          successCriteria: ["Ou eksplike rezònman w san bezwen antre okenn vrè modpas"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou itilize menm modpas la pou kont imèl ou AK kont yon jwèt telefòn ou pa itilize souvan. Ki risk sa a genyen?",
            options: [
              "Pa gen okenn risk, se de kont diferan",
              "Si jwèt la pirate, moun nan ka eseye menm modpas la sou imèl ou",
              "Sa fè modpas ou pi fò",
              "Sa akselere koneksyon ou",
            ],
            correctIndex: 1,
            explanation: "Reyitilize modpas fè si YON kont pirate, TOUT lòt kont ak menm modpas la an danje.",
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
    id: "m11-l3",
    slug: "2fa-ak-kod-verifikasyon",
    moduleId: "m11",
    order: 3,
    titleHt: "2FA ak Kòd Verifikasyon",
    titleEn: "Two-Factor Authentication and Verification Codes",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Konprann sa 2FA fè ak kalite metòd li itilize",
      "Konnen règ absoli: pa janm pataje yon kòd verifikasyon",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike sa 2FA fè, rekonèt diferan metòd li itilize, epi konprann règ absoli a: pa janm pataje yon kòd verifikasyon.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**2FA (otantifikasyon de faktè)** ajoute yon **dezyèm etap** verifikasyon anplis modpas la — menm si yon moun jwenn modpas ou, yo pa ka antre san dezyèm etap sa a. Metòd komen: yon **aplikasyon otantifikatè** ki jenere kòd ki chanje chak kèk segond, oswa yon **kòd pa SMS**. Kenbe yon **metòd backup** (tankou kòd rekiperasyon ekri yon kote an sekirite) pou ka pa 'bloke deyò' kont ou si ou pèdi telefòn ou. **Règ ki PA JANM chanje**: **pa janm pataje yon kòd verifikasyon** ak PÈSÒN, menm si yo pretann yo se yon zanmi, yon manm fanmi, oswa yon anplwaye sipò — okenn sèvis lejitim pa janm mande w kòd sa a.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "2FA (Otantifikasyon De Faktè)",
            definition: "Yon dezyèm etap verifikasyon anplis modpas — protèj menm si modpas la pirate.",
            example: "Aktive 2FA sou kont imèl ou pou yon kouch pwoteksyon anplis.",
          },
          {
            term: "Kòd Rekiperasyon (Recovery Code)",
            definition: "Yon kòd backup ekri davans pou antre nan kont ou si ou pèdi aksè a metòd 2FA nòmal ou.",
            example: "Ekri kòd rekiperasyon ou yo sou papye epi kenbe yo an sekirite, pa sou telefòn ou sèlman.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si youn nan kont ou yo ofri 2FA, verifye si li deja aktive. Si li aktive, konfime ou konnen kote kòd rekiperasyon ou yo ye.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa janm pataje yon kòd verifikasyon ak okenn moun, menm si yo di yo se sipò oswa yon zanmi",
          "Kenbe kòd rekiperasyon ou yo an sekirite, apa de telefòn ou sèlman",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Someone called claiming to be from my bank and asked me to read them the verification code I just received. Is that normal?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle konfime kont enpòtan ou yo pwoteje ak 2FA.",
          objective: "Verifye si 2FA disponib ak aktive sou yon kont enpòtan ou genyen, epi lokalize kòd rekiperasyon ou yo.",
          requiredSteps: [
            "Verifye si 2FA disponib sou yon kont enpòtan",
            "Konfime kote kòd rekiperasyon yo ta ye si ou aktive l",
          ],
          successCriteria: ["Ou konnen estati 2FA sou omwen yon kont enpòtan"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Yon moun rele w epi di yo se sipò teknik konpayi telefòn ou an, epi yo mande w li yo kòd verifikasyon ou fèk resevwa pa SMS. Ki sa ou dwe fè?",
            options: [
              "Li yo kòd la paske yo di yo se sipò teknik",
              "Refize — okenn sèvis lejitim pa mande yon kòd verifikasyon konsa",
              "Li yo mwatye kòd la sèlman",
              "Mande yo rele tounen pita pou bay li lè sa a",
            ],
            correctIndex: 1,
            explanation: "Yon kòd verifikasyon se pou OU sèlman — okenn sèvis lejitim pa janm mande l pa telefòn.",
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
    id: "m11-l4",
    slug: "phishing-fo-sipo-ak-ijans",
    moduleId: "m11",
    order: 4,
    titleHt: "Phishing, Fo Sipò, ak Ijans",
    titleEn: "Phishing, Fake Support, and Urgency",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Rekonèt phishing atravè plizyè kanal (imèl, tèks, WhatsApp, apèl, pop-up)",
      "Rekonèt eskrokri 'aksè adistans (remote access)'",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rekonèt tantativ phishing kèlkeswa kanal la (imèl, tèks, WhatsApp, apèl, pop-up), epi verifye endepandamman anvan ou aji.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Phishing** se lè yon moun eseye twonpe w pou ba yo enfòmasyon sansib oswa aksè, souvan an pretandan yo se yon òganizasyon ou fè konfyans. Sa ka rive pa **imèl**, **tèks (SMS)**, **WhatsApp**, yon **apèl telefòn**, oswa yon **pop-up** sou ekran ou. Yon fòm patikilyèman danjere se **eskrokri aksè adistans (remote access)** — yon moun konvenk ou enstale yon lojisyèl ki ba YO kontwòl òdinatè ou adistans, souvan an pretandan yo ap 'ranje' yon pwoblèm ou pa t vrèman genyen. **Prensip kle a rete menm nan tout kanal yo**: **verifye endepandamman** — kontakte òganizasyon an dirèkteman ak yon nimewo/adrès OU konnen, pa sa yo ba ou nan mesaj la.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Phishing",
            definition: "Tantativ pou twonpe w pou ba yo enfòmasyon sansib, an pretandan yo se yon sous ou fè konfyans.",
            example: "Yon imèl ki pretann soti nan labank ou ki mande modpas ou se yon egzanp phishing.",
          },
          {
            term: "Eskrokri Aksè Adistans (Remote Access Scam)",
            definition: "Yon eskrokri kote yo konvenk ou enstale lojisyèl ki ba yo kontwòl òdinatè ou adistans.",
            example: "Pa janm enstale yon lojisyèl kontwòl adistans paske yon moun ki rele w di ou gen yon 'viris'.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a yon mesaj sispèk ou te resevwa deja (imèl, tèks, oswa WhatsApp). Idantifye siy phishing ki te ladan l.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa janm enstale yon lojisyèl kontwòl adistans paske yon moun rele w san w pa t kontakte yo anvan",
          "Verifye nenpòt demann ijan atravè yon kanal endepandan, pa repons dirèk nan mesaj sispèk la",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I got a phone call saying there's a virus on my computer and they need remote access to fix it. I didn't contact them first. Is this a scam?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou resevwa yon mesaj sispèk sou youn nan kanal yo (imèl, tèks, WhatsApp, oswa apèl).",
          objective: "Idantifye siy phishing nan mesaj la, epi eksplike ki jan ou ta verifye endepandamman.",
          requiredSteps: [
            "Idantifye kanal la ak siy phishing yo",
            "Eksplike kòman ou ta verifye san itilize enfòmasyon nan mesaj sispèk la",
          ],
          successCriteria: ["Ou idantifye siy yo kòrèkteman", "Plan verifikasyon w lan endepandan de mesaj la"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki kanal sa yo phishing ka rive ladan? (Chwazi tout ki aplike.)",
            options: ["Imèl", "Tèks (SMS)", "WhatsApp", "Yon apèl telefòn"],
            correctIndexes: [0, 1, 2, 3],
            explanation: "Phishing ka rive nan nenpòt kanal kominikasyon — pa sèlman imèl.",
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
    id: "m11-l5",
    slug: "fo-sit-web-lyen-ak-telechajman",
    moduleId: "m11",
    order: 5,
    titleHt: "Fo Sit Web, Lyen, ak Telechajman",
    titleEn: "Fake Websites, Links, and Downloads",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Enspekte yon domèn pou detekte yon fo sit web",
      "Rekonèt limit HTTPS ak fo mizajou/antivirus",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka enspekte yon domèn pou detekte yon fo sit web, epi rekonèt fo mizajou ak fo antivirus.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Anvan ou fè konfyans a yon sit, gade **domèn** an byen — fo sit yo souvan itilize yon **ortograf** ki sanble ak yon vrè non (tankou 'goggle.com' olye 'google.com'). **HTTPS** (kadna a nan ba adrès la) montre koneksyon an chifre, men li **PA garanti sit la lejitim** — yon sit eskrokri ka gen HTTPS tou. Fè atansyon ak **piblisite (ads)** ki sanble ak rezilta rechèch, yon **fo mesaj mizajou** ('Ou bezwen mete Flash Player ajou KOUNYE A'), oswa yon **fo antivirus** ki di ou gen '47 viris' epi mande w peye pou 'netwaye' yo. Toujou vizite sit ofisyèl yo **dirèkteman** (tape adrès la ou menm) olye klike yon lyen sispèk.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "HTTPS",
            definition: "Yon siy koneksyon chifre (kadna nan ba adrès la) — li pa garanti sit la lejitim.",
            example: "Yon sit eskrokri ka gen HTTPS tou — verifye domèn nan anplis.",
          },
          {
            term: "Fo Antivirus (Fake Antivirus)",
            definition: "Yon mesaj ki fo pretann òdinatè ou enfekte, pou fè w peye oswa telechaje malveyan.",
            example: "Fèmen navigatè a si yon mesaj di ou gen '47 viris' epi mande peman imedya.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Gade ba adrès navigatè ou a kounye a. Idantifye domèn nan epi verifye li ekri kòrèkteman (san fòt ortograf sispèk).",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa fè konfyans a yon sit sèlman paske li gen HTTPS — verifye domèn nan tou",
          "Fèmen navigatè a si yon mesaj 'antivirus' oswa 'mizajou' ki parèt sanble twò ijan oswa alarman",
          "Tape adrès sit ofisyèl yo dirèkteman olye klike lyen sispèk",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! A pop-up appeared saying my computer has viruses and I need to click to clean it now. Is this legitimate?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou wè yon lyen sispèk oswa yon pop-up ki pretann gen yon pwoblèm ijan.",
          objective: "Enspekte domèn yon sit sispèk san klike sou li, epi eksplike ki siy ki fè l sispèk.",
          requiredSteps: [
            "Jwenn yon egzanp domèn (nan yon lyen oswa mesaj) san klike sou li",
            "Idantifye siy ki fè l sispèk oswa fyab",
          ],
          successCriteria: ["Ou eksplike rezònman w klèman"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Èske yon sit ki gen HTTPS (kadna a) toujou garanti li lejitim ak san danje?",
            options: [
              "Wi, HTTPS garanti sit la 100% san danje",
              "Non, HTTPS montre koneksyon chifre men pa garanti sit la lejitim",
              "HTTPS sèlman itil pou sit gouvènman",
              "HTTPS ranplase bezwen verifye domèn nan",
            ],
            correctIndex: 1,
            explanation: "HTTPS chifre koneksyon an, men yon sit eskrokri ka gen HTTPS tou — verifye domèn nan anplis.",
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
    id: "m11-l6",
    slug: "viris-malveyan-ak-mizajou",
    moduleId: "m11",
    order: 6,
    titleHt: "Viris, Malveyan, ak Mizajou",
    titleEn: "Viruses, Malware, and Updates",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Konprann definisyon debaz viris ak malveyan",
      "Konprann wòl mizajou ak risk lojisyèl pirate",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka esplike ak yon fason senp sa yon viris/malveyan ye, epi konprann wòl mizajou ak risk lojisyèl pirate oswa kle USB enkoni.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Malveyan (malware)** se yon tèm jeneral pou lojisyèl ki fèt pou fè domaj — yon **viris** se yon kalite malveyan ki gaye tèt li. Pifò òdinatè gen **sekirite entegre (built-in security)** deja ki bay yon nivo baz pwoteksyon. **Mizajou** enpòtan paske yo souvan fèmen **twou sekirite** eskrokri yo ka itilize. **Lojisyèl pirate (pirated software)** — vèsyon ilegal aplikasyon peye — se yon gwo sous risk, paske yo souvan gen malveyan kache ladan yo. Yon **kle USB enkoni** ou jwenn ka pote malveyan tou. Leson sa a bay konsèp debaz — se pa yon fòmasyon pou retire malveyan avanse; si ou sispèk yon enfeksyon serye, chèche èd pwofesyonèl.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Malveyan (Malware)",
            definition: "Tèm jeneral pou lojisyèl fèt pou fè domaj sou yon aparèy.",
            example: "Yon viris se yon kalite malveyan ki gaye tèt li ant fichye ak aparèy.",
          },
          {
            term: "Sekirite Entegre (Built-In Security)",
            definition: "Pwoteksyon debaz ki deja enkli nan pifò sistèm opere modèn.",
            example: "Kenbe sekirite entegre ou aktive epi mizajou pou pi bon pwoteksyon.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Verifye si sistèm opere òdinatè ou gen mizajou ki tann enstalasyon. Si genyen, planifye lè ou pral fè yo.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Evite lojisyèl pirate — yo souvan gen malveyan kache ladan yo",
          "Pa konekte yon kle USB enkoni san verifye sitiyasyon an",
          "Kenbe sistèm opere ak aplikasyon ou yo ajou",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Why do software updates matter for security, and what's the real risk of using pirated/cracked software?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle asire òdinatè ou pwoteje ak baz konsèp sekirite yo.",
          objective: "Verifye estati mizajou sistèm ou, epi eksplike poukisa lojisyèl pirate se yon risk.",
          requiredSteps: [
            "Verifye si gen mizajou ki tann",
            "Eksplike ak pwòp mo pa w poukisa lojisyèl pirate riske",
          ],
          successCriteria: ["Ou konnen estati mizajou ou", "Eksplikasyon w lan klè"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Yon zanmi ofri ba ou yon vèsyon 'gratis' yon aplikasyon ki nòmalman koute lajan, ki soti nan yon sit pa ofisyèl. Ki risk prensipal la?",
            options: [
              "Pa gen okenn risk si li mache",
              "Lojisyèl pirate souvan gen malveyan kache ladan l",
              "Li ka mache pi vit pase vèsyon ofisyèl la",
              "Li otomatikman legal si zanmi ou ba ou l",
            ],
            correctIndex: 1,
            explanation: "Lojisyèl pirate se yon sous komen malveyan — vèsyon 'gratis' aplikasyon peye yo souvan modifye ak kòd danjere.",
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
    id: "m11-l7",
    slug: "vi-prive-sou-odinate-pataje-ak-piblik",
    moduleId: "m11",
    order: 7,
    titleHt: "Vi Prive sou Òdinatè Pataje ak Piblik",
    titleEn: "Privacy on Shared and Public Computers",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Pwoteje enfòmasyon pèsonèl sou yon òdinatè pataje oswa piblik",
      "Konprann risk Wi-Fi piblik ak vi prive ekran",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka pwoteje enfòmasyon pèsonèl ou lè ou itilize yon òdinatè pataje oswa piblik, epi konprann risk Wi-Fi piblik.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sou yon òdinatè **pataje** oswa **piblik** (bibliyotèk, sant kominotè, kafe entènèt), toujou: **dekonekte (sign out)** chak kont apre ou fini, verifye ou nan bon **pwofil navigatè** si genyen, pa **sove modpas** nan navigatè a, epi efase **telechajman** ou fè yo si yo pa nesesè pou lòt moun. Pa gade **fichye prive** sansib sou yon aparèy piblik si posib. Sou **Wi-Fi piblik**, evite fè aktivite sansib (labank, achte) san yon koneksyon chifre. Fè atansyon ak **vi prive ekran** — moun dèyè w ka wè sa ki sou ekran ou nan yon espas piblik.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Vi Prive Ekran (Screen Privacy)",
            definition: "Atansyon a ki moun ki ka wè sa ki sou ekran ou nan yon espas piblik.",
            example: "Chwazi yon plas kote pèsonn pa ka gade sou zepòl ou lè ou tape enfòmasyon sansib.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a dènye fwa ou te itilize yon òdinatè pataje oswa piblik. Idantifye si ou te dekonekte kont ou yo byen anvan ou kite l.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Toujou dekonekte kont ou yo sou yon òdinatè pataje oswa piblik anvan ou kite l",
          "Pa sove modpas nan navigatè a sou yon aparèy ki pa pou ou",
          "Evite aktivite sansib (labank) sou Wi-Fi piblik san koneksyon chifre",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I need to check my email at a library computer. What should I do before and after to keep my account safe?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou senmile itilize yon òdinatè piblik pou konsilte kont ou.",
          objective: "Konekte, itilize kont ou, epi dekonekte kòrèkteman san kite trase.",
          requiredSteps: [
            "Konekte sou yon kont",
            "Itilize l pou yon ti tan",
            "Dekonekte epi verifye pa gen modpas sove",
          ],
          successCriteria: ["Kont la dekonekte kòrèkteman", "Pa gen enfòmasyon sansib ki rete vizib"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
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
    id: "m11-l8",
    slug: "sekirite-acha-ak-peman-dijital",
    moduleId: "m11",
    order: 8,
    titleHt: "Sekirite Acha ak Peman Dijital",
    titleEn: "Online Shopping and Digital Payment Safety",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Verifye yon machann ak detay yon tranzaksyon anvan ou peye",
      "Konnen règ absoli sou PIN ak OTP, ak sa pou fè ak yon tranzaksyon anatant",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka verifye yon machann ak detay yon tranzaksyon anvan ou peye, epi konnen sa pou fè lè yon tranzaksyon parèt 'anatant' oswa gen yon pwoblèm.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Anvan ou konfime yon acha oswa yon peman an liy, toujou: 1) Konfime se bon **machann (merchant)** lan. 2) Verifye **montan total** ak **mone** (goud, dola, elatriye) kòrèk. 3) Gade si gen **frè** anplis (livrezon, sèvis). 4) Kenbe yon **resi** oswa **ID tranzaksyon** apre chak peman — sa itil anpil si gen yon pwoblèm pita. **Règ ki PA JANM chanje**: **pa janm pataje kòd PIN ou oswa kòd OTP (One-Time Password)** ak PÈSÒN, menm si yo pretann yo se sipò kliyan. Ann Ayiti, moun itilize sèvis lajan mobil tankou **MonCash ak NatCash** pou anpil tranzaksyon — leson sa a bay prensip jeneral sekirite yo, PA etap detaye pou yon aplikasyon espesifik, paske entèfas aplikasyon yo chanje regilyèman. **Enpòtan anpil**: si yon tranzaksyon parèt **'anatant' (pending)**, PA sipoze li echwe — kontakte sèvis la ofisyèlman pou konfime anvan ou eseye ankò, paske eseye yon dezyèm fwa yon peman ki 'anatant' ka lakòz ou peye DE FWA pou menm bagay la. Si gen yon **litij (dispute)**, kontakte sèvis peman an atravè kanal ofisyèl yo, ak resi/ID tranzaksyon ou an.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "ID Tranzaksyon (Transaction ID)",
            definition: "Yon nimewo inik ki idantifye yon peman espesifik — itil pou rezoud pwoblèm pita.",
            example: "Kenbe ID tranzaksyon an nan yon kote sekirize apre chak peman enpòtan.",
          },
          {
            term: "Anatant (Pending)",
            definition: "Yon estati tranzaksyon ki poko fini — PA sipoze sa vle di li echwe.",
            example: "Si yon tranzaksyon anatant, tann oswa kontakte sèvis la ofisyèlman, pa eseye ankò imedyatman.",
          },
        ],
      },
      {
        id: "b4",
        type: "safety",
        reminders: [
          "Pa janm pataje kòd PIN ou oswa yon kòd OTP ak okenn moun, menm sipò kliyan pretandi",
          "Yon tranzaksyon 'anatant' PA vle di li echwe — verifye ofisyèlman anvan ou eseye ankò",
          "Kenbe resi ak ID tranzaksyon pou chak peman enpòtan",
        ],
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Wè yon tranzaksyon 'anatant' epi imedyatman eseye peye ankò, panse premye a echwe.",
          right: "Tann oswa kontakte sèvis peman an ofisyèlman pou konfime estati anvan ou eseye ankò.",
          why: "Si premye tranzaksyon an te reyisi men jis anatant, yon dezyèm tantativ ka fè ou peye de fwa pou menm bagay la.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I made a mobile money payment and it's showing as 'pending' for a while. Should I try sending it again just in case?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou pral fè yon acha pratik an liy epi ou vle asire w ou fè l san danje.",
          objective: "Verifye machann, montan/mone, ak frè anvan yon acha pratik, epi eksplike sa pou fè si yon tranzaksyon rete anatant.",
          requiredSteps: [
            "Verifye idantite machann lan nan yon senaryo acha pratik",
            "Verifye montan total, mone, ak frè anvan konfime",
            "Eksplike sa ou ta fè si tranzaksyon an rete anatant",
          ],
          successCriteria: ["Ou aplike tout etap verifikasyon yo", "Ou eksplike règ 'pa eseye ankò imedyatman' kòrèkteman"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou fèk fè yon peman lajan mobil epi li parèt 'anatant' depi 10 minit. Ki sa ki pi bon aksyon?",
            options: [
              "Eseye voye menm peman an ankò imedyatman",
              "Tann yon ti tan epi kontakte sèvis la ofisyèlman si sa kontinye, pa eseye ankò san verifye",
              "Pataje kòd PIN ou ak yon 'ajan' ki ofri ede w vit",
              "Efase aplikasyon an epi telechaje l ankò",
            ],
            correctIndex: 1,
            explanation: "Yon estati 'anatant' pa vle di echèk — verifye ofisyèlman anvan ou eseye ankò, pou pa peye de fwa.",
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
    id: "m11-l9",
    slug: "sa-pou-fe-si-yon-bagay-mal-rive",
    moduleId: "m11",
    order: 9,
    titleHt: "Sa Pou Fè Si Yon Bagay Mal Rive",
    titleEn: "What to Do If Something Goes Wrong",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Swiv yon sekans kalm apre yon konpwomi sispèk",
      "Konnen kilè pou chèche èd pwofesyonèl",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka swiv yon sekans kalm si ou sispèk yon kont oswa aparèy konpwomèt, jiskaske ou konnen kilè pou chèche èd pwofesyonèl.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Si ou sispèk yon bagay mal rive (yon kont pirate, yon eskrokri ou tonbe ladan), swiv yon sekans kalm: 1) **Sispann** — pa panike, pa kontinye aksyon ki te lakòz pwoblèm nan. 2) **Dekonekte sèlman si sa apwopriye** (pa egzanp, si yon lojisyèl kontwòl adistans aktive). 3) **Chanje modpas** soti nan yon **aparèy ou fè konfyans** (pa aparèy ki ka konpwomèt la). 4) **Kontakte founisè** sèvis la (imèl, rezo sosyal, elatriye) atravè kanal ofisyèl yo. 5) **Anrejistre prèv** (kaptire ekran mesaj sispèk yo, dat, ak lè). 6) Si gen yon zafè lajan, **enfòme labank/sèvis peman an** imedyatman. 7) **Eskane/mete ajou** òdinatè ou si sa apwopriye. 8) **Chèche èd pwofesyonèl** si sitiyasyon an depase sa ou konfòtab jere poukont ou.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Anrejistre Prèv (Record Evidence)",
            definition: "Kaptire ekran oswa nòt sou yon mesaj sispèk, ak dat/lè, anvan ou efase l.",
            example: "Pran yon screenshot yon imèl eskrokri anvan ou efase l oswa siyale l.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a yon sitiyasyon ipotetik kote yon kont ou ta ka konpwomèt. Repase mantalman sekans etap yo, youn apre lòt.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Chanje modpas soti nan yon aparèy ou fè konfyans, pa aparèy ki ka konpwomèt la",
          "Enfòme labank/sèvis peman an imedyatman si gen yon zafè lajan ki enplike",
          "Pa gen wont chèche èd pwofesyonèl si sitiyasyon an depase konpetans ou",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I think I might have accidentally given my password to a fake website. What should I do right now, step by step?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou senmile yon sitiyasyon kote ou sispèk yon kont ou konpwomèt.",
          objective: "Site sekans etap ou ta swiv, nan lòd, si ou sispèk yon konpwomi.",
          requiredSteps: [
            "Site twa premye etap ou ta fè (sispann, dekonekte si apwopriye, chanje modpas)",
            "Eksplike kilè li ta apwopriye pou chèche èd pwofesyonèl",
          ],
          successCriteria: ["Sekans lan swiv yon lòd lojik ak kalm"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kòrèk si ou sispèk yon kont konpwomèt.",
            steps: [
              "Sispann epi rete kalm",
              "Chanje modpas soti nan yon aparèy ou fè konfyans",
              "Kontakte founisè sèvis la atravè kanal ofisyèl",
              "Chèche èd pwofesyonèl si sitiyasyon an depase w",
            ],
            correctOrder: [0, 1, 2, 3],
            explanation: "Yon sekans kalm ak lojik kòmanse ak sispann, epi ale nan chanje modpas, kontakte founisè, epi chèche èd si sa nesesè.",
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
    id: "m11-l10",
    slug: "misyon-rete-eskrokri-a",
    moduleId: "m11",
    order: 10,
    titleHt: "Misyon: Rete Eskrokri a",
    titleEn: "Module Mission: Stop the Scam",
    estimatedMinutes: 15,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 11 nan yon egzèsis rekonesans eskrokri reyèl",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka egzamine mesaj ak paj web fiktiv, idantifye siy avètisman yo, chwazi yon repons san danje, epi eksplike ki enfòmasyon ki PA JANM dwe pataje.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 11 la. Ou pral konbine tout sa ou aprann — phishing, fo sit, malveyan, vi prive, ak sekirite peman — nan yon sèl egzèsis rekonesans eskrokri reyèl.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario: "Ou pral egzamine plizyè mesaj ak paj web fiktiv pou pratike rekonèt eskrokri.",
          objective:
            "Revize omwen twa mesaj/senaryo fiktif, idantifye siy avètisman nan chak youn, chwazi yon repons san danje pou chak, epi ekri yon lis kout enfòmasyon ki PA JANM dwe pataje (modpas, kòd verifikasyon, PIN/OTP).",
          requiredSteps: [
            "Egzamine omwen twa senaryo mesaj/sit fiktif",
            "Idantifye siy avètisman nan chak senaryo",
            "Chwazi yon repons san danje pou chak (pa egzanp: pa klike, verifye endepandamman)",
            "Ekri yon lis kout enfòmasyon ki PA JANM dwe pataje",
          ],
          successCriteria: [
            "Ou idantifye siy avètisman kòrèkteman nan tout senaryo yo",
            "Repons ou yo pa mete ou nan risk",
            "Lis ou a gen omwen modpas, kòd verifikasyon, ak PIN/OTP",
          ],
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki enfòmasyon sa yo ou PA JANM dwe pataje ak okenn moun, menm si yo pretann yo se sipò lejitim? (Chwazi tout ki aplike.)",
            options: ["Modpas ou", "Kòd verifikasyon (2FA/OTP)", "Non premye lekòl ou ale", "Kòd PIN peman ou"],
            correctIndexes: [0, 1, 3],
            explanation: "Modpas, kòd verifikasyon, ak PIN se twa bagay ou PA JANM dwe pataje — okenn sèvis lejitim pa mande yo.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen santi m gen kontwòl total sou sekirite dijital mwen kounye a." },
          { statement: "Mwen ta renmen plis pratik anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 12." },
        ],
      },
    ],
  },
  {
    id: "m12-l1",
    slug: "anvan-ou-achte-kominse-ak-travay-la",
    moduleId: "m12",
    order: 1,
    titleHt: "Anvan Ou Achte Nenpòt Òdinatè: Kòmanse Ak Travay La",
    titleEn: "Before You Buy Any Computer: Start With the Work",
    estimatedMinutes: 12,
    mode: "universal",
    objectives: [
      "Defini travay reyèl yon òdinatè dwe fè anvan ou gade mak oswa pwosesè",
      "Kreye yon Pwofil Bezwen Òdinatè pèsonèl",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka defini travay reyèl yon òdinatè dwe fè pou ou, epi kreye yon Pwofil Bezwen Òdinatè anvan ou gade okenn rekòmandasyon mak oswa pwosesè.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Anvan ou menm panse a yon mak oswa yon pwosesè, defini **travay la**: ki jan ou pral itilize òdinatè a — lekòl, biwo, navige, apèl videyo, biznis, pwogramasyon, konsepsyon, montaj videyo, oswa jwèt? Ki **aplikasyon espesifik** ki DWE mache, epi èske yo mande Windows oswa macOS? Panse tou a: **pòtabilite** (èske ou deplase souvan?), **atant batri**, **prefrans gwosè ekran**, **konfò klavye**, **sipò reparasyon ak pyès lokal**, ak **limit entènèt** kote ou ye a. **Bijè total** la dwe konte PLIS pase pri machin nan sèlman: chajè, sak, souri, estokaj ekstèn, lojisyèl, livrezon, taks, ak posib reparasyon. Panse tou konbyen tan ou espere kenbe machin nan. **Règ ki pa negosyab**: 'Pi bon òdinatè a' se PA machin ki pi chè a — se machin ki fè travay reyèl ou an fyab, nan limit BIJE TOTAL ou a.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Pwofil Bezwen Òdinatè (Computer Needs Profile)",
            definition: "Yon dokiman pèsonèl ki defini travay, bijè, ak preferans ou anvan ou gade machin espesifik.",
            example: "Ekri Pwofil Bezwen Òdinatè ou anvan ou vizite yon magazen oswa gade anons.",
          },
          {
            term: "Bijè Total (Total Budget)",
            definition: "Pri machin nan plis TOUT lòt depans: chajè, sak, akseswa, lojisyèl, livrezon, taks, ak reparasyon posib.",
            example: "Yon machin $400 ak $150 akseswa/frè anplis gen yon bijè total $550, pa $400.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Reponn kesyon sa yo pou tèt ou: ki travay prensipal ou bezwen fè, ki aplikasyon ki dwe mache, ak konbyen tan ou espere kenbe machin nan?",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Kòmanse chèche yon òdinatè ak yon mak oswa yon pwosesè espesifik nan tèt ou anvan ou konnen travay ou.",
          right: "Defini travay ou dwe fè, ak bijè total ou, anvan ou gade okenn machin espesifik.",
          why: "San yon Pwofil Bezwen klè, li fasil pou peye plis pou fonksyon ou pa bezwen, oswa achte yon machin ki pa fè travay ou.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I want to define what I actually need in a computer before looking at brands or prices. Can you help me think through the right questions to ask myself?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou konsidere achte yon òdinatè (pou tèt ou, oswa yon egzanp ipotetik) epi ou vle kòmanse byen.",
          objective: "Kreye yon Pwofil Bezwen Òdinatè konplè anvan ou gade okenn rekòmandasyon.",
          requiredSteps: [
            "Site travay prensipal ak aplikasyon ki dwe mache",
            "Site prefrans pòtabilite, ekran, ak klavye",
            "Kalkile yon bijè total ki gen ladan akseswa ak posib reparasyon",
            "Site konbyen tan ou espere kenbe machin nan",
          ],
          successCriteria: ["Pwofil la konplè ak espesifik, pa jeneral"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Yon zanmi di 'achte machin ki pi chè a, se toujou pi bon an'. Ki repons ki pi kòrèk?",
            options: [
              "Vre, pi chè toujou pi bon",
              "Pa nesesèman — pi bon an se machin ki fè travay reyèl ou an fyab, nan limit bijè total ou",
              "Pi bon an se toujou machin ki gen non mak ki pi popilè a",
              "Pri pa gen okenn enpòtans",
            ],
            correctIndex: 1,
            explanation: "Règ ki pa negosyab: 'pi bon' vle di li fè travay ou, pa ke li se machin ki pi chè a.",
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
    id: "m12-l2",
    slug: "laptop-desktop-all-in-one-chromebook-oswa-mac",
    moduleId: "m12",
    order: 2,
    titleHt: "Laptop, Desktop, All-in-One, Chromebook, oswa Mac?",
    titleEn: "Laptop, Desktop, All-in-One, Chromebook, or Mac?",
    estimatedMinutes: 11,
    mode: "universal",
    objectives: [
      "Konpare fòs ak limit chak kategori òdinatè",
      "Evite konklizyon jeneral 'Mac pi bon' oswa 'Windows pi bon'",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka konpare fòs ak limit yon laptop, desktop, all-in-one, Chromebook, ak Mac, pou chwazi kategori ki fè travay ou san konklizyon jeneral.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Laptop** bay pòtabilite men souvan koute plis pou menm pèfòmans pase yon desktop. **Desktop** bay pi bon valè ak plis posibilite mizajou, men li mande yon plas fiks ak ekran apa. **All-in-one** konbine ekran ak òdinatè nan yon sèl machin — pratik men limite pou reparasyon. **Chromebook** gen fòs pou navige ak travay senp, souvan bon mache, men li **depann anpil de entènèt**, gen **estokaj limite**, ak **kompatibilite lojisyèl limite** (pa tout aplikasyon Windows/Mac mache sou li). **Mac** se yon **fanmi òdinatè**, pa yon kategori apa de laptop/desktop — MacBook Air ak MacBook Pro se de laptop Mac diferan (Pro a pi pwisan, pi lou, pi chè), pandan Mac mini ak iMac se desktop Mac. Pou Windows, ou ka chwazi ant yon laptop oswa yon desktop tou. Panse tou a **repare** — kèk mak ak modèl pi fasil pou jwenn pyès lokalman pase lòt. **Pa gen okenn konklizyon jeneral 'Mac pi bon' oswa 'Windows pi bon'** — chak chwa depann de Pwofil Bezwen ou.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "All-In-One",
            definition: "Yon òdinatè ki konbine ekran ak machin lan nan yon sèl objè, pratik men limite pou reparasyon.",
            example: "Yon all-in-one ka bon pou yon biwo fiks, men li pa pòtab tankou yon laptop.",
          },
          {
            term: "Chromebook",
            definition: "Yon laptop bon mache ki depann anpil de entènèt, ak estokaj ak konpatibilite lojisyèl limite.",
            example: "Yon Chromebook ka bon pou navige ak lekòl senp, men pa pou lojisyèl espesyalize.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a Pwofil Bezwen ou (oswa yon egzanp). Ki kategori (laptop, desktop, all-in-one, Chromebook, oswa Mac) ki fè plis sans, epi poukisa?",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Deside 'Mac toujou pi bon' oswa 'Windows toujou pi bon' san gade Pwofil Bezwen ou.",
          right: "Deside daprè travay ou, bijè ou, ak lojisyèl ki dwe mache — pa yon prefrans mak jeneral.",
          why: "Chak sistèm gen fòs ak limit — bon chwa a depann de bezwen espesifik ou, pa de yon opinyon jeneral.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Based on my needs (describe them), should I be looking at a laptop, desktop, all-in-one, Chromebook, or Mac? Help me think through the tradeoffs, not just pick one for me.",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Twa moun fiktif gen bezwen diferan: yon elèv ki fè lekòl an liy sèlman, yon moun biznis ki vwayaje souvan, ak yon moun ki fè konsepsyon grafik lakay li.",
          objective: "Chwazi yon kategori òdinatè apwopriye pou chak twa moun yo epi eksplike chwa a.",
          requiredSteps: [
            "Chwazi yon kategori pou elèv la epi eksplike poukisa",
            "Chwazi yon kategori pou moun biznis ki vwayaje a epi eksplike poukisa",
            "Chwazi yon kategori pou moun konsepsyon grafik la epi eksplike poukisa",
          ],
          successCriteria: ["Chak chwa gen yon rezònman ki gen rapò ak bezwen espesifik moun nan", "Pa gen konklizyon jeneral 'Mac/Windows pi bon'"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ki afimasyon sa a ki pi kòrèk sou Mac?",
            options: [
              "Mac se yon kategori apa de laptop ak desktop",
              "Mac se yon fanmi òdinatè — genyen ni laptop (MacBook) ni desktop (Mac mini, iMac)",
              "Tout Mac se laptop",
              "Mac pa ka fè travay biwo",
            ],
            correctIndex: 1,
            explanation: "Mac se yon FANMI machin — MacBook Air/Pro se laptop, Mac mini/iMac se desktop.",
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
    id: "m12-l3",
    slug: "intel-kont-amd-sou-odinate-windows",
    moduleId: "m12",
    order: 3,
    titleHt: "Intel kont AMD sou Òdinatè Windows",
    titleEn: "Intel vs. AMD on Windows Computers",
    estimatedMinutes: 12,
    mode: "universal",
    objectives: [
      "Konprann mak pwosesè a sèl pa detèmine kalite yon òdinatè",
      "Rekonèt yon anons sispèk ki manke jenerasyon/modèl egzat",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka konprann poukisa mak pwosesè a (Intel oswa AMD) sèl pa detèmine kalite yon òdinatè, epi rekonèt yon anons ki manke enfòmasyon esansyèl.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Intel** ak **AMD** se de konpayi ki fè pwosesè — mak pwosesè a sèl **PA detèmine kalite** yon òdinatè. Sa ki afekte pèfòmans reyèl la: **fanmi modèl**, **jenerasyon**, **tou (tier)**, refwadisman, limit pouvwa, kantite RAM, kalite SSD, ak konsepsyon jeneral laptop la. Intel gen fanmi 'Core' ak AMD gen fanmi 'Ryzen' — chak gen non ki mande yon **jenerasyon/modèl egzat** pou gen sans. Se poutèt sa **'Core i7' oswa 'Ryzen 7' san yon nimewo jenerasyon/modèl se yon enfòmasyon ENKOMPLE** — yon 'Core i7' ansyen ka pi LAN pase yon 'Core i5' PLIS RESAN. Fè atansyon tou a diferans ant pwosesè **pouvwa ba (U/low-power)** ak **pèfòmans (H/HS/HX)** — sa afekte batri ak chalè. **Pa deklare yon mak inivèsèlman siperyè** — konpare modèl egzat, pa non mak la sèlman.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Jenerasyon Pwosesè (Processor Generation)",
            definition: "Ane/vèsyon yon pwosesè te fèt — yon nimewo esansyèl pou konprann pèfòmans reyèl li.",
            example: "Yon 'Core i5' resan ka pi rapid pase yon 'Core i7' ki gen plizyè jenerasyon pi ansyen.",
          },
          {
            term: "Anons Enkomple (Incomplete Listing)",
            definition: "Yon anons ki bay sèlman 'Intel' oswa 'Core i7' san jenerasyon oswa modèl egzat.",
            example: "Yon anons ki di sèlman 'Laptop ak Core i7' se yon siy avètisman — mande jenerasyon egzat la.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Konpare de senaryo ipotetik: yon laptop ak yon 'Core i7' ansyen (plizyè jenerasyon anvan) kont yon laptop ak yon 'Core i5' plis resan. Ki youn ki gen chans pi rapid, e poukisa sa depann de plis pase non an?",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Konsidere yon anons sispèk si li montre sèlman 'Intel' oswa 'Core i7' san jenerasyon/modèl egzat",
          "Mande vandè a jenerasyon/modèl egzat pwosesè a anvan ou konsidere yon acha",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! A listing just says 'Intel Core i7' with no generation number. Why does that matter, and what should I ask the seller?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou wè de anons: youn di 'Ryzen 7 (ansyen jenerasyon)', lòt la di 'Ryzen 5 (jenerasyon resan)'.",
          objective: "Eksplike ki kesyon ou ta poze anvan ou deside ant de anons sa yo, san sipoze 'Ryzen 7' otomatikman pi bon.",
          requiredSteps: [
            "Site kesyon ou ta poze pou chak anons (jenerasyon, tou, refwadisman)",
            "Eksplike poukisa non 'Ryzen 7' sèl pa ase pou deside",
          ],
          successCriteria: ["Ou pa sipoze youn otomatikman pi bon san plis enfòmasyon"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Yon anons di sèlman 'Laptop ak pwosesè AMD, bon eta'. Ki sa ki manke pou fè yon bon desizyon?",
            options: [
              "Anyen — AMD sèl bay ase enfòmasyon",
              "Fanmi ak jenerasyon/modèl egzat pwosesè a (tankou 'Ryzen 5 5500U')",
              "Koulè laptop la",
              "Non vandè a sèlman",
            ],
            correctIndex: 1,
            explanation: "San fanmi ak jenerasyon/modèl egzat, ou pa ka evalye pèfòmans reyèl pwosesè a.",
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
    id: "m12-l4",
    slug: "konprann-non-pwosese-ak-jenerasyon",
    moduleId: "m12",
    order: 4,
    titleHt: "Konprann Non Pwosesè ak Jenerasyon",
    titleEn: "Understanding Processor Names and Generations",
    estimatedMinutes: 11,
    mode: "universal",
    objectives: [
      "Kolekte ak entèprete non konplè yon pwosesè nan yon nivo pratik",
      "Itilize yon fèy travay pou evalye si yon pwosesè apwopriye",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka kolekte enfòmasyon debaz sou yon pwosesè (non konplè, laj, tou, konpatibilite) san ou pa bezwen memorize chak sistèm non pa kè.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Ou pa bezwen dekode chak sistèm non pwosesè pa kè — ou bezwen konnen ki **enfòmasyon pou kolekte**: **non konplè** egzat pwosesè a, **manifakti** (Intel/AMD), **fanmi pwodwi**, **tou (tier)**, endikatè **jenerasyon/achitekti**, **sifiks** (lèt apre nimewo yo), kantite **kè (cores)** kòm SÈLMAN yon faktè pami plizyè, konpòtman **refwadisman/pouvwa** aparèy la, **sistèm opere sipòte**, **laj sòti**, ak **konvenans pou travay reyèl** ou. Sa yo se enfòmasyon pou KOLEKTE, pa pou memorize chak vèsyon.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Sifiks (Suffix)",
            definition: "Lèt apre nimewo modèl yon pwosesè (tankou U, H, HX) ki bay endikasyon sou pouvwa/refwadisman.",
            example: "Yon sifiks 'U' souvan endike yon pwosesè pouvwa ba, bon pou batri long.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou gen aksè a yon anons òdinatè, eseye jwenn non KONPLÈ pwosesè a (pa sèlman 'Core i5' oswa 'Ryzen 5' — chèche nimewo modèl konplè a si posib).",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Sipoze kantite 'kè (cores)' sèl detèmine si yon pwosesè bon.",
          right: "Konsidere kè kòm SÈLMAN yon faktè pami plizyè — jenerasyon, tou, ak konsepsyon jeneral konte tou.",
          why: "Yon pwosesè ak plis kè men ansyen ka toujou pi lan pase yon pwosesè ak mwens kè men plis resan.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I found the full processor name in a listing: [paste it]. Can you help me understand what it tells me about age, tier, and suitability for basic school/office use, without me buying anything yet?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou jwenn non konplè yon pwosesè nan yon anons epi ou vle evalye si li apwopriye.",
          objective: "Itilize fèy travay senk kesyon an pou evalye yon non pwosesè (reyèl oswa ipotetik).",
          requiredSteps: [
            "Kisa ki non konplè a?",
            "Apeprè ki laj li genyen?",
            "Èske li fèt pou pouvwa ba, itilizasyon jeneral, oswa pèfòmans wo?",
            "Èske li satisfè bezwen aplikasyon ou?",
            "Èske rès òdinatè a balanse (RAM, estokaj) ak pwosesè a?",
          ],
          successCriteria: ["Ou reponn tout senk kesyon fèy travay la"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki enfòmasyon sa yo ou ta dwe kolekte sou yon pwosesè anvan ou achte? (Chwazi tout ki aplike.)",
            options: [
              "Non konplè ak jenerasyon/modèl egzat",
              "Koulè òdinatè a",
              "Konbyen kè li genyen (kòm yon sèl faktè)",
              "Si li apwopriye pou travay reyèl ou",
            ],
            correctIndexes: [0, 2, 3],
            explanation: "Non konplè, kè (kòm yon faktè), ak konvenans pou travay ou konte — koulè a pa gen rapò ak pèfòmans.",
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
    id: "m12-l5",
    slug: "mac-intel-kont-mac-apple-silicon",
    moduleId: "m12",
    order: 5,
    titleHt: "Mac Intel kont Mac Apple Silicon",
    titleEn: "Intel Mac vs. Apple Silicon Mac",
    estimatedMinutes: 11,
    mode: "universal",
    objectives: [
      "Distenge yon Mac Intel de yon Mac Apple Silicon nan 'About This Mac'",
      "Evite chwazi yon Mac itilize sèlman paske li gen logo Apple",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka distenge yon Mac Intel de yon Mac Apple Silicon, epi konprann poukisa ou pa dwe chwazi yon Mac itilize sèlman paske li gen logo Apple sou li.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Ansyen Mac itilize **pwosesè Intel**; Mac pi resan itilize **Apple Silicon** (pwòp pwosesè Apple fè). Nan **'About This Mac'**, si ou wè mo **'Chip'** swiv pa yon non seri M (tankou M1, M2), Mac la se Apple Silicon. Si ou wè mo **'Processor'** swiv pa Intel, se yon Mac Intel. Yo ka diferan nan **pèfòmans, dire batri, chalè, konpatibilite lojisyèl, konpòtman demaraj/rekiperasyon, opsyon vityalizasyon Windows, ak dire sipò sistèm opere alavni**. Kèk aplikasyon Intel ansyen ka mache sou Apple Silicon atravè yon teknoloji tradiksyon, men **konpatibilite dwe verifye**, pa sipoze. Yon Mac Intel bon mache **PA otomatikman** yon bon valè — ou dwe evalye sipò lojisyèl, eta batri, laj, kou reparasyon, ak mizajou k ap rete. **Pa janm rekòmande yon Mac itilize sèlman paske li gen logo Apple sou li** — evalye machin nan menm jan ak nenpòt lòt òdinatè.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Apple Silicon",
            definition: "Pwosesè Apple fè li menm (fanmi M) pou Mac, olye Intel.",
            example: "About This Mac montre 'Chip: Apple M2' sou yon Mac Apple Silicon.",
          },
          {
            term: "About This Mac",
            definition: "Zouti sou yon Mac ki montre chip/pwosesè, memwa, ak estokaj machin nan.",
            example: "Klike meni Apple a epi chwazi 'About This Mac' pou wè chip la.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou gen aksè a yon Mac, gade 'About This Mac' pou wè si li montre 'Chip' (Apple Silicon) oswa 'Processor' (Intel).",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Achte yon Mac itilize sèlman paske li gen logo Apple sou li, san verifye chip, batri, oswa sipò lojisyèl.",
          right: "Evalye yon Mac itilize menm jan ak nenpòt lòt òdinatè — chip, sistèm opere sipòte, eta batri, ak konpatibilite aplikasyon.",
          why: "Yon logo pa di anyen sou eta reyèl oswa konvenans yon machin espesifik pou bezwen ou.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I'm looking at a used Mac. How do I check if it has an Intel processor or Apple Silicon, and why does that distinction matter?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou gade yon Mac itilize epi ou vle idantifye si li Intel oswa Apple Silicon, san sipoze anyen sou logo a.",
          objective: "Site etap pou verifye chip Mac la, epi lis kesyon anplis ou ta poze anvan ou konsidere achte l.",
          requiredSteps: [
            "Eksplike kòman ou ta verifye 'About This Mac'",
            "Site omwen twa lòt bagay ou ta verifye (sipò macOS, batri, konpatibilite lojisyèl)",
          ],
          successCriteria: ["Ou pa sipoze machin nan bon sèlman paske li se yon Mac"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Nan 'About This Mac', ki mo endike Mac la itilize Apple Silicon (pa Intel)?",
            options: ["'Processor' swiv pa Intel", "'Chip' swiv pa yon non seri M", "'Storage' sèlman", "'Serial Number' sèlman"],
            correctIndex: 1,
            explanation: "'Chip' swiv pa yon non seri M (tankou M1, M2) endike Apple Silicon; 'Processor' ak Intel endike yon Mac Intel.",
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
    id: "m12-l6",
    slug: "apple-m1-m2-m3-m4-m5-ak-chip-mseries-fiti",
    moduleId: "m12",
    order: 6,
    titleHt: "Apple M1, M2, M3, M4, M5 ak Chip M-Series Fiti",
    titleEn: "Apple M1, M2, M3, M4, M5 and Future M-Series Chips",
    estimatedMinutes: 12,
    mode: "universal",
    objectives: [
      "Konprann sistèm jenerasyon chip Apple Silicon, pa yon lis acha fiks",
      "Konpare kondisyon machin konplè, pa sèlman nimewo M la",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka konprann sistèm jenerasyon chip Apple Silicon (M1 pou monte) ak nivo pèfòmans yo (baz, Pro, Max, Ultra), san bezwen yon lis acha ki fiks pou tout tan.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "M1, M2, M3, M4, M5, ak non ki vin apre yo reprezante **jenerasyon Apple Silicon** — chak nouvo jenerasyon pa **otomatikman** pi bon chwa a nan tout pri. **Baz, Pro, Max, ak Ultra** endike diferan **nivo pèfòmans**, pa yon senp klasman kalite — yon chip **baz PLIS RESAN** ka pi bon pou yon itilizatè òdinè pase yon machin Pro/Max ANSYEN ak move batri, estokaj ensifizan, domaj, oswa pri twò wo. **Memwa ak estokaj jeneralman PA ka mizajou** apre acha sou Mac Apple Silicon. **Memwa inifye (unified memory)** pa maketing/evalye egzakteman menm jan ak yon modil RAM Windows tradisyonèl, men ou toujou bezwen ASE memwa pou travay ou. Verifye **sipò ekran ekstèn, pò, sipò aplikasyon, ak akseswa** pou modèl EGZAK la. Distenge **jenerasyon chip** de **modèl machin ak ane sòti**. Konpare **kondisyon konplè machin nan ak konfigirasyon**, pa sèlman nimewo 'M' la. **Règ tan-sansib**: yon dosye SEPARE ak yon dat 'dènye verifye' kenbe rekòmandasyon modèl aktyèl yo — leson sa a rete evergreen epi pa mande chanje chak fwa Apple lanse yon nouvo chip.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Memwa Inifye (Unified Memory)",
            definition: "Sistèm memwa Apple Silicon itilize, diferan de yon modil RAM tradisyonèl Windows.",
            example: "Yon Mac Apple Silicon ka bay 8 GB memwa inifye — verifye ase pou travay ou.",
          },
          {
            term: "Baz/Pro/Max/Ultra",
            definition: "Nivo pèfòmans diferan pou chip Apple Silicon — pa yon senp klasman 'pi bon'.",
            example: "Yon chip 'baz' resan ka konvenab pou itilizasyon jeneral, pandan 'Max' fèt pou travay pi lou.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Konpare de senaryo ipotetik: yon Mac ak chip 'baz' RESAN ak batri/estokaj bon, kont yon Mac Pro-tier ANSYEN ak batri fèb ak estokaj piti. Ki youn ki gen chans fè travay ordinè pi byen?",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Achte yon Mac 'Activation Locked' bon mache paske li gen yon chip resan, san verifye si li itilizab ditou.",
          right: "Rejte nenpòt Mac ak Activation Lock aktive — machin nan ka pa itilizab menm si chip la bon.",
          why: "Activation Lock ka anpeche w konfigire epi itilize machin nan menm si tout lòt spesifikasyon yo bon.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I'm trying to understand Apple's M-series chip naming (M1 through M5 and beyond) at a general level, not looking for specific current prices. Can you explain the base/Pro/Max/Ultra system?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou gade de anons Mac ipotetik: youn ak yon chip 'baz' resan, 16GB memwa, batri bon; lòt la ak yon chip 'Pro' ansyen, batri fèb, pri wo.",
          objective: "Konpare de machin yo daprè kondisyon konplè, pa sèlman nimewo chip la, epi eksplike chwa a.",
          requiredSteps: [
            "Konpare memwa, estokaj, ak eta batri chak machin",
            "Eksplike poukisa nimewo chip la sèl pa ase pou deside",
          ],
          successCriteria: ["Chwa a baze sou kondisyon konplè, pa sèlman nimewo 'M' la"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou wè yon Mac ki gen chip 'M4 baz' men batri fèb ak pri wo, kont yon Mac 'M2 baz' ak batri bon ak pri rezonab. Ki sa ki pi enpòtan pase sèlman nimewo chip la?",
            options: [
              "Nimewo chip la sèl — M4 toujou genyen",
              "Kondisyon konplè machin nan (batri, estokaj, pri, eta jeneral)",
              "Koulè machin nan",
              "Konbyen tan li nan magazen an",
            ],
            correctIndex: 1,
            explanation: "Yon chip plis resan pa konpanse pou move batri oswa pri egzajere — evalye machin nan konplètman.",
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
    id: "m12-l7",
    slug: "ram-memwa-estokaj-ak-kapasite-mizajou-anvan-acha",
    moduleId: "m12",
    order: 7,
    titleHt: "RAM, Memwa, Estokaj, ak Kapasite Mizajou Anvan Acha",
    titleEn: "RAM, Memory, Storage, and Upgradeability Before Purchase",
    estimatedMinutes: 11,
    mode: "universal",
    objectives: [
      "Evalye konbyen memwa ak estokaj diferan travay reyèlman mande",
      "Konprann diferans ant memwa/estokaj ki soude ak sa ki ranplasab",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka evalye konbyen memwa ak estokaj yon travay debaz mande reyèlman, epi konprann diferans ant konpozan ki soude ak sa ki ranplasab.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Kantite memwa yon òdinatè bezwen depann de travay la: navige ak plizyè **onglè louvri** ansanm konsome plis memwa pase yon sèl aplikasyon. Windows itilize tèm **'RAM'**, pandan Apple Silicon itilize **'memwa inifye'** — de tèminoloji diferan pou konsèp ki sanble. **SSD** pi rapid pase yon **HDD** tradisyonèl. **Estokaj itilizab TOUJOU pi piti pase kapasite anonse a** — sistèm opere ak aplikasyon konsome yon pòsyon. Kèk machin gen **memwa/estokaj soude (soldered)** ki PA ka mizajou apre acha; lòt gen **modil ranplasab** ak **slot disponib**. Panse a **kou mizajou** si li posib. Estokaj **ekstèn PA yon ranplasman konplè** pou estokaj entèn ase, ak **estokaj cloud toujou mande entènèt** ak pafwa yon abònman.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "SSD vs. HDD",
            definition: "SSD (estokaj eta solid) pi rapid pase HDD (disk dur tradisyonèl) pou pifò itilizasyon.",
            example: "Yon òdinatè ak SSD limen ak louvri aplikasyon pi vit pase youn ak HDD sèlman.",
          },
          {
            term: "Soude (Soldered)",
            definition: "Memwa oswa estokaj ki fikse pèmanan sou kat la, ki PA ka mizajou apre acha.",
            example: "Anpil laptop mens ak Mac Apple Silicon gen memwa soude — verifye sa anvan ou achte.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a fason ou itilize (oswa ta itilize) yon òdinatè. Estime konbyen onglè navigatè ou ta gen louvri anmenm tan, ak si sa mande plis memwa.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Panse ou ka toujou 'mizajou pita' san verifye si memwa/estokaj machin nan soude oswa ranplasab.",
          right: "Verifye si memwa/estokaj ka mizajou anvan ou achte, si sa enpòtan pou plan alavni ou.",
          why: "Anpil laptop modèn (ak tout Mac Apple Silicon) gen memwa soude — ou pa ka mizajou apre acha ditou.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! How much RAM/memory and storage would a typical student who does schoolwork, browsing, and video calls actually need?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou dwe chwazi yon konfigirasyon memwa/estokaj apwopriye pou diferan kalite travay.",
          objective: "Chwazi yon konfigirasyon memwa/estokaj apwopriye pou lekòl/navige debaz, biwo/biznis, pwogramasyon, ak travay kreyatif lejè.",
          requiredSteps: [
            "Chwazi yon konfigirasyon pou lekòl/navige debaz",
            "Chwazi yon konfigirasyon pou biwo/biznis",
            "Chwazi yon konfigirasyon pou pwogramasyon ak travay kreyatif lejè",
          ],
          successCriteria: ["Chak chwa gen yon rezònman ki gen rapò ak kalite travay la"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Poukisa estokaj itilizab yon òdinatè toujou pi piti pase kapasite anonse a (tankou '256 GB')?",
            options: [
              "Se yon erè nan fabrikasyon toujou",
              "Sistèm opere ak aplikasyon deja enstale konsome yon pòsyon estokaj la",
              "Estokaj anonse a se yon manti total",
              "Sa rive sèlman sou Mac",
            ],
            correctIndex: 1,
            explanation: "Sistèm opere ak aplikasyon konsome yon pòsyon nan estokaj total la, kite mwens espas itilizab pase kapasite anonse a.",
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
    id: "m12-l8",
    slug: "ekran-batri-klavye-po-chaje-kamera-ak-kalite-konstriksyon",
    moduleId: "m12",
    order: 8,
    titleHt: "Ekran, Batri, Klavye, Pò, Chajè, Kamera, ak Kalite Konstriksyon",
    titleEn: "Screen, Battery, Keyboard, Ports, Charger, Camera, and Build Quality",
    estimatedMinutes: 11,
    mode: "universal",
    objectives: [
      "Enspekte yon òdinatè pi lwen pase sèlman pwosesè/RAM/estokaj",
      "Rekonèt siy pwoblèm sou ekran, batri, ak klavye",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka enspekte yon òdinatè pi lwen pase pwosesè/RAM/estokaj — ekran, batri, klavye, pò, chajè, kamera, ak kalite konstriksyon jeneral.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Espesifikasyon yo pa sèlman pwosesè, RAM, ak estokaj. Enspekte: **ekran** (gwosè, rezolisyon, klète, piksèl mouri, liy, dekolorasyon, jwenti/hinges), **klavye** (aranjman ak eta touch), **trackpad/souri**, **kamera ak mikwofòn**, **opalè ak koneksyon kaskèt**, **pò** (USB-A, USB-C, HDMI, kat SD, Ethernet), **pò chajè ak bon chajè** ki matche l, **sante batri** (dire, avètisman anfle, kou ranplasman), **bri vantilatè, chalè, domaj fizik, viss ki manke, ak endikatè likid** (SÈLMAN sa ki vizib san demonte machin nan), **pwa/pòtabilite**, ak **disponiblite lokal** chajè ak pyès ranplasman.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Sante Batri (Battery Health)",
            definition: "Kondisyon reyèl batri a — dire, kapasite ki rete, ak si li anfle (siy danje).",
            example: "Yon batri ki anfle se yon siy danje — pa itilize machin nan jiskaske yon pwofesyonèl gade l.",
          },
          {
            term: "Endikatè Likid (Liquid Indicator)",
            definition: "Yon ti mak ki chanje koulè si dlo antre nan machin nan — verifye sèlman sa ki vizib san demonte.",
            example: "Gade endikatè likid la si li vizib, san ou pa eseye demonte machin nan pou wè l.",
          },
        ],
      },
      {
        id: "b4",
        type: "safety",
        reminders: [
          "Pa itilize yon òdinatè ak yon batri ki anfle — chèche èd pwofesyonèl",
          "Verifye sèlman sa ki vizib san demonte machin nan — pa fè reparasyon oswa travay elektrik ou menm",
        ],
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Si ou gen aksè a yon òdinatè (pa w oswa yon egzanp), fè yon enspeksyon rapid: gade ekran an pou dekolorasyon, teste chak touch klavye, ak verifye tout pò yo mache.",
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What are the key physical things I should check on a used laptop besides the processor and RAM — like screen, battery, and keyboard condition?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou pral enspekte yon òdinatè (reyèl oswa senmile) pi lwen pase espesifikasyon debaz yo.",
          objective: "Fè yon enspeksyon konplè ekran, batri, klavye, pò, ak chajè.",
          requiredSteps: [
            "Enspekte ekran an pou pwoblèm vizyèl",
            "Verifye eta batri ak si li anfle",
            "Teste klavye ak tout pò yo",
          ],
          successCriteria: ["Ou konplete yon enspeksyon konplè san demonte machin nan"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou remake batri yon laptop itilize sanble anfle (li leve ti kras anba klavye a). Ki sa ou dwe fè?",
            options: [
              "Kontinye itilize l, se nòmal",
              "Sispann itilize l epi chèche èd pwofesyonèl — sa se yon siy danje",
              "Peze sou li pou fè l plat",
              "Ranje l ou menm ak yon zouti",
            ],
            correctIndex: 1,
            explanation: "Yon batri anfle se yon siy danje reyèl — sispann itilizasyon epi chèche èd pwofesyonèl imedyatman.",
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
    id: "m12-l9",
    slug: "nef-itilize-bwat-ouve-refet-ak-renouvle",
    moduleId: "m12",
    order: 9,
    titleHt: "Nèf, Itilize, Bwat Ouvè, Refèt, ak 'Renouvle'",
    titleEn: "New, Used, Open-Box, Refurbished, and \"Renewed\"",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Konprann etikèt vant yo pa garanti menm bagay la de chak vandè",
      "Evalye yon acha itilize/refèt san sipoze li otomatikman bon oswa move",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka konprann etikèt tankou 'itilize', 'refèt', ak 'renouvle' pa garanti menm bagay la de chak vandè, epi evalye yo san prejije.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Etikèt tankou **'nèf', 'itilize', 'bwat ouvè (open-box)', 'refèt (refurbished)', ak 'renouvle (renewed)'** PA garanti menm bagay la de chak vandè — chak vandè ka gen yon estanda diferan. Enpòtan pou verifye: **repitasyon vandè a**, **ki moun ki fè refèt la** (fabrikan ofisyèl oswa yon twazyèm pati?), **ki sa ki te teste**, **dire ak kote garanti a valab**, **règleman retou**, **klas kosmetik**, si **batri/pyès te ranplase**, **chajè orijinal kont chajè twazyèm pati**, **kou livrezon ak dwàn**, **kou reparasyon kache**, **prèv pwopriyete**, ak **resi ak dosye seri/modèl**. **Pa trete 'refèt' kòm otomatikman san danje, ni 'itilize' kòm otomatikman move**.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Refèt (Refurbished)",
            definition: "Yon machin itilize ki te teste ak repare — kalite depann de KI MOUN ki fè travay la.",
            example: "Yon Mac 'refèt' pa fabrikan ofisyèl la diferan anpil de yon 'refèt' pa yon revandè enkoni.",
          },
          {
            term: "Klas Kosmetik (Cosmetic Grade)",
            definition: "Deskripsyon eta fizik ekstèn machin nan (rif, mak, elatriye), separe de eta fonksyonèl li.",
            example: "Yon machin 'klas kosmetik B' ka gen ti rif men fonksyone pafètman.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a diferans ant yon machin 'refèt' pa fabrikan ofisyèl la ak yon machin ki senpleman make 'itilize, bon eta' pa yon vandè endividyèl. Ki plis kesyon ou ta poze pou chak?",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Sipoze 'refèt' toujou vle di san danje, oswa 'itilize' toujou vle di move kalite.",
          right: "Poze kesyon espesifik sou ki moun ki fè travay la, sa ki te teste, ak règleman garanti/retou pou chak acha.",
          why: "Etikèt sa yo pa gen definisyon inivèsèl — kalite reyèl depann de vandè espesifik la, pa mo a sèl.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What questions should I ask a seller before trusting a 'refurbished' laptop listing?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou gade yon anons ki make 'renouvle' epi ou vle evalye l san prejije.",
          objective: "Lis kesyon ou ta poze vandè a anvan ou fè konfyans a etikèt 'renouvle' la.",
          requiredSteps: [
            "Mande ki moun ki fè renouvèlman an",
            "Mande sa ki te teste ak dire garanti a",
            "Mande règleman retou ak si chajè a orijinal",
          ],
          successCriteria: ["Ou pa aksepte etikèt la san verifikasyon"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Èske etikèt 'refèt (refurbished)' garanti menm kalite a pou chak vandè?",
            options: [
              "Wi, 'refèt' toujou vle di menm bagay la",
              "Non — kalite depann de ki moun ki fè travay la ak ki sa ki te teste",
              "'Refèt' toujou pi move pase 'itilize'",
              "'Refèt' se yon lòt mo pou 'nèf'",
            ],
            correctIndex: 1,
            explanation: "'Refèt' pa yon estanda inivèsèl — verifye ki moun ki fè travay la ak sa ki te teste pou chak vandè.",
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
    id: "m12-l10",
    slug: "enspeksyon-konple-yon-odinate-windows-itilize",
    moduleId: "m12",
    order: 10,
    titleHt: "Enspeksyon Konplè Yon Òdinatè Windows Itilize",
    titleEn: "Complete Used Windows Computer Inspection",
    estimatedMinutes: 12,
    mode: "universal",
    objectives: [
      "Swiv yon lis verifikasyon konplè pou yon òdinatè Windows itilize",
      "Rekonèt siy yon machin bloke pa lekòl/konpayi oswa BIOS",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka swiv yon lis verifikasyon konplè pou yon òdinatè Windows itilize, san bezwen demonte machin nan.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lis verifikasyon konplè pou yon òdinatè Windows itilize: **modèl egzat**, **pwosesè egzat**, **vèsyon ak aktivasyon Windows**, **sipò/konpatibilite Windows** (èske li ka mete ajou?), **RAM ak estokaj**, konsyans **sante SSD**, **kondisyon batri**, **wattaj ak konektè chajè a**, avètisman **modpas BIOS/firmware**, siy **jesyon lekòl/konpayi oswa restriksyon kont**, **ekran**, **klavye**, **trackpad**, **Wi-Fi**, **Bluetooth**, **kamera**, **mikwofòn**, **opalè**, **pò**, tès **USB**, tès **HDMI/ekran ekstèn** si posib, **dòmi, rekòmanse, ak etenn**, **chalè oswa bri vantilatè** etranj, **kondisyon fizik**, **nimewo seri ak pwopriyete**, ak **retou/garanti**. **Pa gen demontaj nesesè** nan kou sa a.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Modpas BIOS/Firmware",
            definition: "Yon modpas nivo materyèl ki ka bloke yon machin, separe de modpas Windows nòmal la.",
            example: "Yon machin ak modpas BIOS ke ansyen pwopriyetè a pa retire ka pa itilizab ditou.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou gen aksè a yon òdinatè Windows, teste Wi-Fi, kamera, ak omwen de pò diferan pou konfime yo tout mache.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Rejte yon machin ak modpas BIOS/firmware ki poko retire pa ansyen pwopriyetè a",
          "Verifye pa gen jesyon lekòl/konpayi ki ka bloke òdinatè a apre acha",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I'm about to inspect a used Windows laptop before buying. Can you walk me through a complete checklist, item by item?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou pral enspekte yon òdinatè Windows itilize (reyèl oswa senmile) anvan yon acha.",
          objective: "Swiv lis verifikasyon konplè a: modèl/pwosesè, sistèm, materyèl, ak pwopriyete.",
          requiredSteps: [
            "Verifye modèl, pwosesè, ak vèsyon Windows",
            "Teste materyèl (ekran, klavye, pò, Wi-Fi, kamera)",
            "Verifye pa gen modpas BIOS oswa jesyon lekòl/konpayi ki bloke l",
          ],
          successCriteria: ["Ou konplete yon enspeksyon konplè san demonte machin nan"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki bagay sa yo fè pati yon enspeksyon konplè òdinatè Windows itilize? (Chwazi tout ki aplike.)",
            options: [
              "Modèl ak pwosesè egzat",
              "Si machin nan gen modpas BIOS ki poko retire",
              "Koulè machin nan sèlman",
              "Eta batri ak wattaj chajè a",
            ],
            correctIndexes: [0, 1, 3],
            explanation: "Modèl/pwosesè, modpas BIOS, ak eta batri/chajè yo enpòtan — koulè a pa fè pati yon enspeksyon fonksyonèl.",
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
    id: "m12-l11",
    slug: "enspeksyon-konple-yon-mac-itilize",
    moduleId: "m12",
    order: 11,
    titleHt: "Enspeksyon Konplè Yon Mac Itilize",
    titleEn: "Complete Used Mac Inspection",
    estimatedMinutes: 12,
    mode: "universal",
    objectives: [
      "Swiv yon lis verifikasyon konplè pou yon Mac itilize",
      "Rekonèt Activation Lock ak lòt blokaj ki fè yon Mac pa itilizab",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka swiv yon lis verifikasyon konplè pou yon Mac itilize, epi rekonèt blokaj (tankou Activation Lock) ki ka fè machin nan pa itilizab.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lis verifikasyon konplè pou yon Mac itilize: **modèl ak ane egzat**, **Intel oswa Apple Silicon**, **chip egzat**, **memwa ak estokaj**, **vèsyon macOS sipòte**, **Activation Lock retire**, **Find My retire pa vandè a**, **pa gen Apple Account enkoni ki rete konekte**, **pa gen blokaj Remote Management/MDM**, konsyans **kou/kondisyon batri**, **chajè kòrèk**, **ekran ak jwenti**, **klavye ak trackpad**, **kamera, mikwofòn, opalè**, **Wi-Fi ak Bluetooth**, **pò**, **rekòmanse ak etenn**, **verifikasyon nimewo seri/modèl**, **istorik reparasyon ak domaj likid**, **retou/garanti**, ak **konpatibilite aplikasyon** ki obligatwa pou ou. **Activation Lock ki pa retire fè yon Mac pa itilizab** — sa se yon rezon pou rejte acha a, kèlkeswa pri a.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Activation Lock",
            definition: "Yon blokaj sekirite Apple ki fè yon Mac pa itilizab si li poko retire pa ansyen pwopriyetè a.",
            example: "Yon Mac bon mache ak Activation Lock aktive se yon machin ou dwe rejte, pa yon bon zafè.",
          },
          {
            term: "MDM (Device Management)",
            definition: "Yon sistèm jesyon (souvan pa yon lekòl/konpayi) ki ka limite oswa bloke yon machin.",
            example: "Verifye yon Mac itilize pa gen MDM aktive ki ta ka limite itilizasyon w apre acha.",
          },
        ],
      },
      {
        id: "b4",
        type: "safety",
        reminders: [
          "Rejte nenpòt Mac ak Activation Lock ki poko retire, kèlkeswa pri a",
          "Verifye pa gen MDM oswa Apple Account enkoni ki rete konekte sou machin nan",
        ],
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Si ou gen aksè a yon Mac, gade nan Paramèt Sistèm pou verifye pa gen Apple Account enkoni ki rete konekte.",
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What does 'Activation Lock' mean on a used Mac, and why is it such a serious dealbreaker if it's still enabled?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou pral enspekte yon Mac itilize (reyèl oswa senmile) anvan yon acha.",
          objective: "Swiv lis verifikasyon konplè a: chip/modèl, blokaj sekirite, ak materyèl.",
          requiredSteps: [
            "Verifye modèl, ane, ak chip (Intel oswa Apple Silicon)",
            "Verifye Activation Lock retire ak pa gen MDM",
            "Teste materyèl (ekran, klavye, Wi-Fi, kamera)",
          ],
          successCriteria: ["Ou konplete yon enspeksyon konplè san demonte machin nan"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Yon Mac itilize gen yon pri trè ba men vandè a admèt Activation Lock la 'poko retire'. Ki sa ou dwe fè?",
            options: [
              "Achte l kanmenm paske pri a bon",
              "Rejte acha a — Activation Lock ki pa retire fè machin nan pa itilizab",
              "Peye epi mande vandè a retire l apre",
              "Achte l epi eseye 'debloke' l ou menm",
            ],
            correctIndex: 1,
            explanation: "Yon Activation Lock ki pa retire se yon rezon pou rejte acha a — machin nan pa itilizab jiskaske l retire.",
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
    id: "m12-l12",
    slug: "siy-danje-ak-eskrokri-acha-komen",
    moduleId: "m12",
    order: 12,
    titleHt: "Siy Danje ak Eskrokri Acha Komen",
    titleEn: "Red Flags and Common Buying Scams",
    estimatedMinutes: 11,
    mode: "universal",
    objectives: [
      "Rekonèt siy danje komen nan yon acha òdinatè itilize",
      "Refize yon acha lè gen twòp siy avètisman",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rekonèt siy danje komen nan yon acha òdinatè itilize, epi refize yon acha lè gen twòp siy avètisman.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Siy danje komen nan yon acha òdinatè: **presyon pou peye imedyatman**, **pri ki twò ba** pase valè mache reyèl, **foto estòk olye vrè aparèy la**, **vandè ki refize videyo oswa tès an pèsòn**, **pa gen modèl/pwosesè egzat**, **'Core i7' san jenerasyon**, **estokaj fo oswa enfòmasyon sistèm modifye**, **chajè ki manke oswa ki pa kòrèk**, **jwenti fann oswa batri anfle**, **BIOS, Apple Account, Activation Lock, MDM, oswa blokaj lekòl/konpayi**, **aparèy rapòte pèdi oswa vòlè**, **peman anvan enspeksyon nan yon metòd san pwoteksyon**, **sistèm opere ki pa sipòte**, **lojisyèl pirate** ofri kòm 'valè anplis', **afimasyon fo 'tou nèf'**, **enfòmasyon seri ki pa matche**, **pa gen kondisyon retou**, ak yon '**ti pwoblèm**' vandè a minimize ki ka mande yon reparasyon chè. **Plis siy danje ki prezan, plis rezon pou w refize acha a.**",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Presyon Ijan (Urgency Pressure)",
            definition: "Yon vandè ki fòse w peye imedyatman san tan pou reflechi oswa enspekte.",
            example: "Yon vandè ki di 'ou dwe peye kounye a oswa yon lòt moun ap pran l' se yon siy danje.",
          },
          {
            term: "Enfòmasyon Sistèm Modifye (Modified System Info)",
            definition: "Lè yon vandè chanje enfòmasyon lojisyèl pou fè machin nan sanble pi bon pase li ye.",
            example: "Verifye estokaj ak espesifikasyon dirèkteman sou machin nan, pa fè konfyans a sèlman sa vandè a di.",
          },
        ],
      },
      {
        id: "b4",
        type: "safety",
        reminders: [
          "Refize peman anvan enspeksyon nan yon metòd san pwoteksyon",
          "Sispèk fò lè yon vandè refize videyo oswa tès an pèsòn",
          "Plis siy danje ki prezan, plis rezon pou w chèche yon lòt machin",
        ],
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Fè yon lis mantal siy danje ou ta chèche nan yon anons — konbyen nan lis la ou ka site san gade tèks eksplikasyon an ankò?",
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I'm looking at a used laptop listing that seems too good to be true. What are the classic red flags I should check for before contacting the seller?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou gade yon anons ki gen plizyè siy danje: pri twò ba, foto estòk, ak vandè ki refize videyo.",
          objective: "Idantifye tout siy danje nan senaryo a epi eksplike ki desizyon ou ta pran.",
          requiredSteps: [
            "Idantifye chak siy danje nan senaryo a",
            "Eksplike desizyon final ou (achte oswa refize) ak rezònman",
          ],
          successCriteria: ["Ou idantifye omwen twa siy danje", "Desizyon w lan pwoteje enterè ou"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki sa sa yo se siy danje nan yon anons òdinatè itilize? (Chwazi tout ki aplike.)",
            options: [
              "Vandè a ensiste pou peman imedya anvan enspeksyon",
              "Anons lan gen modèl ak jenerasyon pwosesè egzat",
              "Pri a trè ba anpil pase valè mache",
              "Vandè a refize fè yon apèl videyo pou montre machin nan",
            ],
            correctIndexes: [0, 2, 3],
            explanation: "Presyon peman, pri twò ba, ak refi videyo se twa siy danje klasik — enfòmasyon egzat se yon BON siy, pa yon danje.",
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
    id: "m12-l13",
    slug: "swen-netwayaj-chale-batri-kouran-ak-kou-posesyon-ayisyen",
    moduleId: "m12",
    order: 13,
    titleHt: "Swen, Netwayaj, Chalè, Batri, Kouran, ak Kou Posesyon Ayisyen",
    titleEn: "Care, Cleaning, Heat, Battery, Power, and Haiti-Aware Ownership Cost",
    estimatedMinutes: 11,
    mode: "universal",
    objectives: [
      "Aplike bon pratik swen debaz pou pwolonje lavi yon òdinatè",
      "Konprann konsyans kouran ak kou posesyon nan kontèks Ayiti",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka aplike bon pratik swen debaz pou pwolonje lavi òdinatè ou, epi konprann konsyans kouran ak kou posesyon total nan kontèks Ayiti.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Swen debaz: **netwayaj ekstèn san danje** (twal sèch/limaj, pa likid dirèk sou aparèy la), bon **vantilasyon** (pa bloke twou lè yo), evite **chalè kabann/dra** (pa itilize laptop sou kabann/dra pandan lontan — sa bloke vantilasyon), konsyans **aje batri**, itilize **chajè kòrèk**, ak yon **pwotektè sirvòltaj (surge protector)**. Nan kontèks **Ayiti**, konsyans **envèsè, jeneratè, ak fliktyasyon kouran** enpòtan anpil — **sovgade travay ou souvan** anvan yon koupi kouran, gen yon **woutin backup**, ak konsidere **disponiblite pyès ranplasman** lokalman. Panse tou a **kou done ak lojisyèl**, **kou transpò/livrezon pou sèvis reparasyon**, ak **pa fè reparasyon entèn oswa travay elektrik ou menm** — sa mande yon pwofesyonèl.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Pwotektè Sirvòltaj (Surge Protector)",
            definition: "Yon aparèy ki pwoteje òdinatè ou kont pik elektrik ki ka domaje machin nan.",
            example: "Konekte òdinatè ou nan yon pwotektè sirvòltaj, sitou nan zòn ak fliktyasyon kouran.",
          },
          {
            term: "Fliktyasyon Kouran (Power Fluctuation)",
            definition: "Chanjman souvan nan vòltaj elektrik ki ka domaje aparèy elektwonik san pwoteksyon.",
            example: "Yon envèsè oswa yon pwotektè sirvòltaj ede pwoteje kont fliktyasyon kouran.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a woutin kouran/elektrisite kote ou ye a. Ki mezi pwoteksyon (envèsè, jeneratè, pwotektè sirvòltaj) ou deja itilize, oswa ou ta ka ajoute?",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa fè reparasyon entèn oswa travay elektrik sou òdinatè ou menm — chèche yon pwofesyonèl",
          "Sovgade travay ou souvan, sitou nan zòn ak fliktyasyon kouran fè",
          "Pa itilize laptop la sou yon kabann/dra pandan lontan — sa bloke vantilasyon epi ka lakòz twòp chalè",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Power in my area isn't always stable. What are simple, practical things I can do to protect my computer from power fluctuations?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle etabli bon abitid swen pou pwolonje lavi òdinatè ou nan kontèks kote kouran pa toujou estab.",
          objective: "Etabli yon woutin swen ki gen ladan netwayaj, vantilasyon, ak pwoteksyon kont fliktyasyon kouran.",
          requiredSteps: [
            "Site fason ou netwaye ekstèn òdinatè ou san danje",
            "Site yon mezi pwoteksyon kont fliktyasyon kouran (pwotektè sirvòltaj, envèsè)",
            "Etabli yon woutin backup ki gen rapò ak koupi kouran posib",
          ],
          successCriteria: ["Woutin an pratik epi apwopriye pou kontèks lokal ou"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Kouran an konn koupe san avètisman kote ou ye a. Ki sa ki pi bon abitid?",
            options: [
              "Pa enkyete w — sa pa gen rapò ak òdinatè a",
              "Sovgade travay ou souvan ak konsidere yon pwotektè sirvòltaj/envèsè",
              "Kite òdinatè a limen tout tan pou evite pwoblèm",
              "Efase tout fichye ou pou pwoteje yo",
            ],
            correctIndex: 1,
            explanation: "Sovgade souvan ak pwoteksyon kont fliktyasyon kouran ede evite pèt travay ak domaj materyèl.",
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
    id: "m12-l14",
    slug: "fe-yon-desizyon-acha-pesonel",
    moduleId: "m12",
    order: 14,
    titleHt: "Fè Yon Desizyon Acha Pèsonèl",
    titleEn: "Build a Personal Buying Decision",
    estimatedMinutes: 15,
    mode: "universal",
    objectives: [
      "Konbine tout kritè yo nan yon sèl Fèy Desizyon Acha Òdinatè",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka konbine tout kritè yo (bezwen, pwosesè, memwa, kondisyon, garanti, kou total) nan yon sèl Fèy Desizyon Acha Òdinatè.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Kounye a ou pral konbine TOUT sa ou aprann: Pwofil Bezwen Òdinatè, lojisyèl obligatwa, prefrans Windows/Mac, konparezon pwosesè, memwa, estokaj, ekran/pò, batri, kapasite mizajou, laj ak sipò sistèm opere, repare/pyès disponib, kondisyon, garanti/retou, kou posesyon total, konfyans vandè, ak rezilta enspeksyon. Kreye yon **Fèy Desizyon Acha Òdinatè** yon paj ak: **Sa ki obligatwa (Must Have)**, **Sa ki ta bon (Nice to Have)**, **Sa ki elimine yon chwa (Deal Breakers)**, **Konfigirasyon minimòm akseptab**, **Kesyon pou vandè a**, **Lis verifikasyon enspeksyon**, **Bijè total maksimòm**, ak **Chwa final ak eksplikasyon**.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Fèy Desizyon Acha (Buying Decision Sheet)",
            definition: "Yon dokiman yon paj ki konbine tout kritè acha ou yo anvan ou fè yon chwa final.",
            example: "Ranpli Fèy Desizyon Acha ou anvan ou kontakte okenn vandè, pou rete objektif.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Revize Pwofil Bezwen Òdinatè ou soti nan premye leson Modil 12 la — li toujou reflete bezwen ou byen?",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Kontakte yon vandè oswa vizite yon magazen san yon Fèy Desizyon Acha klè an men.",
          right: "Konplete Fèy Desizyon Acha a konplètman AVAN ou pale ak okenn vandè.",
          why: "San yon fèy klè, prensyon vandè oswa anvi moman an ka fè w achte yon bagay ki pa fè travay ou.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you help me organize everything I've learned about buying a computer into a one-page decision sheet, based on my own needs (I'll describe them)?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou pare pou konbine tout sa ou aprann nan Modil 12 nan yon sèl dokiman aksyon.",
          objective: "Kreye yon Fèy Desizyon Acha Òdinatè konplè ak tout uit seksyon yo.",
          requiredSteps: [
            "Ekri 'Sa ki obligatwa' ak 'Sa ki ta bon'",
            "Ekri 'Sa ki elimine yon chwa' ak konfigirasyon minimòm akseptab",
            "Ekri kesyon pou vandè a ak lis verifikasyon enspeksyon",
            "Ekri bijè total maksimòm ak yon chwa final ak eksplikasyon",
          ],
          successCriteria: ["Fèy la gen tout uit seksyon yo", "Chwa final la gen yon eksplikasyon klè ki gen rapò ak Pwofil Bezwen ou"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kòrèk pou fè yon desizyon acha òdinatè byen panse.",
            steps: [
              "Defini Pwofil Bezwen Òdinatè ou",
              "Konpare kategori ak pwosesè apwopriye",
              "Enspekte machin espesifik yo (siy danje, kondisyon)",
              "Konplete Fèy Desizyon Acha ak chwa final",
            ],
            correctOrder: [0, 1, 2, 3],
            explanation: "Kòmanse ak bezwen, konpare opsyon, enspekte machin espesifik, epi fini ak yon desizyon dokimante.",
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
    id: "m12-l15",
    slug: "misyon-evalye-yon-anons-odinate",
    moduleId: "m12",
    order: 15,
    titleHt: "Misyon: Evalye Yon Anons Òdinatè",
    titleEn: "Module Mission: Evaluate a Computer Listing",
    estimatedMinutes: 15,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 12 nan yon egzèsis evalyasyon anons reyèl",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka konpare de anons òdinatè fiktif, idantifye enfòmasyon ki manke ak siy danje, chwazi pi bon opsyon an pou yon bezwen espesifik, epi eksplike desizyon w lan.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 12 la. Ou pral konpare de anons fiktif: **Anons A** — 'Laptop Windows, Core i7, bon eta, $250, peman kach sèlman, foto estòk, vandè pa reponn kesyon sou jenerasyon pwosesè a.' **Anons B** — 'Laptop Windows, Core i5-1235U (12yèm jenerasyon), 8GB RAM, 256GB SSD, batri 85% sante, chajè orijinal enkli, $320, vandè aksepte apèl videyo ak enspeksyon anvan peman, garanti 30 jou.' Ou pral idantifye siy danje nan Anons A, konpare li ak enfòmasyon konplè Anons B, epi chwazi pi bon opsyon an pou yon elèv ki bezwen yon laptop fyab pou lekòl an liy.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario: "Ou konpare Anons A (pri ba, enfòmasyon manke, siy danje) ak Anons B (enfòmasyon konplè, pi wo pri, pwosesis achte san danje) pou yon elèv ki bezwen yon laptop fyab pou lekòl an liy.",
          objective:
            "Idantifye enfòmasyon ki manke ak siy danje nan chak anons, chwazi pi bon opsyon an pou bezwen elèv la, epi eksplike desizyon w lan ak rezònman klè.",
          requiredSteps: [
            "Lis enfòmasyon ki manke nan Anons A",
            "Lis siy danje nan Anons A",
            "Konpare Anons A ak Anons B pou bezwen elèv la (lekòl an liy, fyab)",
            "Chwazi youn nan de anons yo epi eksplike poukisa",
          ],
          successCriteria: [
            "Ou idantifye omwen twa siy danje nan Anons A",
            "Chwa final ou gen yon rezònman ki gen rapò ak bezwen elèv la, pa sèlman pri a",
          ],
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Nan Anons A ('Core i7, bon eta, $250, peman kach sèlman, foto estòk, vandè pa reponn sou jenerasyon'), ki siy danje ou idantifye? (Chwazi tout ki aplike.)",
            options: [
              "Pa gen jenerasyon pwosesè egzat",
              "Foto estòk olye vrè aparèy la",
              "Pri a bay yon garanti 30 jou",
              "Peman kach sèlman san opsyon enspeksyon klè",
            ],
            correctIndexes: [0, 1, 3],
            explanation: "Manke jenerasyon, foto estòk, ak peman san enspeksyon klè se twa siy danje reyèl — Anons A pa mansyone garanti ditou.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen santi m gen konfyans pou evalye yon acha òdinatè kounye a." },
          { statement: "Mwen ta renmen plis pratik anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 13." },
        ],
      },
    ],
  },
  {
    id: "m13-l1",
    slug: "panse-tankou-yon-moun-ki-rezoud-pwoblem",
    moduleId: "m13",
    order: 1,
    titleHt: "Panse Tankou Yon Moun Ki Rezoud Pwoblèm",
    titleEn: "Think Like a Problem Solver",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Memorize ak aplike bouk rezoud-pwoblèm Jamezzi a (8 etap)",
      "Distenge sentòm yon pwoblèm de kòz li",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka aplike bouk rezoud-pwoblèm Jamezzi a (8 etap) pou nenpòt pwoblèm òdinatè, epi distenge yon sentòm de yon kòz.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Chak leson nan Modil 13 aplike menm **bouk rezoud-pwoblèm Jamezzi a**: 1) **Sispann epi li** — pa panike, li mesaj/sitiyasyon an kalmman. 2) **Dekri sentòm egzat la** — pa 'li pa mache', men 'ekran an rete nwa lè m peze bouton limyè a'. 3) **Mande sa ki chanje** — sa te fèt jis anvan pwoblèm nan kòmanse? 4) **Verifye kòz senp yo** — kouran, kab, paramèt debaz. 5) **Eseye YON SÈL aksyon san danje** — pa fè plizyè bagay anmenm tan. 6) **Teste** — èske aksyon an rezoud pwoblèm nan? 7) **Anrejistre rezilta a** — sa te mache oswa non? 8) **Eskalade lè sa nesesè** — mande èd si etap yo pa rezoud pwoblèm nan. Enpòtan: yon **sentòm** se sa OU wè (ekran nwa), pandan yon **kòz** se REZON ki fè sa rive (batri vid, kab pa konekte, elatriye) — de bagay diferan.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Sentòm (Symptom)",
            definition: "Sa ou wè oswa remake ki pa mache — pa rezon an.",
            example: "'Ekran an rete nwa' se yon sentòm — kòz la ka batri vid, kab pa konekte, oswa lòt bagay.",
          },
          {
            term: "Kòz (Cause)",
            definition: "Vrè rezon ki fè yon sentòm rive.",
            example: "Yon kòz posib pou ekran nwa: batri a vid — verifye kòz la anvan ou eseye rezoud li.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a yon pwoblèm òdinatè ou te genyen deja. Aplike bouk 8 etap la mantalman — ki nan etap yo ou te fè, e ki nan yo ou te sote?",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Eseye plizyè aksyon anmenm tan lè yon bagay pa mache, san ou pa sonje sa ou fè.",
          right: "Eseye YON SÈL aksyon a la fwa, epi teste — konsa ou konnen egzakteman sa ki rezoud pwoblèm nan.",
          why: "Si ou fè plizyè bagay anmenm tan epi pwoblèm nan rezoud, ou pa konnen ki aksyon ki te itil — sa fè w pa ka aprann pou pwochen fwa.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you help me apply a calm troubleshooting process to a computer problem I'm having, one step at a time, instead of just giving me a random fix to try?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle entènalize bouk rezoud-pwoblèm Jamezzi a pou itilize l chak fwa yon pwoblèm parèt.",
          objective: "Site tout uit etap yo nan lòd, epi eksplike diferans ant sentòm ak kòz ak yon egzanp pa w.",
          requiredSteps: [
            "Site uit etap bouk la nan lòd kòrèk",
            "Bay yon egzanp pèsonèl kote ou distenge sentòm de kòz",
          ],
          successCriteria: ["Ou site tout uit etap yo san manke okenn"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete uit etap bouk rezoud-pwoblèm Jamezzi a nan lòd kòrèk.",
            steps: [
              "Sispann epi li",
              "Dekri sentòm egzat la",
              "Mande sa ki chanje",
              "Verifye kòz senp yo",
              "Eseye yon sèl aksyon san danje",
              "Teste",
              "Anrejistre rezilta a",
              "Eskalade lè sa nesesè",
            ],
            correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
            explanation: "Sa a se bouk konplè a — swiv li nan lòd chak fwa pou rezoud pwoblèm san danje ak san konfizyon.",
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
    id: "m13-l2",
    slug: "rekomanse-etenn-domi-ak-fose-femen",
    moduleId: "m13",
    order: 2,
    titleHt: "Rekòmanse, Etenn, Dòmi, ak Fòse Fèmen",
    titleEn: "Restart, Shut Down, Sleep, and Force Quit",
    estimatedMinutes: 9,
    mode: "shared_steps",
    objectives: [
      "Distenge rekòmanse, etenn, dòmi, ak fòse fèmen",
      "Konprann kilè fòse fèmen apwopriye",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka distenge rekòmanse, etenn, dòmi, ak fòse fèmen, epi konnen kilè chak youn apwopriye.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Rekòmanse (restart)** etenn epi rimen òdinatè a — sa efase pwoblèm tanporè memwa/lojisyèl souvan. **Etenn (shut down)** koupe kouran konplètman. **Dòmi (sleep)** kenbe travay ou aktif men konsome mwens kouran — bon pou pòz kout. **Fòse fèmen (force quit)** fèmen yon aplikasyon ki bloke, lè fason nòmal la pa mache. **Kilè fòse fèmen apwopriye**: sèlman lè yon aplikasyon vrèman bloke (pa reponn ditou) — pa yon fason nòmal pou fèmen yon aplikasyon k ap mache byen. **Evite kenbe bouton pouvwa a** sof si tout lòt opsyon pa mache — sa ka koupe kouran brital san sovgade travay.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Fòse Fèmen (Force Quit)",
            definition: "Fèmen yon aplikasyon ki bloke lè fason nòmal la pa mache.",
            example: "Itilize fòse fèmen sèlman lè yon aplikasyon vrèman pa reponn ditou.",
          },
          {
            term: "Dòmi (Sleep)",
            definition: "Yon mòd ki kenbe travay ou aktif men konsome mwens kouran pase lè limen konplètman.",
            example: "Fèmen kouvèti laptop ou souvan mete l an dòmi otomatikman.",
          },
        ],
      },
      {
        id: "b4",
        type: "platform_steps",
        steps: {
          windows: [
            "Peze Ctrl+Alt+Delete epi chwazi 'Task Manager' pou fòse fèmen yon aplikasyon bloke",
            "Klike bouton Windows a epi chwazi ikòn pouvwa a pou Rekòmanse, Etenn, oswa Dòmi",
          ],
          mac: [
            "Peze Cmd+Option+Esc pou louvri 'Force Quit Applications'",
            "Klike meni Apple a epi chwazi Rekòmanse, Etenn, oswa Dòmi",
          ],
          recoveryNote:
            "Si menu nòmal la pa reponn ditou, sa vle di menm ekran an ka bloke — nan ka sa a sèlman, konsidere kenbe bouton pouvwa a.",
        },
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Kenbe bouton pouvwa a chak fwa yon aplikasyon lan, menm lè sa pa vrèman nesesè.",
          right: "Eseye fòse fèmen aplikasyon an dabò, epi rekòmanse — kenbe bouton pouvwa a se dènye rekou.",
          why: "Koupe kouran brital ka lakòz pèt travay ki pa sovgade, oswa menm domaj fichye nan ka ki ra.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What's the actual difference between restart, shut down, sleep, and force quit — and when should I use each one?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Yon aplikasyon rete bloke sou ekran ou epi pa reponn ditou.",
          objective: "Fòse fèmen aplikasyon bloke a, epi rekòmanse òdinatè a si sa nesesè.",
          requiredSteps: [
            "Itilize fòse fèmen pou aplikasyon bloke a",
            "Verifye si pwoblèm nan rezoud",
            "Rekòmanse òdinatè a si aplikasyon an rete pwoblèm",
          ],
          successCriteria: ["Aplikasyon bloke a fèmen san ou pa kenbe bouton pouvwa a"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
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
    id: "m13-l3",
    slug: "yon-aplikasyon-bloke-oswa-lan",
    moduleId: "m13",
    order: 3,
    titleHt: "Yon Aplikasyon Bloke oswa Lan",
    titleEn: "A Frozen or Slow Application",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Aplike bouk rezoud-pwoblèm nan pou yon aplikasyon bloke oswa lan",
      "Verifye si pwoblèm nan afekte yon sèl aplikasyon oswa tout sistèm nan",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rezoud yon aplikasyon bloke oswa lan lè ou swiv yon sekans kalm: tann, verifye, fèmen, rouvri, mete ajou, rekòmanse.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè yon aplikasyon bloke oswa lan, swiv sekans lan: 1) **Tann** yon ti moman — pafwa aplikasyon an ap trete yon bagay lou. 2) **Verifye si se SÈLMAN yon aplikasyon** ki afekte, oswa tout òdinatè a lan. 3) **Fèmen/fòse fèmen** aplikasyon an si tann pa rezoud pwoblèm nan. 4) **Rouvri** l. 5) Verifye si li bezwen yon **mizajou**. 6) **Rekòmanse** òdinatè a si pwoblèm nan pèsiste. Panse tou a **konsyans estokaj ak memwa** — yon òdinatè ki gen estokaj/memwa prèske plen ka fè aplikasyon yo mache lan oswa bloke pi souvan.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Verifye Yon Sèl Aplikasyon (Isolate the App)",
            definition: "Konfime si pwoblèm nan afekte SÈLMAN yon aplikasyon, oswa tout sistèm nan.",
            example: "Louvri yon lòt aplikasyon pou wè si li tou lan — sa ede w idantifye si pwoblèm nan jeneral.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a yon fwa yon aplikasyon te bloke oswa lan pou ou. Aplike sekans lan mantalman: tann, verifye, fèmen, rouvri, mete ajou, rekòmanse — ki etap ki te rezoud li?",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Rekòmanse tout òdinatè a imedyatman chak fwa yon sèl aplikasyon lan.",
          right: "Verifye si se sèlman yon aplikasyon ki afekte, epi eseye fèmen/rouvri l anvan ou rekòmanse tout sistèm nan.",
          why: "Rekòmanse tout sistèm nan pa toujou nesesè epi fè w pèdi tan si se sèlman yon aplikasyon ki gen pwoblèm.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! One specific application keeps freezing on me. What's a calm sequence of things to try before restarting the whole computer?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Yon aplikasyon espesifik kontinye bloke oswa mache lan pou ou.",
          objective: "Swiv sekans konplè a pou idantifye ak rezoud pwoblèm nan.",
          requiredSteps: [
            "Tann epi verifye si se sèlman yon aplikasyon ki afekte",
            "Fèmen/rouvri aplikasyon an",
            "Verifye si yon mizajou disponib",
          ],
          successCriteria: ["Ou swiv sekans lan nan lòd san panike"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kòrèk pou rezoud yon aplikasyon bloke oswa lan.",
            steps: ["Tann yon ti moman", "Verifye si se sèlman yon aplikasyon", "Fèmen epi rouvri aplikasyon an", "Rekòmanse òdinatè a si pwoblèm nan pèsiste"],
            correctOrder: [0, 1, 2, 3],
            explanation: "Sekans kalm sa a evite rekòmanse tout sistèm nan san rezon lè pwoblèm nan sèlman yon sèl aplikasyon.",
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
    id: "m13-l4",
    slug: "yon-odinate-lan",
    moduleId: "m13",
    order: 4,
    titleHt: "Yon Òdinatè Lan",
    titleEn: "A Slow Computer",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Idantifye kòz komen yon òdinatè lan",
      "Rekonèt fo 'aplikasyon netwayaj' ki pwomèt twòp",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka idantifye kòz komen yon òdinatè lan, epi rekonèt fo 'aplikasyon netwayaj' ki pwomèt rezilta ki pa reyalis.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Kòz komen yon òdinatè lan: **twòp aplikasyon k ap louvri otomatikman lè ou limen** (startup apps), **twòp aplikasyon/onglè louvri anmenm tan**, **estokaj ba**, **mizajou ki manke**, **chalè twò wo**, ak pafwa **siy malveyan** (aktivite etranj, aplikasyon ou pa rekonèt). Fè atansyon a **fo aplikasyon 'netwayaj (cleaner)'** ki pwomèt fè òdinatè a '10 fwa pi rapid' — anpil nan yo se yo menm ki fè òdinatè a pi lan, oswa pi mal, enstale malveyan. Yon òdinatè lan pa toujou vle di li fini — souvan se yon konbinezon senp faktè ki fasil pou verifye youn pa youn.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Aplikasyon Startup (Startup Apps)",
            definition: "Pwogram ki louvri otomatikman chak fwa òdinatè a limen, ki ka ralanti demaraj.",
            example: "Verifye lis aplikasyon startup ou epi dezaktive sa ou pa bezwen chak fwa.",
          },
          {
            term: "Fo Aplikasyon Netwayaj (Fake Cleaner App)",
            definition: "Yon aplikasyon ki pwomèt vitès dramatik san rezon, souvan yo menm ki kreye pwoblèm.",
            example: "Evite telechaje yon 'cleaner' ki pwomèt fè òdinatè a '10 fwa pi rapid' — se souvan yon eskrokri.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Verifye estokaj òdinatè ou — konbyen espas ki rete? Si li ba, sa ka youn nan rezon òdinatè a mache lan.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Evite telechaje 'aplikasyon netwayaj' ki pwomèt rezilta dramatik san sous verifye",
          "Si ou remake aktivite etranj oswa aplikasyon ou pa rekonèt, sispèk yon posib malveyan",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My computer has gotten noticeably slower over the past few weeks. What are the most common, non-alarming reasons for that?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Òdinatè ou vin pi lan pase anvan.",
          objective: "Verifye omwen twa kòz komen (estokaj, mizajou, aplikasyon startup) san telechaje okenn 'cleaner'.",
          requiredSteps: [
            "Verifye espas estokaj ki rete",
            "Verifye si gen mizajou ki tann",
            "Gade lis aplikasyon startup ou",
          ],
          successCriteria: ["Ou verifye omwen twa kòz posib san itilize yon fo aplikasyon netwayaj"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki kòz sa yo se rezon komen ak lejitim yon òdinatè lan? (Chwazi tout ki aplike.)",
            options: [
              "Estokaj prèske plen",
              "Twòp aplikasyon startup",
              "Koulè fon ekran an twò klere",
              "Mizajou sistèm ki manke",
            ],
            correctIndexes: [0, 1, 3],
            explanation: "Estokaj, aplikasyon startup, ak mizajou ki manke se twa kòz komen — koulè fon ekran an pa afekte pèfòmans.",
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
    id: "m13-l5",
    slug: "pa-gen-entenet",
    moduleId: "m13",
    order: 5,
    titleHt: "Pa Gen Entènèt",
    titleEn: "No Internet",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Aplike yon tès kouch pa kouch pou pwoblèm entènèt",
      "Konprann ikòn Wi-Fi la pa prèv aksè entènèt reyèl",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka swiv yon tès kouch pa kouch (aparèy, routè, founisè, sit) lè pa gen entènèt, epi konprann ikòn Wi-Fi la pa prèv aksè entènèt reyèl.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè pa gen entènèt, teste **kouch pa kouch**: 1) **Aparèy ou** — èske Wi-Fi aktive? 2) **Routè** — limyè yo nòmal? 3) **Founisè** — gen yon pàn sèvis lakay founisè a? 4) **Sit espesifik** — se sèlman yon sit ki pa mache, oswa tout sit? **Ikòn Wi-Fi la ki montre 'konekte' PA PRÈV ou gen aksè entènèt reyèl** — ou ka konekte sou Wi-Fi routè a men routè a limenm pa gen entènèt (yon pwoblèm founisè). Se poutèt sa tès kouch pa kouch la enpòtan — li ede w izole ki NIVO pwoblèm nan ye.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Tès Kouch Pa Kouch (Layered Test)",
            definition: "Verifye chak nivo (aparèy, routè, founisè, sit) youn pa youn pou izole yon pwoblèm entènèt.",
            example: "Si aparèy ou konekte men lòt aparèy tou pa gen entènèt, pwoblèm nan gen chans nan routè oswa founisè a.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a dènye fwa entènèt ou pa t mache. Aplike tès kouch pa kouch la mantalman — nan ki nivo pwoblèm nan te ye?",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Wè ikòn Wi-Fi 'konekte' epi sipoze pwoblèm nan pa ka nan koneksyon entènèt.",
          right: "Konprann ikòn Wi-Fi la montre koneksyon LOKAL sèlman — sa pa garanti aksè entènèt reyèl.",
          why: "Konfizyon sa a fè moun chèche pwoblèm nan move kote (nan yon sit oswa aplikasyon) pandan se routè/founisè a ki gen pwoblèm.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My Wi-Fi icon shows connected but no websites are loading. What's a step-by-step way to figure out which layer the problem is in?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou senmile yon sitiyasyon kote pa gen entènèt sou òdinatè ou.",
          objective: "Aplike tès kouch pa kouch la pou izole ki nivo pwoblèm nan ye.",
          requiredSteps: [
            "Verifye aparèy ou (Wi-Fi aktive?)",
            "Verifye routè a (limyè nòmal?)",
            "Teste yon lòt sit pou konfime si se yon sit espesifik oswa tout entènèt",
          ],
          successCriteria: ["Ou izole nivo pwoblèm nan lojikman"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Ikòn Wi-Fi ou montre 'konekte' men okenn sit pa louvri. Ki sa sa vle di?",
            options: [
              "Ou gen aksè entènèt reyèl garanti",
              "Ou konekte lokalman sou routè a, men sa pa garanti aksè entènèt reyèl",
              "Pwoblèm nan toujou nan aparèy ou",
              "Ou dwe achte yon nouvo òdinatè",
            ],
            correctIndex: 1,
            explanation: "Ikòn Wi-Fi la montre koneksyon lokal sèlman — routè a ka pa gen entènèt reyèl menm si aparèy ou konekte sou li.",
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
    id: "m13-l6",
    slug: "pa-gen-son-kamera-oswa-mikwofon",
    moduleId: "m13",
    order: 6,
    titleHt: "Pa Gen Son, Kamera, oswa Mikwofòn",
    titleEn: "No Sound, Camera, or Microphone",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Rezoud pwoblèm son, kamera, oswa mikwofòn ki pa mache",
      "Verifye pèmisyon aplikasyon ak vòlè fizik kamera",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rezoud pwoblèm son, kamera, oswa mikwofòn ki pa mache lè ou verifye mit, volim, aparèy chwazi, pèmisyon, ak koneksyon.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè son, kamera, oswa mikwofòn pa mache, verifye nan lòd: **mit (mute)** aktive pa aksidan? **volim** ba oswa fèmen? **bon aparèy chwazi** nan paramèt (pa egzanp, opalè olye kaskèt)? **pèmisyon** aplikasyon an genyen pou aksede kamera/mikwofòn? gen yon **vòlè fizik (physical shutter)** ki kouvri kamera a? **paramèt aplikasyon** espesifik la kòrèk? epi **rekonekte** aparèy la si li Bluetooth oswa USB. Swiv lis sa a nan lòd olye eseye tout bagay anmenm tan.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Vòlè Fizik (Physical Shutter)",
            definition: "Yon ti kouvèti fizik sou kèk kamera òdinatè ki bloke vi kamera a menm si li aktive nan lojisyèl.",
            example: "Verifye vòlè fizik kamera a pa fèmen si videyo ou parèt nwa pandan yon apèl.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Verifye paramèt son/videyo òdinatè ou kounye a. Idantifye ki aparèy ki chwazi pou kamera, mikwofòn, ak opalè.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Sipoze mikwofòn/kamera a domaje san verifye mit, pèmisyon, ak aparèy chwazi dabò.",
          right: "Swiv lis verifikasyon senp la (mit, volim, aparèy chwazi, pèmisyon) anvan ou konkli gen yon pwoblèm materyèl.",
          why: "Pifò pwoblèm son/kamera se yon paramèt senp, pa yon domaj materyèl reyèl.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My microphone isn't picking up my voice during a call. What's a calm checklist to go through before assuming it's broken?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Son, kamera, oswa mikwofòn ou sispann mache pandan yon aktivite.",
          objective: "Swiv lis verifikasyon konplè a pou idantifye ak rezoud pwoblèm nan.",
          requiredSteps: [
            "Verifye mit ak volim",
            "Verifye bon aparèy chwazi nan paramèt",
            "Verifye pèmisyon aplikasyon an",
          ],
          successCriteria: ["Ou swiv lis la nan lòd san panike"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "order_steps",
            prompt: "Mete etap yo nan lòd kòrèk pou rezoud yon pwoblèm son/kamera/mikwofòn.",
            steps: ["Verifye mit ak volim", "Verifye bon aparèy chwazi nan paramèt", "Verifye pèmisyon aplikasyon an", "Rekonekte aparèy la si sa nesesè"],
            correctOrder: [0, 1, 2, 3],
            explanation: "Kòmanse ak verifikasyon senp yo (mit, volim) anvan ou ale nan pèmisyon ak rekoneksyon.",
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
    id: "m13-l7",
    slug: "pwoblem-enprimant",
    moduleId: "m13",
    order: 7,
    titleHt: "Pwoblèm Enprimant",
    titleEn: "Printer Problems",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Rezoud pwoblèm enprimant komen nan yon sekans lojik",
      "Konnen kilè pou retire/ajoute enprimant lan san danje",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rezoud pwoblèm enprimant komen (kouran, koneksyon, liy datant, papye, lank) nan yon sekans lojik.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè enprimant lan pa mache, verifye nan lòd: **kouran** (limen?), **koneksyon** (Wi-Fi/kab byen konekte?), **bon enprimant chwazi** (si ou gen plizyè), **liy datant (queue)** blòke pa yon ansyen travay ki echwe?, **papye** disponib?, **lank/toner** ase?, epi **rekòmanse** enprimant lan ak/oswa òdinatè a. Si anyen pa mache, **retire epi ajoute enprimant lan ankò**, men fè sa **sèlman lè yon gid ofisyèl mennen w**, pa okazyonèlman.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Liy Datant Blòke (Stuck Queue)",
            definition: "Yon ansyen travay enprime ki echwe ki anpeche nouvo travay yo mache.",
            example: "Si enprimant lan pa reponn, gade liy datant lan pou wè si yon ansyen travay bloke l.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Si ou gen aksè a yon enprimant, verifye liy datant li pou wè si gen yon travay ki tann depi lontan.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Retire epi ajoute enprimant lan ankò imedyatman, san eseye etap senp yo dabò.",
          right: "Swiv sekans lan (kouran, koneksyon, liy datant, papye, lank) anvan ou retire/ajoute enprimant lan.",
          why: "Pifò pwoblèm enprimant se yon bagay senp (liy datant blòke, papye fini) — retire/ajoute a se yon dènye rekou.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My printer isn't responding when I try to print. What's a step-by-step way to figure out what's wrong before I do anything drastic?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou senmile yon sitiyasyon kote enprimant lan pa reponn lè ou eseye enprime.",
          objective: "Swiv sekans konplè a pou idantifye ak rezoud pwoblèm nan.",
          requiredSteps: [
            "Verifye kouran ak koneksyon enprimant lan",
            "Gade liy datant pou yon travay blòke",
            "Verifye papye ak lank/toner",
          ],
          successCriteria: ["Ou swiv sekans lan nan lòd lojik"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou voye yon dokiman pou enprime men anyen pa sòti, epi enprimant lan sanble limen nòmalman. Ki premye bagay ou dwe verifye?",
            options: [
              "Retire epi ajoute enprimant lan ankò imedyatman",
              "Verifye liy datant pou yon travay blòke, epi papye/lank",
              "Achte yon nouvo enprimant",
              "Rekòmanse tout rezo lakay ou",
            ],
            correctIndex: 1,
            explanation: "Verifye liy datant ak founiti (papye/lank) yo se premye etap senp anvan ou konsidere aksyon pi dramatik.",
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
    id: "m13-l8",
    slug: "estokaj-plen-sa-pou-fe",
    moduleId: "m13",
    order: 8,
    titleHt: "Estokaj Plen: Sa Pou Fè",
    titleEn: "Storage Full",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Aplike yon sekans san danje pou libere estokaj",
      "Evite efase dosye sistèm san w pa rekonèt yo",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka libere estokaj san danje lè ou verifye vi estokaj la, retire fichye ou pa bezwen, ak dezenstale aplikasyon san touche dosye sistèm.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè estokaj plen, aji nan lòd: 1) **Gade vi estokaj** la (paramèt ki montre ki kategori konsome plis espas). 2) **Retire fichye ou konnen ou pa bezwen ankò** (ansyen enstalatè, doub). 3) **Vide Poubèl/Recycle Bin avèk atansyon** — verifye anvan. 4) **Deplase fichye pèsonèl** (foto, videyo) sou cloud oswa yon disk ekstèn. 5) **Dezenstale aplikasyon ou pa itilize ankò**. **Pa janm efase dosye sistèm** ou pa rekonèt — yo souvan nesesè pou òdinatè a fonksyone.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Vi Estokaj (Storage View)",
            definition: "Yon paramèt ki montre ki kategori fichye (aplikasyon, foto, sistèm) konsome plis espas.",
            example: "Gade vi estokaj ou anvan ou deside ki fichye pou retire — sa montre kote pi gwo espas la ye.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Louvri vi estokaj òdinatè ou (nan Paramèt). Idantifye ki kategori konsome plis espas.",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa janm efase yon dosye ou pa rekonèt ki sanble fè pati sistèm nan",
          "Verifye Poubèl/Recycle Bin anvan ou vide l pou tout tan",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! My computer says storage is almost full. What's a safe order of things to try to free up space without risking system files?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou resevwa yon mesaj ki di estokaj ou prèske plen.",
          objective: "Libere estokaj lè ou swiv sekans san danje a, san touche okenn dosye sistèm.",
          requiredSteps: [
            "Gade vi estokaj la pou idantifye pi gwo kategori",
            "Retire fichye ou konnen ou pa bezwen ankò",
            "Dezenstale yon aplikasyon ou pa itilize ankò",
          ],
          successCriteria: ["Espas lib ogmante san touche dosye sistèm"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou ap chèche libere estokaj epi ou wè yon dosye ak yon non teknik ou pa rekonèt ditou. Ki sa ou dwe fè?",
            options: [
              "Efase l paske li pran espas",
              "Kite l — pa efase dosye sistèm ou pa rekonèt",
              "Chanje non li",
              "Deplase l sou yon kle USB",
            ],
            correctIndex: 1,
            explanation: "Dosye sistèm ou pa rekonèt yo souvan nesesè pou òdinatè a fonksyone — pa efase yo.",
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
    id: "m13-l9",
    slug: "mizajou-ak-woutin-antretyen-debaz",
    moduleId: "m13",
    order: 9,
    titleHt: "Mizajou ak Woutin Antretyen Debaz",
    titleEn: "Updates and Basic Maintenance Routine",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Etabli yon woutin antretyen mansyèl senp",
      "Sovgade anvan gwo mizajou",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka etabli yon woutin antretyen mansyèl senp ki gen ladan mizajou sistèm/aplikasyon ak yon sovgad anvan gwo mizajou.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Antretyen debaz gen ladan: **mizajou sistèm opere**, **mizajou aplikasyon**, ak **rekòmanse** apre gwo mizajou. **Sovgade travay ou anvan yon GWO mizajou** — pafwa mizajou yo mande plizyè minit epi ka gen ti pwoblèm ra. Yon **verifikasyon mansyèl** senp (estokaj, mizajou, sekirite kont) ka evite anpil pwoblèm pita. Fè atansyon ak **konsyans aparèy ki pa sipòte ankò** — kèk ansyen òdinatè pa ka resevwa dènye mizajou sistèm, ki ka ogmante risk sekirite.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Woutin Antretyen Mansyèl (Monthly Maintenance Routine)",
            definition: "Yon lis verifikasyon senp ou fè chak mwa: estokaj, mizajou, ak sekirite kont.",
            example: "Chak premye jou mwa a, verifye estokaj, mizajou, ak si kont ou toujou solid.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Verifye si sistèm opere ak aplikasyon prensipal ou yo ajou. Si ou wè yon mizajou tann, planifye lè ou pral fè l.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Fè yon gwo mizajou san sovgade travay ou anvan.",
          right: "Sovgade travay enpòtan ou anvan yon gwo mizajou sistèm opere.",
          why: "Menm si sa ra, mizajou yo ka pran plis tan pase espere oswa gen yon ti pwoblèm — yon sovgad pwoteje travay ou.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you help me build a simple monthly computer maintenance checklist I can actually stick to?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle etabli yon woutin antretyen senp ou ka swiv chak mwa.",
          objective: "Kreye yon woutin mansyèl ak omwen twa aksyon (mizajou, estokaj, sekirite).",
          requiredSteps: [
            "Verifye mizajou sistèm ak aplikasyon",
            "Verifye estokaj ki rete",
            "Verifye sekirite kont ou (modpas, 2FA)",
          ],
          successCriteria: ["Woutin an gen omwen twa aksyon klè ou ka repete chak mwa"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Poukisa li bon pratik pou sovgade travay ou anvan yon GWO mizajou sistèm opere?",
            options: [
              "Paske mizajou toujou efase tout fichye",
              "Paske mizajou yo ka pran tan epi gen ti risk ra pwoblèm — sovgad la yon pwoteksyon",
              "Paske se yon obligasyon legal",
              "Sa pa gen okenn rezon reyèl",
            ],
            correctIndex: 1,
            explanation: "Sovgade anvan yon gwo mizajou pwoteje travay ou si yon bagay pran plis tan oswa gen yon ti pwoblèm ra.",
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
    id: "m13-l10",
    slug: "mesaj-ere-ak-jwenn-ed",
    moduleId: "m13",
    order: 10,
    titleHt: "Mesaj Erè ak Jwenn Èd",
    titleEn: "Error Messages and Getting Help",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Li ak anrejistre yon mesaj erè egzat",
      "Chèche/mande èd yon fason ki bay pi bon repons",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka li tèks egzat yon mesaj erè, kaptire l san danje, epi chèche oswa mande èd yon fason ki bay pi bon chans jwenn yon repons itil.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè yon mesaj erè parèt: **li tèks EGZAK la** — pa rezime l nan tèt ou, mo yo enpòtan. **Pran yon screenshot san danje** (verifye pa gen modpas/enfòmasyon sansib vizib nan screenshot la). **Chèche mesaj EGZAK la** ansanm ak kontèks aparèy ou (mak/modèl, sistèm opere). **Mande yon AI san danje** — dekri mesaj la ak kontèks, san pataje enfòmasyon sansib. **Kontakte sipò** si sa nesesè, epi **dekri sa ou deja eseye** — sa ede sipò a ede w pi vit, olye repete menm bagay ou deja fè.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Tèks Egzat (Exact Text)",
            definition: "Mo egzat yon mesaj erè montre, san rezime oswa chanje.",
            example: "Kopye tèks egzat mesaj erè a olye di 'li te gen yon erè bizè'.",
          },
        ],
      },
      {
        id: "b4",
        type: "safety",
        reminders: [
          "Verifye yon screenshot pa montre modpas oswa enfòmasyon sansib anvan ou pataje l",
          "Pa pataje enfòmasyon sansib menm lè ou mande èd yon AI oswa yon moun sou yon mesaj erè",
        ],
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Si ou gen yon mesaj erè ou sonje, eseye ekri tèks egzat li. Si ou pa gen youn, panse a kijan ou ta dekri youn ak kontèks konplè.",
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I got this exact error message: [paste the exact text]. My device is [describe device/OS]. Can you help me understand what it might mean and what to try first?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou wè yon mesaj erè (reyèl oswa senmile) sou òdinatè ou.",
          objective: "Kaptire tèks egzat la san danje, epi eksplike kijan ou ta chèche/mande èd sou li.",
          requiredSteps: [
            "Ekri tèks egzat mesaj erè a",
            "Site kontèks aparèy ou (mak/modèl, sistèm opere)",
            "Eksplike kijan ou ta mande èd (chèche, AI, oswa sipò) san danje",
          ],
          successCriteria: ["Ou itilize tèks egzat, pa yon rezime vag"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou vle chèche sou entènèt pou konprann yon mesaj erè. Ki apwòch ki pi bon chans bay yon bon repons?",
            options: [
              "Chèche 'òdinatè m gen yon pwoblèm'",
              "Chèche tèks EGZAK mesaj erè a ansanm ak kontèks aparèy ou",
              "Pa chèche ditou, jis rekòmanse òdinatè a",
              "Chèche non moun ki fè òdinatè a sèlman",
            ],
            correctIndex: 1,
            explanation: "Tèks egzat ak kontèks aparèy bay rezilta rechèch pi presi ak itil pase yon rezime vag.",
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
    id: "m13-l11",
    slug: "konnen-kile-pou-sispann",
    moduleId: "m13",
    order: 11,
    titleHt: "Konnen Kilè Pou Sispann",
    titleEn: "Know When to Stop",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Rekonèt sitiyasyon ki mande sispann ak chèche èd pwofesyonèl imedyatman",
      "Konprann limit konpetans pèsonèl nan rezoud pwoblèm",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rekonèt sitiyasyon kote ou dwe sispann imedyatman epi chèche èd pwofesyonèl, olye kontinye eseye rezoud pwoblèm nan poukont ou.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sispann epi chèche èd pwofesyonèl IMEDYATMAN pou: **batri ki anfle**, **odè brile**, **likid anndan aparèy la**, **konektè pouvwa domaje**, **chòk elektrik repete**, **done presye an danje** (ou pa gen backup ak fichye a ka pèdi), **swpèk vòl kont**, **reparasyon sistèm ki depase konpetans ou**, ak **demontaj materyèl**. Se PA yon echèk pou sispann — se yon deside entelijan. Bouk rezoud-pwoblèm Jamezzi a li menm gen 'eskalade lè sa nesesè' kòm dènye etap — sa vle di **konnen kilè pou sispann fè PATI menm demach lan**, pa yon opsyon apa.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Eskalade (Escalate)",
            definition: "Pase yon pwoblèm bay yon moun ak plis konpetans oswa zouti, olye kontinye poukont ou.",
            example: "Apre ou fin eseye etap san danje yo, eskalade bay yon pwofesyonèl si pwoblèm nan pèsiste.",
          },
        ],
      },
      {
        id: "b4",
        type: "safety",
        reminders: [
          "Sispann imedyatman ak chèche èd pwofesyonèl pou yon batri anfle, odè brile, oswa likid anndan aparèy la",
          "Sispann sispèk vòl kont, epi chanje modpas ou soti nan yon aparèy ou fè konfyans",
          "Konnen kilè pou sispann se yon fòs, pa yon echèk",
        ],
      },
      {
        id: "b5",
        type: "practice",
        instructions:
          "Panse a lis sitiyasyon 'sispann imedyatman' yo. Ki nan yo ou te deja rankontre, epi èske ou te sispann kòrèkteman?",
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! How do I know the difference between a computer problem I can safely try to fix myself and one where I should stop and get professional help right away?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou pral revize lis sitiyasyon 'sispann imedyatman' yo pou entèriorize yo.",
          objective: "Site tout sitiyasyon ki mande sispann imedyatman, epi eksplike poukisa 'sispann' se yon pati nòmal bouk rezoud-pwoblèm nan.",
          requiredSteps: [
            "Site omwen sis sitiyasyon ki mande sispann imedyatman",
            "Eksplike poukisa sispann se yon fòs, pa yon echèk",
          ],
          successCriteria: ["Ou site sitiyasyon yo kòrèkteman san manke sa ki pi grav yo"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Nan ki sitiyasyon sa yo ou dwe sispann imedyatman epi chèche èd pwofesyonèl? (Chwazi tout ki aplike.)",
            options: [
              "Ou wè yon batri ki anfle",
              "Yon aplikasyon lan yon ti kras",
              "Ou santi yon odè brile ki soti nan aparèy la",
              "Ou remake likid ki antre anndan aparèy la",
            ],
            correctIndexes: [0, 2, 3],
            explanation: "Batri anfle, odè brile, ak likid anndan aparèy la se sitiyasyon ijan ki mande sispann imedyatman — yon aplikasyon lan pa yon ijans.",
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
    id: "m13-l12",
    slug: "misyon-dyagnostike-anvan-ou-klike",
    moduleId: "m13",
    order: 12,
    titleHt: "Misyon: Dyagnostike Anvan Ou Klike",
    titleEn: "Module Mission: Diagnose Before You Click",
    estimatedMinutes: 15,
    mode: "universal",
    objectives: [
      "Konbine tout konpetans Modil 13 nan yon senaryo dyagnostik brancha",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre misyon sa a, ou ka konplete yon senaryo brancha ak yon òdinatè lan, son ki manke, oswa pa gen entènèt, anrejistre chak tès san danje, epi chwazi bon pwen eskalasyon an.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Sa se misyon final Modil 13 la. Ou pral aplike bouk rezoud-pwoblèm Jamezzi a nan yon senaryo reyèl: chwazi YON pwoblèm (òdinatè lan, son ki manke, oswa pa gen entènèt), epi mennen tèt ou nan chak etap bouk la san sote okenn.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario: "Chwazi youn nan twa senaryo yo: 1) Òdinatè ou vin lan sibitman. 2) Son sispann mache pandan yon apèl videyo. 3) Wi-Fi montre konekte men pa gen sit ki louvri.",
          objective: "Aplike bouk rezoud-pwoblèm Jamezzi a konplètman pou senaryo ou chwazi a, jiskaske ou rezoud li oswa idantifye bon pwen eskalasyon an.",
          requiredSteps: [
            "Dekri sentòm egzat la (pa yon rezime vag)",
            "Site sa ki te chanje anvan pwoblèm nan kòmanse",
            "Verifye kòz senp yo epi eseye YON SÈL aksyon a la fwa",
            "Anrejistre rezilta chak tès",
            "Idantifye si ou rezoud pwoblèm nan oswa si ou dwe eskalade",
          ],
          successCriteria: [
            "Ou swiv bouk la nan lòd san sote okenn etap",
            "Ou anrejistre rezilta chak tès, pa sèlman rezilta final la",
          ],
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak pwoblèm ak premye bagay ou ta verifye.",
            pairs: [
              { term: "Òdinatè lan", meaning: "Aplikasyon startup ak estokaj ki rete" },
              { term: "Son ki manke", meaning: "Mit ak volim" },
              { term: "Pa gen entènèt", meaning: "Wi-Fi aktive sou aparèy ou" },
            ],
            explanation: "Chak tip pwoblèm gen yon premye verifikasyon senp ki souvan rezoud li san bezwen ale pi lwen.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen santi m gen konfyans total pou dyagnostike pwoblèm òdinatè kounye a." },
          { statement: "Mwen ta renmen plis pratik anvan mwen kontinye." },
          { statement: "Mwen pare pou Modil 14." },
        ],
      },
    ],
  },
  {
    id: "m14-l1",
    slug: "bati-yon-sistem-oganizasyon-dijital-senp",
    moduleId: "m14",
    order: 1,
    titleHt: "Bati Yon Sistèm Òganizasyon Dijital Senp",
    titleEn: "Build a Simple Digital Organization System",
    estimatedMinutes: 11,
    mode: "universal",
    objectives: [
      "Kreye yon sistèm dosye dirab pou tout kategori lavi dijital ou",
      "Etabli yon woutin senp pou Bwat Resevwa ak Downloads",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka kreye yon sistèm dosye dirab ki kouvri tout kategori lavi dijital ou, ak yon woutin senp pou kenbe Bwat Resevwa ak Downloads pwòp.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Yon sistèm dijital dirab separe lavi ou an kategori klè: **pèsonèl**, **travay/lekòl**, **finans**, **dokiman**, ak **foto**. Chak kategori merite yon dosye prensipal apa, ak sou-dosye si sa nesesè. Itilize **non fichye ki gen sans** (ou aprann sa nan Modil 4) pou chak dosye. Etabli yon **woutin Bwat Resevwa ak Downloads**: pa kite yo vin depo pèmanan — deplase fichye enpòtan yo nan bon dosye regilyèman. Sa a se yon konbinezon tout sa ou aprann nan Modil 4 (fichye/dosye), Modil 8 (imèl), ak Modil 9 (cloud/backup) nan yon sèl sistèm ou ka kenbe alontèm.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Sistèm Dijital Dirab (Durable Digital System)",
            definition: "Yon fason òganize fichye/imèl ou ki fasil pou kenbe alontèm, pa sèlman pou yon jou.",
            example: "Yon sistèm dirab gen dosye klè pou pèsonèl, travay, finans, dokiman, ak foto.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Gade sistèm dosye aktyèl ou. Idantifye si ou gen dosye klè pou chak kategori: pèsonèl, travay/lekòl, finans, dokiman, foto.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Kite tout fichye mele nan Downloads oswa Desktop, san yon sistèm klè.",
          right: "Etabli dosye prensipal klè pou chak kategori, epi deplase fichye Downloads regilyèman.",
          why: "San yon sistèm klè, ou pèdi tan chèche fichye epi ou pi vilnerab pou pèdi enfòmasyon enpòtan.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I want to set up a simple, durable folder system for my personal files, work/school, finances, documents, and photos. Can you help me think through a structure?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle bati yon sistèm dijital ou ka kenbe alontèm, pa sèlman pou yon jou.",
          objective: "Kreye dosye prensipal pou chak senk kategori yo, epi netwaye Downloads ou.",
          requiredSteps: [
            "Kreye dosye prensipal pou pèsonèl, travay/lekòl, finans, dokiman, ak foto",
            "Deplase fichye enpòtan ki nan Downloads nan bon dosye yo",
          ],
          successCriteria: ["Tout senk kategori gen yon dosye klè", "Downloads pa gen fichye enpòtan ki rete san klase"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki kategori sa yo yon sistèm dijital dirab ta dwe kouvri? (Chwazi tout ki aplike.)",
            options: ["Pèsonèl", "Travay/Lekòl", "Finans", "Koulè fon ekran ou"],
            correctIndexes: [0, 1, 2],
            explanation: "Pèsonèl, travay/lekòl, ak finans se twa kategori debaz — koulè fon ekran pa gen rapò ak òganizasyon fichye.",
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
    id: "m14-l2",
    slug: "kreye-woutin-dijital-semenn-ak-chak-mwa-ou",
    moduleId: "m14",
    order: 2,
    titleHt: "Kreye Woutin Dijital Semenn ak Chak Mwa Ou",
    titleEn: "Create Your Weekly and Monthly Digital Routine",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Etabli yon woutin dijital chak semèn",
      "Etabli yon woutin dijital chak mwa",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka etabli yon woutin dijital chak semèn ak chak mwa ki kenbe sistèm ou an sante san bezwen efò dramatik.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Woutin chak semèn**: òganize Downloads, revize mesaj enpòtan, sovgade travay aktyèl ou. **Woutin chak mwa**: mizajou sistèm/aplikasyon, verifye estokaj, revize sekirite kont (modpas, 2FA), ak konfime backup ou toujou mache (teste restore). Yon woutin ki senp ak REGULYE toujou pi efikas pase yon gwo netwayaj yon sèl fwa pa ane.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Woutin Regilye (Regular Routine)",
            definition: "Yon seri aksyon senp ou repete chak semèn/mwa, pito pase yon gwo efò yon sèl fwa.",
            example: "Yon woutin chak semèn 10 minit pi efikas pase yon netwayaj 3 èdtan chak sis mwa.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Ekri yon woutin chak semèn (twa aksyon) ak yon woutin chak mwa (kat aksyon) ou ka reyèlman swiv.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Kite tout antretyen pou 'yon jou' ki pa janm rive, jiskaske gen yon gwo pwoblèm.",
          right: "Etabli yon woutin senp ak regilye ki mande sèlman kèk minit chak fwa.",
          why: "Yon woutin regilye evite pwoblèm gwo (estokaj plen, kont vilnerab, backup ki pa mache) anvan yo rive grav.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! Can you help me design a realistic weekly and monthly digital maintenance routine that I'll actually stick to?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle kenbe sistèm dijital ou an sante san yon gwo efò dramatik.",
          objective: "Etabli epi ekri yon woutin chak semèn ak yon woutin chak mwa.",
          requiredSteps: [
            "Ekri twa aksyon pou woutin chak semèn ou",
            "Ekri kat aksyon pou woutin chak mwa ou",
          ],
          successCriteria: ["Woutin yo reyalis epi ou ka swiv yo alontèm"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "match_term",
            prompt: "Matche chak aksyon ak lè li ta dwe fèt.",
            pairs: [
              { term: "Òganize Downloads", meaning: "Chak semèn" },
              { term: "Verifye estokaj ak sekirite kont", meaning: "Chak mwa" },
              { term: "Sovgade travay aktyèl", meaning: "Chak semèn" },
            ],
            explanation: "Aksyon rapid yo fèt chak semèn; verifikasyon pi konplè yo fèt chak mwa.",
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
    id: "m14-l3",
    slug: "itilize-ai-kom-yon-tite-odinate",
    moduleId: "m14",
    order: 3,
    titleHt: "Itilize AI Kòm Yon Titè Òdinatè",
    titleEn: "Use AI as a Computer Tutor",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Rekonèt bon itilizasyon AI kòm zouti aprantisaj",
      "Konprann limit klè pou itilizasyon AI an sekirite",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka itilize yon AI kòm yon titè òdinatè pou bon rezon, epi rekonèt limit klè ki kenbe itilizasyon an san danje.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Bon itilizasyon AI** pandan tout kou sa a: eksplike yon tèm ou pa konprann, retape yon mesaj erè nan yon langaj pi senp, kreye yon lis verifikasyon rezoud-pwoblèm, konpare de espesifikasyon òdinatè, oswa pratike fason ou ekri yon imèl. **Limit ki PA JANM chanje**: **pa pataje modpas, kòd verifikasyon, oswa enfòmasyon sansib** ak yon AI, **toujou verifye enstriksyon** yon AI ba ou anvan ou aplike yo (sitou pou paramèt sistèm), **pa egzekite kòmand ou pa konprann**, ak **pa kite AI ranplase yon vrè backup oswa yon dyagnostik pwofesyonèl** pou pwoblèm grav. Sa a se menm règ ou wè nan chak 'AI ak Misyon' nan kou sa a — kounye a ou konprann POUKISA règ sa a la.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Titè AI (AI Tutor)",
            definition: "Itilize yon AI pou eksplike, klarifye, oswa pratike — pa pou pran desizyon final oswa manyen enfòmasyon sansib.",
            example: "Mande yon AI eksplike yon tèm teknik nan mo pi senp, olye w rete konfonn.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a yon fwa ou te itilize (oswa ta itilize) yon AI pandan kou sa a. Èske itilizasyon an te swiv tout limit yo?",
      },
      {
        id: "b5",
        type: "safety",
        reminders: [
          "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI",
          "Toujou verifye enstriksyon yon AI ba ou anvan ou chanje yon paramèt enpòtan",
          "Pa kite yon AI ranplase yon vrè backup oswa yon dyagnostik pwofesyonèl",
        ],
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! What are some good, safe ways I can keep using AI to help me learn about computers after this course ends?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle etabli bon abitid pou itilize AI kòm yon zouti aprantisaj alontèm.",
          objective: "Site twa bon itilizasyon AI ak twa limit ou pap janm depase.",
          requiredSteps: [
            "Site twa bon itilizasyon AI kòm titè",
            "Site twa limit ki pa janm chanje",
          ],
          successCriteria: ["Ou eksplike rezon dèyè chak limit, pa jis repete yo"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki itilizasyon sa yo se bon fason pou itilize AI kòm titè òdinatè? (Chwazi tout ki aplike.)",
            options: [
              "Mande l eksplike yon tèm teknik nan mo pi senp",
              "Pataje modpas kont ou pou l ede w pi vit",
              "Konpare de espesifikasyon òdinatè",
              "Kreye yon lis verifikasyon rezoud-pwoblèm",
            ],
            correctIndexes: [0, 2, 3],
            explanation: "Eksplikasyon, konparezon, ak lis verifikasyon se bon itilizasyon — pataje modpas pa janm apwopriye, menm ak yon AI.",
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
    id: "m14-l4",
    slug: "aprann-nan-paj-ed-ak-tutoryel",
    moduleId: "m14",
    order: 4,
    titleHt: "Aprann nan Paj Èd ak Tutoryèl",
    titleEn: "Learn From Help Pages and Tutorials",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Priyorize sipò ofisyèl anvan lòt sous",
      "Evalye si yon tutoryèl matche aparèy ak sitiyasyon ou",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka jwenn ak evalye paj èd ak tutoryèl ki matche aparèy ak sitiyasyon ou, san swiv enstriksyon ki pa apwopriye.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Lè ou chèche èd pou yon pwoblèm òdinatè, priyorize **sipò ofisyèl** (sit fabrikan an) anvan lòt sous. Verifye **vèsyon sistèm opere** ou matche sa tutoryèl la dekri. Gade **dat piblikasyon** — yon tutoryèl trè ansyen ka pa aplike ankò. Verifye tutoryèl la matche **egzakteman aparèy** ou (modèl, mak). Evite **kontni espons ki twonpe** ki gen konsèy move oswa ki mennen w achte yon bagay ou pa bezwen. **Poze apre CHAK aksyon** pou konfime li fè sa ou espere anvan ou kontinye a pwochen etap la.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Sipò Ofisyèl (Official Support)",
            definition: "Paj èd ki soti dirèkteman nan konpayi ki fè aparèy/lojisyèl la.",
            example: "Chèche sipò ofisyèl Microsoft oswa Apple anvan ou fè konfyans a yon blog enkoni.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Chwazi yon pwoblèm ipotetik. Chèche epi idantifye si premye rezilta a se sipò ofisyèl la oswa yon lòt sous.",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Swiv yon tutoryèl ansyen oswa yon lòt sistèm opere san verifye si li matche sitiyasyon ou.",
          right: "Verifye vèsyon, dat, ak aparèy egzat anvan ou swiv nenpòt tutoryèl.",
          why: "Yon tutoryèl ki pa matche ka fè w chanje bon paramèt, oswa fè yon aksyon ki pa nesesè oswa danjere.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I found a tutorial online for a problem I'm having, but I'm not sure if it matches my exact device and OS version. How do I check before following it?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou bezwen jwenn èd pou yon pwoblèm òdinatè ipotetik.",
          objective: "Chèche epi evalye si sous ou jwenn se sipò ofisyèl, epi si li matche aparèy/sitiyasyon ou.",
          requiredSteps: [
            "Chèche sipò ofisyèl dabò",
            "Verifye dat ak vèsyon sistèm opere ki dekri",
            "Konfime li matche aparèy egzat ou",
          ],
          successCriteria: ["Ou priyorize sipò ofisyèl anvan lòt sous"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
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
    id: "m14-l5",
    slug: "byennet-dijital-ak-atansyon",
    moduleId: "m14",
    order: 5,
    titleHt: "Byennèt Dijital ak Atansyon",
    titleEn: "Digital Wellbeing and Attention",
    estimatedMinutes: 9,
    mode: "universal",
    objectives: [
      "Rekonèt fason teknoloji ka afekte atansyon ak byennèt",
      "Aplike zouti teknoloji kòm sèvitè, pa mèt",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka rekonèt fason teknoloji afekte atansyon ak byennèt ou, epi itilize l kòm yon zouti, pa kite l kontwole w.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Teknoloji dwe rete yon **zouti**, pa yon mèt. Panse a: **notifikasyon** ki entèwonp souvan — jere ki aplikasyon ka voye yo. Pran **poz** regilyèman lwen ekran an. Panse a **pòstir** ou lè ou itilize yon òdinatè pandan lontan. Fè konsyans **tan ekran** ou. Kenbe **konsantrasyon** lè posib olye jonglaj ant plizyè bagay. Rekonèt **eskrokri ak ijans emosyonèl** — anpil eskrokri jwe sou emosyon fò (laperèz, ijans, eksitasyon) pou fè w aji san reflechi, egzakteman jan ou aprann nan Modil 11. **Teknoloji se yon zouti pou ede lavi ou — pa yon bagay ki ta dwe kontwole lavi ou.**",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Tan Ekran (Screen Time)",
            definition: "Kantite tan ou pase ap gade yon ekran, ki itil pou konnen ak jere.",
            example: "Verifye tan ekran ou chak semèn pou wè si li reflete sa ou vle vrèman.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a notifikasyon ou resevwa chak jou. Ki nan yo ki vrèman itil, ak ki nan yo ou ta ka dezaktive?",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Kite tout notifikasyon aktive san panse, epi santi w oblije reponn imedyatman a chak alèt.",
          right: "Chwazi ak entansyon ki notifikasyon vrèman itil, epi dezaktive rès yo.",
          why: "Twòp notifikasyon fè w pèdi konsantrasyon epi ogmante estrès san bezwen.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I feel like notifications and screen time are taking over my focus. Can you help me think through some practical, realistic changes?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou vle asire teknoloji rete yon zouti ki sèvi lavi ou, pa yon bagay ki kontwole l.",
          objective: "Revize notifikasyon ou epi dezaktive omwen twa ou pa vrèman bezwen.",
          requiredSteps: [
            "Gade lis notifikasyon aktive ou",
            "Dezaktive omwen twa notifikasyon ou pa vrèman bezwen",
          ],
          successCriteria: ["Ou fè yon chwa entansyonèl, pa jis kite tout bagay jan yo te ye"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou resevwa yon mesaj ki kreye yon santiman ijans fò ak laperèz, ki mande w aji san reflechi. Sa ta dwe fè w panse a...",
            options: [
              "Rien, sa se jis yon mesaj nòmal",
              "Yon posib siy eskrokri — ijans emosyonèl se yon tektik komen",
              "Ou dwe toujou aji vit lè ou santi ijans",
              "Sa vle di mesaj la vrèman ijan",
            ],
            correctIndex: 1,
            explanation: "Ijans emosyonèl fò se yon tektik eskrokri komen — sa ta dwe fè w sispèk epi verifye, pa aji san reflechi.",
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
    id: "m14-l6",
    slug: "prepare-pou-kapston-nan",
    moduleId: "m14",
    order: 6,
    titleHt: "Prepare Pou Kapstòn Nan",
    titleEn: "Prepare for the Capstone",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Revize sa Kapstòn nan mande anvan ou kòmanse",
      "Konprann kritè evalyasyon (rubrik) an davans, san sipriz",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka konnen egzakteman sa Kapstòn nan mande, ki jan li evalye, epi ou pare san okenn sipriz.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Kapstòn nan rele **'Defi Endepandans Dijital Ou'** — yon senaryo kote yon **gwoup kominotè fiktif** ap prepare yon ti evènman, epi ou dwe òganize enfòmasyon epi voye yon pakèt dijital konplè. Anvan ou kòmanse: **revize platfòm** ou (Windows oswa Mac — tou de rive nan menm rezilta a), **telechaje fichye Kapstòn yo**, **li rubrik siksè a davans** (pa gen sipriz), ak **backup dosye travay ou** anvan ou kòmanse. **Rubrik evalyasyon an**: Òganizasyon ak non fichye (20%), Jesyon dokiman ak PDF (20%), Klète imèl ak bon fichye tache (20%), Sekirite ak rekonesans eskrokri (15%), Backup ak pwoteksyon done (10%), Rezònman rezoud-pwoblèm (10%), Konplete ak pwofesyonalis (5%). **Rekòmandasyon pou pase**: 80%.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Rubrik (Rubric)",
            definition: "Yon tablo kritè evalyasyon ki montre davans ki jan yon travay pral jije.",
            example: "Li rubrik Kapstòn nan anvan ou kòmanse pou konnen egzakteman sa yo ap evalye.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Li rubrik la (nan eksplikasyon anwo a) yon dezyèm fwa. Ki kategori ou santi w pi solid, ak ki youn ou ta renmen revize anvan ou kòmanse?",
      },
      {
        id: "b5",
        type: "mistake",
        mistake: {
          wrong: "Kòmanse Kapstòn nan san li rubrik la, epi dekouvri apre sa yo t ap evalye yon bagay ou pa t prepare.",
          right: "Li rubrik la konplètman anvan ou kòmanse — pa gen okenn kritè kache.",
          why: "Konnen kritè yo davans kite w konsantre efò ou sou sa ki vrèman konte, san estrès sipriz.",
        },
      },
      {
        id: "b6",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I'm about to start a final capstone project for a computer skills course. Can you help me review the rubric categories so I understand what will be evaluated?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b7",
        type: "mission",
        mission: {
          scenario: "Ou pral kòmanse Kapstòn final la epi ou vle rive prepare san sipriz.",
          objective: "Revize rubrik la konplètman, epi konfime ou pare pou kòmanse.",
          requiredSteps: [
            "Li tout sèt kategori rubrik la",
            "Idantifye ki kategori ou santi w mwens solid",
            "Konfime backup dosye travay aktyèl ou fèt anvan ou kòmanse",
          ],
          successCriteria: ["Ou ka site tout sèt kategori rubrik la san gade ankò"],
        },
      },
      {
        id: "b8",
        type: "knowledge_check",
        questions: [
          {
            kind: "select_all",
            prompt: "Ki kategori sa yo fè pati rubrik evalyasyon Kapstòn nan? (Chwazi tout ki aplike.)",
            options: [
              "Òganizasyon ak non fichye",
              "Klète imèl ak bon fichye tache",
              "Koulè tèm ekran ou chwazi",
              "Sekirite ak rekonesans eskrokri",
            ],
            correctIndexes: [0, 1, 3],
            explanation: "Òganizasyon, klète imèl, ak sekirite fè pati rubrik la — koulè tèm ekran pa gen rapò ak evalyasyon an.",
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
    id: "m14-l7",
    slug: "kapston-yon-travay-dijital-konple-nan-lavi-reyel",
    moduleId: "m14",
    order: 7,
    titleHt: "Kapstòn: Yon Travay Dijital Konplè Nan Lavi Reyèl",
    titleEn: "Capstone: A Complete Real-Life Digital Task",
    estimatedMinutes: 30,
    mode: "universal",
    objectives: [
      "Konplete Defi Endepandans Dijital Ou a — Kapstòn final kou a",
    ],
    reviewStatus: "approved",
    requiredMission: true,
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre Kapstòn sa a, ou pral demontre — nan yon sèl travay konplè — tout konpetans dijital ou aprann pandan kou a: òganizasyon fichye, dokiman/PDF, imèl klè, rekonesans eskrokri, backup, ak rezoud-pwoblèm.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "**Defi Endepandans Dijital Ou** se Kapstòn final kou sa a. Senaryo a: yon **gwoup kominotè fiktif ap prepare yon ti evènman**, epi ou dwe òganize enfòmasyon yo epi voye yon pakèt dijital konplè. Ou ka fè travay sa a swa sou Windows oswa Mac — **rezilta a menm jan an, pa gen okenn aplikasyon espesifik obligatwa** (Microsoft Word, Pages, Google Docs, ak LibreOffice tout aksepte, depi yo ka sovgade/ekspòte PDF). **Rezilta atandi**: yon dosye pwojè byen òganize, yon dokiman modifye ki ekspòte an PDF, yon imèl klè ak bon fichye tache, yon backup fichye enpòtan yo, ak rekonesans yon mesaj sispèk nan senaryo a. **Enpòtan sou vi prive**: Kapstòn sa a PA janm mande ou montre imèl pèsonèl ou, fichye prive, kontni Desktop ou, kontak ou, oswa enfòmasyon kont ou — tout travay la fèt ak fichye PRATIK yo ba ou pou egzèsis la.",
      },
      {
        id: "b3",
        type: "mission",
        mission: {
          scenario: "Yon gwoup kominotè fiktif ap prepare yon ti evènman, epi yo bezwen ou pou òganize enfòmasyon yo epi voye yon pakèt dijital konplè.",
          objective:
            "Konplete tout uit-fwa-de (16) travay obligatwa Kapstòn nan, itilize aplikasyon ou pito (Word, Pages, Google Docs, oswa LibreOffice), san ou pa janm ekspoze enfòmasyon pèsonèl ou.",
          requiredSteps: [
            "Telechaje fichye ZIP Kapstòn nan",
            "Ekstrè fichye yo",
            "Kreye yon dosye pwojè ak yon non itil",
            "Kreye sou-dosye pou Dokiman, Foto, ak Final",
            "Chanje non omwen twa fichye klèman",
            "Louvri enstriksyon evènman an",
            "Fè yon ti modifikasyon nan dokiman yo ba ou a",
            "Sovgade yon nouvo kopi",
            "Ekspòte oswa enprime dokiman final la kòm PDF",
            "Chwazi bon imaj evènman an",
            "Kreye yon kopi backup dosye Final la oswa fichye enpòtan yo",
            "Ekri yon imèl klè ak sijè itil, salitasyon, ti eksplikasyon, fichye tache, ak klotiraj",
            "Tache bon PDF la",
            "Idantifye yon mesaj sispèk nan senaryo a epi eksplike poukisa li sispèk",
            "Reponn yon senaryo rezoud-pwoblèm ki gen rapò ak Wi-Fi, son, enprime, oswa estokaj",
            "Soumèt yon lis verifikasyon konplete oswa prèv sipòte pa platfòm nan",
          ],
          successCriteria: [
            "Tout 16 travay yo konplete",
            "Pa gen okenn enfòmasyon pèsonèl (imèl reyèl, fichye prive, kontak) ki ekspoze pandan egzèsis la",
            "Dosye pwojè a byen òganize ak non fichye ki gen sans",
          ],
          hint: "Revize rubrik la (nan leson 'Prepare Pou Kapstòn Nan') si ou pa sèten sou yon kategori.",
          stretchChallenge: "Apre ou fini, revize pwòp travay ou kont rubrik la epi idantifye kategori ou pi fyè de li.",
        },
      },
      {
        id: "b4",
        type: "knowledge_check",
        questions: [
          {
            kind: "multiple_choice",
            prompt: "Kapstòn nan mande ou eksplike yon aplikasyon espesifik pou modifye dokiman an?",
            options: [
              "Wi, sèlman Microsoft Word aksepte",
              "Non, nenpòt aplikasyon ki ka sovgade/ekspòte PDF aksepte (Word, Pages, Google Docs, LibreOffice)",
              "Wi, sèlman aplikasyon Windows aksepte",
              "Non, Kapstòn nan pa mande okenn dokiman ditou",
            ],
            correctIndex: 1,
            explanation: "Kapstòn nan fèt pou aksepte nenpòt platfòm/aplikasyon ki bay menm rezilta a — pa gen okenn mak obligatwa.",
          },
        ],
      },
      {
        id: "b5",
        type: "reflection",
        prompts: [
          { statement: "Mwen fini Kapstòn nan ak konfyans total." },
          { statement: "Mwen fini l, men mwen ta renmen plis pratik nan kèk kategori." },
          { statement: "Mwen bezwen revize kèk leson anvan mwen konsidere Kapstòn nan fini." },
        ],
      },
    ],
  },
  {
    id: "m14-l8",
    slug: "revize-kwasans-ou",
    moduleId: "m14",
    order: 8,
    titleHt: "Revize Kwasans Ou",
    titleEn: "Review Your Growth",
    estimatedMinutes: 10,
    mode: "universal",
    objectives: [
      "Konpare konfyans ou kounye a ak konfyans ou nan kòmansman kou a",
      "Idantifye konpetans ki pi solid ak yon plan pratik",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka konpare konfyans ou kounye a ak sa ou te genyen nan kòmansman kou a, epi kreye yon plan pratik pou kontinye grandi.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Repase premye 'chèk konfyans' ou te fè nan Modil 1 — kijan ou te santi w lè sa a konpare ak kounye a? Idantifye **konpetans ki pi solid** ou yo (dosye, sekirite, imèl, rezoud-pwoblèm, elatriye) ak sa ou ta renmen **pratike plis**. Kreye yon **plan pratik senp** — pa yon lis long, men kèk aksyon konkrè pou kontinye ranfòse konpetans ou. Grandi se yon pwosesis kontinyèl, pa yon **destinasyon final**.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Plan Pratik (Practice Plan)",
            definition: "Yon lis kout aksyon konkrè pou kontinye ranfòse konpetans apre yon kou fini.",
            example: "Yon plan pratik ka senp tankou 'pratike screenshot chak semèn pandan yon mwa'.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Ekri twa konpetans ou santi w PI solid apre kou sa a, ak de konpetans ou ta renmen pratike plis.",
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I just finished a computer skills course. Can you help me think through a simple practice plan for the areas where I still feel less confident?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou fin konplete prèske tout kou a epi ou vle rekonèt kwasans ou.",
          objective: "Konpare konfyans ou kounye a ak kòmansman kou a, epi kreye yon plan pratik senp.",
          requiredSteps: [
            "Site twa konpetans ou santi w pi solid",
            "Site de konpetans ou ta renmen pratike plis",
            "Ekri yon plan pratik kout ak aksyon konkrè",
          ],
          successCriteria: ["Plan an gen aksyon konkrè, pa jis santiman jeneral"],
        },
      },
      {
        id: "b7",
        type: "knowledge_check",
        questions: [
          {
            kind: "scenario_decision",
            prompt: "Ou fin fè Kapstòn nan men ou toujou santi w pa two solid nan yon sèl kategori (tankou backup). Ki sa ki pi bon apwòch?",
            options: [
              "Panse kou a echwe paske ou pa pafè nan tout bagay",
              "Idantifye sa kòm yon zòn pratik nan plan pratik ou, epi kontinye grandi",
              "Bliye kategori sa a nèt",
              "Rekòmanse tout kou a soti nan kòmansman",
            ],
            correctIndex: 1,
            explanation: "Idantifye yon zòn pratik se yon pati nòmal grandi — sa pa vle di kou a echwe.",
          },
        ],
      },
      {
        id: "b8",
        type: "reflection",
        prompts: [
          { statement: "Mwen fyè de kwasans mwen pandan kou sa a." },
          { statement: "Mwen gen yon plan pratik klè pou kontinye grandi." },
          { statement: "Mwen pare pou dènye leson kou a." },
        ],
      },
    ],
  },
  {
    id: "m14-l9",
    slug: "chwazi-pwochen-chemen-ou",
    moduleId: "m14",
    order: 9,
    titleHt: "Chwazi Pwochen Chemen Ou",
    titleEn: "Choose Your Next Path",
    estimatedMinutes: 8,
    mode: "universal",
    objectives: [
      "Konnen opsyon aprantisaj ki disponib apre kou sa a",
      "Chwazi yon pwochen etap ki fè sans pou objektif pèsonèl ou",
    ],
    reviewStatus: "approved",
    blocks: [
      {
        id: "b1",
        type: "goal",
        outcome:
          "Apre leson sa a, ou ka konnen opsyon aprantisaj ki disponib apre kou sa a, epi chwazi yon pwochen etap ki fè sans pou objektif pèsonèl ou — san presyon.",
      },
      {
        id: "b2",
        type: "explanation",
        text: "Kongratilasyon pou fini Computer & Internet Essentials! Kèk chemen posib pou kontinye, selon objektif ou: **Microsoft Office pou Travay** (si ou bezwen konpetans biwo pi apwofondi), **Teknisyen ak Reparasyon Òdinatè** (si reparasyon materyèl enterese w), **Prepare CV ak Travay** (si ou vle aplike konpetans sa yo nan chèche travay), oswa **lòt chemen aprantisaj alavni**. **Pa gen okenn presyon pou kontinye imedyatman** — ou ka pran tan pou pratike sa ou aprann la anvan ou kòmanse yon lòt kou. Chwazi sa ki fè sans pou OU, nan pwòp rit ou.",
      },
      {
        id: "b3",
        type: "vocabulary",
        words: [
          {
            term: "Pwochen Chemen (Next Path)",
            definition: "Yon kou oswa domèn aprantisaj ou ta ka eksplore apre sa a, chwazi selon objektif pèsonèl ou.",
            example: "Si ou vle plis konpetans biwo, Microsoft Office pou Travay ka bon pwochen chemen an.",
          },
        ],
      },
      {
        id: "b4",
        type: "practice",
        instructions:
          "Panse a objektif pèsonèl ou (travay, biznis, lekòl). Ki nan opsyon yo (si genyen) ki fè plis sans pou ou kounye a, oswa èske ou pito pran yon poz pou pratike?",
      },
      {
        id: "b5",
        type: "ai_help",
        aiHelp: {
          prompt:
            "Hi! I just finished a computer basics course. Based on my goals (describe them), what kind of next learning path might make sense for me?",
          reminder:
            "Pa pataje modpas, kòd verifikasyon, oswa enfòmasyon labank ak yon AI — e toujou verifye enstriksyon enpòtan anvan ou chanje yon paramèt.",
        },
      },
      {
        id: "b6",
        type: "mission",
        mission: {
          scenario: "Ou fin konplete tout Modil 14 epi ou panse a sa ki vin apre.",
          objective: "Reflechi sou objektif pèsonèl ou epi idantifye si ou vle kontinye aprann kounye a oswa pran yon poz.",
          requiredSteps: [
            "Site objektif pèsonèl ou (travay, biznis, lekòl, oswa lòt)",
            "Deside si ou vle kontinye aprann imedyatman oswa pran tan pou pratike",
          ],
          successCriteria: ["Desizyon w lan reflete objektif pèsonèl ou, san presyon"],
        },
      },
      {
        id: "b7",
        type: "reflection",
        prompts: [
          { statement: "Mwen santi m dijitalman endepandan kounye a." },
          { statement: "Mwen konnen ki pwochen etap ki fè sans pou mwen." },
          { statement: "Mwen fyè de tout chemen mwen fè nan kou sa a." },
        ],
      },
    ],
  },
];

export function getComputerRebuildLesson(slug: string) {
  return computerRebuildLessons.find((lesson) => lesson.slug === slug);
}
