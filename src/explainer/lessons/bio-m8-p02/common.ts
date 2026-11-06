// P8-02 Biology (plant water loss practical): measured lesson lookups and the two worded questions (stem and demands as
// an exam prints them). Lesson key m8p02b (the "b" separates it from Chemistry's chem-m8-p02).
import lesson from '../../../../docs/production/claude-pm/lessons/m8p02b/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('P8-02 Biology scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- Q1: a bag over the leaves ----------
export const Q1_STEM = [blk('A student used a potometer to measure the rate of water uptake by one leafy shoot in the same room, first with no bag, then with a clear plastic bag placed over its leaves and sealed around the stem below them. Without the bag, the bubble moved 30 mm in 6 minutes. With the bag, the bubble moved 12 mm in 6 minutes.')];
export const Q1_DEM = [
	blk('(a) Calculate the rate of water uptake in each condition. (2 marks)', false, 600),
	blk('(b) Explain the difference between the two rates. (2 marks)', true, 600),
];

// ---------- Q2: a flawed method ----------
export const Q2_STEM = [blk('A student cut a leafy shoot in the air and pushed its stem into a potometer. She measured the rate of water uptake with a fan blowing on the shoot on a warm Monday afternoon, then in still air on a cool Tuesday morning. She concluded that wind increases the rate of transpiration.')];
export const Q2_DEM = [blk('Identify TWO problems with her method and propose a change that fixes each problem. (4 marks)', false, 600)];

/** Example data (labelled on screen): mm per minute over 5-minute readings. */
export const STILL = [4.2, 3.8, 4.0], FAN = [9.4, 9.2, 9.6];
export const STEPS = ['1 why it works', '2 the potometer', '3 set up', '4 plan', '5 measure', '6 what it shows', '7 stay safe'];
