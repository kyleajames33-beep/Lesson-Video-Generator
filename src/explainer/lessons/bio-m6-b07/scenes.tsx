import React from 'react';
import {SceneCombos, SceneFert, SceneHalf, SceneHook, SceneThreeJobs} from './s1';
import {SceneAsexual, SceneMemory, SceneOneGen, SceneUltimate} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (15 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'three-jobs': SceneThreeJobs, 'half-the-gametes': SceneHalf, 'new-combinations': SceneCombos, fertilisation: SceneFert,
	'one-generation': SceneOneGen, 'ultimate-source': SceneUltimate, asexual: SceneAsexual, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
