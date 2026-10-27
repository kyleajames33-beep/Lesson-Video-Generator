import React from 'react';
import {SceneCard, SceneHook, SceneThree, SceneWFF} from './s1';
import {ScenePartA, ScenePartB, ScenePartC} from './s2';
import {SceneFixes, SceneRisk} from './s3';
import {SceneDecision, SceneDrill1, SceneDrill2, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'three-words': SceneThree, 'word-feature-fix': SceneWFF, 'question-card': SceneCard,
	'part-a': ScenePartA, 'part-b': ScenePartB, 'part-c': ScenePartC, 'fixes-that-fix': SceneFixes, 'risk-answers': SceneRisk,
	'drill-1': SceneDrill1, 'feedback-1': SceneFeedback1, 'drill-2': SceneDrill2, 'feedback-2': SceneFeedback2,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
