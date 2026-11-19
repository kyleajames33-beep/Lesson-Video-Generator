import React from 'react';
import {SceneHook, ScenePrediction, SceneRf, SceneTwoPhases, SceneWhy} from './s1';
import {ScenePractical, SceneRatio, SceneStandards, SceneTraps, SceneWorked} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'two-phases': SceneTwoPhases, 'why-distances-differ': SceneWhy, prediction: ScenePrediction, 'rf-value': SceneRf,
	'worked-example': SceneWorked, 'why-a-ratio': SceneRatio, standards: SceneStandards, 'practical-details': ScenePractical, 'traps-and-memory-aid': SceneTraps,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
