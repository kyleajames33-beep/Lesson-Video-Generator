import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, mkdir, writeFile, readFile, rm} from 'node:fs/promises';
import path from 'node:path';
import {gzipSync, gunzipSync} from 'node:zlib';
import {encodeSourceArchive, decodeSourceArchive, restoreSourceArchive, verifyRestoredSources, sourcePathAllowed} from './lib/source-archive.mjs';

const files = () => [{path: 'src/test.mjs', content: Buffer.from('export const count = 3;\r\n')},
  {path: 'README.md', content: Buffer.from('Source-only example: α, ΔH, CH₂O.\n')}];
const mutated = (bytes, change) => {
  const bundle = JSON.parse(gunzipSync(bytes)); change(bundle);
  return gzipSync(Buffer.from(JSON.stringify(bundle)));
};
test('source bundles are deterministic and preserve exact source bytes', () => {
  const archive = encodeSourceArchive(files());
  assert.equal(archive.archiveSha256, encodeSourceArchive(files().reverse()).archiveSha256);
  const decoded = decodeSourceArchive(archive.bytes, archive.archiveSha256);
  assert.equal(decoded.manifest.mediaIncluded, false);
  assert.deepEqual(decoded.files, files().reverse());
  const changed = files(); changed[0].content = Buffer.from('export const count = 4;\r\n');
  assert.notEqual(encodeSourceArchive(changed).manifest.sourceSha256, archive.manifest.sourceSha256);
});
test('archive paths exclude media, environment files, traversal and Windows aliases', () => {
  for (const name of ['../README.md', '/src/a.ts', 'C:/src/a.ts', 'src\\a.ts', '.env', 'src/.env.local',
    'public/audio/take.mp3', 'src/take.wav', 'node_modules/a.js', 'out/checks/frame.png', 'src/CON.ts', 'src/a./b.ts']) assert.equal(sourcePathAllowed(name), false, name);
  assert.equal(sourcePathAllowed('out/review/quantitative-lessons/draft.json'), true);
  assert.equal(sourcePathAllowed('out/review/thermochemistry-lessons/draft.json'), true);
  assert.equal(sourcePathAllowed('out/review/thermochemistry-lessons/recording.mp3'), false);
  assert.equal(sourcePathAllowed('out/review/biology-lessons/draft.json'), true);
  assert.equal(sourcePathAllowed('out/review/biology-lessons/recording.wav'), false);
  assert.equal(sourcePathAllowed('.gitattributes'), true);
  assert.equal(sourcePathAllowed('out/research/curriculum/chemistry-2017-syllabus.docx'), true);
  assert.equal(sourcePathAllowed('out/research/curriculum/unreviewed.docx'), false);
  assert.throws(() => encodeSourceArchive([{path: '../README.md', content: Buffer.from('x')}]));
  assert.throws(() => encodeSourceArchive([{path: 'src/A.ts', content: Buffer.from('x')}, {path: 'src/a.ts', content: Buffer.from('y')}]));
  assert.throws(() => encodeSourceArchive([{path: 'src/a.ts', content: Buffer.from('x')}, {path: 'src/a.ts/b.ts', content: Buffer.from('y')}]));
});
test('modified archive bytes, payloads, sizes and manifest declarations are refused', () => {
  const archive = encodeSourceArchive(files());
  assert.throws(() => decodeSourceArchive(archive.bytes, '0'.repeat(64)), /hash/u);
  for (const change of [(bundle) => bundle.contents[0] = Buffer.from('changed').toString('base64'),
    (bundle) => bundle.manifest.files[0].bytes++, (bundle) => bundle.manifest.mediaIncluded = true,
    (bundle) => bundle.manifest.sourceSha256 = '0'.repeat(64), (bundle) => bundle.contents.pop()]) {
    assert.throws(() => decodeSourceArchive(mutated(archive.bytes, change)));
  }
});
test('restore uses a fresh destination, verifies content and detects later changes', async () => {
  const parent = path.resolve('out/checks'); await mkdir(parent, {recursive: true});
  const root = await mkdtemp(path.join(parent, 'archive-test-'));
  try {
    const archive = encodeSourceArchive(files()), destination = path.join(root, 'restored');
    const restored = await restoreSourceArchive(archive.bytes, destination, archive.archiveSha256);
    assert.equal((await verifyRestoredSources(destination, restored)).checkedFiles, 2);
    assert.deepEqual(await readFile(path.join(destination, 'src/test.mjs')), files()[0].content);
    await assert.rejects(restoreSourceArchive(archive.bytes, destination, archive.archiveSha256), /EEXIST/u);
    await writeFile(path.join(destination, 'src/test.mjs'), 'changed');
    await assert.rejects(verifyRestoredSources(destination, restored), /Restored source changed/u);
    await assert.rejects(restoreSourceArchive(Buffer.from('invalid gzip'), path.join(root, 'bad')));
    await assert.rejects(readFile(path.join(root, 'bad/README.md')), /ENOENT/u);
  } finally {
    const relative = path.relative(parent, root);
    if (!relative.startsWith('archive-test-') || relative.includes(path.sep)) throw new Error('Unsafe test cleanup path');
    await rm(root, {recursive: true, force: true});
  }
});
