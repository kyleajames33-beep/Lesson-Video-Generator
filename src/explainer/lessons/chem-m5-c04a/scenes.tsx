import React from 'react';
import {SceneHook, SceneJoining, SceneSqueeze, SceneSyrEq} from './s1';
import {SceneGraphs, SceneNewEq, SceneResponse} from './s2';
import {SceneEqual, SceneFewer, SceneSolids} from './s3';
import {SceneArgon, SceneAid, SceneAttempt} from './s4';
import {SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'syringe-equilibrium': SceneSyrEq, 'squeeze-doubles': SceneSqueeze, 'joining-gains-more': SceneJoining,
	response: SceneResponse, 'new-equilibrium': SceneNewEq, graphs: SceneGraphs,
	'fewer-gas-particles': SceneFewer, 'equal-counts': SceneEqual, solids: SceneSolids,
	'squeeze-or-argon': SceneArgon, 'memory-aid': SceneAid, attempt: SceneAttempt,
	'feedback-one': SceneFeedbackOne, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
