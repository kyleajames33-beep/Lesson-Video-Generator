import React from 'react';
import {SceneAim, SceneBlankKnown, SceneBromine, SceneDichromate, SceneFizz, SceneHook} from './s1';
import {SceneAid, SceneBatchTwo, SceneClaims, SceneRecord, SceneRisk, SceneVRA} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'aim-plan': SceneAim, 'blank-known': SceneBlankKnown, 'bromine-recall': SceneBromine, 'fizz-test': SceneFizz, 'dichromate-demo': SceneDichromate,
	'batch-two-claims': SceneBatchTwo, record: SceneRecord, claims: SceneClaims, 'valid-reliable-accurate': SceneVRA, risk: SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-handoff': SceneHandoff, 'key-notes': SceneNotes,
};
