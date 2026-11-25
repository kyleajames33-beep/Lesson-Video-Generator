// Scene map for phys-y12-m6-v14 (16 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09, S10} from './s2';
import {S11, S12, S13, S14, S15, S16} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	efficiency: S02,
	'copper-heating': S03,
	'eddy-currents': S04,
	laminations: S05,
	hysteresis: S06,
	'flux-leakage': S07,
	'loss-fix-pairs': S08,
	'memory-aid': S09,
	judgement: S10,
	'attempt-1': S11,
	'feedback-1': S12,
	'attempt-2': S13,
	'feedback-2': S14,
	handoff: S15,
	'key-notes': S16,
};
