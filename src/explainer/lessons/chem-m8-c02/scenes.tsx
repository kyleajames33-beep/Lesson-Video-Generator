import React from 'react';
import {SceneChoose, SceneConstant, SceneDigest, SceneFilter, SceneHook, SceneMass} from './s1';
import {SceneAid, SceneConc, SceneErrors, SceneMoles, ScenePercent} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'measuring-by-mass': SceneMass, 'choosing-solid': SceneChoose, 'precipitate-digest': SceneDigest, 'filter-wash': SceneFilter, 'constant-mass': SceneConstant,
	'worked-mass-moles': SceneMoles, 'worked-percentage': ScenePercent, 'mass-to-concentration': SceneConc, errors: SceneErrors, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
