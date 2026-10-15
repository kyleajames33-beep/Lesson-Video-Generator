import React from 'react';
import {SceneDecisionC, SceneHookC, SceneNotesC} from './s1';
import {SceneQ1Expression, SceneQ1Mass, SceneQ1Question, SceneQ1Solve} from './s2';
import {SceneQ2ChangeK, SceneQ2Initial, SceneQ2Mistake, SceneQ2Question} from './s3';

export const SCENES: Record<string, React.FC> = {
	'hook-traps': SceneHookC, 'q1-question': SceneQ1Question, 'q1-expression': SceneQ1Expression, 'q1-solve': SceneQ1Solve, 'q1-mass': SceneQ1Mass,
	'q2-question': SceneQ2Question, 'q2-initial': SceneQ2Initial, 'q2-change-and-k': SceneQ2ChangeK, 'q2-mistake': SceneQ2Mistake,
	'decision-board': SceneDecisionC, 'key-notes': SceneNotesC,
};
