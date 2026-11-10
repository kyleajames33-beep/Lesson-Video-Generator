// Scene map for math-a12-d16 Revision 4 (14 scenes, ids from the measured lesson.json).
import type React from 'react';
import {S01, S02} from './s1';
import {S03, S04, S05} from './s2';
import {S06, S07, S08} from './s3';
import {S09, S10, S11, S12} from './s4';
import {S13, S14} from './s5';

export const SCENES: Record<string, React.FC> = {
	'scene-01': S01,
	'scene-02': S02,
	'scene-03': S03,
	'scene-04': S04,
	'scene-05': S05,
	'scene-06': S06,
	'scene-07': S07,
	'scene-08': S08,
	'scene-09': S09,
	'scene-10': S10,
	'scene-11': S11,
	'scene-12': S12,
	'scene-13': S13,
	'scene-14': S14,
};
