// Y11 Chem WS V02 (planning investigations) shared pieces: measured lesson lookups, response holds, plates, the
// rushed-test and run data and the trial-run mass model. Alpha boxes measured 20 Nov 2026 (PIL, alpha > 20) from the
// real files in public/assets.
// - Crucible plates on the tripod (1024 x 1536): blue unlit (124, 152, 900, 1383), blue lit (123, 152, 900, 1384),
//   black crust (123, 153, 901, 1383), lidded blue (124, 97, 899, 1383), lidded white (123, 97, 902, 1384), empty
//   lidded (123, 95, 900, 1385). They share one registration, so all use the blue box (124, 152, 900, 1383) and
//   cross-fade in place (lids draw above the box). Native points: bowl axis x 415, rim top y 150, crystal top y 230,
//   bowl bottom y 442, lid gap (600, 240), burner mouth (415, 785), painted flame tip (415, 695).
// - Open crucible of white powder over a lit burner (1280 x 1920): the same picture at 1.25 times the canvas, box
//   (155, 190, 1125, 1729).
// - Top-pan balance (1402 x 1122): box (52, 137, 1322, 1028); pan centre (640, 290), display centre (783, 620).
// - Crucible tongs (1881 x 836): box (208, 193, 1706, 684). Heatproof mat (1536 x 1024): box (127, 200, 1401, 902).
// - Desiccator (2000 square): box (299, 220, 1702, 1780). Safety glasses (2000 square): box (215, 637, 1787, 1408).
// - Waste bottle (2000 square): box (495, 269, 1504, 1743); blank label (570..1390, 940..1490).
// - Clipboard (2000 square, biology): box (283, 160, 1716, 1840). Beaker of sand in liquid (1182 x 1330): box
//   (158, 148, 980, 1209).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-ws-v02/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {BAL} from '../chem-y11-m1-v06/common';

export type {PDef};
export {BAL};
const C = 'assets/chemistry/', B = 'assets/biology/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 Chem WS V02 scene not found ' + id);
	return s;
};
/** Response hold: from the end of the recorded speech to the end of the scene (the measured holdSeconds). */
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

const CB: [number, number, number, number] = [124, 152, 900, 1383];
export const CRU_B = mkp(C + 'y11c-cuso4-crucible-blue-v1.png', [1024, 1536], CB);
export const CRU_L = mkp(C + 'y11c-cuso4-crucible-blue-lit-v1.png', [1024, 1536], CB);
export const CRU_K = mkp(C + 'y11c-cuso4-crucible-black-v1.png', [1024, 1536], CB);
export const CRU_LID = mkp(C + 'y11c-cuso4-crucible-lid-v1.png', [1024, 1536], CB);
export const CRU_LIDW = mkp(C + 'y11c-cuso4-crucible-lid-white-v1.png', [1024, 1536], CB);
export const CRU_EL = mkp(C + 'y11c-crucible-empty-lid-v1.png', [1024, 1536], CB);
export const CRU_W = mkp(C + 'm5-g02b-open-crucible-v1.png', [1280, 1920], [155, 190, 1125, 1729]);
export const TONGS = mkp(C + 'y11c-crucible-tongs-v1.png', [1881, 836], [208, 193, 1706, 684]);
export const MAT = mkp(C + 'y11c-heatproof-mat-v1.png', [1536, 1024], [127, 200, 1401, 902]);
export const DESIC = mkp(C + 'm8-desiccator-v1.png', [2000, 2000], [299, 220, 1702, 1780]);
export const GLASSES = mkp(C + 'm5x-safety-glasses-v1.png', [2000, 2000], [215, 637, 1787, 1408]);
export const WASTE = mkp(C + 'm5x-waste-bottle-v1.png', [2000, 2000], [495, 269, 1504, 1743]);
export const CLIP = mkp(B + 'm5x-clipboard-sheet-v1.png', [2000, 2000], [283, 160, 1716, 1840]);
export const BEAKER_S = mkp(C + 'y11c-sand-saltwater-beaker-v1.png', [1182, 1330], [158, 148, 980, 1209]);

export const PLATES: PDef[] = [CRU_B, CRU_L, CRU_K, CRU_LID, CRU_LIDW, CRU_EL, CRU_W, BAL, TONGS, MAT, DESIC, GLASSES, WASTE, CLIP, BEAKER_S];

/** Native points on the 1024 x 1536 crucible canvas. */
export const CRU_PT = {axis: 415, rim: 150, crystals: 232, bowlMid: 330, bottom: 442, lidGap: [600, 240] as [number, number], mouth: 785, tip: 695, ring: 520};

// ---------- data (all illustrative, tagged on screen) ----------
/** The rushed test (author note a). */
export const RUSHED = [{t: 2, pc: 19, flame: 1.9}, {t: 4, pc: 15, flame: 0.75}, {t: 6, pc: 31, flame: 1.3}];
/** Three full runs, % mass lost at 0 to 12 min (illustrative, about the ws-v01 prediction curve). */
export const RUN_T = [0, 2, 4, 6, 8, 10, 12];
export const RUNS: number[][] = [
	[0, 20.3, 29.6, 33.6, 35.4, 36.0, 36.1],
	[0, 19.6, 29.1, 33.9, 35.6, 36.1, 36.0],
	[0, 21.0, 30.2, 34.0, 35.8, 36.0, 36.1],
];
/** The prediction curve (ws-v01): rises and levels off at 36.1%. */
export const predict = (t: number) => 36.1 * (1 - Math.exp(-t / 2.4));

// ---------- the trial run: one mass model on one clock (author note d) ----------
/** Water taken back from the air (g), from 0 to 0.04 between frames a and b of the trial scene. */
export const TRIAL = {start: 1.6, gain: 0.04, sample: 2.5};
export const trialGain = (f: number, a: number, b: number) => {
	const u = Math.max(0, Math.min(1, (f - a) / (b - a)));
	return TRIAL.gain * u * u * (3 - 2 * u);
};
/** The balance shows hundredths: the reading steps 1.60, 1.61 ... 1.64. */
export const trialReading = (g: number) => Math.round((TRIAL.start + g) * 100 + 1e-6) / 100;
export const pcLost = (m: number) => ((TRIAL.sample - m) / TRIAL.sample) * 100;
