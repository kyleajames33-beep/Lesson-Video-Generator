import React from 'react';
import {SceneHook, SceneLifestyle, SceneMetformin, SceneTwoJobs, SceneTypes} from './s1';
import {SceneDirect, SceneFuture, SceneHbA1c, SceneJudge, SceneStepUp} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'type-one-two': SceneTypes, 'two-jobs': SceneTwoJobs, lifestyle: SceneLifestyle, metformin: SceneMetformin,
	hba1c: SceneHbA1c, 'step-up': SceneStepUp, 'direct-trial': SceneDirect, 'judge-evidence': SceneJudge, 'future-direction': SceneFuture,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
