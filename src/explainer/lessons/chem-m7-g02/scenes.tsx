import React from 'react';
import {SceneHook, SceneQ1DH, SceneQ1Mistake, SceneQ1Pct, SceneQ1QN, SceneQ1Question} from './s1';
import {SceneQ2Heat, SceneQ2Mass, SceneQ2Mistake, SceneQ2Question} from './s2';
import {SceneBoard, SceneNotes, SceneQ3Judge, SceneQ3Mean, SceneQ3Mistake, SceneQ3Question, SceneQ3Trial} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1Question, 'q1-q-and-n': SceneQ1QN, 'q1-dh': SceneQ1DH, 'q1-percent': SceneQ1Pct, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2Question, 'q2-heat': SceneQ2Heat, 'q2-mass': SceneQ2Mass, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3Question, 'q3-trial3': SceneQ3Trial, 'q3-judge': SceneQ3Judge, 'q3-mean': SceneQ3Mean, 'q3-mistake': SceneQ3Mistake,
	'decision-board': SceneBoard, 'key-notes': SceneNotes,
};
