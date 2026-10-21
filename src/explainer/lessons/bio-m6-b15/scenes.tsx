import React from 'react';
import {SceneBoth, SceneCollect, SceneDeliver, SceneHook} from './s1';
import {SceneChoice, SceneGenePool, SceneMemory, SceneReach, SceneWriting} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (15 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'what-both-do': SceneBoth, 'collect-store': SceneCollect, 'deliver-exclude': SceneDeliver, reach: SceneReach, 'gene-pool': SceneGenePool,
	'choice-not-method': SceneChoice, 'writing-compare': SceneWriting, memory: SceneMemory, attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne,
	'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
