// B8-11 (judging an epidemiological study: Doll and Hill): measured lesson lookups and the two worded questions (stem
// and demand as an exam prints them). Lesson key m8b11.
import lesson from '../../../../docs/production/claude-pm/lessons/m8b11/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('B8-11 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- Q1: an unseen case-control study ----------
export const Q1_STEM = [blk('Researchers identified 300 adults with bladder cancer and 600 adults without bladder cancer, from the same hospitals and matched for age and sex. All participants completed an interview about how often they had used permanent hair dye over the previous 20 years.')];
export const Q1_DEM = [blk('Evaluate the method used in this study. (4 marks)', false, 600)];

// ---------- Q2: judging a benefit ----------
export const Q2_STEM = [blk('Epidemiological studies in the 1980s and 1990s found that low folate intake around the time of conception was associated with a higher risk of neural tube defects (the neural tube is the early structure that becomes the brain and spinal cord). The neural tube closes in the first four weeks of pregnancy. From 2009, Australia required non-organic wheat flour for bread-making to contain folic acid. Afterwards, the rate of neural tube defects fell. The largest falls were in the groups with the highest rates before fortification.')];
export const Q2_DEM = [blk('Evaluate the benefit of these epidemiological studies. (4 marks)', false, 600)];

// ---------- data ----------
/** Doll and Hill 1954, Table IV: age-standardised lung-cancer deaths per 1,000 men aged 35+ per year. */
export const T54: {lab: string; v: number}[] = [{lab: 'none', v: 0}, {lab: '1 to 14', v: 0.48}, {lab: '15 to 24', v: 0.67}, {lab: '25 or more', v: 1.14}];
