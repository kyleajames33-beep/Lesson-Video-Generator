import React from 'react';
import {SceneChain, SceneDirect, SceneHook, SceneIndirect, SceneVector} from './s1';
import {SceneBreak, SceneCompare, SceneEntry, SceneMemory, SceneTransmission, SceneTwoJobs} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'the-chain': SceneChain, 'direct-contact': SceneDirect, 'indirect-contact': SceneIndirect, vector: SceneVector,
	'entry-adaptations': SceneEntry, 'compare-and-hold': SceneCompare, 'transmission-adaptations': SceneTransmission, 'two-jobs': SceneTwoJobs,
	'break-the-link': SceneBreak, memory: SceneMemory, attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo,
	'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
