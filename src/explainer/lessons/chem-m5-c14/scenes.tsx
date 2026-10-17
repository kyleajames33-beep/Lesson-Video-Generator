import React from 'react';
import {SceneHook, SceneKspExpression, SceneMolarSolubility, ScenePowers, SceneSaturated} from './s1';
import {SceneBaIce, SceneBaSolve, SceneCaSetup, SceneCaSolve, SceneTrap} from './s2';
import {SceneAid, SceneCompare, SceneReverseE, SceneReverseK} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, saturated: SceneSaturated, 'ksp-expression': SceneKspExpression, powers: ScenePowers, 'molar-solubility': SceneMolarSolubility,
	'baso4-ice': SceneBaIce, 'baso4-solve': SceneBaSolve, 'caf2-setup': SceneCaSetup, 'caf2-solve': SceneCaSolve, 'trap-2s': SceneTrap,
	'compare-ksp': SceneCompare, 'reverse-erow': SceneReverseE, 'reverse-ksp': SceneReverseK, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
