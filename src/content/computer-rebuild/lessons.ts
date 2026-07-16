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
