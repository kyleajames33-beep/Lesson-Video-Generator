import React from 'react';
import {SceneDistinction, SceneGermLine, SceneHook, SceneSomatic, SceneTwoKinds} from './s1';
import {SceneCoding, SceneIntrons, SceneLactase, SceneRegulatory, SceneWhichMatters} from './s2';
import {SceneBoth, SceneDecision, SceneMemory, SceneNotes} from './s3';
import {SceneAttempt, SceneAttemptTwo, SceneFeedbackOne, SceneFeedbackTwo} from './s4';

// Playback order comes from the measured lesson (18 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'two-kinds': SceneTwoKinds, somatic: SceneSomatic, 'germ-line': SceneGermLine, distinction: SceneDistinction,
	coding: SceneCoding, regulatory: SceneRegulatory, lactase: SceneLactase, introns: SceneIntrons, 'which-matters': SceneWhichMatters,
	'both-together': SceneBoth, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
