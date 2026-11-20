import React from 'react';
import {SceneControl, SceneHook, SceneReliable, SceneVariables, SceneWhichBalance} from './s1';
import {SceneEquipment, SceneEthics, ScenePlanLine, SceneRisks, SceneTrial} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'variables-validity': SceneVariables, 'experimental-control': SceneControl, 'reliable-data': SceneReliable, 'which-balance': SceneWhichBalance,
	equipment: SceneEquipment, risks: SceneRisks, ethics: SceneEthics, 'trial-evidence': SceneTrial, 'plan-line': ScenePlanLine,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'conclusion-handoff': SceneHandoff, 'key-notes': SceneNotes,
};
