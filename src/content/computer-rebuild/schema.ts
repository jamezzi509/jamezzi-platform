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

/** One self-rated skill row inside a readiness reflection. */
export interface CompetencyRating {
  skillHt: string;
  skillEn: string;
}

/** One open-ended prompt inside a readiness reflection, answered in free text. */
export interface ReflectionQuestion {
  id: string;
  promptHt: string;
}

/**
 * Confidence Checkpoint 4 — Section 8.4 describes this one as "the capstone
 * rubric plus final readiness reflection," structurally unlike Checkpoints
 * 1-3: there is nothing to quiz (no submitted capstone artifact exists to
 * grade), so this is a self-assessment with no pass/fail, not a scored quiz.
 * Kept as its own type rather than forced into the Checkpoint shape, which
 * would otherwise carry a meaningless passingPercent.
 */
export interface ReadinessReflection {
  id: string;
  order: number;
  /** The module this reflection follows — used to lock it until prerequisites are complete. */
  afterModuleId: string;
  titleHt: string;
  titleEn: string;
  intro: string;
  /** The three-point scale every competency row is rated against, low to high. */
  scaleLabelsHt: [string, string, string];
  competencies: CompetencyRating[];
  openQuestions: ReflectionQuestion[];
}

/**
 * A short "how do you feel right now" self-rating shown once, before Module
 * 1 — the "before" half of the growth-summary comparison against Checkpoint
 * 4's readiness reflection. Uses the same competency list and scale as that
 * reflection (see competencies.ts) so the two records compare directly.
 * Unlike ReadinessReflection, it is never locked and has no open questions —
 * it is a single, skippable, one-time snapshot.
 */
export interface SkillsIntake {
  id: string;
  titleHt: string;
  titleEn: string;
  intro: string;
  scaleLabelsHt: [string, string, string];
  competencies: CompetencyRating[];
}

/**
 * One question in the final exam's question bank — Section 8.5. Tagged with
 * the module it covers (for even bank coverage and, on a miss, a targeted
 * lesson to review) rather than a narrow skillTag like checkpoint questions,
 * since the exam samples broadly rather than testing one scenario.
 */
export interface ExamQuestion {
  id: string;
  moduleId: string;
  recommendedLessonSlug: string;
  question: KnowledgeCheckQuestion;
}

/**
 * The final exam — Section 8.5: 50 scenario-heavy questions covering every
 * module, randomly drawn from a larger bank each attempt, 80% required,
 * unlimited retries. bank.length is intentionally larger than
 * questionsPerAttempt so a retry draws a genuinely different set.
 */
export interface FinalExam {
  id: string;
  titleHt: string;
  titleEn: string;
  intro: string;
  questionsPerAttempt: number;
  passingPercent: number;
  bank: ExamQuestion[];
}

export function getPlatformStepsFor(
  steps: PlatformSteps,
  platform: Exclude<Platform, "universal">,
): string[] | undefined {
  return steps[platform];
}
