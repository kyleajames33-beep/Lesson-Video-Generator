import React from 'react';
import {SceneCottonBenefit, SceneCottonRisks, SceneCottonVerdict, SceneHook, SceneNeeds} from './s1';
import {SceneAnimalAdds, SceneChecking, SceneHornless, SceneMemory, SceneQuestions} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (16 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'judgement-needs': SceneNeeds, 'cotton-benefit': SceneCottonBenefit, 'cotton-risks': SceneCottonRisks, 'cotton-verdict': SceneCottonVerdict,
	'hornless-cattle': SceneHornless, 'checking-evidence': SceneChecking, 'animal-adds': SceneAnimalAdds, 'three-questions': SceneQuestions, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
