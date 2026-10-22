import React from 'react';
import {SceneHook, SceneQ1, SceneQ1Check, SceneQ1Estimate, SceneQ1Mistake} from './s1';
import {SceneQ2, SceneQ2Fails, SceneQ2Full, SceneQ2Mistake, SceneQ3, SceneQ3Back, SceneQ3Ka, SceneQ3Mistake} from './s2';
import {SceneDecision, SceneNotes, SceneQ4, SceneQ4Carbonate, SceneQ4Mistake, SceneQ4Phosphate} from './s3';

// Playback order comes from the measured lesson (19 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1, 'q1-estimate': SceneQ1Estimate, 'q1-check': SceneQ1Check, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2, 'q2-check-fails': SceneQ2Fails, 'q2-full': SceneQ2Full, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3, 'q3-backwards': SceneQ3Back, 'q3-ka': SceneQ3Ka, 'q3-mistake': SceneQ3Mistake,
	'q4-question': SceneQ4, 'q4-carbonate': SceneQ4Carbonate, 'q4-phosphate': SceneQ4Phosphate, 'q4-mistake': SceneQ4Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
