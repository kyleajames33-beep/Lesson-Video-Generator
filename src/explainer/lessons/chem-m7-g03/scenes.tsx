import React from 'react';
import {SceneHook, SceneQ1Choose, SceneQ1Mistake, SceneQ1Question, SceneQ1Route} from './s1';
import {SceneQ2Back, SceneQ2Forwards, SceneQ2Mistake, SceneQ2Question, SceneQ2Yield} from './s2';
import {SceneBoard, SceneNotes, SceneQ3Error1, SceneQ3Error2, SceneQ3Fix, SceneQ3Mistake, SceneQ3Question} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'q1-question': SceneQ1Question, 'q1-choose': SceneQ1Choose, 'q1-route': SceneQ1Route, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2Question, 'q2-backwards': SceneQ2Back, 'q2-forwards': SceneQ2Forwards, 'q2-yield': SceneQ2Yield, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3Question, 'q3-error1': SceneQ3Error1, 'q3-error2': SceneQ3Error2, 'q3-fix': SceneQ3Fix, 'q3-mistake': SceneQ3Mistake,
	'decision-board': SceneBoard, 'key-notes': SceneNotes,
};
