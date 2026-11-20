import React from 'react';
import {SceneAcross, SceneHook, SceneMeasure, SceneMoreElectrons, SceneTwoEffects} from './s1';
import {SceneDown, SceneExam, SceneIons, SceneIso, SceneMemoryLine, ScenePrediction} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'measuring-radius': SceneMeasure, 'two-effects': SceneTwoEffects, 'across-period': SceneAcross, 'more-electrons': SceneMoreElectrons,
	prediction: ScenePrediction, 'down-group': SceneDown, 'exam-language': SceneExam, 'atoms-to-ions': SceneIons, isoelectronic: SceneIso, 'memory-line': SceneMemoryLine,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
