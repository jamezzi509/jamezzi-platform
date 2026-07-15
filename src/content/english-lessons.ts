export interface LessonChoice {
  prompt: string;
  options: string[];
  correct: string;
}

export interface EnglishInteractiveLesson {
  slug: string;
  title: string;
  outcome: string;
  learnTitle: string;
  learnCopy: string;
  words: Array<{ word: string; context: string; emoji: string }>;
  listenWord: string;
  phonetic: string;
  choice: LessonChoice;
  practice: LessonChoice;
  mission: string;
}

export const englishInteractiveLessons: EnglishInteractiveLesson[] = [
  {
    slug: "hello-and-goodbye",
    title: "Hello and Goodbye",
    outcome: "Greet someone and end a simple conversation.",
    learnTitle: "Two words. Two moments.",
    learnCopy: "Use Hello when you meet someone. Use Goodbye when you leave.",
    words: [
      { word: "Hello", context: "MEETING", emoji: "👋" },
      { word: "Goodbye", context: "LEAVING", emoji: "🚶" },
    ],
    listenWord: "Hello",
    phonetic: "heh · LOH",
    choice: {
      prompt: "Someone walks into the room and waves. What do you say?",
      options: ["Hello", "Goodbye"],
      correct: "Hello",
    },
    practice: {
      prompt: "You are leaving your friend. What do you say?",
      options: ["Goodbye", "Hello"],
      correct: "Goodbye",
    },
    mission: "Say Hello when you meet someone, or Goodbye when you leave.",
  },
  {
    slug: "my-name-is",
    title: "My Name Is…",
    outcome: "Introduce yourself and ask another person’s name.",
    learnTitle: "Say your name. Ask for a name.",
    learnCopy:
      "Use My name is… to introduce yourself and What is your name? to ask.",
    words: [
      { word: "My name is James.", context: "INTRODUCE", emoji: "🙂" },
      { word: "What is your name?", context: "ASK", emoji: "❓" },
    ],
    listenWord: "My name is James.",
    phonetic: "my NAYM iz JAYMZ",
    choice: {
      prompt: "You meet Marie for the first time. Introduce yourself.",
      options: ["My name is James.", "Goodbye, James."],
      correct: "My name is James.",
    },
    practice: {
      prompt: "You want to know her name. What do you ask?",
      options: ["What is your name?", "Where is your name?"],
      correct: "What is your name?",
    },
    mission:
      "Introduce yourself in English to one person or to your phone camera.",
  },
  {
    slug: "please-thank-you-yes-no",
    title: "Please, Thank You, Yes, and No",
    outcome: "Use four essential words naturally and politely.",
    learnTitle: "Four small words you will use everywhere.",
    learnCopy: "These words help you answer clearly and speak politely.",
    words: [
      { word: "Please", context: "ASK POLITELY", emoji: "🙏" },
      { word: "Thank you", context: "SHOW GRATITUDE", emoji: "💛" },
      { word: "Yes", context: "AGREE", emoji: "✅" },
      { word: "No", context: "DECLINE", emoji: "✋" },
    ],
    listenWord: "Thank you",
    phonetic: "THANK yoo",
    choice: {
      prompt: "Someone gives you a glass of water. What do you say?",
      options: ["Thank you", "No"],
      correct: "Thank you",
    },
    practice: {
      prompt: "You ask for water politely. Which word helps?",
      options: ["Please", "Goodbye"],
      correct: "Please",
    },
    mission: "Use Please or Thank you once today.",
  },
  {
    slug: "english-alphabet",
    title: "The English Alphabet",
    outcome: "Recognize uppercase and lowercase English letters.",
    learnTitle: "The same letter can have two shapes.",
    learnCopy: "Uppercase letters are large. Lowercase letters are small.",
    words: [
      { word: "A a", context: "LETTER A", emoji: "🍎" },
      { word: "B b", context: "LETTER B", emoji: "⚽" },
      { word: "C c", context: "LETTER C", emoji: "🐈" },
    ],
    listenWord: "A, B, C",
    phonetic: "AY · BEE · SEE",
    choice: {
      prompt: "Which pair shows uppercase and lowercase A?",
      options: ["A a", "A b"],
      correct: "A a",
    },
    practice: {
      prompt: "Which letter begins the word cat?",
      options: ["C", "B"],
      correct: "C",
    },
    mission: "Find and name three English letters around you.",
  },
  {
    slug: "letter-sounds",
    title: "Letters and Their Sounds",
    outcome: "Hear and repeat common English letter sounds.",
    learnTitle: "A letter name and its sound can be different.",
    learnCopy: "Listen to the first sound in each simple word.",
    words: [
      { word: "Apple", context: "A SOUND", emoji: "🍎" },
      { word: "Ball", context: "B SOUND", emoji: "⚽" },
      { word: "Cat", context: "C SOUND", emoji: "🐈" },
    ],
    listenWord: "Apple, ball, cat",
    phonetic: "A · B · K",
    choice: {
      prompt: "Which word starts with the B sound?",
      options: ["Ball", "Apple"],
      correct: "Ball",
    },
    practice: {
      prompt: "Which word starts with the C sound?",
      options: ["Cat", "Ball"],
      correct: "Cat",
    },
    mission: "Say apple, ball, and cat slowly. Notice the first sound.",
  },
  {
    slug: "pronunciation-basics",
    title: "Your First Pronunciation Tools",
    outcome: "Notice mouth position, rhythm, and sounds without fear.",
    learnTitle: "Clear is more important than perfect.",
    learnCopy:
      "Watch the mouth, listen to the rhythm, and repeat without rushing.",
    words: [
      { word: "Hello", context: "STRESS: LO", emoji: "👄" },
      { word: "Thank you", context: "TONGUE NEAR TEETH", emoji: "👅" },
    ],
    listenWord: "Hello. Thank you.",
    phonetic: "heh-LOH · THANK-yoo",
    choice: {
      prompt: "What is the goal of pronunciation practice?",
      options: ["Be understood", "Lose your identity"],
      correct: "Be understood",
    },
    practice: {
      prompt: "Which is a helpful way to practice?",
      options: ["Listen and repeat slowly", "Speak as fast as possible"],
      correct: "Listen and repeat slowly",
    },
    mission: "Record yourself saying Hello and Thank you once.",
  },
  {
    slug: "most-useful-words",
    title: "Words You Will Use Every Day",
    outcome: "Recognize and use a small set of high-value English words.",
    learnTitle: "Start with words that unlock action.",
    learnCopy:
      "Help, stop, here, and there are useful in many real situations.",
    words: [
      { word: "Help", context: "NEED SUPPORT", emoji: "🆘" },
      { word: "Stop", context: "END AN ACTION", emoji: "🛑" },
      { word: "Here", context: "NEAR ME", emoji: "👇" },
      { word: "There", context: "AWAY FROM ME", emoji: "👉" },
    ],
    listenWord: "Help. Stop. Here. There.",
    phonetic: "HELP · STOP · HEER · THAIR",
    choice: {
      prompt: "You need support. Which word do you use?",
      options: ["Help", "There"],
      correct: "Help",
    },
    practice: {
      prompt: "The book is close to you. Which word fits?",
      options: ["Here", "There"],
      correct: "Here",
    },
    mission: "Point to one object and say Here or There.",
  },
  {
    slug: "i-am",
    title: "I Am…",
    outcome: "Say who you are and how you feel.",
    learnTitle: "Use I am to talk about yourself.",
    learnCopy: "Put a name, role, or feeling after I am.",
    words: [
      { word: "I am James.", context: "NAME", emoji: "🙂" },
      { word: "I am happy.", context: "FEELING", emoji: "😊" },
    ],
    listenWord: "I am happy.",
    phonetic: "eye am HAP-ee",
    choice: {
      prompt: "You feel happy. What do you say?",
      options: ["I am happy.", "I have happy."],
      correct: "I am happy.",
    },
    practice: {
      prompt: "Complete: ___ James.",
      options: ["I am", "I is"],
      correct: "I am",
    },
    mission: "Say I am followed by your name and one feeling.",
  },
  {
    slug: "i-have",
    title: "I Have…",
    outcome: "Talk simply about what you have.",
    learnTitle: "Use I have for something with you or belonging to you.",
    learnCopy: "Put a person, object, or idea after I have.",
    words: [
      { word: "I have a phone.", context: "OBJECT", emoji: "📱" },
      { word: "I have an idea.", context: "IDEA", emoji: "💡" },
    ],
    listenWord: "I have a phone.",
    phonetic: "eye HAV uh FOHN",
    choice: {
      prompt: "A phone is in your hand. What do you say?",
      options: ["I have a phone.", "I am a phone."],
      correct: "I have a phone.",
    },
    practice: {
      prompt: "Complete: I ___ an idea.",
      options: ["have", "am"],
      correct: "have",
    },
    mission: "Point to one object you own and say I have…",
  },
  {
    slug: "simple-questions",
    title: "Your First Questions",
    outcome: "Ask and answer a few useful questions.",
    learnTitle: "A question invites an answer.",
    learnCopy: "Start with What or Where to ask for simple information.",
    words: [
      { word: "What is this?", context: "ASK ABOUT A THING", emoji: "❓" },
      { word: "Where is it?", context: "ASK ABOUT A PLACE", emoji: "📍" },
    ],
    listenWord: "What is this?",
    phonetic: "WUHT iz THIS",
    choice: {
      prompt: "You do not know an object. What do you ask?",
      options: ["What is this?", "Where is this?"],
      correct: "What is this?",
    },
    practice: {
      prompt: "You cannot find your phone. What do you ask?",
      options: ["Where is my phone?", "What is my phone?"],
      correct: "Where is my phone?",
    },
    mission: "Ask What is this? about one object near you.",
  },
  {
    slug: "first-conversation-mission",
    title: "Your First Conversation",
    outcome:
      "Combine greetings, an introduction, and a question in one mission.",
    learnTitle: "Put your first English together.",
    learnCopy: "A short conversation can begin with only three simple moves.",
    words: [
      { word: "Hello!", context: "1 · GREET", emoji: "👋" },
      { word: "My name is Ana.", context: "2 · INTRODUCE", emoji: "🙂" },
      { word: "What is your name?", context: "3 · ASK", emoji: "❓" },
    ],
    listenWord: "Hello. My name is Ana. What is your name?",
    phonetic: "heh-LOH · my NAYM iz AN-uh",
    choice: {
      prompt: "What comes first in a new conversation?",
      options: ["Hello", "Goodbye"],
      correct: "Hello",
    },
    practice: {
      prompt: "What can you ask after saying your name?",
      options: ["What is your name?", "What is my name?"],
      correct: "What is your name?",
    },
    mission:
      "Say the full three-line conversation aloud without reading it twice.",
  },
];

export function getEnglishInteractiveLesson(slug: string) {
  return englishInteractiveLessons.find((lesson) => lesson.slug === slug);
}
