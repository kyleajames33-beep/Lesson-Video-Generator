import React from 'react';
import {SceneHook, SceneQ1, SceneQ1Calc, SceneQ1Graph, SceneQ1Mistake, SceneQ1Range} from './s1';
import {SceneQ2, SceneQ2Blank, SceneQ2Calc, SceneQ2Mistake} from './s2';
import {SceneDecision, SceneNotes, SceneQ3, SceneQ3Claim, SceneQ3Data, SceneQ3Mistake} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1, 'q1-graph': SceneQ1Graph, 'q1-range': SceneQ1Range, 'q1-calc': SceneQ1Calc, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2, 'q2-blank': SceneQ2Blank, 'q2-calc': SceneQ2Calc, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3, 'q3-data': SceneQ3Data, 'q3-claim': SceneQ3Claim, 'q3-mistake': SceneQ3Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
