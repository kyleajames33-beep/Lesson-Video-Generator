import React from 'react';
import {SceneBuffer, SceneEqPoint, SceneHalf, SceneHook, SceneStart} from './s1';
import {SceneAid, SceneCondStrong, SceneCondWeak, SceneEqPh, SceneSAWB} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'axes-start-ph': SceneStart, 'buffer-region': SceneBuffer, 'half-equivalence': SceneHalf, 'equivalence-point': SceneEqPoint, 'equivalence-ph-jump': SceneEqPh,
	'strong-acid-weak-base': SceneSAWB, 'conductivity-strong': SceneCondStrong, 'conductivity-weak': SceneCondWeak, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
