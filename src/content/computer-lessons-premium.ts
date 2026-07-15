/**
 * Premium "Computer & Internet Essentials" lesson content — Module 1.
 * Dedicated shell per break-the-fear-brief.md: Goal, Simple explanation
 * (concept first), Illustration, platform examples (only where the how
 * genuinely differs), Real-life example, Common mistake, AI explanation,
 * Real-World Mission, Quiz, Progress. Instructional language is Haitian
 * Creole, matching the rest of the Jamezzi Academy catalog.
 */

export interface DigitalWord {
  word: string;
  definition: string;
  example: string;
}

export type ComputerPlatform = "windows" | "mac" | "android" | "iphone";

export interface PlatformExample {
  platform: ComputerPlatform;
  steps: string;
}

export interface ComputerQuizItem {
  prompt: string;
  options: string[];
  correctIndex: number;
  correctFeedback: string;
  wrongFeedback: string;
}

export interface ComputerRecapItem {
  emoji: string;
  text: string;
}

export interface ComputerPremiumLesson {
  slug: string;
  moduleTitle: string;
  heroEmoji: string;
  heroTitle: string;
  heroLede: string;
  goal: string;
  simpleExplanation: string;
  howItWorks?: string[];
  illustrationPrompt: string;
  illustrationSrc: string;
  digitalWords: DigitalWord[];
  platformExamples?: PlatformExample[];
  realLifeExample: string;
  mistakeWrong: string;
  mistakeCorrect: string;
  mistakeWhy: string;
  aiExplanation: string;
  aiPrompt: string;
  mission: string;
  quiz: ComputerQuizItem;
  recap: ComputerRecapItem[];
}

const illustrationBase =
  "/images/academy/courses/computer-internet-essentials/lessons";

