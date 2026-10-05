import {stringFields, hash} from './science-audit.mjs';
import {canonical} from './playback-assembly.mjs';

const criteria = [
  ['labels', 'Check every visible label against the depicted structure/process and narration, including legends and symbol definitions.'],
  ['arrows', 'Check each arrow origin, destination, direction and meaning. Distinguish transport, reaction, force and time; inspect intermediate motion.'],
  ['units', 'Verify quantities, conversions, significant figures and units beside values and on axes. Explicitly mark dimensionless quantities.'],
  ['scales', 'Check axis zero, range, spacing and scale type. Label schematic/not-to-scale/illustrative representations and do not infer fractions from particle counts.'],
  ['consistency', 'Check the same entity, colour, symbol, value, mechanism and assumption across copy, narration, diagram, worked answer and captions.'],
];
export function visualScienceChecklist(lesson, sourceSha256) {
  return {schemaVersion: 1, sourceSha256, status: 'unreviewed checklist; source extraction is not visual approval',
    approval: false, scenes: lesson.scenes.filter(s => s.diagram || s.image).map(scene => ({
      scene: scene.id, sceneSha256: hash(canonical(scene)), sceneType: scene.type,
      diagram: scene.diagram ? {type: scene.diagram.type, kind: scene.diagram.kind ?? null, sha256: hash(canonical(scene.diagram))} : null,
      image: scene.image ?? null,
      authoredStrings: stringFields(scene.diagram ?? {}).map(({field, text}) => ({field: 'diagram' + field.slice(1), text})),
      narration: scene.voiceover?.text ?? null, teachingCaption: scene.caption ?? null,
      checks: criteria.map(([id, question]) => ({id, question, outcome: 'unreviewed', reviewer: null, evidence: null})),
      requiredEvidence: ['Rendered keyframes before/during/after each scientific transition.', 'Continuous clip with actual narration and captions.', 'Phone-size legibility and visual fit.', 'Compare prompt/hold/feedback boundaries for answer leakage.'],
    })),
    limitation: 'Authored strings do not inventory hardcoded component labels or pixels. Review actual assets and component output. Existing release review and package hashes remain authoritative.'};
}
