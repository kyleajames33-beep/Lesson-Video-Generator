import React from 'react';
import {SceneAliquot, SceneHook, SceneMakeStandard, SceneMakeUp, ScenePlan} from './s1';
import {SceneBuretteReading, SceneBuretteSetup, SceneCalculation, SceneResults, SceneTitrate} from './s2';
import {SceneBenchB, SceneControlled, SceneRisk, SceneVRA} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, plan: ScenePlan, 'make-standard': SceneMakeStandard, 'make-up-concentration': SceneMakeUp, aliquot: SceneAliquot,
	'burette-setup': SceneBuretteSetup, 'burette-reading': SceneBuretteReading, titrate: SceneTitrate, results: SceneResults, calculation: SceneCalculation,
	'bench-b-error': SceneBenchB, controlled: SceneControlled, 'validity-reliability': SceneVRA, 'risk-assessment': SceneRisk,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
