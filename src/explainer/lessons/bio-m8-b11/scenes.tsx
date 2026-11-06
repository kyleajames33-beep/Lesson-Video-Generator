import React from 'react';
import {SceneCaseControl, SceneCohort, SceneDesigns, SceneFourSteps, SceneHook} from './s1';
import {SceneBenefit, SceneCause, SceneDose, SceneJudgeCohort, SceneLimits} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'two-designs': SceneDesigns, 'case-control': SceneCaseControl, 'four-steps': SceneFourSteps, cohort: SceneCohort,
	'dose-response': SceneDose, 'judge-cohort': SceneJudgeCohort, cause: SceneCause, 'benefit-chain': SceneBenefit, 'benefit-limits': SceneLimits,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
