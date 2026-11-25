// Scene map for phys-y12-m6-v03 (16 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09, S10} from './s2';
import {S11, S12, S13, S14, S15, S16} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'work-qv': S02,
	'energy-ledger': S03,
	electronvolt: S04,
	'speed-from-rest': S05,
	doubling: S06,
	'particle-compare': S07,
	'qed-limits': S08,
	'initial-energy': S09,
	'memory-aid': S10,
	'attempt-1': S11,
	'feedback-1': S12,
	'attempt-2': S13,
	'feedback-2': S14,
	handoff: S15,
	'key-notes': S16,
};
