// Scene map for phys-y12-m7-v12 (18 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06} from './s1';
import {S07, S08, S09, S10, S11, S12} from './s2';
import {S13, S14, S15, S16, S17, S18} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'frames-galilean': S02,
	'inertial-frames': S03,
	'no-absolute-rest': S04,
	'maxwell-aether': S05,
	'michelson-morley': S06,
	'null-result-limits': S07,
	postulates: S08,
	'why-same-c': S09,
	'moving-source-test': S10,
	'the-price': S11,
	'memory-aid': S12,
	'attempt-1': S13,
	'feedback-1': S14,
	'attempt-2': S15,
	'feedback-2': S16,
	handoff: S17,
	'key-notes': S18,
};
