import React from 'react';
import {SceneBack, SceneConditions, SceneHook, SceneJoin, SceneNaming, SceneProps} from './s1';
import {SceneAid, SceneEquilibrium, SceneFlow, ScenePush, SceneSeparate} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'joining-halves': SceneJoin, 'naming-esters': SceneNaming, 'working-backwards': SceneBack, 'ester-properties': SceneProps, 'conditions-reflux': SceneConditions,
	'equilibrium-yield': SceneEquilibrium, 'pushing-yield': ScenePush, 'separating-identifying': SceneSeparate, 'flow-chart': SceneFlow, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
