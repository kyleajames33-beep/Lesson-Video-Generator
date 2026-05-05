#!/usr/bin/env node
/**
 * Export review frames from a lesson for batch AI design review.
 *
 * Usage:
 *   node scripts/export-review-frames.mjs src/data/chemistry-y11-m2-l2-molar-mass.json
 *   node scripts/export-review-frames.mjs --all
 *
 * Exports one representative PNG per scene type:
 *   title, hook, concept, definition, formula, workedExample,
 *   misconception, quickCheck, summary, marginalia, labFootage
 *
 * Frame picked at ~40% through each scene (after reveals land, before exit).
 * Output: out/review/<lesson-name>/<scene-type>.png
 */

import {mkdirSync, readFileSync, readdirSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {spawnSync} from 'node:child_process';
import {getCompositionId} from './lesson-utils.mjs';

const TRANSITION_FRAMES = 24;

const REVIEW_SCENE_TYPES = [
  'title', 'hook', 'concept', 'definition', 'formula',
  'workedExample', 'misconception', 'quickCheck', 'summary',
  'marginalia', 'labFootage',
];

const usage = () => {
  console.error('Usage: node scripts/export-review-frames.mjs <lesson-json>');
  console.error('   or: node scripts/export-review-frames.mjs --all');
  console.error('Example: node scripts/export-review-frames.mjs src/data/chemistry-y11-m2-l2-molar-mass.json');
};

const renderFrame = (compositionId, frame, outputFile) => {
  mkdirSync(path.dirname(outputFile), {recursive: true});

  console.log(`  frame ${frame} → ${outputFile}`);

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
      'png',
    ],
    {stdio: 'inherit', shell: true},
  );

  if (result.error) {
    console.error(result.error.message);
    return false;
  }

  return result.status === 0;
};

const exportReviewFrames = (jsonPath) => {
  const lesson = JSON.parse(readFileSync(jsonPath, 'utf-8'));
  const compositionId = getCompositionId(lesson);
  const lessonSlug = path.basename(jsonPath, '.json');
  const outDir = path.join('out', 'review', lessonSlug);

  console.log(`\nExporting review frames for ${compositionId}`);
  console.log(`  source: ${jsonPath}`);
  console.log(`  output: ${outDir}`);

  // Calculate cumulative start frame for each scene
  const sceneMeta = [];
  let cumulative = 0;
  for (const scene of lesson.scenes) {
    sceneMeta.push({scene, start: cumulative});
    cumulative += scene.durationInFrames - TRANSITION_FRAMES;
  }

  let exported = 0;
  let skipped = 0;

  for (const type of REVIEW_SCENE_TYPES) {
    const match = sceneMeta.find(({scene}) => scene.type === type);
    if (!match) {
      skipped++;
      continue;
    }

    const {scene, start} = match;
    // Pick frame at ~40% through the scene — after initial reveals, before exit
    const frame = start + Math.round(scene.durationInFrames * 0.4);
    const outputFile = path.join(outDir, `${type}.png`);

    const ok = renderFrame(compositionId, frame, outputFile);
    if (ok) exported++;
  }

  console.log(`\nDone: ${exported} exported, ${skipped} skipped (no matching scene type)`);
  console.log(`Review batch: ${outDir}/`);
};

const args = process.argv.slice(2);

if (args.length === 0) {
  usage();
  process.exit(1);
}

if (args[0] === '--all') {
  const dataDir = 'src/data';
  const files = readdirSync(dataDir).filter((f) => f.endsWith('.json'));
  for (const file of files) {
    exportReviewFrames(path.join(dataDir, file));
  }
} else {
  exportReviewFrames(args[0]);
}
