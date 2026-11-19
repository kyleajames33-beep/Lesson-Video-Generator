import React from 'react';
import {SceneHook, SceneSimple, SceneStairs, SceneThermo, SceneTwoLiquids} from './s1';
import {SceneAzeo, SceneChoose, SceneColumn, SceneFractions, SceneSafety} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'simple-distillation': SceneSimple, 'thermometer-and-safety': SceneThermo, 'surprise-two-liquids': SceneTwoLiquids, staircase: SceneStairs,
	column: SceneColumn, 'beads-and-fractions': SceneFractions, azeotrope: SceneAzeo, choosing: SceneChoose, 'safety-and-memory-aid': SceneSafety,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
