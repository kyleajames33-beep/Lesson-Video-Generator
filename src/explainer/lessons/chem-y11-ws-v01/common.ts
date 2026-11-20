// Y11 Chem WS V01 (questioning and predicting) shared pieces: measured lesson lookups, response holds, plates and
// the illustrative numbers. Alpha boxes measured 20 Nov 2026 (PIL, alpha > 20) from the real files in public/assets.
// - Crucible of blue copper sulfate crystals, unlit / lit; pale blue patches; black crust (all 1024 x 1536, one
//   registration): box (124, 152, 900, 1383) (patchy and black measure 123..901, the same picture). Crystals about
//   (512, 250); bowl x about 300..722, rim y about 150..260, bowl foot y about 520.
// - Open crucible of white powder over a lit burner (1280 x 1920): the same picture at 1.25 times the canvas, so it
//   uses the blue box times 1.25 (155, 190, 1125, 1729) and all five cross-fade in place (as V07).
// - Top-pan balance (V06), watch glass of sand (V01), beaker of sand in clear liquid (V02).
// - Clipboard with a grid sheet (2000 square, biology): box (283, 160, 1716, 1840).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-ws-v01/measured/lesson.json';
import type {CueScene} from '../../cues';
import {SAND, mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {SANDB} from '../chem-y11-m1-v02/common';
import {BAL} from '../chem-y11-m1-v06/common';
import {CRU_B, CRU_L, CRU_W} from '../chem-y11-m1-v07/common';

export type {PDef};
export {SAND, SANDB, BAL, CRU_B, CRU_L, CRU_W};
const C = 'assets/chemistry/', B = 'assets/biology/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 WS V01 scene not found ' + id);
	return s;
};
/** Response hold: from the end of the recorded speech to the end of the measured hold. */
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

export const CRU_P = mkp(C + 'y11c-cuso4-crucible-patchy-v1.png', [1024, 1536], [124, 152, 900, 1383]);
export const CRU_K = mkp(C + 'y11c-cuso4-crucible-black-v1.png', [1024, 1536], [124, 152, 900, 1383]);
export const CLIP = mkp(B + 'm5x-clipboard-sheet-v1.png', [2000, 2000], [283, 160, 1716, 1840]);

export const PLATES: PDef[] = [BAL, SAND, SANDB, CRU_B, CRU_L, CRU_W, CRU_P, CRU_K, CLIP];

// ---------- the copper sulfate numbers (design "Numbers used"; illustrative class data, tagged on screen) ----------
export const WATER_PCT = 36.1;
export const GROUPS = [
	{k: 'A', lost: '0.90 g', pct: '36.0%'},
	{k: 'B', lost: '0.69 g', pct: '27.6%'},
	{k: 'C', lost: '1.18 g', pct: '47.2%'},
] as const;

// ---------- the heating run (scene 9): a coded prediction model, not data ----------
// Percentage of mass lost against gentle heating time t (min): rises and levels at 36.1% once all the water has gone
// (at T = 7 min), shaped so that it passes through group B's point (4 min, 27.6%). The only data on the graph are
// B's point and A's steady-mass point (36.0%), both illustrative.
export const RUN_T = 7;
const RUN_N = Math.log(1 - 27.6 / WATER_PCT) / Math.log(1 - 4 / RUN_T);
export const lostAt = (t: number) => (t >= RUN_T ? WATER_PCT : WATER_PCT * (1 - Math.pow(1 - Math.max(0, t) / RUN_T, RUN_N)));
