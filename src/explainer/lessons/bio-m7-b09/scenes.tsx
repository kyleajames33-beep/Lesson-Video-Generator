import React from 'react';
import {SceneHook, SceneMemory, ScenePrimary, SceneReadGraph, SceneSecondary, SceneStays} from './s1';
import {SceneActive, SceneAntivenom, SceneBoosters, ScenePassive, SceneTwoQuestions, SceneVaccination} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (18 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, primary: ScenePrimary, 'what-stays': SceneStays, secondary: SceneSecondary, 'read-graph': SceneReadGraph, memory: SceneMemory,
	vaccination: SceneVaccination, boosters: SceneBoosters, active: SceneActive, passive: ScenePassive, antivenom: SceneAntivenom, 'two-questions': SceneTwoQuestions,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
