// M8 C03b shared pieces: measured lesson lookups and the plates (alpha boxes measured 31 Oct, PIL alpha > 20). Reuses
// C03a's rack set (one box, 568,200..1432,1800; the brief 114 AgBr, AgI, Ag3PO4 and acetate tubes share it), the
// hook bottle and its label anchor; the M6 C01 limewater pair, litmus pair and vinegar bottle; the M8 C02 funnel.
// - Limewater pair: delivery tube inlet at natural (532, 210).
// - The FeCl3 bottle: the plain amber bottle (box 613,160..1387,1840) with a coded label.
import lesson from '../../../../docs/production/claude-pm/lessons/m8c03b/measured/lesson.json';
import type {CueScene} from '../../cues';
import {LIME, LITMUS, VINEGAR, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {FUNNEL} from '../chem-m8-c02/common';
import {BOTTLE, LABEL_A, RACK, TUBE_A} from '../chem-m8-c03a/common';

export {Heading} from '../chem-m5-c03/common';
export {BOTTLE, FUNNEL, LABEL_A, LIME, LITMUS, TUBE_A, VINEGAR};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 C03b scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
const RACK_B: [number, number, number, number] = [568, 200, 1432, 1800];
export const TUBES = {
	...RACK,
	agbr: mk('m8-ppt-agbr-cream-v2.png', N2, RACK_B), agi: mk('m8-ppt-agi-pale-yellow-v2.png', N2, RACK_B), ag3po4: mk('m8-ppt-ag3po4-yellow-v1.png', N2, RACK_B),
	acetate: mk('m8-acetate-fecl3-red-brown-v1.png', N2, RACK_B),
};
export const LIME_IN: [number, number] = [532, 210];
export const FE_BOTTLE = mk('m5x-bottle-fe-v1.png', N2, [613, 160, 1387, 1840]);

export const PLATES: PDef[] = [TUBES.clear, TUBES.agcl, TUBES.baso4, TUBES.cuoh2, TUBES.agbr, TUBES.agi, TUBES.ag3po4, TUBES.acetate, BOTTLE, LIME.clear, LIME.milky, LITMUS.red, LITMUS.blue, VINEGAR, FE_BOTTLE, FUNNEL];
