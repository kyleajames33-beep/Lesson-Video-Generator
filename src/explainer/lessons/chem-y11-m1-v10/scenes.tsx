import React from 'react';
import {SceneBohr, SceneEmission, SceneHook, SceneLines, SceneNuclear, ScenePhotons} from './s1';
import {SceneEveryPair, SceneFingerprint, SceneMemoryLine, ScenePrediction, SceneSchrodinger} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, photons: ScenePhotons, 'nuclear-model-problem': SceneNuclear, 'bohr-levels': SceneBohr, emission: SceneEmission, 'hydrogen-lines': SceneLines,
	prediction: ScenePrediction, 'every-pair': SceneEveryPair, fingerprint: SceneFingerprint, schrodinger: SceneSchrodinger, 'memory-line': SceneMemoryLine,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
