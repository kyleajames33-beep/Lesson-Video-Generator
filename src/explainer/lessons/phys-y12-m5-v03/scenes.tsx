// Scene map for phys-y12-m5-v03 (16 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09, S10} from './s2';
import {S11, S12, S13, S14, S15, S16} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'height-equation': S02,
	'worked-height': S03,
	'flight-time-roots': S04,
	'twice-the-climb': S05,
	'landing-velocity': S06,
	'range-from-clock': S07,
	'what-controls-what': S08,
	condition: S09,
	'memory-aid': S10,
	'attempt-1': S11,
	'feedback-1': S12,
	'attempt-2': S13,
	'feedback-2': S14,
	handoff: S15,
	'key-notes': S16,
};
