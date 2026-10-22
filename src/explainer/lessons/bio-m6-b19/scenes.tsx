import React from 'react';
import {SceneFarm, SceneHook, SceneMedicine, SceneThreeTests} from './s1';
import {SceneFactory, SceneGrowth, SceneMemory, SceneRanking, SceneTankField} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (15 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'three-tests': SceneThreeTests, farm: SceneFarm, medicine: SceneMedicine, 'growth-hormone': SceneGrowth, factory: SceneFactory,
	'tank-or-field': SceneTankField, ranking: SceneRanking, memory: SceneMemory, attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne,
	'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
