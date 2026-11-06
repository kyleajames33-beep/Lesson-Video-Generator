// M8 P05 (testing unknown organic liquids practical) shared pieces: measured lesson lookups and the plates. Alpha boxes
// measured 7 Nov (PIL, alpha > 20) from the files in public/assets/chemistry/.
// - Water-bath pair (2400 x 1600, brief 110): one box (620, 161, 1779, 1439) for both states, so the after plate
//   cross-fades in place. Tube centres (natural x) 955, 1129, 1303, 1477; liquid y 770 to 897; tube mouths near y 300.
// - p02 bromine set: the known (two colourless layers), the blank (bromine water, same dilution) and the unknown position
//   (orange) are one tube drawing; drawn on their union box (818, 200, 1182, 1800).
// - The carbonate pair, the dichromate pair, the c08 v2 bromine pair (thumbnails), the limewater pair, the dropper bottle
//   and the fume cupboard come from chem-m8-c08's common (read-only).
import lesson from '../../../../docs/production/claude-pm/lessons/m8p05/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {BR, CARB, DBOT, DBOT_A, DICH, FUME, LIME, LIME_A, RK_A} from '../chem-m8-c08/common';
import {GLASSES, GLOVES, WASTE, WASTE_LABEL} from '../chem-m8-p03/common';

export {Heading} from '../chem-m5-c03/common';
export {BR, CARB, DBOT, DBOT_A, DICH, FUME, LIME, LIME_A, RK_A, GLASSES, GLOVES, WASTE, WASTE_LABEL};
export type {PDef};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 P05 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000], N4: [number, number] = [2048, 2048];
const BATH_B: [number, number, number, number] = [620, 161, 1779, 1439];
export const BATH = {before: mk('m7-oxidation-water-bath-before-v1.png', [2400, 1600], BATH_B), after: mk('m7-oxidation-water-bath-after-v1.png', [2400, 1600], BATH_B)};
export const BATH_A = {tubes: [955, 1129, 1303, 1477], liquid: 835, mouth: 300, foot: 1439};
const BRT: [number, number, number, number] = [818, 200, 1182, 1800];
export const P02 = {known: mk('m7-bromine-layers-colourless-v1.png', N2, BRT), blank: mk('m7-bromine-water-control-v1.png', N2, BRT), unk: mk('m7-bromine-water-orange-v1.png', N2, BRT)};
export const TILE = mk('m6-white-tile-v1.png', N4, [164, 374, 1884, 1674]);

export const PLATES: PDef[] = [BATH.before, BATH.after, P02.known, P02.blank, P02.unk, TILE, BR.orange, BR.clear, CARB.before, CARB.fizz, DICH.orange, DICH.green, LIME.clear, LIME.milky, DBOT, FUME, GLASSES, GLOVES, WASTE];
void DBOT_A; void LIME_A; void RK_A; void WASTE_LABEL;
