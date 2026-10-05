import {mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {quantitativeSources, quantitativeRevision} from './lib/quantitative-corrections.mjs';
import {hash} from './lib/science-audit.mjs';

const output = path.resolve(process.argv[2] ?? 'out/review/quantitative-corrections');
// Check every source before any proposal is written.
const packages = [];
for (const [name, sourceSha256] of Object.entries(quantitativeSources)) {
  const source = `src/data/${name}.json`, bytes = await readFile(source);
  packages.push({name, source, sourceSha256, ...quantitativeRevision(name, bytes)});
}
await mkdir(output, {recursive: true});
const manifest = {schemaVersion: 1, sourceLessonsModified: false, audioGenerated: false, rendered: false,
  status: 'six targeted scene proposals, not complete revised lessons',
  limitations: ['Only the named scene is proposed. Other lesson scenes have not been cleared by this pass.',
    'Recorded production text is unchanged. Changed questions, examples and narration require review and new media later.',
    'No audio, alignment, captions or explicit speech cues are attached. Scene durations are placeholders.',
    'Preserve each source layout and artwork. Integrate the assumptions and precision consistently throughout the lesson before production.'],
  scenes: []};
const review = ['# Quantitative scene corrections', '', manifest.status, '', ...manifest.limitations, ''];
for (const item of packages) {
  const file = `${item.name}.scene-proposal.json`, bytes = JSON.stringify(item, null, 2).replaceAll('\u2014', '\\u2014') + '\n';
  await writeFile(path.join(output, file), bytes);
  manifest.scenes.push({source: item.source, sourceSha256: item.sourceSha256, register: item.register, scene: item.scene.id, file, proposalSha256: hash(bytes)});
  review.push(`## ${item.register}: ${item.name}`, '', item.rationale, '', `[Scene proposal](${file})`, '',
    `Source SHA-256: ${item.sourceSha256}`, '', '**Displayed revision**', '', item.scene.question, '',
    ...(item.scene.steps ?? item.scene.answerSteps).map((step) => `- ${step}`), '', '**Proposed narration**', '', item.scene.voiceover.text, '',
    '**Changed fields**', '', ...item.changes.map((change) => `- ${change.field}: ${change.before ?? '(absent)'} → ${change.after}`), '');
}
await writeFile(path.join(output, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
await writeFile(path.join(output, 'review.md'), review.join('\n').replaceAll('\u2014', '[U+2014]'));
console.log(`Prepared ${packages.length} scene proposals in ${output}. No source lesson changes, audio or renders.`);
