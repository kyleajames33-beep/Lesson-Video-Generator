import {rules, numericChecks, stringFields} from './science-audit.mjs';
import {visualScienceChecklist} from './visual-science-checklist.mjs';

export function sourceDiagnostics(lesson) {
  return stringFields(lesson).flatMap(({field, text}) => [
    ...rules.filter(rule => rule.pattern.test(text)).map(rule => ({field, rule: rule.id, why: rule.why})),
    ...numericChecks(text).filter(c => !c.compatible).map(check => ({field, rule: 'numeric-equality', check})),
  ]);
}

// Projection of fresh preflight + existing release gate, never a replacement
// approval ledger or score. Missing checkout media says nothing about storage elsewhere.
export function readinessReport({lesson, sourceJson, sourceSha256, preflight, narration, releaseGate = null}) {
  if (!preflight || preflight.sourceJson !== sourceJson) throw new Error('Fresh preflight must match the exact selected source.');
  const errors = [...preflight.errors];
  for (const segment of narration) for (const issue of segment.errors ?? []) {
    if (!errors.some(e => e.sceneId === segment.scene && e.code === issue.code)) errors.push({sceneId: segment.scene, ...issue});
  }
  const diagnostics = sourceDiagnostics(lesson);
  const stage = (pattern, manualReview) => {
    const blockers = errors.filter(e => pattern.test(e.code));
    return {status: blockers.length ? 'blocked' : releaseGate?.ready ? 'evidence-complete' : 'unverified', blockers, manualReview};
  };
  const stages = {
    science: {...stage(/SOURCE_REVIEW|MODEL_INVALID/u, 'Named science review of the exact rendered package is required.'), diagnostics,
      diagnosticLimit: 'The existing science rules and decimal arithmetic screen are triage only. Absence of flags is not correctness.'},
    artwork: {...stage(/VISUAL_REVIEW|DIAGRAM_|IMAGE_|MEDIA_MISSING/u, 'Inspect actual artwork, provenance, labels, arrows, units, scales, motion and phone-size output.'),
      checklist: visualScienceChecklist(lesson, sourceSha256)},
    narration: {...stage(/NARRATION_|COPY_PUNCTUATION/u, 'Review exact wording, scientific terminology, pronunciation and delivery.'), segments: narration},
    audio: stage(/AUDIO_|ALIGNMENT_|ASSEMBLY_|NARRATION_ALIGNMENT/u, 'Listen to the actual selected takes and full playback; matched hashes are not listening approval.'),
    captions: stage(/CAPTION|NARRATION_ALIGNMENT/u, 'Check exact alignment pairing, timing, reading order, visibility and response-gap concealment.'),
    render: {...stage(/TIMELINE|TRANSITION|RELEASE_|SNAPSHOT_/u, 'The existing gate requires a full unchanged render, captions, and all five named review scopes.'), releaseGate},
  };
  return {schemaVersion: 1, sourceJson, sourceSha256, compositionId: preflight.compositionId,
    status: errors.length === 0 && preflight.mediaReady && releaseGate?.ready ? 'release-evidence-complete' : 'release-evidence-incomplete',
    stages, preflight, productionAvailability: 'unknown; this report checks only selected local evidence',
    publicationAuthorised: false, generationAuthorised: false,
    nextActions: [...new Set(errors.map(e => `${e.sceneId}: ${e.code}`)), ...(!releaseGate?.ready ? ['Supply and pass the existing gate:release configuration for this exact lesson.'] : [])],
    limitation: 'No production-wide ready count. Local missing media is not a claim that production has no ready lessons. Nothing is generated, approved, queued or published.'};
}
