import {readFile, mkdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {hash} from './lib/science-audit.mjs';
import {quantitativeSources} from './lib/quantitative-corrections.mjs';

// Source-only package check. Refuse media wiring before the lesson validator runs.
const directory = path.resolve(process.argv[2] ?? 'out/review/quantitative-lessons');
const manifest = JSON.parse(await readFile(path.join(directory, 'manifest.json')));
const names = Object.keys(quantitativeSources), drafts = [];
if (manifest.schemaVersion !== 1 || manifest.lessons?.length !== names.length ||
    new Set(manifest.lessons.map((lesson) => lesson.name)).size !== names.length) throw new Error('Expected six distinct lesson proposals');
const requiredRoles = ['unvoiced-lesson-draft', 'copy-before-after', 'narration-and-motion-plan', 'unapproved-text-take-plan'];
const noMedia = (value) => {
  if (!value || typeof value !== 'object') return;
  for (const [key, child] of Object.entries(value)) {
    if (['audioFile', 'captions', 'introVoiceover', 'responseHold'].includes(key)) throw new Error(`Unvoiced package contains media wiring: ${key}`);
    noMedia(child);
  }
};
for (const lesson of manifest.lessons) {
  const source = `src/data/${lesson.name}.json`;
  if (!names.includes(lesson.name) || lesson.source !== source || lesson.sourceSha256 !== quantitativeSources[lesson.name] ||
      hash(await readFile(source)) !== lesson.sourceSha256) throw new Error(`Source changed or unsupported: ${lesson.name}`);
  if (lesson.exports?.length !== requiredRoles.length || requiredRoles.some((role) => lesson.exports.filter((file) => file.role === role).length !== 1)) {
    throw new Error(`Missing or duplicate package role: ${lesson.name}`);
  }
  for (const file of lesson.exports) {
    const resolved = path.resolve(directory, file.file), relative = path.relative(directory, resolved);
    if (!relative || relative.startsWith('..') || path.isAbsolute(relative) || !file.file.endsWith('.json')) throw new Error('Package path escapes the review directory');
    const bytes = await readFile(resolved);
    if (hash(bytes) !== file.sha256) throw new Error(`Artifact changed: ${file.file}`);
    const content = JSON.parse(bytes);
    if (file.role === 'unvoiced-lesson-draft') {
      noMedia(content);
      if (bytes.toString('utf8').includes('\u2014') || JSON.stringify(content).includes('\u2014')) throw new Error('Prohibited punctuation in proposed lesson');
      drafts.push(resolved);
    }
    if (file.role === 'unapproved-text-take-plan' && (content.generationAuthorised !== false || content.audioGenerated !== false ||
        content.takes.some((take) => take.audioFile !== null || hash(take.text) !== take.textSha256))) throw new Error('Invalid unvoiced take plan');
  }
}
const result = spawnSync(process.execPath, ['scripts/validate-lesson.mjs', ...drafts], {encoding: 'utf8'});
if (result.error) throw result.error;
await mkdir('out/checks', {recursive: true});
await writeFile('out/checks/quantitative-integrated-validation.txt', result.stdout + result.stderr);
console.log(JSON.stringify({lessons: drafts.length, status: result.status, errors: (result.stderr.match(/error:/gu) ?? []).length,
  warnings: (result.stdout.match(/warning:/gu) ?? []).length, plannedTakes: manifest.lessons.reduce((sum, lesson) => sum + lesson.plannedTakes, 0),
  limitation: 'Hashes and source schema only; no scientific sign-off or measured pacing validation.'}));
if (result.status !== 0) process.exitCode = 1;
