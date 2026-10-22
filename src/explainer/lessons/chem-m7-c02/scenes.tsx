import React from 'react';
import {SceneArrange, SceneChain, SceneFormula, SceneHook} from './s1';
import {SceneClassify, SceneGroup, ScenePosition, SceneWhyGroup} from './s2';
import {SceneAid, SceneDuplicates, SceneFind} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'formula-vs-structure': SceneFormula, 'why-arrangement-matters': SceneArrange, 'chain-isomers': SceneChain,
	'position-isomers': ScenePosition, 'functional-group-isomers': SceneGroup, 'why-group-matters': SceneWhyGroup, 'classify-a-pair': SceneClassify,
	'find-every-isomer': SceneFind, 'spot-duplicates': SceneDuplicates, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
