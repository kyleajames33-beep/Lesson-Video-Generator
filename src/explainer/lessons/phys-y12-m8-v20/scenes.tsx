// Scene map for phys-y12-m8-v20 (20 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06, S07} from './s1';
import {S08, S09, S10, S11, S12, S13, S14} from './s2';
import {S15, S16, S17, S18, S19, S20} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	criterion: S02,
	probe: S03,
	observation: S04,
	inference: S05,
	'hadron-patterns': S06,
	'neutron-change': S07,
	'quark-charges': S08,
	'electron-contrast': S09,
	'positron-track': S10,
	'muon-pion': S11,
	neutrino: S12,
	'two-families': S13,
	'memory-aid': S14,
	'attempt-1': S15,
	'feedback-1': S16,
	'attempt-2': S17,
	'feedback-2': S18,
	'handoff-v21': S19,
	'key-notes': S20,
};
