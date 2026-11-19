// Y11 Chem M1 V04 (simple and fractional distillation) shared pieces: measured lesson lookups, response holds, plates
// and the enrichment run. Alpha boxes measured 20 Nov 2026 (PIL, alpha > 20) from the real files in public/assets.
// - Simple distillation rig (1536 x 1024): box (123, 150, 1291, 987). Flask centre about (345, 735), liquid surface
//   about y 745; thermometer bulb level with the side arm about (350, 507); condenser from about (512, 512) to
//   (1058, 631); outlet tip about (1186, 716); open receiver mouth about (1186, 745), bottom about (1186, 975);
//   heating mantle light about (423, 892); cooling water in (lower hose) about (972, 682), out (upper) about (597, 460).
// - Fractional distillation rig (1536 x 1024): box (123, 8, 1299, 982). Not registered with the simple rig (the
//   column raises the condenser), so it is placed on its own. Flask about (350, 735); bead column x about 341,
//   y 316..572; bulb about (338, 273); condenser about (495, 256) to (1058, 375); outlet tip about (1198, 418);
//   receiver mouth about (1198, 460), centre about (1198, 560); light about (421, 892).
// - Sample bottle, clear (472 x 834): box (3, 3, 459, 816).
// - Crude oil barrel / industrial fractionating column (2000 square): boxes (506, 200, 1493, 1798) and
//   (510, 202, 1489, 1800).
// The basin on its hotplate and the copper(II) sulfate beaker are V03's (see ../chem-y11-m1-v03/common.ts).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v04/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {BASIN, CUSO4} from '../chem-y11-m1-v03/common';

export {BASIN, CUSO4, mkp};
export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V04 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};

export const SIMPLE = mkp(C + 'y11c-simple-distillation-v1.png', [1536, 1024], [123, 150, 1291, 987]);
export const FRAC = mkp(C + 'y11c-fractional-distillation-v1.png', [1536, 1024], [123, 8, 1299, 982]);
export const BOTTLE = mkp(C + 'y11c-sample-bottle-clear-v1.png', [472, 834], [3, 3, 459, 816]);
export const BARREL = mkp(C + 'm7-crude-oil-barrel-v1.png', [2000, 2000], [506, 200, 1493, 1798]);
export const INDCOL = mkp(C + 'm7-fractional-distillation-column-v1.png', [2000, 2000], [510, 202, 1489, 1800]);

export const PLATES: PDef[] = [SIMPLE, FRAC, BOTTLE, BARREL, INDCOL, BASIN, CUSO4];

/** The enrichment run: % ethanol by mass of the vapour after each ideal boil-and-condense cycle (author note b),
 *  starting from the 17% liquid. Index 0 is the liquid; the run stops at the azeotrope, about 96%. */
export const RUN = [17, 62, 80, 86, 89, 90.4, 91.7, 92.7, 93.5, 94.2, 94.8, 95.2, 95.6];
/** Vapour % after c cycles (fractional c eases between steps). */
export const pctAt = (c: number) => {
	const i = Math.max(0, Math.min(RUN.length - 1, Math.floor(c)));
	const j = Math.min(RUN.length - 1, i + 1);
	const t = Math.max(0, Math.min(1, c - i));
	return RUN[i] + (RUN[j] - RUN[i]) * t;
};
