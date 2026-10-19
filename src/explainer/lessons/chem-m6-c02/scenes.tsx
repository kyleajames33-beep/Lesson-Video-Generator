import React from 'react';
import {SceneBases, SceneBinary, SceneHook, SceneOxo, SceneProps} from './s1';
import {SceneAmmonia, SceneCarbonate, SceneHydroxide, SceneMetal, SceneSalt} from './s2';
import {SceneAbove, SceneAid, SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneGas, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'binary-acids': SceneBinary, oxoacids: SceneOxo, 'naming-bases': SceneBases, properties: SceneProps,
	'salt-rule': SceneSalt, 'acid-hydroxide': SceneHydroxide, 'acid-ammonia': SceneAmmonia, 'acid-carbonate': SceneCarbonate, 'acid-metal': SceneMetal,
	'above-hydrogen': SceneAbove, 'gas-tests': SceneGas, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
