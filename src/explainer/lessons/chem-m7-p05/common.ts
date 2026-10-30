// M7 P05 shared pieces: measured lesson lookups and the plates. Reused (alpha boxes as measured by their first users):
// the ester fruit (C09), the reflux apparatus and school distillation set-up (C06), the separating funnel pair (C10;
// cloudy and clear share one box, so they cross-fade in place), the analytical balance (M6 P06; display quad centre
// about (928, 1384)), glasses, gloves and waste bottle (M5 P01) and the fume cupboard (P01). New (brief 109): the
// drying flask, alpha box [631, 450, 1351, 1550] measured 30 Oct (PIL, alpha > 20). Plate pixels: reflux flask liquid
// (1000, 1330), flask neck (1000, 1215), condenser top (1010, 225), condenser body (1012, 880), mantle (1000, 1500);
// funnel upper layer (1000, 760), lower layer (1000, 950), stopper (1000, 240); drying flask liquid (1000, 1290),
// powder (900, 1450), stopper (1000, 520).
import lesson from '../../../../docs/production/claude-pm/lessons/m7p05c/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {DISTIL, REFLUX} from '../chem-m7-c06/common';
import {FRUIT} from '../chem-m7-c09/common';
import {FUNNEL} from '../chem-m7-c10/common';
import {BALANCE} from '../chem-m6-p06/assets';
import {GLASSES, GLOVES, WASTE} from '../chem-m5-p01/assets';
import {HOOD} from '../chem-m7-p01/common';

export {Heading} from '../chem-m5-c03/common';
export {DISTIL, REFLUX, FRUIT, FUNNEL, BALANCE, GLASSES, GLOVES, WASTE, HOOD};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 P05 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

export const DRY = mk('m7-ester-drying-flask-v1.png', [2000, 2000], [631, 450, 1351, 1550]);
export const RP = {liq: [1000, 1330], neck: [1000, 1215], ctop: [1010, 225], cbody: [1012, 880], mantle: [1000, 1500]} as const;
export const FP = {up: [1000, 760], lo: [1000, 950], stop: [1000, 240]} as const;
export const DP = {liq: [1000, 1290], powder: [900, 1450], stop: [1000, 520]} as const;
export const BALD: [number, number] = [928, 1384];
