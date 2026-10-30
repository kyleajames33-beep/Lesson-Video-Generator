import React from 'react';
import {SceneAim, SceneControl, SceneHook, SceneLawn, SceneZone} from './s1';
import {SceneDepends, SceneIncubate, SceneMeasure, ScenePatient, SceneResults} from './s2';
import {SceneRisk, SceneVRA} from './s3';
import {SceneAttemptOne, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s4';

// Playback order comes from the measured lesson (18 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'what-a-zone-is': SceneZone, 'aim-variables': SceneAim, 'control-repeats': SceneControl, 'lawn-discs': SceneLawn,
	incubate: SceneIncubate, measure: SceneMeasure, results: SceneResults, 'depends-on': SceneDepends, 'plate-not-patient': ScenePatient,
	'validity-reliability': SceneVRA, 'risk-assessment': SceneRisk, 'attempt-1': SceneAttemptOne, 'feedback-1': SceneFeedbackOne, 'attempt-2': SceneAttemptTwo,
	'feedback-2': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
