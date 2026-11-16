import React from 'react';
import {SceneCarriers, SceneHook, SceneJobs, ScenePKU, ScenePhenotype} from './s1';
import {SceneEthics, SceneGeneTherapy, SceneGermline, SceneLimits, ScenePGT} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'three-jobs': SceneJobs, pku: ScenePKU, 'phenotype-not-genotype': ScenePhenotype, carriers: SceneCarriers,
	'counselling-pgt': ScenePGT, 'gene-therapy': SceneGeneTherapy, germline: SceneGermline, limits: SceneLimits, ethics: SceneEthics,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
