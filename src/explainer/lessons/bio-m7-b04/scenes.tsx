import React from 'react';
import {SceneCosts, SceneFarming, SceneHook, SceneMyrtleCause, SceneMyrtleEffects, SceneThree} from './s1';
import {SceneAssess, SceneExporters, SceneFmd, SceneMemory, SceneUk} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'three-things': SceneThree, 'farming-odds': SceneFarming, 'crop-costs': SceneCosts, 'myrtle-rust-cause': SceneMyrtleCause,
	'myrtle-rust-effects': SceneMyrtleEffects, 'fmd-direct': SceneFmd, 'uk-2001-indirect': SceneUk, exporters: SceneExporters, assess: SceneAssess,
	memory: SceneMemory, attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
