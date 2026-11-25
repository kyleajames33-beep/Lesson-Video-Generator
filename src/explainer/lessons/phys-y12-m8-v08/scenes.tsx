// Scene map for phys-y12-m8-v08 (17 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06} from './s1';
import {S07, S08, S09, S10, S11} from './s2';
import {S12, S13, S14, S15, S16, S17} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'alpha-apparatus': S02,
	'thomson-prediction': S03,
	observations: S04,
	'thomson-fails': S05,
	'concentrate-charge': S06,
	'concentrate-mass': S07,
	'paths-explained': S08,
	'rare-means-tiny': S09,
	'nuclear-model': S10,
	'memory-aid': S11,
	'attempt-1': S12,
	'feedback-1': S13,
	'attempt-2': S14,
	'feedback-2': S15,
	handoff: S16,
	'key-notes': S17,
};
