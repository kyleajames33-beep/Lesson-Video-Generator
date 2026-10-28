import React from 'react';
import {SceneHook, SceneNamed, SceneIncPrev, ScenePastRates} from './s1';
import {SceneYear, SceneSerotypes, SceneMobility, SceneFour} from './s2';
import {SceneEvidence, SceneLimited, SceneMemory} from './s3';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s4';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'named-disease': SceneNamed, 'incidence-prevalence': SceneIncPrev, 'past-infection-rates': ScenePastRates,
	'dengue-year': SceneYear, serotypes: SceneSerotypes, mobility: SceneMobility, 'four-conditions': SceneFour,
	'wolbachia-evidence': SceneEvidence, 'still-limited': SceneLimited, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
