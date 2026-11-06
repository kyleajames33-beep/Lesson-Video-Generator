import React from 'react';
import {SceneHook, SceneQ1, SceneQ1Build, SceneQ1Mistake, SceneQ1Predict} from './s1';
import {SceneQ2, SceneQ2Explain, SceneQ2Mistake, SceneQ2Peaks} from './s2';
import {SceneDecision, SceneNotes, SceneQ3, SceneQ3Explain, SceneQ3Identify, SceneQ3Mistake} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1, 'q1-build': SceneQ1Build, 'q1-predict': SceneQ1Predict, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2, 'q2-peaks': SceneQ2Peaks, 'q2-explain': SceneQ2Explain, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3, 'q3-identify': SceneQ3Identify, 'q3-explain': SceneQ3Explain, 'q3-mistake': SceneQ3Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
