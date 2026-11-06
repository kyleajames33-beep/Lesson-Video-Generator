import React from 'react';
import {SceneAim, SceneAirtight, SceneControl, SceneHook, ScenePotometer, SceneUptake} from './s1';
import {SceneMeasures, SceneReading, SceneResults, SceneRisk, SceneStomata, SceneVRA} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'uptake-tracks-loss': SceneUptake, potometer: ScenePotometer, 'airtight-settled': SceneAirtight, 'aim-variables': SceneAim, 'control-repeats': SceneControl,
	'one-reading': SceneReading, results: SceneResults, 'what-it-measures': SceneMeasures, 'stomatal-count': SceneStomata, 'validity-reliability': SceneVRA, 'risk-assessment': SceneRisk,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
