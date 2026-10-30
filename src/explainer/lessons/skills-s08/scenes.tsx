import React from 'react';
import {SceneCard, SceneHook, SceneMarked, ScenePlan, SceneTakeApart} from './s1';
import {SceneBookends, SceneIndPop, ScenePeel, SceneStimulus, SceneWeakStrong} from './s2';
import {SceneDecision, SceneDrill1, SceneDrill2, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'how-marked': SceneMarked, 'question-card': SceneCard, 'take-apart': SceneTakeApart, 'plan-minute': ScenePlan,
	'peel-paragraph': ScenePeel, 'individual-population': SceneIndPop, 'use-stimulus': SceneStimulus, 'judgement-bookends': SceneBookends,
	'weak-strong': SceneWeakStrong, 'drill-1': SceneDrill1, 'feedback-1': SceneFeedback1, 'drill-2': SceneDrill2, 'feedback-2': SceneFeedback2,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
