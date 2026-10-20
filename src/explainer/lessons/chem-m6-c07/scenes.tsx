import React from 'react';
import {SceneHook, ScenePhBack, ScenePhMeaning, SceneWe1} from './s1';
import {SceneBasePoh, SceneDilution, SceneKw, SceneKwTemp, SceneWe2} from './s2';
import {SceneAid, SceneMixing, SceneWe3Excess, SceneWe3Ph} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'ph-meaning': ScenePhMeaning, 'we1-strong-acid': SceneWe1, 'ph-backwards': ScenePhBack, kw: SceneKw, 'kw-temperature': SceneKwTemp,
	'base-poh': SceneBasePoh, 'we2-strong-base': SceneWe2, dilution: SceneDilution, 'mixing-method': SceneMixing, 'we3-excess': SceneWe3Excess, 'we3-ph': SceneWe3Ph,
	'memory-aid': SceneAid, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
