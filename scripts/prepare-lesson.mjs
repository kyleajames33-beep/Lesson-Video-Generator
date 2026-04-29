import {existsSync, readFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {spawnSync} from 'node:child_process';
import {getCompositionId} from './lesson-utils.mjs';

const usage = () => {
  console.error('Usage: node scripts/prepare-lesson.mjs <lesson-json>');
  console.error('Example: node scripts/prepare-lesson.mjs src/data/chemistry-y11-m2-l1-mole-concept.json');
};

const [lessonPath] = process.argv.slice(2);

if (!lessonPath) {
  usage();
  process.exit(1);
}

if (!existsSync(lessonPath)) {
  console.error(`File not found: ${lessonPath}`);
  process.exit(1);
}

const run = (label, command, args) => {
  console.log(`\n${label}`);
  const result = spawnSync(command, args, {stdio: 'inherit', shell: true});

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
const compositionId = getCompositionId(lesson);
const outputDir = path.join('out/checks', compositionId);

run('1. Regenerating lesson registry', 'node', ['scripts/generate-lesson-registry.mjs']);
run('2. Validating this lesson JSON', 'node', ['scripts/validate-lesson.mjs', lessonPath]);
run('3. Running TypeScript check', 'npm', ['run', 'check']);
run('4. Exporting voiceover manifest', 'node', [
  'scripts/export-voiceover-manifest.mjs',
  lessonPath,
]);
run('5. Exporting transcript', 'node', ['scripts/export-transcript.mjs', 'out/transcripts', lessonPath]);
run('6. Exporting site video manifest', 'node', ['scripts/export-site-video-manifest.mjs']);
run('7. Auditing production system', 'node', ['scripts/audit-production-system.mjs']);
run('8. Creating lesson retrospective', 'node', ['scripts/create-lesson-retrospective.mjs', lessonPath]);
run('9. Rendering lesson still checks', 'node', [
  'scripts/render-lesson-stills.mjs',
  compositionId,
  lessonPath,
  outputDir,
]);

console.log(`\nPrepared ${compositionId}`);
console.log(`Stills: ${outputDir}`);
