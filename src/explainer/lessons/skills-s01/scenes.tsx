import React from 'react';
import {SceneCard, SceneHook, SceneMarks, SceneVerb} from './s1';
import {SceneBuild1, SceneBuild2, SceneConstraint, SceneContent} from './s2';
import {SceneOneMark, SceneRoutine, SceneWeak} from './s3';
import {SceneDecision, SceneDrill1, SceneDrill2, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'question-card': SceneCard, verb: SceneVerb, marks: SceneMarks, 'content-words': SceneContent, constraint: SceneConstraint,
	'build-1': SceneBuild1, 'build-2': SceneBuild2, 'weak-vs-strong': SceneWeak, 'one-mark-one-idea': SceneOneMark, routine: SceneRoutine,
	'drill-1': SceneDrill1, 'feedback-1': SceneFeedback1, 'drill-2': SceneDrill2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
