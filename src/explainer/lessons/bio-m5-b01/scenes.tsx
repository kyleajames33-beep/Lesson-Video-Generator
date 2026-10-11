import React from 'react';
import {SceneAsexual, SceneContinuity, SceneHook} from './s1';
import {SceneGametes, SceneVariation} from './s2';
import {SceneCompare, SceneTradeOff} from './s3';
import {SceneAttempt, SceneFeedback, SceneMemory, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, continuity: SceneContinuity, asexual: SceneAsexual, gametes: SceneGametes, variation: SceneVariation,
	'trade-off': SceneTradeOff, 'worked-compare': SceneCompare, attempt: SceneAttempt, feedback: SceneFeedback, memory: SceneMemory, 'key-notes': SceneNotes,
};
