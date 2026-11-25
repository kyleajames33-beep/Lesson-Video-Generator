// Scene map for phys-y12-m6-v16 (16 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09, S10} from './s2';
import {S11, S12, S13, S14, S15, S16} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	parts: S02,
	'force-pair': S03,
	'torque-formula': S04,
	'edge-face': S05,
	'worked-example': S06,
	rocking: S07,
	'split-ring': S08,
	'smoother-motors': S09,
	'memory-aid': S10,
	'attempt-1': S11,
	'feedback-1': S12,
	'attempt-2': S13,
	'feedback-2': S14,
	handoff: S15,
	'key-notes': S16,
};
