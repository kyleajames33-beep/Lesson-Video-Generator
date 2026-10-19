import React from 'react';
import {SceneHook, SceneMutagenMutation, SceneRepairOrCopy, SceneRisk} from './s1';
import {SceneChemicals, SceneIonising, SceneNatural, SceneUV} from './s2';
import {SceneAnyMutagen, SceneMemory} from './s3';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s4';

// Playback order comes from the measured lesson (16 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'mutagen-mutation': SceneMutagenMutation, 'repair-or-copy': SceneRepairOrCopy, risk: SceneRisk,
	uv: SceneUV, ionising: SceneIonising, chemicals: SceneChemicals, natural: SceneNatural, 'any-mutagen': SceneAnyMutagen, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
