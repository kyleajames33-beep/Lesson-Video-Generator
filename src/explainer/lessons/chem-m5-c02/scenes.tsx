import React from 'react';
import {SceneForwardFalls, SceneHook, SceneStart} from './s1';
import {SceneClosing, SceneEqual, SceneGraphs} from './s2';
import {SceneAttempt, SceneTowns} from './s3';
import {SceneFeedback, SceneMemory, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, start: SceneStart, 'forward-falls': SceneForwardFalls, 'closing-in': SceneClosing, equal: SceneEqual, graphs: SceneGraphs,
	'towns-aid': SceneTowns, attempt: SceneAttempt, feedback: SceneFeedback, memory: SceneMemory, 'key-notes': SceneNotes,
};
