/**
 * Recorded English audio registry.
 *
 * Add reviewed MP3 files under public/audio/english and register their exact
 * phrase here. The lesson player uses these files first and falls back to the
 * learner's device voice only when a recording has not been produced yet.
 */
export const englishRecordedAudio: Record<string, string> = {};

export function getEnglishRecordedAudio(text: string) {
  return englishRecordedAudio[text.trim()] ?? null;
}
