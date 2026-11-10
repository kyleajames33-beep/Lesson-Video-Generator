// Scene map for math-a12-d13 Revision 4 (13 scenes, ids from the measured lesson.json).
import type React from 'react';
import {S01, S02, S03} from './s1';
import {S04, S05, S06} from './s2';
import {S07, S08, S09, S10} from './s3';
import {S11, S12, S13} from './s4';

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
};
