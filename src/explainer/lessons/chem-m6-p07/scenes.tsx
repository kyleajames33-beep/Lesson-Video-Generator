import React from 'react';
import {SceneDilute, SceneHook, ScenePhFirst, ScenePlan, SceneTwoQ} from './s1';
import {SceneCalc, SceneReport, SceneResults, SceneTitrate, SceneTwoResults} from './s2';
import {SceneLimits, SceneRisk, SceneVRA} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'two-questions': SceneTwoQ, 'ph-first': ScenePhFirst, 'plan-from-label': ScenePlan, dilute: SceneDilute,
	titrate: SceneTitrate, results: SceneResults, calculation: SceneCalc, 'report-label': SceneReport, 'two-results': SceneTwoResults,
	limitations: SceneLimits, 'validity-reliability': SceneVRA, 'risk-assessment': SceneRisk,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
