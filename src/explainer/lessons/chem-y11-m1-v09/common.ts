// Y11 Chem M1 V09 (relative atomic mass) shared pieces: measured lesson lookups, response holds and plates. Alpha
// boxes measured 20 Nov 2026 (PIL, alpha > 20) from the real files in public/assets.
// - Gas jar of chlorine (935 x 1683): box (204, 276, 714, 1393) (V08's CLJAR).
// - Silicon lump on a watch glass (1254 square): box (139, 244, 1115, 995).
// - Hydrogen discharge tube, lit (1942 x 809): box (64, 255, 1874, 608).
// - Mass spectrometer (2000 square): box (161, 520, 1839, 1479).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v09/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {CLJAR} from '../chem-y11-m1-v08/common';

export {CLJAR};
export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V09 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};

export const SI = mkp(C + 'y11c-sample-silicon-v1.png', [1254, 1254], [139, 244, 1115, 995]);
export const H2TUBE = mkp(C + 'y11c-hydrogen-discharge-tube-lit-v1.png', [1942, 809], [64, 255, 1874, 608]);
export const MSPEC = mkp(C + 'm8-mass-spectrometer-v1.png', [2000, 2000], [161, 520, 1839, 1479]);

export const PLATES: PDef[] = [CLJAR, SI, H2TUBE, MSPEC];
