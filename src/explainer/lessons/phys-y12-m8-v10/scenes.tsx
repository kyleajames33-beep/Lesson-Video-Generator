// Scene map for phys-y12-m8-v10 (21 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06, S07} from './s1';
import {S08, S09, S10, S11, S12, S13, S14} from './s2';
import {S15, S16, S17, S18, S19, S20, S21} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	radiating: S02,
	'spiral-stability': S03,
	'line-failure': S04,
	'rutherford-verdict': S05,
	'stationary-states': S06,
	'energy-levels': S07,
	'photon-postulate': S08,
	'failures-fixed': S09,
	'angular-momentum': S10,
	'bohr-success': S11,
	'limit-one-electron': S12,
	'limit-details': S13,
	'limit-hybrid': S14,
	'memory-aid': S15,
	'attempt-1': S16,
	'feedback-1': S17,
	'attempt-2': S18,
	'feedback-2': S19,
	handoff: S20,
	'key-notes': S21,
};
