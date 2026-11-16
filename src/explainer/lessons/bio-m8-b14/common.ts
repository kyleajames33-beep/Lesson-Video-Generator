// B8-14 (genetic prevention): measured lesson lookups and the two worded questions (stem and demands as an exam
// prints them). Lesson key m8b14.
import lesson from '../../../../docs/production/claude-pm/lessons/m8b14/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('B8-14 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- Q1: two carriers of SMA ----------
export const Q1_STEM = [blk('Carrier screening shows that both members of a couple carry a variant for spinal muscular atrophy (SMA), an autosomal recessive condition.')];
export const Q1_DEM = [
	blk('(a) State the chance that each pregnancy is affected. (1 mark)', false, 600),
	blk('(b) Explain how preimplantation genetic testing (PGT) could reduce the chance of an affected child, and why it is not genetic engineering. (3 marks)', true, 600),
];

// ---------- Q2: Huntington's disease ----------
export const Q2_STEM = [blk("Huntington's disease is caused by a single dominant allele. Symptoms usually begin in adulthood, and no current treatment prevents them.")];
export const Q2_DEM = [
	blk("(a) Explain why newborn screening would not prevent Huntington's disease. (2 marks)", false, 600),
	blk("(b) Assess one genetic technology that could reduce the effect of Huntington's disease on a family. (3 marks)", true, 600),
];
