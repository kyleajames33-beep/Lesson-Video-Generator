// M8 C06 shared pieces: measured lesson lookups and the plates. Alpha boxes measured 6 Nov (PIL, alpha > 20).
// - Winkler bottle set (m8-winkler-bottle-clear, -brown, -iodine; 2000 x 2000): drawn on the union box
//   (639, 199, 1362, 1801) so the three states cross-fade in place. Body inside x 670..1330, y 640..1770; neck x 830..1170,
//   y 330..600; the shoulder where a trapped bubble sits is near (1190, 660); the stopper top near y 210.
// - Iodine flask set (m8-iodine-flask-yellow, -blue, -clear; 2048 x 1700): one box (564, 140, 1483, 1562), aligned with the
//   Mohr flask set, so it sits in the M8 C01 burette rig and cross-fades in place.
// - BOD incubator (2000): box (296, 200, 1706, 1801); solid door, front face x 760..1690, y 520..1640.
// - Reused: the lake set and DO meter (M8 C05), the burette on its stand (M6 C12), the river sampling bottle, and the
//   bromine water tube v2 (the rack C08 uses; the next video's preview).
import lesson from '../../../../docs/production/claude-pm/lessons/m8c06/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {BURETTE, BUR_G, TILE} from '../chem-m6-c12/assets';
import {BOTTLE1, DOM, LAKE, LAKE_A} from '../chem-m8-c05/common';

export {Heading} from '../chem-m5-c03/common';
export {BURETTE, BUR_G, TILE, BOTTLE1, DOM, LAKE, LAKE_A};
export type {PDef};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 C06 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const NB = ' ';

const N2: [number, number] = [2000, 2000];
const WB_B: [number, number, number, number] = [639, 199, 1362, 1801];
export const WB = {clear: mk('m8-winkler-bottle-clear-v1.png', N2, WB_B), brown: mk('m8-winkler-bottle-brown-v1.png', N2, WB_B), iodine: mk('m8-winkler-bottle-iodine-v1.png', N2, WB_B)};
export const WB_A = {bx0: 670, bx1: 1330, by0: 640, by1: 1770, nx0: 830, nx1: 1170, ny0: 330, shoulder: [1190, 660] as [number, number], top: 210};
const IF_B: [number, number, number, number] = [564, 140, 1483, 1562];
export const IFL = {yellow: mk('m8-iodine-flask-yellow-v1.png', [2048, 1700], IF_B), blue: mk('m8-iodine-flask-blue-v1.png', [2048, 1700], IF_B), clear: mk('m8-iodine-flask-clear-v1.png', [2048, 1700], IF_B)};
export const INCUB = mk('m8-bod-incubator-v1.png', N2, [296, 200, 1706, 1801]);
export const INCUB_A = {door: [760, 520, 1690, 1640] as [number, number, number, number]};
export const BROM = mk('m8-bromine-water-orange-v2.png', N2, [389, 220, 1610, 1780]);

export const PLATES: PDef[] = [WB.clear, WB.brown, WB.iodine, IFL.yellow, IFL.blue, IFL.clear, INCUB, BROM, LAKE.clear, LAKE.crash, DOM, BURETTE, TILE, BOTTLE1];
