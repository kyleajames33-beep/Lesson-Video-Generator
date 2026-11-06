import React from 'react';
import {SceneChain, SceneHook, SceneIron, SceneVitamins} from './s1';
import {SceneBeta, SceneInsulin, SceneIodine, SceneRisk} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'one-chain': SceneChain, iron: SceneIron, 'vitamins-c-d': SceneVitamins, iodine: SceneIodine,
	'insulin-resistance': SceneInsulin, 'beta-cells': SceneBeta, 'risk-factor': SceneRisk,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
