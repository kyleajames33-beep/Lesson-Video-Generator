import React from 'react';
import {SceneBt, SceneFour, SceneGd, SceneHook} from './s1';
import {SceneChecks, SceneMemory, SceneUndone, SceneVerdicts} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (14 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'four-questions': SceneFour, 'bt-cotton': SceneBt, 'gene-drive': SceneGd, undone: SceneUndone, verdicts: SceneVerdicts,
	'verdict-checks': SceneChecks, memory: SceneMemory, attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo,
	'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
