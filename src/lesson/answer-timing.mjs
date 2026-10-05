// Opt-in first-exposure boundary. Legacy answerStart remains a fade midpoint.
export function answerTiming(revealDelays = {}, responseHold) {
  if (responseHold && (!Number.isInteger(responseHold.startFrame) || !Number.isInteger(responseHold.endFrame) || responseHold.startFrame < 0 || responseHold.endFrame <= responseHold.startFrame)) throw new Error('Invalid measured response interval.');
  const boundary = revealDelays.answerVisibleStart ?? responseHold?.endFrame;
  const midpoint = revealDelays.answerStart ?? 360;
  if (boundary !== undefined && (!Number.isInteger(boundary) || boundary < 0)) throw new Error('answerVisibleStart must be a nonnegative integer frame.');
  if (responseHold && boundary < responseHold.endFrame) throw new Error('Answer would appear during the measured response interval.');
  return boundary === undefined
    ? {fadeStart: midpoint - 24, fadeEnd: midpoint + 24, pauseFadeStart: midpoint - 28, pauseFadeEnd: midpoint + 8, countdownEnd: midpoint}
    : {fadeStart: boundary, fadeEnd: boundary + 48, pauseFadeStart: boundary, pauseFadeEnd: boundary + 36, countdownEnd: boundary};
}
