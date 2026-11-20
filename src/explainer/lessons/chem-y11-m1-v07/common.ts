// Y11 Chem M1 V07 (percentage composition from a formula) shared pieces: measured lesson lookups, response holds,
// plates and the formula data. Alpha boxes measured 20 Nov 2026 (PIL, alpha > 20) from the real files in public/assets.
// - Sealed fizzy drink bottle (1041 x 1822): box (326, 234, 716, 1529).
// - Carton of snack packs (1500 x 1049): box (180, 144, 1320, 904); front-row pack centre (747, 670) (sidecar).
// - Crucible of blue copper sulfate crystals, burner unlit / lit (1024 x 1536): box (124, 152, 900, 1383); crystals
//   about (512, 260).
// - Open crucible of white powder over a lit burner (1280 x 1920): measured box (154, 192, 1125, 1728); it is the same
//   picture at 1.25 times the canvas of the blue pair, so it uses the blue box times 1.25 (155, 190, 1125, 1729) and
//   all three share one screen mapping (they cross-fade in place).
// The salt jar, the filter funnel, the balance and the salt watch glass are V06's, V02's and V01's.
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v07/measured/lesson.json';
import type {CueScene} from '../../cues';
import {SALT, mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {BAL, FILT_E, SJAR} from '../chem-y11-m1-v06/common';

export {SALT, FILT_E, SJAR};
export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V07 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};

export const BOTTLE = mkp(C + 'c1-sparkling-bottle-sealed-v1.png', [1041, 1822], [326, 234, 716, 1529]);
export const CARTON = mkp(C + 'y11c-snack-pack-carton-v1.png', [1500, 1049], [180, 144, 1320, 904]);
export const CRU_B = mkp(C + 'y11c-cuso4-crucible-blue-v1.png', [1024, 1536], [124, 152, 900, 1383]);
export const CRU_L = mkp(C + 'y11c-cuso4-crucible-blue-lit-v1.png', [1024, 1536], [124, 152, 900, 1383]);
export const CRU_W = mkp(C + 'm5-g02b-open-crucible-v1.png', [1280, 1920], [155, 190, 1125, 1729]);

export const PLATES: PDef[] = [BOTTLE, CARTON, CRU_B, CRU_L, CRU_W, SALT, FILT_E, SJAR, BAL];

// ---------- formula data (relative atomic masses as given in the lesson) ----------
export type Ent = {el: string; ar: number; n: number; label?: string; water?: boolean};
export const AR = {C: 12.0, O: 16.0, N: 14.0, H: 1.0, Cu: 63.5, S: 32.1, Na: 23.0, Cl: 35.5, Mg: 24.3};
export const F_CO2: Ent[] = [{el: 'C', ar: 12, n: 1}, {el: 'O', ar: 16, n: 1}, {el: 'O', ar: 16, n: 1}];
export const F_NH4NO3: Ent[] = [{el: 'N', ar: 14, n: 1}, {el: 'H', ar: 1, n: 4, label: '4 H'}, {el: 'N', ar: 14, n: 1}, {el: 'O', ar: 16, n: 3, label: '3 O'}];
export const F_CUSO4: Ent[] = [{el: 'Cu', ar: 63.5, n: 1}, {el: 'S', ar: 32.1, n: 1}, {el: 'O', ar: 16, n: 4, label: '4 O'}, {el: 'H2O', ar: 18, n: 5, label: '5 H_2O', water: true}];
export const F_NACL: Ent[] = [{el: 'Na', ar: 23, n: 1}, {el: 'Cl', ar: 35.5, n: 1}];
export const F_MGSO4: Ent[] = [{el: 'Mg', ar: 24.3, n: 1}, {el: 'S', ar: 32.1, n: 1}, {el: 'O', ar: 16, n: 4, label: '4 O'}, {el: 'H2O', ar: 18, n: 7, label: '7 H_2O', water: true}];
export const mr = (F: Ent[]) => F.reduce((a, e) => a + e.ar * e.n, 0);
