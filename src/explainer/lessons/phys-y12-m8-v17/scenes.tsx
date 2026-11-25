// Scene map for phys-y12-m8-v17 (19 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06, S07} from './s1';
import {S08, S09, S10, S11, S12, S13} from './s2';
import {S14, S15, S16, S17, S18, S19} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'rutherford-observation': S02,
	'balance-equation': S03,
	'q-from-energy': S04,
	'sign-of-q': S05,
	'which-masses': S06,
	'rutherford-masses': S07,
	'rutherford-q': S08,
	'alpha-energy': S09,
	'q-fixed': S10,
	'binding-route': S11,
	'positive-reaction': S12,
	'memory-aid': S13,
	'attempt-1': S14,
	'feedback-1': S15,
	'attempt-2': S16,
	'feedback-2': S17,
	handoff: S18,
	'key-notes': S19,
};
