import React from 'react';
import {SceneClosed, SceneHook, SceneMagnesium, SceneReversibility} from './s1';
import {SceneDilution, SceneExpected, SceneSetup, SceneVariables} from './s2';
import {SceneAid, SceneRisk, SceneTemperature, SceneValidity} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'reversibility-test': SceneReversibility, 'magnesium-open': SceneMagnesium, 'closed-system': SceneClosed,
	'setup-reference': SceneSetup, variables: SceneVariables, 'expected-results': SceneExpected, 'dilution-control': SceneDilution,
	temperature: SceneTemperature, 'validity-reliability': SceneValidity, 'risk-assessment': SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
