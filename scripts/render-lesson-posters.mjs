import {mkdirSync, readFileSync, readdirSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {spawnSync} from 'node:child_process';
import {getCompositionId} from './lesson-utils.mjs';

const TRANSITION_FRAMES = 24;

const usage = () => {
  console.error('Usage: node scripts/render-lesson-posters.mjs <lesson-json> [output-file]');
  console.error('   or: node scripts/render-lesson-posters.mjs --all');
  console.error('Example: node scripts/render-lesson-posters.mjs src/data/chemistry-y11-m2-l2-molar-mass.json');
};

const renderPoster = (compositionId, lesson, outputFile) => {
  mkdirSync(path.dirname(outputFile), {recursive: true});

  // Find the best frame for a poster.
  // Prefer the hook scene at ~65% through — it usually has the most
  // visually interesting layout (heading + diagram + callout).
  // Fall back to title scene, then first non-title scene.
  const sceneStarts = [];
  let start = 0;
  for (const scene of lesson.scenes) {
    sceneStarts.push({scene, start});
    start += scene.durationInFrames - TRANSITION_FRAMES;
  }

  let target = sceneStarts.find(({scene}) => scene.type === 'hook');
  if (!target) {
    target = sceneStarts.find(({scene}) => scene.type === 'title');
  }
  if (!target) {
    target = sceneStarts[1] ?? sceneStarts[0];
  }

  const fraction = target.scene.type === 'title' ? 0.5 : 0.65;
  const frame = Math.min(
    target.start + target.scene.durationInFrames - 8,
    target.start + Math.round(target.scene.durationInFrames * fraction),
  );

  console.log(`Rendering poster for ${compositionId}`);
  console.log(`  scene: ${target.scene.id} (${target.scene.type})`);
  console.log(`  frame: ${frame}`);
  console.log(`  output: ${outputFile}`);

  const result = spawnSync(
    'npx',
    [
      'remotion',
      'still',
      'src/index.ts',
      compositionId,
      outputFile,
      '--frame',
      String(frame),
      '--scale',
      '1',
      '--image-format',
      'jpeg',
      '--jpeg-quality',
      '90',
    ],
    {stdio: 'inherit', shell: true},
  );

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }

  console.log(`  done: ${outputFile}`);
};

const args = process.argv.slice(2);

if (args.length === 0) {
  usage();
  process.exit(1);
}

if (args[0] === '--all') {
  const dataDir = path.resolve('src/data');
  const files = readdirSync(dataDir).filter((f) => f.endsWith('.json'));
  const outputDir = 'out/posters';
  mkdirSync(outputDir, {recursive: true});

  console.log(`Rendering posters for ${files.length} lesson(s)\n`);

  for (const file of files) {
    const lessonPath = path.join(dataDir, file);
    const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
    const compositionId = getCompositionId(lesson);
    const outputFile = path.join(outputDir, `${compositionId}.jpg`);
    renderPoster(compositionId, lesson, outputFile);
    console.log('');
  }

  console.log(`All posters written to ${outputDir}`);
} else {
  const lessonPath = args[0];
  const outputFile = args[1] ?? null;

  if (!lessonPath.endsWith('.json')) {
    console.error('Expected a .json lesson file');
    usage();
    process.exit(1);
  }

  const lesson = JSON.parse(readFileSync(path.resolve(lessonPath), 'utf8'));
  const compositionId = getCompositionId(lesson);
  const resolvedOutput = outputFile ?? `out/posters/${compositionId}.jpg`;
  renderPoster(compositionId, lesson, resolvedOutput);
}
