// Scene map for phys-y12-m5-v18 (17 scenes, ids from the measured lesson.json).
import type React from 'react';
import {S01, S02, S03, S04} from './s1';
import {S05, S06, S07, S08, S09, S10} from './s2';
import {S11, S12, S13, S14, S15, S16, S17} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'falling-around': S02,
	'gravity-role': S03,
	'orbital-speed': S04,
	'free-fall': S05,
	'worked-speed': S06,
	'higher-slower': S07,
	period: S08,
	'worked-period': S09,
	'one-constant': S10,
	'memory-aid': S11,
	'attempt-1': S12,
	'feedback-1': S13,
	'attempt-2': S14,
	'feedback-2': S15,
	handoff: S16,
	'key-notes': S17,
};
