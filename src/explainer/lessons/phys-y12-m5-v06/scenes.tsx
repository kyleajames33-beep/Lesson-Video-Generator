// Scene map for phys-y12-m5-v06 (15 scenes, ids from the measured lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09} from './s2';
import {S10, S11, S12, S13, S14, S15} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	reveal: S02,
	'set-up': S03,
	'time-to-wall': S04,
	'height-at-wall': S05,
	'datum-clearance': S06,
	'rounding-trap': S07,
	'sideways-contrast': S08,
	method: S09,
	'attempt-1': S10,
	'feedback-1': S11,
	'attempt-2': S12,
	'feedback-2': S13,
	handoff: S14,
	'key-notes': S15,
};
