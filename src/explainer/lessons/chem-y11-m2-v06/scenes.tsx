import React from 'react';
import {SceneConservation, SceneHook, SceneMasses, SceneParticles, ScenePrediction} from './s1';
import {SceneBike, SceneCV, SceneMethod, ScenePeak, SceneScaling, SceneTwoTwos} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneConclusion, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, prediction: ScenePrediction, 'particles-to-moles': SceneParticles, masses: SceneMasses, conservation: SceneConservation,
	'bike-analogy': SceneBike, 'two-twos': SceneTwoTwos, scaling: SceneScaling, 'continuous-variation': SceneCV, method: SceneMethod, peak: ScenePeak,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'conclusion-handoff': SceneConclusion, 'key-notes': SceneNotes,
};
