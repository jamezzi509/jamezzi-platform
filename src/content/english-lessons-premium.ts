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
  {
    slug: "am-is-are",
    moduleTitle: "Modil 2: Vèb Pisan #1 -- To Be",
    illustrationKey: "emoji",
    heroEmoji: "🔗",
    heroTitle: "Am, Is, Are",
    heroLede:
      "Twa ti mo sa yo se menm vèb la — “to be” — men yo chanje selon ki moun w ap pale de li. Aprann ki mo ki mache ak ki pwonon.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab chwazi am, is, oswa are dapre pwonon an, chak fwa san ou pa bliye.",
    whatYouWillLearn: "ki mo (am/is/are) ki mache ak chak pwonon",
    prerequisite: "Ou fin Modil 1 — Premye Pa nan Anglè w",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Yon sèl vèb, twa fòm — dapre ki moun w ap pale de li.",
    understandBody:
      "**I** toujou pran **am**. **He, She, It** pran **is**. **You, We, They** pran **are**. Se twa gwoup sèlman pou w memorize, epi ou ka itilize vèb “to be” a nenpòt kote.",
    seeItInAction: [
      { line: "I am ready.", tag: "I → am", emoji: "💬" },
      { line: "She is happy.", tag: "He/She/It → is", emoji: "💬" },
      { line: "They are here.", tag: "You/We/They → are", emoji: "💬" },
    ],
    patternBuilderIntro:
      "Klike sou yon pwonon pou wè ki fòm vèb “to be” ki mache ak li.",
    patternBuilderOptions: [
      { chipLabel: "I", display: "I am a student." },
      { chipLabel: "She", display: "She is a student." },
      { chipLabel: "They", display: "They are students." },
    ],
    vocabulary: [
      {
        word: "Ready",
        ipa: "/ˈrɛdi/",
        kreyol: "Pare",
        example: "I am ready.",
      },
      {
        word: "Student",
        ipa: "/ˈstuːdənt/",
        kreyol: "Elèv",
        example: "They are students.",
      },
      {
        word: "Teacher",
        ipa: "/ˈtiːtʃər/",
        kreyol: "Pwofesè",
        example: "She is a teacher.",
      },
      {
        word: "Friends",
        ipa: "/frɛndz/",
        kreyol: "Zanmi",
        example: "We are friends.",
      },
      {
        word: "Here",
        ipa: "/hɪər/",
        kreyol: "Isit la",
        example: "They are here.",
      },
    ],
    pronunciationWord: "Are",
    pronunciationIpa: "/ɑːr/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** “are” sonnen tankou “ar” — pa tankou “eh”.",
    pronunciationMistake:
      "**Erè komen:** pa di “is” pou “they” — “they” toujou pran “are”.",
    mistakeWrong: "They is happy.",
    mistakeCorrect: "They are happy.",
    mistakeWhy:
      "**Poukisa:** “They” fè pati gwoup you/we/they, ki toujou pran “are”, jamè “is”.",
    practice: {
      prompt: "Konplete: She ___ a teacher.",
      options: ["am", "is", "are", "be"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “She” pran ki fòm?",
    },
    thinkEmoji: "🔗",
    thinkPrompt:
      "Ekri twa fraz kout, chak youn ak yon fòm diferan (am/is/are):",
    thinkPlaceholder: "I am... / He is... / They are...",
    aiPrompt:
      "Hi! Can you give me 5 short prompts with different pronouns (I, she, we, etc.) and let me practice choosing am, is, or are correctly?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike chwazi am/is/are.",
    missionTask:
      "🎯 Jodi a, di twa fraz sou moun ou konnen, chak youn ak yon fòm diferan: am, is, ak are.",
    recap: [
      { emoji: "🔗", text: "I → am, He/She/It → is, You/We/They → are." },
      { emoji: "🧩", text: "Se menm vèb “to be” a, twa fòm sèlman." },
      { emoji: "⚠️", text: "“They” pa janm pran “is”." },
      { emoji: "🎯", text: "Misyon: di twa fraz ak twa fòm diferan." },
    ],
  },
  {
    slug: "to-be-contractions",
    moduleTitle: "Modil 2: Vèb Pisan #1 -- To Be",
    illustrationKey: "emoji",
    heroEmoji: "✂️",
    heroTitle: "Yon Fason Pi Kout — Kontraksyon",
    heroLede:
      "An Anglè pale chak jou, moun konn kole pwonon an ak vèb la ansanm pou fè yon mo pi kout: I'm, you're, he's.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize kontraksyon tankou I'm, you're, ak he's san w pa panse de fwa.",
    whatYouWillLearn: "kijan pou kole pwonon an ak vèb “to be” a ansanm",
    prerequisite: "Leson 1 — Am, Is, Are",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Yon apostwòf ranplase lèt ki manke.",
    understandBody:
      "**I am** vin **I'm**. **You are** vin **you're**. **He is** vin **he's**. Apostwòf la (’) montre gen lèt ki disparèt — men sans lan rete menm jan an.",
    seeItInAction: [
      { line: "I'm tired.", tag: "I am → I'm", emoji: "💬" },
      { line: "You're right.", tag: "You are → you're", emoji: "💬" },
      { line: "He's busy.", tag: "He is → he's", emoji: "💬" },
    ],
    patternBuilderIntro: "Klike sou chak pwonon pou wè fòm kout li.",
    patternBuilderOptions: [
      { chipLabel: "I am", display: "I'm" },
      { chipLabel: "You are", display: "You're" },
      { chipLabel: "She is", display: "She's" },
    ],
    vocabulary: [
      {
        word: "Tired",
        ipa: "/ˈtaɪərd/",
        kreyol: "Fatige",
        example: "I'm tired.",
      },
      {
        word: "Right",
        ipa: "/raɪt/",
        kreyol: "Gen rezon",
        example: "You're right.",
      },
      { word: "Busy", ipa: "/ˈbɪzi/", kreyol: "Okipe", example: "He's busy." },
      {
        word: "Late",
        ipa: "/leɪt/",
        kreyol: "An reta",
        example: "We're late.",
      },
      { word: "Sure", ipa: "/ʃʊr/", kreyol: "Sèten", example: "I'm sure." },
    ],
    pronunciationWord: "You're",
    pronunciationIpa: "/jʊr/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** “you're” sonnen tankou yon sèl mo kout, pa de mo separe.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “you're” (you are) ak “your” (pou ou) — yo sonnen menm jan men yo pa menm sans.",
    mistakeWrong: "Your tired.",
    mistakeCorrect: "You're tired.",
    mistakeWhy:
      "**Poukisa:** “Your” montre posesyon (pou ou). “You're” se “you are”. Isit la nou vle di “ou fatige”, kidonk “you're”.",
    practice: {
      prompt: "Chwazi fòm kout ki kòrèk pou “She is”:",
      options: ["She's", "Her's", "Shes'", "She're"],
      correctIndex: 0,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò.",
    },
    thinkEmoji: "✂️",
    thinkPrompt: "Ekri de fraz ak kontraksyon (I'm, you're, he's, elatriye):",
    thinkPlaceholder: "I'm...",
    aiPrompt:
      "Hi! Can you say 5 full sentences with 'am/is/are' and ask me to rewrite each one using the short contraction form?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike kontraksyon yo.",
    missionTask:
      "🎯 Jodi a, itilize yon kontraksyon (I'm, you're, he's...) yon fwa lè w ap pale oswa ekri an Anglè.",
    recap: [
      { emoji: "✂️", text: "Apostwòf ranplase lèt ki manke." },
      { emoji: "🔗", text: "I'm, you're, he's, she's, it's, we're, they're." },
      { emoji: "⚠️", text: "“You're” (you are) pa menm ak “your” (pou ou)." },
      { emoji: "🎯", text: "Misyon: itilize yon kontraksyon jodi a." },
    ],
  },
  {
    slug: "to-be-negatives",
    moduleTitle: "Modil 2: Vèb Pisan #1 -- To Be",
    illustrationKey: "emoji",
    heroEmoji: "🚫",
    heroTitle: "Mwen Pa... — Negatif",
    heroLede:
      "Pou di yon bagay PA vre, ajoute “not” apre vèb “to be” a: am not, isn't, aren't.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab di yon fraz negatif ak “to be” san w pa mele.",
    whatYouWillLearn: "kijan pou ajoute “not” pou fè yon fraz negatif",
    prerequisite: "Leson 2 — Kontraksyon",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Ajoute “not” apre vèb la pou fè li negatif.",
    understandBody:
      "**I am not** rete konsa (pa gen kontraksyon pou “am not” tout kò, eksepte “I'm not”). **Is not** vin **isn't**. **Are not** vin **aren't**. Se menm règ am/is/are a, ajoute “not”.",
    seeItInAction: [
      { line: "I am not ready.", tag: "Negatif ak I", emoji: "💬" },
      { line: "She isn't here.", tag: "is + not → isn't", emoji: "💬" },
      { line: "They aren't tired.", tag: "are + not → aren't", emoji: "💬" },
    ],
    patternBuilderIntro: "Klike sou chak fòm pou wè vèsyon negatif li.",
    patternBuilderOptions: [
      {
        chipLabel: "I",
        display: "I'm not ready.",
        caption: "“I am not” souvan vin “I'm not”.",
      },
      {
        chipLabel: "She",
        display: "She isn't ready.",
        caption: "“is not” → “isn't”.",
      },
      {
        chipLabel: "They",
        display: "They aren't ready.",
        caption: "“are not” → “aren't”.",
      },
    ],
    vocabulary: [
      { word: "Not", ipa: "/nɒt/", kreyol: "Pa", example: "I am not sure." },
      {
        word: "Isn't",
        ipa: "/ˈɪzənt/",
        kreyol: "Pa ye (li)",
        example: "He isn't home.",
      },
      {
        word: "Aren't",
        ipa: "/ɑːrənt/",
        kreyol: "Pa ye (yo/nou)",
        example: "We aren't late.",
      },
      {
        word: "Home",
        ipa: "/hoʊm/",
        kreyol: "Lakay",
        example: "She isn't home.",
      },
      {
        word: "Late",
        ipa: "/leɪt/",
        kreyol: "An reta",
        example: "They aren't late.",
      },
    ],
    pronunciationWord: "Isn't",
    pronunciationIpa: "/ˈɪzənt/",
    mouthTip: "**Ti konsèy pou bouch ou:** “isn't” gen de silab — “IZ-uhnt”.",
    pronunciationMistake:
      "**Erè komen:** pa di “no” pou fè yon fraz negatif — itilize “not” apre vèb “to be” a.",
    mistakeWrong: "I no ready.",
    mistakeCorrect: "I am not ready.",
    mistakeWhy:
      "**Poukisa:** An Anglè, “no” pa ranplase “not” nan yon fraz. Ou toujou bezwen vèb “to be” a (am/is/are) anvan “not”.",
    practice: {
      prompt: "Chwazi fòm negatif ki kòrèk pou “They are tired”:",
      options: [
        "They no tired.",
        "They not tired.",
        "They aren't tired.",
        "They isn't tired.",
      ],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “they” pran ki fòm negatif?",
    },
    thinkEmoji: "🚫",
    thinkPrompt: "Ekri yon fraz negatif sou tèt ou (sa ou PA ye kounye a):",
    thinkPlaceholder: "I am not...",
    aiPrompt:
      "Hi! Can you say 5 true sentences with am/is/are, and let me practice turning each one into a negative sentence?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike fraz negatif yo.",
    missionTask:
      "🎯 Jodi a, di yon fraz negatif vre sou tèt ou, ak “not”, isn't, oswa aren't.",
    recap: [
      { emoji: "🚫", text: "Ajoute “not” apre am/is/are pou fè negatif." },
      { emoji: "✂️", text: "is not → isn't, are not → aren't." },
      { emoji: "⚠️", text: "Pa itilize “no” pou ranplase “not”." },
      { emoji: "🎯", text: "Misyon: di yon fraz negatif vre sou tèt ou." },
    ],
  },
  {
    slug: "to-be-questions",
    moduleTitle: "Modil 2: Vèb Pisan #1 -- To Be",
    illustrationKey: "emoji",
    heroEmoji: "❓",
    heroTitle: "Èske...? — Kesyon Ak To Be",
    heroLede:
      "Pou poze yon kesyon senp ak “to be”, mete vèb la DEVAN pwonon an, olye de dèyè.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab poze ak reponn kesyon senp ak am/is/are.",
    whatYouWillLearn: "kijan pou vire yon fraz an yon kesyon ak “to be”",
    prerequisite: "Leson 3 — Negatif",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Vèb la ale devan pou fè yon kesyon.",
    understandBody:
      "**You are ready** vin **Are you ready?** — vèb “to be” a (am/is/are) senpleman chanje plas ak pwonon an. Pa gen lòt mo pou ajoute.",
    seeItInAction: [
      { line: "Are you ready?", tag: "You are → Are you...?", emoji: "💬" },
      { line: "Is she home?", tag: "She is → Is she...?", emoji: "💬" },
      { line: "Yes, I am. / No, I'm not.", tag: "Repons kout", emoji: "💬" },
    ],
    patternBuilderIntro: "Klike sou chak fraz pou wè kesyon ki koresponn.",
    patternBuilderOptions: [
      { chipLabel: "You are", display: "Are you ready?" },
      { chipLabel: "She is", display: "Is she home?" },
      { chipLabel: "They are", display: "Are they here?" },
    ],
    vocabulary: [
      {
        word: "Ready",
        ipa: "/ˈrɛdi/",
        kreyol: "Pare",
        example: "Are you ready?",
      },
      { word: "Home", ipa: "/hoʊm/", kreyol: "Lakay", example: "Is she home?" },
      { word: "Sure", ipa: "/ʃʊr/", kreyol: "Sèten", example: "Are you sure?" },
      {
        word: "Okay",
        ipa: "/ˌoʊˈkeɪ/",
        kreyol: "Byen",
        example: "Is everything okay?",
      },
      {
        word: "Yes/No",
        ipa: "/jɛs/ /noʊ/",
        kreyol: "Wi/Non",
        example: "Yes, I am.",
      },
    ],
    pronunciationWord: "Are you",
    pronunciationIpa: "/ɑːr juː/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** vwa a monte yon ti kras nan fen kesyon an, tankou lè w ap mande yon bagay reyèl.",
    pronunciationMistake:
      "**Erè komen:** pa kite vèb la kote li te ye — pou yon kesyon, li DWE ale devan pwonon an.",
    mistakeWrong: "You are ready?",
    mistakeCorrect: "Are you ready?",
    mistakeWhy:
      "**Poukisa:** Pou fè yon kesyon kòrèk ak “to be”, vèb la (am/is/are) dwe vini AVAN pwonon an, pa apre.",
    practice: {
      prompt: "Chwazi kesyon ki kòrèk:",
      options: ["She is home?", "Is she home?", "Home is she?", "Is home she?"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — vèb la dwe devan.",
    },
    thinkEmoji: "❓",
    thinkPrompt: "Ekri yon kesyon ak “to be” ou ta poze yon zanmi:",
    thinkPlaceholder: "Are you...?",
    aiPrompt:
      "Hi! Can you ask me 5 simple yes/no questions using am/is/are, and let me practice answering with 'Yes, I am' or 'No, I'm not'?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike poze ak reponn kesyon.",
    missionTask:
      "🎯 Jodi a, poze yon zanmi yon kesyon ak “to be”, tankou “Are you ready?” oswa “Is everything okay?”",
    recap: [
      { emoji: "❓", text: "Vèb “to be” a ale devan pwonon an pou fè kesyon." },
      { emoji: "🔁", text: "You are ready → Are you ready?" },
      { emoji: "✅", text: "Repons kout: Yes, I am. / No, I'm not." },
      { emoji: "🎯", text: "Misyon: poze yon kesyon ak “to be” jodi a." },
    ],
  },
  {
    slug: "describing-people",
    moduleTitle: "Modil 2: Vèb Pisan #1 -- To Be",
    illustrationKey: "emoji",
    heroEmoji: "🧑",
    heroTitle: "Dekri Yon Moun",
    heroLede:
      "Itilize “to be” ansanm ak yon adjektif pou dekri kijan yon moun ye — wotè, karaktè, oswa aparans.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab dekri yon moun ak omwen 5 adjektif diferan.",
    whatYouWillLearn:
      "adjektif pou dekri moun, ak kijan pou mete yo apre “to be”",
    prerequisite: "Leson 4 — Kesyon",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Yon adjektif apre “to be” dekri sijè a.",
    understandBody:
      "**She is tall.** **He is kind.** Adjektif la (tall, kind) vini touswit apre vèb “to be” a, e li pa chanje fòm menm si w ap pale de plizyè moun: **They are tall**, pa “talls”.",
    seeItInAction: [
      { line: "She is tall.", tag: "Wotè", emoji: "💬" },
      { line: "He is kind.", tag: "Karaktè", emoji: "💬" },
      { line: "They are funny.", tag: "Pèsonalite", emoji: "💬" },
    ],
    patternBuilderIntro: "Klike sou chak adjektif pou wè li nan yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Tall", display: "She is tall." },
      { chipLabel: "Kind", display: "He is kind." },
      { chipLabel: "Funny", display: "They are funny." },
    ],
    vocabulary: [
      { word: "Tall", ipa: "/tɔːl/", kreyol: "Wo", example: "She is tall." },
      {
        word: "Short",
        ipa: "/ʃɔːrt/",
        kreyol: "Kout",
        example: "He is short.",
      },
      {
        word: "Kind",
        ipa: "/kaɪnd/",
        kreyol: "Janti",
        example: "She is kind.",
      },
      {
        word: "Funny",
        ipa: "/ˈfʌni/",
        kreyol: "Kokenn/Komik",
        example: "They are funny.",
      },
      {
        word: "Smart",
        ipa: "/smɑːrt/",
        kreyol: "Entelijan",
        example: "He is smart.",
      },
    ],
    pronunciationWord: "Kind",
    pronunciationIpa: "/kaɪnd/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** son “k” la klè, epi “ind” sonnen tankou “kaynd”.",
    pronunciationMistake:
      "**Erè komen:** pa ajoute “s” sou adjektif la menm pou plizyè moun — “They are kinds” pa kòrèk.",
    mistakeWrong: "They are talls.",
    mistakeCorrect: "They are tall.",
    mistakeWhy:
      "**Poukisa:** An Anglè, adjektif yo pa janm pran “s”, menm lè w ap pale de plizyè moun oswa bagay.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "They are talls.",
        "They are tall.",
        "They is tall.",
        "They tall are.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — adjektif pa pran “s”.",
    },
    thinkEmoji: "🧑",
    thinkPrompt: "Dekri yon moun ou konnen ak twa adjektif diferan:",
    thinkPlaceholder: "She is... He is...",
    aiPrompt:
      "Hi! Can you describe 3 different people using adjectives with 'to be', and ask me to repeat each description back correctly?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike dekri moun.",
    missionTask:
      "🎯 Jodi a, dekri yon manm fanmi w oswa yon zanmi ak twa adjektif diferan.",
    recap: [
      { emoji: "🧑", text: "Adjektif vini apre “to be” pou dekri yon moun." },
      { emoji: "⚠️", text: "Adjektif pa janm pran “s”." },
      { emoji: "🗣️", text: "Tall, kind, funny, smart — 4 adjektif itil." },
      { emoji: "🎯", text: "Misyon: dekri yon moun ak twa adjektif." },
    ],
  },
  {
    slug: "describing-feelings",
    moduleTitle: "Modil 2: Vèb Pisan #1 -- To Be",
    illustrationKey: "emoji",
    heroEmoji: "😊",
    heroTitle: "Dekri Santiman",
    heroLede:
      "Menm règ la ak dekri moun, men pou santiman: happy, tired, hungry, nervous.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab eksprime kijan ou santi w ak “to be”.",
    whatYouWillLearn:
      "vokabilè pou santiman, ak kijan pou eksprime yo ak “to be”",
    prerequisite: "Leson 5 — Dekri Yon Moun",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Santiman se yon lòt kalite adjektif apre “to be”.",
    understandBody:
      "**I am happy.** **I am tired.** Menm modèl ak dekri yon moun, men isit la nou pale sou eta emosyonèl oswa fizik ou, pa aparans oswa karaktè.",
    seeItInAction: [
      { line: "I am happy today.", tag: "Santiman pozitif", emoji: "😊" },
      { line: "He is tired.", tag: "Eta fizik", emoji: "😴" },
      { line: "We are hungry.", tag: "Bezwen fizik", emoji: "🍽️" },
    ],
    patternBuilderIntro: "Klike sou chak santiman pou wè li nan yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Happy", display: "I am happy." },
      { chipLabel: "Tired", display: "He is tired." },
      { chipLabel: "Hungry", display: "We are hungry." },
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
        example: "He is tired.",
      },
      {
        word: "Hungry",
        ipa: "/ˈhʌŋɡri/",
        kreyol: "Grangou",
        example: "We are hungry.",
      },
      {
        word: "Nervous",
        ipa: "/ˈnɜːrvəs/",
        kreyol: "Enève/Estrese",
        example: "She is nervous.",
      },
      {
        word: "Excited",
        ipa: "/ɪkˈsaɪtɪd/",
        kreyol: "Eksite",
        example: "They are excited.",
      },
    ],
    pronunciationWord: "Nervous",
    pronunciationIpa: "/ˈnɜːrvəs/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** aksan an sou premye silab la — “NER-vuhs”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I am nervous” lè ou vle di “eksite” — “nervous” se pito yon santiman enkyetid.",
    mistakeWrong: "I am hungry to see you.",
    mistakeCorrect: "I am excited to see you.",
    mistakeWhy:
      "**Poukisa:** “Hungry” vle di grangou (bezwen manje), pa antouzyasm. Pou montre w kontan/eksite pou yon bagay, itilize “excited”.",
    practice: {
      prompt: "Ou pa manje depi maten. Ki santiman ki kòrèk?",
      options: [
        "I am tired.",
        "I am hungry.",
        "I am nervous.",
        "I am excited.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — ki mo ki mache ak “pa manje”?",
    },
    thinkEmoji: "😊",
    thinkPrompt: "Ekri kijan ou santi w kounye a, ak “to be”:",
    thinkPlaceholder: "I am...",
    aiPrompt:
      "Hi! Can you ask me how I'm feeling right now, and help me answer using different feeling words with 'to be'?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike eksprime santiman.",
    missionTask:
      "🎯 Jodi a, di yon moun (oswa ekri) kijan ou santi w kounye a, ak yon mo santiman.",
    recap: [
      { emoji: "😊", text: "Happy, tired, hungry, nervous, excited." },
      { emoji: "🔗", text: "Menm modèl ak dekri moun: to be + santiman." },
      { emoji: "⚠️", text: "“Hungry” ≠ “excited” — pa konfonn yo." },
      { emoji: "🎯", text: "Misyon: di kijan ou santi w kounye a." },
    ],
  },
  {
    slug: "describing-places-things",
    moduleTitle: "Modil 2: Vèb Pisan #1 -- To Be",
    illustrationKey: "emoji",
    heroEmoji: "🏠",
    heroTitle: "Dekri Kote ak Bagay",
    heroLede:
      "Menm modèl “to be” a sèvi pou dekri kote ak bagay tou — gwo, piti, bèl, vye.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab dekri yon kote oswa yon bagay ak “to be”.",
    whatYouWillLearn: "adjektif pou dekri kote ak bagay",
    prerequisite: "Leson 6 — Dekri Santiman",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“To be” a rete menm, sijè a chanje — moun, kote, oswa bagay.",
    understandBody:
      "**The house is big.** **The car is old.** Se menm fòmil la ak dekri moun ak santiman: sijè + to be + adjektif.",
    seeItInAction: [
      { line: "The house is big.", tag: "Dekri yon kay", emoji: "🏠" },
      { line: "The car is old.", tag: "Dekri yon machin", emoji: "🚗" },
      { line: "The city is beautiful.", tag: "Dekri yon vil", emoji: "🌆" },
    ],
    patternBuilderIntro: "Klike sou chak bagay pou wè deskripsyon li.",
    patternBuilderOptions: [
      { chipLabel: "House", display: "The house is big." },
      { chipLabel: "Car", display: "The car is old." },
      { chipLabel: "City", display: "The city is beautiful." },
    ],
    vocabulary: [
      {
        word: "Big",
        ipa: "/bɪg/",
        kreyol: "Gwo",
        example: "The house is big.",
      },
      {
        word: "Small",
        ipa: "/smɔːl/",
        kreyol: "Piti",
        example: "The room is small.",
      },
      {
        word: "Old",
        ipa: "/oʊld/",
        kreyol: "Vye/Ansyen",
        example: "The car is old.",
      },
      {
        word: "New",
        ipa: "/nuː/",
        kreyol: "Nouvo",
        example: "The phone is new.",
      },
      {
        word: "Beautiful",
        ipa: "/ˈbjuːtɪfəl/",
        kreyol: "Bèl",
        example: "The city is beautiful.",
      },
    ],
    pronunciationWord: "Beautiful",
    pronunciationIpa: "/ˈbjuːtɪfəl/",
    mouthTip: "**Ti konsèy pou bouch ou:** mo a gen twa silab — “BYOO-ti-ful”.",
    pronunciationMistake:
      "**Erè komen:** pa mete “the” devan chak non — sèlman lè w ap pale de yon bagay presi.",
    mistakeWrong: "House is big.",
    mistakeCorrect: "The house is big.",
    mistakeWhy:
      "**Poukisa:** Lè w ap pale de yon kay presi (pa nenpòt kay), ou bezwen “the” devan “house”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "House is big.",
        "The house is big.",
        "The house are big.",
        "House the is big.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — manke yon mo devan “house”.",
    },
    thinkEmoji: "🏠",
    thinkPrompt: "Dekri kay ou oswa vil ou ak “to be”:",
    thinkPlaceholder: "My house is...",
    aiPrompt:
      "Hi! Can you ask me to describe my house, my city, and one object I own using 'to be' and adjectives?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike dekri kote ak bagay.",
    missionTask:
      "🎯 Jodi a, dekri kay ou oswa katye w ak yon adjektif, tankou “My house is big” oswa “My street is beautiful”.",
    recap: [
      { emoji: "🏠", text: "Sijè + to be + adjektif dekri kote ak bagay tou." },
      { emoji: "🔑", text: "“The” ale devan yon bagay presi." },
      { emoji: "🗣️", text: "Big, small, old, new, beautiful." },
      { emoji: "🎯", text: "Misyon: dekri kay ou oswa katye w." },
    ],
  },
  {
    slug: "talking-about-weather",
    moduleTitle: "Modil 2: Vèb Pisan #1 -- To Be",
    illustrationKey: "emoji",
    heroEmoji: "☀️",
    heroTitle: "Pale De Tan An",
    heroLede:
      "An Anglè, nou itilize “It is” pou pale de tan an — “It” pa reprezante yon moun oswa yon bagay presi, se jis fason pou kòmanse fraz la.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de tan an ak “It is”.",
    whatYouWillLearn: "kijan pou itilize “It is” pou pale de tan an",
    prerequisite: "Leson 7 — Dekri Kote ak Bagay",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“It” se yon pwonon espesyal pou tan an, lè, ak dat.",
    understandBody:
      "**It is hot.** **It is raining.** “It” pa reprezante yon bagay presi isit la — se jis kijan Anglè kòmanse fraz sou tan an, lè, ak dat.",
    seeItInAction: [
      { line: "It is hot today.", tag: "Chalè", emoji: "☀️" },
      { line: "It is cold.", tag: "Fredi", emoji: "❄️" },
      { line: "It is raining.", tag: "Lapli", emoji: "🌧️" },
    ],
    patternBuilderIntro: "Klike sou chak tan pou wè fraz ki koresponn.",
    patternBuilderOptions: [
      { chipLabel: "Hot", display: "It is hot." },
      { chipLabel: "Cold", display: "It is cold." },
      { chipLabel: "Rainy", display: "It is raining." },
    ],
    vocabulary: [
      { word: "Hot", ipa: "/hɒt/", kreyol: "Cho", example: "It is hot today." },
      { word: "Cold", ipa: "/koʊld/", kreyol: "Frèt", example: "It is cold." },
      {
        word: "Sunny",
        ipa: "/ˈsʌni/",
        kreyol: "Solèy klere",
        example: "It is sunny.",
      },
      {
        word: "Rainy",
        ipa: "/ˈreɪni/",
        kreyol: "Lapli",
        example: "It is rainy.",
      },
      {
        word: "Windy",
        ipa: "/ˈwɪndi/",
        kreyol: "Van ap soufle",
        example: "It is windy.",
      },
    ],
    pronunciationWord: "It is",
    pronunciationIpa: "/ɪt ɪz/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** nan pale chak jou, moun konn di “it's” (kontraksyon) olye de “it is”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye “It” — pa gen fraz tan an ki kòmanse san li an Anglè.",
    mistakeWrong: "Is hot today.",
    mistakeCorrect: "It is hot today.",
    mistakeWhy:
      "**Poukisa:** An Anglè, chak fraz bezwen yon sijè. Pou pale de tan an, sijè a se toujou “It”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou di gen lapli:",
      options: [
        "Is raining.",
        "It raining.",
        "It is raining.",
        "Raining it is.",
      ],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — ou bezwen “It is” devan.",
    },
    thinkEmoji: "☀️",
    thinkPrompt: "Dekri tan an jodi a kote ou ye, ak “It is”:",
    thinkPlaceholder: "It is...",
    aiPrompt:
      "Hi! Can you ask me what the weather is like today, and help me answer using 'It is...' with different weather words?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike pale de tan an.",
    missionTask:
      "🎯 Jodi a, gade tan an deyò epi di yon fraz sou li ak “It is”.",
    recap: [
      { emoji: "☀️", text: "“It is” kòmanse chak fraz sou tan an." },
      { emoji: "🌡️", text: "Hot, cold, sunny, rainy, windy." },
      { emoji: "✂️", text: "“It is” souvan vin “it's” lè w ap pale vit." },
      { emoji: "🎯", text: "Misyon: di kijan tan an ye jodi a." },
    ],
  },
  {
    slug: "jobs-and-family",
    moduleTitle: "Modil 2: Vèb Pisan #1 -- To Be",
    illustrationKey: "emoji",
    heroEmoji: "👨‍👩‍👧‍👦",
    heroTitle: "Travay ak Fanmi",
    heroLede:
      "Itilize “to be” pou di ki travay yon moun fè, oswa ki relasyon fanmi ou genyen ak yon moun.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de travay ou ak fanmi ou ak “to be”.",
    whatYouWillLearn: "vokabilè pou travay ak fanmi, ak kijan pou prezante yo",
    prerequisite: "Leson 8 — Pale De Tan An",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“To be” prezante ki moun yon moun ye — nan travay ak nan fanmi.",
    understandBody:
      "**He is a teacher.** **She is my sister.** Menm fòmil la ankò: sijè + to be + wòl oswa relasyon.",
    seeItInAction: [
      { line: "He is a teacher.", tag: "Travay", emoji: "👨‍🏫" },
      { line: "She is a nurse.", tag: "Travay", emoji: "👩‍⚕️" },
      { line: "This is my sister.", tag: "Fanmi", emoji: "👭" },
    ],
    patternBuilderIntro: "Klike sou chak wòl pou wè li nan yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Teacher", display: "He is a teacher." },
      { chipLabel: "Nurse", display: "She is a nurse." },
      { chipLabel: "Sister", display: "This is my sister." },
    ],
    vocabulary: [
      {
        word: "Teacher",
        ipa: "/ˈtiːtʃər/",
        kreyol: "Pwofesè",
        example: "He is a teacher.",
      },
      {
        word: "Nurse",
        ipa: "/nɜːrs/",
        kreyol: "Enfimyè",
        example: "She is a nurse.",
      },
      {
        word: "Sister",
        ipa: "/ˈsɪstər/",
        kreyol: "Sè",
        example: "This is my sister.",
      },
      {
        word: "Brother",
        ipa: "/ˈbrʌðər/",
        kreyol: "Frè",
        example: "He is my brother.",
      },
      {
        word: "Parents",
        ipa: "/ˈpɛərənts/",
        kreyol: "Paran",
        example: "They are my parents.",
      },
    ],
    pronunciationWord: "Nurse",
    pronunciationIpa: "/nɜːrs/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** son “ur” la fèmen, tankou “nurss”, pa “nows”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye “a”/“an” devan yon travay — “He is teacher” pa kòrèk.",
    mistakeWrong: "He is teacher.",
    mistakeCorrect: "He is a teacher.",
    mistakeWhy:
      "**Poukisa:** An Anglè, ou bezwen “a” oswa “an” devan yon travay lè w ap pale de yon sèl moun — “a teacher”, “a nurse”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "He is teacher.",
        "He is a teacher.",
        "He a teacher.",
        "He teacher is.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — manke yon ti mo devan “teacher”.",
    },
    thinkEmoji: "👨‍👩‍👧‍👦",
    thinkPrompt: "Prezante yon manm fanmi ou ak travay li, ak “to be”:",
    thinkPlaceholder: "This is my... He/She is a...",
    aiPrompt:
      "Hi! Can you ask me about my job and my family members, and help me answer using 'to be' correctly, including a/an before jobs?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike pale de travay ak fanmi.",
    missionTask:
      "🎯 Jodi a, prezante yon manm fanmi w ak travay li (oswa travay ou), ak “to be”.",
    recap: [
      {
        emoji: "👨‍🏫",
        text: "“A”/“an” ale devan yon travay: a teacher, a nurse.",
      },
      { emoji: "👨‍👩‍👧", text: "“To be” prezante relasyon fanmi tou." },
      { emoji: "🔗", text: "Menm fòmil: sijè + to be + wòl/relasyon." },
      { emoji: "🎯", text: "Misyon: prezante yon manm fanmi w." },
    ],
  },
  {
    slug: "to-be-mission",
    moduleTitle: "Modil 2: Vèb Pisan #1 -- To Be",
    illustrationKey: "emoji",
    heroEmoji: "🌍",
    heroTitle: "Dekri Mond Ou",
    heroLede:
      "Se lè a pou mete tout sa ou aprann nan Modil 2 ansanm — pale de tèt ou, santiman w, fanmi w, ak mond ou nan yon sèl mesaj.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab konbine plizyè fraz “to be” pou pale de mond ou.",
    whatYouWillLearn:
      "kijan pou konbine tout sa ou aprann nan Modil 2 nan yon sèl deskripsyon",
    prerequisite: "Leson 9 — Travay ak Fanmi",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Plizyè fraz “to be” ansanm rakonte yon istwa.",
    understandBody:
      "Ou ka kòmanse ak non ou, ale nan santiman w, epi fini ak fanmi w oswa travay ou — tout ak menm vèb “to be” a. **Se konsa moun rakonte tèt yo an Anglè.**",
    seeItInAction: [
      { line: "I am Marie. I am a student.", tag: "Non + Wòl", emoji: "🙂" },
      { line: "I am happy today.", tag: "Santiman", emoji: "😊" },
      {
        line: "This is my family. We are close.",
        tag: "Fanmi",
        emoji: "👨‍👩‍👧",
      },
    ],
    patternBuilderIntro: "Klike sou chak pati pou wè kijan yo kole ansanm.",
    patternBuilderOptions: [
      { chipLabel: "1. Prezante", display: "I am Marie." },
      { chipLabel: "2. Santiman", display: "I am happy today." },
      { chipLabel: "3. Fanmi", display: "This is my family." },
    ],
    vocabulary: [
      {
        word: "World",
        ipa: "/wɜːrld/",
        kreyol: "Mond",
        example: "This is my world.",
      },
      {
        word: "Close",
        ipa: "/kloʊs/",
        kreyol: "Pwòch",
        example: "We are close.",
      },
      { word: "Proud", ipa: "/praʊd/", kreyol: "Fyè", example: "I am proud." },
      {
        word: "Together",
        ipa: "/təˈgɛðər/",
        kreyol: "Ansanm",
        example: "We are together.",
      },
      {
        word: "Family",
        ipa: "/ˈfæməli/",
        kreyol: "Fanmi",
        example: "This is my family.",
      },
    ],
    pronunciationWord: "Proud",
    pronunciationIpa: "/praʊd/",
    mouthTip: "**Ti konsèy pou bouch ou:** son “ou” long, tankou “prawd”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye kole plizyè fraz kout ansanm — pa gen okenn erè si fraz yo senp.",
    mistakeWrong: "I Marie happy student.",
    mistakeCorrect: "I am Marie. I am happy. I am a student.",
    mistakeWhy:
      "**Poukisa:** Chak lide (non, santiman, wòl) bezwen pwòp fraz li ak “to be” pa li — pa antase yo tout ansanm san vèb.",
    practice: {
      prompt: "Ki fraz ki byen konstwi?",
      options: [
        "I Marie happy.",
        "I am Marie happy.",
        "I am Marie. I am happy.",
        "Marie I am happy.",
      ],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — chak lide bezwen pwòp “am” pa li.",
    },
    thinkEmoji: "🌍",
    thinkPrompt: "Ekri yon ti paragraf sou tèt ou ak omwen 3 fraz “to be”:",
    thinkPlaceholder: "I am... I am... This is...",
    aiPrompt:
      "Hi! Can you listen to a short description of myself using 'to be' sentences, and give me friendly feedback on my grammar?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 2 ansanm.",
    missionTask:
      "🎯 Jodi a, ekri oswa di yon ti paragraf sou tèt ou: non ou, kijan ou santi w, ak fanmi ou — tout ak “to be”.",
    recap: [
      { emoji: "🌍", text: "Plizyè fraz “to be” ansanm rakonte yon istwa." },
      {
        emoji: "🧩",
        text: "Non + santiman + fanmi/travay = yon deskripsyon konplè.",
      },
      { emoji: "🎓", text: "Ou fini Modil 2 — Vèb Pisan #1 (To Be)!" },
      { emoji: "🎯", text: "Misyon: ekri yon ti paragraf sou tèt ou." },
    ],
  },
];

export function getEnglishPremiumLesson(slug: string) {
  return englishPremiumLessons.find((lesson) => lesson.slug === slug);
}
