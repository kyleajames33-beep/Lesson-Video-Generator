import React from 'react';
import {SceneHook, SceneMembers, SceneMethod, SceneTest, SceneVariables} from './s1';
import {SceneAgree, SceneBonding, SceneResults, SceneRuns, SceneSecondary} from './s2';
import {SceneAid, SceneLimits, SceneRisk, SceneValidity} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'choose-members': SceneMembers, 'choose-test': SceneTest, method: SceneMethod, variables: SceneVariables,
	'logged-runs': SceneRuns, results: SceneResults, bonding: SceneBonding, 'secondary-data': SceneSecondary, 'methods-agree': SceneAgree,
	'validity-reliability': SceneValidity, limits: SceneLimits, 'risk-assessment': SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