export const computerPremiumLessons: ComputerPremiumLesson[] = [
  {
    slug: "welcome-to-computers",
    moduleTitle: "Modil 1: Byenveni nan Mond Dijital la",
    heroEmoji: "👋",
    heroTitle: "Byenveni nan Mond Dijital la",
    heroLede:
      "Ou pa an reta. Anpil moun aprann teknoloji pita nan lavi yo — e yo rive alèz avè l.",
    goal: "🎯 Objektif: konprann kijan òdinatè chanje mond lan, epi kwè ou ka aprann sa.",
    simpleExplanation:
      "Yon òdinatè se yon zouti — pa yon bagay majik ki fèt pou moun 'entelijan' sèlman. Depi 50 ane, òdinatè chanje jan moun travay, aprann, achte, ak rete an kontak. Jodi a, konnen baz teknoloji a vin tankou konnen li ak ekri — yon zouti pou lavi chak jou, pa yon konpetisyon.",
    illustrationPrompt:
      "A realistic photograph of a warm, welcoming home office scene with a laptop open on a desk, soft natural window light, a cup of coffee nearby, inviting and calm atmosphere, professional lifestyle photography, no text or logos visible on any screen",
    illustrationSrc: `${illustrationBase}/welcome-to-computers.webp`,
    digitalWords: [
      {
        word: "Teknoloji",
        definition: "Zouti ak machin moun envante pou fè lavi pi fasil.",
        example: "Yon òdinatè se yon egzanp teknoloji.",
      },
      {
        word: "Dijital",
        definition:
          "Tout bagay ki fonksyone ak done elektwonik (chif) olye de papye.",
        example:
          "Yon foto dijital rete nan telefòn ou, pa nan yon album papye.",
      },
    ],
    realLifeExample:
      "💡 Chak fwa ou voye yon mesaj WhatsApp, gade yon videyo, oswa peye yon fakti sou telefòn ou, w ap itilize teknoloji dijital — menm si ou pa t panse a li konsa.",
    mistakeWrong: "Panse w 'twò vye' oswa 'pa fèt pou' teknoloji.",
    mistakeCorrect:
      "Konprann pèsonn pa fèt konnen teknoloji — tout moun aprann li, etap pa etap.",
    mistakeWhy:
      "⚠️ Anpil moun sispann eseye paske yo panse gen yon kalite moun ki 'bon ak teknoloji' epi yo pa ladan l. An reyalite, chak moun ki alèz jodi a te kòmanse san konnen anyen.",
    aiExplanation:
      "🤖 Yon AI (Entelijans Atifisyèl) tankou ChatGPT oswa Claude se yon pwogram ki ka reponn kesyon ou ak pwòp mo pa w — menm kesyon ki ka sanble 'twò senp'. Nan kou sa a, n ap montre w kijan pou itilize AI tankou yon asistan pasyan.",
    aiPrompt:
      "Hi! I'm learning about computers for the first time. Can you explain, in very simple words, why so many people feel afraid of technology — and reassure me that I can learn it?",
    mission:
      "🎯 Misyon: ekri (oswa di awotvwa) yon fraz sou yon bagay dijital ou itilize DEJA chak jou san w pa t reyalize se teknoloji.",
    quiz: {
      prompt: "Kisa ki vre sou aprann teknoloji?",
      options: [
        "Se sèlman pou moun jèn.",
        "Tout moun ka aprann li, etap pa etap.",
        "Ou dwe konn li deja anvan ou kòmanse.",
        "Se twò difisil pou moun ki pa al lekòl anpil.",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Tout moun ka aprann li, san eksepsyon.",
      wrongFeedback: "❌ Eseye ankò — panse ak filozofi kou a.",
    },
    recap: [
      { emoji: "👋", text: "Ou pa an reta pou aprann teknoloji." },
      { emoji: "🧰", text: "Yon òdinatè se yon zouti, pa yon bagay majik." },
      {
        emoji: "💪",
        text: "Tout moun ki alèz jodi a te kòmanse san konnen anyen.",
      },
      { emoji: "🎯", text: "Misyon: idantifye yon teknoloji ou itilize deja." },
    ],
  },
  {
    slug: "what-is-a-computer",
    moduleTitle: "Modil 1: Byenveni nan Mond Dijital la",
    heroEmoji: "💻",
    heroTitle: "Kisa Yon Òdinatè Ye?",
    heroLede:
      "Yon telefòn, yon tablèt, ak yon laptop — yo tout se òdinatè, nan yon fason.",
    goal: "🎯 Objektif: konprann sa ki fè yon aparèy se yon 'òdinatè'.",
    simpleExplanation:
      "Yon òdinatè se nenpòt aparèy ki ka RESEVWA enfòmasyon, TRETE li, epi BAY yon rezilta. Lè ou tape yon nimewo nan yon kalkilatris epi li montre repons lan — se sa yon òdinatè fè, sèlman pi konplike. Yon telefòn, yon tablèt, yon laptop, ak yon desktop se tout diferan FÒM menm lide a.",
    howItWorks: [
      "Antre enfòmasyon (ou tape oswa touche ekran an)",
      "Trete enfòmasyon an (òdinatè a 'reflechi')",
      "Bay yon rezilta (ekran an montre repons lan)",
    ],
    illustrationPrompt:
      "A realistic photograph showing several different computing devices together on a table — a laptop, a smartphone, and a tablet — arranged neatly, soft natural lighting, clean minimal background, professional product photography, no text or logos visible on any screen",
    illustrationSrc: `${illustrationBase}/what-is-a-computer.webp`,
    digitalWords: [
      {
        word: "Aparèy",
        definition:
          "Yon machin elektwonik ou itilize (telefòn, laptop, tablèt).",
        example: "Telefòn ou se yon aparèy dijital.",
      },
      {
        word: "Trete (done)",
        definition: "Lè yon òdinatè analize enfòmasyon pou bay yon rezilta.",
        example: "Kalkilatris la trete '2+2' epi bay '4'.",
      },
    ],
    realLifeExample:
      "💡 Lè ou mande Google Maps yon chemen, telefòn ou (yon òdinatè) resevwa kote ou ye, trete l ak done wout yo, epi bay ou pi bon chemen an.",
    mistakeWrong: "Panse se sèlman yon desktop gwo ki se yon 'vrè' òdinatè.",
    mistakeCorrect:
      "Konprann telefòn ak tablèt ou yo se òdinatè tou — jis nan yon lòt fòm.",
    mistakeWhy:
      "⚠️ Definisyon 'òdinatè' pa mande yon gwo bwat ak yon ekran fiks — nenpòt aparèy ki resevwa, trete, epi bay enfòmasyon konte.",
    aiExplanation:
      "🤖 Menm yon AI tankou ChatGPT fonksyone ak menm lide a: ou antre yon kesyon, li 'trete' li, epi li bay yon repons.",
    aiPrompt:
      "Hi! Can you explain the difference between a laptop, a tablet, and a smartphone in very simple terms, as if I've never used any of them?",
    mission:
      "🎯 Misyon: fè yon lis twa aparèy ou genyen (oswa ou konnen) ki se òdinatè, menm si yo pa gen fòm yon 'gwo bwat'.",
    quiz: {
      prompt: "Kilès nan sa yo ki se yon òdinatè?",
      options: [
        "Sèlman yon desktop",
        "Sèlman yon laptop",
        "Telefòn, tablèt, laptop, ak desktop tout",
        "Sèlman aparèy ki gen klavye",
      ],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Yo tout se òdinatè, nan diferan fòm.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak definisyon an: resevwa, trete, bay rezilta.",
    },
    recap: [
      { emoji: "💻", text: "Yon òdinatè resevwa, trete, epi bay yon rezilta." },
      { emoji: "📱", text: "Telefòn ak tablèt se òdinatè tou." },
      { emoji: "🧠", text: "Menm lide a aplike a AI tankou ChatGPT." },
      { emoji: "🎯", text: "Misyon: idantifye twa òdinatè nan lavi w." },
    ],
  },
  {
    slug: "desktop-vs-laptop",
    moduleTitle: "Modil 1: Byenveni nan Mond Dijital la",
    heroEmoji: "🖥️",
    heroTitle: "Desktop vs. Laptop",
    heroLede: "De fòm menm zouti a — chwazi selon jan ou pral itilize l.",
    goal: "🎯 Objektif: konnen diferans ant yon desktop ak yon laptop, epi ki lè chak nan yo pi bon.",
    simpleExplanation:
      "Yon **desktop** se yon òdinatè ki rete nan yon sèl kote — li gen yon gwo ekran separe, yon klavye, ak yon sourit, tout konekte ansanm. Yon **laptop** se yon òdinatè ki fèmen tankou yon liv epi ou ka pote l ale nenpòt kote, paske batri l ba li enèji san fisl.",
    illustrationPrompt:
      "A realistic photograph comparing a desktop computer setup with a large monitor on the left and an open laptop on the right, both on a clean modern desk, natural lighting, professional product photography, no text or logos visible on any screen",
    illustrationSrc: `${illustrationBase}/desktop-vs-laptop.webp`,
    digitalWords: [
      {
        word: "Desktop",
        definition:
          "Yon òdinatè fiks, ki gen pati separe (ekran, klavye, sourit).",
        example: "Biwo a genyen yon desktop pou anplwaye yo.",
      },
      {
        word: "Laptop",
        definition: "Yon òdinatè pòtatif ki gen batri pou ou pote l ale.",
        example: "Mwen pote laptop mwen lakay travay la.",
      },
    ],
    realLifeExample:
      "💡 Yon moun ki travay tout tan nan yon biwo ka pito yon desktop (ekran pi gwo, pi bon pri). Yon moun k ap vwayaje oswa etidye nan plizyè kote pito yon laptop.",
    mistakeWrong: "Panse yon laptop toujou pi 'bon' paske li pi nouvo/pòtatif.",
    mistakeCorrect:
      "Konprann chak fòm gen avantaj pa li — chwa a depann de jan OU pral itilize l.",
    mistakeWhy:
      "⚠️ Yon desktop souvan pi pwisan pou menm pri a, epi pi fasil pou reparè. Se pa toujou laptop ki pi bon chwa.",
    aiExplanation:
      "🤖 Ou ka mande yon AI konpare de bagay tankou sa a lè ou pa sèten — li ka ede w wè avantaj ak dezavantaj chak opsyon anvan ou achte.",
    aiPrompt:
      "Hi! Can you compare a desktop computer and a laptop for someone who mostly works from one location but occasionally needs to bring their computer to a different room?",
    mission:
      "🎯 Misyon: si ou gen yon òdinatè, idantifye si se yon desktop oswa yon laptop, epi eksplike poukisa fòm sa a bon (oswa pa bon) pou lavi w.",
    quiz: {
      prompt: "Ki avantaj prensipal yon laptop genyen sou yon desktop?",
      options: [
        "Li toujou pi rapid",
        "Li pòtatif — ou ka pote l ale",
        "Li toujou pi bon mache",
        "Li pa bezwen chaje",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Pòtatif se avantaj prensipal laptop la.",
      wrongFeedback: "❌ Eseye ankò — panse ak sa ki fè yon laptop diferan.",
    },
    recap: [
      { emoji: "🖥️", text: "Desktop = fiks, souvan pi pwisan pou menm pri." },
      { emoji: "💻", text: "Laptop = pòtatif, gen batri." },
      { emoji: "⚖️", text: "Chwa a depann de jan ou pral itilize l." },
      { emoji: "🎯", text: "Misyon: idantifye fòm òdinatè pa w." },
    ],
  },
  {
    slug: "tablet-vs-phone",
    moduleTitle: "Modil 1: Byenveni nan Mond Dijital la",
    heroEmoji: "📱",
    heroTitle: "Tablèt vs. Telefòn",
    heroLede: "De aparèy ki sanble, men fèt pou de bagay diferan.",
    goal: "🎯 Objektif: konnen ki lè pou itilize yon tablèt ak ki lè pou itilize yon telefòn.",
    simpleExplanation:
      "Yon **telefòn** fèt anvan tout bagay pou rele ak pote nan pòch ou — ekran l fèt pou l rete piti. Yon **tablèt** se tankou yon telefòn ki gwosi — ekran l pi gwo, sa fè li pi bon pou li, gade videyo, oswa desine, men li pa fèt pou rete nan pòch ou.",
    illustrationPrompt:
      "A realistic photograph comparing a smartphone and a tablet side by side on a wooden table, showing the size difference clearly, natural lighting, professional product photography, no text or logos visible on any screen",
    illustrationSrc: `${illustrationBase}/tablet-vs-phone.webp`,
    digitalWords: [
      {
        word: "Ekran tactil",
        definition: "Yon ekran ou touche dirèkteman ak dwèt ou pou kontwole l.",
        example: "Telefòn ak tablèt tou de gen ekran tactil.",
      },
      {
        word: "Pòtabilite",
        definition: "Fasilite pou pote yon aparèy ale ak ou.",
        example: "Telefòn gen pi bon pòtabilite pase yon tablèt.",
      },
    ],
    realLifeExample:
      "💡 Yon granmoun ki renmen li liv dijital oswa gade foto fanmi souvan pi alèz ak yon tablèt, paske lèt yo pi gwo epi ekran an pi fasil pou wè.",
    mistakeWrong: "Panse yon tablèt se 'jis yon gwo telefòn' san lòt itilite.",
    mistakeCorrect:
      "Konprann tablèt gen avantaj pa li pou li, gade, ak travay ak plis konfò vizyèl.",
    mistakeWhy:
      "⚠️ Menm si tablèt pa fè apèl telefòn fasil, li gen yon vrè plas — espesyalman pou lekti, videyo, ak moun ki bezwen tèks pi gwo.",
    aiExplanation:
      "🤖 Si ou pa sèten kilès ki bon pou ou, ou ka dekri lavi w bay yon AI epi mande l konsèy — men toujou konpare repons li ak bezwen reyèl ou.",
    aiPrompt:
      "Hi! I mostly want to read books, watch videos, and video call my family. Would a tablet or a bigger phone make more sense for me, and why?",
    mission:
      "🎯 Misyon: chwazi youn nan de aparèy sa yo (tablèt oswa telefòn) epi eksplike ki aktivite li pi bon pou li.",
    quiz: {
      prompt: "Ki aparèy ki pi bon pou li yon liv dijital konfòtableman?",
      options: ["Telefòn", "Tablèt", "Yo menm jan", "Pa gen diferans"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Ekran pi gwo tablèt la fè lekti pi konfòtab.",
      wrongFeedback: "❌ Eseye ankò — panse ak gwosè ekran an.",
    },
    recap: [
      { emoji: "📱", text: "Telefòn = fèt pou pote nan pòch, rele, mesaj." },
      { emoji: "📖", text: "Tablèt = ekran pi gwo, bon pou li ak gade." },
      { emoji: "👀", text: "Bon pou moun ki bezwen tèks/imaj pi gwo." },
      { emoji: "🎯", text: "Misyon: chwazi ki aparèy bon pou ki aktivite." },
    ],
  },
  {
    slug: "windows-vs-mac",
    moduleTitle: "Modil 1: Byenveni nan Mond Dijital la",
    heroEmoji: "🖥️",
    heroTitle: "Windows vs. Mac",
    heroLede:
      "De 'lang' diferan pou pale ak yon òdinatè — men de yo mennen menm kote a.",
    goal: "🎯 Objektif: konnen diferans debaz ant yon òdinatè Windows ak yon Mac.",
    simpleExplanation:
      "**Windows** ak **Mac** se de sistèm dopewasyon diferan (n ap wè kisa sa ye pi devan) ki fè yon òdinatè fonksyone. Windows fèt pa Microsoft e li itilize sou anpil mak diferan (Dell, HP, Lenovo, elatriye). Mac se sèlman sou òdinatè Apple fè. Yo gen menm bout objektif — travay, entènèt, fichye — men bouton ak meni yo pa nan menm plas.",
    illustrationPrompt:
      "A realistic photograph showing two different laptop computers side by side on a desk, one silver and one dark colored, both closed or subtly different in design, natural office lighting, professional product photography, no text or logos visible",
    illustrationSrc: `${illustrationBase}/windows-vs-mac.webp`,
    digitalWords: [
      {
        word: "Sistèm dopewasyon",
        definition: "Pwogram prensipal ki kontwole tout òdinatè a.",
        example: "Windows se yon sistèm dopewasyon.",
      },
      {
        word: "Mak (brand)",
        definition: "Konpayi ki fabrike yon aparèy.",
        example: "Apple se mak ki fè Mac.",
      },
    ],
    realLifeExample:
      "💡 Anpil biwo ak biznis itilize Windows paske li mache sou plizyè mak ki ka koute mwens chè. Anpil moun ki fè foto/videyo pwofesyonèl pito Mac.",
    mistakeWrong:
      "Panse si ou aprann Windows, ou paka janm itilize yon Mac (oswa vis vèrsa).",
    mistakeCorrect:
      "Konprann prensip debaz yo (fichye, dosye, navige) rete menm — se sèlman pozisyon bouton yo ki chanje.",
    mistakeWhy:
      "⚠️ Moun ki pè chanje soti nan Windows pou Mac (oswa vis vèrsa) souvan pè pou nanti — konesans debaz ou aprann nan kou sa a mache nan tou de.",
    aiExplanation:
      "🤖 Si yon jou ou chanje soti nan Windows pou Mac, ou ka mande yon AI: 'Kijan pou m fè [yon aksyon] sou Mac, mwen te konn fè l sou Windows konsa?' — li ka tradwi etap yo pou ou.",
    aiPrompt:
      "Hi! I'm used to Windows. Can you explain, in simple terms, the biggest differences I'd notice if I switched to using a Mac?",
    mission:
      "🎯 Misyon: si ou gen aksè a yon òdinatè, idantifye si se Windows oswa Mac. Si ou pa gen youn, mande yon zanmi montre ou youn.",
    quiz: {
      prompt: "Kilès nan sa yo ki vre?",
      options: [
        "Mac mache sou nenpòt mak òdinatè",
        "Windows sèlman mache sou òdinatè Apple",
        "Mac sèlman sou òdinatè Apple, Windows sou plizyè mak",
        "Yo se menm bagay ak de non diferan",
      ],
      correctIndex: 2,
      correctFeedback:
        "✅ Wi! Mac se sèlman Apple, Windows mache sou plizyè mak.",
      wrongFeedback: "❌ Eseye ankò — panse ak ki konpayi ki fè chak sistèm.",
    },
    recap: [
      { emoji: "🪟", text: "Windows = Microsoft, mache sou plizyè mak." },
      { emoji: "🍎", text: "Mac = sèlman sou òdinatè Apple." },
      { emoji: "🔁", text: "Prensip debaz yo rete menm nan tou de." },
      { emoji: "🎯", text: "Misyon: idantifye sistèm ou itilize." },
    ],
  },
  {
    slug: "android-vs-iphone",
    moduleTitle: "Modil 1: Byenveni nan Mond Dijital la",
    heroEmoji: "📲",
    heroTitle: "Android vs. iPhone",
    heroLede: "Menm lide a ak Windows/Mac, men pou telefòn.",
    goal: "🎯 Objektif: konnen diferans debaz ant yon telefòn Android ak yon iPhone.",
    simpleExplanation:
      "**iPhone** se telefòn Apple fè — li itilize sistèm pa Apple sèlman (iOS). **Android** se sistèm Google fè ki itilize pa plizyè mak telefòn diferan (Samsung, Tecno, Infinix, elatriye). Menm jan ak Windows/Mac, prensip debaz yo (aplikasyon, kontak, foto) rete menm, se pozisyon bouton yo ki chanje.",
    illustrationPrompt:
      "A realistic photograph of two different smartphones side by side on a table, natural window lighting, professional product photography, no text or logos visible on the screens",
    illustrationSrc: `${illustrationBase}/android-vs-iphone.webp`,
    digitalWords: [
      {
        word: "iOS",
        definition: "Sistèm dopewasyon Apple pou iPhone.",
        example: "iPhone mache ak iOS.",
      },
      {
        word: "Android",
        definition: "Sistèm dopewasyon Google ki mache sou plizyè mak telefòn.",
        example: "Samsung ak Tecno itilize Android.",
      },
    ],
    realLifeExample:
      "💡 Si de zanmi genyen youn yon iPhone ak lòt a yon Android, yo ka toujou pale sou WhatsApp menm si aplikasyon Mesaj natif yo diferan.",
    mistakeWrong: "Panse ou dwe achte yon iPhone paske se 'pi bon'.",
    mistakeCorrect:
      "Konprann tou de sistèm yo bon — chwa a depann de bidjè w ak sa ou abitye ak li.",
    mistakeWhy:
      "⚠️ Pri, aplikasyon disponib, ak abitid moun nan fanmi/zanmi ou ka pi enpòtan pase yon sèl sistèm ki 'pi bon' pou tout moun.",
    aiExplanation:
      "🤖 Ou ka mande yon AI pou konpare de telefòn espesifik anvan ou achte, olye de kwè premye opinyon ou tande.",
    aiPrompt:
      "Hi! Can you explain the main practical differences between Android and iPhone for someone choosing their first smartphone on a limited budget?",
    mission:
      "🎯 Misyon: idantifye si telefòn ou (oswa yon telefòn nan fanmi w) se Android oswa iPhone.",
    quiz: {
      prompt: "Ki konpayi ki fè sistèm Android la?",
      options: ["Apple", "Google", "Microsoft", "Samsung"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Google fè Android, plizyè mak itilize l.",
      wrongFeedback: "❌ Eseye ankò — Samsung itilize Android, men pa fè l.",
    },
    recap: [
      { emoji: "🍏", text: "iPhone = Apple sèlman, sistèm iOS." },
      { emoji: "🤖", text: "Android = Google, mache sou plizyè mak." },
      { emoji: "💰", text: "Chwa a souvan depann de bidjè ak abitid." },
      { emoji: "🎯", text: "Misyon: idantifye sistèm telefòn ou." },
    ],
  },
  {
    slug: "hardware-vs-software",
    moduleTitle: "Modil 1: Byenveni nan Mond Dijital la",
    heroEmoji: "🔧",
    heroTitle: "Hardware vs. Software",
    heroLede:
      "Youn ou ka touche, lòt la ou pa ka touche — men ou bezwen tou de yo.",
    goal: "🎯 Objektif: separe pati fizik yon òdinatè de pwogram ki fè l travay.",
    simpleExplanation:
      "**Hardware** se tout pati FIZIK ou ka touche — ekran, klavye, sourit, batri. **Software** se pwogram yo, sa ou PA ka touche — aplikasyon, sit entènèt, sistèm dopewasyon an. Panse ak yon liv: papye a se hardware, istwa ki ekri ladan l se software.",
    howItWorks: [
      "Hardware = kò a (sa ou touche)",
      "Software = lespri a (pwogram ki bay lòd)",
      "De a bezwen youn lòt pou fonksyone",
    ],
    illustrationPrompt:
      "A realistic photograph showing the inside components of a computer (motherboard, cables) next to a laptop screen showing a colorful app interface, clean tech workshop lighting, professional photography, no readable text or logos visible",
    illustrationSrc: `${illustrationBase}/hardware-vs-software.webp`,
    digitalWords: [
      {
        word: "Hardware",
        definition: "Pati fizik yon aparèy ou ka touche.",
        example: "Klavye a se hardware.",
      },
      {
        word: "Software",
        definition: "Pwogram ki fè aparèy la fonksyone, ou pa ka touche l.",
        example: "WhatsApp se yon software (aplikasyon).",
      },
    ],
    realLifeExample:
      "💡 Lè telefòn ou 'frèz' oswa mache dousman, pafwa se yon pwoblèm software (aplikasyon k ap pran twòp memwa) pa yon pwoblèm hardware (aparèy la kraze fizikman).",
    mistakeWrong: "Panse chak pwoblèm òdinatè mande achte yon nouvo aparèy.",
    mistakeCorrect:
      "Konprann anpil pwoblèm se software — yo ka rezoud san w pa achte anyen.",
    mistakeWhy:
      "⚠️ Konfonn hardware ak software ka fè w depanse lajan san rezon sou yon pwoblèm ki ta ka rezoud ak yon senp mizajou oswa redemaraj.",
    aiExplanation:
      "🤖 Yon AI se yon egzanp software san hardware pa li — li mache SOU hardware telefòn/òdinatè ou, men li menm se jis pwogram ak done.",
    aiPrompt:
      "Hi! Can you give me five examples of hardware and five examples of software on a typical smartphone, explained simply?",
    mission:
      "🎯 Misyon: fè yon lis twa hardware ak twa software ou itilize chak jou.",
    quiz: {
      prompt: "Kilès nan sa yo se yon egzanp software?",
      options: [
        "Ekran telefòn nan",
        "Batri a",
        "Aplikasyon WhatsApp",
        "Klavye a",
      ],
      correctIndex: 2,
      correctFeedback: "✅ Wi! WhatsApp se yon pwogram — software.",
      wrongFeedback: "❌ Eseye ankò — chèche sa ou PA ka touche fizikman.",
    },
    recap: [
      { emoji: "🔧", text: "Hardware = pati fizik ou ka touche." },
      { emoji: "💾", text: "Software = pwogram, ou pa ka touche." },
      { emoji: "🤝", text: "De a bezwen youn lòt pou fonksyone." },
      { emoji: "🎯", text: "Misyon: klase 6 bagay ou itilize chak jou." },
    ],
  },
  {
    slug: "what-is-an-operating-system",
    moduleTitle: "Modil 1: Byenveni nan Mond Dijital la",
    heroEmoji: "⚙️",
    heroTitle: "Kisa Yon Sistèm Dopewasyon Ye?",
    heroLede: "Se 'manadjè' envizib ki kontwole tout bagay dèyè ekran an.",
    goal: "🎯 Objektif: konprann wòl sistèm dopewasyon an nan yon aparèy.",
    simpleExplanation:
      "Yon **sistèm dopewasyon** (oswa 'OS') se pwogram prensipal ki kontwole tout lòt bagay nan yon aparèy — li fè hardware ak software travay ansanm. Windows, Mac (macOS), Android, ak iOS se tout egzanp sistèm dopewasyon. San yon sistèm dopewasyon, yon òdinatè se jis yon bwat fèmen ki pa fè anyen.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen glowing softly in a dim room showing an abstract colorful home screen interface, cinematic lighting, professional tech photography, no readable text or logos visible",
    illustrationSrc: `${illustrationBase}/what-is-an-operating-system.webp`,
    digitalWords: [
      {
        word: "Sistèm Dopewasyon (OS)",
        definition: "Pwogram debaz ki fè tout lòt bagay nan aparèy la mache.",
        example: "Windows, macOS, Android, ak iOS se sistèm dopewasyon.",
      },
      {
        word: "Aplikasyon",
        definition: "Yon pwogram espesifik ki mache SOU sistèm dopewasyon an.",
        example: "WhatsApp se yon aplikasyon ki mache sou Android oswa iOS.",
      },
    ],
    realLifeExample:
      "💡 Lè telefòn ou di 'Update disponib', se souvan sistèm dopewasyon an k ap mande yon mizajou pou l pi bon epi pi an sekirite.",
    mistakeWrong:
      "Konfonn yon aplikasyon (tankou WhatsApp) ak sistèm dopewasyon an (tankou Android).",
    mistakeCorrect:
      "Konprann sistèm dopewasyon an se 'kay' la, aplikasyon yo se 'mèb' anndan kay la.",
    mistakeWhy:
      "⚠️ Ou ka retire yon aplikasyon san pwoblèm, men ou pa ka retire sistèm dopewasyon an san aparèy la sispann fonksyone nèt.",
    aiExplanation:
      "🤖 Konprann sistèm dopewasyon an ede w konprann poukisa yon mesaj erè ka mansyone 'Windows' oswa 'iOS' — se sa k ap pale, pa yon aplikasyon espesifik.",
    aiPrompt:
      "Hi! Can you explain what an operating system does, using a simple analogy like a house or a manager, for someone who has never thought about it before?",
    mission:
      "🎯 Misyon: gade telefòn oswa òdinatè ou epi idantifye ki sistèm dopewasyon l ap itilize.",
    quiz: {
      prompt: "Ki wòl yon sistèm dopewasyon jwe?",
      options: [
        "Li se yon sèl aplikasyon espesifik",
        "Li kontwole tout aparèy la epi fè lòt pwogram mache",
        "Li se sèlman kle sekirite a",
        "Li se yon akseswa ou ka achte separeman",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Li se pwogram prensipal ki kontwole tout bagay.",
      wrongFeedback: "❌ Eseye ankò — panse ak 'manadjè envizib' la.",
    },
    recap: [
      {
        emoji: "⚙️",
        text: "Sistèm dopewasyon = pwogram prensipal ki kontwole aparèy la.",
      },
      {
        emoji: "🏠",
        text: "Sistèm dopewasyon se 'kay', aplikasyon yo se 'mèb'.",
      },
      {
        emoji: "🔄",
        text: "Mizajou sistèm dopewasyon kenbe aparèy la an sekirite.",
      },
      { emoji: "🎯", text: "Misyon: idantifye sistèm dopewasyon aparèy ou." },
    ],
  },
  {
    slug: "what-is-the-internet",
    moduleTitle: "Modil 1: Byenveni nan Mond Dijital la",
    heroEmoji: "🌐",
    heroTitle: "Kisa Entènèt La Ye?",
    heroLede: "Yon rezo jeyan ki konekte milyon aparèy ansanm.",
    goal: "🎯 Objektif: konprann sa k ap pase reyèlman lè ou 'ale sou entènèt'.",
    simpleExplanation:
      "**Entènèt** se yon gwo rezo ki konekte òdinatè ak telefòn atravè mond lan ansanm, pou yo ka pataje enfòmasyon. Lè ou voye yon mesaj oswa gade yon videyo, enfòmasyon an vwayaje soti nan aparèy ou, pase nan rezo sa a, epi rive nan yon lòt aparèy — souvan nan yon lòt peyi — an sèl kèk segonn.",
    illustrationPrompt:
      "A realistic photograph symbolizing global internet connectivity — a person using a smartphone at night with soft glowing light, dreamy bokeh background suggesting connection, professional lifestyle photography, no text or logos visible",
    illustrationSrc: `${illustrationBase}/what-is-the-internet.webp`,
    digitalWords: [
      {
        word: "Entènèt",
        definition:
          "Gwo rezo mondyal ki konekte aparèy ansanm pou pataje enfòmasyon.",
        example: "San entènèt, WhatsApp pa ka voye mesaj.",
      },
      {
        word: "Wi-Fi",
        definition:
          "Fason yon aparèy konekte a entènèt san fisl, nan yon zòn limite.",
        example: "Mwen konekte telefòn mwen sou Wi-Fi lakay mwen.",
      },
    ],
    realLifeExample:
      "💡 Lè fanmi ou aletranje voye yon foto sou WhatsApp, li vwayaje atravè entènèt la, pase pa plizyè peyi, epi rive nan telefòn ou an mwens pase yon segonn.",
    mistakeWrong: "Konfonn Wi-Fi ak entènèt tankou se menm bagay la.",
    mistakeCorrect:
      "Konprann Wi-Fi se sèlman FASON aparèy ou konekte a entènèt la san fisl.",
    mistakeWhy:
      "⚠️ Ou ka gen Wi-Fi (koneksyon lakay ou) san w pa gen entènèt (si sèvis la peye pa peye, pa egzanp) — de bagay diferan ki mache ansanm.",
    aiExplanation:
      "🤖 AI tankou ChatGPT mache SOU entènèt — chak fwa ou poze l yon kesyon, mesaj la vwayaje atravè entènèt jiskaske li rive nan sèvè ki reponn ou.",
    aiPrompt:
      "Hi! Can you explain, in very simple words, what actually happens when I send a WhatsApp message to someone in another country?",
    mission:
      "🎯 Misyon: eksplike (nan pwòp mo ou) sa ki pase lè ou voye yon mesaj bay yon moun ki lwen ou.",
    quiz: {
      prompt: "Kisa entènèt la ye reyèlman?",
      options: [
        "Yon sèl aplikasyon",
        "Yon rezo jeyan ki konekte aparèy ansanm",
        "Yon lòt non pou Wi-Fi",
        "Yon kalite telefòn",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Se yon rezo jeyan ki konekte aparèy ansanm.",
      wrongFeedback: "❌ Eseye ankò — Wi-Fi se sèlman yon fason pou konekte.",
    },
    recap: [
      { emoji: "🌐", text: "Entènèt = rezo jeyan ki konekte aparèy." },
      { emoji: "📶", text: "Wi-Fi = fason pou konekte san fisl." },
      { emoji: "⚡", text: "Enfòmasyon vwayaje an kèk segonn." },
      { emoji: "🎯", text: "Misyon: eksplike vwayaj yon mesaj." },
    ],
  },
  {
    slug: "what-is-the-cloud",
    moduleTitle: "Modil 1: Byenveni nan Mond Dijital la",
    heroEmoji: "☁️",
    heroTitle: "Kisa 'Cloud' La Ye?",
    heroLede:
      "Pa gen okenn nyaj reyèl — se sèvè yon lòt moun k ap gade fichye ou.",
    goal: "🎯 Objektif: konprann kote fichye ou reyèlman rete lè yo 'nan cloud la'.",
    simpleExplanation:
      "'Cloud' (nyaj) se yon fason pou di **fichye ou rete sou yon òdinatè lwen** (yon sèvè), pa sou aparèy ou menm. Lè yon foto 'sovgade nan cloud la', li kopye sou yon gwo òdinatè yon konpayi jere byen lwen — sa vle di ou ka jwenn li menm si ou pèdi telefòn ou.",
    howItWorks: [
      "Ou pran yon foto sou telefòn ou",
      "Telefòn lan voye yon kopi sou entènèt",
      "Kopi a rete sovgade sou yon sèvè lwen ('cloud')",
      "Ou ka jwenn li sou nenpòt lòt aparèy ki konekte ak menm kont ou",
    ],
    illustrationPrompt:
      "A realistic photograph symbolizing cloud storage — a smartphone with a soft blue glow next to a laptop, both connected wirelessly, subtle glowing cloud-shaped light effect above the devices, professional tech photography, no text or logos visible",
    illustrationSrc: `${illustrationBase}/what-is-the-cloud.webp`,
    digitalWords: [
      {
        word: "Cloud (Nyaj)",
        definition:
          "Sèvè lwen kote fichye ou ka sovgade epi jwenn de nenpòt kote.",
        example: "Foto mwen sovgade otomatikman nan Google Photos cloud la.",
      },
      {
        word: "Sèvè",
        definition: "Yon gwo òdinatè pwisan ki gade done pou anpil moun.",
        example: "Foto ou rete sou yon sèvè Google.",
      },
    ],
    realLifeExample:
      "💡 Si telefòn ou pèdi oswa kraze, men foto w yo te sovgade nan cloud la (tankou Google Photos), ou ka jwenn yo ankò sou yon nouvo telefòn.",
    mistakeWrong:
      "Panse fichye 'nan cloud la' pa okipe okenn plas, kòmsi yo pa egziste yon kote fizik.",
    mistakeCorrect:
      "Konprann fichye cloud yo toujou rete sou yon vrè sèvè, yon kote fizik, jis lwen ou.",
    mistakeWhy:
      "⚠️ 'Cloud' se yon non senp pou yon bagay teknik — li pa majik, se jis yon lòt òdinatè byen lwen k ap gade kopi fichye ou.",
    aiExplanation:
      "🤖 Sèvis AI tankou ChatGPT ap mache tou nan 'cloud la' — lè ou poze yon kesyon, li voye l bay yon gwo sèvè lwen ki trete l epi voye repons lan tounen.",
    aiPrompt:
      "Hi! Can you explain cloud storage using a simple analogy, like a storage locker, for someone who has never used Google Photos or iCloud before?",
    mission:
      "🎯 Misyon: verifye si telefòn ou gen yon sèvis cloud aktive (tankou Google Photos oswa iCloud) pou foto ou.",
    quiz: {
      prompt: "Kote fichye 'nan cloud la' reyèlman rete?",
      options: [
        "Yo pa rete okenn kote, yo se majik",
        "Sou yon sèvè lwen, yon vrè òdinatè",
        "Sèlman sou telefòn ou",
        "Yo disparèt apre yon semèn",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Yo rete sou yon sèvè lwen, yon vrè aparèy.",
      wrongFeedback:
        "❌ Eseye ankò — 'cloud' pa majik, se yon kote fizik lwen.",
    },
    recap: [
      { emoji: "☁️", text: "Cloud = fichye sovgade sou yon sèvè lwen." },
      { emoji: "🔄", text: "Ou ka jwenn li de nenpòt aparèy konekte." },
      { emoji: "🛡️", text: "Pwoteje w si ou pèdi oswa kraze aparèy ou." },
      { emoji: "🎯", text: "Misyon: verifye sèvis cloud ou." },
    ],
  },
  {
    slug: "digital-vocabulary",
    moduleTitle: "Modil 1: Byenveni nan Mond Dijital la",
    heroEmoji: "🧠",
    heroTitle: "Vokabilè Dijital",
    heroLede: "Mo sa yo ap parèt tout tan — kounye a yo p ap fè w pè ankò.",
    goal: "🎯 Objektif: rekonèt ak konprann mo dijital ou tande souvan.",
    simpleExplanation:
      "Anpil moun santi yo pèdi lè yo tande mo tankou 'aplikasyon', 'mizajou', oswa 'kont' — pa paske konsèp yo difisil, men paske pèsonn pa t janm eksplike yo klèman. Leson sa a se yon 'diksyonè vizyèl' pou mo ou pral kontinye tande pandan tout kou a.",
    illustrationPrompt:
      "A realistic photograph of a notebook with handwritten vocabulary notes next to an open laptop, warm study lighting, cozy learning atmosphere, professional lifestyle photography, no readable text visible in the notebook or on the screen",
    illustrationSrc: `${illustrationBase}/digital-vocabulary.webp`,
    digitalWords: [
      {
        word: "Aplikasyon (App)",
        definition: "Yon ti pwogram ou enstale pou fè yon travay espesifik.",
        example: "WhatsApp, Facebook, ak Google Maps se aplikasyon.",
      },
      {
        word: "Kont",
        definition:
          "Pwofil pèsonèl ou sou yon sèvis, ak yon non itilizatè ak modpas.",
        example: "Ou bezwen yon kont Gmail pou itilize Google.",
      },
      {
        word: "Mizajou",
        definition:
          "Yon nouvo vèsyon yon pwogram ki korije pwoblèm oswa ajoute bagay.",
        example: "Telefòn ou mande yon mizajou chak kèk semèn.",
      },
      {
        word: "Enstale",
        definition: "Mete yon nouvo aplikasyon sou aparèy ou.",
        example: "Mwen enstale WhatsApp sou telefòn mwen.",
      },
    ],
    realLifeExample:
      "💡 Konnen diferans ant 'kont' ak 'aplikasyon' ede w konprann poukisa ou ka gen menm kont Google sou plizyè aparèy diferan.",
    mistakeWrong: "Sote leson vokabilè yo paske yo sanble 'twò senp'.",
    mistakeCorrect:
      "Konprann mo debaz sa yo se fondasyon ki fè tout rès kou a pi fasil.",
    mistakeWhy:
      "⚠️ San vokabilè sa a, chak leson pi devan ap gen mo ou pa konprann — pran tan pou byen mèt yo kounye a fè tout rès la pi rapid.",
    aiExplanation:
      "🤖 Chak fwa ou tande yon mo dijital ou pa konnen, ou ka mande yon AI: 'Kisa [mo a] vle di, an mo senp?' — li se yon diksyonè k ap toujou disponib.",
    aiPrompt:
      "Hi! Can you give me five common tech words beginners often find confusing, with a one-sentence simple definition for each?",
    mission:
      "🎯 Misyon: pwochen fwa ou tande yon mo dijital ou pa konnen, ekri l epi chèche definisyon l.",
    quiz: {
      prompt: "Kisa yon 'aplikasyon' ye?",
      options: [
        "Yon kont itilizatè",
        "Yon ti pwogram ki fè yon travay espesifik",
        "Yon mizajou",
        "Yon sèvè cloud",
      ],
      correctIndex: 1,
      correctFeedback:
        "✅ Wi! Yon aplikasyon se yon pwogram pou yon travay espesifik.",
      wrongFeedback: "❌ Eseye ankò — repase definisyon yo anwo.",
    },
    recap: [
      { emoji: "📱", text: "Aplikasyon = ti pwogram pou yon travay." },
      { emoji: "🔑", text: "Kont = pwofil pèsonèl ou." },
      { emoji: "🔄", text: "Mizajou = nouvo vèsyon amelyore." },
      { emoji: "🎯", text: "Misyon: chèche definisyon yon mo ou pa konnen." },
    ],
  },
  {
    slug: "first-digital-mission",
    moduleTitle: "Modil 1: Byenveni nan Mond Dijital la",
    heroEmoji: "🏆",
    heroTitle: "Premye Misyon Dijital Ou",
    heroLede:
      "Se lè a pou konbine tout sa ou aprann nan Modil 1 nan yon vrè egzèsis.",
    goal: "🎯 Objektif: itilize tout konsèp Modil 1 yo ansanm pou fè yon rezime pèsonèl.",
    simpleExplanation:
      "Ou fèk aprann: sa yon òdinatè ye, diferans ant aparèy yo, hardware vs. software, sistèm dopewasyon, entènèt, ak cloud la. Misyon sa a mande w sèvi ak tout konesans sa a pou dekri PWÒP sitiyasyon dijital ou — pa jis repete definisyon yo.",
    illustrationPrompt:
      "A realistic photograph of a person confidently smiling while using a laptop at a bright desk, sense of accomplishment and confidence, warm natural lighting, professional lifestyle photography, no text or logos visible on the screen",
    illustrationSrc: `${illustrationBase}/first-digital-mission.webp`,
    digitalWords: [
      {
        word: "Konfyans dijital",
        definition: "Santi w kapab itilize teknoloji san w pa gen pè.",
        example: "Objektif kou sa a se bati konfyans dijital ou.",
      },
    ],
    realLifeExample:
      "💡 Konfyans pa vin lè ou memorize definisyon yo — li vin lè ou itilize yo pou pale de PWÒP lavi w.",
    mistakeWrong: "Panse ou dwe 'konnen tout bagay' anvan ou santi w konfyan.",
    mistakeCorrect:
      "Konprann konfyans vin ti pa ti pa, chak fwa ou aplike yon nouvo konsèp nan lavi reyèl ou.",
    mistakeWhy:
      "⚠️ Atann pou 'konnen tout bagay' anvan w santi w kapab se yon pyèj — pi bon fason an se aplike sa ou aprann kounye a, menm si li ti kras.",
    aiExplanation:
      "🤖 Kounye a ou ka itilize yon AI tankou yon patnè pratik: dekri sitiyasyon dijital ou epi mande l konsèy oswa eksplikasyon adisyonèl.",
    aiPrompt:
      "Hi! I just finished learning the basics of computers, devices, operating systems, the internet, and the cloud. Can you ask me a few simple questions to check my understanding?",
    mission:
      "🎯 Misyon Final Modil 1: ekri (oswa di awotvwa) yon ti paragraf 4-5 fraz ki dekri: ki aparèy ou itilize, ki sistèm dopewasyon li genyen, ak si w konekte a entènèt/cloud.",
    quiz: {
      prompt: "Ki objektif prensipal Modil 1 la?",
      options: [
        "Memorize tout definisyon yo pafètman",
        "Bati konfyans dijital atravè konprann konsèp debaz yo",
        "Achte yon nouvo òdinatè",
        "Aprann kòd pwogramasyon",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Objektif la se bati konfyans, pa memorize.",
      wrongFeedback: "❌ Eseye ankò — repase filozofi kou a nan kòmansman.",
    },
    recap: [
      { emoji: "🧠", text: "Konsèp anvan bouton — filozofi kou a." },
      { emoji: "💪", text: "Konfyans vin ti pa ti pa, pa tousuit." },
      { emoji: "🎓", text: "Ou fini Modil 1 — Byenveni nan Mond Dijital la!" },
      {
        emoji: "🎯",
        text: "Misyon: ekri yon paragraf sou pwòp sitiyasyon dijital ou.",
      },
    ],
  },
];

export function getComputerPremiumLesson(slug: string) {
  return computerPremiumLessons.find((lesson) => lesson.slug === slug);
}
