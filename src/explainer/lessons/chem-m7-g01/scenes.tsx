import React from 'react';
import {SceneHook, SceneQ1Isomers, SceneQ1Mistake, SceneQ1Names, SceneQ1Question} from './s1';
import {SceneQ2Addition, SceneQ2Mistake, SceneQ2Question, SceneQ2Subst} from './s2';
import {SceneQ3Mistake, SceneQ3Question, SceneQ3WhatAdded, SceneQ3Where} from './s3';
import {SceneDecision, SceneNotes, SceneQ4Evidence, SceneQ4Judgement, SceneQ4Mistake, SceneQ4Question} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1Question, 'q1-names': SceneQ1Names, 'q1-isomers': SceneQ1Isomers, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2Question, 'q2-addition': SceneQ2Addition, 'q2-substitution': SceneQ2Subst, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3Question, 'q3-what-added': SceneQ3WhatAdded, 'q3-where': SceneQ3Where, 'q3-mistake': SceneQ3Mistake,
	'q4-question': SceneQ4Question, 'q4-evidence': SceneQ4Evidence, 'q4-judgement': SceneQ4Judgement, 'q4-mistake': SceneQ4Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
