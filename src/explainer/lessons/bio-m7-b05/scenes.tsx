import React from 'react';
import {SceneBarriers, SceneFirebreak, SceneHook, SceneMould, SceneNoCells, SceneSwitched} from './s1';
import {SceneControl, SceneEvidence, SceneLimits, SceneMemory, SceneTiming} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'water-mould': SceneMould, 'no-moving-cells': SceneNoCells, barriers: SceneBarriers, 'switched-on': SceneSwitched,
	firebreak: SceneFirebreak, evidence: SceneEvidence, timing: SceneTiming, limits: SceneLimits, control: SceneControl, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
