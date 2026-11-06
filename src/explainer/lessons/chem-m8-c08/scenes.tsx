import React from 'react';
import {SceneFade, SceneFizz, SceneGreen, SceneGreenLimits, SceneHook, SceneReaction} from './s1';
import {SceneAid, SceneExcluding, SceneLimits, SceneOrder, SceneTwoGroups} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'reaction-you-can-see': SceneReaction, 'cc-fade': SceneFade, 'cooh-fizz': SceneFizz, 'oh-green': SceneGreen, 'green-limits': SceneGreenLimits,
	order: SceneOrder, 'two-groups': SceneTwoGroups, excluding: SceneExcluding, limits: SceneLimits, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-handoff': SceneHandoff, 'key-notes': SceneNotes,
};
