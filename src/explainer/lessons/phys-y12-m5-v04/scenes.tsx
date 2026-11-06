// Scene map for phys-y12-m5-v04 Revision 2 (15 scenes, ids from the measured lesson.json).
import type React from 'react';
import {S01, S02, S03, S04} from './s1';
import {S05, S06, S07, S08, S09} from './s2';
import {S10, S11, S12, S13, S14, S15} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'range-from-columns': S02,
	swap: S03,
	'shortcut-conditions': S04,
	'forty-five': S05,
	'worked-fifteen': S06,
	'same-range-different-flights': S07,
	'two-traps': S08,
	'memory-aid': S09,
	'attempt-1': S10,
	'feedback-1': S11,
	'attempt-2': S12,
	'feedback-2': S13,
	handoff: S14,
	'key-notes': S15,
};
