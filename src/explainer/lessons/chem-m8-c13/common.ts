// C8-13 (designing a synthesis: aspirin): measured lesson lookups and the two worded questions (stem and demands as an exam
// prints them). Lesson key m8c13.
import lesson from '../../../../docs/production/claude-pm/lessons/m8c13/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('C8-13 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- Q1: biodiesel ----------
export const Q1_STEM = [blk('Biodiesel is made by reacting a vegetable oil (a triglyceride) with methanol, using a sodium hydroxide catalyst. The reaction is reversible: triglyceride + 3 methanol ⇌ 3 biodiesel molecules + glycerol. A plant uses about twice the amount of methanol shown in the equation. After the reaction, the unreacted methanol is recovered by distillation and reused. Methanol is toxic and flammable.')];
export const Q1_DEM = [blk('Explain why the plant uses excess methanol, and why it recovers the unreacted methanol. (3 marks)', false, 600)];

// ---------- Q2: fuel ethanol, two routes ----------
export const Q2_STEM = [blk('A company in Queensland, close to sugar-cane farms and mills, plans to produce ethanol for fuel. It is considering two routes. Route 1, hydration of ethene: ethene made from crude oil reacts with steam over a phosphoric acid catalyst at about 300 °C and 60 to 70 atm; the reaction is reversible; the process runs continuously; ethanol is separated from water and unreacted gas is recycled. Route 2, fermentation: yeast ferments sugar from cane molasses at about 30 to 35 °C without oxygen; each batch takes days and stops at about 15% ethanol, so the ethanol must be distilled, which uses energy; sugar mills can burn cane waste to supply this energy; the carbon dioxide released is taken up again by the next crop of cane as it grows.')];
export const Q2_DEM = [blk('Evaluate the two routes for this company. (7 marks)', false, 600)];
