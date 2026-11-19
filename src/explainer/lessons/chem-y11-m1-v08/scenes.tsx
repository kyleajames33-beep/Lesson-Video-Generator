import React from 'react';
import {SceneAtomicNumber, SceneHook, SceneIons, SceneMassNumber, SceneParticles} from './s1';
import {SceneIron, SceneIsotopes, SceneMemoryLine, ScenePrediction, SceneStability} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, particles: SceneParticles, 'atomic-number': SceneAtomicNumber, 'mass-number': SceneMassNumber, ions: SceneIons,
	iron: SceneIron, prediction: ScenePrediction, isotopes: SceneIsotopes, 'memory-line': SceneMemoryLine, stability: SceneStability,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
