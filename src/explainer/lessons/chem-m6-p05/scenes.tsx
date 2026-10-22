import React from 'react';
import {SceneChoose, SceneDesign, SceneHook, SceneMeasure, ScenePrepare, SceneResults, SceneWhy} from './s1';
import {SceneAid, SceneCapacity, SceneDilution, SceneRisk, SceneVRA, SceneVariables} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'choose-pair': SceneChoose, prepare: ScenePrepare, 'measure-start': SceneMeasure, 'test-design': SceneDesign, results: SceneResults, 'why-small': SceneWhy,
	dilution: SceneDilution, capacity: SceneCapacity, variables: SceneVariables, 'validity-reliability': SceneVRA, 'risk-assessment': SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
