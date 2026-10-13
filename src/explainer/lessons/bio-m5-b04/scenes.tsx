import React from 'react';
import {SceneHook, SceneNucleotides, ScenePairing} from './s1';
import {SceneAntiparallel, SceneTemplate, SceneCopySteps} from './s2';
import {SceneSemi, SceneWorkedMolecule, SceneWorkedBottom, SceneWorkedTop, SceneWorkedDaughters} from './s3';
import {SceneErrorsRepair} from './s4';
import {SceneErrorsEffects, SceneAttempt} from './s4b';
import {SceneFeedbackOne, SceneFeedbackTwo, SceneMemory, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, nucleotides: SceneNucleotides, pairing: ScenePairing,
	antiparallel: SceneAntiparallel, template: SceneTemplate, 'copy-steps': SceneCopySteps,
	'semi-conservative': SceneSemi, 'worked-molecule': SceneWorkedMolecule, 'worked-bottom': SceneWorkedBottom, 'worked-top': SceneWorkedTop, 'worked-daughters': SceneWorkedDaughters,
	'errors-repair': SceneErrorsRepair, 'errors-effects': SceneErrorsEffects, attempt: SceneAttempt,
	'feedback-one': SceneFeedbackOne, 'feedback-two': SceneFeedbackTwo, memory: SceneMemory, 'key-notes': SceneNotes,
};
