import React from 'react';
import {SceneAim, SceneFroth, SceneHook, SceneResults, SceneVariables, SceneWhy} from './s1';
import {SceneAgrees, SceneAid, SceneOil, SceneReliable, SceneRisk, SceneValid} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneNotes, SceneRule} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'aim-tubes': SceneAim, 'froth-test': SceneFroth, variables: SceneVariables, 'froth-results': SceneResults, 'why-scum': SceneWhy,
	'oil-test': SceneOil, 'oil-agrees': SceneAgrees, reliability: SceneReliable, 'valid-accurate': SceneValid, risk: SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-handoff': SceneRule, 'key-notes': SceneNotes,
};
