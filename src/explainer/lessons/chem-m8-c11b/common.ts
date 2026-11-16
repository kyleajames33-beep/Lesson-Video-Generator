// C8-11b (proton NMR): measured lesson lookups and the two worded questions (stem and demands as an exam prints them).
// Lesson key m8c11b.
import lesson from '../../../../docs/production/claude-pm/lessons/m8c11b/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('C8-11b scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

export const Q1_STEM = [blk('Predict the ¹H NMR spectrum of methyl propanoate, CH₃CH₂COOCH₃.')];
export const Q1_DEM = [blk('State the number of signals, their relative areas and the splitting of each signal. Justify your answer.', false, 600)];
export const Q2_STEM = [blk('A compound with molecular formula C₅H₁₀O is one of: pentan-2-one, pentan-3-one, pentanal, 3-methylbutan-2-one. Its ¹H NMR spectrum shows two signals: a triplet at 1.05 ppm with relative area 3, and a quartet at 2.44 ppm with relative area 2. (A CH₂ next to a C=O group appears at about 2.0 to 2.7 ppm.)')];
export const Q2_DEM = [blk('Identify the compound. Justify your answer using the number of signals, the relative areas and the splitting.', false, 600)];
