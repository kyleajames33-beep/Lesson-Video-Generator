import React from 'react';
import {SceneAlways, SceneHook, SceneMethod, SceneVariables} from './s1';
import {SceneExpected, SceneLiquid, ScenePredictions, SceneRules} from './s2';
import {SceneAid, SceneRisk, SceneValidity} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'always-soluble-partners': SceneAlways, 'predict-method': SceneMethod, variables: SceneVariables,
	'expected-results': SceneExpected, 'results-to-rules': SceneRules, 'test-predictions': ScenePredictions, 'test-the-liquid': SceneLiquid,
	'validity-reliability': SceneValidity, 'risk-assessment': SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
