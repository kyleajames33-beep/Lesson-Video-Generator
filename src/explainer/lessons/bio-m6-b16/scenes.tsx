import React from 'react';
import {SceneHook, SceneNuclear, SceneOneWord, SceneWho} from './s1';
import {SceneGene, SceneHealth, SceneJudgeGene, SceneMemory, SceneReliability} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (15 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'one-word-two-jobs': SceneOneWord, 'nuclear-transfer': SceneNuclear, 'who-she-matches': SceneWho, reliability: SceneReliability,
	'health-and-purpose': SceneHealth, 'gene-cloning': SceneGene, 'judging-gene-cloning': SceneJudgeGene, memory: SceneMemory, attempt: SceneAttempt,
	'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
