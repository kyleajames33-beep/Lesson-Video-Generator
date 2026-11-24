// Scene map for phys-y12-m5-v05 (17 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06} from './s1';
import {S07, S08, S09, S10, S11} from './s2';
import {S12, S13, S14, S15, S16, S17} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'shortcuts-fail': S02,
	quadratic: S03,
	'worked-thirty-time': S04,
	'negative-root': S05,
	'range-and-check': S06,
	'forty-five-and-sixty': S07,
	'why-thirty-wins': S08,
	'three-samples': S09,
	'two-slips': S10,
	'memory-aid': S11,
	'attempt-1': S12,
	'feedback-1': S13,
	'attempt-2': S14,
	'feedback-2': S15,
	handoff: S16,
	'key-notes': S17,
};
