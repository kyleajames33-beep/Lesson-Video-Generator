import React from 'react';
import {SceneBromo, SceneHook, SceneIntegration, SceneNPlus, SceneRules, SceneShift, SceneSignals, SceneSplit, SceneTrap} from './s1';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneEster, SceneFeedback1, SceneFeedback2, SceneMemory, SceneNotes} from './s2';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'same-rules': SceneRules, signals: SceneSignals, shift: SceneShift, integration: SceneIntegration, 'why-split': SceneSplit, 'n-plus-one': SceneNPlus,
	bromoethane: SceneBromo, 'quartet-trap': SceneTrap, 'ethyl-ethanoate': SceneEster, 'memory-aid': SceneMemory, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1,
	'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-handoff': SceneDecision, 'key-notes': SceneNotes,
};
