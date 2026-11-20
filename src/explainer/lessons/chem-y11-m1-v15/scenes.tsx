import React from 'react';
import {SceneHook, SceneLithium, ScenePotassium, SceneSafety, SceneSodium} from './s1';
import {SceneCause, SceneFair, SceneFilms, SceneMemoryLine, ScenePrediction, SceneProducts, SceneRbCs} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, safety: SceneSafety, lithium: SceneLithium, sodium: SceneSodium, potassium: ScenePotassium, products: SceneProducts, cause: SceneCause,
	prediction: ScenePrediction, 'rubidium-caesium': SceneRbCs, 'fair-comparison': SceneFair, 'surface-films': SceneFilms, 'memory-line': SceneMemoryLine,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
