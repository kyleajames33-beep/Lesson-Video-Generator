// Scene map for phys-y12-m7-v14 (17 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06} from './s1';
import {S07, S08, S09, S10, S11} from './s2';
import {S12, S13, S14, S15, S16, S17} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'contraction-proper-length': S02,
	derivation: S03,
	'measure-moving-length': S04,
	'not-crushed': S05,
	perpendicular: S06,
	'worked-ship': S07,
	'worked-docking': S08,
	'muons-own-frame': S09,
	'one-effect-per-frame': S10,
	'memory-aid': S11,
	'attempt-1': S12,
	'feedback-1': S13,
	'attempt-2': S14,
	'feedback-2': S15,
	handoff: S16,
	'key-notes': S17,
};
