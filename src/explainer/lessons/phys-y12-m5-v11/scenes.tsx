// Scene map for phys-y12-m5-v11 (17 scenes, ids from the lesson.json; provisional timing until voiced).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06} from './s1';
import {S07, S08, S09, S10, S11} from './s2';
import {S12, S13, S14, S15, S16, S17} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'speed-velocity': S02,
	'delta-v': S03,
	'describing-motion': S04,
	'worked-v-omega-f': S05,
	'further-out-faster': S06,
	'size-of-a': S07,
	'car-acceleration': S08,
	'net-force-inwards': S09,
	'flung-outwards': S10,
	'memory-aid': S11,
	'attempt-1': S12,
	'feedback-1': S13,
	'attempt-2': S14,
	'feedback-2': S15,
	handoff: S16,
	'key-notes': S17,
};
