import React from 'react';
import {SceneDrift, SceneGenePools, SceneHook} from './s1';
import {SceneBottleneck, SceneGeneFlow, SceneMemory, SceneMutation, SceneWhich} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (14 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'gene-pools': SceneGenePools, drift: SceneDrift, 'bottleneck-founder': SceneBottleneck, mutation: SceneMutation, 'gene-flow': SceneGeneFlow,
	'which-matters': SceneWhich, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
