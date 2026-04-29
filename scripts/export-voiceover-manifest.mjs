import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {getCompositionId, getVoiceoverBudget, hashText} from './lesson-utils.mjs';

const usage = () => {
  console.error('Usage: node scripts/export-voiceover-manifest.mjs <lesson-json> [output-file]');
  console.error('Example: node scripts/export-voiceover-manifest.mjs src/data/chemistry-y11-m2-l1-mole-concept.json');
};

const [lessonPath, outputArg] = process.argv.slice(2);

if (!lessonPath) {
  usage();
  process.exit(1);
}

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
const compositionId = getCompositionId(lesson);
const outputFile = outputArg ?? path.join('out/voiceover', `${compositionId}.manifest.json`);
mkdirSync(path.dirname(outputFile), {recursive: true});

const scenes = [];

for (const scene of lesson.scenes) {
  const text = scene.voiceover?.text ?? '';
  const hash = await hashText(text);
  const budget = getVoiceoverBudget({
    text,
    durationInFrames: scene.durationInFrames,
    fps: lesson.fps ?? 30,
  });
  const audioFile = `public/audio/${compositionId}/${scene.id}.${hash}.mp3`;

  scenes.push({
    id: scene.id,
    type: scene.type,
    text,
    hash,
    audioFile,
    durationInFrames: scene.durationInFrames,
    durationSeconds: Number(budget.sceneSeconds.toFixed(2)),
    targetWords: budget.targetWords,
    wordCount: budget.wordCount,
    wordsToCut: budget.wordsToCut,
    estimatedSpeechSeconds: Number(budget.estimatedSeconds.toFixed(2)),
    timingStatus: budget.status,
  });
}

const manifest = {
  compositionId,
  lessonPath,
  title: lesson.title,
  fps: lesson.fps ?? 30,
  outputConvention: 'Generate one mp3 per scene. If text hash changes, regenerate only that scene audio.',
  scenes,
};

writeFileSync(outputFile, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Wrote ${outputFile}`);

const tight = scenes.filter((scene) => scene.timingStatus === 'tight');
if (tight.length > 0) {
  console.warn('Scenes with tight estimated voiceover timing:');
  for (const scene of tight) {
    console.warn(`  ${scene.id}: speech ${scene.estimatedSpeechSeconds}s / scene ${scene.durationSeconds}s`);
  }
}
