/**
 * Final exam for Practical English — 36 questions, two per module,
 * self-contained so no lesson context is required. 80% (29/36) to pass.
 */

export interface FinalExamQuestion {
  id: number;
  moduleNumber: number;
  prompt: string;
  options: string[];
  correctIndex: number;
}

export const EXAM_PASS_THRESHOLD = 0.8;

export const finalExamQuestions: FinalExamQuestion[] = [
  {
    id: 1,
    moduleNumber: 1,
    prompt: "Ki fraz ki kòrèk pou salye yon moun pou premye fwa?",
    options: [
      "Hello! My name is Ana.",
      "Hello my name Ana is.",
      "My Ana name is hello.",
      "Name hello my is Ana.",
    ],
    correctIndex: 0,
  },
  {
    id: 2,
    moduleNumber: 1,
    prompt: 'Kijan ou di "Mèsi" an Anglè?',
    options: ["Please", "Thank you", "Sorry", "Yes"],
    correctIndex: 1,
  },
  {
    id: 3,
    moduleNumber: 2,
    prompt: 'Chwazi fòm kòrèk: "She ___ a teacher."',
    options: ["am", "is", "are", "be"],
    correctIndex: 1,
  },
  {
    id: 4,
    moduleNumber: 2,
    prompt: "Ki fraz ki kòrèk pou di ou pa fatige?",
    options: [
      "I am not tired.",
      "I not am tired.",
      "I amn't tired.",
      "I not tired am.",
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    moduleNumber: 3,
    prompt: '"They ___ two children."',
    options: ["has", "have", "having", "haves"],
    correctIndex: 1,
  },
  {
    id: 6,
    moduleNumber: 3,
    prompt: "Ki fraz ki kòrèk pou di ou pa gen lajan?",
    options: [
      "I don't have money.",
      "I not have money.",
      "I haven't money.",
      "I no have money.",
    ],
    correctIndex: 0,
  },
  {
    id: 7,
    moduleNumber: 4,
    prompt: 'Ki jou ki vini apre "Monday"?',
    options: ["Wednesday", "Tuesday", "Sunday", "Friday"],
    correctIndex: 1,
  },
  {
    id: 8,
    moduleNumber: 4,
    prompt: '"There ___ a chair in the room." (yon sèl chèz)',
    options: ["is", "are", "be", "am"],
    correctIndex: 0,
  },
  {
    id: 9,
    moduleNumber: 5,
    prompt: "Ki mo kesyon ou itilize pou mande yon rezon?",
    options: ["Who", "When", "Why", "Which"],
    correctIndex: 2,
  },
  {
    id: 10,
    moduleNumber: 5,
    prompt: "Ou vle konnen pri yon bagay. Ki mo ou itilize?",
    options: ["How many", "How much", "How", "Which"],
    correctIndex: 1,
  },
  {
    id: 11,
    moduleNumber: 6,
    prompt: '"He ___ to work every day."',
    options: ["go", "goes", "going", "gone"],
    correctIndex: 1,
  },
  {
    id: 12,
    moduleNumber: 6,
    prompt: 'Ki vèb ki dekri "manje"?',
    options: ["eat", "sleep", "walk", "work"],
    correctIndex: 0,
  },
  {
    id: 13,
    moduleNumber: 7,
    prompt: '"Can you ___ me a hand?"',
    options: ["give", "make", "do", "get"],
    correctIndex: 0,
  },
  {
    id: 14,
    moduleNumber: 7,
    prompt: '"I need to ___ a decision."',
    options: ["do", "make", "take", "give"],
    correctIndex: 1,
  },
  {
    id: 15,
    moduleNumber: 8,
    prompt: "Nan yon restoran, ki fraz ou itilize pou kòmande manje?",
    options: [
      "I'd like the chicken, please.",
      "Give chicken.",
      "Chicken now.",
      "I chicken want.",
    ],
    correctIndex: 0,
  },
  {
    id: 16,
    moduleNumber: 8,
    prompt: "Nan telefòn, kijan ou prezante tèt ou?",
    options: ["I am here.", "This is Sarah.", "Sarah talking.", "Hello Sarah."],
    correctIndex: 1,
  },
  {
    id: 17,
    moduleNumber: 9,
    prompt: "Ki fraz ki mande pèmisyon politès?",
    options: [
      "Can I open the window?",
      "I open window.",
      "Open window now.",
      "Window open?",
    ],
    correctIndex: 0,
  },
  {
    id: 18,
    moduleNumber: 9,
    prompt: '"I ___ like to order a coffee."',
    options: ["am", "would", "do", "have"],
    correctIndex: 1,
  },
  {
    id: 19,
    moduleNumber: 10,
    prompt: '"___ going to the store."',
    options: ["Your", "You're", "Yore", "Yor"],
    correctIndex: 1,
  },
  {
    id: 20,
    moduleNumber: 10,
    prompt: '"This book is ___."',
    options: ["your", "you're", "yours", "yous"],
    correctIndex: 2,
  },
  {
    id: 21,
    moduleNumber: 11,
    prompt: '"Please ___ the light before you leave."',
    options: ["turn off", "turn on", "turn up", "turn down"],
    correctIndex: 0,
  },
  {
    id: 22,
    moduleNumber: 11,
    prompt: '"I need to ___ early tomorrow."',
    options: ["get up", "get out", "get in", "get on"],
    correctIndex: 0,
  },
  {
    id: 23,
    moduleNumber: 12,
    prompt: "Ki mo ki dekri lè entènèt ou pa mache byen?",
    options: ["fast", "slow", "strong", "new"],
    correctIndex: 1,
  },
  {
    id: 24,
    moduleNumber: 12,
    prompt: 'Ki mo ki vle di "modpas"?',
    options: ["Login", "Password", "Account", "Settings"],
    correctIndex: 1,
  },
  {
    id: 25,
    moduleNumber: 13,
    prompt: "Ki fraz ki apwopriye nan yon antretyen djòb?",
    options: [
      "I am ready to learn and work hard.",
      "I don't really care.",
      "Ask someone else.",
      "I don't know.",
    ],
    correctIndex: 0,
  },
  {
    id: 26,
    moduleNumber: 13,
    prompt: "Ki fason ki pi pwofesyonèl pou fèmen yon imèl travay?",
    options: ["Bye,", "Best regards,", "See ya,", "Later,"],
    correctIndex: 1,
  },
  {
    id: 27,
    moduleNumber: 14,
    prompt: '"A: How\'s it going? B: Not bad, thanks." Kisa B vle di?',
    options: [
      "B is doing okay.",
      "B is very sad.",
      "B doesn't understand.",
      "B is angry.",
    ],
    correctIndex: 0,
  },
  {
    id: 28,
    moduleNumber: 14,
    prompt:
      '"A: Can I speak to David? B: Sorry, he\'s not here right now." Kote David ye?',
    options: [
      "He is there.",
      "He is not there.",
      "He is sleeping.",
      "He is on the phone.",
    ],
    correctIndex: 1,
  },
  {
    id: 29,
    moduleNumber: 15,
    prompt: 'Kisa "It\'s raining cats and dogs" vle di?',
    options: [
      "Anpil bèt nan lari.",
      "Lapli ap tonbe anpil.",
      "Yon tan bèl.",
      "Pa gen lapli.",
    ],
    correctIndex: 1,
  },
  {
    id: 30,
    moduleNumber: 15,
    prompt:
      "Ki sijè ki pi san danje pou small talk ak yon moun ou fèk rankontre?",
    options: ["Salary", "Age", "The weather", "Religion"],
    correctIndex: 2,
  },
  {
    id: 31,
    moduleNumber: 16,
    prompt: "Ki fraz ki ekri kòrèkteman?",
    options: [
      "i live in miami.",
      "I live in Miami.",
      "I live in miami.",
      "i Live in Miami.",
    ],
    correctIndex: 1,
  },
  {
    id: 32,
    moduleNumber: 16,
    prompt: "Ki fraz ki gen ponktyasyon kòrèk?",
    options: [
      "Its raining today",
      "It's raining today.",
      "Its raining today.",
      "It's raining today",
    ],
    correctIndex: 1,
  },
  {
    id: 33,
    moduleNumber: 17,
    prompt:
      '"She was nervous, but her coworkers were friendly." Kijan Maria te santi l?',
    options: ["Kontan", "Nève", "Fache", "Fatige"],
    correctIndex: 1,
  },
  {
    id: 34,
    moduleNumber: 17,
    prompt: "Ki twa pati yon bon istwa toujou genyen?",
    options: [
      "Kòmansman, mitan, fen",
      "Vokabilè, gramè, ponktyasyon",
      "Kesyon, repons, opinyon",
      "Non, laj, vil",
    ],
    correctIndex: 0,
  },
  {
    id: 35,
    moduleNumber: 18,
    prompt: "Ki fraz ki montre yon aksyon k ap pase kounye a?",
    options: [
      "The sun shine.",
      "The sun is shining.",
      "The sun shines yesterday.",
      "The sun shined.",
    ],
    correctIndex: 1,
  },
  {
    id: 36,
    moduleNumber: 18,
    prompt: '"Excuse me, what time is the next bus?" — ki kalite fraz sa a ye?',
    options: [
      "Storytelling",
      "Reacting",
      "Role-play (mande yon enfòmasyon reyèl)",
      "Grammar rule",
    ],
    correctIndex: 2,
  },
];

export interface FinalExamResult {
  correctCount: number;
  total: number;
  score: number;
  passed: boolean;
  missedModules: number[];
}

export function computeFinalExamResult(
  answers: Record<number, number>,
): FinalExamResult {
  const total = finalExamQuestions.length;
  const missedModules = new Set<number>();
  let correctCount = 0;

  for (const question of finalExamQuestions) {
    if (answers[question.id] === question.correctIndex) {
      correctCount += 1;
    } else {
      missedModules.add(question.moduleNumber);
    }
  }

  const score = correctCount / total;

  return {
    correctCount,
    total,
    score,
    passed: score >= EXAM_PASS_THRESHOLD,
    missedModules: Array.from(missedModules).sort((a, b) => a - b),
  };
}
