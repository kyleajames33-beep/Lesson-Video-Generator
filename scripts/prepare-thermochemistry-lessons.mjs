import {readFile, mkdir, writeFile} from 'node:fs/promises';
import {hash} from './lib/science-audit.mjs';
import {thermochemistrySources, thermochemistryDraft} from './lib/thermochemistry-lessons.mjs';
import {chemistrySyllabusSha256} from './lib/chemistry-curriculum.mjs';

const output = 'out/review/thermochemistry-lessons', cache = 'out/research/curriculum';
const sourceManifest = JSON.parse(await readFile(`${cache}/chemistry-sources.json`));
const extractionBytes = await readFile(`${cache}/chemistry-2017-paragraphs.json`), syllabus = JSON.parse(extractionBytes);
if (hash(await readFile(`${cache}/chemistry-2017-syllabus.docx`)) !== chemistrySyllabusSha256 ||
    syllabus.sourceSha256 !== chemistrySyllabusSha256 || hash(extractionBytes) !== sourceManifest.extraction.sha256 ||
    hash(await readFile('scripts/extract-nesa-docx.py')) !== sourceManifest.extraction.scriptSha256) throw new Error('Reviewed Chemistry evidence changed');
const packages = [];
for (const name of Object.keys(thermochemistrySources)) {
  const source = `src/data/${name}.json`;
  packages.push({name, source, ...thermochemistryDraft(name, await readFile(source))});
}
const encode = (value) => JSON.stringify(value, null, 2).replaceAll('\u2014', '\\u2014') + '\n';
const manifest = {schemaVersion: 1, status: 'six unvoiced thermochemistry correction proposals; review pending',
  sourceLessonsModified: false, audioGenerated: false, rendered: false, registered: false,
  syllabusSha256: chemistrySyllabusSha256, extractionSha256: hash(extractionBytes),
  limitations: ['Source/schema and arithmetic checks are not scientific approval, visual fit or measured pacing evidence.',
    'Original scene order, scene types, artwork references and diagram kinds are retained. Scientific copy and selected labels are revised.',
    'Speech, alignment, captions and custom reveal cues must be rebuilt later. No generation is authorised by this package.',
    'Existing metadata remains intact; mapping proposals are separate and unapplied. Teacher/practical/learner evidence remains pending.'], lessons: []};
const review = ['# Thermochemistry source proposals', '', manifest.status, '', ...manifest.limitations, ''];
await mkdir(output, {recursive: true});
for (const item of packages) {
  const draftContent = encode(item.draft), draftSha256 = hash(draftContent);
  const takes = item.draft.scenes.flatMap((scene) => {
    const response = item.pacing.find((entry) => entry.scene === scene.id).response;
    const segments = response ? [['prompt', response.promptText], ['answer', response.answerText]] : [['narration', scene.voiceover.text]];
    return segments.map(([phase, text]) => ({scene: scene.id, phase, text, textSha256: hash(text), audioFile: null,
      sourceSha256: item.sourceSha256, draftSha256, status: 'unapproved text candidate'}));
  });
  const officialPoints = item.mapping.points.map((id) => {
    const paragraph = syllabus.paragraphs.find((item) => item.id === id);
    if (!paragraph) throw new Error('Reviewed content paragraph missing');
    return {id, parentId: {p899: 'p898', p904: 'p902', p905: 'p902'}[id] ?? null, text: paragraph.text.trim(), textSha256: hash(paragraph.text.trim())};
  });
  const inquiry = syllabus.paragraphs.find((paragraph) => paragraph.id === item.mapping.inquiry);
  const curriculum = {status: 'selected mapping proposal; unapplied and not teacher approved', sourceSha256: item.sourceSha256, draftSha256,
    edition: item.draft.syllabusVersion, yearLevel: item.draft.yearLevel, module: item.draft.syllabusModule, officialPoints,
    proposedInquiryQuestion: inquiry.text.replace(/^Inquiry question:\s*/u, '').trim(),
    targetOutcomes: item.draft.yearLevel === 'Year 11' ? ['CH11-11', 'CH11/12-5', 'CH11/12-6'] : ['CH12-13', 'CH11/12-5', 'CH11/12-6'],
    scopeNotes: item.name.endsWith('enthalpy-of-formation') ? 'Formation data support the published Hess-law calculation point; formation enthalpy is not separately named here.' :
      item.draft.yearLevel === 'Year 12' ? 'Calculation and explanation support the named neutralisation practical. Viewing does not establish that a learner conducted it. Ka/free-energy explanation bounds inference; no full acid-strength unit is claimed.' : 'Selected content support only; no complete module or course coverage claim.',
    remainingEvidence: ['teacher science/curriculum review', 'independent learner response', ...(item.draft.yearLevel === 'Year 12' ? ['supervised practical and actual primary-data record'] : [])]};
  const artifacts = [
    {file: `${item.name}.json`, role: 'unvoiced-lesson-draft', content: draftContent},
    {file: `${item.name}.changes.json`, role: 'copy-before-after', content: encode(item.changes)},
    {file: `${item.name}.pacing.json`, role: 'narration-and-motion-plan', content: encode({sourceSha256: item.sourceSha256, draftSha256, scenes: item.pacing})},
    {file: `${item.name}.takes.json`, role: 'unapproved-text-take-plan', content: encode({sourceSha256: item.sourceSha256, draftSha256, generationAuthorised: false, audioGenerated: false, voiceId: null, modelId: null, settings: null, takes})},
    {file: `${item.name}.curriculum.json`, role: 'unapplied-curriculum-mapping', content: encode(curriculum)},
  ];
  for (const artifact of artifacts) await writeFile(`${output}/${artifact.file}`, artifact.content);
  manifest.lessons.push({name: item.name, source: item.source, sourceSha256: item.sourceSha256, register: item.mapping.register,
    scenes: item.draft.scenes.length, plannedTakes: takes.length, exports: artifacts.map(({file, role, content}) => ({file, role, sha256: hash(content)}))});
  review.push(`## ${item.mapping.register}: ${item.draft.title}`, '', `Original source SHA-256: ${item.sourceSha256}`, '',
    `[Draft](${item.name}.json), [changes](${item.name}.changes.json), [pacing](${item.name}.pacing.json), [mapping](${item.name}.curriculum.json)`, '');
  for (const scene of item.draft.scenes) {
    const plan = item.pacing.find((entry) => entry.scene === scene.id);
    review.push(`### ${scene.id}`, '', scene.voiceover.text, '',
      `Existing visual: ${plan.reuse.diagram ?? plan.reuse.image ?? plan.reuse.sceneType}. Planning duration ${(plan.proposedFrames / item.draft.fps).toFixed(1)} s; this is not measured pacing.`, '');
    if (plan.response) review.push(`Thinking target: ${plan.response.minimumThinkingSeconds} s. Record prompt and feedback separately later; do not show solution copy or captions during the assembled gap.`, '');
  }
}
await writeFile(`${output}/manifest.json`, encode(manifest));
await writeFile(`${output}/review.md`, review.join('\n'));
console.log(JSON.stringify({lessons: packages.length, scenes: manifest.lessons.reduce((sum, item) => sum + item.scenes, 0), plannedTakes: manifest.lessons.reduce((sum, item) => sum + item.plannedTakes, 0), output, mediaGenerated: false}));
