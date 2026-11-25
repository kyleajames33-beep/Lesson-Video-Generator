// Scene map for phys-y12-m8-v16 (19 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06, S07} from './s1';
import {S08, S09, S10, S11, S12, S13} from './s2';
import {S14, S15, S16, S17, S18, S19} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'pull-apart': S02,
	'not-lost-matter': S03,
	method: S04,
	'c12-mass-defect': S05,
	'c12-binding': S06,
	'atomic-mass-trap': S07,
	'per-nucleon': S08,
	'curve-values': S09,
	'curve-rises': S10,
	'curve-falls': S11,
	'energy-release': S12,
	'memory-aid': S13,
	'attempt-1': S14,
	'feedback-1': S15,
	'attempt-2': S16,
	'feedback-2': S17,
	handoff: S18,
	'key-notes': S19,
};
