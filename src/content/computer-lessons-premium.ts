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
  {
    slug: "what-is-a-file-and-folder",
    moduleTitle: "Modil 4: Fichye ak Dosye",
    heroEmoji: "📄",
    heroTitle: "Kisa Yon Fichye ak Yon Dosye Ye?",
    heroLede: "De bagay debaz ki fè posib tout sa ou sovgade sou yon òdinatè.",
    goal: "🎯 Objektif: konprann diferans ant yon fichye ak yon dosye.",
    simpleExplanation:
      "Yon **fichye** se yon sèl bagay ou sovgade — yon foto, yon dokiman, yon chante. Yon **dosye** se yon 'bwat' vityèl ki kenbe plizyè fichye ansanm pou yo rete òganize. Panse ak yon achiv fizik: chak papye se yon fichye, chak katab se yon dosye.",
    howItWorks: [
      "Yon fichye se yon sèl bagay (yon foto, yon dokiman)",
      "Yon dosye kenbe plizyè fichye ansanm",
      "Ou ka mete dosye anndan lòt dosye pou plis òganizasyon",
    ],
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a simple folder icon opened to reveal several file icons inside, clean modern interface, natural lighting, professional tech photography, no readable text needed",
    illustrationSrc: `${illustrationBase}/what-is-a-file-and-folder.webp`,
    digitalWords: [
      {
        word: "Fichye (File)",
        definition:
          "Yon sèl bagay ou sovgade — yon dokiman, foto, oswa chante.",
        example: "Foto sa a se yon fichye.",
      },
      {
        word: "Dosye (Folder)",
        definition: "Yon 'bwat' vityèl ki kenbe plizyè fichye ansanm.",
        example: "Mete tout foto vakans ou nan yon sèl dosye.",
      },
    ],
    realLifeExample:
      "💡 Si ou gen 50 foto sou telefòn ou san okenn dosye, yo tout mele ansanm. Si ou mete yo nan dosye tankou 'Vakans 2024' ak 'Fanmi', ou jwenn yo pi vit.",
    mistakeWrong: "Sovgade tout fichye ou yo nan menm plas san okenn dosye.",
    mistakeCorrect: "Kreye dosye pou gwoupe fichye ki sanble ansanm.",
    mistakeWhy:
      "⚠️ San dosye, jwenn yon fichye espesifik pami dè santèn lòt yo tankou chèche yon zegwi nan yon pil pay.",
    aiExplanation:
      "🤖 Ou ka mande yon AI konsèy sou ki dosye ou ta dwe kreye pou òganize lavi dijital ou.",
    aiPrompt:
      "Hi! Can you suggest 5-6 basic folders a beginner should create to organize their files (photos, documents, etc.)?",
    mission:
      "🎯 Misyon: kreye yon nouvo dosye sou aparèy ou epi ba li yon non ki fè sans.",
    quiz: {
      prompt: "Kisa yon dosye ye?",
      options: [
        "Yon sèl foto oswa dokiman",
        "Yon 'bwat' vityèl ki kenbe plizyè fichye",
        "Yon kalite aplikasyon",
        "Yon pò sou òdinatè a",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Yon dosye kenbe plizyè fichye ansanm.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak yon katab ki kenbe plizyè papye.",
    },
    recap: [
      { emoji: "📄", text: "Fichye = yon sèl bagay ou sovgade." },
      { emoji: "📁", text: "Dosye = 'bwat' ki kenbe plizyè fichye." },
      { emoji: "🗂️", text: "Dosye ede w jwenn fichye pi vit." },
      { emoji: "🎯", text: "Misyon: kreye yon nouvo dosye." },
    ],
  },
  {
    slug: "standard-folders",
    moduleTitle: "Modil 4: Fichye ak Dosye",
    heroEmoji: "🗂️",
    heroTitle: "Dosye Estanda Yo",
    heroLede: "Chak aparèy deja gen yon sistèm dosye tou fèt pou ou.",
    goal: "🎯 Objektif: konnen ki kalite fichye chak dosye estanda kenbe.",
    simpleExplanation:
      "Chak òdinatè gen kèk dosye ki deja la depi kòmansman: **Desktop**, **Downloads** (fichye telechaje), **Documents** (dokiman), **Pictures** (foto), **Videos** (videyo), ak **Music** (mizik). Sovgade chak fichye nan bon dosye a fè yo pi fasil pou jwenn.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a file browser sidebar with folder icons for Desktop, Downloads, Documents, Pictures, Videos, and Music, clean modern interface, natural lighting, professional tech photography, no readable text needed",
    illustrationSrc: `${illustrationBase}/standard-folders.webp`,
    digitalWords: [
      {
        word: "Downloads",
        definition: "Dosye kote tout fichye ou telechaje sou entènèt rive.",
        example: "Chèche PDF ou fèk telechaje nan dosye Downloads.",
      },
      {
        word: "Documents",
        definition: "Dosye pou dokiman tankou lèt, fòm, ak rapò.",
        example: "Sovgade CV ou nan dosye Documents.",
      },
      {
        word: "Pictures",
        definition: "Dosye pou foto ak imaj.",
        example: "Tout foto telefòn ou sovgade rive nan Pictures.",
      },
    ],
    realLifeExample:
      "💡 Lè ou telechaje yon PDF sou entènèt, li ale otomatikman nan dosye Downloads — ou pa bezwen chèche l nan tout lòt dosye.",
    mistakeWrong:
      "Mete tout kalite fichye (foto, dokiman, videyo) nan menm dosye a.",
    mistakeCorrect:
      "Itilize dosye estanda a: foto nan Pictures, dokiman nan Documents, elatriye.",
    mistakeWhy:
      "⚠️ Lè fichye yo nan bon dosye, aplikasyon (tankou yon app foto) jwenn yo otomatikman san ou pa bezwen chèche manyèlman.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou deplase tout fichye ki nan Downloads pou al nan bon dosye yo (Pictures, Documents, elatriye).",
    aiPrompt:
      "Hi! My Downloads folder is a mess with photos, PDFs, and documents all mixed together. Can you explain how to sort them into the right folders?",
    mission:
      "🎯 Misyon: louvri dosye Downloads ou epi idantifye ki kalite fichye ki ladan l.",
    quiz: {
      prompt: "Ki dosye kote fichye telechaje sou entènèt rive otomatikman?",
      options: ["Documents", "Pictures", "Downloads", "Desktop"],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Downloads se dosye pou fichye telechaje.",
      wrongFeedback: "❌ Eseye ankò — panse ak non dosye a.",
    },
    recap: [
      { emoji: "⬇️", text: "Downloads = fichye telechaje." },
      { emoji: "📃", text: "Documents = dokiman ak rapò." },
      { emoji: "🖼️", text: "Pictures = foto ak imaj." },
      { emoji: "🎯", text: "Misyon: gade sa ki nan dosye Downloads ou." },
    ],
  },
  {
    slug: "file-extensions",
    moduleTitle: "Modil 4: Fichye ak Dosye",
    heroEmoji: "🏷️",
    heroTitle: "Ekstansyon Fichye",
    heroLede:
      "Twa-kat lèt apre yon pwen ki di w egzakteman ki kalite fichye ou genyen.",
    goal: "🎯 Objektif: rekonèt ekstansyon fichye ki pi komen yo.",
    simpleExplanation:
      "Yon **ekstansyon fichye** se lèt yo apre pwen an nan non yon fichye (egzanp: 'rapò.pdf'). Li di w ki kalite fichye li ye, e ki aplikasyon pou louvri l. Egzanp: .jpg (foto), .pdf (dokiman), .mp3 (mizik), .mp4 (videyo).",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a file list with different colored file type icons, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/file-extensions.webp`,
    digitalWords: [
      {
        word: "Ekstansyon (Extension)",
        definition:
          "Lèt apre pwen nan non yon fichye ki montre ki kalite li ye.",
        example: "'.pdf' nan 'rapò.pdf' se ekstansyon an.",
      },
      {
        word: ".jpg / .png",
        definition: "Ekstansyon pou fichye foto ak imaj.",
        example: "Yon foto telefòn souvan gen ekstansyon .jpg.",
      },
      {
        word: ".mp3 / .mp4",
        definition: "Ekstansyon pou fichye mizik (.mp3) ak videyo (.mp4).",
        example: "Chante ou telechaje a se yon fichye .mp3.",
      },
    ],
    realLifeExample:
      "💡 Si yon moun voye w yon fichye '.docx' ou pa ka louvri, se paske ou bezwen yon aplikasyon tankou Word ki fèt pou li ekstansyon sa a.",
    mistakeWrong:
      "Chanje ekstansyon yon fichye (egzanp .jpg an .pdf) pou eseye 'konvèti' l.",
    mistakeCorrect:
      "Itilize yon aplikasyon oswa sit ki fèt egzakteman pou konvèti kalite fichye.",
    mistakeWhy:
      "⚠️ Chanje sèlman lèt yo apre pwen an pa chanje kontni fichye a — li ka kraze fichye a nèt olye de konvèti l.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kisa yon ekstansyon espesifik ou pa rekonèt vle di, oswa ki aplikasyon pou louvri l.",
    aiPrompt:
      "Hi! I have a file ending in '.pptx' and I don't know what it is or what app to use to open it. Can you explain?",
    mission:
      "🎯 Misyon: gade twa fichye sou aparèy ou epi idantifye ekstansyon chak youn.",
    quiz: {
      prompt: "Ki ekstansyon yo itilize pou fichye videyo?",
      options: [".jpg", ".pdf", ".mp4", ".zip"],
      correctIndex: 2,
      correctFeedback: "✅ Wi! .mp4 se pou videyo.",
      wrongFeedback: "❌ Eseye ankò — panse ak ekstansyon pou videyo.",
    },
    recap: [
      { emoji: "🏷️", text: "Ekstansyon montre ki kalite fichye ou genyen." },
      { emoji: "🖼️", text: ".jpg/.png = foto." },
      { emoji: "🎵", text: ".mp3 = mizik, .mp4 = videyo." },
      { emoji: "🎯", text: "Misyon: idantifye ekstansyon twa fichye." },
    ],
  },
  {
    slug: "working-with-pdf",
    moduleTitle: "Modil 4: Fichye ak Dosye",
    heroEmoji: "📕",
    heroTitle: "Travay Ak Fichye PDF",
    heroLede: "Fòma dokiman ki pi popilè pou fòm, kontra, ak dokiman ofisyèl.",
    goal: "🎯 Objektif: louvri, li, ak konprann fichye PDF ak konfyans.",
    simpleExplanation:
      "Yon **PDF** se yon kalite dokiman ki parèt menm jan sou nenpòt aparèy — li pa chanje fòm menm si moun ki louvri l gen yon lòt aparèy pase w. Se poutèt sa biznis, gouvènman, ak lekòl itilize PDF pou fòm ak dokiman ofisyèl.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen displaying a document reading application with a document icon, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/working-with-pdf.webp`,
    digitalWords: [
      {
        word: "PDF",
        definition: "Yon fòma dokiman ki rete menm jan sou nenpòt aparèy.",
        example: "Fòm gouvènman an souvan yon fichye PDF.",
      },
      {
        word: "Siyen (Sign)",
        definition: "Ajoute yon siyati dijital sou yon dokiman PDF.",
        example: "Siyen kontra a dirèkteman sou telefòn ou.",
      },
    ],
    realLifeExample:
      "💡 Lè ou aplike pou yon djòb, souvan yo mande w voye CV ou an PDF — sa asire moun k ap resevwa l wè l egzakteman jan ou fè l, san fòma a chanje.",
    mistakeWrong: "Voye yon dokiman enpòtan an fòma Word (.docx) san panse.",
    mistakeCorrect:
      "Konvèti dokiman an PDF anvan ou voye l pou moun k ap resevwa l wè menm bagay ak ou.",
    mistakeWhy:
      "⚠️ Yon dokiman Word ka parèt diferan sou lòt òdinatè (fòn tèks chanje, mizanpaj deplase) — PDF rezoud pwoblèm sa a.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou konvèti yon dokiman Word an PDF, oswa kijan pou siyen yon PDF san enprime l.",
    aiPrompt:
      "Hi! Can you explain how to convert a Word document into a PDF, and how to sign a PDF without printing it?",
    mission:
      "🎯 Misyon: louvri yon fichye PDF sou aparèy ou (oswa telechaje youn) epi navige nan de paj li.",
    quiz: {
      prompt: "Poukisa moun itilize PDF pou dokiman ofisyèl?",
      options: [
        "Paske li pi piti toujou",
        "Paske li rete menm jan sou nenpòt aparèy",
        "Paske li pa ka enprime",
        "Paske li pi rapid pou ekri",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! PDF rete menm jan sou nenpòt aparèy.",
      wrongFeedback: "❌ Eseye ankò — panse ak avantaj prensipal PDF la.",
    },
    recap: [
      { emoji: "📕", text: "PDF rete menm jan sou nenpòt aparèy." },
      { emoji: "📝", text: "Souvan itilize pou fòm ak kontra." },
      { emoji: "✍️", text: "Ou ka siyen yon PDF dijitalman." },
      { emoji: "🎯", text: "Misyon: louvri epi navige nan yon PDF." },
    ],
  },
  {
    slug: "rename-copy-move-delete",
    moduleTitle: "Modil 4: Fichye ak Dosye",
    heroEmoji: "✂️",
    heroTitle: "Rename, Copy, Move, Delete",
    heroLede: "Kat aksyon ki jere prèske tout sa ou fè ak fichye ou yo.",
    goal: "🎯 Objektif: chanje non, kopye, deplase, ak efase yon fichye ak konfyans.",
    simpleExplanation:
      "**Rename** chanje non yon fichye. **Copy** fè yon dupliya kite orijinal la rete. **Move** deplase fichye a yon lòt dosye san kite yon dupliya. **Delete** efase l (li ale nan Recycle Bin/Trash, pa disparèt nèt imedyatman).",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a file being right-clicked with a context menu visible, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/rename-copy-move-delete.webp`,
    digitalWords: [
      {
        word: "Rename",
        definition: "Chanje non yon fichye san chanje kontni li.",
        example: "Rename fichye a pou 'Rapò Final.pdf'.",
      },
      {
        word: "Move",
        definition: "Deplase yon fichye nan yon lòt dosye, san kite dupliya.",
        example: "Move foto a soti nan Downloads pou al nan Pictures.",
      },
    ],
    realLifeExample:
      "💡 Si ou telechaje yon fichye ki rele 'document1.pdf', rename li pou yon non ki fè sans (egzanp 'Kontra Kay.pdf') pou ou jwenn li pi vit pita.",
    mistakeWrong:
      "Konfonn Copy (fè yon dupliya) ak Move (deplase san dupliya).",
    mistakeCorrect:
      "Itilize Copy lè ou vle gade orijinal la, Move lè ou vle sèlman chanje kote l ye.",
    mistakeWhy:
      "⚠️ Si ou vle Move men ou fè Copy pa erè, ou fini ak de kopi menm fichye a ki pran plas san rezon.",
    aiExplanation:
      "🤖 Ou ka mande yon AI diferans egzat ant Copy ak Move si ou toujou konfonn yo.",
    aiPrompt:
      "Hi! I always confuse 'Copy' and 'Move' when working with files. Can you explain the difference with a simple example?",
    mission:
      "🎯 Misyon: rename yon fichye sou aparèy ou pou ba li yon non ki fè sans.",
    quiz: {
      prompt: "Ki aksyon fè yon dupliya fichye a, kite orijinal la rete?",
      options: ["Rename", "Copy", "Move", "Delete"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Copy fè yon dupliya.",
      wrongFeedback: "❌ Eseye ankò — panse ak aksyon ki 'kopye' a.",
    },
    recap: [
      { emoji: "✏️", text: "Rename chanje non an." },
      { emoji: "📋", text: "Copy fè yon dupliya." },
      { emoji: "➡️", text: "Move deplase san dupliya." },
      { emoji: "🎯", text: "Misyon: rename yon fichye." },
    ],
  },
  {
    slug: "recycle-bin-and-restore",
    moduleTitle: "Modil 4: Fichye ak Dosye",
    heroEmoji: "🗑️",
    heroTitle: "Recycle Bin, Trash, ak Restore",
    heroLede: "Efase yon fichye pa toujou pèdi l nèt.",
    goal: "🎯 Objektif: efase fichye an sekirite epi konnen kijan pou restore yo.",
    simpleExplanation:
      "Lè ou efase yon fichye, li pa disparèt imedyatman — li ale nan yon dosye espesyal ki rele **Recycle Bin** (Windows) oswa **Trash** (Mac). Ou ka **restore** (remèt) li si ou fè yon erè, jiskaske ou vide dosye sa a nèt.",
    platformExamples: [
      {
        platform: "windows",
        steps:
          "Fichye efase yo ale nan 'Recycle Bin' la (ikòn poubèl sou desktop la). Louvri l, right-click sou fichye a, epi chwazi 'Restore' pou remèt li kote l te ye.",
      },
      {
        platform: "mac",
        steps:
          "Fichye efase yo ale nan 'Trash' la (nan dock la). Louvri l, right-click sou fichye a, epi chwazi 'Put Back' pou remèt li kote l te ye.",
      },
    ],
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a trash bin icon in a file browser sidebar, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/recycle-bin-and-restore.webp`,
    digitalWords: [
      {
        word: "Recycle Bin / Trash",
        definition:
          "Dosye espesyal kote fichye efase yo ale anvan yo disparèt nèt.",
        example: "Chèche fichye ou efase pa aksidan nan Recycle Bin.",
      },
      {
        word: "Restore",
        definition:
          "Remèt yon fichye kote l te ye anvan, soti nan Recycle Bin/Trash.",
        example: "Restore fichye a si ou efase l pa erè.",
      },
    ],
    realLifeExample:
      "💡 Si ou efase yon foto enpòtan pa aksidan, pa panike — louvri Recycle Bin (oswa Trash) epi restore l, tank ou pa vide l nèt.",
    mistakeWrong: "Panse yon fichye disparèt nèt kou ou peze Delete.",
    mistakeCorrect:
      "Konnen fichye a rete nan Recycle Bin/Trash jiskaske ou vide l nèt.",
    mistakeWhy:
      "⚠️ Pè twòp pou efase yon fichye ka fè w kite dè santèn fichye initil sou aparèy ou — Recycle Bin/Trash bay yon dezyèm chans si ou fè yon erè.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou vide Recycle Bin/Trash konplètman pou libere plas sou aparèy ou.",
    aiPrompt:
      "Hi! Can you explain how to permanently empty the Recycle Bin (Windows) or Trash (Mac) to free up storage space?",
    mission:
      "🎯 Misyon: louvri Recycle Bin/Trash ou epi gade sa ki ladan l kounye a.",
    quiz: {
      prompt: "Kisa ki rive yon fichye lè ou 'efase' li?",
      options: [
        "Li disparèt nèt imedyatman",
        "Li ale nan Recycle Bin/Trash anvan li disparèt nèt",
        "Li vin yon PDF",
        "Li kopye otomatikman",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Li ale nan Recycle Bin/Trash dabò.",
      wrongFeedback: "❌ Eseye ankò — panse ak dezyèm chans ou genyen.",
    },
    recap: [
      { emoji: "🗑️", text: "Fichye efase ale nan Recycle Bin/Trash dabò." },
      { emoji: "↩️", text: "Restore remèt yon fichye kote l te ye." },
      { emoji: "🧹", text: "Vide dosye a pou efase pou tout bon." },
      { emoji: "🎯", text: "Misyon: gade sa ki nan Recycle Bin/Trash ou." },
    ],
  },
  {
    slug: "searching-for-files",
    moduleTitle: "Modil 4: Fichye ak Dosye",
    heroEmoji: "🔍",
    heroTitle: "Chèche Fichye",
    heroLede:
      "Pa gen bezwen navige nan dè santèn dosye pou jwenn yon sèl fichye.",
    goal: "🎯 Objektif: itilize zouti rechèch pou jwenn yon fichye vit pa non li.",
    simpleExplanation:
      "Chak platfòm gen yon zouti rechèch pwisan ki jwenn yon fichye pa non li, menm si ou pa sonje ki dosye li ye. Tape sèlman yon pati nan non an epi rezilta yo parèt imedyatman.",
    platformExamples: [
      {
        platform: "windows",
        steps:
          "Klike sou ikòn rechèch la nan taskbar la (oswa peze tous Windows), epi tape non fichye a (oswa yon pati nan li).",
      },
      {
        platform: "mac",
        steps:
          "Peze Cmd + Espas pou louvri Spotlight, epi tape non fichye a. Rezilta yo parèt imedyatman.",
      },
    ],
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a search bar with results appearing below it, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/searching-for-files.webp`,
    digitalWords: [
      {
        word: "Spotlight",
        definition: "Zouti rechèch rapid sou Mac, ou louvri ak Cmd+Espas.",
        example: "Itilize Spotlight pou jwenn yon aplikasyon oswa fichye vit.",
      },
      {
        word: "Rechèch (Search)",
        definition: "Tape yon mo pou jwenn fichye ki matche l.",
        example: "Tape 'rapò' nan rechèch la pou jwenn tout fichye ak mo sa a.",
      },
    ],
    realLifeExample:
      "💡 Olye de navige nan 10 dosye pou jwenn yon fichye ou telechaje 3 mwa pase, tape yon pati nan non li nan rechèch la epi jwenn li an 2 segonn.",
    mistakeWrong:
      "Navige manyèlman nan chak dosye pou chèche yon fichye espesifik.",
    mistakeCorrect:
      "Itilize zouti rechèch la premye bagay, anvan ou navige manyèlman.",
    mistakeWhy:
      "⚠️ Rechèch la fèt egzakteman pou sitiyasyon sa a — li pi rapid anpil pase chèche manyèlman nan chak dosye.",
    aiExplanation:
      "🤖 Ou ka mande yon AI konsèy avanse pou rechèch — egzanp, kijan pou chèche sèlman fichye PDF, oswa fichye ki modifye dènyèman.",
    aiPrompt:
      "Hi! Can you explain how to search for only PDF files, or only files modified recently, using the search tool on my computer?",
    mission:
      "🎯 Misyon: itilize rechèch la pou jwenn yon fichye espesifik sou aparèy ou.",
    quiz: {
      prompt: "Ki rakousi louvri Spotlight sou Mac?",
      options: ["Ctrl+F", "Cmd+Espas", "Alt+Tab", "Windows+E"],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Cmd+Espas louvri Spotlight.",
      wrongFeedback: "❌ Eseye ankò — panse ak konbinezon Mac la.",
    },
    recap: [
      {
        emoji: "🔍",
        text: "Rechèch jwenn fichye pi vit pase navige manyèlman.",
      },
      { emoji: "🍎", text: "Mac: Cmd+Espas louvri Spotlight." },
      { emoji: "🪟", text: "Windows: klike ikòn rechèch nan taskbar la." },
      { emoji: "🎯", text: "Misyon: chèche yon fichye espesifik." },
    ],
  },
  {
    slug: "zip-and-compression",
    moduleTitle: "Modil 4: Fichye ak Dosye",
    heroEmoji: "🗜️",
    heroTitle: "ZIP ak Konpresyon",
    heroLede:
      "Mete plizyè fichye ansanm nan yon sèl pake ki pi piti epi pi fasil pou voye.",
    goal: "🎯 Objektif: konprann sa yon fichye ZIP ye ak poukisa moun itilize l.",
    simpleExplanation:
      "**Konpresyon** vle di redwi gwosè yon fichye (oswa plizyè fichye) san pèdi enfòmasyon. Yon **fichye ZIP** se yon 'pake' ki gen plizyè fichye ladan l, konprese ansanm — pi fasil pou voye pa imèl pase voye chak fichye separeman.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a zip archive icon with multiple document icons flowing into it, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/zip-and-compression.webp`,
    digitalWords: [
      {
        word: "ZIP",
        definition: "Yon 'pake' ki gen plizyè fichye konprese ansanm.",
        example:
          "Konprese 20 foto nan yon sèl fichye ZIP pou voye yo pi fasil.",
      },
      {
        word: "Konpresyon (Compression)",
        definition: "Redwi gwosè yon fichye san pèdi enfòmasyon.",
        example: "Konpresyon fè fichye a pran mwens plas.",
      },
      {
        word: "Dekonprese (Extract/Unzip)",
        definition: "Retire fichye yo soti nan yon pake ZIP.",
        example: "Dekonprese fichye ZIP la pou wè tout foto ladan l.",
      },
    ],
    realLifeExample:
      "💡 Si ou bezwen voye 30 foto bay yon moun pa imèl, konprese yo tout nan yon sèl fichye ZIP olye de voye yo youn pa youn — pi rapid ak pi òganize.",
    mistakeWrong: "Eseye voye 30 fichye separe pa imèl youn apre lòt.",
    mistakeCorrect: "Konprese tout fichye yo nan yon sèl ZIP anvan ou voye yo.",
    mistakeWhy:
      "⚠️ Voye anpil fichye separe ka fè imèl la twò gwo oswa dezòganize — yon sèl fichye ZIP pi pwòp ak pi fasil pou moun k ap resevwa l jere.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou kreye yon fichye ZIP oswa dekonprese youn si ou pa sèten kijan pou fè l.",
    aiPrompt:
      "Hi! Can you explain how to create a ZIP file from multiple files, and how to extract (unzip) one I received?",
    mission:
      "🎯 Misyon: chwazi de-twa fichye epi eseye konprese yo nan yon fichye ZIP.",
    quiz: {
      prompt: "Poukisa moun konprese fichye nan yon ZIP?",
      options: [
        "Pou efase yo pi vit",
        "Pou mete plizyè fichye nan yon sèl pake ki pi fasil pou voye",
        "Pou konvèti yo an PDF",
        "Pou yo pa ka efase ankò",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! ZIP mete plizyè fichye nan yon sèl pake.",
      wrongFeedback: "❌ Eseye ankò — panse ak avantaj yon sèl pake.",
    },
    recap: [
      { emoji: "🗜️", text: "ZIP mete plizyè fichye nan yon sèl pake." },
      { emoji: "📉", text: "Konpresyon redwi gwosè san pèdi enfòmasyon." },
      { emoji: "📂", text: "Dekonprese pou wè fichye ki anndan l." },
      { emoji: "🎯", text: "Misyon: konprese kèk fichye nan yon ZIP." },
    ],
  },
  {
    slug: "cloud-backup",
    moduleTitle: "Modil 4: Fichye ak Dosye",
    heroEmoji: "☁️",
    heroTitle: "Backup nan Cloud la",
    heroLede: "Pwoteje travay ou pou yon aparèy pèdi pa janm vin yon dezas.",
    goal: "🎯 Objektif: konprann poukisa backup enpòtan epi kijan pou aktive l.",
    simpleExplanation:
      "Yon **backup** se yon dezyèm kopi fichye ou yo, sovgade yon lòt kote (nan cloud la, tankou Google Drive oswa iCloud). Si aparèy ou pèdi, vòle, oswa kraze, ou pa pèdi tout travay ou — ou ka jwenn li ankò de yon lòt aparèy.",
    illustrationPrompt:
      "A realistic photograph symbolizing automatic file backup — a laptop with a subtle upward arrow light effect suggesting files syncing to the cloud, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/cloud-backup.webp`,
    digitalWords: [
      {
        word: "Backup",
        definition: "Yon dezyèm kopi fichye ou yo, sovgade yon lòt kote.",
        example: "Fè yon backup foto ou chak semèn pou pwoteje yo.",
      },
      {
        word: "Sinkwonize (Sync)",
        definition: "Kenbe menm vèsyon yon fichye ajou sou plizyè aparèy.",
        example: "Fichye ou sinkwonize ant telefòn ou ak òdinatè ou.",
      },
    ],
    realLifeExample:
      "💡 Si telefòn ou tonbe nan dlo epi li kraze, men foto w yo te backup nan Google Photos, ou pa pèdi anyen — ou jwenn yo tout sou yon nouvo telefòn.",
    mistakeWrong:
      "Konte sou yon sèl kopi yon fichye enpòtan, sou yon sèl aparèy.",
    mistakeCorrect: "Aktive backup otomatik pou dokiman ak foto enpòtan yo.",
    mistakeWhy:
      "⚠️ Yon sèl kopi vle di si aparèy la pèdi, vòle, oswa kraze, ou pèdi tout bagay pou tout bon — backup bay yon dezyèm sekirite.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou aktive backup otomatik pou foto ak dokiman sou aparèy espesifik ou.",
    aiPrompt:
      "Hi! Can you explain how to turn on automatic backup for my photos and important documents on my phone or computer?",
    mission:
      "🎯 Misyon: verifye si backup otomatik aktive sou aparèy ou, epi limen l si li pa aktive.",
    quiz: {
      prompt: "Ki avantaj prensipal yon backup bay ou?",
      options: [
        "Li fè aparèy ou mache pi vit",
        "Li pwoteje fichye ou si aparèy la pèdi oswa kraze",
        "Li efase fichye ou pa bezwen",
        "Li chanje ekstansyon fichye yo",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Backup pwoteje fichye ou.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak sa ki rive si ou pèdi aparèy la.",
    },
    recap: [
      { emoji: "☁️", text: "Backup = dezyèm kopi fichye ou, yon lòt kote." },
      { emoji: "🔄", text: "Sync kenbe fichye ajou sou plizyè aparèy." },
      { emoji: "🛡️", text: "Backup pwoteje w si aparèy la pèdi/kraze." },
      { emoji: "🎯", text: "Misyon: verifye backup otomatik ou." },
    ],
  },
  {
    slug: "files-and-folders-mission",
    moduleTitle: "Modil 4: Fichye ak Dosye",
    heroEmoji: "🏆",
    heroTitle: "Misyon: Fichye ak Dosye",
    heroLede:
      "Se lè a pou konbine tout konpetans Modil 4 pou òganize lavi dijital ou.",
    goal: "🎯 Objektif: òganize, jwenn, ak pwoteje fichye ou ak konfyans.",
    simpleExplanation:
      "Ou fèk aprann: fichye vs. dosye, dosye estanda yo, ekstansyon fichye, PDF, rename/copy/move/delete, Recycle Bin/Trash, rechèch, ZIP, ak backup. Misyon sa a mande w konbine plizyè nan konpetans sa yo.",
    illustrationPrompt:
      "A realistic photograph of a person confidently organizing files on a laptop, neat and organized desk, warm natural lighting, professional lifestyle photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/files-and-folders-mission.webp`,
    digitalWords: [
      {
        word: "Òganizasyon Dijital",
        definition:
          "Sistèm ou itilize pou kenbe fichye ou yo klè ak fasil jwenn.",
        example: "Bon òganizasyon dijital fè lavi pi fasil chak jou.",
      },
    ],
    realLifeExample:
      "💡 Yon moun ki òganize fichye yo byen (bon dosye, bon non, backup aktive) pase mwens tan chèche epi gen mwens estrès si yon bagay rive ak aparèy yo.",
    mistakeWrong: "Panse òganizasyon fichye se yon travay ki fèt yon sèl fwa.",
    mistakeCorrect:
      "Konprann òganizasyon se yon abitid — kontinye mete chak nouvo fichye nan bon plas.",
    mistakeWhy:
      "⚠️ Menm yon bon sistèm dosye ka vin dezòd si ou pa kontinye swiv li chak fwa ou ajoute yon nouvo fichye.",
    aiExplanation:
      "🤖 Kounye a ou ka dekri sistèm fichye ou bay yon AI epi mande konsèy sou kijan pou amelyore l.",
    aiPrompt:
      "Hi! I just learned about files, folders, extensions, ZIP files, and cloud backup. Can you give me a simple checklist to keep my files organized going forward?",
    mission:
      "🎯 Misyon Final Modil 4: kreye yon dosye, mete yon fichye ladan l, rename li, epi verifye backup otomatik ou aktive.",
    quiz: {
      prompt: "Ki objektif prensipal Modil 4 la?",
      options: [
        "Memorize tout ekstansyon fichye ki egziste",
        "Òganize, jwenn, ak pwoteje fichye ak konfyans",
        "Vin yon enjenyè lojisyèl",
        "Efase tout fichye initil yo",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Objektif la se òganize, jwenn, ak pwoteje.",
      wrongFeedback: "❌ Eseye ankò — repase objektif Modil 4 la.",
    },
    recap: [
      { emoji: "📁", text: "Fichye vs. dosye, dosye estanda yo." },
      { emoji: "✂️", text: "Rename, copy, move, delete, restore." },
      { emoji: "🗜️", text: "ZIP, rechèch, ak backup nan cloud la." },
      { emoji: "🎓", text: "Ou fini Modil 4 — Fichye ak Dosye!" },
    ],
  },
  {
    slug: "wifi-and-connecting",
    moduleTitle: "Modil 5: Metrize Entènèt la",
    heroEmoji: "📶",
    heroTitle: "Wi-Fi ak Konekte",
    heroLede:
      "Chak aparèy bezwen yon fason pou konekte ak entènèt la anvan ou ka itilize l.",
    goal: "🎯 Objektif: konekte nenpòt aparèy sou yon rezo Wi-Fi ak konfyans.",
    simpleExplanation:
      "**Wi-Fi** se yon siyal san fil ki konekte aparèy ou ak entènèt la, pa mwayen yon routè ki nan kay ou (oswa yon lòt kote). Pou konekte, ou chwazi non rezo a (SSID) epi antre modpas la yon sèl fwa — aparèy la sonje l apre sa.",
    howItWorks: [
      "Yon routè voye siyal Wi-Fi nan kay la",
      "Aparèy ou chèche rezo ki disponib yo",
      "Ou chwazi rezo a epi antre modpas la yon sèl fwa",
    ],
    illustrationPrompt:
      "A realistic photograph of a modern Wi-Fi router with visible signal light indicators on a shelf in a home setting, warm natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/wifi-and-connecting.webp`,
    platformExamples: [
      {
        platform: "windows",
        steps:
          "Klike sou ikòn Wi-Fi la nan kwen anba dwat ekran an, chwazi non rezo a nan lis la, epi antre modpas la.",
        illustrationPrompt:
          "A realistic photograph of a Windows laptop screen showing the Wi-Fi network selection panel with a list of available networks, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
        illustrationSrc: `${illustrationBase}/wifi-and-connecting-windows.webp`,
      },
      {
        platform: "mac",
        steps:
          "Klike sou ikòn Wi-Fi la nan bawo meni anwo ekran an, chwazi non rezo a, epi antre modpas la.",
        illustrationPrompt:
          "A realistic photograph of a Mac laptop screen showing the Wi-Fi network selection menu from the top menu bar with a list of available networks, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
        illustrationSrc: `${illustrationBase}/wifi-and-connecting-mac.webp`,
      },
      {
        platform: "android",
        steps:
          "Ale nan Settings > Wi-Fi, chwazi non rezo a nan lis la, epi antre modpas la.",
      },
      {
        platform: "iphone",
        steps:
          "Ale nan Settings > Wi-Fi, chwazi non rezo a nan lis la, epi antre modpas la.",
      },
    ],
    digitalWords: [
      {
        word: "Wi-Fi",
        definition: "Siyal san fil ki konekte aparèy ou ak entènèt la.",
        example: "Konekte telefòn ou sou Wi-Fi kay la pou ekonomize done.",
      },
      {
        word: "Routè (Router)",
        definition: "Aparèy ki voye siyal Wi-Fi la nan yon espas.",
        example: "Routè a anjeneral gen yon limyè ki klere lè li mache byen.",
      },
      {
        word: "SSID",
        definition: "Non ofisyèl yon rezo Wi-Fi, sa ou wè nan lis la.",
        example: "SSID kay ou a ka rele tankou 'Kay_Jean_5G'.",
      },
    ],
    realLifeExample:
      "💡 Lè ou rive lakay yon zanmi, ou mande modpas Wi-Fi a yon sèl fwa — apre sa, chak fwa ou tounen, telefòn ou konekte otomatikman san ou pa bezwen antre l ankò.",
    mistakeWrong:
      "Itilize done selilè (mobile data) lakay ou lè gen Wi-Fi disponib.",
    mistakeCorrect: "Konekte sou Wi-Fi lakay ou pou ekonomize done selilè ou.",
    mistakeWhy:
      "⚠️ Done selilè koute lajan e li limite — Wi-Fi jeneralman ilimite lakay ou, se poutèt sa li pi saj pou itilize l lè ou ka.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou rezoud pwoblèm lè telefòn ou pa vle konekte sou Wi-Fi la.",
    aiPrompt:
      "Hi! My phone won't connect to my home Wi-Fi even though I'm entering the right password. Can you suggest simple things to try?",
    mission:
      "🎯 Misyon: konekte aparèy ou sou yon rezo Wi-Fi (oswa verifye ou deja konekte) epi idantifye non rezo a.",
    quiz: {
      prompt: "Kisa yon routè fè?",
      options: [
        "Li chaje batri aparèy ou",
        "Li voye siyal Wi-Fi la nan yon espas",
        "Li efase istwa navigasyon ou",
        "Li konprese fichye",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Routè a voye siyal Wi-Fi la.",
      wrongFeedback: "❌ Eseye ankò — panse ak wòl routè a nan kay la.",
    },
    recap: [
      { emoji: "📶", text: "Wi-Fi konekte aparèy ou ak entènèt san fil." },
      { emoji: "📡", text: "Routè a voye siyal la." },
      { emoji: "🔑", text: "SSID ak modpas — antre yo yon sèl fwa." },
      { emoji: "🎯", text: "Misyon: konekte oswa verifye konesyon Wi-Fi ou." },
    ],
  },
  {
    slug: "browser-basics",
    moduleTitle: "Modil 5: Metrize Entènèt la",
    heroEmoji: "🌐",
    heroTitle: "Debaz Navigatè a (Browser)",
    heroLede: "Aplikasyon ki louvri tout entènèt la pou ou.",
    goal: "🎯 Objektif: rekonèt yon navigatè epi konprann wòl li.",
    simpleExplanation:
      "Yon **navigatè** (browser) se aplikasyon ou itilize pou al sou entènèt la — tankou Chrome, Safari, Edge, oswa Firefox. Se pòt dantre a pou tout sit entènèt, imèl sou entènèt, ak videyo sou entènèt.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a web browser open with multiple colorful browser icons floating above it (like Chrome, Safari, Edge, Firefox style circular icons), clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/browser-basics.webp`,
    digitalWords: [
      {
        word: "Navigatè (Browser)",
        definition: "Aplikasyon ou itilize pou al sou entènèt la.",
        example: "Chrome ak Safari se de egzanp navigatè popilè.",
      },
      {
        word: "Sit Entènèt (Website)",
        definition: "Yon paj oswa gwoup paj ou ka vizite sou entènèt.",
        example: "Sit Google la se youn nan sit ou vizite pi souvan.",
      },
    ],
    realLifeExample:
      "💡 Chak fwa ou 'al chèche yon bagay sou Google', se navigatè a ou louvri anvan — Google se sèlman yon sit ki louvri anndan navigatè a.",
    mistakeWrong: "Konfonn navigatè a (Chrome, Safari) ak entènèt la limenm.",
    mistakeCorrect:
      "Konprann navigatè a se sèlman pòt la — entènèt la se tout rezo sit yo ki dèyè l.",
    mistakeWhy:
      "⚠️ Konprann diferans sa a ede w konprann poukisa gen plizyè navigatè ki egziste men se menm entènèt la yo tout ka vizite.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ki diferans genyen ant plizyè navigatè popilè yo (Chrome, Safari, Edge, Firefox).",
    aiPrompt:
      "Hi! What's the difference between Chrome, Safari, Edge, and Firefox? Should I care which one I use?",
    mission:
      "🎯 Misyon: louvri navigatè ki deja sou aparèy ou epi idantifye non li.",
    quiz: {
      prompt: "Kisa yon navigatè (browser) ye?",
      options: [
        "Yon kalite fichye",
        "Aplikasyon ou itilize pou al sou entènèt la",
        "Yon rezo Wi-Fi",
        "Yon kalite imèl",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Navigatè a se aplikasyon pou al sou entènèt.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak aplikasyon ou louvri pou Google.",
    },
    recap: [
      { emoji: "🌐", text: "Navigatè = aplikasyon pou al sou entènèt." },
      { emoji: "🧭", text: "Chrome, Safari, Edge, Firefox se egzanp." },
      { emoji: "🔗", text: "Navigatè a se pòt dantre pou tout sit yo." },
      { emoji: "🎯", text: "Misyon: idantifye navigatè ou." },
    ],
  },
  {
    slug: "search-engines-and-the-address-bar",
    moduleTitle: "Modil 5: Metrize Entènèt la",
    heroEmoji: "🔎",
    heroTitle: "Motè Rechèch ak Bawo Adrès la",
    heroLede: "De ti bwat ki gen de wòl trè diferan, byenke yo sanble.",
    goal: "🎯 Objektif: konprann diferans ant chèche sou Google ak tape yon adrès web.",
    simpleExplanation:
      "Yon **motè rechèch** tankou Google ede w jwenn sit lè ou pa konnen non egzat li. Yon **bawo adrès** (address bar) se kote ou tape non egzat yon sit (tankou 'facebook.com') pou ale la dirèkteman. Jodi a, souvan menm bawo a fè toude travay.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a browser address bar at the top with a search results page below it, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/search-engines-and-the-address-bar.webp`,
    digitalWords: [
      {
        word: "Motè Rechèch (Search Engine)",
        definition:
          "Sèvis tankou Google ki jwenn sit entènèt pou ou selon mo ou tape.",
        example: "Tape 'meyè restoran nan Pòtoprens' nan Google.",
      },
      {
        word: "Bawo Adrès (Address Bar)",
        definition: "Kote ou tape non egzat yon sit pou ale la dirèkteman.",
        example:
          "Tape 'gmail.com' nan bawo adrès la pou al dirèkteman sou Gmail.",
      },
      {
        word: "URL",
        definition: "Adrès konplè yon paj sou entènèt.",
        example: "'https://www.google.com' se yon URL.",
      },
    ],
    realLifeExample:
      "💡 Si ou konnen non egzat sit la (facebook.com), tape l dirèkteman nan bawo adrès la — pi rapid pase chèche 'Facebook' sou Google epi klike sou rezilta a.",
    mistakeWrong:
      "Tape non yon sit nan Google epi klike sou premye rezilta a chak fwa.",
    mistakeCorrect:
      "Si ou konnen adrès egzat la, tape l dirèkteman nan bawo adrès la.",
    mistakeWhy:
      "⚠️ Klike toujou sou premye rezilta Google a san verifye ka mennen w sou yon sit fo ki sanble ak orijinal la — sitou pou bagay tankou labank.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou rekonèt si yon rezilta rechèch se yon reklam olye de yon rezilta natirèl.",
    aiPrompt:
      "Hi! How can I tell the difference between an ad and a real search result on Google?",
    mission:
      "🎯 Misyon: tape non yon sit ou konnen dirèkteman nan bawo adrès la, san pase pa Google.",
    quiz: {
      prompt: "Ki diferans genyen ant motè rechèch ak bawo adrès?",
      options: [
        "Pa gen okenn diferans",
        "Motè rechèch jwenn sit pou ou; bawo adrès mennen w dirèkteman si ou konnen adrès la",
        "Bawo adrès sèlman pou imèl",
        "Motè rechèch sèlman mache sou telefòn",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Yo gen de wòl diferan.",
      wrongFeedback:
        "❌ Eseye ankò — repase egzanp Google vs. tape yon adrès dirèkteman.",
    },
    recap: [
      { emoji: "🔎", text: "Motè rechèch jwenn sit lè ou pa konnen non li." },
      {
        emoji: "📫",
        text: "Bawo adrès mennen w dirèkteman si ou konnen adrès la.",
      },
      { emoji: "🔗", text: "URL se adrès konplè yon paj." },
      { emoji: "🎯", text: "Misyon: tape yon adrès dirèkteman." },
    ],
  },
  {
    slug: "tabs-and-bookmarks",
    moduleTitle: "Modil 5: Metrize Entènèt la",
    heroEmoji: "📑",
    heroTitle: "Tabs ak Bookmarks",
    heroLede: "Louvri plizyè paj an menm tan epi sovgade sa ou vle jwenn ankò.",
    goal: "🎯 Objektif: jere plizyè tabs epi sovgade paj enpòtan ak bookmarks.",
    simpleExplanation:
      "Yon **tab** kite w louvri plizyè paj entènèt an menm tan nan yon sèl fennèt navigatè — tankou plizyè liv louvri sou yon tab. Yon **bookmark** (oswa favorite) sovgade yon paj pou ou jwenn li ankò rapid, san chèche l ankò.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a browser with multiple open tabs at the top and a bookmarks bar below, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/tabs-and-bookmarks.webp`,
    digitalWords: [
      {
        word: "Tab",
        definition:
          "Yon paj entènèt ki louvri apa, anndan menm fennèt navigatè a.",
        example: "Louvri twa tabs pou konpare pri sou twa sit diferan.",
      },
      {
        word: "Bookmark (Favorite)",
        definition: "Yon paj ou sovgade pou jwenn li ankò rapid.",
        example: "Bookmark sit labank ou pou jwenn li san chèche l chak fwa.",
      },
    ],
    realLifeExample:
      "💡 Si ou ap konpare pri sou twa sit diferan, louvri twa tabs olye de ale-vini ant yon sèl tab — pi rapid pou konpare.",
    mistakeWrong: "Fèmen navigatè a nèt epi chèche menm sit la ankò chak fwa.",
    mistakeCorrect:
      "Bookmark sit ou vizite souvan pou jwenn yo an yon sèl klik.",
    mistakeWhy:
      "⚠️ Chèche menm sit la sou Google chak fwa pèdi tan — bookmark bay yon rakousi dirèk.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou òganize bookmarks ou an gwoup (folders), menm jan ak dosye fichye.",
    aiPrompt:
      "Hi! Can you explain how to organize my browser bookmarks into folders, like 'Work' and 'Shopping'?",
    mission:
      "🎯 Misyon: louvri de tabs an menm tan epi bookmark yon sit ou vizite souvan.",
    quiz: {
      prompt: "Ki avantaj yon bookmark bay ou?",
      options: [
        "Li efase istwa navigasyon",
        "Li jwenn yon paj ankò rapid san chèche l",
        "Li konekte w sou Wi-Fi",
        "Li konprese fichye",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Bookmark bay yon rakousi dirèk.",
      wrongFeedback: "❌ Eseye ankò — panse ak sa ki fè yon bookmark itil.",
    },
    recap: [
      { emoji: "📑", text: "Tabs kite w louvri plizyè paj an menm tan." },
      { emoji: "⭐", text: "Bookmark sovgade yon paj pou jwenn li rapid." },
      { emoji: "📂", text: "Ou ka òganize bookmarks an gwoup." },
      { emoji: "🎯", text: "Misyon: louvri de tabs epi bookmark yon sit." },
    ],
  },
  {
    slug: "history-and-cache",
    moduleTitle: "Modil 5: Metrize Entènèt la",
    heroEmoji: "🕘",
    heroTitle: "Istwa Navigasyon ak Cache",
    heroLede:
      "Yon lis sa ou vizite deja, ak yon mekanis ki fè sit yo chaje pi vit.",
    goal: "🎯 Objektif: itilize istwa navigasyon epi konprann wòl cache la.",
    simpleExplanation:
      "**Istwa navigasyon** (history) se lis tout sit ou vizite deja — itil lè ou bliye non yon sit. **Cache** se yon ti mémwa navigatè a kenbe pou fè sit yo chaje pi vit lè ou tounen vizite yo.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a browser history list with a clock icon, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/history-and-cache.webp`,
    digitalWords: [
      {
        word: "Istwa (History)",
        definition: "Lis tout sit ou vizite deja nan navigatè a.",
        example: "Gade istwa ou pou jwenn yon sit ou vizite semenn pase.",
      },
      {
        word: "Cache",
        definition: "Ti mémwa navigatè a kenbe pou fè sit chaje pi vit.",
        example: "Vide cache si yon sit ap fè bagay dwòl oswa pa chaje byen.",
      },
    ],
    realLifeExample:
      "💡 Si ou vizite yon atik entèsan yè men ou bliye non sit la, gade istwa navigasyon ou pou jwenn li ankò.",
    mistakeWrong: "Panse yon sit ki pa chaje byen kraze pou tout bon.",
    mistakeCorrect:
      "Vide cache navigatè a anvan, sa souvan rezoud pwoblèm nan.",
    mistakeWhy:
      "⚠️ Cache ka vin 'vye' oswa domaje ak tan — vide l souvan rezoud pwoblèm sit ki pa chaje byen san bezwen lòt solisyon.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou vide cache ak istwa nan navigatè espesifik ou (Chrome, Safari, elatriye).",
    aiPrompt:
      "Hi! Can you explain how to clear my browsing history and cache in Chrome or Safari?",
    mission:
      "🎯 Misyon: gade istwa navigasyon ou epi idantifye dènye twa sit ou vizite.",
    quiz: {
      prompt: "Ki wòl cache la jwe?",
      options: [
        "Li sovgade modpas ou",
        "Li fè sit chaje pi vit lè ou tounen vizite yo",
        "Li efase istwa navigasyon",
        "Li konekte w sou Wi-Fi",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Cache fè sit chaje pi vit.",
      wrongFeedback: "❌ Eseye ankò — panse ak vitès chajman sit yo.",
    },
    recap: [
      { emoji: "🕘", text: "Istwa = lis sit ou vizite deja." },
      { emoji: "⚡", text: "Cache fè sit chaje pi vit." },
      { emoji: "🧹", text: "Vide cache si yon sit ap bogue." },
      { emoji: "🎯", text: "Misyon: gade istwa navigasyon ou." },
    ],
  },
  {
    slug: "cookies-explained",
    moduleTitle: "Modil 5: Metrize Entènèt la",
    heroEmoji: "🍪",
    heroTitle: "Cookies Eksplike",
    heroLede: "Ti fichye ki fè sit yo sonje ou soti yon vizit rive yon lòt.",
    goal: "🎯 Objektif: konprann sa yon cookie ye epi poukisa sit yo itilize yo.",
    simpleExplanation:
      "Yon **cookie** se yon ti fichye yon sit sovgade sou aparèy ou pou sonje enfòmasyon — tankou si ou konekte deja, oswa sa ou te gen nan panyen acha ou. San cookies, chak sit ta 'bliye' ou chak fwa ou rechaje paj la.",
    illustrationPrompt:
      "A realistic photograph symbolizing website cookies — a laptop screen with a small cookie icon notification overlay, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/cookies-explained.webp`,
    digitalWords: [
      {
        word: "Cookie",
        definition:
          "Ti fichye yon sit sovgade sou aparèy ou pou sonje enfòmasyon.",
        example: "Cookie a sonje ou konekte deja sou sit la.",
      },
      {
        word: "Konsantman Cookie (Cookie Consent)",
        definition: "Mesaj ki mande pèmisyon ou anvan yon sit itilize cookies.",
        example: "Aksepte oswa refize cookies lè ou wè popup la.",
      },
    ],
    realLifeExample:
      "💡 Si ou mete yon bagay nan panyen acha sou yon sit epi ou fèmen navigatè a, cookies fè bagay la rete la lè ou tounen — san yo, panyen an ta vid chak fwa.",
    mistakeWrong: "Aksepte tout cookies san reflechi, sou nenpòt sit.",
    mistakeCorrect:
      "Li mesaj cookie a epi refize cookies ki pa nesesè sou sit ou pa fè konfyans.",
    mistakeWhy:
      "⚠️ Kèk cookies swiv aktivite ou sou plizyè sit pou fè piblisite — pa gen danje imedya, men bon prensip se limite sa ou pataje san rezon.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ki diferans genyen ant cookies ki nesesè ak cookies ki swiv ou pou piblisite.",
    aiPrompt:
      "Hi! What's the difference between 'necessary' cookies and 'tracking' cookies when a website asks me to accept cookies?",
    mission:
      "🎯 Misyon: pwochen fwa ou wè yon popup cookie, li l epi chwazi konsyaman.",
    quiz: {
      prompt: "Kisa yon cookie fè?",
      options: [
        "Li efase istwa navigasyon",
        "Li sonje enfòmasyon sou ou soti yon vizit rive yon lòt",
        "Li konekte w sou Wi-Fi",
        "Li konprese fichye",
      ],
      correctIndex: 1,
      correctFeedback:
        "✅ Wi! Cookie sonje enfòmasyon soti yon vizit rive yon lòt.",
      wrongFeedback: "❌ Eseye ankò — panse ak sa ki rive panyen acha ou.",
    },
    recap: [
      { emoji: "🍪", text: "Cookie sonje enfòmasyon sou ou." },
      { emoji: "🛒", text: "San yo, panyen acha ta vid chak fwa." },
      { emoji: "🤔", text: "Li mesaj konsantman anvan ou aksepte." },
      {
        emoji: "🎯",
        text: "Misyon: li ak chwazi konsyaman pwochen popup cookie.",
      },
    ],
  },
  {
    slug: "incognito-mode",
    moduleTitle: "Modil 5: Metrize Entènèt la",
    heroEmoji: "🕶️",
    heroTitle: "Incognito ak Navigasyon Prive",
    heroLede: "Navige san navigatè a sonje kote ou te ale.",
    goal: "🎯 Objektif: itilize navigasyon prive lè sitiyasyon an mande l.",
    simpleExplanation:
      "**Mòd Incognito** (oswa navigasyon prive) louvri yon fennèt espesyal ki pa sovgade istwa, cookies, oswa done fòm apre ou fèmen l. Li itil lè ou itilize yon aparèy ki pa pa ou, oswa lè ou pa vle sit sonje w.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a dark-themed private browsing window with a subtle detective hat or glasses icon indicator, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/incognito-mode.webp`,
    digitalWords: [
      {
        word: "Incognito / Navigasyon Prive",
        definition:
          "Yon fennèt navigatè ki pa sovgade istwa oswa cookies apre ou fèmen l.",
        example:
          "Louvri yon fennèt incognito pou konekte sou yon kont ki pa pa ou.",
      },
    ],
    realLifeExample:
      "💡 Si ou dwe konekte sou imèl ou sou yon òdinatè piblik (nan yon sant kominotè), itilize incognito pou navigatè a pa sonje modpas ou apre ou fin itilize l.",
    mistakeWrong: "Panse mòd incognito fè w konplètman envizib sou entènèt la.",
    mistakeCorrect:
      "Konprann incognito sèlman anpeche navigatè a sovgade istwa lokal — sit ou vizite ka toujou wè aktivite ou.",
    mistakeWhy:
      "⚠️ Incognito pa yon zouti sekirite total — li pwoteje aparèy lokal ou (moun ki itilize l apre ou), men pa kache ou nan men entènèt sèvis yo.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ki limit reyèl mòd incognito genyen, pou ou pa depann sou li twòp.",
    aiPrompt:
      "Hi! What does incognito/private browsing actually protect me from, and what does it NOT protect me from?",
    mission:
      "🎯 Misyon: louvri yon fennèt incognito sou navigatè ou epi vizite yon sit ladan l.",
    quiz: {
      prompt: "Kisa mòd incognito fè?",
      options: [
        "Li fè w envizib nèt sou entènèt",
        "Li anpeche navigatè a sovgade istwa ak cookies lokalman",
        "Li konprese fichye ou",
        "Li chanje modpas ou otomatikman",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Li anpeche sovgad lokal.",
      wrongFeedback: "❌ Eseye ankò — panse ak limit reyèl mòd sa a.",
    },
    recap: [
      { emoji: "🕶️", text: "Incognito pa sovgade istwa/cookies lokalman." },
      { emoji: "🖥️", text: "Itil sou aparèy pataje oswa piblik." },
      { emoji: "⚠️", text: "Li pa fè w envizib nèt sou entènèt." },
      { emoji: "🎯", text: "Misyon: louvri epi itilize yon fennèt incognito." },
    ],
  },
  {
    slug: "links-and-qr-codes",
    moduleTitle: "Modil 5: Metrize Entènèt la",
    heroEmoji: "🔗",
    heroTitle: "Lyen ak Kòd QR",
    heroLede:
      "De fason rapid pou ale sou yon sit, ak yon prensip sekirite enpòtan.",
    goal: "🎯 Objektif: swiv lyen ak eskane kòd QR an sekirite.",
    simpleExplanation:
      "Yon **lyen** (link) se tèks oswa imaj ou klike pou ale sou yon lòt paj. Yon **kòd QR** se yon ti kare ak modèl nwa-blan ou eskane ak kamera telefòn ou pou ale dirèkteman sou yon sit, san tape anyen.",
    illustrationPrompt:
      "A realistic photograph of a smartphone camera scanning a QR code on a printed flyer or menu, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/links-and-qr-codes.webp`,
    digitalWords: [
      {
        word: "Lyen (Link)",
        definition: "Tèks oswa imaj ou klike pou ale sou yon lòt paj entènèt.",
        example: "Klike sou lyen ble a nan imèl la pou konfime kont ou.",
      },
      {
        word: "Kòd QR (QR Code)",
        definition: "Yon ti kare eskanab ki mennen w dirèkteman sou yon sit.",
        example: "Eskane kòd QR nan meni restoran an pou wè pri yo.",
      },
    ],
    realLifeExample:
      "💡 Nan anpil restoran kounye a, ou eskane yon kòd QR sou tab la pou wè meni an sou telefòn ou, olye de yon meni papye.",
    mistakeWrong:
      "Klike sou nenpòt lyen oswa eskane nenpòt kòd QR san verifye sous li.",
    mistakeCorrect:
      "Verifye sous lyen an oswa kòd QR la anvan ou klike, sitou si li mande enfòmasyon pèsonèl.",
    mistakeWhy:
      "⚠️ Move moun ka kreye fo kòd QR oswa lyen ki mennen w sou yon sit fo ki vòlè enfòmasyon ou — sa rele fisik (phishing).",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou rekonèt yon lyen oswa kòd QR sispèk anvan ou klike sou li.",
    aiPrompt:
      "Hi! How can I tell if a link or QR code might be a scam before I click or scan it?",
    mission:
      "🎯 Misyon: eskane yon kòd QR ou fè konfyans (tankou nan yon restoran) epi obsève kote li mennen w.",
    quiz: {
      prompt: "Kisa ou ta dwe fè anvan ou klike sou yon lyen ou pa rekonèt?",
      options: [
        "Klike imedyatman",
        "Verifye sous li anvan ou klike",
        "Voye l bay tout kontak ou",
        "Efase navigatè a",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Toujou verifye sous la anvan.",
      wrongFeedback: "❌ Eseye ankò — panse ak sekirite anvan tout bagay.",
    },
    recap: [
      { emoji: "🔗", text: "Lyen mennen w sou yon lòt paj lè ou klike." },
      { emoji: "📱", text: "Kòd QR eskanab ak kamera telefòn." },
      { emoji: "🎣", text: "Verifye sous anvan ou klike/eskane." },
      { emoji: "🎯", text: "Misyon: eskane yon kòd QR ou fè konfyans." },
    ],
  },
  {
    slug: "downloads-and-uploads",
    moduleTitle: "Modil 5: Metrize Entènèt la",
    heroEmoji: "⬆️",
    heroTitle: "Downloads ak Uploads",
    heroLede: "De direksyon fichye yo vwayaje ant aparèy ou ak entènèt la.",
    goal: "🎯 Objektif: telechaje ak voye fichye sou entènèt ak konfyans.",
    simpleExplanation:
      "**Download** (telechaje) vle di pran yon fichye sou entènèt epi mete l sou aparèy ou. **Upload** (voye) se lekontrè — pran yon fichye ki sou aparèy ou epi mete l sou entènèt (tankou voye yon foto sou Facebook).",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a download progress bar with a downward arrow icon, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/downloads-and-uploads.webp`,
    digitalWords: [
      {
        word: "Download (Telechaje)",
        definition: "Pran yon fichye sou entènèt epi mete l sou aparèy ou.",
        example: "Download PDF fòm nan sou sit gouvènman an.",
      },
      {
        word: "Upload (Voye)",
        definition: "Pran yon fichye ki sou aparèy ou epi mete l sou entènèt.",
        example: "Upload foto ou pran ak telefòn ou sou Facebook.",
      },
    ],
    realLifeExample:
      "💡 Lè ou 'download' yon aplikasyon, li vwayaje soti sou entènèt pou rive sou telefòn ou. Lè ou 'upload' yon foto sou Instagram, li vwayaje soti sou telefòn ou pou rive sou entènèt.",
    mistakeWrong:
      "Download fichye ki soti nan sit ou pa rekonèt oswa ki sispèk.",
    mistakeCorrect: "Download sèlman nan sit ofisyèl oswa sous ou fè konfyans.",
    mistakeWhy:
      "⚠️ Download fichye soti nan yon sit sispèk ka mete yon viris oswa lojisyèl danjere sou aparèy ou.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou rekonèt si yon sit download se yon sit ofisyèl anvan ou telechaje yon bagay.",
    aiPrompt:
      "Hi! How can I tell if a download link is from a safe, official source before I click it?",
    mission:
      "🎯 Misyon: download yon fichye ou konnen ki an sekirite (tankou yon PDF ofisyèl) epi jwenn li nan dosye Downloads ou.",
    quiz: {
      prompt: "Kisa 'upload' vle di?",
      options: [
        "Pran yon fichye sou entènèt pou mete l sou aparèy ou",
        "Pran yon fichye ki sou aparèy ou pou mete l sou entènèt",
        "Efase yon fichye",
        "Konprese yon fichye",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Upload voye yon fichye sou entènèt.",
      wrongFeedback: "❌ Eseye ankò — panse ak direksyon opoze download.",
    },
    recap: [
      { emoji: "⬇️", text: "Download pran yon fichye sou entènèt." },
      { emoji: "⬆️", text: "Upload voye yon fichye sou entènèt." },
      { emoji: "🛡️", text: "Download sèlman nan sous ou fè konfyans." },
      { emoji: "🎯", text: "Misyon: download yon fichye an sekirite." },
    ],
  },
  {
    slug: "data-usage-awareness",
    moduleTitle: "Modil 5: Metrize Entènèt la",
    heroEmoji: "📊",
    heroTitle: "Konsyans sou Itilizasyon Done",
    heroLede:
      "Wi-Fi ilimite se yon bagay, done selilè se yon lòt — konnen diferans lan ka ekonomize lajan ou.",
    goal: "🎯 Objektif: distenge Wi-Fi ak done selilè epi kontwole itilizasyon done ou.",
    simpleExplanation:
      "**Wi-Fi** jeneralman ilimite lè ou peye pou li yon fwa pa mwa. **Done selilè** (cellular/mobile data) se sa telefòn ou itilize lè li pa sou Wi-Fi — souvan limite ak yon kantite mo (megabit/gigabit) ou peye pou li. Konnen ki lè w ap itilize chak grenn ede w evite depans initil.",
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing a data usage settings panel with a simple bar chart, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/data-usage-awareness.webp`,
    digitalWords: [
      {
        word: "Done Selilè (Cellular/Mobile Data)",
        definition:
          "Entènèt telefòn ou itilize lè li pa sou Wi-Fi, souvan limite.",
        example: "Gade videyo long yo lè ou sou Wi-Fi, pa sou done selilè.",
      },
      {
        word: "GB (Gigabit)",
        definition: "Inite ki mezire konbyen done ou itilize oswa genyen.",
        example: "Plan telefòn ou ka gen 5 GB done chak mwa.",
      },
    ],
    realLifeExample:
      "💡 Si ou gade yon videyo long sou YouTube pandan ou sou done selilè (pa sou Wi-Fi), ou ka fini tout done mwa a nan yon sèl jou.",
    mistakeWrong:
      "Gade videyo long oswa telechaje gwo fichye san verifye si ou sou Wi-Fi.",
    mistakeCorrect:
      "Verifye si ou sou Wi-Fi anvan aktivite ki itilize anpil done (videyo, download gwo fichye).",
    mistakeWhy:
      "⚠️ Fini done selilè ou avan lè ka koute lajan siplemantè oswa kite w san entènèt jiskaske plan an renouvle.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou verifye konbyen done telefòn ou deja itilize mwa sa a.",
    aiPrompt:
      "Hi! Can you explain how to check how much cellular data I've used this month on my phone?",
    mission:
      "🎯 Misyon: verifye konbyen done selilè ou itilize mwa sa a nan Settings telefòn ou.",
    quiz: {
      prompt: "Kilè li pi saj pou gade yon videyo long?",
      options: [
        "Lè ou sou done selilè",
        "Lè ou sou Wi-Fi",
        "Pa gen okenn diferans",
        "Sèlman lannwit",
      ],
      correctIndex: 1,
      correctFeedback:
        "✅ Wi! Wi-Fi jeneralman ilimite, pi saj pou videyo long.",
      wrongFeedback: "❌ Eseye ankò — panse ak ki rezo ki koute plis lajan.",
    },
    recap: [
      { emoji: "📶", text: "Wi-Fi jeneralman ilimite." },
      { emoji: "📱", text: "Done selilè limite e li ka koute plis." },
      { emoji: "📊", text: "Verifye itilizasyon done ou regilyèman." },
      { emoji: "🎯", text: "Misyon: verifye done selilè ou itilize mwa sa a." },
    ],
  },
  {
    slug: "internet-mastery-mission",
    moduleTitle: "Modil 5: Metrize Entènèt la",
    heroEmoji: "🏆",
    heroTitle: "Misyon: Metrize Entènèt la",
    heroLede:
      "Konbine tout konpetans Modil 5 pou navige sou entènèt ak konfyans total.",
    goal: "🎯 Objektif: browse, chèche, ak itilize entènèt la an sekirite ak efikasite.",
    simpleExplanation:
      "Ou fèk aprann: Wi-Fi, navigatè, motè rechèch vs. bawo adrès, tabs, bookmarks, istwa, cache, cookies, incognito, lyen, kòd QR, downloads, uploads, ak konsyans done. Misyon sa a mande w konbine plizyè nan konpetans sa yo.",
    illustrationPrompt:
      "A realistic photograph of a person confidently browsing the internet on a laptop at a bright desk, warm natural lighting, professional lifestyle photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/internet-mastery-mission.webp`,
    digitalWords: [
      {
        word: "Metriz Entènèt",
        definition:
          "Kapasite pou navige, chèche, ak itilize entènèt an sekirite ak efikasite.",
        example:
          "Metriz entènèt fè lavi dijital ou pi rapid ak pi an sekirite.",
      },
    ],
    realLifeExample:
      "💡 Yon moun ki metrize entènèt jwenn enfòmasyon pi vit, evite arnak, epi pa gaspiye done selilè san rezon.",
    mistakeWrong:
      "Panse ou dwe konnen tout bagay sou entènèt anvan ou kòmanse itilize l.",
    mistakeCorrect:
      "Konprann konpetans debaz sa yo ase pou kòmanse ak konfyans — rès la vin natirèl ak pratik.",
    mistakeWhy:
      "⚠️ Atann pèfeksyon anvan ou kòmanse anpeche w aprann — pi bon fason se pratike sa ou fèk aprann yo.",
    aiExplanation:
      "🤖 Kounye a ou ka mande yon AI konsèy sou kijan pou kontinye aprann sou entènèt an sekirite.",
    aiPrompt:
      "Hi! I just learned the basics of browsing the internet safely (Wi-Fi, browsers, cookies, incognito, links, downloads). What should I focus on learning next?",
    mission:
      "🎯 Misyon Final Modil 5: konekte sou Wi-Fi, louvri de tabs, chèche yon bagay sou Google, epi bookmark yon sit ou vle jwenn ankò.",
    quiz: {
      prompt: "Ki objektif prensipal Modil 5 la?",
      options: [
        "Vin yon enjenyè rezo",
        "Browse, chèche, ak itilize entènèt an sekirite ak efikasite",
        "Memorize tout kòd QR ki egziste",
        "Efase tout cookies chak jou",
      ],
      correctIndex: 1,
      correctFeedback:
        "✅ Wi! Objektif la se browse, chèche, ak itilize an sekirite.",
      wrongFeedback: "❌ Eseye ankò — repase objektif Modil 5 la.",
    },
    recap: [
      { emoji: "📶", text: "Wi-Fi, navigatè, motè rechèch vs. bawo adrès." },
      {
        emoji: "📑",
        text: "Tabs, bookmarks, istwa, cache, cookies, incognito.",
      },
      { emoji: "🔗", text: "Lyen, kòd QR, downloads, uploads, konsyans done." },
      { emoji: "🎓", text: "Ou fini Modil 5 — Metrize Entènèt la!" },
    ],
  },
  {
    slug: "what-is-email",
    moduleTitle: "Modil 6: Metrize Imèl",
    heroEmoji: "📧",
    heroTitle: "Kisa Imèl Ye?",
    heroLede: "Yon lèt dijital ki rive an segonn, kèlkeswa distans la.",
    goal: "🎯 Objektif: konprann kisa yon imèl ye ak poukisa ou bezwen youn.",
    simpleExplanation:
      "Yon **imèl** se yon mesaj dijital ou voye ak resevwa sou entènèt, tankou yon lèt men ki rive imedyatman. Ou bezwen yon adrès imèl pou kreye kont sou prèske tout sit (Facebook, WhatsApp Business, sit gouvènman, djòb) — se yon idantite dijital debaz.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing an email inbox interface with an envelope icon, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/what-is-email.webp`,
    digitalWords: [
      {
        word: "Imèl (Email)",
        definition: "Yon mesaj dijital ou voye ak resevwa sou entènèt.",
        example: "Voye yon imèl bay yon anplwayè pou aplike pou yon djòb.",
      },
      {
        word: "Adrès Imèl (Email Address)",
        definition: "Idantite dijital ou itilize pou voye/resevwa imèl.",
        example: "'jan.pyè@gmail.com' se yon egzanp adrès imèl.",
      },
    ],
    realLifeExample:
      "💡 Lè ou aplike pou yon djòb sou entènèt, prèske tout tan yo mande yon adrès imèl pou yo voye w repons — san imèl, ou pa ka aplike.",
    mistakeWrong: "Panse ou ka viv san yon adrès imèl nan mond dijital jodi a.",
    mistakeCorrect:
      "Konprann yon adrès imèl se yon zouti debaz, tankou yon nimewo telefòn, pou anpil sèvis.",
    mistakeWhy:
      "⚠️ San yon adrès imèl, ou pa ka kreye anpil kont enpòtan (labank, djòb, gouvènman), sa limite anpil sa ou ka fè sou entènèt.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ki diferans genyen ant yon imèl ak yon mesaj tèks oswa yon mesaj WhatsApp.",
    aiPrompt:
      "Hi! What's the difference between email and a text message or WhatsApp message? When should I use each one?",
    mission:
      "🎯 Misyon: reflechi sou de sitiyasyon nan lavi ou kote ou ta bezwen yon adrès imèl.",
    quiz: {
      prompt: "Poukisa ou bezwen yon adrès imèl jodi a?",
      options: [
        "Sèlman pou voye foto",
        "Pou kreye kont sou anpil sèvis ak aplike pou djòb",
        "Sèlman pou jwe jwèt",
        "Li pa nesesè ditou",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Imèl se yon idantite dijital debaz.",
      wrongFeedback: "❌ Eseye ankò — panse ak kont ou dwe kreye sou entènèt.",
    },
    recap: [
      { emoji: "📧", text: "Imèl = mesaj dijital ki rive imedyatman." },
      { emoji: "🪪", text: "Adrès imèl se yon idantite dijital debaz." },
      { emoji: "💼", text: "Nesesè pou djòb, kont, ak sèvis gouvènman." },
      { emoji: "🎯", text: "Misyon: idantifye sitiyasyon ou bezwen imèl." },
    ],
  },
  {
    slug: "creating-a-gmail-account",
    moduleTitle: "Modil 6: Metrize Imèl",
    heroEmoji: "✉️",
    heroTitle: "Kreye Yon Kont Gmail",
    heroLede: "Yon adrès imèl gratis ki pran sèlman kèk minit pou kreye.",
    goal: "🎯 Objektif: kreye pwòp kont Gmail ou, etap pa etap.",
    simpleExplanation:
      "**Gmail** se sèvis imèl gratis Google la — youn nan pi popilè nan mond lan. Pou kreye yon kont, ou bezwen chwazi yon non itilizatè (ki vin premye pati adrès ou), yon modpas fò, epi konfime enfòmasyon debaz tankou dat nesans ou.",
    howItWorks: [
      "Ale sou gmail.com epi klike 'Kreye kont'",
      "Chwazi non ak non fanmi ou, epi yon non itilizatè disponib",
      "Kreye yon modpas fò epi konfime enfòmasyon debaz yo",
    ],
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a simple account creation form with name and password fields, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/creating-a-gmail-account.webp`,
    digitalWords: [
      {
        word: "Non Itilizatè (Username)",
        definition: "Premye pati yon adrès imèl, anvan '@gmail.com'.",
        example: "'jan.pyè' se non itilizatè nan 'jan.pyè@gmail.com'.",
      },
      {
        word: "Modpas Fò (Strong Password)",
        definition:
          "Yon modpas ki gen lèt, chif, ak senbòl pou pi an sekirite.",
        example: "'Solèy2024!' pi fò pase '123456'.",
      },
    ],
    realLifeExample:
      "💡 Lè ou kreye kont Gmail ou, chwazi yon non itilizatè ki gen sans (non ou), pou moun rekonèt ki moun ki voye lè yo wè adrès la.",
    mistakeWrong: "Itilize yon modpas fasil tankou '123456' oswa non ou.",
    mistakeCorrect: "Kreye yon modpas fò ak yon melanj lèt, chif, ak senbòl.",
    mistakeWhy:
      "⚠️ Yon modpas fasil ka devine fasilman pa move moun, sa mete tout enfòmasyon nan kont ou an danje.",
    aiExplanation:
      "🤖 Ou ka mande yon AI konsèy pou kreye yon modpas fò ke ou ka sonje pi fasil.",
    aiPrompt:
      "Hi! Can you give me tips for creating a strong password that I can also remember easily?",
    mission:
      "🎯 Misyon: si ou pa gen yon kont Gmail, kreye youn kounye a (oswa verifye enfòmasyon kont ou deja genyen an ajou).",
    quiz: {
      prompt: "Kisa ki fè yon modpas fò?",
      options: [
        "Sèlman chif",
        "Non ou ekri alanvè",
        "Yon melanj lèt, chif, ak senbòl",
        "Menm modpas ak lòt kont ou yo",
      ],
      correctIndex: 2,
      correctFeedback: "✅ Wi! Yon melanj fè yon modpas pi fò.",
      wrongFeedback: "❌ Eseye ankò — panse ak varyete karaktè yo.",
    },
    recap: [
      { emoji: "✉️", text: "Gmail se sèvis imèl gratis Google la." },
      { emoji: "🪪", text: "Chwazi yon non itilizatè ki gen sans." },
      { emoji: "🔒", text: "Kreye yon modpas fò, pa fasil." },
      { emoji: "🎯", text: "Misyon: kreye oswa verifye kont Gmail ou." },
    ],
  },
  {
    slug: "inbox-and-composing",
    moduleTitle: "Modil 6: Metrize Imèl",
    heroEmoji: "📥",
    heroTitle: "Bwat Resepsyon ak Ekri Imèl",
    heroLede: "Kote tout imèl ou rive, ak kijan pou ekri premye a pa ou.",
    goal: "🎯 Objektif: li imèl nan bwat resepsyon epi ekri yon nouvo imèl.",
    simpleExplanation:
      "**Bwat resepsyon** (inbox) se kote tout imèl moun voye ba ou rive. Pou ekri yon nouvo imèl, klike 'Compose' (Ekri), antre adrès moun k ap resevwa a, yon sijè kout, epi mesaj ou.",
    howItWorks: [
      "Klike 'Compose' pou louvri yon nouvo imèl",
      "Antre adrès moun k ap resevwa a nan 'To'",
      "Ekri yon sijè kout epi mesaj ou, apre klike 'Send'",
    ],
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing an email compose window with To, Subject, and message body fields, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/inbox-and-composing.webp`,
    digitalWords: [
      {
        word: "Bwat Resepsyon (Inbox)",
        definition: "Kote tout imèl moun voye ba ou rive.",
        example: "Verifye bwat resepsyon ou chak jou pou nouvo mesaj.",
      },
      {
        word: "Compose (Ekri)",
        definition: "Bouton ou klike pou kòmanse ekri yon nouvo imèl.",
        example: "Klike 'Compose' pou voye yon imèl bay yon zanmi.",
      },
      {
        word: "Sijè (Subject)",
        definition: "Ti fraz kout ki rezime sa imèl la konsène.",
        example: "'Rankont demen a 2è' se yon bon sijè kout.",
      },
    ],
    realLifeExample:
      "💡 Lè ou ekri yon imèl san sijè, moun k ap resevwa l ka pa konprann poukisa li rive oswa li ka ale nan spam — toujou mete yon sijè kout ak klè.",
    mistakeWrong: "Voye yon imèl san sijè, oswa ak yon sijè ki pa fè sans.",
    mistakeCorrect: "Toujou ekri yon sijè kout ak klè ki rezime mesaj la.",
    mistakeWhy:
      "⚠️ Yon sijè klè ede moun k ap resevwa l konprann enpòtans mesaj la san yo pa bezwen louvri l imedyatman.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ede w ekri yon sijè kout ak klè pou yon imèl espesifik ou vle voye.",
    aiPrompt:
      "Hi! Can you help me write a short, clear subject line for an email asking about a job opportunity?",
    mission:
      "🎯 Misyon: ekri epi voye yon premye imèl tès (bay tèt ou, oswa bay yon zanmi) ak yon sijè klè.",
    quiz: {
      prompt: "Kisa ou dwe toujou mete nan yon imèl?",
      options: [
        "Yon sijè kout ak klè",
        "Yon foto sèlman",
        "Non moun k ap resevwa a alanvè",
        "Pa gen anyen espesyal",
      ],
      correctIndex: 0,
      correctFeedback: "✅ Wi! Yon sijè klè fè imèl la pi efikas.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak sa ki ede moun konprann imèl la.",
    },
    recap: [
      { emoji: "📥", text: "Bwat resepsyon kenbe tout imèl ou resevwa." },
      { emoji: "✏️", text: "Compose kòmanse yon nouvo imèl." },
      { emoji: "📝", text: "Toujou mete yon sijè kout ak klè." },
      { emoji: "🎯", text: "Misyon: voye yon premye imèl tès." },
    ],
  },
  {
    slug: "reply-reply-all-forward",
    moduleTitle: "Modil 6: Metrize Imèl",
    heroEmoji: "↩️",
    heroTitle: "Reply, Reply All, ak Forward",
    heroLede:
      "Twa fason diferan pou reponn oswa pataje yon imèl — chwazi bon jan an konte.",
    goal: "🎯 Objektif: itilize Reply, Reply All, ak Forward nan bon sitiyasyon.",
    simpleExplanation:
      "**Reply** voye repons ou sèlman bay moun ki voye imèl la. **Reply All** voye l bay tout moun ki te resevwa imèl orijinal la. **Forward** pataje yon imèl ou resevwa ak yon lòt moun ki pa t nan lis orijinal la.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing an email with reply, reply-all, and forward icon buttons visible, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/reply-reply-all-forward.webp`,
    digitalWords: [
      {
        word: "Reply",
        definition: "Voye yon repons sèlman bay moun ki voye imèl orijinal la.",
        example: "Reply bay bòs ou pou konfime ou resevwa mesaj la.",
      },
      {
        word: "Reply All",
        definition: "Voye repons bay tout moun ki te nan imèl orijinal la.",
        example: "Reply All lè tout ekip la bezwen wè repons ou.",
      },
      {
        word: "Forward",
        definition: "Pataje yon imèl ou resevwa ak yon nouvo moun.",
        example: "Forward imèl envitasyon an bay yon zanmi ki enterese.",
      },
    ],
    realLifeExample:
      "💡 Si yon gwoup travay 5 moun ap diskite yon pwojè pa imèl, itilize Reply All pou tout moun rete ajou — men si se yon repons pèsonèl pou yon sèl moun, itilize sèlman Reply.",
    mistakeWrong:
      "Itilize Reply All lè repons ou konsène sèlman moun ki voye imèl la.",
    mistakeCorrect:
      "Reflechi byen anvan Reply All — mande tèt ou si tout moun bezwen wè repons ou.",
    mistakeWhy:
      "⚠️ Reply All san rezon ka voye enfòmasyon pèsonèl oswa mesaj initil bay moun ki pa konsène, sa ka jennen oswa anbarase.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ede w deside si yon sitiyasyon espesifik mande Reply, Reply All, oswa Forward.",
    aiPrompt:
      "Hi! I got an email sent to me and 4 coworkers about a meeting time change. Should I use Reply or Reply All to confirm I got it?",
    mission:
      "🎯 Misyon: pratike Reply sou yon imèl tès, epi eksplike ki lè ou ta itilize Forward olye de sa.",
    quiz: {
      prompt: "Kilè ou ta dwe itilize Reply All?",
      options: [
        "Chak fwa, san eksepsyon",
        "Lè repons ou konsène tout moun ki nan lis orijinal la",
        "Sèlman pou imèl spam",
        "Janm, li toujou danjere",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Reply All sèlman lè tout moun konsène.",
      wrongFeedback: "❌ Eseye ankò — panse ak sa k ap resevwa mesaj la.",
    },
    recap: [
      { emoji: "↩️", text: "Reply voye repons bay yon sèl moun." },
      { emoji: "👥", text: "Reply All voye bay tout moun nan lis la." },
      { emoji: "➡️", text: "Forward pataje ak yon nouvo moun." },
      { emoji: "🎯", text: "Misyon: pratike Reply sou yon imèl tès." },
    ],
  },
  {
    slug: "email-attachments",
    moduleTitle: "Modil 6: Metrize Imèl",
    heroEmoji: "📎",
    heroTitle: "Pyès Jwenn (Attachments)",
    heroLede: "Voye ak resevwa fichye dirèkteman anndan yon imèl.",
    goal: "🎯 Objektif: voye ak telechaje pyès jwenn (attachments) san pwoblèm.",
    simpleExplanation:
      "Yon **pyès jwenn** (attachment) se yon fichye (foto, PDF, dokiman) ou tache anndan yon imèl pou voye l ansanm ak mesaj la. Ikòn nan sanble ak yon trombòn (📎), epi ou klike sou li pou ajoute yon fichye anvan ou voye.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing an email compose window with a paperclip attachment icon and a file being attached, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/email-attachments.webp`,
    digitalWords: [
      {
        word: "Pyès Jwenn (Attachment)",
        definition:
          "Yon fichye tache anndan yon imèl pou voye ansanm ak mesaj la.",
        example: "Tache CV ou kòm pyès jwenn nan imèl aplikasyon djòb la.",
      },
      {
        word: "Trombòn (Paperclip Icon)",
        definition: "Ikòn ou klike pou ajoute yon pyès jwenn nan yon imèl.",
        example: "Klike trombòn nan pou chwazi PDF ou vle voye.",
      },
    ],
    realLifeExample:
      "💡 Lè ou aplike pou yon djòb pa imèl, ou tache CV ou (an PDF) kòm pyès jwenn, olye de kopye tout tèks la anndan kò imèl la.",
    mistakeWrong:
      "Eseye voye yon fichye trè gwo (tankou yon videyo long) kòm pyès jwenn.",
    mistakeCorrect:
      "Pou gwo fichye, itilize yon lyen cloud (tankou Google Drive) olye de tache l dirèkteman.",
    mistakeWhy:
      "⚠️ Anpil sèvis imèl limite gwosè pyès jwenn (souvan 25 MB) — eseye voye yon fichye pi gwo ka fè imèl la echwe.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou voye yon gwo fichye pa imèl si li twò gwo pou tache dirèkteman.",
    aiPrompt:
      "Hi! I need to send a large video file that's too big to attach directly to an email. What's a good way to share it?",
    mission:
      "🎯 Misyon: tache yon fichye (tankou yon foto) nan yon imèl tès epi voye l.",
    quiz: {
      prompt: "Kisa yon pyès jwenn (attachment) ye?",
      options: [
        "Yon sijè imèl",
        "Yon fichye tache anndan yon imèl",
        "Yon adrès imèl",
        "Yon dosye spam",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Pyès jwenn se yon fichye tache.",
      wrongFeedback: "❌ Eseye ankò — panse ak ikòn trombòn nan.",
    },
    recap: [
      { emoji: "📎", text: "Pyès jwenn = fichye tache nan yon imèl." },
      { emoji: "📋", text: "Klike trombòn nan pou ajoute youn." },
      {
        emoji: "☁️",
        text: "Gwo fichye: itilize yon lyen cloud olye de tache.",
      },
      { emoji: "🎯", text: "Misyon: tache epi voye yon fichye." },
    ],
  },
  {
    slug: "folders-and-labels",
    moduleTitle: "Modil 6: Metrize Imèl",
    heroEmoji: "🏷️",
    heroTitle: "Dosye ak Etikèt (Labels)",
    heroLede: "Kenbe yon bwat resepsyon okipe òganize san pèdi anyen.",
    goal: "🎯 Objektif: òganize imèl ou ak dosye ak etikèt.",
    simpleExplanation:
      "**Dosye** (folders) ranje imèl yo apa nan kategori diferan. Nan Gmail, konsèp la rele **etikèt** (labels) — yon imèl ka gen plizyè etikèt an menm tan, kontrèman ak yon dosye tradisyonèl kote yon fichye sèlman nan yon sèl kote.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing an email sidebar with colorful folder and label icons, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/folders-and-labels.webp`,
    digitalWords: [
      {
        word: "Dosye Imèl (Email Folder)",
        definition: "Yon kategori ou kreye pou ranje imèl yo apa.",
        example: "Kreye yon dosye 'Djòb' pou tout imèl konsènan travay.",
      },
      {
        word: "Etikèt (Label)",
        definition:
          "Yon tag Gmail itilize ki ka mete sou plizyè imèl an menm tan.",
        example: "Mete etikèt 'Enpòtan' sou plizyè imèl diferan.",
      },
    ],
    realLifeExample:
      "💡 Si ou gen 500 imèl nan bwat resepsyon ou, kreye dosye tankou 'Djòb', 'Fanmi', ak 'Resi' pou jwenn sa ou bezwen pi vit san fè defile san fen.",
    mistakeWrong:
      "Kite tout imèl (pèsonèl, travay, resi) mele nan menm bwat resepsyon an.",
    mistakeCorrect: "Kreye dosye/etikèt pou gwoupe imèl ki sanble ansanm.",
    mistakeWhy:
      "⚠️ Yon bwat resepsyon san òganizasyon fè imèl enpòtan pèdi nan mitan mesaj initil — dosye/etikèt rezoud sa.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ki dosye/etikèt debaz yo ta rekòmande pou yon moun ki fèk kòmanse itilize imèl.",
    aiPrompt:
      "Hi! Can you suggest 4-5 basic email folders or labels a beginner should set up to stay organized?",
    mission:
      "🎯 Misyon: kreye yon dosye oswa etikèt nan kont imèl ou epi deplase yon imèl ladan l.",
    quiz: {
      prompt:
        "Ki diferans genyen ant yon dosye tradisyonèl ak yon etikèt Gmail?",
      options: [
        "Pa gen okenn diferans",
        "Yon etikèt ka mete sou plizyè imèl an menm tan; dosye tradisyonèl non",
        "Etikèt sèlman pou spam",
        "Dosye pi rapid pase etikèt",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Etikèt Gmail pi fleksib pase dosye tradisyonèl.",
      wrongFeedback: "❌ Eseye ankò — panse ak fleksibilite etikèt Gmail yo.",
    },
    recap: [
      { emoji: "🏷️", text: "Dosye/etikèt òganize imèl ou an kategori." },
      { emoji: "🔀", text: "Yon etikèt Gmail ka sou plizyè imèl an menm tan." },
      { emoji: "📥", text: "Bon òganizasyon evite pèdi imèl enpòtan." },
      { emoji: "🎯", text: "Misyon: kreye yon dosye/etikèt epi itilize l." },
    ],
  },
  {
    slug: "spam-and-trash",
    moduleTitle: "Modil 6: Metrize Imèl",
    heroEmoji: "🚫",
    heroTitle: "Spam ak Poubèl (Trash)",
    heroLede: "De dosye ki kenbe sa ou pa vle wè, men pou rezon diferan.",
    goal: "🎯 Objektif: konprann diferans ant Spam ak Trash epi jere yo.",
    simpleExplanation:
      "**Spam** se dosye kote imèl endezirab (piblisite san rezon, potansyèl arnak) ale otomatikman. **Trash** (poubèl) se kote imèl ou efase manyèlman ale — tou de gen yon peryòd anvan yo disparèt nèt (souvan 30 jou).",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing an email sidebar with spam and trash folder icons highlighted, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/spam-and-trash.webp`,
    digitalWords: [
      {
        word: "Spam",
        definition: "Dosye kote imèl endezirab oswa sispèk ale otomatikman.",
        example: "Verifye dosye Spam ou detanzantan pou imèl ki pèdi.",
      },
      {
        word: "Trash (Poubèl)",
        definition: "Kote imèl ou efase manyèlman ale anvan yo disparèt nèt.",
        example: "Jwenn yon imèl efase pa erè nan Trash.",
      },
    ],
    realLifeExample:
      "💡 Si ou tap tann yon imèl enpòtan (tankou yon konfimasyon) men li pa parèt nan bwat resepsyon an, verifye dosye Spam — li ka rive la pa erè.",
    mistakeWrong:
      "Panse tout bagay ki nan Spam se toujou danjere, oswa jamè verifye l.",
    mistakeCorrect:
      "Verifye Spam detanzantan — pafwa yon imèl lejitim rive la pa erè.",
    mistakeWhy:
      "⚠️ Sistèm filtraj spam pa toujou pafè — yon imèl enpòtan (tankou yon repons djòb) ka fini nan Spam pa erè.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou make yon imèl kòm 'pa spam' si li rive nan move dosye a pa erè.",
    aiPrompt:
      "Hi! An important email landed in my Spam folder by mistake. How do I mark it as 'not spam' so future emails from that sender go to my inbox?",
    mission:
      "🎯 Misyon: verifye dosye Spam ak Trash ou kounye a pou wè sa ki ladan yo.",
    quiz: {
      prompt: "Ki diferans genyen ant Spam ak Trash?",
      options: [
        "Pa gen okenn diferans",
        "Spam se imèl endezirab otomatik; Trash se imèl ou efase manyèlman",
        "Trash sèlman pou foto",
        "Spam disparèt imedyatman, Trash pa janm disparèt",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Spam otomatik, Trash se aksyon manyèl ou.",
      wrongFeedback: "❌ Eseye ankò — panse ak kijan chak dosye ranpli.",
    },
    recap: [
      { emoji: "🚫", text: "Spam = imèl endezirab otomatik." },
      { emoji: "🗑️", text: "Trash = imèl ou efase manyèlman." },
      { emoji: "🔎", text: "Verifye Spam detanzantan pou imèl ki pèdi." },
      { emoji: "🎯", text: "Misyon: verifye Spam ak Trash ou." },
    ],
  },
  {
    slug: "searching-your-email",
    moduleTitle: "Modil 6: Metrize Imèl",
    heroEmoji: "🔍",
    heroTitle: "Chèche Nan Imèl Ou",
    heroLede: "Jwenn yon imèl ki gen ane depi ou resevwa l, an segonn.",
    goal: "🎯 Objektif: itilize rechèch pou jwenn nenpòt imèl vit.",
    simpleExplanation:
      "Menm jan ak fichye sou òdinatè, kont imèl ou gen yon bawo rechèch pwisan. Tape non moun nan, yon mo nan sijè a, oswa menm mo ki nan kò mesaj la pou jwenn imèl la — menm si li gen ane depi ou resevwa l.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing an email search bar with results appearing below it, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/searching-your-email.webp`,
    digitalWords: [
      {
        word: "Rechèch Imèl (Email Search)",
        definition:
          "Zouti pou jwenn yon imèl espesifik pa non, sijè, oswa mo kle.",
        example: "Tape 'resi' nan rechèch la pou jwenn tout imèl ki gen resi.",
      },
    ],
    realLifeExample:
      "💡 Si ou bezwen jwenn yon konfimasyon rezèvasyon ou resevwa 6 mwa pase, tape non konpayi a nan rechèch la olye de defile san fen nan bwat resepsyon an.",
    mistakeWrong:
      "Defile manyèlman nan dè santèn imèl pou chèche youn espesifik.",
    mistakeCorrect:
      "Itilize bawo rechèch la premye bagay, anvan ou defile manyèlman.",
    mistakeWhy:
      "⚠️ Rechèch la fèt egzakteman pou sitiyasyon sa a — li jwenn imèl la an segonn, kèlkeswa depi konbyen tan li rive.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou fè yon rechèch avanse (tankou sèlman imèl ki gen pyès jwenn, oswa ki soti nan yon moun espesifik).",
    aiPrompt:
      "Hi! Can you explain how to search my email for messages that have attachments, or messages from a specific sender only?",
    mission:
      "🎯 Misyon: itilize rechèch la pou jwenn yon imèl espesifik nan kont ou.",
    quiz: {
      prompt: "Ki avantaj rechèch nan imèl bay ou?",
      options: [
        "Li efase spam otomatikman",
        "Li jwenn yon imèl an segonn, kèlkeswa depi kilè li rive",
        "Li kreye nouvo dosye",
        "Li konprese pyès jwenn",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Rechèch jwenn imèl rapid, menm ansyen.",
      wrongFeedback: "❌ Eseye ankò — panse ak vitès pou jwenn yon vye imèl.",
    },
    recap: [
      { emoji: "🔍", text: "Rechèch jwenn imèl an segonn." },
      { emoji: "🔑", text: "Tape non, sijè, oswa mo kle." },
      { emoji: "⏳", text: "Mache menm pou imèl ki gen ane." },
      { emoji: "🎯", text: "Misyon: chèche yon imèl espesifik." },
    ],
  },
  {
    slug: "writing-professional-emails",
    moduleTitle: "Modil 6: Metrize Imèl",
    heroEmoji: "💼",
    heroTitle: "Ekri Imèl Pwofesyonèl",
    heroLede:
      "Fason ou ekri yon imèl ka louvri (oswa fèmen) yon pòt opòtinite.",
    goal: "🎯 Objektif: ekri yon imèl pwofesyonèl ki klè ak respektye.",
    simpleExplanation:
      "Yon **imèl pwofesyonèl** gen yon salitasyon klè (Bonjou/Bonswa Mesye/Madam), yon mesaj kout ak dirèk, ak yon fòmil politès nan fen (Mèsi, Byen kòdyalman). Evite abrevyasyon kazyèl ou itilize nan tèks ak zanmi.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a well-formatted professional email with clear paragraph structure, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/writing-professional-emails.webp`,
    digitalWords: [
      {
        word: "Salitasyon (Greeting)",
        definition: "Fraz ou kòmanse yon imèl avè l, tankou 'Bonjou Madam'.",
        example: "'Bonjou Mesye Jozèf,' se yon bon salitasyon pwofesyonèl.",
      },
      {
        word: "Fòmil Politès (Closing)",
        definition: "Fraz ou fini yon imèl avè l anvan siyati ou.",
        example: "'Mèsi davans pou atansyon w' se yon bon fòmil politès.",
      },
    ],
    realLifeExample:
      "💡 Yon imèl aplikasyon djòb ki kòmanse 'Bonjou' epi fini ak 'Mèsi davans' kreye yon pi bon premye enpresyon pase yon imèl ki kòmanse san salitasyon.",
    mistakeWrong:
      "Ekri yon imèl pwofesyonèl menm jan ou ekri yon mesaj tèks ak zanmi.",
    mistakeCorrect:
      "Itilize yon salitasyon klè, mesaj kout ak respektye, ak yon fòmil politès.",
    mistakeWhy:
      "⚠️ Yon imèl ki twò kazyèl pou yon sitiyasyon pwofesyonèl ka fè lekti a pran ou pa serye, sa ka koute w yon opòtinite.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ede w tounen yon mesaj kazyèl an yon imèl pwofesyonèl klè.",
    aiPrompt:
      "Hi! Can you help me turn this casual message into a professional email: 'hey i want the job we talked about, let me know'?",
    mission:
      "🎯 Misyon: ekri yon imèl pwofesyonèl kout (egzanp: mande enfòmasyon sou yon djòb).",
    quiz: {
      prompt: "Kisa yon imèl pwofesyonèl dwe genyen?",
      options: [
        "Abrevyasyon kazyèl tankou nan tèks ak zanmi",
        "Yon salitasyon klè ak yon fòmil politès nan fen",
        "Pa gen sijè ditou",
        "Emoji sèlman",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Salitasyon ak fòmil politès enpòtan.",
      wrongFeedback: "❌ Eseye ankò — panse ak sa ki fè yon imèl parèt serye.",
    },
    recap: [
      { emoji: "💼", text: "Imèl pwofesyonèl klè ak respektye." },
      { emoji: "👋", text: "Kòmanse ak yon salitasyon klè." },
      { emoji: "🙏", text: "Fini ak yon fòmil politès." },
      { emoji: "🎯", text: "Misyon: ekri yon imèl pwofesyonèl kout." },
    ],
  },
  {
    slug: "recognizing-email-scams",
    moduleTitle: "Modil 6: Metrize Imèl",
    heroEmoji: "🎣",
    heroTitle: "Rekonèt Arnak Pa Imèl",
    heroLede: "Konnen siyal danje yo pwoteje w kont pèt lajan ak enfòmasyon.",
    goal: "🎯 Objektif: rekonèt yon imèl arnak (fisik) anvan li fè w dega.",
    simpleExplanation:
      "**Fisik pa imèl** (email phishing) se lè move moun voye yon imèl ki sanble ofisyèl (labank, Facebook, gouvènman) pou vòlè modpas oswa enfòmasyon ou. Siyal danje: presyon iminan ('aji kounye a!'), fòt ekri, ak lyen ki mennen sou sit etranj.",
    illustrationPrompt:
      "A realistic photograph symbolizing email scam awareness — a laptop screen with a subtle warning triangle icon overlaying an email interface, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/recognizing-email-scams.webp`,
    digitalWords: [
      {
        word: "Fisik (Phishing)",
        definition:
          "Yon fo imèl ki sanble ofisyèl, fèt pou vòlè enfòmasyon ou.",
        example:
          "Yon imèl ki di 'kont ou blocked, klike isit la' souvan fisik.",
      },
      {
        word: "Ekspeditè (Sender)",
        definition: "Adrès imèl reyèl moun ki voye mesaj la.",
        example:
          "Verifye ekspeditè a — li ka pa egzakteman 'support@labank.com'.",
      },
    ],
    realLifeExample:
      "💡 Si ou resevwa yon imèl ki di 'kont labank ou ap fèmen, klike isit la kounye a', pa klike — ale dirèkteman sou sit ofisyèl labank la nan yon nouvo tab pou verifye.",
    mistakeWrong:
      "Klike sou lyen nan yon imèl ki kreye panik san verifye ekspeditè a.",
    mistakeCorrect:
      "Verifye adrès ekspeditè a byen, epi ale dirèkteman sou sit ofisyèl la nan yon nouvo tab olye de klike lyen an.",
    mistakeWhy:
      "⚠️ Move moun konte sou panik ou pou fè w aji vit san reflechi — pran yon segonn pou verifye toujou pwoteje w.",
    aiExplanation:
      "🤖 Ou ka mande yon AI verifye si yon imèl espesifik ou resevwa gen siyal ki montre li ka yon arnak.",
    aiPrompt:
      "Hi! I got an email saying my bank account will be closed unless I click a link immediately. What are the warning signs I should look for to check if this is a scam?",
    mission:
      "🎯 Misyon: gade nan Spam ou epi idantifye youn oswa de siyal danje nan yon imèl sispèk.",
    quiz: {
      prompt: "Ki youn nan siyal prensipal yon imèl fisik (phishing)?",
      options: [
        "Yon sijè klè",
        "Presyon iminan pou ou aji kounye a",
        "Yon fòmil politès byen ekri",
        "Yon pyès jwenn PDF",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Presyon iminan se yon gwo siyal danje.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak taktik move moun itilize pou fè w pè.",
    },
    recap: [
      { emoji: "🎣", text: "Fisik = fo imèl ki vòlè enfòmasyon ou." },
      { emoji: "⏰", text: "Mefye w de presyon iminan." },
      { emoji: "🔎", text: "Verifye ekspeditè a anvan ou klike." },
      {
        emoji: "🎯",
        text: "Misyon: idantifye siyal danje nan yon imèl sispèk.",
      },
    ],
  },
  {
    slug: "email-mastery-mission",
    moduleTitle: "Modil 6: Metrize Imèl",
    heroEmoji: "🏆",
    heroTitle: "Misyon: Metrize Imèl",
    heroLede:
      "Konbine tout konpetans Modil 6 pou itilize imèl tankou yon pwofesyonèl.",
    goal: "🎯 Objektif: kreye ak itilize imèl tankou yon pwofesyonèl konfyan.",
    simpleExplanation:
      "Ou fèk aprann: kisa imèl ye, kreye yon kont Gmail, bwat resepsyon ak compose, reply/reply all/forward, pyès jwenn, dosye/etikèt, spam/trash, rechèch, imèl pwofesyonèl, ak rekonèt arnak. Misyon sa a mande w konbine plizyè nan konpetans sa yo.",
    illustrationPrompt:
      "A realistic photograph of a person confidently checking email on a laptop at a bright desk, warm natural lighting, professional lifestyle photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/email-mastery-mission.webp`,
    digitalWords: [
      {
        word: "Metriz Imèl",
        definition:
          "Kapasite pou kreye, jere, ak itilize imèl tankou yon pwofesyonèl.",
        example: "Metriz imèl ede w nan djòb, biznis, ak lavi chak jou.",
      },
    ],
    realLifeExample:
      "💡 Yon moun ki metrize imèl reponn djòb ak pwofesyonalis, jwenn imèl vit, epi evite arnak ki ta ka koute yo lajan oswa enfòmasyon pèsonèl.",
    mistakeWrong:
      "Panse imèl se yon zouti ki demode ki pa vo tan aprann li byen.",
    mistakeCorrect:
      "Konprann imèl rete zouti debaz pou djòb, biznis, ak kont ofisyèl — vo tan mètrize l.",
    mistakeWhy:
      "⚠️ Menm ak WhatsApp ak rezo sosyal, imèl rete estanda pou kominikasyon pwofesyonèl ak ofisyèl.",
    aiExplanation:
      "🤖 Kounye a ou ka mande yon AI konsèy sou kijan pou kontinye amelyore konpetans imèl ou.",
    aiPrompt:
      "Hi! I just learned the basics of using email (Gmail, replying, attachments, professional writing, spotting scams). What should I focus on learning next?",
    mission:
      "🎯 Misyon Final Modil 6: voye yon imèl pwofesyonèl konplè (salitasyon, mesaj, fòmil politès) ak yon pyès jwenn.",
    quiz: {
      prompt: "Ki objektif prensipal Modil 6 la?",
      options: [
        "Vin yon enjenyè lojisyèl imèl",
        "Kreye ak itilize imèl tankou yon pwofesyonèl konfyan",
        "Memorize tout adrès imèl ki egziste",
        "Efase tout imèl chak jou",
      ],
      correctIndex: 1,
      correctFeedback:
        "✅ Wi! Objektif la se itilize imèl tankou yon pwofesyonèl.",
      wrongFeedback: "❌ Eseye ankò — repase objektif Modil 6 la.",
    },
    recap: [
      { emoji: "📧", text: "Kisa imèl ye ak kreye yon kont Gmail." },
      { emoji: "↩️", text: "Reply, Reply All, Forward, pyès jwenn." },
      { emoji: "🏷️", text: "Dosye/etikèt, spam/trash, rechèch." },
      { emoji: "🎓", text: "Ou fini Modil 6 — Metrize Imèl!" },
    ],
  },
  {
    slug: "installing-and-uninstalling-apps",
    moduleTitle: "Modil 7: Aparèy Mobil",
    heroEmoji: "📲",
    heroTitle: "Enstale ak Dezenstale Aplikasyon",
    heroLede:
      "Yon 'magazen' ofisyèl egziste pou chak platfòm pou ajoute nouvo zouti.",
    goal: "🎯 Objektif: enstale ak dezenstale aplikasyon an sekirite sou nenpòt aparèy.",
    simpleExplanation:
      "Chak platfòm gen yon 'magazen' ofisyèl kote ou telechaje aplikasyon: **Play Store** sou Android, **App Store** sou iPhone/Mac, ak **Microsoft Store** sou Windows. Ou chèche non aplikasyon an, klike 'Enstale', epi li parèt sou aparèy ou. Dezenstale mache menm jan, an lòt sans.",
    howItWorks: [
      "Louvri magazen aplikasyon ofisyèl platfòm ou (Play Store, App Store, Microsoft Store)",
      "Chèche non aplikasyon an epi klike 'Enstale' (Install)",
      "Pou retire l, kenbe ikòn nan oswa ale nan Settings epi chwazi 'Dezenstale' (Uninstall)",
    ],
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing an app store interface with an install button and several app icons, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/installing-and-uninstalling-apps.webp`,
    platformExamples: [
      {
        platform: "windows",
        steps:
          "Louvri Microsoft Store, chèche non aplikasyon an, epi klike 'Get' oswa 'Install'. Pou dezenstale, right-click sou aplikasyon an nan Start Menu epi chwazi 'Uninstall'.",
      },
      {
        platform: "mac",
        steps:
          "Louvri App Store, chèche non aplikasyon an, epi klike 'Get' oswa 'Install'. Pou dezenstale, deplase aplikasyon an soti nan dosye Applications pou al nan Trash.",
      },
      {
        platform: "android",
        steps:
          "Louvri Play Store, chèche non aplikasyon an, epi klike 'Install'. Pou dezenstale, kenbe ikòn nan sou ekran akèy la epi chwazi 'Uninstall'.",
        illustrationPrompt:
          "A realistic photograph of an Android smartphone screen showing the Google Play Store app page with an install button, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
        illustrationSrc: `${illustrationBase}/installing-and-uninstalling-apps-android.webp`,
      },
      {
        platform: "iphone",
        steps:
          "Louvri App Store, chèche non aplikasyon an, epi tape 'Get'. Pou dezenstale, kenbe ikòn nan sou ekran akèy la epi chwazi 'Remove App'.",
        illustrationPrompt:
          "A realistic photograph of an iPhone screen showing the Apple App Store app page with a Get button, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
        illustrationSrc: `${illustrationBase}/installing-and-uninstalling-apps-iphone.webp`,
      },
    ],
    digitalWords: [
      {
        word: "Magazen Aplikasyon (App Store)",
        definition: "Sit ofisyèl kote ou telechaje aplikasyon pou aparèy ou.",
        example: "Play Store se magazen aplikasyon ofisyèl Android la.",
      },
      {
        word: "Enstale (Install)",
        definition: "Ajoute yon aplikasyon sou aparèy ou pou ka itilize l.",
        example: "Enstale WhatsApp pou kominike ak fanmi ou.",
      },
      {
        word: "Dezenstale (Uninstall)",
        definition: "Retire yon aplikasyon nèt sou aparèy ou.",
        example: "Dezenstale aplikasyon ou pa itilize ankò pou libere plas.",
      },
    ],
    realLifeExample:
      "💡 Si telefòn ou ap mache dousman paske li gen twòp aplikasyon, dezenstale sa ou pa itilize depi plizyè mwa pou libere plas ak amelyore vitès.",
    mistakeWrong:
      "Telechaje aplikasyon soti nan yon lyen oswa sit ki pa magazen ofisyèl la.",
    mistakeCorrect:
      "Telechaje sèlman soti nan Play Store, App Store, oswa Microsoft Store.",
    mistakeWhy:
      "⚠️ Aplikasyon ki soti nan sous ki pa ofisyèl ka gen viris oswa lojisyèl danjere ki vòlè enfòmasyon ou.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou verifye si yon aplikasyon nan magazen an se yon aplikasyon lejitim anvan ou enstale l.",
    aiPrompt:
      "Hi! How can I tell if an app in the app store is legitimate and safe before I install it?",
    mission:
      "🎯 Misyon: chèche yon aplikasyon nan magazen ofisyèl aparèy ou epi gade paj enfòmasyon li san enstale l si ou pa bezwen l.",
    quiz: {
      prompt: "Ki kote ou dwe toujou telechaje aplikasyon?",
      options: [
        "Nenpòt lyen yon moun voye ba ou",
        "Magazen ofisyèl platfòm ou (Play Store, App Store, Microsoft Store)",
        "Yon imèl sispèk",
        "Yon rezo sosyal",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Toujou itilize magazen ofisyèl la.",
      wrongFeedback: "❌ Eseye ankò — panse ak sekirite aplikasyon ou enstale.",
    },
    recap: [
      { emoji: "📲", text: "Chak platfòm gen yon magazen aplikasyon ofisyèl." },
      { emoji: "⬇️", text: "Enstale = ajoute; Dezenstale = retire." },
      { emoji: "🛡️", text: "Telechaje sèlman nan sous ofisyèl." },
      {
        emoji: "🎯",
        text: "Misyon: chèche yon aplikasyon nan magazen ofisyèl la.",
      },
    ],
  },
  {
    slug: "managing-storage",
    moduleTitle: "Modil 7: Aparèy Mobil",
    heroEmoji: "💾",
    heroTitle: "Jere Plas Estokaj",
    heroLede: "Chak aparèy gen yon limit sou konbyen li ka kenbe.",
    goal: "🎯 Objektif: konprann sa ki ranpli estokaj ou epi libere plas.",
    simpleExplanation:
      "**Estokaj** (storage) se plas total aparèy ou ka kenbe: foto, videyo, aplikasyon, ak dokiman. Lè estokaj la prèske plen, aparèy ou ka vin dousman oswa refize telechaje nouvo bagay. Foto ak videyo souvan pran plis plas pase tout rès la.",
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing a storage settings panel with a simple colorful bar chart breaking down storage usage, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/managing-storage.webp`,
    digitalWords: [
      {
        word: "Estokaj (Storage)",
        definition:
          "Plas total aparèy ou ka kenbe fichye, foto, ak aplikasyon.",
        example: "Verifye estokaj ou lè telefòn ap mache dousman.",
      },
      {
        word: "Plas Plen (Storage Full)",
        definition: "Lè aparèy ou pa gen plis plas pou nouvo bagay.",
        example: "Yon mesaj 'plas plen' parèt lè ou eseye pran yon nouvo foto.",
      },
    ],
    realLifeExample:
      "💡 Si telefòn ou refize pran nouvo foto ak yon mesaj 'estokaj plen', ale nan Settings pou wè kisa k ap pran plis plas — souvan se videyo ou pa gade ankò.",
    mistakeWrong:
      "Kenbe tout foto ak videyo sou telefòn nèt, san janm netwaye.",
    mistakeCorrect:
      "Backup ak efase videyo ak foto ou pa bezwen sou aparèy la regilyèman.",
    mistakeWhy:
      "⚠️ Yon aparèy ki plen nèt ka vin dousman, echwe pou fè mizajou, oswa refize pran nouvo foto enpòtan yo.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou verifye ki aplikasyon oswa fichye k ap pran plis plas sou telefòn ou.",
    aiPrompt:
      "Hi! Can you explain how to check what's taking up the most storage space on my phone?",
    mission:
      "🎯 Misyon: verifye konbyen estokaj ou itilize ak konbyen ki rete nan Settings aparèy ou.",
    quiz: {
      prompt: "Kisa ki souvan pran plis plas nan estokaj yon telefòn?",
      options: [
        "Kontak yo",
        "Foto ak videyo",
        "Modpas yo",
        "Non aplikasyon yo",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Foto ak videyo pran plis plas.",
      wrongFeedback: "❌ Eseye ankò — panse ak fichye ki pi gwo yo.",
    },
    recap: [
      { emoji: "💾", text: "Estokaj = plas total aparèy ou ka kenbe." },
      { emoji: "📸", text: "Foto/videyo souvan pran plis plas." },
      { emoji: "🧹", text: "Netwaye regilyèman evite plas plen." },
      { emoji: "🎯", text: "Misyon: verifye estokaj ou itilize." },
    ],
  },
  {
    slug: "photos-and-your-gallery",
    moduleTitle: "Modil 7: Aparèy Mobil",
    heroEmoji: "🖼️",
    heroTitle: "Foto ak Galri Ou",
    heroLede: "Kote tout foto ak videyo telefòn ou rasanble ansanm.",
    goal: "🎯 Objektif: navige, òganize, ak pataje foto nan galri telefòn ou.",
    simpleExplanation:
      "**Galri** (Gallery/Photos) se aplikasyon kote tout foto ak videyo telefòn ou parèt otomatikman, òganize pa dat. Ou ka kreye albòm pou gwoupe foto ki sanble, epi pataje yo dirèkteman ak fanmi ak zanmi.",
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing a photo gallery app with a grid of colorful photo thumbnails, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/photos-and-your-gallery.webp`,
    digitalWords: [
      {
        word: "Galri (Gallery/Photos)",
        definition: "Aplikasyon kote tout foto ak videyo telefòn ou parèt.",
        example: "Louvri Galri pou wè foto ou pran semenn pase.",
      },
      {
        word: "Albòm (Album)",
        definition: "Yon gwoup foto ou mete ansanm sou yon tèm.",
        example: "Kreye yon albòm 'Fèt Anivèsè 2024' pou tout foto sa yo.",
      },
    ],
    realLifeExample:
      "💡 Lè ou pran 100 foto nan yon maryaj, kreye yon albòm apa pou yo, olye de kite yo mele ak tout lòt foto ou yo — pi fasil pou pataje pita.",
    mistakeWrong: "Kite tout foto mele ansanm san okenn albòm, ane apre ane.",
    mistakeCorrect: "Kreye albòm pou moman enpòtan pou jwenn yo pi fasil pita.",
    mistakeWhy:
      "⚠️ San albòm, jwenn foto yon evènman espesifik pami dè milye lòt foto vin difisil ak long.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou kreye yon albòm nan galri telefòn ou epi pataje l ak lòt moun.",
    aiPrompt:
      "Hi! Can you explain how to create a photo album on my phone and share it with family members?",
    mission:
      "🎯 Misyon: kreye yon albòm nan galri telefòn ou epi mete twa foto ladan l.",
    quiz: {
      prompt: "Kisa yon albòm fè pou foto ou yo?",
      options: [
        "Li efase yo otomatikman",
        "Li gwoupe foto ki sanble ansanm sou yon tèm",
        "Li konprese yo",
        "Li voye yo bay tout kontak ou",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Albòm gwoupe foto ki sanble.",
      wrongFeedback: "❌ Eseye ankò — panse ak sa ki fè jwenn foto pi fasil.",
    },
    recap: [
      { emoji: "🖼️", text: "Galri kenbe tout foto/videyo telefòn ou." },
      { emoji: "📁", text: "Albòm gwoupe foto ki sanble." },
      { emoji: "📤", text: "Pataje foto dirèkteman ak fanmi/zanmi." },
      { emoji: "🎯", text: "Misyon: kreye yon albòm ak twa foto." },
    ],
  },
  {
    slug: "messages-and-calls",
    moduleTitle: "Modil 7: Aparèy Mobil",
    heroEmoji: "💬",
    heroTitle: "Mesaj ak Apèl",
    heroLede: "De fason debaz pou rete konekte ak moun ou renmen yo.",
    goal: "🎯 Objektif: voye mesaj tèks epi fè apèl ak konfyans.",
    simpleExplanation:
      "**Mesaj tèks** (SMS) voye yon ti mesaj ekri bay yon lòt telefòn. **Apèl** konekte w vwa-a-vwa ak yon lòt moun. De aplikasyon debaz sa yo egziste sou tout telefòn, separe de aplikasyon tankou WhatsApp ki mande entènèt.",
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing a messaging app conversation thread with speech bubble icons, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/messages-and-calls.webp`,
    digitalWords: [
      {
        word: "Mesaj Tèks (SMS)",
        definition: "Ti mesaj ekri ou voye bay yon lòt telefòn, san entènèt.",
        example: "Voye yon SMS bay yon zanmi pou konfime lè rankont lan.",
      },
      {
        word: "Apèl (Call)",
        definition: "Konvèsasyon vwa-a-vwa ak yon lòt moun sou telefòn.",
        example: "Fè yon apèl bay manman ou pou pran nouvèl li.",
      },
    ],
    realLifeExample:
      "💡 SMS ak apèl regilye mache menm san entènèt, sèlman ak siyal telefòn — itil lè ou pa gen Wi-Fi oswa done disponib.",
    mistakeWrong: "Panse SMS ak apèl mande entènèt tankou WhatsApp.",
    mistakeCorrect:
      "Konprann SMS ak apèl regilye mache ak siyal telefòn, pa entènèt.",
    mistakeWhy:
      "⚠️ Konfonn de sa yo ka fè w panse ou pa ka kominike lè ou pa gen entènèt, alòske SMS/apèl toujou mache.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ki diferans genyen ant yon SMS regilye ak yon mesaj WhatsApp.",
    aiPrompt:
      "Hi! What's the difference between a regular text message (SMS) and a WhatsApp message?",
    mission:
      "🎯 Misyon: voye yon SMS oswa fè yon apèl tès bay yon kontak ou fè konfyans.",
    quiz: {
      prompt: "Kisa SMS ak apèl regilye bezwen pou mache?",
      options: [
        "Wi-Fi sèlman",
        "Siyal telefòn (pa entènèt)",
        "Yon kont Gmail",
        "Yon aplikasyon espesyal",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Yo mache ak siyal telefòn, pa entènèt.",
      wrongFeedback: "❌ Eseye ankò — panse ak diferans ant sa ak WhatsApp.",
    },
    recap: [
      { emoji: "💬", text: "SMS voye mesaj ekri san entènèt." },
      { emoji: "📞", text: "Apèl konekte vwa-a-vwa." },
      { emoji: "📶", text: "Yo mache ak siyal telefòn, pa Wi-Fi." },
      { emoji: "🎯", text: "Misyon: voye yon SMS oswa fè yon apèl tès." },
    ],
  },
  {
    slug: "managing-contacts",
    moduleTitle: "Modil 7: Aparèy Mobil",
    heroEmoji: "👤",
    heroTitle: "Jere Kontak Ou",
    heroLede: "Yon kanè adrès dijital ki kenbe tout moun ou bezwen jwenn.",
    goal: "🎯 Objektif: sovgade, chèche, ak òganize kontak ou.",
    simpleExplanation:
      "**Kontak** yo se kanè adrès dijital telefòn ou — non, nimewo, ak pafwa imèl chak moun ou konnen. Chak fwa ou sovgade yon nouvo nimewo ak yon non, ou pa bezwen sonje l pa kè ankò.",
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing a contacts app list with profile icons and names, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/managing-contacts.webp`,
    digitalWords: [
      {
        word: "Kontak (Contact)",
        definition:
          "Yon antre nan kanè adrès telefòn ou ak non ak nimewo yon moun.",
        example: "Kreye yon kontak pou dòktè ou pou jwenn nimewo l fasil.",
      },
      {
        word: "Sovgade Kontak (Save Contact)",
        definition: "Ajoute yon nouvo moun nan kanè adrès telefòn ou.",
        example: "Sovgade nimewo nouvo zanmi ou apre premye apèl la.",
      },
    ],
    realLifeExample:
      "💡 Si yon moun rele ou epi ou pa sovgade nimewo l, pwochen fwa telefòn ou p ap montre non li — sèlman nimewo a, ki pa itil pou sonje ki moun sa ye.",
    mistakeWrong: "Pa janm sovgade nouvo nimewo, konte sou memwa sèlman.",
    mistakeCorrect:
      "Sovgade chak nouvo kontak imedyatman apre premye kontak la.",
    mistakeWhy:
      "⚠️ San kontak sovgade, ou ka rate apèl enpòtan paske telefòn ou pa rekonèt ki moun k ap rele.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou òganize kontak ou an gwoup (fanmi, travay, zanmi).",
    aiPrompt:
      "Hi! Can you explain how to organize my phone contacts into groups like 'Family', 'Work', and 'Friends'?",
    mission:
      "🎯 Misyon: sovgade yon nouvo kontak nan telefòn ou ak non ak nimewo konplè.",
    quiz: {
      prompt: "Poukisa ou ta dwe sovgade nouvo nimewo yo?",
      options: [
        "Pou aparèy ou mache pi vit",
        "Pou telefòn ou rekonèt ki moun k ap rele pwochen fwa",
        "Pou efase istwa apèl",
        "Li pa nesesè ditou",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sa ede telefòn ou rekonèt moun k ap rele.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak sa ki rive lè ou pa sovgade yon nimewo.",
    },
    recap: [
      { emoji: "👤", text: "Kontak = kanè adrès dijital telefòn ou." },
      { emoji: "💾", text: "Sovgade chak nouvo nimewo imedyatman." },
      { emoji: "👨‍👩‍👧", text: "Ou ka òganize kontak an gwoup." },
      { emoji: "🎯", text: "Misyon: sovgade yon nouvo kontak." },
    ],
  },
  {
    slug: "software-updates",
    moduleTitle: "Modil 7: Aparèy Mobil",
    heroEmoji: "🔄",
    heroTitle: "Mizajou Lojisyèl",
    heroLede:
      "Yon amelyorasyon rejilyè ki kenbe aparèy ou an sekirite ak byen mache.",
    goal: "🎯 Objektif: konprann poukisa mizajou enpòtan epi enstale yo an sekirite.",
    simpleExplanation:
      "Yon **mizajou** (update) se yon nouvo vèsyon lojisyèl aparèy ou (oswa yon aplikasyon) ki ranje bug, amelyore sekirite, epi pafwa ajoute nouvo fonksyon. Enstale mizajou regilyèman kenbe aparèy ou an sekirite kont move moun.",
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing a software update progress screen with a download progress bar, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/software-updates.webp`,
    digitalWords: [
      {
        word: "Mizajou (Update)",
        definition:
          "Yon nouvo vèsyon lojisyèl ki ranje pwoblèm ak amelyore sekirite.",
        example: "Enstale mizajou telefòn ou lè yon notifikasyon parèt.",
      },
      {
        word: "Mizajou Otomatik (Auto-Update)",
        definition:
          "Paramèt ki fè aparèy ou enstale mizajou san ou pa bezwen fè l manyèlman.",
        example: "Aktive mizajou otomatik pou pa janm bliye.",
      },
    ],
    realLifeExample:
      "💡 Move moun jwenn fason pou antre nan telefòn ki gen vye lojisyèl — mizajou regilyèman fèmen pòt sa yo epi kenbe ou an sekirite.",
    mistakeWrong: "Toujou 'ranvwaye' mizajou epi pa janm enstale yo.",
    mistakeCorrect: "Enstale mizajou pi vit posib, sitou mizajou sekirite.",
    mistakeWhy:
      "⚠️ Yon aparèy ki pa mete ajou vin pi vilnerab a viris ak arnak ak tan.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou aktive mizajou otomatik sou telefòn oswa òdinatè ou.",
    aiPrompt:
      "Hi! Can you explain how to turn on automatic software updates on my phone or computer?",
    mission:
      "🎯 Misyon: verifye si gen mizajou ki disponib sou aparèy ou epi enstale l si genyen.",
    quiz: {
      prompt: "Poukisa mizajou enpòtan?",
      options: [
        "Yo fè telefòn ou pi lou",
        "Yo ranje bug epi amelyore sekirite",
        "Yo efase tout kontak ou",
        "Yo pa gen okenn efè",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Mizajou ranje bug ak amelyore sekirite.",
      wrongFeedback: "❌ Eseye ankò — panse ak wòl sekirite mizajou yo.",
    },
    recap: [
      { emoji: "🔄", text: "Mizajou ranje bug ak amelyore sekirite." },
      { emoji: "🛡️", text: "Vye lojisyèl pi vilnerab a viris." },
      { emoji: "⚙️", text: "Aktive mizajou otomatik si posib." },
      { emoji: "🎯", text: "Misyon: enstale yon mizajou ki disponib." },
    ],
  },
  {
    slug: "bluetooth-basics",
    moduleTitle: "Modil 7: Aparèy Mobil",
    heroEmoji: "🔵",
    heroTitle: "Debaz Bluetooth",
    heroLede: "Yon siyal san fil pou distans kout ki konekte aparèy pre ou.",
    goal: "🎯 Objektif: konekte yon aparèy Bluetooth (kouvrichèf, hotspot) ak telefòn ou.",
    simpleExplanation:
      "**Bluetooth** se yon siyal san fil pou distans kout ki konekte de aparèy san entènèt — tankou yon kouvrichèf san fil, yon opalè, oswa yon volan machin. Kontrèman ak Wi-Fi, Bluetooth pa mande yon routè, sèlman de aparèy ki toupre.",
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing a Bluetooth pairing panel with wireless headphones nearby on a table, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/bluetooth-basics.webp`,
    digitalWords: [
      {
        word: "Bluetooth",
        definition:
          "Siyal san fil pou distans kout ki konekte de aparèy san entènèt.",
        example: "Konekte kouvrichèf ou ak telefòn ou pa Bluetooth.",
      },
      {
        word: "Pairing (Kouple)",
        definition: "Aksyon konekte de aparèy Bluetooth pou premye fwa.",
        example: "Fè pairing ak yon opalè Bluetooth nan mezon w.",
      },
    ],
    realLifeExample:
      "💡 Lè ou vle koute mizik san fil ki sòti telefòn ou dirèkteman nan zòrèy ou, konekte yon kouvrichèf pa Bluetooth — san bezwen okenn fil.",
    mistakeWrong: "Kite Bluetooth aktive tout tan menm lè ou pa itilize l.",
    mistakeCorrect: "Etenn Bluetooth lè ou pa itilize l pou ekonomize batri.",
    mistakeWhy:
      "⚠️ Bluetooth aktive san rezon vide batri telefòn ou pi vit san avantaj reyèl.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou fè pairing yon nouvo aparèy Bluetooth ak telefòn ou pou premye fwa.",
    aiPrompt:
      "Hi! Can you explain step by step how to pair new Bluetooth headphones with my phone for the first time?",
    mission:
      "🎯 Misyon: aktive Bluetooth sou aparèy ou epi gade ki aparèy toupre li detekte.",
    quiz: {
      prompt: "Ki diferans genyen ant Bluetooth ak Wi-Fi?",
      options: [
        "Pa gen okenn diferans",
        "Bluetooth konekte aparèy pre ou san routè; Wi-Fi bezwen yon routè",
        "Bluetooth pi rapid pase Wi-Fi toujou",
        "Wi-Fi sèlman pou kouvrichèf",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Bluetooth pa bezwen yon routè.",
      wrongFeedback: "❌ Eseye ankò — panse ak wòl yon routè.",
    },
    recap: [
      { emoji: "🔵", text: "Bluetooth konekte aparèy pre ou san entènèt." },
      { emoji: "🎧", text: "Itil pou kouvrichèf, opalè, elatriye." },
      { emoji: "🔋", text: "Etenn li lè ou pa itilize l pou sove batri." },
      {
        emoji: "🎯",
        text: "Misyon: aktive Bluetooth epi detekte aparèy toupre.",
      },
    ],
  },
  {
    slug: "mobile-hotspot",
    moduleTitle: "Modil 7: Aparèy Mobil",
    heroEmoji: "📡",
    heroTitle: "Hotspot Mobil",
    heroLede: "Transfòme telefòn ou an yon ti routè Wi-Fi pòtatif.",
    goal: "🎯 Objektif: pataje entènèt telefòn ou ak yon lòt aparèy.",
    simpleExplanation:
      "Yon **hotspot mobil** transfòme done selilè telefòn ou an yon siyal Wi-Fi ke lòt aparèy (yon laptòp, yon lòt telefòn) ka konekte sou li. Itil lè ou gen entènèt sou telefòn ou men pa gen Wi-Fi disponib pou lòt aparèy la.",
    illustrationPrompt:
      "A realistic photograph of a smartphone displaying a mobile hotspot settings toggle screen next to a laptop, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/mobile-hotspot.webp`,
    platformExamples: [
      {
        platform: "android",
        steps:
          "Ale nan Settings > Network & Internet > Hotspot & Tethering, aktive 'Wi-Fi Hotspot', epi itilize modpas ki parèt pou konekte lòt aparèy la.",
      },
      {
        platform: "iphone",
        steps:
          "Ale nan Settings > Personal Hotspot, aktive l, epi itilize modpas ki parèt pou konekte lòt aparèy la.",
      },
    ],
    digitalWords: [
      {
        word: "Hotspot Mobil (Mobile Hotspot)",
        definition:
          "Fonksyon ki pataje done selilè telefòn ou kòm Wi-Fi ak lòt aparèy.",
        example: "Aktive hotspot lè laptòp ou pa gen Wi-Fi disponib.",
      },
      {
        word: "Tethering",
        definition:
          "Yon lòt non pou pataje entènèt telefòn ou ak yon lòt aparèy.",
        example: "Tethering itil lè ou vwayaje san Wi-Fi lakay ou.",
      },
    ],
    realLifeExample:
      "💡 Si ou nan yon kote ki pa gen Wi-Fi men ou bezwen itilize laptòp ou pou yon rezon ijan, aktive hotspot telefòn ou pou konekte laptòp la sou entènèt telefòn ou.",
    mistakeWrong:
      "Kite hotspot aktive tout tan san sèvi ak li, oswa itilize l san limit.",
    mistakeCorrect:
      "Etenn hotspot lè ou fini itilize l, epi swiv itilizasyon done ou pandan ou konekte.",
    mistakeWhy:
      "⚠️ Hotspot itilize done selilè ou vit, sitou pou aktivite tankou videyo — sa ka fini done mwa a byen vit.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou pwoteje hotspot ou ak yon bon modpas pou moun etranj pa konekte san pèmisyon.",
    aiPrompt:
      "Hi! How do I make sure my mobile hotspot has a strong password so strangers can't connect to it without permission?",
    mission:
      "🎯 Misyon: aktive hotspot telefòn ou epi verifye ki modpas li itilize.",
    quiz: {
      prompt: "Kisa yon hotspot mobil fè?",
      options: [
        "Li chaje batri telefòn ou",
        "Li pataje entènèt telefòn ou kòm Wi-Fi ak lòt aparèy",
        "Li efase istwa navigasyon",
        "Li konekte w sou Bluetooth",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Hotspot pataje entènèt telefòn ou.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak sa ki rive lè laptòp pa gen Wi-Fi.",
    },
    recap: [
      { emoji: "📡", text: "Hotspot pataje entènèt telefòn kòm Wi-Fi." },
      { emoji: "💻", text: "Itil lè lòt aparèy pa gen Wi-Fi." },
      { emoji: "📊", text: "Itilize done selilè vit — swiv itilizasyon." },
      { emoji: "🎯", text: "Misyon: aktive epi verifye hotspot ou." },
    ],
  },
  {
    slug: "settings-tour",
    moduleTitle: "Modil 7: Aparèy Mobil",
    heroEmoji: "⚙️",
    heroTitle: "Yon Vizit nan Settings",
    heroLede:
      "Aplikasyon ki kontwole tout lòt aplikasyon ak fonksyon aparèy ou.",
    goal: "🎯 Objektif: navige nan Settings telefòn ou ak konfyans.",
    simpleExplanation:
      "**Settings** se aplikasyon santral kote ou kontwole tout bagay sou telefòn ou: Wi-Fi, Bluetooth, notifikasyon, sekirite, ak plis ankò. Li ka sanble konplike premye fwa, men li toujou òganize an kategori klè.",
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing a settings app menu with various category icons like Wi-Fi, sound, and display, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/settings-tour.webp`,
    digitalWords: [
      {
        word: "Settings",
        definition:
          "Aplikasyon santral kote ou kontwole tout paramèt aparèy ou.",
        example: "Ale nan Settings pou chanje modpas Wi-Fi ou wè.",
      },
      {
        word: "Kategori (Category)",
        definition: "Yon gwoup paramèt ki sanble ansanm nan Settings.",
        example: "'Sound' se yon kategori ki gen tout paramèt son.",
      },
    ],
    realLifeExample:
      "💡 Si ou pa konnen ki kote pou jwenn yon paramèt espesifik, itilize bawo rechèch anndan Settings la — tape yon mo kle epi li mennen w dirèkteman la.",
    mistakeWrong: "Evite antre nan Settings paske li sanble twò konplike.",
    mistakeCorrect:
      "Eksplore Settings piti piti — chak kategori gen yon rezon klè pou egziste.",
    mistakeWhy:
      "⚠️ Anpil pwoblèm kouran (son ki ba, notifikasyon ki twòp) gen yon solisyon senp nan Settings, si ou pa pè eksplore l.",
    aiExplanation:
      "🤖 Ou ka mande yon AI eksplike sa yon kategori espesifik nan Settings fè si ou pa sèten.",
    aiPrompt:
      "Hi! Can you explain what the 'Accessibility' section in phone Settings is for?",
    mission:
      "🎯 Misyon: louvri Settings epi eksplore twa kategori diferan pou wè sa yo genyen.",
    quiz: {
      prompt: "Kisa ou ka fè si ou pa jwenn yon paramèt nan Settings?",
      options: [
        "Bay legen",
        "Itilize bawo rechèch anndan Settings la",
        "Dezenstale aplikasyon an",
        "Restat telefòn nan",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Bawo rechèch la mennen w dirèkteman.",
      wrongFeedback: "❌ Eseye ankò — panse ak yon zouti anndan Settings.",
    },
    recap: [
      { emoji: "⚙️", text: "Settings kontwole tout paramèt aparèy ou." },
      { emoji: "🗂️", text: "Òganize an kategori klè." },
      { emoji: "🔍", text: "Itilize rechèch anndan Settings si ou pèdi." },
      { emoji: "🎯", text: "Misyon: eksplore twa kategori nan Settings." },
    ],
  },
  {
    slug: "file-sharing-between-devices",
    moduleTitle: "Modil 7: Aparèy Mobil",
    heroEmoji: "📤",
    heroTitle: "Pataje Fichye Ant Aparèy",
    heroLede:
      "Voye yon foto oswa fichye bay yon moun toupre ou san email oswa done.",
    goal: "🎯 Objektif: pataje fichye ant aparèy san entènèt oswa email.",
    simpleExplanation:
      "**AirDrop** (iPhone/Mac) ak **Nearby Share** (Android) kite w voye foto oswa fichye dirèkteman bay yon aparèy toupre ou, san entènèt ni email. Ou ka tou voye fichye pa WhatsApp si moun nan pa toupre ou fizikman.",
    illustrationPrompt:
      "A realistic photograph of two smartphones close together with a subtle visual sharing effect between them, symbolizing wireless file transfer, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/file-sharing-between-devices.webp`,
    platformExamples: [
      {
        platform: "android",
        steps:
          "Chwazi foto/fichye a, tape 'Pataje' (Share), chwazi 'Nearby Share', epi chwazi aparèy toupre ou.",
        illustrationPrompt:
          "A realistic photograph of an Android smartphone screen showing the Nearby Share sharing panel with nearby device icons, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
        illustrationSrc: `${illustrationBase}/file-sharing-between-devices-android.webp`,
      },
      {
        platform: "iphone",
        steps:
          "Chwazi foto/fichye a, tape bouton Pataje (kare ak flèch anwo), chwazi 'AirDrop', epi tape sou moun toupre ou.",
        illustrationPrompt:
          "A realistic photograph of an iPhone screen showing the AirDrop sharing panel with nearby contact icons, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
        illustrationSrc: `${illustrationBase}/file-sharing-between-devices-iphone.webp`,
      },
    ],
    digitalWords: [
      {
        word: "AirDrop",
        definition:
          "Zouti Apple pou pataje fichye ant iPhone/Mac toupre, san entènèt.",
        example: "Voye yon foto bay yon zanmi pa AirDrop nan yon rankont.",
      },
      {
        word: "Nearby Share",
        definition: "Zouti Android pou pataje fichye ak aparèy Android toupre.",
        example: "Itilize Nearby Share pou voye yon videyo bay yon kolèg.",
      },
    ],
    realLifeExample:
      "💡 Si ou ak yon zanmi toude gen iPhone epi nou nan menm pyès, voye foto rankont lan pa AirDrop pran sèlman kèk segonn — pi rapid pase voye pa imèl.",
    mistakeWrong:
      "Voye chak foto pa email oswa WhatsApp menm lè moun nan toupre ou.",
    mistakeCorrect:
      "Itilize AirDrop oswa Nearby Share lè moun nan toupre ou fizikman — pi rapid ak pa itilize done.",
    mistakeWhy:
      "⚠️ Voye pa email/WhatsApp itilize entènèt ak done san rezon lè yon transfè dirèk san fil ta pi rapid ak pi fasil.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ki diferans genyen ant AirDrop, Nearby Share, ak voye fichye pa WhatsApp.",
    aiPrompt:
      "Hi! What's the difference between AirDrop, Nearby Share, and just sending a file through WhatsApp? When should I use each one?",
    mission:
      "🎯 Misyon: pataje yon foto ak yon moun toupre ou lè l pa AirDrop, Nearby Share, oswa WhatsApp.",
    quiz: {
      prompt:
        "Ki avantaj AirDrop/Nearby Share genyen sou email pou pataje ak yon moun toupre ou?",
      options: [
        "Yo pi rapid epi pa itilize done",
        "Yo sèlman mache pou videyo",
        "Yo mande yon kont Gmail",
        "Yo pi dousman pase email",
      ],
      correctIndex: 0,
      correctFeedback: "✅ Wi! Pi rapid epi san done, lè moun nan toupre ou.",
      wrongFeedback: "❌ Eseye ankò — panse ak vitès ak done itilize.",
    },
    recap: [
      {
        emoji: "📤",
        text: "AirDrop (Apple) ak Nearby Share (Android) pataje fichye toupre.",
      },
      { emoji: "⚡", text: "Pi rapid pase email, san itilize done." },
      { emoji: "💬", text: "WhatsApp itil si moun nan pa toupre ou fizikman." },
      { emoji: "🎯", text: "Misyon: pataje yon foto ak yon moun toupre ou." },
    ],
  },
  {
    slug: "mobile-backups",
    moduleTitle: "Modil 7: Aparèy Mobil",
    heroEmoji: "☁️",
    heroTitle: "Backup Telefòn Ou",
    heroLede:
      "Yon dezyèm kopi tout sa ki sou telefòn ou, an sekirite nan cloud la.",
    goal: "🎯 Objektif: aktive backup otomatik pou telefòn ou.",
    simpleExplanation:
      "Yon **backup telefòn** sovgade foto, kontak, ak paramèt ou nan cloud la (iCloud pou iPhone, Google pou Android). Si telefòn ou pèdi, vòle, oswa kraze, ou ka jwenn tout bagay ankò sou yon nouvo telefòn.",
    illustrationPrompt:
      "A realistic photograph symbolizing automatic phone backup — a smartphone with a subtle upward arrow light effect suggesting data syncing to the cloud, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/mobile-backups.webp`,
    platformExamples: [
      {
        platform: "android",
        steps:
          "Ale nan Settings > Google > Backup, epi aktive 'Backup by Google One' pou sovgade foto, kontak, ak paramèt otomatikman.",
      },
      {
        platform: "iphone",
        steps:
          "Ale nan Settings > [non ou] > iCloud > iCloud Backup, epi aktive l pou sovgade telefòn ou otomatikman.",
      },
    ],
    digitalWords: [
      {
        word: "Backup Telefòn (Phone Backup)",
        definition: "Yon kopi tout done telefòn ou, sovgade nan cloud la.",
        example: "Backup telefòn ou pwoteje foto si li pèdi.",
      },
      {
        word: "iCloud / Google Backup",
        definition:
          "Sèvis cloud Apple (iCloud) ak Google ki fè backup otomatik.",
        example: "iCloud sovgade tout foto iPhone ou otomatikman.",
      },
    ],
    realLifeExample:
      "💡 Si telefòn ou tonbe nan dlo epi li kraze nèt, men backup te aktive, ou ka jwenn tout foto ak kontak ou ankò sou yon nouvo telefòn — san pèt.",
    mistakeWrong:
      "Panse foto ou an sekirite paske yo 'sou telefòn' san backup aktive.",
    mistakeCorrect:
      "Aktive backup otomatik pou pwoteje kont pèt, vòl, oswa kraze aparèy.",
    mistakeWhy:
      "⚠️ San backup, si telefòn ou pèdi oswa kraze, tout foto ak kontak ka disparèt pou tout bon.",
    aiExplanation:
      "🤖 Ou ka mande yon AI verifye si backup telefòn ou aktive kounye a epi ki lè dènye backup te fèt.",
    aiPrompt:
      "Hi! Can you explain how to check if my phone's automatic backup is turned on, and when my last backup happened?",
    mission:
      "🎯 Misyon: verifye si backup otomatik aktive sou telefòn ou, epi limen l si li pa aktive.",
    quiz: {
      prompt: "Kisa ki rive foto ou si telefòn ou pèdi men backup te aktive?",
      options: [
        "Yo disparèt pou tout bon",
        "Ou ka jwenn yo ankò sou yon nouvo telefòn",
        "Yo tounen an PDF",
        "Yo ale nan Spam",
      ],
      correctIndex: 1,
      correctFeedback:
        "✅ Wi! Backup pwoteje foto ou menm si telefòn lan pèdi.",
      wrongFeedback: "❌ Eseye ankò — panse ak rezon backup egziste.",
    },
    recap: [
      { emoji: "☁️", text: "Backup sovgade done telefòn ou nan cloud la." },
      { emoji: "📱", text: "iCloud (iPhone) ak Google Backup (Android)." },
      { emoji: "🛡️", text: "Pwoteje kont pèt, vòl, oswa kraze aparèy." },
      { emoji: "🎯", text: "Misyon: verifye backup otomatik telefòn ou." },
    ],
  },
  {
    slug: "mobile-devices-mission",
    moduleTitle: "Modil 7: Aparèy Mobil",
    heroEmoji: "🏆",
    heroTitle: "Misyon: Aparèy Mobil",
    heroLede:
      "Konbine tout konpetans Modil 7 pou jwenn plis nan telefòn ou chak jou.",
    goal: "🎯 Objektif: jwenn plis nan Android oswa iPhone ou chak jou.",
    simpleExplanation:
      "Ou fèk aprann: enstale/dezenstale aplikasyon, jere estokaj, foto/galri, mesaj/apèl, kontak, mizajou, Bluetooth, hotspot, Settings, pataje fichye, ak backup. Misyon sa a mande w konbine plizyè nan konpetans sa yo.",
    illustrationPrompt:
      "A realistic photograph of a person confidently using a smartphone in a bright everyday setting, warm natural lighting, professional lifestyle photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/mobile-devices-mission.webp`,
    digitalWords: [
      {
        word: "Metriz Aparèy Mobil",
        definition:
          "Kapasite pou jwenn plis nan yon telefòn Android oswa iPhone chak jou.",
        example: "Metriz aparèy mobil ede w rete konekte san estrès.",
      },
    ],
    realLifeExample:
      "💡 Yon moun ki metrize telefòn li jere estokaj li byen, backup done li, epi pataje fichye rapid san depann sou lòt moun pou ede l.",
    mistakeWrong:
      "Panse ou dwe konnen tout fonksyon telefòn ou anvan ou vin konfyan.",
    mistakeCorrect:
      "Konprann konpetans debaz sa yo ase pou kòmanse ak konfyans — rès la vin natirèl ak pratik.",
    mistakeWhy:
      "⚠️ Atann pèfeksyon anvan ou eksplore telefòn ou anpeche w dekouvri fonksyon itil ki deja la.",
    aiExplanation:
      "🤖 Kounye a ou ka mande yon AI konsèy sou kijan pou kontinye aprann sou telefòn espesifik ou (Android oswa iPhone).",
    aiPrompt:
      "Hi! I just learned the basics of using my phone (apps, storage, photos, backups, file sharing). What should I focus on learning next?",
    mission:
      "🎯 Misyon Final Modil 7: verifye backup ou, libere plas si nesesè, epi pataje yon foto ak yon moun toupre ou.",
    quiz: {
      prompt: "Ki objektif prensipal Modil 7 la?",
      options: [
        "Vin yon enjenyè telefòn",
        "Jwenn plis nan Android oswa iPhone ou chak jou",
        "Memorize tout aplikasyon ki egziste",
        "Efase tout kontak chak jou",
      ],
      correctIndex: 1,
      correctFeedback:
        "✅ Wi! Objektif la se jwenn plis nan telefòn ou chak jou.",
      wrongFeedback: "❌ Eseye ankò — repase objektif Modil 7 la.",
    },
    recap: [
      { emoji: "📲", text: "Enstale/dezenstale aplikasyon, jere estokaj." },
      { emoji: "🖼️", text: "Foto/galri, mesaj/apèl, kontak, mizajou." },
      { emoji: "📤", text: "Bluetooth, hotspot, pataje fichye, backup." },
      { emoji: "🎓", text: "Ou fini Modil 7 — Aparèy Mobil!" },
    ],
  },
  {
    slug: "google-drive",
    moduleTitle: "Modil 8: Ekosistèm Google",
    heroEmoji: "🗄️",
    heroTitle: "Google Drive",
    heroLede: "Yon disk dou gratis ki viv nan cloud la, pa sou aparèy ou.",
    goal: "🎯 Objektif: sovgade ak pataje fichye ak Google Drive.",
    simpleExplanation:
      "**Google Drive** se yon sèvis cloud gratis kote ou sovgade fichye (dokiman, foto, PDF) pou jwenn yo sou nenpòt aparèy, kèlkeswa kote ou ye. Chak kont Gmail vin ak Drive otomatikman, ak espas gratis pou kòmanse.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a cloud storage file browser interface with colorful file and folder icons, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/google-drive.webp`,
    digitalWords: [
      {
        word: "Google Drive",
        definition: "Sèvis cloud gratis Google pou sovgade ak pataje fichye.",
        example: "Sovgade CV ou nan Drive pou jwenn li sou nenpòt aparèy.",
      },
      {
        word: "Pataje (Share)",
        definition:
          "Bay yon lòt moun aksè pou wè oswa modifye yon fichye Drive.",
        example: "Pataje yon dokiman ak yon kolèg pou travay ansanm.",
      },
    ],
    realLifeExample:
      "💡 Si ou sovgade yon dokiman nan Google Drive sou telefòn ou, ou ka louvri menm dokiman an sou òdinatè yon zanmi — li rete menm kote, sou nenpòt aparèy.",
    mistakeWrong:
      "Sovgade fichye enpòtan sèlman sou yon sèl aparèy, san backup.",
    mistakeCorrect:
      "Sovgade fichye enpòtan nan Google Drive pou jwenn yo kèlkeswa aparèy.",
    mistakeWhy:
      "⚠️ Si aparèy ou pèdi oswa kraze san fichye yo sou Drive, ou ka pèdi dokiman enpòtan pou tout bon.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou pataje yon fichye Drive ak yon moun ki ka wè l sèlman, san modifye l.",
    aiPrompt:
      "Hi! Can you explain how to share a Google Drive file with someone so they can only view it, not edit it?",
    mission:
      "🎯 Misyon: telechaje yon fichye nan Google Drive ou (oswa kreye yon nouvo dosye ladan l).",
    quiz: {
      prompt: "Ki avantaj prensipal Google Drive bay ou?",
      options: [
        "Li efase fichye ou otomatikman",
        "Ou jwenn fichye ou sou nenpòt aparèy, kèlkeswa kote ou ye",
        "Li sèlman mache sou telefòn",
        "Li konprese foto ou",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Drive kite w jwenn fichye ou toupatou.",
      wrongFeedback: "❌ Eseye ankò — panse ak avantaj cloud la.",
    },
    recap: [
      { emoji: "🗄️", text: "Drive = sèvis cloud gratis pou fichye ou." },
      { emoji: "🔗", text: "Vin ak chak kont Gmail otomatikman." },
      { emoji: "📤", text: "Pataje fichye fasil ak lòt moun." },
      {
        emoji: "🎯",
        text: "Misyon: telechaje oswa kreye yon dosye nan Drive.",
      },
    ],
  },
  {
    slug: "google-docs",
    moduleTitle: "Modil 8: Ekosistèm Google",
    heroEmoji: "📄",
    heroTitle: "Google Docs",
    heroLede: "Yon dokiman ki sovgade tèt li chak segonn, san ou pa fè anyen.",
    goal: "🎯 Objektif: ekri ak pataje yon dokiman ak Google Docs.",
    simpleExplanation:
      "**Google Docs** se yon aplikasyon pou ekri dokiman (tankou Word) ki mache dirèkteman nan navigatè a — pa gen bezwen enstale anyen. Li **sovgade otomatikman** pandan ou ap ekri, epi plizyè moun ka modifye menm dokiman an an menm tan.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a word processing document editor with a cursor and paragraph text, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/google-docs.webp`,
    digitalWords: [
      {
        word: "Google Docs",
        definition: "Aplikasyon gratis Google pou ekri dokiman nan navigatè a.",
        example: "Ekri yon lèt aplikasyon djòb nan Google Docs.",
      },
      {
        word: "Sovgad Otomatik (Auto-Save)",
        definition:
          "Fonksyon ki sovgade travay ou san ou pa bezwen klike anyen.",
        example: "Sovgad otomatik anpeche w pèdi travay si Wi-Fi la koupe.",
      },
    ],
    realLifeExample:
      "💡 Kontrèman ak Word tradisyonèl, si telefòn ou touye oswa navigatè a fèmen pa aksidan, ou pa pèdi travay ou nan Google Docs — li te deja sovgade otomatikman.",
    mistakeWrong:
      "Chèche yon bouton 'Save' nan Google Docs paske ou abitye ak Word.",
    mistakeCorrect:
      "Konprann Google Docs sovgade otomatikman — pa gen bezwen chèche bouton Save.",
    mistakeWhy:
      "⚠️ Pèdi tan chèche yon bouton ki pa egziste, oswa panike lè ou pa wè l, se konfizyon komen pou moun ki fèk sòti nan Word.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou telechaje yon dokiman Google Docs an PDF oswa Word si ou bezwen l an fòma sa.",
    aiPrompt:
      "Hi! Can you explain how to download a Google Docs document as a PDF or Word file?",
    mission:
      "🎯 Misyon: kreye yon nouvo dokiman nan Google Docs epi ekri yon ti paragraf tès.",
    quiz: {
      prompt: "Kilè Google Docs sovgade travay ou?",
      options: [
        "Sèlman lè ou klike Save",
        "Otomatikman, pandan ou ap ekri",
        "Sèlman lè ou fèmen dokiman an",
        "Jamè, ou dwe telechaje l chak fwa",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Li sovgade otomatikman pandan ou ekri.",
      wrongFeedback: "❌ Eseye ankò — panse ak avantaj sovgad otomatik.",
    },
    recap: [
      { emoji: "📄", text: "Google Docs mache dirèkteman nan navigatè a." },
      { emoji: "💾", text: "Sovgad otomatik pandan ou ap ekri." },
      { emoji: "👥", text: "Plizyè moun ka modifye an menm tan." },
      { emoji: "🎯", text: "Misyon: kreye yon nouvo dokiman tès." },
    ],
  },
  {
    slug: "google-sheets",
    moduleTitle: "Modil 8: Ekosistèm Google",
    heroEmoji: "📊",
    heroTitle: "Google Sheets",
    heroLede: "Fèy kalkil gratis pou swiv nimewo, lis, ak bidjè.",
    goal: "🎯 Objektif: kreye yon fèy kalkil senp ak Google Sheets.",
    simpleExplanation:
      "**Google Sheets** se yon aplikasyon fèy kalkil (tankou Excel) ki òganize enfòmasyon an ranje ak kolòn. Li itil pou bidjè, lis envantè, oswa nenpòt bagay ki mande kalkile oswa konte.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a spreadsheet application with rows, columns, and a simple colorful bar chart, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/google-sheets.webp`,
    digitalWords: [
      {
        word: "Google Sheets",
        definition: "Aplikasyon gratis Google pou fèy kalkil ak tablo.",
        example: "Swiv bidjè fanmi ou nan yon fèy Google Sheets.",
      },
      {
        word: "Selil (Cell)",
        definition:
          "Yon ti bwat nan fèy kalkil kote ou antre yon valè oswa tèks.",
        example: "Antre '500' nan yon selil pou reprezante yon depans.",
      },
    ],
    realLifeExample:
      "💡 Si ou vann pwodwi nan yon ti biznis, itilize Google Sheets pou swiv envantè ou — konbyen ou vann, konbyen ki rete, ak konbyen lajan ou fè.",
    mistakeWrong:
      "Kalkile bidjè oswa lis konplèks manyèlman sou papye chak fwa.",
    mistakeCorrect:
      "Itilize Google Sheets pou fè kalkil otomatik ak kenbe done òganize.",
    mistakeWhy:
      "⚠️ Kalkil manyèl pran plis tan e li fasil pou fè erè — Sheets fè kalkil yo pou ou otomatikman.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou kreye yon fòmil senp nan Google Sheets pou adisyone yon kolòn nimewo.",
    aiPrompt:
      "Hi! Can you explain how to write a simple formula in Google Sheets to add up a column of numbers?",
    mission:
      "🎯 Misyon: kreye yon fèy kalkil senp nan Google Sheets ak twa ranje enfòmasyon.",
    quiz: {
      prompt: "Ki sitiyasyon Google Sheets itil pi plis?",
      options: [
        "Ekri yon lèt long",
        "Swiv nimewo, lis, oswa yon bidjè",
        "Fè yon apèl videyo",
        "Pran yon nòt kout",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sheets fèt pou nimewo ak lis.",
      wrongFeedback: "❌ Eseye ankò — panse ak sitiyasyon ki mande kalkile.",
    },
    recap: [
      { emoji: "📊", text: "Sheets = fèy kalkil gratis pou nimewo/lis." },
      { emoji: "🔢", text: "Selil kenbe chak valè endividyèl." },
      { emoji: "🧮", text: "Fè kalkil otomatik ak fòmil." },
      { emoji: "🎯", text: "Misyon: kreye yon fèy kalkil senp." },
    ],
  },
  {
    slug: "google-slides",
    moduleTitle: "Modil 8: Ekosistèm Google",
    heroEmoji: "🖥️",
    heroTitle: "Google Slides",
    heroLede:
      "Prezantasyon pwofesyonèl ou ka bati epi montre soti nenpòt aparèy.",
    goal: "🎯 Objektif: kreye yon prezantasyon senp ak Google Slides.",
    simpleExplanation:
      "**Google Slides** se yon aplikasyon prezantasyon (tankou PowerPoint) ki kite w kreye 'diapositiv' (slides) ak tèks, imaj, ak grafik. Ou ka montre l dirèkteman soti nan navigatè a, san bezwen enstale yon lojisyèl espesyal.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a presentation slide editor with a title slide and thumbnail slides on the side, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/google-slides.webp`,
    digitalWords: [
      {
        word: "Google Slides",
        definition: "Aplikasyon gratis Google pou kreye prezantasyon.",
        example: "Kreye yon prezantasyon pou pitch yon ti biznis.",
      },
      {
        word: "Diapositiv (Slide)",
        definition: "Yon sèl paj nan yon prezantasyon.",
        example: "Chak diapositiv gen yon ide oswa pwen prensipal.",
      },
    ],
    realLifeExample:
      "💡 Si ou dwe prezante yon ide biznis bay yon envestisè, kreye yon prezantasyon Google Slides ke ou ka montre dirèkteman soti nan telefòn oswa laptòp ou.",
    mistakeWrong:
      "Mete twòp tèks sou yon sèl diapositiv, san espas pou respire.",
    mistakeCorrect:
      "Kenbe chak diapositiv senp ak yon sèl ide prensipal, ak plis imaj pase tèks.",
    mistakeWhy:
      "⚠️ Yon diapositiv ki twò chaje ak tèks fè odyans lan li olye de koute w — mwens tèks ede yo konsantre sou vwa ou.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ede w òganize plan yon prezantasyon senp sou yon sijè espesifik.",
    aiPrompt:
      "Hi! Can you help me outline a simple 5-slide presentation about starting a small business?",
    mission:
      "🎯 Misyon: kreye yon prezantasyon Google Slides ak twa diapositiv sou yon sijè ou chwazi.",
    quiz: {
      prompt: "Kisa ki fè yon diapositiv efikas?",
      options: [
        "Anpil tèks sou chak paj",
        "Yon sèl ide prensipal ak mwens tèks",
        "Okenn imaj ditou",
        "Koulè nwa sèlman",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Senp ak yon sèl ide fonksyone pi byen.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak sa ki kenbe atansyon odyans lan.",
    },
    recap: [
      { emoji: "🖥️", text: "Slides = aplikasyon gratis pou prezantasyon." },
      { emoji: "📑", text: "Chak diapositiv gen yon sèl ide prensipal." },
      { emoji: "🎨", text: "Plis imaj, mwens tèks, pi efikas." },
      {
        emoji: "🎯",
        text: "Misyon: kreye yon prezantasyon ak twa diapositiv.",
      },
    ],
  },
  {
    slug: "google-calendar",
    moduleTitle: "Modil 8: Ekosistèm Google",
    heroEmoji: "📅",
    heroTitle: "Google Calendar",
    heroLede: "Yon ajanda dijital ki raple w sa ki gen tan pou rive.",
    goal: "🎯 Objektif: kreye yon evènman ak resevwa yon rapèl.",
    simpleExplanation:
      "**Google Calendar** se yon ajanda dijital kote ou kreye evènman (rankont, randevou, anivèsè) ak yon dat ak lè. Li ka voye w yon **rapèl** anvan evènman an, sou telefòn oswa imèl, pou ou pa janm bliye.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a monthly calendar view with a few colorful event blocks, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/google-calendar.webp`,
    digitalWords: [
      {
        word: "Evènman (Event)",
        definition: "Yon antre nan kalandriye ou ak dat, lè, ak deskripsyon.",
        example: "Kreye yon evènman pou randevou dòktè ou jedi pwochen.",
      },
      {
        word: "Rapèl (Reminder)",
        definition: "Yon notifikasyon ki voye ba ou anvan yon evènman rive.",
        example: "Mete yon rapèl 1 èdtan anvan randevou a.",
      },
    ],
    realLifeExample:
      "💡 Si ou toujou bliye randevou dòktè, kreye yo nan Google Calendar ak yon rapèl 1 jou anvan — telefòn ou va sonje pou ou.",
    mistakeWrong:
      "Kenbe tout randevou nan tèt ou san okenn kalandriye dijital.",
    mistakeCorrect:
      "Kreye chak evènman enpòtan nan Google Calendar ak yon rapèl.",
    mistakeWhy:
      "⚠️ Memwa moun fasil bliye — yon kalandriye dijital ak rapèl anpeche w rate randevou enpòtan.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou kreye yon evènman ki repete chak semèn nan Google Calendar.",
    aiPrompt:
      "Hi! Can you explain how to create a weekly recurring event in Google Calendar, like a class that happens every Monday?",
    mission:
      "🎯 Misyon: kreye yon evènman nan Google Calendar ak yon rapèl ki gen sans pou ou.",
    quiz: {
      prompt: "Kisa yon rapèl fè nan Google Calendar?",
      options: [
        "Li efase evènman an",
        "Li voye yon notifikasyon anvan evènman an rive",
        "Li kreye yon nouvo dokiman",
        "Li konekte w sou Wi-Fi",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Rapèl notifye w anvan evènman an.",
      wrongFeedback: "❌ Eseye ankò — panse ak sa ki anpeche w bliye.",
    },
    recap: [
      { emoji: "📅", text: "Calendar = ajanda dijital pou evènman ou." },
      { emoji: "🔔", text: "Rapèl notifye w anvan yon evènman rive." },
      { emoji: "🔁", text: "Ou ka kreye evènman ki repete." },
      { emoji: "🎯", text: "Misyon: kreye yon evènman ak yon rapèl." },
    ],
  },
  {
    slug: "google-maps",
    moduleTitle: "Modil 8: Ekosistèm Google",
    heroEmoji: "🗺️",
    heroTitle: "Google Maps",
    heroLede: "Yon gid ki mennen w kèlkeswa kote ou vle ale.",
    goal: "🎯 Objektif: chèche yon kote ak jwenn direksyon ak Google Maps.",
    simpleExplanation:
      "**Google Maps** se yon aplikasyon kat ki montre w kote ou ye, jwenn nenpòt kote ou chèche, epi bay direksyon etap pa etap pou rive la — apye, an machin, oswa an transpò piblik.",
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing a navigation map app with a route line and location pin, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/google-maps.webp`,
    digitalWords: [
      {
        word: "Google Maps",
        definition: "Aplikasyon kat pou jwenn kote ak direksyon.",
        example: "Chèche 'famasi pi pre' nan Google Maps.",
      },
      {
        word: "Direksyon (Directions)",
        definition: "Etap pa etap pou rive nan yon destinasyon.",
        example: "Jwenn direksyon apye pou rive nan mache a.",
      },
    ],
    realLifeExample:
      "💡 Si ou dwe rive yon kote pou premye fwa, tape adrès la nan Google Maps epi swiv vwa a ki gide w etap pa etap, menm jan ak yon moun ki nan machin nan avè w.",
    mistakeWrong:
      "Eseye jwenn yon kote nouvo san itilize okenn kat, sèlman souvni.",
    mistakeCorrect:
      "Itilize Google Maps pou jwenn direksyon egzat epi evite pèdi tan.",
    mistakeWhy:
      "⚠️ Depann sèlman sou souvni pou yon kote nouvo ka fè w pèdi tan ak fristre — Maps bay direksyon egzat an tan reyèl.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou telechaje yon zòn nan Google Maps pou itilize l san entènèt.",
    aiPrompt:
      "Hi! Can you explain how to download an area of Google Maps so I can use it without an internet connection?",
    mission:
      "🎯 Misyon: chèche yon kote nan Google Maps epi jwenn direksyon pou rive la.",
    quiz: {
      prompt: "Kisa Google Maps ede w fè?",
      options: [
        "Ekri dokiman",
        "Jwenn kote ak direksyon pou rive la",
        "Voye imèl",
        "Kreye prezantasyon",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Maps jwenn kote ak bay direksyon.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak objektif prensipal aplikasyon an.",
    },
    recap: [
      { emoji: "🗺️", text: "Maps montre kote ou ye epi jwenn lòt kote." },
      { emoji: "🧭", text: "Direksyon etap pa etap pou rive la." },
      { emoji: "📴", text: "Ou ka telechaje zòn pou itilize san entènèt." },
      { emoji: "🎯", text: "Misyon: jwenn direksyon pou yon kote." },
    ],
  },
  {
    slug: "google-photos",
    moduleTitle: "Modil 8: Ekosistèm Google",
    heroEmoji: "🌄",
    heroTitle: "Google Photos",
    heroLede:
      "Yon kopi sekirite tout foto ou, ki backup otomatikman san ou pa fè anyen.",
    goal: "🎯 Objektif: aktive backup otomatik ak chèche nan Google Photos.",
    simpleExplanation:
      "**Google Photos** se sèvis Google ki backup foto ak videyo telefòn ou otomatikman nan cloud la, epi kite w chèche yo pa mo (tankou 'lanmè' oswa 'chen') san bezwen òganize manyèlman. Diferan de Galri telefòn ou (ki lokal), Photos rete an sekirite menm si telefòn lan pèdi.",
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing a photo backup app with a grid of thumbnail photos and a cloud sync icon, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/google-photos.webp`,
    digitalWords: [
      {
        word: "Google Photos",
        definition:
          "Sèvis Google ki backup foto/videyo otomatikman nan cloud la.",
        example: "Aktive Google Photos pou pa janm pèdi yon souvni.",
      },
      {
        word: "Rechèch pa Mo (Smart Search)",
        definition: "Fonksyon ki jwenn foto lè ou tape yon mo, san tag manyèl.",
        example: "Tape 'plaj' pou jwenn tout foto ou pran sou plaj.",
      },
    ],
    realLifeExample:
      "💡 Si ou chèche yon foto chen ou te pran ane pase, tape 'chen' nan rechèch Google Photos — li jwenn li san ou pa janm bezwen mete yon tag manyèlman.",
    mistakeWrong: "Panse Galri telefòn ou ak Google Photos se menm bagay la.",
    mistakeCorrect:
      "Konprann Galri se lokal (sou telefòn); Google Photos se yon backup separe nan cloud la.",
    mistakeWhy:
      "⚠️ Si ou konte sèlman sou Galri lokal la san Google Photos aktive, ou ka pèdi tout foto ou si telefòn lan pèdi oswa kraze.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou verifye si Google Photos backup aktive sou telefòn ou.",
    aiPrompt:
      "Hi! Can you explain how to check if Google Photos backup is turned on for my phone?",
    mission:
      "🎯 Misyon: verifye si Google Photos backup aktive sou telefòn ou epi eseye yon rechèch pa mo.",
    quiz: {
      prompt: "Ki diferans genyen ant Galri telefòn ak Google Photos?",
      options: [
        "Pa gen okenn diferans",
        "Galri se lokal sou telefòn; Google Photos se backup nan cloud la",
        "Google Photos sèlman pou videyo",
        "Galri pi an sekirite pase Google Photos",
      ],
      correctIndex: 1,
      correctFeedback:
        "✅ Wi! Google Photos bay yon dezyèm sekirite nan cloud la.",
      wrongFeedback: "❌ Eseye ankò — panse ak kote chak grenn kenbe done a.",
    },
    recap: [
      { emoji: "🌄", text: "Photos backup foto/videyo otomatikman." },
      { emoji: "🔍", text: "Rechèch pa mo, san tag manyèl." },
      { emoji: "☁️", text: "Separe de Galri lokal — kopi nan cloud la." },
      { emoji: "🎯", text: "Misyon: verifye backup epi eseye yon rechèch." },
    ],
  },
  {
    slug: "google-translate",
    moduleTitle: "Modil 8: Ekosistèm Google",
    heroEmoji: "🌍",
    heroTitle: "Google Translate",
    heroLede: "Yon pon ant lang ki fèmen distans lan an segonn.",
    goal: "🎯 Objektif: tradwi tèks ak vwa ant lang ak Google Translate.",
    simpleExplanation:
      "**Google Translate** tradwi tèks, vwa, oswa menm foto (tèks sou yon pano) ant plizyè lang an segonn. Li itil pou konprann yon dokiman nan yon lòt lang, oswa kominike ak yon moun ki pa pale menm lang ak ou.",
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing a translation app with two language selectors and a translated text box, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/google-translate.webp`,
    digitalWords: [
      {
        word: "Google Translate",
        definition: "Aplikasyon ki tradwi tèks, vwa, ak imaj ant lang.",
        example: "Tradwi yon fòm angle an kreyòl ak Google Translate.",
      },
      {
        word: "Tradiksyon pa Kamera (Camera Translation)",
        definition:
          "Fonksyon ki tradwi tèks sou yon foto oswa pano an tan reyèl.",
        example: "Pwente kamera ou sou yon meni angle pou wè l an kreyòl.",
      },
    ],
    realLifeExample:
      "💡 Si ou resevwa yon dokiman ofisyèl an angle ou pa konprann byen, itilize kamera Google Translate pou wè yon tradiksyon an tan reyèl san tape anyen.",
    mistakeWrong:
      "Depann 100% sou tradiksyon machin pou dokiman legal enpòtan.",
    mistakeCorrect:
      "Itilize Google Translate pou konprann jeneral la, men verifye ak yon moun pou dokiman ofisyèl enpòtan.",
    mistakeWhy:
      "⚠️ Tradiksyon machin pa toujou pafè, sitou pou detay legal oswa medikal enpòtan — toujou verifye avèk yon moun lè anjeu a gwo.",
    aiExplanation:
      "🤖 Ou ka mande yon AI eksplike diferans ant yon tradiksyon rapid ak yon tradiksyon pwofesyonèl sètifye.",
    aiPrompt:
      "Hi! What's the difference between using Google Translate for a quick translation versus getting a certified professional translation for official documents?",
    mission:
      "🎯 Misyon: tradwi yon fraz ant kreyòl ak angle ak Google Translate.",
    quiz: {
      prompt: "Kilè ou ta dwe verifye tradiksyon Google Translate ak yon moun?",
      options: [
        "Jamè, li toujou pafè",
        "Pou dokiman legal oswa medikal enpòtan",
        "Sèlman pou mesaj kout ak zanmi",
        "Pa gen bezwen verifye anyen",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Verifye pou dokiman enpòtan.",
      wrongFeedback: "❌ Eseye ankò — panse ak anjeu tradiksyon ki mal.",
    },
    recap: [
      { emoji: "🌍", text: "Translate tradwi tèks, vwa, ak imaj." },
      { emoji: "📷", text: "Tradiksyon pa kamera an tan reyèl." },
      { emoji: "⚠️", text: "Verifye ak yon moun pou dokiman enpòtan." },
      { emoji: "🎯", text: "Misyon: tradwi yon fraz ant kreyòl ak angle." },
    ],
  },
  {
    slug: "google-meet",
    moduleTitle: "Modil 8: Ekosistèm Google",
    heroEmoji: "🎥",
    heroTitle: "Google Meet",
    heroLede:
      "Yon salon rankont vityèl pou wè ak tande moun kèlkeswa distans lan.",
    goal: "🎯 Objektif: rejwenn ak kreye yon apèl videyo ak Google Meet.",
    simpleExplanation:
      "**Google Meet** se yon aplikasyon apèl videyo ki kite plizyè moun rankontre vityèlman. Ou rejwenn yon rankont lè ou klike yon lyen, san bezwen kreye yon kont espesyal si moun nan envite ou.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a video call interface with multiple participant video tiles, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/google-meet.webp`,
    digitalWords: [
      {
        word: "Google Meet",
        definition: "Aplikasyon gratis Google pou apèl videyo.",
        example: "Rejwenn yon rankont travay pa Google Meet.",
      },
      {
        word: "Lyen Rankont (Meeting Link)",
        definition: "Yon lyen espesyal ou klike pou antre nan yon apèl videyo.",
        example: "Klike lyen rankont lan nan imèl ou resevwa pou antre.",
      },
    ],
    realLifeExample:
      "💡 Si fanmi ou lòtbò lanmè envite w nan yon rankont Google Meet, ou sèlman bezwen klike lyen an nan imèl la — pa gen bezwen kreye okenn kont espesyal.",
    mistakeWrong:
      "Klike sou yon lyen rankont ki soti nan yon sous ou pa rekonèt.",
    mistakeCorrect:
      "Verifye moun ki voye lyen an anvan ou klike, menm jan ak nenpòt lyen ou resevwa.",
    mistakeWhy:
      "⚠️ Move moun ka kreye fo lyen rankont ki mennen w sou yon sit fisik — verifye sous la toujou pwoteje w.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou aktive kamera ak mikwofòn ou nan Google Meet anvan yon apèl.",
    aiPrompt:
      "Hi! Can you explain how to turn on my camera and microphone in Google Meet before joining a call?",
    mission:
      "🎯 Misyon: teste kamera ak mikwofòn ou nan Google Meet anvan pwochen apèl ou.",
    quiz: {
      prompt: "Kisa ou bezwen pou rejwenn yon rankont Google Meet?",
      options: [
        "Toujou yon kont Gmail",
        "Sèlman klike lyen rankont lan yo voye ba ou",
        "Yon abonman peye",
        "Enstale yon lojisyèl espesyal",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Klike lyen an ase pou antre.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak fasilite pou rejwenn yon rankont.",
    },
    recap: [
      { emoji: "🎥", text: "Meet = aplikasyon gratis pou apèl videyo." },
      { emoji: "🔗", text: "Klike yon lyen rankont pou antre." },
      { emoji: "🔎", text: "Verifye sous lyen an anvan ou klike." },
      { emoji: "🎯", text: "Misyon: teste kamera ak mikwofòn ou." },
    ],
  },
  {
    slug: "google-keep",
    moduleTitle: "Modil 8: Ekosistèm Google",
    heroEmoji: "📝",
    heroTitle: "Google Keep",
    heroLede: "Yon ti kaye dijital pou nòt rapid ou pa vle bliye.",
    goal: "🎯 Objektif: kreye ak jwenn yon nòt ak Google Keep.",
    simpleExplanation:
      "**Google Keep** se yon aplikasyon nòt senp pou ekri ti lis ak ide rapid — tankou yon lis makèt, yon ide sibit, oswa yon nimewo enpòtan. Kontrèman ak Docs, li fèt pou vitès, pa dokiman long.",
    illustrationPrompt:
      "A realistic photograph of a smartphone screen showing a note-taking app with colorful sticky-note style cards, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/google-keep.webp`,
    digitalWords: [
      {
        word: "Google Keep",
        definition: "Aplikasyon gratis Google pou nòt rapid ak lis.",
        example: "Ekri lis makèt ou nan Google Keep anvan ou soti.",
      },
      {
        word: "Lis Kontwòl (Checklist)",
        definition: "Yon kalite nòt kote ou ka koche chak eleman fin fèt.",
        example: "Kreye yon lis kontwòl pou tach ou dwe fè jodi a.",
      },
    ],
    realLifeExample:
      "💡 Si ou toujou bliye sa ou dwe achte nan mache, kreye yon lis kontwòl nan Google Keep sou telefòn ou — koche chak bagay pandan ou achte yo.",
    mistakeWrong:
      "Itilize Google Docs pou ti nòt rapid tankou yon lis makèt kout.",
    mistakeCorrect:
      "Itilize Google Keep pou nòt rapid; kite Docs pou dokiman pi long.",
    mistakeWhy:
      "⚠️ Docs pi lou ak pi long pou louvri pou yon ti nòt rapid — Keep fèt egzakteman pou vitès sa a.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou mete yon rapèl sou yon nòt Google Keep pou li notifye w a yon lè presi.",
    aiPrompt:
      "Hi! Can you explain how to add a time-based reminder to a Google Keep note?",
    mission:
      "🎯 Misyon: kreye yon lis kontwòl (checklist) nan Google Keep ak twa eleman.",
    quiz: {
      prompt: "Poukisa Google Keep pi bon pase Docs pou yon ti nòt rapid?",
      options: [
        "Li pi long pou louvri",
        "Li fèt pou vitès ak senplisite",
        "Li mande yon abonman peye",
        "Li sèlman mache sou òdinatè",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Keep fèt pou vitès, pa dokiman long.",
      wrongFeedback: "❌ Eseye ankò — panse ak diferans ant Keep ak Docs.",
    },
    recap: [
      { emoji: "📝", text: "Keep = ti kaye dijital pou nòt rapid." },
      { emoji: "✅", text: "Lis kontwòl kite w koche eleman fin fèt." },
      { emoji: "⏰", text: "Ou ka mete rapèl sou yon nòt." },
      { emoji: "🎯", text: "Misyon: kreye yon lis kontwòl ak twa eleman." },
    ],
  },
  {
    slug: "google-ecosystem-mission",
    moduleTitle: "Modil 8: Ekosistèm Google",
    heroEmoji: "🏆",
    heroTitle: "Misyon: Ekosistèm Google",
    heroLede: "Konbine tout zouti Google Modil 8 pou vin pi efikas chak jou.",
    goal: "🎯 Objektif: itilize Gmail, Drive, Docs, ak rès zouti Google chak jou.",
    simpleExplanation:
      "Ou fèk aprann: Drive, Docs, Sheets, Slides, Calendar, Maps, Photos, Translate, Meet, ak Keep. Ansanm ak Gmail (Modil 6), ou kounye a konnen tout zouti debaz nan ekosistèm Google la. Misyon sa a mande w konbine plizyè nan konpetans sa yo.",
    illustrationPrompt:
      "A realistic photograph of a person confidently working on a laptop with multiple browser tabs open, warm natural lighting, professional lifestyle photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/google-ecosystem-mission.webp`,
    digitalWords: [
      {
        word: "Ekosistèm Google",
        definition:
          "Tout zouti gratis Google konekte ansanm anba yon sèl kont.",
        example: "Yon sèl kont Gmail bay aksè a tout ekosistèm Google la.",
      },
    ],
    realLifeExample:
      "💡 Yon moun ki metrize ekosistèm Google la ka jere imèl, dokiman, orè, ak foto tout nan yon sèl kont, san peye anyen ak san enstale okenn lojisyèl.",
    mistakeWrong:
      "Panse ou dwe konnen tout fonksyon avanse nan chak zouti Google.",
    mistakeCorrect:
      "Konprann konpetans debaz sa yo ase pou kòmanse ak konfyans — rès la vin natirèl ak pratik.",
    mistakeWhy:
      "⚠️ Atann pèfeksyon anvan ou eksplore zouti sa yo anpeche w pwofite fonksyon itil ki deja gratis pou ou.",
    aiExplanation:
      "🤖 Kounye a ou ka mande yon AI konsèy sou kijan pou konekte plizyè zouti Google ansanm pou plis efikasite.",
    aiPrompt:
      "Hi! I just learned the basics of Google Drive, Docs, Sheets, Calendar, and Photos. What should I focus on learning next to use them together more efficiently?",
    mission:
      "🎯 Misyon Final Modil 8: kreye yon dokiman nan Docs, sovgade l nan Drive, epi mete yon evènman nan Calendar pou revize l.",
    quiz: {
      prompt: "Ki objektif prensipal Modil 8 la?",
      options: [
        "Vin yon enjenyè Google",
        "Itilize Gmail, Drive, Docs, ak rès zouti Google chak jou",
        "Memorize tout zouti Google ki egziste",
        "Peye pou tout zouti Google yo",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Objektif la se itilize zouti sa yo chak jou.",
      wrongFeedback: "❌ Eseye ankò — repase objektif Modil 8 la.",
    },
    recap: [
      { emoji: "🗄️", text: "Drive, Docs, Sheets, Slides." },
      { emoji: "📅", text: "Calendar, Maps, Photos." },
      { emoji: "🌍", text: "Translate, Meet, Keep." },
      { emoji: "🎓", text: "Ou fini Modil 8 — Ekosistèm Google!" },
    ],
  },
  {
    slug: "microsoft-word",
    moduleTitle: "Modil 9: Debaz Microsoft",
    heroEmoji: "📘",
    heroTitle: "Microsoft Word",
    heroLede: "Lojisyèl trete tèks ki pi itilize nan mond biznis lan.",
    goal: "🎯 Objektif: ekri, fòmate, ak sovgade yon dokiman Word.",
    simpleExplanation:
      "**Microsoft Word** se lojisyèl trete tèks pi itilize nan mond travay la — dokiman ofisyèl, CV, ak lèt souvan mande fòma Word (.docx). Kontrèman ak Google Docs, li anjeneral enstale sou òdinatè a epi ou dwe klike 'Save' manyèlman.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a word processing document with a formatted title and paragraph text, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/microsoft-word.webp`,
    digitalWords: [
      {
        word: "Microsoft Word",
        definition: "Lojisyèl trete tèks Microsoft pou ekri dokiman.",
        example: "Ekri CV ou nan Word pou yon fòma pwofesyonèl.",
      },
      {
        word: ".docx",
        definition: "Ekstansyon fichye estanda pou dokiman Word.",
        example: "Sovgade dokiman ou an '.docx' pou konpatibilite maksimòm.",
      },
    ],
    realLifeExample:
      "💡 Anpil anplwayè mande CV nan fòma Word (.docx) olye de PDF, paske li kite yo modifye l fasilman si yo bezwen ajoute nòt — konnen kilè pou itilize chak fòma enpòtan.",
    mistakeWrong: "Ekri nan Word pandan plizyè èdtan san sovgade manyèlman.",
    mistakeCorrect:
      "Sovgade travay ou regilyèman (Ctrl+S / Cmd+S), oswa aktive AutoSave si ou sou OneDrive.",
    mistakeWhy:
      "⚠️ Kontrèman ak Google Docs, Word klasik pa sovgade otomatikman — yon black-out oswa yon aparèy ki fèmen ka fè w pèdi travay ou.",
    aiExplanation:
      "🤖 Ou ka mande yon AI kijan pou konvèti yon dokiman Word an PDF anvan ou voye l.",
    aiPrompt:
      "Hi! Can you explain how to save or convert a Microsoft Word document as a PDF?",
    mission:
      "🎯 Misyon: ekri yon ti dokiman nan Word (oswa yon aplikasyon Word gratis) epi sovgade l ak Ctrl+S.",
    quiz: {
      prompt: "Ki diferans genyen ant Word klasik ak Google Docs sou sovgad?",
      options: [
        "Pa gen okenn diferans",
        "Word klasik pa sovgade otomatikman; Docs sovgade otomatikman",
        "Word klasik sovgade pi vit",
        "Docs pa janm sovgade",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Toujou sonje sovgade manyèlman nan Word klasik.",
      wrongFeedback: "❌ Eseye ankò — panse ak abitid AutoSave.",
    },
    recap: [
      { emoji: "📘", text: "Word = lojisyèl trete tèks pi popilè nan biznis." },
      { emoji: "💾", text: "Sovgade manyèlman ak Ctrl+S/Cmd+S." },
      { emoji: "📄", text: ".docx se fòma estanda a." },
      { emoji: "🎯", text: "Misyon: ekri epi sovgade yon dokiman tès." },
    ],
  },
  {
    slug: "microsoft-excel",
    moduleTitle: "Modil 9: Debaz Microsoft",
    heroEmoji: "📗",
    heroTitle: "Microsoft Excel",
    heroLede: "Fèy kalkil ki pi itilize nan mond lan pou nimewo ak done.",
    goal: "🎯 Objektif: kreye yon fèy kalkil senp ak Microsoft Excel.",
    simpleExplanation:
      "**Microsoft Excel** se lojisyèl fèy kalkil ki òganize enfòmasyon an ranje ak kolòn, ak kapasite pou fè kalkil konplèks otomatikman. Li se estanda mondyal pou biznis, kontablite, ak analiz done.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a spreadsheet application with rows, columns, and a colorful chart, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/microsoft-excel.webp`,
    digitalWords: [
      {
        word: "Microsoft Excel",
        definition: "Lojisyèl fèy kalkil Microsoft pou nimewo ak done.",
        example: "Kalkile bidjè mansyèl ou nan Excel.",
      },
      {
        word: "Fòmil (Formula)",
        definition: "Yon kòmand ki fè yon kalkil otomatik nan yon selil.",
        example: "'=SUM(A1:A5)' se yon fòmil ki adisyone senk selil.",
      },
    ],
    realLifeExample:
      "💡 Yon pwopriyetè ti biznis ka itilize Excel pou swiv depans ak revni chak mwa, ak fòmil ki kalkile total la otomatikman san erè manyèl.",
    mistakeWrong:
      "Kalkile total yon lis long nimewo manyèlman ak yon kalkilatris apa.",
    mistakeCorrect:
      "Itilize yon fòmil senp tankou SUM pou Excel fè kalkil la pou ou.",
    mistakeWhy:
      "⚠️ Kalkil manyèl pran plis tan e li fasil pou fè erè — yon fòmil rekalkile otomatikman si done yo chanje.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ede w ekri yon fòmil Excel senp pou yon bezwen espesifik.",
    aiPrompt:
      "Hi! Can you help me write a simple Excel formula to calculate the total of a column of expenses?",
    mission:
      "🎯 Misyon: kreye yon fèy kalkil senp ak twa ranje nimewo epi eseye yon fòmil SUM.",
    quiz: {
      prompt: "Kisa yon fòmil fè nan Excel?",
      options: [
        "Li chanje koulè selil yo",
        "Li fè yon kalkil otomatik",
        "Li efase done yo",
        "Li kreye yon nouvo dokiman",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Yon fòmil fè kalkil otomatikman.",
      wrongFeedback: "❌ Eseye ankò — panse ak objektif prensipal Excel la.",
    },
    recap: [
      { emoji: "📗", text: "Excel = fèy kalkil estanda pou biznis ak done." },
      { emoji: "🧮", text: "Fòmil fè kalkil otomatik." },
      { emoji: "🔢", text: "Rekalkile otomatikman lè done chanje." },
      { emoji: "🎯", text: "Misyon: kreye yon fèy kalkil ak yon fòmil." },
    ],
  },
  {
    slug: "microsoft-powerpoint",
    moduleTitle: "Modil 9: Debaz Microsoft",
    heroEmoji: "📙",
    heroTitle: "Microsoft PowerPoint",
    heroLede: "Lojisyèl prezantasyon ki fè yon ide vin yon istwa vizyèl.",
    goal: "🎯 Objektif: kreye yon prezantasyon senp ak Microsoft PowerPoint.",
    simpleExplanation:
      "**Microsoft PowerPoint** se lojisyèl prezantasyon ki kite w kreye diapositiv ak tèks, imaj, ak transisyon. Li se estanda pou prezantasyon biznis, konferans, ak fòmasyon nan mond travay la.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a presentation slide editor with a title slide and design layout options, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/microsoft-powerpoint.webp`,
    digitalWords: [
      {
        word: "Microsoft PowerPoint",
        definition: "Lojisyèl prezantasyon Microsoft pou kreye diapositiv.",
        example:
          "Kreye yon prezantasyon pou yon reyinyon travay nan PowerPoint.",
      },
      {
        word: "Transisyon (Transition)",
        definition: "Efè animasyon ant de diapositiv.",
        example: "Ajoute yon transisyon senp ant chak diapositiv.",
      },
    ],
    realLifeExample:
      "💡 Nan yon antretyen djòb oswa yon reyinyon biznis, yon prezantasyon PowerPoint klè ak byen òganize fè yon pi bon enpresyon pase eksplike tout bagay verbalman san sipò vizyèl.",
    mistakeWrong:
      "Ajoute twòp transisyon ak animasyon flashy ki distrè odyans lan.",
    mistakeCorrect:
      "Kenbe transisyon senp ak minimal — konsantre sou kontni an, pa efè yo.",
    mistakeWhy:
      "⚠️ Twòp animasyon distrè odyans lan de mesaj prensipal ou — senplisite pwofesyonèl toujou pi efikas.",
    aiExplanation:
      "🤖 Ou ka mande yon AI konsèy sou kijan pou fè yon prezantasyon PowerPoint parèt plis pwofesyonèl.",
    aiPrompt:
      "Hi! Can you give me tips for making a PowerPoint presentation look more professional and less cluttered?",
    mission:
      "🎯 Misyon: kreye yon prezantasyon PowerPoint ak twa diapositiv sou yon sijè ou chwazi.",
    quiz: {
      prompt: "Kisa ki fè yon prezantasyon PowerPoint pwofesyonèl?",
      options: [
        "Anpil animasyon flashy sou chak diapositiv",
        "Transisyon senp ak konsantrasyon sou kontni an",
        "Koulè difewan sou chak paj",
        "Tèks trè piti pou kenbe plis enfòmasyon",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Senplisite pwofesyonèl toujou pi efikas.",
      wrongFeedback: "❌ Eseye ankò — panse ak sa ki distrè yon odyans.",
    },
    recap: [
      { emoji: "📙", text: "PowerPoint = estanda pou prezantasyon biznis." },
      { emoji: "🎞️", text: "Transisyon senp pi pwofesyonèl pase flashy." },
      { emoji: "🖼️", text: "Konsantre sou kontni, pa efè vizyèl." },
      {
        emoji: "🎯",
        text: "Misyon: kreye yon prezantasyon ak twa diapositiv.",
      },
    ],
  },
  {
    slug: "microsoft-outlook",
    moduleTitle: "Modil 9: Debaz Microsoft",
    heroEmoji: "📧",
    heroTitle: "Microsoft Outlook",
    heroLede: "Yon bwat imèl pwofesyonèl ki konbine mesaj ak kalandriye.",
    goal: "🎯 Objektif: navige nan imèl ak kalandriye Outlook.",
    simpleExplanation:
      "**Microsoft Outlook** se yon aplikasyon imèl pwofesyonèl ki konbine bwat resepsyon ak yon kalandriye entegre, souvan itilize nan anviwònman biznis ak antrepriz. Menm prensip yo aprann pou Gmail (Modil 6) aplike la a — sèlman entèfas la diferan.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing an email application with an inbox list and a calendar panel side by side, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/microsoft-outlook.webp`,
    digitalWords: [
      {
        word: "Microsoft Outlook",
        definition:
          "Aplikasyon imèl pwofesyonèl Microsoft ak kalandriye entegre.",
        example: "Anpil antrepriz itilize Outlook pou tout kominikasyon.",
      },
      {
        word: "Kont Antrepriz (Work/School Account)",
        definition: "Yon kont Outlook konpayi oswa lekòl ou bay ou.",
        example: "Konekte ak kont antrepriz ou pou wè imèl travay ou.",
      },
    ],
    realLifeExample:
      "💡 Si ou kòmanse yon nouvo djòb, anplwayè ou ka ba ou yon kont Outlook — menm prensip Gmail yo (compose, reply, forward) aplike, sèlman bouton yo nan yon lòt kote.",
    mistakeWrong:
      "Panse ou dwe re-aprann tout bagay paske Outlook 'sanble' diferan de Gmail.",
    mistakeCorrect:
      "Konprann prensip debaz (compose, reply, attachment) yo menm — sèlman entèfas la chanje.",
    mistakeWhy:
      "⚠️ Konsantre sou diferans vizyèl olye de rekonèt prensip ki menm yo ka fè yon nouvo zouti sanble pi difisil pase li reyèlman ye.",
    aiExplanation:
      "🤖 Ou ka mande yon AI montre w kote fonksyon Gmail ou konnen deja yo ye nan Outlook.",
    aiPrompt:
      "Hi! I know how to use Gmail. Can you explain where to find 'Compose', 'Reply', and 'Attach file' in Outlook?",
    mission:
      "🎯 Misyon: si ou gen aksè a Outlook, eksplore bwat resepsyon ak kalandriye li; sinon, konpare mantalman ak Gmail.",
    quiz: {
      prompt: "Kisa ki fè Outlook diferan de Gmail?",
      options: [
        "Prensip debaz yo konplètman diferan",
        "Sèlman entèfas la diferan; prensip debaz yo menm",
        "Outlook pa gen okenn kalandriye",
        "Ou pa ka voye pyès jwenn nan Outlook",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Sèlman entèfas la chanje, prensip yo rete menm.",
      wrongFeedback:
        "❌ Eseye ankò — panse ak konpetans ou deja genyen ak Gmail.",
    },
    recap: [
      {
        emoji: "📧",
        text: "Outlook = imèl pwofesyonèl ak kalandriye entegre.",
      },
      { emoji: "🏢", text: "Souvan itilize nan antrepriz ak lekòl." },
      { emoji: "🔄", text: "Menm prensip ak Gmail, lòt entèfas." },
      {
        emoji: "🎯",
        text: "Misyon: eksplore Outlook oswa konpare l ak Gmail.",
      },
    ],
  },
  {
    slug: "microsoft-onedrive",
    moduleTitle: "Modil 9: Debaz Microsoft",
    heroEmoji: "☁️",
    heroTitle: "Microsoft OneDrive",
    heroLede: "Vèsyon Microsoft pou sovgade ak sinkwonize fichye nan cloud la.",
    goal: "🎯 Objektif: sovgade ak jwenn fichye ak Microsoft OneDrive.",
    simpleExplanation:
      "**OneDrive** se sèvis cloud Microsoft, ekivalan Google Drive — li sovgade fichye ou (dokiman Word, Excel, PowerPoint) pou jwenn yo sou nenpòt aparèy. Chak kont Microsoft (Windows, Outlook) vin ak OneDrive otomatikman.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a cloud storage file browser interface with document and spreadsheet icons, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/microsoft-onedrive.webp`,
    digitalWords: [
      {
        word: "Microsoft OneDrive",
        definition: "Sèvis cloud Microsoft pou sovgade ak sinkwonize fichye.",
        example: "Sovgade dokiman Word ou nan OneDrive pou jwenn li toupatou.",
      },
      {
        word: "Sinkwonizasyon (Sync)",
        definition: "Fè menm vèsyon yon fichye rete ajou sou tout aparèy.",
        example: "Modifye yon dokiman sou telefòn, li ajou sou laptòp tou.",
      },
    ],
    realLifeExample:
      "💡 Si ou sovgade yon dokiman Word nan OneDrive sou òdinatè travay ou, ou ka louvri menm dokiman an sou telefòn ou pandan ou nan wout, ak dènye modifikasyon yo.",
    mistakeWrong:
      "Sovgade dokiman Word/Excel enpòtan sèlman sou disk lokal òdinatè a.",
    mistakeCorrect:
      "Sovgade fichye enpòtan nan OneDrive pou backup ak aksè toupatou.",
    mistakeWhy:
      "⚠️ San OneDrive, si òdinatè a kraze, dokiman ki sovgade sèlman lokalman ka pèdi pou tout bon.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ki diferans genyen ant OneDrive ak Google Drive, si ou dwe chwazi youn.",
    aiPrompt:
      "Hi! What's the difference between Microsoft OneDrive and Google Drive? How do I choose which one to use?",
    mission:
      "🎯 Misyon: sovgade yon dokiman nan OneDrive (oswa verifye si OneDrive deja aktive sou aparèy ou).",
    quiz: {
      prompt: "Kisa OneDrive fè?",
      options: [
        "Li efase dokiman ou otomatikman",
        "Li sovgade ak sinkwonize fichye nan cloud la",
        "Li sèlman kreye prezantasyon",
        "Li konekte w sou Wi-Fi",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! OneDrive sovgade ak sinkwonize fichye ou.",
      wrongFeedback: "❌ Eseye ankò — panse ak ekivalan Google Drive la.",
    },
    recap: [
      { emoji: "☁️", text: "OneDrive = ekivalan Microsoft pou Google Drive." },
      { emoji: "🔄", text: "Sinkwonize fichye sou tout aparèy ou." },
      { emoji: "🔗", text: "Vin ak chak kont Microsoft otomatikman." },
      {
        emoji: "🎯",
        text: "Misyon: sovgade oswa verifye yon fichye nan OneDrive.",
      },
    ],
  },
  {
    slug: "microsoft-teams",
    moduleTitle: "Modil 9: Debaz Microsoft",
    heroEmoji: "🎦",
    heroTitle: "Microsoft Teams",
    heroLede:
      "Yon espas travay tout-an-yon pou chat, apèl videyo, ak dokiman pataje.",
    goal: "🎯 Objektif: rejwenn yon rankont ak navige nan chat sou Microsoft Teams.",
    simpleExplanation:
      "**Microsoft Teams** konbine chat tèks, apèl videyo, ak pataje dokiman nan yon sèl aplikasyon, souvan itilize pou travay ak lekòl. Li fonksyone menm jan ak Google Meet pou apèl videyo, plis yon sistèm chat ki rete òganize.",
    illustrationPrompt:
      "A realistic photograph of a laptop screen showing a team collaboration app with a chat panel and video call thumbnails, clean modern interface, natural lighting, professional tech photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/microsoft-teams.webp`,
    digitalWords: [
      {
        word: "Microsoft Teams",
        definition:
          "Aplikasyon Microsoft ki konbine chat, apèl videyo, ak dokiman.",
        example: "Rejwenn yon reyinyon travay chak semèn sou Teams.",
      },
      {
        word: "Kanal (Channel)",
        definition: "Yon espas chat òganize pa sijè oswa pwojè nan Teams.",
        example: "Kreye yon kanal 'Pwojè Vant' pou tout diskisyon konsène l.",
      },
    ],
    realLifeExample:
      "💡 Yon ekip travay ki itilize Teams ka gen yon kanal separe pou chak pwojè, olye de tout mesaj mele nan yon sèl chat — pi fasil pou swiv konvèsasyon espesifik.",
    mistakeWrong:
      "Mete tout diskisyon (pwojè diferan) nan yon sèl chat jeneral san kanal.",
    mistakeCorrect: "Òganize diskisyon nan kanal separe pa sijè oswa pwojè.",
    mistakeWhy:
      "⚠️ San kanal òganize, mesaj enpòtan pèdi nan mitan konvèsasyon ki pa gen rapò — sa ralanti kolaborasyon ekip la.",
    aiExplanation:
      "🤖 Ou ka mande yon AI ki diferans genyen ant Microsoft Teams ak Google Meet, si ou dwe konnen toude pou travay.",
    aiPrompt:
      "Hi! What's the difference between Microsoft Teams and Google Meet? Do I need to learn both for work?",
    mission:
      "🎯 Misyon: si ou gen aksè a Teams, rejwenn yon rankont tès; sinon, konpare mantalman ak Google Meet.",
    quiz: {
      prompt: "Kisa yon kanal (channel) fè nan Microsoft Teams?",
      options: [
        "Li efase mesaj otomatikman",
        "Li òganize diskisyon pa sijè oswa pwojè",
        "Li konekte w sou Wi-Fi",
        "Li kreye yon nouvo dokiman Excel",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Kanal òganize diskisyon pa sijè.",
      wrongFeedback: "❌ Eseye ankò — panse ak fason ekip yo rete òganize.",
    },
    recap: [
      { emoji: "🎦", text: "Teams konbine chat, apèl videyo, ak dokiman." },
      { emoji: "📢", text: "Kanal òganize diskisyon pa sijè/pwojè." },
      { emoji: "🔄", text: "Menm objektif ak Google Meet, plis chat entegre." },
      { emoji: "🎯", text: "Misyon: rejwenn oswa konpare Teams ak Meet." },
    ],
  },
  {
    slug: "microsoft-essentials-mission",
    moduleTitle: "Modil 9: Debaz Microsoft",
    heroEmoji: "🏆",
    heroTitle: "Misyon: Debaz Microsoft",
    heroLede:
      "Konbine tout zouti Microsoft Modil 9 pou vin konfyan nan nenpòt anviwònman travay.",
    goal: "🎯 Objektif: jere Word, Excel, PowerPoint, ak Outlook ak konfyans.",
    simpleExplanation:
      "Ou fèk aprann: Word, Excel, PowerPoint, Outlook, OneDrive, ak Teams. Ansanm ak sa ou te aprann sou Google (Modil 8), ou kounye a konnen de pi gwo ekosistèm biznis nan mond lan — ou ka adapte nan nenpòt anviwònman travay.",
    illustrationPrompt:
      "A realistic photograph of a person confidently working on a laptop in a professional office setting, warm natural lighting, professional lifestyle photography, no readable text needed to be accurate",
    illustrationSrc: `${illustrationBase}/microsoft-essentials-mission.webp`,
    digitalWords: [
      {
        word: "Debaz Microsoft",
        definition:
          "Konpetans debaz pou itilize zouti Microsoft nan yon anviwònman travay.",
        example: "Debaz Microsoft ede w adapte nan prèske nenpòt biznis.",
      },
    ],
    realLifeExample:
      "💡 Yon moun ki konnen toude Google ak Microsoft ekosistèm ka kòmanse travay nan prèske nenpòt biznis san yon lòt fòmasyon teknik — anplwayè yo sipoze konpetans sa yo.",
    mistakeWrong:
      "Panse ou dwe metrize chak fonksyon avanse nan Word, Excel, ak PowerPoint.",
    mistakeCorrect:
      "Konprann konpetans debaz sa yo ase pou kòmanse ak konfyans — rès la vin natirèl ak pratik travay reyèl.",
    mistakeWhy:
      "⚠️ Atann pèfeksyon anvan ou aksepte yon djòb ki mande Microsoft Office anpeche w pran opòtinite ki deja nan pòte men w.",
    aiExplanation:
      "🤖 Kounye a ou ka mande yon AI konsèy sou kijan pou kontinye amelyore konpetans Microsoft Office ou pou yon djòb espesifik.",
    aiPrompt:
      "Hi! I just learned the basics of Word, Excel, PowerPoint, and Outlook. What Microsoft Office skills are most valuable for getting a job?",
    mission:
      "🎯 Misyon Final Modil 9: ekri yon dokiman Word, kreye yon fèy Excel senp, ak jwenn kote pou voye yon imèl nan Outlook.",
    quiz: {
      prompt: "Ki objektif prensipal Modil 9 la?",
      options: [
        "Vin yon ekspè Microsoft sètifye",
        "Jere Word, Excel, PowerPoint, ak Outlook ak konfyans",
        "Memorize chak fòmil Excel ki egziste",
        "Ranplase Google ekosistèm nèt",
      ],
      correctIndex: 1,
      correctFeedback: "✅ Wi! Objektif la se jere zouti sa yo ak konfyans.",
      wrongFeedback: "❌ Eseye ankò — repase objektif Modil 9 la.",
    },
    recap: [
      { emoji: "📘", text: "Word, Excel, PowerPoint." },
      { emoji: "📧", text: "Outlook, OneDrive, Teams." },
      { emoji: "💼", text: "Konpetans debaz pou nenpòt anviwònman travay." },
      { emoji: "🎓", text: "Ou fini Modil 9 — Debaz Microsoft!" },
    ],
  },
];

export function getComputerPremiumLesson(slug: string) {
  return computerPremiumLessons.find((lesson) => lesson.slug === slug);
}
