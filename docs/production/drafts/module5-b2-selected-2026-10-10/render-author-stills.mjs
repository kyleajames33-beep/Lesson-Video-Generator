import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {bundle} from '@remotion/bundler';
import {selectComposition, renderStill, openBrowser} from '@remotion/renderer';
import {lessonTimeline} from '../../../../src/lesson/timeline.mjs';
const base = 'docs/production/drafts/module5-b2-selected-2026-10-10';
const output = 'out/prototypes/module5-b2-selected-2026-10-10';
const read = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const hash = p => createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const validation = read(`${base}/author-validation.json`);
const bound = [validation.source, ...validation.selectedRuntime];
const check = () => bound.forEach(f => assert.equal(hash(f.path), f.sha256, `Inputs changed: ${f.path}`));
check();
const props = read(`${base}/remotion-props.json`), timeline = lessonTimeline(props.lesson);
const frameDir = `${output}/author-stills`; fs.mkdirSync(frameDir, {recursive: true});
// This lesson selects no media or artwork. Copy only the required local fonts.
const publicDir = path.resolve(`${output}/author-public`);
fs.mkdirSync(publicDir, {recursive: true});
fs.cpSync('public/fonts', path.join(publicDir, 'fonts'), {recursive: true});
const reuse = process.argv.includes('--reuse-bundle');
const previousEvidence = `${output}/pre-working-cue-review/author-still-evidence.json`;
if (reuse) assert.deepEqual(read(previousEvidence).keyRuntime, validation.selectedRuntime, 'Runtime changed; rebuild bundle');
const serveUrl = reuse ? path.resolve(`${output}/author-bundle-fonts`) : await bundle({entryPoint: path.resolve('src/dev/release-entry.tsx'), publicDir, outDir: path.resolve(`${output}/author-bundle-fonts`)});
check();
const composition = await selectComposition({serveUrl, id: 'Lesson-release', inputProps: props});
const answer = props.lesson.scenes.find(s => s.id === 'quick-check').revealDelays.answerVisibleStart;
const samples = [['hook', 650], ['concept-fertilisation', 280], ['concept-fertilisation', 800], ['concept-asexual-animal', 700], ['concept-external', 950], ['concept-internal', 650], ['definition-comparison', 1100], ['worked-example', 1430], ['quick-check', answer - 1], ['quick-check', answer], ['quick-check', answer + 55], ['quick-check', answer + 1250], ['summary', 650]];
const records = [];
const browser = await openBrowser('chrome');
for (const [id, localFrame] of samples) {
  const entry = timeline.scenes.find(e => e.scene.id === id), frame = entry.startFrame + localFrame;
  assert.ok(localFrame < entry.scene.durationInFrames);
  for (const scale of [1, 0.203125]) {
    const name = `${id}-${localFrame}${scale === 1 ? '' : '-phone-390'}.png`, imagePath = `${frameDir}/${name}`;
    await renderStill({serveUrl, composition, inputProps: props, frame, scale, puppeteerInstance: browser, imageFormat: 'png', output: path.resolve(imagePath), timeoutInMilliseconds: 60000});
    records.push({sceneId: id, localFrame, frame, scale, width: Math.round(1920 * scale), height: Math.round(1080 * scale), path: imagePath, sha256: hash(imagePath)});
  }
  console.log(`${id} local ${localFrame}: native and 390-wide PNGs.`);
}
check();
await browser.close({silent: true});
const manifest = {schemaVersion: 1, date: '2026-10-10', reviewer: '/root/bio_b2_selected_implementation', scope: 'Targeted author silent still generation, not continuous playback, selected-source independent review or human listening.', source: validation.source, props: {path: `${base}/remotion-props.json`, sha256: hash(`${base}/remotion-props.json`)}, keyRuntime: validation.selectedRuntime, sourceChecksBeforeAfter: true, frames: records, ...(reuse ? {bundleReuse: {previousEvidence, previousEvidenceSha256: hash(previousEvidence), keyRuntimeMatchedExactly: true, reason: 'Only selected JSON working reveal cues changed; compiled runtime and all key source hashes are unchanged.'}} : {}), captionLimit: 'No faithful timed captions exist. Normal neutral chrome uses actual renderer; scene.caption is teaching metadata, not an external caption track. External player captions and actual devices remain pending.'};
fs.writeFileSync(`${output}/author-still-evidence.json`, JSON.stringify(manifest, null, 2) + '\n');
console.log('Author sampled still evidence generated. Opening and observation remain separate.');
