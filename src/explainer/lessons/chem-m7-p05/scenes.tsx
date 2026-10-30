import React from 'react';
import {SceneAim, SceneHook, SceneReflux, SceneVariables, SceneWorkUp, SceneYield} from './s1';
import {SceneAid, SceneIdentify, SceneLimits, SceneReliable, SceneRisk, SceneValid} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneNotes, SceneRule} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'aim-limiting': SceneAim, 'reflux-setup': SceneReflux, variables: SceneVariables, 'work-up': SceneWorkUp, 'yield-calc': SceneYield,
	'ceiling-losses': SceneLimits, reliability: SceneReliable, 'valid-accurate': SceneValid, identify: SceneIdentify, risk: SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-handoff': SceneRule, 'key-notes': SceneNotes,
};
