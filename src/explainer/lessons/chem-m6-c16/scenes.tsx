import React from 'react';
import {SceneCal, SceneHook, SceneIndustry, ScenePhAmount, SceneProbe} from './s1';
import {SceneAid, SceneKnowledge, SceneWhich, SceneWine} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'ph-or-amount': ScenePhAmount, 'probe-measures': SceneProbe, calibration: SceneCal, 'industry-digital': SceneIndustry, 'which-titration': SceneWhich,
	'red-wine': SceneWine, 'aboriginal-knowledge': SceneKnowledge, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
