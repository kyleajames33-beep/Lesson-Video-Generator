import React from 'react';
import {SceneCut, SceneEvidence, SceneHook, SceneLadder, SceneSickleUse} from './s1';
import {SceneCrash, SceneDrive, SceneMemory, SceneThree, SceneUnknowns} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (16 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'crispr-cut': SceneCut, 'sickle-cell-use': SceneSickleUse, 'evidence-and-catch': SceneEvidence, 'evidence-ladder': SceneLadder,
	'gene-drive': SceneDrive, 'population-crash': SceneCrash, unknowns: SceneUnknowns, 'three-questions': SceneThree, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
