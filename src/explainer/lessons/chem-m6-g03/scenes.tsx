import React from 'react';
import {SceneHook, SceneQ1Mistake, SceneQ1Naoh, SceneQ1Question, SceneQ1Standard, SceneQ1Titres} from './s1';
import {SceneQ2Aliquot, SceneQ2Mistake, SceneQ2Percent, SceneQ2Question, SceneQ2ScaleUp} from './s2';
import {SceneQ3Mistake, SceneQ3Percent, SceneQ3Question, SceneQ3Ratio} from './s3';
import {SceneDecision, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1Question, 'q1-standard': SceneQ1Standard, 'q1-titres': SceneQ1Titres, 'q1-naoh': SceneQ1Naoh, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2Question, 'q2-aliquot': SceneQ2Aliquot, 'q2-scale-up': SceneQ2ScaleUp, 'q2-percent': SceneQ2Percent, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3Question, 'q3-ratio': SceneQ3Ratio, 'q3-percent': SceneQ3Percent, 'q3-mistake': SceneQ3Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
