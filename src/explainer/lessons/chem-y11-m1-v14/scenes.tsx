import React from 'react';
import {SceneAcross, SceneDips, SceneHook, SceneIE, ScenePrediction} from './s1';
import {SceneDown, SceneEN, SceneENTrends, SceneMemoryLine, SceneTwo} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'ionisation-energy': SceneIE, 'across-period': SceneAcross, dips: SceneDips, prediction: ScenePrediction, 'down-group': SceneDown,
	electronegativity: SceneEN, 'en-trends': SceneENTrends, 'two-quantities': SceneTwo, 'memory-line': SceneMemoryLine,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
