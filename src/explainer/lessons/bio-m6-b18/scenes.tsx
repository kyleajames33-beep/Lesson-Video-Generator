import React from 'react';
import {SceneCut, SceneHook, ScenePaste, SceneRightDna} from './s1';
import {SceneMemory, ScenePick, ScenePlants, ScenePutIn, SceneUse} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (15 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'right-dna': SceneRightDna, cut: SceneCut, paste: ScenePaste, 'put-in': ScenePutIn, pick: ScenePick, 'use-it': SceneUse, plants: ScenePlants,
	memory: SceneMemory, attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
