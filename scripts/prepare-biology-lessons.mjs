import {readFile, mkdir, writeFile} from 'node:fs/promises';
import {hash} from './lib/science-audit.mjs';
import {biologySources, biologyDraft, biologyEvidencePins, biologyEvidence, biologyCurriculumProposal} from './lib/biology-lessons.mjs';

const directory = 'out/review/biology-lessons';
const evidenceManifest = JSON.parse(await readFile('out/research/curriculum/sources.json'));
const pages = Object.fromEntries(await Promise.all(Object.entries(biologyEvidencePins).map(async ([id, pin]) => [id, await readFile(pin.file)])));
const evidence = biologyEvidence(evidenceManifest, pages);
const encode = (value) => JSON.stringify(value, null, 2).replaceAll('\u2014', '\\u2014') + '\n';
const packages = [];
for (const name of Object.keys(biologySources)) {
  const source = `src/data/${name}.json`, bytes = await readFile(source), proposal = biologyDraft(name, bytes);
  const curriculum = biologyCurriculumProposal(name, JSON.parse(bytes), proposal.draft, evidence);
  const taskFile = `docs/production/biology-learner-tasks/${proposal.mapping.task}.md`;
  const keyFile = 'docs/production/biology-learner-tasks/teacher-key.md';
  packages.push({name, source, ...proposal, curriculum, learnerTask: {file: taskFile, sha256: hash(await readFile(taskFile))},
    teacherKey: {file: keyFile, sha256: hash(await readFile(keyFile))}});
}
const manifest = {schemaVersion: 1, status: 'three complete unvoiced Biology proposals; review pending',
  sourceLessonsModified: false, audioGenerated: false, rendered: false, registered: false, officialSources: evidence.sources,
  limitations: ['Original scene order/types, diagram kinds and image references are retained. Copy and selected semantic labels are revised.',
    'These are source estimates, not approved science, measured pacing, visual fit or learner evidence.',
    'Speech, alignment, captions and explicit reveal cues must be rebuilt later. No generation is authorised by this package.',
    'Curriculum targets are separate and unapplied. Actual practical/model construction and teacher review remain open.'], lessons: []};
const review = ['# Biology complete lesson proposals', '', manifest.status, '', ...manifest.limitations, ''];
await mkdir(directory, {recursive: true});
for (const item of packages) {
  const draftContent = encode(item.draft), draftSha256 = hash(draftContent), links = {sourceSha256: item.sourceSha256, draftSha256};
  const takes = item.draft.scenes.flatMap((scene) => {
    const response = item.pacing.find((plan) => plan.scene === scene.id).response;
    return (response ? [['prompt', response.promptText], ['answer', response.answerText]] : [['narration', scene.voiceover.text]])
      .map(([phase, text]) => ({scene: scene.id, phase, text, textSha256: hash(text), ...links, audioFile: null, status: 'unapproved text candidate'}));
  });
  const artifacts = [
    {file: `${item.name}.json`, role: 'unvoiced-lesson-draft', content: draftContent},
    {file: `${item.name}.changes.json`, role: 'copy-before-after', content: encode(item.changes)},
    {file: `${item.name}.pacing.json`, role: 'narration-and-motion-plan', content: encode({...links, scenes: item.pacing})},
    {file: `${item.name}.takes.json`, role: 'unapproved-text-take-plan', content: encode({...links, generationAuthorised: false,
      audioGenerated: false, voiceId: null, modelId: null, settings: null, takes})},
    {file: `${item.name}.curriculum.json`, role: 'unapplied-curriculum-mapping', content: encode({...links, ...item.curriculum,
      learnerTask: item.learnerTask, teacherKey: item.teacherKey})},
  ];
  for (const artifact of artifacts) await writeFile(`${directory}/${artifact.file}`, artifact.content);
  manifest.lessons.push({name: item.name, source: item.source, sourceSha256: item.sourceSha256, register: item.mapping.register,
    scenes: item.draft.scenes.length, plannedTakes: takes.length, learnerTask: item.learnerTask, teacherKey: item.teacherKey,
    exports: artifacts.map(({file, role, content}) => ({file, role, sha256: hash(content)}))});
  review.push(`## ${item.mapping.register}: ${item.draft.title}`, '', `Original SHA-256: ${item.sourceSha256}`, '',
    `[Draft](${item.name}.json), [changes](${item.name}.changes.json), [pacing](${item.name}.pacing.json), [curriculum](${item.name}.curriculum.json)`, '');
  for (const scene of item.draft.scenes) {
    const plan = item.pacing.find((entry) => entry.scene === scene.id);
    review.push(`### ${scene.id}`, '', scene.voiceover.text, '', `Retained visual: ${plan.reuse.diagram ?? plan.reuse.image ?? scene.type}.`, '',
      plan.motion, '', `Estimated scene duration ${(plan.proposedFrames / item.draft.fps).toFixed(1)} s, not measured pacing.`, '');
    if (plan.response) review.push(`Thinking target: ${plan.response.minimumThinkingSeconds} s. Later assemble separate prompt and answer takes with measured silence and no answer/caption leakage.`, '');
  }
}
await writeFile(`${directory}/manifest.json`, encode(manifest));
await writeFile(`${directory}/review.md`, review.join('\n'));
console.log(JSON.stringify({output: directory, lessons: packages.length, scenes: manifest.lessons.reduce((sum, item) => sum + item.scenes, 0),
  plannedTakes: manifest.lessons.reduce((sum, item) => sum + item.plannedTakes, 0), mediaGenerated: false}));
