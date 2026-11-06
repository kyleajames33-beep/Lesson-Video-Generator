import React from 'react';
import {SceneHook, SceneQ1, SceneQ1Judge, SceneQ1Measure, SceneQ1Mistake} from './s1';
import {SceneQ2, SceneQ2Evaluate, SceneQ2Mechanism, SceneQ2Mistake} from './s2';
import {SceneDecision, SceneNotes, SceneQ3, SceneQ3Evaluate, SceneQ3Measure, SceneQ3Mistake} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1, 'q1-measure': SceneQ1Measure, 'q1-judge': SceneQ1Judge, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2, 'q2-mechanism': SceneQ2Mechanism, 'q2-evaluate': SceneQ2Evaluate, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3, 'q3-measure': SceneQ3Measure, 'q3-evaluate': SceneQ3Evaluate, 'q3-mistake': SceneQ3Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
