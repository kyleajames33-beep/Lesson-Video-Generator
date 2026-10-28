import React from 'react';
import {SceneHook, SceneMicelle, SceneSapon, SceneSeparate, SceneTwoEnds} from './s1';
import {SceneAid, SceneClean, SceneDetergents, SceneHard, SceneVs} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'why-separate': SceneSeparate, 'soap-structure': SceneTwoEnds, saponification: SceneSapon, 'surface-micelles': SceneMicelle,
	'cleaning-action': SceneClean, 'hard-water': SceneHard, detergents: SceneDetergents, 'soap-vs-detergent': SceneVs, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
