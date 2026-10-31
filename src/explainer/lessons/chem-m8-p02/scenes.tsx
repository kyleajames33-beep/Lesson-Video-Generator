import React from 'react';
import {SceneAim, SceneDigest, SceneExpected, SceneFilter, SceneHook, ScenePrepare} from './s1';
import {SceneAid, SceneConstant, SceneReliable, SceneResults, SceneRisk, SceneValid} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'aim-variables': SceneAim, 'expected-mass': SceneExpected, 'prepare-precipitate': ScenePrepare, 'digest-split': SceneDigest, 'filter-wash-check': SceneFilter,
	'constant-mass': SceneConstant, 'results-recovery': SceneResults, 'reliable-accurate': SceneReliable, valid: SceneValid, risk: SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-handoff': SceneHandoff, 'key-notes': SceneNotes,
};
