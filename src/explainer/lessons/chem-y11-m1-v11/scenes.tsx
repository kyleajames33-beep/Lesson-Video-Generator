import React from 'react';
import {SceneFilling, SceneHook, SceneNotation, SceneOrbitals, ScenePrediction, SceneSubshells} from './s1';
import {SceneChlorine, SceneIron, SceneMemoryLine, SceneOrderCheck, ScenePairing, ScenePhosphorus, ScenePotassium} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, subshells: SceneSubshells, 'orbitals-capacity': SceneOrbitals, notation: SceneNotation, 'filling-order': SceneFilling, prediction: ScenePrediction,
	potassium: ScenePotassium, phosphorus: ScenePhosphorus, pairing: ScenePairing, chlorine: SceneChlorine, iron: SceneIron, 'order-check': SceneOrderCheck, 'memory-line': SceneMemoryLine,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
