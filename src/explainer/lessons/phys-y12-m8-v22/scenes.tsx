// Scene map for phys-y12-m8-v22 (21 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06, S07} from './s1';
import {S08, S09, S10, S11, S12, S13, S14} from './s2';
import {S15, S16, S17, S18, S19, S20, S21} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'why-energy': S02,
	'electric-push': S03,
	linac: S04,
	'ring-steer': S05,
	'field-ramp': S06,
	'worked-booster': S07,
	'synchrotron-light': S08,
	collider: S09,
	'detector-layers': S10,
	signatures: S11,
	testing: S12,
	limits: S13,
	'memory-aid': S14,
	'attempt-1': S15,
	'feedback-1': S16,
	'attempt-2': S17,
	'feedback-2': S18,
	'key-notes': S19,
	'course-end': S20,
	'end-hold': S21,
};
