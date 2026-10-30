import React from 'react';
import {SceneAxes, SceneCard, SceneHook} from './s1';
import {ScenePartAPlot, ScenePartAScale, ScenePartB, ScenePoints} from './s2';
import {SceneLineColumn, ScenePartC, ScenePartD} from './s3';
import {SceneDecision, SceneDrill1, SceneDrill2, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'read-axes': SceneAxes, 'question-card': SceneCard, 'part-a-scale': ScenePartAScale, 'part-a-plot': ScenePartAPlot,
	'part-b-trend': ScenePartB, 'part-b-points': ScenePoints, 'part-c-interpolate': ScenePartC, 'part-d-extrapolate': ScenePartD, 'line-or-column': SceneLineColumn,
	'drill-1': SceneDrill1, 'feedback-1': SceneFeedback1, 'drill-2': SceneDrill2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
