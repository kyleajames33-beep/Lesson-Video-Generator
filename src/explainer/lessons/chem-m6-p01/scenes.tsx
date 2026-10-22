import React from 'react';
import {SceneCalibrate, SceneChart, SceneHook, ScenePigments, ScenePrepare, SceneWater} from './s1';
import {SceneCycle, SceneNoReturn, SceneRisk, SceneSame, SceneUse, SceneVRA} from './s2';
import {SceneAid, SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, pigments: ScenePigments, prepare: ScenePrepare, calibrate: SceneCalibrate, 'colour-chart': SceneChart, 'water-control': SceneWater,
	cycle: SceneCycle, 'same-sample': SceneSame, 'no-return': SceneNoReturn, 'use-and-limits': SceneUse, 'validity-reliability': SceneVRA, 'risk-assessment': SceneRisk,
	'memory-aid': SceneAid, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
