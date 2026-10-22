import React from 'react';
import {SceneHook, SceneQ1Build, SceneQ1Plan, SceneQ1Question, SceneQ1Weak, SceneQ1Weigh} from './s1';
import {SceneQ2Genetic, SceneQ2Mistake, SceneQ2Question, SceneQ2Welfare} from './s2';
import {SceneDecision, SceneNotes, SceneQ3Benefit, SceneQ3Ethics, SceneQ3Mistake, SceneQ3Question, SceneQ3Verdict} from './s3';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1Question, 'q1-plan': SceneQ1Plan, 'q1-build': SceneQ1Build, 'q1-weigh': SceneQ1Weigh, 'q1-weak': SceneQ1Weak,
	'q2-question': SceneQ2Question, 'q2-genetic': SceneQ2Genetic, 'q2-welfare': SceneQ2Welfare, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3Question, 'q3-benefit': SceneQ3Benefit, 'q3-ethics': SceneQ3Ethics, 'q3-verdict': SceneQ3Verdict, 'q3-mistake': SceneQ3Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
