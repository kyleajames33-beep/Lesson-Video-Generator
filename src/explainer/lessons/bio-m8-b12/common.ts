// B8-12 (managing type 2 diabetes): measured lesson lookups and the two worded questions (stem and demands as an exam
// prints them). Lesson key m8b12.
import lesson from '../../../../docs/production/claude-pm/lessons/m8b12/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('B8-12 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- Q1: a rising HbA1c ----------
export const Q1_STEM = [blk('A person with type 2 diabetes has used metformin and a physical activity plan for two years. Over the last 12 months, their HbA1c has risen from 7.0% to 8.4%. Their doctor suggests adding insulin.')];
export const Q1_DEM = [
	blk('(a) Explain what the HbA1c result shows. (2 marks)', false, 600),
	blk('(b) Assess whether insulin alone would fix the underlying problem. (3 marks)', true, 600),
];

// ---------- Q2: judging trial evidence ----------
export const Q2_STEM = [blk('In a trial, 600 adults with type 2 diabetes were randomly allocated to a new once-weekly injection or a placebo (a dummy injection) for 26 weeks. Mean HbA1c fell by 1.4 percentage points in the drug group and by 0.3 in the placebo group. 12% of the drug group stopped treatment because of nausea. The drug is not yet subsidised in Australia.')];
export const Q2_DEM = [blk('Evaluate this evidence for using the drug to manage type 2 diabetes. (5 marks)', false, 600)];
