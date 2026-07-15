/**
 * Placement quiz — English for Beginners.
 * Ported from AJ's "tes-plasman-english-beginners.jsx" prototype.
 * Instructional language is Haitian Creole; tested content is English.
 */

export interface PlacementQuestion {
  id: number;
  band: string;
  prompt: string;
  options: string[];
  correct: number;
}

export interface PlacementResult {
  num: number;
  name: string;
  eng: string;
}

export const placementQuestions: PlacementQuestion[] = [
  // Band A -- Modil 1 (Premye Pa nan Anglè w)
  {
    id: 1,
    band: "A",
    prompt: "Hello! ___ are you?",
    options: ["How", "What", "Where", "Who"],
    correct: 0,
  },
  {
    id: 2,
    band: "A",
    prompt: '"How are you?" -- "I am fine, ___"',
    options: ["thank you.", "Monday.", "five o’clock.", "the red one."],
    correct: 0,
  },
  {
    id: 3,
    band: "A",
    prompt: '"Thank you!" -- "You’re ___"',
    options: ["welcome.", "weekend.", "window.", "wonder."],
    correct: 0,
  },

  // Band B -- Modil 2 (Vèb Pisan #1: To Be)
  {
    id: 4,
    band: "B",
    prompt: "She ___ a teacher.",
    options: ["is", "am", "are", "be"],
    correct: 0,
  },
  {
    id: 5,
    band: "B",
    prompt: "They ___ happy today.",
    options: ["is", "am", "are", "be"],
    correct: 2,
  },
  {
    id: 6,
    band: "B",
    prompt: "I ___ tired right now.",
    options: ["am not", "is not", "are not", "not am"],
    correct: 0,
  },

  // Band C -- Modil 3-4 (To Have / Vokabilè Chak Jou)
  {
    id: 7,
    band: "C",
    prompt: "He ___ two brothers.",
    options: ["have", "has", "having", "had"],
    correct: 1,
  },
  {
    id: 8,
    band: "C",
    prompt: "I ___ a headache today.",
    options: ["have", "has", "am", "is"],
    correct: 0,
  },
  {
    id: 9,
    band: "C",
    prompt: "Which word means a room where you sleep?",
    options: ["Kitchen", "Bedroom", "Bathroom", "Garage"],
    correct: 1,
  },

  // Band D -- Modil 5-6 (Kesyon yo / Vèb Aksyon)
  {
    id: 10,
    band: "D",
    prompt: "___ do you live?",
    options: ["Who", "What", "Where", "When"],
    correct: 2,
  },
  {
    id: 11,
    band: "D",
    prompt: "___ is your birthday?",
    options: ["Where", "When", "Who", "Which"],
    correct: 1,
  },
  {
    id: 12,
    band: "D",
    prompt: "I ___ to the market every Saturday.",
    options: ["go", "goes", "going", "gone"],
    correct: 0,
  },

  // Band E -- Modil 7-9 (Vèb Pisan Pati 2 / Konvèsasyon / Modèl)
  {
    id: 13,
    band: "E",
    prompt: "Can you ___ me a hand with this?",
    options: ["give", "take", "make", "do"],
    correct: 0,
  },
  {
    id: 14,
    band: "E",
    prompt: '"Would you like some coffee?" -- "___"',
    options: ["Yes, please.", "Yes, I have.", "Yes, I am.", "Yes, do."],
    correct: 0,
  },
  {
    id: 15,
    band: "E",
    prompt: "I’d like ___ a reservation for two.",
    options: ["to make", "making", "make", "made"],
    correct: 0,
  },
];

export const placementBandOrder = ["A", "B", "C", "D", "E"] as const;

export const placementResults: Record<string, PlacementResult> = {
  A: { num: 1, name: "Premye Pa nan Anglè w", eng: "Your First English" },
  B: {
    num: 2,
    name: "Vèb Pisan #1 -- To Be",
    eng: "Power Verb #1 (To Be)",
  },
  C: {
    num: 3,
    name: "Vèb Pisan #2 -- To Have",
    eng: "Power Verb #2 (To Have)",
  },
  D: { num: 5, name: "Kesyon yo", eng: "Questions" },
  E: { num: 7, name: "Vèb Pisan Pati 2", eng: "Power Verbs Part 2" },
  PASS: { num: 10, name: "Anglè Konfizyon", eng: "Confusing English" },
};

export const placementStartOver: PlacementResult = {
  num: 1,
  name: "Premye Pa nan Anglè w",
  eng: "Your First English",
};

export function computePlacement(
  answers: Record<number, number>,
): PlacementResult {
  for (const band of placementBandOrder) {
    const bandQuestions = placementQuestions.filter((q) => q.band === band);
    const correctCount = bandQuestions.filter(
      (q) => answers[q.id] === q.correct,
    ).length;
    if (correctCount < 2) return placementResults[band];
  }
  return placementResults.PASS;
}
