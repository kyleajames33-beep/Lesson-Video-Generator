import React from 'react';
import {SceneFourIons, SceneHook, SceneNagsag, ScenePrecipitate, SceneRulesOrigin} from './s1';
import {SceneAgclMolecular, SceneFullIonic, SceneLeadIodide, SceneNetIonic, SceneSwapMethod} from './s2';
import {SceneAid, SceneBariumSulfate, SceneFiltrate, SceneNoPrecipitate} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'four-ions': SceneFourIons, 'precipitate-spectators': ScenePrecipitate, 'rules-origin': SceneRulesOrigin, nagsag: SceneNagsag,
	'swap-method': SceneSwapMethod, 'agcl-molecular': SceneAgclMolecular, 'full-ionic': SceneFullIonic, 'net-ionic': SceneNetIonic, 'pbi2-formula': SceneLeadIodide,
	'baso4-meal': SceneBariumSulfate, 'no-precipitate': SceneNoPrecipitate, filtrate: SceneFiltrate, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
