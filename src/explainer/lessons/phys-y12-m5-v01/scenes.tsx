// Scene map for phys-y12-m5-v01 (17 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09, S10} from './s2';
import {S11, S12, S13, S14, S15, S16, S17} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	reveal: S02,
	model: S03,
	horizontal: S04,
	vertical: S05,
	'one-clock': S06,
	'worked-time': S07,
	'worked-distance': S08,
	'resultant-path': S09,
	'slowing-mistake': S10,
	'memory-aid': S11,
	'attempt-1': S12,
	'feedback-1': S13,
	'attempt-2': S14,
	'feedback-2': S15,
	handoff: S16,
	'key-notes': S17,
};
