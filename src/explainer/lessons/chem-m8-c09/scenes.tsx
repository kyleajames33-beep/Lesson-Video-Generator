import React from 'react';
import {SceneBreaks, SceneChart, SceneHook, SceneMolIon, SceneSameMass, SceneStages} from './s1';
import {SceneBase, SceneGaps, SceneIsotopes, SceneLimits, SceneMemory, ScenePieces} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'five-stages': SceneStages, 'reading-chart': SceneChart, 'molecular-ion': SceneMolIon, 'same-mass': SceneSameMass, 'bond-breaks': SceneBreaks,
	'common-gaps': SceneGaps, 'base-peak': SceneBase, 'butanone-pieces': ScenePieces, 'isotope-pairs': SceneIsotopes, 'ms-limits': SceneLimits, 'memory-aid': SceneMemory,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-handoff': SceneDecision, 'key-notes': SceneNotes,
};
