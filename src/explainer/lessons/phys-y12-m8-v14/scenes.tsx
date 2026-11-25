// Scene map for phys-y12-m8-v14 (18 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06} from './s1';
import {S07, S08, S09, S10, S11, S12} from './s2';
import {S13, S14, S15, S16, S17, S18} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'why-unstable': S02,
	alpha: S03,
	'beta-minus': S04,
	antineutrino: S05,
	'beta-plus': S06,
	gamma: S07,
	ionisation: S08,
	penetration: S09,
	deflection: S10,
	'spontaneous-artificial': S11,
	'summary-table': S12,
	'attempt-1': S13,
	'feedback-1': S14,
	'attempt-2': S15,
	'feedback-2': S16,
	handoff: S17,
	'key-notes': S18,
};
