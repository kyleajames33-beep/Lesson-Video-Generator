// Freeze metadata inputs without changing original caption repair manifests.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const output = process.argv[2], manifests = process.argv.slice(3);
if (!output || !manifests.length) throw new Error('Supply a new output directory and caption repair manifests.');
if (fs.existsSync(output)) throw new Error('Output exists. Choose a new directory.');
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const read = bytes => JSON.parse(bytes.toString('utf8').replace(/^\uFEFF/, ''));
const captures = new Map(), files = [], records = [];
const capture = (file, expected) => {
  const bytes = fs.readFileSync(file);
  if (hash(bytes) !== expected) throw new Error(`Changed input: ${file}`);
  if (!captures.has(file)) {
    const target = `${output}/inputs/record-${captures.size}.json`;
    captures.set(file, target); files.push({path: target, bytes});
  }
  return captures.get(file);
};
for (const [index, file] of manifests.entries()) {
  const original = fs.readFileSync(file), manifest = read(original);
  const frozen = {...manifest, parentManifestPath: file, parentManifestSha256: hash(original), input: capture(manifest.input, manifest.inputSha256), sourceInputs: (manifest.sourceInputs ?? []).map(s => ({...s, originalPath: s.path, path: capture(s.path, s.sha256)}))};
  const target = `${output}/review-${index + 1}.json`;
  const bytes = Buffer.from(JSON.stringify(frozen, null, 2) + '\n');
  files.push({path: target, bytes});
  records.push({path: target, sha256: hash(bytes), parent: file, parentSha256: hash(original), videoCount: manifest.videos.length});
}
for (const file of files) {
  fs.mkdirSync(path.dirname(file.path), {recursive: true});
  fs.writeFileSync(file.path, file.bytes, {flag: 'wx'});
}
fs.writeFileSync(`${output}/catalog.json`, JSON.stringify({date: '2026-10-25', status: 'local-playback-review-pending', manifests: records}, null, 2) + '\n', {flag: 'wx'});
console.log(JSON.stringify({output, manifests: records, frozenInputs: captures.size}));
