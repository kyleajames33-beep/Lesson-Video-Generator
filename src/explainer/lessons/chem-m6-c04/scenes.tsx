import React from 'react';
import {SceneChoosing, SceneHook, SceneLiming, SceneSoil, SceneStomach} from './s1';
import {SceneAcidRain, SceneAid, SceneLimeTreat, SceneMine, SceneScrubber} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, choosing: SceneChoosing, stomach: SceneStomach, 'soil-problem': SceneSoil, liming: SceneLiming,
	'acid-rain': SceneAcidRain, scrubber: SceneScrubber, 'mine-drainage': SceneMine, 'lime-treatment': SceneLimeTreat, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
