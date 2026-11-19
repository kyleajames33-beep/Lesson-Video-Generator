// Y11 Chem M1 V05 (paper chromatography and Rf) shared pieces: measured lesson lookups, response holds and plates.
// Alpha boxes measured 20 Nov 2026 (PIL, alpha > 20) from the real files in public/assets.
// - Chromatography jar, back layer (926 x 1698): box (146, 309, 780, 1430); the front layer (926 x 1699, box (143,
//   306, 781, 1433)) is drawn with the back layer's box so the two register. The lid is painted on the back layer
//   (about y 310..440); the jar's inside runs about x 180..745 down to about y 1390.
// - Pencil (2000 square, biology): box (160, 214, 1840, 1786); graphite tip about (170, 1760).
// - Analytical balance with a watch glass (2000 square): box (548, 373, 1566, 1681); display window about
//   (700..1127, 1320..1460).
// The watch glasses of sand and salt are V03's (see ../chem-y11-m1-v03/common.ts).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v05/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {WG_SALT, WG_SAND} from '../chem-y11-m1-v03/common';

export {WG_SALT, WG_SAND, mkp};
export type {PDef};
const C = 'assets/chemistry/', B = 'assets/biology/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V05 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};

const JBOX: [number, number, number, number] = [146, 309, 780, 1430];
export const JAR_B = mkp(C + 'y11c-chromatography-jar-back-v1.png', [926, 1698], JBOX);
export const JAR_F = mkp(C + 'y11c-chromatography-jar-front-v1.png', [926, 1699], JBOX);
export const PENCIL = mkp(B + 'm5x-pencil-v1.png', [2000, 2000], [160, 214, 1840, 1786]);
export const BAL = mkp(C + 'm8-balance-watch-glass-v1.png', [2000, 2000], [548, 373, 1566, 1681]);

// The handoff uses V06's top-pan balance and V01's watch glasses of sand and salt (V06's opening frame).
export const BAL_TOP = mkp(C + 'y11c-top-pan-balance-v1.png', [1402, 1122], [52, 137, 1322, 1028]);
export const PLATES: PDef[] = [JAR_B, JAR_F, PENCIL, BAL_TOP, mkp('assets/chemistry/y11c-watch-glass-sand-v1.png', [1671, 941], [145, 227, 1515, 728]), mkp('assets/chemistry/y11c-watch-glass-salt-v1.png', [1671, 941], [145, 227, 1515, 728])];

/** Dye colours (design colour key). */
export const DYE = {blue: '#3a63b8', pink: '#d4588f', yellow: '#e3b72f', green: '#4f9a5a'};
/** Hook strip (author note d, illustrative): Rf 0.20 blue, 0.50 pink, 0.80 yellow. */
export const HOOK_SPOTS = [{c: DYE.blue, rf: 0.2}, {c: DYE.pink, rf: 0.5}, {c: DYE.yellow, rf: 0.8}];
/** Worked example (site): front 8.0 cm; P 2.4 cm (0.30, blue); Q 6.4 cm (0.80, yellow). */
export const WE_SPOTS = [{c: DYE.blue, rf: 0.3}, {c: DYE.yellow, rf: 0.8}];
