/**
 * Premium English for Beginners lesson content — Module 1.
 * Ported from AJ's "modil1-leson1-byenveni.jsx" / "modil1-leson2-alfabet.jsx"
 * prototypes. Instructional language is Haitian Creole; taught content is
 * English. Text fields marked "(supports **bold**)" use light inline
 * markdown-style emphasis rendered by renderLessonText() in the player.
 */

export interface PremiumVocabWord {
  word: string;
  ipa: string;
  kreyol: string;
  example: string;
}

export interface PatternBuilderOption {
  chipLabel: string;
  display: string;
  caption?: string;
}

export interface PremiumPracticeItem {
  prompt: string;
  options: string[];
  correctIndex: number;
  correctFeedback: string;
  wrongFeedback: string;
}

export interface PremiumExampleLine {
  line: string;
  tag: string;
  emoji: string;
}

export interface PremiumRecapItem {
  emoji: string;
  text: string;
}

export interface EnglishPremiumLesson {
  slug: string;
  moduleTitle: string;
  illustrationKey: "welcome" | "alphabet" | "emoji";
  heroEmoji?: string;
  heroTitle: string;
  heroLede: string;
  heroGoal: string;
  whatYouWillLearn: string;
  prerequisite: string;
  difficultyLabel: string;
  readingTime: string;
  completionTime: string;
  understandHeading: string;
  understandBody: string;
  seeItInAction: PremiumExampleLine[];
  patternBuilderIntro: string;
  patternBuilderOptions: PatternBuilderOption[];
  vocabulary: PremiumVocabWord[];
  pronunciationWord: string;
  pronunciationIpa: string;
  mouthTip: string;
  pronunciationMistake: string;
  mistakeWrong: string;
  mistakeCorrect: string;
  mistakeWhy: string;
  mistakeExtraNote?: string;
  practice: PremiumPracticeItem;
  thinkEmoji: string;
  thinkPrompt: string;
  thinkPlaceholder: string;
  aiPrompt: string;
  aiHelperCopy: string;
  missionTask: string;
  recap: PremiumRecapItem[];
}

