export type CoursePhase =
  | "learn"
  | "words"
  | "platform"
  | "practice"
  | "mission"
  | "check"
  | "reflect";

export interface CourseEvidence {
  missionDone: boolean;
  checkPassed: boolean;
  reflectionChosen: boolean;
}

/**
 * A learner earns a completion check only from an action we can verify.
 * Opening a reading, vocabulary, platform, or practice screen is not proof
 * that the learner completed its work.
 */
export function isCoursePhaseComplete(
  phase: CoursePhase,
  evidence: CourseEvidence,
): boolean {
  if (phase === "mission") return evidence.missionDone;
  if (phase === "check") return evidence.checkPassed;
  if (phase === "reflect") return evidence.reflectionChosen;
  return false;
}

export function canSaveCompletedLesson(
  evidence: CourseEvidence,
  requiresReflection: boolean,
): boolean {
  return (
    evidence.missionDone &&
    evidence.checkPassed &&
    (!requiresReflection || evidence.reflectionChosen)
  );
}
