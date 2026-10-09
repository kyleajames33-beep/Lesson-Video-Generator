export function answerTiming(revealDelays?: Record<string, number>, responseHold?: {startFrame: number; endFrame: number}): {
  fadeStart: number;
  fadeEnd: number;
  pauseFadeStart: number;
  pauseFadeEnd: number;
  countdownEnd: number;
};
export function hookRevealTiming(revealDelays?: Record<string, number>, responseHold?: {startFrame: number; endFrame: number}): Record<string, number>;
