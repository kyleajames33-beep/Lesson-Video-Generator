import React from 'react';
import {SceneHookTypes, SceneOneValue, SceneTypeOne, SceneTypeTwo} from './s1';
import {SceneChangeRow, SceneEquilibriumFirst, SceneEquilibriumRow, SceneIceInitial} from './s2';
import {SceneAidA, SceneFeedbackOne, SceneFeedbackSlips} from './s3';
import {SceneDecisionA, SceneNotesA} from './s4';
// Reused C6 takes with character-identical captions (same word timings): the C6 scene components are used as built.
import {SceneFindK} from '../chem-m5-c06/s2';
import {SceneReverse} from '../chem-m5-c06/s4';
import {SceneAttempt, SceneFeedback2} from '../chem-m5-c06/s5';

export const SCENES: Record<string, React.FC> = {
	'hook-types': SceneHookTypes, 'type-one': SceneTypeOne, 'reverse-equation': SceneReverse, 'type-two': SceneTypeTwo, 'one-value': SceneOneValue,
	'ice-initial': SceneIceInitial, 'equilibrium-first': SceneEquilibriumFirst, 'change-row': SceneChangeRow, 'equilibrium-row': SceneEquilibriumRow,
	'find-k': SceneFindK, 'memory-aid': SceneAidA, attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'feedback-slips': SceneFeedbackSlips,
	'feedback-two': SceneFeedback2, 'decision-rule': SceneDecisionA, 'key-notes': SceneNotesA,
};
