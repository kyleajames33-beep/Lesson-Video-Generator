// Scene map for phys-y12-m8-v07 (18 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06} from './s1';
import {S07, S08, S09, S10, S11, S12} from './s2';
import {S13, S14, S15, S16, S17, S18} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'cathode-ray-tube': S02,
	'early-evidence': S03,
	'thomson-vacuum': S04,
	'thomson-speed': S05,
	'thomson-ratio': S06,
	'ratio-meaning': S07,
	'millikan-balance': S08,
	'drop-charge': S09,
	'charge-packets': S10,
	combine: S11,
	'memory-aid': S12,
	'attempt-1': S13,
	'feedback-1': S14,
	'attempt-2': S15,
	'feedback-2': S16,
	handoff: S17,
	'key-notes': S18,
};
