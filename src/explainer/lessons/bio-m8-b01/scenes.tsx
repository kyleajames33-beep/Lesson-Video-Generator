import React from 'react';
import {SceneFive, SceneHook, SceneRange, SceneThermostat} from './s1';
import {SceneChecks, SceneGlucose, SceneMemory, SceneNegative, ScenePositive} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (15 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'range-not-number': SceneRange, thermostat: SceneThermostat, 'five-parts': SceneFive, 'why-negative': SceneNegative,
	'positive-feedback': ScenePositive, 'glucose-template': SceneGlucose, 'exam-checks': SceneChecks, memory: SceneMemory, attempt: SceneAttempt,
	'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
