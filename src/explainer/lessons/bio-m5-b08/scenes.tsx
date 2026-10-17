import React from 'react';
import {SceneHookB8, SceneSameChromB8, SceneTraceB8, SceneTwoJobsB8} from './s1';
import {SceneFertB8, SceneGenEnvB8, SceneMutationB8, SceneSiblingsB8} from './s2';
import {SceneMemoryB8, SceneWhyMattersB8} from './s3';
import {SceneAttemptB8, SceneAttemptTwoB8, SceneDecisionB8, SceneFeedbackOneB8, SceneFeedbackTwoB8, SceneNotesB8} from './s4';

// Playback order comes from the measured lesson (16 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookB8, 'two-jobs': SceneTwoJobsB8, 'trace-parent': SceneTraceB8, 'same-chromosome': SceneSameChromB8, fertilisation: SceneFertB8, siblings: SceneSiblingsB8,
	mutation: SceneMutationB8, 'genetic-or-environmental': SceneGenEnvB8, 'why-it-matters': SceneWhyMattersB8, memory: SceneMemoryB8,
	attempt: SceneAttemptB8, 'feedback-one': SceneFeedbackOneB8, 'attempt-two': SceneAttemptTwoB8, 'feedback-two': SceneFeedbackTwoB8, 'decision-rule': SceneDecisionB8, 'key-notes': SceneNotesB8,
};
