// Y11 Chem M1 V08 (nuclide notation) shared pieces: measured lesson lookups, response holds and plates. Alpha boxes
// measured 20 Nov 2026 (PIL, alpha > 20) from the real files in public/assets.
// - Gas jar of chlorine (935 x 1683): box (204, 276, 714, 1393).
// - Magnesium ribbon sample (1254 square): box (127, 385, 1122, 935).
// The iron lump is V01's, the salt jar V02's.
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v08/measured/lesson.json';
import type {CueScene} from '../../cues';
import {LUMP, mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {SJAR} from '../chem-y11-m1-v06/common';

export {LUMP, SJAR};
export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V08 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};

export const CLJAR = mkp(C + 'y11c-gas-jar-chlorine-v1.png', [935, 1683], [204, 276, 714, 1393]);
export const MGRIB = mkp(C + 'y11c-sample-magnesium-ribbon-v1.png', [1254, 1254], [127, 385, 1122, 935]);

export const PLATES: PDef[] = [CLJAR, MGRIB, LUMP, SJAR];

/** Element symbols by atomic number (first three rows of the periodic table, plus iron). */
export const SYM: Record<number, string> = {1: 'H', 2: 'He', 3: 'Li', 4: 'Be', 5: 'B', 6: 'C', 7: 'N', 8: 'O', 9: 'F', 10: 'Ne', 11: 'Na', 12: 'Mg', 13: 'Al', 14: 'Si', 15: 'P', 16: 'S', 17: 'Cl', 18: 'Ar', 26: 'Fe'};
export const chargeText = (q: number) => (q === 0 ? '' : `${Math.abs(q) > 1 ? Math.abs(q) : ''}${q > 0 ? '+' : '−'}`);
