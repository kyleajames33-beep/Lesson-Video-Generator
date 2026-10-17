import React from 'react';
import {SceneGametesB9, SceneHideAlleleB9, SceneHookB9, ScenePunnettB9} from './s1';
import {SceneChanceB9, SceneReadPedigreeB9, SceneTestCrossB9} from './s2';
import {SceneDominantB9, SceneGiveawaysB9, SceneRecessiveB9} from './s3';
import {SceneAttemptB9, SceneAttemptTwoB9, SceneDecisionB9, SceneFeedbackOneB9, SceneFeedbackTwoB9, SceneNotesB9} from './s4';

// Playback order comes from the measured lesson (16 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookB9, 'hide-allele': SceneHideAlleleB9, gametes: SceneGametesB9, punnett: ScenePunnettB9, 'chance-per-offspring': SceneChanceB9,
	'test-cross': SceneTestCrossB9, 'read-pedigree': SceneReadPedigreeB9, 'recessive-pedigree': SceneRecessiveB9, 'dominant-pedigree': SceneDominantB9,
	giveaways: SceneGiveawaysB9, attempt: SceneAttemptB9, 'feedback-one': SceneFeedbackOneB9, 'attempt-two': SceneAttemptTwoB9, 'feedback-two': SceneFeedbackTwoB9,
	'decision-rule': SceneDecisionB9, 'key-notes': SceneNotesB9,
};
