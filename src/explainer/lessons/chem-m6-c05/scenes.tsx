import React from 'react';
import {SceneHook, SceneInside, SceneStrongWeak, SceneWhyStops} from './s1';
import {SceneArrows, SceneConcentration, SceneStrongList, SceneWeakWins} from './s2';
import {SceneAid, SceneBases, SceneSolubility} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'inside-beakers': SceneInside, 'strong-weak': SceneStrongWeak, 'why-weak-stops': SceneWhyStops,
	arrows: SceneArrows, 'strong-list': SceneStrongList, concentration: SceneConcentration, 'weak-can-win': SceneWeakWins,
	bases: SceneBases, solubility: SceneSolubility, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
