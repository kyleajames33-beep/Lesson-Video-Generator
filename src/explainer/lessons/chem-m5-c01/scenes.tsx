import React from 'react';
import {SceneHook, SceneLook, SceneName} from './s1';
import {SceneAttempt, SceneClassify, SceneFeedback, SceneMemory, SceneMore, SceneNotes, SceneOpen, SceneStatic} from './s2';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'look-inside': SceneLook, 'dynamic-name': SceneName, static: SceneStatic, 'open-vs-closed': SceneOpen,
	'worked-classify': SceneClassify, 'worked-more': SceneMore, attempt: SceneAttempt, feedback: SceneFeedback, memory: SceneMemory, 'key-notes': SceneNotes,
};
