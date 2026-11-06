import React from 'react';
import {SceneCase, SceneHook, SceneIncidence, ScenePrevalence, SceneThree} from './s1';
import {SceneCollect, SceneCrude, SceneDiffer, SceneMortality} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'three-measures': SceneThree, 'case-population-time': SceneCase, 'worked-incidence': SceneIncidence, 'worked-prevalence': ScenePrevalence,
	'worked-mortality': SceneMortality, 'why-they-differ': SceneDiffer, 'crude-age-standardised': SceneCrude, 'collect-represent': SceneCollect,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
