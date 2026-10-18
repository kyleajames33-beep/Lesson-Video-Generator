import React from 'react';
import {SceneHookG1, SceneQ1FirstCopy, SceneQ1Mistake, SceneQ1Question, SceneQ1SecondCopy} from './s1';
import {SceneQ2Chain, SceneQ2Direction, SceneQ2Mistake, SceneQ2Question} from './s2';
import {SceneQ3Divisions, SceneQ3Mistake, SceneQ3Question, SceneQ3SPhase} from './s3';
import {SceneDecisionG1, SceneNotesG1, SceneQ4Chromatids, SceneQ4FourCells, SceneQ4Limit, SceneQ4Question} from './s4';

// Playback order comes from the measured lesson (19 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookG1,
	'q1-question': SceneQ1Question, 'q1-first-copy': SceneQ1FirstCopy, 'q1-second-copy': SceneQ1SecondCopy, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2Question, 'q2-direction': SceneQ2Direction, 'q2-chain': SceneQ2Chain, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3Question, 'q3-s-phase': SceneQ3SPhase, 'q3-divisions': SceneQ3Divisions, 'q3-mistake': SceneQ3Mistake,
	'q4-question': SceneQ4Question, 'q4-chromatids': SceneQ4Chromatids, 'q4-four-cells': SceneQ4FourCells, 'q4-limit': SceneQ4Limit,
	'decision-board': SceneDecisionG1, 'key-notes': SceneNotesG1,
};
