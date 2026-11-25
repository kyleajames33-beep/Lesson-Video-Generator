// Scene map for phys-y12-m8-v03 (17 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06} from './s1';
import {S07, S08, S09, S10, S11} from './s2';
import {S12, S13, S14, S15, S16, S17} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'emission-levels': S02,
	absorption: S03,
	'black-body-comparison': S04,
	'wien-method': S05,
	'hydrogen-hump': S06,
	'other-features': S07,
	classes: S08,
	payne: S09,
	'worked-classify': S10,
	'memory-aid': S11,
	'attempt-1': S12,
	'feedback-1': S13,
	'attempt-2': S14,
	'feedback-2': S15,
	'handoff-v04': S16,
	'key-notes': S17,
};
