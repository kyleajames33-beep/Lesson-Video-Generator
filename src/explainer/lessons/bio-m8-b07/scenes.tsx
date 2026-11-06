import React from 'react';
import {SceneCOPD, SceneHook, SceneLung, SceneSpine, SceneVessels} from './s1';
import {SceneDose, SceneLatency, SceneRisk, SceneVerdict} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'one-spine': SceneSpine, 'lung-cancer': SceneLung, copd: SceneCOPD, 'blood-vessels': SceneVessels,
	dose: SceneDose, 'latency-asbestos': SceneLatency, 'risk-not-certainty': SceneRisk, 'not-a-verdict': SceneVerdict,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
