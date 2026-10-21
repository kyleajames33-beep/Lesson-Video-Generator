import React from 'react';
import {SceneCard, SceneHook, SceneParts, SceneRead, SceneVerbs} from './s1';
import {SceneAssess, SceneBuild1, SceneBuild2, SceneNoReasons, SceneWeak} from './s2';
import {SceneDecision, SceneDrill1, SceneDrill2, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'four-verbs': SceneVerbs, 'question-card': SceneCard, 'read-it': SceneRead, 'three-parts': SceneParts, 'build-1': SceneBuild1, 'build-2': SceneBuild2,
	'weak-vs-strong': SceneWeak, 'no-reasons': SceneNoReasons, 'assess-vs-evaluate': SceneAssess, 'drill-1': SceneDrill1, 'feedback-1': SceneFeedback1,
	'drill-2': SceneDrill2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
