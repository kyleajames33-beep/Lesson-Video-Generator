import React from 'react';
import {SceneAlleleFreqB11, SceneFrequencyB11, SceneHiddenB11, SceneHookB11} from './s1';
import {SceneAssocB11, SceneCountSnpB11, SceneOneMarkerB11, SceneSnpB11, SceneSnpMarkersB11} from './s2';
import {SceneLimitsB11, SceneMemoryB11} from './s3';
import {SceneAttemptB11, SceneAttemptTwoB11, SceneDecisionB11, SceneFeedbackOneB11, SceneFeedbackTwoB11, SceneNotesB11} from './s4';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookB11, frequency: SceneFrequencyB11, 'allele-frequency': SceneAlleleFreqB11, 'hidden-alleles': SceneHiddenB11,
	'what-is-a-snp': SceneSnpB11, 'snp-markers': SceneSnpMarkersB11, 'counting-snps': SceneCountSnpB11, association: SceneAssocB11, 'one-marker': SceneOneMarkerB11,
	'sample-limits': SceneLimitsB11, memory: SceneMemoryB11, attempt: SceneAttemptB11, 'feedback-one': SceneFeedbackOneB11, 'attempt-two': SceneAttemptTwoB11,
	'feedback-two': SceneFeedbackTwoB11, 'decision-rule': SceneDecisionB11, 'key-notes': SceneNotesB11,
};
