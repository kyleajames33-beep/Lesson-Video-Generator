import React from 'react';
import {SceneDecideQ, SceneHook, SceneMixing, SceneQspIdea} from './s1';
import {SceneAid, SceneCaCompare, SceneCaSetup, ScenePbCompare, ScenePbMoles} from './s2';
import {SceneCommonIon, SceneIceCommon, SceneSolveCommon} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'qsp-idea': SceneQspIdea, 'qsp-decision': SceneDecideQ, 'mixing-dilutes': SceneMixing,
	'caso4-setup': SceneCaSetup, 'caso4-compare': SceneCaCompare, 'pbso4-moles': ScenePbMoles, 'pbso4-compare': ScenePbCompare, 'memory-aid': SceneAid,
	'common-ion': SceneCommonIon, 'common-ion-ice': SceneIceCommon, 'common-ion-solve': SceneSolveCommon,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
