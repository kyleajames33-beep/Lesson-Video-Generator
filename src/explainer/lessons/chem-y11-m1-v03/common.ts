// Y11 Chem M1 V03 (filtration and crystallisation) shared pieces: measured lesson lookups, response holds and the
// plates. Alpha boxes measured 20 Nov 2026 (PIL, alpha > 20) from the real files in public/assets.
// - Filter funnel, paper cone and conical flask, empty (1049 x 1499): box (211, 74, 834, 1432). The "sand" plate
//   (1049 x 1500, box (212, 71, 833, 1431)) is the aligned partner: both are drawn with the empty plate's box so they
//   cross-fade in register. Funnel rim centre about (520, 150), cone tip about (520, 530), stem tip about (520, 880),
//   painted filtrate surface about y 1100, flask inside bottom about y 1390.
// - Evaporating basin on an electric hotplate (1402 x 1122): box (268, 61, 1102, 1046); liquid surface about y 500,
//   x 360..1000; indicator light about (765, 920). The crystals plate (same canvas, basin off the heat on a mat) is
//   drawn with the hotplate box so the basins register; its own box is (294, 370, 1063, 769).
// - Watch glass, plain / sand / salt (1671 x 941): box (145, 227, 1515, 728); the heap sits about (830, 480).
// - Wash bottle (2048 square): box (587, 164, 1460, 1884); nozzle tip about (1456, 428).
// - Drying oven (2000 square): box (221, 231, 1780, 1769).
// - Sieve over a bowl (1254 square, biology): box (62, 301, 1193, 991); big balls about (430..760, 390..560), small
//   beads about (430..1000, 840..900).
// - Copper(II) sulfate solution / crystals beakers (1400 x 1800): box (222, 275, 1151, 1604).
// The sand and salty water beaker is V02's (see ../chem-y11-m1-v02/common.ts).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v03/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {SANDB} from '../chem-y11-m1-v02/common';

export {SANDB, mkp};
export type {PDef};
const C = 'assets/chemistry/', B = 'assets/biology/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V03 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

const FBOX: [number, number, number, number] = [211, 74, 834, 1432];
export const FUN_E = mkp(C + 'y11c-filter-funnel-flask-empty-v1.png', [1049, 1499], FBOX);
export const FUN_S = mkp(C + 'y11c-filter-funnel-flask-sand-v1.png', [1049, 1500], FBOX);
const BBOX: [number, number, number, number] = [268, 61, 1102, 1046];
export const BASIN = mkp(C + 'y11c-evaporating-basin-hotplate-v1.png', [1402, 1122], BBOX);
export const BASIN_X = mkp(C + 'y11c-evaporating-basin-crystals-v1.png', [1402, 1122], BBOX);
export const CRYS = mkp(C + 'y11c-evaporating-basin-crystals-v1.png', [1402, 1122], [294, 370, 1063, 769]);
const WBOX: [number, number, number, number] = [145, 227, 1515, 728];
export const WG = mkp(C + 'y11c-watch-glass-v1.png', [1672, 941], WBOX);
export const WG_SAND = mkp(C + 'y11c-watch-glass-sand-v1.png', [1671, 941], WBOX);
export const WG_SALT = mkp(C + 'y11c-watch-glass-salt-v1.png', [1671, 941], WBOX);
export const WASH = mkp(C + 'm6-wash-bottle-v1.png', [2048, 2048], [587, 164, 1460, 1884]);
export const OVEN = mkp(C + 'm8-drying-oven-v1.png', [2000, 2000], [221, 231, 1780, 1769]);
export const SIEVE = mkp(B + 'y11-sieve-bowl-filtered-v1.png', [1254, 1254], [62, 301, 1193, 991]);
export const CUSO4 = mkp(C + 'c11-cuso4-beaker-dissolved-v1.png', [1400, 1800], [222, 275, 1151, 1604]);
export const CUSO4_X = mkp(C + 'c11-cuso4-beaker-crystal-v1.png', [1400, 1800], [222, 275, 1151, 1604]);

export const PLATES: PDef[] = [SANDB, FUN_E, FUN_S, BASIN, BASIN_X, WG, WG_SAND, WG_SALT, WASH, OVEN, SIEVE, CUSO4, CUSO4_X];
