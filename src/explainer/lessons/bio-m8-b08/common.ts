// B8-08 (nutrition and disease risk): measured lesson lookups and the two worded questions (stem, chart data and
// demands as an exam prints them). Lesson key m8b08.
import lesson from '../../../../docs/production/claude-pm/lessons/m8b08/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('B8-08 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- Q1: a teenager indoors ----------
export const Q1_STEM = [blk('A 14-year-old spends almost all daylight hours indoors. Blood tests show a low vitamin D level, and their gut is absorbing little calcium from food.')];
export const Q1_DEM = [blk('Using nutrient → change → effect, explain how this deficiency could affect the teenager’s bones. (3 marks)', true, 600)];

// ---------- Q2: reading the rates ----------
export const Q2_STEM = [blk('A study followed adults for several years and recorded new cases of type 2 diabetes.')];
export const Q2_DEM = [
	blk('(a) Identify TWO risk factors for type 2 diabetes shown by the data. (2 marks)', false, 600),
	blk('(b) Explain why the claim ‘Eating too much causes type 2 diabetes’ overstates what the data show. (2 marks)', true, 600),
];
/** New cases of type 2 diabetes per 1 000 adults per year (teaching data). */
export const BARS: {lab: string; v: number; ob: boolean; fh: boolean}[] = [
	{lab: 'healthy weight, no family history', v: 3, ob: false, fh: false},
	{lab: 'healthy weight, family history', v: 7, ob: false, fh: true},
	{lab: 'obesity, no family history', v: 15, ob: true, fh: false},
	{lab: 'obesity, family history', v: 30, ob: true, fh: true},
];
