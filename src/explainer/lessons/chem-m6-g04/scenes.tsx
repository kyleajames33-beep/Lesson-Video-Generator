import React from 'react';
import {SceneHook, SceneQ1Concentration, SceneQ1Indicator, SceneQ1Mistake, SceneQ1Question} from './s1';
import {SceneQ2Direction, SceneQ2Mistake, SceneQ2Picture, SceneQ2Question} from './s2';
import {SceneQ3Calculate, SceneQ3Error, SceneQ3Mistake, SceneQ3Question} from './s3';
import {SceneDecision, SceneNotes, SceneQ4Crossing, SceneQ4Mistake, SceneQ4Question, SceneQ4Shape} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1Question, 'q1-concentration': SceneQ1Concentration, 'q1-indicator': SceneQ1Indicator, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2Question, 'q2-picture': SceneQ2Picture, 'q2-direction': SceneQ2Direction, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3Question, 'q3-calculate': SceneQ3Calculate, 'q3-error': SceneQ3Error, 'q3-mistake': SceneQ3Mistake,
	'q4-question': SceneQ4Question, 'q4-shape': SceneQ4Shape, 'q4-crossing': SceneQ4Crossing, 'q4-mistake': SceneQ4Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
