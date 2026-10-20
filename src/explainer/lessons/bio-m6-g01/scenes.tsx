import React from 'react';
import {SceneHook, SceneQ1Mistake, SceneQ1Mrna, SceneQ1Mutants, SceneQ1Question} from './s1';
import {SceneQ2Align, SceneQ2Frame, SceneQ2Mistake, SceneQ2Question} from './s2';
import {SceneQ3Diagram, SceneQ3Karyotype, SceneQ3Mistake, SceneQ3Question} from './s3';
import {SceneDecision, SceneNotes, SceneQ4Frameshift, SceneQ4Mistake, SceneQ4Question, SceneQ4Somatic} from './s4';

// Playback order comes from the measured lesson (19 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook,
	'q1-question': SceneQ1Question, 'q1-mrna': SceneQ1Mrna, 'q1-mutants': SceneQ1Mutants, 'q1-mistake': SceneQ1Mistake,
	'q2-question': SceneQ2Question, 'q2-align': SceneQ2Align, 'q2-frame': SceneQ2Frame, 'q2-mistake': SceneQ2Mistake,
	'q3-question': SceneQ3Question, 'q3-diagram': SceneQ3Diagram, 'q3-karyotype': SceneQ3Karyotype, 'q3-mistake': SceneQ3Mistake,
	'q4-question': SceneQ4Question, 'q4-frameshift': SceneQ4Frameshift, 'q4-somatic': SceneQ4Somatic, 'q4-mistake': SceneQ4Mistake,
	'decision-board': SceneDecision, 'key-notes': SceneNotes,
};
