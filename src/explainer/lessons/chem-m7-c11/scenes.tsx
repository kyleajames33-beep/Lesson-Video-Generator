import React from 'react';
import {SceneAmide, SceneForces, SceneGroup, SceneHook, SceneIsomers, SceneNaming} from './s1';
import {SceneAid, SceneAmideBase, SceneNetwork, SceneSalt, SceneVs, SceneWeakBase} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'amine-group': SceneGroup, 'naming-amines': SceneNaming, 'amide-group': SceneAmide, 'amine-forces': SceneForces, 'amine-isomers': SceneIsomers,
	'amide-network': SceneNetwork, 'weak-base': SceneWeakBase, 'amine-salts': SceneSalt, 'amide-not-basic': SceneAmideBase, 'acid-vs-base': SceneVs, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
