// Scene map for phys-y12-m7-v09 (18 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06} from './s1';
import {S07, S08, S09, S10, S11, S12} from './s2';
import {S13, S14, S15, S16, S17, S18} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'thermal-radiation': S02,
	'read-curve': S03,
	'hotter-shorter-higher': S04,
	'wien-law': S05,
	'worked-star': S06,
	'classical-prediction': S07,
	'uv-catastrophe': S08,
	'planck-packets': S09,
	'packets-fix-curve': S10,
	'claims-limits': S11,
	'memory-aid': S12,
	'attempt-1': S13,
	'feedback-1': S14,
	'attempt-2': S15,
	'feedback-2': S16,
	handoff: S17,
	'key-notes': S18,
};
