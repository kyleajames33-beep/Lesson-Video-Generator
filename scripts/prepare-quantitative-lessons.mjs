import {mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {quantitativeSources} from './lib/quantitative-corrections.mjs';
import {integratedQuantitativeDraft} from './lib/quantitative-lessons.mjs';
import {hash} from './lib/science-audit.mjs';

const output = path.resolve(process.argv[2] ?? 'out/review/quantitative-lessons');
// Resolve and guard every source before creating any output package.
const packages = [];
for (const name of Object.keys(quantitativeSources)) {
  const source = `src/data/${name}.json`, bytes = await readFile(source);
  packages.push({name, source, ...integratedQuantitativeDraft(name, bytes)});
}
const encode = (value) => JSON.stringify(value, null, 2).replaceAll('\u2014', '\\u2014') + '\n';
const manifest = {schemaVersion: 1, status: 'six complete isolated unvoiced source proposals; review pending',
  sourceLessonsModified: false, audioGenerated: false, rendered: false, registered: false,
  limitations: ['No scientific sign-off, measured alignment, visual fit, listening or learner timing validation is recorded.',
    'Full scene order, types, artwork and diagram kinds are preserved. Copy and scoped diagram labels are revised.',
    'Audio, aligned captions, intro audio and custom speech cues are removed. Defaults may be unaligned or incomplete.',
    'Scene durations are source planning estimates. Thinking holds are separate prompt/answer planning targets, not verified silence.',
    'Voice, model and pronunciation settings remain unset. New text must never be attached to an old take.'], lessons: []};
const review = ['# Complete quantitative lesson proposals', '', manifest.status, '', ...manifest.limitations, ''];
await mkdir(output, {recursive: true});
for (const item of packages) {
  const draftSha256 = hash(encode(item.draft));
  const takes = item.draft.scenes.flatMap((scene) => {
    if (!scene.voiceover) return [];
    const response = item.pacing.find((item) => item.scene === scene.id)?.response;
    const segments = response ? [['prompt', response.promptText], ['answer', response.answerText]] : [['narration', scene.voiceover.text]];
    return segments.map(([phase, text]) => ({scene: scene.id, phase, text, textSha256: hash(text), audioFile: null,
      sourceSha256: item.sourceSha256, draftSha256, status: 'text candidate; science review and voice settings pending'}));
  });
  const files = [
    {file: `${item.name}.json`, role: 'unvoiced-lesson-draft', content: encode(item.draft)},
    {file: `${item.name}.changes.json`, role: 'copy-before-after', content: encode(item.changes)},
    {file: `${item.name}.pacing.json`, role: 'narration-and-motion-plan', content: encode({status: 'planning only; no media generated', voiceId: null, modelId: null,
      sourceSha256: item.sourceSha256, draftSha256, fps: item.draft.fps, scenes: item.pacing})},
    {file: `${item.name}.takes.json`, role: 'unapproved-text-take-plan', content: encode({generationAuthorised: false, audioGenerated: false,
      voiceId: null, modelId: null, settings: null, pronunciationDictionary: null, takes,
      nextStep: 'After copy review and later audio authorisation, choose settings, record separate response segments, then assemble and measure the response gap.'})},
  ];
  for (const file of files) await writeFile(path.join(output, file.file), file.content);
  manifest.lessons.push({name: item.name, source: item.source, sourceSha256: item.sourceSha256, register: item.register,
    scenes: item.draft.scenes.length, narrationScenes: item.draft.scenes.filter((scene) => scene.voiceover).length, plannedTakes: takes.length,
    changedFields: item.changes.length, totalSceneFrames: item.totalFrames, proposedSceneSeconds: Number((item.totalFrames / item.draft.fps).toFixed(2)),
    exports: files.map(({file, role, content}) => ({file, role, sha256: hash(content)}))});
  review.push(`## ${item.register}: ${item.draft.title}`, '', `[Complete draft](${item.name}.json), [field changes](${item.name}.changes.json), [pacing and response plan](${item.name}.pacing.json)`, '',
    `Source SHA-256: ${item.sourceSha256}`, '', '| Scene | Prior seconds | Proposed seconds | Thinking target | Existing visual |', '| --- | --- | --- | --- | --- |');
  for (const scene of item.pacing) review.push(`| ${scene.scene} | ${(scene.inheritedFrames / item.draft.fps).toFixed(1)} | ${(scene.proposedFrames / item.draft.fps).toFixed(1)} | ${scene.response?.minimumThinkingSeconds ?? 0} s | ${scene.reuse.diagram ?? scene.reuse.image ?? scene.reuse.sceneType} |`);
  review.push('', 'Times are estimates, not an audio-aligned timeline. Rebuild custom component cues and inspect any hard-coded labels before preview.', '');
  const original = JSON.parse(await readFile(item.source));
  for (const scene of item.draft.scenes) {
    review.push(`### ${scene.id}`, '', '**Displayed copy**', '', ...item.changes.filter((change) => change.field.startsWith(`$.scenes.${item.draft.scenes.indexOf(scene)}.`) && !change.field.includes('.voiceover.')).map((change) => `- ${change.after}`), '');
    if (scene.voiceover) review.push('**Current narration**', '', original.scenes.find((candidate) => candidate.id === scene.id).voiceover?.text ?? '(none)', '',
      '**Proposed narration**', '', scene.voiceover.text, '');
    const response = item.pacing.find((item) => item.scene === scene.id)?.response;
    if (response) review.push(`**Response plan:** ${response.minimumThinkingSeconds} s initial thinking target. ${response.rationale}`, '',
      'Record prompt and answer separately. Assemble and measure the gap to the earliest visible/audible answer before setting the final boundary.', '');
  }
}
await writeFile(path.join(output, 'manifest.json'), encode(manifest));
await writeFile(path.join(output, 'review.md'), review.join('\n').replaceAll('\u2014', '[U+2014]'));
console.log(JSON.stringify({output, lessons: packages.length, scenes: packages.reduce((sum, item) => sum + item.draft.scenes.length, 0), mediaGenerated: false}, null, 2));
