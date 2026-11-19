import React from 'react';
import {SceneAnswer, SceneFiltWhy, SceneHook, ScenePrediction, SceneSetup, SceneWash} from './s1';
import {SceneCryst, SceneOrder, ScenePurer, SceneSurprise, SceneTerms} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'filtration-why': SceneFiltWhy, 'filtration-setup': SceneSetup, prediction: ScenePrediction, 'prediction-answer': SceneAnswer, 'wash-dry': SceneWash,
	'solubility-saturation': SceneTerms, crystallisation: SceneCryst, 'surprise-solubility': SceneSurprise, 'purer-crystals': ScenePurer, 'order-and-rule': SceneOrder,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
