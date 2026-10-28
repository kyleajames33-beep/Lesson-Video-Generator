import React from 'react';
import {SceneHook, SceneMarker, SceneMethod, SceneModel} from './s1';
import {SceneControls, SceneCurve, SceneTest, SceneTrace} from './s2';
import {SceneIndirect, SceneLimits, SceneRisk} from './s3';
import {SceneAttemptOne, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s4';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'the-model': SceneModel, 'the-marker': SceneMarker, method: SceneMethod, 'controls-repeats': SceneControls,
	'test-cups': SceneTest, 'trace-source': SceneTrace, 'epidemic-curve': SceneCurve, 'indirect-contact': SceneIndirect,
	'model-limits': SceneLimits, 'risk-assessment': SceneRisk, 'attempt-1': SceneAttemptOne, 'feedback-1': SceneFeedbackOne,
	'attempt-2': SceneAttemptTwo, 'feedback-2': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
