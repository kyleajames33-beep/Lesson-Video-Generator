// Scene map for phys-y12-m5-v23 (15 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09} from './s2';
import {S10, S11, S12, S13, S14, S15} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'energy-trade': S02,
	threshold: S03,
	'earth-value': S04,
	'escape-vs-orbit': S05,
	classify: S06,
	independence: S07,
	assumptions: S08,
	'memory-aid': S09,
	'attempt-1': S10,
	'feedback-1': S11,
	'attempt-2': S12,
	'feedback-2': S13,
	'module-bridge': S14,
	'key-notes': S15,
};
