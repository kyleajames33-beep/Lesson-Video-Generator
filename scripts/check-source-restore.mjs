import {readFile, mkdir, realpath, writeFile, mkdtemp, rmdir} from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {restoreSourceArchive, verifyRestoredSources, sourceDigest} from './lib/source-archive.mjs';

// Only the generated local receipt is accepted. No arbitrary archive script execution.
const receiptFile = 'out/archives/quantitative-source/latest.json';
const receiptBytes = await readFile(receiptFile), receipt = JSON.parse(receiptBytes);
if (receipt.schemaVersion !== 1 || !/^[a-f0-9]{64}$/u.test(receipt.archiveSha256) ||
    receipt.archive !== `out/archives/quantitative-source/${receipt.archiveSha256}.source.json.gz`) throw new Error('Invalid local source archive receipt');
const bytes = await readFile(receipt.archive);
if (sourceDigest(bytes) !== receipt.archiveSha256) throw new Error('Local source archive changed');
const parent = path.resolve('out/checks/source-restore');
await mkdir(parent, {recursive: true});
if (await realpath(parent) !== parent) throw new Error('Restore parent must be a direct local directory');
const destination = await mkdtemp(path.join(parent, 'source-'));
await rmdir(destination); // remove only our new empty reservation; restore creates exclusively
const archive = await restoreSourceArchive(bytes, destination, receipt.archiveSha256);
const restored = await verifyRestoredSources(destination, archive);
const commands = [
  ['scripts/validate-quantitative-package.mjs'],
  ['scripts/validate-thermochemistry-package.mjs'],
  ['scripts/validate-biology-package.mjs'],
  ['scripts/audit-chemistry-curriculum.mjs'],
  ['scripts/audit-selected-curriculum.mjs'],
  ['--test', '--test-reporter=dot', 'scripts/science-audit.test.mjs', 'scripts/scientific-models.test.mjs', 'scripts/physics-models.test.mjs',
    'scripts/quantitative-models.test.mjs', 'scripts/release-gate.test.mjs', 'scripts/quantitative-corrections.test.mjs', 'scripts/quantitative-lessons.test.mjs', 'scripts/source-archive.test.mjs', 'scripts/chemistry-curriculum.test.mjs', 'scripts/thermochemistry-lessons.test.mjs', 'scripts/biology-lessons.test.mjs'],
];
const checks = commands.map((args) => {
  const result = spawnSync(process.execPath, args, {cwd: destination, encoding: 'utf8'});
  if (result.error) throw result.error;
  return {args, status: result.status, output: result.stdout + result.stderr};
});
const afterChecks = await verifyRestoredSources(destination, archive);
const report = {schemaVersion: 1, archive: receipt.archive, archiveSha256: receipt.archiveSha256, sourceSha256: archive.manifest.sourceSha256,
  destination, ...restored, verifiedAfterChecks: afterChecks.checkedFiles, checkedAt: new Date().toISOString(), checks,
  status: checks.every((check) => check.status === 0) ? 'source bytes and restored source checks passed; full media restore pending' : 'restored source checks failed',
  limitations: ['Checks run against restored files with the system Node runtime. No dependency installation or restored TypeScript compilation is claimed.',
    'No public media/assets/fonts, finished release restore, scientific approval or off-machine backup is included.']};
await writeFile('out/checks/source-restore-report.json', JSON.stringify(report, null, 2) + '\n');
if (sourceDigest(await readFile(receiptFile)) === sourceDigest(receiptBytes)) {
  await writeFile(receiptFile, JSON.stringify({...receipt, status: report.status,
    restoration: {report: 'out/checks/source-restore-report.json', checkedAt: report.checkedAt, archiveSha256: report.archiveSha256,
      checksPassed: checks.every((check) => check.status === 0)}}, null, 2) + '\n');
}
console.log(JSON.stringify({destination, files: report.checkedFiles, checks: checks.map(({status}) => status), status: report.status}, null, 2));
if (checks.some((check) => check.status !== 0)) process.exitCode = 1;
