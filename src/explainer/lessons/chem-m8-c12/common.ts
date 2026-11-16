// C8-12 (combining spectra): measured lesson lookups and the two worded questions (stem and demands as an exam prints them).
// Lesson key m8c12.
import lesson from '../../../../docs/production/claude-pm/lessons/m8c12/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('C8-12 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

export const Q1_STEM = [blk('An organic compound contains carbon, hydrogen and chlorine only. Its mass spectrum shows molecular ion peaks at m/z = 78 and m/z = 80, with heights in a ratio of about 3 : 1. Its ¹³C NMR spectrum shows two peaks, at 54 ppm and 27 ppm. Its ¹H NMR spectrum shows a septet (seven lines) at 4.2 ppm with relative area 1, and a doublet at 1.5 ppm with relative area 6.')];
export const Q1_DEM = [blk('Identify the compound. Justify your answer with reference to each spectrum.', false, 600)];
export const Q2_STEM = [blk('Compound Z has the molecular formula C₅H₁₀O₂. It is one of: pentanoic acid, methyl butanoate, propyl ethanoate, ethyl propanoate. Its infrared spectrum shows a strong absorption at 1740 cm⁻¹ and no broad absorption between 2500 and 3550 cm⁻¹. Its ¹H NMR spectrum shows four signals: 4.12 ppm (quartet, relative area 2), 2.32 ppm (quartet, relative area 2), 1.26 ppm (triplet, relative area 3) and 1.14 ppm (triplet, relative area 3). (A CH₂ bonded to the oxygen of an ester appears at about 4.0 to 4.2 ppm. A CH₂ next to a C=O group appears at about 2.0 to 2.7 ppm.)')];
export const Q2_DEM = [blk('Identify compound Z. Justify your answer using both spectra.', false, 600)];
