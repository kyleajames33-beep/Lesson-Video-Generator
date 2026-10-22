import React from 'react';
import {SceneDilMethod, SceneDilResults, SceneGap, SceneHook, SceneMatched, SceneResults, SceneRoutine} from './s1';
import {SceneBases, SceneRisk, SceneStrong, SceneVRA, SceneVariables, SceneWeak} from './s2';
import {SceneAid, SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'matched-concentration': SceneMatched, 'routine-recall': SceneRoutine, results: SceneResults, 'the-gap': SceneGap, 'dilution-method': SceneDilMethod,
	'dilution-results': SceneDilResults, 'strong-moves-one': SceneStrong, 'weak-moves-half': SceneWeak, 'bases-and-check': SceneBases, variables: SceneVariables,
	'validity-reliability': SceneVRA, 'risk-assessment': SceneRisk, 'memory-aid': SceneAid, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2,
	'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
