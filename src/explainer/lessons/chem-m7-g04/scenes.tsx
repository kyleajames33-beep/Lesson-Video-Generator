import React from 'react';
import {SceneHook, SceneQ1Backbone, SceneQ1Mistake, SceneQ1Question, SceneQ1Section} from './s1';
import {SceneQ2Links, SceneQ2Mistake, SceneQ2Question, SceneQ2Water} from './s2';
import {SceneQ3Mistake, SceneQ3Question, SceneQ3X, SceneQ3Y} from './s3';
import {SceneDecision, SceneNotes, SceneQ4Compare, SceneQ4Forces, SceneQ4Mistake, SceneQ4Question} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1Question, 'q1-backbone': SceneQ1Backbone, 'q1-section': SceneQ1Section, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2Question, 'q2-links': SceneQ2Links, 'q2-water': SceneQ2Water, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3Question, 'q3-x': SceneQ3X, 'q3-y': SceneQ3Y, 'q3-mistake': SceneQ3Mistake,
	'q4-question': SceneQ4Question, 'q4-compare': SceneQ4Compare, 'q4-forces': SceneQ4Forces, 'q4-mistake': SceneQ4Mistake, 'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
