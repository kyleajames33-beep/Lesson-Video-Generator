import {mkdirSync, readFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {spawnSync} from 'node:child_process';

const TRANSITION_FRAMES = 24;

const usage = () => {
  console.error('Usage: node scripts/render-lesson-stills.mjs <composition-id> <lesson-json> [output-dir]');
  console.error('Example: node scripts/render-lesson-stills.mjs Chemistry-Y11-M2-L1 src/data/chemistry-y11-m2-l1-mole-concept.json');
};

const [compositionId, lessonPath, outputDirArg] = process.argv.slice(2);

if (!compositionId || !lessonPath) {
  usage();
  process.exit(1);
}

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
const outputDir = outputDirArg ?? 'out/checks';
mkdirSync(outputDir, {recursive: true});

const sceneStarts = [];
let start = 0;
for (const scene of lesson.scenes) {
  sceneStarts.push({scene, start});
  start += scene.durationInFrames - TRANSITION_FRAMES;
}

const checks = [
  {type: 'hook', fraction: 0.68},
  {type: 'definition', fraction: 0.68},
  {type: 'formula', fraction: 0.82},
  {type: 'workedExample', fraction: 0.88},
  {type: 'misconception', fraction: 0.78},
  {type: 'quickCheck', fraction: 0.28},
  {type: 'summary', fraction: 0.84},
];

const selected = checks
  .map((check) => {
    const entry = sceneStarts.find(({scene}) => scene.type === check.type);
    if (!entry) return null;

    const frame = Math.min(
      entry.start + entry.scene.durationInFrames - 8,
      entry.start + Math.round(entry.scene.durationInFrames * check.fraction),
    );

    return {
      ...check,
      id: entry.scene.id,
      frame,
      output: path.join(outputDir, `${compositionId}-${check.type}-${entry.scene.id}.png`),
    };
  })
  .filter(Boolean);

const npx = 'npx';

for (const check of selected) {
  console.log(`Rendering ${check.type} (${check.id}) at frame ${check.frame}`);
  const result = spawnSync(
    npx,
    [
      'remotion',
      'still',
      'src/index.ts',
      compositionId,
      check.output,
      '--frame',
      String(check.frame),
      '--scale',
      '0.25',
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
}

console.log(`Rendered ${selected.length} stills to ${outputDir}`);
