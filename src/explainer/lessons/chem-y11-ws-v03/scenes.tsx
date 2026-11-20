import React from 'react';
import {SceneAccuracy, SceneEvaluate, SceneHook, SceneSafe} from './s1';
import {SceneAccPrec, SceneAcknowledge, SceneExtract, SceneJudge, ScenePredict, SceneSources} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'safe-practice': SceneSafe, 'evaluate-safety': SceneEvaluate, 'ensure-accuracy': SceneAccuracy, 'accurate-precise': SceneAccPrec,
	prediction: ScenePredict, 'judge-accuracy': SceneJudge, 'reliable-sources': SceneSources, extract: SceneExtract, acknowledge: SceneAcknowledge,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'conclusion-handoff': SceneHandoff, 'key-notes': SceneNotes,
};
