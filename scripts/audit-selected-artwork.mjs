import {readFile, access, stat, mkdir, writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';

// File/hash inventory only. Does not open images visually or touch audio/video.
const args = process.argv.slice(2);
if (args.some((arg) => !['--thermochemistry', '--biology'].includes(arg)) || args.length > 1) throw new Error('Use no arguments, --thermochemistry or --biology');
const selection = args[0]?.slice(2) ?? 'quantitative', prefix = selection === 'quantitative' ? '' : `${selection}-`;
const root = process.cwd(), directory = `out/review/${selection}-lessons`;
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');
const manifestBytes = await readFile(`${directory}/manifest.json`), manifest = JSON.parse(manifestBytes);
const registryFile = 'src/assets/index.ts', registryBytes = await readFile(registryFile);
const registry = new Map([...registryBytes.toString('utf8').matchAll(/(\w+)\s*:\s*staticFile\('([^']+)'\)/gu)].map((match) => [match[1], match[2]]));
const references = new Map();
for (const lesson of manifest.lessons) {
  const exportFile = lesson.exports.find((file) => file.role === 'unvoiced-lesson-draft');
  const bytes = await readFile(path.join(directory, exportFile.file));
  if (digest(bytes) !== exportFile.sha256) throw new Error(`Draft changed: ${exportFile.file}`);
  const draft = JSON.parse(bytes);
  for (const scene of draft.scenes) {
    if (!scene.image) continue;
    if (!references.has(scene.image)) references.set(scene.image, []);
    references.get(scene.image).push({source: lesson.source, sourceSha256: lesson.sourceSha256, draft: exportFile.file, draftSha256: exportFile.sha256, scene: scene.id});
  }
}
const exists = async (file) => {try {await access(file); return true;} catch (error) {if (error.code === 'ENOENT') return false; throw error;}};
const assets = [];
for (const [key, uses] of references) {
  const registeredPath = registry.get(key) ?? null;
  const row = {registryKey: key, registeredPath, uses, present: false, sha256: null,
    provenanceStatus: 'unverified', scientificVisualReviewStatus: 'pending', origin: null, creatorOrTool: null, licenceOrTerms: null, permissionEvidence: null, metadataCandidates: []};
  if (registeredPath) {
    const file = path.resolve(root, 'public', registeredPath), relative = path.relative(path.resolve(root, 'public'), file);
    if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) throw new Error('Artwork path escapes public directory');
    // Only registered image formats, never media recordings.
    if (!/\.(?:png|jpe?g|webp|gif|svg)$/iu.test(file)) throw new Error(`Unsupported selected artwork file: ${registeredPath}`);
    row.present = await exists(file);
    if (row.present) {const info = await stat(file); if (!info.isFile()) throw new Error('Artwork reference is not a file'); row.sha256 = digest(await readFile(file));}
    const stem = file.replace(/\.[^.]+$/u, '');
    for (const candidate of [`${stem}.generation.json`, `${stem}.provenance.json`, `${stem}.licence.json`, `${file}.provenance.json`]) {
      if (await exists(candidate)) row.metadataCandidates.push({path: path.relative(root, candidate).replaceAll('\\', '/'), sha256: digest(await readFile(candidate)), status: 'located; contents and rights not validated'});
    }
  }
  row.status = !registeredPath ? 'registration-missing' : !row.present ? 'file-missing' : 'file-present; provenance-and-science-review-open';
  assets.push(row);
}
const report = {schemaVersion: 1, sourceManifest: `${directory}/manifest.json`, sourceManifestSha256: digest(manifestBytes), registryFile, registrySha256: digest(registryBytes), assets,
  status: 'selected artwork inventory; no provenance or scientific approval recorded',
  limitation: `Top-level scene.image references in ${manifest.lessons.length} selected isolated drafts only. Does not cover title heroes, component-internal art, fonts, licences elsewhere or restore/playback evidence. A present file or generation sidecar is not permission to use it.`};
const output = 'out/review/selected-artwork';
await mkdir(output, {recursive:true});
await writeFile(`${output}/${prefix}inventory.json`, JSON.stringify(report, null, 2) + '\n');
await writeFile(`${output}/${prefix}queue.md`, ['# Selected artwork review queue', '', report.status, '', report.limitation, '',
  '| Asset key | Registered path | Present? | Status |', '| --- | --- | --- | --- |',
  ...assets.map((row) => `| ${row.registryKey} | ${row.registeredPath ?? '(none)'} | ${row.present} | ${row.status} |`), '',
  'Keep existing artwork. First locate missing registered files or source evidence, then inspect the actual science, crop, labels and phone-size legibility later. No new artwork or rendering was performed.', ''].join('\n'));
console.log(JSON.stringify({output, references: assets.reduce((sum, row) => sum + row.uses.length, 0), assets: assets.length,
  present: assets.filter((row) => row.present).length, missing: assets.filter((row) => !row.present).length, provenanceVerified: 0}, null, 2));
