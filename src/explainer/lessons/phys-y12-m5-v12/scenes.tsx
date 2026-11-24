// Scene map for phys-y12-m5-v12 (16 scenes, ids from the provisional lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09, S10} from './s2';
import {S11, S12, S13, S14, S15, S16} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'forces-on-car': S02,
	'friction-job': S03,
	'force-equations': S04,
	'worked-friction-needed': S05,
	'the-limit': S06,
	'worked-limiting-speed': S07,
	'what-sets-limit': S08,
	'past-the-limit': S09,
	'mistake-memory-aid': S10,
	'attempt-1': S11,
	'feedback-1': S12,
	'attempt-2': S13,
	'feedback-2': S14,
	handoff: S15,
	'key-notes': S16,
};
