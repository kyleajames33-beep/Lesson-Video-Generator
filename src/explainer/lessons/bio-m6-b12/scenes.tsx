import React from 'react';
import {SceneBanana, SceneBaseline, SceneField, SceneHook, SceneLevels} from './s1';
import {SceneMemory, SceneRescue, SceneRhinoLevels, SceneYield} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (15 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'three-levels': SceneLevels, baseline: SceneBaseline, 'banana-genetic': SceneBanana, 'field-species-ecosystem': SceneField,
	'rhino-rescue': SceneRescue, 'rhino-levels': SceneRhinoLevels, 'yield-not-a-level': SceneYield, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
