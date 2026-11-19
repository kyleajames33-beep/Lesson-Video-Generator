// Y11 Chem M1 V06 (percentage composition of a separated mixture) shared pieces: measured lesson lookups, response
// holds, plates and the one mass model. Alpha boxes measured 20 Nov 2026 (PIL, alpha > 20) from the real files in
// public/assets.
// - Top-pan balance (1402 x 1122): box (52, 137, 1322, 1028); pan centre about (636, 288), pan width about 890;
//   display window about (433, 519) to (1134, 720), centre about (783, 622).
// - Evaporating basin, empty / with crystals (1402 x 1122, same registration): box (293, 370, 1063, 769); the bowl's
//   foot centre about (685, 735); a grey mat sits under the bowl (clipped away when the basin is on the balance).
// - Basin on a hotplate (1402 x 1122): box (268, 61, 1102, 1046).
// - Beaker of dry sand and salt (1182 x 1330): box (159, 146, 983, 1209).
// - Filter funnel and flask with sand (1049 x 1500): box (212, 71, 833, 1431); paper cone sand about (500, 440),
//   filtrate about (517, 1130). Empty funnel and flask (1049 x 1499): box (211, 74, 834, 1432).
// - Empty watch glass (1672 x 941): box (145, 228, 1515, 724); centre about (830, 476).
// - Glass rod (2172 x 724): box (73, 333, 2102, 390).
// - Drying oven (2000 square): box (221, 231, 1780, 1769).
// The sand and salt watch glasses are V01's, the beaker of sand and salty water and the salt jar are V02's.
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v06/measured/lesson.json';
import type {CueScene} from '../../cues';
import {SALT, SAND, mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {SANDB, SJAR} from '../chem-y11-m1-v02/common';

export {SALT, SAND, SANDB, SJAR};
export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V06 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

export const BAL = mkp(C + 'y11c-top-pan-balance-v1.png', [1402, 1122], [52, 137, 1322, 1028]);
export const BASIN_E = mkp(C + 'y11c-evaporating-basin-empty-v1.png', [1402, 1122], [293, 370, 1063, 769]);
export const BASIN_X = mkp(C + 'y11c-evaporating-basin-crystals-v1.png', [1402, 1122], [294, 370, 1063, 769]);
export const HOTB = mkp(C + 'y11c-evaporating-basin-hotplate-v1.png', [1402, 1122], [268, 61, 1102, 1046]);
export const DRYB = mkp(C + 'y11c-sand-salt-dry-beaker-v1.png', [1182, 1330], [159, 146, 983, 1209]);
export const FILT = mkp(C + 'y11c-filter-funnel-flask-sand-v1.png', [1049, 1500], [212, 71, 833, 1431]);
export const FILT_E = mkp(C + 'y11c-filter-funnel-flask-empty-v1.png', [1049, 1499], [211, 74, 834, 1432]);
export const WG = mkp(C + 'y11c-watch-glass-v1.png', [1672, 941], [145, 228, 1515, 724]);
export const ROD = mkp(C + 'y11c-glass-rod-v1.png', [2172, 724], [73, 333, 2102, 390]);
export const OVEN = mkp(C + 'm8-drying-oven-v1.png', [2000, 2000], [221, 231, 1780, 1769]);

export const PLATES: PDef[] = [BAL, BASIN_E, BASIN_X, HOTB, DRYB, FILT, FILT_E, WG, ROD, OVEN, SALT, SAND, SANDB, SJAR];

// ---------- the mass model (one set of numbers drives displays, rows, bars and totals) ----------
export const pct = (part: number, whole: number) => (part / whole) * 100;
export const g2 = (m: number) => `${m.toFixed(2)} g`;
export const p1 = (v: number) => `${v.toFixed(1)}%`;
