import React from 'react';
import {SceneAlarm, SceneBarriers, SceneFourSigns, SceneHook, SceneSendCells, SceneSplinter} from './s1';
import {SceneAlert, SceneEngulf, SceneHolding, SceneMemory, SceneNeutrophils, SceneTwoSpeeds} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (18 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'send-cells': SceneSendCells, barriers: SceneBarriers, splinter: SceneSplinter, alarm: SceneAlarm, 'four-signs': SceneFourSigns,
	neutrophils: SceneNeutrophils, phagocytosis: SceneEngulf, holding: SceneHolding, 'alert-adaptive': SceneAlert, 'two-speeds': SceneTwoSpeeds, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
