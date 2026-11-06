import React from 'react';
import {SceneDO, SceneFix, SceneHook, SceneIodine, SceneRatio, SceneSampling, SceneSnapshot, SceneTitrate} from './s1';
import {SceneBOD, SceneBODWorked, SceneMass, SceneMoles, ScenePerLitre, SceneTogether} from './s2';
import {SceneAid, SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'dissolved-oxygen': SceneDO, snapshot: SceneSnapshot, sampling: SceneSampling, 'winkler-fix': SceneFix, 'winkler-iodine': SceneIodine, 'winkler-titrate': SceneTitrate, ratio: SceneRatio,
	'worked-moles': SceneMoles, 'worked-mass': SceneMass, 'worked-per-litre': ScenePerLitre, 'bod-forecast': SceneBOD, 'bod-worked': SceneBODWorked, 'together-limits': SceneTogether,
	'memory-aid': SceneAid, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
