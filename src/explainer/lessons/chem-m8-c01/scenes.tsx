import React from 'react';
import {SceneChromate, SceneFirst, SceneHazard, SceneHook, SceneSilver, SceneValid} from './s1';
import {SceneAid, SceneStage1, SceneStage2, SceneStage3, SceneTitres} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'silver-meets-chloride': SceneSilver, 'second-precipitate': SceneChromate, 'why-chloride-first': SceneFirst, 'valid-endpoint': SceneValid,
	'hazard-data': SceneHazard, titres: SceneTitres, 'stage-1-silver': SceneStage1, 'stage-2-aliquot': SceneStage2, 'stage-3-grams': SceneStage3, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
