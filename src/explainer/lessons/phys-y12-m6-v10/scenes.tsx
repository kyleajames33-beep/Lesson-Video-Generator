// Scene map for phys-y12-m6-v10 (14 scenes, ids from the lesson.json).
import type React from 'react';
import {S01, S02, S03, S04, S05} from './s1';
import {S06, S07, S08} from './s2';
import {S09, S10, S11, S12, S13, S14} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: S01,
	'changing-flux': S02,
	'flux-linkage': S03,
	'faraday-law': S04,
	graph: S05,
	'worked-example': S06,
	'sliding-rod': S07,
	'what-changes': S08,
	'attempt-1': S09,
	'feedback-1': S10,
	'attempt-2': S11,
	'feedback-2': S12,
	handoff: S13,
	'key-notes': S14,
};
