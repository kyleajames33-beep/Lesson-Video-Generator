import React from 'react';
import {SceneCalorimeter, SceneHook, ScenePerMole, SceneSame, SceneWhyWarm} from './s1';
import {SceneWe1Enthalpy, SceneWe1Givens, SceneWe1Heat, SceneWe1Moles} from './s2';
import {SceneAid, SceneWe2Count, SceneWe2Enthalpy} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'why-warm': SceneWhyWarm, 'per-mole': ScenePerMole, 'same-reaction': SceneSame, calorimeter: SceneCalorimeter,
	'we1-givens': SceneWe1Givens, 'we1-heat': SceneWe1Heat, 'we1-moles': SceneWe1Moles, 'we1-enthalpy': SceneWe1Enthalpy,
	'we2-count': SceneWe2Count, 'we2-enthalpy': SceneWe2Enthalpy, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
