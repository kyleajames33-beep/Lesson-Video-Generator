import React from 'react';
import {SceneHook, SceneRates, SceneRatio} from './s1';
import {SceneAny, SceneCoef} from './s2';
import {SceneLeftOut, SceneScratch} from './s3';
import {SceneAid, SceneSizeK} from './s4';
import {SceneAttempt, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'rates-equal': SceneRates, 'ratio-name': SceneRatio, 'coefficient-power': SceneCoef, 'any-equation': SceneAny,
	'from-scratch': SceneScratch, 'left-out': SceneLeftOut, 'size-of-k': SceneSizeK, 'memory-aid': SceneAid,
	attempt: SceneAttempt, 'feedback-one': SceneFeedback1, 'feedback-two': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
