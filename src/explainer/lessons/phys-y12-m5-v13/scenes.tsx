// Scene map for phys-y12-m5-v13 (17 scenes, ids from the provisional lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09, S10, S11} from './s2';
import {S12, S13, S14, S15, S16, S17} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'two-forces-centre': S02,
	geometry: S03,
	'resolve-tension': S04,
	'never-horizontal': S05,
	'angle-and-speed': S06,
	'worked-radius-tension': S07,
	'worked-speed': S08,
	'worked-period': S09,
	'radius-mistake': S10,
	'memory-aid': S11,
	'attempt-1': S12,
	'feedback-1': S13,
	'attempt-2': S14,
	'feedback-2': S15,
	handoff: S16,
	'key-notes': S17,
};
