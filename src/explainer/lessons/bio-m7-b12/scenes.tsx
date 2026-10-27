import React from 'react';
import {SceneHook, SceneLifeCycle, SceneRemoveWater, SceneThreeWays} from './s1';
import {ScenePesticides, SceneResistanceHarm, SceneSterile, SceneEngineered} from './s2';
import {SceneJudge, SceneMemory, SceneWolbachia} from './s3';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s4';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'three-ways': SceneThreeWays, 'life-cycle': SceneLifeCycle, 'remove-water': SceneRemoveWater,
	pesticides: ScenePesticides, 'resistance-harm': SceneResistanceHarm, 'sterile-males': SceneSterile, 'engineered-males': SceneEngineered,
	wolbachia: SceneWolbachia, judge: SceneJudge, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
