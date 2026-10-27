// M7 P03 shared pieces: measured lesson lookups and the plates. Alpha boxes measured 27 Oct (PIL, alpha > 20). Brief 103:
// the spirit-burner calorimeter (base, sooty, shielded: a matched set drawn in the union of their alpha boxes so they
// cross-fade in place) and the burner on a balance. Plate pixels on the set: flame (1117, 1268), can base (1117, 1160),
// can walls x 950 and 1300 (y 600 to 1170), lid (1125, 612), thermometer top (1270, 262), clamp (850, 800), shield left
// panel (840, 1300), cap on the mat (1350, 1600), burner (1110, 1500). Balance display centre (712, 1375). Reused: the
// measuring cylinder (M6 P02), the ethanol bottle (C02), glasses and waste bottle (M5 P01), the fume cupboard (P01).
import lesson from '../../../../docs/production/claude-pm/lessons/m7p03c/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {BOTTLE} from '../chem-m7-c02/common';
import {GLASSES, WASTE} from '../chem-m5-p01/assets';
import {HOOD} from '../chem-m7-p01/common';
import {CYL} from '../chem-m6-p02/assets';

export {Heading} from '../chem-m5-c03/common';
export {BOTTLE, GLASSES, WASTE, HOOD, CYL};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 P03 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
const SB: [number, number, number, number] = [463, 212, 1544, 1756];
export const SET = {base: mk('m7-spirit-burner-calorimeter-v1.png', N2, SB), sooty: mk('m7-spirit-burner-calorimeter-sooty-v1.png', N2, SB), shield: mk('m7-spirit-burner-calorimeter-shield-v1.png', N2, SB)};
export const BAL = mk('m7-spirit-burner-on-balance-v1.png', N2, [200, 312, 1800, 1688]);
export const SP = {flame: [1117, 1268], base: [1117, 1160], wallL: [950, 880], wallR: [1300, 880], lid: [1125, 612], thermo: [1270, 270], clamp: [850, 800], shield: [840, 1300], cap: [1350, 1600], burner: [1110, 1500], water: [1180, 900], mat: [1420, 1690]} as const;
