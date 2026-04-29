import {existsSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {getCompositionId, hashText} from './lesson-utils.mjs';

const usage = () => {
  console.error('Usage: node scripts/sync-voiceover-assets.mjs <lesson-json>');
  console.error('Example: node scripts/sync-voiceover-assets.mjs src/data/chemistry-y11-m2-l1-mole-concept.json');
};

const [lessonPath] = process.argv.slice(2);

if (!lessonPath) {
  usage();
  process.exit(1);
}

const resolvedLessonPath = path.resolve(lessonPath);
const lesson = JSON.parse(readFileSync(resolvedLessonPath, 'utf8'));
const compositionId = getCompositionId(lesson);
let linked = 0;
let missing = 0;
let changed = false;

for (const scene of lesson.scenes ?? []) {
  if (!scene.voiceover?.text) continue;

  const hash = await hashText(scene.voiceover.text);
  const audioFile = `public/audio/${compositionId}/${scene.id}.${hash}.mp3`;

  if (existsSync(path.resolve(audioFile))) {
    if (scene.voiceover.audioFile !== audioFile) {
      scene.voiceover.audioFile = audioFile;
      changed = true;
    }
    linked += 1;
  } else {
    missing += 1;
  }
}

if (changed) {
  writeFileSync(resolvedLessonPath, `${JSON.stringify(lesson, null, 2)}\n`);
}

console.log(`Voiceover sync for ${compositionId}`);
console.log(`  linked: ${linked}`);
console.log(`  missing: ${missing}`);
console.log(changed ? `  updated: ${lessonPath}` : '  updated: none');
