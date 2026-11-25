// Scene map for phys-y12-m7-v01 (14 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09, S10} from './s2';
import {S11, S12, S13, S14} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	unification: S02,
	'self-sustaining-wave': S03,
	production: S04,
	'predicted-speed': S05,
	hertz: S06,
	'em-family': S07,
	'memory-aid': S08,
	'attempt-1': S09,
	'feedback-1': S10,
	'attempt-2': S11,
	'feedback-2': S12,
	handoff: S13,
	'key-notes': S14,
};
