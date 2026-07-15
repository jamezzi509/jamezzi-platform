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
];

export function getEnglishPremiumLesson(slug: string) {
  return englishPremiumLessons.find((lesson) => lesson.slug === slug);
}
