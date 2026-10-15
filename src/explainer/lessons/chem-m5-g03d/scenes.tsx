import React from 'react';
import {SceneDecisionD, SceneHookD, SceneNotesD} from './s1';
import {SceneQ3Check, SceneQ3Flip, SceneQ3Question, SceneQ3Solve} from './s2';
import {SceneQ4aAnswer, SceneQ4aQuestion, SceneQ4bQuestion, SceneQ4bSolve, SceneQ4bSquare} from './s3';

export const SCENES: Record<string, React.FC> = {
	'hook-traps': SceneHookD, 'q3-question': SceneQ3Question, 'q3-flip-and-table': SceneQ3Flip, 'q3-drop-and-solve': SceneQ3Solve, 'q3-check-and-moles': SceneQ3Check,
	'q4a-question': SceneQ4aQuestion, 'q4a-answer': SceneQ4aAnswer, 'q4b-question': SceneQ4bQuestion, 'q4b-square': SceneQ4bSquare, 'q4b-solve': SceneQ4bSolve,
	'decision-board': SceneDecisionD, 'key-notes': SceneNotesD,
};
