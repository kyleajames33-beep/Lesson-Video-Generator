import React from 'react';
import {SceneArrhenius, SceneDavy, SceneHook, SceneLavoisier, SceneModels} from './s1';
import {SceneArrNH3, SceneBL, SceneFailures, SceneHClWater, SceneNH3Water} from './s2';
import {SceneAid, SceneFollow, SceneGasCarb, SceneLimit} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'models-change': SceneModels, lavoisier: SceneLavoisier, davy: SceneDavy, arrhenius: SceneArrhenius,
	'arrhenius-ammonia': SceneArrNH3, 'more-failures': SceneFailures, 'bronsted-lowry': SceneBL, 'hcl-water': SceneHClWater, 'ammonia-water': SceneNH3Water,
	'gas-carbonate': SceneGasCarb, 'follow-proton': SceneFollow, 'bl-limit': SceneLimit, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
