import React from 'react';
import {SceneAddition, SceneHook, SceneWhy} from './s1';
import {SceneHalogen, SceneHydration, SceneHydrogen, SceneHydrogenation} from './s2';
import {SceneAid, SceneCheck, SceneTwo} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'why-alkenes-add': SceneWhy, 'addition-pattern': SceneAddition, hydrogenation: SceneHydrogenation, halogenation: SceneHalogen,
	'hydrogen-halides': SceneHydrogen, hydration: SceneHydration, 'two-products': SceneTwo, 'check-equation': SceneCheck, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
