import React from 'react';
import {SceneExtrap, SceneGraph, SceneHook, SceneMix, SceneSetup, SceneStart} from './s1';
import {SceneAid, SceneCalc, SceneErrors, SceneRisk, SceneVRA, SceneVariables} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, setup: SceneSetup, 'start-temperature': SceneStart, 'mix-log': SceneMix, graph: SceneGraph, extrapolate: SceneExtrap,
	calculate: SceneCalc, variables: SceneVariables, errors: SceneErrors, 'validity-reliability': SceneVRA, 'risk-assessment': SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
