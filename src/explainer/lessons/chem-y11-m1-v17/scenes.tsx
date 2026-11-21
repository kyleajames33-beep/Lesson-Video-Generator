import React from 'react';
import {SceneAlpha, SceneBeta, SceneGamma, SceneHook, ScenePrediction, SceneUnstable} from './s1';
import {SceneHuman, SceneMatter, SceneMemoryLine, SceneNatural, SceneOrigin, ScenePenetration} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'unstable-ionising': SceneUnstable, alpha: SceneAlpha, beta: SceneBeta, gamma: SceneGamma, prediction: ScenePrediction,
	penetration: ScenePenetration, natural: SceneNatural, 'human-made': SceneHuman, 'does-it-matter': SceneMatter, 'origin-changes': SceneOrigin, 'memory-line': SceneMemoryLine,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
