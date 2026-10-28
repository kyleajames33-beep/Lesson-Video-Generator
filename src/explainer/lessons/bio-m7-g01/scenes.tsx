import React from 'react';
import {SceneHook, SceneQ1Claim, SceneQ1Denominator, SceneQ1Mistake, SceneQ1Question} from './s1';
import {SceneQ2Calc, SceneQ2Explain, SceneQ2Mistake, SceneQ2Question} from './s2';
import {SceneDecision, SceneNotes, SceneQ3Graph, SceneQ3Justify, SceneQ3Mistake, SceneQ3Question} from './s3';

// Playback order comes from the measured lesson (15 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1Question, 'q1-denominator': SceneQ1Denominator, 'q1-claim': SceneQ1Claim, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2Question, 'q2-calc': SceneQ2Calc, 'q2-explain': SceneQ2Explain, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3Question, 'q3-graph': SceneQ3Graph, 'q3-justify': SceneQ3Justify, 'q3-mistake': SceneQ3Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
