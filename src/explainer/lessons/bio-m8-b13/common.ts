// B8-13 (prevention campaigns): measured lesson lookups and the two worded questions (stem and demands as an exam
// prints them). Lesson key m8b13.
import lesson from '../../../../docs/production/claude-pm/lessons/m8b13/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('B8-13 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- Q1: a school shade policy ----------
export const Q1_STEM = [blk('A school built shade sails over its playground and made a broad-brimmed hat part of its uniform. Over one school year, independent observers recorded more students in shade at lunchtime, and personal UV meters worn by a sample of students recorded 40% less UV exposure during school hours than in the year before.')];
export const Q1_DEM = [blk('Evaluate the effectiveness of this policy as a strategy for preventing melanoma. (5 marks)', false, 600)];

// ---------- Q2: improve a campaign ----------
export const Q2_STEM = [blk('A local council ran a six-month online campaign about type 2 diabetes. A survey afterwards showed residents knew more about its risk factors, but measured physical activity did not change. Many residents work long or irregular shifts, and few streets in the area have footpaths.')];
export const Q2_DEM = [blk('Propose TWO changes that would make this prevention strategy more effective, and a way to measure its success. Justify each part. (5 marks)', false, 600)];
