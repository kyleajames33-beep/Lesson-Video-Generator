// Y11 Chem M1 V01 (classifying matter) shared pieces: measured lesson lookups, response holds and the plates.
// Alpha boxes measured 17 Nov 2026 (PIL, alpha > 20) from the real files in public/assets.
// - Gas jar (935 x 1682): box (138, 128, 779, 1524).
// - Iron lump (1600 square): box (160, 213, 1440, 1385).
// - Sulfur sample on a watch glass (1466 x 1073): box (250, 326, 1216, 788).
// - Glass of water (2000 square, biology): box (560, 220, 1440, 1779).
// - Watch glass of salt / of dry sand (1671 x 941): box (145, 227, 1515, 728).
// - Iron and sulfur mixture / sulfur-only residue (1499 x 1049, same registration): box (83, 211, 1405, 894).
// - Magnet on a string (887 x 1774, biology): box (97, 229, 790, 1223); string x about 435..453 from y 229;
//   the bar is y 1065..1223.
// - Coins (1200 x 900, biology): box (108, 137, 1092, 762).
// - Beaker on a hotplate (2000 square): box (298, 200, 1701, 1800); glass x 616..1412, liquid surface about y 640,
//   inside bottom about y 1130.
// - Thermometer (216 x 1988): box (21, 199, 194, 1789); tube x 67..148, bulb at the bottom.
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v01/measured/lesson.json';
import type {CueScene} from '../../cues';

export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
/** Plate definition from an alpha box given as (x0, y0, x1, y1). */
export const mkp = (src: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
const C = 'assets/chemistry/', B = 'assets/biology/';

type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V01 scene not found ' + id);
	return s;
};
/** Response hold: from the end of the recorded speech to the end of the scene (the measured holdSeconds). */
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

export const JAR = mkp(C + 'y11c-gas-jar-v1.png', [935, 1682], [138, 128, 779, 1524]);
export const LUMP = mkp(C + 'c5-solid-lump-v1.png', [1600, 1600], [160, 213, 1440, 1385]);
export const SULFUR = mkp(C + 'y11c-sample-sulfur-v1.png', [1466, 1073], [250, 326, 1216, 788]);
export const GLASS = mkp(B + 'm8-water-glass-v1.png', [2000, 2000], [560, 220, 1440, 1779]);
export const SALT = mkp(C + 'y11c-watch-glass-salt-v1.png', [1671, 941], [145, 227, 1515, 728]);
export const SAND = mkp(C + 'y11c-watch-glass-sand-v1.png', [1671, 941], [145, 227, 1515, 728]);
export const FES = mkp(C + 'y11c-iron-sulfur-mixture-v1.png', [1499, 1049], [83, 211, 1405, 894]);
export const FES_RES = mkp(C + 'y11c-iron-sulfur-residue-v1.png', [1500, 1049], [83, 211, 1405, 894]);
export const MAGNET = mkp(B + 'y11-magnet-string-v2.png', [887, 1774], [97, 229, 790, 1223]);
export const COINS = mkp(B + 'y11-coins-v1.png', [1200, 900], [108, 137, 1092, 762]);
export const BEAKER = mkp(C + 'm8-beaker-hotplate-clear-v1.png', [2000, 2000], [298, 200, 1701, 1800]);
export const THERMO = mkp(C + 'c8-thermometer-hot-v1.png', [216, 1988], [21, 199, 194, 1789]);

export const PLATES: PDef[] = [JAR, LUMP, SULFUR, GLASS, SALT, SAND, FES, FES_RES, MAGNET, COINS, BEAKER, THERMO];
