// Render a still of a SPECIFIC scene (by id) — for diagrams on non-first scenes
// that export-review-frames (first-per-type) skips. Same frame math.
import {readFileSync, mkdirSync} from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {getCompositionId} from './lesson-utils.mjs';
const TRANSITION_FRAMES = 24;
const [jsonPath, sceneId] = process.argv.slice(2);
const lesson = JSON.parse(readFileSync(jsonPath, 'utf8'));
const compositionId = getCompositionId(lesson);
const slug = path.basename(jsonPath, '.json');
let cumulative = 0, target = null;
for (const s of lesson.scenes) {
  if (s.id === sceneId) { target = {start: cumulative, dur: s.durationInFrames}; break; }
  cumulative += s.durationInFrames - TRANSITION_FRAMES;
}
if (!target) { console.error('scene not found:', sceneId); process.exit(1); }
const frame = target.start + Math.round(target.dur * 0.4);
const out = path.join('out', 'review', slug, `${sceneId}.png`);
mkdirSync(path.dirname(out), {recursive: true});
console.log(`${compositionId} scene ${sceneId} → frame ${frame} → ${out}`);
const r = spawnSync('npx', ['remotion','still','src/index.ts',compositionId,out,'--frame',String(frame),'--scale','1','--image-format','png'], {stdio:'inherit', shell:true});
process.exit(r.status ?? 1);
