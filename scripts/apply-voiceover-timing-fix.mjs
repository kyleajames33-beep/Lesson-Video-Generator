import {readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {getCompositionId, getVoiceoverBudget} from './lesson-utils.mjs';

const usage = () => {
  console.error('Usage: node scripts/apply-voiceover-timing-fix.mjs <lesson-json> [--mode=extend] [--max-extra-frames=180]');
  console.error('Example: node scripts/apply-voiceover-timing-fix.mjs src/data/chemistry-y11-m2-l2-molar-mass.json --mode=extend');
};

const args = process.argv.slice(2);
const lessonPath = args.find((arg) => !arg.startsWith('--'));
const mode = args.find((arg) => arg.startsWith('--mode='))?.split('=')[1] ?? 'extend';
const maxExtraFrames = Number(args.find((arg) => arg.startsWith('--max-extra-frames='))?.split('=')[1] ?? 180);
const dryRun = args.includes('--dry-run');

if (!lessonPath) {
  usage();
  process.exit(1);
}

if (mode !== 'extend') {
  console.error('Only --mode=extend is currently supported.');
  process.exit(1);
}

if (!Number.isInteger(maxExtraFrames) || maxExtraFrames < 0) {
  console.error('--max-extra-frames must be a non-negative integer.');
  process.exit(1);
}

const resolvedLessonPath = path.resolve(lessonPath);
const lesson = JSON.parse(readFileSync(resolvedLessonPath, 'utf8'));
const compositionId = getCompositionId(lesson);
const fps = lesson.fps ?? 30;
const changes = [];

for (const scene of lesson.scenes ?? []) {
  const text = scene.voiceover?.text ?? '';
  const budget = getVoiceoverBudget({
    text,
    durationInFrames: scene.durationInFrames,
    fps,
  });

  if (budget.status !== 'tight') continue;

  if (budget.extraFramesNeeded > maxExtraFrames) {
    changes.push({
      sceneId: scene.id,
      status: 'skipped',
      reason: `needs ${budget.extraFramesNeeded} extra frames, above limit ${maxExtraFrames}`,
      currentDurationInFrames: scene.durationInFrames,
    });
    continue;
  }

  const before = scene.durationInFrames;
  const after = scene.durationInFrames + budget.extraFramesNeeded;
  scene.durationInFrames = after;

  changes.push({
    sceneId: scene.id,
    status: 'updated',
    before,
    after,
    addedFrames: budget.extraFramesNeeded,
  });
}

if (!dryRun && changes.some((change) => change.status === 'updated')) {
  writeFileSync(resolvedLessonPath, `${JSON.stringify(lesson, null, 2)}\n`);
}

console.log(`Voiceover timing fix for ${compositionId}`);
console.log(`  mode: ${mode}`);
console.log(`  dryRun: ${dryRun ? 'yes' : 'no'}`);

for (const change of changes) {
  if (change.status === 'updated') {
    console.log(`  updated ${change.sceneId}: ${change.before} -> ${change.after} (+${change.addedFrames})`);
  } else {
    console.log(`  skipped ${change.sceneId}: ${change.reason}`);
  }
}

if (changes.length === 0) {
  console.log('  no timing changes needed');
}
