import React from 'react';
import {SceneEndpoint, SceneFlask, SceneHook, SceneIndicator, SceneRange, SceneSwitch} from './s1';
import {SceneAid, SceneJump, SceneRule, SceneSalts, SceneWeConc, SceneWePh} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'indicator-weak-acid': SceneIndicator, 'reversible-switch': SceneSwitch, 'transition-range': SceneRange, 'endpoint-equivalence': SceneEndpoint, 'flask-at-equivalence': SceneFlask,
	'three-salts': SceneSalts, 'we-concentration': SceneWeConc, 'we-ph': SceneWePh, 'the-jump': SceneJump, 'the-rule': SceneRule, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
