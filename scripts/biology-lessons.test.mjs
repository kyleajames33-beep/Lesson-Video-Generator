import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {hash} from './lib/science-audit.mjs';
import {biologySources, biologyMappings, biologyDraft, biologyEvidence, biologyCurriculumProposal} from './lib/biology-lessons.mjs';
import {assertUnvoicedBiologyDraft, validateBiologyArtifacts} from './lib/biology-package.mjs';
import {getVoiceoverBudget} from './lesson-utils.mjs';
import {complementaryBase, dnaSequence} from '../src/slides/diagrams/scientific-models.mjs';

const fixture = JSON.parse(await readFile('scripts/fixtures/biology-curriculum.json'));
const artifactsFor = (name, bytes) => {
  const result = biologyDraft(name, bytes), draftSha256 = hash(JSON.stringify(result.draft, null, 2) + '\n');
  const links = {sourceSha256: result.sourceSha256, draftSha256};
  const takes = result.draft.scenes.flatMap((scene) => {
    const response = result.pacing.find((plan) => plan.scene === scene.id).response;
    return (response ? [['prompt', response.promptText], ['answer', response.answerText]] : [['narration', scene.voiceover.text]])
      .map(([phase, text]) => ({scene: scene.id, phase, text, textSha256: hash(text), ...links, audioFile: null, status: 'unapproved text candidate'}));
  });
  return {'unvoiced-lesson-draft': result.draft, 'copy-before-after': result.changes,
    'narration-and-motion-plan': {...links, scenes: result.pacing},
    'unapproved-text-take-plan': {...links, generationAuthorised: false, audioGenerated: false, voiceId: null, modelId: null, settings: null, takes},
    'unapplied-curriculum-mapping': {...links, ...biologyCurriculumProposal(name, JSON.parse(bytes), result.draft, fixture)}};
};
for (const name of Object.keys(biologySources)) {
  test(`${name}: preserves structure and metadata, invalidates media/cues, plans real response separation and refuses drift`, async () => {
    const bytes = await readFile(`src/data/${name}.json`), original = JSON.parse(bytes), result = biologyDraft(name, bytes);
    assert.deepEqual(result.draft.scenes.map((scene) => [scene.id, scene.type, scene.image, scene.diagram?.kind ?? scene.diagram?.type]),
      original.scenes.map((scene) => [scene.id, scene.type, scene.image, scene.diagram?.kind ?? scene.diagram?.type]));
    for (const key of ['syllabusVersion', 'syllabusModule', 'syllabusDotPoints', 'nesaOutcomes']) assert.deepEqual(result.draft[key], original[key]);
    assertUnvoicedBiologyDraft(result.draft);
    for (const scene of result.draft.scenes) assert.equal(getVoiceoverBudget({text: scene.voiceover.text, durationInFrames: scene.durationInFrames, fps: result.draft.fps}).status, 'ok');
    const response = result.pacing.find((plan) => plan.response).response;
    assert.equal(result.draft.scenes.find((scene) => scene.id === 'quick-check').voiceover.text, `${response.promptText} ${response.answerText}`);
    assert.ok(response.minimumThinkingSeconds >= 60);
    assert.throws(() => biologyDraft(name, Buffer.concat([bytes, Buffer.from(' ')])), /Source changed/u);
    const artifacts = artifactsFor(name, bytes);
    assert.equal(validateBiologyArtifacts(name, bytes, artifacts, fixture).plannedTakes, result.draft.scenes.length + 1);
  });
}
test('Biology mappings retain practical verbs, published targets and model-delivery limits', async () => {
  for (const name of Object.keys(biologySources)) {
    const bytes = await readFile(`src/data/${name}.json`), original = JSON.parse(bytes), {draft} = biologyDraft(name, bytes);
    const proposal = biologyCurriculumProposal(name, original, draft, fixture);
    assert.deepEqual(proposal.points.map((point) => point.id), biologyMappings[name].items);
    assert.ok(proposal.points.every((point) => point.parentId === biologyMappings[name].group && hash(point.text) === point.textSha256));
    if (name.includes('activity-practical')) assert.match(proposal.scope, /pH and substrate-concentration experiments/u);
    if (name.includes('dna-replication')) assert.match(proposal.scope, /Watching an animation does not establish/u);
    if (!name.includes('reading-enzyme-graphs')) assert.ok(proposal.targets.find((target) => target.code === 'BI-11WS-03').status.includes('requires actual conducted'));
    assert.throws(() => biologyCurriculumProposal(name, {...original, syllabusVersion: 'Biology Stage 6 (2017)'}, draft, fixture), /Unreviewed/u);
  }
});
test('Biology evidence refuses duplicate selections, changed response declarations and altered page bytes', () => {
  const manifest = {schemaVersion: 1, sources: fixture.sources};
  assert.throws(() => biologyEvidence({...manifest, sources: [fixture.sources[0], fixture.sources[0], fixture.sources[2]]}, {}), /Invalid/u);
  assert.throws(() => biologyEvidence(manifest, {course: Buffer.from('altered response')}), /Reviewed Biology evidence changed/u);
  const changed = structuredClone(manifest); changed.sources[0].sha256 = '0'.repeat(64);
  assert.throws(() => biologyEvidence(changed, {}), /Reviewed Biology evidence changed/u);
});
test('review package rejects stale copy, reordered feedback, stale planning and media/cue reinsertion', async () => {
  const name = Object.keys(biologySources)[0], bytes = await readFile(`src/data/${name}.json`), valid = artifactsFor(name, bytes);
  for (const change of [
    (artifacts) => artifacts['unvoiced-lesson-draft'].scenes[1].voiceover.text = 'Old copy',
    (artifacts) => artifacts['unvoiced-lesson-draft'].scenes[1].voiceover.audioFile = 'old.mp3',
    (artifacts) => artifacts['unvoiced-lesson-draft'].scenes[2].diagram.props.at = {draw: 1},
    (artifacts) => artifacts['narration-and-motion-plan'].scenes[0].proposedFrames++,
    (artifacts) => artifacts['unapproved-text-take-plan'].takes.reverse(),
    (artifacts) => artifacts['unapproved-text-take-plan'].generationAuthorised = true,
    (artifacts) => artifacts['unapplied-curriculum-mapping'].targets[0].description = 'Unreviewed outcome',
  ]) {
    const altered = structuredClone(valid); change(altered);
    assert.throws(() => validateBiologyArtifacts(name, bytes, altered, fixture));
  }
});
test('independent learner arithmetic distinguishes mean, range and interval-average rate', () => {
  const trials = [[8.4, 9.0, 8.7], [16.8, 17.4, 17.1], [21.0, 20.4, 20.7], [1.8, 2.1, 1.5]];
  const means = trials.map((row) => row.reduce((sum, value) => sum + value, 0) / row.length);
  assert.deepEqual(means.map((value) => value.toFixed(1)), ['8.7', '17.1', '20.7', '1.8']);
  assert.deepEqual(trials.map((row) => (Math.max(...row) - Math.min(...row)).toFixed(1)), ['0.6', '0.6', '0.6', '0.6']);
  assert.deepEqual(means.map((value) => (value / 60).toFixed(3)), ['0.145', '0.285', '0.345', '0.030']);
  const biased = trials[0].map((value) => .8 * value);
  assert.equal((biased.reduce((sum, value) => sum + value, 0) / 3).toFixed(2), '6.96');
  assert.notEqual(means[0].toFixed(2), '6.96'); // averaging repeatable proportional loss does not restore the true mean
});
test('DNA orientation example pairs antiparallel strands without treating strand inheritance as fidelity', async () => {
  const upper = dnaSequence('TACGGT'), partner = upper.map(complementaryBase).join('');
  assert.equal(partner, 'ATGCCA');
  assert.equal(upper.map(complementaryBase).map(complementaryBase).join(''), upper.join(''));
  const {draft} = biologyDraft('biology-y11-m1-l20-dna-replication', await readFile('src/data/biology-y11-m1-l20-dna-replication.json'));
  const misconception = draft.scenes.find((scene) => scene.id === 'misconception');
  assert.match(misconception.secondary, /proofreading and mismatch repair/u);
  assert.match(misconception.secondary, /Errors can remain/u);
  const model = draft.scenes.find((scene) => scene.id === 'concept-models');
  assert.match(model.voiceover.text, /does not show fork enzyme actions/u);
  assert.match(model.voiceover.text, /schematic replacement and sealing/u);
});
