// B8-16 (visual disorders): measured lesson lookups and the two worded questions (stem and demands as an exam
// prints them). Lesson key m8b16.
import lesson from '../../../../docs/production/claude-pm/lessons/m8b16/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('B8-16 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- Q1: a changing prescription ----------
export const Q1_STEM = [blk('A 19-year-old can read their phone clearly, but lecture slides look blurred from the back of the room. Their prescription has become stronger each year for the past three years.')];
export const Q1_DEM = [
	blk('(a) Identify the disorder and explain its cause in terms of where light is focused. (2 marks)', false, 600),
	blk('(b) Explain why glasses or contact lenses are more suitable than laser surgery for this person at present. (3 marks)', true, 600),
];

// ---------- Q2: a cloudy lens ----------
export const Q2_STEM = [blk('A 74-year-old has gradually dim, cloudy vision in one eye and glare from car headlights at night. New glasses have not improved their vision. An eye examination finds a cloudy lens and a healthy retina.')];
export const Q2_DEM = [blk('Evaluate the use of lens replacement surgery for this person. (5 marks)', false, 600)];
