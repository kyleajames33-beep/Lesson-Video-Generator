// Y11 Chem WS V03 (conducting investigations) shared pieces: measured lesson lookups, response holds, plates and the
// illustrative data. Plates reuse ws-v02's measured alpha boxes; new boxes measured 21 Nov 2026 (PIL, alpha > 20):
// - Check mass (1254 square): box (330, 166, 920, 1111).
// - Watch glass of recovered salt (1671 x 941): box (145, 227, 1515, 728) (as M1 V01).
// - Lid of the lidded crucible plates (1024 x 1536 canvas): outline traced from y11c-cuso4-crucible-lid-v1.png, knob
//   top (500, 97), left rim (304, 228), right rim (710, 185), lower edge (440, 267).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-ws-v03/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {BAL, CRU_B, CRU_K, CRU_LID, CRU_LIDW, CRU_W, DESIC, GLASSES, MAT, TONGS, WASTE, CRU_PT} from '../chem-y11-ws-v02/common';

export type {PDef};
export {BAL, CRU_B, CRU_K, CRU_LID, CRU_LIDW, CRU_W, DESIC, GLASSES, MAT, TONGS, WASTE, CRU_PT};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 Chem WS V03 scene not found ' + id);
	return s;
};
/** Response hold: from the end of the recorded speech to the end of the scene (the measured holdSeconds). */
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

export const CHECK = mkp(C + 'y11c-check-mass-v1.png', [1254, 1254], [330, 166, 920, 1111]);
export const SALT_WG = mkp(C + 'y11c-watch-glass-salt-v1.png', [1671, 941], [145, 227, 1515, 728]);

export const PLATES: PDef[] = [BAL, CRU_B, CRU_K, CRU_LID, CRU_LIDW, CRU_W, DESIC, GLASSES, MAT, TONGS, WASTE, CHECK, SALT_WG];

/** The lid's outline on the 1024 x 1536 lidded crucible canvas (traced by eye, see the header). */
export const LID_POLY: [number, number][] = [
	[302, 230], [308, 204], [330, 184], [360, 165], [400, 151], [470, 142], [473, 121], [485, 103], [500, 95], [521, 97], [535, 111], [539, 139],
	[600, 136], [660, 142], [702, 158], [712, 185], [704, 209], [660, 229], [600, 248], [520, 265], [440, 269], [380, 266], [330, 259], [306, 245],
];

// ---------- data (all illustrative, tagged on screen) ----------
export const ACCEPTED = 36.1;
export const CLASS1 = [36.0, 35.8, 36.2];
export const CLASS2 = [34.3, 34.5, 34.4];
/** Attempt 1 (author note g). */
export const A1 = {target: 70.0, P: [69.6, 69.8, 69.5], Q: [74.1, 73.9, 74.2]};
export const fmt1 = (v: number) => v.toFixed(1);
