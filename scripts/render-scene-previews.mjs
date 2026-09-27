// Render phone-sized previews of chosen scenes: a muted MP4 per scene plus
// stills at 20% / 50% / 85% through it. Made for reviewing diorama work from a
// phone, where Remotion Studio isn't available.
//
//   node scripts/render-scene-previews.mjs <CompositionId> <lesson.json> [sceneId ...] [--out dir]
//
// No scene ids = every scene that has a `diagram`. Output defaults to
// out/previews/<CompositionId>/. Muted because voiceover audio is not in git.
// Browser: REMOTION_BROWSER, else the Playwright chrome-headless-shell under
// /opt/pw-browsers (full Chromium no longer supports old headless mode).

import {readFileSync, readdirSync, existsSync, mkdirSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {bundle} from '@remotion/bundler';
import {renderMedia, renderStill, selectComposition} from '@remotion/renderer';

const TRANSITION_FRAMES = 24;
const INTRO_STINGER_FRAMES = 270; // keep in sync with src/lesson/timing.ts

const args = process.argv.slice(2);
const outIdx = args.indexOf('--out');
const outArg = outIdx >= 0 ? args.splice(outIdx, 2)[1] : undefined;
const [compositionId, lessonPath, ...sceneIds] = args;
if (!compositionId || !lessonPath) {
  console.error('Usage: node scripts/render-scene-previews.mjs <CompositionId> <lesson.json> [sceneId ...] [--out dir]');
  process.exit(1);
}

const findHeadlessShell = () => {
  if (process.env.REMOTION_BROWSER) return process.env.REMOTION_BROWSER;
  const root = '/opt/pw-browsers';
  if (!existsSync(root)) return undefined;
  for (const d of readdirSync(root).filter((x) => x.startsWith('chromium_headless_shell'))) {
    for (const sub of readdirSync(path.join(root, d))) {
      const p = path.join(root, d, sub, 'chrome-headless-shell');
      if (existsSync(p)) return p;
    }
  }
  return undefined;
};

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
let start = INTRO_STINGER_FRAMES;
const spans = lesson.scenes.map((scene) => {
  const span = {scene, from: start, to: start + scene.durationInFrames - TRANSITION_FRAMES - 1};
  start += scene.durationInFrames - TRANSITION_FRAMES;
  return span;
});
const wanted = sceneIds.length ? spans.filter((s) => sceneIds.includes(s.scene.id)) : spans.filter((s) => s.scene.diagram);
if (!wanted.length) {
  console.error('No matching scenes.');
  process.exit(1);
}

const outDir = outArg ?? path.join('out', 'previews', compositionId);
mkdirSync(outDir, {recursive: true});
const browserExecutable = findHeadlessShell();
const opts = {browserExecutable, chromiumOptions: {gl: 'swangle'}, envVariables: {REMOTION_NO_AUDIO: '1'}};
const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts')});
const composition = await selectComposition({serveUrl, id: compositionId, ...opts});

for (const {scene, from, to} of wanted) {
  const base = path.join(outDir, scene.id);
  await renderMedia({serveUrl, composition, codec: 'h264', outputLocation: `${base}.mp4`, frameRange: [from, to], scale: 0.5, muted: true, crf: 30, ...opts});
  for (const f of [0.2, 0.5, 0.85]) {
    const frame = Math.round(from + (to - from) * f);
    await renderStill({serveUrl, composition, frame, output: `${base}-${Math.round(f * 100)}.png`, scale: 0.5, ...opts});
  }
  console.log(`✓ ${scene.id}  ${base}.mp4 (+3 stills)`);
}
