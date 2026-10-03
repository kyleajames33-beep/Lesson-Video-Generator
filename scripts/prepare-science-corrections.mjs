import {mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {sources, correctedDraft} from './lib/science-corrections.mjs';
import {hash} from './lib/science-audit.mjs';

const output = path.resolve(process.argv[2] ?? 'out/review/science-corrections');
// Validate all sources before writing any drafts.
const packages = [];
for (const [name, sourceHash] of Object.entries(sources)) {
  const source = `src/data/${name}.json`;
  const bytes = await readFile(source);
  const {draft, changes} = correctedDraft(name, bytes);
  const content = JSON.stringify(draft, null, 2) + '\n';
  packages.push({name, source, sourceHash, draftHash: hash(content), content, changes,
    scenes: draft.scenes.map((scene) => ({id: scene.id, narrationChanged: scene.voiceover?.text !== JSON.parse(bytes).scenes.find((item) => item.id === scene.id)?.voiceover?.text,
      durationStatus: 'original placeholder, not validated', mediaStatus: 'no recording attached; alignment, captions and cues require rebuilding'}))});
}
await mkdir(output, {recursive: true});
for (const item of packages) {
  await writeFile(path.join(output, `${item.name}.json`), item.content);
  await writeFile(path.join(output, `${item.name}.changes.json`), JSON.stringify(item.changes, null, 2).replaceAll('\u2014', '\\u2014') + '\n');
}
await writeFile(path.join(output, 'manifest.json'), JSON.stringify({status: 'unvoiced science correction drafts; expert review pending',
  sourceLessonsModified: false, audioGenerated: false, rendered: false,
  caveats: ['Not registered for production or approved for release.', 'Original layouts, scene order, diagram kinds and asset references retained.',
    'All audio wiring, caption tracks and explicit reveal cues removed; component defaults are not aligned.',
    'Original durations are placeholders. Final narration, response gaps, cues, layout and playback need validation.',
    'Existing diagram implementations may still have hard-coded labels or omissions. Copy corrections do not repair those models.'],
  lessons: packages.map(({content, changes, ...item}) => ({...item, changedFields: changes.length}))}, null, 2) + '\n');
const review = ['# Science correction review', '',
  'Four isolated unvoiced drafts. Source lessons are unchanged. Scientific approval and all final media work remain pending.', '',
  'Original layouts and artwork references are retained. Durations are placeholders; removed cues must be rebuilt before use. See manifest.json for hashes and dependencies.', ''];
for (const item of packages) {
  review.push(`## ${item.name}`, '', `[Draft JSON](${item.name}.json), [field changes](${item.name}.changes.json)`, '',
    `Source SHA-256: ${item.sourceHash}`, '', `Draft SHA-256: ${item.draftHash}`, '');
  const original = JSON.parse(await readFile(item.source));
  const draft = JSON.parse(item.content);
  for (const scene of draft.scenes) {
    const old = original.scenes.find((candidate) => candidate.id === scene.id);
    if (!scene.voiceover) continue;
    review.push(`### ${scene.id}`, '', '**Current narration**', '', old.voiceover?.text ?? '(none)', '',
      '**Proposed narration**', '', scene.voiceover.text, '', '**Displayed copy changes**', '');
    const prefix = `$.scenes.${draft.scenes.indexOf(scene)}.`;
    for (const change of item.changes.filter((change) => change.field.startsWith(prefix) && !change.field.includes('.voiceover.'))) {
      review.push(`- ${change.field.slice(prefix.length)}: ${change.after}`, '');
    }
  }
}
await writeFile(path.join(output, 'review.md'), review.join('\n').replaceAll('\u2014', '[U+2014]'));
console.log(`Prepared ${packages.length} isolated drafts in ${output}. No audio or renders.`);
