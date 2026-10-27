import React from 'react';
import {SceneAntibioticTargets, SceneAntiviralSteps, SceneHook, SceneNoTarget, SceneSelective} from './s1';
import {SceneAssess, SceneCombination, SceneMemory, SceneResistance, SceneStopNew, SceneUseWell} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'selective-toxicity': SceneSelective, 'antibiotic-targets': SceneAntibioticTargets, 'no-target-in-virus': SceneNoTarget,
	'antiviral-steps': SceneAntiviralSteps, 'stop-new-viruses': SceneStopNew, resistance: SceneResistance, combination: SceneCombination,
	'use-well': SceneUseWell, assess: SceneAssess, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
