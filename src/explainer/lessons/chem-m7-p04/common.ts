// M7 P04 (alcohol oxidation practical) shared pieces: measured lesson lookups and the plates. New (brief 110, alpha boxes
// measured 30 Oct, PIL alpha > 20, identical): the water-bath pair, four tubes in a beaker on a hotplate (before: all
// orange; after: tubes 1 and 2 green), drawn in one box so they cross-fade in place. Plate pixels: tube centres x 954,
// 1128, 1302, 1476; tube rims y 174; liquid y 840; thermometer bulb (1488, 978); hotplate dial (1194, 1260). Reused: the
// dichromate pair (C08a), the reflux and distillation set-ups (C06), the Tollens' and Fehling's pairs (C08b), the blue
// litmus strip (C09) and the red-ended strip (M6), the waste bottle and glasses (M5 P01) and the fume cupboard (P01).
import lesson from '../../../../docs/production/claude-pm/lessons/m7p04c/measured/lesson.json';
import type {CueScene} from '../../cues';
import {LITMUS, mk} from '../chem-m6-c01/assets';
import {DICH} from '../chem-m7-c08a/common';
import {DISTIL, REFLUX} from '../chem-m7-c06/common';
import {FEHL, TOLL} from '../chem-m7-c08b/common';
import {LIT} from '../chem-m7-c09/common';
import {GLASSES, WASTE} from '../chem-m5-p01/assets';
import {HOOD} from '../chem-m7-p01/common';

export {Heading} from '../chem-m5-c03/common';
export {DICH, DISTIL, REFLUX, FEHL, TOLL, GLASSES, WASTE, HOOD};
/** Litmus on a white tile: blue strip unchanged, and the same strip turned red at one end (aligned pair). */
export const LITM = {blue: LIT.blue, redEnd: LITMUS.blue};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 P04 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const BB: [number, number, number, number] = [620, 161, 1779, 1439];
export const BATH = {before: mk('m7-oxidation-water-bath-before-v1.png', [2400, 1600], BB), after: mk('m7-oxidation-water-bath-after-v1.png', [2400, 1600], BB)};
export const BP = {tubes: [954, 1128, 1302, 1476], rim: 174, liquid: 840, thermo: [1488, 978] as [number, number], dial: [1194, 1260] as [number, number]};
/** Distillation plate pixels: flask liquid (543, 1080), still head (548, 720), thermometer top (548, 520), condenser
 *  (825, 787) to (1400, 975), receiver liquid (1550, 1362). Reflux plate: flask (1000, 1300), condenser x 1012, y 212
 *  to 925. */
export const DP = {flask: [543, 1080], head: [548, 720], thermo: [548, 560], c0: [825, 787], c1: [1400, 975], drip: [1530, 1090], recv: [1550, 1362]} as const;
export const RP = {flask: [1000, 1270], top: [1012, 560]} as const;
