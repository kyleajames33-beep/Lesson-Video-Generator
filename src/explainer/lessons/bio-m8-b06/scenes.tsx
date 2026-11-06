import React from 'react';
import {SceneCFNormal, SceneCFWrong, SceneDividing, SceneFourGroups, SceneHook} from './s1';
import {SceneEffect, SceneIron, SceneMelanoma, SceneMulti, SceneSilicosis} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'dividing-line': SceneDividing, 'four-groups': SceneFourGroups, 'cf-normal-job': SceneCFNormal, 'cf-what-goes-wrong': SceneCFWrong,
	'effect-not-cause': SceneEffect, silicosis: SceneSilicosis, 'iron-anaemia': SceneIron, melanoma: SceneMelanoma, multifactorial: SceneMulti,
	attempt: SceneAttempt1, 'feedback-one': SceneFeedback1, 'attempt-two': SceneAttempt2, 'feedback-two': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
