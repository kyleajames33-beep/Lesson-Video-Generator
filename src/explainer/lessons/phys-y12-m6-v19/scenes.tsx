// Scene map for phys-y12-m6-v19 (16 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08, S09, S10} from './s2';
import {S11, S12, S13, S14, S15, S16} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'rotating-field': S02,
	'cage-rotor': S03,
	'induced-currents': S04,
	'drag-along': S05,
	'why-lag': S06,
	'heavier-load': S07,
	'typical-numbers': S08,
	'sailing-picture': S09,
	'versus-dc': S10,
	'attempt-1': S11,
	'feedback-1': S12,
	'attempt-2': S13,
	'feedback-2': S14,
	handoff: S15,
	'key-notes': S16,
};
