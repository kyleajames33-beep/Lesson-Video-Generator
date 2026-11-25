// Scene map for phys-y12-m6-v11 (14 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04} from './s1';
import {S05, S06, S07, S08} from './s2';
import {S09, S10, S11, S12, S13, S14} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'what-if': S02,
	'pay-with-work': S03,
	'lenz-law': S04,
	'four-steps': S05,
	'stop-and-pull': S06,
	evidence: S07,
	'memory-aid': S08,
	'attempt-1': S09,
	'feedback-1': S10,
	'attempt-2': S11,
	'feedback-2': S12,
	handoff: S13,
	'key-notes': S14,
};
