import React from 'react';
import {SceneCal, SceneHook, SceneMeter, SceneRange, SceneResults, SceneRoutine} from './s1';
import {SceneIndicator, SceneIons, SceneRisk, SceneVRA, SceneVariables, SceneWater} from './s2';
import {SceneAid, SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, range: SceneRange, meter: SceneMeter, calibration: SceneCal, routine: SceneRoutine, results: SceneResults, ions: SceneIons, water: SceneWater,
	'meter-vs-indicator': SceneIndicator, variables: SceneVariables, 'validity-reliability': SceneVRA, 'risk-assessment': SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
