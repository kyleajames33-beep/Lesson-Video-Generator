import {mkdirSync, readFileSync, readdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {getCompositionId, getVoiceoverBudget} from './lesson-utils.mjs';

const dataDir = path.resolve('src/data');
const outputDir = 'out/voiceover-timing';

const getLessonFiles = () => {
  const args = process.argv.slice(2);
  if (args.length > 0) return args.map((file) => path.resolve(file));

  return readdirSync(dataDir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => path.join(dataDir, file));
};

const getTrimPreview = (text, targetWords) => {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= targetWords) return text;
  const preview = words.slice(0, Math.max(0, targetWords)).join(' ');
  return `${preview}...`;
};

const phraseCuts = [
  [/\bHere is the challenge\.?\s*/gi, ''],
  [/\bHere is the problem chemists face\.?\s*/gi, ''],
  [/\bLet's put it in perspective\.?\s*/gi, ''],
  [/\bBefore we use the formula,\s*/gi, ''],
  [/\bone critical distinction you must get right from day one\.?\s*/gi, 'one critical distinction. '],
  [/\bStep one:\s*/gi, ''],
  [/\bStep two:\s*/gi, ''],
  [/\bStep three:\s*/gi, ''],
  [/\bStep four:\s*/gi, ''],
  [/\bStep five:\s*/gi, ''],
  [/\bLet's lock in the key ideas\.?\s*/gi, ''],
  [/\bNotice how\s*/gi, ''],
  [/\bif you do not fix them now\b/gi, ''],
  [/\bfrom day one\b/gi, ''],
  [/\bcompletely\s+/gi, ''],
  [/\bsimply\s+/gi, ''],
  [/\bjust\s+/gi, ''],
  [/\breally\s+/gi, ''],
  [/\bexactly\s+/gi, ''],
];

const normaliseWhitespace = (text) => text.replace(/\s+/g, ' ').trim();

const getCutSuggestion = (text, targetWords) => {
  let suggestion = text;

  for (const [pattern, replacement] of phraseCuts) {
    suggestion = suggestion.replace(pattern, replacement);
    if (suggestion.trim().split(/\s+/).filter(Boolean).length <= targetWords) {
      break;
    }
  }

  suggestion = normaliseWhitespace(suggestion);
  const words = suggestion.split(/\s+/).filter(Boolean);

  return {
    text: words.length <= targetWords ? suggestion : null,
    wordCount: words.length,
  };
};

mkdirSync(outputDir, {recursive: true});

const lessons = getLessonFiles().map((lessonPath) => {
  const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
  const compositionId = getCompositionId(lesson);
  const fps = lesson.fps ?? 30;

  const scenes = (lesson.scenes ?? []).map((scene) => {
    const text = scene.voiceover?.text ?? '';
    const budget = getVoiceoverBudget({
      text,
      durationInFrames: scene.durationInFrames,
      fps,
    });
    const cutSuggestion = budget.wordsToCut > 0 ? getCutSuggestion(text, budget.targetWords) : null;

    return {
      sceneId: scene.id,
      type: scene.type,
      status: budget.status,
      durationInFrames: scene.durationInFrames,
      sceneSeconds: Number(budget.sceneSeconds.toFixed(2)),
      targetSeconds: Number(budget.targetSeconds.toFixed(2)),
      estimatedSeconds: Number(budget.estimatedSeconds.toFixed(2)),
      wordCount: budget.wordCount,
      targetWords: budget.targetWords,
      wordsToCut: budget.wordsToCut,
      extraFramesNeeded: budget.extraFramesNeeded,
      alternativeDurationInFrames: scene.durationInFrames + budget.extraFramesNeeded,
      trimPreview: budget.wordsToCut > 0 ? getTrimPreview(text, budget.targetWords) : null,
      cutSuggestion,
    };
  });

  return {
    compositionId,
    sourceJson: path.relative(process.cwd(), lessonPath).replace(/\\/g, '/'),
    fps,
    tightSceneCount: scenes.filter((scene) => scene.status === 'tight').length,
    scenes,
  };
});

const report = {
  generatedAt: new Date().toISOString(),
  policy: {
    wordsPerMinute: 145,
    safetyRatio: 0.92,
    rule: 'Voiceover should fit within 92% of scene duration to leave room for natural pacing and visual sync.',
  },
  lessons,
};

const markdown = [
  '# Voiceover Timing Report',
  '',
  `Generated: ${report.generatedAt}`,
  '',
  `Policy: ${report.policy.wordsPerMinute} wpm, ${Math.round(report.policy.safetyRatio * 100)}% scene budget.`,
  '',
  ...lessons.flatMap((lesson) => [
    `## ${lesson.compositionId}`,
    '',
    `Tight scenes: ${lesson.tightSceneCount}`,
    '',
    ...lesson.scenes
      .filter((scene) => scene.status === 'tight')
      .flatMap((scene) => [
        `### ${scene.sceneId}`,
        '',
        `- Current: ${scene.wordCount} words, ${scene.estimatedSeconds}s estimated`,
        `- Budget: ${scene.targetWords} words, ${scene.targetSeconds}s target`,
        `- Cut: ${scene.wordsToCut} words`,
        `- Or extend: +${scene.extraFramesNeeded} frames (${scene.alternativeDurationInFrames} total frames)`,
        '',
        'Suggested cut:',
        '',
        '```text',
        scene.cutSuggestion?.text ?? `No safe automatic cut found. Current reduced draft is ${scene.cutSuggestion?.wordCount ?? scene.wordCount} words.`,
        '```',
        '',
        'Trim preview:',
        '',
        '```text',
        scene.trimPreview ?? '',
        '```',
        '',
      ]),
    lesson.tightSceneCount === 0 ? 'No tight scenes.' : '',
    '',
  ]),
].join('\n');

writeFileSync(path.join(outputDir, 'voiceover-timing.json'), `${JSON.stringify(report, null, 2)}\n`);
writeFileSync(path.join(outputDir, 'voiceover-timing.md'), `${markdown}\n`);

console.log(`Wrote ${path.join(outputDir, 'voiceover-timing.json')}`);
console.log(`Wrote ${path.join(outputDir, 'voiceover-timing.md')}`);
