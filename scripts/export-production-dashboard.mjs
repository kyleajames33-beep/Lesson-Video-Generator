import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';

const auditPath = path.join('out/audits', 'production-audit.json');
const siteManifestPath = path.join('out', 'site-video-manifest.json');
const outputDir = path.join('out', 'production-dashboard');

const audit = JSON.parse(readFileSync(auditPath, 'utf8'));
const siteManifest = JSON.parse(readFileSync(siteManifestPath, 'utf8'));
mkdirSync(outputDir, {recursive: true});

const lessons = audit.lessons.map((lesson) => {
  const siteEntry = siteManifest.lessons.find((item) => item.compositionId === lesson.compositionId);

  return {
    compositionId: lesson.compositionId,
    title: siteEntry?.title ?? lesson.compositionId,
    sourceJson: lesson.sourceJson,
    productionRole: lesson.productionRole ?? 'production',
    productionReady: lesson.productionReady,
    lowestScore: lesson.lowestScore,
    scores: lesson.scores,
    durationSeconds: lesson.evidence.durationSeconds,
    durationStatus: lesson.evidence.durationStatus,
    tightVoiceoverScenes: lesson.evidence.voiceoverWarnings.map((warning) => warning.sceneId),
    denseScenes: lesson.evidence.sceneDensityIssues.map((issue) => issue.sceneId),
    nextActions: lesson.nextActions,
    videoPath: siteEntry?.videoPath ?? null,
    posterPath: siteEntry?.posterPath ?? null,
    transcriptPath: siteEntry?.transcriptPath ?? null,
  };
});

const summary = {
  lessonCount: lessons.length,
  productionLessonCount: lessons.filter((lesson) => lesson.productionRole === 'production').length,
  referenceLessonCount: lessons.filter((lesson) => lesson.productionRole === 'reference').length,
  productionReadyCount: lessons.filter((lesson) => lesson.productionRole === 'production' && lesson.productionReady).length,
  blockedProductionCount: lessons.filter((lesson) => lesson.productionRole === 'production' && !lesson.productionReady).length,
  blockedReferenceCount: lessons.filter((lesson) => lesson.productionRole === 'reference' && !lesson.productionReady).length,
  productionAverageScores: audit.productionAverages ?? audit.averages,
  allAverageScores: audit.allAverages ?? audit.averages,
  tightVoiceoverProductionLessonCount: lessons.filter((lesson) => lesson.productionRole === 'production' && lesson.tightVoiceoverScenes.length > 0).length,
  tightVoiceoverReferenceLessonCount: lessons.filter((lesson) => lesson.productionRole === 'reference' && lesson.tightVoiceoverScenes.length > 0).length,
  longProductionLessonCount: lessons.filter((lesson) => lesson.productionRole === 'production' && lesson.durationStatus === 'too-long').length,
  longReferenceLessonCount: lessons.filter((lesson) => lesson.productionRole === 'reference' && lesson.durationStatus === 'too-long').length,
};

const dashboard = {
  generatedAt: new Date().toISOString(),
  summary,
  lessons,
};

const markdown = [
  '# Production Dashboard',
  '',
  `Generated: ${dashboard.generatedAt}`,
  '',
  '## Summary',
  '',
  `- Lessons: ${summary.lessonCount}`,
  `- Production lessons: ${summary.productionLessonCount}`,
  `- Reference lessons: ${summary.referenceLessonCount}`,
  `- Production ready: ${summary.productionReadyCount}`,
  `- Blocked production lessons: ${summary.blockedProductionCount}`,
  `- Blocked reference lessons: ${summary.blockedReferenceCount}`,
  `- Production lessons with tight voiceover: ${summary.tightVoiceoverProductionLessonCount}`,
  `- Reference lessons with tight voiceover: ${summary.tightVoiceoverReferenceLessonCount}`,
  `- Production lessons too long: ${summary.longProductionLessonCount}`,
  `- Reference lessons too long: ${summary.longReferenceLessonCount}`,
  '',
  '## Production Average Scores',
  '',
  ...Object.entries(summary.productionAverageScores).map(([key, value]) => `- ${key}: ${value}/10`),
  '',
  '## All Lesson Average Scores',
  '',
  ...Object.entries(summary.allAverageScores).map(([key, value]) => `- ${key}: ${value}/10`),
  '',
  '## Lesson Status',
  '',
  ...lessons.flatMap((lesson) => [
    `### ${lesson.compositionId}`,
    '',
    `- Title: ${lesson.title}`,
    `- Role: ${lesson.productionRole}`,
    `- Ready: ${lesson.productionReady ? 'yes' : 'no'}`,
    `- Lowest score: ${lesson.lowestScore}/10`,
    `- Duration: ${lesson.durationSeconds}s (${lesson.durationStatus})`,
    `- Tight voiceover scenes: ${lesson.tightVoiceoverScenes.length === 0 ? 'none' : lesson.tightVoiceoverScenes.join(', ')}`,
    '',
    'Next actions:',
    ...(lesson.nextActions.length > 0 ? lesson.nextActions.map((action) => `- ${action}`) : ['- None']),
    '',
  ]),
].join('\n');

writeFileSync(path.join(outputDir, 'dashboard.json'), `${JSON.stringify(dashboard, null, 2)}\n`);
writeFileSync(path.join(outputDir, 'dashboard.md'), `${markdown}\n`);

console.log(`Wrote ${path.join(outputDir, 'dashboard.json')}`);
console.log(`Wrote ${path.join(outputDir, 'dashboard.md')}`);
