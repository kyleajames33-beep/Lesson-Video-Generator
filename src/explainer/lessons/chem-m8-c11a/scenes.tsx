import React from 'react';
import {SceneEnv, SceneHook, SceneLines, SceneMagnets, SceneScale, SceneShield, SceneSwap, SceneSymmetry} from './s1';
import {SceneAttempt1, SceneAttempt2, SceneDataSheet, SceneDecision, SceneFeedback1, SceneFeedback2, SceneMemory, SceneNotes, SceneOverlap} from './s2';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'tiny-magnets': SceneMagnets, shielding: SceneShield, 'scale-tms': SceneScale, environments: SceneEnv, symmetry: SceneSymmetry, 'swap-test': SceneSwap,
	'single-lines': SceneLines, 'data-sheet': SceneDataSheet, overlap: SceneOverlap, 'memory-aid': SceneMemory, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1,
	'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-handoff': SceneDecision, 'key-notes': SceneNotes,
};