export const englishPremiumLessons: EnglishPremiumLesson[] = [
  {
    slug: "hello-and-goodbye",
    moduleTitle: "Modil 1: Premye Pa nan Anglè w",
    illustrationKey: "welcome",
    heroTitle: "Byenveni!",
    heroLede:
      "Kòmanse vwayaj ou nan Anglè a — pa gen tradiksyon, pa gen règ gramè ki konplike. Nou aprann atravè imaj, sitiyasyon, ak pratik.",
    heroGoal:
      '🎯 Objektif leson: nan fen leson sa a, w ap konprann kijan fraz Anglè yo òganize, epi w ap kapab di "Hello, my name is ___."',
    whatYouWillLearn: "kijan fraz Anglè yo òganize, ak 5 premye mo yo",
    prerequisite: "Okenn — se premye leson an!",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "An Anglè, chak fraz bezwen yon vèb — menm pou dekri yon santiman.",
    understandBody:
      'An Kreyòl, ou ka di **"Mwen kontan"** san yo pa itilize yon vèb. An Anglè, sa pa mache konsa — ou toujou bezwen yon ti mo tankou **am / is / are**. Se poutèt sa Anglè pafwa sanble "plis long" pou moun k ap aprann li pou premye fwa.',
    seeItInAction: [
      { line: "Hello! My name is Ana.", tag: "Prezantasyon", emoji: "💬" },
      { line: "Hi! I am John.", tag: "Prezantasyon kout", emoji: "💬" },
      { line: "Hello! Nice to meet you.", tag: "Repons", emoji: "💬" },
    ],
    patternBuilderIntro:
      "Klike sou yon sijè pou wè kijan vèb la chanje. Ou pa bezwen memorize anyen — gade modèl la.",
    patternBuilderOptions: [
      { chipLabel: "I", display: "I am learning English." },
      { chipLabel: "She", display: "She is learning English." },
      { chipLabel: "We", display: "We are learning English." },
    ],
    vocabulary: [
      {
        word: "Hello",
        ipa: "/həˈloʊ/",
        kreyol: "Bonjou / Alo",
        example: "Hello! My name is Ana.",
      },
      {
        word: "Name",
        ipa: "/neɪm/",
        kreyol: "Non",
        example: "My name is Pierre.",
      },
      {
        word: "English",
        ipa: "/ˈɪŋglɪʃ/",
        kreyol: "Anglè",
        example: "I am learning English.",
      },
      {
        word: "Learn",
        ipa: "/lɜːrn/",
        kreyol: "Aprann",
        example: "I learn every day.",
      },
      {
        word: "Practice",
        ipa: "/ˈpræktɪs/",
        kreyol: "Pratike",
        example: "Practice makes it easy.",
      },
    ],
    pronunciationWord: "Hello",
    pronunciationIpa: "/həˈloʊ/",
    mouthTip:
      '**Ti konsèy pou bouch ou:** ouvri bouch ou yon ti kras pou son "oh" la, tankou lè w ap di "oh!" ak sipriz.',
    pronunciationMistake:
      '**Erè komen:** pa fè li tankou "Alo" — son "h" nan kòmansman an dwe tande.',
    mistakeWrong: "I happy.",
    mistakeCorrect: "I am happy.",
    mistakeWhy:
      '**Poukisa:** An Kreyòl, "Mwen kontan" pa bezwen vèb. An Anglè, ou toujou bezwen "am / is / are" pou dekri yon eta oswa yon santiman. N ap apwofondi sa nan Modil 2.',
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I happy today.",
        "I am happy today.",
        "I is happy today.",
        "Happy I am today.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — gade règ la anwo a.",
    },
    thinkEmoji: "👋",
    thinkPrompt: "Dekri sa w wè a an Anglè — pa tradui, ekri dirèk an Anglè:",
    thinkPlaceholder: "Hello! ...",
    aiPrompt:
      "Hi! I'm learning English for the first time. Can you greet me in English, ask my name, and gently correct me if I make a mistake? Please keep every sentence very short and simple.",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike yon ti konvèsasyon.",
    missionTask:
      '🎯 Jodi a, prezante tèt ou bay yon moun (moun lakay, zanmi, oswa menm ou menm nan yon glas) lan Anglè: **"Hello, my name is ___."**',
    recap: [
      { emoji: "📐", text: "Anglè toujou bezwen yon vèb, menm pou santiman." },
      {
        emoji: "🗣️",
        text: "5 mo jodi a: Hello, Name, English, Learn, Practice.",
      },
      { emoji: "⚠️", text: 'Pa di "I happy" — di "I am happy".' },
      { emoji: "🎯", text: "Misyon: prezante tèt ou lan Anglè jodi a." },
    ],
  },
  {
    slug: "english-alphabet",
    moduleTitle: "Modil 1: Premye Pa nan Anglè w",
    illustrationKey: "alphabet",
    heroTitle: "Alfabè a",
    heroLede:
      "Anglè gen 26 lèt, alòske Kreyòl gen 32 senbòl — kidonk pa gen menm kantite, e kèk lèt Anglè yo pa menm egziste an Kreyòl. Nou pral gade non lèt yo ak kijan majiskil (CAPITAL) diferan de miniskil (small).",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap konnen non lèt yo, epi w ap konnen ki lè pou itilize yon lèt MAJISKÍL.",
    whatYouWillLearn: "non 26 lèt yo, ak lè pou itilize majiskil",
    prerequisite: "Leson 1 — Byenveni",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Chak lèt gen yon non — men non an pa toujou son li fè nan yon mo.",
    understandBody:
      'Egzanp: lèt **"C"** rele "cee", men nan mo **"cat"** li fè son /k/, epi nan mo **"city"** li fè son /s/. Se pou sa n ap aprann non lèt yo separeman, epi n ap aprann son yo pita nan mo reyèl.',
    seeItInAction: [
      {
        line: "A, B, C, D, E...",
        tag: "Non lèt yo, youn pa youn",
        emoji: "🔤",
      },
      {
        line: "My name is Ana.",
        tag: '"A" majiskil paske se non moun',
        emoji: "🔤",
      },
      {
        line: "I have an apple.",
        tag: '"apple" rete an lèt miniskil',
        emoji: "🔤",
      },
    ],
    patternBuilderIntro:
      "Klike sou chak egzanp pou wè règ majiskil/miniskil la aplike.",
    patternBuilderOptions: [
      {
        chipLabel: "Non moun",
        display: "Ana",
        caption: "Non moun toujou kòmanse ak yon lèt MAJISKÍL.",
      },
      {
        chipLabel: "Mo òdinè",
        display: "apple",
        caption: "Pifò mo òdinè rete an lèt miniskil.",
      },
      {
        chipLabel: "Pwonon 'I'",
        display: "I",
        caption:
          'Lèt "I" ki vle di "mwen" toujou MAJISKÍL, kèlkeswa kote li ye.',
      },
    ],
    vocabulary: [
      {
        word: "Letter",
        ipa: "/ˈlɛtər/",
        kreyol: "Lèt",
        example: '"A" is the first letter.',
      },
      {
        word: "Sound",
        ipa: "/saʊnd/",
        kreyol: "Son",
        example: "This letter makes a soft sound.",
      },
      {
        word: "Capital",
        ipa: "/ˈkæpɪtəl/",
        kreyol: "Majiskil",
        example: "Names start with a capital letter.",
      },
      {
        word: "Small",
        ipa: "/smɔːl/",
        kreyol: "Miniskil",
        example: "Most words use small letters.",
      },
      {
        word: "Spell",
        ipa: "/spɛl/",
        kreyol: "Eple",
        example: "Can you spell your name?",
      },
    ],
    pronunciationWord: "A",
    pronunciationIpa: "/eɪ/",
    mouthTip:
      '**Ti konsèy pou bouch ou:** non lèt "A" sonnen tankou "ey" (tankou nan mo "day"), pa tankou "a" Kreyòl la.',
    pronunciationMistake:
      '**Erè komen:** pa li non lèt "A" tankou son "a" Kreyòl la (tankou nan "papa") — se de son diferan.',
    mistakeWrong: "my name is ana.",
    mistakeCorrect: "My name is Ana.",
    mistakeWhy:
      "**Poukisa:** An Anglè, chak fraz kòmanse ak yon lèt MAJISKÍL, e chak non moun (Ana, Pierre, Jean) toujou kòmanse ak yon lèt MAJISKÍL tou — menm si se pa premye mo nan fraz la.",
    mistakeExtraNote:
      '🆕 **Enpòtan pou moun ki pale Kreyòl:** alfabè Kreyòl la gen 32 senbòl, men li pa gen lèt **Q** ak **X** ditou, epi **H** pa itilize pou kont li (li parèt sèlman nan "ch"). Se pou sa Q, X, ak H se pa "menm lèt ak yon lòt son" — se 3 lèt tou nèf pou ou, e sa nòmal si yo pran plis tan pou vin fasil.',
    practice: {
      prompt: "Chwazi fraz ki ekri kòrèkteman:",
      options: [
        "my name is ana.",
        "My Name Is Ana.",
        "My name is Ana.",
        "my Name is ana.",
      ],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — gade règ majiskil la anwo a.",
    },
    thinkEmoji: "🔤",
    thinkPrompt:
      "Ekri non ou an Anglè, ak premye lèt li an MAJISKÍL — pa tradui, ekri dirèk:",
    thinkPlaceholder: "My name is ...",
    aiPrompt:
      "Hi! I'm practicing the English alphabet. Can you say the alphabet slowly with me, letter by letter, and tell me which letters sound tricky for Haitian Creole speakers?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike alfabè a ak vwa.",
    missionTask:
      "🎯 Jodi a, di alfabè a awotvwa soti nan A rive Z. Answit, ekri non ou sou yon papye ak premye lèt li an MAJISKÍL.",
    recap: [
      { emoji: "🔤", text: "Anglè gen 26 lèt, chak youn gen yon non." },
      {
        emoji: "🅰️",
        text: "5 mo jodi a: Letter, Sound, Capital, Small, Spell.",
      },
      { emoji: "⚠️", text: "Non moun ak kòmansman fraz toujou MAJISKÍL." },
      { emoji: "🎯", text: "Misyon: di alfabè a epi ekri non ou." },
    ],
  },
  {
    slug: "my-name-is",
    moduleTitle: "Modil 1: Premye Pa nan Anglè w",
    illustrationKey: "emoji",
    heroEmoji: "🤝",
    heroTitle: "Rankontre Yon Moun Nouvo",
    heroLede:
      "Yon non ouvri pòt pou yon konvèsasyon. Aprann kijan pou di non ou, mande non yon lòt moun, epi reponn lè yo prezante tèt yo ba ou.",
    heroGoal:
      '🎯 Objektif leson: nan fen leson sa a, w ap kapab prezante tèt ou, mande non yon moun, epi reponn "Nice to meet you."',
    whatYouWillLearn:
      "kijan pou prezante tèt ou, mande non yon moun, ak reponn yon prezantasyon",
    prerequisite: "Leson 1 — Byenveni",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Prezante tèt ou se yon echanj — se pa yon sèl fraz.",
    understandBody:
      'Lè yon moun di **"My name is..."**, li nòmal pou reponn ak yon bagay tou. An Anglè, moun konn di **"Nice to meet you"** apre yo fin tande non yon moun — sa montre ou byen resevwa prezantasyon an.',
    seeItInAction: [
      { line: "My name is James.", tag: "Prezante tèt ou", emoji: "💬" },
      { line: "What is your name?", tag: "Mande non yon moun", emoji: "💬" },
      {
        line: "Nice to meet you.",
        tag: "Reponn yon prezantasyon",
        emoji: "💬",
      },
    ],
    patternBuilderIntro: "Klike sou chak moman pou wè ki fraz ki mache ak li.",
    patternBuilderOptions: [
      {
        chipLabel: "Prezante",
        display: "My name is James.",
        caption: "Itilize l lè ou vle di non ou.",
      },
      {
        chipLabel: "Mande",
        display: "What is your name?",
        caption: "Itilize l lè ou vle konnen non yon moun.",
      },
      {
        chipLabel: "Reponn",
        display: "Nice to meet you.",
        caption: "Itilize l apre yon moun fin prezante tèt li.",
      },
    ],
    vocabulary: [
      {
        word: "Name",
        ipa: "/neɪm/",
        kreyol: "Non",
        example: "What is your name?",
      },
      {
        word: "Meet",
        ipa: "/miːt/",
        kreyol: "Rankontre",
        example: "Nice to meet you.",
      },
      {
        word: "Introduce",
        ipa: "/ˌɪntrəˈduːs/",
        kreyol: "Prezante",
        example: "Let me introduce myself.",
      },
      {
        word: "Friend",
        ipa: "/frɛnd/",
        kreyol: "Zanmi",
        example: "This is my friend.",
      },
      {
        word: "You",
        ipa: "/juː/",
        kreyol: "Ou",
        example: "What is your name?",
      },
    ],
    pronunciationWord: "Nice to meet you.",
    pronunciationIpa: "/naɪs tuː miːt juː/",
    mouthTip:
      '**Ti konsèy pou bouch ou:** "Nice" kòmanse ak yon son "s" long, tankou nan mo "sis" an Kreyòl.',
    pronunciationMistake:
      '**Erè komen:** pa sote mo "to" a — li fè tout fraz la sonnen natirèl.',
    mistakeWrong: "My name James.",
    mistakeCorrect: "My name is James.",
    mistakeWhy:
      '**Poukisa:** An Anglè, ou toujou bezwen "is" ant "name" ak non ou — pa gen fraz konplè san vèb la, menm nan yon prezantasyon senp.',
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "My name James.",
        "My name is James.",
        "My is name James.",
        "Is my name James.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — gade règ la anwo a.",
    },
    thinkEmoji: "🤝",
    thinkPrompt:
      "Ekri kijan ou ta prezante tèt ou bay yon moun nouvo — an Anglè, san tradiksyon:",
    thinkPlaceholder: "My name is...",
    aiPrompt:
      "Hi! I want to practice introducing myself in English. Can you play a stranger I'm meeting for the first time, ask my name, and respond naturally when I answer?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike yon prezantasyon reyèl.",
    missionTask:
      '🎯 Jodi a, prezante tèt ou bay yon moun (an reyèl oswa nan yon glas), epi reponn **"Nice to meet you"** si yo prezante tèt yo tou.',
    recap: [
      { emoji: "🙂", text: 'Itilize "My name is..." pou prezante tèt ou.' },
      { emoji: "❓", text: 'Itilize "What is your name?" pou mande.' },
      { emoji: "🤝", text: 'Reponn ak "Nice to meet you."' },
      { emoji: "🎯", text: "Misyon: prezante tèt ou jodi a." },
    ],
  },
  {
    slug: "please-thank-you-yes-no",
    moduleTitle: "Modil 1: Premye Pa nan Anglè w",
    illustrationKey: "emoji",
    heroEmoji: "🙏",
    heroTitle: "Silvouplè, Mèsi, Wi, ak Non",
    heroLede:
      "Kat ti mo sa yo ap sèvi w nan preske chak sitiyasyon — lè ou mande yon bagay, lè ou resevwa yon bagay, epi lè ou dakò oswa ou pa dakò.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab mande yon bagay poliman, di mèsi, epi reponn wi oswa non klèman.",
    whatYouWillLearn: "kijan pou mande poliman, di mèsi, epi reponn wi/non",
    prerequisite: "Leson 2 — Alfabè a",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Yon ti mo ka chanje jan yon fraz sonnen.",
    understandBody:
      'Di **"Water"** sèlman ka sonnen sèk. Ajoute **"please"** — **"Water, please"** — epi li sonnen poli. An Anglè, "please" ak "thank you" fè gwo diferans nan jan moun tande ou.',
    seeItInAction: [
      { line: "Water, please.", tag: "Mande poliman", emoji: "💬" },
      { line: "Thank you so much!", tag: "Montre rekonesans", emoji: "💬" },
      {
        line: "Yes, please. / No, thank you.",
        tag: "Reponn yon ofrann",
        emoji: "💬",
      },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè ki mo ki mache.",
    patternBuilderOptions: [
      {
        chipLabel: "Mande",
        display: "Water, please.",
        caption: 'Ajoute "please" nan fen yon demand pou li sonnen poli.',
      },
      {
        chipLabel: "Remèsye",
        display: "Thank you!",
        caption: "Itilize l apre yon moun ede ou.",
      },
      {
        chipLabel: "Aksepte",
        display: "Yes, please.",
        caption: "Itilize l lè yo ofri w yon bagay epi ou vle li.",
      },
    ],
    vocabulary: [
      {
        word: "Please",
        ipa: "/pliːz/",
        kreyol: "Souple",
        example: "Water, please.",
      },
      {
        word: "Thank you",
        ipa: "/θæŋk juː/",
        kreyol: "Mèsi",
        example: "Thank you for your help.",
      },
      {
        word: "You're welcome",
        ipa: "/jʊər ˈwɛlkəm/",
        kreyol: "Pa gen pwoblèm",
        example: "You're welcome!",
      },
      { word: "Yes", ipa: "/jɛs/", kreyol: "Wi", example: "Yes, please." },
      { word: "No", ipa: "/noʊ/", kreyol: "Non", example: "No, thank you." },
    ],
    pronunciationWord: "Please",
    pronunciationIpa: "/pliːz/",
    mouthTip:
      '**Ti konsèy pou bouch ou:** son "z" nan fen "please" dwe tande — se pa yon son "s".',
    pronunciationMistake:
      '**Erè komen:** pa di "plis" — "please" gen yon sèl silab, pa de.',
    mistakeWrong: "Give me water.",
    mistakeCorrect: "Water, please.",
    mistakeWhy:
      '**Poukisa:** Mande yon bagay san "please" ka sonnen brak an Anglè, menm si sa fèt nòmalman an Kreyòl. Ajoute "please" fè demand lan sonnen poli.',
    practice: {
      prompt: "Chwazi fraz ki pi poli:",
      options: [
        "Give me water.",
        "Water, please.",
        "I want water.",
        "Water now.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — kilès ki gen 'please' ladan l?",
    },
    thinkEmoji: "🙏",
    thinkPrompt:
      "Imajine ou nan yon restoran. Ekri kijan ou ta mande yon vè dlo poliman:",
    thinkPlaceholder: "Water, please...",
    aiPrompt:
      "Hi! Can you play a waiter at a restaurant? I'll practice ordering politely using please and thank you, and you can gently correct me if I forget them.",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike poliyès nan yon sitiyasyon reyèl.",
    missionTask:
      '🎯 Jodi a, di **"please"** yon fwa lè w ap mande yon bagay, epi **"thank you"** yon fwa lè yon moun ede ou.',
    recap: [
      { emoji: "🙏", text: 'Ajoute "please" pou mande poliman.' },
      { emoji: "💛", text: 'Di "thank you" pou montre rekonesans.' },
      {
        emoji: "✅",
        text: '"Yes, please" ak "No, thank you" reponn yon ofrann.',
      },
      { emoji: "🎯", text: "Misyon: itilize please ak thank you jodi a." },
    ],
  },
  {
    slug: "letter-sounds",
    moduleTitle: "Modil 1: Premye Pa nan Anglè w",
    illustrationKey: "emoji",
    heroEmoji: "🔤",
    heroTitle: "Son Lèt Yo",
    heroLede:
      "Chak lèt gen yon non, men non li pa toujou son li fè nan yon mo. Nan leson sa a, n ap tande premye son nan mo senp yo.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap rekonèt son premye lèt nan mo senp tankou apple, ball, ak cat.",
    whatYouWillLearn: "son ki kache dèyè lèt yo, lè yo nan mo reyèl",
    prerequisite: "Leson 2 — Alfabè a",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Non yon lèt ak son li fè ka diferan.",
    understandBody:
      'Lèt **"A"** rele "ey", men nan mo **"apple"** li fè yon lòt son, "ah". Se pou sa n ap tande mo reyèl pou aprann son yo, pa sèlman repete alfabè a.',
    seeItInAction: [
      { line: "Apple starts with the A sound.", tag: "Son A", emoji: "🍎" },
      { line: "Ball starts with the B sound.", tag: "Son B", emoji: "⚽" },
      { line: "Cat starts with the C sound.", tag: "Son K", emoji: "🐈" },
    ],
    patternBuilderIntro: "Klike sou chak mo pou tande premye son li.",
    patternBuilderOptions: [
      {
        chipLabel: "Apple",
        display: "Apple",
        caption: "Kòmanse ak son 'ah', menm si non lèt la se 'ey'.",
      },
      {
        chipLabel: "Ball",
        display: "Ball",
        caption: "Kòmanse ak son 'b' klè.",
      },
      {
        chipLabel: "Cat",
        display: "Cat",
        caption: "Kòmanse ak son 'k', menm jan ak 'cee' pafwa fè.",
      },
    ],
    vocabulary: [
      {
        word: "Apple",
        ipa: "/ˈæpəl/",
        kreyol: "Pòm",
        example: "Apple starts with A.",
      },
      {
        word: "Ball",
        ipa: "/bɔːl/",
        kreyol: "Boul",
        example: "Ball starts with B.",
      },
      {
        word: "Cat",
        ipa: "/kæt/",
        kreyol: "Chat",
        example: "Cat starts with C.",
      },
      {
        word: "Dog",
        ipa: "/dɔːg/",
        kreyol: "Chen",
        example: "Dog starts with D.",
      },
      { word: "Egg", ipa: "/ɛg/", kreyol: "Ze", example: "Egg starts with E." },
    ],
    pronunciationWord: "Apple",
    pronunciationIpa: "/ˈæpəl/",
    mouthTip:
      '**Ti konsèy pou bouch ou:** ouvri bouch ou byen laj pou son "æ" a nan kòmansman "apple".',
    pronunciationMistake:
      '**Erè komen:** pa di non lèt la ("ey") olye de son li fè nan mo a ("ah").',
    mistakeWrong: 'Cat starts with the "see" sound.',
    mistakeCorrect: 'Cat starts with the "k" sound.',
    mistakeWhy:
      '**Poukisa:** Non lèt "C" rele "cee", men nan anpil mo li fè son "k" — tankou nan "cat". Aprann son an nan mo a, pa sèlman non lèt la.',
    practice: {
      prompt: "Ki mo ki kòmanse ak menm son ak 'ball'?",
      options: ["Ball", "Apple", "Cat", "Egg"],
      correctIndex: 0,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — koute premye son an.",
    },
    thinkEmoji: "🔤",
    thinkPrompt:
      "Panse a yon mo an Anglè ou konnen. Ekri li, epi ekri premye son li fè:",
    thinkPlaceholder: "Word: ... First sound: ...",
    aiPrompt:
      "Hi! Can you say 5 simple English words one at a time, and ask me to guess which letter sound each one starts with?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike son lèt yo ak vwa.",
    missionTask:
      "🎯 Jodi a, jwenn twa bagay lakay ou ki non yo an Anglè, epi di premye son chak mo fè.",
    recap: [
      { emoji: "🔤", text: "Non yon lèt ak son li fè nan yon mo ka diferan." },
      { emoji: "🍎", text: "Apple, ball, cat: twa premye son diferan." },
      {
        emoji: "👂",
        text: "Koute mo reyèl pou aprann son yo, pa sèlman non lèt yo.",
      },
      { emoji: "🎯", text: "Misyon: jwenn twa mo epi di premye son yo." },
    ],
  },
  {
    slug: "pronunciation-basics",
    moduleTitle: "Modil 1: Premye Pa nan Anglè w",
    illustrationKey: "emoji",
    heroEmoji: "👄",
    heroTitle: "Premye Zouti Pwononsyasyon Ou",
    heroLede:
      "Ou pa bezwen pale tankou yon moun ki fèt nan peyi kote yo pale Anglè. Ou bezwen sèlman pou moun konprann ou.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap gen 3 zouti senp pou amelyore jan ou pale Anglè, san estrès.",
    whatYouWillLearn: "kijan pou ralanti, koute, ak repete san laperèz fè erè",
    prerequisite: "Leson 5 — Son Lèt Yo",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Konprann pi enpòtan pase pèfeksyon.",
    understandBody:
      "Objektif la se pou moun konprann ou, pa pou w sonnen egzakteman tankou yon moun Ameriken oswa Britanik. **Ralanti**, **koute byen**, epi **repete** — se twa zouti ki ap ede w pi plis pase nenpòt lòt bagay.",
    seeItInAction: [
      {
        line: "Can you say that again, slowly?",
        tag: "Mande yo ralanti",
        emoji: "💬",
      },
      {
        line: "I'm still learning, thank you for your patience.",
        tag: "Eksplike w ap aprann",
        emoji: "💬",
      },
      { line: "How do you say this word?", tag: "Mande èd", emoji: "💬" },
    ],
    patternBuilderIntro: "Klike sou chak zouti pou wè kijan pou itilize li.",
    patternBuilderOptions: [
      {
        chipLabel: "Ralanti",
        display: "Slow down.",
        caption: "Pale pi dousman pase sa ou panse ou dwe.",
      },
      {
        chipLabel: "Koute",
        display: "Listen first.",
        caption: "Koute mo a plizyè fwa anvan ou eseye di li.",
      },
      {
        chipLabel: "Repete",
        display: "Repeat out loud.",
        caption: "Di mo a awotvwa, menm si li pa pafè.",
      },
    ],
    vocabulary: [
      {
        word: "Slow",
        ipa: "/sloʊ/",
        kreyol: "Dousman",
        example: "Speak slowly, please.",
      },
      {
        word: "Listen",
        ipa: "/ˈlɪsən/",
        kreyol: "Koute",
        example: "Listen first, then repeat.",
      },
      {
        word: "Repeat",
        ipa: "/rɪˈpiːt/",
        kreyol: "Repete",
        example: "Can you repeat that?",
      },
      {
        word: "Mistake",
        ipa: "/mɪˈsteɪk/",
        kreyol: "Erè",
        example: "A mistake is okay.",
      },
      {
        word: "Practice",
        ipa: "/ˈpræktɪs/",
        kreyol: "Pratike",
        example: "Practice makes it easier.",
      },
    ],
    pronunciationWord: "Repeat",
    pronunciationIpa: "/rɪˈpiːt/",
    mouthTip:
      '**Ti konsèy pou bouch ou:** aksan an sou dezyèm silab la — "ree-PEET", pa "REE-peet".',
    pronunciationMistake:
      '**Erè komen:** pa gen — sèl "erè" reyèl la se pa eseye ditou.',
    mistakeWrong: "I can't say it, so I won't try.",
    mistakeCorrect: "I'll try, even if it's not perfect.",
    mistakeWhy:
      "**Poukisa:** Moun ki pale Anglè byen jodi a te fè anpil erè anvan. Eseye — menm ak yon aksan — se kijan ou aprann.",
    practice: {
      prompt: "Ki abitid ki reyèlman ede ou amelyore?",
      options: [
        "Koute epi repete dousman",
        "Pale vit pou fini vit",
        "Evite eseye pou pa fè erè",
        "Ekri sèlman, pa janm pale",
      ],
      correctIndex: 0,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — ki opsyon ki pi itil?",
    },
    thinkEmoji: "👄",
    thinkPrompt: "Ekri yon fraz kout ou ta di si yon moun pale twò vit pou ou:",
    thinkPlaceholder: "Can you say that again, slowly?",
    aiPrompt:
      "Hi! I'm nervous about my English pronunciation. Can you say a few simple sentences slowly, wait for me to repeat them, and encourage me gently?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike san estrès.",
    missionTask:
      "🎯 Jodi a, chwazi yon mo an Anglè ou toujou jwenn difisil, epi di li awotvwa twa fwa, dousman.",
    recap: [
      { emoji: "🎯", text: "Objektif la se konprann, pa pèfeksyon." },
      { emoji: "🐢", text: "Ralanti ede plis pase w panse." },
      { emoji: "🔁", text: "Koute, epi repete — san laperèz." },
      { emoji: "🎯", text: "Misyon: repete yon mo difisil twa fwa jodi a." },
    ],
  },
  {
    slug: "most-useful-words",
    moduleTitle: "Modil 1: Premye Pa nan Anglè w",
    illustrationKey: "emoji",
    heroEmoji: "⚡",
    heroTitle: "Mo Ou Pral Sèvi Chak Jou",
    heroLede:
      "Kèk mo ka ede w aji ak montre bagay san w pa bezwen konstwi yon fraz konplè toujou.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize Help, Stop, Here, ak There nan sitiyasyon reyèl.",
    whatYouWillLearn: "kat mo ki itil nan anpil sitiyasyon diferan",
    prerequisite: "Leson 6 — Premye Zouti Pwononsyasyon Ou",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Kèk mo travay tou sèl, san yo pa bezwen lòt mo ak yo.",
    understandBody:
      'Ou pa toujou bezwen yon fraz konplè. Di **"Help!"** tou sèl ka sove ou nan yon ijans. Di **"Here"** oswa **"There"** ka montre kote yon bagay ye, san yon lòt eksplikasyon.',
    seeItInAction: [
      { line: "Help!", tag: "Sitiyasyon ijans", emoji: "🆘" },
      { line: "Stop, please.", tag: "Mande yon aksyon fini", emoji: "🛑" },
      { line: "It's over here.", tag: "Montre yon kote", emoji: "👇" },
    ],
    patternBuilderIntro:
      "Klike sou chak mo pou wè li nan yon sitiyasyon reyèl.",
    patternBuilderOptions: [
      {
        chipLabel: "Help",
        display: "Help!",
        caption: "Itilize l lè ou bezwen sipò touswit.",
      },
      {
        chipLabel: "Stop",
        display: "Stop, please.",
        caption: "Itilize l lè ou vle yon aksyon sispann.",
      },
      {
        chipLabel: "Here/There",
        display: "It's over here.",
        caption: "Itilize l pou montre kote yon bagay ye.",
      },
    ],
    vocabulary: [
      { word: "Help", ipa: "/hɛlp/", kreyol: "Ede / Sekou", example: "Help!" },
      {
        word: "Stop",
        ipa: "/stɒp/",
        kreyol: "Sispann",
        example: "Stop, please.",
      },
      { word: "Here", ipa: "/hɪər/", kreyol: "Isit la", example: "It's here." },
      {
        word: "There",
        ipa: "/ðɛər/",
        kreyol: "Lòt bò a",
        example: "It's over there.",
      },
      {
        word: "Now",
        ipa: "/naʊ/",
        kreyol: "Kounye a",
        example: "I need it now.",
      },
    ],
    pronunciationWord: "Here",
    pronunciationIpa: "/hɪər/",
    mouthTip:
      '**Ti konsèy pou bouch ou:** "here" ak "hear" sonnen menm jan — pa gen pwoblèm si w konfonn yo lè w ap pale.',
    pronunciationMistake:
      '**Erè komen:** pa konfonn "here" (isit la) ak "hear" (tande) lè w ap ekri.',
    mistakeWrong: "The book is there, next to you.",
    mistakeCorrect: "The book is here, next to you.",
    mistakeWhy:
      '**Poukisa:** "Here" se pou bagay ki pre ou. "There" se pou bagay ki lwen ou. Si liv la toupre w, se "here" ki kòrèk.',
    practice: {
      prompt: "Telefòn ou toupre men ou. Ki mo ki kòrèk?",
      options: ["Here", "There", "Stop", "Help"],
      correctIndex: 0,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — telefòn nan toupre, se pa lwen.",
    },
    thinkEmoji: "⚡",
    thinkPrompt: "Gade otou w. Montre yon bagay epi ekri Here oswa There:",
    thinkPlaceholder: "It's here / It's over there...",
    aiPrompt:
      "Hi! Can you describe a room with a few objects and ask me to say if each one is 'here' or 'there' based on your description?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike mo sa yo nan kontèks.",
    missionTask:
      "🎯 Jodi a, montre de bagay — youn toupre w, youn lwen — epi di Here ak There pou chak.",
    recap: [
      { emoji: "🆘", text: '"Help!" tou sèl ka sove ou.' },
      { emoji: "🛑", text: '"Stop, please" mande yon aksyon fini.' },
      { emoji: "👇", text: '"Here" se pre, "there" se lwen.' },
      { emoji: "🎯", text: "Misyon: itilize Here ak There jodi a." },
    ],
  },
  {
    slug: "i-am",
    moduleTitle: "Modil 1: Premye Pa nan Anglè w",
    illustrationKey: "emoji",
    heroEmoji: "🙂",
    heroTitle: "Mwen Se...",
    heroLede:
      'Yon ti mo, "am", ka ouvri anpil fraz sou ki moun ou ye, kijan ou santi w, oswa sa ou fè.',
    heroGoal:
      '🎯 Objektif leson: nan fen leson sa a, w ap kapab di non ou, yon santiman, oswa yon wòl ak "I am".',
    whatYouWillLearn: '"I am" ak twa fason pou itilize l: non, santiman, wòl',
    prerequisite: "Leson 7 — Mo Ou Pral Sèvi Chak Jou",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      'An Anglè, "I am" se yon pon ant ou menm ak enfòmasyon sou ou menm.',
    understandBody:
      'Apre **"I am"**, ou ka mete yon non ("I am James"), yon santiman ("I am happy"), oswa yon wòl ("I am a student"). Se menm modèl la pou tout twa — se sa ki fè li fasil pou aprann.',
    seeItInAction: [
      { line: "I am James.", tag: "Non", emoji: "🙂" },
      { line: "I am happy.", tag: "Santiman", emoji: "😊" },
      { line: "I am a student.", tag: "Wòl", emoji: "🎓" },
    ],
    patternBuilderIntro:
      'Klike sou chak kategori pou wè ki fraz ki mache ak "I am".',
    patternBuilderOptions: [
      { chipLabel: "Non", display: "I am James." },
      { chipLabel: "Santiman", display: "I am happy." },
      { chipLabel: "Wòl", display: "I am a student." },
    ],
    vocabulary: [
      {
        word: "Happy",
        ipa: "/ˈhæpi/",
        kreyol: "Kontan",
        example: "I am happy.",
      },
      {
        word: "Tired",
        ipa: "/ˈtaɪərd/",
        kreyol: "Fatige",
        example: "I am tired.",
      },
      {
        word: "Student",
        ipa: "/ˈstuːdənt/",
        kreyol: "Elèv",
        example: "I am a student.",
      },
      { word: "Ready", ipa: "/ˈrɛdi/", kreyol: "Pare", example: "I am ready." },
      { word: "Here", ipa: "/hɪər/", kreyol: "Isit la", example: "I am here." },
    ],
    pronunciationWord: "I am",
    pronunciationIpa: "/aɪ æm/",
    mouthTip:
      '**Ti konsèy pou bouch ou:** anpil moun di li vit tankou "I\'m" nan konvèsasyon — tou de fason kòrèk.',
    pronunciationMistake:
      '**Erè komen:** pa bliye "am" — an Anglè, ou pa ka di sèlman "I happy," fòk gen vèb la.',
    mistakeWrong: "I happy.",
    mistakeCorrect: "I am happy.",
    mistakeWhy:
      '**Poukisa:** An Kreyòl, "Mwen kontan" pa bezwen vèb. An Anglè, ou toujou bezwen "am" ant "I" ak santiman/wòl/non ou.',
    practice: {
      prompt: "Konplete: ___ a student.",
      options: ["I", "I am", "I is", "Am I"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — ou bezwen vèb 'am' la.",
    },
    thinkEmoji: "🙂",
    thinkPrompt: 'Ekri twa fraz sou ou menm, chak youn kòmanse ak "I am":',
    thinkPlaceholder: "I am...",
    aiPrompt:
      "Hi! Can you ask me simple questions like 'How are you?' or 'Who are you?' so I can practice answering with 'I am...'?",
    aiHelperCopy:
      'Kole sa a nan ChatGPT oswa Claude pou pratike "I am" nan yon konvèsasyon.',
    missionTask:
      '🎯 Jodi a, di twa fraz sou ou menm ak "I am" — non ou, yon santiman, ak yon wòl.',
    recap: [
      { emoji: "🙂", text: '"I am" + non, santiman, oswa wòl.' },
      { emoji: "⚠️", text: 'Pa bliye "am" — pa gen "I happy" tou sèl.' },
      { emoji: "🔁", text: '"I\'m" se yon fason kout pou di "I am".' },
      { emoji: "🎯", text: "Misyon: di twa fraz sou ou menm jodi a." },
    ],
  },
  {
    slug: "i-have",
    moduleTitle: "Modil 1: Premye Pa nan Anglè w",
    illustrationKey: "emoji",
    heroEmoji: "📱",
    heroTitle: "Mwen Genyen...",
    heroLede:
      '"I have" pale sou sa ki avè w oswa sa ki pou ou — yon objè, yon moun, oswa menm yon lide.',
    heroGoal:
      '🎯 Objektif leson: nan fen leson sa a, w ap kapab pale sou sa ou genyen ak "I have".',
    whatYouWillLearn:
      '"I have" ak twa bagay ou ka mete apre l: objè, moun, lide',
    prerequisite: "Leson 8 — Mwen Se...",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: '"I have" mete yon bagay ki avè w oswa ki pou ou.',
    understandBody:
      'Kontrèman ak "I am" ki dekri ki moun ou ye, **"I have"** pale sou sa ki avè w — yon telefòn, fanmi, oswa menm yon lide nan tèt ou.',
    seeItInAction: [
      { line: "I have a phone.", tag: "Objè", emoji: "📱" },
      { line: "I have two brothers.", tag: "Moun", emoji: "👨‍👩‍👧" },
      { line: "I have an idea.", tag: "Lide", emoji: "💡" },
    ],
    patternBuilderIntro:
      'Klike sou chak kategori pou wè ki fraz ki mache ak "I have".',
    patternBuilderOptions: [
      { chipLabel: "Objè", display: "I have a phone." },
      { chipLabel: "Moun", display: "I have two brothers." },
      { chipLabel: "Lide", display: "I have an idea." },
    ],
    vocabulary: [
      {
        word: "Phone",
        ipa: "/foʊn/",
        kreyol: "Telefòn",
        example: "I have a phone.",
      },
      {
        word: "Family",
        ipa: "/ˈfæməli/",
        kreyol: "Fanmi",
        example: "I have a big family.",
      },
      {
        word: "Idea",
        ipa: "/aɪˈdiːə/",
        kreyol: "Lide",
        example: "I have an idea.",
      },
      {
        word: "Money",
        ipa: "/ˈmʌni/",
        kreyol: "Lajan",
        example: "I have some money.",
      },
      { word: "Time", ipa: "/taɪm/", kreyol: "Tan", example: "I have time." },
    ],
    pronunciationWord: "Have",
    pronunciationIpa: "/hæv/",
    mouthTip:
      '**Ti konsèy pou bouch ou:** son "v" nan fen "have" dwe tande — pa "haf".',
    pronunciationMistake:
      '**Erè komen:** pa konfonn "have" (genyen) ak "am" (se) — se de vèb diferan.',
    mistakeWrong: "I am a phone.",
    mistakeCorrect: "I have a phone.",
    mistakeWhy:
      '**Poukisa:** "I am" dekri ki moun ou ye. "I have" dekri sa ki avè w. Yon telefòn se pa ou menm — se yon bagay ou genyen, kidonk "I have" ki kòrèk.',
    practice: {
      prompt: "Konplete: I ___ an idea.",
      options: ["am", "have", "is", "has"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — kilès vèb ki mache ak 'idea'?",
    },
    thinkEmoji: "📱",
    thinkPrompt: 'Gade otou w. Ekri twa bagay ou genyen ak "I have":',
    thinkPlaceholder: "I have...",
    aiPrompt:
      "Hi! Can you ask me what's in my bag or my room, so I can practice answering with 'I have...'?",
    aiHelperCopy:
      'Kole sa a nan ChatGPT oswa Claude pou pratike "I have" ak bagay reyèl.',
    missionTask:
      '🎯 Jodi a, chwazi yon objè ou genyen, epi di "I have..." awotvwa.',
    recap: [
      { emoji: "📱", text: '"I have" pale sou sa ki avè w.' },
      { emoji: "👨‍👩‍👧", text: "Ka sèvi pou moun, objè, oswa lide." },
      { emoji: "⚠️", text: 'Pa konfonn "I am" ak "I have".' },
      { emoji: "🎯", text: "Misyon: di yon bagay ou genyen jodi a." },
    ],
  },
  {
    slug: "simple-questions",
    moduleTitle: "Modil 1: Premye Pa nan Anglè w",
    illustrationKey: "emoji",
    heroEmoji: "❓",
    heroTitle: "Premye Kesyon Ou Yo",
    heroLede:
      "Yon kesyon envite yon moun ede w. Aprann kijan pou mande sa yon bagay ye, ak kote li ye.",
    heroGoal:
      '🎯 Objektif leson: nan fen leson sa a, w ap kapab poze kesyon senp ak "What" ak "Where".',
    whatYouWillLearn: 'kijan pou poze kesyon senp ak "What" ak "Where"',
    prerequisite: "Leson 9 — Mwen Genyen...",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Yon kesyon senp ka jwenn ou yon repons senp.",
    understandBody:
      'Kòmanse ak **"What"** lè ou vle konnen sa yon bagay ye. Kòmanse ak **"Where"** lè ou vle konnen kote yon bagay ye. Pa gen bezwen gwo fraz — kesyon kout mache byen.',
    seeItInAction: [
      { line: "What is this?", tag: "Mande sa yon bagay ye", emoji: "❓" },
      { line: "Where is it?", tag: "Mande kote yon bagay ye", emoji: "📍" },
      { line: "Where is my phone?", tag: "Yon kesyon reyèl", emoji: "📱" },
    ],
    patternBuilderIntro: "Klike sou chak kesyon pou wè lè pou itilize li.",
    patternBuilderOptions: [
      {
        chipLabel: "What",
        display: "What is this?",
        caption: "Itilize l pou mande sa yon bagay ye.",
      },
      {
        chipLabel: "Where",
        display: "Where is it?",
        caption: "Itilize l pou mande kote yon bagay ye.",
      },
    ],
    vocabulary: [
      { word: "What", ipa: "/wʌt/", kreyol: "Ki sa", example: "What is this?" },
      {
        word: "Where",
        ipa: "/wɛər/",
        kreyol: "Ki kote",
        example: "Where is it?",
      },
      { word: "This", ipa: "/ðɪs/", kreyol: "Sa a", example: "What is this?" },
      { word: "It", ipa: "/ɪt/", kreyol: "Li", example: "Where is it?" },
      {
        word: "Lost",
        ipa: "/lɒst/",
        kreyol: "Pèdi",
        example: "I lost my phone.",
      },
    ],
    pronunciationWord: "Where",
    pronunciationIpa: "/wɛər/",
    mouthTip:
      '**Ti konsèy pou bouch ou:** "where" ak "wear" sonnen menm jan — konsantre sou son "w" nan kòmansman an.',
    pronunciationMistake:
      '**Erè komen:** pa konfonn "what" ak "where" — youn mande sa yon bagay ye, lòt la mande kote li ye.',
    mistakeWrong: "What is my phone?",
    mistakeCorrect: "Where is my phone?",
    mistakeWhy:
      '**Poukisa:** Ou konn deja se yon telefòn — pa bezwen mande "what". Ou vle konnen kote li ye, kidonk "where" ki kòrèk.',
    practice: {
      prompt: "Ou pa jwenn telefòn ou. Ki kesyon ki kòrèk?",
      options: [
        "What is my phone?",
        "Where is my phone?",
        "What is this?",
        "Where is this?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback:
        "❌ Eseye ankò — ou konn se yon telefòn, ou bezwen konnen kote li ye.",
    },
    thinkEmoji: "❓",
    thinkPrompt: "Chwazi yon bagay ou pa rekonèt, epi ekri yon kesyon sou li:",
    thinkPlaceholder: "What is this?",
    aiPrompt:
      "Hi! Can you describe a mystery object and let me ask 'What is this?' and 'Where is it?' to figure out what and where it is?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike poze kesyon.",
    missionTask:
      '🎯 Jodi a, poze kesyon "What is this?" sou yon bagay ou pa rekonèt byen.',
    recap: [
      { emoji: "❓", text: '"What" mande sa yon bagay ye.' },
      { emoji: "📍", text: '"Where" mande kote yon bagay ye.' },
      { emoji: "🔑", text: "Kesyon kout ka mache byen." },
      { emoji: "🎯", text: "Misyon: poze yon kesyon jodi a." },
    ],
  },
  {
    slug: "first-conversation-mission",
    moduleTitle: "Modil 1: Premye Pa nan Anglè w",
    illustrationKey: "emoji",
    heroEmoji: "🎉",
    heroTitle: "Premye Konvèsasyon Ou",
    heroLede:
      "Se lè a pou mete tout sa ou aprann nan Modil 1 ansanm — yon salitasyon, yon prezantasyon, ak yon kesyon.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab fè yon ti konvèsasyon konplè nan Anglè, soti nan zewo.",
    whatYouWillLearn:
      "kijan pou konbine tout sa ou aprann nan yon sèl ti konvèsasyon",
    prerequisite: "Leson 10 — Premye Kesyon Ou Yo",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Yon konvèsasyon ka kòmanse ak twa ti mouvman sèlman.",
    understandBody:
      "Salye, prezante tèt ou, epi poze yon kesyon — se sa ase pou kòmanse. Ou pa bezwen konnen tout Anglè pou fè premye pa ou. **Chak leson ou fè jiska prezan an se yon moso nan konvèsasyon sa a.**",
    seeItInAction: [
      {
        line: "Hello! My name is Ana.",
        tag: "Salitasyon + Prezantasyon",
        emoji: "👋",
      },
      { line: "What is your name?", tag: "Kesyon", emoji: "❓" },
      { line: "Nice to meet you!", tag: "Reponn", emoji: "🤝" },
    ],
    patternBuilderIntro:
      "Klike sou chak mouvman pou wè kijan konvèsasyon an bati.",
    patternBuilderOptions: [
      { chipLabel: "1. Salye", display: "Hello!" },
      { chipLabel: "2. Prezante", display: "My name is Ana." },
      { chipLabel: "3. Mande", display: "What is your name?" },
    ],
    vocabulary: [
      { word: "Hello", ipa: "/həˈloʊ/", kreyol: "Bonjou", example: "Hello!" },
      {
        word: "Name",
        ipa: "/neɪm/",
        kreyol: "Non",
        example: "My name is Ana.",
      },
      {
        word: "Meet",
        ipa: "/miːt/",
        kreyol: "Rankontre",
        example: "Nice to meet you.",
      },
      {
        word: "You",
        ipa: "/juː/",
        kreyol: "Ou",
        example: "What is your name?",
      },
      {
        word: "Goodbye",
        ipa: "/ˌɡʊdˈbaɪ/",
        kreyol: "Orevwa",
        example: "Goodbye!",
      },
    ],
    pronunciationWord: "Nice to meet you.",
    pronunciationIpa: "/naɪs tuː miːt juː/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** pale dousman, fraz pa fraz — pa gen presyon pou fè tout bagay vit.",
    pronunciationMistake:
      "**Erè komen:** pa sote yon etap — chak mouvman (salye, prezante, mande) enpòtan pou konvèsasyon an fè sans.",
    mistakeWrong: "What is your name? Hello!",
    mistakeCorrect: "Hello! What is your name?",
    mistakeWhy:
      "**Poukisa:** Lòd la konte. Ou salye anvan ou mande yon kesyon — sa fè konvèsasyon an sonnen natirèl, pa brak.",
    practice: {
      prompt: "Ki mouvman ki vini an premye nan yon konvèsasyon nouvo?",
      options: ["Hello", "What is your name?", "Nice to meet you.", "Goodbye"],
      correctIndex: 0,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback:
        "❌ Eseye ankò — ki jan ou toujou kòmanse yon konvèsasyon?",
    },
    thinkEmoji: "🎉",
    thinkPrompt:
      "Ekri yon ti konvèsasyon konplè ou ta ka fè ak yon moun nouvo, an Anglè:",
    thinkPlaceholder: "Hello! My name is...",
    aiPrompt:
      "Hi! Can you play a stranger meeting me for the first time? Let's have a short conversation using greetings, introductions, and simple questions — and gently correct me if needed.",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 1 ansanm.",
    missionTask:
      "🎯 Jodi a, di tout ti konvèsasyon an awotvwa san w pa li li de fwa: Hello, non ou, epi yon kesyon.",
    recap: [
      { emoji: "👋", text: "Salye, prezante, mande — twa mouvman senp." },
      {
        emoji: "🧩",
        text: "Chak leson nan Modil 1 se yon moso nan konvèsasyon sa a.",
      },
      { emoji: "🎓", text: "Ou fini Modil 1 — Premye Pa nan Anglè w!" },
      { emoji: "🎯", text: "Misyon: fè tout konvèsasyon an awotvwa jodi a." },
    ],
  },
];

export function getEnglishPremiumLesson(slug: string) {
  return englishPremiumLessons.find((lesson) => lesson.slug === slug);
}
