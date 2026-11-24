// Scene map for phys-y12-m5-v08 (17 scenes, ids from the measured lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09, S10, S11} from './s2';
import {S12, S13, S14, S15, S16, S17} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	prediction: S02,
	'fair-test': S03,
	measuring: S04,
	'risk-check': S05,
	repeats: S06,
	linearise: S07,
	'gradient-test': S08,
	'spread-or-shift': S09,
	'straight-not-proof': S10,
	'memory-aid': S11,
	'attempt-1': S12,
	'feedback-1': S13,
	'attempt-2': S14,
	'feedback-2': S15,
	handoff: S16,
	'key-notes': S17,
};
