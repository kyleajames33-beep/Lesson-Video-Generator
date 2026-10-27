import React from 'react';
import {SceneAddOrSub, SceneDehydration, SceneHook, SceneReversed, SceneSubHX, SceneTwoAlkenes} from './s1';
import {SceneAid, SceneClass, SceneDistilReflux, SceneGreen, SceneHub, SceneLadder, SceneOxidation} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, dehydration: SceneDehydration, 'hydration-reversed': SceneReversed, 'two-alkenes': SceneTwoAlkenes, 'substitution-hx': SceneSubHX, 'addition-or-substitution': SceneAddOrSub,
	oxidation: SceneOxidation, 'class-decides': SceneClass, 'primary-to-acid': SceneLadder, 'distil-or-reflux': SceneDistilReflux, 'green-not-product': SceneGreen, 'alcohol-hub': SceneHub,
	'memory-aid': SceneAid, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
