import React from 'react';
import {SceneHook, SceneQ1Adaptive, SceneQ1Days, SceneQ1Innate, SceneQ1Mistake, SceneQ1Question} from './s1';
import {SceneQ2Explain, SceneQ2Mistake, SceneQ2Question, SceneQ2Read} from './s2';
import {SceneDecision, SceneNotes, SceneQ3Mistake, SceneQ3Question, SceneQ3Types, SceneQ3WhyBoth} from './s3';

// Playback order comes from the measured lesson (16 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1Question, 'q1-innate': SceneQ1Innate, 'q1-adaptive': SceneQ1Adaptive, 'q1-days': SceneQ1Days, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2Question, 'q2-read': SceneQ2Read, 'q2-explain': SceneQ2Explain, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3Question, 'q3-types': SceneQ3Types, 'q3-why-both': SceneQ3WhyBoth, 'q3-mistake': SceneQ3Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
