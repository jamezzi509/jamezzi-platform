export interface EnglishLevel {
  number: number;
  title: string;
  promise: string;
  topics: string[];
}

export const englishLevels: EnglishLevel[] = [
  {
    number: 1,
    title: "First English",
    promise: "Build your first useful sentences and say them with confidence.",
    topics: ["First words", "Pronunciation", "To be", "To have", "Questions"],
  },
  {
    number: 2,
    title: "Everyday English",
    promise: "Handle the language you hear and use in everyday life.",
    topics: [
      "Daily vocabulary",
      "Action verbs",
      "Conversations",
      "Sentence patterns",
    ],
  },
  {
    number: 3,
    title: "Practical English",
    promise: "Use English more clearly at work, online, and in writing.",
    topics: [
      "Confusing English",
      "Phrasal verbs",
      "Technology",
      "Work",
      "Writing",
    ],
  },
  {
    number: 4,
    title: "English Confidence",
    promise:
      "Understand natural English and express yourself with less hesitation.",
    topics: [
      "Listening",
      "Stories",
      "Natural expressions",
      "Culture",
      "Thinking in English",
    ],
  },
];
