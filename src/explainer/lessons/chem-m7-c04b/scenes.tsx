import React from 'react';
import {SceneHook, SceneNotCatalyst, SceneSwap, SceneWhy} from './s1';
import {SceneAlkyne, SceneMixtures, SceneOneTwo} from './s2';
import {SceneAid, SceneHowMuch, SceneLimits} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'why-alkanes-dont-add': SceneWhy, 'uv-swap': SceneSwap, 'uv-not-catalyst': SceneNotCatalyst, 'one-or-two-products': SceneOneTwo,
	mixtures: SceneMixtures, 'alkyne-adds-twice': SceneAlkyne, 'how-much-reagent': SceneHowMuch, 'bromine-water-limits': SceneLimits, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
