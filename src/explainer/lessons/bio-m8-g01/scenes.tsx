import React from 'react';
import {SceneHook, SceneQ1, SceneQ1Calc, SceneQ1Claim, SceneQ1Mistake} from './s1';
import {SceneQ2, SceneQ2Describe, SceneQ2Graph, SceneQ2Mistake} from './s2';
import {SceneDecision, SceneNotes, SceneQ3, SceneQ3Calc, SceneQ3Evaluate, SceneQ3Mistake} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1, 'q1-calc': SceneQ1Calc, 'q1-claim': SceneQ1Claim, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2, 'q2-graph': SceneQ2Graph, 'q2-describe': SceneQ2Describe, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3, 'q3-calc': SceneQ3Calc, 'q3-evaluate': SceneQ3Evaluate, 'q3-mistake': SceneQ3Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
