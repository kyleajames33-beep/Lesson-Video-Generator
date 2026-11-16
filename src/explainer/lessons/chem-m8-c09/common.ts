// C8-09 (mass spectrometry): measured lesson lookups and the two worded questions (stem and demands as an exam prints
// them). Lesson key m8c09.
import lesson from '../../../../docs/production/claude-pm/lessons/m8c09/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('C8-09 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- Q1: pentan-2-one or pentan-3-one ----------
export const Q1_STEM = [blk('The mass spectrum shown is of one of two isomers, pentan-2-one or pentan-3-one (molar mass 86 g mol⁻¹). The base peak is at m/z = 57 and there is a strong peak at m/z = 29.')];
export const Q1_DEM = [blk('Identify the compound. Justify your answer with reference to the fragments.', false, 600)];

// ---------- Q2: bromine ----------
export const Q2_STEM = [blk('The mass spectrum of an organic compound shows two peaks of about equal height at m/z = 94 and m/z = 96, and a peak at m/z = 15. Naturally occurring bromine is about 51% bromine-79 and 49% bromine-81.')];
export const Q2_DEM = [blk('Identify the molecular ion peak, explain the peak at m/z = 96, and identify the fragment responsible for the peak at m/z = 15.', false, 600)];
