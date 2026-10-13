import React from 'react';
import {SceneHook, SceneInsemination, SceneHeat} from './s1';
import {SceneGain, SceneFertility} from './s2';
import {ScenePollination, ScenePollinationKnowledge, SceneSharedWeakness, SceneCloning} from './s3';
import {SceneEvaluate, SceneModelGain, SceneModelVariety, SceneModelVerdict} from './s4';
import {SceneAttempt, SceneFeedbackOne, SceneFeedbackTwo, SceneMemory, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, insemination: SceneInsemination, 'heat-timing': SceneHeat, 'gain-and-risk': SceneGain, 'fertility-cost': SceneFertility,
	pollination: ScenePollination, 'pollination-knowledge': ScenePollinationKnowledge, 'shared-weakness': SceneSharedWeakness, cloning: SceneCloning,
	evaluate: SceneEvaluate, 'model-judgement-gain': SceneModelGain, 'model-variety-cost': SceneModelVariety, 'model-verdict': SceneModelVerdict,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'feedback-two': SceneFeedbackTwo, memory: SceneMemory, 'key-notes': SceneNotes,
};
