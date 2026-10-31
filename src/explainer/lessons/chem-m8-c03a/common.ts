// M8 C03a shared pieces: measured lesson lookups and the plates (alpha boxes measured 31 Oct, PIL alpha > 20).
// - Rack set (m5x precipitation set plus the brief 114 m8 additions): all drawn on one box, 568,200..1432,1800 (the
//   delivered boxes differ by at most 1 px), so tubes cross-fade in place. Tube anchors (natural px): centre x 998,
//   mouth y 210, liquid surface y 590, floor y 1640, inner liquid x 905..1090.
// - Flame set (brief 114 v2 copies, plus the brief 117 blue flame, which sits on the same burner anchor): drawn on the
//   union box 662,178..1343,1831. Flame centre x 969; burner mouth y 766; flame mid y 550.
// - Amber reagent bottle with a blank cream label (label 631..1369 x 946..1486); the separate Bunsen burner (scene 2
//   panel); the copper ammonia and iron thiocyanate tubes in wire stands (never cross-faded with rack tubes).
import lesson from '../../../../docs/production/claude-pm/lessons/m8c03a/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';

export {Heading} from '../chem-m5-c03/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 C03a scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
const RACK_B: [number, number, number, number] = [568, 200, 1432, 1800];
const rk = (n: string) => mk(n, N2, RACK_B);
export const RACK = {
	clear: rk('m5x-no-ppt-clear-v1.png'), agcl: rk('m5x-ppt-agcl-white-v1.png'), baso4: rk('m5x-ppt-baso4-white-v1.png'), cuoh2: rk('m5x-ppt-cuoh2-blue-v1.png'),
	feoh3: rk('m5x-ppt-feoh3-brown-v1.png'), pbi2: rk('m5x-ppt-pbi2-yellow-v1.png'), feoh2: rk('m8-ppt-feoh2-green-v2.png'), brown: rk('m8-ppt-feoh2-browning-v1.png'),
	mgoh2: rk('m8-ppt-mgoh2-white-v1.png'),
};
export const TUBE_A = {cx: 998, mouth: 210, surf: 590, floor: 1640, l: 905, r: 1090};
const FLAME_B: [number, number, number, number] = [662, 178, 1343, 1831];
const fl = (n: string) => mk(n, N2, FLAME_B);
export const FLAME = {
	off: fl('m8-flame-test-off-v2.png'), blue: fl('m8-flame-blue-v2.png'), ba: fl('m8-flame-ba-pale-green-v2.png'), ca: fl('m8-flame-ca-brick-red-v2.png'),
	cu: fl('m8-flame-cu-blue-green-v2.png'), na: fl('m8-flame-na-yellow-v2.png'),
};
export const FLAME_A = {cx: 969, mouth: 766, mid: 550, tip: 181};
export const BOTTLE = mk('m5x-bottle-scn-v1.png', N2, [608, 160, 1391, 1840]);
export const LABEL_A = {cx: 1000, cy: 1216, l: 631, r: 1369, t: 946, b: 1486};
export const BUNSEN = mk('m5x-bunsen-burner-v1.png', N2, [687, 242, 1313, 1733]);
export const CU_DEEP = mk('c5-copper-tube-deep-v1.png', [1200, 1800], [410, 183, 790, 1617]);
export const FE_DEEP = mk('c3-iron-tube-deep-v1.png', [1280, 1792], [468, 209, 814, 1517]);

export const PLATES: PDef[] = [...Object.values(RACK), ...Object.values(FLAME), BOTTLE, BUNSEN, CU_DEEP, FE_DEEP];
