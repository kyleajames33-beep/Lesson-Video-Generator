import {readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {parseMedia} from '@remotion/media-parser';
import {nodeReader} from '@remotion/media-parser/node';

const usage = () => {
  console.error('Usage: node scripts/tighten-scene-durations.mjs <lesson-json> [--padding-frames=15]');
  console.error('Example: node scripts/tighten-scene-durations.mjs src/data/chemistry-y11-m2-l2-molar-mass.json');
};

const args = process.argv.slice(2);
const lessonPath = args.find((arg) => !arg.startsWith('--'));
const paddingFrames = Number(args.find((arg) => arg.startsWith('--padding-frames='))?.split('=')[1] ?? 15);
const dryRun = args.includes('--dry-run');

if (!lessonPath) {
  usage();
  process.exit(1);
}

const resolvedLessonPath = path.resolve(lessonPath);
const lesson = JSON.parse(readFileSync(resolvedLessonPath, 'utf8'));
const fps = lesson.fps ?? 30;
const changes = [];

for (const scene of lesson.scenes ?? []) {
  const audioFile = scene.voiceover?.audioFile;
  if (!audioFile) continue;

  const audioPath = path.resolve(audioFile);
  let durationSeconds;
  try {
    const result = await parseMedia({
      src: audioPath,
      reader: nodeReader,
      fields: {durationInSeconds: true},
      acknowledgeRemotionLicense: true,
    });
    durationSeconds = result.durationInSeconds;
  } catch (err) {
    console.warn(`  warning: could not read duration for ${audioFile}: ${err.message}`);
    continue;
  }

  const audioFrames = Math.ceil(durationSeconds * fps);
  const targetFrames = audioFrames + paddingFrames;

  if (targetFrames < scene.durationInFrames) {
    const before = scene.durationInFrames;
    scene.durationInFrames = targetFrames;
    changes.push({
      sceneId: scene.id,
      before,
      after: targetFrames,
      audioFrames,
      saved: before - targetFrames,
    });
  } else if (targetFrames > scene.durationInFrames) {
    // Audio is longer than scene — extend it
    const before = scene.durationInFrames;
    scene.durationInFrames = targetFrames;
    changes.push({
      sceneId: scene.id,
      before,
      after: targetFrames,
      audioFrames,
      saved: before - targetFrames,
      note: 'extended to fit audio',
    });
  }
}

if (!dryRun && changes.length > 0) {
  writeFileSync(resolvedLessonPath, `${JSON.stringify(lesson, null, 2)}\n`);
}

console.log(`Tightened scene durations for ${lesson.title ?? 'lesson'}`);
console.log(`  padding: ${paddingFrames} frames (${(paddingFrames / fps).toFixed(2)}s)`);
console.log(`  dryRun: ${dryRun ? 'yes' : 'no'}`);

let totalSaved = 0;
for (const change of changes) {
  const sign = change.saved > 0 ? `-${change.saved}` : `+${-change.saved}`;
  const note = change.note ? ` [${change.note}]` : '';
  console.log(`  ${change.sceneId}: ${change.before} -> ${change.after} frames (${sign} frames${note})`);
  totalSaved += change.saved;
}

if (changes.length === 0) {
  console.log('  no changes needed');
} else {
  const netSaved = -totalSaved;
  const netSeconds = (netSaved / fps).toFixed(1);
  console.log(`  net change: ${netSaved > 0 ? '+' : ''}${netSaved} frames (${netSeconds}s)`);
}
