import assert from 'node:assert/strict';
import {hash} from './science-audit.mjs';
import {biologyDraft, biologyCurriculumProposal} from './biology-lessons.mjs';

export const biologyArtifactSuffixes = {
  'unvoiced-lesson-draft': '', 'copy-before-after': '.changes', 'narration-and-motion-plan': '.pacing',
  'unapproved-text-take-plan': '.takes', 'unapplied-curriculum-mapping': '.curriculum',
};
export function assertUnvoicedBiologyDraft(draft) {
  const visit = (value) => {
    if (!value || typeof value !== 'object') return;
    for (const [key, child] of Object.entries(value)) {
      if (/audio|alignment|backgroundMusic/iu.test(key) || ['introVoiceover', 'captions', 'responseHold', 'at', 'delay', 'beats', 'revealDelays', 'moreEnzyme'].includes(key) || /(?:At|Beat)$/u.test(key)) throw new Error(`Stale Biology media/cue: ${key}`);
      visit(child);
    }
  };
  visit(draft);
  if (JSON.stringify(draft).includes('\u2014')) throw new Error('Prohibited punctuation in Biology draft');
}
export function validateBiologyArtifacts(name, sourceBytes, artifacts, evidence) {
  const expected = biologyDraft(name, sourceBytes), draft = artifacts['unvoiced-lesson-draft'];
  assertUnvoicedBiologyDraft(draft);
  assert.deepEqual(draft, expected.draft, 'Biology draft differs from reviewed proposal');
  assert.deepEqual(artifacts['copy-before-after'], expected.changes, 'Biology change record differs');
  const draftSha256 = hash(JSON.stringify(draft, null, 2) + '\n'), links = {sourceSha256: expected.sourceSha256, draftSha256};
  const pacing = artifacts['narration-and-motion-plan'], takes = artifacts['unapproved-text-take-plan'], mapping = artifacts['unapplied-curriculum-mapping'];
  for (const artifact of [pacing, takes, mapping]) for (const [key, value] of Object.entries(links)) assert.equal(artifact[key], value, 'Stale Biology proposal linkage');
  assert.deepEqual(pacing.scenes, expected.pacing, 'Biology pacing differs from reviewed planning');
  assert.equal(takes.generationAuthorised, false); assert.equal(takes.audioGenerated, false);
  for (const key of ['voiceId', 'modelId', 'settings']) assert.equal(takes[key], null);
  const wanted = draft.scenes.flatMap((scene) => {
    const response = pacing.scenes.find((entry) => entry.scene === scene.id).response;
    return (response ? [['prompt', response.promptText], ['answer', response.answerText]] : [['narration', scene.voiceover.text]])
      .map(([phase, text]) => ({scene: scene.id, phase, text, textSha256: hash(text), ...links, audioFile: null, status: 'unapproved text candidate'}));
  });
  assert.deepEqual(takes.takes, wanted, 'Missing, stale or reordered Biology takes');
  const curriculum = biologyCurriculumProposal(name, JSON.parse(sourceBytes), draft, evidence);
  for (const [key, value] of Object.entries(curriculum)) assert.deepEqual(mapping[key], value, `Stale Biology curriculum: ${key}`);
  return {draftSha256, scenes: draft.scenes.length, plannedTakes: wanted.length};
}
