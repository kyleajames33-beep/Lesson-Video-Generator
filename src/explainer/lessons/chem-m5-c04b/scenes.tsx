import React from 'react';
import {SceneHook, SceneRidge, SceneRoute} from './s1';
import {SceneBothWays, SceneLowerPass} from './s2';
import {SceneLimited, SceneSameMix, SceneTubeA, SceneTubeB} from './s3';
import {SceneAid, SceneCatEq, SceneWhich} from './s4';
import {SceneAttempt, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, ridge: SceneRidge, route: SceneRoute, 'lower-pass': SceneLowerPass, 'lower-pass-both-ways': SceneBothWays,
	'tube-a': SceneTubeA, 'tube-b': SceneTubeB, 'same-mixture': SceneSameMix, 'limited-time': SceneLimited,
	'catalyst-at-equilibrium': SceneCatEq, 'which-rates-change': SceneWhich, 'memory-aid': SceneAid,
	attempt: SceneAttempt, 'feedback-one': SceneFeedback1, 'feedback-two': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
