import React from 'react';
import {SceneHook, SceneQ1Hydroxide, SceneQ1Mistake, SceneQ1Ph, SceneQ1Question} from './s1';
import {SceneQ2Check, SceneQ2Mistake, SceneQ2Moles, SceneQ2Question} from './s2';
import {SceneQ3Excess, SceneQ3Mistake, SceneQ3Moles, SceneQ3Question} from './s3';
import {SceneDecision, SceneNotes, SceneQ4Excess, SceneQ4Mistake, SceneQ4Ph, SceneQ4Question} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1Question, 'q1-ph': SceneQ1Ph, 'q1-hydroxide': SceneQ1Hydroxide, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2Question, 'q2-moles': SceneQ2Moles, 'q2-check': SceneQ2Check, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3Question, 'q3-moles': SceneQ3Moles, 'q3-excess': SceneQ3Excess, 'q3-mistake': SceneQ3Mistake,
	'q4-question': SceneQ4Question, 'q4-excess': SceneQ4Excess, 'q4-ph': SceneQ4Ph, 'q4-mistake': SceneQ4Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
