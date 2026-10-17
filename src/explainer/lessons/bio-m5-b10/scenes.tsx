import React from 'react';
import {SceneHaemophiliaB10, SceneHookB10, SceneMorganB10, SceneSexChromB10} from './s1';
import {SceneCoDomB10, SceneHetFirstB10, SceneIncompleteB10, SceneXPedigreeB10} from './s2';
import {SceneAboB10, SceneAboSurpriseB10, SceneMemoryB10} from './s3';
import {SceneAttemptB10, SceneAttemptTwoB10, SceneDecisionB10, SceneFeedbackOneB10, SceneFeedbackTwoB10, SceneNotesB10} from './s4';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookB10, 'sex-chromosomes': SceneSexChromB10, 'morgan-cross': SceneMorganB10, haemophilia: SceneHaemophiliaB10, 'x-linked-pedigree': SceneXPedigreeB10,
	'heterozygote-first': SceneHetFirstB10, 'incomplete-dominance': SceneIncompleteB10, 'co-dominance': SceneCoDomB10, abo: SceneAboB10, 'abo-surprise': SceneAboSurpriseB10,
	memory: SceneMemoryB10, attempt: SceneAttemptB10, 'feedback-one': SceneFeedbackOneB10, 'attempt-two': SceneAttemptTwoB10, 'feedback-two': SceneFeedbackTwoB10,
	'decision-rule': SceneDecisionB10, 'key-notes': SceneNotesB10,
};
