// Scene map for phys-y12-m5-v09 (15 scenes, ids from the measured lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09} from './s2';
import {S10, S11, S12, S13, S14, S15} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'reveal-torque': S02,
	'right-angles': S03,
	components: S04,
	'moment-arm': S05,
	'along-handle': S06,
	'sin-graph': S07,
	'two-slips': S08,
	'memory-aid': S09,
	'attempt-1': S10,
	'feedback-1': S11,
	'attempt-2': S12,
	'feedback-2': S13,
	handoff: S14,
	'key-notes': S15,
};
