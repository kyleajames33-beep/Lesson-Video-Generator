export const compactToken = (value, fallback) => {
  if (typeof value !== 'string') return fallback;
  const compact = value
    .replace(/\bYear\s+/i, 'Y')
    .replace(/\bModule\s+/i, 'M')
    .replace(/\bLesson\s+/i, 'L')
    .replace(/[^A-Za-z0-9]+/g, '');
  return compact || fallback;
};

export const getCompositionId = (lesson, fallbackIndex = 1) =>
  [
    compactToken(lesson.subject, 'Lesson'),
    compactToken(lesson.yearLevel, `Y${fallbackIndex}`),
    compactToken(lesson.module, 'M'),
    compactToken(lesson.lesson, `L${fallbackIndex}`),
  ].join('-');

export const hashText = async (text) => {
  const {createHash} = await import('node:crypto');
  return createHash('sha256').update(text).digest('hex').slice(0, 12);
};

export const estimateSpeechSeconds = (text, wordsPerMinute = 145) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return words === 0 ? 0 : (words / wordsPerMinute) * 60;
};

export const countWords = (text) => {
  if (typeof text !== 'string') return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
};

export const getVoiceoverBudget = ({
  text,
  durationInFrames,
  fps = 30,
  wordsPerMinute = 145,
  safetyRatio = 0.92,
}) => {
  const wordCount = countWords(text);
  const sceneSeconds = durationInFrames / fps;
  const targetSeconds = sceneSeconds * safetyRatio;
  const targetWords = Math.floor((targetSeconds / 60) * wordsPerMinute);
  const estimatedSeconds = estimateSpeechSeconds(text, wordsPerMinute);
  const requiredSeconds = wordCount === 0 ? 0 : estimateSpeechSeconds(text, wordsPerMinute) / safetyRatio;
  const requiredFrames = Math.ceil(requiredSeconds * fps);
  const extraFramesNeeded = Math.max(0, requiredFrames - durationInFrames);
  const wordsToCut = Math.max(0, wordCount - targetWords);

  return {
    wordCount,
    sceneSeconds,
    targetSeconds,
    targetWords,
    estimatedSeconds,
    requiredSeconds,
    requiredFrames,
    extraFramesNeeded,
    wordsToCut,
    status: estimatedSeconds > targetSeconds ? 'tight' : 'ok',
  };
};
