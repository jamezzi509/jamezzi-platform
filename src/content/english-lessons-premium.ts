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
  {
    slug: "have-and-has",
    moduleTitle: "Modil 3: Vèb Pisan #2 -- To Have",
    illustrationKey: "emoji",
    heroEmoji: "🤲",
    heroTitle: "Have ak Has",
    heroLede:
      "Menm jan ak “to be”, vèb “to have” gen de fòm: “have” pou pifò pwonon, “has” pou he/she/it.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab chwazi have oswa has dapre pwonon an.",
    whatYouWillLearn: "ki fòm (have/has) ki mache ak chak pwonon",
    prerequisite: "Ou fin Modil 2 — Vèb Pisan #1 (To Be)",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "I/You/We/They pran “have”. He/She/It pran “has”.",
    understandBody:
      "**I have a car.** **She has a car.** Se menm vèb la, “to have”, men li chanje fòm selon ki moun w ap pale de li — menm jan ak “to be”.",
    seeItInAction: [
      { line: "I have a phone.", tag: "I → have", emoji: "💬" },
      { line: "She has a phone.", tag: "He/She/It → has", emoji: "💬" },
      { line: "They have a car.", tag: "You/We/They → have", emoji: "💬" },
    ],
    patternBuilderIntro:
      "Klike sou yon pwonon pou wè ki fòm vèb “to have” ki mache ak li.",
    patternBuilderOptions: [
      { chipLabel: "I", display: "I have a phone." },
      { chipLabel: "She", display: "She has a phone." },
      { chipLabel: "They", display: "They have a car." },
    ],
    vocabulary: [
      {
        word: "Car",
        ipa: "/kɑːr/",
        kreyol: "Machin",
        example: "She has a car.",
      },
      { word: "Book", ipa: "/bʊk/", kreyol: "Liv", example: "I have a book." },
      {
        word: "Pet",
        ipa: "/pɛt/",
        kreyol: "Bèt kay",
        example: "He has a pet.",
      },
      {
        word: "Job",
        ipa: "/dʒɒb/",
        kreyol: "Travay",
        example: "She has a job.",
      },
      {
        word: "Plan",
        ipa: "/plæn/",
        kreyol: "Plan",
        example: "They have a plan.",
      },
    ],
    pronunciationWord: "Has",
    pronunciationIpa: "/hæz/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** son “z” nan fen “has” dwe tande, pa “s”.",
    pronunciationMistake:
      "**Erè komen:** pa di “have” pou he/she/it — se “has”.",
    mistakeWrong: "She have a car.",
    mistakeCorrect: "She has a car.",
    mistakeWhy:
      "**Poukisa:** He/She/It toujou pran “has”, jamè “have” — menm règ ak am/is/are.",
    practice: {
      prompt: "Konplete: He ___ a new phone.",
      options: ["have", "has", "having", "had"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “He” pran ki fòm?",
    },
    thinkEmoji: "🤲",
    thinkPrompt: "Ekri twa fraz, chak youn ak have oswa has:",
    thinkPlaceholder: "I have... / She has...",
    aiPrompt:
      "Hi! Can you give me 5 different pronouns and let me practice choosing have or has correctly?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike chwazi have/has.",
    missionTask:
      "🎯 Jodi a, di twa fraz sou sa moun nan fanmi w genyen, ak have oswa has.",
    recap: [
      { emoji: "🤲", text: "I/You/We/They → have, He/She/It → has." },
      { emoji: "🧩", text: "Se menm vèb “to have” a, de fòm sèlman." },
      { emoji: "⚠️", text: "Pa janm di “She have” — se “She has”." },
      { emoji: "🎯", text: "Misyon: di twa fraz ak have/has." },
    ],
  },
  {
    slug: "have-contractions",
    moduleTitle: "Modil 3: Vèb Pisan #2 -- To Have",
    illustrationKey: "emoji",
    heroEmoji: "✂️",
    heroTitle: "Kontraksyon Ak Have",
    heroLede:
      "Menm jan ak to be, “have” ka vin kout tou: I've, you've, we've. Men atansyon — “he's” ka vle di “he is” OSWA “he has”.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize kontraksyon ak “have” san w pa konfonn yo ak “to be”.",
    whatYouWillLearn: "kontraksyon ak have, ak jan pou pa konfonn yo ak to be",
    prerequisite: "Leson 1 — Have ak Has",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Kontèks montre si “'s” vle di “is” oswa “has”.",
    understandBody:
      "**I have** vin **I've**. Men **he's** ka vle di **he is** OSWA **he has**. Gade rès fraz la pou konnen sans lan: **He's tired** (is) kont **He's got a car** (has).",
    seeItInAction: [
      { line: "I've got a question.", tag: "I have → I've", emoji: "💬" },
      { line: "We've got time.", tag: "We have → we've", emoji: "💬" },
      {
        line: "He's got a car.",
        tag: "He has → he's (atansyon!)",
        emoji: "💬",
      },
    ],
    patternBuilderIntro: "Klike sou chak pwonon pou wè fòm kout li.",
    patternBuilderOptions: [
      { chipLabel: "I have", display: "I've" },
      { chipLabel: "You have", display: "You've" },
      { chipLabel: "We have", display: "We've" },
    ],
    vocabulary: [
      {
        word: "Got",
        ipa: "/gɒt/",
        kreyol: "Genyen (fòm kout)",
        example: "I've got an idea.",
      },
      {
        word: "Question",
        ipa: "/ˈkwɛstʃən/",
        kreyol: "Kesyon",
        example: "I've got a question.",
      },
      {
        word: "Time",
        ipa: "/taɪm/",
        kreyol: "Tan",
        example: "We've got time.",
      },
      {
        word: "Tired",
        ipa: "/ˈtaɪərd/",
        kreyol: "Fatige",
        example: "He's tired.",
      },
      {
        word: "Car",
        ipa: "/kɑːr/",
        kreyol: "Machin",
        example: "He's got a car.",
      },
    ],
    pronunciationWord: "I've",
    pronunciationIpa: "/aɪv/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** “I've” sonnen tankou “ayv”, yon sèl silab.",
    pronunciationMistake:
      "**Erè komen:** pa sipoze “he's” toujou vle di “he is” — gade kontèks la.",
    mistakeWrong: "He's a car.",
    mistakeCorrect: "He's got a car.",
    mistakeWhy:
      "**Poukisa:** “He's” pou kont li pa ka swiv yon non dirèkteman pou vle di “has”. Ou bezwen “got” apre: **He's got a car**. San “got”, “He's a car” ta vle di “He is a car”, ki pa gen sans.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou di “He has a car”:",
      options: [
        "He's a car.",
        "He's got a car.",
        "He've a car.",
        "He has got car.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — ou bezwen “got” apre “he's”.",
    },
    thinkEmoji: "✂️",
    thinkPrompt:
      "Ekri de fraz ak kontraksyon “have” (I've, we've, they've...):",
    thinkPlaceholder: "I've got...",
    aiPrompt:
      "Hi! Can you say 5 sentences using 'have' and ask me to rewrite each one using contractions like I've or he's got?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike kontraksyon have yo.",
    missionTask:
      "🎯 Jodi a, itilize yon kontraksyon ak “have” (I've got, we've got...) yon fwa jodi a.",
    recap: [
      { emoji: "✂️", text: "I've, you've, we've, they've — kontraksyon klè." },
      { emoji: "⚠️", text: "“He's”/“She's” ka vle di “is” OSWA “has”." },
      { emoji: "🔑", text: "Ajoute “got” apre “'s” lè l vle di “has”." },
      { emoji: "🎯", text: "Misyon: itilize yon kontraksyon have jodi a." },
    ],
  },
  {
    slug: "have-questions",
    moduleTitle: "Modil 3: Vèb Pisan #2 -- To Have",
    illustrationKey: "emoji",
    heroEmoji: "❓",
    heroTitle: "Èske Ou Genyen...?",
    heroLede:
      "Kontrèman ak “to be”, “have” pa chanje plas ak pwonon an pou fè yon kesyon — ou bezwen ajoute “do” oswa “does”.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab poze ak reponn kesyon ak “have” lè w itilize do/does.",
    whatYouWillLearn: "kijan pou itilize “do”/“does” pou poze kesyon ak have",
    prerequisite: "Leson 2 — Kontraksyon Ak Have",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“Have” pa chanje plas tankou “to be” — ou bezwen “do” oswa “does”.",
    understandBody:
      "Kontrèman ak “to be”, “have” pa ka chanje plas ak pwonon an pou fè yon kesyon. Ou bezwen ajoute **Do** (I/you/we/they) oswa **Does** (he/she/it) devan: **Do you have a car?** **Does she have a car?**",
    seeItInAction: [
      { line: "Do you have a car?", tag: "Do + you/we/they", emoji: "💬" },
      { line: "Does she have a car?", tag: "Does + he/she/it", emoji: "💬" },
      { line: "Yes, I do. / No, I don't.", tag: "Repons kout", emoji: "💬" },
    ],
    patternBuilderIntro: "Klike sou chak pwonon pou wè kesyon ki koresponn.",
    patternBuilderOptions: [
      { chipLabel: "You", display: "Do you have a car?" },
      { chipLabel: "She", display: "Does she have a car?" },
      { chipLabel: "They", display: "Do they have a car?" },
    ],
    vocabulary: [
      {
        word: "Do",
        ipa: "/duː/",
        kreyol: "(mo pou kesyon)",
        example: "Do you have time?",
      },
      {
        word: "Does",
        ipa: "/dʌz/",
        kreyol: "(mo pou kesyon, li/li)",
        example: "Does he have a car?",
      },
      {
        word: "Change",
        ipa: "/tʃeɪndʒ/",
        kreyol: "Monnen",
        example: "Do you have change?",
      },
      {
        word: "Extra",
        ipa: "/ˈɛkstrə/",
        kreyol: "An plis",
        example: "Do you have an extra pen?",
      },
      {
        word: "Minute",
        ipa: "/ˈmɪnɪt/",
        kreyol: "Minit",
        example: "Do you have a minute?",
      },
    ],
    pronunciationWord: "Does",
    pronunciationIpa: "/dʌz/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** “does” sonnen tankou “duz”, pa “dohz”.",
    pronunciationMistake:
      "**Erè komen:** pa di “Have you a car?” — sa se yon ansyen fòm Britanik, pa itilize l jodi a.",
    mistakeWrong: "Have you a car?",
    mistakeCorrect: "Do you have a car?",
    mistakeWhy:
      "**Poukisa:** An Anglè modèn, “have” bezwen “do”/“does” pou fè yon kesyon kòrèk — pa chanje plas ak pwonon an tankou “to be”.",
    practice: {
      prompt: "Chwazi kesyon ki kòrèk pou “she”:",
      options: [
        "Has she a car?",
        "Does she have a car?",
        "Do she has a car?",
        "She has a car?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “she” pran “does”.",
    },
    thinkEmoji: "❓",
    thinkPrompt: "Ekri yon kesyon ak “have” ou ta poze yon zanmi:",
    thinkPlaceholder: "Do you have...?",
    aiPrompt:
      "Hi! Can you ask me 5 simple yes/no questions using 'do you have' or 'does he/she have', and let me practice answering?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike poze kesyon ak have.",
    missionTask:
      "🎯 Jodi a, poze yon zanmi yon kesyon ak “Do you have...?” oswa “Does she have...?”",
    recap: [
      { emoji: "❓", text: "“Do” (I/you/we/they) + have pou fè kesyon." },
      { emoji: "🔑", text: "“Does” (he/she/it) + have pou fè kesyon." },
      { emoji: "✅", text: "Repons kout: Yes, I do. / No, I don't." },
      { emoji: "🎯", text: "Misyon: poze yon kesyon ak have jodi a." },
    ],
  },
  {
    slug: "have-negatives",
    moduleTitle: "Modil 3: Vèb Pisan #2 -- To Have",
    illustrationKey: "emoji",
    heroEmoji: "🚫",
    heroTitle: "Mwen Pa Genyen — Negatif",
    heroLede:
      "Pou di ou PA genyen yon bagay, ajoute “don't” oswa “doesn't” devan “have”.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab di yon fraz negatif ak “have” san w pa mele.",
    whatYouWillLearn:
      "kijan pou ajoute “don't”/“doesn't” pou fè negatif ak have",
    prerequisite: "Leson 3 — Kesyon Ak Have",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Menm mo ki fè kesyon an (do/does) fè negatif la tou.",
    understandBody:
      "**I don't have** (I/you/we/they). **She doesn't have** (he/she/it). Menm règ ak kesyon an — “have” toujou bezwen do/does, menm pou negatif.",
    seeItInAction: [
      { line: "I don't have time.", tag: "I/you/we/they + don't", emoji: "💬" },
      {
        line: "She doesn't have a car.",
        tag: "He/she/it + doesn't",
        emoji: "💬",
      },
      { line: "We don't have any money.", tag: "Negatif", emoji: "💬" },
    ],
    patternBuilderIntro: "Klike sou chak pwonon pou wè fòm negatif li.",
    patternBuilderOptions: [
      { chipLabel: "I", display: "I don't have time." },
      { chipLabel: "She", display: "She doesn't have a car." },
      { chipLabel: "We", display: "We don't have money." },
    ],
    vocabulary: [
      {
        word: "Don't",
        ipa: "/doʊnt/",
        kreyol: "Pa (I/you/we/they)",
        example: "I don't have time.",
      },
      {
        word: "Doesn't",
        ipa: "/ˈdʌzənt/",
        kreyol: "Pa (he/she/it)",
        example: "She doesn't have a car.",
      },
      {
        word: "Any",
        ipa: "/ˈɛni/",
        kreyol: "Okenn",
        example: "We don't have any money.",
      },
      {
        word: "Enough",
        ipa: "/ɪˈnʌf/",
        kreyol: "Ase",
        example: "I don't have enough time.",
      },
      {
        word: "Idea",
        ipa: "/aɪˈdiːə/",
        kreyol: "Lide",
        example: "I don't have an idea.",
      },
    ],
    pronunciationWord: "Doesn't",
    pronunciationIpa: "/ˈdʌzənt/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab — “DUZ-uhnt”.",
    pronunciationMistake:
      "**Erè komen:** pa di “She don't have” — “she” pran “doesn't”, pa “don't”.",
    mistakeWrong: "She don't have a car.",
    mistakeCorrect: "She doesn't have a car.",
    mistakeWhy:
      "**Poukisa:** He/She/It toujou pran “doesn't”, menm jan yo pran “has” nan fraz pozitif — jamè “don't”.",
    practice: {
      prompt: "Chwazi fraz negatif ki kòrèk pou “he”:",
      options: [
        "He don't have time.",
        "He doesn't have time.",
        "He not have time.",
        "He no have time.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “he” pran “doesn't”.",
    },
    thinkEmoji: "🚫",
    thinkPrompt: "Ekri yon fraz sou yon bagay ou PA genyen kounye a:",
    thinkPlaceholder: "I don't have...",
    aiPrompt:
      "Hi! Can you say 5 true sentences with have/has, and let me practice turning each one into a negative with don't or doesn't?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike fraz negatif ak have.",
    missionTask:
      "🎯 Jodi a, di yon fraz vre sou yon bagay ou PA genyen, ak don't oswa doesn't.",
    recap: [
      { emoji: "🚫", text: "I/you/we/they + don't have." },
      { emoji: "🔑", text: "He/she/it + doesn't have." },
      { emoji: "⚠️", text: "Pa janm di “She don't” — se “She doesn't”." },
      { emoji: "🎯", text: "Misyon: di yon bagay ou pa genyen." },
    ],
  },
  {
    slug: "talking-about-had",
    moduleTitle: "Modil 3: Vèb Pisan #2 -- To Have",
    illustrationKey: "emoji",
    heroEmoji: "🕰️",
    heroTitle: "Had — Pale De Tan Lontan",
    heroLede:
      "“Had” se fòm tan pase pou “have” ak “has” — li sèvi pou di sa ou te genyen anvan.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “had” pou pale de sa ou te genyen nan tan pase.",
    whatYouWillLearn: "kijan pou itilize “had”, fòm tan pase pou have/has",
    prerequisite: "Leson 4 — Negatif",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“Had” rete menm pou tout pwonon — pa gen “haved” oswa “hads”.",
    understandBody:
      "Kontrèman ak “have/has” ki chanje selon pwonon, **had** rete menm pou tout moun: I had, you had, he had, they had. Li montre yon bagay ou te genyen AVAN, ki pa vre ankò kounye a.",
    seeItInAction: [
      { line: "I had a bike when I was young.", tag: "Tan pase", emoji: "💬" },
      { line: "She had a question yesterday.", tag: "Tan pase", emoji: "💬" },
      { line: "We had a great day.", tag: "Tan pase", emoji: "💬" },
    ],
    patternBuilderIntro: "Klike sou chak pwonon pou wè “had” nan yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "I", display: "I had a bike." },
      { chipLabel: "She", display: "She had a question." },
      { chipLabel: "We", display: "We had a great day." },
    ],
    vocabulary: [
      {
        word: "Yesterday",
        ipa: "/ˈjɛstərdeɪ/",
        kreyol: "Yè",
        example: "I had a meeting yesterday.",
      },
      {
        word: "Bike",
        ipa: "/baɪk/",
        kreyol: "Bisiklèt",
        example: "I had a bike.",
      },
      {
        word: "Young",
        ipa: "/jʌŋ/",
        kreyol: "Jèn",
        example: "When I was young...",
      },
      {
        word: "Meeting",
        ipa: "/ˈmiːtɪŋ/",
        kreyol: "Reyinyon",
        example: "She had a meeting.",
      },
      {
        word: "Great",
        ipa: "/greɪt/",
        kreyol: "Ekselan",
        example: "We had a great day.",
      },
    ],
    pronunciationWord: "Had",
    pronunciationIpa: "/hæd/",
    mouthTip: "**Ti konsèy pou bouch ou:** yon sèl silab kout, son “æ” ouvè.",
    pronunciationMistake:
      "**Erè komen:** pa di “haved” — “had” rete menm pou tout moun.",
    mistakeWrong: "I haved a bike.",
    mistakeCorrect: "I had a bike.",
    mistakeWhy:
      "**Poukisa:** “Had” se yon fòm iregilye — li pa pran “-ed” tankou anpil lòt vèb tan pase.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou pale de yè:",
      options: [
        "I have a meeting yesterday.",
        "I had a meeting yesterday.",
        "I haved a meeting yesterday.",
        "I has a meeting yesterday.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — ou bezwen fòm tan pase a.",
    },
    thinkEmoji: "🕰️",
    thinkPrompt: "Ekri yon fraz sou yon bagay ou te genyen nan tan lontan:",
    thinkPlaceholder: "I had...",
    aiPrompt:
      "Hi! Can you ask me what I had when I was a child, and help me answer using 'had' correctly?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike “had”.",
    missionTask:
      "🎯 Jodi a, di yon fraz sou yon bagay ou te genyen nan tan lontan, ak “had”.",
    recap: [
      { emoji: "🕰️", text: "“Had” se fòm tan pase pou have/has." },
      {
        emoji: "🔗",
        text: "Rete menm pou tout pwonon: I had, she had, they had.",
      },
      { emoji: "⚠️", text: "Pa gen “haved” — “had” se yon fòm iregilye." },
      { emoji: "🎯", text: "Misyon: di yon bagay ou te genyen anvan." },
    ],
  },
  {
    slug: "have-family",
    moduleTitle: "Modil 3: Vèb Pisan #2 -- To Have",
    illustrationKey: "emoji",
    heroEmoji: "👨‍👩‍👧‍👦",
    heroTitle: "Fanmi Ou",
    heroLede:
      "Itilize “have” pou di konbyen moun ou genyen nan fanmi w — frè, sè, timoun, elatriye.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de gwosè fanmi w ak “have”.",
    whatYouWillLearn: "vokabilè fanmi, ak kijan pou konte moun ak “have”",
    prerequisite: "Leson 5 — Had",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Have” prezante konbyen moun ou genyen nan fanmi w.",
    understandBody:
      "**I have two brothers.** **She has one sister.** Kontrèman ak Modil 2 ki te itilize “to be” pou prezante moun (“This is my sister”), isit la nou itilize “have” pou konte yo.",
    seeItInAction: [
      { line: "I have two brothers.", tag: "Konte", emoji: "👦" },
      { line: "She has one sister.", tag: "Konte", emoji: "👧" },
      {
        line: "We have a big family.",
        tag: "Deskripsyon jeneral",
        emoji: "👨‍👩‍👧‍👦",
      },
    ],
    patternBuilderIntro: "Klike sou chak moun pou wè yon fraz sou fanmi.",
    patternBuilderOptions: [
      { chipLabel: "Brothers", display: "I have two brothers." },
      { chipLabel: "Sister", display: "She has one sister." },
      { chipLabel: "Children", display: "They have three children." },
    ],
    vocabulary: [
      {
        word: "Brother",
        ipa: "/ˈbrʌðər/",
        kreyol: "Frè",
        example: "I have two brothers.",
      },
      {
        word: "Sister",
        ipa: "/ˈsɪstər/",
        kreyol: "Sè",
        example: "She has one sister.",
      },
      {
        word: "Children",
        ipa: "/ˈtʃɪldrən/",
        kreyol: "Timoun",
        example: "They have three children.",
      },
      {
        word: "Cousin",
        ipa: "/ˈkʌzən/",
        kreyol: "Kouzen/Kouzin",
        example: "I have many cousins.",
      },
      {
        word: "Grandparents",
        ipa: "/ˈgrænˌpɛərənts/",
        kreyol: "Granparan",
        example: "We have loving grandparents.",
      },
    ],
    pronunciationWord: "Children",
    pronunciationIpa: "/ˈtʃɪldrən/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** de silab, “CHIL-druhn” — pa “childs”.",
    pronunciationMistake:
      "**Erè komen:** pa di “childs” — fòm pliryèl la se “children”.",
    mistakeWrong: "I have three childs.",
    mistakeCorrect: "I have three children.",
    mistakeWhy:
      "**Poukisa:** “Child” gen yon fòm pliryèl iregilye: “children”, pa “childs”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I have three childs.",
        "I have three children.",
        "I has three children.",
        "I have three child.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “child” pliryèl se “children”.",
    },
    thinkEmoji: "👨‍👩‍👧‍👦",
    thinkPrompt: "Ekri konbyen frè/sè ou genyen ak “have”:",
    thinkPlaceholder: "I have...",
    aiPrompt:
      "Hi! Can you ask me about my family — how many brothers, sisters, or children I have — and help me answer using 'have'?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike pale de fanmi w.",
    missionTask:
      "🎯 Jodi a, di konbyen manm fanmi ou genyen (frè, sè, timoun) ak “have”.",
    recap: [
      { emoji: "👨‍👩‍👧‍👦", text: "“Have” konte moun nan fanmi w." },
      { emoji: "⚠️", text: "“Children”, pa “childs” — fòm iregilye." },
      { emoji: "🔗", text: "I/we/they have, he/she has." },
      { emoji: "🎯", text: "Misyon: di konbyen moun ki nan fanmi w." },
    ],
  },
  {
    slug: "have-money",
    moduleTitle: "Modil 3: Vèb Pisan #2 -- To Have",
    illustrationKey: "emoji",
    heroEmoji: "💵",
    heroTitle: "Pale De Lajan",
    heroLede:
      "Itilize “have” pou di konbyen lajan ou genyen, oswa sa ou bezwen.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de lajan ak “have”.",
    whatYouWillLearn:
      "vokabilè lajan, ak kijan pou itilize “have” pou pale de li",
    prerequisite: "Leson 6 — Fanmi Ou",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“Have” dekri konbyen lajan ou genyen, oswa sa ou bezwen.",
    understandBody:
      "**I have $20.** **I don't have enough money.** Menm modèl “have” la sèvi pou lajan, konbine ak sa ou aprann deja sou negatif ak kesyon.",
    seeItInAction: [
      { line: "I have $20.", tag: "Kantite lajan", emoji: "💵" },
      { line: "I don't have enough money.", tag: "Manke lajan", emoji: "💸" },
      { line: "Do you have change?", tag: "Mande monnen", emoji: "❓" },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè fraz ki koresponn.",
    patternBuilderOptions: [
      { chipLabel: "Amount", display: "I have $20." },
      { chipLabel: "Not enough", display: "I don't have enough money." },
      { chipLabel: "Ask", display: "Do you have change?" },
    ],
    vocabulary: [
      {
        word: "Money",
        ipa: "/ˈmʌni/",
        kreyol: "Lajan",
        example: "I don't have enough money.",
      },
      {
        word: "Change",
        ipa: "/tʃeɪndʒ/",
        kreyol: "Monnen",
        example: "Do you have change?",
      },
      {
        word: "Cash",
        ipa: "/kæʃ/",
        kreyol: "Lajan kach",
        example: "I have some cash.",
      },
      {
        word: "Enough",
        ipa: "/ɪˈnʌf/",
        kreyol: "Ase",
        example: "I don't have enough.",
      },
      {
        word: "Price",
        ipa: "/praɪs/",
        kreyol: "Pri",
        example: "Do you have the price?",
      },
    ],
    pronunciationWord: "Enough",
    pronunciationIpa: "/ɪˈnʌf/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** “gh” la sonnen tankou “f” — “ee-NUFF”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye “enough” apre “money” lè w vle di ou manke lajan.",
    mistakeWrong: "I don't have money for that.",
    mistakeCorrect: "I don't have enough money for that.",
    mistakeWhy:
      "**Poukisa:** “I don't have money” ta vle di ou pa gen okenn lajan ditou. “I don't have enough money” montre ou gen kèk, men pa ase.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou mande monnen:",
      options: [
        "You have change?",
        "Do you have change?",
        "Have you change?",
        "Does you have change?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — kijan ou fè yon kesyon ak have?",
    },
    thinkEmoji: "💵",
    thinkPrompt: "Ekri yon fraz sou lajan, ak “have”:",
    thinkPlaceholder: "I have... / I don't have...",
    aiPrompt:
      "Hi! Can you play a cashier and ask me if I have change or enough money, so I can practice answering with 'have'?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike pale de lajan.",
    missionTask:
      "🎯 Jodi a, di yon fraz sou lajan ak “have”, tankou “I have...” oswa “Do you have change?”",
    recap: [
      { emoji: "💵", text: "“Have” dekri konbyen lajan ou genyen." },
      {
        emoji: "💸",
        text: "“I don't have enough money” ≠ “I don't have money”.",
      },
      {
        emoji: "❓",
        text: "“Do you have change?” se yon kesyon itil chak jou.",
      },
      { emoji: "🎯", text: "Misyon: di yon fraz sou lajan jodi a." },
    ],
  },
  {
    slug: "have-ideas",
    moduleTitle: "Modil 3: Vèb Pisan #2 -- To Have",
    illustrationKey: "emoji",
    heroEmoji: "💡",
    heroTitle: "Pataje Lide",
    heroLede:
      "Itilize “have” pou prezante yon lide, yon plan, oswa yon kesyon.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pataje yon lide oswa yon plan ak “have”.",
    whatYouWillLearn: "kijan pou itilize “have” pou pataje lide ak plan",
    prerequisite: "Leson 7 — Pale De Lajan",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Have” prezante yon lide, yon plan, oswa yon opinyon.",
    understandBody:
      "**I have an idea.** **She has a plan.** **We have a question.** Menm mo “have” la ouvri pòt pou pataje sa ki nan tèt ou ak lòt moun.",
    seeItInAction: [
      { line: "I have an idea.", tag: "Lide", emoji: "💡" },
      { line: "She has a plan.", tag: "Plan", emoji: "📋" },
      { line: "We have a question.", tag: "Kesyon", emoji: "❓" },
    ],
    patternBuilderIntro: "Klike sou chak kalite lide pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Idea", display: "I have an idea." },
      { chipLabel: "Plan", display: "She has a plan." },
      { chipLabel: "Question", display: "We have a question." },
    ],
    vocabulary: [
      {
        word: "Idea",
        ipa: "/aɪˈdiːə/",
        kreyol: "Lide",
        example: "I have an idea.",
      },
      {
        word: "Plan",
        ipa: "/plæn/",
        kreyol: "Plan",
        example: "She has a plan.",
      },
      {
        word: "Question",
        ipa: "/ˈkwɛstʃən/",
        kreyol: "Kesyon",
        example: "We have a question.",
      },
      {
        word: "Opinion",
        ipa: "/əˈpɪnjən/",
        kreyol: "Opinyon",
        example: "I have an opinion.",
      },
      {
        word: "Suggestion",
        ipa: "/səˈdʒɛstʃən/",
        kreyol: "Sijesyon",
        example: "He has a suggestion.",
      },
    ],
    pronunciationWord: "Idea",
    pronunciationIpa: "/aɪˈdiːə/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** twa silab, aksan an sou “DEE” — “eye-DEE-uh”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye “an” devan “idea” — li kòmanse ak yon son vwayèl.",
    mistakeWrong: "I have a idea.",
    mistakeCorrect: "I have an idea.",
    mistakeWhy:
      "**Poukisa:** Itilize “an” (pa “a”) devan yon mo ki kòmanse ak yon son vwayèl, tankou “idea”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I have a idea.",
        "I have an idea.",
        "I has an idea.",
        "I have idea.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “idea” kòmanse ak yon son vwayèl.",
    },
    thinkEmoji: "💡",
    thinkPrompt: "Ekri yon lide ou genyen, ak “have”:",
    thinkPlaceholder: "I have an idea...",
    aiPrompt:
      "Hi! Can you ask me if I have any ideas or plans for this week, and help me answer using 'have'?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike pataje lide.",
    missionTask:
      "🎯 Jodi a, pataje yon lide oswa yon plan ou genyen ak yon moun, ak “I have...”",
    recap: [
      { emoji: "💡", text: "“Have” prezante lide, plan, ak opinyon." },
      { emoji: "⚠️", text: "“An idea”, pa “a idea” — son vwayèl la konte." },
      {
        emoji: "🔗",
        text: "I have an idea. She has a plan. We have a question.",
      },
      { emoji: "🎯", text: "Misyon: pataje yon lide jodi a." },
    ],
  },
  {
    slug: "have-problems",
    moduleTitle: "Modil 3: Vèb Pisan #2 -- To Have",
    illustrationKey: "emoji",
    heroEmoji: "🤕",
    heroTitle: "Pale De Pwoblèm",
    heroLede:
      "Itilize “have” pou dekri yon pwoblèm oswa yon doulè fizik tou — pa sèlman objè oswa lide.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de yon pwoblèm oswa yon doulè ak “have”.",
    whatYouWillLearn: "kijan pou itilize “have” pou pwoblèm ak doulè",
    prerequisite: "Leson 8 — Pataje Lide",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Have” dekri yon pwoblèm oswa yon doulè fizik tou.",
    understandBody:
      "**I have a problem.** **He has a headache.** Menm mo “have” la ka prezante yon defi oswa yon doulè, egzakteman jan li prezante yon objè oswa yon lide.",
    seeItInAction: [
      { line: "I have a problem.", tag: "Pwoblèm jeneral", emoji: "😟" },
      { line: "He has a headache.", tag: "Doulè fizik", emoji: "🤕" },
      {
        line: "We have a question about this.",
        tag: "Pwoblèm/Konfizyon",
        emoji: "❓",
      },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Problem", display: "I have a problem." },
      { chipLabel: "Headache", display: "He has a headache." },
      { chipLabel: "Question", display: "We have a question about this." },
    ],
    vocabulary: [
      {
        word: "Problem",
        ipa: "/ˈprɒbləm/",
        kreyol: "Pwoblèm",
        example: "I have a problem.",
      },
      {
        word: "Headache",
        ipa: "/ˈhɛdeɪk/",
        kreyol: "Tèt fè mal",
        example: "He has a headache.",
      },
      {
        word: "Trouble",
        ipa: "/ˈtrʌbəl/",
        kreyol: "Difikilte",
        example: "I have trouble sleeping.",
      },
      {
        word: "Doubt",
        ipa: "/daʊt/",
        kreyol: "Dout",
        example: "I have a doubt about this.",
      },
      {
        word: "Solution",
        ipa: "/səˈluːʃən/",
        kreyol: "Solisyon",
        example: "She has a solution.",
      },
    ],
    pronunciationWord: "Headache",
    pronunciationIpa: "/ˈhɛdeɪk/",
    mouthTip: "**Ti konsèy pou bouch ou:** de mo kole ansanm — “HED-eyk”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I am headache” — “headache” se yon bagay ou GENYEN, pa yon bagay ou YE.",
    mistakeWrong: "I am headache.",
    mistakeCorrect: "I have a headache.",
    mistakeWhy:
      "**Poukisa:** Doulè fizik yo swiv “have”, pa “to be”, an Anglè — “I have a headache”, pa “I am headache”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I am headache.",
        "I have a headache.",
        "I has headache.",
        "I have headache.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — doulè swiv “have”, ak “a” devan.",
    },
    thinkEmoji: "🤕",
    thinkPrompt: "Ekri yon fraz sou yon pwoblèm oswa yon doulè, ak “have”:",
    thinkPlaceholder: "I have a problem...",
    aiPrompt:
      "Hi! Can you ask me if I have any problems or aches today, and help me answer using 'have' correctly?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike pale de pwoblèm.",
    missionTask:
      "🎯 Jodi a, di yon fraz sou yon pwoblèm oswa yon doulè ou genyen, ak “have”.",
    recap: [
      { emoji: "🤕", text: "Doulè fizik swiv “have”, pa “to be”." },
      { emoji: "😟", text: "“Have a problem” prezante yon defi." },
      { emoji: "🔗", text: "I have a problem. He has a headache." },
      { emoji: "🎯", text: "Misyon: pale de yon pwoblèm ou genyen." },
    ],
  },
  {
    slug: "have-mission",
    moduleTitle: "Modil 3: Vèb Pisan #2 -- To Have",
    illustrationKey: "emoji",
    heroEmoji: "🎒",
    heroTitle: "Sa Ou Genyen",
    heroLede:
      "Se lè a pou mete tout sa ou aprann nan Modil 3 ansanm — fanmi w, lajan w, lide w, ak pwoblèm ou.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab konbine plizyè fraz “have” pou dekri sa ou genyen.",
    whatYouWillLearn:
      "kijan pou konbine tout sa ou aprann nan Modil 3 nan yon sèl deskripsyon",
    prerequisite: "Leson 9 — Pale De Pwoblèm",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Plizyè fraz “have” ansanm dekri lavi w antye.",
    understandBody:
      "Ou ka kòmanse ak fanmi w, ale nan lajan w oswa lide w, epi fini ak yon pwoblèm ou genyen — tout ak menm vèb “have” a. **Se konsa moun pataje lavi yo an Anglè.**",
    seeItInAction: [
      { line: "I have two brothers.", tag: "Fanmi", emoji: "👨‍👩‍👧‍👦" },
      { line: "I have an idea for my business.", tag: "Lide", emoji: "💡" },
      { line: "I have a small problem today.", tag: "Pwoblèm", emoji: "🤕" },
    ],
    patternBuilderIntro: "Klike sou chak pati pou wè kijan yo kole ansanm.",
    patternBuilderOptions: [
      { chipLabel: "1. Fanmi", display: "I have two brothers." },
      { chipLabel: "2. Lide", display: "I have an idea." },
      { chipLabel: "3. Pwoblèm", display: "I have a small problem." },
    ],
    vocabulary: [
      {
        word: "Life",
        ipa: "/laɪf/",
        kreyol: "Lavi",
        example: "This is my life.",
      },
      {
        word: "Business",
        ipa: "/ˈbɪznɪs/",
        kreyol: "Biznis",
        example: "I have an idea for my business.",
      },
      {
        word: "Small",
        ipa: "/smɔːl/",
        kreyol: "Piti",
        example: "I have a small problem.",
      },
      {
        word: "Today",
        ipa: "/təˈdeɪ/",
        kreyol: "Jodi a",
        example: "I have a plan today.",
      },
      {
        word: "Everything",
        ipa: "/ˈɛvriθɪŋ/",
        kreyol: "Tout bagay",
        example: "I have everything I need.",
      },
    ],
    pronunciationWord: "Everything",
    pronunciationIpa: "/ˈɛvriθɪŋ/",
    mouthTip: "**Ti konsèy pou bouch ou:** twa silab, “EV-ree-thing”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye kole plizyè fraz “have” kout ansanm pou rakonte yon istwa konplè.",
    mistakeWrong: "I have brothers idea problem.",
    mistakeCorrect: "I have brothers. I have an idea. I have a problem.",
    mistakeWhy:
      "**Poukisa:** Chak lide (fanmi, lide, pwoblèm) bezwen pwòp fraz “have” pa li — pa antase yo tout ansanm san estrikti.",
    practice: {
      prompt: "Ki fraz ki byen konstwi?",
      options: [
        "I have brothers idea.",
        "I have a brother and an idea.",
        "I brothers have idea.",
        "Brothers I have idea.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — sèvi ak “and” pou konekte de lide.",
    },
    thinkEmoji: "🎒",
    thinkPrompt:
      "Ekri yon ti paragraf sou sa ou genyen ak omwen 3 fraz “have”:",
    thinkPlaceholder: "I have... I have... I have...",
    aiPrompt:
      "Hi! Can you listen to a short description of what I have — family, ideas, and challenges — using 'have' sentences, and give me friendly feedback?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 3 ansanm.",
    missionTask:
      "🎯 Jodi a, ekri oswa di yon ti paragraf sou sa ou genyen: fanmi w, yon lide, ak yon pwoblèm — tout ak “have”.",
    recap: [
      { emoji: "🎒", text: "Plizyè fraz “have” ansanm dekri lavi w antye." },
      { emoji: "🧩", text: "Fanmi + lide + pwoblèm = yon deskripsyon konplè." },
      { emoji: "🎓", text: "Ou fini Modil 3 — Vèb Pisan #2 (To Have)!" },
      { emoji: "🎯", text: "Misyon: ekri yon ti paragraf sou sa ou genyen." },
    ],
  },
  {
    slug: "days-of-the-week",
    moduleTitle: "Modil 4: Vokabilè Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "📅",
    heroTitle: "Jou Nan Semèn Nan",
    heroLede:
      "Chak jou gen yon non an Anglè — konnen yo ede w pale de plan ou, orè travay ou, ak lavi chak jou.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap konnen tout 7 jou nan semèn nan ak kijan pou pale de yo.",
    whatYouWillLearn: "non 7 jou yo, ak kijan pou pale de sa ou fè chak jou",
    prerequisite: "Ou fin Modil 3 — Vèb Pisan #2 (To Have)",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Semèn Anglè a souvan kòmanse ak Sunday, pa Monday.",
    understandBody:
      "Nan anpil kalandriye Anglè, semèn nan kòmanse ak **Sunday**, kontrèman ak kalandriye ou konn itilize. Konnen lòd la ede w konprann orè ak plan pi byen.",
    seeItInAction: [
      { line: "Today is Monday.", tag: "Jodi a", emoji: "📅" },
      { line: "I work from Monday to Friday.", tag: "Orè travay", emoji: "💼" },
      {
        line: "Saturday and Sunday are my days off.",
        tag: "Wikenn",
        emoji: "🎉",
      },
    ],
    patternBuilderIntro: "Klike sou chak jou pou wè li nan yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Monday", display: "Today is Monday." },
      { chipLabel: "Friday", display: "I work until Friday." },
      { chipLabel: "Sunday", display: "Sunday is a day off." },
    ],
    vocabulary: [
      {
        word: "Monday",
        ipa: "/ˈmʌndeɪ/",
        kreyol: "Lendi",
        example: "Today is Monday.",
      },
      {
        word: "Friday",
        ipa: "/ˈfraɪdeɪ/",
        kreyol: "Vandredi",
        example: "I work until Friday.",
      },
      {
        word: "Saturday",
        ipa: "/ˈsætərdeɪ/",
        kreyol: "Samdi",
        example: "Saturday is a day off.",
      },
      {
        word: "Sunday",
        ipa: "/ˈsʌndeɪ/",
        kreyol: "Dimanch",
        example: "Sunday is a day off.",
      },
      {
        word: "Weekend",
        ipa: "/ˈwiːkɛnd/",
        kreyol: "Wikenn",
        example: "I rest on the weekend.",
      },
    ],
    pronunciationWord: "Wednesday",
    pronunciationIpa: "/ˈwɛnzdeɪ/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** pa pwononse “d” nan mitan an — “WENZ-day”, pa “wed-nes-day”.",
    pronunciationMistake:
      "**Erè komen:** pa itilize “in” devan yon jou — itilize “on”.",
    mistakeWrong: "I work in Monday.",
    mistakeCorrect: "I work on Monday.",
    mistakeWhy:
      "**Poukisa:** An Anglè, ou itilize “on” devan yon jou presi (on Monday), “in” devan yon mwa oswa yon sezon (in July).",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I work in Monday.",
        "I work on Monday.",
        "I work at Monday.",
        "I work Monday on.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — ki ti mo ki mache ak yon jou?",
    },
    thinkEmoji: "📅",
    thinkPrompt: "Ekri yon fraz sou sa ou fè yon jou espesifik nan semèn nan:",
    thinkPlaceholder: "On Monday, I...",
    aiPrompt:
      "Hi! Can you ask me what I do on different days of the week, and help me answer using 'on' correctly?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike jou yo.",
    missionTask:
      "🎯 Jodi a, di ki jou ou ye jodi a, epi yon bagay ou fè jou sa a.",
    recap: [
      {
        emoji: "📅",
        text: "7 jou: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.",
      },
      { emoji: "🔑", text: "Itilize “on” devan yon jou: on Monday." },
      { emoji: "🎉", text: "Saturday ak Sunday se souvan wikenn nan." },
      { emoji: "🎯", text: "Misyon: di ki jou ou ye jodi a." },
    ],
  },
  {
    slug: "my-daily-routine",
    moduleTitle: "Modil 4: Vokabilè Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "🌅",
    heroTitle: "Woutin Chak Jou Mwen",
    heroLede:
      "Aprann vèb ki dekri sa ou fè chak jou, soti nan maten rive nan aswè.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab rakonte woutin chak jou ou ak vèb senp.",
    whatYouWillLearn: "vèb pou dekri woutin chak jou, ak moman jounen an",
    prerequisite: "Leson 1 — Jou Nan Semèn Nan",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Woutin ou se yon istwa senp ki repete chak jou.",
    understandBody:
      "**I wake up at 6. I eat breakfast. I go to work.** Chak vèb sa yo se yon etap nan jounen w. Ansanm, yo rakonte istwa jounen ou, soti nan maten rive nan aswè.",
    seeItInAction: [
      { line: "I wake up early in the morning.", tag: "Maten", emoji: "🌅" },
      { line: "I eat lunch in the afternoon.", tag: "Aprèmidi", emoji: "🍽️" },
      { line: "I go to sleep at night.", tag: "Aswè", emoji: "🌙" },
    ],
    patternBuilderIntro: "Klike sou chak moman pou wè yon fraz woutin.",
    patternBuilderOptions: [
      { chipLabel: "Morning", display: "I wake up in the morning." },
      { chipLabel: "Afternoon", display: "I eat lunch in the afternoon." },
      { chipLabel: "Night", display: "I go to sleep at night." },
    ],
    vocabulary: [
      {
        word: "Wake up",
        ipa: "/weɪk ʌp/",
        kreyol: "Reveye",
        example: "I wake up at 6.",
      },
      {
        word: "Breakfast",
        ipa: "/ˈbrɛkfəst/",
        kreyol: "Manje maten",
        example: "I eat breakfast.",
      },
      {
        word: "Work",
        ipa: "/wɜːrk/",
        kreyol: "Travay",
        example: "I go to work.",
      },
      {
        word: "Afternoon",
        ipa: "/ˌæftərˈnuːn/",
        kreyol: "Aprèmidi",
        example: "I eat lunch in the afternoon.",
      },
      {
        word: "Night",
        ipa: "/naɪt/",
        kreyol: "Aswè/Lannwit",
        example: "I go to sleep at night.",
      },
    ],
    pronunciationWord: "Breakfast",
    pronunciationIpa: "/ˈbrɛkfəst/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** de silab, “BREK-fust” — pa pwononse “ea” tankou nan “eat”.",
    pronunciationMistake:
      "**Erè komen:** pa di “in the night” — itilize “at night”.",
    mistakeWrong: "I sleep in the night.",
    mistakeCorrect: "I sleep at night.",
    mistakeWhy:
      "**Poukisa:** An Anglè, ou itilize “in the” pou morning/afternoon/evening, men “at” pou “night” — se yon eksepsyon pou memorize.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I sleep in the night.",
        "I sleep at night.",
        "I sleep on night.",
        "I sleep the night.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “night” se yon eksepsyon.",
    },
    thinkEmoji: "🌅",
    thinkPrompt: "Ekri twa fraz sou woutin ou: maten, aprèmidi, aswè:",
    thinkPlaceholder:
      "In the morning, I... In the afternoon, I... At night, I...",
    aiPrompt:
      "Hi! Can you ask me what I do in the morning, afternoon, and at night, and help me answer with simple routine verbs?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike woutin ou.",
    missionTask:
      "🎯 Jodi a, rakonte woutin ou pou yon jounen, ak omwen twa etap (maten, aprèmidi, aswè).",
    recap: [
      { emoji: "🌅", text: "Wake up, eat breakfast, go to work, sleep." },
      {
        emoji: "🔑",
        text: "“In the” morning/afternoon/evening, men “at” night.",
      },
      { emoji: "📖", text: "Woutin ou se yon ti istwa chak jou." },
      { emoji: "🎯", text: "Misyon: rakonte woutin ou pou yon jounen." },
    ],
  },
  {
    slug: "around-the-house",
    moduleTitle: "Modil 4: Vokabilè Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "🏠",
    heroTitle: "Nan Kay La",
    heroLede:
      "Chak chanm nan kay la gen yon aktivite ki mache ak li — konnen non yo ede w dekri kay ou.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab non chanm nan yon kay ak sa ou fè nan chak youn.",
    whatYouWillLearn: "non chanm yo nan yon kay, ak aktivite ki mache ak yo",
    prerequisite: "Leson 2 — Woutin Chak Jou Mwen",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Chak chanm nan kay la gen yon aktivite ki mache ak li.",
    understandBody:
      "**I cook in the kitchen. I sleep in the bedroom.** Konnen non chanm yo ede w dekri kay ou ak sa ou fè nan chak kote.",
    seeItInAction: [
      { line: "I cook in the kitchen.", tag: "Kizin", emoji: "🍳" },
      { line: "I sleep in the bedroom.", tag: "Chanm dòmi", emoji: "🛏️" },
      { line: "I watch TV in the living room.", tag: "Salon", emoji: "📺" },
    ],
    patternBuilderIntro: "Klike sou chak chanm pou wè aktivite ki mache ak li.",
    patternBuilderOptions: [
      { chipLabel: "Kitchen", display: "I cook in the kitchen." },
      { chipLabel: "Bedroom", display: "I sleep in the bedroom." },
      { chipLabel: "Living room", display: "I watch TV in the living room." },
    ],
    vocabulary: [
      {
        word: "Kitchen",
        ipa: "/ˈkɪtʃən/",
        kreyol: "Kizin",
        example: "I cook in the kitchen.",
      },
      {
        word: "Bedroom",
        ipa: "/ˈbɛdruːm/",
        kreyol: "Chanm dòmi",
        example: "I sleep in the bedroom.",
      },
      {
        word: "Bathroom",
        ipa: "/ˈbæθruːm/",
        kreyol: "Twalèt",
        example: "I take a shower in the bathroom.",
      },
      {
        word: "Living room",
        ipa: "/ˈlɪvɪŋ ruːm/",
        kreyol: "Salon",
        example: "We watch TV in the living room.",
      },
      {
        word: "Yard",
        ipa: "/jɑːrd/",
        kreyol: "Lakou",
        example: "The kids play in the yard.",
      },
    ],
    pronunciationWord: "Kitchen",
    pronunciationIpa: "/ˈkɪtʃən/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “KIT-chuhn”.",
    pronunciationMistake: "**Erè komen:** pa bliye “the” devan non chanm nan.",
    mistakeWrong: "I cook in kitchen.",
    mistakeCorrect: "I cook in the kitchen.",
    mistakeWhy:
      "**Poukisa:** Lè w ap pale de yon chanm presi nan kay ou, ou bezwen “the” devan non li.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I sleep in bedroom.",
        "I sleep in the bedroom.",
        "I sleep the bedroom.",
        "I sleep on bedroom.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — manke “the”.",
    },
    thinkEmoji: "🏠",
    thinkPrompt: "Dekri yon chanm nan kay ou ak sa ou fè ladan l:",
    thinkPlaceholder: "In my..., I...",
    aiPrompt:
      "Hi! Can you ask me what I do in different rooms of my house, and help me answer using 'in the'?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike pale de kay ou.",
    missionTask:
      "🎯 Jodi a, non twa chanm nan kay ou epi di sa ou fè nan chak youn.",
    recap: [
      { emoji: "🏠", text: "Kitchen, bedroom, bathroom, living room, yard." },
      { emoji: "🔑", text: "Toujou mete “the” devan non chanm nan." },
      { emoji: "🍳", text: "Chak chanm gen yon aktivite ki mache ak li." },
      { emoji: "🎯", text: "Misyon: dekri twa chanm nan kay ou." },
    ],
  },
  {
    slug: "things-in-the-house",
    moduleTitle: "Modil 4: Vokabilè Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "🛋️",
    heroTitle: "Bagay Nan Kay La",
    heroLede:
      "Chak chanm gen bagay presi ladan l. Itilize “There is” ak “There are” pou dekri yo.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab dekri sa ki nan yon chanm ak “There is”/“There are”.",
    whatYouWillLearn:
      "kijan pou itilize “There is”/“There are”, ak non bagay nan kay la",
    prerequisite: "Leson 3 — Nan Kay La",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“There is” pou yon sèl bagay, “There are” pou plizyè.",
    understandBody:
      "**There is a bed in my bedroom.** **There are two chairs in my kitchen.** Itilize “There is” lè gen yon sèl bagay, “There are” lè gen plizyè.",
    seeItInAction: [
      { line: "There is a bed in my room.", tag: "Yon sèl bagay", emoji: "🛏️" },
      {
        line: "There are two chairs in the kitchen.",
        tag: "Plizyè bagay",
        emoji: "🪑",
      },
      {
        line: "There is a refrigerator in the kitchen.",
        tag: "Aparèy",
        emoji: "🧊",
      },
    ],
    patternBuilderIntro: "Klike sou chak bagay pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Bed (1)", display: "There is a bed." },
      { chipLabel: "Chairs (2)", display: "There are two chairs." },
      { chipLabel: "Refrigerator (1)", display: "There is a refrigerator." },
    ],
    vocabulary: [
      {
        word: "Bed",
        ipa: "/bɛd/",
        kreyol: "Kabann",
        example: "There is a bed in my room.",
      },
      {
        word: "Table",
        ipa: "/ˈteɪbəl/",
        kreyol: "Tab",
        example: "There is a table in the kitchen.",
      },
      {
        word: "Chair",
        ipa: "/tʃɛər/",
        kreyol: "Chèz",
        example: "There are two chairs.",
      },
      {
        word: "Refrigerator",
        ipa: "/rɪˈfrɪdʒəreɪtər/",
        kreyol: "Frijidè",
        example: "There is a refrigerator.",
      },
      {
        word: "Sofa",
        ipa: "/ˈsoʊfə/",
        kreyol: "Kanape",
        example: "There is a sofa in the living room.",
      },
    ],
    pronunciationWord: "Refrigerator",
    pronunciationIpa: "/rɪˈfrɪdʒəreɪtər/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** mo long, li pi fasil di “fridge” nan konvèsasyon.",
    pronunciationMistake:
      "**Erè komen:** pa di “There is two chairs” — pou plizyè bagay, itilize “There are”.",
    mistakeWrong: "There is two chairs.",
    mistakeCorrect: "There are two chairs.",
    mistakeWhy:
      "**Poukisa:** “There is” se pou yon sèl bagay. Lè gen plizyè (two chairs), ou bezwen “There are”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "There is two chairs.",
        "There are two chairs.",
        "There a two chairs.",
        "There am two chairs.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “two chairs” se plizyè.",
    },
    thinkEmoji: "🛋️",
    thinkPrompt:
      "Dekri twa bagay nan yon chanm nan kay ou, ak “There is”/“There are”:",
    thinkPlaceholder: "There is... There are...",
    aiPrompt:
      "Hi! Can you ask me what's in my kitchen or bedroom, and help me answer using 'There is' or 'There are'?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike dekri bagay nan kay ou.",
    missionTask:
      "🎯 Jodi a, dekri twa bagay ki nan yon chanm lakay ou, ak “There is”/“There are”.",
    recap: [
      { emoji: "🛏️", text: "“There is” pou yon sèl bagay." },
      { emoji: "🪑", text: "“There are” pou plizyè bagay." },
      { emoji: "🧊", text: "Bed, table, chair, refrigerator, sofa." },
      { emoji: "🎯", text: "Misyon: dekri twa bagay nan yon chanm." },
    ],
  },
  {
    slug: "my-family-vocabulary",
    moduleTitle: "Modil 4: Vokabilè Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "👵",
    heroTitle: "Fanmi Elaji Mwen",
    heroLede:
      "Fanmi ou pi laj pase paran ak frè/sè ou. Ann ale pi lwen ak grandparents, aunt, uncle, ak lòt.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab non manm fanmi elaji w yo.",
    whatYouWillLearn: "vokabilè fanmi elaji: granparan, matant, tonton, neve",
    prerequisite: "Leson 4 — Bagay Nan Kay La",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Fanmi ou pi laj pase sèlman paran ak frè/sè.",
    understandBody:
      "Ou deja aprann **brother**, **sister**, ak **parents** nan Modil 2. Kounye a, ann ale pi lwen: **grandparents, aunt, uncle, niece, nephew**.",
    seeItInAction: [
      { line: "My grandmother lives with us.", tag: "Granparan", emoji: "👵" },
      { line: "I have an aunt in Miami.", tag: "Matant", emoji: "👩" },
      { line: "My nephew is five years old.", tag: "Neve", emoji: "👶" },
    ],
    patternBuilderIntro: "Klike sou chak manm fanmi pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Grandmother", display: "My grandmother lives with us." },
      { chipLabel: "Aunt", display: "I have an aunt in Miami." },
      { chipLabel: "Nephew", display: "My nephew is five years old." },
    ],
    vocabulary: [
      {
        word: "Grandmother",
        ipa: "/ˈgrænˌmʌðər/",
        kreyol: "Grann",
        example: "My grandmother lives with us.",
      },
      {
        word: "Grandfather",
        ipa: "/ˈgrænˌfɑːðər/",
        kreyol: "Granpè",
        example: "My grandfather is 80.",
      },
      {
        word: "Aunt",
        ipa: "/ænt/",
        kreyol: "Matant",
        example: "I have an aunt in Miami.",
      },
      {
        word: "Uncle",
        ipa: "/ˈʌŋkəl/",
        kreyol: "Tonton",
        example: "My uncle works far away.",
      },
      {
        word: "Nephew",
        ipa: "/ˈnɛfjuː/",
        kreyol: "Neve",
        example: "My nephew is five years old.",
      },
    ],
    pronunciationWord: "Nephew",
    pronunciationIpa: "/ˈnɛfjuː/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “NEF-yoo”.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “niece” (fi) ak “nephew” (gason).",
    mistakeWrong: "My niece is a boy.",
    mistakeCorrect: "My nephew is a boy.",
    mistakeWhy:
      "**Poukisa:** “Niece” se pou yon fi, “nephew” se pou yon gason — de mo diferan selon sèks moun nan.",
    practice: {
      prompt: "Ki mo ki kòrèk pou yon matant?",
      options: ["Uncle", "Aunt", "Grandmother", "Nephew"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — matant se yon fi.",
    },
    thinkEmoji: "👵",
    thinkPrompt:
      "Ekri sou yon manm fanmi elaji ou (matant, tonton, granparan):",
    thinkPlaceholder: "My aunt/uncle/grandmother...",
    aiPrompt:
      "Hi! Can you ask me about my extended family — aunts, uncles, grandparents — and help me answer using the right vocabulary?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike vokabilè fanmi elaji.",
    missionTask:
      "🎯 Jodi a, non twa manm nan fanmi elaji w, ak yon ti detay sou chak.",
    recap: [
      { emoji: "👵", text: "Grandmother, grandfather — granparan." },
      { emoji: "👩", text: "Aunt, uncle — matant, tonton." },
      { emoji: "👶", text: "Niece (fi), nephew (gason)." },
      { emoji: "🎯", text: "Misyon: non twa manm fanmi elaji w." },
    ],
  },
  {
    slug: "friends-and-neighbors",
    moduleTitle: "Modil 4: Vokabilè Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "🤝",
    heroTitle: "Zanmi ak Vwazen",
    heroLede:
      "Pa tout moun ou konnen se fanmi — kèk se zanmi, vwazen, oswa kondisip.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab non moun ki toutotou w ki pa fanmi.",
    whatYouWillLearn: "vokabilè pou zanmi, vwazen, ak kondisip",
    prerequisite: "Leson 5 — Fanmi Elaji Mwen",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Zanmi, vwazen, ak kondisip se moun ki enpòtan tou.",
    understandBody:
      "**She is my best friend.** **He is my neighbor.** **We are classmates.** Menm jan ak fanmi, ou ka itilize “to be” pou prezante moun sa yo nan lavi w.",
    seeItInAction: [
      { line: "She is my best friend.", tag: "Pi bon zanmi", emoji: "🤝" },
      { line: "He is my neighbor.", tag: "Vwazen", emoji: "🏠" },
      { line: "We are classmates.", tag: "Kondisip", emoji: "🎓" },
    ],
    patternBuilderIntro: "Klike sou chak relasyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Friend", display: "She is my best friend." },
      { chipLabel: "Neighbor", display: "He is my neighbor." },
      { chipLabel: "Classmate", display: "We are classmates." },
    ],
    vocabulary: [
      {
        word: "Friend",
        ipa: "/frɛnd/",
        kreyol: "Zanmi",
        example: "She is my friend.",
      },
      {
        word: "Best friend",
        ipa: "/bɛst frɛnd/",
        kreyol: "Pi bon zanmi",
        example: "She is my best friend.",
      },
      {
        word: "Neighbor",
        ipa: "/ˈneɪbər/",
        kreyol: "Vwazen",
        example: "He is my neighbor.",
      },
      {
        word: "Classmate",
        ipa: "/ˈklæsmeɪt/",
        kreyol: "Kondisip",
        example: "We are classmates.",
      },
      {
        word: "Roommate",
        ipa: "/ˈruːmmeɪt/",
        kreyol: "Moun k ap viv avè w",
        example: "He is my roommate.",
      },
    ],
    pronunciationWord: "Neighbor",
    pronunciationIpa: "/ˈneɪbər/",
    mouthTip: "**Ti konsèy pou bouch ou:** “gh” la pa pwononse — “NAY-bər”.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “friend” ak “boyfriend/girlfriend” — “friend” tou senp se yon zanmi.",
    mistakeWrong: "He is my boyfriend.",
    mistakeCorrect: "He is my friend.",
    mistakeWhy:
      "**Poukisa:** “Friend” se yon zanmi tou senp. “Boyfriend”/“girlfriend” gen yon sans romantik — pa itilize yo pou yon senp zanmi.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou yon moun ki abite bò kote w:",
      options: [
        "He is my classmate.",
        "He is my neighbor.",
        "He is my nephew.",
        "He is my aunt.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — ki mo ki vle di moun ki abite bò kote w?",
    },
    thinkEmoji: "🤝",
    thinkPrompt: "Ekri sou yon zanmi oswa yon vwazen ou genyen:",
    thinkPlaceholder: "My friend/neighbor...",
    aiPrompt:
      "Hi! Can you ask me about my friends, neighbors, and classmates, and help me answer using 'to be'?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike pale de zanmi ak vwazen.",
    missionTask:
      "🎯 Jodi a, prezante yon zanmi oswa yon vwazen ou genyen, ak “to be”.",
    recap: [
      {
        emoji: "🤝",
        text: "Friend, best friend, neighbor, classmate, roommate.",
      },
      { emoji: "⚠️", text: "“Friend” ≠ “boyfriend/girlfriend”." },
      { emoji: "🔗", text: "Itilize “to be” pou prezante moun sa yo." },
      { emoji: "🎯", text: "Misyon: prezante yon zanmi oswa vwazen." },
    ],
  },
  {
    slug: "pets-and-animals",
    moduleTitle: "Modil 4: Vokabilè Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "🐕",
    heroTitle: "Bèt Kay ak Bèt",
    heroLede:
      "Anpil moun genyen yon bèt kay ki fè pati fanmi yo. Aprann pale de yo ak “have”.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de bèt kay ak “have”.",
    whatYouWillLearn: "non bèt kay komen, ak kijan pou pale de yo",
    prerequisite: "Leson 6 — Zanmi ak Vwazen",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Have” prezante bèt kay ou, tankou fanmi ou.",
    understandBody:
      "**I have a dog.** **My cat is very small.** Itilize “have” pou di ki bèt kay ou genyen, epi “to be” pou dekri li.",
    seeItInAction: [
      { line: "I have a dog.", tag: "Chen", emoji: "🐕" },
      { line: "My cat is very small.", tag: "Chat", emoji: "🐈" },
      { line: "Do you have any pets?", tag: "Kesyon", emoji: "❓" },
    ],
    patternBuilderIntro: "Klike sou chak bèt pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Dog", display: "I have a dog." },
      { chipLabel: "Cat", display: "My cat is small." },
      { chipLabel: "Bird", display: "She has a bird." },
    ],
    vocabulary: [
      { word: "Dog", ipa: "/dɔːg/", kreyol: "Chen", example: "I have a dog." },
      {
        word: "Cat",
        ipa: "/kæt/",
        kreyol: "Chat",
        example: "My cat is small.",
      },
      {
        word: "Bird",
        ipa: "/bɜːrd/",
        kreyol: "Zwazo",
        example: "She has a bird.",
      },
      {
        word: "Fish",
        ipa: "/fɪʃ/",
        kreyol: "Pwason",
        example: "We have two fish.",
      },
      {
        word: "Pet",
        ipa: "/pɛt/",
        kreyol: "Bèt kay",
        example: "Do you have any pets?",
      },
    ],
    pronunciationWord: "Pet",
    pronunciationIpa: "/pɛt/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** son “e” kout, tankou “pet” an Kreyòl si w ta ekri l.",
    pronunciationMistake:
      "**Erè komen:** pa di “fishes” pou pliryèl — “fish” rete menm pou yon sèl oswa plizyè.",
    mistakeWrong: "I have three fishes.",
    mistakeCorrect: "I have three fish.",
    mistakeWhy:
      "**Poukisa:** “Fish” se yon mo espesyal ki pa chanje fòm nan pliryèl — “one fish, two fish”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I have three fishes.",
        "I have three fish.",
        "I has three fish.",
        "I have three fishs.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “fish” pa chanje nan pliryèl.",
    },
    thinkEmoji: "🐕",
    thinkPrompt: "Ekri sou yon bèt kay ou genyen oswa ou ta renmen genyen:",
    thinkPlaceholder: "I have a... / I would like a...",
    aiPrompt:
      "Hi! Can you ask me if I have any pets, and help me describe them using have and to be?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike pale de bèt kay.",
    missionTask:
      "🎯 Jodi a, di si ou genyen yon bèt kay (oswa ou ta renmen genyen youn), ak yon ti deskripsyon.",
    recap: [
      { emoji: "🐕", text: "Dog, cat, bird, fish, pet." },
      { emoji: "⚠️", text: "“Fish” pa chanje fòm nan pliryèl." },
      { emoji: "🔗", text: "“Have” prezante bèt kay, “to be” dekri li." },
      { emoji: "🎯", text: "Misyon: pale de yon bèt kay." },
    ],
  },
  {
    slug: "daily-life-mission",
    moduleTitle: "Modil 4: Vokabilè Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "📖",
    heroTitle: "Yon Jounen Nan Lavi Mwen",
    heroLede:
      "Se lè a pou konbine woutin ou, kay ou, fanmi ou, ak bèt kay ou nan yon sèl istwa.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab rakonte yon jounen konplè nan lavi w.",
    whatYouWillLearn:
      "kijan pou konbine tout sa ou aprann nan Modil 4 nan yon istwa",
    prerequisite: "Leson 7 — Bèt Kay ak Bèt",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Yon jounen nan lavi w se yon istwa ak plizyè pati.",
    understandBody:
      "Ou ka kòmanse ak woutin ou, ale nan kay ou, mansyone fanmi ou, epi fini ak bèt kay ou — tout nan yon sèl istwa senp. **Se konsa moun rakonte jounen yo an Anglè.**",
    seeItInAction: [
      {
        line: "I wake up at 6 and eat breakfast in the kitchen.",
        tag: "Maten",
        emoji: "🌅",
      },
      {
        line: "My family and I eat dinner together at night.",
        tag: "Fanmi",
        emoji: "👨‍👩‍👧‍👦",
      },
      {
        line: "I have a small dog who sleeps in my room.",
        tag: "Bèt kay",
        emoji: "🐕",
      },
    ],
    patternBuilderIntro: "Klike sou chak pati pou wè kijan istwa a bati.",
    patternBuilderOptions: [
      { chipLabel: "1. Woutin", display: "I wake up at 6." },
      { chipLabel: "2. Kay/Fanmi", display: "We eat dinner in the kitchen." },
      { chipLabel: "3. Bèt kay", display: "My dog sleeps in my room." },
    ],
    vocabulary: [
      {
        word: "Together",
        ipa: "/təˈgɛðər/",
        kreyol: "Ansanm",
        example: "We eat dinner together.",
      },
      {
        word: "Dinner",
        ipa: "/ˈdɪnər/",
        kreyol: "Manje aswè",
        example: "We eat dinner at 7.",
      },
      {
        word: "Story",
        ipa: "/ˈstɔːri/",
        kreyol: "Istwa",
        example: "This is my daily story.",
      },
      {
        word: "Usually",
        ipa: "/ˈjuːʒuəli/",
        kreyol: "Dabitid",
        example: "I usually wake up early.",
      },
      {
        word: "Life",
        ipa: "/laɪf/",
        kreyol: "Lavi",
        example: "This is a day in my life.",
      },
    ],
    pronunciationWord: "Usually",
    pronunciationIpa: "/ˈjuːʒuəli/",
    mouthTip: "**Ti konsèy pou bouch ou:** twa silab, “YOO-zhoo-uh-lee”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye konekte fraz ou yo ak “and” oswa “then” pou istwa a koule byen.",
    mistakeWrong: "I wake up. I eat breakfast. I go to work.",
    mistakeCorrect: "I wake up, eat breakfast, and go to work.",
    mistakeWhy:
      "**Poukisa:** Konekte aksyon yo ak “and” fè istwa a sonnen pi natirèl, olye de plizyè ti fraz kout youn apre lòt.",
    practice: {
      prompt: "Ki vèsyon ki sonnen pi natirèl?",
      options: [
        "I wake up. I eat. I work.",
        "I wake up, eat breakfast, and go to work.",
        "Wake up eat work I.",
        "I wake, breakfast, work.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — konekte aksyon yo ak “and”.",
    },
    thinkEmoji: "📖",
    thinkPrompt: "Ekri yon ti istwa sou yon jounen tipik ou, ak omwen 4 fraz:",
    thinkPlaceholder: "I wake up... Then I... In the evening...",
    aiPrompt:
      "Hi! Can you listen to a short story about my typical day — my routine, my house, my family, and my pet — and give me friendly feedback?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 4 ansanm.",
    missionTask:
      "🎯 Jodi a, ekri oswa di yon ti istwa sou yon jounen nan lavi w, ak woutin, kay, fanmi, ak/oswa bèt kay.",
    recap: [
      { emoji: "📖", text: "Yon jounen se yon istwa ak plizyè pati." },
      {
        emoji: "🔗",
        text: "Konekte fraz ak “and”/“then” pou li koule pi byen.",
      },
      { emoji: "🎓", text: "Ou fini Modil 4 — Vokabilè Chak Jou!" },
      { emoji: "🎯", text: "Misyon: rakonte yon jounen nan lavi w." },
    ],
  },
  {
    slug: "who-questions",
    moduleTitle: "Modil 5: Kesyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "🙋",
    heroTitle: "Who — Kesyon Sou Moun",
    heroLede:
      "Itilize “Who” lè ou vle konnen ki moun ki fè yon bagay, oswa ki moun yon moun ye.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab poze kesyon ak “Who” pou konnen ki moun.",
    whatYouWillLearn: "kijan pou itilize “Who” pou mande sou moun",
    prerequisite: "Ou fin Modil 4 — Vokabilè Chak Jou",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Who” mande ki moun, pa ki bagay.",
    understandBody:
      "**Who is that?** **Who is your teacher?** “Who” toujou mande sou yon MOUN — pa yon objè oswa yon kote. Se premye mo pou konnen lè w ap pale de moun ou pa rekonèt.",
    seeItInAction: [
      { line: "Who is that?", tag: "Mande yon moun", emoji: "🙋" },
      { line: "Who is your teacher?", tag: "Mande yon relasyon", emoji: "👨‍🏫" },
      { line: "Who called you?", tag: "Mande yon aksyon", emoji: "📞" },
    ],
    patternBuilderIntro:
      "Klike sou chak sitiyasyon pou wè yon kesyon ak “Who”.",
    patternBuilderOptions: [
      { chipLabel: "Person", display: "Who is that?" },
      { chipLabel: "Relationship", display: "Who is your teacher?" },
      { chipLabel: "Action", display: "Who called you?" },
    ],
    vocabulary: [
      { word: "Who", ipa: "/huː/", kreyol: "Ki moun", example: "Who is that?" },
      { word: "That", ipa: "/ðæt/", kreyol: "Sa a", example: "Who is that?" },
      {
        word: "Teacher",
        ipa: "/ˈtiːtʃər/",
        kreyol: "Pwofesè",
        example: "Who is your teacher?",
      },
      {
        word: "Called",
        ipa: "/kɔːld/",
        kreyol: "Rele (tan pase)",
        example: "Who called you?",
      },
      {
        word: "Friend",
        ipa: "/frɛnd/",
        kreyol: "Zanmi",
        example: "Who is your friend?",
      },
    ],
    pronunciationWord: "Who",
    pronunciationIpa: "/huː/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** wonn bouch ou, tankou lè w ap di “ou” an Kreyòl.",
    pronunciationMistake:
      "**Erè komen:** pa itilize “what” pou moun — “Who” se pou moun, “what” se pou bagay.",
    mistakeWrong: "What is that person?",
    mistakeCorrect: "Who is that person?",
    mistakeWhy:
      "**Poukisa:** Yon moun se pa yon “bagay” — itilize “Who” chak fwa w ap mande sou yon moun.",
    practice: {
      prompt: "Chwazi kesyon ki kòrèk pou mande sou yon moun:",
      options: [
        "What is that?",
        "Who is that?",
        "Where is that?",
        "When is that?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — moun mande ak “Who”.",
    },
    thinkEmoji: "🙋",
    thinkPrompt:
      "Ekri yon kesyon ak “Who” ou ta poze sou yon moun ou pa konnen:",
    thinkPlaceholder: "Who is...?",
    aiPrompt:
      "Hi! Can you describe a mystery person and let me ask 'Who is that?' questions to find out more?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike poze kesyon ak Who.",
    missionTask:
      "🎯 Jodi a, poze yon kesyon ak “Who” sou yon moun ou wè oswa panse a.",
    recap: [
      { emoji: "🙋", text: "“Who” mande sou yon moun, pa yon bagay." },
      { emoji: "⚠️", text: "Pa konfonn “Who” ak “What”." },
      { emoji: "🔗", text: "Who is...? Who called...?" },
      { emoji: "🎯", text: "Misyon: poze yon kesyon ak Who jodi a." },
    ],
  },
  {
    slug: "when-questions",
    moduleTitle: "Modil 5: Kesyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "🕐",
    heroTitle: "When — Kesyon Sou Lè",
    heroLede:
      "Itilize “When” pou mande yon moman — yon lè, yon jou, oswa yon dat.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab poze kesyon ak “When” pou konnen yon moman.",
    whatYouWillLearn: "kijan pou itilize “When” pou mande yon moman",
    prerequisite: "Leson 1 — Who",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“When” mande yon moman — yon lè, yon jou, oswa yon dat.",
    understandBody:
      "**When is your birthday?** **When do you work?** “When” mande yon moman presi — pa gen bezwen di sa k ap pase, sèlman ki lè.",
    seeItInAction: [
      { line: "When is your birthday?", tag: "Dat", emoji: "🎂" },
      { line: "When do you work?", tag: "Orè", emoji: "💼" },
      { line: "When does the store open?", tag: "Lè", emoji: "🏪" },
    ],
    patternBuilderIntro:
      "Klike sou chak sitiyasyon pou wè yon kesyon ak “When”.",
    patternBuilderOptions: [
      { chipLabel: "Birthday", display: "When is your birthday?" },
      { chipLabel: "Work", display: "When do you work?" },
      { chipLabel: "Store", display: "When does the store open?" },
    ],
    vocabulary: [
      {
        word: "When",
        ipa: "/wɛn/",
        kreyol: "Ki lè",
        example: "When is your birthday?",
      },
      {
        word: "Birthday",
        ipa: "/ˈbɜːrθdeɪ/",
        kreyol: "Anivèsè",
        example: "When is your birthday?",
      },
      {
        word: "Open",
        ipa: "/ˈoʊpən/",
        kreyol: "Louvri",
        example: "When does the store open?",
      },
      {
        word: "Close",
        ipa: "/kloʊz/",
        kreyol: "Fèmen",
        example: "When does it close?",
      },
      {
        word: "Later",
        ipa: "/ˈleɪtər/",
        kreyol: "Pita",
        example: "See you later.",
      },
    ],
    pronunciationWord: "When",
    pronunciationIpa: "/wɛn/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** son “w” klè nan kòmansman, tankou “wen”.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “when” (ki lè) ak “where” (ki kote) — yo sonnen yon ti kras sanble.",
    mistakeWrong: "Where is your birthday?",
    mistakeCorrect: "When is your birthday?",
    mistakeWhy:
      "**Poukisa:** Yon anivèsè se yon DAT, pa yon kote. “When” mande dat/lè, “where” mande kote.",
    practice: {
      prompt: "Chwazi kesyon ki kòrèk pou mande yon dat:",
      options: [
        "Where is your birthday?",
        "When is your birthday?",
        "Who is your birthday?",
        "Why is your birthday?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — yon dat mande “When”.",
    },
    thinkEmoji: "🕐",
    thinkPrompt: "Ekri yon kesyon ak “When” sou orè oswa dat yon bagay:",
    thinkPlaceholder: "When is...? / When do you...?",
    aiPrompt:
      "Hi! Can you ask me when different things happen in my week, and help me answer using 'when'?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike poze kesyon ak When.",
    missionTask:
      "🎯 Jodi a, poze yon moun yon kesyon ak “When” sou orè oswa dat.",
    recap: [
      { emoji: "🕐", text: "“When” mande yon lè, jou, oswa dat." },
      { emoji: "⚠️", text: "Pa konfonn “when” ak “where”." },
      { emoji: "🔗", text: "When is...? When do you...?" },
      { emoji: "🎯", text: "Misyon: poze yon kesyon ak When jodi a." },
    ],
  },
  {
    slug: "why-questions",
    moduleTitle: "Modil 5: Kesyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "🤔",
    heroTitle: "Why — Kesyon Sou Rezon",
    heroLede:
      "Itilize “Why” pou mande yon rezon — repons lan souvan kòmanse ak “Because”.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab poze ak reponn kesyon ak “Why”/“Because”.",
    whatYouWillLearn:
      "kijan pou mande yon rezon ak “Why” epi reponn ak “Because”",
    prerequisite: "Leson 2 — When",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Why” mande yon rezon — repons lan itilize “Because”.",
    understandBody:
      "**Why are you late?** — **Because there was traffic.** “Why” mande “poukisa”, epi repons lan itilize “because” pou eksplike.",
    seeItInAction: [
      { line: "Why are you late?", tag: "Mande rezon", emoji: "❓" },
      {
        line: "Because there was traffic.",
        tag: "Reponn ak Because",
        emoji: "🚗",
      },
      {
        line: "Why do you study English?",
        tag: "Mande motivasyon",
        emoji: "📚",
      },
    ],
    patternBuilderIntro:
      "Klike sou chak sitiyasyon pou wè kesyon ak repons li.",
    patternBuilderOptions: [
      { chipLabel: "Late", display: "Why are you late?" },
      { chipLabel: "Answer", display: "Because there was traffic." },
      { chipLabel: "Study", display: "Why do you study English?" },
    ],
    vocabulary: [
      {
        word: "Why",
        ipa: "/waɪ/",
        kreyol: "Poukisa",
        example: "Why are you late?",
      },
      {
        word: "Because",
        ipa: "/bɪˈkɔːz/",
        kreyol: "Paske",
        example: "Because there was traffic.",
      },
      {
        word: "Traffic",
        ipa: "/ˈtræfɪk/",
        kreyol: "Anbouteyaj",
        example: "There was traffic.",
      },
      {
        word: "Reason",
        ipa: "/ˈriːzən/",
        kreyol: "Rezon",
        example: "What is the reason?",
      },
      {
        word: "Late",
        ipa: "/leɪt/",
        kreyol: "An reta",
        example: "Why are you late?",
      },
    ],
    pronunciationWord: "Because",
    pronunciationIpa: "/bɪˈkɔːz/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** aksan an sou dezyèm silab la — “bi-KUZ”.",
    pronunciationMistake:
      "**Erè komen:** pa reponn yon kesyon “Why” san “because” — repons lan pa konplè.",
    mistakeWrong: "Why are you late? Traffic.",
    mistakeCorrect: "Why are you late? Because there was traffic.",
    mistakeWhy:
      "**Poukisa:** “Because” prepare repons lan pou eksplike rezon an klèman — san li, repons lan sonnen twò kout.",
    practice: {
      prompt: "Ki mo ki kòmanse yon repons pou “Why”?",
      options: ["When", "Because", "Who", "Where"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — ki mo eksplike yon rezon?",
    },
    thinkEmoji: "🤔",
    thinkPrompt: "Ekri yon kesyon “Why” epi yon repons ak “Because”:",
    thinkPlaceholder: "Why...? Because...",
    aiPrompt:
      "Hi! Can you ask me why I'm learning English, and help me answer using 'because'?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike Why/Because.",
    missionTask:
      "🎯 Jodi a, mande yon moun “Why” yon bagay, epi koute repons ki kòmanse ak “Because”.",
    recap: [
      { emoji: "🤔", text: "“Why” mande yon rezon." },
      { emoji: "🔗", text: "“Because” kòmanse repons lan." },
      { emoji: "🚗", text: "Why are you late? Because there was traffic." },
      { emoji: "🎯", text: "Misyon: mande “Why” yon bagay jodi a." },
    ],
  },
  {
    slug: "which-questions",
    moduleTitle: "Modil 5: Kesyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "👉",
    heroTitle: "Which — Chwazi Ant Opsyon",
    heroLede:
      "Itilize “Which” lè ou mande yon chwa ant de oswa plizyè bagay presi.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “Which” pou mande yon chwa.",
    whatYouWillLearn: "diferans ant “What” ak “Which”",
    prerequisite: "Leson 3 — Why",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Which” mande yon chwa ant de oswa plizyè bagay presi.",
    understandBody:
      "**Which color do you like?** Kontrèman ak “what” ki jeneral, “which” mande yon chwa ant opsyon presi ou konnen deja — tankou plizyè koulè devan ou.",
    seeItInAction: [
      { line: "Which color do you like?", tag: "Chwa", emoji: "🎨" },
      { line: "Which one is yours?", tag: "Chwa ant plizyè", emoji: "👉" },
      { line: "Which day works for you?", tag: "Chwa dat", emoji: "📅" },
    ],
    patternBuilderIntro:
      "Klike sou chak sitiyasyon pou wè yon kesyon ak “Which”.",
    patternBuilderOptions: [
      { chipLabel: "Color", display: "Which color do you like?" },
      { chipLabel: "Object", display: "Which one is yours?" },
      { chipLabel: "Day", display: "Which day works for you?" },
    ],
    vocabulary: [
      {
        word: "Which",
        ipa: "/wɪtʃ/",
        kreyol: "Kilès",
        example: "Which one is yours?",
      },
      {
        word: "Color",
        ipa: "/ˈkʌlər/",
        kreyol: "Koulè",
        example: "Which color do you like?",
      },
      {
        word: "One",
        ipa: "/wʌn/",
        kreyol: "Youn",
        example: "Which one is yours?",
      },
      {
        word: "Option",
        ipa: "/ˈɒpʃən/",
        kreyol: "Opsyon",
        example: "Which option is best?",
      },
      {
        word: "Works",
        ipa: "/wɜːrks/",
        kreyol: "Mache (konvenab)",
        example: "Which day works for you?",
      },
    ],
    pronunciationWord: "Which",
    pronunciationIpa: "/wɪtʃ/",
    mouthTip: "**Ti konsèy pou bouch ou:** son “ch” klè nan fen mo a.",
    pronunciationMistake:
      "**Erè komen:** pa itilize “what” lè gen yon lis presi opsyon devan w — itilize “which”.",
    mistakeWrong: "What one is yours?",
    mistakeCorrect: "Which one is yours?",
    mistakeWhy:
      "**Poukisa:** Lè gen yon lis limite bagay devan ou (de telefòn, twa koulè), “which” pi kòrèk pase “what”.",
    practice: {
      prompt: "Ou gen twa chemiz devan ou. Ki kesyon ki pi kòrèk?",
      options: [
        "What one do you want?",
        "Which one do you want?",
        "Who one do you want?",
        "Where one do you want?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — ou gen yon lis limite, itilize “which”.",
    },
    thinkEmoji: "👉",
    thinkPrompt: "Ekri yon kesyon “Which” ant de bagay presi:",
    thinkPlaceholder: "Which...?",
    aiPrompt:
      "Hi! Can you give me two or three options for something and ask me 'which one' I prefer?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike Which.",
    missionTask: "🎯 Jodi a, mande yon moun “Which” pou yon chwa ant de bagay.",
    recap: [
      { emoji: "👉", text: "“Which” mande yon chwa ant opsyon presi." },
      { emoji: "⚠️", text: "“What” pi jeneral, “which” pi presi." },
      { emoji: "🎨", text: "Which color? Which one? Which day?" },
      { emoji: "🎯", text: "Misyon: mande “Which” jodi a." },
    ],
  },
  {
    slug: "whose-questions",
    moduleTitle: "Modil 5: Kesyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "📱",
    heroTitle: "Whose — Kesyon Sou Posesyon",
    heroLede: "Itilize “Whose” pou mande ki moun ki posede yon bagay.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “Whose” san w pa konfonn li ak “Who's”.",
    whatYouWillLearn: "diferans ant “Whose” (posesyon) ak “Who's” (Who is)",
    prerequisite: "Leson 4 — Which",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Whose” mande ki moun ki posede yon bagay.",
    understandBody:
      "**Whose phone is this?** — **It's my phone.** “Whose” pa menm ak “Who's” (ki vle di “Who is”) — se yon konfizyon komen menm pou moun ki pale Anglè natifnatal.",
    seeItInAction: [
      { line: "Whose phone is this?", tag: "Posesyon", emoji: "📱" },
      { line: "It's my phone.", tag: "Repons", emoji: "🙋" },
      { line: "Whose idea was this?", tag: "Posesyon lide", emoji: "💡" },
    ],
    patternBuilderIntro:
      "Klike sou chak sitiyasyon pou wè yon kesyon ak “Whose”.",
    patternBuilderOptions: [
      { chipLabel: "Phone", display: "Whose phone is this?" },
      { chipLabel: "Answer", display: "It's my phone." },
      { chipLabel: "Idea", display: "Whose idea was this?" },
    ],
    vocabulary: [
      {
        word: "Whose",
        ipa: "/huːz/",
        kreyol: "Pou ki moun",
        example: "Whose phone is this?",
      },
      { word: "Mine", ipa: "/maɪn/", kreyol: "Pa mwen", example: "It's mine." },
      {
        word: "Yours",
        ipa: "/jʊrz/",
        kreyol: "Pa ou",
        example: "Is this yours?",
      },
      {
        word: "Idea",
        ipa: "/aɪˈdiːə/",
        kreyol: "Lide",
        example: "Whose idea was this?",
      },
      {
        word: "Belongs",
        ipa: "/bɪˈlɔːŋz/",
        kreyol: "Apatyen",
        example: "This belongs to me.",
      },
    ],
    pronunciationWord: "Whose",
    pronunciationIpa: "/huːz/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** “whose” ak “who's” sonnen menm jan — kontèks fè diferans lan.",
    pronunciationMistake:
      "**Erè komen:** pa ekri “Who's phone is this?” — “Who's” vle di “Who is”, ki pa gen sans isit la.",
    mistakeWrong: "Who's phone is this?",
    mistakeCorrect: "Whose phone is this?",
    mistakeWhy:
      "**Poukisa:** “Who's” = “Who is”. “Whose phone is this?” pa ka vle di “Who is phone is this?” — se “Whose” (posesyon) ki kòrèk.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou mande posesyon:",
      options: [
        "Who's book is this?",
        "Whose book is this?",
        "Who's is this book?",
        "Whose's book is this?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — posesyon itilize “Whose”, pa “Who's”.",
    },
    thinkEmoji: "📱",
    thinkPrompt: "Ekri yon kesyon “Whose” sou yon bagay ou wè:",
    thinkPlaceholder: "Whose... is this?",
    aiPrompt:
      "Hi! Can you ask me 'whose' something belongs to, and help me answer with 'mine', 'yours', or a name?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike Whose.",
    missionTask:
      "🎯 Jodi a, mande “Whose” sou yon bagay ou wè, e pratike pa konfonn li ak “Who's”.",
    recap: [
      { emoji: "📱", text: "“Whose” mande ki moun ki posede yon bagay." },
      { emoji: "⚠️", text: "“Whose” ≠ “Who's” (Who is)." },
      { emoji: "🙋", text: "Repons: It's mine/yours/his/hers." },
      { emoji: "🎯", text: "Misyon: mande “Whose” sou yon bagay." },
    ],
  },
  {
    slug: "how-questions",
    moduleTitle: "Modil 5: Kesyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "😊",
    heroTitle: "How — Kesyon Sou Fason",
    heroLede: "Itilize “How” pou mande fason yon bagay fèt, oswa yon eta.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “How” pou mande fason oswa eta.",
    whatYouWillLearn: "kijan pou itilize “How” pou mande fason ak eta",
    prerequisite: "Leson 5 — Whose",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“How” mande fason yon bagay fèt, oswa yon eta.",
    understandBody:
      "**How are you?** **How do you make coffee?** “How” mande kijan yon bagay ye oswa kijan pou fè li.",
    seeItInAction: [
      { line: "How are you?", tag: "Eta", emoji: "😊" },
      { line: "How do you make coffee?", tag: "Fason", emoji: "☕" },
      { line: "How was your day?", tag: "Rezime", emoji: "📖" },
    ],
    patternBuilderIntro:
      "Klike sou chak sitiyasyon pou wè yon kesyon ak “How”.",
    patternBuilderOptions: [
      { chipLabel: "State", display: "How are you?" },
      { chipLabel: "Method", display: "How do you make coffee?" },
      { chipLabel: "Recap", display: "How was your day?" },
    ],
    vocabulary: [
      { word: "How", ipa: "/haʊ/", kreyol: "Kijan", example: "How are you?" },
      {
        word: "Coffee",
        ipa: "/ˈkɔːfi/",
        kreyol: "Kafe",
        example: "How do you make coffee?",
      },
      {
        word: "Day",
        ipa: "/deɪ/",
        kreyol: "Jounen",
        example: "How was your day?",
      },
      {
        word: "Fine",
        ipa: "/faɪn/",
        kreyol: "Byen",
        example: "I'm fine, thank you.",
      },
      {
        word: "Well",
        ipa: "/wɛl/",
        kreyol: "Byen",
        example: "I'm doing well.",
      },
    ],
    pronunciationWord: "How",
    pronunciationIpa: "/haʊ/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** son “ow” long, tankou lè w ap di “oww” si ou fè mal.",
    pronunciationMistake:
      "**Erè komen:** pa reponn “How are you?” ak “I am here” — “here” se yon kote, pa yon eta.",
    mistakeWrong: "How are you? I am here.",
    mistakeCorrect: "How are you? I am fine.",
    mistakeWhy:
      "**Poukisa:** “How are you?” mande yon ETA (fine, tired, happy), pa yon kote. “Where are you?” ta mande kote.",
    practice: {
      prompt: "Ki repons ki kòrèk pou “How are you?”",
      options: ["I am here.", "I am fine.", "I am Monday.", "I am 5."],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “How” mande yon eta.",
    },
    thinkEmoji: "😊",
    thinkPrompt: "Ekri yon kesyon “How” sou fason yon moun fè yon bagay:",
    thinkPlaceholder: "How do you...?",
    aiPrompt:
      "Hi! Can you ask me how I am, and how I do something (like cook or travel to work), and help me answer?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike How.",
    missionTask:
      "🎯 Jodi a, mande yon moun “How are you?” epi reponn kesyon an tou ou menm.",
    recap: [
      { emoji: "😊", text: "“How” mande yon eta oswa yon fason." },
      { emoji: "☕", text: "How are you? How do you...?" },
      { emoji: "⚠️", text: "“How” ≠ “Where” — eta pa kote." },
      { emoji: "🎯", text: "Misyon: mande “How are you?” jodi a." },
    ],
  },
  {
    slug: "how-many-questions",
    moduleTitle: "Modil 5: Kesyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "🔢",
    heroTitle: "How Many — Konte Bagay",
    heroLede:
      "Itilize “How many” pou mande yon kantite ou ka konte, tankou moun oswa objè.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “How many” pou konte bagay.",
    whatYouWillLearn: "kijan pou itilize “How many” devan non ou ka konte",
    prerequisite: "Leson 6 — How",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“How many” mande yon kantite ou ka konte.",
    understandBody:
      "**How many children do you have?** Itilize “how many” devan yon non ou ka konte youn pa youn (children, books, dollars).",
    seeItInAction: [
      {
        line: "How many children do you have?",
        tag: "Konte moun",
        emoji: "👨‍👩‍👧",
      },
      { line: "How many books do you have?", tag: "Konte objè", emoji: "📚" },
      { line: "How many days until the trip?", tag: "Konte tan", emoji: "📅" },
    ],
    patternBuilderIntro:
      "Klike sou chak sitiyasyon pou wè yon kesyon ak “How many”.",
    patternBuilderOptions: [
      { chipLabel: "Children", display: "How many children do you have?" },
      { chipLabel: "Books", display: "How many books do you have?" },
      { chipLabel: "Days", display: "How many days until the trip?" },
    ],
    vocabulary: [
      {
        word: "How many",
        ipa: "/haʊ ˈmɛni/",
        kreyol: "Konbyen (konte)",
        example: "How many children?",
      },
      {
        word: "Children",
        ipa: "/ˈtʃɪldrən/",
        kreyol: "Timoun",
        example: "How many children do you have?",
      },
      {
        word: "Books",
        ipa: "/bʊks/",
        kreyol: "Liv",
        example: "How many books?",
      },
      { word: "Days", ipa: "/deɪz/", kreyol: "Jou", example: "How many days?" },
      {
        word: "Countable",
        ipa: "/ˈkaʊntəbəl/",
        kreyol: "Yon bagay ou ka konte",
        example: "Books are countable.",
      },
    ],
    pronunciationWord: "Many",
    pronunciationIpa: "/ˈmɛni/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “MEN-ee”.",
    pronunciationMistake:
      "**Erè komen:** pa di “How many money” — “money” pa konte youn pa youn, itilize “how much”.",
    mistakeWrong: "How many money do you have?",
    mistakeCorrect: "How much money do you have?",
    mistakeWhy:
      "**Poukisa:** Ou pa ka konte lajan youn pa youn (one money, two money) — “money” pran “how much”, pa “how many”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "How many books do you have?",
        "How much books do you have?",
        "How many book do you have?",
        "How books many do you have?",
      ],
      correctIndex: 0,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “books” konte, kidonk “how many”.",
    },
    thinkEmoji: "🔢",
    thinkPrompt: "Ekri yon kesyon “How many” sou yon bagay ou ka konte:",
    thinkPlaceholder: "How many...?",
    aiPrompt:
      "Hi! Can you ask me 'how many' of different countable things I have (books, siblings, phones)?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike How many.",
    missionTask:
      "🎯 Jodi a, mande yon moun “How many” sou yon bagay ou ka konte.",
    recap: [
      { emoji: "🔢", text: "“How many” pou bagay ou ka konte." },
      { emoji: "👨‍👩‍👧", text: "How many children/books/days?" },
      { emoji: "⚠️", text: "Pa itilize l pou lajan — se “how much”." },
      { emoji: "🎯", text: "Misyon: mande “How many” jodi a." },
    ],
  },
  {
    slug: "how-much-questions",
    moduleTitle: "Modil 5: Kesyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "💵",
    heroTitle: "How Much — Kantite ak Pri",
    heroLede:
      "Itilize “How much” pou mande yon kantite ou pa ka konte youn pa youn, oswa yon pri.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “How much” pou pri ak kantite.",
    whatYouWillLearn:
      "diferans ant “How many” (konte) ak “How much” (pa konte/pri)",
    prerequisite: "Leson 7 — How Many",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“How much” mande yon kantite ou pa ka konte youn pa youn, oswa yon pri.",
    understandBody:
      "**How much does this cost?** **How much water do you need?** Itilize “how much” pou lajan ak bagay ou pa ka konte (water, money, time).",
    seeItInAction: [
      { line: "How much does this cost?", tag: "Pri", emoji: "💵" },
      {
        line: "How much water do you need?",
        tag: "Kantite pa konte",
        emoji: "💧",
      },
      { line: "How much time do we have?", tag: "Tan", emoji: "⏰" },
    ],
    patternBuilderIntro:
      "Klike sou chak sitiyasyon pou wè yon kesyon ak “How much”.",
    patternBuilderOptions: [
      { chipLabel: "Price", display: "How much does this cost?" },
      { chipLabel: "Water", display: "How much water do you need?" },
      { chipLabel: "Time", display: "How much time do we have?" },
    ],
    vocabulary: [
      {
        word: "How much",
        ipa: "/haʊ mʌtʃ/",
        kreyol: "Konbyen (pa konte/pri)",
        example: "How much does it cost?",
      },
      {
        word: "Cost",
        ipa: "/kɔːst/",
        kreyol: "Koute",
        example: "How much does this cost?",
      },
      {
        word: "Water",
        ipa: "/ˈwɔːtər/",
        kreyol: "Dlo",
        example: "How much water do you need?",
      },
      {
        word: "Time",
        ipa: "/taɪm/",
        kreyol: "Tan",
        example: "How much time do we have?",
      },
      {
        word: "Price",
        ipa: "/praɪs/",
        kreyol: "Pri",
        example: "What is the price?",
      },
    ],
    pronunciationWord: "Cost",
    pronunciationIpa: "/kɔːst/",
    mouthTip: "**Ti konsèy pou bouch ou:** son “o” ouvè, tankou “kawst”.",
    pronunciationMistake:
      "**Erè komen:** pa di “How many money” — se “How much money”.",
    mistakeWrong: "How many money do you have?",
    mistakeCorrect: "How much money do you have?",
    mistakeWhy:
      "**Poukisa:** “Money” pa konte youn pa youn — li toujou pran “how much”, jamè “how many”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou mande pri:",
      options: [
        "How many does this cost?",
        "How much does this cost?",
        "How many cost is this?",
        "How much cost this?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — pri mande “how much”.",
    },
    thinkEmoji: "💵",
    thinkPrompt: "Ekri yon kesyon “How much” sou pri oswa kantite:",
    thinkPlaceholder: "How much...?",
    aiPrompt:
      "Hi! Can you play a shopkeeper and let me ask 'how much' different items cost?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike How much.",
    missionTask: "🎯 Jodi a, mande “How much” sou pri yon bagay ou vle achte.",
    recap: [
      { emoji: "💵", text: "“How much” pou pri ak bagay pa konte." },
      { emoji: "💧", text: "How much water/money/time?" },
      { emoji: "⚠️", text: "“How many” konte, “how much” pa konte/pri." },
      { emoji: "🎯", text: "Misyon: mande “How much” jodi a." },
    ],
  },
  {
    slug: "questions-mission",
    moduleTitle: "Modil 5: Kesyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "💬",
    heroTitle: "Mande Nenpòt Bagay",
    heroLede:
      "Kounye a ou gen tout mo kesyon yo — konbine yo pou aprann sou nenpòt moun oswa sitiyasyon.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab poze yon seri kesyon konplè sou yon moun.",
    whatYouWillLearn:
      "kijan pou konbine tout mo kesyon Modil 5 nan yon konvèsasyon",
    prerequisite: "Leson 8 — How Much",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Yon bon konvèsasyon itilize plizyè mo kesyon ansanm.",
    understandBody:
      "Ou ka kòmanse ak **Who**, ale nan **Where** ak **How many**, epi fini ak **Why** oswa **How much**. **Se konsa moun aprann youn sou lòt an Anglè.**",
    seeItInAction: [
      {
        line: "Who are you? What is your name?",
        tag: "Prezantasyon",
        emoji: "🙋",
      },
      {
        line: "Where do you live? How many people are in your family?",
        tag: "Detay",
        emoji: "🏠",
      },
      {
        line: "Why do you like it? How much does it cost?",
        tag: "Opinyon/Pri",
        emoji: "💭",
      },
    ],
    patternBuilderIntro: "Klike sou chak mo kesyon pou revize li.",
    patternBuilderOptions: [
      { chipLabel: "Who", display: "Who are you?" },
      { chipLabel: "How many", display: "How many people are in your family?" },
      { chipLabel: "How much", display: "How much does it cost?" },
    ],
    vocabulary: [
      {
        word: "Question",
        ipa: "/ˈkwɛstʃən/",
        kreyol: "Kesyon",
        example: "I have a question.",
      },
      {
        word: "Answer",
        ipa: "/ˈænsər/",
        kreyol: "Repons",
        example: "That's a good answer.",
      },
      {
        word: "Conversation",
        ipa: "/ˌkɒnvərˈseɪʃən/",
        kreyol: "Konvèsasyon",
        example: "We had a nice conversation.",
      },
      {
        word: "Curious",
        ipa: "/ˈkjʊəriəs/",
        kreyol: "Kirye",
        example: "I am curious about you.",
      },
      {
        word: "Everything",
        ipa: "/ˈɛvriθɪŋ/",
        kreyol: "Tout bagay",
        example: "Ask me everything.",
      },
    ],
    pronunciationWord: "Curious",
    pronunciationIpa: "/ˈkjʊəriəs/",
    mouthTip: "**Ti konsèy pou bouch ou:** twa silab, “KYUR-ee-us”.",
    pronunciationMistake:
      "**Erè komen:** pa poze twòp kesyon youn apre lòt san koute repons lan — yon bon konvèsasyon ekoute tou.",
    mistakeWrong: "Who? Where? When? Why? (san koute repons)",
    mistakeCorrect: "Who are you? [koute] Where do you live? [koute]",
    mistakeWhy:
      "**Poukisa:** Yon konvèsasyon reyèl bezwen ekoute repons lan anvan pwochen kesyon an — pa jis anpile kesyon.",
    practice: {
      prompt: "Ki mo kesyon ki mande yon pri?",
      options: ["Who", "When", "How much", "Which"],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — pri mande “how much”.",
    },
    thinkEmoji: "💬",
    thinkPrompt: "Ekri twa kesyon diferan ou ta poze yon moun nouvo:",
    thinkPlaceholder: "Who...? Where...? How many...?",
    aiPrompt:
      "Hi! Can you let me interview you using different question words — who, when, why, how many, how much — and answer naturally?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 5 ansanm.",
    missionTask:
      "🎯 Jodi a, poze yon moun twa kesyon diferan (ak twa mo kesyon diferan) epi koute repons yo.",
    recap: [
      {
        emoji: "💬",
        text: "Who, when, why, which, whose, how, how many, how much.",
      },
      { emoji: "👂", text: "Yon bon konvèsasyon koute repons yo tou." },
      { emoji: "🎓", text: "Ou fini Modil 5 — Kesyon Yo!" },
      { emoji: "🎯", text: "Misyon: poze twa kesyon diferan jodi a." },
    ],
  },
  {
    slug: "action-verbs-conjugation",
    moduleTitle: "Modil 6: Vèb Aksyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "➕",
    heroTitle: "Vèb Aksyon Yo ak -s/-es",
    heroLede:
      "Vèb aksyon yo chanje yon ti kras selon ki moun w ap pale de li — aprann règ la anvan nou kòmanse.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap konnen ki lè pou ajoute “-s” oswa “-es” sou yon vèb aksyon.",
    whatYouWillLearn: "règ -s/-es pou he/she/it ak vèb aksyon",
    prerequisite: "Ou fin Modil 5 — Kesyon Yo",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "He/She/It ajoute “-s” oswa “-es” sou vèb la.",
    understandBody:
      "**I work. He works.** Kontrèman ak “to be”/“to have” ki chanje tout mo a, vèb aksyon yo (work, eat, go) rete menm pou I/you/we/they, men yo ajoute “-s” pou he/she/it: **works, eats, goes**.",
    seeItInAction: [
      { line: "I work every day.", tag: "I/you/we/they", emoji: "💬" },
      { line: "She works every day.", tag: "He/she/it + s", emoji: "💬" },
      { line: "He goes to school.", tag: "Go → goes", emoji: "💬" },
    ],
    patternBuilderIntro: "Klike sou chak pwonon pou wè fòm vèb la.",
    patternBuilderOptions: [
      { chipLabel: "I", display: "I work every day." },
      { chipLabel: "She", display: "She works every day." },
      { chipLabel: "He", display: "He goes to school." },
    ],
    vocabulary: [
      {
        word: "Work",
        ipa: "/wɜːrk/",
        kreyol: "Travay",
        example: "I work every day.",
      },
      {
        word: "Eat",
        ipa: "/iːt/",
        kreyol: "Manje",
        example: "He eats breakfast.",
      },
      {
        word: "Go",
        ipa: "/goʊ/",
        kreyol: "Ale",
        example: "He goes to school.",
      },
      {
        word: "Every day",
        ipa: "/ˈɛvri deɪ/",
        kreyol: "Chak jou",
        example: "I work every day.",
      },
      {
        word: "School",
        ipa: "/skuːl/",
        kreyol: "Lekòl",
        example: "He goes to school.",
      },
    ],
    pronunciationWord: "Works",
    pronunciationIpa: "/wɜːrks/",
    mouthTip: "**Ti konsèy pou bouch ou:** son “s” la klè nan fen mo a.",
    pronunciationMistake:
      "**Erè komen:** pa bliye “-s” pou he/she/it — “She work” pa kòrèk.",
    mistakeWrong: "She work every day.",
    mistakeCorrect: "She works every day.",
    mistakeWhy:
      "**Poukisa:** He/She/It toujou ajoute “-s” (oswa “-es”) sou vèb aksyon nan tan prezan senp — menm règ la ap swiv nou tout Modil 6.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "He work every day.",
        "He works every day.",
        "He working every day.",
        "He worked every day.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “he” bezwen “-s”.",
    },
    thinkEmoji: "➕",
    thinkPrompt: "Ekri de fraz sou yon moun (he/she) ak yon vèb aksyon:",
    thinkPlaceholder: "He/She ___s...",
    aiPrompt:
      "Hi! Can you give me simple action verbs and ask me to conjugate them for he/she/it by adding -s?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike règ -s/-es la.",
    missionTask:
      "🎯 Jodi a, di de fraz sou yon moun (he oswa she) ak yon vèb aksyon ki fini ak “-s”.",
    recap: [
      { emoji: "➕", text: "He/She/It ajoute “-s” sou vèb aksyon an." },
      { emoji: "🔗", text: "I/You/We/They pa chanje vèb la." },
      {
        emoji: "⚠️",
        text: "Go → goes, se pa yon eksepsyon konplè, jis yon lòt fòm “-es”.",
      },
      { emoji: "🎯", text: "Misyon: di de fraz ak vèb aksyon +s." },
    ],
  },
  {
    slug: "go-and-come",
    moduleTitle: "Modil 6: Vèb Aksyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "🚶",
    heroTitle: "Go ak Come",
    heroLede:
      "“Go” pou ale LWEN moun k ap pale, “come” pou ale VÈ moun k ap pale.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “go” ak “come” kòrèkteman.",
    whatYouWillLearn: "diferans ant “go” (ale lwen) ak “come” (vin vè)",
    prerequisite: "Leson 1 — Vèb Aksyon Yo ak -s/-es",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Go” ale lwen, “come” vin vè moun k ap pale.",
    understandBody:
      "**I go to work.** **Come here!** Itilize “go” lè direksyon an ale lwen moun k ap pale, “come” lè li ale vè moun sa a.",
    seeItInAction: [
      { line: "I go to work every morning.", tag: "Ale lwen", emoji: "🚶" },
      { line: "Come here, please!", tag: "Ale vè ou", emoji: "👋" },
      {
        line: "She comes to my house on Sundays.",
        tag: "Vin isit",
        emoji: "🏠",
      },
    ],
    patternBuilderIntro: "Klike sou chak direksyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Go", display: "I go to work." },
      { chipLabel: "Come", display: "Come here!" },
      { chipLabel: "Comes", display: "She comes to my house." },
    ],
    vocabulary: [
      { word: "Go", ipa: "/goʊ/", kreyol: "Ale", example: "I go to work." },
      { word: "Come", ipa: "/kʌm/", kreyol: "Vini", example: "Come here!" },
      {
        word: "Work",
        ipa: "/wɜːrk/",
        kreyol: "Travay",
        example: "I go to work.",
      },
      { word: "Here", ipa: "/hɪər/", kreyol: "Isit la", example: "Come here!" },
      {
        word: "Sunday",
        ipa: "/ˈsʌndeɪ/",
        kreyol: "Dimanch",
        example: "She comes on Sundays.",
      },
    ],
    pronunciationWord: "Come",
    pronunciationIpa: "/kʌm/",
    mouthTip: "**Ti konsèy pou bouch ou:** son “u” kout, tankou “kuhm”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye “-s” pou “she” — “goes”, pa “go”.",
    mistakeWrong: "She go to work.",
    mistakeCorrect: "She goes to work.",
    mistakeWhy:
      "**Poukisa:** “Go” fini ak yon son vwayèl, kidonk li ajoute “-es” pou he/she/it: **goes**.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "She go to work.",
        "She goes to work.",
        "She going to work.",
        "She comed to work.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “go” + “she” vin “goes”.",
    },
    thinkEmoji: "🚶",
    thinkPrompt: "Ekri yon fraz ak “go” epi yon lòt ak “come”:",
    thinkPlaceholder: "I go... / Come...",
    aiPrompt:
      "Hi! Can you ask me where I go every day, and invite me to come somewhere, so I can practice go and come?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike go/come.",
    missionTask:
      "🎯 Jodi a, itilize “go” pou di kote ou prale, epi “come” pou envite yon moun vin yon kote.",
    recap: [
      { emoji: "🚶", text: "“Go” ale lwen moun k ap pale." },
      { emoji: "👋", text: "“Come” vin vè moun k ap pale." },
      { emoji: "⚠️", text: "Go → goes pou he/she/it." },
      { emoji: "🎯", text: "Misyon: itilize go ak come jodi a." },
    ],
  },
  {
    slug: "eat-drink-sleep",
    moduleTitle: "Modil 6: Vèb Aksyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "🍳",
    heroTitle: "Eat, Drink, ak Sleep",
    heroLede: "Twa vèb pou bezwen debaz chak jou: manje, bwè, dòmi.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize eat, drink, ak sleep nan fraz senp.",
    whatYouWillLearn: "vèb pou bezwen debaz chak jou",
    prerequisite: "Leson 2 — Go ak Come",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Twa bezwen debaz, twa vèb senp.",
    understandBody:
      "**I eat breakfast at 7.** **He drinks coffee every morning.** **They sleep eight hours.** Twa vèb sa yo dekri bezwen ou pa ka evite chak jou.",
    seeItInAction: [
      { line: "I eat breakfast at 7.", tag: "Manje", emoji: "🍳" },
      { line: "He drinks coffee every morning.", tag: "Bwè", emoji: "☕" },
      { line: "They sleep eight hours.", tag: "Dòmi", emoji: "😴" },
    ],
    patternBuilderIntro: "Klike sou chak bezwen pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Eat", display: "I eat breakfast at 7." },
      { chipLabel: "Drink", display: "He drinks coffee." },
      { chipLabel: "Sleep", display: "They sleep eight hours." },
    ],
    vocabulary: [
      {
        word: "Eat",
        ipa: "/iːt/",
        kreyol: "Manje",
        example: "I eat breakfast.",
      },
      {
        word: "Drink",
        ipa: "/drɪŋk/",
        kreyol: "Bwè",
        example: "He drinks coffee.",
      },
      {
        word: "Sleep",
        ipa: "/sliːp/",
        kreyol: "Dòmi",
        example: "They sleep eight hours.",
      },
      {
        word: "Breakfast",
        ipa: "/ˈbrɛkfəst/",
        kreyol: "Manje maten",
        example: "I eat breakfast at 7.",
      },
      {
        word: "Hours",
        ipa: "/ˈaʊərz/",
        kreyol: "Èdtan",
        example: "They sleep eight hours.",
      },
    ],
    pronunciationWord: "Sleep",
    pronunciationIpa: "/sliːp/",
    mouthTip: "**Ti konsèy pou bouch ou:** son “ee” long, tankou “sleeep”.",
    pronunciationMistake: "**Erè komen:** pa di “He drink” — se “He drinks”.",
    mistakeWrong: "He drink coffee every morning.",
    mistakeCorrect: "He drinks coffee every morning.",
    mistakeWhy:
      "**Poukisa:** Menm règ Modil 6 la ap swiv nou — “he” bezwen “-s” sou vèb la.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "They sleeps eight hours.",
        "They sleep eight hours.",
        "They sleeping eight hours.",
        "They slept eight hours.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “they” pa pran “-s”.",
    },
    thinkEmoji: "🍳",
    thinkPrompt: "Ekri twa fraz sou woutin ou ak eat/drink/sleep:",
    thinkPlaceholder: "I eat... I drink... I sleep...",
    aiPrompt:
      "Hi! Can you ask me what I eat, drink, and how much I sleep, so I can practice these three verbs?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike eat/drink/sleep.",
    missionTask:
      "🎯 Jodi a, di twa fraz sou sa ou manje, bwè, ak konbyen ou dòmi.",
    recap: [
      { emoji: "🍳", text: "Eat, drink, sleep — bezwen debaz chak jou." },
      { emoji: "⚠️", text: "He/she/it ajoute “-s”: eats, drinks, sleeps." },
      { emoji: "☕", text: "I eat. He drinks. They sleep." },
      { emoji: "🎯", text: "Misyon: di twa fraz sou woutin ou." },
    ],
  },
  {
    slug: "walk-and-run",
    moduleTitle: "Modil 6: Vèb Aksyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "🏃",
    heroTitle: "Walk ak Run",
    heroLede: "De fason pou deplase sou pye — youn dousman, youn vit.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “walk” ak “run” nan fraz senp.",
    whatYouWillLearn: "diferans ant “walk” (mache) ak “run” (kouri)",
    prerequisite: "Leson 3 — Eat, Drink, ak Sleep",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“Walk” dousman, “run” vit — de fason pou deplase sou pye.",
    understandBody:
      "**I walk to the store.** **She runs every morning.** Tou de vèb yo dekri mouvman sou pye, men vitès la diferan.",
    seeItInAction: [
      { line: "I walk to the store.", tag: "Mache", emoji: "🚶" },
      { line: "She runs every morning.", tag: "Kouri", emoji: "🏃" },
      {
        line: "We walk together after dinner.",
        tag: "Mache ansanm",
        emoji: "👫",
      },
    ],
    patternBuilderIntro: "Klike sou chak vitès pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Walk", display: "I walk to the store." },
      { chipLabel: "Run", display: "She runs every morning." },
      { chipLabel: "Walk together", display: "We walk together after dinner." },
    ],
    vocabulary: [
      {
        word: "Walk",
        ipa: "/wɔːk/",
        kreyol: "Mache",
        example: "I walk to the store.",
      },
      {
        word: "Run",
        ipa: "/rʌn/",
        kreyol: "Kouri",
        example: "She runs every morning.",
      },
      {
        word: "Store",
        ipa: "/stɔːr/",
        kreyol: "Magazen",
        example: "I walk to the store.",
      },
      {
        word: "Together",
        ipa: "/təˈgɛðər/",
        kreyol: "Ansanm",
        example: "We walk together.",
      },
      {
        word: "Morning",
        ipa: "/ˈmɔːrnɪŋ/",
        kreyol: "Maten",
        example: "She runs every morning.",
      },
    ],
    pronunciationWord: "Walk",
    pronunciationIpa: "/wɔːk/",
    mouthTip: "**Ti konsèy pou bouch ou:** “l” la pa pwononse fò — “wawk”.",
    pronunciationMistake: "**Erè komen:** pa di “She run” — se “She runs”.",
    mistakeWrong: "She run every morning.",
    mistakeCorrect: "She runs every morning.",
    mistakeWhy:
      "**Poukisa:** Menm règ -s/-es la — “she” bezwen “runs”, pa “run”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "She run every morning.",
        "She runs every morning.",
        "She running every morning.",
        "She ran every morning.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “she” bezwen “-s”.",
    },
    thinkEmoji: "🏃",
    thinkPrompt: "Ekri yon fraz ak “walk” epi yon lòt ak “run”:",
    thinkPlaceholder: "I walk... / I run...",
    aiPrompt:
      "Hi! Can you ask me if I walk or run for exercise, and how often, so I can practice these verbs?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike walk/run.",
    missionTask:
      "🎯 Jodi a, di si ou mache oswa kouri pou fè egzèsis, ak ki fwa.",
    recap: [
      { emoji: "🚶", text: "“Walk” dousman, “run” vit." },
      { emoji: "⚠️", text: "She walks. She runs. (ajoute -s)" },
      { emoji: "🏪", text: "I walk to the store." },
      { emoji: "🎯", text: "Misyon: di si ou mache oswa kouri." },
    ],
  },
  {
    slug: "work-and-study",
    moduleTitle: "Modil 6: Vèb Aksyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "💼",
    heroTitle: "Work ak Study",
    heroLede: "De vèb pou aktivite pwodiktif — travay ak aprann.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “work” ak “study” nan fraz senp.",
    whatYouWillLearn: "vèb pou travay ak aprann, ak yon eksepsyon òtograf",
    prerequisite: "Leson 4 — Walk ak Run",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Study” chanje “y” an “ies” pou he/she/it.",
    understandBody:
      "**I work in an office.** **She studies English every night.** Atansyon: vèb ki fini ak yon konsòn + “y” (tankou study) chanje “y” an “ies”: **studies**, pa “studys”.",
    seeItInAction: [
      { line: "I work in an office.", tag: "Travay", emoji: "💼" },
      {
        line: "She studies English every night.",
        tag: "Etidye (chanjman òtograf)",
        emoji: "📚",
      },
      { line: "We work hard.", tag: "Travay di", emoji: "💪" },
    ],
    patternBuilderIntro: "Klike sou chak aktivite pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Work", display: "I work in an office." },
      { chipLabel: "Studies", display: "She studies English." },
      { chipLabel: "Work hard", display: "We work hard." },
    ],
    vocabulary: [
      {
        word: "Work",
        ipa: "/wɜːrk/",
        kreyol: "Travay",
        example: "I work in an office.",
      },
      {
        word: "Study",
        ipa: "/ˈstʌdi/",
        kreyol: "Etidye",
        example: "She studies English.",
      },
      {
        word: "Office",
        ipa: "/ˈɒfɪs/",
        kreyol: "Biwo",
        example: "I work in an office.",
      },
      {
        word: "Hard",
        ipa: "/hɑːrd/",
        kreyol: "Di (avèk fòs)",
        example: "We work hard.",
      },
      {
        word: "Night",
        ipa: "/naɪt/",
        kreyol: "Aswè",
        example: "She studies every night.",
      },
    ],
    pronunciationWord: "Studies",
    pronunciationIpa: "/ˈstʌdiz/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “STUH-deez”.",
    pronunciationMistake:
      "**Erè komen:** pa ekri “studys” — se “studies”, ak “ies”.",
    mistakeWrong: "She studys English every night.",
    mistakeCorrect: "She studies English every night.",
    mistakeWhy:
      "**Poukisa:** Lè yon vèb fini ak konsòn + “y” (study), ou chanje “y” an “i” epi ajoute “es”: **studies**.",
    practice: {
      prompt: "Chwazi fòm ki kòrèk pou “she” + study:",
      options: ["She studys.", "She studies.", "She studyes.", "She study."],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “y” chanje an “ies”.",
    },
    thinkEmoji: "💼",
    thinkPrompt: "Ekri yon fraz ak “work” epi yon lòt ak “study”:",
    thinkPlaceholder: "I work... / I study...",
    aiPrompt:
      "Hi! Can you ask me where I work and what I study, and help me use the correct verb forms?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike work/study.",
    missionTask:
      "🎯 Jodi a, di kote ou travay oswa sa ou etidye, ak “work”/“study”.",
    recap: [
      { emoji: "💼", text: "Work — travay. Study — etidye." },
      { emoji: "⚠️", text: "Study → studies (y → ies), pa “studys”." },
      { emoji: "📚", text: "She studies English every night." },
      { emoji: "🎯", text: "Misyon: di kote ou travay oswa etidye." },
    ],
  },
  {
    slug: "play-watch-listen",
    moduleTitle: "Modil 6: Vèb Aksyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "⚽",
    heroTitle: "Play, Watch, ak Listen",
    heroLede: "Twa vèb pou tan lib — jwe, gade, koute.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize play, watch, ak listen nan fraz senp.",
    whatYouWillLearn: "vèb pou tan lib, ak “listen to”",
    prerequisite: "Leson 5 — Work ak Study",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Listen” toujou pran “to” anvan sa w ap koute.",
    understandBody:
      "**The kids play in the yard.** **We watch movies.** **I listen to music.** Remake “to” apre “listen” — sa se yon bagay pou memorize.",
    seeItInAction: [
      { line: "The kids play in the yard.", tag: "Jwe", emoji: "⚽" },
      { line: "We watch movies on Fridays.", tag: "Gade", emoji: "🎬" },
      { line: "I listen to music every day.", tag: "Koute", emoji: "🎵" },
    ],
    patternBuilderIntro: "Klike sou chak aktivite lib pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Play", display: "The kids play in the yard." },
      { chipLabel: "Watch", display: "We watch movies." },
      { chipLabel: "Listen", display: "I listen to music." },
    ],
    vocabulary: [
      {
        word: "Play",
        ipa: "/pleɪ/",
        kreyol: "Jwe",
        example: "The kids play in the yard.",
      },
      {
        word: "Watch",
        ipa: "/wɒtʃ/",
        kreyol: "Gade",
        example: "We watch movies.",
      },
      {
        word: "Listen",
        ipa: "/ˈlɪsən/",
        kreyol: "Koute",
        example: "I listen to music.",
      },
      {
        word: "Movie",
        ipa: "/ˈmuːvi/",
        kreyol: "Fim",
        example: "We watch movies on Fridays.",
      },
      {
        word: "Music",
        ipa: "/ˈmjuːzɪk/",
        kreyol: "Mizik",
        example: "I listen to music.",
      },
    ],
    pronunciationWord: "Listen",
    pronunciationIpa: "/ˈlɪsən/",
    mouthTip: "**Ti konsèy pou bouch ou:** “t” la pa pwononse — “LIS-uhn”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye “to” apre “listen” — “I listen music” pa kòrèk.",
    mistakeWrong: "I listen music every day.",
    mistakeCorrect: "I listen to music every day.",
    mistakeWhy:
      "**Poukisa:** “Listen” toujou swiv ak “to” anvan sa w ap koute — “listen to music”, “listen to me”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I listen music.",
        "I listen to music.",
        "I listens music.",
        "I listen at music.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “listen” bezwen “to”.",
    },
    thinkEmoji: "⚽",
    thinkPrompt: "Ekri sou sa ou fè nan tan lib ak play/watch/listen:",
    thinkPlaceholder: "I play... I watch... I listen to...",
    aiPrompt:
      "Hi! Can you ask me what I play, watch, and listen to in my free time, and help me answer correctly?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike play/watch/listen.",
    missionTask:
      "🎯 Jodi a, di sa ou renmen jwe, gade, oswa koute nan tan lib ou.",
    recap: [
      { emoji: "⚽", text: "Play, watch, listen — vèb pou tan lib." },
      { emoji: "🎵", text: "“Listen” toujou pran “to”." },
      { emoji: "🎬", text: "We watch movies on Fridays." },
      { emoji: "🎯", text: "Misyon: di sa ou fè nan tan lib ou." },
    ],
  },
  {
    slug: "buy-and-sell",
    moduleTitle: "Modil 6: Vèb Aksyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "🛒",
    heroTitle: "Buy ak Sell",
    heroLede: "De vèb opoze pou echanj — achte ak vann.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “buy” ak “sell” nan fraz senp.",
    whatYouWillLearn: "vèb pou achte ak vann",
    prerequisite: "Leson 6 — Play, Watch, ak Listen",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Buy” ak “sell” se de aksyon opoze nan yon echanj.",
    understandBody:
      "**I buy vegetables at the market.** **She sells clothes online.** Yon moun achte (buy), yon lòt vann (sell) — se de bò menm echanj lan.",
    seeItInAction: [
      { line: "I buy vegetables at the market.", tag: "Achte", emoji: "🛒" },
      { line: "She sells clothes online.", tag: "Vann", emoji: "👗" },
      {
        line: "We buy and sell things every week.",
        tag: "Tou de",
        emoji: "💰",
      },
    ],
    patternBuilderIntro: "Klike sou chak aksyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Buy", display: "I buy vegetables at the market." },
      { chipLabel: "Sell", display: "She sells clothes online." },
      { chipLabel: "Both", display: "We buy and sell things every week." },
    ],
    vocabulary: [
      {
        word: "Buy",
        ipa: "/baɪ/",
        kreyol: "Achte",
        example: "I buy vegetables.",
      },
      {
        word: "Sell",
        ipa: "/sɛl/",
        kreyol: "Vann",
        example: "She sells clothes.",
      },
      {
        word: "Market",
        ipa: "/ˈmɑːrkɪt/",
        kreyol: "Mache",
        example: "I buy vegetables at the market.",
      },
      {
        word: "Online",
        ipa: "/ˈɒnlaɪn/",
        kreyol: "Sou entènèt",
        example: "She sells clothes online.",
      },
      {
        word: "Vegetables",
        ipa: "/ˈvɛdʒtəbəlz/",
        kreyol: "Legim",
        example: "I buy vegetables.",
      },
    ],
    pronunciationWord: "Buy",
    pronunciationIpa: "/baɪ/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** sonnen tankou “bye” lè w ap di orevwa.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “buy” (achte) ak “by” (pa/bò) — yo sonnen menm jan.",
    mistakeWrong: "I by vegetables at the market.",
    mistakeCorrect: "I buy vegetables at the market.",
    mistakeWhy:
      "**Poukisa:** “Buy” (achte) ak “by” (yon preposisyon) sonnen menm jan men yo ekri diferan ak sans diferan.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "She buy clothes online.",
        "She buys clothes online.",
        "She selling clothes online.",
        "She sell clothes online.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “she” bezwen “-s”.",
    },
    thinkEmoji: "🛒",
    thinkPrompt: "Ekri yon fraz ak “buy” epi yon lòt ak “sell”:",
    thinkPlaceholder: "I buy... / I sell...",
    aiPrompt:
      "Hi! Can you ask me what I buy at the market and if I ever sell things, so I can practice buy and sell?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike buy/sell.",
    missionTask: "🎯 Jodi a, di yon bagay ou achte souvan, ak “buy”.",
    recap: [
      { emoji: "🛒", text: "“Buy” achte, “sell” vann." },
      { emoji: "⚠️", text: "“Buy” ≠ “by” — menm son, sans diferan." },
      { emoji: "👗", text: "She sells clothes online." },
      { emoji: "🎯", text: "Misyon: di yon bagay ou achte souvan." },
    ],
  },
  {
    slug: "cook-wash-clean",
    moduleTitle: "Modil 6: Vèb Aksyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "🍲",
    heroTitle: "Cook, Wash, ak Clean",
    heroLede: "Twa vèb pou travay lakay — kwit manje, lave, netwaye.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize cook, wash, ak clean nan fraz senp.",
    whatYouWillLearn: "vèb pou travay lakay",
    prerequisite: "Leson 7 — Buy ak Sell",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Twa vèb pou travay lakay chak jou.",
    understandBody:
      "**My mother cooks dinner every night.** **I wash the dishes after dinner.** **We clean the house on Saturdays.** Twa vèb sa yo fè pati travay lakay chak jou oswa chak semèn.",
    seeItInAction: [
      {
        line: "My mother cooks dinner every night.",
        tag: "Kwit manje",
        emoji: "🍲",
      },
      { line: "I wash the dishes after dinner.", tag: "Lave", emoji: "🍽️" },
      { line: "We clean the house on Saturdays.", tag: "Netwaye", emoji: "🧹" },
    ],
    patternBuilderIntro: "Klike sou chak travay lakay pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Cook", display: "My mother cooks dinner." },
      { chipLabel: "Wash", display: "I wash the dishes." },
      { chipLabel: "Clean", display: "We clean the house." },
    ],
    vocabulary: [
      {
        word: "Cook",
        ipa: "/kʊk/",
        kreyol: "Kwit manje",
        example: "My mother cooks dinner.",
      },
      {
        word: "Wash",
        ipa: "/wɒʃ/",
        kreyol: "Lave",
        example: "I wash the dishes.",
      },
      {
        word: "Clean",
        ipa: "/kliːn/",
        kreyol: "Netwaye",
        example: "We clean the house.",
      },
      {
        word: "Dishes",
        ipa: "/ˈdɪʃɪz/",
        kreyol: "Asyèt",
        example: "I wash the dishes.",
      },
      {
        word: "Saturday",
        ipa: "/ˈsætərdeɪ/",
        kreyol: "Samdi",
        example: "We clean on Saturdays.",
      },
    ],
    pronunciationWord: "Wash",
    pronunciationIpa: "/wɒʃ/",
    mouthTip: "**Ti konsèy pou bouch ou:** son “sh” klè nan fen mo a.",
    pronunciationMistake:
      "**Erè komen:** pa bliye “-es” pou “wash” lè se he/she/it — “washes”, pa “washs”.",
    mistakeWrong: "She washs the dishes.",
    mistakeCorrect: "She washes the dishes.",
    mistakeWhy:
      "**Poukisa:** Vèb ki fini ak “sh”, “ch”, “s”, oswa “x” ajoute “-es” (pa jis “-s”) pou he/she/it: **washes**.",
    practice: {
      prompt: "Chwazi fòm ki kòrèk pou “she” + wash:",
      options: ["She washs.", "She washes.", "She wash.", "She washing."],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “wash” ajoute “-es”.",
    },
    thinkEmoji: "🍲",
    thinkPrompt: "Ekri sou ki travay lakay ou fè, ak cook/wash/clean:",
    thinkPlaceholder: "I cook... I wash... I clean...",
    aiPrompt:
      "Hi! Can you ask me who cooks, washes dishes, and cleans in my house, so I can practice these verbs?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike cook/wash/clean.",
    missionTask:
      "🎯 Jodi a, di ki travay lakay ou fè, ak cook, wash, oswa clean.",
    recap: [
      { emoji: "🍲", text: "Cook, wash, clean — travay lakay." },
      { emoji: "⚠️", text: "Wash → washes (ajoute -es)." },
      { emoji: "🧹", text: "We clean the house on Saturdays." },
      { emoji: "🎯", text: "Misyon: di ki travay lakay ou fè." },
    ],
  },
  {
    slug: "action-verbs-mission",
    moduleTitle: "Modil 6: Vèb Aksyon Yo",
    illustrationKey: "emoji",
    heroEmoji: "🌟",
    heroTitle: "Yon Jounen Aksyon",
    heroLede:
      "Se lè a pou konbine plizyè vèb aksyon pou rakonte yon jounen aktif, soti nan maten rive nan aswè.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab rakonte yon jounen ak plizyè vèb aksyon.",
    whatYouWillLearn: "kijan pou konbine plizyè vèb aksyon nan yon istwa",
    prerequisite: "Leson 8 — Cook, Wash, ak Clean",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Plizyè vèb aksyon ansanm rakonte yon jounen aktif.",
    understandBody:
      "**I wake up, eat breakfast, and go to work.** Konekte plizyè vèb aksyon ak “and” pou rakonte yon jounen konplè, soti nan maten rive nan aswè.",
    seeItInAction: [
      {
        line: "I wake up, eat breakfast, and go to work.",
        tag: "Maten",
        emoji: "🌅",
      },
      { line: "I work, study, and eat lunch.", tag: "Jounen", emoji: "💼" },
      { line: "I cook dinner, watch TV, and sleep.", tag: "Aswè", emoji: "🌙" },
    ],
    patternBuilderIntro: "Klike sou chak moman pou wè fraz aksyon li.",
    patternBuilderOptions: [
      { chipLabel: "Morning", display: "I wake up and go to work." },
      { chipLabel: "Day", display: "I work and study." },
      { chipLabel: "Night", display: "I cook and sleep." },
    ],
    vocabulary: [
      {
        word: "Active",
        ipa: "/ˈæktɪv/",
        kreyol: "Aktif",
        example: "I have an active day.",
      },
      {
        word: "Busy",
        ipa: "/ˈbɪzi/",
        kreyol: "Okipe",
        example: "My day is busy.",
      },
      {
        word: "Then",
        ipa: "/ðɛn/",
        kreyol: "Answit",
        example: "I eat, then I work.",
      },
      {
        word: "Finally",
        ipa: "/ˈfaɪnəli/",
        kreyol: "Finalman",
        example: "Finally, I sleep.",
      },
      {
        word: "Story",
        ipa: "/ˈstɔːri/",
        kreyol: "Istwa",
        example: "This is my daily story.",
      },
    ],
    pronunciationWord: "Finally",
    pronunciationIpa: "/ˈfaɪnəli/",
    mouthTip: "**Ti konsèy pou bouch ou:** twa silab, “FY-nuh-lee”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye konjige chak vèb kòrèkteman menm lè yo tout nan menm fraz.",
    mistakeWrong: "I wakes up, eats breakfast, and goes to work.",
    mistakeCorrect: "I wake up, eat breakfast, and go to work.",
    mistakeWhy:
      "**Poukisa:** Si sijè a se “I”, okenn vèb pa dwe pran “-s” — se sèlman he/she/it ki bezwen “-s”/“-es”.",
    practice: {
      prompt: "Ki vèsyon ki kòrèk pou “I”?",
      options: [
        "I wakes up and eats.",
        "I wake up and eat.",
        "I waking up and eating.",
        "I woke up and ate.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “I” pa pran “-s”.",
    },
    thinkEmoji: "🌟",
    thinkPrompt:
      "Ekri yon ti istwa sou yon jounen aktif ou, ak omwen 4 vèb aksyon:",
    thinkPlaceholder: "I wake up, ... , and ...",
    aiPrompt:
      "Hi! Can you listen to a short story about my active day using different action verbs, and give me friendly feedback on my grammar?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 6 ansanm.",
    missionTask:
      "🎯 Jodi a, rakonte yon jounen aktif ou ak omwen kat vèb aksyon diferan nan Modil 6.",
    recap: [
      {
        emoji: "🌟",
        text: "Konekte plizyè vèb aksyon ak “and” pou rakonte yon istwa.",
      },
      { emoji: "⚠️", text: "“I” pa janm pran “-s” sou vèb la." },
      { emoji: "🎓", text: "Ou fini Modil 6 — Vèb Aksyon Yo!" },
      { emoji: "🎯", text: "Misyon: rakonte yon jounen aktif ou." },
    ],
  },
  {
    slug: "do-does-did",
    moduleTitle: "Modil 7: Vèb Pisan Pati 2",
    illustrationKey: "emoji",
    heroEmoji: "✅",
    heroTitle: "Do, Does, ak Did",
    heroLede:
      "“Do” se yon vèb aksyon (fè yon bagay), men li sèvi tou pou ede fòme kesyon ak negatif — ou deja wè sa ak “have”.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap konnen lè pou itilize do, does, ak did.",
    whatYouWillLearn: "diferans ant do/does (prezan) ak did (tan pase)",
    prerequisite: "Ou fin Modil 6 — Vèb Aksyon Yo",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“Do” gen de wòl: yon aksyon, ak yon zouti pou kesyon/negatif.",
    understandBody:
      "**I do my homework.** (aksyon) **Do you like coffee?** (kesyon). “Does” se fòm he/she/it, “did” se tan pase pou tou de — menm jan nou te wè ak “have” nan Modil 3.",
    seeItInAction: [
      { line: "I do my homework every night.", tag: "Aksyon", emoji: "📝" },
      { line: "Does she like coffee?", tag: "Kesyon (he/she/it)", emoji: "☕" },
      { line: "I did my homework yesterday.", tag: "Tan pase", emoji: "✅" },
    ],
    patternBuilderIntro: "Klike sou chak fòm pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Do", display: "I do my homework." },
      { chipLabel: "Does", display: "Does she like coffee?" },
      { chipLabel: "Did", display: "I did my homework yesterday." },
    ],
    vocabulary: [
      { word: "Do", ipa: "/duː/", kreyol: "Fè", example: "I do my homework." },
      {
        word: "Does",
        ipa: "/dʌz/",
        kreyol: "Fè (he/she/it)",
        example: "Does she like coffee?",
      },
      {
        word: "Did",
        ipa: "/dɪd/",
        kreyol: "Te fè",
        example: "I did my homework yesterday.",
      },
      {
        word: "Homework",
        ipa: "/ˈhoʊmwɜːrk/",
        kreyol: "Devwa",
        example: "I do my homework.",
      },
      {
        word: "Yesterday",
        ipa: "/ˈjɛstərdeɪ/",
        kreyol: "Yè",
        example: "I did it yesterday.",
      },
    ],
    pronunciationWord: "Does",
    pronunciationIpa: "/dʌz/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** “does” sonnen tankou “duz”, pa “dohz”.",
    pronunciationMistake:
      "**Erè komen:** apre “does”, vèb la rete nan fòm debaz — pa ajoute “-s” de fwa.",
    mistakeWrong: "Does she likes coffee?",
    mistakeCorrect: "Does she like coffee?",
    mistakeWhy:
      "**Poukisa:** “Does” deja pote “-s” la. Vèb ki vini apre l (like) rete nan fòm debaz, san lòt “-s”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "Does she likes coffee?",
        "Does she like coffee?",
        "Do she like coffee?",
        "Did she likes coffee?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — vèb la rete debaz apre “does”.",
    },
    thinkEmoji: "✅",
    thinkPrompt:
      "Ekri yon fraz ak “do”, yon lòt ak “does”, epi yon lòt ak “did”:",
    thinkPlaceholder: "I do... / She does... / I did...",
    aiPrompt:
      "Hi! Can you ask me questions using 'do you' and 'does he/she', and also ask what I did yesterday?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike do/does/did.",
    missionTask:
      "🎯 Jodi a, di yon bagay ou fè chak jou (do/does), epi yon bagay ou te fè yè (did).",
    recap: [
      { emoji: "✅", text: "“Do”/“does” pou prezan, “did” pou tan pase." },
      { emoji: "🔗", text: "Does she like...? Do you like...?" },
      { emoji: "⚠️", text: "Vèb la rete debaz apre does/did." },
      { emoji: "🎯", text: "Misyon: di sa ou fè jodi a ak sa ou te fè yè." },
    ],
  },
  {
    slug: "make-and-take",
    moduleTitle: "Modil 7: Vèb Pisan Pati 2",
    illustrationKey: "emoji",
    heroEmoji: "🍲",
    heroTitle: "Make ak Take",
    heroLede: "“Make” kreye yon bagay, “take” pran yon bagay.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “make” ak “take” kòrèkteman.",
    whatYouWillLearn: "diferans ant “make” (kreye) ak “take” (pran)",
    prerequisite: "Leson 1 — Do, Does, ak Did",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“Make” kreye yon bagay nouvo, “take” pran yon bagay ki la deja.",
    understandBody:
      "**I make dinner every night.** **She takes a photo.** “Make a decision”, pa “do a decision” — kèk mo mache espesifikman ak “make” oswa “take”.",
    seeItInAction: [
      { line: "I make dinner every night.", tag: "Kreye", emoji: "🍲" },
      { line: "She takes a photo.", tag: "Pran", emoji: "📸" },
      {
        line: "We make a decision together.",
        tag: "Kreye yon desizyon",
        emoji: "🤝",
      },
    ],
    patternBuilderIntro: "Klike sou chak aksyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Make dinner", display: "I make dinner every night." },
      { chipLabel: "Take a photo", display: "She takes a photo." },
      { chipLabel: "Make a decision", display: "We make a decision together." },
    ],
    vocabulary: [
      {
        word: "Make",
        ipa: "/meɪk/",
        kreyol: "Fè/Kreye",
        example: "I make dinner.",
      },
      {
        word: "Take",
        ipa: "/teɪk/",
        kreyol: "Pran",
        example: "She takes a photo.",
      },
      {
        word: "Decision",
        ipa: "/dɪˈsɪʒən/",
        kreyol: "Desizyon",
        example: "We make a decision.",
      },
      {
        word: "Photo",
        ipa: "/ˈfoʊtoʊ/",
        kreyol: "Foto",
        example: "She takes a photo.",
      },
      {
        word: "Together",
        ipa: "/təˈgɛðər/",
        kreyol: "Ansanm",
        example: "We make a decision together.",
      },
    ],
    pronunciationWord: "Decision",
    pronunciationIpa: "/dɪˈsɪʒən/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** aksan an sou dezyèm silab la — “di-SIZH-uhn”.",
    pronunciationMistake:
      "**Erè komen:** pa di “do a decision” — se “make a decision”.",
    mistakeWrong: "I do a decision.",
    mistakeCorrect: "I make a decision.",
    mistakeWhy:
      "**Poukisa:** Kèk mo toujou mache ansanm ak yon vèb presi — “make a decision” se youn nan yo, pa “do”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I do a decision.",
        "I make a decision.",
        "I take a decision.",
        "I give a decision.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “decision” mache ak “make”.",
    },
    thinkEmoji: "🍲",
    thinkPrompt: "Ekri yon fraz ak “make” epi yon lòt ak “take”:",
    thinkPlaceholder: "I make... / I take...",
    aiPrompt:
      "Hi! Can you ask me what I make and what I take in my daily life, so I can practice these verbs?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike make/take.",
    missionTask:
      "🎯 Jodi a, di yon bagay ou fè (make) epi yon bagay ou pran (take) chak jou.",
    recap: [
      { emoji: "🍲", text: "“Make” kreye, “take” pran." },
      { emoji: "🤝", text: "Make a decision, take a photo." },
      { emoji: "⚠️", text: "Pa di “do a decision” — se “make”." },
      { emoji: "🎯", text: "Misyon: di sa ou fè ak sa ou pran." },
    ],
  },
  {
    slug: "put-and-get",
    moduleTitle: "Modil 7: Vèb Pisan Pati 2",
    illustrationKey: "emoji",
    heroEmoji: "🔑",
    heroTitle: "Put ak Get",
    heroLede:
      "“Put” mete yon bagay yon kote, “get” resevwa oswa jwenn yon bagay.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “put” ak “get” kòrèkteman.",
    whatYouWillLearn: "kijan pou itilize “put” ak “get” nan fraz chak jou",
    prerequisite: "Leson 2 — Make ak Take",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Put” mete yon kote, “get” resevwa oswa jwenn.",
    understandBody:
      "**I put my keys on the table.** **She gets a call every morning.** “Get up” vle di leve — yon ekspresyon itil chak jou.",
    seeItInAction: [
      { line: "I put my keys on the table.", tag: "Mete", emoji: "🔑" },
      { line: "She gets a call every morning.", tag: "Resevwa", emoji: "📞" },
      { line: "I get up at 6.", tag: "Leve (get up)", emoji: "⏰" },
    ],
    patternBuilderIntro: "Klike sou chak aksyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Put", display: "I put my keys on the table." },
      { chipLabel: "Get (call)", display: "She gets a call every morning." },
      { chipLabel: "Get up", display: "I get up at 6." },
    ],
    vocabulary: [
      {
        word: "Put",
        ipa: "/pʊt/",
        kreyol: "Mete",
        example: "I put my keys on the table.",
      },
      {
        word: "Get",
        ipa: "/gɛt/",
        kreyol: "Resevwa/Jwenn",
        example: "She gets a call.",
      },
      {
        word: "Keys",
        ipa: "/kiːz/",
        kreyol: "Kle",
        example: "I put my keys down.",
      },
      {
        word: "Table",
        ipa: "/ˈteɪbəl/",
        kreyol: "Tab",
        example: "I put it on the table.",
      },
      {
        word: "Call",
        ipa: "/kɔːl/",
        kreyol: "Apèl",
        example: "She gets a call every morning.",
      },
    ],
    pronunciationWord: "Put",
    pronunciationIpa: "/pʊt/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** son “oo” kout, tankou “put” an Kreyòl si w ta ekri l.",
    pronunciationMistake:
      "**Erè komen:** pa di “She get a call” — se “She gets a call”.",
    mistakeWrong: "She get a call every morning.",
    mistakeCorrect: "She gets a call every morning.",
    mistakeWhy:
      "**Poukisa:** Menm règ -s/-es la toujou aplike — “she” bezwen “gets”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I put my keys in the table.",
        "I put my keys on the table.",
        "I put my keys at the table.",
        "I puts my keys on the table.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — itilize “on” pou yon sifas.",
    },
    thinkEmoji: "🔑",
    thinkPrompt: "Ekri yon fraz ak “put” epi yon lòt ak “get”:",
    thinkPlaceholder: "I put... / I get...",
    aiPrompt:
      "Hi! Can you ask me where I put my things and what time I get up, so I can practice put and get?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike put/get.",
    missionTask:
      "🎯 Jodi a, di kote ou mete yon bagay (put) ak ki lè ou leve (get up).",
    recap: [
      { emoji: "🔑", text: "“Put” mete, “get” resevwa/jwenn." },
      { emoji: "⏰", text: "“Get up” vle di leve." },
      { emoji: "📞", text: "She gets a call every morning." },
      { emoji: "🎯", text: "Misyon: di kote ou mete yon bagay." },
    ],
  },
  {
    slug: "give-and-bring",
    moduleTitle: "Modil 7: Vèb Pisan Pati 2",
    illustrationKey: "emoji",
    heroEmoji: "🎁",
    heroTitle: "Give ak Bring",
    heroLede: "“Give” bay yon bagay, “bring” pote yon bagay avè w.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “give” ak “bring” kòrèkteman.",
    whatYouWillLearn: "diferans ant “give” (bay) ak “bring” (pote)",
    prerequisite: "Leson 3 — Put ak Get",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“Give” transfere yon bagay bay yon moun, “bring” pote li ale yon kote.",
    understandBody:
      "**I give my mother a gift.** **Bring your book to class.** “Give” fokis sou moun ki resevwa, “bring” fokis sou pote yon bagay soti yon kote ale yon lòt.",
    seeItInAction: [
      { line: "I give my mother a gift.", tag: "Bay", emoji: "🎁" },
      { line: "Bring your book to class.", tag: "Pote", emoji: "📚" },
      { line: "She gives good advice.", tag: "Bay konsèy", emoji: "💡" },
    ],
    patternBuilderIntro: "Klike sou chak aksyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Give a gift", display: "I give my mother a gift." },
      { chipLabel: "Bring a book", display: "Bring your book to class." },
      { chipLabel: "Give advice", display: "She gives good advice." },
    ],
    vocabulary: [
      {
        word: "Give",
        ipa: "/gɪv/",
        kreyol: "Bay",
        example: "I give my mother a gift.",
      },
      {
        word: "Bring",
        ipa: "/brɪŋ/",
        kreyol: "Pote",
        example: "Bring your book to class.",
      },
      {
        word: "Gift",
        ipa: "/gɪft/",
        kreyol: "Kado",
        example: "I give a gift.",
      },
      {
        word: "Advice",
        ipa: "/ədˈvaɪs/",
        kreyol: "Konsèy",
        example: "She gives good advice.",
      },
      {
        word: "Class",
        ipa: "/klæs/",
        kreyol: "Klas",
        example: "Bring your book to class.",
      },
    ],
    pronunciationWord: "Bring",
    pronunciationIpa: "/brɪŋ/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** son “ng” nan fen mo a, pa pwononse “g” separeman.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “bring” (pote vin isit) ak “take” (pote ale lòt kote).",
    mistakeWrong: "Take your book to class. (lè w ap pale de kote w ye a)",
    mistakeCorrect: "Bring your book to class.",
    mistakeWhy:
      "**Poukisa:** “Bring” pote yon bagay VÈ kote moun k ap pale a oswa yon kote y ap ale ansanm; “take” pote li LWEN.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I give my mother a gift.",
        "I gives my mother a gift.",
        "I giving my mother a gift.",
        "I gave my mother a gift. (jodi a)",
      ],
      correctIndex: 0,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “I” pa pran “-s”.",
    },
    thinkEmoji: "🎁",
    thinkPrompt: "Ekri yon fraz ak “give” epi yon lòt ak “bring”:",
    thinkPlaceholder: "I give... / Bring...",
    aiPrompt:
      "Hi! Can you ask me what I usually give people and what I bring with me every day, so I can practice give and bring?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike give/bring.",
    missionTask:
      "🎯 Jodi a, di yon bagay ou bay (give) yon moun, ak yon bagay ou toujou pote (bring) avè w.",
    recap: [
      { emoji: "🎁", text: "“Give” bay, “bring” pote." },
      { emoji: "💡", text: "She gives good advice." },
      { emoji: "⚠️", text: "“Bring” vin vè, “take” ale lwen." },
      { emoji: "🎯", text: "Misyon: di sa ou bay ak sa ou pote." },
    ],
  },
  {
    slug: "become-and-find",
    moduleTitle: "Modil 7: Vèb Pisan Pati 2",
    illustrationKey: "emoji",
    heroEmoji: "👩‍⚕️",
    heroTitle: "Become ak Find",
    heroLede: "“Become” vin yon bagay, “find” jwenn yon bagay.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “become” ak “find” kòrèkteman.",
    whatYouWillLearn: "kijan pou pale de chanjman (become) ak dekouvèt (find)",
    prerequisite: "Leson 4 — Give ak Bring",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“Become” dekri yon chanjman, “find” dekri yon dekouvèt.",
    understandBody:
      "**She wants to become a doctor.** **I can't find my phone.** “Become” montre yon moun ap transfòme an yon lòt bagay; “find” montre ou jwenn yon bagay ou t ap chèche.",
    seeItInAction: [
      { line: "She wants to become a doctor.", tag: "Vin", emoji: "👩‍⚕️" },
      { line: "I can't find my phone.", tag: "Jwenn", emoji: "📱" },
      { line: "He became a teacher.", tag: "Vin (tan pase)", emoji: "👨‍🏫" },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Become", display: "She wants to become a doctor." },
      { chipLabel: "Find", display: "I can't find my phone." },
      { chipLabel: "Became", display: "He became a teacher." },
    ],
    vocabulary: [
      {
        word: "Become",
        ipa: "/bɪˈkʌm/",
        kreyol: "Vin",
        example: "She wants to become a doctor.",
      },
      {
        word: "Find",
        ipa: "/faɪnd/",
        kreyol: "Jwenn",
        example: "I can't find my phone.",
      },
      {
        word: "Doctor",
        ipa: "/ˈdɒktər/",
        kreyol: "Doktè",
        example: "She wants to become a doctor.",
      },
      {
        word: "Lost",
        ipa: "/lɔːst/",
        kreyol: "Pèdi",
        example: "My phone is lost.",
      },
      {
        word: "Became",
        ipa: "/bɪˈkeɪm/",
        kreyol: "Te vin (tan pase)",
        example: "He became a teacher.",
      },
    ],
    pronunciationWord: "Become",
    pronunciationIpa: "/bɪˈkʌm/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** aksan an sou dezyèm silab la — “bi-KUHM”.",
    pronunciationMistake:
      "**Erè komen:** pa di “become” pou jwenn yon bagay ki pèdi — se “find”.",
    mistakeWrong: "I can't become my phone.",
    mistakeCorrect: "I can't find my phone.",
    mistakeWhy:
      "**Poukisa:** “Become” se pou yon chanjman idantite/eta, pa pou lokalize yon bagay ki pèdi — “find” se mo kòrèk la.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I can't become my phone.",
        "I can't find my phone.",
        "I can't take my phone.",
        "I can't put my phone.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — jwenn yon bagay pèdi se “find”.",
    },
    thinkEmoji: "👩‍⚕️",
    thinkPrompt: "Ekri yon fraz ak “become” epi yon lòt ak “find”:",
    thinkPlaceholder: "I want to become... / I can't find...",
    aiPrompt:
      "Hi! Can you ask me what I want to become in the future, and if there's anything I can't find right now?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike become/find.",
    missionTask:
      "🎯 Jodi a, di sa ou vle vin (become) yon jou, ak yon bagay ou te jwenn (find) dènyèman.",
    recap: [
      { emoji: "👩‍⚕️", text: "“Become” montre yon chanjman." },
      { emoji: "📱", text: "“Find” montre yon dekouvèt." },
      { emoji: "🔗", text: "Became = tan pase pou become." },
      { emoji: "🎯", text: "Misyon: di sa ou vle vin, ak sa ou te jwenn." },
    ],
  },
  {
    slug: "keep-and-leave",
    moduleTitle: "Modil 7: Vèb Pisan Pati 2",
    illustrationKey: "emoji",
    heroEmoji: "🚪",
    heroTitle: "Keep ak Leave",
    heroLede: "“Keep” kenbe yon bagay, “leave” kite yon kote oswa yon bagay.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “keep” ak “leave” kòrèkteman.",
    whatYouWillLearn: "diferans ant “keep” (kenbe) ak “leave” (kite)",
    prerequisite: "Leson 5 — Become ak Find",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Keep” kenbe, “leave” kite.",
    understandBody:
      "**I keep my promises.** **I leave home at 7.** “Keep” pale de kenbe yon bagay avè w, “leave” pale de kite yon kote oswa yon bagay dèyè.",
    seeItInAction: [
      { line: "I keep my promises.", tag: "Kenbe", emoji: "🤝" },
      { line: "I leave home at 7.", tag: "Kite", emoji: "🚪" },
      { line: "Keep the change.", tag: "Kenbe (lajan)", emoji: "💵" },
    ],
    patternBuilderIntro: "Klike sou chak aksyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Keep", display: "I keep my promises." },
      { chipLabel: "Leave", display: "I leave home at 7." },
      { chipLabel: "Keep change", display: "Keep the change." },
    ],
    vocabulary: [
      {
        word: "Keep",
        ipa: "/kiːp/",
        kreyol: "Kenbe",
        example: "I keep my promises.",
      },
      {
        word: "Leave",
        ipa: "/liːv/",
        kreyol: "Kite",
        example: "I leave home at 7.",
      },
      {
        word: "Promise",
        ipa: "/ˈprɒmɪs/",
        kreyol: "Pwomès",
        example: "I keep my promises.",
      },
      {
        word: "Home",
        ipa: "/hoʊm/",
        kreyol: "Lakay",
        example: "I leave home at 7.",
      },
      {
        word: "Change",
        ipa: "/tʃeɪndʒ/",
        kreyol: "Monnen",
        example: "Keep the change.",
      },
    ],
    pronunciationWord: "Leave",
    pronunciationIpa: "/liːv/",
    mouthTip: "**Ti konsèy pou bouch ou:** son “ee” long — “leeve”.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “leave” (kite) ak “live” (viv) — yo sonnen prèske menm jan.",
    mistakeWrong: "I live home at 7.",
    mistakeCorrect: "I leave home at 7.",
    mistakeWhy:
      "**Poukisa:** “Leave” (kite yon kote) ak “live” (viv/rete) sonnen sanble men gen sans totalman diferan.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou di ou kite kay la:",
      options: [
        "I live home at 7.",
        "I leave home at 7.",
        "I keep home at 7.",
        "I take home at 7.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — kite se “leave”.",
    },
    thinkEmoji: "🚪",
    thinkPrompt: "Ekri yon fraz ak “keep” epi yon lòt ak “leave”:",
    thinkPlaceholder: "I keep... / I leave...",
    aiPrompt:
      "Hi! Can you ask me what time I leave home and what things I always keep, so I can practice keep and leave?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike keep/leave.",
    missionTask:
      "🎯 Jodi a, di ki lè ou kite (leave) kay ou, ak yon bagay ou toujou kenbe (keep).",
    recap: [
      { emoji: "🚪", text: "“Keep” kenbe, “leave” kite." },
      { emoji: "⚠️", text: "“Leave” ≠ “live” — atansyon pwononsyasyon." },
      { emoji: "🤝", text: "I keep my promises." },
      { emoji: "🎯", text: "Misyon: di sa ou kenbe ak ki lè ou kite." },
    ],
  },
  {
    slug: "power-verbs-mission",
    moduleTitle: "Modil 7: Vèb Pisan Pati 2",
    illustrationKey: "emoji",
    heroEmoji: "💪",
    heroTitle: "Vèb Pisan Nan Lavi Chak Jou",
    heroLede:
      "Se lè a pou konbine tout vèb pisan Modil 7 yo pou rakonte yon jounen reyèl.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize plizyè vèb pisan nan yon sèl istwa.",
    whatYouWillLearn: "kijan pou konbine vèb pisan Modil 7 yo nan yon istwa",
    prerequisite: "Leson 6 — Keep ak Leave",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Vèb pisan yo travay ansanm pou rakonte yon jounen konplè.",
    understandBody:
      "**I get up, make breakfast, and leave home.** Chak vèb pisan ou aprann nan Modil 7 la ka konekte ak lòt yo pou rakonte yon istwa reyèl.",
    seeItInAction: [
      {
        line: "I get up, make breakfast, and leave home.",
        tag: "Maten",
        emoji: "🌅",
      },
      { line: "I take the bus and do my work.", tag: "Jounen", emoji: "🚌" },
      {
        line: "I keep my promises and give my best.",
        tag: "Valè",
        emoji: "💪",
      },
    ],
    patternBuilderIntro: "Klike sou chak moman pou wè fraz li.",
    patternBuilderOptions: [
      { chipLabel: "Morning", display: "I get up and make breakfast." },
      { chipLabel: "Day", display: "I take the bus and do my work." },
      { chipLabel: "Values", display: "I keep my promises." },
    ],
    vocabulary: [
      { word: "Bus", ipa: "/bʌs/", kreyol: "Bis", example: "I take the bus." },
      {
        word: "Best",
        ipa: "/bɛst/",
        kreyol: "Pi bon nan tèt li",
        example: "I give my best.",
      },
      {
        word: "Promise",
        ipa: "/ˈprɒmɪs/",
        kreyol: "Pwomès",
        example: "I keep my promises.",
      },
      {
        word: "Everyday",
        ipa: "/ˈɛvrideɪ/",
        kreyol: "Chak jou",
        example: "These are everyday verbs.",
      },
      {
        word: "Together",
        ipa: "/təˈgɛðər/",
        kreyol: "Ansanm",
        example: "These verbs work together.",
      },
    ],
    pronunciationWord: "Everyday",
    pronunciationIpa: "/ˈɛvrideɪ/",
    mouthTip: "**Ti konsèy pou bouch ou:** twa silab, “EV-ree-day”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye konjige chak vèb kòrèkteman selon sijè a, menm nan yon istwa long.",
    mistakeWrong: "He get up, make breakfast, and leave home.",
    mistakeCorrect: "He gets up, makes breakfast, and leaves home.",
    mistakeWhy:
      "**Poukisa:** Si sijè a se “he”, TOUT vèb yo nan fraz la bezwen “-s”/“-es”, pa jis premye a.",
    practice: {
      prompt: "Ki vèsyon ki kòrèk pou “he”?",
      options: [
        "He get up and make breakfast.",
        "He gets up and makes breakfast.",
        "He getting up and making breakfast.",
        "He got up and made breakfast. (jodi a)",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — tout vèb yo bezwen “-s” pou “he”.",
    },
    thinkEmoji: "💪",
    thinkPrompt:
      "Ekri yon ti istwa sou jounen ou ak omwen kat vèb pisan Modil 7:",
    thinkPlaceholder: "I get up, ... , and ...",
    aiPrompt:
      "Hi! Can you listen to a short story about my day using verbs like get, make, take, give, keep, and leave, and give me friendly feedback?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 7 ansanm.",
    missionTask:
      "🎯 Jodi a, rakonte yon jounen ou ak omwen kat vèb pisan diferan nan Modil 7.",
    recap: [
      { emoji: "💪", text: "Vèb pisan yo konekte pou rakonte yon istwa." },
      { emoji: "⚠️", text: "Tout vèb nan fraz la konjige selon sijè a." },
      { emoji: "🎓", text: "Ou fini Modil 7 — Vèb Pisan Pati 2!" },
      { emoji: "🎯", text: "Misyon: rakonte yon jounen ak vèb pisan." },
    ],
  },
  {
    slug: "meeting-someone",
    moduleTitle: "Modil 8: Konvèsasyon Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "🤝",
    heroTitle: "Rankontre Yon Moun",
    heroLede:
      "Yon konvèsasyon reyèl pa sèlman salitasyon — li gen ti pale sou tan, sou lavi, ak yon fason poli pou fini.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab mennen yon ti konvèsasyon konplè ak yon moun nouvo.",
    whatYouWillLearn: "fraz pou kòmanse, kontinye, ak fini yon konvèsasyon",
    prerequisite: "Ou fin Modil 7 — Vèb Pisan Pati 2",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Yon konvèsasyon reyèl gen yon kòmansman, yon mitan, ak yon fen.",
    understandBody:
      "**Hi, how are you?** **I'm good, thanks. And you?** **It was nice meeting you!** Twa etap sa yo fè yon ti chat kout men konplè.",
    seeItInAction: [
      { line: "Hi, how are you?", tag: "Kòmanse", emoji: "👋" },
      {
        line: "I'm good, thanks. And you?",
        tag: "Reponn + mande tou",
        emoji: "😊",
      },
      { line: "It was nice meeting you!", tag: "Fini", emoji: "🤝" },
    ],
    patternBuilderIntro: "Klike sou chak etap pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Start", display: "Hi, how are you?" },
      { chipLabel: "Respond", display: "I'm good, thanks. And you?" },
      { chipLabel: "End", display: "It was nice meeting you!" },
    ],
    vocabulary: [
      {
        word: "How are you",
        ipa: "/haʊ ɑːr juː/",
        kreyol: "Kijan ou ye",
        example: "Hi, how are you?",
      },
      {
        word: "Thanks",
        ipa: "/θæŋks/",
        kreyol: "Mèsi",
        example: "I'm good, thanks.",
      },
      {
        word: "And you",
        ipa: "/ænd juː/",
        kreyol: "Epi ou menm",
        example: "I'm good. And you?",
      },
      {
        word: "Nice meeting you",
        ipa: "/naɪs ˈmiːtɪŋ juː/",
        kreyol: "Kontan rankontre w",
        example: "It was nice meeting you!",
      },
      {
        word: "See you soon",
        ipa: "/siː juː suːn/",
        kreyol: "Wè w byento",
        example: "See you soon!",
      },
    ],
    pronunciationWord: "Nice meeting you",
    pronunciationIpa: "/naɪs ˈmiːtɪŋ juː/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** pale dousman, fraz sa a gen twa mo kole ansanm.",
    pronunciationMistake:
      "**Erè komen:** pa di “Nice to meeting you” — se “Nice to meet you” oswa “It was nice meeting you”.",
    mistakeWrong: "Nice to meeting you.",
    mistakeCorrect: "Nice to meet you.",
    mistakeWhy:
      "**Poukisa:** Apre “to”, vèb la rete nan fòm debaz (meet). Men apre “was”, ou itilize fòm “-ing” (meeting).",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou fini yon premye rankont:",
      options: [
        "Nice to meeting you.",
        "It was nice meeting you.",
        "It was nice meet you.",
        "Nice meet you.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “was” swiv ak fòm “-ing”.",
    },
    thinkEmoji: "🤝",
    thinkPrompt:
      "Ekri yon ti konvèsasyon ak twa etap (kòmanse, kontinye, fini):",
    thinkPlaceholder: "Hi, how are you? ...",
    aiPrompt:
      "Hi! Can you play a stranger I'm meeting for the first time, so I can practice a full short conversation from start to finish?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike yon konvèsasyon konplè.",
    missionTask:
      "🎯 Jodi a, mennen yon ti konvèsasyon konplè (kòmanse, mitan, fen) ak yon moun.",
    recap: [
      { emoji: "👋", text: "Kòmanse: Hi, how are you?" },
      { emoji: "😊", text: "Kontinye: I'm good, thanks. And you?" },
      { emoji: "🤝", text: "Fini: It was nice meeting you!" },
      { emoji: "🎯", text: "Misyon: mennen yon konvèsasyon konplè." },
    ],
  },
  {
    slug: "at-the-restaurant",
    moduleTitle: "Modil 8: Konvèsasyon Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "🍽️",
    heroTitle: "Nan Restoran",
    heroLede: "Yon vizit nan restoran swiv yon lòd senp: chwazi, mande, peye.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab fè lòd nan yon restoran ak konfyans.",
    whatYouWillLearn: "fraz pou mande meni, fè lòd, ak peye nan restoran",
    prerequisite: "Leson 1 — Rankontre Yon Moun",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Yon vizit restoran gen twa etap: chwazi, mande, peye.",
    understandBody:
      "**Can I see the menu, please?** **I'd like the chicken, please.** **Can I have the check, please?** Twa fraz sa yo ka mennen w nan tout yon repa.",
    seeItInAction: [
      { line: "Can I see the menu, please?", tag: "Mande meni", emoji: "📋" },
      { line: "I'd like the chicken, please.", tag: "Fè lòd", emoji: "🍗" },
      {
        line: "Can I have the check, please?",
        tag: "Mande fakti",
        emoji: "🧾",
      },
    ],
    patternBuilderIntro: "Klike sou chak etap pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Menu", display: "Can I see the menu, please?" },
      { chipLabel: "Order", display: "I'd like the chicken, please." },
      { chipLabel: "Check", display: "Can I have the check, please?" },
    ],
    vocabulary: [
      {
        word: "Menu",
        ipa: "/ˈmɛnjuː/",
        kreyol: "Meni",
        example: "Can I see the menu?",
      },
      {
        word: "Order",
        ipa: "/ˈɔːrdər/",
        kreyol: "Lòd",
        example: "I'd like to order.",
      },
      {
        word: "Check",
        ipa: "/tʃɛk/",
        kreyol: "Fakti",
        example: "Can I have the check?",
      },
      {
        word: "Water",
        ipa: "/ˈwɔːtər/",
        kreyol: "Dlo",
        example: "Can I have some water?",
      },
      {
        word: "Delicious",
        ipa: "/dɪˈlɪʃəs/",
        kreyol: "Bon anpil",
        example: "This is delicious!",
      },
    ],
    pronunciationWord: "I'd like",
    pronunciationIpa: "/aɪd laɪk/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** “I'd” se yon kontraksyon “I would” — di li tankou “ayd”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I want” tou sèk nan yon restoran — “I'd like” pi poli.",
    mistakeWrong: "I want the chicken.",
    mistakeCorrect: "I'd like the chicken, please.",
    mistakeWhy:
      "**Poukisa:** “I want” ka sonnen brak nan yon sitiyasyon fòmèl. “I'd like” + “please” pi poli pou yon lòd nan restoran.",
    practice: {
      prompt: "Chwazi fraz ki pi poli pou fè yon lòd:",
      options: [
        "I want the chicken.",
        "I'd like the chicken, please.",
        "Give me the chicken.",
        "Chicken now.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — chèche fraz ki pi poli a.",
    },
    thinkEmoji: "🍽️",
    thinkPrompt: "Ekri yon lòd ou ta fè nan yon restoran:",
    thinkPlaceholder: "I'd like...",
    aiPrompt:
      "Hi! Can you play a waiter and take my order, so I can practice ordering food politely in English?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike fè lòd nan restoran.",
    missionTask:
      "🎯 Jodi a, pratike fè yon lòd konplè nan yon restoran (imajinè oswa reyèl).",
    recap: [
      { emoji: "📋", text: "Can I see the menu, please?" },
      { emoji: "🍗", text: "I'd like the chicken, please." },
      { emoji: "🧾", text: "Can I have the check, please?" },
      { emoji: "🎯", text: "Misyon: pratike fè yon lòd konplè." },
    ],
  },
  {
    slug: "at-the-store",
    moduleTitle: "Modil 8: Konvèsasyon Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "🛍️",
    heroTitle: "Nan Magazen",
    heroLede:
      "Nan magazen, ou souvan mande si yo genyen yon bagay, konbyen li koute, epi ou peye.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab achte yon bagay nan yon magazen ak konfyans.",
    whatYouWillLearn: "fraz pou mande gwosè, pri, ak peye nan yon magazen",
    prerequisite: "Leson 2 — Nan Restoran",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Yon vizit magazen swiv yon lòd senp tou: mande, verifye pri, achte.",
    understandBody:
      "**Do you have this in a different size?** **How much is this?** **I'll take it.** Twa fraz sa yo ka mennen w nan tout yon vizit magazen.",
    seeItInAction: [
      {
        line: "Do you have this in a different size?",
        tag: "Mande yon lòt gwosè",
        emoji: "👕",
      },
      { line: "How much is this?", tag: "Mande pri", emoji: "💵" },
      { line: "I'll take it.", tag: "Deside achte", emoji: "🛍️" },
    ],
    patternBuilderIntro: "Klike sou chak etap pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Size", display: "Do you have this in a different size?" },
      { chipLabel: "Price", display: "How much is this?" },
      { chipLabel: "Buy", display: "I'll take it." },
    ],
    vocabulary: [
      {
        word: "Size",
        ipa: "/saɪz/",
        kreyol: "Gwosè",
        example: "Do you have a different size?",
      },
      {
        word: "Price",
        ipa: "/praɪs/",
        kreyol: "Pri",
        example: "What is the price?",
      },
      {
        word: "Cash",
        ipa: "/kæʃ/",
        kreyol: "Lajan kach",
        example: "I'll pay cash.",
      },
      {
        word: "Card",
        ipa: "/kɑːrd/",
        kreyol: "Kat",
        example: "I'll pay by card.",
      },
      {
        word: "Receipt",
        ipa: "/rɪˈsiːt/",
        kreyol: "Resi",
        example: "Can I have a receipt?",
      },
    ],
    pronunciationWord: "I'll take it",
    pronunciationIpa: "/aɪl teɪk ɪt/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** “I'll” se “I will” — di li vit, tankou “ayl”.",
    pronunciationMistake: "**Erè komen:** pa di “How much this?” — manke “is”.",
    mistakeWrong: "How much this?",
    mistakeCorrect: "How much is this?",
    mistakeWhy:
      "**Poukisa:** Fraz la bezwen vèb “is” — “How much is this?”, pa jis “How much this?”",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou mande pri:",
      options: [
        "How much this?",
        "How much is this?",
        "How much are this?",
        "How this much?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — manke “is”.",
    },
    thinkEmoji: "🛍️",
    thinkPrompt: "Ekri yon fraz ou ta itilize nan yon magazen:",
    thinkPlaceholder: "Do you have...? / How much is...?",
    aiPrompt:
      "Hi! Can you play a store clerk and help me practice asking about size, price, and paying for something?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike achte nan magazen.",
    missionTask:
      "🎯 Jodi a, pratike mande pri yon bagay ak “How much is this?”",
    recap: [
      { emoji: "👕", text: "Do you have this in a different size?" },
      { emoji: "💵", text: "How much is this?" },
      { emoji: "🛍️", text: "I'll take it." },
      { emoji: "🎯", text: "Misyon: pratike mande pri yon bagay." },
    ],
  },
  {
    slug: "taxi-and-airport",
    moduleTitle: "Modil 8: Konvèsasyon Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "🚕",
    heroTitle: "Taksi ak Ayewopò",
    heroLede:
      "Vwayaje mande fraz senp pou pran yon taksi oswa jwenn chemen w nan yon ayewopò.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pran yon taksi ak jwenn chemen w nan yon ayewopò.",
    whatYouWillLearn: "fraz pou taksi ak ayewopò",
    prerequisite: "Leson 3 — Nan Magazen",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Vwayaje mande fraz senp pou taksi ak ayewopò.",
    understandBody:
      "**Can you take me to the airport?** **Where is my gate?** Fraz sa yo ede w mande direksyon ak enfòmasyon lè w ap vwayaje.",
    seeItInAction: [
      { line: "Can you take me to the airport?", tag: "Taksi", emoji: "🚕" },
      { line: "Where is my gate?", tag: "Ayewopò", emoji: "✈️" },
      { line: "How much does the ride cost?", tag: "Pri kous", emoji: "💵" },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Taxi", display: "Can you take me to the airport?" },
      { chipLabel: "Gate", display: "Where is my gate?" },
      { chipLabel: "Price", display: "How much does the ride cost?" },
    ],
    vocabulary: [
      {
        word: "Airport",
        ipa: "/ˈɛərpɔːrt/",
        kreyol: "Ayewopò",
        example: "Take me to the airport.",
      },
      {
        word: "Gate",
        ipa: "/geɪt/",
        kreyol: "Pòt anbakman",
        example: "Where is my gate?",
      },
      {
        word: "Ride",
        ipa: "/raɪd/",
        kreyol: "Kous",
        example: "How much does the ride cost?",
      },
      {
        word: "Luggage",
        ipa: "/ˈlʌgɪdʒ/",
        kreyol: "Bagaj",
        example: "This is my luggage.",
      },
      {
        word: "Flight",
        ipa: "/flaɪt/",
        kreyol: "Vòl",
        example: "My flight is at 6.",
      },
    ],
    pronunciationWord: "Luggage",
    pronunciationIpa: "/ˈlʌgɪdʒ/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “LUH-gij”.",
    pronunciationMistake:
      "**Erè komen:** pa di “baggages” — “luggage” pa chanje nan pliryèl, tankou “fish”.",
    mistakeWrong: "I have three luggages.",
    mistakeCorrect: "I have three pieces of luggage.",
    mistakeWhy:
      "**Poukisa:** “Luggage” se yon mo ou pa ka konte dirèkteman — itilize “pieces of luggage” pou konte.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou mande yon taksi ale ayewopò a:",
      options: [
        "Take me airport.",
        "Can you take me to the airport?",
        "I airport go.",
        "Airport, please taxi.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — chèche fraz konplè, poli a.",
    },
    thinkEmoji: "🚕",
    thinkPrompt: "Ekri yon fraz ou ta itilize nan yon taksi oswa yon ayewopò:",
    thinkPlaceholder: "Can you take me to...?",
    aiPrompt:
      "Hi! Can you play a taxi driver or an airport worker and help me practice asking for a ride or finding my gate?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike taksi ak ayewopò.",
    missionTask:
      "🎯 Jodi a, pratike mande yon taksi ale yon kote ak “Can you take me to...?”",
    recap: [
      { emoji: "🚕", text: "Can you take me to the airport?" },
      { emoji: "✈️", text: "Where is my gate?" },
      { emoji: "⚠️", text: "“Luggage” pa chanje nan pliryèl." },
      { emoji: "🎯", text: "Misyon: pratike mande yon taksi." },
    ],
  },
  {
    slug: "at-the-doctor",
    moduleTitle: "Modil 8: Konvèsasyon Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "🤒",
    heroTitle: "Kay Doktè",
    heroLede: "Doktè bezwen konnen ki sa ou santi ak depi ki lè.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab eksplike yon senptòm bay yon doktè.",
    whatYouWillLearn: "fraz pou eksplike senptòm ak reponn kesyon doktè",
    prerequisite: "Leson 4 — Taksi ak Ayewopò",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Doktè bezwen konnen ki sa ou santi ak depi ki lè.",
    understandBody:
      "**I don't feel well.** **I have a fever and a headache.** **How long have you felt this way?** Fraz sa yo ede yon vizit doktè mache byen.",
    seeItInAction: [
      { line: "I don't feel well.", tag: "Eksplike pwoblèm", emoji: "🤒" },
      {
        line: "I have a fever and a headache.",
        tag: "Detay senptòm",
        emoji: "🤕",
      },
      {
        line: "How long have you felt this way?",
        tag: "Kesyon doktè",
        emoji: "⏰",
      },
    ],
    patternBuilderIntro: "Klike sou chak fraz pou wè li nan kontèks.",
    patternBuilderOptions: [
      { chipLabel: "Not well", display: "I don't feel well." },
      { chipLabel: "Symptoms", display: "I have a fever and a headache." },
      { chipLabel: "Question", display: "How long have you felt this way?" },
    ],
    vocabulary: [
      {
        word: "Fever",
        ipa: "/ˈfiːvər/",
        kreyol: "Lafyèv",
        example: "I have a fever.",
      },
      {
        word: "Headache",
        ipa: "/ˈhɛdeɪk/",
        kreyol: "Tèt fè mal",
        example: "I have a headache.",
      },
      { word: "Sick", ipa: "/sɪk/", kreyol: "Malad", example: "I feel sick." },
      {
        word: "Pain",
        ipa: "/peɪn/",
        kreyol: "Doulè",
        example: "I have pain here.",
      },
      {
        word: "Medicine",
        ipa: "/ˈmɛdsɪn/",
        kreyol: "Medikaman",
        example: "I need medicine.",
      },
    ],
    pronunciationWord: "Fever",
    pronunciationIpa: "/ˈfiːvər/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “FEE-vər”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I am sick fever” — itilize “have” pou senptòm.",
    mistakeWrong: "I am fever.",
    mistakeCorrect: "I have a fever.",
    mistakeWhy:
      "**Poukisa:** Menm règ ak Modil 3 — senptòm swiv “have”, pa “to be”. “I have a fever”, pa “I am fever”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou eksplike yon senptòm:",
      options: ["I am fever.", "I have a fever.", "I fever.", "I feving."],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — senptòm swiv “have”.",
    },
    thinkEmoji: "🤒",
    thinkPrompt: "Ekri kijan ou ta eksplike yon senptòm bay yon doktè:",
    thinkPlaceholder: "I don't feel well. I have...",
    aiPrompt:
      "Hi! Can you play a doctor and ask me about my symptoms, so I can practice explaining how I feel?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike eksplike senptòm.",
    missionTask:
      "🎯 Jodi a, pratike eksplike yon senptòm ak “I don't feel well” epi “I have...”",
    recap: [
      { emoji: "🤒", text: "I don't feel well." },
      { emoji: "🤕", text: "I have a fever/headache." },
      { emoji: "⚠️", text: "Senptòm swiv “have”, pa “to be”." },
      { emoji: "🎯", text: "Misyon: pratike eksplike yon senptòm." },
    ],
  },
  {
    slug: "bank-and-hotel",
    moduleTitle: "Modil 8: Konvèsasyon Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "🏦",
    heroTitle: "Bank ak Otèl",
    heroLede: "Bank ak otèl mande dokiman ak fòm senp pou konplete yon sèvis.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab jere yon vizit bank ak yon check-in otèl.",
    whatYouWillLearn: "fraz pou bank ak otèl",
    prerequisite: "Leson 5 — Kay Doktè",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Bank ak otèl mande dokiman ak fòm senp.",
    understandBody:
      "**I'd like to open an account.** **I have a reservation.** **Can I see your ID, please?** Twa fraz sa yo mennen w nan yon vizit bank oswa otèl.",
    seeItInAction: [
      { line: "I'd like to open an account.", tag: "Bank", emoji: "🏦" },
      { line: "I have a reservation.", tag: "Otèl", emoji: "🏨" },
      { line: "Can I see your ID, please?", tag: "Mande dokiman", emoji: "🪪" },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Bank", display: "I'd like to open an account." },
      { chipLabel: "Hotel", display: "I have a reservation." },
      { chipLabel: "ID", display: "Can I see your ID, please?" },
    ],
    vocabulary: [
      {
        word: "Account",
        ipa: "/əˈkaʊnt/",
        kreyol: "Kont",
        example: "I'd like to open an account.",
      },
      {
        word: "Reservation",
        ipa: "/ˌrɛzərˈveɪʃən/",
        kreyol: "Rezèvasyon",
        example: "I have a reservation.",
      },
      {
        word: "ID",
        ipa: "/aɪ diː/",
        kreyol: "Kat idantite",
        example: "Can I see your ID?",
      },
      {
        word: "Deposit",
        ipa: "/dɪˈpɒzɪt/",
        kreyol: "Depo",
        example: "I'd like to make a deposit.",
      },
      {
        word: "Room",
        ipa: "/ruːm/",
        kreyol: "Chanm",
        example: "My room number is 12.",
      },
    ],
    pronunciationWord: "Reservation",
    pronunciationIpa: "/ˌrɛzərˈveɪʃən/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** kat silab, aksan an sou “VEY” — “rez-ər-VEY-shuhn”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I have reservation” — manke “a” devan “reservation”.",
    mistakeWrong: "I have reservation.",
    mistakeCorrect: "I have a reservation.",
    mistakeWhy:
      "**Poukisa:** Yon non ou ka konte (reservation) toujou bezwen “a”/“an” lè w ap pale de yon sèl.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou check-in nan yon otèl:",
      options: [
        "I have reservation.",
        "I have a reservation.",
        "I reservation.",
        "I am reservation.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — manke “a”.",
    },
    thinkEmoji: "🏦",
    thinkPrompt: "Ekri yon fraz ou ta itilize nan yon bank oswa yon otèl:",
    thinkPlaceholder: "I'd like to... / I have a reservation...",
    aiPrompt:
      "Hi! Can you play a bank teller or hotel receptionist and help me practice opening an account or checking in?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike bank ak otèl.",
    missionTask:
      "🎯 Jodi a, pratike di “I have a reservation” oswa “I'd like to open an account”.",
    recap: [
      { emoji: "🏦", text: "I'd like to open an account." },
      { emoji: "🏨", text: "I have a reservation." },
      { emoji: "🪪", text: "Can I see your ID, please?" },
      { emoji: "🎯", text: "Misyon: pratike yon sèvis bank oswa otèl." },
    ],
  },
  {
    slug: "phone-call",
    moduleTitle: "Modil 8: Konvèsasyon Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "📞",
    heroTitle: "Yon Apèl Telefòn",
    heroLede:
      "Yon apèl telefòn gen fraz espesyal pou kòmanse, kontinye, ak fini.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab mennen yon apèl telefòn senp.",
    whatYouWillLearn: "fraz pou kòmanse, kontinye, ak fini yon apèl telefòn",
    prerequisite: "Leson 6 — Bank ak Otèl",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Yon apèl telefòn gen fraz espesyal ki diferan de yon konvèsasyon fasafas.",
    understandBody:
      "**Hello, this is Marie.** **Can I speak to James, please?** **I'll call you back.** Fraz sa yo espesyal pou telefòn, pa itilize nan konvèsasyon fasafas.",
    seeItInAction: [
      { line: "Hello, this is Marie.", tag: "Reponn/kòmanse", emoji: "📞" },
      {
        line: "Can I speak to James, please?",
        tag: "Mande yon moun",
        emoji: "🙋",
      },
      { line: "I'll call you back.", tag: "Fini apèl", emoji: "👋" },
    ],
    patternBuilderIntro: "Klike sou chak etap pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Start", display: "Hello, this is Marie." },
      { chipLabel: "Ask for", display: "Can I speak to James, please?" },
      { chipLabel: "End", display: "I'll call you back." },
    ],
    vocabulary: [
      {
        word: "Speak to",
        ipa: "/spiːk tuː/",
        kreyol: "Pale ak",
        example: "Can I speak to James?",
      },
      {
        word: "Call back",
        ipa: "/kɔːl bæk/",
        kreyol: "Rele ankò",
        example: "I'll call you back.",
      },
      {
        word: "Hold on",
        ipa: "/hoʊld ɒn/",
        kreyol: "Tann yon moman",
        example: "Hold on, please.",
      },
      {
        word: "Message",
        ipa: "/ˈmɛsɪdʒ/",
        kreyol: "Mesaj",
        example: "Can I leave a message?",
      },
      {
        word: "Busy",
        ipa: "/ˈbɪzi/",
        kreyol: "Okipe/Liy okipe",
        example: "The line is busy.",
      },
    ],
    pronunciationWord: "Hold on",
    pronunciationIpa: "/hoʊld ɒn/",
    mouthTip: "**Ti konsèy pou bouch ou:** de mo klè, pa kole yo twòp.",
    pronunciationMistake:
      "**Erè komen:** pa di “This is speaking Marie” — se “This is Marie” oswa “Marie speaking”.",
    mistakeWrong: "This is speaking Marie.",
    mistakeCorrect: "This is Marie.",
    mistakeWhy:
      "**Poukisa:** Nan telefòn, ou di “This is [non ou]” pou prezante tèt ou — “speaking” pa nesesè isit la.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou prezante tèt ou nan telefòn:",
      options: [
        "This is speaking Marie.",
        "This is Marie.",
        "I Marie speaking.",
        "Speaking Marie this is.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “This is [non]” senp.",
    },
    thinkEmoji: "📞",
    thinkPrompt: "Ekri yon ti apèl telefòn ak twa etap:",
    thinkPlaceholder: "Hello, this is... Can I speak to...?",
    aiPrompt:
      "Hi! Can you play someone I'm calling on the phone, so I can practice a short phone conversation from start to finish?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike yon apèl telefòn.",
    missionTask: "🎯 Jodi a, pratike yon ti apèl telefòn imajinè ak twa etap.",
    recap: [
      { emoji: "📞", text: "Hello, this is [non ou]." },
      { emoji: "🙋", text: "Can I speak to...?" },
      { emoji: "👋", text: "I'll call you back." },
      { emoji: "🎯", text: "Misyon: pratike yon apèl telefòn." },
    ],
  },
  {
    slug: "whatsapp-and-email",
    moduleTitle: "Modil 8: Konvèsasyon Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "💬",
    heroTitle: "WhatsApp ak Imèl",
    heroLede:
      "Mesaj ekri gen pwòp règ li — kout ak dekontrakte pou WhatsApp, pi fòmèl pou imèl.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab ekri yon mesaj WhatsApp ak yon imèl senp.",
    whatYouWillLearn: "diferans ant ton WhatsApp (dekontrakte) ak imèl (fòmèl)",
    prerequisite: "Leson 7 — Yon Apèl Telefòn",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "WhatsApp dekontrakte, imèl pi fòmèl.",
    understandBody:
      "**Hey! Are you free today?** (WhatsApp — kout, senp) **Dear Mr. Alexandre, I am writing to...** (Imèl — pi fòmèl, plis detay). Konnen kilès ki apwopriye pou chak sitiyasyon.",
    seeItInAction: [
      { line: "Hey! Are you free today?", tag: "WhatsApp", emoji: "💬" },
      {
        line: "Dear Mr. Alexandre, I am writing to...",
        tag: "Imèl fòmèl",
        emoji: "📧",
      },
      { line: "Best regards, Marie", tag: "Fini imèl", emoji: "✍️" },
    ],
    patternBuilderIntro: "Klike sou chak fòma pou wè yon egzanp.",
    patternBuilderOptions: [
      { chipLabel: "WhatsApp", display: "Hey! Are you free today?" },
      {
        chipLabel: "Email start",
        display: "Dear Mr. Alexandre, I am writing to...",
      },
      { chipLabel: "Email end", display: "Best regards, Marie" },
    ],
    vocabulary: [
      {
        word: "Free",
        ipa: "/friː/",
        kreyol: "Disponib",
        example: "Are you free today?",
      },
      {
        word: "Dear",
        ipa: "/dɪər/",
        kreyol: "Chè (fòmèl)",
        example: "Dear Mr. Alexandre,",
      },
      {
        word: "Regards",
        ipa: "/rɪˈgɑːrdz/",
        kreyol: "Salitasyon (fòmèl)",
        example: "Best regards, Marie",
      },
      {
        word: "Attachment",
        ipa: "/əˈtætʃmənt/",
        kreyol: "Fichye jwenn",
        example: "Please see the attachment.",
      },
      {
        word: "Reply",
        ipa: "/rɪˈplaɪ/",
        kreyol: "Reponn",
        example: "Please reply soon.",
      },
    ],
    pronunciationWord: "Regards",
    pronunciationIpa: "/rɪˈgɑːrdz/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** aksan an sou dezyèm silab la — “ri-GARDZ”.",
    pronunciationMistake:
      "**Erè komen:** pa itilize “Hey!” nan yon imèl fòmèl — itilize “Dear [non]” pito.",
    mistakeWrong: "Hey Mr. Alexandre, I need help.",
    mistakeCorrect: "Dear Mr. Alexandre, I am writing to ask for your help.",
    mistakeWhy:
      "**Poukisa:** “Hey” twò dekontrakte pou yon imèl fòmèl bay yon moun ou pa konnen byen — “Dear” pi apwopriye.",
    practice: {
      prompt: "Ki fraz ki kòrèk pou kòmanse yon imèl fòmèl?",
      options: [
        "Hey! What's up?",
        "Dear Mr. Alexandre,",
        "Yo!",
        "Sup Alexandre",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — chèche fòm fòmèl la.",
    },
    thinkEmoji: "💬",
    thinkPrompt: "Ekri yon ti mesaj WhatsApp epi kòmansman yon imèl fòmèl:",
    thinkPlaceholder: "Hey! ... / Dear ...,",
    aiPrompt:
      "Hi! Can you show me the difference between a casual WhatsApp message and a formal email for the same request?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike WhatsApp ak imèl.",
    missionTask:
      "🎯 Jodi a, ekri yon ti mesaj WhatsApp epi yon fraz kòmansman imèl fòmèl.",
    recap: [
      { emoji: "💬", text: "WhatsApp: kout, dekontrakte." },
      { emoji: "📧", text: "Imèl: “Dear...” ak “Best regards,”." },
      { emoji: "⚠️", text: "Pa itilize “Hey” nan yon imèl fòmèl." },
      { emoji: "🎯", text: "Misyon: ekri yon mesaj ak yon kòmansman imèl." },
    ],
  },
  {
    slug: "conversations-mission",
    moduleTitle: "Modil 8: Konvèsasyon Chak Jou",
    illustrationKey: "emoji",
    heroEmoji: "🌟",
    heroTitle: "Nenpòt Sitiyasyon",
    heroLede:
      "Konbine sa ou aprann pou fè fas ak nenpòt sitiyasyon chak jou — restoran, magazen, doktè, bank, otèl, telefòn, ak mesaj.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab mande èd ak jere yon sitiyasyon inatandi.",
    whatYouWillLearn: "kijan pou mande èd ak jere yon sitiyasyon w pa t prevwa",
    prerequisite: "Leson 8 — WhatsApp ak Imèl",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Twa fraz ka sove w nan prèske nenpòt sitiyasyon.",
    understandBody:
      "**Excuse me, can you help me?** **I'm sorry, I don't understand. Can you repeat?** **Thank you so much for your help!** Twa fraz sa yo mache nan restoran, magazen, bank, oswa nenpòt lòt kote.",
    seeItInAction: [
      {
        line: "Excuse me, can you help me?",
        tag: "Mande èd nenpòt kote",
        emoji: "🙋",
      },
      {
        line: "I'm sorry, I don't understand. Can you repeat?",
        tag: "Lè ou pa konprann",
        emoji: "❓",
      },
      {
        line: "Thank you so much for your help!",
        tag: "Remèsiman",
        emoji: "🙏",
      },
    ],
    patternBuilderIntro: "Klike sou chak fraz sekou pou wè li.",
    patternBuilderOptions: [
      { chipLabel: "Ask for help", display: "Excuse me, can you help me?" },
      {
        chipLabel: "Don't understand",
        display: "I'm sorry, I don't understand.",
      },
      { chipLabel: "Thank you", display: "Thank you so much for your help!" },
    ],
    vocabulary: [
      {
        word: "Excuse me",
        ipa: "/ɪkˈskjuːz miː/",
        kreyol: "Eskize mwen",
        example: "Excuse me, can you help me?",
      },
      {
        word: "Understand",
        ipa: "/ˌʌndərˈstænd/",
        kreyol: "Konprann",
        example: "I don't understand.",
      },
      {
        word: "Repeat",
        ipa: "/rɪˈpiːt/",
        kreyol: "Repete",
        example: "Can you repeat that?",
      },
      {
        word: "Help",
        ipa: "/hɛlp/",
        kreyol: "Ede",
        example: "Can you help me?",
      },
      {
        word: "Situation",
        ipa: "/ˌsɪtʃuˈeɪʃən/",
        kreyol: "Sitiyasyon",
        example: "This is a new situation.",
      },
    ],
    pronunciationWord: "Excuse me",
    pronunciationIpa: "/ɪkˈskjuːz miː/",
    mouthTip: "**Ti konsèy pou bouch ou:** de mo, aksan an sou “SKYOOZ”.",
    pronunciationMistake:
      "**Erè komen:** pa gen wont mande yon moun repete — “Can you repeat?” se yon fraz nòmal, itil chak jou.",
    mistakeWrong: "(Ou rete san mo lè ou pa konprann)",
    mistakeCorrect: "I'm sorry, I don't understand. Can you repeat?",
    mistakeWhy:
      "**Poukisa:** Pi bon pou mande yon moun repete pase pou rete san w pa konprann — se yon fraz moun itilize chak jou, menm moun ki pale Anglè byen.",
    practice: {
      prompt: "Ki fraz ki kòrèk lè ou pa konprann yon bagay?",
      options: [
        "I don't care.",
        "I'm sorry, I don't understand. Can you repeat?",
        "That's wrong.",
        "I know everything.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback:
        "❌ Eseye ankò — chèche fraz ki mande yon repetisyon poliman.",
    },
    thinkEmoji: "🌟",
    thinkPrompt:
      "Ekri yon sitiyasyon chak jou epi twa fraz ou ta itilize ladan l:",
    thinkPlaceholder: "Situation: ... Excuse me...",
    aiPrompt:
      "Hi! Can you give me a surprise everyday situation (like at a store, doctor, or on the phone) and let me practice handling it using what I've learned?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 8 ansanm.",
    missionTask:
      "🎯 Jodi a, chwazi yon sitiyasyon chak jou (restoran, magazen, doktè, elatriye) epi pratike jere li ak fraz ou aprann nan Modil 8.",
    recap: [
      { emoji: "🙋", text: "Excuse me, can you help me? — mache nenpòt kote." },
      { emoji: "❓", text: "Pa gen wont mande yon moun repete." },
      { emoji: "🎓", text: "Ou fini Modil 8 — Konvèsasyon Chak Jou!" },
      { emoji: "🎯", text: "Misyon: jere yon sitiyasyon chak jou." },
    ],
  },
  {
    slug: "i-like-pattern",
    moduleTitle: "Modil 9: Modèl Anglè Yo",
    illustrationKey: "emoji",
    heroEmoji: "❤️",
    heroTitle: "I Like...",
    heroLede:
      "“I like” se yonn nan premye fason pou pataje sa ou renmen — mete yon non oswa yon vèb “-ing” apre l.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab di sa ou renmen ak sa ou pa renmen.",
    whatYouWillLearn: "kijan pou itilize “I like” ak “I don't like”",
    prerequisite: "Ou fin Modil 8 — Konvèsasyon Chak Jou",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“I like” + non OSWA vèb-ing.",
    understandBody:
      "**I like coffee.** **I like reading.** Apre “like”, ou ka mete yon bagay (coffee) oswa yon aktivite ak “-ing” (reading).",
    seeItInAction: [
      { line: "I like coffee.", tag: "Bagay", emoji: "☕" },
      { line: "I like reading.", tag: "Aktivite (-ing)", emoji: "📖" },
      { line: "I don't like loud music.", tag: "Negatif", emoji: "🎵" },
    ],
    patternBuilderIntro: "Klike sou chak fòm pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Thing", display: "I like coffee." },
      { chipLabel: "Activity", display: "I like reading." },
      { chipLabel: "Negative", display: "I don't like loud music." },
    ],
    vocabulary: [
      {
        word: "Like",
        ipa: "/laɪk/",
        kreyol: "Renmen",
        example: "I like coffee.",
      },
      {
        word: "Coffee",
        ipa: "/ˈkɔːfi/",
        kreyol: "Kafe",
        example: "I like coffee.",
      },
      {
        word: "Reading",
        ipa: "/ˈriːdɪŋ/",
        kreyol: "Li (aktivite)",
        example: "I like reading.",
      },
      {
        word: "Loud",
        ipa: "/laʊd/",
        kreyol: "Fò (bri)",
        example: "I don't like loud music.",
      },
      {
        word: "Music",
        ipa: "/ˈmjuːzɪk/",
        kreyol: "Mizik",
        example: "I like music.",
      },
    ],
    pronunciationWord: "Reading",
    pronunciationIpa: "/ˈriːdɪŋ/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** son “ee” long nan kòmansman, “REE-ding”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I like read” — vèb apre “like” pran “-ing”.",
    mistakeWrong: "I like read.",
    mistakeCorrect: "I like reading.",
    mistakeWhy:
      "**Poukisa:** Lè yon vèb vini apre “like” pou dekri yon aktivite w renmen, li pran fòm “-ing”: reading, cooking, dancing.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I like read.",
        "I like reading.",
        "I like to reading.",
        "I likes reading.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — vèb la pran “-ing”.",
    },
    thinkEmoji: "❤️",
    thinkPrompt: "Ekri de fraz sou sa ou renmen ak sa ou pa renmen:",
    thinkPlaceholder: "I like... / I don't like...",
    aiPrompt:
      "Hi! Can you ask me what I like and don't like, and help me answer using the correct verb forms?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike “I like”.",
    missionTask: "🎯 Jodi a, di twa bagay ou renmen ak yon bagay ou pa renmen.",
    recap: [
      { emoji: "❤️", text: "“I like” + non oswa vèb-ing." },
      { emoji: "📖", text: "I like reading, cooking, dancing." },
      { emoji: "⚠️", text: "Vèb apre “like” pran “-ing”." },
      { emoji: "🎯", text: "Misyon: di sa ou renmen ak sa ou pa renmen." },
    ],
  },
  {
    slug: "can-i-pattern",
    moduleTitle: "Modil 9: Modèl Anglè Yo",
    illustrationKey: "emoji",
    heroEmoji: "🙋",
    heroTitle: "Can I...?",
    heroLede: "“Can I” mande pèmisyon poliman pou fè yon bagay.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab mande pèmisyon ak “Can I”.",
    whatYouWillLearn: "kijan pou mande pèmisyon poliman ak “Can I”",
    prerequisite: "Leson 1 — I Like...",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Can I” + vèb debaz mande pèmisyon.",
    understandBody:
      "**Can I open the window?** **Can I ask you a question?** Fraz sa a mande yon moun si ou gen dwa fè yon bagay.",
    seeItInAction: [
      { line: "Can I open the window?", tag: "Mande pèmisyon", emoji: "🪟" },
      { line: "Can I ask you a question?", tag: "Mande pèmisyon", emoji: "❓" },
      {
        line: "Yes, of course. / Sorry, you can't.",
        tag: "Repons",
        emoji: "✅",
      },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè yon kesyon.",
    patternBuilderOptions: [
      { chipLabel: "Window", display: "Can I open the window?" },
      { chipLabel: "Question", display: "Can I ask you a question?" },
      { chipLabel: "Answer", display: "Yes, of course." },
    ],
    vocabulary: [
      {
        word: "Can I",
        ipa: "/kæn aɪ/",
        kreyol: "Èske m ka",
        example: "Can I open the window?",
      },
      {
        word: "Of course",
        ipa: "/ʌv kɔːrs/",
        kreyol: "Va sanzatann",
        example: "Yes, of course.",
      },
      {
        word: "Sorry",
        ipa: "/ˈsɒri/",
        kreyol: "Padon",
        example: "Sorry, you can't.",
      },
      {
        word: "Window",
        ipa: "/ˈwɪndoʊ/",
        kreyol: "Fenèt",
        example: "Can I open the window?",
      },
      {
        word: "Question",
        ipa: "/ˈkwɛstʃən/",
        kreyol: "Kesyon",
        example: "Can I ask a question?",
      },
    ],
    pronunciationWord: "Of course",
    pronunciationIpa: "/ʌv kɔːrs/",
    mouthTip: "**Ti konsèy pou bouch ou:** “of” sonnen tankou “uv”, pa “off”.",
    pronunciationMistake:
      "**Erè komen:** pa di “Can I to open” — pa gen “to” apre “can”.",
    mistakeWrong: "Can I to open the window?",
    mistakeCorrect: "Can I open the window?",
    mistakeWhy:
      "**Poukisa:** Apre “can”, vèb la rete nan fòm debaz, san “to” — “Can I open”, pa “Can I to open”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "Can I to open the window?",
        "Can I open the window?",
        "Can I opening the window?",
        "Can I opens the window?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — pa gen “to” apre “can”.",
    },
    thinkEmoji: "🙋",
    thinkPrompt: "Ekri yon kesyon “Can I” ou ta poze:",
    thinkPlaceholder: "Can I...?",
    aiPrompt:
      "Hi! Can you let me practice asking for permission using 'Can I...?' in different situations, and respond naturally?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike “Can I”.",
    missionTask:
      "🎯 Jodi a, mande pèmisyon yon moun ak “Can I...?” pou yon bagay reyèl.",
    recap: [
      { emoji: "🙋", text: "“Can I” + vèb debaz mande pèmisyon." },
      { emoji: "⚠️", text: "Pa gen “to” apre “can”." },
      { emoji: "✅", text: "Yes, of course. / Sorry, you can't." },
      { emoji: "🎯", text: "Misyon: mande pèmisyon ak “Can I”." },
    ],
  },
  {
    slug: "would-you-pattern",
    moduleTitle: "Modil 9: Modèl Anglè Yo",
    illustrationKey: "emoji",
    heroEmoji: "😊",
    heroTitle: "Would You...?",
    heroLede:
      "“Would you” mande yon moun fè yon bagay, oswa ofri yon bagay, poliman.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab fè demand ak ofri poliman ak “Would you”.",
    whatYouWillLearn: "kijan pou fè demand ak ofri poliman ak “Would you”",
    prerequisite: "Leson 2 — Can I...?",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Would you” pi poli pase yon lòd dirèk.",
    understandBody:
      "**Would you close the door, please?** **Would you like some coffee?** “Would you” fè yon demand oswa yon ofri san w pa sonnen brak.",
    seeItInAction: [
      {
        line: "Would you close the door, please?",
        tag: "Mande poliman",
        emoji: "🚪",
      },
      { line: "Would you like some coffee?", tag: "Ofri", emoji: "☕" },
      { line: "Yes, I would. / No, thank you.", tag: "Repons", emoji: "😊" },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Request", display: "Would you close the door, please?" },
      { chipLabel: "Offer", display: "Would you like some coffee?" },
      { chipLabel: "Answer", display: "Yes, I would." },
    ],
    vocabulary: [
      {
        word: "Would you",
        ipa: "/wʊd juː/",
        kreyol: "Ou ta vle",
        example: "Would you like some coffee?",
      },
      {
        word: "Close",
        ipa: "/kloʊz/",
        kreyol: "Fèmen",
        example: "Would you close the door?",
      },
      {
        word: "Door",
        ipa: "/dɔːr/",
        kreyol: "Pòt",
        example: "Close the door, please.",
      },
      {
        word: "Some",
        ipa: "/sʌm/",
        kreyol: "Yon ti kras",
        example: "Would you like some coffee?",
      },
      {
        word: "Thank you",
        ipa: "/θæŋk juː/",
        kreyol: "Mèsi",
        example: "No, thank you.",
      },
    ],
    pronunciationWord: "Would you",
    pronunciationIpa: "/wʊd juː/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** nan pale vit, li ka sonnen tankou “wood-ja”.",
    pronunciationMistake:
      "**Erè komen:** pa reponn “Yes, I want” pou yon ofrann — se “Yes, I would” oswa “Yes, please”.",
    mistakeWrong: "Would you like coffee? Yes, I want.",
    mistakeCorrect: "Would you like coffee? Yes, I would. / Yes, please.",
    mistakeWhy:
      "**Poukisa:** Reponn yon kesyon “Would you” ak “I would” oswa “please”, pa “I want” — sa kenbe ton poli a.",
    practice: {
      prompt: "Chwazi repons ki pi poli pou “Would you like some coffee?”",
      options: [
        "Yes, I want.",
        "Yes, I would.",
        "Give me coffee.",
        "Coffee now.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — chèche repons ki pi poli a.",
    },
    thinkEmoji: "😊",
    thinkPrompt: "Ekri yon demand oswa yon ofri poliman ak “Would you”:",
    thinkPlaceholder: "Would you...?",
    aiPrompt:
      "Hi! Can you offer me something using 'Would you like...?' and let me practice accepting or declining politely?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike “Would you”.",
    missionTask: "🎯 Jodi a, fè yon demand poliman ak “Would you...?”",
    recap: [
      { emoji: "😊", text: "“Would you” mande oswa ofri poliman." },
      { emoji: "☕", text: "Would you like some coffee?" },
      { emoji: "✅", text: "Yes, I would. / No, thank you." },
      { emoji: "🎯", text: "Misyon: fè yon demand ak “Would you”." },
    ],
  },
  {
    slug: "there-is-there-are-pattern",
    moduleTitle: "Modil 9: Modèl Anglè Yo",
    illustrationKey: "emoji",
    heroEmoji: "📍",
    heroTitle: "There Is / There Are",
    heroLede:
      "Ranfòse “There is”/“There are” pou dekri nenpòt sitiyasyon, pa jis sa ki nan kay la.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “There is”/“There are” nan plizyè sitiyasyon.",
    whatYouWillLearn: "itilize “There is”/“There are” pi lwen pase kay la",
    prerequisite: "Leson 3 — Would You...?",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“There is”/“There are” dekri sa ki egziste nenpòt kote.",
    understandBody:
      "**There is a problem.** **There are many people here.** **Is there a bank near here?** Menm modèl ou aprann nan Modil 4 la, men kounye a pou nenpòt sitiyasyon — pwoblèm, moun, kesyon.",
    seeItInAction: [
      { line: "There is a problem.", tag: "Yon sèl bagay", emoji: "⚠️" },
      { line: "There are many people here.", tag: "Plizyè bagay", emoji: "👥" },
      { line: "Is there a bank near here?", tag: "Kesyon", emoji: "🏦" },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Problem", display: "There is a problem." },
      { chipLabel: "People", display: "There are many people here." },
      { chipLabel: "Question", display: "Is there a bank near here?" },
    ],
    vocabulary: [
      {
        word: "Problem",
        ipa: "/ˈprɒbləm/",
        kreyol: "Pwoblèm",
        example: "There is a problem.",
      },
      {
        word: "People",
        ipa: "/ˈpiːpəl/",
        kreyol: "Moun",
        example: "There are many people.",
      },
      {
        word: "Near",
        ipa: "/nɪər/",
        kreyol: "Toupre",
        example: "Is there a bank near here?",
      },
      {
        word: "Bank",
        ipa: "/bæŋk/",
        kreyol: "Bank",
        example: "Is there a bank near here?",
      },
      {
        word: "Many",
        ipa: "/ˈmɛni/",
        kreyol: "Anpil",
        example: "There are many people.",
      },
    ],
    pronunciationWord: "There are",
    pronunciationIpa: "/ðɛər ɑːr/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** de mo kole ansanm nan pale vit, “thair-ar”.",
    pronunciationMistake:
      "**Erè komen:** pa itilize “there is” pou plizyè bagay — “there are many people”, pa “there is many people”.",
    mistakeWrong: "There is many people here.",
    mistakeCorrect: "There are many people here.",
    mistakeWhy:
      "**Poukisa:** “Many people” se plizyè — bezwen “there are”, pa “there is”, menm règ nou wè nan Modil 4.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou mande si gen yon bank toupre:",
      options: [
        "Is there a bank near here?",
        "Is bank there near here?",
        "There a bank near here?",
        "Are there a bank near here?",
      ],
      correctIndex: 0,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback:
        "❌ Eseye ankò — “bank” se yon sèl bagay, itilize “is there”.",
    },
    thinkEmoji: "📍",
    thinkPrompt:
      "Ekri yon fraz “There is”/“There are” sou kote ou ye kounye a:",
    thinkPlaceholder: "There is... / There are...",
    aiPrompt:
      "Hi! Can you ask me if there's a problem, or how many people are somewhere, so I can practice there is/there are?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike “There is/are”.",
    missionTask:
      "🎯 Jodi a, dekri yon sitiyasyon reyèl ak “There is” oswa “There are”.",
    recap: [
      { emoji: "📍", text: "“There is” yon sèl bagay, “there are” plizyè." },
      { emoji: "🏦", text: "Is there a bank near here?" },
      { emoji: "⚠️", text: "Pa konfonn is/are ak kantite a." },
      { emoji: "🎯", text: "Misyon: dekri yon sitiyasyon ak There is/are." },
    ],
  },
  {
    slug: "want-and-would-like-pattern",
    moduleTitle: "Modil 9: Modèl Anglè Yo",
    illustrationKey: "emoji",
    heroEmoji: "🙏",
    heroTitle: "I Want / I'd Like",
    heroLede:
      "“I want” dirèk, “I'd like” pi poli — de fason pou mande menm bagay la.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap konnen kilè pou itilize “want” ak kilè pou itilize “would like”.",
    whatYouWillLearn: "diferans ant “I want” (dirèk) ak “I'd like” (poli)",
    prerequisite: "Leson 4 — There Is / There Are",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“I want” dirèk, “I'd like” pi poli — menm sans lan.",
    understandBody:
      "**I want water.** **I'd like some water, please.** Tou de vle di menm bagay la, men “I'd like” sonnen pi poli — itil nan sitiyasyon fòmèl tankou restoran.",
    seeItInAction: [
      { line: "I want water.", tag: "Dirèk", emoji: "💧" },
      { line: "I'd like some water, please.", tag: "Poli", emoji: "🙏" },
      { line: "What do you want to do today?", tag: "Kesyon", emoji: "❓" },
    ],
    patternBuilderIntro: "Klike sou chak fòm pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Want", display: "I want water." },
      { chipLabel: "Would like", display: "I'd like some water, please." },
      { chipLabel: "Question", display: "What do you want to do today?" },
    ],
    vocabulary: [
      { word: "Want", ipa: "/wɒnt/", kreyol: "Vle", example: "I want water." },
      {
        word: "Would like",
        ipa: "/wʊd laɪk/",
        kreyol: "Ta renmen",
        example: "I'd like some water.",
      },
      {
        word: "Please",
        ipa: "/pliːz/",
        kreyol: "Souple",
        example: "I'd like water, please.",
      },
      {
        word: "Today",
        ipa: "/təˈdeɪ/",
        kreyol: "Jodi a",
        example: "What do you want today?",
      },
      {
        word: "Water",
        ipa: "/ˈwɔːtər/",
        kreyol: "Dlo",
        example: "I want water.",
      },
    ],
    pronunciationWord: "I'd like",
    pronunciationIpa: "/aɪd laɪk/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** “I'd” se “I would” kout, di li tankou “ayd”.",
    pronunciationMistake:
      "**Erè komen:** nan yon sitiyasyon fòmèl (restoran, biwo), “I want” ka sonnen twò dirèk — “I'd like” pi apwopriye.",
    mistakeWrong: "I want the chicken. (nan yon restoran fòmèl)",
    mistakeCorrect: "I'd like the chicken, please.",
    mistakeWhy:
      "**Poukisa:** Nan sitiyasyon fòmèl (restoran, biwo), “I'd like” + “please” sonnen pi poli pase “I want” tou sèk.",
    practice: {
      prompt: "Ki fraz ki pi poli pou yon lòd nan restoran?",
      options: [
        "I want the chicken.",
        "I'd like the chicken, please.",
        "Give me chicken.",
        "Chicken now.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — chèche fòm ki pi poli a.",
    },
    thinkEmoji: "🙏",
    thinkPrompt: "Ekri menm demand lan de fason: “I want” epi “I'd like”:",
    thinkPlaceholder: "I want... / I'd like...",
    aiPrompt:
      "Hi! Can you help me practice the difference between 'I want' and 'I'd like' in casual versus formal situations?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike want/would like.",
    missionTask:
      "🎯 Jodi a, di yon demand de fason: youn ak “I want”, youn ak “I'd like”.",
    recap: [
      { emoji: "🙏", text: "“I want” dirèk, “I'd like” poli." },
      { emoji: "🍽️", text: "Itilize “I'd like” nan sitiyasyon fòmèl." },
      { emoji: "💧", text: "I want water. I'd like some water, please." },
      { emoji: "🎯", text: "Misyon: di yon demand de fason diferan." },
    ],
  },
  {
    slug: "going-to-pattern",
    moduleTitle: "Modil 9: Modèl Anglè Yo",
    illustrationKey: "emoji",
    heroEmoji: "🗓️",
    heroTitle: "I'm Going To...",
    heroLede: "“I'm going to” pale de yon plan ou deja gen pou lavni.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de plan lavni ak “I'm going to”.",
    whatYouWillLearn: "kijan pou pale de plan lavni ak “going to”",
    prerequisite: "Leson 5 — I Want / I'd Like",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“I'm going to” + vèb debaz pale de yon plan.",
    understandBody:
      "**I'm going to study tonight.** **We're going to visit my family.** “Going to” montre yon bagay ou deja deside fè, pa jis yon lide sou lè.",
    seeItInAction: [
      { line: "I'm going to study tonight.", tag: "Plan", emoji: "📚" },
      { line: "We're going to visit my family.", tag: "Plan", emoji: "👨‍👩‍👧" },
      {
        line: "What are you going to do this weekend?",
        tag: "Kesyon plan",
        emoji: "❓",
      },
    ],
    patternBuilderIntro: "Klike sou chak plan pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Study", display: "I'm going to study tonight." },
      { chipLabel: "Visit", display: "We're going to visit my family." },
      {
        chipLabel: "Question",
        display: "What are you going to do this weekend?",
      },
    ],
    vocabulary: [
      {
        word: "Going to",
        ipa: "/ˈgoʊɪŋ tuː/",
        kreyol: "Pral",
        example: "I'm going to study.",
      },
      {
        word: "Tonight",
        ipa: "/təˈnaɪt/",
        kreyol: "Aswè a",
        example: "I'm going to study tonight.",
      },
      {
        word: "Visit",
        ipa: "/ˈvɪzɪt/",
        kreyol: "Vizite",
        example: "We're going to visit my family.",
      },
      {
        word: "Weekend",
        ipa: "/ˈwiːkɛnd/",
        kreyol: "Wikenn",
        example: "What are you doing this weekend?",
      },
      {
        word: "Plan",
        ipa: "/plæn/",
        kreyol: "Plan",
        example: "I have a plan.",
      },
    ],
    pronunciationWord: "Going to",
    pronunciationIpa: "/ˈgoʊɪŋ tuː/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** nan pale vit, moun konn di “gonna” — men ekri li “going to”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye “to be” (am/is/are) devan “going to”.",
    mistakeWrong: "I going to study tonight.",
    mistakeCorrect: "I'm going to study tonight.",
    mistakeWhy:
      "**Poukisa:** “Going to” toujou bezwen “to be” devan li — “I'm going to”, “She's going to”, “They're going to”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I going to study.",
        "I'm going to study.",
        "I go to study.",
        "I am go to study.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — manke “to be” la.",
    },
    thinkEmoji: "🗓️",
    thinkPrompt: "Ekri yon plan ou genyen pou wikenn sa a, ak “going to”:",
    thinkPlaceholder: "I'm going to...",
    aiPrompt:
      "Hi! Can you ask me what I'm going to do this weekend, and help me answer using 'going to'?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike “going to”.",
    missionTask:
      "🎯 Jodi a, di yon plan ou genyen pou wikenn sa a, ak “I'm going to”.",
    recap: [
      { emoji: "🗓️", text: "“Going to” pale de yon plan lavni." },
      { emoji: "🔗", text: "To be (am/is/are) + going to + vèb." },
      { emoji: "📚", text: "I'm going to study tonight." },
      { emoji: "🎯", text: "Misyon: di yon plan pou wikenn sa a." },
    ],
  },
  {
    slug: "i-need-pattern",
    moduleTitle: "Modil 9: Modèl Anglè Yo",
    illustrationKey: "emoji",
    heroEmoji: "🆘",
    heroTitle: "I Need...",
    heroLede: "“I need” montre yon bezwen — pi fò pase “want”.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap konnen diferans ant “I need” ak “I want”.",
    whatYouWillLearn: "diferans ant “need” (bezwen) ak “want” (vle)",
    prerequisite: "Leson 6 — I'm Going To...",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“Need” pi fò pase “want” — se yon bagay ou pa ka viv san li.",
    understandBody:
      "**I need help.** **I need more time.** “Need” montre yon bagay ki nesesè, pa jis yon preferans tankou “want”.",
    seeItInAction: [
      { line: "I need help.", tag: "Bezwen", emoji: "🆘" },
      { line: "I need more time.", tag: "Bezwen", emoji: "⏰" },
      { line: "Do you need anything?", tag: "Kesyon", emoji: "❓" },
    ],
    patternBuilderIntro: "Klike sou chak bezwen pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Help", display: "I need help." },
      { chipLabel: "Time", display: "I need more time." },
      { chipLabel: "Question", display: "Do you need anything?" },
    ],
    vocabulary: [
      {
        word: "Need",
        ipa: "/niːd/",
        kreyol: "Bezwen",
        example: "I need help.",
      },
      { word: "Help", ipa: "/hɛlp/", kreyol: "Èd", example: "I need help." },
      {
        word: "More",
        ipa: "/mɔːr/",
        kreyol: "Plis",
        example: "I need more time.",
      },
      {
        word: "Time",
        ipa: "/taɪm/",
        kreyol: "Tan",
        example: "I need more time.",
      },
      {
        word: "Anything",
        ipa: "/ˈɛniθɪŋ/",
        kreyol: "Nenpòt bagay",
        example: "Do you need anything?",
      },
    ],
    pronunciationWord: "Need",
    pronunciationIpa: "/niːd/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** son “ee” long, tankou “need” an Kreyòl si w ta ekri l.",
    pronunciationMistake:
      "**Erè komen:** pa di “I need to money” — “need” + non pa bezwen “to”.",
    mistakeWrong: "I need to money.",
    mistakeCorrect: "I need money.",
    mistakeWhy:
      "**Poukisa:** “Need” + yon non (money) pa bezwen “to”. “To” sèlman itil lè “need” swiv ak yon vèb: “I need to go”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I need to money.",
        "I need money.",
        "I needs money.",
        "I need for money.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — pa gen “to” devan yon non.",
    },
    thinkEmoji: "🆘",
    thinkPrompt: "Ekri yon bagay ou bezwen vre kounye a, ak “I need”:",
    thinkPlaceholder: "I need...",
    aiPrompt:
      "Hi! Can you ask me what I need right now, and help me answer using 'I need' correctly?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike “I need”.",
    missionTask: "🎯 Jodi a, di yon bagay ou bezwen vre kounye a, ak “I need”.",
    recap: [
      { emoji: "🆘", text: "“Need” pi fò pase “want”." },
      { emoji: "⏰", text: "I need help. I need more time." },
      { emoji: "⚠️", text: "“Need” + non pa bezwen “to”." },
      { emoji: "🎯", text: "Misyon: di yon bagay ou bezwen." },
    ],
  },
  {
    slug: "i-dont-pattern",
    moduleTitle: "Modil 9: Modèl Anglè Yo",
    illustrationKey: "emoji",
    heroEmoji: "🤷",
    heroTitle: "I Don't...",
    heroLede: "Ranfòse “I don't” pou fè fraz negatif ki itil chak jou.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize “I don't” nan plizyè sitiyasyon chak jou.",
    whatYouWillLearn: "fraz “I don't” ki itil chak jou",
    prerequisite: "Leson 7 — I Need...",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“I don't” + vèb debaz fè yon fraz negatif chak jou.",
    understandBody:
      "**I don't know.** **I don't understand.** **I don't have time today.** Twa fraz sa yo pami pi itil yo an Anglè chak jou.",
    seeItInAction: [
      { line: "I don't know.", tag: "Pa konnen", emoji: "🤷" },
      { line: "I don't understand.", tag: "Pa konprann", emoji: "❓" },
      { line: "I don't have time today.", tag: "Konbinezon", emoji: "⏰" },
    ],
    patternBuilderIntro: "Klike sou chak fraz pou wè li.",
    patternBuilderOptions: [
      { chipLabel: "Don't know", display: "I don't know." },
      { chipLabel: "Don't understand", display: "I don't understand." },
      { chipLabel: "Don't have time", display: "I don't have time today." },
    ],
    vocabulary: [
      {
        word: "Know",
        ipa: "/noʊ/",
        kreyol: "Konnen",
        example: "I don't know.",
      },
      {
        word: "Understand",
        ipa: "/ˌʌndərˈstænd/",
        kreyol: "Konprann",
        example: "I don't understand.",
      },
      {
        word: "Care",
        ipa: "/kɛər/",
        kreyol: "Enterese",
        example: "I don't care.",
      },
      {
        word: "Mind",
        ipa: "/maɪnd/",
        kreyol: "Deranje",
        example: "I don't mind.",
      },
      {
        word: "Today",
        ipa: "/təˈdeɪ/",
        kreyol: "Jodi a",
        example: "I don't have time today.",
      },
    ],
    pronunciationWord: "Don't",
    pronunciationIpa: "/doʊnt/",
    mouthTip: "**Ti konsèy pou bouch ou:** son “oh” long, tankou “dohnt”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I not know” — bezwen “don't”, pa jis “not”.",
    mistakeWrong: "I not know.",
    mistakeCorrect: "I don't know.",
    mistakeWhy:
      "**Poukisa:** Pou fè yon fraz negatif ak yon vèb aksyon (know, understand), ou bezwen “don't”/“doesn't”, pa jis “not”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: ["I not know.", "I don't know.", "I no know.", "I isn't know."],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — bezwen “don't”.",
    },
    thinkEmoji: "🤷",
    thinkPrompt: "Ekri de fraz “I don't” ou itilize souvan:",
    thinkPlaceholder: "I don't...",
    aiPrompt:
      "Hi! Can you ask me questions I might not know the answer to, so I can practice saying 'I don't know' and similar phrases?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike “I don't”.",
    missionTask:
      "🎯 Jodi a, itilize “I don't know” oswa “I don't understand” yon fwa jodi a.",
    recap: [
      { emoji: "🤷", text: "I don't know. I don't understand." },
      { emoji: "⏰", text: "I don't have time today." },
      { emoji: "⚠️", text: "“Don't”, pa jis “not”, pou vèb aksyon." },
      { emoji: "🎯", text: "Misyon: itilize “I don't” jodi a." },
    ],
  },
  {
    slug: "patterns-mission",
    moduleTitle: "Modil 9: Modèl Anglè Yo",
    illustrationKey: "emoji",
    heroEmoji: "🧩",
    heroTitle: "Konstwi Ak Modèl Yo",
    heroLede:
      "Se lè a pou konbine plizyè modèl Modil 9 pou fè fraz konplè, natirèl.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab konbine plizyè modèl nan yon sèl konvèsasyon.",
    whatYouWillLearn:
      "kijan pou konbine modèl Modil 9 yo nan yon konvèsasyon natirèl",
    prerequisite: "Leson 8 — I Don't...",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Plizyè modèl ansanm fè yon konvèsasyon sonnen natirèl.",
    understandBody:
      "**I like coffee, but I need water right now.** Konekte de modèl ak “but”, “and”, oswa “so” fè fraz ou sonnen tankou yon moun ki pale Anglè natirèlman, pa jis fraz izole.",
    seeItInAction: [
      {
        line: "I like coffee, but I need water right now.",
        tag: "Konbine",
        emoji: "☕💧",
      },
      {
        line: "Would you like to go? I'm going to leave soon.",
        tag: "Konbine",
        emoji: "🚪",
      },
      {
        line: "There is a problem, and I don't know how to fix it.",
        tag: "Konbine",
        emoji: "⚠️",
      },
    ],
    patternBuilderIntro: "Klike sou chak konbinezon pou wè li.",
    patternBuilderOptions: [
      { chipLabel: "Like + Need", display: "I like coffee, but I need water." },
      {
        chipLabel: "Would + Going to",
        display: "Would you like to go? I'm going to leave soon.",
      },
      {
        chipLabel: "There is + Don't",
        display: "There is a problem, and I don't know how to fix it.",
      },
    ],
    vocabulary: [
      {
        word: "But",
        ipa: "/bʌt/",
        kreyol: "Men",
        example: "I like coffee, but I need water.",
      },
      {
        word: "And",
        ipa: "/ænd/",
        kreyol: "Epi",
        example: "There is a problem, and I don't know.",
      },
      {
        word: "So",
        ipa: "/soʊ/",
        kreyol: "Kidonk",
        example: "I'm tired, so I'm going to sleep.",
      },
      {
        word: "Right now",
        ipa: "/raɪt naʊ/",
        kreyol: "Kounye a menm",
        example: "I need water right now.",
      },
      {
        word: "Soon",
        ipa: "/suːn/",
        kreyol: "Byento",
        example: "I'm going to leave soon.",
      },
    ],
    pronunciationWord: "Right now",
    pronunciationIpa: "/raɪt naʊ/",
    mouthTip: "**Ti konsèy pou bouch ou:** de mo klè, san w pa kole yo.",
    pronunciationMistake:
      "**Erè komen:** pa antase twòp modèl nan yon sèl fraz — de oswa twa ase pou li rete klè.",
    mistakeWrong: "I like coffee I need water I want tea I don't know.",
    mistakeCorrect: "I like coffee, but I need water right now.",
    mistakeWhy:
      "**Poukisa:** Twòp lide nan yon sèl fraz mele koute a. Chwazi de lide, konekte yo ak “but”/“and”/“so”, epi fè yon lòt fraz pou rès la.",
    practice: {
      prompt: "Ki fraz ki byen konstwi?",
      options: [
        "I like coffee I need water.",
        "I like coffee, but I need water right now.",
        "Coffee like I water need.",
        "I like, need, want, don't know.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — konekte ak “but”.",
    },
    thinkEmoji: "🧩",
    thinkPrompt: "Ekri twa fraz ki konbine omwen de modèl Modil 9 chak youn:",
    thinkPlaceholder: "I like..., but I need...",
    aiPrompt:
      "Hi! Can you listen to me combine different patterns like 'I like', 'I need', 'there is', and 'I'm going to' into natural sentences, and give me feedback?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 9 ansanm.",
    missionTask:
      "🎯 Jodi a, ekri oswa di twa fraz ki chak konbine omwen de modèl Modil 9.",
    recap: [
      { emoji: "🧩", text: "Konbine modèl ak “but”, “and”, “so”." },
      { emoji: "🔗", text: "De oswa twa modèl ase pou yon fraz klè." },
      { emoji: "🎓", text: "Ou fini Modil 9 — Modèl Anglè Yo!" },
      { emoji: "🎯", text: "Misyon: konbine plizyè modèl nan fraz ou." },
    ],
  },
  {
    slug: "apostrophe-confusion",
    moduleTitle: "Modil 10: Anglè Konfizyon",
    illustrationKey: "emoji",
    heroEmoji: "✂️",
    heroTitle: "Your/You're, Its/It's, Their/They're",
    heroLede:
      "Twa konfizyon ki menm rasin: yon mo posesyon pa janm gen apostwòf, men yon kontraksyon toujou genyen youn.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab chwazi byen ant your/you're, its/it's, ak their/they're.",
    whatYouWillLearn:
      "règ apostwòf la: posesyon pa gen apostwòf, kontraksyon genyen",
    prerequisite: "Ou fin Modil 9 — Modèl Anglè Yo",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Yon apostwòf montre de mo kole ansanm, pa posesyon.",
    understandBody:
      "**Your** montre posesyon (pou ou). **You're** = “you are”. Menm modèl la pou **its** (posesyon) ak **it's** (“it is”), ak **their** (posesyon) ak **they're** (“they are”).",
    seeItInAction: [
      { line: "Your book is on the table.", tag: "Posesyon", emoji: "📚" },
      { line: "You're welcome.", tag: "Kontraksyon (you are)", emoji: "😊" },
      { line: "The dog wagged its tail.", tag: "Posesyon (its)", emoji: "🐕" },
    ],
    patternBuilderIntro: "Klike sou chak mo pou wè li nan yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Your", display: "Your book is on the table." },
      { chipLabel: "You're", display: "You're welcome." },
      { chipLabel: "Its", display: "The dog wagged its tail." },
    ],
    vocabulary: [
      {
        word: "Your",
        ipa: "/jʊər/",
        kreyol: "Pou ou (posesyon)",
        example: "Your book is here.",
      },
      {
        word: "You're",
        ipa: "/jʊər/",
        kreyol: "Ou ye (you are)",
        example: "You're welcome.",
      },
      {
        word: "Its",
        ipa: "/ɪts/",
        kreyol: "Pou li (posesyon)",
        example: "The dog wagged its tail.",
      },
      {
        word: "It's",
        ipa: "/ɪts/",
        kreyol: "Li ye (it is)",
        example: "It's raining.",
      },
      {
        word: "Their",
        ipa: "/ðɛər/",
        kreyol: "Pou yo (posesyon)",
        example: "That is their house.",
      },
    ],
    pronunciationWord: "They're",
    pronunciationIpa: "/ðɛər/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** “their”, “there”, ak “they're” sonnen menm jan — kontèks fè diferans.",
    pronunciationMistake:
      "**Erè komen:** pa di “Your welcome” — se “You're welcome” (you are welcome).",
    mistakeWrong: "Your welcome.",
    mistakeCorrect: "You're welcome.",
    mistakeWhy:
      "**Poukisa:** “Your welcome” pa gen sans (posesyon + welcome). “You're welcome” = “you are welcome”, repons apre yon mèsi.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "Your welcome.",
        "You're welcome.",
        "Your're welcome.",
        "Yours welcome.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — bezwen kontraksyon an.",
    },
    thinkEmoji: "✂️",
    thinkPrompt:
      "Ekri twa fraz, chak youn ak yon pè diferan (your/you're, its/it's, their/they're):",
    thinkPlaceholder: "Your... You're... Its...",
    aiPrompt:
      "Hi! Can you give me 6 sentences with blanks, and let me choose between your/you're, its/it's, and their/they're?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike règ apostwòf la.",
    missionTask:
      "🎯 Jodi a, ekri twa fraz kòrèk ak your/you're, its/it's, ak their/they're.",
    recap: [
      { emoji: "✂️", text: "Posesyon pa gen apostwòf: your, its, their." },
      {
        emoji: "🔗",
        text: "Kontraksyon toujou gen apostwòf: you're, it's, they're.",
      },
      { emoji: "⚠️", text: "“You're welcome” = “you are welcome”." },
      { emoji: "🎯", text: "Misyon: ekri twa fraz kòrèk." },
    ],
  },
  {
    slug: "to-too-two",
    moduleTitle: "Modil 10: Anglè Konfizyon",
    illustrationKey: "emoji",
    heroEmoji: "2️⃣",
    heroTitle: "To, Too, ak Two",
    heroLede: "Twa mo ki sonnen menm jan, twa sans totalman diferan.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab chwazi byen ant to, too, ak two.",
    whatYouWillLearn:
      "sans diferan pou to (direksyon), too (tou/twòp), ak two (2)",
    prerequisite: "Leson 1 — Your/You're, Its/It's, Their/They're",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Menm son, twa sans diferan.",
    understandBody:
      "**To** montre direksyon (go to school). **Too** vle di “tou” oswa “twòp”. **Two** se chif 2. Kontèks la fè w konnen kilès pou itilize.",
    seeItInAction: [
      { line: "I go to school.", tag: "Direksyon (to)", emoji: "🏫" },
      { line: "I'm hungry too.", tag: "Tou/menm bagay (too)", emoji: "🍽️" },
      { line: "I have two brothers.", tag: "Chif 2 (two)", emoji: "👬" },
    ],
    patternBuilderIntro: "Klike sou chak sans pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "To", display: "I go to school." },
      { chipLabel: "Too", display: "I'm hungry too." },
      { chipLabel: "Two", display: "I have two brothers." },
    ],
    vocabulary: [
      {
        word: "To",
        ipa: "/tuː/",
        kreyol: "Vè/nan (direksyon)",
        example: "I go to school.",
      },
      {
        word: "Too",
        ipa: "/tuː/",
        kreyol: "Tou/Twòp",
        example: "I'm hungry too.",
      },
      {
        word: "Two",
        ipa: "/tuː/",
        kreyol: "De (chif)",
        example: "I have two brothers.",
      },
      {
        word: "Also",
        ipa: "/ˈɔːlsoʊ/",
        kreyol: "Tou (sinonim too)",
        example: "I like it too / also.",
      },
      {
        word: "Brothers",
        ipa: "/ˈbrʌðərz/",
        kreyol: "Frè",
        example: "I have two brothers.",
      },
    ],
    pronunciationWord: "Too",
    pronunciationIpa: "/tuː/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** tou twa mo yo sonnen menm jan — “too”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I have to brothers” pou chif 2 — se “two”.",
    mistakeWrong: "I have to brothers.",
    mistakeCorrect: "I have two brothers.",
    mistakeWhy:
      "**Poukisa:** Chif 2 ekri “two”, pa “to”. “To” se pou direksyon (go to), “too” se pou “tou/twòp”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I have to brothers.",
        "I have too brothers.",
        "I have two brothers.",
        "I have tu brothers.",
      ],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — chif 2 ekri “two”.",
    },
    thinkEmoji: "2️⃣",
    thinkPrompt: "Ekri twa fraz, chak youn ak to, too, oswa two:",
    thinkPlaceholder: "I go to... I like it too. I have two...",
    aiPrompt:
      "Hi! Can you give me sentences with blanks and let me choose between to, too, and two?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike to/too/two.",
    missionTask: "🎯 Jodi a, ekri twa fraz kòrèk ak to, too, ak two.",
    recap: [
      { emoji: "🏫", text: "“To” montre direksyon." },
      { emoji: "🍽️", text: "“Too” vle di tou oswa twòp." },
      { emoji: "👬", text: "“Two” se chif 2." },
      { emoji: "🎯", text: "Misyon: ekri twa fraz ak to/too/two." },
    ],
  },
  {
    slug: "then-vs-than",
    moduleTitle: "Modil 10: Anglè Konfizyon",
    illustrationKey: "emoji",
    heroEmoji: "⏱️",
    heroTitle: "Then kont Than",
    heroLede: "“Then” montre lè, “than” konpare de bagay.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab chwazi byen ant then ak than.",
    whatYouWillLearn: "diferans ant “then” (lè) ak “than” (konparezon)",
    prerequisite: "Leson 2 — To, Too, ak Two",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Then” pou lè, “than” pou konpare.",
    understandBody:
      "**I eat, then I sleep.** (sekans, lè) **She is taller than me.** (konparezon). Yon sèl lèt diferan, men de sans totalman diferan.",
    seeItInAction: [
      { line: "I eat, then I sleep.", tag: "Lè (sekans)", emoji: "⏰" },
      { line: "She is taller than me.", tag: "Konparezon", emoji: "📏" },
      { line: "I'd rather walk than drive.", tag: "Konparezon", emoji: "🚶" },
    ],
    patternBuilderIntro: "Klike sou chak sans pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Then (time)", display: "I eat, then I sleep." },
      { chipLabel: "Than (compare)", display: "She is taller than me." },
      { chipLabel: "Than (prefer)", display: "I'd rather walk than drive." },
    ],
    vocabulary: [
      {
        word: "Then",
        ipa: "/ðɛn/",
        kreyol: "Answit",
        example: "I eat, then I sleep.",
      },
      {
        word: "Than",
        ipa: "/ðæn/",
        kreyol: "Pase (konparezon)",
        example: "She is taller than me.",
      },
      {
        word: "Taller",
        ipa: "/ˈtɔːlər/",
        kreyol: "Pi wo",
        example: "She is taller than me.",
      },
      {
        word: "Rather",
        ipa: "/ˈræðər/",
        kreyol: "Pito",
        example: "I'd rather walk than drive.",
      },
      {
        word: "Drive",
        ipa: "/draɪv/",
        kreyol: "Kondi",
        example: "I'd rather walk than drive.",
      },
    ],
    pronunciationWord: "Than",
    pronunciationIpa: "/ðæn/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** son “a” ouvè nan “than”, diferan de “e” nan “then”.",
    pronunciationMistake:
      "**Erè komen:** pa di “taller then me” — konparezon itilize “than”.",
    mistakeWrong: "She is taller then me.",
    mistakeCorrect: "She is taller than me.",
    mistakeWhy:
      "**Poukisa:** “Than” itilize pou konpare de bagay (taller than). “Then” itilize pou lè/sekans (eat, then sleep).",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "She is taller then me.",
        "She is taller than me.",
        "She is tall then me.",
        "She is tall than me.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — konparezon itilize “than”.",
    },
    thinkEmoji: "⏱️",
    thinkPrompt: "Ekri yon fraz ak “then” epi yon lòt ak “than”:",
    thinkPlaceholder: "First..., then... / ...is bigger than...",
    aiPrompt:
      "Hi! Can you give me sentences with blanks and let me choose between then and than?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike then/than.",
    missionTask: "🎯 Jodi a, ekri yon fraz ak “then” epi yon lòt ak “than”.",
    recap: [
      { emoji: "⏰", text: "“Then” pou lè/sekans." },
      { emoji: "📏", text: "“Than” pou konparezon." },
      { emoji: "⚠️", text: "Yon sèl lèt diferan, de sans diferan." },
      { emoji: "🎯", text: "Misyon: ekri de fraz ak then/than." },
    ],
  },
  {
    slug: "look-see-watch",
    moduleTitle: "Modil 10: Anglè Konfizyon",
    illustrationKey: "emoji",
    heroEmoji: "👀",
    heroTitle: "Look, See, ak Watch",
    heroLede: "Twa fason pou itilize zye ou, twa sans diferan.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab chwazi byen ant look, see, ak watch.",
    whatYouWillLearn:
      "diferans ant look (dirije atansyon), see (wè san eksprè), ak watch (gade atantivman)",
    prerequisite: "Leson 3 — Then kont Than",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Twa fason pou itilize zye ou, twa nivo atansyon diferan.",
    understandBody:
      "**Look at this!** (dirije atansyon w espre) **I see a bird.** (wè san w pa eseye) **I watch movies.** (gade yon bagay ki ap deplase, atantivman).",
    seeItInAction: [
      { line: "Look at this!", tag: "Dirije atansyon", emoji: "👀" },
      { line: "I see a bird.", tag: "Wè san eksprè", emoji: "🐦" },
      {
        line: "I watch movies on Fridays.",
        tag: "Gade atantivman",
        emoji: "🎬",
      },
    ],
    patternBuilderIntro: "Klike sou chak vèb pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Look", display: "Look at this!" },
      { chipLabel: "See", display: "I see a bird." },
      { chipLabel: "Watch", display: "I watch movies on Fridays." },
    ],
    vocabulary: [
      {
        word: "Look",
        ipa: "/lʊk/",
        kreyol: "Dirije zye w",
        example: "Look at this!",
      },
      { word: "See", ipa: "/siː/", kreyol: "Wè", example: "I see a bird." },
      {
        word: "Watch",
        ipa: "/wɒtʃ/",
        kreyol: "Gade atantivman",
        example: "I watch movies.",
      },
      {
        word: "Bird",
        ipa: "/bɜːrd/",
        kreyol: "Zwazo",
        example: "I see a bird.",
      },
      {
        word: "Movie",
        ipa: "/ˈmuːvi/",
        kreyol: "Fim",
        example: "I watch a movie.",
      },
    ],
    pronunciationWord: "Watch",
    pronunciationIpa: "/wɒtʃ/",
    mouthTip: "**Ti konsèy pou bouch ou:** son “ch” klè nan fen mo a.",
    pronunciationMistake:
      "**Erè komen:** pa di “I look TV” — itilize “watch” pou televizyon ak fim.",
    mistakeWrong: "I look TV every night.",
    mistakeCorrect: "I watch TV every night.",
    mistakeWhy:
      "**Poukisa:** “Watch” itilize pou yon bagay w ap gade atantivman pandan yon tan (TV, movies, sports). “Look” se yon dirèksyon zye kout.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I look TV every night.",
        "I watch TV every night.",
        "I see TV every night.",
        "I looking TV every night.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — televizyon itilize “watch”.",
    },
    thinkEmoji: "👀",
    thinkPrompt: "Ekri twa fraz, chak youn ak look, see, oswa watch:",
    thinkPlaceholder: "Look at... I see... I watch...",
    aiPrompt:
      "Hi! Can you give me sentences with blanks and let me choose between look, see, and watch?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike look/see/watch.",
    missionTask: "🎯 Jodi a, ekri twa fraz ak look, see, ak watch.",
    recap: [
      { emoji: "👀", text: "“Look” dirije atansyon zye w." },
      { emoji: "🐦", text: "“See” wè san w pa eseye." },
      { emoji: "🎬", text: "“Watch” gade atantivman (TV, fim)." },
      { emoji: "🎯", text: "Misyon: ekri twa fraz ak look/see/watch." },
    ],
  },
  {
    slug: "say-tell-speak-talk",
    moduleTitle: "Modil 10: Anglè Konfizyon",
    illustrationKey: "emoji",
    heroEmoji: "🗣️",
    heroTitle: "Say, Tell, Speak, ak Talk",
    heroLede: "Kat vèb pou kominike, chak youn ak yon règ presi.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab chwazi byen ant say, tell, speak, ak talk.",
    whatYouWillLearn:
      "règ chak vèb: say + pawòl, tell + moun, speak/talk + konvèsasyon",
    prerequisite: "Leson 4 — Look, See, ak Watch",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Tell” toujou swiv ak yon moun, “say” pa bezwen.",
    understandBody:
      "**She said hello.** (say + pawòl, san moun dirèkteman) **She told me a secret.** (tell + moun) **Do you speak English?** (speak + lang) **Let's talk.** (talk = konvèsasyon jeneral).",
    seeItInAction: [
      { line: "She said hello.", tag: "Say + pawòl", emoji: "💬" },
      { line: "She told me a secret.", tag: "Tell + moun", emoji: "🤫" },
      { line: "Do you speak English?", tag: "Speak + lang", emoji: "🗣️" },
    ],
    patternBuilderIntro: "Klike sou chak vèb pou wè règ li.",
    patternBuilderOptions: [
      { chipLabel: "Say", display: "She said hello." },
      { chipLabel: "Tell", display: "She told me a secret." },
      { chipLabel: "Speak", display: "Do you speak English?" },
    ],
    vocabulary: [
      {
        word: "Say",
        ipa: "/seɪ/",
        kreyol: "Di (pawòl)",
        example: "She said hello.",
      },
      {
        word: "Tell",
        ipa: "/tɛl/",
        kreyol: "Di (bay yon moun)",
        example: "She told me a secret.",
      },
      {
        word: "Speak",
        ipa: "/spiːk/",
        kreyol: "Pale (yon lang)",
        example: "Do you speak English?",
      },
      {
        word: "Talk",
        ipa: "/tɔːk/",
        kreyol: "Pale (konvèsasyon)",
        example: "Let's talk.",
      },
      {
        word: "Secret",
        ipa: "/ˈsiːkrɪt/",
        kreyol: "Sekrè",
        example: "She told me a secret.",
      },
    ],
    pronunciationWord: "Told",
    pronunciationIpa: "/toʊld/",
    mouthTip: "**Ti konsèy pou bouch ou:** son “oh” long, “tohld”.",
    pronunciationMistake:
      "**Erè komen:** pa di “She said me hello” — “say” pa pran yon moun dirèkteman apre li.",
    mistakeWrong: "She said me hello.",
    mistakeCorrect: "She told me hello. / She said hello to me.",
    mistakeWhy:
      "**Poukisa:** “Tell” pran yon moun dirèkteman apre li (tell me). “Say” bezwen “to” devan moun nan (say to me), oswa pa gen moun ditou.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "She said me a secret.",
        "She told me a secret.",
        "She talk me a secret.",
        "She speak me a secret.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “tell” pran yon moun dirèkteman.",
    },
    thinkEmoji: "🗣️",
    thinkPrompt: "Ekri kat fraz, chak youn ak say, tell, speak, oswa talk:",
    thinkPlaceholder: "She said... She told... I speak... Let's talk...",
    aiPrompt:
      "Hi! Can you give me sentences with blanks and let me choose between say, tell, speak, and talk?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike say/tell/speak/talk.",
    missionTask: "🎯 Jodi a, ekri kat fraz ak say, tell, speak, ak talk.",
    recap: [
      { emoji: "💬", text: "“Say” + pawòl (san moun dirèkteman)." },
      { emoji: "🤫", text: "“Tell” + moun dirèkteman." },
      { emoji: "🗣️", text: "“Speak”/“Talk” pou lang ak konvèsasyon." },
      { emoji: "🎯", text: "Misyon: ekri kat fraz ak kat vèb yo." },
    ],
  },
  {
    slug: "listen-vs-hear",
    moduleTitle: "Modil 10: Anglè Konfizyon",
    illustrationKey: "emoji",
    heroEmoji: "👂",
    heroTitle: "Listen kont Hear",
    heroLede: "“Hear” pase san eksprè, “listen” se yon chwa atansyon.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab chwazi byen ant listen ak hear.",
    whatYouWillLearn:
      "diferans ant “hear” (san eksprè) ak “listen” (chwa atansyon)",
    prerequisite: "Leson 5 — Say, Tell, Speak, ak Talk",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Hear” pase san w pa eseye, “listen” se yon chwa.",
    understandBody:
      "**I hear music outside.** (san w pa eseye, li rive nan zòrèy ou) **I listen to music every day.** (yon chwa, ak atansyon). Menm diferans ak look/see.",
    seeItInAction: [
      { line: "I hear music outside.", tag: "San eksprè", emoji: "👂" },
      {
        line: "I listen to music every day.",
        tag: "Chwa atansyon",
        emoji: "🎧",
      },
      { line: "Can you hear me?", tag: "Kesyon", emoji: "❓" },
    ],
    patternBuilderIntro: "Klike sou chak vèb pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Hear", display: "I hear music outside." },
      { chipLabel: "Listen", display: "I listen to music every day." },
      { chipLabel: "Question", display: "Can you hear me?" },
    ],
    vocabulary: [
      {
        word: "Hear",
        ipa: "/hɪər/",
        kreyol: "Tande (san eksprè)",
        example: "I hear music outside.",
      },
      {
        word: "Listen",
        ipa: "/ˈlɪsən/",
        kreyol: "Koute (ak atansyon)",
        example: "I listen to music.",
      },
      {
        word: "Outside",
        ipa: "/ˌaʊtˈsaɪd/",
        kreyol: "Deyò",
        example: "I hear music outside.",
      },
      {
        word: "Sound",
        ipa: "/saʊnd/",
        kreyol: "Son",
        example: "What is that sound?",
      },
      {
        word: "Quiet",
        ipa: "/ˈkwaɪət/",
        kreyol: "Kalm/San bri",
        example: "Please be quiet.",
      },
    ],
    pronunciationWord: "Hear",
    pronunciationIpa: "/hɪər/",
    mouthTip: "**Ti konsèy pou bouch ou:** “hear” ak “here” sonnen menm jan.",
    pronunciationMistake:
      "**Erè komen:** pa bliye “to” apre “listen” — “listen music” pa kòrèk.",
    mistakeWrong: "I hear to music every day.",
    mistakeCorrect: "I listen to music every day.",
    mistakeWhy:
      "**Poukisa:** Lè se yon chwa ak atansyon (ekout mizik espre), itilize “listen to”. “Hear” pa bezwen “to” epi li pou son ki rive san w pa eseye.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou yon aktivite ou chwazi fè:",
      options: [
        "I hear to music every day.",
        "I listen to music every day.",
        "I hear music every day. (chwa)",
        "I listen music every day.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — yon chwa ak atansyon se “listen to”.",
    },
    thinkEmoji: "👂",
    thinkPrompt: "Ekri yon fraz ak “hear” epi yon lòt ak “listen”:",
    thinkPlaceholder: "I hear... / I listen to...",
    aiPrompt:
      "Hi! Can you give me sentences with blanks and let me choose between hear and listen?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike listen/hear.",
    missionTask: "🎯 Jodi a, ekri yon fraz ak “hear” epi yon lòt ak “listen”.",
    recap: [
      { emoji: "👂", text: "“Hear” pase san w pa eseye." },
      { emoji: "🎧", text: "“Listen to” se yon chwa ak atansyon." },
      { emoji: "⚠️", text: "“Listen” toujou pran “to”." },
      { emoji: "🎯", text: "Misyon: ekri de fraz ak hear/listen." },
    ],
  },
  {
    slug: "much-many-few-little",
    moduleTitle: "Modil 10: Anglè Konfizyon",
    illustrationKey: "emoji",
    heroEmoji: "🔢",
    heroTitle: "Much, Many, Few, ak Little",
    heroLede: "Konte oswa pa konte detèmine ki mo pou itilize.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab chwazi byen ant much/many ak few/little.",
    whatYouWillLearn:
      "kilè pou itilize many/few (konte) ak much/little (pa konte)",
    prerequisite: "Leson 6 — Listen kont Hear",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Konte oswa pa konte detèmine ki mo pou itilize.",
    understandBody:
      "**How many books?** (konte) **How much water?** (pa konte). **A few friends** (kèk, konte). **A little water** (yon ti kras, pa konte).",
    seeItInAction: [
      { line: "How many books do you have?", tag: "Konte (many)", emoji: "📚" },
      {
        line: "How much water do you need?",
        tag: "Pa konte (much)",
        emoji: "💧",
      },
      { line: "I have a few friends.", tag: "Kèk, konte (few)", emoji: "👫" },
    ],
    patternBuilderIntro: "Klike sou chak mo pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Many", display: "How many books do you have?" },
      { chipLabel: "Much", display: "How much water do you need?" },
      { chipLabel: "Few", display: "I have a few friends." },
    ],
    vocabulary: [
      {
        word: "Many",
        ipa: "/ˈmɛni/",
        kreyol: "Anpil (konte)",
        example: "How many books?",
      },
      {
        word: "Much",
        ipa: "/mʌtʃ/",
        kreyol: "Anpil (pa konte)",
        example: "How much water?",
      },
      {
        word: "Few",
        ipa: "/fjuː/",
        kreyol: "Kèk (konte)",
        example: "A few friends.",
      },
      {
        word: "Little",
        ipa: "/ˈlɪtəl/",
        kreyol: "Yon ti kras (pa konte)",
        example: "A little water.",
      },
      {
        word: "Countable",
        ipa: "/ˈkaʊntəbəl/",
        kreyol: "Ou ka konte l",
        example: "Books are countable.",
      },
    ],
    pronunciationWord: "Little",
    pronunciationIpa: "/ˈlɪtəl/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “LIT-uhl”.",
    pronunciationMistake:
      "**Erè komen:** pa di “a little friends” — “friends” konte, itilize “a few”.",
    mistakeWrong: "I have a little friends.",
    mistakeCorrect: "I have a few friends.",
    mistakeWhy:
      "**Poukisa:** “Friends” se yon bagay ou ka konte (one friend, two friends), kidonk “a few”, pa “a little” ki se pou bagay ou pa ka konte.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I have a little friends.",
        "I have a few friends.",
        "I have much friends.",
        "I have many water.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “friends” konte.",
    },
    thinkEmoji: "🔢",
    thinkPrompt: "Ekri kat fraz, chak youn ak many, much, few, oswa little:",
    thinkPlaceholder: "How many...? How much...? A few... A little...",
    aiPrompt:
      "Hi! Can you give me sentences with blanks and let me choose between many, much, few, and little?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike much/many/few/little.",
    missionTask:
      "🎯 Jodi a, ekri de fraz — youn ak yon bagay ou ka konte, youn ak yon bagay ou pa ka konte.",
    recap: [
      { emoji: "📚", text: "“Many”/“Few” pou bagay ou ka konte." },
      { emoji: "💧", text: "“Much”/“Little” pou bagay ou pa ka konte." },
      { emoji: "⚠️", text: "“Friends” konte, “water” pa konte." },
      { emoji: "🎯", text: "Misyon: ekri de fraz ak mo kantite yo." },
    ],
  },
  {
    slug: "borrow-lend-bring-take",
    moduleTitle: "Modil 10: Anglè Konfizyon",
    illustrationKey: "emoji",
    heroEmoji: "🤝",
    heroTitle: "Borrow/Lend, Bring/Take",
    heroLede: "Direksyon yon echanj detèmine ki vèb pou itilize.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab chwazi byen ant borrow/lend ak bring/take.",
    whatYouWillLearn:
      "direksyon echanj: borrow (resevwa), lend (bay), bring (pote vin), take (pote ale)",
    prerequisite: "Leson 7 — Much, Many, Few, ak Little",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Direksyon an fè diferans ant chak pè vèb sa yo.",
    understandBody:
      "**Can I borrow your pen?** (mwen resevwa) **I can lend you my pen.** (mwen bay). Menm lojik ak bring (pote vin) ak take (pote ale) nou wè nan Modil 7.",
    seeItInAction: [
      { line: "Can I borrow your pen?", tag: "Ou resevwa", emoji: "🖊️" },
      { line: "I can lend you my pen.", tag: "Ou bay", emoji: "🤝" },
      { line: "Bring your book to class.", tag: "Pote vin isit", emoji: "📚" },
    ],
    patternBuilderIntro: "Klike sou chak direksyon pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Borrow", display: "Can I borrow your pen?" },
      { chipLabel: "Lend", display: "I can lend you my pen." },
      { chipLabel: "Bring", display: "Bring your book to class." },
    ],
    vocabulary: [
      {
        word: "Borrow",
        ipa: "/ˈbɒroʊ/",
        kreyol: "Prete (resevwa)",
        example: "Can I borrow your pen?",
      },
      {
        word: "Lend",
        ipa: "/lɛnd/",
        kreyol: "Prete (bay)",
        example: "I can lend you my pen.",
      },
      {
        word: "Bring",
        ipa: "/brɪŋ/",
        kreyol: "Pote (vin isit)",
        example: "Bring your book.",
      },
      {
        word: "Take",
        ipa: "/teɪk/",
        kreyol: "Pote (ale lòt kote)",
        example: "Take your umbrella.",
      },
      {
        word: "Pen",
        ipa: "/pɛn/",
        kreyol: "Plim",
        example: "Can I borrow your pen?",
      },
    ],
    pronunciationWord: "Borrow",
    pronunciationIpa: "/ˈbɒroʊ/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “BOR-oh”.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “borrow” (ou resevwa) ak “lend” (ou bay) — yo se opoze.",
    mistakeWrong: "Can I lend your pen? (lè w vle pran li)",
    mistakeCorrect: "Can I borrow your pen?",
    mistakeWhy:
      "**Poukisa:** Lè OU vle pran yon bagay pou yon ti tan, se “borrow”. Lè OU bay yon bagay bay yon moun, se “lend”.",
    practice: {
      prompt: "Ou vle pran plim zanmi w pou yon ti tan. Ki fraz ki kòrèk?",
      options: [
        "Can I lend your pen?",
        "Can I borrow your pen?",
        "Can I take your pen forever?",
        "Can I bring your pen?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — ou vle RESEVWA, se “borrow”.",
    },
    thinkEmoji: "🤝",
    thinkPrompt: "Ekri yon fraz ak “borrow” epi yon lòt ak “lend”:",
    thinkPlaceholder: "Can I borrow...? / I can lend...",
    aiPrompt:
      "Hi! Can you give me situations and let me choose between borrow, lend, bring, and take?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike borrow/lend/bring/take.",
    missionTask: "🎯 Jodi a, ekri yon fraz ak “borrow” epi yon lòt ak “lend”.",
    recap: [
      { emoji: "🖊️", text: "“Borrow” — ou resevwa pou yon ti tan." },
      { emoji: "🤝", text: "“Lend” — ou bay pou yon ti tan." },
      { emoji: "📚", text: "“Bring” vin vè, “take” ale lwen." },
      { emoji: "🎯", text: "Misyon: ekri de fraz ak borrow/lend." },
    ],
  },
  {
    slug: "teach-learn-job-work",
    moduleTitle: "Modil 10: Anglè Konfizyon",
    illustrationKey: "emoji",
    heroEmoji: "👩‍🏫",
    heroTitle: "Teach/Learn, Job/Work",
    heroLede:
      "Direksyon konesans (teach/learn) ak konte oswa pa konte (job/work).",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab chwazi byen ant teach/learn ak job/work.",
    whatYouWillLearn:
      "diferans ant teach/learn (direksyon konesans) ak job/work (konte/pa konte)",
    prerequisite: "Leson 8 — Borrow/Lend, Bring/Take",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Teach” bay konesans, “learn” resevwa li.",
    understandBody:
      "**She teaches English.** (bay konesans) **I learn English.** (resevwa konesans). Menm jan an, **a job** se yon travay presi ou ka konte (a new job), men **work** se aktivite jeneral, pa konte.",
    seeItInAction: [
      { line: "She teaches English.", tag: "Bay konesans", emoji: "👩‍🏫" },
      { line: "I learn English.", tag: "Resevwa konesans", emoji: "📖" },
      { line: "I have a new job.", tag: "Job (konte)", emoji: "💼" },
    ],
    patternBuilderIntro: "Klike sou chak vèb pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Teach", display: "She teaches English." },
      { chipLabel: "Learn", display: "I learn English." },
      { chipLabel: "Job", display: "I have a new job." },
    ],
    vocabulary: [
      {
        word: "Teach",
        ipa: "/tiːtʃ/",
        kreyol: "Anseye",
        example: "She teaches English.",
      },
      {
        word: "Learn",
        ipa: "/lɜːrn/",
        kreyol: "Aprann",
        example: "I learn English.",
      },
      {
        word: "Job",
        ipa: "/dʒɒb/",
        kreyol: "Travay (yon pòs presi)",
        example: "I have a new job.",
      },
      {
        word: "Work",
        ipa: "/wɜːrk/",
        kreyol: "Travay (jeneral)",
        example: "I go to work.",
      },
      {
        word: "Teacher",
        ipa: "/ˈtiːtʃər/",
        kreyol: "Pwofesè",
        example: "She is a teacher.",
      },
    ],
    pronunciationWord: "Teach",
    pronunciationIpa: "/tiːtʃ/",
    mouthTip: "**Ti konsèy pou bouch ou:** son “ee” long, “teetch”.",
    pronunciationMistake:
      "**Erè komen:** pa di “She learns me English” — moun ki BAY konesans se “teach”.",
    mistakeWrong: "She learns me English.",
    mistakeCorrect: "She teaches me English.",
    mistakeWhy:
      "**Poukisa:** Pwofesè a BAY konesans, kidonk “teach”. Elèv la RESEVWA konesans, kidonk “learn”. De direksyon opoze.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou yon pwofesè:",
      options: [
        "She learns English to students.",
        "She teaches English to students.",
        "She works English to students.",
        "She jobs English to students.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — pwofesè a BAY konesans.",
    },
    thinkEmoji: "👩‍🏫",
    thinkPrompt: "Ekri yon fraz ak “teach” epi yon lòt ak “learn”:",
    thinkPlaceholder: "I teach... / I learn...",
    aiPrompt:
      "Hi! Can you give me sentences with blanks and let me choose between teach, learn, job, and work?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike teach/learn/job/work.",
    missionTask: "🎯 Jodi a, ekri yon fraz ak “teach” epi yon lòt ak “learn”.",
    recap: [
      { emoji: "👩‍🏫", text: "“Teach” bay konesans." },
      { emoji: "📖", text: "“Learn” resevwa konesans." },
      { emoji: "💼", text: "“Job” konte, “work” pa konte." },
      { emoji: "🎯", text: "Misyon: ekri de fraz ak teach/learn." },
    ],
  },
  {
    slug: "confusing-english-mission",
    moduleTitle: "Modil 10: Anglè Konfizyon",
    illustrationKey: "emoji",
    heroEmoji: "🎯",
    heroTitle: "Fè Diferans Lan",
    heroLede:
      "Se lè a pou konbine tout mo konfizyon Modil 10 yo pou pale ak ekri kòrèkteman.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize plizyè pè mo konfizyon kòrèkteman nan yon sèl konvèsasyon.",
    whatYouWillLearn: "kijan pou konbine tout mo konfizyon Modil 10 kòrèkteman",
    prerequisite: "Leson 9 — Teach/Learn, Job/Work",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Konnen diferans lan se sa ki fè Anglè ou sonnen kòrèk.",
    understandBody:
      "**You're right, your book is there, not their book.** Fraz sa a sèl itilize kat nan mo konfizyon Modil 10 yo, kòrèkteman. Se egzakteman sa Modil 10 prepare w pou fè.",
    seeItInAction: [
      {
        line: "You're right, your book is there, not their book.",
        tag: "Konbine",
        emoji: "📚",
      },
      {
        line: "I listen to music, then I watch TV.",
        tag: "Konbine",
        emoji: "🎧",
      },
      {
        line: "She teaches me a few things about her job.",
        tag: "Konbine",
        emoji: "💼",
      },
    ],
    patternBuilderIntro: "Klike sou chak fraz konbine pou wè li.",
    patternBuilderOptions: [
      {
        chipLabel: "Apostrophes",
        display: "You're right, your book is there.",
      },
      {
        chipLabel: "Then/Listen",
        display: "I listen to music, then I watch TV.",
      },
      {
        chipLabel: "Teach/Few/Job",
        display: "She teaches me a few things about her job.",
      },
    ],
    vocabulary: [
      {
        word: "Correct",
        ipa: "/kəˈrɛkt/",
        kreyol: "Kòrèk",
        example: "That sentence is correct.",
      },
      {
        word: "Mistake",
        ipa: "/mɪˈsteɪk/",
        kreyol: "Erè",
        example: "That was a small mistake.",
      },
      {
        word: "Difference",
        ipa: "/ˈdɪfərəns/",
        kreyol: "Diferans",
        example: "Do you know the difference?",
      },
      {
        word: "Careful",
        ipa: "/ˈkɛərfəl/",
        kreyol: "Atansyone",
        example: "Be careful with these words.",
      },
      {
        word: "Practice",
        ipa: "/ˈpræktɪs/",
        kreyol: "Pratike",
        example: "Practice makes it easier.",
      },
    ],
    pronunciationWord: "Difference",
    pronunciationIpa: "/ˈdɪfərəns/",
    mouthTip: "**Ti konsèy pou bouch ou:** twa silab, “DIF-rəns”.",
    pronunciationMistake:
      "**Erè komen:** pa gen wont fè erè ak mo konfizyon sa yo — menm moun ki pale Anglè natifnatal konn mele yo pafwa.",
    mistakeWrong: "(Ou evite pale paske ou pè fè yon erè)",
    mistakeCorrect: "You practice, and little by little, it becomes easier.",
    mistakeWhy:
      "**Poukisa:** Pi bon pou eseye ak fè erè pase pou pa pale ditou. Chak pratike fè w pi alèz ak mo konfizyon sa yo.",
    practice: {
      prompt: "Chwazi fraz ki byen konstwi:",
      options: [
        "Your right, they're book is there.",
        "You're right, their book is there.",
        "You're right, there book is their.",
        "Your right, there book is they're.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — gade chak mo pre pre.",
    },
    thinkEmoji: "🎯",
    thinkPrompt: "Ekri yon ti paragraf ak omwen kat pè mo konfizyon Modil 10:",
    thinkPlaceholder: "You're... your... then... than...",
    aiPrompt:
      "Hi! Can you write a short paragraph using several confusing word pairs (your/you're, then/than, few/little, etc.) with some mistakes, and let me find and fix them?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 10 ansanm.",
    missionTask:
      "🎯 Jodi a, ekri yon ti paragraf ki itilize omwen kat pè mo konfizyon Modil 10, kòrèkteman.",
    recap: [
      { emoji: "🎯", text: "Konnen diferans lan fè Anglè ou sonnen kòrèk." },
      { emoji: "💪", text: "Pratike fè mo konfizyon yo vin fasil." },
      { emoji: "🎓", text: "Ou fini Modil 10 — Anglè Konfizyon!" },
      {
        emoji: "🎯",
        text: "Misyon: ekri yon paragraf ak kat pè mo konfizyon.",
      },
    ],
  },
  {
    slug: "look-up-for-after",
    moduleTitle: "Modil 11: Vèb Fraz Yo",
    illustrationKey: "emoji",
    heroEmoji: "🔍",
    heroTitle: "Look Up, Look For, Look After",
    heroLede:
      "“Look” ka chanje sans konplètman lè w ajoute yon ti mo apre li — up, for, oswa after.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize look up, look for, ak look after kòrèkteman.",
    whatYouWillLearn: "twa sans diferan pou “look” + yon ti mo",
    prerequisite: "Ou fin Modil 10 — Anglè Konfizyon",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Yon vèb fraz se de mo ki kreye yon nouvo sans ansanm.",
    understandBody:
      "**Look up** = chèche enfòmasyon. **Look for** = chèche yon bagay ou pèdi. **Look after** = pran swen yon moun. Menm vèb “look”, twa sans totalman diferan.",
    seeItInAction: [
      {
        line: "I look up the word in the dictionary.",
        tag: "Chèche enfòmasyon",
        emoji: "📖",
      },
      {
        line: "I'm looking for my keys.",
        tag: "Chèche yon bagay",
        emoji: "🔑",
      },
      {
        line: "She looks after her little brother.",
        tag: "Pran swen",
        emoji: "👶",
      },
    ],
    patternBuilderIntro: "Klike sou chak vèb fraz pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Look up", display: "I look up the word." },
      { chipLabel: "Look for", display: "I'm looking for my keys." },
      { chipLabel: "Look after", display: "She looks after her brother." },
    ],
    vocabulary: [
      {
        word: "Look up",
        ipa: "/lʊk ʌp/",
        kreyol: "Chèche enfòmasyon",
        example: "I look up the word.",
      },
      {
        word: "Look for",
        ipa: "/lʊk fɔːr/",
        kreyol: "Chèche yon bagay",
        example: "I'm looking for my keys.",
      },
      {
        word: "Look after",
        ipa: "/lʊk ˈæftər/",
        kreyol: "Pran swen",
        example: "She looks after her brother.",
      },
      {
        word: "Dictionary",
        ipa: "/ˈdɪkʃəneri/",
        kreyol: "Diksyonè",
        example: "I look up the word in the dictionary.",
      },
      {
        word: "Keys",
        ipa: "/kiːz/",
        kreyol: "Kle",
        example: "I'm looking for my keys.",
      },
    ],
    pronunciationWord: "Dictionary",
    pronunciationIpa: "/ˈdɪkʃəneri/",
    mouthTip: "**Ti konsèy pou bouch ou:** kat silab, “DIK-shuh-nair-ee”.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “look for” (chèche) ak “look at” (gade) — se de bagay diferan.",
    mistakeWrong: "I'm looking at my keys. (lè ou chèche yo)",
    mistakeCorrect: "I'm looking for my keys.",
    mistakeWhy:
      "**Poukisa:** “Look at” montre ou ap gade yon bagay ou wè deja. “Look for” montre ou ap chèche yon bagay ou pa jwenn.",
    practice: {
      prompt: "Chwazi vèb fraz ki kòrèk pou pran swen yon timoun:",
      options: [
        "Look up the child.",
        "Look for the child.",
        "Look after the child.",
        "Look at the child.",
      ],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — pran swen se “look after”.",
    },
    thinkEmoji: "🔍",
    thinkPrompt:
      "Ekri twa fraz, chak youn ak look up, look for, oswa look after:",
    thinkPlaceholder: "I look up... I'm looking for... She looks after...",
    aiPrompt:
      "Hi! Can you give me situations and let me choose between look up, look for, and look after?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike look up/for/after.",
    missionTask:
      "🎯 Jodi a, itilize youn nan twa vèb fraz sa yo (look up/for/after) nan yon fraz reyèl.",
    recap: [
      { emoji: "📖", text: "“Look up” chèche enfòmasyon." },
      { emoji: "🔑", text: "“Look for” chèche yon bagay pèdi." },
      { emoji: "👶", text: "“Look after” pran swen yon moun." },
      { emoji: "🎯", text: "Misyon: itilize youn nan twa vèb fraz yo." },
    ],
  },
  {
    slug: "get-up-out-in",
    moduleTitle: "Modil 11: Vèb Fraz Yo",
    illustrationKey: "emoji",
    heroEmoji: "⏰",
    heroTitle: "Get Up, Get Out, Get In",
    heroLede: "“Get” + yon ti mo montre yon mouvman presi.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize get up, get out, ak get in kòrèkteman.",
    whatYouWillLearn: "twa mouvman diferan ak “get” + yon ti mo",
    prerequisite: "Leson 1 — Look Up, Look For, Look After",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Get” + yon ti mo montre yon mouvman presi.",
    understandBody:
      "**Get up** = leve (kite kabann). **Get out** = soti. **Get in** = antre (souvan nan yon machin). Twa mouvman diferan ak menm vèb “get”.",
    seeItInAction: [
      { line: "I get up at 6 every day.", tag: "Leve", emoji: "⏰" },
      { line: "Get out of the car.", tag: "Soti", emoji: "🚗" },
      { line: "Get in, we're leaving!", tag: "Antre", emoji: "🚪" },
    ],
    patternBuilderIntro: "Klike sou chak mouvman pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Get up", display: "I get up at 6." },
      { chipLabel: "Get out", display: "Get out of the car." },
      { chipLabel: "Get in", display: "Get in, we're leaving!" },
    ],
    vocabulary: [
      {
        word: "Get up",
        ipa: "/gɛt ʌp/",
        kreyol: "Leve",
        example: "I get up at 6.",
      },
      {
        word: "Get out",
        ipa: "/gɛt aʊt/",
        kreyol: "Soti",
        example: "Get out of the car.",
      },
      {
        word: "Get in",
        ipa: "/gɛt ɪn/",
        kreyol: "Antre",
        example: "Get in, we're leaving!",
      },
      {
        word: "Car",
        ipa: "/kɑːr/",
        kreyol: "Machin",
        example: "Get out of the car.",
      },
      {
        word: "Leaving",
        ipa: "/ˈliːvɪŋ/",
        kreyol: "K ap kite",
        example: "We're leaving!",
      },
    ],
    pronunciationWord: "Get up",
    pronunciationIpa: "/gɛt ʌp/",
    mouthTip: "**Ti konsèy pou bouch ou:** de mo klè, “get” epi “up”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I wake up” pou “kite kabann” — “wake up” se je ou louvri, “get up” se ou kanpe.",
    mistakeWrong: "I wake up and go to work immediately.",
    mistakeCorrect: "I wake up, then I get up and go to work.",
    mistakeWhy:
      "**Poukisa:** “Wake up” se lè je ou louvri. “Get up” se lè ou kanpe soti nan kabann nan — de etap diferan, souvan youn apre lòt.",
    practice: {
      prompt: "Chwazi vèb fraz ki kòrèk pou lè ou ap monte nan yon machin:",
      options: [
        "Get up the car.",
        "Get out the car.",
        "Get in the car.",
        "Get after the car.",
      ],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — antre nan machin se “get in”.",
    },
    thinkEmoji: "⏰",
    thinkPrompt: "Ekri twa fraz, chak youn ak get up, get out, oswa get in:",
    thinkPlaceholder: "I get up... Get out... Get in...",
    aiPrompt:
      "Hi! Can you give me situations and let me choose between get up, get out, and get in?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike get up/out/in.",
    missionTask: "🎯 Jodi a, di ki lè ou leve (get up) chak maten.",
    recap: [
      { emoji: "⏰", text: "“Get up” leve, kite kabann." },
      { emoji: "🚗", text: "“Get out” soti, “get in” antre." },
      { emoji: "⚠️", text: "“Wake up” ≠ “get up”." },
      { emoji: "🎯", text: "Misyon: di ki lè ou leve chak maten." },
    ],
  },
  {
    slug: "put-on-away",
    moduleTitle: "Modil 11: Vèb Fraz Yo",
    illustrationKey: "emoji",
    heroEmoji: "👟",
    heroTitle: "Put On, Put Away",
    heroLede:
      "“Put on” mete yon rad sou ou, “put away” mete yon bagay nan plas li.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize put on ak put away kòrèkteman.",
    whatYouWillLearn:
      "diferans ant “put on” (mete sou ou) ak “put away” (mete nan plas li)",
    prerequisite: "Leson 2 — Get Up, Get Out, Get In",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“Put on” mete yon rad sou ou, “put away” mete yon bagay nan plas li.",
    understandBody:
      "**I put on my shoes.** (rad sou kò w) **Put away your toys, please.** (mete yon bagay tounen nan plas li). De sans diferan pou “put” selon ti mo apre l.",
    seeItInAction: [
      { line: "I put on my shoes.", tag: "Mete sou ou", emoji: "👟" },
      {
        line: "Put away your toys, please.",
        tag: "Mete nan plas li",
        emoji: "🧸",
      },
      {
        line: "She puts on her jacket every morning.",
        tag: "Woutin",
        emoji: "🧥",
      },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Put on", display: "I put on my shoes." },
      { chipLabel: "Put away", display: "Put away your toys." },
      {
        chipLabel: "Routine",
        display: "She puts on her jacket every morning.",
      },
    ],
    vocabulary: [
      {
        word: "Put on",
        ipa: "/pʊt ɒn/",
        kreyol: "Mete sou ou",
        example: "I put on my shoes.",
      },
      {
        word: "Put away",
        ipa: "/pʊt əˈweɪ/",
        kreyol: "Mete nan plas li",
        example: "Put away your toys.",
      },
      {
        word: "Shoes",
        ipa: "/ʃuːz/",
        kreyol: "Soulye",
        example: "I put on my shoes.",
      },
      {
        word: "Toys",
        ipa: "/tɔɪz/",
        kreyol: "Jwèt",
        example: "Put away your toys.",
      },
      {
        word: "Jacket",
        ipa: "/ˈdʒækɪt/",
        kreyol: "Vès",
        example: "She puts on her jacket.",
      },
    ],
    pronunciationWord: "Jacket",
    pronunciationIpa: "/ˈdʒækɪt/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “JAK-it”.",
    pronunciationMistake:
      "**Erè komen:** pa di “put away my shoes” lè w ap abiye w — se “put on”.",
    mistakeWrong: "I put away my shoes. (lè w ap mete yo nan pye w)",
    mistakeCorrect: "I put on my shoes.",
    mistakeWhy:
      "**Poukisa:** “Put on” se mete yon rad SOU KÒ W. “Put away” se mete yon bagay nan plas li, tankou nan yon bwat oswa yon amwa.",
    practice: {
      prompt: "Ou fin jwe, kounye a ou bezwen renmè jwèt yo. Ki fraz ki kòrèk?",
      options: [
        "Put on your toys.",
        "Put away your toys.",
        "Put in your toys.",
        "Put up your toys.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback:
        "❌ Eseye ankò — remèt yon bagay nan plas li se “put away”.",
    },
    thinkEmoji: "👟",
    thinkPrompt: "Ekri yon fraz ak “put on” epi yon lòt ak “put away”:",
    thinkPlaceholder: "I put on... / Put away...",
    aiPrompt:
      "Hi! Can you give me situations and let me choose between put on and put away?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike put on/away.",
    missionTask: "🎯 Jodi a, di yon bagay ou mete sou ou (put on) chak maten.",
    recap: [
      { emoji: "👟", text: "“Put on” mete yon rad sou kò w." },
      { emoji: "🧸", text: "“Put away” mete yon bagay tounen nan plas li." },
      { emoji: "🧥", text: "She puts on her jacket every morning." },
      { emoji: "🎯", text: "Misyon: di sa ou mete sou ou chak maten." },
    ],
  },
  {
    slug: "come-back-go-out",
    moduleTitle: "Modil 11: Vèb Fraz Yo",
    illustrationKey: "emoji",
    heroEmoji: "🌃",
    heroTitle: "Come Back, Go Out",
    heroLede: "“Come back” retounen, “go out” sòti.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize come back ak go out kòrèkteman.",
    whatYouWillLearn: "diferans ant “come back” (retounen) ak “go out” (sòti)",
    prerequisite: "Leson 3 — Put On, Put Away",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“Come back” retounen vè kote ou ye, “go out” sòti kite li.",
    understandBody:
      "**I'll come back later.** (retounen vin isit) **We're going out tonight.** (sòti kite kay la). Menm lojik direksyon ak “come”/“go” nou wè nan Modil 6.",
    seeItInAction: [
      { line: "I'll come back later.", tag: "Retounen", emoji: "🔙" },
      { line: "We're going out tonight.", tag: "Sòti", emoji: "🌃" },
      { line: "What time will you come back?", tag: "Kesyon", emoji: "⏰" },
    ],
    patternBuilderIntro: "Klike sou chak direksyon pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Come back", display: "I'll come back later." },
      { chipLabel: "Go out", display: "We're going out tonight." },
      { chipLabel: "Question", display: "What time will you come back?" },
    ],
    vocabulary: [
      {
        word: "Come back",
        ipa: "/kʌm bæk/",
        kreyol: "Retounen",
        example: "I'll come back later.",
      },
      {
        word: "Go out",
        ipa: "/goʊ aʊt/",
        kreyol: "Sòti",
        example: "We're going out tonight.",
      },
      {
        word: "Later",
        ipa: "/ˈleɪtər/",
        kreyol: "Pita",
        example: "I'll come back later.",
      },
      {
        word: "Tonight",
        ipa: "/təˈnaɪt/",
        kreyol: "Aswè a",
        example: "We're going out tonight.",
      },
      {
        word: "Time",
        ipa: "/taɪm/",
        kreyol: "Lè/Tan",
        example: "What time will you come back?",
      },
    ],
    pronunciationWord: "Come back",
    pronunciationIpa: "/kʌm bæk/",
    mouthTip: "**Ti konsèy pou bouch ou:** de mo klè, aksan an sou “come”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I'll go back” lè ou vle di ou ap retounen vè moun k ap pale a — se “come back”.",
    mistakeWrong: "I'll go back later. (lè w ap pale ak moun ki kay la)",
    mistakeCorrect: "I'll come back later.",
    mistakeWhy:
      "**Poukisa:** Menm règ ak come/go — “come back” vin vè kote moun k ap pale a ye, “go back” ta ale yon lòt kote.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou di w ap sòti kay la aswè a:",
      options: [
        "We're coming out tonight.",
        "We're going out tonight.",
        "We're coming back tonight.",
        "We're going back tonight.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — sòti kite kay la se “go out”.",
    },
    thinkEmoji: "🌃",
    thinkPrompt: "Ekri yon fraz ak “come back” epi yon lòt ak “go out”:",
    thinkPlaceholder: "I'll come back... / We're going out...",
    aiPrompt:
      "Hi! Can you ask me when I'll come back and if I'm going out this week, so I can practice these phrasal verbs?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike come back/go out.",
    missionTask:
      "🎯 Jodi a, di ki lè ou pral retounen (come back) yon kote, oswa si ou pral sòti (go out).",
    recap: [
      { emoji: "🔙", text: "“Come back” retounen vè kote ou ye." },
      { emoji: "🌃", text: "“Go out” sòti kite yon kote." },
      { emoji: "⏰", text: "What time will you come back?" },
      { emoji: "🎯", text: "Misyon: di ki lè ou ap retounen oswa sòti." },
    ],
  },
  {
    slug: "turn-on-off",
    moduleTitle: "Modil 11: Vèb Fraz Yo",
    illustrationKey: "emoji",
    heroEmoji: "💡",
    heroTitle: "Turn On, Turn Off",
    heroLede: "“Turn on” limen/ouvri, “turn off” etenn/fèmen yon aparèy.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize turn on ak turn off kòrèkteman.",
    whatYouWillLearn: "kijan pou itilize “turn on”/“turn off” ak aparèy",
    prerequisite: "Leson 4 — Come Back, Go Out",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Turn on” limen, “turn off” etenn yon aparèy.",
    understandBody:
      "**Turn on the light, please.** **Turn off the TV before you sleep.** “Turn on”/“turn off” itilize ak limyè, aparèy elektwonik, ak machin.",
    seeItInAction: [
      { line: "Turn on the light, please.", tag: "Limen", emoji: "💡" },
      { line: "Turn off the TV before you sleep.", tag: "Etenn", emoji: "📺" },
      { line: "Can you turn on the music?", tag: "Ouvri", emoji: "🎵" },
    ],
    patternBuilderIntro: "Klike sou chak aparèy pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Light", display: "Turn on the light, please." },
      { chipLabel: "TV", display: "Turn off the TV before you sleep." },
      { chipLabel: "Music", display: "Can you turn on the music?" },
    ],
    vocabulary: [
      {
        word: "Turn on",
        ipa: "/tɜːrn ɒn/",
        kreyol: "Limen/Ouvri",
        example: "Turn on the light.",
      },
      {
        word: "Turn off",
        ipa: "/tɜːrn ɒf/",
        kreyol: "Etenn/Fèmen",
        example: "Turn off the TV.",
      },
      {
        word: "Light",
        ipa: "/laɪt/",
        kreyol: "Limyè",
        example: "Turn on the light.",
      },
      {
        word: "TV",
        ipa: "/ˌtiː ˈviː/",
        kreyol: "Televizyon",
        example: "Turn off the TV.",
      },
      {
        word: "Music",
        ipa: "/ˈmjuːzɪk/",
        kreyol: "Mizik",
        example: "Can you turn on the music?",
      },
    ],
    pronunciationWord: "Turn off",
    pronunciationIpa: "/tɜːrn ɒf/",
    mouthTip: "**Ti konsèy pou bouch ou:** “turn” gen yon son “ur” fèmen.",
    pronunciationMistake:
      "**Erè komen:** pa di “close the light” — an Anglè, se “turn off the light”, pa “close”.",
    mistakeWrong: "Close the light, please.",
    mistakeCorrect: "Turn off the light, please.",
    mistakeWhy:
      "**Poukisa:** An Anglè, “close” se pou pòt ak fenèt. Pou limyè ak aparèy elektwonik, itilize “turn off”/“turn on”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou etenn televizyon an:",
      options: [
        "Close the TV.",
        "Turn off the TV.",
        "Put away the TV.",
        "Look after the TV.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — etenn yon aparèy se “turn off”.",
    },
    thinkEmoji: "💡",
    thinkPrompt: "Ekri yon fraz ak “turn on” epi yon lòt ak “turn off”:",
    thinkPlaceholder: "Turn on... / Turn off...",
    aiPrompt:
      "Hi! Can you give me situations with devices and let me practice using turn on and turn off?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike turn on/off.",
    missionTask:
      "🎯 Jodi a, di yon aparèy ou limen (turn on) oswa etenn (turn off) chak jou.",
    recap: [
      { emoji: "💡", text: "“Turn on” limen yon aparèy." },
      { emoji: "📺", text: "“Turn off” etenn yon aparèy." },
      { emoji: "⚠️", text: "Pa itilize “close” pou limyè ak aparèy." },
      { emoji: "🎯", text: "Misyon: di yon aparèy ou limen oswa etenn." },
    ],
  },
  {
    slug: "phrasal-verbs-mission",
    moduleTitle: "Modil 11: Vèb Fraz Yo",
    illustrationKey: "emoji",
    heroEmoji: "🧩",
    heroTitle: "Vèb Fraz Nan Aksyon",
    heroLede:
      "Se lè a pou konbine plizyè vèb fraz Modil 11 pou rakonte yon istwa reyèl.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize plizyè vèb fraz nan yon sèl istwa.",
    whatYouWillLearn: "kijan pou konbine vèb fraz Modil 11 yo nan yon istwa",
    prerequisite: "Leson 5 — Turn On, Turn Off",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Vèb fraz yo travay ansanm pou rakonte yon jounen konplè.",
    understandBody:
      "**I get up, put on my clothes, and look for my keys.** Chak vèb fraz ou aprann nan Modil 11 la ka konekte ak lòt yo pou rakonte yon istwa reyèl.",
    seeItInAction: [
      {
        line: "I get up, put on my clothes, and look for my keys.",
        tag: "Maten",
        emoji: "🌅",
      },
      {
        line: "I turn off the lights and go out.",
        tag: "Kite kay la",
        emoji: "🚪",
      },
      { line: "I come back and turn on the TV.", tag: "Aswè", emoji: "🌙" },
    ],
    patternBuilderIntro: "Klike sou chak moman pou wè fraz li.",
    patternBuilderOptions: [
      { chipLabel: "Morning", display: "I get up and put on my clothes." },
      { chipLabel: "Leaving", display: "I turn off the lights and go out." },
      { chipLabel: "Evening", display: "I come back and turn on the TV." },
    ],
    vocabulary: [
      {
        word: "Clothes",
        ipa: "/kloʊðz/",
        kreyol: "Rad",
        example: "I put on my clothes.",
      },
      {
        word: "Lights",
        ipa: "/laɪts/",
        kreyol: "Limyè",
        example: "I turn off the lights.",
      },
      {
        word: "Evening",
        ipa: "/ˈiːvnɪŋ/",
        kreyol: "Aswè",
        example: "I come back in the evening.",
      },
      {
        word: "Story",
        ipa: "/ˈstɔːri/",
        kreyol: "Istwa",
        example: "This is my daily story.",
      },
      {
        word: "Together",
        ipa: "/təˈgɛðər/",
        kreyol: "Ansanm",
        example: "These verbs work together.",
      },
    ],
    pronunciationWord: "Clothes",
    pronunciationIpa: "/kloʊðz/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** yon sèl silab, “klohthz” — pa “clo-thes”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye chak vèb fraz gen de mo ki mache ansanm — pa separe yo twò lwen nan fraz la.",
    mistakeWrong: "I turn the lights off and out go.",
    mistakeCorrect: "I turn off the lights and go out.",
    mistakeWhy:
      "**Poukisa:** Gade lòd mo yo — “turn off the lights” (pa “turn the lights off and out” tou mele), epi “go out” rete ansanm.",
    practice: {
      prompt: "Ki vèsyon ki byen konstwi?",
      options: [
        "I turn the lights off and out go.",
        "I turn off the lights and go out.",
        "I lights turn off and go out.",
        "Turn off I the lights and go out.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — gade lòd mo yo pre pre.",
    },
    thinkEmoji: "🧩",
    thinkPrompt:
      "Ekri yon ti istwa sou jounen ou ak omwen twa vèb fraz Modil 11:",
    thinkPlaceholder: "I get up, ... , and ...",
    aiPrompt:
      "Hi! Can you listen to a short story about my day using phrasal verbs like get up, put on, look for, turn on/off, and come back/go out, and give me feedback?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 11 ansanm.",
    missionTask:
      "🎯 Jodi a, rakonte yon jounen ou ak omwen twa vèb fraz diferan nan Modil 11.",
    recap: [
      { emoji: "🧩", text: "Vèb fraz yo konekte pou rakonte yon istwa." },
      {
        emoji: "⚠️",
        text: "Gade lòd mo yo — chak vèb fraz gen de mo ki mache ansanm.",
      },
      { emoji: "🎓", text: "Ou fini Modil 11 — Vèb Fraz Yo!" },
      { emoji: "🎯", text: "Misyon: rakonte yon jounen ak vèb fraz." },
    ],
  },
  {
    slug: "computer-and-phone",
    moduleTitle: "Modil 12: Anglè Pou Teknoloji",
    illustrationKey: "emoji",
    heroEmoji: "💻",
    heroTitle: "Computer ak Phone",
    heroLede: "Vokabilè debaz pou pale de aparèy ou itilize chak jou.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap konnen vokabilè debaz pou computer ak phone.",
    whatYouWillLearn: "vokabilè pou computer ak phone",
    prerequisite: "Ou fin Modil 11 — Vèb Fraz Yo",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Chak aparèy gen vokabilè pa li, men anpil aksyon rete menm.",
    understandBody:
      "**I use my computer for work.** **My phone battery is low.** Aprann non aparèy yo ak eta debaz yo — battery, screen, charge.",
    seeItInAction: [
      { line: "I use my computer for work.", tag: "Òdinatè", emoji: "💻" },
      { line: "My phone battery is low.", tag: "Telefòn", emoji: "🔋" },
      { line: "Can you charge my phone?", tag: "Chaje", emoji: "🔌" },
    ],
    patternBuilderIntro: "Klike sou chak aparèy pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Computer", display: "I use my computer for work." },
      { chipLabel: "Phone", display: "My phone battery is low." },
      { chipLabel: "Charge", display: "Can you charge my phone?" },
    ],
    vocabulary: [
      {
        word: "Computer",
        ipa: "/kəmˈpjuːtər/",
        kreyol: "Òdinatè",
        example: "I use my computer for work.",
      },
      {
        word: "Phone",
        ipa: "/foʊn/",
        kreyol: "Telefòn",
        example: "My phone battery is low.",
      },
      {
        word: "Battery",
        ipa: "/ˈbætəri/",
        kreyol: "Batri",
        example: "My battery is low.",
      },
      {
        word: "Screen",
        ipa: "/skriːn/",
        kreyol: "Ekran",
        example: "My screen is broken.",
      },
      {
        word: "Charge",
        ipa: "/tʃɑːrdʒ/",
        kreyol: "Chaje",
        example: "Can you charge my phone?",
      },
    ],
    pronunciationWord: "Computer",
    pronunciationIpa: "/kəmˈpjuːtər/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** aksan an sou dezyèm silab la — “kuhm-PYOO-tər”.",
    pronunciationMistake:
      "**Erè komen:** pa di “My battery is empty” pou telefòn — itilize “low” oswa “dead”.",
    mistakeWrong: "My phone battery is empty.",
    mistakeCorrect: "My phone battery is low.",
    mistakeWhy:
      "**Poukisa:** An Anglè, ou di batri a “low” (fèb) oswa “dead” (fini nèt), pa “empty” (ki pito pou yon boutèy oswa yon bwat).",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou di batri w prèske fini:",
      options: [
        "My battery is empty.",
        "My battery is low.",
        "My battery is open.",
        "My battery is closed.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — se “low”.",
    },
    thinkEmoji: "💻",
    thinkPrompt: "Ekri yon fraz sou aparèy ou itilize chak jou:",
    thinkPlaceholder: "I use my...",
    aiPrompt:
      "Hi! Can you ask me what devices I use every day and help me describe them in English?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike vokabilè aparèy.",
    missionTask:
      "🎯 Jodi a, di ki aparèy ou itilize chak jou ak kijan ou pran swen li.",
    recap: [
      { emoji: "💻", text: "Computer, phone — aparèy chak jou." },
      { emoji: "🔋", text: "Battery, screen, charge." },
      { emoji: "⚠️", text: '"Low"/"dead", pa "empty" pou batri.' },
      { emoji: "🎯", text: "Misyon: di ki aparèy ou itilize." },
    ],
  },
  {
    slug: "internet-and-wifi",
    moduleTitle: "Modil 12: Anglè Pou Teknoloji",
    illustrationKey: "emoji",
    heroEmoji: "📶",
    heroTitle: "Internet ak Wi-Fi",
    heroLede: "Konekte ak entènèt se yon aksyon chak jou kounye a.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de koneksyon entènèt ou.",
    whatYouWillLearn: "vokabilè pou internet ak Wi-Fi",
    prerequisite: "Leson 1 — Computer ak Phone",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Mande sou Wi-Fi se yon nan premye fraz w ap bezwen prèske tout kote.",
    understandBody:
      "**Do you have Wi-Fi here?** **My internet is slow today.** Konnen kijan pou pale de koneksyon w ede w prèske tout kote ou ale.",
    seeItInAction: [
      { line: "Do you have Wi-Fi here?", tag: "Mande Wi-Fi", emoji: "📶" },
      {
        line: "My internet is slow today.",
        tag: "Dekri koneksyon",
        emoji: "🐌",
      },
      { line: "I'm connected to the internet.", tag: "Konekte", emoji: "🌐" },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Ask", display: "Do you have Wi-Fi here?" },
      { chipLabel: "Describe", display: "My internet is slow today." },
      { chipLabel: "Connected", display: "I'm connected to the internet." },
    ],
    vocabulary: [
      {
        word: "Internet",
        ipa: "/ˈɪntərnɛt/",
        kreyol: "Entènèt",
        example: "My internet is slow.",
      },
      {
        word: "Wi-Fi",
        ipa: "/ˈwaɪfaɪ/",
        kreyol: "Wi-Fi",
        example: "Do you have Wi-Fi?",
      },
      {
        word: "Connect",
        ipa: "/kəˈnɛkt/",
        kreyol: "Konekte",
        example: "I'm connected to the internet.",
      },
      {
        word: "Slow",
        ipa: "/sloʊ/",
        kreyol: "Lan",
        example: "My internet is slow today.",
      },
      {
        word: "Signal",
        ipa: "/ˈsɪgnəl/",
        kreyol: "Siyal",
        example: "I have a weak signal.",
      },
    ],
    pronunciationWord: "Wi-Fi",
    pronunciationIpa: "/ˈwaɪfaɪ/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “WHY-fy”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I am in the internet” — se “I'm on the internet” oswa “connected to the internet”.",
    mistakeWrong: "I am in the internet.",
    mistakeCorrect: "I'm on the internet.",
    mistakeWhy:
      "**Poukisa:** An Anglè, ou itilize “on” (pa “in”) pou di ou ap navige sou entènèt — “on the internet”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I am in the internet.",
        "I'm on the internet.",
        "I am at the internet.",
        "I am internet.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — se “on the internet”.",
    },
    thinkEmoji: "📶",
    thinkPrompt: "Ekri yon fraz sou koneksyon entènèt ou kounye a:",
    thinkPlaceholder: "My internet is...",
    aiPrompt:
      "Hi! Can you ask me about my internet connection and help me describe it in English?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike internet/Wi-Fi.",
    missionTask:
      "🎯 Jodi a, mande yon moun “Do you have Wi-Fi here?” nan yon sitiyasyon imajinè.",
    recap: [
      { emoji: "📶", text: "Do you have Wi-Fi here?" },
      { emoji: "🐌", text: "My internet is slow today." },
      { emoji: "⚠️", text: '"On the internet", pa "in the internet".' },
      { emoji: "🎯", text: "Misyon: mande sou Wi-Fi yon kote." },
    ],
  },
  {
    slug: "email-basics",
    moduleTitle: "Modil 12: Anglè Pou Teknoloji",
    illustrationKey: "emoji",
    heroEmoji: "📧",
    heroTitle: "Baz Imèl",
    heroLede: "Imèl gen pwòp vokabilè li: voye, resevwa, jwenn.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de imèl ak vokabilè debaz li.",
    whatYouWillLearn: "vokabilè pou voye, resevwa, ak jwenn imèl",
    prerequisite: "Leson 2 — Internet ak Wi-Fi",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Imèl gen pwòp vokabilè li: voye, resevwa, jwenn.",
    understandBody:
      "**I sent you an email.** **Did you receive my message?** **Please check your inbox.** Twa fraz sa yo mennen w nan tout yon echanj imèl.",
    seeItInAction: [
      { line: "I sent you an email.", tag: "Voye", emoji: "📤" },
      { line: "Did you receive my message?", tag: "Resevwa", emoji: "📥" },
      { line: "Please check your inbox.", tag: "Bwat resepsyon", emoji: "📬" },
    ],
    patternBuilderIntro: "Klike sou chak etap pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Sent", display: "I sent you an email." },
      { chipLabel: "Receive", display: "Did you receive my message?" },
      { chipLabel: "Inbox", display: "Please check your inbox." },
    ],
    vocabulary: [
      {
        word: "Email",
        ipa: "/ˈiːmeɪl/",
        kreyol: "Imèl",
        example: "I sent you an email.",
      },
      {
        word: "Send",
        ipa: "/sɛnd/",
        kreyol: "Voye",
        example: "I'll send it now.",
      },
      {
        word: "Receive",
        ipa: "/rɪˈsiːv/",
        kreyol: "Resevwa",
        example: "Did you receive it?",
      },
      {
        word: "Inbox",
        ipa: "/ˈɪnbɒks/",
        kreyol: "Bwat resepsyon",
        example: "Check your inbox.",
      },
      {
        word: "Attachment",
        ipa: "/əˈtætʃmənt/",
        kreyol: "Fichye jwenn",
        example: "See the attachment.",
      },
    ],
    pronunciationWord: "Receive",
    pronunciationIpa: "/rɪˈsiːv/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** aksan an sou dezyèm silab la — “ri-SEEV”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I received an email to you” — se “I sent you an email” oswa “I received your email”.",
    mistakeWrong: "I received an email to you.",
    mistakeCorrect: "I sent you an email.",
    mistakeWhy:
      "**Poukisa:** “Send” se lè OU voye. “Receive” se lè OU jwenn yon bagay. Pa mele de direksyon yo.",
    practice: {
      prompt: "Ou fenk voye yon imèl bay yon zanmi. Ki fraz ki kòrèk?",
      options: [
        "I received you an email.",
        "I sent you an email.",
        "I inbox you an email.",
        "I attach you an email.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — ou VOYE, se “sent”.",
    },
    thinkEmoji: "📧",
    thinkPrompt: "Ekri yon fraz sou yon imèl ou voye oswa resevwa:",
    thinkPlaceholder: "I sent... / I received...",
    aiPrompt:
      "Hi! Can you ask me about an email I sent or received, and help me use the right vocabulary?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike vokabilè imèl.",
    missionTask:
      "🎯 Jodi a, di yon fraz sou yon imèl ou voye oswa resevwa dènyèman.",
    recap: [
      { emoji: "📤", text: "“Send” se lè ou voye." },
      { emoji: "📥", text: "“Receive” se lè ou jwenn." },
      { emoji: "📬", text: "Check your inbox." },
      { emoji: "🎯", text: "Misyon: pale de yon imèl ou voye/resevwa." },
    ],
  },
  {
    slug: "passwords-and-security",
    moduleTitle: "Modil 12: Anglè Pou Teknoloji",
    illustrationKey: "emoji",
    heroEmoji: "🔒",
    heroTitle: "Modpas ak Sekirite",
    heroLede: "Pwoteje kont ou mande vokabilè presi.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de modpas ak sekirite kont ou.",
    whatYouWillLearn: "vokabilè pou password, login, ak account",
    prerequisite: "Leson 3 — Baz Imèl",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Pwoteje kont ou mande vokabilè presi.",
    understandBody:
      "**I forgot my password.** **Please create a strong password.** **I need to log in to my account.** Twa fraz sa yo itil chak fwa ou jere yon kont sou entènèt.",
    seeItInAction: [
      { line: "I forgot my password.", tag: "Bliye modpas", emoji: "🔒" },
      { line: "Please create a strong password.", tag: "Kreye", emoji: "💪" },
      {
        line: "I need to log in to my account.",
        tag: "Konekte kont",
        emoji: "🔑",
      },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Forgot", display: "I forgot my password." },
      { chipLabel: "Create", display: "Please create a strong password." },
      { chipLabel: "Log in", display: "I need to log in to my account." },
    ],
    vocabulary: [
      {
        word: "Password",
        ipa: "/ˈpæswɜːrd/",
        kreyol: "Modpas",
        example: "I forgot my password.",
      },
      {
        word: "Login",
        ipa: "/ˈlɒgɪn/",
        kreyol: "Koneksyon (kont)",
        example: "I need to log in.",
      },
      {
        word: "Account",
        ipa: "/əˈkaʊnt/",
        kreyol: "Kont",
        example: "This is my account.",
      },
      {
        word: "Forgot",
        ipa: "/fərˈgɒt/",
        kreyol: "Bliye",
        example: "I forgot my password.",
      },
      {
        word: "Strong",
        ipa: "/strɒŋ/",
        kreyol: "Fò",
        example: "Use a strong password.",
      },
    ],
    pronunciationWord: "Password",
    pronunciationIpa: "/ˈpæswɜːrd/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “PAS-wərd”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I forget my password” pou yon bagay ki deja pase — se “I forgot” (tan pase).",
    mistakeWrong: "I forget my password. (jodi a, li deja rive)",
    mistakeCorrect: "I forgot my password.",
    mistakeWhy:
      "**Poukisa:** Si ou deja pa sonje modpas la KOUNYE A, itilize tan pase “forgot”, pa “forget” (prezan).",
    practice: {
      prompt: "Chwazi fraz ki kòrèk lè ou pa sonje modpas ou kounye a:",
      options: [
        "I forget my password.",
        "I forgot my password.",
        "I forgetting my password.",
        "I forgets my password.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — itilize tan pase.",
    },
    thinkEmoji: "🔒",
    thinkPrompt: "Ekri yon fraz sou yon modpas oswa yon kont:",
    thinkPlaceholder: "I need to... / I forgot...",
    aiPrompt:
      "Hi! Can you ask me about creating a strong password or logging into an account, so I can practice this vocabulary?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike password/login/account.",
    missionTask: "🎯 Jodi a, ekri yon fraz sou yon fwa ou te bliye yon modpas.",
    recap: [
      { emoji: "🔒", text: "Password, login, account." },
      { emoji: "⚠️", text: '"I forgot" (tan pase), pa "I forget".' },
      { emoji: "💪", text: "Please create a strong password." },
      { emoji: "🎯", text: "Misyon: pale de yon modpas ou bliye." },
    ],
  },
  {
    slug: "browser-and-website",
    moduleTitle: "Modil 12: Anglè Pou Teknoloji",
    illustrationKey: "emoji",
    heroEmoji: "🌐",
    heroTitle: "Navigatè ak Sit Entènèt",
    heroLede: "Navige sou entènèt mande vokabilè presi tou.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab navige sou entènèt ak vokabilè kòrèk.",
    whatYouWillLearn: "vokabilè pou browser, website, ak link",
    prerequisite: "Leson 4 — Modpas ak Sekirite",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Navige sou entènèt mande vokabilè presi tou.",
    understandBody:
      "**Open your browser.** **What is the website address?** **Click on the link.** Twa fraz sa yo ede w navige sou entènèt ak konfyans.",
    seeItInAction: [
      { line: "Open your browser.", tag: "Ouvri navigatè", emoji: "🌐" },
      { line: "What is the website address?", tag: "Adrès sit", emoji: "🔗" },
      { line: "Click on the link.", tag: "Klike", emoji: "👆" },
    ],
    patternBuilderIntro: "Klike sou chak aksyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Browser", display: "Open your browser." },
      { chipLabel: "Website", display: "What is the website address?" },
      { chipLabel: "Click", display: "Click on the link." },
    ],
    vocabulary: [
      {
        word: "Browser",
        ipa: "/ˈbraʊzər/",
        kreyol: "Navigatè",
        example: "Open your browser.",
      },
      {
        word: "Website",
        ipa: "/ˈwɛbsaɪt/",
        kreyol: "Sit entènèt",
        example: "What is the website?",
      },
      {
        word: "Link",
        ipa: "/lɪŋk/",
        kreyol: "Lyen",
        example: "Click on the link.",
      },
      { word: "Click", ipa: "/klɪk/", kreyol: "Klike", example: "Click here." },
      {
        word: "Search",
        ipa: "/sɜːrtʃ/",
        kreyol: "Chèche",
        example: "Search for it online.",
      },
    ],
    pronunciationWord: "Browser",
    pronunciationIpa: "/ˈbraʊzər/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “BRAU-zər”.",
    pronunciationMistake:
      "**Erè komen:** pa di “Click in the link” — se “Click on the link”.",
    mistakeWrong: "Click in the link.",
    mistakeCorrect: "Click on the link.",
    mistakeWhy:
      "**Poukisa:** An Anglè, ou “click on” yon bagay, pa “click in”. Se yon ekspresyon fikse.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "Click in the link.",
        "Click on the link.",
        "Click at the link.",
        "Click to the link.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — se “click on”.",
    },
    thinkEmoji: "🌐",
    thinkPrompt: "Ekri yon fraz sou jan ou navige sou entènèt:",
    thinkPlaceholder: "I open... I click...",
    aiPrompt:
      "Hi! Can you ask me how I search for things online and help me use browser, website, and link correctly?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike browser/website/link.",
    missionTask: "🎯 Jodi a, ekri yon fraz sou kijan ou jwenn yon sit entènèt.",
    recap: [
      { emoji: "🌐", text: "Browser, website, link." },
      { emoji: "👆", text: "Click on the link." },
      { emoji: "⚠️", text: '"Click on", pa "click in".' },
      { emoji: "🎯", text: "Misyon: pale de kijan ou navige sou entènèt." },
    ],
  },
  {
    slug: "download-and-upload",
    moduleTitle: "Modil 12: Anglè Pou Teknoloji",
    illustrationKey: "emoji",
    heroEmoji: "⬇️",
    heroTitle: "Download ak Upload",
    heroLede:
      "“Download” pran yon bagay soti sou entènèt, “upload” voye yon bagay ale sou entènèt.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab itilize download ak upload kòrèkteman.",
    whatYouWillLearn: "diferans ant “download” ak “upload”",
    prerequisite: "Leson 5 — Navigatè ak Sit Entènèt",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "“Download” pran, “upload” voye — de direksyon opoze.",
    understandBody:
      "**I need to download this file.** (soti sou entènèt vin nan aparèy ou) **I'll upload the photos later.** (soti nan aparèy ou ale sou entènèt).",
    seeItInAction: [
      { line: "I need to download this file.", tag: "Download", emoji: "⬇️" },
      { line: "I'll upload the photos later.", tag: "Upload", emoji: "⬆️" },
      { line: "The download is almost done.", tag: "Prèske fini", emoji: "⏳" },
    ],
    patternBuilderIntro: "Klike sou chak direksyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Download", display: "I need to download this file." },
      { chipLabel: "Upload", display: "I'll upload the photos later." },
      { chipLabel: "Almost done", display: "The download is almost done." },
    ],
    vocabulary: [
      {
        word: "Download",
        ipa: "/ˈdaʊnloʊd/",
        kreyol: "Telechaje (pran)",
        example: "Download this file.",
      },
      {
        word: "Upload",
        ipa: "/ˈʌploʊd/",
        kreyol: "Telechaje (voye)",
        example: "I'll upload the photos.",
      },
      {
        word: "File",
        ipa: "/faɪl/",
        kreyol: "Fichye",
        example: "I need to download this file.",
      },
      {
        word: "Photo",
        ipa: "/ˈfoʊtoʊ/",
        kreyol: "Foto",
        example: "I'll upload the photos.",
      },
      {
        word: "Almost",
        ipa: "/ˈɔːlmoʊst/",
        kreyol: "Prèske",
        example: "The download is almost done.",
      },
    ],
    pronunciationWord: "Download",
    pronunciationIpa: "/ˈdaʊnloʊd/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** de mo kole ansanm, aksan an sou “down”.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “download” (pran soti) ak “upload” (voye ale) — direksyon yo opoze.",
    mistakeWrong: "I need to upload this file from the internet.",
    mistakeCorrect: "I need to download this file from the internet.",
    mistakeWhy:
      "**Poukisa:** Yon fichye ki soti SOU ENTÈNÈT vin nan aparèy ou, se “download”. “Upload” se lè ou voye yon bagay SOTI nan aparèy ou ale sou entènèt.",
    practice: {
      prompt: "Ou vle pran yon fichye soti sou entènèt. Ki mo ki kòrèk?",
      options: ["Upload", "Download", "Update", "Setting"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — pran soti sou entènèt se “download”.",
    },
    thinkEmoji: "⬇️",
    thinkPrompt: "Ekri yon fraz ak “download” epi yon lòt ak “upload”:",
    thinkPlaceholder: "I need to download... / I'll upload...",
    aiPrompt:
      "Hi! Can you give me situations and let me choose between download and upload?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike download/upload.",
    missionTask:
      "🎯 Jodi a, ekri yon fraz sou yon bagay ou download oswa upload dènyèman.",
    recap: [
      { emoji: "⬇️", text: "“Download” pran soti sou entènèt." },
      { emoji: "⬆️", text: "“Upload” voye ale sou entènèt." },
      { emoji: "📁", text: "File, photo." },
      { emoji: "🎯", text: "Misyon: pale de yon fichye ou download/upload." },
    ],
  },
  {
    slug: "tech-settings",
    moduleTitle: "Modil 12: Anglè Pou Teknoloji",
    illustrationKey: "emoji",
    heroEmoji: "⚙️",
    heroTitle: "Paramèt (Settings)",
    heroLede: "“Settings” chanje jan yon aparèy oswa yon app fonksyone.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab navige nan paramèt yon aparèy oswa yon app.",
    whatYouWillLearn: "vokabilè pou settings, notifications, ak update",
    prerequisite: "Leson 6 — Download ak Upload",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "“Settings” chanje jan yon aparèy oswa yon app fonksyone.",
    understandBody:
      "**Go to your settings.** **I need to change my settings.** **Turn on notifications in settings.** Paramèt yo kontwole tout bagay sou aparèy ou.",
    seeItInAction: [
      { line: "Go to your settings.", tag: "Ale nan paramèt", emoji: "⚙️" },
      { line: "I need to change my settings.", tag: "Chanje", emoji: "🔧" },
      {
        line: "Turn on notifications in settings.",
        tag: "Notifikasyon",
        emoji: "🔔",
      },
    ],
    patternBuilderIntro: "Klike sou chak aksyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Go to", display: "Go to your settings." },
      { chipLabel: "Change", display: "I need to change my settings." },
      {
        chipLabel: "Notifications",
        display: "Turn on notifications in settings.",
      },
    ],
    vocabulary: [
      {
        word: "Settings",
        ipa: "/ˈsɛtɪŋz/",
        kreyol: "Paramèt",
        example: "Go to your settings.",
      },
      {
        word: "Change",
        ipa: "/tʃeɪndʒ/",
        kreyol: "Chanje",
        example: "I need to change my settings.",
      },
      {
        word: "Notifications",
        ipa: "/ˌnoʊtɪfɪˈkeɪʃənz/",
        kreyol: "Notifikasyon",
        example: "Turn on notifications.",
      },
      {
        word: "App",
        ipa: "/æp/",
        kreyol: "Aplikasyon",
        example: "Open the app.",
      },
      {
        word: "Update",
        ipa: "/ˈʌpdeɪt/",
        kreyol: "Mizajou",
        example: "Install the update.",
      },
    ],
    pronunciationWord: "Notifications",
    pronunciationIpa: "/ˌnoʊtɪfɪˈkeɪʃənz/",
    mouthTip: "**Ti konsèy pou bouch ou:** senk silab, aksan an sou “KAY”.",
    pronunciationMistake:
      "**Erè komen:** pa di “settings” tankou se yon sèl bagay ou ka konte — li toujou pliryèl an Anglè.",
    mistakeWrong: "Go to your setting.",
    mistakeCorrect: "Go to your settings.",
    mistakeWhy:
      "**Poukisa:** “Settings” toujou rete nan fòm pliryèl an Anglè, menm lè w ap pale de yon sèl chanjman.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "Go to your setting.",
        "Go to your settings.",
        "Go to you settings.",
        "Go to a settings.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “settings” toujou pliryèl.",
    },
    thinkEmoji: "⚙️",
    thinkPrompt:
      "Ekri yon fraz sou yon paramèt ou chanje nan yon app oswa aparèy:",
    thinkPlaceholder: "I changed my settings to...",
    aiPrompt:
      "Hi! Can you ask me about settings I've changed on my phone or an app, so I can practice this vocabulary?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike settings/notifications/update.",
    missionTask:
      "🎯 Jodi a, di yon paramèt ou ta renmen chanje sou yon aparèy oswa yon app.",
    recap: [
      { emoji: "⚙️", text: "Settings toujou pliryèl an Anglè." },
      { emoji: "🔔", text: "Turn on notifications in settings." },
      { emoji: "🔧", text: "I need to change my settings." },
      { emoji: "🎯", text: "Misyon: pale de yon paramèt ou ta chanje." },
    ],
  },
  {
    slug: "ai-and-chatgpt",
    moduleTitle: "Modil 12: Anglè Pou Teknoloji",
    illustrationKey: "emoji",
    heroEmoji: "🤖",
    heroTitle: "AI ak ChatGPT",
    heroLede: "Vokabilè pou zouti AI ki vin nòmal nan lavi chak jou.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de jan ou itilize AI ak ChatGPT.",
    whatYouWillLearn: "vokabilè pou AI, ChatGPT, ak prompt",
    prerequisite: "Leson 7 — Paramèt (Settings)",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "AI vin fè pati lavi chak jou, tankou telefòn ak entènèt.",
    understandBody:
      "**I use ChatGPT to help me write.** **AI can translate languages quickly.** Vokabilè sa a ap vin pi enpòtan chak jou pou moun k ap aprann Anglè.",
    seeItInAction: [
      {
        line: "I use ChatGPT to help me write.",
        tag: "Itilize AI",
        emoji: "🤖",
      },
      { line: "Can you ask AI for help?", tag: "Mande èd", emoji: "❓" },
      {
        line: "AI can translate languages quickly.",
        tag: "Tradiksyon",
        emoji: "🌍",
      },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Use", display: "I use ChatGPT to help me write." },
      { chipLabel: "Ask", display: "Can you ask AI for help?" },
      {
        chipLabel: "Translate",
        display: "AI can translate languages quickly.",
      },
    ],
    vocabulary: [
      {
        word: "AI",
        ipa: "/eɪ aɪ/",
        kreyol: "Entelijans Atifisyèl",
        example: "AI can help you.",
      },
      {
        word: "ChatGPT",
        ipa: "/tʃæt dʒiː piː tiː/",
        kreyol: "ChatGPT (non zouti)",
        example: "I use ChatGPT to help me write.",
      },
      {
        word: "Prompt",
        ipa: "/prɒmpt/",
        kreyol: "Enstriksyon (bay AI)",
        example: "Write a good prompt.",
      },
      {
        word: "Translate",
        ipa: "/trænzˈleɪt/",
        kreyol: "Tradwi",
        example: "AI can translate languages.",
      },
      {
        word: "Quickly",
        ipa: "/ˈkwɪkli/",
        kreyol: "Vit",
        example: "AI works quickly.",
      },
    ],
    pronunciationWord: "Translate",
    pronunciationIpa: "/trænzˈleɪt/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** aksan an sou dezyèm silab la — “tranz-LEYT”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I use AI for help me” — se “I use AI to help me”.",
    mistakeWrong: "I use AI for help me write.",
    mistakeCorrect: "I use AI to help me write.",
    mistakeWhy:
      "**Poukisa:** Apre “use [bagay]”, itilize “to” + vèb debaz pou eksplike objektif la: “to help me write”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I use AI for help me write.",
        "I use AI to help me write.",
        "I use AI help me write.",
        "I use AI helping me write.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — se “to help”.",
    },
    thinkEmoji: "🤖",
    thinkPrompt: "Ekri yon fraz sou kijan ou itilize (oswa ta itilize) AI:",
    thinkPlaceholder: "I use AI to...",
    aiPrompt:
      "Hi! Can you ask me how I use AI tools like ChatGPT in my daily life, and help me answer using the right vocabulary?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike vokabilè AI.",
    missionTask:
      "🎯 Jodi a, di yon fason ou itilize (oswa ta itilize) AI pou ede w.",
    recap: [
      { emoji: "🤖", text: "AI, ChatGPT, prompt." },
      { emoji: "🌍", text: "AI can translate languages quickly." },
      { emoji: "⚠️", text: '"Use AI to help", pa "use AI for help".' },
      { emoji: "🎯", text: "Misyon: pale de kijan ou itilize AI." },
    ],
  },
  {
    slug: "technology-mission",
    moduleTitle: "Modil 12: Anglè Pou Teknoloji",
    illustrationKey: "emoji",
    heroEmoji: "📱",
    heroTitle: "Itilize Teknoloji",
    heroLede:
      "Se lè a pou konbine vokabilè teknoloji Modil 12 pou dekri jan ou itilize aparèy ou chak jou.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab rakonte yon jounen teknoloji konplè.",
    whatYouWillLearn:
      "kijan pou konbine tout vokabilè teknoloji Modil 12 nan yon istwa",
    prerequisite: "Leson 8 — AI ak ChatGPT",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Yon jounen teknoloji tipik itilize anpil nan vokabilè Modil 12 la.",
    understandBody:
      "**I connect to Wi-Fi and check my email.** **I download files and use ChatGPT for work.** Konbine plizyè aksyon teknoloji rakonte yon jounen konplè.",
    seeItInAction: [
      {
        line: "I connect to Wi-Fi and check my email.",
        tag: "Maten",
        emoji: "📧",
      },
      {
        line: "I download files and use ChatGPT for work.",
        tag: "Travay",
        emoji: "🤖",
      },
      {
        line: "I forgot my password, so I reset it.",
        tag: "Pwoblèm",
        emoji: "🔑",
      },
    ],
    patternBuilderIntro: "Klike sou chak moman pou wè fraz la.",
    patternBuilderOptions: [
      {
        chipLabel: "Morning",
        display: "I connect to Wi-Fi and check my email.",
      },
      { chipLabel: "Work", display: "I download files and use ChatGPT." },
      { chipLabel: "Problem", display: "I forgot my password, so I reset it." },
    ],
    vocabulary: [
      {
        word: "Reset",
        ipa: "/riːˈsɛt/",
        kreyol: "Reyajiste",
        example: "I reset my password.",
      },
      {
        word: "Device",
        ipa: "/dɪˈvaɪs/",
        kreyol: "Aparèy",
        example: "This is my device.",
      },
      {
        word: "Online",
        ipa: "/ˈɒnlaɪn/",
        kreyol: "Sou entènèt",
        example: "I work online.",
      },
      {
        word: "Technology",
        ipa: "/tɛkˈnɒlədʒi/",
        kreyol: "Teknoloji",
        example: "I use technology every day.",
      },
      {
        word: "Everyday",
        ipa: "/ˈɛvrideɪ/",
        kreyol: "Chak jou",
        example: "These are everyday tools.",
      },
    ],
    pronunciationWord: "Technology",
    pronunciationIpa: "/tɛkˈnɒlədʒi/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** kat silab, aksan an sou dezyèm — “tek-NOL-uh-jee”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye konjige chak vèb kòrèkteman menm nan yon fraz ki gen plizyè aksyon teknoloji.",
    mistakeWrong: "I connects to Wi-Fi and checks my email. (lè sijè a se I)",
    mistakeCorrect: "I connect to Wi-Fi and check my email.",
    mistakeWhy:
      "**Poukisa:** Sijè “I” pa janm pran “-s” sou vèb la, menm nan yon fraz ak plizyè vèb aksyon konekte.",
    practice: {
      prompt: "Ki vèsyon ki kòrèk pou “I”?",
      options: [
        "I connects to Wi-Fi and checks email.",
        "I connect to Wi-Fi and check email.",
        "I connecting to Wi-Fi and checking email.",
        "I connected to Wi-Fi and checked email. (jodi a)",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — “I” pa pran “-s”.",
    },
    thinkEmoji: "📱",
    thinkPrompt:
      "Ekri yon ti istwa sou jan ou itilize teknoloji chak jou, ak omwen kat mo Modil 12:",
    thinkPlaceholder: "I connect to Wi-Fi, ... , and ...",
    aiPrompt:
      "Hi! Can you listen to a short story about how I use technology every day — Wi-Fi, email, passwords, AI — and give me friendly feedback?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 12 ansanm.",
    missionTask:
      "🎯 Jodi a, ekri oswa di yon ti istwa sou jan ou itilize teknoloji nan yon jounen tipik.",
    recap: [
      {
        emoji: "📱",
        text: "Konbine vokabilè teknoloji pou rakonte yon istwa.",
      },
      { emoji: "⚠️", text: '"I" pa janm pran "-s" sou vèb la.' },
      { emoji: "🎓", text: "Ou fini Modil 12 — Anglè Pou Teknoloji!" },
      { emoji: "🎯", text: "Misyon: rakonte yon jounen teknoloji." },
    ],
  },
  {
    slug: "job-interview",
    moduleTitle: "Modil 13: Anglè Pou Travay",
    illustrationKey: "emoji",
    heroEmoji: "💼",
    heroTitle: "Antretyen Djòb",
    heroLede: "Reponn kesyon antretyen ak konfyans, menm si w nève.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab reponn kesyon debaz nan yon antretyen djòb.",
    whatYouWillLearn: "kijan pou reponn kesyon antretyen djòb debaz",
    prerequisite: "Ou fin Modil 12 — Anglè Pou Teknoloji",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 6 min lekti",
    completionTime: "✅ ~9 min pou konplete",
    understandHeading: "Yon antretyen djòb suiv yon patrik kesyon prevwa.",
    understandBody:
      "**Tell me about yourself.** **Why do you want this job?** **What are your strengths?** Twa kesyon sa yo parèt nan prèske chak antretyen.",
    seeItInAction: [
      { line: "Tell me about yourself.", tag: "Kesyon ouvèti", emoji: "🙋" },
      { line: "Why do you want this job?", tag: "Motivasyon", emoji: "🎯" },
      { line: "What are your strengths?", tag: "Fòs ou", emoji: "💪" },
    ],
    patternBuilderIntro: "Klike sou chak kesyon pou wè yon repons kout.",
    patternBuilderOptions: [
      { chipLabel: "Yourself", display: "Tell me about yourself." },
      { chipLabel: "Why", display: "Why do you want this job?" },
      { chipLabel: "Strengths", display: "What are your strengths?" },
    ],
    vocabulary: [
      {
        word: "Interview",
        ipa: "/ˈɪntərvjuː/",
        kreyol: "Antretyen",
        example: "I have a job interview.",
      },
      {
        word: "Resume",
        ipa: "/ˈrɛzʊmeɪ/",
        kreyol: "CV",
        example: "I sent my resume.",
      },
      {
        word: "Experience",
        ipa: "/ɪkˈspɪəriəns/",
        kreyol: "Eksperyans",
        example: "I have three years of experience.",
      },
      {
        word: "Strength",
        ipa: "/strɛŋθ/",
        kreyol: "Fòs (kalite)",
        example: "My strength is teamwork.",
      },
      {
        word: "Available",
        ipa: "/əˈveɪləbəl/",
        kreyol: "Disponib",
        example: "I'm available to start Monday.",
      },
    ],
    pronunciationWord: "Experience",
    pronunciationIpa: "/ɪkˈspɪəriəns/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** kat silab, aksan an sou dezyèm — “ik-SPEE-ree-uhns”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I have experience in cooking since 3 years” — se “I have three years of experience”.",
    mistakeWrong: "I have experience in cooking since 3 years.",
    mistakeCorrect: "I have three years of experience in cooking.",
    mistakeWhy:
      "**Poukisa:** An Anglè, ou mete kantite tan an DEVAN “experience”: “three years of experience”, pa “since 3 years”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I have experience since 3 years.",
        "I have three years of experience.",
        "I have experience in 3 years.",
        "I have 3 years experience since.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback:
        "❌ Eseye ankò — mete kantite tan an devan “of experience”.",
    },
    thinkEmoji: "💼",
    thinkPrompt:
      "Ekri yon fraz pou reponn “Tell me about yourself” nan yon antretyen:",
    thinkPlaceholder: "I am... I have experience in...",
    aiPrompt:
      "Hi! Can you act as a job interviewer and ask me common interview questions in simple English?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike antretyen djòb.",
    missionTask: "🎯 Jodi a, ekri repons ou pou “Why do you want this job?”",
    recap: [
      { emoji: "💼", text: "Tell me about yourself." },
      { emoji: "🎯", text: "Why do you want this job?" },
      {
        emoji: "⚠️",
        text: '"Three years of experience", pa "experience since 3 years".',
      },
      { emoji: "🎯", text: "Misyon: reponn “Why do you want this job?”" },
    ],
  },
  {
    slug: "customer-service",
    moduleTitle: "Modil 13: Anglè Pou Travay",
    illustrationKey: "emoji",
    heroEmoji: "🎧",
    heroTitle: "Sèvis Kliyantèl",
    heroLede: "Ede yon kliyan ak rete kalm menm lè gen yon pwoblèm.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab ede yon kliyan ak jere yon plent politikman.",
    whatYouWillLearn: "vokabilè pou ede kliyan ak jere plent",
    prerequisite: "Leson 1 — Antretyen Djòb",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 6 min lekti",
    completionTime: "✅ ~9 min pou konplete",
    understandHeading: "Sèvis kliyantèl mande politès menm lè gen yon pwoblèm.",
    understandBody:
      "**How can I help you today?** **I'm sorry for the inconvenience.** **Let me fix that for you.** Twa fraz sa yo kalme prèske nenpòt sitiyasyon.",
    seeItInAction: [
      { line: "How can I help you today?", tag: "Akeyi", emoji: "🎧" },
      { line: "I'm sorry for the inconvenience.", tag: "Eskiz", emoji: "🙏" },
      { line: "Let me fix that for you.", tag: "Rezoud", emoji: "🔧" },
    ],
    patternBuilderIntro: "Klike sou chak etap pou wè yon fraz.",
    patternBuilderOptions: [
      { chipLabel: "Greet", display: "How can I help you today?" },
      { chipLabel: "Apologize", display: "I'm sorry for the inconvenience." },
      { chipLabel: "Fix", display: "Let me fix that for you." },
    ],
    vocabulary: [
      {
        word: "Customer",
        ipa: "/ˈkʌstəmər/",
        kreyol: "Kliyan",
        example: "The customer is waiting.",
      },
      {
        word: "Complaint",
        ipa: "/kəmˈpleɪnt/",
        kreyol: "Plent",
        example: "I have a complaint.",
      },
      {
        word: "Refund",
        ipa: "/ˈriːfʌnd/",
        kreyol: "Ranbousman",
        example: "Can I get a refund?",
      },
      {
        word: "Inconvenience",
        ipa: "/ˌɪnkənˈviːniəns/",
        kreyol: "Deranjman",
        example: "Sorry for the inconvenience.",
      },
      {
        word: "Resolve",
        ipa: "/rɪˈzɒlv/",
        kreyol: "Rezoud",
        example: "We will resolve this quickly.",
      },
    ],
    pronunciationWord: "Inconvenience",
    pronunciationIpa: "/ˌɪnkənˈviːniəns/",
    mouthTip: "**Ti konsèy pou bouch ou:** senk silab, aksan an sou “VEEN”.",
    pronunciationMistake:
      "**Erè komen:** pa di “Sorry for the problem” yon fason two dirèk — pito di “Sorry for the inconvenience”.",
    mistakeWrong: "Sorry for the problem.",
    mistakeCorrect: "I'm sorry for the inconvenience.",
    mistakeWhy:
      "**Poukisa:** Nan sèvis kliyantèl, “I'm sorry for the inconvenience” son plis pwofesyonèl e plis kalm pase “sorry for the problem”.",
    practice: {
      prompt: "Ki fraz ki pi pwofesyonèl pou eskize yon pwoblèm ak yon kliyan?",
      options: [
        "Sorry for the problem.",
        "I'm sorry for the inconvenience.",
        "That's not my problem.",
        "Sorry, whatever.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — chwazi fraz ki pi pwofesyonèl.",
    },
    thinkEmoji: "🎧",
    thinkPrompt: "Ekri yon fraz pou eskize yon kliyan pou yon reta:",
    thinkPlaceholder: "I'm sorry for...",
    aiPrompt:
      "Hi! Can you act as an upset customer with a small problem and let me practice responding politely in English?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike sèvis kliyantèl.",
    missionTask:
      "🎯 Jodi a, ekri fason ou ta reponn yon kliyan ki gen yon plent.",
    recap: [
      { emoji: "🎧", text: "How can I help you today?" },
      { emoji: "🙏", text: "I'm sorry for the inconvenience." },
      { emoji: "🔧", text: "Let me fix that for you." },
      { emoji: "🎯", text: "Misyon: reponn yon kliyan ki gen plent." },
    ],
  },
  {
    slug: "business-emails",
    moduleTitle: "Modil 13: Anglè Pou Travay",
    illustrationKey: "emoji",
    heroEmoji: "📨",
    heroTitle: "Imèl Pwofesyonèl",
    heroLede: "Yon imèl travay suiv yon estrikti klè: salitasyon, kò, fèmti.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab ekri yon imèl pwofesyonèl kout.",
    whatYouWillLearn: "estrikti yon imèl pwofesyonèl an Anglè",
    prerequisite: "Leson 2 — Sèvis Kliyantèl",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 6 min lekti",
    completionTime: "✅ ~9 min pou konplete",
    understandHeading:
      "Yon imèl travay suiv yon estrikti klè: salitasyon, kò, fèmti.",
    understandBody:
      "**Dear Mr. Smith,** **I am writing to ask about...** **Best regards,** Twa pati sa yo fòme prèske chak imèl pwofesyonèl.",
    seeItInAction: [
      { line: "Dear Mr. Smith,", tag: "Salitasyon", emoji: "👋" },
      { line: "I am writing to ask about...", tag: "Objektif", emoji: "✍️" },
      { line: "Best regards,", tag: "Fèmti", emoji: "🤝" },
    ],
    patternBuilderIntro: "Klike sou chak pati pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Greeting", display: "Dear Mr. Smith," },
      { chipLabel: "Purpose", display: "I am writing to ask about..." },
      { chipLabel: "Closing", display: "Best regards," },
    ],
    vocabulary: [
      {
        word: "Regarding",
        ipa: "/rɪˈgɑːrdɪŋ/",
        kreyol: "Konsènan",
        example: "Regarding your email, ...",
      },
      {
        word: "Attach",
        ipa: "/əˈtætʃ/",
        kreyol: "Jwenn (pyès jwen)",
        example: "I attached the file.",
      },
      {
        word: "Reply",
        ipa: "/rɪˈplaɪ/",
        kreyol: "Reponn",
        example: "Please reply by Friday.",
      },
      {
        word: "Regards",
        ipa: "/rɪˈgɑːrdz/",
        kreyol: "Salitasyon (fèmti)",
        example: "Best regards,",
      },
      {
        word: "Follow up",
        ipa: "/ˈfɒloʊ ʌp/",
        kreyol: "Swiv apre",
        example: "I'll follow up next week.",
      },
    ],
    pronunciationWord: "Regarding",
    pronunciationIpa: "/rɪˈgɑːrdɪŋ/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** twa silab, aksan an sou dezyèm — “ri-GAR-ding”.",
    pronunciationMistake:
      "**Erè komen:** pa fèmen yon imèl pwofesyonèl ak “Bye” — itilize “Best regards,” oswa “Sincerely,”.",
    mistakeWrong: "Bye, John",
    mistakeCorrect: "Best regards, John",
    mistakeWhy:
      "**Poukisa:** “Bye” twò kazyèl pou yon imèl travay. “Best regards,” oswa “Sincerely,” son pwofesyonèl.",
    practice: {
      prompt: "Chwazi pi bon fason pou fèmen yon imèl pwofesyonèl:",
      options: ["Bye,", "Best regards,", "See ya,", "Later,"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — chwazi opsyon ki pi pwofesyonèl.",
    },
    thinkEmoji: "📨",
    thinkPrompt:
      "Ekri yon liy ouvèti pou yon imèl travay ki mande yon enfòmasyon:",
    thinkPlaceholder: "I am writing to ask about...",
    aiPrompt:
      "Hi! Can you help me write a short, professional email in English asking about a job opening?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike imèl pwofesyonèl.",
    missionTask:
      "🎯 Jodi a, ekri twa liy yon imèl pwofesyonèl: salitasyon, objektif, fèmti.",
    recap: [
      { emoji: "👋", text: "Dear Mr./Ms. [Non]," },
      { emoji: "✍️", text: "I am writing to ask about..." },
      { emoji: "🤝", text: "Best regards, pa “Bye”." },
      { emoji: "🎯", text: "Misyon: ekri twa liy yon imèl pwofesyonèl." },
    ],
  },
  {
    slug: "meetings",
    moduleTitle: "Modil 13: Anglè Pou Travay",
    illustrationKey: "emoji",
    heroEmoji: "🗓️",
    heroTitle: "Reyinyon",
    heroLede: "Reyinyon gen fraz espesifik pou kòmanse, pataje, ak fini.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab patisipe nan yon reyinyon ak konfyans.",
    whatYouWillLearn: "fraz pou patisipe nan yon reyinyon travay",
    prerequisite: "Leson 3 — Imèl Pwofesyonèl",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 6 min lekti",
    completionTime: "✅ ~9 min pou konplete",
    understandHeading:
      "Reyinyon gen fraz espesifik pou kòmanse, pataje, ak fini.",
    understandBody:
      "**Let's get started.** **Can I add something?** **Let's schedule a follow-up.** Twa fraz sa yo kouvri kòmansman, kontribisyon, ak fen yon reyinyon.",
    seeItInAction: [
      { line: "Let's get started.", tag: "Kòmanse", emoji: "▶️" },
      { line: "Can I add something?", tag: "Pataje ide", emoji: "🙋" },
      { line: "Let's schedule a follow-up.", tag: "Fen", emoji: "📅" },
    ],
    patternBuilderIntro: "Klike sou chak moman pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Start", display: "Let's get started." },
      { chipLabel: "Contribute", display: "Can I add something?" },
      { chipLabel: "Schedule", display: "Let's schedule a follow-up." },
    ],
    vocabulary: [
      {
        word: "Agenda",
        ipa: "/əˈdʒɛndə/",
        kreyol: "Pwogram (lòd jou)",
        example: "Here is today's agenda.",
      },
      {
        word: "Schedule",
        ipa: "/ˈskɛdʒuːl/",
        kreyol: "Orè / Pwograme",
        example: "Let's schedule a meeting.",
      },
      {
        word: "Postpone",
        ipa: "/poʊstˈpoʊn/",
        kreyol: "Ranvwaye",
        example: "We need to postpone the meeting.",
      },
      {
        word: "Deadline",
        ipa: "/ˈdɛdlaɪn/",
        kreyol: "Dat limit",
        example: "The deadline is Friday.",
      },
      {
        word: "Update",
        ipa: "/ˈʌpdeɪt/",
        kreyol: "Nouvèl / Mizajou",
        example: "Can you give an update?",
      },
    ],
    pronunciationWord: "Schedule",
    pronunciationIpa: "/ˈskɛdʒuːl/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “SKE-jool”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I have a meeting the Friday” — pa mete “the” devan yon jou nan semèn nan konsa.",
    mistakeWrong: "The meeting is the Friday.",
    mistakeCorrect: "The meeting is on Friday.",
    mistakeWhy:
      "**Poukisa:** Devan yon jou nan semèn nan (Monday, Friday...), itilize “on”, pa “the”: “on Friday”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "The meeting is the Friday.",
        "The meeting is on Friday.",
        "The meeting is at Friday.",
        "The meeting is in Friday.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — se “on Friday”.",
    },
    thinkEmoji: "🗓️",
    thinkPrompt: "Ekri yon fraz pou pataje yon ide nan yon reyinyon imajinè:",
    thinkPlaceholder: "Can I add something? I think...",
    aiPrompt:
      "Hi! Can you run a short mock work meeting with me and let me practice starting it, sharing an idea, and closing it?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike reyinyon.",
    missionTask:
      "🎯 Jodi a, ekri twa fraz ou ta itilize nan yon reyinyon travay.",
    recap: [
      { emoji: "▶️", text: "Let's get started." },
      { emoji: "🙋", text: "Can I add something?" },
      { emoji: "⚠️", text: '"On Friday", pa "the Friday".' },
      { emoji: "🎯", text: "Misyon: ekri fraz pou yon reyinyon." },
    ],
  },
  {
    slug: "remote-work",
    moduleTitle: "Modil 13: Anglè Pou Travay",
    illustrationKey: "emoji",
    heroEmoji: "🏠",
    heroTitle: "Travay Adistans",
    heroLede: "Travay adistans mande vokabilè pou orè, zouti, ak kominikasyon.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de jan ou travay adistans.",
    whatYouWillLearn: "vokabilè pou travay adistans",
    prerequisite: "Leson 4 — Reyinyon",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 6 min lekti",
    completionTime: "✅ ~9 min pou konplete",
    understandHeading:
      "Travay adistans mande vokabilè pou orè, zouti, ak kominikasyon.",
    understandBody:
      "**I work from home.** **I'm online from 9 to 5.** **Let's hop on a call.** Twa fraz sa yo debaz nan lavi yon travayè adistans.",
    seeItInAction: [
      { line: "I work from home.", tag: "Travay lakay", emoji: "🏠" },
      { line: "I'm online from 9 to 5.", tag: "Orè", emoji: "⏰" },
      { line: "Let's hop on a call.", tag: "Rele", emoji: "📞" },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Home", display: "I work from home." },
      { chipLabel: "Hours", display: "I'm online from 9 to 5." },
      { chipLabel: "Call", display: "Let's hop on a call." },
    ],
    vocabulary: [
      {
        word: "Remote",
        ipa: "/rɪˈmoʊt/",
        kreyol: "Adistans",
        example: "I have a remote job.",
      },
      {
        word: "Deadline",
        ipa: "/ˈdɛdlaɪn/",
        kreyol: "Dat limit",
        example: "I meet every deadline.",
      },
      {
        word: "Availability",
        ipa: "/əˌveɪləˈbɪləti/",
        kreyol: "Disponiblite",
        example: "What is your availability?",
      },
      {
        word: "Timezone",
        ipa: "/ˈtaɪmzoʊn/",
        kreyol: "Zòn orè",
        example: "We are in different timezones.",
      },
      {
        word: "Task",
        ipa: "/tæsk/",
        kreyol: "Tach",
        example: "I finished the task.",
      },
    ],
    pronunciationWord: "Availability",
    pronunciationIpa: "/əˌveɪləˈbɪləti/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** sis silab, ale dousman — “uh-vey-luh-BIL-uh-tee”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I work in home” — se “I work from home”.",
    mistakeWrong: "I work in home.",
    mistakeCorrect: "I work from home.",
    mistakeWhy:
      "**Poukisa:** Ekspresyon fikse a se “work from home” (pa “in home”) — se konsa tout moun di li an Anglè.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk:",
      options: [
        "I work in home.",
        "I work from home.",
        "I work at home to.",
        "I work on home.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — se “from home”.",
    },
    thinkEmoji: "🏠",
    thinkPrompt:
      "Ekri yon fraz sou orè travay ou (oswa orè ou ta renmen genyen):",
    thinkPlaceholder: "I'm online from... to...",
    aiPrompt:
      "Hi! Can you ask me about my remote work schedule and help me describe it in English?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike vokabilè travay adistans.",
    missionTask: "🎯 Jodi a, ekri yon fraz sou orè travay adistans ou.",
    recap: [
      { emoji: "🏠", text: "I work from home." },
      { emoji: "⏰", text: "I'm online from 9 to 5." },
      { emoji: "📞", text: "Let's hop on a call." },
      { emoji: "🎯", text: "Misyon: pale de orè travay adistans ou." },
    ],
  },
  {
    slug: "freelancing-and-invoices",
    moduleTitle: "Modil 13: Anglè Pou Travay",
    illustrationKey: "emoji",
    heroEmoji: "🧾",
    heroTitle: "Freelance ak Fakti",
    heroLede: "Yon freelancer bezwen pale de pri, kontra, ak peman.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab pale de travay freelance ak mande yon peman.",
    whatYouWillLearn: "vokabilè pou freelance, kontra, ak fakti",
    prerequisite: "Leson 5 — Travay Adistans",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 6 min lekti",
    completionTime: "✅ ~9 min pou konplete",
    understandHeading: "Yon freelancer bezwen pale de pri, kontra, ak peman.",
    understandBody:
      "**I'm a freelancer.** **Here is my invoice for this project.** **When can I expect payment?** Twa fraz sa yo debaz nan travay endepandan.",
    seeItInAction: [
      { line: "I'm a freelancer.", tag: "Prezante tèt ou", emoji: "🧑‍💻" },
      {
        line: "Here is my invoice for this project.",
        tag: "Fakti",
        emoji: "🧾",
      },
      { line: "When can I expect payment?", tag: "Peman", emoji: "💵" },
    ],
    patternBuilderIntro: "Klike sou chak etap pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Introduce", display: "I'm a freelancer." },
      { chipLabel: "Invoice", display: "Here is my invoice for this project." },
      { chipLabel: "Payment", display: "When can I expect payment?" },
    ],
    vocabulary: [
      {
        word: "Freelancer",
        ipa: "/ˈfriːlænsər/",
        kreyol: "Travayè endepandan",
        example: "I'm a freelancer.",
      },
      {
        word: "Invoice",
        ipa: "/ˈɪnvɔɪs/",
        kreyol: "Fakti",
        example: "I sent the invoice.",
      },
      {
        word: "Payment",
        ipa: "/ˈpeɪmənt/",
        kreyol: "Peman",
        example: "I'm waiting for payment.",
      },
      {
        word: "Contract",
        ipa: "/ˈkɒntrækt/",
        kreyol: "Kontra",
        example: "Please sign the contract.",
      },
      {
        word: "Rate",
        ipa: "/reɪt/",
        kreyol: "Pri (pa èdtan/pwojè)",
        example: "My rate is $20 per hour.",
      },
    ],
    pronunciationWord: "Invoice",
    pronunciationIpa: "/ˈɪnvɔɪs/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** de silab, aksan an sou premye — “IN-voys”.",
    pronunciationMistake:
      "**Erè komen:** pa di “Send me the money paper” — se “Send me the invoice”.",
    mistakeWrong: "Send me the money paper.",
    mistakeCorrect: "Send me the invoice.",
    mistakeWhy:
      "**Poukisa:** Dokiman ki mande peman an gen yon non presi an Anglè: “invoice”, pa yon tradiksyon literal.",
    practice: {
      prompt: "Ki mo ki dekri dokiman ki mande peman pou yon travay?",
      options: ["Contract", "Invoice", "Resume", "Agenda"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — se “invoice”.",
    },
    thinkEmoji: "🧾",
    thinkPrompt: "Ekri yon fraz pou mande yon kliyan lè w ap resevwa peman:",
    thinkPlaceholder: "When can I expect payment for...",
    aiPrompt:
      "Hi! Can you act as a client and let me practice explaining my freelance rate and sending an invoice in English?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike freelance/fakti/peman.",
    missionTask:
      "🎯 Jodi a, ekri yon fraz kout pou mande yon kliyan konsènan peman.",
    recap: [
      { emoji: "🧑‍💻", text: "I'm a freelancer." },
      { emoji: "🧾", text: "Here is my invoice." },
      { emoji: "💵", text: "When can I expect payment?" },
      { emoji: "🎯", text: "Misyon: mande yon kliyan konsènan peman." },
    ],
  },
  {
    slug: "working-with-clients",
    moduleTitle: "Modil 13: Anglè Pou Travay",
    illustrationKey: "emoji",
    heroEmoji: "🤝",
    heroTitle: "Travay ak Kliyan",
    heroLede: "Yon bon relasyon ak kliyan kòmanse ak kominikasyon klè.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab kominike ak yon kliyan sou yon pwojè.",
    whatYouWillLearn: "vokabilè pou kominike ak yon kliyan sou yon pwojè",
    prerequisite: "Leson 6 — Freelance ak Fakti",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 6 min lekti",
    completionTime: "✅ ~9 min pou konplete",
    understandHeading:
      "Yon bon relasyon ak kliyan kòmanse ak kominikasyon klè.",
    understandBody:
      "**I'll have this ready by Friday.** **Can you clarify what you need?** **I'll send an update soon.** Twa fraz sa yo bati konfyans ak yon kliyan.",
    seeItInAction: [
      { line: "I'll have this ready by Friday.", tag: "Angajman", emoji: "📅" },
      {
        line: "Can you clarify what you need?",
        tag: "Klarifikasyon",
        emoji: "❓",
      },
      { line: "I'll send an update soon.", tag: "Swiv", emoji: "📩" },
    ],
    patternBuilderIntro: "Klike sou chak etap pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Commit", display: "I'll have this ready by Friday." },
      { chipLabel: "Clarify", display: "Can you clarify what you need?" },
      { chipLabel: "Update", display: "I'll send an update soon." },
    ],
    vocabulary: [
      {
        word: "Clarify",
        ipa: "/ˈklærəfaɪ/",
        kreyol: "Klarifye",
        example: "Can you clarify that?",
      },
      {
        word: "Feedback",
        ipa: "/ˈfiːdbæk/",
        kreyol: "Reyaksyon (opinyon)",
        example: "I'd like your feedback.",
      },
      {
        word: "Revision",
        ipa: "/rɪˈvɪʒən/",
        kreyol: "Korije/Chanjman",
        example: "I made a small revision.",
      },
      {
        word: "Approve",
        ipa: "/əˈpruːv/",
        kreyol: "Apwouve",
        example: "Please approve the design.",
      },
      {
        word: "Ready",
        ipa: "/ˈrɛdi/",
        kreyol: "Pare",
        example: "It will be ready by Friday.",
      },
    ],
    pronunciationWord: "Clarify",
    pronunciationIpa: "/ˈklærəfaɪ/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** twa silab, aksan an sou premye — “KLA-ri-fai”.",
    pronunciationMistake:
      "**Erè komen:** pa di “I will ready by Friday” — se “I'll have this ready by Friday”.",
    mistakeWrong: "I will ready by Friday.",
    mistakeCorrect: "I'll have this ready by Friday.",
    mistakeWhy:
      "**Poukisa:** “Ready” se yon adjektif, li bezwen vèb “have” pou fè yon fraz konplè: “I'll have this ready”.",
    practice: {
      prompt: "Chwazi fraz ki kòrèk pou di yon travay ap fini vandredi:",
      options: [
        "I will ready by Friday.",
        "I'll have this ready by Friday.",
        "I ready this by Friday.",
        "I am ready this Friday.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — se “I'll have this ready”.",
    },
    thinkEmoji: "🤝",
    thinkPrompt: "Ekri yon fraz pou bay yon kliyan yon mizajou sou yon pwojè:",
    thinkPlaceholder: "I'll send an update about...",
    aiPrompt:
      "Hi! Can you act as a client asking about a project's progress, and let me practice giving a clear update in English?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike kominikasyon ak kliyan.",
    missionTask:
      "🎯 Jodi a, ekri yon mizajou kout pou yon kliyan sou yon pwojè imajinè.",
    recap: [
      { emoji: "📅", text: "I'll have this ready by Friday." },
      { emoji: "❓", text: "Can you clarify what you need?" },
      { emoji: "📩", text: "I'll send an update soon." },
      { emoji: "🎯", text: "Misyon: bay yon kliyan yon mizajou." },
    ],
  },
  {
    slug: "presentations-and-networking",
    moduleTitle: "Modil 13: Anglè Pou Travay",
    illustrationKey: "emoji",
    heroEmoji: "🎤",
    heroTitle: "Prezantasyon ak Rezo",
    heroLede:
      "Prezante yon ide ak rankontre moun nan travay itilize fraz sanble.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab kòmanse yon prezantasyon ak prezante tèt ou nan yon evènman travay.",
    whatYouWillLearn: "fraz pou prezantasyon ak rezo pwofesyonèl",
    prerequisite: "Leson 7 — Travay ak Kliyan",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 6 min lekti",
    completionTime: "✅ ~9 min pou konplete",
    understandHeading:
      "Prezante yon ide ak rankontre moun nan travay itilize fraz sanble.",
    understandBody:
      "**Today, I'll be talking about...** **What do you do for work?** **Here's my business card.** Twa fraz sa yo itil nan yon prezantasyon ak nan yon evènman rezo.",
    seeItInAction: [
      {
        line: "Today, I'll be talking about...",
        tag: "Prezantasyon",
        emoji: "🎤",
      },
      { line: "What do you do for work?", tag: "Rezo", emoji: "🤝" },
      { line: "Here's my business card.", tag: "Kontak", emoji: "📇" },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Present", display: "Today, I'll be talking about..." },
      { chipLabel: "Network", display: "What do you do for work?" },
      { chipLabel: "Card", display: "Here's my business card." },
    ],
    vocabulary: [
      {
        word: "Presentation",
        ipa: "/ˌprɛzənˈteɪʃən/",
        kreyol: "Prezantasyon",
        example: "I have a presentation today.",
      },
      {
        word: "Audience",
        ipa: "/ˈɔːdiəns/",
        kreyol: "Piblik",
        example: "The audience asked questions.",
      },
      {
        word: "Network",
        ipa: "/ˈnɛtwɜːrk/",
        kreyol: "Rezo (kontak)",
        example: "I'm building my network.",
      },
      {
        word: "Introduce",
        ipa: "/ˌɪntrəˈdjuːs/",
        kreyol: "Prezante",
        example: "Let me introduce myself.",
      },
      {
        word: "Connection",
        ipa: "/kəˈnɛkʃən/",
        kreyol: "Koneksyon (relasyon)",
        example: "She's a great connection.",
      },
    ],
    pronunciationWord: "Presentation",
    pronunciationIpa: "/ˌprɛzənˈteɪʃən/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** kat silab, aksan an sou “TEY” — “prez-uhn-TEY-shuhn”.",
    pronunciationMistake:
      "**Erè komen:** pa di “What is your job?” tou sèk nan yon evènman rezo — pito di “What do you do?”, li son pi natirèl.",
    mistakeWrong: "What is your job?",
    mistakeCorrect: "What do you do?",
    mistakeWhy:
      "**Poukisa:** Nan yon evènman rezo kazyèl, “What do you do?” son pi natirèl ak pi amikal pase “What is your job?”, ki ka son twò dirèk.",
    practice: {
      prompt:
        "Ki fraz ki pi natirèl pou mande yon moun sou travay li nan yon evènman rezo?",
      options: [
        "What is your job?",
        "What do you do?",
        "Tell your job.",
        "Job, please?",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback: "❌ Eseye ankò — chwazi opsyon ki pi natirèl.",
    },
    thinkEmoji: "🎤",
    thinkPrompt: "Ekri yon fraz pou prezante tèt ou nan yon evènman travay:",
    thinkPlaceholder: "Hi, I'm... I work as...",
    aiPrompt:
      "Hi! Can you act as someone I just met at a work networking event and let me practice introducing myself?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike prezantasyon ak rezo.",
    missionTask:
      "🎯 Jodi a, ekri yon fraz pou prezante tèt ou nan yon evènman rezo imajinè.",
    recap: [
      { emoji: "🎤", text: "Today, I'll be talking about..." },
      {
        emoji: "🤝",
        text: '"What do you do?" pi natirèl pase "What is your job?"',
      },
      { emoji: "📇", text: "Here's my business card." },
      { emoji: "🎯", text: "Misyon: prezante tèt ou nan yon evènman rezo." },
    ],
  },
  {
    slug: "work-mission",
    moduleTitle: "Modil 13: Anglè Pou Travay",
    illustrationKey: "emoji",
    heroEmoji: "📊",
    heroTitle: "Yon Jounen nan Travay",
    heroLede:
      "Se lè a pou konbine vokabilè travay Modil 13 pou rakonte yon jounen travay konplè.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab rakonte yon jounen travay konplè an Anglè.",
    whatYouWillLearn:
      "kijan pou konbine tout vokabilè travay Modil 13 nan yon istwa",
    prerequisite: "Leson 8 — Prezantasyon ak Rezo",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 6 min lekti",
    completionTime: "✅ ~9 min pou konplete",
    understandHeading:
      "Yon jounen travay tipik itilize anpil nan vokabilè Modil 13 la.",
    understandBody:
      "**I checked my email and joined a meeting.** **I sent an invoice to a client.** **I gave a short presentation.** Konbine plizyè aksyon travay rakonte yon jounen konplè.",
    seeItInAction: [
      {
        line: "I checked my email and joined a meeting.",
        tag: "Maten",
        emoji: "📧",
      },
      { line: "I sent an invoice to a client.", tag: "Aprè midi", emoji: "🧾" },
      { line: "I gave a short presentation.", tag: "Fen jounen", emoji: "🎤" },
    ],
    patternBuilderIntro: "Klike sou chak moman pou wè fraz la.",
    patternBuilderOptions: [
      {
        chipLabel: "Morning",
        display: "I checked my email and joined a meeting.",
      },
      { chipLabel: "Afternoon", display: "I sent an invoice to a client." },
      { chipLabel: "End of day", display: "I gave a short presentation." },
    ],
    vocabulary: [
      {
        word: "Colleague",
        ipa: "/ˈkɒliːg/",
        kreyol: "Kòlèg",
        example: "My colleague helped me.",
      },
      {
        word: "Project",
        ipa: "/ˈprɒdʒɛkt/",
        kreyol: "Pwojè",
        example: "I finished the project.",
      },
      {
        word: "Report",
        ipa: "/rɪˈpɔːrt/",
        kreyol: "Rapò",
        example: "I wrote a report.",
      },
      {
        word: "Career",
        ipa: "/kəˈrɪər/",
        kreyol: "Karyè",
        example: "I love my career.",
      },
      {
        word: "Workplace",
        ipa: "/ˈwɜːrkpleɪs/",
        kreyol: "Espas travay",
        example: "This is a good workplace.",
      },
    ],
    pronunciationWord: "Colleague",
    pronunciationIpa: "/ˈkɒliːg/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** de silab, aksan an sou premye — “KOL-eeg”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye konjige chak vèb kòrèkteman menm nan yon istwa ak plizyè aksyon travay.",
    mistakeWrong: "I checks my email and joins a meeting. (lè sijè a se I)",
    mistakeCorrect: "I checked my email and joined a meeting.",
    mistakeWhy:
      "**Poukisa:** Sijè “I” pa janm pran “-s” sou vèb la; itilize yon tan konsistan (isit la, tan pase) pou tout aksyon yo.",
    practice: {
      prompt: "Ki vèsyon ki kòrèk pou rakonte yon jounen ki deja pase?",
      options: [
        "I check my email and join a meeting. (jodi a li deja fini)",
        "I checked my email and joined a meeting.",
        "I checking my email and joining a meeting.",
        "I checks my email and joins a meeting.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a kòrèk.",
      wrongFeedback:
        "❌ Eseye ankò — itilize tan pase pou yon jounen ki deja fini.",
    },
    thinkEmoji: "📊",
    thinkPrompt:
      "Ekri yon ti istwa sou yon jounen travay, ak omwen kat mo Modil 13:",
    thinkPlaceholder: "I checked my email, ... , and ...",
    aiPrompt:
      "Hi! Can you listen to a short story about my workday — emails, meetings, a client, a presentation — and give me friendly feedback?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 13 ansanm.",
    missionTask:
      "🎯 Jodi a, ekri oswa di yon ti istwa sou yon jounen travay konplè, imajinè oswa reyèl.",
    recap: [
      { emoji: "📊", text: "Konbine vokabilè travay pou rakonte yon istwa." },
      { emoji: "⚠️", text: "Itilize yon tan konsistan pou tout aksyon yo." },
      { emoji: "🎓", text: "Ou fini Modil 13 — Anglè Pou Travay!" },
      { emoji: "🎯", text: "Misyon: rakonte yon jounen travay." },
    ],
  },
  {
    slug: "listening-greetings",
    moduleTitle: "Modil 14: Konprann Lè W Tande",
    illustrationKey: "emoji",
    heroEmoji: "🎧",
    heroTitle: "Tande: Rankontre Yon Moun",
    heroLede: "Tande yon dyalòg kout epi konprann sa k ap pase.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab konprann yon ti dyalòg kote de moun ap prezante tèt yo.",
    whatYouWillLearn:
      "kijan pou konprann yon dyalòg kout ant de moun k ap rankontre",
    prerequisite: "Ou fin Modil 13 — Anglè Pou Travay",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 4 min lekti",
    completionTime: "✅ ~7 min pou konplete",
    understandHeading:
      "Li dyalòg la de fwa, epi eseye konprann san w pa tradwi chak mo.",
    understandBody:
      "**A: Hi! What's your name?** **B: I'm Maria. Nice to meet you.** **A: Nice to meet you too. Where are you from?** Se yon dyalòg kout ant de moun ki fèk rankontre.",
    seeItInAction: [
      { line: "Hi! What's your name?", tag: "Moun A", emoji: "🙋" },
      { line: "I'm Maria. Nice to meet you.", tag: "Moun B", emoji: "🙋‍♀️" },
      {
        line: "Nice to meet you too. Where are you from?",
        tag: "Moun A",
        emoji: "🙋",
      },
    ],
    patternBuilderIntro: "Klike sou chak liy pou tande fraz la pale.",
    patternBuilderOptions: [
      { chipLabel: "Ask name", display: "Hi! What's your name?" },
      { chipLabel: "Answer", display: "I'm Maria. Nice to meet you." },
      { chipLabel: "Ask origin", display: "Where are you from?" },
    ],
    vocabulary: [
      {
        word: "Meet",
        ipa: "/miːt/",
        kreyol: "Rankontre",
        example: "Nice to meet you.",
      },
      {
        word: "Name",
        ipa: "/neɪm/",
        kreyol: "Non",
        example: "What's your name?",
      },
      {
        word: "From",
        ipa: "/frʌm/",
        kreyol: "Sot nan",
        example: "Where are you from?",
      },
      {
        word: "Too",
        ipa: "/tuː/",
        kreyol: "Tou",
        example: "Nice to meet you too.",
      },
      {
        word: "Conversation",
        ipa: "/ˌkɒnvərˈseɪʃən/",
        kreyol: "Konvèsasyon",
        example: "Listen to the conversation.",
      },
    ],
    pronunciationWord: "Conversation",
    pronunciationIpa: "/ˌkɒnvərˈseɪʃən/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** kat silab, aksan an sou “SEY” — “kon-vər-SEY-shuhn”.",
    pronunciationMistake:
      "**Erè komen:** pa eseye tradwi chak mo yon-a-yon lè w ap tande — konsantre sou sans jeneral la dabò.",
    mistakeWrong: "Tradwi chak mo separeman pandan w ap tande.",
    mistakeCorrect: "Tande dyalòg la antye anvan w chèche detay.",
    mistakeWhy:
      "**Poukisa:** Lè w eseye tradwi chak mo pandan w ap tande, ou rate rès fraz la. Pi bon fason: tande antye a dabò, epi tounen gade detay yo.",
    practice: {
      prompt: "Kisa non fanm nan nan dyalòg la?",
      options: ["Maria", "Ana", "Sara", "Julia"],
      correctIndex: 0,
      correctFeedback: "✅ Wi! Non fanm nan se Maria.",
      wrongFeedback: "❌ Eseye ankò — relire dyalòg la.",
    },
    thinkEmoji: "🎧",
    thinkPrompt: "Ekri yon fraz sou kisa Moun A mande Moun B nan dyalòg la:",
    thinkPlaceholder: "Person A asked...",
    aiPrompt:
      "Hi! Can you read me a short two-person dialogue where they introduce themselves, then ask me a comprehension question about it?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike konprann dyalòg.",
    missionTask:
      "🎯 Jodi a, li dyalòg la awotvwa epi reponn: ki kote Moun B ta ka soti?",
    recap: [
      { emoji: "🎧", text: "Tande antye anvan w chèche detay." },
      { emoji: "🙋", text: "Hi! What's your name?" },
      { emoji: "🙋‍♀️", text: "I'm Maria. Nice to meet you." },
      { emoji: "🎯", text: "Misyon: reponn kesyon konpreyansyon an." },
    ],
  },
  {
    slug: "listening-family",
    moduleTitle: "Modil 14: Konprann Lè W Tande",
    illustrationKey: "emoji",
    heroEmoji: "🎧",
    heroTitle: "Tande: Pale de Fanmi",
    heroLede: "Tande yon dyalòg kout epi konprann sa k ap pase.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab konprann yon ti dyalòg sou fanmi.",
    whatYouWillLearn: "kijan pou konprann yon dyalòg kout sou fanmi",
    prerequisite: "Leson 1 — Tande: Rankontre Yon Moun",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 4 min lekti",
    completionTime: "✅ ~7 min pou konplete",
    understandHeading:
      "Li dyalòg la de fwa, epi eseye konprann san w pa tradwi chak mo.",
    understandBody:
      "**A: Do you have brothers or sisters?** **B: Yes, I have two brothers and one sister.** **A: That's a big family!** Se yon dyalòg kout sou fanmi.",
    seeItInAction: [
      { line: "Do you have brothers or sisters?", tag: "Moun A", emoji: "🙋" },
      {
        line: "Yes, I have two brothers and one sister.",
        tag: "Moun B",
        emoji: "🙋‍♀️",
      },
      { line: "That's a big family!", tag: "Moun A", emoji: "🙋" },
    ],
    patternBuilderIntro: "Klike sou chak liy pou tande fraz la pale.",
    patternBuilderOptions: [
      { chipLabel: "Ask", display: "Do you have brothers or sisters?" },
      {
        chipLabel: "Answer",
        display: "Yes, I have two brothers and one sister.",
      },
      { chipLabel: "React", display: "That's a big family!" },
    ],
    vocabulary: [
      {
        word: "Brother",
        ipa: "/ˈbrʌðər/",
        kreyol: "Frè",
        example: "I have two brothers.",
      },
      {
        word: "Sister",
        ipa: "/ˈsɪstər/",
        kreyol: "Sè",
        example: "I have one sister.",
      },
      {
        word: "Big",
        ipa: "/bɪg/",
        kreyol: "Gwo",
        example: "That's a big family.",
      },
      {
        word: "Both",
        ipa: "/boʊθ/",
        kreyol: "Toude",
        example: "I have both a brother and a sister.",
      },
      {
        word: "Total",
        ipa: "/ˈtoʊtəl/",
        kreyol: "Total",
        example: "Three siblings in total.",
      },
    ],
    pronunciationWord: "Both",
    pronunciationIpa: "/boʊθ/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** mete lang ou ant dan ou pou son “th” la, tankou nan “think”.",
    pronunciationMistake:
      "**Erè komen:** pa bliye adisyone tout moun yo ansanm lè w ap konte fanmi nan yon dyalòg.",
    mistakeWrong: "Konte sèlman youn nan de nimewo yo mansyone.",
    mistakeCorrect: "Adisyone tout moun yo mansyone ansanm.",
    mistakeWhy:
      "**Poukisa:** Lè w tande “two brothers and one sister”, ou dwe adisyone yo ansanm (2+1=3) pou konnen total fanmi an.",
    practice: {
      prompt: "Konbyen frè ak sè moun nan genyen antou?",
      options: ["2", "3", "4", "1"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! De frè plis yon sè fè twa antou.",
      wrongFeedback: "❌ Eseye ankò — adisyone frè yo ak sè a ansanm.",
    },
    thinkEmoji: "🎧",
    thinkPrompt: "Ekri yon fraz sou pwòp fanmi ou, tankou nan dyalòg la:",
    thinkPlaceholder: "I have... brothers and... sisters.",
    aiPrompt:
      "Hi! Can you read me a short dialogue about someone's family, then ask me how many siblings they have in total?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike konprann dyalòg sou fanmi.",
    missionTask:
      "🎯 Jodi a, di konbyen frè ak sè OU genyen, tankou moun nan dyalòg la.",
    recap: [
      { emoji: "🎧", text: "Adisyone chif yo lè w ap tande." },
      { emoji: "👨‍👩‍👧‍👦", text: "Two brothers and one sister = three." },
      { emoji: "🎯", text: "Misyon: di konbyen frè/sè ou genyen." },
      { emoji: "✅", text: "Ou konprann yon dyalòg sou fanmi." },
    ],
  },
  {
    slug: "listening-at-the-store",
    moduleTitle: "Modil 14: Konprann Lè W Tande",
    illustrationKey: "emoji",
    heroEmoji: "🎧",
    heroTitle: "Tande: Nan Magazen an",
    heroLede: "Tande yon dyalòg kout epi konprann sa k ap pase.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab konprann yon ti dyalòg pandan yon moun ap achte.",
    whatYouWillLearn: "kijan pou konprann yon dyalòg kout nan yon magazen",
    prerequisite: "Leson 2 — Tande: Pale de Fanmi",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 4 min lekti",
    completionTime: "✅ ~7 min pou konplete",
    understandHeading:
      "Li dyalòg la de fwa, epi eseye konprann san w pa tradwi chak mo.",
    understandBody:
      "**A: Excuse me, how much is this shirt?** **B: It's fifteen dollars.** **A: Can I pay with a card?** Se yon dyalòg kout nan yon magazen.",
    seeItInAction: [
      {
        line: "Excuse me, how much is this shirt?",
        tag: "Kliyan",
        emoji: "🙋",
      },
      { line: "It's fifteen dollars.", tag: "Vandè", emoji: "🧑‍💼" },
      { line: "Can I pay with a card?", tag: "Kliyan", emoji: "🙋" },
    ],
    patternBuilderIntro: "Klike sou chak liy pou tande fraz la pale.",
    patternBuilderOptions: [
      { chipLabel: "Ask price", display: "Excuse me, how much is this shirt?" },
      { chipLabel: "Answer", display: "It's fifteen dollars." },
      { chipLabel: "Pay", display: "Can I pay with a card?" },
    ],
    vocabulary: [
      {
        word: "Shirt",
        ipa: "/ʃɜːrt/",
        kreyol: "Chemiz",
        example: "How much is this shirt?",
      },
      {
        word: "Dollar",
        ipa: "/ˈdɒlər/",
        kreyol: "Dola",
        example: "It's fifteen dollars.",
      },
      {
        word: "Pay",
        ipa: "/peɪ/",
        kreyol: "Peye",
        example: "Can I pay with a card?",
      },
      {
        word: "Price",
        ipa: "/praɪs/",
        kreyol: "Pri",
        example: "What's the price?",
      },
      {
        word: "Cash",
        ipa: "/kæʃ/",
        kreyol: "Kach",
        example: "I'll pay with cash.",
      },
    ],
    pronunciationWord: "Fifteen",
    pronunciationIpa: "/ˌfɪfˈtiːn/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** aksan an sou dezyèm silab la — “fif-TEEN”, pa “FIF-teen”.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “fifteen” (15) ak “fifty” (50) — yo sonnen pre menm men se de chif diferan.",
    mistakeWrong: "Konprann “fifteen” tankou li se 50.",
    mistakeCorrect: "Fifteen = 15, fifty = 50 — de chif diferan.",
    mistakeWhy:
      "**Poukisa:** “Fifteen” (aksan sou dezyèm silab) ak “fifty” (aksan sou premye) sonnen sanble pou zòrèy ki pa abitye — koute byen ki silab ki gen aksan an.",
    practice: {
      prompt: "Konbyen chemiz la koute nan dyalòg la?",
      options: ["$50", "$15", "$5", "$150"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Chemiz la koute $15.",
      wrongFeedback: "❌ Eseye ankò — koute byen “fifteen” pa “fifty”.",
    },
    thinkEmoji: "🎧",
    thinkPrompt: "Ekri yon fraz pou mande pri yon bagay nan yon magazen:",
    thinkPlaceholder: "Excuse me, how much is...",
    aiPrompt:
      "Hi! Can you read me a short shopping dialogue with a price in it, then ask me how much the item costs?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike konprann pri lè w tande.",
    missionTask: "🎯 Jodi a, di pri yon bagay ou achte dènyèman an Anglè.",
    recap: [
      { emoji: "🎧", text: "Fifteen (15) pa fifty (50)." },
      { emoji: "🧑‍💼", text: "It's fifteen dollars." },
      { emoji: "💳", text: "Can I pay with a card?" },
      { emoji: "🎯", text: "Misyon: di pri yon bagay ou achte." },
    ],
  },
  {
    slug: "listening-at-the-restaurant",
    moduleTitle: "Modil 14: Konprann Lè W Tande",
    illustrationKey: "emoji",
    heroEmoji: "🎧",
    heroTitle: "Tande: Nan Restoran an",
    heroLede: "Tande yon dyalòg kout epi konprann sa k ap pase.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab konprann yon ti dyalòg pandan yon moun ap kòmande manje.",
    whatYouWillLearn: "kijan pou konprann yon dyalòg kout nan yon restoran",
    prerequisite: "Leson 3 — Tande: Nan Magazen an",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 4 min lekti",
    completionTime: "✅ ~7 min pou konplete",
    understandHeading:
      "Li dyalòg la de fwa, epi eseye konprann san w pa tradwi chak mo.",
    understandBody:
      "**Waiter: Are you ready to order?** **Customer: Yes, I'd like the chicken, please.** **Waiter: Would you like anything to drink?** Se yon dyalòg kout nan yon restoran.",
    seeItInAction: [
      { line: "Are you ready to order?", tag: "Sèvè", emoji: "🧑‍🍳" },
      {
        line: "Yes, I'd like the chicken, please.",
        tag: "Kliyan",
        emoji: "🙋",
      },
      { line: "Would you like anything to drink?", tag: "Sèvè", emoji: "🧑‍🍳" },
    ],
    patternBuilderIntro: "Klike sou chak liy pou tande fraz la pale.",
    patternBuilderOptions: [
      { chipLabel: "Ask order", display: "Are you ready to order?" },
      { chipLabel: "Order", display: "Yes, I'd like the chicken, please." },
      { chipLabel: "Ask drink", display: "Would you like anything to drink?" },
    ],
    vocabulary: [
      {
        word: "Order",
        ipa: "/ˈɔːrdər/",
        kreyol: "Kòmande",
        example: "Are you ready to order?",
      },
      {
        word: "Chicken",
        ipa: "/ˈtʃɪkɪn/",
        kreyol: "Poul",
        example: "I'd like the chicken.",
      },
      {
        word: "Drink",
        ipa: "/drɪŋk/",
        kreyol: "Bwè / Bwason",
        example: "Anything to drink?",
      },
      {
        word: "Ready",
        ipa: "/ˈrɛdi/",
        kreyol: "Pare",
        example: "Are you ready?",
      },
      {
        word: "Water",
        ipa: "/ˈwɔːtər/",
        kreyol: "Dlo",
        example: "Just water, thank you.",
      },
    ],
    pronunciationWord: "Ready",
    pronunciationIpa: "/ˈrɛdi/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “RED-dee”.",
    pronunciationMistake:
      "**Erè komen:** pa manke tande mo kout tankou “I'd” — li son tankou “ide” men vle di “I would”.",
    mistakeWrong: "Pa rekonèt “I'd” tankou yon fòm kout pou “I would”.",
    mistakeCorrect:
      "“I'd like...” = “I would like...” (yon fason politès pou mande).",
    mistakeWhy:
      "**Poukisa:** “I'd” se yon kontraksyon pou “I would” — li son kout men li gen tout sans “I would like”.",
    practice: {
      prompt: "Kisa kliyan an kòmande pou manje?",
      options: ["Fish", "Chicken", "Rice", "Salad"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Kliyan an kòmande chicken.",
      wrongFeedback: "❌ Eseye ankò — relire dyalòg la.",
    },
    thinkEmoji: "🎧",
    thinkPrompt:
      "Ekri sa OU ta kòmande nan yon restoran, tankou nan dyalòg la:",
    thinkPlaceholder: "I'd like...",
    aiPrompt:
      "Hi! Can you read me a short restaurant ordering dialogue, then ask me what the customer ordered?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike konprann yon dyalòg restoran.",
    missionTask: "🎯 Jodi a, di sa ou ta kòmande nan yon restoran an Anglè.",
    recap: [
      { emoji: "🎧", text: "“I'd like” = “I would like”." },
      { emoji: "🧑‍🍳", text: "Are you ready to order?" },
      { emoji: "🍗", text: "I'd like the chicken, please." },
      { emoji: "🎯", text: "Misyon: di sa ou ta kòmande." },
    ],
  },
  {
    slug: "listening-phone-call",
    moduleTitle: "Modil 14: Konprann Lè W Tande",
    illustrationKey: "emoji",
    heroEmoji: "🎧",
    heroTitle: "Tande: Yon Kout Fil",
    heroLede: "Tande yon dyalòg kout epi konprann sa k ap pase.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab konprann yon ti dyalòg nan yon kout fil.",
    whatYouWillLearn: "kijan pou konprann yon dyalòg kout nan telefòn",
    prerequisite: "Leson 4 — Tande: Nan Restoran an",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 4 min lekti",
    completionTime: "✅ ~7 min pou konplete",
    understandHeading:
      "Li dyalòg la de fwa, epi eseye konprann san w pa tradwi chak mo.",
    understandBody:
      "**A: Hello, this is Sarah.** **B: Hi Sarah, can I speak to David?** **A: Sorry, he's not here right now.** Se yon dyalòg kout nan yon kout fil.",
    seeItInAction: [
      { line: "Hello, this is Sarah.", tag: "Moun A", emoji: "📞" },
      { line: "Hi Sarah, can I speak to David?", tag: "Moun B", emoji: "📱" },
      { line: "Sorry, he's not here right now.", tag: "Moun A", emoji: "📞" },
    ],
    patternBuilderIntro: "Klike sou chak liy pou tande fraz la pale.",
    patternBuilderOptions: [
      { chipLabel: "Answer", display: "Hello, this is Sarah." },
      { chipLabel: "Ask for", display: "Can I speak to David?" },
      { chipLabel: "Explain", display: "Sorry, he's not here right now." },
    ],
    vocabulary: [
      {
        word: "Speak",
        ipa: "/spiːk/",
        kreyol: "Pale",
        example: "Can I speak to David?",
      },
      {
        word: "Sorry",
        ipa: "/ˈsɒri/",
        kreyol: "Padon / Eskize",
        example: "Sorry, he's not here.",
      },
      {
        word: "Right now",
        ipa: "/raɪt naʊ/",
        kreyol: "Kounye a menm",
        example: "He's not here right now.",
      },
      {
        word: "Call back",
        ipa: "/kɔːl bæk/",
        kreyol: "Rele ankò",
        example: "Can he call back later?",
      },
      {
        word: "Message",
        ipa: "/ˈmɛsɪdʒ/",
        kreyol: "Mesaj",
        example: "Can I leave a message?",
      },
    ],
    pronunciationWord: "Sorry",
    pronunciationIpa: "/ˈsɒri/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “SOR-ree”.",
    pronunciationMistake:
      "**Erè komen:** pa panse “this is Sarah” vle di Sarah ap gade yon bagay — se konsa moun prezante tèt yo nan telefòn.",
    mistakeWrong: "Konfonn “this is Sarah” ak yon lòt sans.",
    mistakeCorrect: "“This is Sarah” = fason yo prezante tèt yo nan telefòn.",
    mistakeWhy:
      "**Poukisa:** Nan telefòn, moun di “This is [non]” pou prezante tèt yo, pa “I am [non]” tankou nan lòt sitiyasyon.",
    practice: {
      prompt: "Kiyès ki pa la nan dyalòg la?",
      options: ["Sarah", "David", "Maria", "John"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! David pa la.",
      wrongFeedback: "❌ Eseye ankò — relire dyalòg la.",
    },
    thinkEmoji: "🎧",
    thinkPrompt:
      "Ekri fason ou ta reponn si yon moun mande pou pale ak yon moun ki pa la:",
    thinkPlaceholder: "Sorry, he's/she's not here right now...",
    aiPrompt:
      "Hi! Can you read me a short phone call dialogue where one person is asking for someone who isn't there, then ask me who's missing?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike konprann yon kout fil.",
    missionTask: "🎯 Jodi a, ekri fason ou ta reponn telefòn lan Anglè.",
    recap: [
      { emoji: "🎧", text: "“This is [non]” nan telefòn." },
      { emoji: "📞", text: "Can I speak to...?" },
      { emoji: "🙏", text: "Sorry, he's not here right now." },
      { emoji: "🎯", text: "Misyon: ekri fason ou reponn telefòn." },
    ],
  },
  {
    slug: "listening-at-the-doctor",
    moduleTitle: "Modil 14: Konprann Lè W Tande",
    illustrationKey: "emoji",
    heroEmoji: "🎧",
    heroTitle: "Tande: Kay Doktè a",
    heroLede: "Tande yon dyalòg kout epi konprann sa k ap pase.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab konprann yon ti dyalòg kay doktè.",
    whatYouWillLearn: "kijan pou konprann yon dyalòg kout kay doktè",
    prerequisite: "Leson 5 — Tande: Yon Kout Fil",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 4 min lekti",
    completionTime: "✅ ~7 min pou konplete",
    understandHeading:
      "Li dyalòg la de fwa, epi eseye konprann san w pa tradwi chak mo.",
    understandBody:
      "**Doctor: What's wrong today?** **Patient: I have a headache and I feel tired.** **Doctor: Let's check your temperature.** Se yon dyalòg kout kay doktè.",
    seeItInAction: [
      { line: "What's wrong today?", tag: "Doktè", emoji: "🩺" },
      {
        line: "I have a headache and I feel tired.",
        tag: "Pasyan",
        emoji: "🤒",
      },
      { line: "Let's check your temperature.", tag: "Doktè", emoji: "🩺" },
    ],
    patternBuilderIntro: "Klike sou chak liy pou tande fraz la pale.",
    patternBuilderOptions: [
      { chipLabel: "Ask", display: "What's wrong today?" },
      { chipLabel: "Describe", display: "I have a headache and I feel tired." },
      { chipLabel: "Check", display: "Let's check your temperature." },
    ],
    vocabulary: [
      {
        word: "Headache",
        ipa: "/ˈhɛdeɪk/",
        kreyol: "Tèt fè mal",
        example: "I have a headache.",
      },
      {
        word: "Tired",
        ipa: "/ˈtaɪərd/",
        kreyol: "Fatige",
        example: "I feel tired.",
      },
      {
        word: "Temperature",
        ipa: "/ˈtɛmprətʃər/",
        kreyol: "Tanperati",
        example: "Let's check your temperature.",
      },
      {
        word: "Wrong",
        ipa: "/rɒŋ/",
        kreyol: "Pa nòmal (pwoblèm)",
        example: "What's wrong today?",
      },
      {
        word: "Feel",
        ipa: "/fiːl/",
        kreyol: "Santi",
        example: "I feel tired.",
      },
    ],
    pronunciationWord: "Temperature",
    pronunciationIpa: "/ˈtɛmprətʃər/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** twa silab lè w pale vit — “TEM-pruh-chər”.",
    pronunciationMistake:
      "**Erè komen:** pa manke tande de sentòm ki mansyone youn apre lòt nan menm fraz la.",
    mistakeWrong: "Sèlman tande premye sentòm nan epi rate dezyèm nan.",
    mistakeCorrect: "Tande tout lis sentòm yo nan yon fraz ki gen “and”.",
    mistakeWhy:
      "**Poukisa:** Lè yon fraz gen “and” ant de sentòm (“a headache and I feel tired”), tande toude, pa sèlman premye a.",
    practice: {
      prompt: "Ki de sentòm pasyan an genyen?",
      options: [
        "Fever and cough",
        "Headache and tired",
        "Stomachache and cold",
        "Nothing",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Li gen tèt fè mal ak li fatige.",
      wrongFeedback: "❌ Eseye ankò — relire dyalòg la.",
    },
    thinkEmoji: "🎧",
    thinkPrompt: "Ekri yon fraz pou dekri kijan ou santi w jodi a:",
    thinkPlaceholder: "I have... I feel...",
    aiPrompt:
      "Hi! Can you read me a short doctor-patient dialogue about symptoms, then ask me what the patient's symptoms are?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike konprann yon dyalòg doktè.",
    missionTask:
      "🎯 Jodi a, di kijan ou santi w jodi a an Anglè, tankou pasyan an.",
    recap: [
      { emoji: "🎧", text: "Tande tout sentòm ki nan yon fraz ak “and”." },
      { emoji: "🩺", text: "What's wrong today?" },
      { emoji: "🤒", text: "I have a headache and I feel tired." },
      { emoji: "🎯", text: "Misyon: di kijan ou santi w." },
    ],
  },
  {
    slug: "listening-technology",
    moduleTitle: "Modil 14: Konprann Lè W Tande",
    illustrationKey: "emoji",
    heroEmoji: "🎧",
    heroTitle: "Tande: Yon Pwoblèm Teknoloji",
    heroLede: "Tande yon dyalòg kout epi konprann sa k ap pase.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab konprann yon ti dyalòg sou yon pwoblèm teknoloji.",
    whatYouWillLearn:
      "kijan pou konprann yon dyalòg kout sou yon pwoblèm teknoloji",
    prerequisite: "Leson 6 — Tande: Kay Doktè a",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 4 min lekti",
    completionTime: "✅ ~7 min pou konplete",
    understandHeading:
      "Li dyalòg la de fwa, epi eseye konprann san w pa tradwi chak mo.",
    understandBody:
      "**A: My internet is very slow today.** **B: Did you restart your router?** **A: Not yet, let me try that.** Se yon dyalòg kout sou yon pwoblèm teknoloji.",
    seeItInAction: [
      { line: "My internet is very slow today.", tag: "Moun A", emoji: "🐌" },
      { line: "Did you restart your router?", tag: "Moun B", emoji: "🔄" },
      { line: "Not yet, let me try that.", tag: "Moun A", emoji: "👍" },
    ],
    patternBuilderIntro: "Klike sou chak liy pou tande fraz la pale.",
    patternBuilderOptions: [
      { chipLabel: "Problem", display: "My internet is very slow today." },
      { chipLabel: "Suggest", display: "Did you restart your router?" },
      { chipLabel: "Respond", display: "Not yet, let me try that." },
    ],
    vocabulary: [
      {
        word: "Restart",
        ipa: "/riːˈstɑːrt/",
        kreyol: "Redemare",
        example: "Did you restart your router?",
      },
      {
        word: "Router",
        ipa: "/ˈraʊtər/",
        kreyol: "Routè",
        example: "Restart your router.",
      },
      {
        word: "Slow",
        ipa: "/sloʊ/",
        kreyol: "Lan",
        example: "My internet is slow.",
      },
      {
        word: "Not yet",
        ipa: "/nɒt jɛt/",
        kreyol: "Poko",
        example: "Not yet, let me try that.",
      },
      {
        word: "Try",
        ipa: "/traɪ/",
        kreyol: "Eseye",
        example: "Let me try that.",
      },
    ],
    pronunciationWord: "Restart",
    pronunciationIpa: "/riːˈstɑːrt/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** de silab, aksan an sou dezyèm — “ri-START”.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “Not yet” (poko fè l) ak “No” (non, mwen p ap fè l) — de sans diferan.",
    mistakeWrong: "Konprann “Not yet” tankou “No”.",
    mistakeCorrect: "“Not yet” vle di li pa ko fèt, men l ap fèt.",
    mistakeWhy:
      "**Poukisa:** “Not yet” montre entansyon pou fè bagay la pita, alò se yon repons diferan de “No” (refi total).",
    practice: {
      prompt: "Ki pwoblèm moun nan genyen nan dyalòg la?",
      options: [
        "Forgot password",
        "Slow internet",
        "Phone broken",
        "No battery",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Entènèt la lan.",
      wrongFeedback: "❌ Eseye ankò — relire dyalòg la.",
    },
    thinkEmoji: "🎧",
    thinkPrompt:
      "Ekri yon fraz sou yon pwoblèm teknoloji ou te genyen dènyèman:",
    thinkPlaceholder: "My... was/is...",
    aiPrompt:
      "Hi! Can you read me a short dialogue about a tech problem, then ask me what the problem was?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike konprann yon pwoblèm teknoloji.",
    missionTask:
      "🎯 Jodi a, di yon pwoblèm teknoloji ou te genyen dènyèman an Anglè.",
    recap: [
      { emoji: "🎧", text: "“Not yet” pa menm bagay ak “No”." },
      { emoji: "🐌", text: "My internet is very slow today." },
      { emoji: "🔄", text: "Did you restart your router?" },
      { emoji: "🎯", text: "Misyon: di yon pwoblèm teknoloji ou te genyen." },
    ],
  },
  {
    slug: "listening-at-work",
    moduleTitle: "Modil 14: Konprann Lè W Tande",
    illustrationKey: "emoji",
    heroEmoji: "🎧",
    heroTitle: "Tande: Pwograme Yon Reyinyon",
    heroLede: "Tande yon dyalòg kout epi konprann sa k ap pase.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab konprann yon ti dyalòg pandan de moun ap pwograme yon reyinyon.",
    whatYouWillLearn:
      "kijan pou konprann yon dyalòg kout nan yon anviwònman travay",
    prerequisite: "Leson 7 — Tande: Yon Pwoblèm Teknoloji",
    difficultyLabel: "🟢 Fasil",
    readingTime: "⏱ 4 min lekti",
    completionTime: "✅ ~7 min pou konplete",
    understandHeading:
      "Li dyalòg la de fwa, epi eseye konprann san w pa tradwi chak mo.",
    understandBody:
      "**A: Can we schedule the meeting for Friday?** **B: Friday works for me. What time?** **A: Let's say 10 AM.** Se yon dyalòg kout nan yon anviwònman travay.",
    seeItInAction: [
      {
        line: "Can we schedule the meeting for Friday?",
        tag: "Moun A",
        emoji: "📅",
      },
      { line: "Friday works for me. What time?", tag: "Moun B", emoji: "👍" },
      { line: "Let's say 10 AM.", tag: "Moun A", emoji: "⏰" },
    ],
    patternBuilderIntro: "Klike sou chak liy pou tande fraz la pale.",
    patternBuilderOptions: [
      {
        chipLabel: "Propose",
        display: "Can we schedule the meeting for Friday?",
      },
      { chipLabel: "Agree", display: "Friday works for me. What time?" },
      { chipLabel: "Confirm time", display: "Let's say 10 AM." },
    ],
    vocabulary: [
      {
        word: "Schedule",
        ipa: "/ˈskɛdʒuːl/",
        kreyol: "Pwograme",
        example: "Can we schedule the meeting?",
      },
      {
        word: "Works for me",
        ipa: "/wɜːrks fɔːr miː/",
        kreyol: "Sa bon pou mwen",
        example: "Friday works for me.",
      },
      { word: "Time", ipa: "/taɪm/", kreyol: "Lè", example: "What time?" },
      {
        word: "AM",
        ipa: "/eɪ ɛm/",
        kreyol: "Nan maten (avan midi)",
        example: "Let's say 10 AM.",
      },
      {
        word: "Confirm",
        ipa: "/kənˈfɜːrm/",
        kreyol: "Konfime",
        example: "Let's confirm the time.",
      },
    ],
    pronunciationWord: "Schedule",
    pronunciationIpa: "/ˈskɛdʒuːl/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “SKE-jool”.",
    pronunciationMistake:
      "**Erè komen:** pa konfonn “10 AM” (10è maten) ak “10 PM” (10è swa) — de moman diferan nan jounen an.",
    mistakeWrong: "Konprann “AM” tankou li vle di swa.",
    mistakeCorrect: "“AM” = maten, “PM” = apre midi/swa.",
    mistakeWhy:
      "**Poukisa:** An Anglè, “AM” toujou vle di anvan midi (maten), “PM” apre midi. Konfonn yo ka fè w rate yon randevou nèt.",
    practice: {
      prompt: "Ki lè reyinyon an ye nan dyalòg la?",
      options: ["9 AM", "10 AM", "11 AM", "Friday afternoon"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Reyinyon an se a 10 AM.",
      wrongFeedback: "❌ Eseye ankò — relire dyalòg la.",
    },
    thinkEmoji: "🎧",
    thinkPrompt: "Ekri yon fraz pou pwograme yon reyinyon imajinè:",
    thinkPlaceholder: "Can we schedule... for...",
    aiPrompt:
      "Hi! Can you read me a short dialogue about scheduling a meeting, then ask me what day and time they agreed on?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike konprann yon dyalòg travay.",
    missionTask:
      "🎯 Jodi a, pwograme yon reyinyon imajinè: chwazi yon jou ak yon lè an Anglè.",
    recap: [
      { emoji: "🎧", text: "AM = maten, PM = apre midi/swa." },
      { emoji: "📅", text: "Can we schedule the meeting for Friday?" },
      { emoji: "⏰", text: "Let's say 10 AM." },
      { emoji: "🎯", text: "Misyon: pwograme yon reyinyon imajinè." },
    ],
  },
  {
    slug: "listening-mission",
    moduleTitle: "Modil 14: Konprann Lè W Tande",
    illustrationKey: "emoji",
    heroEmoji: "🎧",
    heroTitle: "Tande ak Konprann",
    heroLede:
      "Se lè a pou konbine tout sa ou aprann nan Modil 14 nan yon dyalòg pi long.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab konprann yon dyalòg ki gen plizyè sijè ansanm.",
    whatYouWillLearn:
      "kijan pou konprann yon dyalòg pi long ki melanje plizyè sijè",
    prerequisite: "Leson 8 — Tande: Pwograme Yon Reyinyon",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Yon dyalòg reyèl souvan melanje plizyè sijè ansanm.",
    understandBody:
      "**A: Hi Marc, how are you?** **B: I'm good, but my Wi-Fi isn't working.** **A: That's annoying. Are we still meeting at 3 PM?** **B: Yes, I'll be there. See you soon!**",
    seeItInAction: [
      { line: "Hi Marc, how are you?", tag: "Salitasyon", emoji: "🙋" },
      {
        line: "I'm good, but my Wi-Fi isn't working.",
        tag: "Pwoblèm",
        emoji: "📶",
      },
      {
        line: "Are we still meeting at 3 PM?",
        tag: "Konfime randevou",
        emoji: "⏰",
      },
    ],
    patternBuilderIntro: "Klike sou chak liy pou tande fraz la pale.",
    patternBuilderOptions: [
      { chipLabel: "Greet", display: "Hi Marc, how are you?" },
      {
        chipLabel: "Problem",
        display: "I'm good, but my Wi-Fi isn't working.",
      },
      { chipLabel: "Confirm", display: "Are we still meeting at 3 PM?" },
    ],
    vocabulary: [
      {
        word: "Annoying",
        ipa: "/əˈnɔɪɪŋ/",
        kreyol: "Anmerdan",
        example: "That's annoying.",
      },
      {
        word: "Still",
        ipa: "/stɪl/",
        kreyol: "Toujou (kontinye)",
        example: "Are we still meeting?",
      },
      { word: "Soon", ipa: "/suːn/", kreyol: "Talè", example: "See you soon!" },
      {
        word: "Working",
        ipa: "/ˈwɜːrkɪŋ/",
        kreyol: "K ap mache",
        example: "My Wi-Fi isn't working.",
      },
      {
        word: "Understand",
        ipa: "/ˌʌndərˈstænd/",
        kreyol: "Konprann",
        example: "I understand the dialogue.",
      },
    ],
    pronunciationWord: "Understand",
    pronunciationIpa: "/ˌʌndərˈstænd/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** twa silab, aksan an sou dènye — “un-dər-STAND”.",
    pronunciationMistake:
      "**Erè komen:** pa panse yon dyalòg dwe gen yon sèl sijè — anpil fwa li melanje plizyè bagay (yon pwoblèm PLIS yon randevou).",
    mistakeWrong: "Sispann tande apre premye enfòmasyon an.",
    mistakeCorrect:
      "Kontinye tande — souvan gen plis pase yon enfòmasyon nan menm dyalòg la.",
    mistakeWhy:
      "**Poukisa:** Nan dyalòg sa a, gen toude yon pwoblèm (Wi-Fi) AK yon randevou (3 PM) — si w sispann tande twò bonè, ou rate dezyèm enfòmasyon an.",
    practice: {
      prompt: "Ki pwoblèm Marc genyen, epi ki lè randevou a?",
      options: [
        "Phone broken, 3 PM",
        "Wi-Fi not working, 3 PM",
        "Wi-Fi not working, 10 AM",
        "No problem, 3 PM",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Wi-Fi Marc a pa mache, e randevou a se 3 PM.",
      wrongFeedback: "❌ Eseye ankò — relire dyalòg la antye.",
    },
    thinkEmoji: "🎧",
    thinkPrompt:
      "Ekri yon ti dyalòg pa w ki melanje yon pwoblèm ak yon randevou, ak omwen kat mo Modil 14:",
    thinkPlaceholder: "Hi, how are you? ... but ... Are we still...",
    aiPrompt:
      "Hi! Can you read me a longer dialogue that mixes a small problem with a scheduling detail, then quiz me on both pieces of information?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike konprann dyalòg ki melanje plizyè sijè.",
    missionTask:
      "🎯 Jodi a, tande (oswa li) yon dyalòg an Anglè epi ekri toude enfòmasyon prensipal yo.",
    recap: [
      { emoji: "🎧", text: "Yon dyalòg ka melanje plizyè sijè." },
      { emoji: "📶", text: "I'm good, but my Wi-Fi isn't working." },
      { emoji: "🎓", text: "Ou fini Modil 14 — Konprann Lè W Tande!" },
      { emoji: "🎯", text: "Misyon: ekri de enfòmasyon prensipal yon dyalòg." },
    ],
  },
  {
    slug: "small-talk-basics",
    moduleTitle: "Modil 15: Ekspresyon ak Kilti",
    illustrationKey: "emoji",
    heroEmoji: "☕",
    heroTitle: "Baz Ti Pale (Small Talk)",
    heroLede: "Small talk se yon konvèsasyon lejè anvan yon sijè serye.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab kòmanse yon ti konvèsasyon lejè.",
    whatYouWillLearn: "fraz debaz pou kòmanse small talk",
    prerequisite: "Ou fin Modil 14 — Konprann Lè W Tande",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Small talk se yon konvèsasyon lejè anvan yon sijè serye.",
    understandBody:
      "**How's it going?** **Nice weather today, isn't it?** **Any big plans for the weekend?** Twa fraz sa yo kòmanse prèske nenpòt small talk an Anglè.",
    seeItInAction: [
      { line: "How's it going?", tag: "Salitasyon lejè", emoji: "👋" },
      {
        line: "Nice weather today, isn't it?",
        tag: "Move tan/bon tan",
        emoji: "☀️",
      },
      { line: "Any big plans for the weekend?", tag: "Wikenn", emoji: "📅" },
    ],
    patternBuilderIntro: "Klike sou chak sitiyasyon pou wè fraz la.",
    patternBuilderOptions: [
      { chipLabel: "Greeting", display: "How's it going?" },
      { chipLabel: "Weather", display: "Nice weather today, isn't it?" },
      { chipLabel: "Weekend", display: "Any big plans for the weekend?" },
    ],
    vocabulary: [
      {
        word: "Small talk",
        ipa: "/smɔːl tɔːk/",
        kreyol: "Ti pale (konvèsasyon lejè)",
        example: "Let's make some small talk.",
      },
      {
        word: "Weather",
        ipa: "/ˈwɛðər/",
        kreyol: "Tan (klima)",
        example: "Nice weather today.",
      },
      {
        word: "Plans",
        ipa: "/plænz/",
        kreyol: "Plan",
        example: "Any plans for the weekend?",
      },
      {
        word: "Isn't it?",
        ipa: "/ˈɪzənt ɪt/",
        kreyol: "Pa vre?",
        example: "Nice weather, isn't it?",
      },
      {
        word: "Going",
        ipa: "/ˈgoʊɪŋ/",
        kreyol: "K ap mache",
        example: "How's it going?",
      },
    ],
    pronunciationWord: "Weather",
    pronunciationIpa: "/ˈwɛðər/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** mete lang ou ant dan ou pou son “th” la nan mitan mo a.",
    pronunciationMistake:
      "**Erè komen:** pa reponn “How's it going?” tankou se yon vrè kesyon medikal — se jis yon fason politès pou di “Bonjou”.",
    mistakeWrong:
      "Reponn “How's it going?” ak yon long istwa detaye sou lavi w.",
    mistakeCorrect: "Reponn kout: “Good, thanks! And you?”",
    mistakeWhy:
      "**Poukisa:** “How's it going?” se pito yon salitasyon pase yon kesyon reyèl — yon repons kout ak politès (“Good, thanks!”) pi natirèl pase yon istwa long.",
    practice: {
      prompt: "Yon moun mande w “How's it going?” Ki repons ki pi natirèl?",
      options: [
        "Well, yesterday I woke up at 6 AM and then...",
        "Good, thanks! And you?",
        "Why do you ask?",
        "I don't know.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Yon repons kout ak politès se sa ki pi natirèl.",
      wrongFeedback: "❌ Eseye ankò — chwazi repons ki pi kout ak natirèl.",
    },
    thinkEmoji: "☕",
    thinkPrompt:
      "Ekri yon fraz small talk ou ta itilize ak yon moun ou fèk rankontre:",
    thinkPlaceholder: "Nice weather today, isn't it? / How's it going?",
    aiPrompt:
      "Hi! Can you practice some short small talk with me — weather, weekend plans — and give me feedback on how natural my responses sound?",
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike small talk.",
    missionTask:
      "🎯 Jodi a, ekri yon ti echanj small talk (de-twa fraz) tankou nan leson an.",
    recap: [
      { emoji: "☕", text: "Small talk se yon konvèsasyon lejè." },
      { emoji: "👋", text: "How's it going?" },
      { emoji: "☀️", text: "Nice weather today, isn't it?" },
      { emoji: "🎯", text: "Misyon: ekri yon ti echanj small talk." },
    ],
  },
  {
    slug: "common-idioms-part-1",
    moduleTitle: "Modil 15: Ekspresyon ak Kilti",
    illustrationKey: "emoji",
    heroEmoji: "🐱",
    heroTitle: "Ekspresyon Popilè, Pati 1",
    heroLede:
      "Yon idiom pa gen sans literal — li gen yon sans espesyal moun konnen.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap konprann ak itilize senk ekspresyon popilè an Anglè.",
    whatYouWillLearn: "senk ekspresyon (idioms) chak jou moun itilize",
    prerequisite: "Leson 1 — Baz Ti Pale (Small Talk)",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Yon idiom pa gen sans literal — li gen yon sans espesyal moun konnen.",
    understandBody:
      "**It's raining cats and dogs.** (Lapli ap tonbe anpil) **That's a piece of cake.** (Sa fasil anpil) **Break a leg!** (Bòn chans!) Twa idiom sa yo pami pi popilè yo.",
    seeItInAction: [
      {
        line: "It's raining cats and dogs.",
        tag: "Lapli ap tonbe anpil",
        emoji: "🌧️",
      },
      { line: "That's a piece of cake.", tag: "Sa fasil anpil", emoji: "🍰" },
      { line: "Break a leg!", tag: "Bòn chans!", emoji: "🍀" },
    ],
    patternBuilderIntro: "Klike sou chak idiom pou wè sans li.",
    patternBuilderOptions: [
      { chipLabel: "Rain", display: "It's raining cats and dogs." },
      { chipLabel: "Easy", display: "That's a piece of cake." },
      { chipLabel: "Luck", display: "Break a leg!" },
    ],
    vocabulary: [
      {
        word: "Idiom",
        ipa: "/ˈɪdiəm/",
        kreyol: "Ekspresyon (sans espesyal)",
        example: "That's a common idiom.",
      },
      {
        word: "Piece of cake",
        ipa: "/piːs əv keɪk/",
        kreyol: "Fasil anpil",
        example: "The test was a piece of cake.",
      },
      {
        word: "Break a leg",
        ipa: "/breɪk ə lɛg/",
        kreyol: "Bòn chans",
        example: "Break a leg on your interview!",
      },
      {
        word: "Raining cats and dogs",
        ipa: "/reɪnɪŋ kæts ænd dɒgz/",
        kreyol: "Lapli ap tonbe anpil",
        example: "It's raining cats and dogs outside.",
      },
      {
        word: "Meaning",
        ipa: "/ˈmiːnɪŋ/",
        kreyol: "Sans",
        example: "What's the meaning of this idiom?",
      },
    ],
    pronunciationWord: "Idiom",
    pronunciationIpa: "/ˈɪdiəm/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** twa silab, aksan an sou premye — “ID-ee-uhm”.",
    pronunciationMistake:
      "**Erè komen:** pa eseye tradwi yon idiom mo pou mo — “raining cats and dogs” pa vle di bèt ap tonbe nan syèl la!",
    mistakeWrong: "Tradwi “It's raining cats and dogs” mo pou mo.",
    mistakeCorrect:
      "Konprann li vle di “Lapli ap tonbe anpil” — pa yon tradiksyon literal.",
    mistakeWhy:
      "**Poukisa:** Idiom yo gen yon sans espesyal ki pa vin dirèkteman de mo yo. Aprann sans lan tankou yon sèl inite, pa tradwi chak mo separeman.",
    practice: {
      prompt: "Kisa “That's a piece of cake” vle di?",
      options: [
        "Se gen yon gato pou manje.",
        "Sa fasil anpil.",
        "Sa difisil anpil.",
        "Mwen grangou.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Li vle di sa fasil anpil.",
      wrongFeedback: "❌ Eseye ankò — se pa yon sans literal.",
    },
    thinkEmoji: "🐱",
    thinkPrompt:
      "Ekri yon fraz ak youn nan twa idiom yo pou dekri yon sitiyasyon reyèl ou:",
    thinkPlaceholder: "That was a piece of cake because...",
    aiPrompt:
      'Hi! Can you teach me the meaning of "it\'s raining cats and dogs," "a piece of cake," and "break a leg" with example sentences?',
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike idiom yo.",
    missionTask:
      "🎯 Jodi a, itilize youn nan twa idiom yo nan yon fraz sou pwòp lavi w.",
    recap: [
      { emoji: "🌧️", text: "It's raining cats and dogs = anpil lapli." },
      { emoji: "🍰", text: "A piece of cake = fasil anpil." },
      { emoji: "🍀", text: "Break a leg = bòn chans." },
      { emoji: "🎯", text: "Misyon: itilize yon idiom nan yon fraz reyèl." },
    ],
  },
  {
    slug: "common-idioms-part-2",
    moduleTitle: "Modil 15: Ekspresyon ak Kilti",
    illustrationKey: "emoji",
    heroEmoji: "📚",
    heroTitle: "Ekspresyon Popilè, Pati 2",
    heroLede: "Kontinye aprann idiom moun itilize chak jou nan konvèsasyon.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap konprann ak itilize senk lòt ekspresyon popilè.",
    whatYouWillLearn: "senk lòt idiom chak jou moun itilize",
    prerequisite: "Leson 2 — Ekspresyon Popilè, Pati 1",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Idiom sa yo parèt souvan nan lekòl, sante, ak lajan.",
    understandBody:
      "**I need to hit the books tonight.** (Mwen bezwen etidye) **I'm feeling a little under the weather.** (Mwen pa santi m byen) **That car costs an arm and a leg.** (Machin sa a koute anpil kòb) Twa idiom sa yo popilè tou.",
    seeItInAction: [
      { line: "I need to hit the books tonight.", tag: "Etidye", emoji: "📚" },
      {
        line: "I'm feeling a little under the weather.",
        tag: "Malad",
        emoji: "🤒",
      },
      {
        line: "That car costs an arm and a leg.",
        tag: "Chè anpil",
        emoji: "💰",
      },
    ],
    patternBuilderIntro: "Klike sou chak idiom pou wè sans li.",
    patternBuilderOptions: [
      { chipLabel: "Study", display: "I need to hit the books tonight." },
      { chipLabel: "Sick", display: "I'm feeling a little under the weather." },
      { chipLabel: "Expensive", display: "That car costs an arm and a leg." },
    ],
    vocabulary: [
      {
        word: "Hit the books",
        ipa: "/hɪt ðə bʊks/",
        kreyol: "Etidye di",
        example: "I need to hit the books tonight.",
      },
      {
        word: "Under the weather",
        ipa: "/ˈʌndər ðə ˈwɛðər/",
        kreyol: "Pa santi w byen",
        example: "I'm under the weather today.",
      },
      {
        word: "Arm and a leg",
        ipa: "/ɑːrm ænd ə lɛg/",
        kreyol: "Anpil kòb (chè anpil)",
        example: "It costs an arm and a leg.",
      },
      {
        word: "Bite the bullet",
        ipa: "/baɪt ðə ˈbʊlɪt/",
        kreyol: "Aksepte yon bagay difisil",
        example: "I'll just bite the bullet and do it.",
      },
      {
        word: "Once in a while",
        ipa: "/wʌns ɪn ə waɪl/",
        kreyol: "Detanzantan",
        example: "I go there once in a while.",
      },
    ],
    pronunciationWord: "Under the weather",
    pronunciationIpa: "/ˈʌndər ðə ˈwɛðər/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** relye twa mo yo ansanm san w pa fè poz — “un-der-thuh-WEH-ther”.",
    pronunciationMistake:
      "**Erè komen:** pa panse “under the weather” pale de move tan reyèl — li vle di ou malad oswa ou pa santi w byen.",
    mistakeWrong: "Panse “I'm under the weather” vle di gen move tan deyò.",
    mistakeCorrect: "“I'm under the weather” = mwen pa santi m byen (malad).",
    mistakeWhy:
      "**Poukisa:** Menm si idiom lan gen mo “weather” ladan, sans lan pa gen anyen pou wè ak klima — se yon fason pou di w malad.",
    practice: {
      prompt: "Kisa “I'm feeling a little under the weather” vle di?",
      options: [
        "Gen lapli deyò.",
        "Mwen pa santi m byen.",
        "Mwen kontan anpil.",
        "Mwen ap vwayaje.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Li vle di w pa santi w byen.",
      wrongFeedback: "❌ Eseye ankò — se pa yon sans literal.",
    },
    thinkEmoji: "📚",
    thinkPrompt: "Ekri yon fraz ak youn nan twa idiom yo sou pwòp lavi w:",
    thinkPlaceholder: "I need to hit the books because...",
    aiPrompt:
      'Hi! Can you teach me the meaning of "hit the books," "under the weather," and "cost an arm and a leg" with example sentences?',
    aiHelperCopy: "Kole sa a nan ChatGPT oswa Claude pou pratike lòt idiom yo.",
    missionTask:
      "🎯 Jodi a, itilize youn nan twa idiom yo nan yon fraz sou pwòp lavi w.",
    recap: [
      { emoji: "📚", text: "Hit the books = etidye di." },
      { emoji: "🤒", text: "Under the weather = malad." },
      { emoji: "💰", text: "Cost an arm and a leg = chè anpil." },
      { emoji: "🎯", text: "Misyon: itilize yon idiom nan yon fraz reyèl." },
    ],
  },
  {
    slug: "tone-and-politeness",
    moduleTitle: "Modil 15: Ekspresyon ak Kilti",
    illustrationKey: "emoji",
    heroEmoji: "🎭",
    heroTitle: "Ton ak Politès",
    heroLede: "Menm mesaj la ka son dirèk oswa politès, dapre mo ou chwazi.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab adousi yon fraz dirèk pou li son pi politès.",
    whatYouWillLearn: "kijan pou adousi yon fraz dirèk pou li son politès",
    prerequisite: "Leson 3 — Ekspresyon Popilè, Pati 2",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Menm mesaj la ka son dirèk oswa politès, dapre mo ou chwazi.",
    understandBody:
      "**Give me that.** → **Could you pass me that, please?** **Close the door.** → **Would you mind closing the door?** Dezyèm vèsyon yo son pi dou ak pi politès.",
    seeItInAction: [
      { line: "Could you pass me that, please?", tag: "Politès", emoji: "🙏" },
      {
        line: "Would you mind closing the door?",
        tag: "Trè politès",
        emoji: "😊",
      },
      { line: "Give me that.", tag: "Twò dirèk", emoji: "⚠️" },
    ],
    patternBuilderIntro: "Klike sou chak fraz pou konpare ton yo.",
    patternBuilderOptions: [
      { chipLabel: "Polite", display: "Could you pass me that, please?" },
      { chipLabel: "Very polite", display: "Would you mind closing the door?" },
      { chipLabel: "Too direct", display: "Give me that." },
    ],
    vocabulary: [
      {
        word: "Polite",
        ipa: "/pəˈlaɪt/",
        kreyol: "Politès",
        example: "That sounds more polite.",
      },
      {
        word: "Would you mind...?",
        ipa: "/wʊd juː maɪnd/",
        kreyol: "Èske sa ta deranje w si...",
        example: "Would you mind closing the door?",
      },
      {
        word: "Could you...?",
        ipa: "/kʊd juː/",
        kreyol: "Èske ou ta ka...",
        example: "Could you help me, please?",
      },
      {
        word: "Direct",
        ipa: "/dəˈrɛkt/",
        kreyol: "Dirèk",
        example: "That sounds too direct.",
      },
      {
        word: "Soften",
        ipa: "/ˈsɒfən/",
        kreyol: "Adousi",
        example: "Soften your request.",
      },
    ],
    pronunciationWord: "Would you mind",
    pronunciationIpa: "/wʊd juː maɪnd/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** “would you” souvan son tankou “WUD-jə” lè moun pale vit.",
    pronunciationMistake:
      "**Erè komen:** pa itilize enperatif tou sèk (“Give me that.”) ak moun ou pa konnen byen — sa son twò dirèk an Anglè.",
    mistakeWrong: "Give me that.",
    mistakeCorrect: "Could you pass me that, please?",
    mistakeWhy:
      "**Poukisa:** Nan kilti angle, mande yon bagay ak “Could you...please?” son pi politès pase yon lòd dirèk, menm ak moun ou konnen byen.",
    practice: {
      prompt: "Ki vèsyon ki pi politès pou mande yon moun fèmen pòt la?",
      options: [
        "Close the door.",
        "Would you mind closing the door?",
        "Door. Now.",
        "Close it.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a pi politès.",
      wrongFeedback: "❌ Eseye ankò — chwazi vèsyon ki pi dou.",
    },
    thinkEmoji: "🎭",
    thinkPrompt:
      "Chanje yon lòd dirèk an yon mande politès, tankou nan leson an:",
    thinkPlaceholder: 'Instead of "Give me...", I\'ll say "Could you..."',
    aiPrompt:
      "Hi! Can you give me a few direct sentences and help me turn them into more polite requests in English?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike adousi fraz ou.",
    missionTask:
      "🎯 Jodi a, chanje yon lòd dirèk ou ta itilize an yon mande politès.",
    recap: [
      { emoji: "🎭", text: "Menm mesaj la, de ton diferan." },
      { emoji: "🙏", text: "Could you..., please?" },
      { emoji: "😊", text: "Would you mind...?" },
      { emoji: "🎯", text: "Misyon: adousi yon lòd dirèk." },
    ],
  },
  {
    slug: "humor-and-sarcasm",
    moduleTitle: "Modil 15: Ekspresyon ak Kilti",
    illustrationKey: "emoji",
    heroEmoji: "😏",
    heroTitle: "Imè ak Sarkas",
    heroLede:
      "Pafwa moun di kontrè de sa yo panse, ak yon ton espesyal — sa rele sarkas.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab rekonèt lè yon moun ap fè blag oswa itilize sarkas.",
    whatYouWillLearn: "kijan pou rekonèt imè ak sarkas nan konvèsasyon",
    prerequisite: "Leson 4 — Ton ak Politès",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Pafwa moun di kontrè de sa yo panse, ak yon ton espesyal — sa rele sarkas.",
    understandBody:
      "**Oh great, more rain.** (Lè moun pa kontan, pa vrèman kontan) **Yeah, right.** (Mwen pa kwè sa) **Nice job... not.** Sarkas mande w koute TON an, pa sèlman mo yo.",
    seeItInAction: [
      { line: "Oh great, more rain.", tag: "Sarkas (pa kontan)", emoji: "🙄" },
      { line: "Yeah, right.", tag: "Mwen pa kwè sa", emoji: "😏" },
      { line: "I'm just kidding!", tag: "Blag", emoji: "😄" },
    ],
    patternBuilderIntro: "Klike sou chak fraz pou wè sitiyasyon li itilize a.",
    patternBuilderOptions: [
      { chipLabel: "Sarcasm", display: "Oh great, more rain." },
      { chipLabel: "Disbelief", display: "Yeah, right." },
      { chipLabel: "Joking", display: "I'm just kidding!" },
    ],
    vocabulary: [
      {
        word: "Sarcasm",
        ipa: "/ˈsɑːrkæzəm/",
        kreyol: "Sarkas",
        example: "That was sarcasm, not a real complaint.",
      },
      {
        word: "Joke",
        ipa: "/dʒoʊk/",
        kreyol: "Blag",
        example: "I'm just kidding, it was a joke.",
      },
      {
        word: "Kidding",
        ipa: "/ˈkɪdɪŋ/",
        kreyol: "Ap fè blag",
        example: "I'm just kidding!",
      },
      {
        word: "Seriously",
        ipa: "/ˈsɪəriəsli/",
        kreyol: "Serye",
        example: "Are you being serious or joking?",
      },
      {
        word: "Funny",
        ipa: "/ˈfʌni/",
        kreyol: "Komik",
        example: "That's funny!",
      },
    ],
    pronunciationWord: "Sarcasm",
    pronunciationIpa: "/ˈsɑːrkæzəm/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** twa silab, aksan an sou premye — “SAR-ka-zuhm”.",
    pronunciationMistake:
      "**Erè komen:** pa pran chak mo literalman — si yon moun di “Oh great” ak yon ton fatige apre yon move nouvèl, se sarkas, pa yon vrè kontantman.",
    mistakeWrong: "Panse “Oh great, more rain” vle di moun nan kontan.",
    mistakeCorrect: "Rekonèt ton an montre moun nan pa kontan (sarkas).",
    mistakeWhy:
      "**Poukisa:** Nan sarkas, mo yo di yon bagay men ton ak sitiyasyon an montre kontrè a. Koute kontèks la ak ton an, pa sèlman mo yo.",
    practice: {
      prompt:
        "Yon moun di “Oh great, more rain” ak yon ton fatige. Kisa sa vle di reyèlman?",
      options: [
        "Li kontan wè lapli.",
        "Li pa kontan wè lapli (sarkas).",
        "Li paka tande.",
        "Li ap mande yon parapli.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Se sarkas — li pa kontan.",
      wrongFeedback: "❌ Eseye ankò — panse ak ton fatige a.",
    },
    thinkEmoji: "😏",
    thinkPrompt: "Ekri yon fraz sarkastik ou ta di lè yon bagay pa ale byen:",
    thinkPlaceholder: "Oh great, ...",
    aiPrompt:
      "Hi! Can you give me a few example sentences that use sarcasm and help me understand what they really mean?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike rekonèt sarkas.",
    missionTask:
      "🎯 Jodi a, ekri yon fraz sarkastik kout ak eksplike sa li vrèman vle di.",
    recap: [
      {
        emoji: "😏",
        text: "Sarkas: mo yo di yon bagay, ton an montre kontrè a.",
      },
      { emoji: "🙄", text: "Oh great, more rain. (sarkas)" },
      { emoji: "😄", text: "I'm just kidding! (blag)" },
      { emoji: "🎯", text: "Misyon: ekri yon fraz sarkastik ak eksplike li." },
    ],
  },
  {
    slug: "compliments-and-responses",
    moduleTitle: "Modil 15: Ekspresyon ak Kilti",
    illustrationKey: "emoji",
    heroEmoji: "🌟",
    heroTitle: "Konpliman ak Repons",
    heroLede:
      "Nan kilti angle, moun aksepte konpliman ak yon senp “Thank you”.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab bay yon konpliman ak reponn youn natirèlman.",
    whatYouWillLearn: "kijan pou bay ak reponn yon konpliman natirèlman",
    prerequisite: "Leson 5 — Imè ak Sarkas",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Nan kilti angle, moun aksepte konpliman ak yon senp “Thank you”.",
    understandBody:
      "**I love your shirt!** **Thank you! I got it last week.** Nan anpil kilti Anglè, refize yon konpliman twòp (“Oh no, it's old”) ka son etranj — pito aksepte l senpman.",
    seeItInAction: [
      { line: "I love your shirt!", tag: "Konpliman", emoji: "🌟" },
      {
        line: "Thank you! I got it last week.",
        tag: "Repons natirèl",
        emoji: "😊",
      },
      {
        line: "That's very kind of you.",
        tag: "Lòt fason pou reponn",
        emoji: "🙏",
      },
    ],
    patternBuilderIntro: "Klike sou chak fraz pou wè fason li itilize a.",
    patternBuilderOptions: [
      { chipLabel: "Give", display: "I love your shirt!" },
      { chipLabel: "Respond", display: "Thank you! I got it last week." },
      { chipLabel: "Alt. response", display: "That's very kind of you." },
    ],
    vocabulary: [
      {
        word: "Compliment",
        ipa: "/ˈkɒmplɪmənt/",
        kreyol: "Konpliman",
        example: "Thank you for the compliment.",
      },
      {
        word: "Kind",
        ipa: "/kaɪnd/",
        kreyol: "Janti",
        example: "That's very kind of you.",
      },
      {
        word: "Appreciate",
        ipa: "/əˈpriːʃieɪt/",
        kreyol: "Apresye",
        example: "I really appreciate that.",
      },
      {
        word: "Flattered",
        ipa: "/ˈflætərd/",
        kreyol: "Flate",
        example: "I'm flattered, thank you.",
      },
      {
        word: "Accept",
        ipa: "/əkˈsɛpt/",
        kreyol: "Aksepte",
        example: "Accept the compliment gracefully.",
      },
    ],
    pronunciationWord: "Appreciate",
    pronunciationIpa: "/əˈpriːʃieɪt/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** kat silab, aksan an sou dezyèm — “uh-PREE-shee-eyt”.",
    pronunciationMistake:
      "**Erè komen:** pa refize yon konpliman twòp fò (“No, no, it's ugly”) — sa ka fè lòt moun nan santi l mal alèz.",
    mistakeWrong: "No, no, it's really old and ugly.",
    mistakeCorrect: "Thank you! That's very kind of you.",
    mistakeWhy:
      "**Poukisa:** Nan kilti angle, refize yon konpliman twò fò son etranj. Pi natirèl pou senpleman di “Thank you” epi aksepte l.",
    practice: {
      prompt: "Yon moun di “I love your shoes!” Ki repons ki pi natirèl?",
      options: [
        "No, they're ugly.",
        "Thank you! That's very kind of you.",
        "Why do you say that?",
        "I don't like them either.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Aksepte konpliman an senpleman.",
      wrongFeedback: "❌ Eseye ankò — pa refize konpliman an.",
    },
    thinkEmoji: "🌟",
    thinkPrompt:
      "Ekri yon konpliman ou ta bay yon zanmi ak fason li ta reponn:",
    thinkPlaceholder: "I love your... Thank you!",
    aiPrompt:
      "Hi! Can you give me compliments in English and help me practice responding naturally, without over-refusing them?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike bay ak resevwa konpliman.",
    missionTask:
      "🎯 Jodi a, bay yon moun (reyèl oswa imajinè) yon konpliman an Anglè.",
    recap: [
      { emoji: "🌟", text: "I love your shirt!" },
      { emoji: "😊", text: "Thank you! (repons senp)" },
      { emoji: "⚠️", text: "Pa refize konpliman twòp." },
      { emoji: "🎯", text: "Misyon: bay yon konpliman an Anglè." },
    ],
  },
  {
    slug: "saying-no-politely",
    moduleTitle: "Modil 15: Ekspresyon ak Kilti",
    illustrationKey: "emoji",
    heroEmoji: "🙅",
    heroTitle: "Di Non Politès",
    heroLede:
      "Yon “no” tou sèk ka son twò dirèk — moun anglè ajoute yon eksplikasyon oswa yon regrè.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab refize yon envitasyon oswa yon demann san w pa son grosye.",
    whatYouWillLearn: "kijan pou di non politès san w pa son grosye",
    prerequisite: "Leson 6 — Konpliman ak Repons",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Yon “no” tou sèk ka son twò dirèk — moun anglè ajoute yon eksplikasyon oswa yon regrè.",
    understandBody:
      "**I'd love to, but I can't.** **Thanks for asking, but I already have plans.** **Maybe next time!** Twa fraz sa yo refize san w pa son grosye.",
    seeItInAction: [
      { line: "I'd love to, but I can't.", tag: "Refi dou", emoji: "😔" },
      {
        line: "Thanks for asking, but I already have plans.",
        tag: "Eksplikasyon",
        emoji: "📅",
      },
      { line: "Maybe next time!", tag: "Kite pòt la louvri", emoji: "🙂" },
    ],
    patternBuilderIntro: "Klike sou chak fraz pou wè fason li itilize a.",
    patternBuilderOptions: [
      { chipLabel: "Soft no", display: "I'd love to, but I can't." },
      {
        chipLabel: "Explain",
        display: "Thanks for asking, but I already have plans.",
      },
      { chipLabel: "Leave door open", display: "Maybe next time!" },
    ],
    vocabulary: [
      {
        word: "I'd love to, but...",
        ipa: "/aɪd lʌv tuː bʌt/",
        kreyol: "Mwen ta renmen, men...",
        example: "I'd love to, but I can't.",
      },
      {
        word: "Unfortunately",
        ipa: "/ʌnˈfɔːrtʃənətli/",
        kreyol: "Malerezman",
        example: "Unfortunately, I'm busy.",
      },
      {
        word: "Busy",
        ipa: "/ˈbɪzi/",
        kreyol: "Okipe",
        example: "I'm busy that day.",
      },
      {
        word: "Rain check",
        ipa: "/reɪn tʃɛk/",
        kreyol: "Yon lòt fwa (ekspresyon)",
        example: "Can I take a rain check?",
      },
      {
        word: "Decline",
        ipa: "/dɪˈklaɪn/",
        kreyol: "Refize (politès)",
        example: "I have to decline this time.",
      },
    ],
    pronunciationWord: "Unfortunately",
    pronunciationIpa: "/ʌnˈfɔːrtʃənətli/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** senk silab, ale dousman — “un-FOR-chuh-nut-lee”.",
    pronunciationMistake:
      "**Erè komen:** pa di sèlman “No” tou sèk pou refize yon envitasyon — sa ka son grosye an Anglè, menm si se pa entansyon w.",
    mistakeWrong: "No.",
    mistakeCorrect: "I'd love to, but I can't this time.",
    mistakeWhy:
      "**Poukisa:** An Anglè, yon “No” tou sèl san eksplikasyon souvan son twò dirèk oswa frèt. Ajoute yon ti eksplikasyon oswa regrè fè li son pi politès.",
    practice: {
      prompt: "Yon zanmi envite w soti, men ou okipe. Ki repons ki pi politès?",
      options: [
        "No.",
        "I'd love to, but I already have plans.",
        "I don't want to.",
        "Never.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a politès e klè.",
      wrongFeedback: "❌ Eseye ankò — chwazi repons ki pi politès.",
    },
    thinkEmoji: "🙅",
    thinkPrompt: "Ekri yon fason politès pou refize yon envitasyon imajinè:",
    thinkPlaceholder: "I'd love to, but...",
    aiPrompt:
      'Hi! Can you invite me to something in English and let me practice politely declining without just saying "no"?',
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike refize politès.",
    missionTask:
      "🎯 Jodi a, ekri yon fason politès pou refize yon envitasyon imajinè.",
    recap: [
      { emoji: "🙅", text: "Pa di “No” tou sèk san eksplikasyon." },
      { emoji: "😔", text: "I'd love to, but I can't." },
      { emoji: "🙂", text: "Maybe next time!" },
      { emoji: "🎯", text: "Misyon: refize yon envitasyon politès." },
    ],
  },
  {
    slug: "cultural-notes-us-canada",
    moduleTitle: "Modil 15: Ekspresyon ak Kilti",
    illustrationKey: "emoji",
    heroEmoji: "🌎",
    heroTitle: "Nòt Kilti: Etazini ak Kanada",
    heroLede: "Kèk abitid small talk chanje selon kote ou ye.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap konnen kèk abitid kiltirèl komen nan Etazini ak Kanada.",
    whatYouWillLearn:
      "kèk abitid kiltirèl komen pou small talk nan Etazini/Kanada",
    prerequisite: "Leson 7 — Di Non Politès",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading: "Kèk abitid small talk chanje selon kote ou ye.",
    understandBody:
      '**"How are you?" is often just a greeting, not a real question.** Moun souvan pale de move tan (weather) pou kòmanse yon konvèsasyon. Sijè tankou lajan oswa laj ka trè prive.',
    seeItInAction: [
      {
        line: '"How are you?" is often just a greeting.',
        tag: "Salitasyon",
        emoji: "👋",
      },
      {
        line: "Talking about the weather is a safe topic.",
        tag: "Sijè san danje",
        emoji: "☀️",
      },
      {
        line: "Asking about salary or age can feel too personal.",
        tag: "Sijè prive",
        emoji: "🤐",
      },
    ],
    patternBuilderIntro: "Klike sou chak nòt kiltirèl pou wè plis detay.",
    patternBuilderOptions: [
      {
        chipLabel: "Greeting",
        display: '"How are you?" is often just a greeting.',
      },
      {
        chipLabel: "Safe topic",
        display: "Talking about the weather is a safe topic.",
      },
      {
        chipLabel: "Private",
        display: "Asking about salary or age can feel too personal.",
      },
    ],
    vocabulary: [
      {
        word: "Culture",
        ipa: "/ˈkʌltʃər/",
        kreyol: "Kilti",
        example: "That's part of the culture.",
      },
      {
        word: "Personal",
        ipa: "/ˈpɜːrsənəl/",
        kreyol: "Prive/Pèsonèl",
        example: "That question feels too personal.",
      },
      {
        word: "Safe topic",
        ipa: "/seɪf ˈtɒpɪk/",
        kreyol: "Sijè san danje",
        example: "Weather is a safe topic.",
      },
      {
        word: "Common",
        ipa: "/ˈkɒmən/",
        kreyol: "Komen",
        example: "That's a common habit here.",
      },
      {
        word: "Habit",
        ipa: "/ˈhæbɪt/",
        kreyol: "Abitid",
        example: "It's a cultural habit.",
      },
    ],
    pronunciationWord: "Culture",
    pronunciationIpa: "/ˈkʌltʃər/",
    mouthTip: "**Ti konsèy pou bouch ou:** de silab, “KUL-chər”.",
    pronunciationMistake:
      "**Erè komen:** pa mande yon moun ou fèk rankontre konbyen lajan li fè oswa ki laj li genyen — sa ka son twò prive nan Etazini/Kanada.",
    mistakeWrong: "How much money do you make?",
    mistakeCorrect: "Nice weather today, isn't it?",
    mistakeWhy:
      "**Poukisa:** Nan Etazini ak Kanada, kesyon sou lajan, laj, ak relijyon souvan konsidere prive nan yon premye konvèsasyon. Tan (weather) se yon sijè san danje.",
    practice: {
      prompt:
        "Ki sijè ki pi san danje pou kòmanse yon konvèsasyon ak yon moun ou fèk rankontre?",
      options: ["Salary", "Age", "The weather", "Religion"],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Tan (weather) se yon sijè san danje.",
      wrongFeedback: "❌ Eseye ankò — chwazi sijè ki pi san danje.",
    },
    thinkEmoji: "🌎",
    thinkPrompt:
      "Ekri yon sijè small talk ou panse ki san danje, tankou nan leson an:",
    thinkPlaceholder: "A safe topic to talk about is...",
    aiPrompt:
      "Hi! Can you tell me a few small talk topics that are common and safe in the US or Canada, and a few that people usually avoid?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike sijè small talk san danje.",
    missionTask:
      "🎯 Jodi a, di de sijè small talk ki san danje, ak youn ki pi prive.",
    recap: [
      { emoji: "👋", text: '"How are you?" souvan se jis yon salitasyon.' },
      { emoji: "☀️", text: "Weather se yon sijè san danje." },
      { emoji: "🤐", text: "Lajan/laj ka son twò prive." },
      { emoji: "🎯", text: "Misyon: idantifye sijè san danje ak sijè prive." },
    ],
  },
  {
    slug: "idioms-mission",
    moduleTitle: "Modil 15: Ekspresyon ak Kilti",
    illustrationKey: "emoji",
    heroEmoji: "🗣️",
    heroTitle: "Pale Natirèl",
    heroLede:
      "Se lè a pou konbine idiom, ton, ak small talk Modil 15 nan yon vrè echanj.",
    heroGoal:
      "🎯 Objektif leson: nan fen leson sa a, w ap kapab fè yon ti konvèsasyon ki son natirèl, pa jis kòrèk gramatikalman.",
    whatYouWillLearn:
      "kijan pou konbine idiom, ton, ak small talk nan yon echanj",
    prerequisite: "Leson 8 — Nòt Kilti: Etazini ak Kanada",
    difficultyLabel: "🟡 Mwayen",
    readingTime: "⏱ 5 min lekti",
    completionTime: "✅ ~8 min pou konplete",
    understandHeading:
      "Pale natirèl mande plis pase gramè kòrèk — li mande ton ak abitid kiltirèl tou.",
    understandBody:
      "**A: How's it going?** **B: Good, thanks! A little under the weather, but okay.** **A: Sorry to hear that. Feel better soon!** Echanj sa a konbine small talk, yon idiom, ak politès.",
    seeItInAction: [
      { line: "How's it going?", tag: "Small talk", emoji: "👋" },
      {
        line: "A little under the weather, but okay.",
        tag: "Idiom",
        emoji: "🤒",
      },
      {
        line: "Sorry to hear that. Feel better soon!",
        tag: "Politès",
        emoji: "🙏",
      },
    ],
    patternBuilderIntro:
      "Klike sou chak liy pou wè ki eleman Modil 15 li itilize.",
    patternBuilderOptions: [
      { chipLabel: "Small talk", display: "How's it going?" },
      { chipLabel: "Idiom", display: "A little under the weather, but okay." },
      { chipLabel: "Polite", display: "Sorry to hear that. Feel better soon!" },
    ],
    vocabulary: [
      {
        word: "Natural",
        ipa: "/ˈnætʃərəl/",
        kreyol: "Natirèl",
        example: "That sounds natural.",
      },
      {
        word: "Sound like",
        ipa: "/saʊnd laɪk/",
        kreyol: "Sonnen tankou",
        example: "That doesn't sound like a native speaker.",
      },
      {
        word: "Native speaker",
        ipa: "/ˈneɪtɪv ˈspiːkər/",
        kreyol: "Moun ki pale lang lan natifnatal",
        example: "She sounds like a native speaker.",
      },
      {
        word: "Fluent",
        ipa: "/ˈfluːənt/",
        kreyol: "Kouran",
        example: "He speaks fluent English.",
      },
      {
        word: "Comfortable",
        ipa: "/ˈkʌmftərbəl/",
        kreyol: "Alèz",
        example: "I feel comfortable in conversation now.",
      },
    ],
    pronunciationWord: "Comfortable",
    pronunciationIpa: "/ˈkʌmftərbəl/",
    mouthTip:
      "**Ti konsèy pou bouch ou:** twa silab lè w pale vit — “KUMF-tər-bəl”, pa kat.",
    pronunciationMistake:
      "**Erè komen:** pa itilize yon fraz twò literal (tradiksyon dirèk) lè yon idiom oswa yon fraz natirèl ta pi bon.",
    mistakeWrong:
      "I have a small illness in my body today. (tradiksyon twò literal)",
    mistakeCorrect: "I'm feeling a little under the weather today.",
    mistakeWhy:
      "**Poukisa:** Yon fraz ki tradwi mo pou mo soti nan Kreyòl ka son etranj an Anglè. Itilize ekspresyon natirèl moun deja konnen, tankou “under the weather”.",
    practice: {
      prompt:
        "Ki repons ki son pi natirèl lè yon moun mande “How's it going?” epi ou pa santi w two byen?",
      options: [
        "I have a small illness in my body today.",
        "A little under the weather, but okay.",
        "My body is not working correctly.",
        "I am experiencing physical difficulty.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa a son natirèl ak natif.",
      wrongFeedback: "❌ Eseye ankò — chwazi vèsyon ki pi natirèl.",
    },
    thinkEmoji: "🗣️",
    thinkPrompt:
      "Ekri yon ti echanj (3 liy) ki konbine small talk, yon idiom, ak politès:",
    thinkPlaceholder: "How's it going? ... Sorry to hear that...",
    aiPrompt:
      "Hi! Can you have a short natural conversation with me using small talk, one idiom, and a polite response, then tell me if my replies sound natural?",
    aiHelperCopy:
      "Kole sa a nan ChatGPT oswa Claude pou pratike tout Modil 15 ansanm.",
    missionTask:
      "🎯 Jodi a, ekri yon ti echanj twa liy ki konbine small talk, yon idiom, ak yon repons politès.",
    recap: [
      { emoji: "🗣️", text: "Pale natirèl mande plis pase gramè kòrèk." },
      { emoji: "🤒", text: "Konbine idiom ak small talk nan menm echanj." },
      { emoji: "🎓", text: "Ou fini Modil 15 — Ekspresyon ak Kilti!" },
      { emoji: "🎯", text: "Misyon: ekri yon echanj natirèl twa liy." },
    ],
  },
];

export function getEnglishPremiumLesson(slug: string) {
  return englishPremiumLessons.find((lesson) => lesson.slug === slug);
}
