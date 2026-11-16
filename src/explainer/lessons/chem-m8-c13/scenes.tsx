import React from 'react';
import {SceneEquilibrium, SceneHook, SceneRate, SceneReaction, SceneSupply, SceneYield} from './s1';
import {SceneJudge, SceneMemory, ScenePurity, SceneSafety, SceneSociety} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneClose, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, reaction: SceneReaction, supply: SceneSupply, equilibrium: SceneEquilibrium, 'rate-conditions': SceneRate, yield: SceneYield,
	purity: ScenePurity, 'safety-waste': SceneSafety, 'environment-society-cost': SceneSociety, judge: SceneJudge, 'memory-aid': SceneMemory,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'course-close': SceneClose,
	'key-notes': SceneNotes,
};
