import React from 'react';
import {SceneComplete, SceneHook, SceneIncomplete, SceneMole, SceneNumbers, SceneTrend} from './s1';
import {SceneAid, SceneCarbon, SceneFuel, SceneGram, SceneNeutral, SceneObtain} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'complete-combustion': SceneComplete, 'per-mole-sign': SceneMole, 'incomplete-combustion': SceneIncomplete, 'where-numbers-come-from': SceneNumbers, 'series-trend': SceneTrend,
	'per-gram': SceneGram, 'same-products-carbon': SceneCarbon, 'not-carbon-neutral': SceneNeutral, 'obtaining-hydrocarbons': SceneObtain, 'judge-fuel': SceneFuel, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
