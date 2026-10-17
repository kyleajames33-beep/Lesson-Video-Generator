import React from 'react';
import {SceneHook, SceneKaIsK, SceneStrongWeak, SceneWithWater} from './s1';
import {SceneKaCompare, SceneKaSize, SceneKb, SceneKsp, SceneStrongAcids} from './s2';
import {SceneAid, SceneAttempt, SceneDecision, SceneFeedbackExpression, SceneFeedbackStronger, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'strong-weak': SceneStrongWeak, 'ka-is-k': SceneKaIsK, 'with-water': SceneWithWater, 'ka-size': SceneKaSize,
	'ka-compare': SceneKaCompare, 'strong-acids': SceneStrongAcids, kb: SceneKb, 'ksp-preview': SceneKsp, 'memory-aid': SceneAid,
	attempt: SceneAttempt, 'feedback-expression': SceneFeedbackExpression, 'feedback-stronger': SceneFeedbackStronger, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
