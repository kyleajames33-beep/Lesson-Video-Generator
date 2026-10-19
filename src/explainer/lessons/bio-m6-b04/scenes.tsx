import React from 'react';
import {SceneChromosomal, SceneHook, SceneHowTheyBreak} from './s1';
import {SceneCarrier, SceneDelDup, SceneInvTrans} from './s2';
import {SceneCompare, SceneMemory, SceneNondisjunction, SceneTrisomy} from './s3';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s4';

// Playback order comes from the measured lesson (16 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'chromosomal-mutation': SceneChromosomal, 'how-they-break': SceneHowTheyBreak, 'deletion-duplication': SceneDelDup,
	'inversion-translocation': SceneInvTrans, 'carrier-gametes': SceneCarrier, nondisjunction: SceneNondisjunction, 'trisomy-21': SceneTrisomy, compare: SceneCompare, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
