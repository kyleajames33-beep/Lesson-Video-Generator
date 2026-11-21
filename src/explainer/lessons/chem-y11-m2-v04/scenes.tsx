import React from 'react';
import {SceneCollect, SceneElementCalc, SceneElementSetup, SceneGasCounts, SceneHook} from './s1';
import {SceneCompoundCalc, SceneCompoundLosses, SceneCompoundSetup, SceneLossDirection, ScenePrediction, SceneReweigh, SceneWeakReading} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneCompare, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'gas-counts': SceneGasCounts, 'element-setup': SceneElementSetup, 'collect-hydrogen': SceneCollect, 'element-calc': SceneElementCalc,
	prediction: ScenePrediction, 'loss-direction': SceneLossDirection, 'weak-reading': SceneWeakReading, 'compound-setup': SceneCompoundSetup, 'reweigh-volume': SceneReweigh,
	'compound-calc': SceneCompoundCalc, 'compound-losses': SceneCompoundLosses, compare: SceneCompare,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
