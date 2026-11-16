// C8-11a (carbon-13 NMR): measured lesson lookups and the two worded questions (stem and demands as an exam prints them).
// Lesson key m8c11a.
import lesson from '../../../../docs/production/claude-pm/lessons/m8c11a/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('C8-11a scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

export const Q1_STEM = [blk('The four alcohols below all have the molecular formula C₄H₁₀O: butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, 2-methylpropan-2-ol. One of them gives a ¹³C NMR spectrum with two peaks, at 69 ppm and 31 ppm.')];
export const Q1_DEM = [blk('Identify the alcohol, and explain the number of peaks and their chemical shifts.', false, 600)];
export const Q2_STEM = [blk('A compound with molecular formula C₃H₆O₂ is either propanoic acid or methyl ethanoate. Its ¹³C NMR spectrum shows three peaks, at 171 ppm, 52 ppm and 21 ppm.')];
export const Q2_DEM = [blk('Identify the compound. Justify your answer using the ¹³C NMR chemical shift data on the data sheet.', false, 600)];
