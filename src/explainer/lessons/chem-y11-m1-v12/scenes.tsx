import React from 'react';
import {SceneBlocks, SceneGroups, SceneHook, ScenePeriods} from './s1';
import {SceneGroupChem, SceneHalogens, SceneMetals, ScenePrediction, SceneReading, SceneStates} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneMemoryLine, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, periods: ScenePeriods, blocks: SceneBlocks, groups: SceneGroups, prediction: ScenePrediction, 'reading-and-trap': SceneReading,
	'group-chemistry': SceneGroupChem, 'metal-character': SceneMetals, 'period-3-states': SceneStates, 'halogen-states': SceneHalogens, 'memory-line': SceneMemoryLine,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'conclusion-handoff': SceneHandoff, 'key-notes': SceneNotes,
};
