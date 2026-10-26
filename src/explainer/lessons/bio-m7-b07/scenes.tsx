import React from 'react';
import {SceneAntibodyShape, SceneAntigens, SceneHook, SceneLymphNode, SceneOneShape, SceneSelection} from './s1';
import {SceneActions, SceneClone, SceneClonePlasma, SceneMemory, SceneSequence, SceneSpecific} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (18 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'lymph-node': SceneLymphNode, antigens: SceneAntigens, 'antibody-shape': SceneAntibodyShape, 'one-shape': SceneOneShape, selection: SceneSelection,
	clone: SceneClone, 'plasma-memory': SceneClonePlasma, 'antibody-actions': SceneActions, specific: SceneSpecific, sequence: SceneSequence, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
