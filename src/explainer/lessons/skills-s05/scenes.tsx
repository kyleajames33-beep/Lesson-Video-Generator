import React from 'react';
import {SceneCard, SceneFour, SceneHook, SceneRead} from './s1';
import {SceneStep1, SceneStep2, SceneStep3} from './s2';
import {SceneRound, SceneSigFigs, SceneWrong} from './s3';
import {SceneDecision, SceneDrill1, SceneDrill2, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'question-card': SceneCard, 'read-it': SceneRead, 'four-steps': SceneFour, 'step-1': SceneStep1, 'step-2': SceneStep2, 'step-3': SceneStep3,
	'sig-figs': SceneSigFigs, 'round-once': SceneRound, 'working-when-wrong': SceneWrong, 'drill-1': SceneDrill1, 'feedback-1': SceneFeedback1,
	'drill-2': SceneDrill2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
