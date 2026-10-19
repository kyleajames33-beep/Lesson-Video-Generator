import React from 'react';
import {SceneHook, ScenePointMutation, SceneSilent} from './s1';
import {SceneFrameshift, SceneMissense, SceneNonsense} from './s2';
import {SceneMemory, SceneReadingFrame, SceneWhatDecides} from './s3';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s4';

// Playback order comes from the measured lesson (15 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'point-mutation': ScenePointMutation, silent: SceneSilent, missense: SceneMissense, nonsense: SceneNonsense, frameshift: SceneFrameshift,
	'reading-frame': SceneReadingFrame, 'what-decides': SceneWhatDecides, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
