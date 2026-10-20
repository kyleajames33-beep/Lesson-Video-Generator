import React from 'react';
import {SceneBreeding, SceneDefinition, SceneHook, SceneYeast} from './s1';
import {SceneAdvantages, SceneInsulin, SceneMemory, SceneTimeline, SceneWhatChanges} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (15 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'yeast-process': SceneYeast, definition: SceneDefinition, 'selective-breeding': SceneBreeding,
	insulin: SceneInsulin, 'what-changes': SceneWhatChanges, advantages: SceneAdvantages, timeline: SceneTimeline, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
