import {clearNarrationDependencies} from './draft-invalidation.mjs';
import {sha256} from './playback-assembly.mjs';
import {getVoiceoverBudget} from '../lesson-utils.mjs';

// Deliberately emits no provider-compatible voice manifest or selected paths.
// The existing assembler remains the sole authority for measured silence/cues.
export function responseProposal(lesson, specifications) {
  const draft = structuredClone(lesson), known = new Set(draft.scenes.map(s => s.id));
  if (known.size !== draft.scenes.length) throw new Error('Duplicate source scene IDs.');
  const fps = draft.fps ?? 30;
  if (!Number.isInteger(fps) || fps <= 0) throw new Error('Positive integer fps required.');
  const interactions = [], selected = new Set();
  for (const spec of specifications) {
    if (!['pause', 'predict', 'retrieval'].includes(spec.kind) || selected.has(spec.sceneId)) throw new Error('Unique interaction scene and supported kind required.');
    selected.add(spec.sceneId);
    for (const key of ['sceneId', 'question', 'promptText', 'answerText']) if (typeof spec[key] !== 'string' || !spec[key].trim()) throw new Error('Interaction needs ' + key);
    if (!Array.isArray(spec.answerSteps) || !spec.answerSteps.length || spec.answerSteps.some(s => typeof s !== 'string' || !s.trim())) throw new Error('Interaction needs answer steps.');
    if (!Number.isFinite(spec.thinkingSeconds) || spec.thinkingSeconds <= 0 || !Number.isSafeInteger(spec.thinkingSeconds * fps)) throw new Error('Thinking duration must be positive whole frames.');
    if (spec.promptText.trim() !== spec.promptText || spec.answerText.trim() !== spec.answerText) throw new Error('Prompt and answer must have exact trimmed boundaries.');
    if (JSON.stringify(spec).includes('\u2014')) throw new Error('U+2014 is not allowed in proposed copy.');
    const text = spec.promptText + ' ' + spec.answerText;
    const scene = {id: spec.sceneId, type: 'quickCheck', heading: spec.kind === 'predict' ? 'Predict before calculating' : spec.kind === 'retrieval' ? 'Recall without replaying' : 'Pause and try it', question: spec.question,
      pausePrompt: `Pause and ${spec.kind === 'predict' ? 'predict' : spec.kind === 'retrieval' ? 'recall without replaying' : 'try it'}; take longer if needed.`,
      answerSteps: spec.answerSteps, caption: spec.promptCaption ?? 'Make an attempt before revealing the feedback.',
      durationInFrames: getVoiceoverBudget({text, durationInFrames: 1, fps}).requiredFrames + Math.ceil((spec.thinkingSeconds + 4) * fps),
      voiceover: {text}};
    const existing = draft.scenes.findIndex(s => s.id === spec.sceneId);
    if (existing >= 0) {
      if (draft.scenes[existing].type !== 'quickCheck' || spec.afterSceneId) throw new Error('Only an existing quick check can be replaced without an insertion anchor.');
      draft.scenes[existing] = scene;
    } else {
      const anchor = draft.scenes.findIndex(s => s.id === spec.afterSceneId);
      if (anchor < 0) throw new Error('A new interaction needs an existing insertion anchor.');
      draft.scenes.splice(anchor + 1, 0, scene); known.add(spec.sceneId);
    }
    interactions.push({sceneId: spec.sceneId, kind: spec.kind,
      promptText: spec.promptText, answerText: spec.answerText, promptSha256: sha256(spec.promptText), answerSha256: sha256(spec.answerText),
      proposedThinkingFrames: spec.thinkingSeconds * fps, thinkingSeconds: spec.thinkingSeconds,
      timingStatus: 'unmeasured proposal; not a responseHold or executable playback plan',
      visualContract: ['Prompt/neutral caption only during attempt.', 'Hide feedback, answer captions and solution-bearing images until measured silence ends.',
        'Use existing assembly to establish responseHold and answerVisibleStart after authorised exact recordings.', 'Inspect actual boundary frames and continuous phone-size playback.']});
  }
  draft.scenes = draft.scenes.map(clearNarrationDependencies);
  delete draft.introVoiceover; delete draft.introCaptions; delete draft.backgroundMusic; delete draft.productionRole; delete draft.productionNotes;
  const responseByScene = new Map(interactions.map(i => [i.sceneId, i]));
  const takes = draft.scenes.flatMap(s => {
    const response = responseByScene.get(s.id), parts = response ? [['prompt', response.promptText], ['feedback', response.answerText]] : s.voiceover?.text ? [['narration', s.voiceover.text]] : [];
    if (parts.length && parts.map(([, text]) => text).join(' ') !== s.voiceover.text) throw new Error('Split takes alter exact narration.');
    return parts.map(([phase, text]) => ({scene: s.id, phase, text, textSha256: sha256(text), audioFile: null, status: 'unapproved text candidate; not an audio-generation job'}));
  });
  return {draft, interactions: {schemaVersion: 1, generationAuthorised: false, registered: false, rendered: false, interactions},
    takes: {generationAuthorised: false, voiceId: null, modelId: null, settings: null, takes},
    holds: ['Teacher/source review of new prompts and feedback.', 'Review visual fit and delay any solution-bearing recap/heading.',
      'Approve exact takes before generation, then assemble actual silence and align captions.', 'Pass existing preflight, full-render reviews and release gate.']};
}
