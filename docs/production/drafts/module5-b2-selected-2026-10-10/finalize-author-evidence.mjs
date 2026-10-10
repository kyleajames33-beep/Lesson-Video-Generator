import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const base = 'docs/production/drafts/module5-b2-selected-2026-10-10';
const output = 'out/prototypes/module5-b2-selected-2026-10-10';
const hash = p => createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const read = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const manifestPath = `${output}/author-still-evidence.json`;
const evidence = read(manifestPath), previousEvidence = `${output}/pre-working-cue-review/author-still-evidence.json`, old = read(previousEvidence);
assert.equal(hash(`${base}/lesson.json`), 'a9caaa09366537f56d1ea60cee0184313a62a421b9b64e76b023ae5c112ca8af');
assert.equal(evidence.source.sha256, hash(`${base}/lesson.json`));
assert.equal(evidence.frames.length, 26);
assert.deepEqual(evidence.keyRuntime, old.keyRuntime);
for (const f of evidence.frames) {
  assert.equal(hash(f.path), f.sha256);
}
evidence.bundleReuse = {previousEvidence, previousEvidenceSha256: hash(previousEvidence), keyRuntimeMatchedExactly: true, reason: 'Only selected JSON working reveal cues changed; compiled runtime and key source hashes are unchanged.'};
evidence.captionLimit = 'No faithful timed captions exist. Normal neutral chrome uses the actual renderer. scene.caption is teaching metadata, not an external caption track. Actual devices and external player captions remain pending.';
evidence.authorObservations = {path: `${base}/author-still-observations.md`, sha256: hash(`${base}/author-still-observations.md`), opened: 26, mode: 'silent-still-author-observation', independentReview: false};
fs.writeFileSync(manifestPath, JSON.stringify(evidence, null, 2) + '\n');
const validationPath = `${base}/author-validation.json`, validation = read(validationPath);
validation.stillEvidence = {path: manifestPath, sha256: hash(manifestPath), observationPath: `${base}/author-still-observations.md`, observationSha256: hash(`${base}/author-still-observations.md`), scope: 'Author sampled native and390 PNG observations only; no whole-device, caption, playback or listening pass.'};
validation.typeScript = {command: 'npx tsc --noEmit', exitCode: 0, scope: 'TypeScript result during this implementation; positional SVG/cue changes do not alter types.'};
validation.pending = validation.pending.filter(item => !item.startsWith('Native/narrow'));
validation.pending.push('Continuous full-scene motion, remaining support-copy phone readability and external player captions');
fs.writeFileSync(validationPath, JSON.stringify(validation, null, 2) + '\n');
for (const name of ['author-validation.json', 'README.md', 'author-still-observations.md']) fs.copyFileSync(`${base}/${name}`, `${output}/${name}`);
for (const name of fs.readdirSync(base).filter(n => /\.(json|md|mjs)$/.test(n))) assert.ok(!fs.readFileSync(`${base}/${name}`, 'utf8').includes(String.fromCharCode(0x2014)), name);
console.log(JSON.stringify({sourceSha256: hash(`${base}/lesson.json`), stillManifestSha256: hash(manifestPath), authorObservationSha256: hash(`${base}/author-still-observations.md`), frames: 26}, null, 2));
