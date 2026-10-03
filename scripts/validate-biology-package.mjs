import {readFile, mkdir, writeFile} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import assert from 'node:assert/strict';
import {hash} from './lib/science-audit.mjs';
import {biologySources, biologyMappings, biologyEvidencePins, biologyEvidence} from './lib/biology-lessons.mjs';
import {biologyArtifactSuffixes, validateBiologyArtifacts} from './lib/biology-package.mjs';

const directory = 'out/review/biology-lessons', manifest = JSON.parse(await readFile(`${directory}/manifest.json`));
const evidenceManifest = JSON.parse(await readFile('out/research/curriculum/sources.json'));
const pages = Object.fromEntries(await Promise.all(Object.entries(biologyEvidencePins).map(async ([id, pin]) => [id, await readFile(pin.file)])));
const evidence = biologyEvidence(evidenceManifest, pages), names = Object.keys(biologySources), roles = Object.keys(biologyArtifactSuffixes), drafts = [];
if (manifest.schemaVersion !== 1 || manifest.lessons?.length !== names.length || new Set(manifest.lessons.map((item) => item.name)).size !== names.length ||
    ['sourceLessonsModified', 'audioGenerated', 'rendered', 'registered'].some((flag) => manifest[flag] !== false)) throw new Error('Invalid Biology proposal manifest');
assert.deepEqual(manifest.officialSources, evidence.sources);
for (const lesson of manifest.lessons) {
  if (!names.includes(lesson.name) || lesson.source !== `src/data/${lesson.name}.json` || lesson.sourceSha256 !== biologySources[lesson.name] ||
    lesson.register !== biologyMappings[lesson.name].register) throw new Error('Invalid Biology source selection');
  const sourceBytes = await readFile(lesson.source);
  if (hash(sourceBytes) !== lesson.sourceSha256) throw new Error('Selected Biology source changed');
  if (lesson.exports?.length !== roles.length || roles.some((role) => lesson.exports.filter((item) => item.role === role).length !== 1)) throw new Error('Missing Biology artifact role');
  const artifacts = {};
  for (const artifact of lesson.exports) {
    if (artifact.file !== `${lesson.name}${biologyArtifactSuffixes[artifact.role]}.json`) throw new Error('Invalid Biology artifact path');
    const bytes = await readFile(`${directory}/${artifact.file}`);
    if (hash(bytes) !== artifact.sha256) throw new Error('Biology artifact changed');
    artifacts[artifact.role] = JSON.parse(bytes);
  }
  const result = validateBiologyArtifacts(lesson.name, sourceBytes, artifacts, evidence);
  assert.equal(result.draftSha256, lesson.exports.find((item) => item.role === 'unvoiced-lesson-draft').sha256);
  assert.equal(result.scenes, lesson.scenes); assert.equal(result.plannedTakes, lesson.plannedTakes);
  for (const role of ['learnerTask', 'teacherKey']) {
    const expected = role === 'learnerTask' ? `docs/production/biology-learner-tasks/${biologyMappings[lesson.name].task}.md` : 'docs/production/biology-learner-tasks/teacher-key.md';
    const dependency = lesson[role];
    if (dependency?.file !== expected || hash(await readFile(expected)) !== dependency.sha256) throw new Error('Biology learner material changed');
    assert.deepEqual(artifacts['unapplied-curriculum-mapping'][role], dependency);
  }
  drafts.push(`${directory}/${lesson.name}.json`);
}
const validation = spawnSync(process.execPath, ['scripts/validate-lesson.mjs', ...drafts], {encoding: 'utf8'});
if (validation.error) throw validation.error;
await mkdir('out/checks', {recursive: true});
await writeFile('out/checks/biology-validation.txt', validation.stdout + validation.stderr);
console.log(JSON.stringify({lessons: drafts.length, status: validation.status, errors: (validation.stderr.match(/error:/gu) ?? []).length,
  warnings: (validation.stdout.match(/warning:/gu) ?? []).length, limitation: 'Pinned source and schema checks only. Teacher, visual, measured pacing and learner evidence remain open.'}));
if (validation.status !== 0) process.exitCode = 1;
