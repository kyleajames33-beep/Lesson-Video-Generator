import React from 'react';
import {SceneAcid, SceneAfterAcid, SceneBase, SceneBufferPh, SceneHolds, SceneHook} from './s1';
import {SceneAid, SceneBlood, SceneBloodWorks, SceneCapacity, SceneRatio} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'what-it-holds': SceneHolds, 'acid-attack': SceneAcid, 'base-attack': SceneBase, 'buffer-ph': SceneBufferPh, 'we-after-acid': SceneAfterAcid,
	'ratio-sets-ph': SceneRatio, capacity: SceneCapacity, 'blood-buffer': SceneBlood, 'blood-works': SceneBloodWorks, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
