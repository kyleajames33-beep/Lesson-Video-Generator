import React from 'react';
import {SceneAlkene, SceneFairTest, SceneHook, SceneMeaning, SceneTrap} from './s1';
import {SceneAid, SceneLight, SceneLimits, SceneRisk, SceneValidity} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'what-it-means': SceneMeaning, 'fair-test': SceneFairTest, 'alkene-result': SceneAlkene, 'alkane-trap': SceneTrap,
	'light-demo': SceneLight, limits: SceneLimits, 'validity-reliability': SceneValidity, 'risk-assessment': SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
