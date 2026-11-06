// Y11 Chem M2 V06 (mole ratios) shared pieces: measured lesson lookups, response holds and the plates.
// Alpha boxes measured 6 Nov 2026 (PIL, alpha > 20) from the real files in public/assets/chemistry.
// - Top-pan balance (1402 x 1122): box (52, 137, 1322, 1028). Dark display window about x 435..1135, y 515..720.
//   Steel pan inner surface centre about (635, 290); rim ellipse x 190..1080, y 135..450.
// - Water beaker (1254 square): box (237, 226, 967, 1027); its base is the box bottom.
// - Bike frame (1484 x 1060): box (133, 164, 1337, 907); rear dropout x about 150, fork dropout x about 1315.
// - Bike wheel (1254 square): box (164, 170, 1077, 1102).
// - Foam cup calorimeter (2000 square): box (569, 160, 1430, 1840). Probe top about (1000, 165). Cutaway liquid about
//   y 1055..1240, x 880..1290 (polygon CUP_LIQ below).
// - Safety glasses (2000 square): box (215, 637, 1787, 1408).
// - Old copper sulfate crystals (1254 square): box (177, 193, 1112, 1037).
// - White-powder crucible (1024 x 1536): box (123, 97, 902, 1384).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m2-v06/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';

export type {PDef};
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M2 V06 scene not found ' + id);
	return s;
};
/** Response hold: from the end of the recorded speech to the end of the scene (the measured holdSeconds). */
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

export const BALANCE = mk('y11c-top-pan-balance-v1.png', [1402, 1122], [52, 137, 1322, 1028]);
export const BAL_A = {disp: [435, 515, 1135, 720] as [number, number, number, number], pan: [635, 290] as [number, number]};
export const BEAKER_W = mk('y11c-beaker-water-36ml-v1.png', [1254, 1254], [237, 226, 967, 1027]);
export const FRAME = mk('y11c-bike-frame-v1.png', [1484, 1060], [133, 164, 1337, 907]);
export const WHEEL = mk('y11c-bike-wheel-v1.png', [1254, 1254], [164, 170, 1077, 1102]);
export const CUP = mk('m6-foam-cup-calorimeter-v1.png', [2000, 2000], [569, 160, 1430, 1840]);
export const CUP_LIQ: [number, number][] = [[884, 1052], [1292, 1052], [1262, 1178], [1218, 1236], [962, 1242], [906, 1172]];
export const CUP_PROBE: [number, number] = [1000, 170];
export const GLASSES = mk('m5x-safety-glasses-v1.png', [2000, 2000], [215, 637, 1787, 1408]);
export const JAR = mk('y11c-cuso4-old-crystals-v1.png', [1254, 1254], [177, 193, 1112, 1037]);
export const CRUCIBLE = mk('y11c-cuso4-crucible-lid-white-v1.png', [1024, 1536], [123, 97, 902, 1384]);

export const PLATES: PDef[] = [BALANCE, BEAKER_W, FRAME, WHEEL, CUP, GLASSES, JAR, CRUCIBLE];
