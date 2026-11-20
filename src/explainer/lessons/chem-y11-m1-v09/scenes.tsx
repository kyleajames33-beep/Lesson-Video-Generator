import React from 'react';
import {SceneBalance, SceneFractions, SceneHook, SceneHundred, SceneWeighted} from './s1';
import {SceneBoron, ScenePrediction, SceneSenseCheck, SceneSiliconSetup, SceneSiliconSolve} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'hundred-atoms': SceneHundred, 'weighted-average': SceneWeighted, fractions: SceneFractions, balance: SceneBalance,
	prediction: ScenePrediction, boron: SceneBoron, 'sense-check': SceneSenseCheck, 'silicon-setup': SceneSiliconSetup, 'silicon-solve': SceneSiliconSolve,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
