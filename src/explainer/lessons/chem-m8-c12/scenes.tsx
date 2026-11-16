import React from 'react';
import {SceneAssemble, SceneCarbon, SceneCheck, SceneHook, SceneIR, SceneMass, SceneProton, SceneRival, SceneRoles} from './s1';
import {SceneAttempt1, SceneAttempt2, SceneCorroborate, SceneDecision, SceneFeedback1, SceneFeedback2, SceneMemory, SceneNotes} from './s2';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'technique-roles': SceneRoles, 'mass-formula': SceneMass, 'ir-groups': SceneIR, 'carbon-map': SceneCarbon, 'proton-map': SceneProton, assemble: SceneAssemble,
	'rival-isomer': SceneRival, 'check-every-clue': SceneCheck, corroborate: SceneCorroborate, 'memory-aid': SceneMemory, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1,
	'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-handoff': SceneDecision, 'key-notes': SceneNotes,
};
