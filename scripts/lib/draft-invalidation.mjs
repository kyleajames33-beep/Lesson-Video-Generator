import {removeMediaAndCues} from './science-corrections.mjs';
import {removeSpeechCues} from './quantitative-lessons.mjs';
import {sha256, canonical} from './playback-assembly.mjs';

export const clearNarrationDependencies = scene => {
  const clean = removeSpeechCues(removeMediaAndCues(structuredClone(scene)));
  if (scene.voiceover) clean.voiceover = {text: scene.voiceover.text, ...(scene.voiceover.translations ? {translations: structuredClone(scene.voiceover.translations)} : {})};
  return clean;
};
function sceneMap(lesson) {
  if (!Array.isArray(lesson?.scenes)) throw new Error('Lesson needs scenes.');
  const result = new Map();
  for (const scene of lesson.scenes) {
    if (typeof scene.id !== 'string' || !scene.id || result.has(scene.id)) throw new Error('Scene IDs must be nonempty and unique.');
    result.set(scene.id, scene);
  }
  return result;
}
export function invalidateDraftNarration(before, candidate) {
  const old = sceneMap(before); sceneMap(candidate);
  const draft = structuredClone(candidate), changes = [];
  const fpsChanged = (before.fps ?? 30) !== (candidate.fps ?? 30);
  draft.scenes = draft.scenes.map(scene => {
    const prior = old.get(scene.id);
    if (!prior || prior.voiceover?.text !== scene.voiceover?.text || canonical(prior.voiceover?.translations) !== canonical(scene.voiceover?.translations) || fpsChanged) {
      changes.push({scene: scene.id, reason: !prior ? 'new-scene' : fpsChanged ? 'fps-changed' : prior.voiceover?.text === scene.voiceover?.text ? 'translation-text-changed' : 'exact-narration-changed',
        beforeTextSha256: prior?.voiceover?.text === undefined ? null : sha256(prior.voiceover.text),
        afterTextSha256: scene.voiceover?.text === undefined ? null : sha256(scene.voiceover.text),
        invalidated: ['audio references including translated recordings', 'alignment references', 'timed captions', 'speech/reveal cues', 'response hold', 'render/review evidence']});
      return clearNarrationDependencies(scene);
    }
    return scene;
  });
  if (before.introVoiceover?.text !== candidate.introVoiceover?.text || fpsChanged) {
    if (draft.introVoiceover) draft.introVoiceover = {text: draft.introVoiceover.text};
    delete draft.introCaptions;
    changes.push({scene: 'intro', reason: fpsChanged ? 'fps-changed' : 'exact-narration-changed', invalidated: ['intro audio and alignment references', 'intro timed captions', 'render/review evidence']});
  }
  return {draft, report: {schemaVersion: 1, status: 'isolated draft; review required', changes,
    removedScenes: [...old.keys()].filter(id => !draft.scenes.some(s => s.id === id)),
    sourceObjectSha256: sha256(canonical(before)), candidateObjectSha256: sha256(canonical(candidate)),
    renderEvidenceInvalidated: canonical(before) !== canonical(candidate), generationAuthorised: false,
    holds: ['Review changed wording and visuals.', 'Choose and approve new exact takes, rebuild alignment/captions/cues.', 'Verify a new full render and existing release gate.'],
    limitation: 'Does not delete media files or rewrite the input. Unchanged scenes retain their exact objects; existing package snapshots still govern all dependency changes.'}};
}
