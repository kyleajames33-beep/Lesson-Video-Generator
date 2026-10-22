import React from 'react';
import {SceneAim, SceneDilution, SceneHook, SceneSampling, SceneWhy} from './s1';
import {SceneControls, ScenePlate, SceneReading, SceneScale, SceneShows} from './s2';
import {SceneRisk, SceneVRA} from './s3';
import {SceneAttemptOne, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s4';

// Playback order comes from the measured lesson (18 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'why-test': SceneWhy, 'aim-variables': SceneAim, 'sampling-aseptic': SceneSampling, 'serial-dilution': SceneDilution,
	'plate-incubate': ScenePlate, controls: SceneControls, 'reading-plates': SceneReading, 'scale-back': SceneScale, 'what-it-shows': SceneShows,
	'validity-reliability': SceneVRA, 'risk-assessment': SceneRisk, 'attempt-1': SceneAttemptOne, 'feedback-1': SceneFeedbackOne, 'attempt-2': SceneAttemptTwo,
	'feedback-2': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
