// Scene map for phys-y12-m6-v06 (16 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09} from './s2';
import {S10, S11, S12, S13, S14, S15, S16} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'compare-forces': S02,
	'crossed-setup': S03,
	balance: S04,
	'worked-selector': S05,
	'rejected-speeds': S06,
	'charge-mass': S07,
	application: S08,
	'memory-aid': S09,
	'attempt-1': S10,
	'feedback-1': S11,
	'attempt-2': S12,
	'feedback-2': S13,
	'hook-answer': S14,
	handoff: S15,
	'key-notes': S16,
};
