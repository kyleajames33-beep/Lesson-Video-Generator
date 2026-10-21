import React from 'react';
import {SceneCard, SceneHook, SceneRead, SceneVerbs} from './s1';
import {SceneGuide, SceneSentence, SceneTable, SceneWeak, SceneWords} from './s2';
import {SceneDecision, SceneDrill1, SceneDrill2, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'three-verbs': SceneVerbs, 'question-card': SceneCard, 'read-it': SceneRead, 'pair-table': SceneTable, 'table-to-sentence': SceneSentence,
	'comparison-words': SceneWords, 'weak-vs-strong': SceneWeak, 'what-guidelines-show': SceneGuide, 'drill-1': SceneDrill1, 'feedback-1': SceneFeedback1,
	'drill-2': SceneDrill2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
