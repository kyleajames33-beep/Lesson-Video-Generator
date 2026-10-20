import React from 'react';
import {SceneEitherWay, SceneHook, SceneReacts, SceneSameDiff, SceneTwoSteps} from './s1';
import {SceneAid, SceneEthanoic, SceneHF, SceneNotStrength, SceneWeakBase} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'same-different': SceneSameDiff, 'reacts-completely': SceneReacts, 'two-steps': SceneTwoSteps, 'ionising-either-way': SceneEitherWay,
	'ethanoic-zero': SceneEthanoic, 'hf-more-heat': SceneHF, 'weak-base-less': SceneWeakBase, 'heat-not-strength': SceneNotStrength, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
