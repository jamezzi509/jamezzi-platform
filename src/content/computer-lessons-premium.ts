/**
 * Premium "Computer & Internet Essentials" lesson content.
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
  illustrationPrompt?: string;
  illustrationSrc?: string;
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
      "**Windows** ak **Mac** se de sistèm operasyon diferan (n ap wè kisa sa ye pi devan) ki fè yon òdinatè fonksyone. Windows fèt pa Microsoft e li itilize sou anpil mak diferan (Dell, HP, Lenovo, elatriye). Mac se sèlman sou òdinatè Apple fè. Yo gen menm bout objektif — travay, entènèt, fichye — men bouton ak meni yo pa nan menm plas.",
    illustrationPrompt:
      "A realistic photograph showing two different laptop computers side by side on a desk, one silver and one dark colored, both closed or subtly different in design, natural office lighting, professional product photography, no text or logos visible",
    illustrationSrc: `${illustrationBase}/windows-vs-mac.webp`,
    digitalWords: [
      {
        word: "Sistèm Operasyon",
        definition: "Pwogram prensipal ki kontwole tout òdinatè a.",
        example: "Windows se yon sistèm operasyon.",
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
        definition: "Sistèm operasyon Apple pou iPhone.",
        example: "iPhone mache ak iOS.",
      },
      {
        word: "Android",
        definition: "Sistèm operasyon Google ki mache sou plizyè mak telefòn.",
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
      "**Hardware** se tout pati FIZIK ou ka touche — ekran, klavye, sourit, batri. **Software** se pwogram yo, sa ou PA ka touche — aplikasyon, sit entènèt, sistèm operasyon an. Panse ak yon liv: papye a se hardware, istwa ki ekri ladan l se software.",
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
    heroTitle: "Kisa Yon Sistèm Operasyon Ye?",
    heroLede: "Se 'manadjè' envizib ki kontwole tout bagay dèyè ekran an.",
    goal: "🎯 Objektif: konprann wòl sistèm operasyon an nan yon aparèy.",
    simpleExplanation:
      "Yon **sistèm operasyon** (oswa 'OS') se pwogram prensipal ki kontwole tout lòt bagay nan yon aparèy — li fè hardware ak software travay ansanm. Windows, Mac (macOS), Android, ak iOS se tout egzanp sistèm operasyon. San yon sistèm operasyon, yon òdinatè se jis yon bwat fèmen ki pa fè anyen.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen glowing softly in a dim room showing an abstract colorful home screen interface, cinematic lighting, professional tech photography, no readable text or logos visible",
    illustrationSrc: `${illustrationBase}/what-is-an-operating-system.webp`,
    digitalWords: [
      {
        word: "Sistèm Operasyon (OS)",
        definition: "Pwogram debaz ki fè tout lòt bagay nan aparèy la mache.",
        example: "Windows, macOS, Android, ak iOS se sistèm operasyon.",
      },
      {
        word: "Aplikasyon",
        definition: "Yon pwogram espesifik ki mache SOU sistèm operasyon an.",
        example: "WhatsApp se yon aplikasyon ki mache sou Android oswa iOS.",
      },
    ],
    realLifeExample:
      "💡 Lè telefòn ou di 'Update disponib', se souvan sistèm operasyon an k ap mande yon mizajou pou l pi bon epi pi an sekirite.",
    mistakeWrong:
      "Konfonn yon aplikasyon (tankou WhatsApp) ak sistèm operasyon an (tankou Android).",
    mistakeCorrect:
      "Konprann sistèm operasyon an se 'kay' la, aplikasyon yo se 'mèb' anndan kay la.",
    mistakeWhy:
      "⚠️ Ou ka retire yon aplikasyon san pwoblèm, men ou pa ka retire sistèm operasyon an san aparèy la sispann fonksyone nèt.",
    aiExplanation:
      "🤖 Konprann sistèm operasyon an ede w konprann poukisa yon mesaj erè ka mansyone 'Windows' oswa 'iOS' — se sa k ap pale, pa yon aplikasyon espesifik.",
    aiPrompt:
      "Hi! Can you explain what an operating system does, using a simple analogy like a house or a manager, for someone who has never thought about it before?",
    mission:
      "🎯 Misyon: gade telefòn oswa òdinatè ou epi idantifye ki sistèm operasyon l ap itilize.",
    quiz: {
      prompt: "Ki wòl yon sistèm operasyon jwe?",
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
        text: "Sistèm operasyon = pwogram prensipal ki kontwole aparèy la.",
      },
      {
        emoji: "🏠",
        text: "Sistèm operasyon se 'kay', aplikasyon yo se 'mèb'.",
      },
      {
        emoji: "🔄",
        text: "Mizajou sistèm operasyon kenbe aparèy la an sekirite.",
      },
      { emoji: "🎯", text: "Misyon: idantifye sistèm operasyon aparèy ou." },
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
      "Ou fèk aprann: sa yon òdinatè ye, diferans ant aparèy yo, hardware vs. software, sistèm operasyon, entènèt, ak cloud la. Misyon sa a mande w sèvi ak tout konesans sa a pou dekri PWÒP sitiyasyon dijital ou — pa jis repete definisyon yo.",
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
      "🎯 Misyon Final Modil 1: ekri (oswa di awotvwa) yon ti paragraf 4-5 fraz ki dekri: ki aparèy ou itilize, ki sistèm operasyon li genyen, ak si w konekte a entènèt/cloud.",
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
  {
    slug: "the-monitor",
    moduleTitle: "Modil 2: Fè Konesans Ak Òdinatè Ou",
    heroEmoji: "🖥️",
    heroTitle: "Ekran an (Monitor)",
    heroLede: "Fenèt ou itilize pou wè tout sa òdinatè a ap fè.",
    goal: "🎯 Objektif: konnen wòl ekran an epi ki jan pou ajiste li.",
    simpleExplanation:
      "**Ekran an** (oswa 'monitor') se pati ki montre ou tout sa k ap pase nan òdinatè a — tèks, imaj, videyo. Sou yon laptop, ekran an kole ak klavye a. Sou yon desktop, li souvan yon pyès apa, konekte ak yon kab.",
    illustrationPrompt:
      "A realistic photograph of a modern computer monitor on a desk displaying a colorful abstract screensaver, clean home office setting, soft natural lighting, professional product photography, no readable text visible on screen",
    illustrationSrc: `${illustrationBase}/the-monitor.webp`,
    digitalWords: [
      {
        word: "Ekran (Monitor)",
        definition: "Pati ki montre imaj ak tèks òdinatè a.",
        example: "Ekran mwen an gwo ase pou m travay konfòtableman.",
      },
      {
        word: "Rezolisyon",
        definition: "Klète yon imaj sou ekran an.",
        example: "Yon ekran ak bon rezolisyon montre tèks pi klè.",
      },
    ],
    realLifeExample:
      "💡 Lè ekran ou two fonse oswa two klere, ou ka ajiste 'brightness' (limyè) li nan paramèt aparèy la san ou pa bezwen achte yon lòt ekran.",
    mistakeWrong: "Panse yon ekran fonse oswa ki pa reponn vle di li kraze.",
    mistakeCorrect:
      "Verifye si ekran an limen, si kab la byen konekte, anvan ou panse li kraze.",
    mistakeWhy:
      "⚠️ Anpil 'pwoblèm ekran' se senpleman yon kab ki pa byen konekte oswa yon paramèt limyè ki twò ba — verifye sa anvan ou enkyete w.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou ajiste limyè oswa gwosè tèks sou ekran ou si ou pa jwenn paramèt la fasil.",
    aiPrompt:
      "Hi! Can you explain, step by step, how to adjust the brightness on a computer monitor?",
    mission:
      "🎯 Misyon: gade yon ekran (òdinatè, telefòn, oswa tablèt) epi ajiste limyè li yon fwa.",
    quiz: {
      prompt: "Sou yon laptop, kote ekran an ye?",
      options: [
        "Li toujou yon pyès apa",
        "Li kole ak klavye a",
        "Li anndan sourit la",
        "Pa gen ekran sou yon laptop",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sou yon laptop, ekran an kole ak klavye a.",
      wrongFeedback: "❌ Eseye ankò — panse ak fòm yon laptop.",
    },
    recap: [
      { emoji: "🖥️", text: "Ekran an montre tout sa òdinatè a ap fè." },
      { emoji: "💡", text: "Ou ka ajiste limyè ekran an nan paramèt." },
      { emoji: "🔌", text: "Verifye kab la anvan ou panse ekran an kraze." },
      { emoji: "🎯", text: "Misyon: ajiste limyè yon ekran." },
    ],
  },
  {
    slug: "keyboard-basics",
    moduleTitle: "Modil 2: Fè Konesans Ak Òdinatè Ou",
    heroEmoji: "⌨️",
    heroTitle: "Baz Klavye a",
    heroLede:
      "Ou pa bezwen konnen chak tous — jis kèk kle ou pral itilize chak jou.",
    goal: "🎯 Objektif: rekonèt kle debaz ou pral itilize souvan sou yon klavye.",
    simpleExplanation:
      "Yon klavye gen anpil tous, men ou pral sèlman itilize yon ti kantite yo souvan: lèt ak chif, **Espas** (barrespas), **Antre** (Enter, pou konfime oswa ale liy), **Efase** (Backspace/Delete), ak **Shift** (pou lèt majiskil).",
    illustrationPrompt:
      "A realistic photograph of a modern computer keyboard close-up, soft natural lighting, shallow depth of field, clean minimal desk setting, professional product photography",
    illustrationSrc: `${illustrationBase}/keyboard-basics.webp`,
    digitalWords: [
      {
        word: "Enter (Antre)",
        definition: "Kle ki konfime yon aksyon oswa ale nan yon nouvo liy.",
        example: "Peze Enter apre ou fin ekri rechèch ou.",
      },
      {
        word: "Backspace",
        definition: "Kle ki efase karaktè dèyè kursè a.",
        example: "Itilize Backspace pou korije yon fòt tape.",
      },
      {
        word: "Shift",
        definition: "Kle ou kenbe pou ekri an lèt majiskil oswa siy espesyal.",
        example: "Kenbe Shift epi peze yon lèt pou li vin majiskil.",
      },
    ],
    realLifeExample:
      "💡 Lè ou ekri yon imèl epi ou fè yon fòt, peze Backspace pou efase l epi kontinye tape.",
    mistakeWrong: "Efase tout sa ou ekri epi rekòmanse lè ou fè yon sèl fòt.",
    mistakeCorrect:
      "Itilize Backspace pou efase sèlman karaktè ki mal la, epi kontinye.",
    mistakeWhy:
      "⚠️ Rekòmanse tout yon tèks pou yon sèl fòt pèdi tan pou anyen — Backspace fèt egzakteman pou sa.",
    aiExplanation:
      "🤖 Si ou vle aprann tape pi vit, ou ka mande yon AI pou konseye w sou eksèsis pou pratike tape san gade klavye a.",
    aiPrompt:
      "Hi! Can you give me three simple exercises to practice typing faster without looking at the keyboard?",
    mission:
      "🎯 Misyon: tape non ou nan yon dokiman oswa yon mesaj, epi itilize Backspace pou korije omwen yon fòt.",
    quiz: {
      prompt: "Ki kle ou itilize pou efase yon karaktè ou fenk tape?",
      options: ["Shift", "Enter", "Backspace", "Espas"],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Backspace efase karaktè dèyè kursè a.",
      wrongFeedback: "❌ Eseye ankò — chèche kle ki 'efase' a.",
    },
    recap: [
      { emoji: "⌨️", text: "Ou bezwen sèlman kèk kle chak jou." },
      { emoji: "↩️", text: "Enter konfime oswa ale yon nouvo liy." },
      { emoji: "⌫", text: "Backspace efase yon fòt." },
      { emoji: "🎯", text: "Misyon: tape non ou epi korije yon fòt." },
    ],
  },
  {
    slug: "mouse-and-trackpad",
    moduleTitle: "Modil 2: Fè Konesans Ak Òdinatè Ou",
    heroEmoji: "🖱️",
    heroTitle: "Sourit ak Trackpad",
    heroLede:
      "De zouti diferan, men menm objektif: kontwole kote ou ye sou ekran an.",
    goal: "🎯 Objektif: itilize yon sourit oswa yon trackpad pou navige ekran an.",
    simpleExplanation:
      "Yon **sourit** se yon zouti separe ou deplase sou tab la. Yon **trackpad** se pati plat anba klavye laptop la ou glise dwèt ou sou li. Tou de fè menm bagay: deplase yon ti flèch (kursè) sou ekran an, epi klike pou chwazi yon bagay.",
    illustrationPrompt:
      "A realistic photograph of a hand resting on a laptop trackpad next to a wireless computer mouse on a wooden desk, natural lighting, professional product photography, no text visible",
    illustrationSrc: `${illustrationBase}/mouse-and-trackpad.webp`,
    digitalWords: [
      {
        word: "Kursè",
        definition: "Ti flèch sou ekran an ki montre kote sourit ou ye.",
        example: "Deplase kursè a sou bouton an epi klike.",
      },
      {
        word: "Klike",
        definition:
          "Peze bouton sourit la (oswa touche trackpad la) pou chwazi yon bagay.",
        example: "Klike de fwa vit pou louvri yon dosye.",
      },
      {
        word: "Double-klike",
        definition: "Klike de fwa vit youn apre lòt.",
        example: "Double-klike sou yon ikòn pou louvri l.",
      },
    ],
    realLifeExample:
      "💡 Pou louvri yon dosye sou desktop la, ou ka double-klike sou li ak yon sourit, oswa touche l de fwa ak yon trackpad.",
    mistakeWrong: "Klike anpil fwa vit lè yon bagay pa reponn imedyatman.",
    mistakeCorrect:
      "Klike yon sèl fwa epi tann yon ti moman anvan ou eseye ankò.",
    mistakeWhy:
      "⚠️ Klike plizyè fwa lè yon aplikasyon ap chaje ka louvri l plizyè fwa an menm tan, sa ka mele bagay yo pi mal.",
    aiExplanation:
      "🤖 Si sourit ou oswa trackpad ou pa reponn byen, ou ka mande yon AI pou konseye w kijan pou verifye si li konekte oswa si li bezwen chaje.",
    aiPrompt:
      "Hi! My computer mouse isn't responding. Can you give me a simple checklist to troubleshoot it?",
    mission:
      "🎯 Misyon: itilize sourit oswa trackpad ou pou double-klike sou yon ikòn epi louvri l.",
    quiz: {
      prompt: "Kisa yon trackpad ye?",
      options: [
        "Yon sourit separe ou deplase sou tab la",
        "Pati plat anba klavye laptop la",
        "Yon kle sou klavye a",
        "Yon kalite ekran",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Trackpad la se pati plat anba klavye laptop la.",
      wrongFeedback: "❌ Eseye ankò — panse ak kote li ye sou yon laptop.",
    },
    recap: [
      { emoji: "🖱️", text: "Sourit ak trackpad fè menm travay la." },
      { emoji: "➡️", text: "Yo deplase kursè a sou ekran an." },
      {
        emoji: "🖱️",
        text: "Klike yon sèl fwa, tann, epi eseye ankò si sa nesesè.",
      },
      { emoji: "🎯", text: "Misyon: double-klike sou yon ikòn." },
    ],
  },
  {
    slug: "webcam-and-microphone",
    moduleTitle: "Modil 2: Fè Konesans Ak Òdinatè Ou",
    heroEmoji: "📷",
    heroTitle: "Webcam ak Mikwofòn",
    heroLede: "De zouti ki kite lòt moun wè ak tande ou nan yon apèl videyo.",
    goal: "🎯 Objektif: konprann wòl webcam ak mikwofòn nan yon apèl videyo.",
    simpleExplanation:
      "Yon **webcam** se yon ti kamera ki kite lòt moun WÈ ou pandan yon apèl videyo (tankou Zoom oswa WhatsApp videyo). Yon **mikwofòn** se sa ki kite yo TANDE ou. Anpil laptop ak telefòn gen tou de deja enstale.",
    illustrationPrompt:
      "A realistic photograph of a laptop open showing a video call interface with a person visible on screen, warm home lighting, professional lifestyle photography, no readable text visible on screen",
    illustrationSrc: `${illustrationBase}/webcam-and-microphone.webp`,
    digitalWords: [
      {
        word: "Webcam",
        definition: "Ti kamera ki kite lòt moun wè ou nan yon apèl videyo.",
        example: "Limen webcam ou anvan ou antre nan reyinyon an.",
      },
      {
        word: "Mikwofòn",
        definition: "Zouti ki kaptire vwa ou pou lòt moun tande.",
        example: "Mete mikwofòn ou an silans lè ou pa ap pale.",
      },
      {
        word: "Silans (Mute)",
        definition: "Fèmen mikwofòn ou pou pèsonn pa tande son bò kote w.",
        example: "Mete telefòn ou an silans pandan reyinyon an.",
      },
    ],
    realLifeExample:
      "💡 Nan yon apèl Zoom, si lòt moun di yo pa tande ou, verifye si mikwofòn ou an silans (mute) anvan ou panse gen yon pwoblèm pi grav.",
    mistakeWrong: "Panse yon apèl videyo kraze paske pèsonn pa tande ou.",
    mistakeCorrect: "Verifye si mikwofòn ou an silans anvan ou sispann eseye.",
    mistakeWhy:
      "⚠️ Rezon #1 moun pa tande yon moun nan yon apèl videyo se senpleman mikwofòn lan an silans — verifye sa anvan tout lòt bagay.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou tès webcam ak mikwofòn ou anvan yon apèl enpòtan, pou w pa gen sipriz.",
    aiPrompt:
      "Hi! Can you give me a quick checklist to test my webcam and microphone before an important video call?",
    mission:
      "🎯 Misyon: louvri yon aplikasyon videyo (Zoom, WhatsApp, oswa Google Meet) epi verifye webcam ak mikwofòn ou mache.",
    quiz: {
      prompt: "Poukisa moun pa tande ou souvan nan yon apèl videyo?",
      options: [
        "Webcam ou pa limen",
        "Mikwofòn ou an silans (mute)",
        "Ekran ou two fonse",
        "Klavye ou pa konekte",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Mikwofòn an silans se rezon #1.",
      wrongFeedback: "❌ Eseye ankò — panse ak son, pa imaj.",
    },
    recap: [
      { emoji: "📷", text: "Webcam kite moun wè ou." },
      { emoji: "🎙️", text: "Mikwofòn kite moun tande ou." },
      { emoji: "🔇", text: "Verifye mute anvan tout lòt bagay." },
      { emoji: "🎯", text: "Misyon: tès webcam ak mikwofòn ou." },
    ],
  },
  {
    slug: "speakers-and-sound",
    moduleTitle: "Modil 2: Fè Konesans Ak Òdinatè Ou",
    heroEmoji: "🔊",
    heroTitle: "Speakers ak Son",
    heroLede: "Kijan son soti nan aparèy ou pou rive nan zòrèy ou.",
    goal: "🎯 Objektif: konprann kijan pou kontwole son sou aparèy ou.",
    simpleExplanation:
      "**Speakers** (opalè) se zouti ki fè ou tande son — mizik, videyo, apèl. Yo ka anndan aparèy la deja, oswa yo ka aparèy separe ou konekte. Ou ka ajiste volim (fò/ba) nan paramèt oswa ak bouton espesyal.",
    illustrationPrompt:
      "A realistic photograph of small modern desktop speakers on either side of a laptop, warm cozy lighting, clean desk setup, professional product photography",
    illustrationSrc: `${illustrationBase}/speakers-and-sound.webp`,
    digitalWords: [
      {
        word: "Volim",
        definition: "Fòs son an — fò oswa ba.",
        example: "Bese volim lan si mizik la twò fò.",
      },
      {
        word: "Kaskèt (Headphones)",
        definition: "Aparèy ou mete sou zòrèy pou tande san deranje lòt moun.",
        example: "Mete kaskèt ou pou koute mizik trankil.",
      },
      {
        word: "Bluetooth",
        definition: "Fason pou konekte aparèy son san fisl.",
        example: "Konekte kaskèt Bluetooth ou ak telefòn ou.",
      },
    ],
    realLifeExample:
      "💡 Si ou nan yon espas piblik, mete kaskèt ou olye pou w kite volim lan fò sou speakers aparèy la — sa respekte moun bò kote w.",
    mistakeWrong:
      "Panse aparèy la 'pa gen son' lè volim lan senpleman ba anpil.",
    mistakeCorrect: "Verifye volim lan anvan ou panse gen yon pwoblèm pi grav.",
    mistakeWhy:
      "⚠️ Anpil fwa 'pa gen son' se senpleman volim lan ki fèmen oswa trò ba — yon verifikasyon rapid regle sa.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou konekte kaskèt Bluetooth ou pou premye fwa si ou pa sèten kijan pou fè l.",
    aiPrompt:
      "Hi! Can you explain, step by step, how to connect Bluetooth headphones to a phone or laptop for the first time?",
    mission:
      "🎯 Misyon: ajiste volim yon aparèy epi eseye konekte kaskèt (ak fisl oswa Bluetooth) si ou genyen.",
    quiz: {
      prompt: "Ki premye bagay pou verifye si ou pa tande okenn son?",
      options: [
        "Si klavye a konekte",
        "Si volim lan ba oswa fèmen",
        "Si ekran an limen",
        "Si sourit la mache",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Verifye volim lan anvan tout lòt bagay.",
      wrongFeedback: "❌ Eseye ankò — panse ak son, pa lòt pati aparèy la.",
    },
    recap: [
      { emoji: "🔊", text: "Speakers fè ou tande son." },
      { emoji: "🎧", text: "Kaskèt bon pou espas piblik." },
      { emoji: "🔉", text: "Verifye volim anvan ou panse gen pwoblèm." },
      { emoji: "🎯", text: "Misyon: ajiste volim epi konekte kaskèt." },
    ],
  },
  {
    slug: "usb-and-hdmi",
    moduleTitle: "Modil 2: Fè Konesans Ak Òdinatè Ou",
    heroEmoji: "🔌",
    heroTitle: "USB ak HDMI",
    heroLede: "De pò ou pral rekonèt sou prèske tout òdinatè.",
    goal: "🎯 Objektif: rekonèt pò USB ak pò HDMI, epi konnen ki sa yo fè.",
    simpleExplanation:
      "Yon **pò USB** se yon ti twou rektang ou konekte kle USB, sourit, klavye, oswa telefòn ou pou chaje. Yon **pò HDMI** pi gwo, li konekte òdinatè a ak yon ekran oswa televizyon pou montre imaj/videyo.",
    illustrationPrompt:
      "A realistic close-up photograph of the side of a laptop showing USB and HDMI ports with cables plugged in, clean modern desk setting, natural lighting, professional product photography",
    illustrationSrc: `${illustrationBase}/usb-and-hdmi.webp`,
    digitalWords: [
      {
        word: "USB",
        definition:
          "Yon pò ki konekte kle USB, sourit, klavye, ak lòt akseswa.",
        example: "Mete kle USB ou nan pò USB a pou kopye foto.",
      },
      {
        word: "HDMI",
        definition: "Yon pò ki konekte òdinatè a ak yon ekran oswa televizyon.",
        example: "Konekte laptop ou ak televizyon ak yon kab HDMI.",
      },
      {
        word: "Pò (Port)",
        definition: "Ti twou sou yon aparèy kote ou konekte yon kab.",
        example: "Chèche pò ki matche ak kab ou.",
      },
    ],
    realLifeExample:
      "💡 Pou montre yon prezantasyon sou yon gwo televizyon nan yon reyinyon, ou konekte laptop ou ak televizyon an ak yon kab HDMI.",
    mistakeWrong: "Fòse yon kab antre nan yon pò ki pa matche fòm li.",
    mistakeCorrect: "Verifye fòm pò a matche fòm kab la anvan ou pouse.",
    mistakeWhy:
      "⚠️ Fòse yon kab nan move pò ka domaje ni kab la ni aparèy la — pran yon segonn pou verifye fòm anvan ou konekte.",
    aiExplanation:
      "🤖 Si ou pa sèten ki kab ou bezwen pou konekte de aparèy, ou ka dekri yo bay yon AI epi mande l ki kalite kab ki bezwen.",
    aiPrompt:
      "Hi! I want to connect my laptop to a TV to show a presentation. What kind of cable do I need?",
    mission:
      "🎯 Misyon: idantifye pò USB ak pò HDMI sou yon laptop (pa w oswa yon moun ou konnen).",
    quiz: {
      prompt: "Ki pò ou itilize pou konekte laptop ou ak yon televizyon?",
      options: ["USB", "HDMI", "Backspace", "Bluetooth"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! HDMI konekte ak ekran/televizyon.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak pò ki fè imaj parèt sou yon gwo ekran.",
    },
    recap: [
      { emoji: "🔌", text: "USB pou kle, sourit, klavye." },
      { emoji: "📺", text: "HDMI pou konekte ak yon ekran/televizyon." },
      { emoji: "⚠️", text: "Pa fòse yon kab nan move pò." },
      { emoji: "🎯", text: "Misyon: idantifye USB ak HDMI sou yon laptop." },
    ],
  },
  {
    slug: "charging-and-power-button",
    moduleTitle: "Modil 2: Fè Konesans Ak Òdinatè Ou",
    heroEmoji: "🔋",
    heroTitle: "Chaje ak Bouton Aliminyen",
    heroLede: "Kijan pou kenbe aparèy ou an vi, san domaje batri a.",
    goal: "🎯 Objektif: chaje aparèy ou an sekirite epi konnen wòl bouton aliminyen an.",
    simpleExplanation:
      "**Bouton aliminyen an** limen oswa fèmen aparèy la. Souvan, kenbe l pou de-twa segonn limen aparèy la; kenbe l pi lontan ka fòse l fèmen si li bloke. **Chaje** vle di konekte aparèy la ak yon kab pou batri a plen ankò.",
    illustrationPrompt:
      "A realistic photograph of a laptop charging with its power cable connected, small charging indicator light visible, cozy home setting, warm lighting, professional product photography",
    illustrationSrc: `${illustrationBase}/charging-and-power-button.webp`,
    digitalWords: [
      {
        word: "Bouton Aliminyen",
        definition: "Bouton ki limen oswa fèmen yon aparèy.",
        example: "Peze bouton aliminyen an pou limen laptop la.",
      },
      {
        word: "Chajè",
        definition: "Kab ak blòk ou konekte nan priz pou chaje batri a.",
        example: "Pote chajè ou lè ou vwayaje.",
      },
      {
        word: "Batri Plen",
        definition: "Lè batri a rive 100% chaje.",
        example: "Tann batri a plen anvan ou dekonekte l konplètman.",
      },
    ],
    realLifeExample:
      "💡 Si laptop ou bloke nèt e li pa reponn, kenbe bouton aliminyen an pandan 8-10 segonn pou fòse l fèmen, epi limen l ankò.",
    mistakeWrong: "Kite batri a desann jiska 0% chak fwa anvan ou chaje l.",
    mistakeCorrect: "Chaje aparèy la souvan, san tann li rive 0% chak fwa.",
    mistakeWhy:
      "⚠️ Kite batri a desann jiska 0% souvan ka fè l pèdi kapasite pi vit ak tan — pi bon pou chaje l detanzantan.",
    aiExplanation:
      "🤖 Ou ka mande yon AI konsèy sou kijan pou fè batri aparèy ou dire pi lontan alontèm.",
    aiPrompt:
      "Hi! Can you give me three simple tips to help my laptop or phone battery last longer over time?",
    mission:
      "🎯 Misyon: verifye pousantaj batri yon aparèy ou genyen, epi chaje l si li ba.",
    quiz: {
      prompt: "Kisa pou w fè si laptop ou bloke nèt e li pa reponn?",
      options: [
        "Jete l",
        "Kenbe bouton aliminyen an pou fòse l fèmen",
        "Tann yon semèn",
        "Chaje l pi vit",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Kenbe bouton aliminyen an fòse l fèmen.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak bouton ki kontwole aliminyen an.",
    },
    recap: [
      { emoji: "🔋", text: "Bouton aliminyen limen/fèmen aparèy la." },
      { emoji: "🔌", text: "Chaje souvan, pa tann 0%." },
      { emoji: "🆘", text: "Kenbe bouton an pou fòse fèmen si li bloke." },
      { emoji: "🎯", text: "Misyon: verifye ak chaje batri yon aparèy." },
    ],
  },
  {
    slug: "restart-vs-shutdown",
    moduleTitle: "Modil 2: Fè Konesans Ak Òdinatè Ou",
    heroEmoji: "🔄",
    heroTitle: "Restart vs. Shutdown",
    heroLede: "De aksyon ki sanble, men ki pa fè menm bagay la.",
    goal: "🎯 Objektif: konnen diferans ant Restart ak Shutdown, epi ki lè pou itilize chak.",
    simpleExplanation:
      "**Restart** (relanse) fèmen òdinatè a epi limen l ankò otomatikman — bon lè yon bagay mache dwòl. **Shutdown** (fèmen) fèmen òdinatè a nèt, san limen l ankò — bon lè ou fini itilize l pou yon bon bout tan.",
    illustrationPrompt:
      "A realistic photograph of a hand reaching toward a laptop power button, soft ambient lighting, clean minimal desk, professional product photography, no readable text visible",
    illustrationSrc: `${illustrationBase}/restart-vs-shutdown.webp`,
    digitalWords: [
      {
        word: "Restart",
        definition: "Fèmen epi limen aparèy la ankò otomatikman.",
        example: "Fè yon Restart lè yon aplikasyon bloke.",
      },
      {
        word: "Shutdown",
        definition: "Fèmen aparèy la nèt, san limen l ankò.",
        example: "Fè yon Shutdown lè ou fini pou jounen an.",
      },
      {
        word: "Sleep",
        definition: "Mete aparèy la an repo rapid, san fèmen l nèt.",
        example: "Sleep bon pou yon ti poz kout.",
      },
    ],
    platformExamples: [
      {
        platform: "windows",
        steps:
          "Klike sou bouton Windows (Start) nan kwen anba goch la, apre sa klike sou bouton Power (⏻), epi chwazi 'Restart' oswa 'Shut down' nan lis la.",
        illustrationPrompt:
          "A clean, accurate screenshot mockup of a Windows 11 Start menu power options popup showing Sleep, Shut down, and Restart as a short vertical list with icons, authentic modern Windows 11 UI design, light theme, crisp and legible interface",
        illustrationSrc: `${illustrationBase}/restart-vs-shutdown-windows.webp`,
      },
      {
        platform: "mac",
        steps:
          "Klike sou ikòn Apple (🍎) nan kwen anwo goch la, epi chwazi 'Restart...' oswa 'Shut Down...' nan meni ki louvri a.",
        illustrationPrompt:
          "A clean, accurate screenshot mockup of a macOS Apple menu dropdown open in the top-left corner. The bottom section of the menu must show exactly these three items stacked in this exact order, each on its own line: 'Sleep', then 'Restart...', then 'Shut Down...'. Do not omit Restart. Authentic macOS Sonoma menu bar styling, light theme, crisp legible menu text, translucent dropdown background",
        illustrationSrc: `${illustrationBase}/restart-vs-shutdown-mac.webp`,
      },
    ],
    realLifeExample:
      "💡 Si yon sit entènèt oswa yon aplikasyon bloke e li pa reponn ankò, yon Restart souvan regle pwoblèm nan san ou pa bezwen fè anyen plis.",
    mistakeWrong:
      "Kenbe bouton aliminyen an pou fòse fèmen chak fwa ou vle fèmen aparèy la.",
    mistakeCorrect:
      "Itilize meni Restart/Shutdown nòmal la — rezève fòse fèmen sèlman pou lè aparèy la bloke nèt.",
    mistakeWhy:
      "⚠️ Fòse fèmen souvan (olye de itilize meni an) ka fè ou pèdi travay ou pa t sovgade, paske aparèy la pa gen tan fèmen tout bagay byen.",
    aiExplanation:
      "🤖 Si ou pa sèten si ou dwe fè yon Restart oswa yon Shutdown nan yon sitiyasyon espesifik, ou ka dekri sitiyasyon an bay yon AI epi mande konsèy.",
    aiPrompt:
      "Hi! My computer is acting slow and strange. Should I restart it or shut it down completely? What's the difference?",
    mission:
      "🎯 Misyon: fè yon Restart sou yon òdinatè (pa w oswa yon moun ou konnen), swiv etap platfòm ki matche l la.",
    quiz: {
      prompt: "Ki lè pi bon pou fè yon Restart olye de yon Shutdown?",
      options: [
        "Lè ou fini pou tout jounen an",
        "Lè yon aplikasyon oswa sistèm nan ap mache dwòl",
        "Lè ou vwayaje",
        "Chak swa san rezon",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Restart bon lè yon bagay mache dwòl.",
      wrongFeedback: "❌ Eseye ankò — panse ak sa Restart fèt pou regle.",
    },
    recap: [
      { emoji: "🔄", text: "Restart = fèmen epi limen ankò otomatikman." },
      { emoji: "⏻", text: "Shutdown = fèmen nèt." },
      { emoji: "🖱️", text: "Itilize meni an, pa fòse fèmen chak fwa." },
      { emoji: "🎯", text: "Misyon: fè yon Restart swiv etap platfòm ou." },
    ],
  },
  {
    slug: "external-devices",
    moduleTitle: "Modil 2: Fè Konesans Ak Òdinatè Ou",
    heroEmoji: "🖨️",
    heroTitle: "Aparèy Eksteryè, Enprimant, ak Eskanè",
    heroLede:
      "Zouti ou konekte ak òdinatè ou pou fè plis pase sa l fè poukont li.",
    goal: "🎯 Objektif: konnen wòl aparèy eksteryè debaz tankou enprimant ak eskanè.",
    simpleExplanation:
      "Yon **aparèy eksteryè** se nenpòt zouti ou konekte ak òdinatè a ki pa fè pati l orijinèlman — kle USB, disk di eksteryè, elatriye. Yon **enprimant** transfòme yon dokiman dijital an papye. Yon **eskanè** fè kontrè a: li transfòme yon papye an fichye dijital.",
    illustrationPrompt:
      "A realistic photograph of a modern home printer on a desk next to a laptop, clean office setting, natural lighting, professional product photography",
    illustrationSrc: `${illustrationBase}/external-devices.webp`,
    digitalWords: [
      {
        word: "Aparèy Eksteryè",
        definition:
          "Yon zouti ou konekte ak òdinatè a ki pa fè pati l orijinèlman.",
        example: "Yon kle USB se yon aparèy eksteryè.",
      },
      {
        word: "Enprimant",
        definition: "Aparèy ki transfòme yon dokiman dijital an papye.",
        example: "Enprime dokiman an sou enprimant lan.",
      },
      {
        word: "Eskanè",
        definition: "Aparèy ki transfòme yon papye an fichye dijital.",
        example: "Eskane katdidantite ou pou voye l pa imèl.",
      },
    ],
    realLifeExample:
      "💡 Pou voye yon kopi katdidantite ou pa imèl, ou ka eskane l ak yon eskanè (oswa aplikasyon telefòn) pou fè yon vèsyon dijital.",
    mistakeWrong:
      "Panse ou toujou bezwen yon eskanè apa pou eskane yon dokiman.",
    mistakeCorrect:
      "Konnen anpil telefòn gen aplikasyon ki eskane dokiman ak kamera a sèlman.",
    mistakeWhy:
      "⚠️ Aplikasyon tankou Google Drive oswa Notes ka eskane yon dokiman ak kamera telefòn ou — ou pa toujou bezwen yon machin eskanè apa.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ki aplikasyon telefòn ki bon pou eskane dokiman si ou pa gen yon eskanè fizik.",
    aiPrompt:
      "Hi! What's a good free phone app to scan documents using just my phone's camera?",
    mission:
      "🎯 Misyon: si ou gen aksè a yon enprimant oswa yon eskanè (oswa yon aplikasyon telefòn), eseye enprime oswa eskane yon dokiman.",
    quiz: {
      prompt: "Kisa yon eskanè fè?",
      options: [
        "Li transfòme yon dokiman dijital an papye",
        "Li transfòme yon papye an fichye dijital",
        "Li chaje batri a",
        "Li konekte ak entènèt",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Eskanè a transfòme papye an fichye dijital.",
      wrongFeedback: "❌ Eseye ankò — panse ak direksyon: papye → dijital.",
    },
    recap: [
      { emoji: "🖨️", text: "Enprimant: dijital → papye." },
      { emoji: "📠", text: "Eskanè: papye → dijital." },
      { emoji: "📱", text: "Telefòn ou ka eskane tou ak yon aplikasyon." },
      { emoji: "🎯", text: "Misyon: enprime oswa eskane yon dokiman." },
    ],
  },
  {
    slug: "meet-your-computer-mission",
    moduleTitle: "Modil 2: Fè Konesans Ak Òdinatè Ou",
    heroEmoji: "🏆",
    heroTitle: "Misyon: Fè Konesans Ak Òdinatè Ou",
    heroLede: "Se lè a pou konbine tout pati òdinatè ou aprann nan Modil 2.",
    goal: "🎯 Objektif: idantifye chak pati yon vrè òdinatè ak konfyans.",
    simpleExplanation:
      "Ou fèk aprann: ekran, klavye, sourit/trackpad, webcam, mikwofòn, speakers, pò USB/HDMI, chajè, bouton aliminyen, Restart/Shutdown, ak aparèy eksteryè tankou enprimant. Misyon sa a mande w gade yon vrè òdinatè epi idantifye pati sa yo.",
    illustrationPrompt:
      "A realistic photograph of a complete modern desktop computer setup showing monitor, keyboard, mouse, and speakers all together on a clean desk, natural lighting, professional product photography, sense of completeness and confidence",
    illustrationSrc: `${illustrationBase}/meet-your-computer-mission.webp`,
    digitalWords: [
      {
        word: "Konfigirasyon",
        definition: "Tout pati ki ansanm fòme yon aparèy konplè.",
        example: "Konfigirasyon biwo mwen gen yon ekran, klavye, ak sourit.",
      },
    ],
    realLifeExample:
      "💡 Lè ou konnen non chak pati yon òdinatè, li pi fasil pou eksplike yon pwoblèm bay yon moun k ap ede w — pa telefòn oswa an pèsòn.",
    mistakeWrong: "Panse ou dwe memorize chak detay teknik chak pyès la.",
    mistakeCorrect:
      "Konnen sèlman wòl debaz chak pati a ase pou itilize l ak konfyans.",
    mistakeWhy:
      "⚠️ Ou pa bezwen vin yon teknisyen — ou jis bezwen konnen ase pou itilize aparèy ou san pè ak pou eksplike yon pwoblèm klèman.",
    aiExplanation:
      "🤖 Kounye a ou ka dekri yon pwoblèm òdinatè bay yon AI ak vokabilè kòrèk — sa ap ede l bay ou yon repons pi presi.",
    aiPrompt:
      "Hi! I just learned the names of all the parts of a computer — monitor, keyboard, mouse, webcam, microphone, speakers, ports, and the power button. Can you quiz me on what each one does?",
    mission:
      "🎯 Misyon Final Modil 2: gade yon vrè òdinatè (pa w oswa yon moun ou konnen) epi idantifye omwen 6 pati diferan awotvwa oswa alekri.",
    quiz: {
      prompt: "Ki objektif prensipal Modil 2 la?",
      options: [
        "Vin yon teknisyen òdinatè pwofesyonèl",
        "Idantifye ak konprann wòl chak pati yon òdinatè",
        "Aprann kòd pwogramasyon",
        "Reparasyon ekran kraze",
      ],
      correctIndex: 1,
      correctFeedback:
        "✅ Wi! Objektif la se idantifye ak konprann, pa vin teknisyen.",
      wrongFeedback: "❌ Eseye ankò — repase objektif Modil 2 la.",
    },
    recap: [
      { emoji: "🖥️", text: "Ekran, klavye, sourit/trackpad." },
      { emoji: "📷", text: "Webcam, mikwofòn, speakers." },
      { emoji: "🔌", text: "USB, HDMI, chajè, bouton aliminyen." },
      { emoji: "🎓", text: "Ou fini Modil 2 — Fè Konesans Ak Òdinatè Ou!" },
    ],
  },
  {
    slug: "the-desktop",
    moduleTitle: "Modil 3: Itilize Òdinatè Ou",
    heroEmoji: "🖥️",
    heroTitle: "Desktop la",
    heroLede: "Premye bagay ou wè lè òdinatè a fin limen.",
    goal: "🎯 Objektif: konprann sa desktop la ye epi kijan pou kenbe l òganize.",
    simpleExplanation:
      "**Desktop la** se premye ekran ou wè lè òdinatè a fin limen — tankou tab travay vityèl ou. Ou ka mete **ikòn** (ti imaj) sou li pou jwenn dosye ak aplikasyon rapid. Yon **fon ekran (wallpaper)** se imaj ki dèyè tout bagay.",
    illustrationPrompt:
      "A realistic photograph of a clean, organized computer desktop screen with a few neatly arranged file icons and a nature wallpaper, modern laptop, natural lighting, professional product photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/the-desktop.webp`,
    digitalWords: [
      {
        word: "Desktop",
        definition:
          "Premye ekran ou wè lè òdinatè a limen, tankou yon tab travay.",
        example: "Mete dosye enpòtan yo sou desktop la pou jwenn yo vit.",
      },
      {
        word: "Ikòn",
        definition: "Yon ti imaj ki reprezante yon dosye oswa yon aplikasyon.",
        example: "Double-klike sou ikòn nan pou louvri l.",
      },
      {
        word: "Fon Ekran (Wallpaper)",
        definition: "Imaj ki parèt dèyè tout ikòn sou desktop la.",
        example: "Chanje fon ekran ou ak yon foto ou renmen.",
      },
    ],
    realLifeExample:
      "💡 Si ou gen anpil dosye gaye sou desktop ou, li ka fè l difisil pou jwenn sa ou bezwen — tankou yon biwo ki plen ak papye gaye toupatou.",
    mistakeWrong: "Kite dè santèn ikòn gaye san lòd sou desktop la.",
    mistakeCorrect:
      "Kenbe sèlman kèk dosye enpòtan sou desktop la, mete rès la nan dosye.",
    mistakeWhy:
      "⚠️ Yon desktop plen fè l pi difisil pou jwenn sa ou bezwen vit, epi li ka ralanti òdinatè a si gen anpil gwo fichye.",
    aiExplanation:
      "🤖 Ou ka mande yon AI konsèy sou kijan pou òganize dosye ou yo yon fason ki lojik pou lavi w.",
    aiPrompt:
      "Hi! Can you suggest a simple folder organization system for someone who's just starting to use a computer?",
    mission:
      "🎯 Misyon: gade desktop yon òdinatè (pa w oswa yon moun ou konnen) epi konte konbyen ikòn ki genyen sou li.",
    quiz: {
      prompt: "Kisa desktop la ye?",
      options: [
        "Yon aplikasyon espesifik",
        "Premye ekran ou wè lè òdinatè a limen",
        "Yon kalite klavye",
        "Yon pò USB",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Se premye ekran ou wè.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak sa ou wè an premye lè òdinatè a limen.",
    },
    recap: [
      { emoji: "🖥️", text: "Desktop = premye ekran, tankou yon tab travay." },
      { emoji: "🖼️", text: "Ikòn reprezante dosye ak aplikasyon." },
      { emoji: "🧹", text: "Kenbe desktop la òganize." },
      { emoji: "🎯", text: "Misyon: konte ikòn sou yon desktop." },
    ],
  },
  {
    slug: "taskbar-dock-and-start-menu",
    moduleTitle: "Modil 3: Itilize Òdinatè Ou",
    heroEmoji: "📊",
    heroTitle: "Taskbar, Dock, ak Start Menu",
    heroLede:
      "Yon bann ki toujou la pou montre ou sa k ap mache ak kijan pou louvri plis.",
    goal: "🎯 Objektif: itilize taskbar/dock la pou louvri aplikasyon ak wè sa k ap mache.",
    simpleExplanation:
      "Sou **Windows**, yon **taskbar** rete anba ekran an ak yon bouton **Start** pou jwenn tout aplikasyon ou. Sou **Mac**, yon **dock** rete anba (oswa sou kote) ak ikòn aplikasyon ou itilize souvan. Tou de fè menm bagay la: montre ou sa k ap mache epi kite ou louvri nouvo bagay.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a taskbar at the bottom with several colorful app icons, warm ambient lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/taskbar-dock-and-start-menu.webp`,
    digitalWords: [
      {
        word: "Taskbar",
        definition: "Bann anba ekran Windows ki montre aplikasyon k ap mache.",
        example:
          "Klike sou ikòn nan taskbar la pou retounen nan yon aplikasyon.",
      },
      {
        word: "Dock",
        definition: "Bann sou Mac ki montre aplikasyon ou itilize souvan.",
        example: "Ajoute yon aplikasyon nan dock la pou jwenn li vit.",
      },
      {
        word: "Start Menu",
        definition: "Meni sou Windows kote ou jwenn tout aplikasyon ou.",
        example: "Klike sou Start pou chèche yon aplikasyon.",
      },
    ],
    platformExamples: [
      {
        platform: "windows",
        steps:
          "Taskbar la rete FIKS anba ekran an. Klike sou bouton Windows (Start) pou wè tout aplikasyon ou, oswa klike sou yon ikòn ki deja nan taskbar la pou louvri l.",
      },
      {
        platform: "mac",
        steps:
          "Dock la rete anba (oswa sou kote) ekran an. Klike sou nenpòt ikòn pou louvri aplikasyon an. Yon ti pwen anba yon ikòn montre aplikasyon an ap mache deja.",
      },
    ],
    realLifeExample:
      "💡 Si ou pa jwenn fenèt ou t ap itilize a, gade nan taskbar/dock la — li ka toujou ouvè, jis kache dèyè yon lòt fenèt.",
    mistakeWrong:
      "Louvri menm aplikasyon an plizyè fwa paske ou pa wè li deja ouvè.",
    mistakeCorrect:
      "Gade taskbar/dock la anvan ou louvri yon nouvo kopi menm aplikasyon an.",
    mistakeWhy:
      "⚠️ Louvri menm aplikasyon an plizyè fwa ralanti òdinatè a san rezon — yon ti gade nan taskbar/dock la evite sa.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou epingle (pin) yon aplikasyon ou itilize souvan nan taskbar/dock la pou jwenn li pi vit.",
    aiPrompt:
      "Hi! Can you explain how to pin my favorite apps to the taskbar (Windows) or dock (Mac) so I can open them faster?",
    mission:
      "🎯 Misyon: gade taskbar/dock yon òdinatè epi idantifye ki aplikasyon k ap mache kounye a.",
    quiz: {
      prompt: "Ki objektif prensipal taskbar/dock la?",
      options: [
        "Chaje batri a",
        "Montre aplikasyon k ap mache ak kite ou louvri lòt",
        "Konekte ak entènèt",
        "Enprime dokiman",
      ],
      correctIndex: 1,
      correctFeedback:
        "✅ Wi! Li montre aplikasyon k ap mache ak kite ou louvri lòt.",
      wrongFeedback: "❌ Eseye ankò — panse ak wòl bann sa a.",
    },
    recap: [
      {
        emoji: "📊",
        text: "Taskbar (Windows) / Dock (Mac) montre aplikasyon k ap mache.",
      },
      { emoji: "🪟", text: "Start Menu bay aksè a tout aplikasyon Windows." },
      { emoji: "👀", text: "Gade la anvan ou louvri yon dezyèm kopi." },
      { emoji: "🎯", text: "Misyon: idantifye aplikasyon k ap mache." },
    ],
  },
  {
    slug: "finder-and-file-explorer",
    moduleTitle: "Modil 3: Itilize Òdinatè Ou",
    heroEmoji: "📁",
    heroTitle: "Finder ak File Explorer",
    heroLede: "Aplikasyon ki fèt egzakteman pou navige nan dosye ou yo.",
    goal: "🎯 Objektif: itilize Finder (Mac) oswa File Explorer (Windows) pou jwenn fichye ou.",
    simpleExplanation:
      "**File Explorer** se aplikasyon sou Windows ki kite ou navige nan tout dosye ak fichye ou. **Finder** se menm bagay la sou Mac. Tou de gen menm objektif: gade, chèche, epi jere fichye ou yo.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a file browser window with folder icons organized in a grid, clean modern interface, natural lighting, professional tech photography, no readable text needed",
    illustrationSrc: `${illustrationBase}/finder-and-file-explorer.webp`,
    digitalWords: [
      {
        word: "File Explorer",
        definition: "Aplikasyon Windows pou navige nan dosye ak fichye.",
        example: "Louvri File Explorer pou jwenn yon foto ou telechaje.",
      },
      {
        word: "Finder",
        definition: "Aplikasyon Mac pou navige nan dosye ak fichye.",
        example: "Itilize Finder pou chèche yon dokiman sou Mac ou.",
      },
      {
        word: "Navige",
        definition: "Deplase soti nan yon dosye pou rive nan yon lòt.",
        example:
          "Navige nan dosye Downloads pou jwenn fichye ou fèk telechaje.",
      },
    ],
    platformExamples: [
      {
        platform: "windows",
        steps:
          "Klike sou ikòn File Explorer (yon dosye jòn) nan taskbar la, oswa peze tous Windows + E ansanm.",
        illustrationPrompt:
          "A clean, accurate screenshot mockup of a Windows 11 File Explorer window showing a sidebar with Quick access, Desktop, Downloads, Documents, and Pictures, and a main area with folder icons in a grid, authentic modern Windows 11 UI design, light theme, crisp legible interface",
        illustrationSrc: `${illustrationBase}/finder-and-file-explorer-windows.webp`,
      },
      {
        platform: "mac",
        steps:
          "Klike sou ikòn Finder (yon figi ble/blan) nan dock la, oswa klike sou desktop la epi peze Cmd + N.",
        illustrationPrompt:
          "A clean, accurate screenshot mockup of a macOS Finder window showing a sidebar with Favorites, Desktop, Downloads, Documents, and a main area with folder icons in a grid, authentic macOS Sonoma UI design, light theme, crisp legible interface",
        illustrationSrc: `${illustrationBase}/finder-and-file-explorer-mac.webp`,
      },
    ],
    realLifeExample:
      "💡 Lè ou telechaje yon fichye sou entènèt, li rive nan dosye 'Downloads' — ouvri File Explorer oswa Finder epi klike sou 'Downloads' pou jwenn li.",
    mistakeWrong:
      "Pèdi tan chèche yon fichye nan chak aplikasyon youn apre lòt.",
    mistakeCorrect:
      "Itilize bawo rechèch File Explorer/Finder la pou jwenn yon fichye vit pa non li.",
    mistakeWhy:
      "⚠️ File Explorer ak Finder gen yon bawo rechèch entegre ki fè w jwenn yon fichye pi vit pase w ap gade nan chak dosye youn pa youn.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou chèche yon fichye espesifik ak File Explorer/Finder si ou pa sèten ki dosye li ye.",
    aiPrompt:
      "Hi! Can you explain how to search for a specific file by name using File Explorer or Finder?",
    mission:
      "🎯 Misyon: louvri File Explorer (oswa Finder) epi navige rive nan dosye Downloads.",
    quiz: {
      prompt: "Ki non aplikasyon pou navige fichye a sou Mac?",
      options: ["File Explorer", "Finder", "Taskbar", "Dock"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Finder se aplikasyon Mac la.",
      wrongFeedback: "❌ Eseye ankò — File Explorer se pou Windows.",
    },
    recap: [
      { emoji: "📁", text: "File Explorer = Windows, Finder = Mac." },
      { emoji: "🔍", text: "Itilize bawo rechèch pou jwenn fichye vit." },
      { emoji: "⬇️", text: "Fichye telechaje rive nan dosye Downloads." },
      { emoji: "🎯", text: "Misyon: navige rive nan dosye Downloads." },
    ],
  },
  {
    slug: "working-with-windows",
    moduleTitle: "Modil 3: Itilize Òdinatè Ou",
    heroEmoji: "🪟",
    heroTitle: "Travay Ak Fenèt",
    heroLede: "Chak aplikasyon ouvri nan yon 'fenèt' ou ka jere.",
    goal: "🎯 Objektif: minimize, maximize, ak fèmen yon fenèt ak konfyans.",
    simpleExplanation:
      "Chak fwa ou louvri yon aplikasyon, li parèt nan yon **fenèt**. Nan kwen anwo fenèt la, ou jwenn twa bouton: **minimize** (kache fenèt la san fèmen l), **maximize** (fè l ranpli tout ekran an), ak **fèmen** (fèmen fenèt la nèt).",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing an open application window with visible minimize, maximize, and close buttons in the corner, clean modern interface, natural lighting, professional tech photography",
    illustrationSrc: `${illustrationBase}/working-with-windows.webp`,
    digitalWords: [
      {
        word: "Minimize",
        definition: "Kache yon fenèt san fèmen l, ou ka retounen sou li pita.",
        example: "Minimize fenèt la pou wè desktop la yon segonn.",
      },
      {
        word: "Maximize",
        definition: "Fè yon fenèt ranpli tout ekran an.",
        example: "Maximize fenèt videyo a pou wè l pi gwo.",
      },
      {
        word: "Fèmen (Close)",
        definition: "Fèmen yon fenèt nèt — aplikasyon an sispann mache.",
        example: "Fèmen fenèt ou pa itilize ankò pou ekonomize memwa.",
      },
    ],
    realLifeExample:
      "💡 Si ou vle gade de aplikasyon an menm tan, minimize youn epi maximize lòt la, oswa mete yo kòtakòt sou ekran an.",
    mistakeWrong:
      "Fèmen yon fenèt lè ou vle senpleman kache l pou yon ti moman.",
    mistakeCorrect:
      "Itilize minimize lè ou vle kenbe travay ou san fèmen aplikasyon an.",
    mistakeWhy:
      "⚠️ Fèmen yon aplikasyon ka fè ou pèdi travay ou pa t sovgade — minimize se pi sekiritè lè ou jis vle l soti nan wout ou pou yon ti moman.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou mete de fenèt kòtakòt sou menm ekran an pou konpare yo.",
    aiPrompt:
      "Hi! Can you explain how to put two windows side by side on the same screen?",
    mission:
      "🎯 Misyon: louvri yon aplikasyon epi eseye minimize, maximize, ak fèmen li.",
    quiz: {
      prompt: "Ki bouton kache yon fenèt san fèmen aplikasyon an?",
      options: ["Fèmen", "Maximize", "Minimize", "Restart"],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Minimize kache san fèmen.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak mo ki vle di 'fè l pi piti/kache'.",
    },
    recap: [
      { emoji: "➖", text: "Minimize kache fenèt la san fèmen l." },
      { emoji: "⬜", text: "Maximize fè l ranpli tout ekran an." },
      { emoji: "❌", text: "Fèmen sispann aplikasyon an nèt." },
      { emoji: "🎯", text: "Misyon: eseye tout twa bouton yo." },
    ],
  },
  {
    slug: "right-click-and-drag-drop",
    moduleTitle: "Modil 3: Itilize Òdinatè Ou",
    heroEmoji: "🖱️",
    heroTitle: "Right-Click ak Drag & Drop",
    heroLede: "De aksyon senp ki debloke anpil fonksyon kache.",
    goal: "🎯 Objektif: itilize right-click ak drag-and-drop pou fè plis ak sourit/trackpad ou.",
    simpleExplanation:
      "**Right-click** (klike ak bouton dwat sourit la, oswa touche ak de dwèt sou trackpad) louvri yon ti meni ak plis opsyon. **Drag and drop** vle di kenbe yon bagay ak sourit/dwèt epi deplase l yon lòt kote anvan ou lage l.",
    illustrationPrompt:
      "A realistic photograph of a hand using a laptop trackpad with a two-finger gesture, or a mouse with the right button highlighted, clean minimal desk, natural lighting, professional product photography",
    illustrationSrc: `${illustrationBase}/right-click-and-drag-drop.webp`,
    digitalWords: [
      {
        word: "Right-Click",
        definition: "Klike ak bouton dwat sourit la pou louvri plis opsyon.",
        example: "Right-click sou yon fichye pou wè opsyon rename.",
      },
      {
        word: "Drag and Drop",
        definition:
          "Kenbe yon bagay epi deplase l yon lòt kote anvan ou lage l.",
        example: "Drag yon fichye epi drop li nan yon lòt dosye.",
      },
      {
        word: "Meni Kontèks",
        definition: "Ti lis opsyon ki parèt lè ou right-click.",
        example: "Meni kontèks la gen opsyon 'Copy', 'Delete', 'Rename'.",
      },
    ],
    realLifeExample:
      "💡 Pou chanje non yon fichye, right-click sou li epi chwazi 'Rename' nan meni kontèks la — pi rapid pase chèche yon bouton nan yon meni.",
    mistakeWrong: "Panse right-click ap 'kraze' oswa efase yon bagay.",
    mistakeCorrect:
      "Konprann right-click sèlman montre opsyon — li pa fè anyen pou kont li.",
    mistakeWhy:
      "⚠️ Right-click san danje — li jis louvri yon meni ak plis opsyon. Aksyon an sèlman fèt si ou chwazi yon bagay nan meni an apre.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kisa yon opsyon espesifik nan meni kontèks la fè si ou pa sèten.",
    aiPrompt:
      "Hi! I right-clicked on a file and see options like 'Cut', 'Copy', 'Rename', and 'Properties'. Can you explain what each one does?",
    mission:
      "🎯 Misyon: right-click sou yon ikòn epi gade tout opsyon ki parèt, san ou pa chwazi anyen.",
    quiz: {
      prompt: "Kisa ki pase lè ou right-click sou yon ikòn?",
      options: [
        "Fichye a efase otomatikman",
        "Yon meni ak plis opsyon louvri",
        "Aplikasyon an fèmen",
        "Òdinatè a fè yon Restart",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Yon meni ak plis opsyon louvri.",
      wrongFeedback:
        "❌ Eseye ankò — right-click pa fè anyen danjere pou kont li.",
    },
    recap: [
      { emoji: "🖱️", text: "Right-click louvri yon meni ak plis opsyon." },
      { emoji: "✋", text: "Drag and drop deplase yon bagay yon lòt kote." },
      { emoji: "✅", text: "Right-click san danje pou kont li." },
      {
        emoji: "🎯",
        text: "Misyon: right-click sou yon ikòn epi gade opsyon yo.",
      },
    ],
  },
  {
    slug: "keyboard-shortcuts",
    moduleTitle: "Modil 3: Itilize Òdinatè Ou",
    heroEmoji: "⌨️",
    heroTitle: "Rakousi Klavye (Keyboard Shortcuts)",
    heroLede:
      "Kat konbinezon kle ki ap fè w gen konfyans nan nenpòt aplikasyon.",
    goal: "🎯 Objektif: itilize rakousi klavye pou copy, paste, undo, ak redo.",
    simpleExplanation:
      "Yon **rakousi klavye** se lè ou kenbe plizyè kle ansanm pou fè yon aksyon vit, san sourit. Sou Windows, ou itilize **Ctrl**; sou Mac, ou itilize **Cmd (⌘)**. Kat rakousi ki pi itil yo: Copy (kopye), Paste (kole), Undo (anile), ak Redo (refè).",
    howItWorks: [
      "Copy: Ctrl+C (Windows) oswa Cmd+C (Mac) — kopye sa ou seleksyone",
      "Paste: Ctrl+V (Windows) oswa Cmd+V (Mac) — kole sa ou kopye a",
      "Undo: Ctrl+Z (Windows) oswa Cmd+Z (Mac) — anile dènye aksyon w",
      "Redo: Ctrl+Y (Windows) oswa Cmd+Shift+Z (Mac) — refè sa ou anile a",
    ],
    illustrationPrompt:
      "A realistic close-up photograph of hands typing on a keyboard with fingers positioned as if pressing a keyboard shortcut combination, natural lighting, shallow depth of field, professional product photography",
    illustrationSrc: `${illustrationBase}/keyboard-shortcuts.webp`,
    digitalWords: [
      {
        word: "Copy (Kopye)",
        definition: "Fè yon dupliya sa ou seleksyone, san retire l.",
        example: "Seleksyone tèks la epi peze Ctrl+C pou kopye l.",
      },
      {
        word: "Paste (Kole)",
        definition: "Mete sa ou kopye a yon lòt kote.",
        example: "Peze Ctrl+V pou kole tèks ou kopye a.",
      },
      {
        word: "Undo (Anile)",
        definition: "Retounen yon etap an aryè, anile dènye aksyon an.",
        example: "Peze Ctrl+Z si ou efase yon bagay pa aksidan.",
      },
    ],
    realLifeExample:
      "💡 Si ou efase yon paragraf antye pa aksidan pandan ou ap ekri yon dokiman, peze Ctrl+Z (oswa Cmd+Z) imedyatman pou fè l retounen.",
    mistakeWrong:
      "Retape yon tèks antye ou efase pa aksidan, olye de anile aksyon an.",
    mistakeCorrect:
      "Peze Ctrl+Z (oswa Cmd+Z) imedyatman pou anile dènye aksyon an.",
    mistakeWhy:
      "⚠️ Retape yon bagay ou efase pa aksidan pèdi tan pou anyen — Undo egziste egzakteman pou sitiyasyon sa a.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ki lòt rakousi klavye itil ki egziste pou aplikasyon espesifik ou itilize souvan.",
    aiPrompt:
      "Hi! Besides copy, paste, undo, and redo, what are three other useful keyboard shortcuts every beginner should know?",
    mission:
      "🎯 Misyon: ekri yon fraz nan yon dokiman, kopye l ak Ctrl/Cmd+C, epi kole l yon lòt kote ak Ctrl/Cmd+V.",
    quiz: {
      prompt: "Ki rakousi klavye anile dènye aksyon ou fè a?",
      options: ["Ctrl/Cmd+C", "Ctrl/Cmd+V", "Ctrl/Cmd+Z", "Ctrl/Cmd+P"],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Ctrl/Cmd+Z anile dènye aksyon an.",
      wrongFeedback: "❌ Eseye ankò — Z se pou 'anile' (undo).",
    },
    recap: [
      { emoji: "📋", text: "Ctrl/Cmd+C = Copy." },
      { emoji: "📥", text: "Ctrl/Cmd+V = Paste." },
      { emoji: "↩️", text: "Ctrl/Cmd+Z = Undo." },
      { emoji: "🎯", text: "Misyon: pratike copy ak paste." },
    ],
  },
  {
    slug: "settings-and-personalization",
    moduleTitle: "Modil 3: Itilize Òdinatè Ou",
    heroEmoji: "⚙️",
    heroTitle: "Settings ak Pèsonalizasyon",
    heroLede: "Fè aparèy ou sanble ak fonksyone jan OU vle.",
    goal: "🎯 Objektif: jwenn ak ajiste paramèt debaz yon aparèy.",
    simpleExplanation:
      "**Settings** (Paramèt) se kote ou ajiste jan aparèy ou fonksyone: limyè ekran, volim, notifikasyon, mòd fonse (dark mode), gwosè tèks, elatriye. Konsèp la menm jan sou Windows, Mac, Android, ak iPhone — se sèlman kote yo mete l ki chanje.",
    illustrationPrompt:
      "A realistic photograph of a smartphone or laptop showing a colorful settings menu interface with sliders and toggle switches, warm natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/settings-and-personalization.webp`,
    digitalWords: [
      {
        word: "Settings (Paramèt)",
        definition: "Kote ou ajiste jan yon aparèy fonksyone ak parèt.",
        example: "Ale nan Settings pou chanje volim otomatik la.",
      },
      {
        word: "Dark Mode (Mòd Fonse)",
        definition: "Yon tèm ekran ki itilize koulè fonse olye de klere.",
        example: "Limen Dark Mode pou pwoteje je ou lannwit.",
      },
      {
        word: "Notifikasyon",
        definition: "Ti mesaj ki parèt sou ekran pou avize w de yon bagay.",
        example: "Jere notifikasyon pou yo pa deranje w twòp.",
      },
    ],
    realLifeExample:
      "💡 Si tèks sou telefòn ou two piti pou li, ou ka ale nan Settings > Display epi ogmante gwosè tèks la san ou pa bezwen achte yon lòt telefòn.",
    mistakeWrong:
      "Panse ou dwe achte yon nouvo aparèy si li pa 'sanble byen' pou ou.",
    mistakeCorrect:
      "Eksplore Settings pou ajiste tèks, koulè, ak limyè jan ki bon pou ou.",
    mistakeWhy:
      "⚠️ Anpil moun pa reyalize konbyen yo ka pèsonalize yon aparèy — Settings genyen plis pouvwa pase moun panse.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou jwenn yon paramèt espesifik si ou pa jwenn li nan meni Settings la.",
    aiPrompt:
      "Hi! I want to make the text bigger on my phone or computer. Can you tell me where to find that setting?",
    mission:
      "🎯 Misyon: ale nan Settings yon aparèy epi eseye chanje youn: limyè, volim, oswa dark mode.",
    quiz: {
      prompt: "Ki sa ki rete menm konsèp sou Windows, Mac, Android, ak iPhone?",
      options: [
        "Kote Settings ye egzakteman",
        "Konsèp Settings la — ajiste jan aparèy la fonksyone",
        "Non chak bouton",
        "Koulè meni an",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Konsèp la menm, plas la sèlman ki chanje.",
      wrongFeedback: "❌ Eseye ankò — panse ak sa ki pa chanje ant platfòm yo.",
    },
    recap: [
      { emoji: "⚙️", text: "Settings ajiste jan aparèy la fonksyone." },
      { emoji: "🌙", text: "Dark Mode itilize koulè fonse." },
      { emoji: "🔤", text: "Ou ka ogmante gwosè tèks nan Settings." },
      { emoji: "🎯", text: "Misyon: chanje yon paramèt sou yon aparèy." },
    ],
  },
  {
    slug: "sound-and-notifications",
    moduleTitle: "Modil 3: Itilize Òdinatè Ou",
    heroEmoji: "🔔",
    heroTitle: "Son ak Notifikasyon",
    heroLede: "Kontwole sa ou tande ak sa ki enteronp ou.",
    goal: "🎯 Objektif: kontwole volim ak jere notifikasyon pou yo pa deranje w twòp.",
    simpleExplanation:
      "Ou deja konnen kijan pou ajiste **volim**. Kounye a, ann pale de **notifikasyon** — ti mesaj ki parèt sou ekran an lè ou resevwa yon imèl, mesaj, oswa mizajou. Twòp notifikasyon an menm tan ka fè ou santi w debòde — ou ka kontwole ki aplikasyon gen dwa voye yo.",
    illustrationPrompt:
      "A realistic photograph of a smartphone showing a notification banner on its lock screen, soft ambient lighting, professional lifestyle photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/sound-and-notifications.webp`,
    digitalWords: [
      {
        word: "Notifikasyon",
        definition: "Ti mesaj ki parèt pou avize w de yon bagay nouvo.",
        example: "Yon notifikasyon parèt lè ou resevwa yon mesaj WhatsApp.",
      },
      {
        word: "Do Not Disturb",
        definition: "Mòd ki fèmen tout notifikasyon pou yon ti tan.",
        example: "Limen Do Not Disturb pandan ou ap dòmi.",
      },
      {
        word: "Aktive/Dezaktive",
        definition: "Limen oswa fèmen yon fonksyon.",
        example: "Dezaktive notifikasyon pou yon aplikasyon espesifik.",
      },
    ],
    realLifeExample:
      "💡 Si telefòn ou 'sonnen' san rete pandan yon reyinyon, limen 'Do Not Disturb' (Pa Deranje) pou fèmen tout notifikasyon pou yon ti tan.",
    mistakeWrong: "Kite notifikasyon tout aplikasyon aktive san chwa.",
    mistakeCorrect:
      "Dezaktive notifikasyon pou aplikasyon ki pa vrèman enpòtan pou ou.",
    mistakeWhy:
      "⚠️ Twòp notifikasyon ka fè w santi w toujou strese oswa distrè — chwazi ki aplikasyon vrèman merite deranje w ede konsantrasyon ou.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou limite notifikasyon a sèlman aplikasyon ki vrèman enpòtan pou ou.",
    aiPrompt:
      "Hi! My phone gets too many notifications. Can you explain how to turn off notifications for specific apps I don't need alerts from?",
    mission:
      "🎯 Misyon: gade lis notifikasyon ou epi dezaktive youn ki pa vrèman itil.",
    quiz: {
      prompt: "Kisa 'Do Not Disturb' fè?",
      options: [
        "Li ogmante volim lan",
        "Li fèmen tout notifikasyon pou yon ti tan",
        "Li chaje batri a",
        "Li fè yon Restart",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Li fèmen tout notifikasyon pou yon ti tan.",
      wrongFeedback: "❌ Eseye ankò — panse ak non 'Pa Deranje'.",
    },
    recap: [
      { emoji: "🔔", text: "Notifikasyon avize w de yon bagay nouvo." },
      { emoji: "🌙", text: "Do Not Disturb fèmen yo pou yon ti tan." },
      { emoji: "🎚️", text: "Ou ka chwazi ki aplikasyon gen dwa voye yo." },
      { emoji: "🎯", text: "Misyon: dezaktive yon notifikasyon ou pa bezwen." },
    ],
  },
  {
    slug: "screenshots-and-screen-recording",
    moduleTitle: "Modil 3: Itilize Òdinatè Ou",
    heroEmoji: "📸",
    heroTitle: "Screenshots ak Anrejistreman Ekran",
    heroLede: "Kaptire egzakteman sa ki sou ekran ou, an foto oswa an videyo.",
    goal: "🎯 Objektif: pran yon screenshot sou nenpòt platfòm.",
    simpleExplanation:
      "Yon **screenshot** se yon foto de tout sa ki sou ekran ou kounye a. Chak platfòm gen pwòp fason pou fè l — konbinezon kle sou Windows/Mac, oswa bouton fizik sou telefòn.",
    illustrationPrompt:
      "A realistic photograph of a hand holding a smartphone with a camera shutter icon overlay effect suggesting a screenshot being taken, modern clean background, professional tech photography, no readable text needed",
    illustrationSrc: `${illustrationBase}/screenshots-and-screen-recording.webp`,
    digitalWords: [
      {
        word: "Screenshot",
        definition: "Yon foto de tout sa ki sou ekran ou kounye a.",
        example: "Pran yon screenshot pou montre yon moun yon mesaj erè.",
      },
      {
        word: "Anrejistreman Ekran",
        definition: "Yon videyo de tout sa k ap pase sou ekran ou.",
        example:
          "Fè yon anrejistreman ekran pou montre kijan pou fè yon bagay.",
      },
    ],
    platformExamples: [
      {
        platform: "windows",
        steps:
          "Peze tous Windows + Shift + S pou chwazi yon zòn espesifik, oswa peze PrtScn pou tout ekran an. Foto a sovgade epi ou ka kole l ak Ctrl+V.",
        illustrationPrompt:
          "A clean, accurate screenshot mockup of the Windows 11 Snipping Tool screen selection overlay, showing a dimmed screen with a rectangular selection area being drawn, small toolbar with rectangle, window, and freeform selection icons at the top, authentic modern Windows 11 UI design",
        illustrationSrc: `${illustrationBase}/screenshots-and-screen-recording-windows.webp`,
      },
      {
        platform: "mac",
        steps:
          "Peze Cmd + Shift + 4 epi trase yon zòn ak sourit la pou pran yon screenshot. Peze Cmd + Shift + 3 pou tout ekran an. Foto a sovgade otomatikman sou desktop la.",
        illustrationPrompt:
          "A clean, accurate screenshot mockup of macOS screenshot selection mode, showing crosshair cursor and a dimmed screen with a rectangular selection area, small floating toolbar below the selection, authentic macOS Sonoma UI design",
        illustrationSrc: `${illustrationBase}/screenshots-and-screen-recording-mac.webp`,
      },
      {
        platform: "android",
        steps:
          "Kenbe bouton Aliminyen ak bouton Volim Ba ansanm pandan yon segonn. Yon ti son oswa flash konfime screenshot la pran.",
      },
      {
        platform: "iphone",
        steps:
          "Kenbe bouton Kote (Side) ak bouton Volim Wo ansanm pandan yon segonn. Yon apèsi parèt nan kwen anba goch ekran an.",
      },
    ],
    realLifeExample:
      "💡 Si yon aplikasyon montre yon mesaj erè, pran yon screenshot epi voye l bay yon moun k ap ede w — pi klè pase eseye dekri l ak mo.",
    mistakeWrong:
      "Eseye dekri yon erè ekran ak mo konplike olye de pran yon screenshot.",
    mistakeCorrect:
      "Pran yon screenshot epi voye l dirèkteman — pi klè pou tout moun.",
    mistakeWhy:
      "⚠️ Yon imaj montre egzakteman sa k ap pase — pafwa pi fasil pase eseye eksplike yon mesaj erè teknik ak mo.",
    aiExplanation:
      "🤖 Ou ka voye yon screenshot bay yon AI (ki aksepte imaj) epi mande l eksplike sa ki sou ekran an oswa rezoud yon pwoblèm ou wè.",
    aiPrompt:
      "Hi! Can you explain the easiest way to take a screenshot on my specific device (Windows, Mac, Android, or iPhone)?",
    mission:
      "🎯 Misyon: pran yon screenshot sou aparèy ou swiv etap platfòm ou.",
    quiz: {
      prompt: "Ki konbinezon kle pran yon screenshot sou Mac?",
      options: [
        "Cmd + Shift + 4",
        "Ctrl + V",
        "Windows + E",
        "Bouton Aliminyen + Volim",
      ],
      correctIndex: 0,
      correctFeedback: "✅ Wi! Cmd + Shift + 4 pran yon screenshot sou Mac.",
      wrongFeedback: "❌ Eseye ankò — chèche konbinezon Mac la.",
    },
    recap: [
      { emoji: "📸", text: "Screenshot = foto de tout sa ki sou ekran ou." },
      { emoji: "🖥️", text: "Windows: Windows+Shift+S. Mac: Cmd+Shift+4." },
      { emoji: "📱", text: "Telefòn: bouton aliminyen + volim." },
      { emoji: "🎯", text: "Misyon: pran yon screenshot sou aparèy ou." },
    ],
  },
  {
    slug: "typing-accented-characters",
    moduleTitle: "Modil 3: Itilize Òdinatè Ou",
    heroEmoji: "✍️",
    heroTitle: "Ekri Karaktè ak Aksan",
    heroLede: "Kijan pou ekri é, è, à, ak ò san yon klavye espesyal.",
    goal: "🎯 Objektif: ekri karaktè ak aksan sou nenpòt klavye.",
    simpleExplanation:
      "Klavye estanda pa gen tous pou é, è, à, ò dirèkteman, men chak platfòm gen yon fason pou ekri yo — swa ak yon konbinezon kle, swa ak yon apiye long (long press) sou telefòn.",
    illustrationPrompt:
      "A realistic close-up photograph of hands typing on a laptop keyboard with a focus on special character keys, natural lighting, shallow depth of field, professional product photography",
    illustrationSrc: `${illustrationBase}/typing-accented-characters.webp`,
    digitalWords: [
      {
        word: "Aksan",
        definition: "Ti mak sou yon lèt (tankou é, è, à) ki chanje son li.",
        example: "Mo 'kreyòl' gen yon aksan sou 'o' a.",
      },
      {
        word: "Long Press (Apiye Long)",
        definition: "Kenbe dwèt ou sou yon tous pi lontan pase yon senp tape.",
        example: "Long press sou 'e' pou wè opsyon 'é', 'è', 'ê'.",
      },
    ],
    platformExamples: [
      {
        platform: "windows",
        steps:
          "Kenbe tous Alt epi tape yon kòd nimewo sou klavye nimerik la: é = Alt+0233, è = Alt+0232, à = Alt+0224, ò = Alt+0242.",
      },
      {
        platform: "mac",
        steps:
          "Kenbe tous Option epi peze lèt ki matche ak aksan an (egzanp: Option+E pou aksan egi), apre sa tape lèt ou vle a: é = Option+E, e.",
      },
      {
        platform: "android",
        steps:
          "Kenbe dwèt ou pi lontan sou lèt debaz la (egzanp 'e') sou klavye telefòn nan, epi yon ti meni ak opsyon aksan yo (é, è, ê) parèt pou ou chwazi.",
      },
      {
        platform: "iphone",
        steps:
          "Kenbe dwèt ou pi lontan sou lèt debaz la (egzanp 'e') sou klavye telefòn nan, epi yon ti meni ak opsyon aksan yo parèt pou ou chwazi.",
      },
    ],
    realLifeExample:
      "💡 Lè ou ekri yon mesaj an fransè oswa kreyòl sou telefòn ou, kenbe dwèt ou pi lontan sou lèt la pou jwenn vèsyon ak aksan an, olye de kopye-kole l chak fwa.",
    mistakeWrong: "Kopye-kole yon lèt ak aksan chak fwa ou bezwen l.",
    mistakeCorrect:
      "Aprann konbinezon kle oswa long-press platfòm ou pou ekri aksan dirèkteman.",
    mistakeWhy:
      "⚠️ Kopye-kole chak fwa pèdi tan anpil — yon fwa ou aprann teknik platfòm ou, li vin otomatik ak vit.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou aktive yon klavye ki gen aksan yo dirèkteman sou li, si ou ekri souvan an fransè oswa kreyòl.",
    aiPrompt:
      "Hi! I write in French and Haitian Creole often. Can you explain how to add a keyboard layout with accented characters on my phone or computer?",
    mission:
      "🎯 Misyon: ekri yon mo ak omwen yon aksan (tankou 'kreyòl' oswa 'café') sou aparèy ou.",
    quiz: {
      prompt: "Kijan pou ekri yon aksan sou telefòn (Android oswa iPhone)?",
      options: [
        "Peze Alt + yon nimewo",
        "Kenbe dwèt ou pi lontan sou lèt debaz la",
        "Peze Ctrl + Z",
        "Se pa posib sou telefòn",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Long-press montre opsyon aksan yo.",
      wrongFeedback: "❌ Eseye ankò — Alt+nimewo se pou Windows, pa telefòn.",
    },
    recap: [
      { emoji: "✍️", text: "Chak platfòm gen yon fason pou ekri aksan." },
      { emoji: "⌨️", text: "Windows: Alt+kòd. Mac: Option+lèt." },
      { emoji: "📱", text: "Telefòn: long-press sou lèt la." },
      { emoji: "🎯", text: "Misyon: ekri yon mo ak yon aksan." },
    ],
  },
  {
    slug: "multi-tasking",
    moduleTitle: "Modil 3: Itilize Òdinatè Ou",
    heroEmoji: "🔀",
    heroTitle: "Multi-Tasking",
    heroLede: "Jere plizyè aplikasyon an menm tan san pèdi fil panse w.",
    goal: "🎯 Objektif: chanje ant aplikasyon vit, epi itilize de aplikasyon an menm tan.",
    simpleExplanation:
      "**Multi-tasking** vle di itilize plizyè aplikasyon nan menm moman an. Ou ka **chanje** rapid ant yo ak yon rakousi klavye, oswa mete de fenèt **kòtakòt** (split screen) pou wè yo tou de an menm tan.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing two application windows arranged side by side in split screen mode, clean modern desk, natural lighting, professional tech photography, no readable text needed",
    illustrationSrc: `${illustrationBase}/multi-tasking.webp`,
    digitalWords: [
      {
        word: "Multi-Tasking",
        definition: "Itilize plizyè aplikasyon nan menm moman an.",
        example: "Mwen ap fè multi-tasking ant imèl mwen ak yon dokiman.",
      },
      {
        word: "Split Screen",
        definition: "Mete de fenèt kòtakòt sou menm ekran an.",
        example: "Itilize split screen pou konpare de dokiman.",
      },
      {
        word: "Chanje Aplikasyon",
        definition: "Pase vit soti nan yon aplikasyon pou ale nan yon lòt.",
        example: "Chanje aplikasyon ak Alt+Tab (Windows) oswa Cmd+Tab (Mac).",
      },
    ],
    platformExamples: [
      {
        platform: "windows",
        steps:
          "Kenbe Alt epi peze Tab plizyè fwa pou chanje ant aplikasyon k ap mache yo. Lage kle yo lè ou wè aplikasyon ou vle a seleksyone.",
      },
      {
        platform: "mac",
        steps:
          "Kenbe Cmd epi peze Tab plizyè fwa pou chanje ant aplikasyon k ap mache yo. Lage kle yo lè ou wè aplikasyon ou vle a seleksyone.",
      },
    ],
    realLifeExample:
      "💡 Pandan ou ap ekri yon imèl epi ou bezwen verifye yon dat nan yon lòt dokiman, itilize Alt+Tab (oswa Cmd+Tab) pou chanje rapid ant de a san fèmen youn.",
    mistakeWrong:
      "Fèmen yon aplikasyon nèt pou verifye yon lòt, epi rekòmanse.",
    mistakeCorrect:
      "Itilize Alt+Tab (oswa Cmd+Tab) pou chanje ant aplikasyon san fèmen anyen.",
    mistakeWhy:
      "⚠️ Fèmen ak relouvri yon aplikasyon chak fwa pèdi tan — chanje ant yo ak yon rakousi pi rapid anpil.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou konfigire split screen sou aparèy espesifik ou si ou pa jwenn opsyon an fasil.",
    aiPrompt:
      "Hi! Can you explain how to put two windows side by side (split screen) on my computer or phone?",
    mission:
      "🎯 Misyon: louvri de aplikasyon epi chanje ant yo ak Alt+Tab (oswa Cmd+Tab).",
    quiz: {
      prompt: "Ki rakousi chanje ant aplikasyon sou Windows?",
      options: ["Ctrl+C", "Alt+Tab", "Cmd+V", "Windows+E"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Alt+Tab chanje ant aplikasyon sou Windows.",
      wrongFeedback: "❌ Eseye ankò — panse ak konbinezon ki gen 'Tab'.",
    },
    recap: [
      {
        emoji: "🔀",
        text: "Multi-tasking = itilize plizyè aplikasyon ansanm.",
      },
      { emoji: "⌨️", text: "Alt+Tab (Windows) / Cmd+Tab (Mac) chanje rapid." },
      { emoji: "🪟", text: "Split screen mete de fenèt kòtakòt." },
      { emoji: "🎯", text: "Misyon: chanje ant de aplikasyon." },
    ],
  },
  {
    slug: "using-your-computer-mission",
    moduleTitle: "Modil 3: Itilize Òdinatè Ou",
    heroEmoji: "🏆",
    heroTitle: "Misyon: Itilize Òdinatè Ou",
    heroLede:
      "Se lè a pou konbine tout konpetans Modil 3 nan yon sesyon konfyan.",
    goal: "🎯 Objektif: itilize tout konpetans Modil 3 yo ansanm nan yon vrè sesyon.",
    simpleExplanation:
      "Ou fèk aprann: desktop, taskbar/dock, File Explorer/Finder, jere fenèt, right-click, drag-and-drop, rakousi klavye, Settings, son/notifikasyon, screenshot, aksan, ak multi-tasking. Misyon sa a mande w konbine plizyè nan konpetans sa yo nan yon sèl sesyon.",
    illustrationPrompt:
      "A realistic photograph of a person confidently working on a laptop with multiple windows visible on screen, focused and comfortable expression, warm natural lighting, professional lifestyle photography",
    illustrationSrc: `${illustrationBase}/using-your-computer-mission.webp`,
    digitalWords: [
      {
        word: "Flwidite (Fluency)",
        definition: "Kapasite pou fè yon bagay san reflechi twòp, natirèlman.",
        example: "Objektif ou se genyen flwidite nan itilize yon òdinatè.",
      },
    ],
    realLifeExample:
      "💡 Konbine plizyè konpetans (louvri File Explorer, drag yon fichye, pran yon screenshot, kole l ak Ctrl+V) se egzakteman jan moun alèz itilize yon òdinatè chak jou.",
    mistakeWrong:
      "Panse ou dwe fè chak konpetans yon sèl fwa pou 'fini' ak yo.",
    mistakeCorrect:
      "Konprann w ap kontinye pratike konpetans sa yo chak fwa ou itilize yon òdinatè.",
    mistakeWhy:
      "⚠️ Konpetans sa yo vin natirèl ak repetisyon — pa gen yon 'fini', se yon abitid ou bati ti pa ti pa.",
    aiExplanation:
      "🤖 Kounye a ou ka dekri yon travay konplè bay yon AI (egzanp: 'jwenn yon fichye, kopye l, epi mete l yon lòt kote') epi mande konsèy si ou bloke.",
    aiPrompt:
      "Hi! I just learned how to use windows, right-click, keyboard shortcuts, screenshots, and multi-tasking. Can you give me a small real-world task that combines several of these skills?",
    mission:
      "🎯 Misyon Final Modil 3: louvri File Explorer/Finder, jwenn yon fichye, pran yon screenshot de li, epi kole screenshot la nan yon dokiman ak Ctrl/Cmd+V.",
    quiz: {
      prompt: "Ki objektif prensipal Modil 3 la?",
      options: [
        "Memorize non chak bouton sou òdinatè a",
        "Konbine konpetans navigasyon debaz pou itilize òdinatè ak konfyans",
        "Vin yon pwogramè",
        "Reparasyon aparèy kraze",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Objektif la se konbine konpetans ak konfyans.",
      wrongFeedback: "❌ Eseye ankò — repase objektif Modil 3 la.",
    },
    recap: [
      { emoji: "📁", text: "Desktop, taskbar/dock, File Explorer/Finder." },
      { emoji: "🪟", text: "Jere fenèt, right-click, drag-and-drop." },
      {
        emoji: "⌨️",
        text: "Rakousi klavye, screenshot, aksan, multi-tasking.",
      },
      { emoji: "🎓", text: "Ou fini Modil 3 — Itilize Òdinatè Ou!" },
    ],
  },
];

export function getComputerPremiumLesson(slug: string) {
  return computerPremiumLessons.find((lesson) => lesson.slug === slug);
}
