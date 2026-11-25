// Scene map for phys-y12-m8-v18 (19 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05, S06} from './s1';
import {S07, S08, S09, S10, S11, S12, S13} from './s2';
import {S14, S15, S16, S17, S18, S19} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'fission-event': S02,
	'energy-source': S03,
	'worked-energy': S04,
	'energy-destination': S05,
	chain: S06,
	'multiplication-factor': S07,
	'neutron-losses': S08,
	moderator: S09,
	'control-rods': S10,
	uncontrolled: S11,
	opal: S12,
	'memory-aid': S13,
	'attempt-1': S14,
	'feedback-1': S15,
	'attempt-2': S16,
	'feedback-2': S17,
	'handoff-v19': S18,
	'key-notes': S19,
};
