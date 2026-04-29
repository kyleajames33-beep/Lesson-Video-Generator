import {mkdirSync, readFileSync, readdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {countWords, getCompositionId, getVoiceoverBudget} from './lesson-utils.mjs';

const dataDir = path.resolve('src/data');
const outputDir = 'out/audits';
const fpsFallback = 30;
const transitionFrames = 24;
const preferredDurationSeconds = {
  min: 60,
  max: 210,
};

const clampScore = (score) => Math.max(1, Math.min(10, Math.round(score)));
const hasText = (value) => typeof value === 'string' && value.trim().length > 0;

const getLessonFiles = () =>
  readdirSync(dataDir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => path.join(dataDir, file));

const countScenes = (lesson, predicate) => lesson.scenes.filter(predicate).length;

const getDurationSeconds = (lesson) => {
  const fps = lesson.fps ?? fpsFallback;
  const scenes = lesson.scenes ?? [];
  const rawFrames = scenes.reduce((sum, scene) => sum + scene.durationInFrames, 0);
  const transitionOverlap = transitionFrames * Math.max(0, scenes.length - 1);
  return (rawFrames - transitionOverlap) / fps;
};

const getDurationStatus = (durationSeconds) => {
  if (durationSeconds < preferredDurationSeconds.min) return 'too-short';
  if (durationSeconds > preferredDurationSeconds.max) return 'too-long';
  return 'target';
};

const hasDecisionLanguage = (value) =>
  /\b(ask|choose|decide|which|what|find|finding|target|unit|formula|known|when|if|identify|calculate|convert|compare|apply|bridge|method)\b/i.test(
    value ?? ''
  );

const isSpecificPrompt = (value) => hasText(value) && countWords(value) >= 5 && hasDecisionLanguage(value);

const getSceneDensityIssues = (lesson) =>
  (lesson.scenes ?? [])
    .filter((scene) => scene.type !== 'title')
    .filter((scene) => {
      const voiceoverWords = countWords(scene.voiceover?.text);
      const bodyWords = countWords(scene.body);
      return voiceoverWords > 95 || bodyWords > 45;
    })
    .map((scene) => ({
      sceneId: scene.id,
      voiceoverWords: countWords(scene.voiceover?.text),
      bodyWords: countWords(scene.body),
    }));

const getVoiceoverWarnings = (lesson) => {
  const fps = lesson.fps ?? fpsFallback;
  return lesson.scenes
    .map((scene) => {
      const text = scene.voiceover?.text ?? '';
      const budget = getVoiceoverBudget({
        text,
        durationInFrames: scene.durationInFrames,
        fps,
      });
      return {
        sceneId: scene.id,
        estimatedSeconds: Number(budget.estimatedSeconds.toFixed(1)),
        sceneSeconds: Number(budget.sceneSeconds.toFixed(1)),
        targetWords: budget.targetWords,
        wordCount: budget.wordCount,
        wordsToCut: budget.wordsToCut,
        extraFramesNeeded: budget.extraFramesNeeded,
        tight: budget.status === 'tight',
      };
    })
    .filter((item) => item.tight);
};

const auditLesson = (lessonPath) => {
  const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
  const compositionId = getCompositionId(lesson);
  const productionRole = lesson.productionRole ?? 'production';
  const scenes = lesson.scenes ?? [];
  const nonTitleScenes = scenes.filter((scene) => scene.type !== 'title');
  const durationSeconds = getDurationSeconds(lesson);
  const durationStatus = getDurationStatus(durationSeconds);
  const sceneDensityIssues = getSceneDensityIssues(lesson);
  const voiceoverWarnings = getVoiceoverWarnings(lesson);

  const hasHook = scenes.some((scene) => scene.type === 'hook');
  const hasQuickCheck = scenes.some((scene) => scene.type === 'quickCheck');
  const hasMisconception = scenes.some((scene) => scene.type === 'misconception');
  const hasWorkedExample = scenes.some((scene) => scene.type === 'workedExample');
  const hasSummaryPrompt = scenes.some((scene) => scene.type === 'summary' && hasText(scene.finalPrompt));
  const visualSceneCount = countScenes(lesson, (scene) => scene.diagram || scene.image || scene.unitCancel);
  const calloutCount = countScenes(lesson, (scene) => hasText(scene.callout));
  const coachCount = countScenes(lesson, (scene) => scene.type === 'workedExample' && hasText(scene.coachNote));
  const pauseCount = countScenes(lesson, (scene) => scene.type === 'quickCheck' && hasText(scene.pausePrompt));
  const strongPauseCount = countScenes(lesson, (scene) => scene.type === 'quickCheck' && isSpecificPrompt(scene.pausePrompt));
  const mistakeCount = countScenes(lesson, (scene) => scene.type === 'misconception' && hasText(scene.mistakeTag));
  const voiceoverCoverage = nonTitleScenes.length === 0 ? 0 : nonTitleScenes.filter((scene) => hasText(scene.voiceover?.text)).length / nonTitleScenes.length;
  const captionCoverage = nonTitleScenes.length === 0 ? 0 : nonTitleScenes.filter((scene) => hasText(scene.caption)).length / nonTitleScenes.length;
  const hasSyllabusMetadata =
    hasText(lesson.syllabusVersion) &&
    hasText(lesson.syllabusModule) &&
    Array.isArray(lesson.syllabusDotPoints) &&
    lesson.syllabusDotPoints.length > 0;
  const hasLessonIntent = hasText(lesson.lessonIntent);
  const hasExamSkill = hasText(lesson.examSkill) && hasDecisionLanguage(lesson.examSkill);
  const hasStrongActiveRecall = hasQuickCheck && strongPauseCount > 0;
  const hasGoodDuration = durationStatus === 'target';
  const hasGoodDensity = sceneDensityIssues.length === 0;

  const presentation = clampScore(
    4 +
      Math.min(2, visualSceneCount / 3) +
      (captionCoverage === 1 ? 1 : 0) +
      (hasWorkedExample ? 1 : 0) +
      (hasMisconception ? 1 : 0) +
      (voiceoverWarnings.length === 0 ? 1 : 0) +
      (hasGoodDensity ? 1 : -1)
  );

  const repeatability = clampScore(
    3 +
      (voiceoverCoverage === 1 ? 1 : 0) +
      (captionCoverage === 1 ? 1 : 0) +
      (hasQuickCheck ? 1 : 0) +
      (hasSummaryPrompt ? 1 : 0) +
      (coachCount > 0 && pauseCount > 0 ? 1 : 0) +
      (hasSyllabusMetadata ? 1 : 0) +
      (hasLessonIntent ? 1 : 0) +
      (hasExamSkill ? 1 : 0)
  );

  const efficiency = clampScore(
    8 -
      Math.min(3, voiceoverWarnings.length) -
      Math.min(2, sceneDensityIssues.length) +
      (scenes.length <= 12 ? 1 : 0) +
      (hasGoodDuration ? 1 : -1)
  );

  const engagement = clampScore(
    3 +
      (hasHook ? 1 : 0) +
      Math.min(2, calloutCount / 3) +
      (hasStrongActiveRecall ? 1 : 0) +
      (mistakeCount > 0 ? 1 : 0) +
      (hasWorkedExample ? 1 : 0) +
      (hasSummaryPrompt ? 1 : 0) +
      (hasExamSkill ? 1 : 0)
  );

  const studentLikeability = clampScore(
    4 +
      (hasHook ? 1 : 0) +
      (hasStrongActiveRecall ? 1 : 0) +
      (hasMisconception ? 1 : 0) +
      (hasWorkedExample ? 1 : 0) +
      (voiceoverWarnings.length <= 1 ? 1 : 0) +
      (hasGoodDuration ? 1 : durationSeconds <= 300 ? 0 : -1)
  );

  const nextActions = [];
  if (voiceoverWarnings.length > 0) nextActions.push('Shorten or retime tight voiceover scenes before audio generation.');
  if (!hasSyllabusMetadata) nextActions.push('Add syllabus version and module metadata before bulk production.');
  if (!hasLessonIntent) nextActions.push('Add lessonIntent so the video has a clear learning target.');
  if (!hasExamSkill) nextActions.push('Add a decision-focused examSkill for HSC transfer.');
  if (!hasGoodDuration) nextActions.push(`Adjust lesson duration toward ${preferredDurationSeconds.min}-${preferredDurationSeconds.max}s unless deliberately using it as a long reference lesson.`);
  if (!hasGoodDensity) nextActions.push('Split or tighten dense scenes with too much body text or voiceover.');
  if (!hasSummaryPrompt) nextActions.push('Add a final decision rule to the summary.');
  if (!hasStrongActiveRecall) nextActions.push('Add a specific active recall prompt that forces a method/unit/target decision.');
  if (mistakeCount === 0) nextActions.push('Add an explicit misconception/mistake tag.');
  if (visualSceneCount < 4) nextActions.push('Add more purposeful diagrams or unit annotations.');

  const scores = {
    videoPresentation: presentation,
    repeatability: repeatability,
    productionEfficiency: efficiency,
    engagement: engagement,
    studentLikeability: studentLikeability,
  };
  const lowestScore = Math.min(...Object.values(scores));
  const productionReady = lowestScore >= 9 && nextActions.length === 0;

  return {
    compositionId,
    sourceJson: path.relative(process.cwd(), lessonPath).replace(/\\/g, '/'),
    productionRole,
    productionReady,
    lowestScore,
    scores,
    evidence: {
      sceneCount: scenes.length,
      durationSeconds: Number(durationSeconds.toFixed(1)),
      durationStatus,
      visualSceneCount,
      calloutCount,
      coachCount,
      pauseCount,
      strongPauseCount,
      mistakeCount,
      hasSyllabusMetadata,
      hasLessonIntent,
      hasExamSkill,
      sceneDensityIssues,
      voiceoverWarnings,
    },
    nextActions,
  };
};

mkdirSync(outputDir, {recursive: true});

const lessons = getLessonFiles().map(auditLesson);
const averageScores = (items) => {
  if (items.length === 0) return {};

  return items.reduce(
    (acc, lesson) => {
      for (const [key, value] of Object.entries(lesson.scores)) {
        acc[key] = (acc[key] ?? 0) + value / items.length;
      }
      return acc;
    },
    {}
  );
};

const allAverages = averageScores(lessons);
const productionLessons = lessons.filter((lesson) => lesson.productionRole === 'production');
const productionAverages = averageScores(productionLessons);
const formatAverages = (averages) =>
  Object.fromEntries(Object.entries(averages).map(([key, value]) => [key, Number(value.toFixed(1))]));
const averages = lessons.reduce(
  (acc, lesson) => {
    for (const [key, value] of Object.entries(lesson.scores)) {
      acc[key] = (acc[key] ?? 0) + value / lessons.length;
    }
    return acc;
  },
  {}
);

const audit = {
  generatedAt: new Date().toISOString(),
  target: 'All scores at 10 before treating a lesson as the reusable reference standard.',
  averages: formatAverages(averages),
  allAverages: formatAverages(allAverages),
  productionAverages: formatAverages(productionAverages),
  lessons,
};

const markdown = [
  '# Production Audit',
  '',
  `Generated: ${audit.generatedAt}`,
  '',
  '## Production Average Scores',
  '',
  ...Object.entries(audit.productionAverages).map(([key, value]) => `- ${key}: ${value}/10`),
  '',
  '## All Lesson Average Scores',
  '',
  ...Object.entries(audit.allAverages).map(([key, value]) => `- ${key}: ${value}/10`),
  '',
  '## Lessons',
  '',
  ...lessons.flatMap((lesson) => [
    `### ${lesson.compositionId}`,
    '',
    `Role: ${lesson.productionRole}`,
    `Production ready: ${lesson.productionReady ? 'yes' : 'no'}`,
    `Lowest score: ${lesson.lowestScore}/10`,
    '',
    ...Object.entries(lesson.scores).map(([key, value]) => `- ${key}: ${value}/10`),
    '',
    `Duration: ${lesson.evidence.durationSeconds}s (${lesson.evidence.durationStatus})`,
    `Dense scenes: ${lesson.evidence.sceneDensityIssues.length}`,
    `Tight voiceover scenes: ${lesson.evidence.voiceoverWarnings.length}`,
    '',
    'Next actions:',
    ...(lesson.nextActions.length > 0 ? lesson.nextActions.map((action) => `- ${action}`) : ['- No automated action flagged.']),
    '',
  ]),
].join('\n');

writeFileSync(path.join(outputDir, 'production-audit.json'), `${JSON.stringify(audit, null, 2)}\n`);
writeFileSync(path.join(outputDir, 'production-audit.md'), `${markdown}\n`);

console.log(`Wrote ${path.join(outputDir, 'production-audit.json')}`);
console.log(`Wrote ${path.join(outputDir, 'production-audit.md')}`);
