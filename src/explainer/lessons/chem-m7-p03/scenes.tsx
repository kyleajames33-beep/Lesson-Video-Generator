import React from 'react';
import {SceneCalc, SceneHook, SceneMethod, SceneRange, SceneSetup, SceneVariables} from './s1';
import {SceneAid, SceneErrors, SceneExtrap, SceneFixes, SceneReliable, SceneRisk, SceneValidity} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneNotes, SceneRule} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, setup: SceneSetup, method: SceneMethod, variables: SceneVariables, calculate: SceneCalc, 'compare-range': SceneRange,
	'reliable-comparison': SceneReliable, 'error-chain': SceneErrors, 'extrapolation-contrast': SceneExtrap, improvements: SceneFixes, validity: SceneValidity,
	'risk-assessment': SceneRisk, 'memory-aid': SceneAid, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2,
	'decision-rule': SceneRule, 'key-notes': SceneNotes,
};
