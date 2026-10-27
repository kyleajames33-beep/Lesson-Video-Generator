import React from 'react';
import {SceneForces, SceneHook, SceneIsomers, SceneNameAl, SceneNameOne, ScenePosition, SceneSoluble} from './s1';
import {SceneAid, SceneFehling, SceneOneH, SceneProduct, SceneThree, SceneTollens} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'carbonyl-position': ScenePosition, 'naming-aldehydes': SceneNameAl, 'naming-ketones': SceneNameOne, 'functional-group-isomers': SceneIsomers, 'forces-boiling': SceneForces,
	'aldehyde-h-solubility': SceneSoluble, 'one-hydrogen': SceneOneH, 'tollens-test': SceneTollens, 'fehlings-test': SceneFehling, 'three-tests-one-question': SceneThree, 'testing-the-product': SceneProduct,
	'memory-aid': SceneAid, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
