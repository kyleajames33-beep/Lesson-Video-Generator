// Read-only checks for the October 2026 interim B05/B06/B07 artwork review.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {PNG} from 'pngjs';

const root = process.cwd();
const hash = (p) => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const relative = (p) => path.relative(root, p).replaceAll('\\', '/');
const walk = (dir) => fs.readdirSync(dir, {withFileTypes: true}).flatMap((e) => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const targets = {
  b05: {'hook': ['another dies']},
  b06: {'phagocytosis': ['wraps its membrane', 'pulls it inside', 'Then lysosomes']},
  b07: {'plasma-memory': ['become plasma cells', 'The blood carries']},
};
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9']/g, '');
const result = {date: '2026-10-25', scope: 'Source and still-image checks only. Continuous playback unavailable.', lessons: {}};
for (const key of Object.keys(targets)) {
  const base = path.join(root, `src/explainer/lessons/bio-m7-${key}`);
  const preview = path.join(root, `out/prototypes/Explainer-bio-m7-${key}-preview-v1`);
  const measured = path.join(root, `docs/production/claude-pm/lessons/m7${key}/measured/lesson.json`);
  const lesson = JSON.parse(fs.readFileSync(measured, 'utf8').replace(/^\uFEFF/, ''));
  const assets = walk(path.join(preview, 'public/assets')).filter((p) => p.endsWith('.png')).map((p) => {
    const local = path.join(root, 'public', path.relative(path.join(preview, 'public'), p));
    const previewSha256 = hash(p);
    const currentSha256 = fs.existsSync(local) ? hash(local) : null;
    return {asset: relative(local), previewSha256, currentSha256, matches: previewSha256 === currentSha256};
  });
  const cues = [];
  let start = 0;
  for (const scene of lesson.scenes) {
    for (const phrase of targets[key][scene.id] ?? []) {
      const words = (scene.captions ?? []).map((c) => norm(c.text));
      const target = phrase.split(/\s+/).map(norm);
      const i = words.findIndex((_, j) => target.every((w, k) => words[j + k] === w));
      const localFrame = i < 0 ? null : Math.round(scene.captions[i].startMs * 30 / 1000);
      cues.push({scene: scene.id, phrase, localFrame, globalFrame: localFrame === null ? null : start + localFrame, globalSeconds: localFrame === null ? null : (start + localFrame) / 30});
    }
    start += scene.durationInFrames;
  }
  result.lessons[key] = {
    sourceHashes: Object.fromEntries(walk(base).filter((p) => /\.tsx?$/.test(p)).map((p) => [relative(p), hash(p)])),
    measuredLessonSha256: hash(measured),
    previewBundleSha256: hash(path.join(preview, 'review.js')),
    previewAssetCount: assets.length,
    previewAssetMismatches: assets.filter((a) => !a.matches),
    cues,
  };
  console.log(`${key}: ${assets.length} preview PNGs, ${result.lessons[key].previewAssetMismatches.length} differences`);
  console.log(JSON.stringify(cues));
}
// Read pixels only. These measurements do not modify the artwork or approve its motion.
const names = ['m7-banksia-healthy-v1.png', 'm7-banksia-phytophthora-v2.png', 'm7-banksia-healthy-v2.png', 'm7-banksia-phytophthora-v3.png'];
const pngs = names.map(name => PNG.sync.read(fs.readFileSync(path.join(root, 'public/assets/biology', name))));
const box = (png, threshold) => {
  let x0 = png.width, y0 = png.height, x1 = 0, y1 = 0, count = 0;
  for (let y = 0; y < png.height; y++) for (let x = 0; x < png.width; x++) {
    if (png.data[(y * png.width + x) * 4 + 3] <= threshold) continue;
    count++; x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x + 1); y1 = Math.max(y1, y + 1);
  }
  if (!count) throw new Error('Empty Banksia image.');
  return {bounds: [x0, y0, x1, y1], opaquePixels: count};
};
const records = pngs.map((png, i) => ({path: `public/assets/biology/${names[i]}`, sha256: hash(path.join(root, 'public/assets/biology', names[i])),
  size: [png.width, png.height], alphaBounds: Object.fromEntries([0, 20, 32, 128].map(t => [t, box(png, t)]))}));
const a = pngs[2], b = pngs[3];
if (a.width !== b.width || a.height !== b.height) throw new Error('Retake canvases differ.');
let intersection = 0, union = 0, support = 0, equalRgba = 0;
for (let y = 0; y < a.height; y++) for (let x = 0; x < a.width; x++) {
  const p = (y * a.width + x) * 4, aa = a.data[p + 3] >= 32, bb = b.data[p + 3] >= 32;
  if (aa && bb) intersection++; if (aa || bb) union++;
  if (x >= 940 && x < 1100 && y >= 1550 && y < 1744 && (aa || bb)) {
    support++; if ([0, 1, 2, 3].every(c => a.data[p + c] === b.data[p + c])) equalRgba++;
  }
}
const aa = records[2].alphaBounds[20].bounds, bb = records[3].alphaBounds[20].bounds;
const sharedBox = [Math.min(aa[0], bb[0]), Math.min(aa[1], bb[1]), Math.max(aa[2], bb[2]), Math.max(aa[3], bb[3])];
const hook = (crop, anchorY) => {
  const k = 380 / (crop[2] - crop[0]), midY = (crop[1] + crop[3]) / 2;
  const cy = 880 - (anchorY - midY) * k;
  return {crop, anchorY, width: 380, scale: k, cy, paintedBottomY: cy + (aa[3] - midY) * k, soilY: 880};
};
result.banksiaRetakeFit = {
  scope: 'Read-only PNG measurements and source geometry. No scene, image, narration or saved preview changes. No playback approval.',
  records, alphaBoundsPredicate: 'alpha strictly greater than the named threshold', sharedAlpha20Box: sharedBox,
  alphaIoU32: intersection / union, alphaIoUPredicate: 'alpha greater than or equal to 32, matching brief 102',
  lowerTrunkRoi: {bounds: [940, 1550, 1100, 1744], supportPixels: support, exactlyMatchingRgbaPixels: equalRgba, matchFraction: equalRgba / support},
  hookGeometry: {staleSharedCropAndAnchor: hook([362, 200, 1624, 1800], 1380), correctedCropOldAnchor: hook(sharedBox, 1380),
    proposedHookOnly: hook(sharedBox, aa[3])},
  limits: ['The proposed anchor is the bottom edge of the painted trunk, not a root crown. Select it visually before integration.',
    'The retake shows no roots. Do not replace the global root-bearing plates or reuse their natural-pixel feature coordinates.',
    'Plate box controls scale and centre. The shared Pl renderer does not automatically clip artwork to that box.',
    'A separate hook pair can preserve the old root-bearing mechanism plates. Teaching and continuous motion review remain pending.'],
};
fs.writeFileSync(path.join(root, 'docs/production/claude-pm/checks/codex-interim-art-source.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result.banksiaRetakeFit));
