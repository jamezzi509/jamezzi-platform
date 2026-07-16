/**
 * Content schema for the rebuilt "Computer & Internet Essentials" course,
 * per computer-internet-essentials-master-brief.md Sections 5.4 and 14.1.
 *
 * This replaces the flat ComputerPremiumLesson model (src/content/computer-lessons-premium.ts)
 * for modules rebuilt against the master brief. The old model stays in place
 * until each module it covers has a rebuilt equivalent (see docs/computer-course-migration-audit.md).
 */

export type Platform = "universal" | "windows" | "mac" | "android" | "iphone";

/** How a lesson's platform content is structured — Section 5.2 modes A-D. */
export type LessonMode =
  | "universal" // Mode A: concept and task are the same on both platforms
  | "shared_steps" // Mode B: shared concept, platform-specific steps within one lesson
  | "platform_variant" // Mode C: distinct lesson per platform, same learning outcome
  | "cross_device"; // Mode D: Android/iPhone support inside a computer-focused lesson

export interface DigitalWord {
  term: string;
  definition: string;
  example: string;
}

export interface PlatformSteps {
  windows?: string[];
  mac?: string[];
  android?: string[];
  iphone?: string[];
  /** What the learner should see if the result doesn't match — Section 7.2 "recovery note". */
  recoveryNote?: string;
}

export interface Mistake {
  wrong: string;
  right: string;
  why: string;
}

export interface AiHelp {
  /** One safe, specific way to use an AI assistant for this lesson. */
  prompt: string;
  /** Standard reminder shown with every AI box — Section 7.2. */
  reminder: string;
}

export type KnowledgeCheckQuestion =
  | {
      kind: "multiple_choice";
      prompt: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    }
  | {
      kind: "select_all";
      prompt: string;
      options: string[];
      correctIndexes: number[];
      explanation: string;
    }
  | {
      kind: "order_steps";
      prompt: string;
      steps: string[];
      correctOrder: number[];
      explanation: string;
    }
  | {
      kind: "match_term";
      prompt: string;
      pairs: { term: string; meaning: string }[];
      explanation: string;
    }
  | {
      kind: "scenario_decision";
      prompt: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    };

export interface Mission {
  scenario: string;
  objective: string;
  requiredSteps: string[];
  successCriteria: string[];
  hint?: string;
  platformNotes?: string;
  stretchChallenge?: string;
}

export interface ReflectionPrompt {
  statement: string;
}

/** A single labeled diagram rendered as SVG/HTML — never a generated photo. Section 9A.2. */
export interface DiagramRef {
  diagramId: string;
  caption?: string;
}

export type LessonBlock =
  | { id: string; type: "goal"; platforms?: Platform[]; outcome: string }
  | { id: string; type: "explanation"; platforms?: Platform[]; text: string }
  | { id: string; type: "diagram"; platforms?: Platform[]; diagram: DiagramRef }
  | {
      id: string;
      type: "vocabulary";
      platforms?: Platform[];
      words: DigitalWord[];
    }
  | {
      id: string;
      type: "platform_steps";
      platforms?: Platform[];
      steps: PlatformSteps;
    }
  | { id: string; type: "practice"; platforms?: Platform[]; instructions: string }
  | { id: string; type: "mission"; platforms?: Platform[]; mission: Mission }
  | { id: string; type: "mistake"; platforms?: Platform[]; mistake: Mistake }
  | { id: string; type: "safety"; platforms?: Platform[]; reminders: string[] }
  | { id: string; type: "ai_help"; platforms?: Platform[]; aiHelp: AiHelp }
  | {
      id: string;
      type: "knowledge_check";
      platforms?: Platform[];
      questions: KnowledgeCheckQuestion[];
    }
  | {
      id: string;
      type: "reflection";
      platforms?: Platform[];
      prompts: ReflectionPrompt[];
    };

export interface CourseLesson {
  id: string;
  slug: string;
  moduleId: string;
  order: number;
  titleHt: string;
  titleEn: string;
  estimatedMinutes: number;
  mode: LessonMode;
  objectives: string[];
  blocks: LessonBlock[];
  requiredMission?: boolean;
  practiceFiles?: string[];
  lastVerifiedAt?: string;
  reviewStatus: "draft" | "in_review" | "approved";
}

export interface CourseModule {
  id: string;
  order: number;
  titleHt: string;
  titleEn: string;
  purpose: string;
  learningOutcomes: string[];
}

/**
 * One question inside a confidence checkpoint — Section 8.4. Tags the skill
 * it tests and the lesson to recommend if the learner misses it, so a failed
 * attempt produces a targeted review path rather than a bare score.
 */
export interface CheckpointQuestion {
  skillTag: string;
  skillLabel: string;
  recommendedLessonSlug: string;
  question: KnowledgeCheckQuestion;
}

/** A larger, multi-skill scenario assessment placed after a group of modules — Section 8.4. */
export interface Checkpoint {
  id: string;
  order: number;
  /** The module this checkpoint follows — used to lock it until prerequisites are complete. */
  afterModuleId: string;
  titleHt: string;
  titleEn: string;
  scenario: string;
  skillsCombined: string[];
  passingPercent: number;
  questions: CheckpointQuestion[];
}

export function getPlatformStepsFor(
  steps: PlatformSteps,
  platform: Exclude<Platform, "universal">,
): string[] | undefined {
  return steps[platform];
}
