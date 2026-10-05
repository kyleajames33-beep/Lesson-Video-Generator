import {readFile, mkdir, writeFile} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {hash} from './lib/science-audit.mjs';
import {thermochemistrySources} from './lib/thermochemistry-lessons.mjs';
import {chemistrySyllabusSha256} from './lib/chemistry-curriculum.mjs';

const directory = 'out/review/thermochemistry-lessons';
const manifest = JSON.parse(await readFile(`${directory}/manifest.json`)), names = Object.keys(thermochemistrySources), drafts = [];
const roles = ['unvoiced-lesson-draft', 'copy-before-after', 'narration-and-motion-plan', 'unapproved-text-take-plan', 'unapplied-curriculum-mapping'];
if (manifest.schemaVersion !== 1 || manifest.lessons?.length !== names.length || new Set(manifest.lessons.map((item) => item.name)).size !== names.length ||
    manifest.audioGenerated !== false || manifest.rendered !== false || manifest.syllabusSha256 !== chemistrySyllabusSha256) throw new Error('Invalid thermochemistry proposal manifest');
const noMedia = (value) => {
  if (!value || typeof value !== 'object') return;
  for (const [key, child] of Object.entries(value)) {
    if (['audioFile', 'captions', 'introVoiceover', 'responseHold'].includes(key) || /audio|alignment|backgroundMusic/iu.test(key)) throw new Error('Unvoiced draft contains media wiring');
    noMedia(child);
  }
};
for (const lesson of manifest.lessons) {
  if (!names.includes(lesson.name) || lesson.source !== `src/data/${lesson.name}.json` || lesson.sourceSha256 !== thermochemistrySources[lesson.name] ||
      hash(await readFile(lesson.source)) !== lesson.sourceSha256) throw new Error('Selected source changed');
  if (lesson.exports?.length !== roles.length || roles.some((role) => lesson.exports.filter((file) => file.role === role).length !== 1)) throw new Error('Missing package role');
  const draftHash = lesson.exports.find((file) => file.role === 'unvoiced-lesson-draft').sha256;
  const suffixes = {'unvoiced-lesson-draft': '', 'copy-before-after': '.changes', 'narration-and-motion-plan': '.pacing', 'unapproved-text-take-plan': '.takes', 'unapplied-curriculum-mapping': '.curriculum'};
  for (const artifact of lesson.exports) {
    if (artifact.file !== `${lesson.name}${suffixes[artifact.role]}.json`) throw new Error('Invalid proposal artifact path or role');
    const bytes = await readFile(`${directory}/${artifact.file}`), content = JSON.parse(bytes);
    if (hash(bytes) !== artifact.sha256) throw new Error('Proposal artifact changed');
    if (artifact.role === 'unvoiced-lesson-draft') {noMedia(content); if (JSON.stringify(content).includes('\u2014')) throw new Error('Prohibited punctuation'); drafts.push(`${directory}/${artifact.file}`);}
    if (['unapproved-text-take-plan', 'unapplied-curriculum-mapping', 'narration-and-motion-plan'].includes(artifact.role) &&
        (content.draftSha256 !== draftHash || content.sourceSha256 !== lesson.sourceSha256)) throw new Error('Stale proposal linkage');
    if (artifact.role === 'unapproved-text-take-plan' && (content.generationAuthorised !== false || content.audioGenerated !== false ||
      content.takes.some((take) => take.audioFile !== null || take.draftSha256 !== draftHash || take.sourceSha256 !== lesson.sourceSha256 || hash(take.text) !== take.textSha256))) throw new Error('Invalid text-take plan');
  }
}
const validation = spawnSync(process.execPath, ['scripts/validate-lesson.mjs', ...drafts], {encoding: 'utf8'});
if (validation.error) throw validation.error;
await mkdir('out/checks', {recursive: true});
await writeFile('out/checks/thermochemistry-validation.txt', validation.stdout + validation.stderr);
console.log(JSON.stringify({lessons: drafts.length, status: validation.status, errors: (validation.stderr.match(/error:/gu) ?? []).length,
  warnings: (validation.stdout.match(/warning:/gu) ?? []).length, limitation: 'Source package checks only; no scientific approval or measured visual/pacing evidence.'}));
if (validation.status !== 0) process.exitCode = 1;
