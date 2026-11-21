import React from 'react';
import {SceneAtoms, SceneBoundary, SceneClosed, SceneHook, SceneMgGain, ScenePrediction} from './s1';
import {SceneBalanceMg, SceneBalanceWater, SceneCopper, SceneMassChanges, SceneMemory, SceneSubCoef, SceneUnbalanced} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, boundary: SceneBoundary, prediction: ScenePrediction, 'magnesium-gain': SceneMgGain, 'closed-system': SceneClosed, 'atoms-rearranged': SceneAtoms,
	unbalanced: SceneUnbalanced, 'subscript-coefficient': SceneSubCoef, 'balance-water': SceneBalanceWater, 'balance-magnesium': SceneBalanceMg, 'copper-carbonate': SceneCopper,
	'mass-changes': SceneMassChanges, 'memory-line': SceneMemory,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
