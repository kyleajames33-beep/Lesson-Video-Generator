import React from 'react';
import {SceneChangeRow, SceneHook, SceneIceInitial} from './s1';
import {SceneEquilibriumRow, SceneFindK, SceneKGiven} from './s2';
import {SceneSolve, SceneSubstitute, SceneUnknownX} from './s3';
import {SceneAid, SceneCheck, SceneReverse} from './s4';
import {SceneAttempt, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'ice-initial': SceneIceInitial, 'change-row': SceneChangeRow, 'equilibrium-row': SceneEquilibriumRow, 'find-k': SceneFindK,
	'k-given': SceneKGiven, 'unknown-x': SceneUnknownX, substitute: SceneSubstitute, solve: SceneSolve, check: SceneCheck,
	'memory-aid': SceneAid, 'reverse-equation': SceneReverse, attempt: SceneAttempt, 'feedback-one': SceneFeedback1, 'feedback-two': SceneFeedback2,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
