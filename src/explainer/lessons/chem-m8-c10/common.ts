// C8-10 (infrared): measured lesson lookups and the two worded questions (stem and demands as an exam prints them).
// Lesson key m8c10.
import lesson from '../../../../docs/production/claude-pm/lessons/m8c10/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('C8-10 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

export const Q1_STEM = [blk('Compound X is either butanoic acid or ethyl ethanoate. Its infrared spectrum, shown, has absorptions near 2980 cm⁻¹, a strong sharp absorption at 1740 cm⁻¹, strong absorptions at 1240 cm⁻¹ and 1050 cm⁻¹, and no broad absorption between 2500 and 3550 cm⁻¹.')];
export const Q1_DEM = [blk('Identify compound X. Justify your answer with reference to the spectrum.', false, 600)];
export const Q2_STEM = [blk('Liquid Z is known to be either an alcohol or an aldehyde. Z turns warm acidified potassium dichromate from orange to green. The infrared spectrum of Z, shown, has a broad absorption centred at 3330 cm⁻¹, absorptions near 2960 cm⁻¹, a strong absorption at 1070 cm⁻¹, and no absorption between 1680 and 1750 cm⁻¹.')];
export const Q2_DEM = [blk('Use the infrared data to identify the type of compound Z is, and explain why the dichromate result alone could not.', false, 600)];
