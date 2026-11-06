// B8-07 (environmental exposure): measured lesson lookups and the two worded questions (stem, graph data and demands as
// an exam prints them). Lesson key m8b07.
import lesson from '../../../../docs/production/claude-pm/lessons/m8b07/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('B8-07 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- Q1: two trends, decades apart ----------
export const Q1_STEM = [blk('The graph shows illustrative trends for one population of adult men: the percentage who smoked, and the rate of new lung cancer cases (per 100 000 per year), from 1945 to 2020.')];
export const Q1_DEM = [
	blk('(a) Describe how the timing of the two trends differs. (2 marks)', false, 600),
	blk('(b) Explain this difference in timing. (2 marks)', true, 600),
];
/** Men who smoke (%), illustrative. */
export const SMOKE: [number, number][] = [[1945, 72], [1955, 66], [1965, 58], [1975, 43], [1985, 33], [1995, 27], [2005, 21], [2015, 16], [2020, 13]];
/** New lung cancer cases in men (per 100 000 per year), illustrative. */
export const LUNG: [number, number][] = [[1945, 25], [1955, 45], [1965, 65], [1975, 80], [1982, 84], [1990, 75], [2000, 62], [2010, 52], [2020, 44]];

// ---------- Q2: a named UV case ----------
export const Q2_STEM = [blk('A gardener has worked outdoors in Queensland for 30 years without sun protection. A co-worker with similar exposure has not developed skin cancer.')];
export const Q2_DEM = [
	blk('(a) Explain how repeated UV exposure can increase the risk of melanoma. (3 marks)', false, 600),
	blk('(b) Explain why the co-worker may never develop melanoma. (2 marks)', true, 600),
];
