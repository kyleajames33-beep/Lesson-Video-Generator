import React from 'react';
import {SceneHook, SceneQFraction} from './s1';
import {SceneCalcQ, SceneCompare, SceneRateLink} from './s2';
import {SceneChases, SceneOtherSide, SceneOtherAnswer} from './s3';
import {SceneDisturbance, SceneEquals, SceneKUnchanged} from './s4';
import {SceneAttempt, SceneDecision, SceneFeedback, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q-fraction': SceneQFraction, 'calculate-q': SceneCalcQ, 'compare-q-k': SceneCompare, 'rate-link': SceneRateLink,
	'q-chases-k': SceneChases, 'other-side': SceneOtherSide, 'other-side-answer': SceneOtherAnswer, 'q-equals-k': SceneEquals,
	disturbance: SceneDisturbance, 'k-unchanged': SceneKUnchanged, attempt: SceneAttempt, feedback: SceneFeedback,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
