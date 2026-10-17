import React from 'react';
import {SceneGene, SceneHook, SceneRnaDiff} from './s1';
import {SceneCodingCheck, SceneDirection, ScenePromoter, SceneTemplate, SceneWorked} from './s2';
import {SceneCodons, SceneManyCopies, SceneMemoryB6b, SceneNotReplication, SceneRelease} from './s3';
import {SceneAttemptB6b, SceneAttemptTwoB6b, SceneDecisionB6b, SceneFeedbackOneB6b, SceneFeedbackTwoB6b, SceneNotesB6b} from './s4';

// Playback order comes from the measured lesson (19 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'gene-and-mrna': SceneGene, 'rna-differences': SceneRnaDiff, 'polymerase-promoter': ScenePromoter, 'template-strand': SceneTemplate,
	direction: SceneDirection, 'worked-copy': SceneWorked, 'coding-check': SceneCodingCheck, 'release-export': SceneRelease, 'many-copies': SceneManyCopies,
	'not-replication': SceneNotReplication, 'codons-cftr': SceneCodons, memory: SceneMemoryB6b, attempt: SceneAttemptB6b, 'feedback-one': SceneFeedbackOneB6b,
	'attempt-two': SceneAttemptTwoB6b, 'feedback-two': SceneFeedbackTwoB6b, 'decision-rule': SceneDecisionB6b, 'key-notes': SceneNotesB6b,
};
