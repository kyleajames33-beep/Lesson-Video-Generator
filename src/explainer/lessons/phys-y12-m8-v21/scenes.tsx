// Scene map for phys-y12-m8-v21 (19 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06} from './s1';
import {S07, S08, S09, S10, S11, S12, S13} from './s2';
import {S14, S15, S16, S17, S18, S19} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'two-groups': S02,
	quarks: S03,
	leptons: S04,
	antimatter: S05,
	'hadron-charges': S06,
	'four-forces': S07,
	carriers: S08,
	range: S09,
	'weak-flavour': S10,
	higgs: S11,
	incomplete: S12,
	'memory-aid': S13,
	'attempt-1': S14,
	'feedback-1': S15,
	'attempt-2': S16,
	'feedback-2': S17,
	'handoff-v22': S18,
	'key-notes': S19,
};
