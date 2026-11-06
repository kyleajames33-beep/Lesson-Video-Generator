// Scene map for math-a12-d01 Revision 6 (17 scenes, ids from the measured lesson.json).
import type React from 'react';
import {S01, S02, S03, S04} from './s1';
import {S05, S06, S07, S08} from './s2';
import {S09, S10, S11, S12, S13} from './s3';
import {S14, S15, S16, S17} from './s4';

export const SCENES: Record<string, React.FC> = {
	'hook-flask': S01,
	'three-flasks': S02,
	'graph-gradient-height': S03,
	'fast-strain-squash': S04,
	'dial-a': S05,
	'early-flask-slide': S06,
	'three-flasks-stretch': S07,
	'chain-proof': S08,
	'worked-1': S09,
	'worked-2': S10,
	'memory-aid': S11,
	'attempt-1': S12,
	'feedback-1': S13,
	'attempt-2': S14,
	'feedback-2': S15,
	handoff: S16,
	'key-notes': S17,
};
