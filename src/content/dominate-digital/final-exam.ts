import type { FinalExam } from "@/content/dominate-digital/schema";

/**
 * Final exam per the brief's standing Section 6 rule (applies to every
 * Jamezzi course): a comprehensive final exam covering all 20 modules,
 * separate from lesson quizzes, higher stakes, answers/score revealed only
 * at the end. 3 questions per module x 20 modules = 60 in the bank; 30
 * drawn per attempt (roughly half the bank, so a retry is a genuinely
 * different set), 80% required, unlimited retries.
 */
export const dominateDigitalFinalExam: FinalExam = {
  id: "final-exam",
  titleHt: "Egzamen Final — Maketing Dijital & AI",
  intro:
    "Sa a se egzamen final kou a. Ou pral reponn 30 kesyon chwazi aza nan yon bank 60 kesyon ki kouvri tout 20 modil yo. Ou bezwen 80% pou pase. Pa gen limit tan, epi ou ka eseye ankò otan fwa ou vle — chak eseye a bay yon nouvo seleksyon kesyon.",
  questionsPerAttempt: 30,
  passingPercent: 80,
  bank: [
    // Module 1 — Baz Maketing Dijital
    {
      id: "eq-m1-1",
      moduleId: "m1",
      recommendedLessonSlug: "what-is-digital-marketing",
      prompt:
        "Ki diferans prensipal ant maketing dijital ak maketing tradisyonèl?",
      options: [
        "Maketing dijital ba ou done ak rezilta ou ka mezire an tan reyèl",
        "Maketing tradisyonèl toujou pi efikas",
        "Maketing dijital pa mande okenn estrateji",
        "Yo se menm bagay la, sèlman non an chanje",
      ],
      correctIndex: 0,
      explanation:
        "Kapasite pou mezire rezilta an tan reyèl se yon gwo avantaj maketing dijital genyen sou maketing tradisyonèl.",
    },
    {
      id: "eq-m1-2",
      moduleId: "m1",
      recommendedLessonSlug: "what-is-digital-marketing",
      prompt:
        "Nan vwayaj kliyan an ak antonwa a (funnel), ki etap ki vini jis anvan Konvèsyon?",
      options: [
        "Konsyantizasyon",
        "Konsiderasyon",
        "Fidelite",
        "Rekòmandasyon",
      ],
      correctIndex: 1,
      explanation:
        "Lòd la se Konsyantizasyon → Konsiderasyon → Konvèsyon → Fidelite.",
    },
    {
      id: "eq-m1-3",
      moduleId: "m1",
      recommendedLessonSlug: "what-is-digital-marketing",
      prompt: "Ki youn nan mit Modil 1 dekonstwi sou maketing dijital?",
      options: [
        "Ou toujou bezwen yon gwo bidjè pou kòmanse",
        "Ou dwe gen yon diplòm maketing pou reyisi",
        "Sèlman gwo mak ka itilize rezo sosyal",
        "Pa gen okenn mit — tout moun konprann li byen deja",
      ],
      correctIndex: 0,
      explanation:
        "Youn nan mit komen yo se panse ou bezwen yon gwo bidjè pou kòmanse an maketing dijital.",
    },

    // Module 2 — Sikoloji Vant
    {
      id: "eq-m2-1",
      moduleId: "m2",
      recommendedLessonSlug: "why-people-really-buy",
      prompt: "Nan pifò desizyon achte, ki wòl emosyon ak lojik jwe?",
      options: [
        "Lojik lakòz aksyon an, emosyon jistifye l apre",
        "Emosyon lakòz aksyon an, lojik jistifye l apre",
        "Se sèlman lojik ki konte, emosyon pa gen enpòtans",
        "Se de bagay san rapò youn ak lòt",
      ],
      correctIndex: 1,
      explanation:
        "Emosyon souvan lakòz aksyon an; lojik vin jistifye desizyon an apre.",
    },
    {
      id: "eq-m2-2",
      moduleId: "m2",
      recommendedLessonSlug: "why-people-really-buy",
      prompt: "Poukisa prèv sosyal (revi, temwayaj) efikas nan vant?",
      options: [
        "Paske moun fè konfyans eksperyans lòt moun ki sanble ak yo",
        "Paske li ranplase bezwen pou bon pwodwi",
        "Paske li obligatwa pa lalwa",
        "Paske li sèlman itil pou pwodwi ki chè",
      ],
      correctIndex: 0,
      explanation:
        "Prèv sosyal fè moun fè konfyans paske yo wè lòt moun ki sanble ak yo te gen yon bon eksperyans.",
    },
    {
      id: "eq-m2-3",
      moduleId: "m2",
      recommendedLessonSlug: "why-people-really-buy",
      prompt: "Ki sa prensip 'rarete' (scarcity) fè yon moun santi?",
      options: [
        "Li ka pèdi yon opòtinite si li tann twò lontan",
        "Pwodwi a pral janm disponib ankò",
        "Pri a ap toujou rete menm jan",
        "Sa pa gen okenn efè sou desizyon achte",
      ],
      correctIndex: 0,
      explanation:
        "Rarete kreye yon santiman ke ou ka pèdi yon opòtinite si ou tann twò lontan.",
    },

    // Module 3 — Idantite Mak
    {
      id: "eq-m3-1",
      moduleId: "m3",
      recommendedLessonSlug: "naming-your-business",
      prompt: "Ki sa 'pozisyònman' (positioning) yon mak vle di?",
      options: [
        "Kote biznis la fizikman sitiye",
        "Kijan mak la vle moun wè l konpare ak lòt chwa yo",
        "Lojo a sèlman",
        "Pri pwodwi a",
      ],
      correctIndex: 1,
      explanation:
        "Pozisyònman se kijan yon mak vle moun pèsonn wè l konpare ak lòt chwa ki egziste yo.",
    },
    {
      id: "eq-m3-2",
      moduleId: "m3",
      recommendedLessonSlug: "naming-your-business",
      prompt:
        "Poukisa konsistans vizyèl (menm koulè, menm style) enpòtan pou yon mak?",
      options: [
        "Li fè kliyan yo konfonn mak la ak lòt yo",
        "Li ede moun rekonèt mak la kèlkeswa kote yo wè l",
        "Li pa gen okenn efè reyèl",
        "Se sèlman yon detay ki pa enpòtan",
      ],
      correctIndex: 1,
      explanation:
        "Konsistans vizyèl ede moun rekonèt yon mak kèlkeswa kanal kote yo wè l.",
    },
    {
      id: "eq-m3-3",
      moduleId: "m3",
      recommendedLessonSlug: "naming-your-business",
      prompt: "Ki sa yon 'vwa mak' (brand voice) reprezante?",
      options: [
        "Jan mak la 'pale' nan tout kontni li — ton ak style ekri",
        "Vwa moun ki fè piblisite odyo a",
        "Non biznis la sèlman",
        "Kalite son nan videyo mak la",
      ],
      correctIndex: 0,
      explanation:
        "Vwa mak la se ton ak style ki rete konsistan nan tout kontni yon biznis ekri.",
    },

    // Module 4 — Konnen Kliyan Ou
    {
      id: "eq-m4-1",
      moduleId: "m4",
      recommendedLessonSlug: "building-a-customer-avatar",
      prompt: "Ki sa yon 'avata kliyan' (customer avatar) ye?",
      options: [
        "Yon imaj pwofil sou rezo sosyal",
        "Yon deskripsyon detaye kliyan ideyal ou, ki baze sou reyalite pa envansyon",
        "Logo biznis la",
        "Yon lis tout kliyan aktyèl ou",
      ],
      correctIndex: 1,
      explanation:
        "Yon avata kliyan se yon deskripsyon detaye, baze sou reyalite, de kliyan ideyal ou.",
    },
    {
      id: "eq-m4-2",
      moduleId: "m4",
      recommendedLessonSlug: "building-a-customer-avatar",
      prompt:
        "Poukisa konnen 'objeksyon' yon kliyan gen anvan yo achte enpòtan?",
      options: [
        "Sa pa gen enpòtans nan vant",
        "Sa ede w adrese enkyetid yo dirèkteman nan mesaj ou",
        "Objeksyon toujou fo",
        "Sèlman pri ka kreye yon objeksyon",
      ],
      correctIndex: 1,
      explanation:
        "Konnen objeksyon yo pèmèt ou adrese enkyetid reyèl kliyan an dirèkteman nan mesaj ou.",
    },
    {
      id: "eq-m4-3",
      moduleId: "m4",
      recommendedLessonSlug: "building-a-customer-avatar",
      prompt:
        "Ki diferans ant rechèch mache (market research) ak rechèch konpetitè (competitor research)?",
      options: [
        "Yo se menm bagay la",
        "Rechèch mache gade bezwen kliyan an jeneral; rechèch konpetitè gade sa lòt biznis ap fè",
        "Rechèch konpetitè pa itil",
        "Rechèch mache sèlman pou gwo biznis",
      ],
      correctIndex: 1,
      explanation:
        "Rechèch mache konsantre sou bezwen kliyan yo; rechèch konpetitè gade sa lòt biznis nan menm domèn nan ap fè.",
    },

    // Module 5 — Ekri Tèks ki Vann
    {
      id: "eq-m5-1",
      moduleId: "m5",
      recommendedLessonSlug: "writing-headlines-that-get-read",
      prompt: "Ki sa ki fè yon tit (headline) efikas?",
      options: [
        "Li long e detaye anpil",
        "Li kle e li pale dirèkteman ak yon bezwen oswa enterè lektè a",
        "Li itilize mo konplike pou parèt pwofesyonèl",
        "Li toujou mansyone pri a",
      ],
      correctIndex: 1,
      explanation:
        "Yon bon tit kle e li pale dirèkteman ak yon bezwen oswa enterè espesifik lektè a.",
    },
    {
      id: "eq-m5-2",
      moduleId: "m5",
      recommendedLessonSlug: "writing-headlines-that-get-read",
      prompt:
        "Nan yon istwa maketing (storytelling), ki estrikti ki souvan itilize?",
      options: [
        "Sitiyasyon → Moman Chanjman → Rezilta",
        "Yon lis karakteristik pwodwi",
        "Sèlman pri ak pwomosyon",
        "Non biznis la repete plizyè fwa",
      ],
      correctIndex: 0,
      explanation:
        "Estrikti Sitiyasyon → Moman Chanjman → Rezilta se yon fòm istwa efikas nan maketing.",
    },
    {
      id: "eq-m5-3",
      moduleId: "m5",
      recommendedLessonSlug: "writing-headlines-that-get-read",
      prompt: "Ki sa yon CTA (Call to Action) byen ekri ta dwe fè?",
      options: [
        "Rete vag pou pa mete presyon",
        "Di kliyan an egzakteman ki aksyon pou pran",
        "Sèlman itilize mo 'submit' oswa 'klike isit'",
        "Kache bouton an pou li pa two vizib",
      ],
      correctIndex: 1,
      explanation:
        "Yon bon CTA di kliyan an egzakteman ki aksyon espesifik pou li pran.",
    },

    // Module 6 — Kontni Grafik
    {
      id: "eq-m6-1",
      moduleId: "m6",
      recommendedLessonSlug: "meet-the-editor",
      prompt: "Ki sa 'yerachi vizyèl' (visual hierarchy) fè nan yon konsepsyon grafik?",
      options: [
        "Li gide zye moun nan bon lòd — sa ki pi enpòtan an premye",
        "Li ranpli espas vid sèlman",
        "Li mande pou tout eleman gen menm gwosè",
        "Li pa gen okenn efè sou konpreyansyon moun",
      ],
      correctIndex: 0,
      explanation:
        "Yerachi vizyèl gide zye moun nan bon lòd, kòmanse pa sa ki pi enpòtan an.",
    },
    {
      id: "eq-m6-2",
      moduleId: "m6",
      recommendedLessonSlug: "meet-the-editor",
      prompt:
        "Poukisa yon 'kit mak' (brand kit — koulè, font, logo fiks) itil?",
      options: [
        "Li limite kreyativite san rezon",
        "Li asire konsistans sou tout kontni yon biznis kreye",
        "Se sèlman pou gwo konpayi",
        "Li pa gen rapò ak konsistans mak la",
      ],
      correctIndex: 1,
      explanation:
        "Yon kit mak asire konsistans vizyèl sou tout kontni yon biznis pwodwi.",
    },
    {
      id: "eq-m6-3",
      moduleId: "m6",
      recommendedLessonSlug: "meet-the-editor",
      prompt: "Ki sa ki karakterize yon bon karisèl (carousel) pou rezo sosyal?",
      options: [
        "Chak slide san rapò youn ak lòt",
        "Yon istwa oswa lide ki devlope pwogresivman de yon slide a yon lòt",
        "Sèlman tèks san imaj",
        "Otan slide posib, pi plis pi bon",
      ],
      correctIndex: 1,
      explanation:
        "Yon bon karisèl devlope yon sèl istwa oswa lide pwogresivman atravè slide yo.",
    },

    // Module 7 — Maketing Videyo
    {
      id: "eq-m7-1",
      moduleId: "m7",
      recommendedLessonSlug: "why-video-works",
      prompt:
        "Ki diferans prensipal ant videyo kout (Shorts/Reels/TikTok) ak videyo long (YouTube)?",
      options: [
        "Videyo kout se sèlman pou danse",
        "Videyo kout kaptire atansyon vit; videyo long ka aprofondi yon sijè",
        "Videyo long toujou pi popilè",
        "Pa gen okenn diferans reyèl",
      ],
      correctIndex: 1,
      explanation:
        "Videyo kout kaptire atansyon vit; videyo long pèmèt aprofondi yon sijè.",
    },
    {
      id: "eq-m7-2",
      moduleId: "m7",
      recommendedLessonSlug: "why-video-works",
      prompt: "Ki wòl 'kwochè' (hook) 3 premye segond yon videyo jwe?",
      options: [
        "Li pa enpòtan si videyo a bon",
        "Li detèmine si moun ap kontinye gade oswa pase pase l",
        "Li sèlman itil pou videyo long",
        "Se sèlman mizik entwodiksyon",
      ],
      correctIndex: 1,
      explanation:
        "Kwochè a detèmine si moun kontinye gade videyo a oswa yo pase pase l.",
    },
    {
      id: "eq-m7-3",
      moduleId: "m7",
      recommendedLessonSlug: "why-video-works",
      prompt: "Poukisa yon miniyati (thumbnail) enpòtan pou yon videyo YouTube?",
      options: [
        "Li pa gen enpòtans, sèlman tit la konte",
        "Li se premye bagay ki fè moun deside klike sou videyo a",
        "Li dwe toujou gen menm koulè ak tout lòt videyo",
        "YouTube jenere l otomatikman san chwa",
      ],
      correctIndex: 1,
      explanation:
        "Miniyati a se souvan premye bagay ki fè yon moun deside klike sou yon videyo.",
    },

    // Module 8 — IA pou Maketing
    {
      id: "eq-m8-1",
      moduleId: "m8",
      recommendedLessonSlug: "meet-the-ai-chat-tool",
      prompt: "Ki sa ki fè yon pwonp (prompt) AI bon, olye vag?",
      options: [
        "Longè sèlman",
        "Li mansyone sa ou vle, kontèks, ak fòma",
        "Li itilize mo teknik konplike",
        "Pa gen diferans ant yon bon ak yon move pwonp",
      ],
      correctIndex: 1,
      explanation:
        "Yon bon pwonp mansyone sa ou vle, kontèks, ak fòma rezilta a.",
    },
    {
      id: "eq-m8-2",
      moduleId: "m8",
      recommendedLessonSlug: "meet-the-ai-chat-tool",
      prompt: "Ki fason Modil 8 prezante AI — kòm yon ranplasman oswa yon asistan?",
      options: [
        "Yon ranplasman total pou tout travay maketing",
        "Yon asistan ki akselere travay, pa yon ranplasman pou jijman moun",
        "AI pa itil pou maketing ditou",
        "Sèlman pou kreye imaj",
      ],
      correctIndex: 1,
      explanation:
        "AI prezante kòm yon asistan ki akselere travay, pa yon ranplasman pou jijman moun.",
    },
    {
      id: "eq-m8-3",
      moduleId: "m8",
      recommendedLessonSlug: "meet-the-ai-chat-tool",
      prompt: "Ki sa ki bon pratik lè w ap itilize AI pou rechèch?",
      options: [
        "Toujou aksepte repons AI a san verifye l",
        "Konsidere repons AI a kòm yon pwen depa, verifye enfòmasyon enpòtan yo",
        "AI toujou 100% egzat",
        "Pa janm itilize AI pou rechèch",
      ],
      correctIndex: 1,
      explanation:
        "Repons AI a se yon pwen depa — enfòmasyon enpòtan yo ta dwe verifye.",
    },

    // Module 9 — Maketing sou Rezo Sosyal
    {
      id: "eq-m9-1",
      moduleId: "m9",
      recommendedLessonSlug: "facebook-strategy",
      prompt:
        "Poukisa Modil 9 rekòmande chwazi 1-2 platfòm olye eseye tout yo?",
      options: [
        "Paske chak platfòm gen yon karaktè diferan; pi bon konsantre kote odyans ou ye",
        "Paske se yon règ san rezon",
        "Paske itilize plis pase 1 platfòm se ilegal",
        "Paske tout platfòm idantik",
      ],
      correctIndex: 0,
      explanation:
        "Chak platfòm gen yon karaktè diferan — pi bon chwazi kote odyans ou pi aktif la.",
    },
    {
      id: "eq-m9-2",
      moduleId: "m9",
      recommendedLessonSlug: "facebook-strategy",
      prompt:
        "Ki sa ki diferansye WhatsApp Business de Facebook oswa Instagram nan kontèks maketing?",
      options: [
        "Yo se menm bagay la egzakteman",
        "Li plis fèt pou kominikasyon dirèk ak sèvis kliyan pase pou kontni piblik",
        "Li pa ka itilize pou biznis ditou",
        "Li sèlman itil pou gwo antrepriz",
      ],
      correctIndex: 1,
      explanation:
        "WhatsApp Business plis fèt pou kominikasyon dirèk ak sèvis kliyan.",
    },
    {
      id: "eq-m9-3",
      moduleId: "m9",
      recommendedLessonSlug: "facebook-strategy",
      prompt: "Ki sa ki dwe gide chwa kontni pou chak platfòm?",
      options: [
        "Karaktè ak odyans platfòm nan",
        "Sa ki pi fasil pou ekri san reflechi",
        "Kopye egzakteman menm kontni an sou tout platfòm san chanjman",
        "Sa konpetitè yo fè san konsidere pwòp odyans ou",
      ],
      correctIndex: 0,
      explanation:
        "Karaktè ak odyans chak platfòm ta dwe gide chwa kontni an.",
    },

    // Module 10 — Maketing Kontni
    {
      id: "eq-m10-1",
      moduleId: "m10",
      recommendedLessonSlug: "what-are-content-pillars",
      prompt: "Ki sa 'pilye kontni' (content pillars) ye?",
      options: [
        "Tit atik yo",
        "Gwo tèm oswa sijè prensipal ki gide tout kontni ou kreye",
        "Kantite abòne yo",
        "Lis rezo sosyal ou itilize",
      ],
      correctIndex: 1,
      explanation:
        "Pilye kontni se gwo tèm/sijè prensipal ki gide tout kontni yon biznis kreye.",
    },
    {
      id: "eq-m10-2",
      moduleId: "m10",
      recommendedLessonSlug: "what-are-content-pillars",
      prompt:
        "Ki diferans ant kontni 'evergreen' ak kontni 'aktyèl' (timely)?",
      options: [
        "Evergreen rete itil pandan lontan; aktyèl pale de yon moman espesifik ki pase vit",
        "Yo se menm bagay la",
        "Evergreen toujou pi long",
        "Aktyèl toujou pi popilè",
      ],
      correctIndex: 0,
      explanation:
        "Kontni evergreen rete itil pandan lontan; kontni aktyèl pale de yon moman espesifik.",
    },
    {
      id: "eq-m10-3",
      moduleId: "m10",
      recommendedLessonSlug: "what-are-content-pillars",
      prompt: "Ki sa 'repwodwi kontni' (repurposing) vle di?",
      options: [
        "Efase ansyen kontni",
        "Pran yon sèl lide e transfòme l an plizyè fòma (atik, videyo, grafik, elatriye)",
        "Kopye kontni yon lòt biznis",
        "Poste menm bagay la san chanje l",
      ],
      correctIndex: 1,
      explanation:
        "Repwodwi kontni se transfòme yon sèl lide an plizyè fòma diferan.",
    },

    // Module 11 — SEO
    {
      id: "eq-m11-1",
      moduleId: "m11",
      recommendedLessonSlug: "how-google-search-actually-works",
      prompt: "Ki lòd kòrèk nan pwosesis Google Search la?",
      options: [
        "Endekse → Kwole → Klase → Sèvi",
        "Kwole → Endekse → Klase → Sèvi",
        "Klase → Sèvi → Kwole → Endekse",
        "Sèvi → Klase → Kwole → Endekse",
      ],
      correctIndex: 1,
      explanation:
        "Lòd la se Kwole (crawl) → Endekse (index) → Klase (rank) → Sèvi (serve).",
    },
    {
      id: "eq-m11-2",
      moduleId: "m11",
      recommendedLessonSlug: "how-google-search-actually-works",
      prompt: "Ki sa 'entansyon rechèch' (search intent) vle di?",
      options: [
        "Kantite fwa yon mo chèche",
        "Rezon dèyè yon rechèch — enfòmasyon, navigasyon, oswa achte",
        "Longè yon mo kle",
        "Koulè rezilta rechèch yo",
      ],
      correctIndex: 1,
      explanation:
        "Entansyon rechèch se rezon reyèl dèyè yon rechèch moun fè.",
    },
    {
      id: "eq-m11-3",
      moduleId: "m11",
      recommendedLessonSlug: "how-google-search-actually-works",
      prompt:
        "Poukisa SEO lokal enpòtan pou yon biznis ki gen yon lokal fizik?",
      options: [
        "Li ede biznis la parèt lè moun chèche nan zòn lokal yo",
        "Li ranplase bezwen pou yon Google Business Profile",
        "Li sèlman itil pou biznis anliy san lokal fizik",
        "Li pa gen okenn efè sou vizibilite",
      ],
      correctIndex: 0,
      explanation:
        "SEO lokal ede yon biznis parèt lè moun nan menm zòn nan ap chèche.",
    },

    // Module 12 — Google Business Profile
    {
      id: "eq-m12-1",
      moduleId: "m12",
      recommendedLessonSlug: "meet-your-business-profile",
      prompt:
        "Ki enpòtans foto ak enfòmasyon konplè nan yon Google Business Profile?",
      options: [
        "Yo pa gen okenn enpòtans",
        "Yo bay kliyan lokal konfyans e amelyore vizibilite nan rechèch",
        "Sèlman non biznis la konte",
        "Google efase pwofil ki gen twòp foto",
      ],
      correctIndex: 1,
      explanation:
        "Foto ak enfòmasyon konplè bay konfyans e amelyore vizibilite nan rechèch lokal.",
    },
    {
      id: "eq-m12-2",
      moduleId: "m12",
      recommendedLessonSlug: "meet-your-business-profile",
      prompt: "Ki fason kòrèk pou reponn yon move revi?",
      options: [
        "Inyore l nèt",
        "Rekonèt pwoblèm nan e ofri rezoud li avèk pwofesyonalis",
        "Efase l si posib",
        "Reponn ak kòlè",
      ],
      correctIndex: 1,
      explanation:
        "Rekonèt pwoblèm nan avèk pwofesyonalis se fason kòrèk pou reponn yon move revi.",
    },
    {
      id: "eq-m12-3",
      moduleId: "m12",
      recommendedLessonSlug: "meet-your-business-profile",
      prompt: "Ki sa metrik 'insights' nan yon Google Business Profile montre?",
      options: [
        "Konbyen moun rele, mande direksyon, oswa vizite sit web la",
        "Kantite abòne rezo sosyal",
        "Pri pwodwi konpetitè yo",
        "Kantite anplwaye biznis la",
      ],
      correctIndex: 0,
      explanation:
        "Insights montre konbyen moun rele, mande direksyon, oswa vizite sit web la.",
    },

    // Module 13 — Maketing pa Imèl
    {
      id: "eq-m13-1",
      moduleId: "m13",
      recommendedLessonSlug: "meet-the-email-marketing-tool",
      prompt: "Ki estrikti yon bon sekans imèl byenveni swiv?",
      options: [
        "Vann imedyatman san kontèks",
        "Byenveni → livre valè → kontni → òf",
        "Voye 10 imèl vant nan yon sèl jou",
        "Pa gen estrikti espesifik",
      ],
      correctIndex: 1,
      explanation:
        "Yon bon sekans byenveni bay valè anvan l vann (byenveni → valè → kontni → òf).",
    },
    {
      id: "eq-m13-2",
      moduleId: "m13",
      recommendedLessonSlug: "meet-the-email-marketing-tool",
      prompt:
        "Poukisa yon fòm enskripsyon ta dwe mande sèlman enfòmasyon esansyèl yo?",
      options: [
        "Plis kesyon ou mande, pi plis moun enskri",
        "Mwens kesyon ogmante chans moun konplete fòm nan",
        "Fòm long toujou pi pwofesyonèl",
        "Sa pa gen okenn efè sou konplesyon fòm nan",
      ],
      correctIndex: 1,
      explanation:
        "Mwens kesyon ogmante chans yon moun konplete fòm nan jiska bout.",
    },
    {
      id: "eq-m13-3",
      moduleId: "m13",
      recommendedLessonSlug: "meet-the-email-marketing-tool",
      prompt: "Ki sa 'otomatizasyon' imèl (triggers) pèmèt yon biznis fè?",
      options: [
        "Voye imèl otomatikman baze sou yon aksyon espesifik kliyan an fè",
        "Efase abòne otomatikman",
        "Ekri kontni imèl la pou ou san kontwòl",
        "Pa gen okenn diferans ak voye imèl manyèlman",
      ],
      correctIndex: 0,
      explanation:
        "Otomatizasyon voye imèl otomatikman baze sou yon aksyon espesifik yon kontak fè.",
    },

    // Module 14 — Sit Web ak Paj Aterisaj
    {
      id: "eq-m14-1",
      moduleId: "m14",
      recommendedLessonSlug: "meet-the-page-builder",
      prompt:
        "Sou konbyen objektif yon bon paj aterisaj (landing page) ta dwe konsantre?",
      options: [
        "Plizyè objektif an menm tan",
        "YON sèl objektif klè",
        "Pa gen objektif espesifik",
        "Otan objektif ke posib",
      ],
      correctIndex: 1,
      explanation:
        "Yon bon paj aterisaj konsantre sou yon sèl objektif klè.",
    },
    {
      id: "eq-m14-2",
      moduleId: "m14",
      recommendedLessonSlug: "meet-the-page-builder",
      prompt: "Poukisa yon paj aterisaj souvan retire meni navigasyon (nav)?",
      options: [
        "Pou fè paj la pi long",
        "Pou diminye distraksyon e kenbe vizitè a konsantre sou yon sèl aksyon",
        "Nav pa janm gen okenn efè",
        "Se yon erè teknik san rezon",
      ],
      correctIndex: 1,
      explanation:
        "Retire nav la diminye distraksyon e kenbe vizitè a konsantre sou objektif la.",
    },
    {
      id: "eq-m14-3",
      moduleId: "m14",
      recommendedLessonSlug: "meet-the-page-builder",
      prompt: "Ki sa ki afekte 'vitès' yon paj web?",
      options: [
        "Sèlman koulè paj la",
        "Kantite ak gwosè imaj/eleman ki chaje sou paj la",
        "Non domèn nan",
        "Lang paj la ekri ladan",
      ],
      correctIndex: 1,
      explanation:
        "Kantite ak gwosè imaj/eleman ki chaje sou yon paj afekte vitès li anpil.",
    },

    // Module 15 — Piblisite Peye
    {
      id: "eq-m15-1",
      moduleId: "m15",
      recommendedLessonSlug: "meet-the-ads-manager",
      prompt:
        "Ki sa ki ta dwe koresponn ak objektif yon kanpay piblisite (pa egzanp konvèsyon)?",
      options: [
        "Platfòm ak objektif kanpay la ta dwe koresponn ak sa paj aterisaj la fèt pou fè",
        "Sèlman bidjè a konte",
        "Koulè rezo sosyal la",
        "Pa gen rapò ant objektif ak paj aterisaj",
      ],
      correctIndex: 0,
      explanation:
        "Objektif kanpay la ta dwe koresponn dirèkteman ak sa paj aterisaj la fèt pou fè.",
    },
    {
      id: "eq-m15-2",
      moduleId: "m15",
      recommendedLessonSlug: "meet-the-ads-manager",
      prompt:
        "Poukisa limite odyans (laj, lokasyon, enterè) yon kanpay pito viser tout moun?",
      options: [
        "Sa pa gen enpòtans",
        "Yon odyans limite ki koresponn ak pèsona a bay pi bon rezilta",
        "Limite odyans lan toujou koute plis chè",
        "Tout moun se toujou pi bon",
      ],
      correctIndex: 1,
      explanation:
        "Yon odyans limite ki koresponn ak pèsona a bay pi bon rezilta pase viser tout moun.",
    },
    {
      id: "eq-m15-3",
      moduleId: "m15",
      recommendedLessonSlug: "meet-the-ads-manager",
      prompt: "Ki sa yon 'pixel' pèmèt yon biznis fè nan piblisite dijital?",
      options: [
        "Amelyore rezolisyon foto yo",
        "Swiv vizitè sit web pou rejwenn yo pita ak retajetaj (retargeting)",
        "Chanje koulè rezo sosyal la",
        "Kreye lojo otomatikman",
      ],
      correctIndex: 1,
      explanation:
        "Yon pixel swiv vizitè sit web pou rejwenn yo pita atravè retajetaj.",
    },

    // Module 16 — Analitik
    {
      id: "eq-m16-1",
      moduleId: "m16",
      recommendedLessonSlug: "meet-the-analytics-dashboard",
      prompt: "Ki fòmil pou kalkile to konvèsyon (conversion rate)?",
      options: [
        "Depans piblisite ÷ vant",
        "Kantite konvèsyon ÷ kantite vizitè, miltipliye pa 100",
        "Kantite vizitè ÷ kantite paj",
        "Revni ÷ kantite anplwaye",
      ],
      correctIndex: 1,
      explanation:
        "To konvèsyon = (kantite konvèsyon ÷ kantite vizitè) × 100.",
    },
    {
      id: "eq-m16-2",
      moduleId: "m16",
      recommendedLessonSlug: "meet-the-analytics-dashboard",
      prompt:
        "Ki diferans ant CAC (Kou pou Akeri Kliyan) ak ROAS (Retou sou Depans Piblisite)?",
      options: [
        "Yo se menm bagay la",
        "CAC mezire konbyen li koute pou jwenn 1 kliyan; ROAS mezire konbyen revni pou chak dola depanse",
        "CAC sèlman pou piblisite gratis",
        "ROAS pa gen rapò ak lajan",
      ],
      correctIndex: 1,
      explanation:
        "CAC mezire kou pou 1 kliyan; ROAS mezire revni jenere pou chak dola piblisite depanse.",
    },
    {
      id: "eq-m16-3",
      moduleId: "m16",
      recommendedLessonSlug: "meet-the-analytics-dashboard",
      prompt: "Konbyen metrik Modil 16 rekòmande pou kòmanse swiv?",
      options: [
        "Otan posib, san limit",
        "2-3 metrik ki dirèkteman koneke ak objektif ou",
        "Okenn metrik pa nesesè",
        "100 metrik",
      ],
      correctIndex: 1,
      explanation:
        "Modil 16 rekòmande kòmanse ak 2-3 metrik ki dirèkteman koneke ak objektif ou.",
    },

    // Module 17 — Otomatizasyon Maketing
    {
      id: "eq-m17-1",
      moduleId: "m17",
      recommendedLessonSlug: "meet-the-automation-tool",
      prompt: "Ki sa yon 'eskò' (lead score) mezire nan yon CRM?",
      options: [
        "Konbyen lajan yon kliyan te depanse deja",
        "Nivo enterè/angajman yon kontak montre, baze sou aksyon li fè",
        "Koulè logo biznis la",
        "Kantite anplwaye ki jere kontak la",
      ],
      correctIndex: 1,
      explanation:
        "Yon eskò mezire nivo enterè/angajman yon kontak, baze sou aksyon li fè.",
    },
    {
      id: "eq-m17-2",
      moduleId: "m17",
      recommendedLessonSlug: "meet-the-automation-tool",
      prompt: "Ki sa yon etap 'kondisyon' (condition) fè nan yon workflow otomatizasyon?",
      options: [
        "Li toujou voye menm mesaj la san chanjman",
        "Li tcheke yon kondisyon (pa egzanp, si moun louvri yon imèl) pou deside pwochen etap la",
        "Li efase kontak yo otomatikman",
        "Li pa gen okenn wòl nan yon workflow",
      ],
      correctIndex: 1,
      explanation:
        "Yon etap kondisyon tcheke yon kritè pou deside ki pwochen etap workflow la ap pran.",
    },
    {
      id: "eq-m17-3",
      moduleId: "m17",
      recommendedLessonSlug: "meet-the-automation-tool",
      prompt:
        "Ki avantaj yon chatbot ka ofri sou yon sit web oswa paj biznis?",
      options: [
        "Reponn kesyon komen otomatikman, kèlkeswa lè",
        "Ranplase nesesite pou nenpòt kontak imen pou tout tan",
        "Li pa gen okenn itilite reyèl",
        "Li sèlman itil pou gwo antrepriz",
      ],
      correctIndex: 0,
      explanation:
        "Yon chatbot ka reponn kesyon komen otomatikman, kèlkeswa lè, san yon moun bezwen la.",
    },

    // Module 18 — Freelans ak Kreye Ajans
    {
      id: "eq-m18-1",
      moduleId: "m18",
      recommendedLessonSlug: "freelancing-vs-starting-an-agency",
      prompt: "Ki diferans prensipal ant travay kòm freelans ak kreye yon ajans?",
      options: [
        "Yo se egzakteman menm bagay la",
        "Yon ajans jeneralman mande jere lòt moun/kontraktè, pa sèlman travay poukont ou",
        "Freelans toujou fè plis lajan",
        "Ajans pa mande okenn kliyan",
      ],
      correctIndex: 1,
      explanation:
        "Yon ajans jeneralman mande jere lòt moun/kontraktè, olye travay sèl kòm yon freelans.",
    },
    {
      id: "eq-m18-2",
      moduleId: "m18",
      recommendedLessonSlug: "freelancing-vs-starting-an-agency",
      prompt: "Poukisa yon kontra ki klè sou etandi (scope) travay la enpòtan?",
      options: [
        "Li pa nesesè si w fè konfyans kliyan an",
        "Li evite malantandi sou sa ki enkli nan travay la ak sa ki pa ladan",
        "Kontra toujou two konplike pou itil",
        "Se sèlman yon fòmalite san valè",
      ],
      correctIndex: 1,
      explanation:
        "Yon kontra klè evite malantandi sou sa ki enkli nan yon travay ak sa ki pa ladan.",
    },
    {
      id: "eq-m18-3",
      moduleId: "m18",
      recommendedLessonSlug: "freelancing-vs-starting-an-agency",
      prompt: "Ki sa ki karakterize yon bon mesaj kontak dirèk (cold outreach)?",
      options: [
        "Yon mesaj jeneral ki voye bay tout moun san chanjman",
        "Yon mesaj espesifik ki montre ou konprann bezwen espesifik moun/biznis la",
        "Yon mesaj ki mande lajan imedyatman",
        "Yon mesaj ki pa mansyone non moun lan",
      ],
      correctIndex: 1,
      explanation:
        "Yon bon mesaj kontak dirèk espesifik e montre ou konprann bezwen moun/biznis la.",
    },

    // Module 19 — Maketing pou Diferan Biznis
    {
      id: "eq-m19-1",
      moduleId: "m19",
      recommendedLessonSlug: "marketing-for-local-service-businesses",
      prompt:
        "Pou biznis ki vann bay dyaspora a oswa nan yon estil Ti Machann, ki sa ki jwe wòl santral nan konfyans?",
      options: [
        "Yon gwo sit web fòmèl obligatwa",
        "Konfyans kominote a ak prèv sosyal (revi, rekòmandasyon)",
        "Pri ki pi ba toujou",
        "Piblisite televizyon",
      ],
      correctIndex: 1,
      explanation:
        "Konfyans kominote a ak prèv sosyal jwe yon wòl santral nan vant style Ti Machann/dyaspora.",
    },
    {
      id: "eq-m19-2",
      moduleId: "m19",
      recommendedLessonSlug: "marketing-for-local-service-businesses",
      prompt:
        "Pou biznis kamyonaj/lojistik ki vann bay lòt biznis (B2B), ki kanal Modil 19 rekòmande?",
      options: [
        "Rezo sosyal jeneral san objektif espesifik",
        "LinkedIn, paske kliyan yo se lòt biznis",
        "Sèlman piblisite kolore",
        "Pa gen okenn kanal espesifik ki pi bon",
      ],
      correctIndex: 1,
      explanation:
        "LinkedIn koresponn ak yon odyans B2B, jan Modil 19 esplike.",
    },
    {
      id: "eq-m19-3",
      moduleId: "m19",
      recommendedLessonSlug: "marketing-for-local-service-businesses",
      prompt:
        "Pou legliz ak kolekte lajan kominotè, ki jan Modil 19 kadre bon maketing?",
      options: [
        "Kòm yon senp anons vant",
        "Kòm yon envitasyon otantik nan yon misyon, ak istwa sou enpak reyèl",
        "San okenn kominikasyon ditou",
        "Sèlman atravè demand lajan dirèk san kontèks",
      ],
      correctIndex: 1,
      explanation:
        "Bon maketing pou legliz/kominote se yon envitasyon otantik, pa yon anons vant.",
    },

    // Module 20 — Pwojè Final
    {
      id: "eq-m20-1",
      moduleId: "m20",
      recommendedLessonSlug: "choosing-your-capstone-business",
      prompt: "Poukisa Pwojè Kapstòn nan itilize yon sèl biznis pou tout 7 leson yo?",
      options: [
        "Paske se pi fasil pou ekri",
        "Paske sa reflete kijan yon vrè kliyan mande yon estrateji konplè ki koresponn ansanm",
        "Paske se yon règ san rezon",
        "Pa gen okenn rezon espesifik",
      ],
      correctIndex: 1,
      explanation:
        "Yon sèl biznis kite chak pyès (mak, sit web, imèl, piblisite) koresponn ansanm, jan yon vrè kliyan ta bezwen l.",
    },
    {
      id: "eq-m20-2",
      moduleId: "m20",
      recommendedLessonSlug: "choosing-your-capstone-business",
      prompt: "Ki 6 etap kapstòn nan swiv?",
      options: [
        "Idantite Mak, Prezans Online, Byen AI, Konvèsyon, Piblisite Peye, Analitik",
        "Sèlman Piblisite ak Analitik",
        "Non, Logo, Koulè, Font",
        "Facebook, Instagram, TikTok, LinkedIn",
      ],
      correctIndex: 0,
      explanation:
        "Kapstòn nan swiv 6 etap: Idantite Mak, Prezans Online, Byen AI, Konvèsyon, Piblisite Peye, ak Analitik.",
    },
    {
      id: "eq-m20-3",
      moduleId: "m20",
      recommendedLessonSlug: "choosing-your-capstone-business",
      prompt: "Ki sa yon revizyon final kapstòn nan verifye?",
      options: [
        "Si chak pyès separe bon poukont li sèlman",
        "Si tout pyès yo (mak, sit web, imèl, piblisite) koresponn ansanm ak pale menm lang lan",
        "Si sit web la gen plis koulè posib",
        "Pa gen bezwen revizyon final",
      ],
      correctIndex: 1,
      explanation:
        "Revizyon final la verifye tout pyès yo koresponn ansanm, pa jis chak youn separeman.",
    },
  ],
};
