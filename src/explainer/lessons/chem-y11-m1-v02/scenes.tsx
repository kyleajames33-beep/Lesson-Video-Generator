import React from 'react';
import {SceneData, SceneDrift, SceneHook, ScenePlateau, SceneProperties} from './s1';
import {SceneLimits, SceneMemory, ScenePhysChem, SceneSublimation, SceneTwoProps} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'physical-properties': SceneProperties, plateau: ScenePlateau, 'drift-and-range': SceneDrift, 'melting-data': SceneData,
	limits: SceneLimits, 'two-properties': SceneTwoProps, sublimation: SceneSublimation, 'physical-chemical': ScenePhysChem, 'memory-aid': SceneMemory,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
