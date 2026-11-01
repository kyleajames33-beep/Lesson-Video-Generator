import React from 'react';
import {SceneHook, SceneQ1Question, SceneQ1Data, SceneQ1Calc, SceneQ1Mistake} from './s1';
import {SceneQ2Question, SceneQ2Outlier, SceneQ2Ratio, SceneQ2Mistake} from './s2';
import {SceneQ3Question, SceneQ3Titration, SceneQ3Gravimetric, SceneQ3Claim, SceneDecision, SceneNotes} from './s3';
export const SCENES: Record<string, React.FC> = {
 hook: SceneHook, 'q1-question': SceneQ1Question, 'q1-data-ratio': SceneQ1Data,
 'q1-calc': SceneQ1Calc, 'q1-mistake': SceneQ1Mistake,
 'q2-question': SceneQ2Question, 'q2-outlier': SceneQ2Outlier, 'q2-ratio-calc': SceneQ2Ratio,
 'q2-mistake': SceneQ2Mistake, 'q3-question': SceneQ3Question, 'q3-titration': SceneQ3Titration,
 'q3-gravimetric': SceneQ3Gravimetric, 'q3-claim': SceneQ3Claim,
 'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
