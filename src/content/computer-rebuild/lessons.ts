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
        text: "Yon **òdinatè** se yon machin ki **resevwa enfòmasyon** (input), **trete l** (processing), **sovgade l** (storage), epi **pwodwi yon rezilta** (output). Yon laptop, yon telefòn entelijan, ak menm kèk televizyon modèn se tout òdinatè, paske yo tout fè kat aksyon sa yo — menm si yo pa sanble menm.",
      },
      {
        id: "b3",
        type: "diagram",
        diagram: {
          diagramId: "input-processing-output-storage",
          caption: "Antre → Trete → Sòti, ak Estokaj kenbe rezilta a",
        },
      },
      {
        id: "b4",
        type: "vocabulary",
        words: [
          {
            term: "Antre (Input)",
            definition: "Enfòmasyon ou bay òdinatè a — tape sou klavye, klike sou souri.",
            example: "Tape yon lèt sou klavye a se yon egzanp antre.",
          },
          {
            term: "Trete (Processing)",
            definition: "Travay òdinatè a fè ak enfòmasyon ou ba li a.",
            example: "Lè òdinatè a kalkile yon rezilta, li ap 'trete' done yo.",
          },
          {
            term: "Sòti (Output)",
            definition: "Rezilta òdinatè a montre w — sou ekran an oswa nan opalè yo.",
            example: "Tèks ki parèt sou ekran an se yon egzanp sòti.",
          },
          {
            term: "Estokaj (Storage)",
            definition: "Kote enfòmasyon rete anrejistre, menm apre ou etenn aparèy la.",
            example: "Foto ou pran rete nan estokaj jiskaske ou efase yo.",
          },
        ],
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
