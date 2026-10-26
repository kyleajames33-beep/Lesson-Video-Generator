import React from 'react';
import {SceneCatalyst, SceneHook, SceneHydration, SceneRecycle, SceneReflux, SceneSubstitution} from './s1';
import {SceneAid, SceneDistil, SceneFermEq, SceneFermSetup, SceneJudge} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'hydration-equilibrium': SceneHydration, 'catalyst-temperature': SceneCatalyst, 'recycle-and-separate': SceneRecycle, 'substitution-swap': SceneSubstitution,
	'reflux-same-carbon': SceneReflux, 'fermentation-equation': SceneFermEq, 'fermentation-setup': SceneFermSetup, 'distil-fermentation': SceneDistil, 'judge-routes': SceneJudge,
	'memory-aid': SceneAid, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
