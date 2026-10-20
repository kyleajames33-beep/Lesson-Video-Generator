import React from 'react';
import {SceneBackwards, SceneConjugate, SceneHook, SceneStrength, SceneWorked} from './s1';
import {SceneAid, SceneAmphiprotic, SceneChain, SceneSalt, SceneWater} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'run-backwards': SceneBackwards, 'conjugate-pairs': SceneConjugate, 'worked-example': SceneWorked, 'conjugate-strength': SceneStrength,
	amphiprotic: SceneAmphiprotic, 'proton-chain': SceneChain, 'salt-equations': SceneSalt, 'water-role': SceneWater, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
