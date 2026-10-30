import React from 'react';
import {SceneAim, SceneDistil, SceneHook, SceneKetone, ScenePartA, SceneReflux, SceneVariables} from './s1';
import {SceneAid, SceneReliable, SceneRisk, SceneTests, SceneValidity} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneNotes, SceneRule} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'aim-and-alcohols': SceneAim, 'part-a-colour': ScenePartA, variables: SceneVariables, 'distil-aldehyde': SceneDistil, 'reflux-acid': SceneReflux, 'secondary-ketone': SceneKetone,
	'testing-products': SceneTests, validity: SceneValidity, 'reliability-accuracy': SceneReliable, risk: SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-handoff': SceneRule, 'key-notes': SceneNotes,
};
