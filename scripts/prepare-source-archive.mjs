import {mkdir, writeFile, readFile} from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {captureSourceArchive, sourceDigest} from './lib/source-archive.mjs';

for (const script of ['scripts/validate-quantitative-package.mjs', 'scripts/validate-thermochemistry-package.mjs', 'scripts/validate-biology-package.mjs', 'scripts/audit-chemistry-curriculum.mjs', 'scripts/audit-selected-curriculum.mjs']) {
  const validation = spawnSync(process.execPath, [script], {encoding: 'utf8'});
  if (validation.error) throw validation.error;
  if (validation.status !== 0) throw new Error(`Source package must validate before capture (${script}): ${validation.stderr}`);
}
const archive = await captureSourceArchive(process.cwd());
const directory = 'out/archives/quantitative-source';
await mkdir(directory, {recursive: true});
const file = `${directory}/${archive.archiveSha256}.source.json.gz`;
try {await writeFile(file, archive.bytes, {flag: 'wx'});}
catch (error) {if (error.code !== 'EEXIST' || sourceDigest(await readFile(file)) !== archive.archiveSha256) throw error;}
const report = {schemaVersion: 1, archive: file, archiveSha256: archive.archiveSha256, sourceSha256: archive.manifest.sourceSha256,
  files: archive.manifest.files.length, compressedBytes: archive.bytes.length, sourceBytes: archive.manifest.files.reduce((sum, record) => sum + record.bytes, 0),
  createdAt: new Date().toISOString(), status: 'local source archive; restore not yet checked', exclusions: archive.manifest.exclusions,
  limitations: ['Local disk only. No off-machine backup or full release restore is claimed.', 'No public assets, fonts, recordings, alignment or exports are read or archived.',
    'Includes repository source conservatively, selected unvoiced reviews and cached public curriculum evidence. Dependencies must be installed separately before compilation.']};
await writeFile(path.join(directory, 'latest.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
