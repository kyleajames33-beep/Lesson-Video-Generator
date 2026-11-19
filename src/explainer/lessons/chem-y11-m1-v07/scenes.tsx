import React from 'react';
import {SceneCO2, SceneFixedRatio, SceneHook, ScenePrediction, SceneRAM} from './s1';
import {SceneAmmonium, SceneHeating, SceneHydrate, SceneMemoryLine, SceneMethod} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'fixed-ratio': SceneFixedRatio, 'relative-atomic-mass': SceneRAM, prediction: ScenePrediction, 'carbon-dioxide': SceneCO2,
	method: SceneMethod, 'ammonium-nitrate': SceneAmmonium, hydrate: SceneHydrate, 'hydrate-heating': SceneHeating, 'memory-line': SceneMemoryLine,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
