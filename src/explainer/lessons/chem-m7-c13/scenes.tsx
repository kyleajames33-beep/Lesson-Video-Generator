import React from 'react';
import {SceneBack, SceneCheck, SceneChoose, SceneCount, SceneForwards, SceneHook, SceneMap} from './s1';
import {SceneAid, SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s2';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'reaction-map': SceneMap, 'count-carbons': SceneCount, 'work-backwards': SceneBack, 'choose-route': SceneChoose, 'write-forwards': SceneForwards, 'check-arrows': SceneCheck,
	'memory-aid': SceneAid, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
