// M7 B07 board state: b06's response strip with its three innate rungs shrunk to grey thumbnails and the fourth rung
// ("days: adaptive", amber) expanded into the five B cell steps, filled as taught (fit and go-ahead in scene 6, clone
// in 7, plasma cells in 8, antibodies bind in 9).
import type {StripProps, StripStep} from '../bio-m7-b06/strip';
import {PLATES} from './assets';

export const HEAD = 'How do B cells target an antigen?';
export const STEPS7 = ['fit', 'go-ahead', 'clone', 'plasma cells', 'antibodies bind'];
export const STRIP7 = {x: 1430, y: 186, w: 400, rh: 78, gap: 20, stepH: 58, size: 28};
/** The strip with `n` step chips already written and lit; `over` patches individual steps (cue-timed). */
export const strip7 = (n: number, over: Partial<StripStep>[] = [], extra: Partial<StripProps> = {}): StripProps => ({
	rungs: [
		{label: 'barriers', thumbs: [PLATES.epi], lit: 0},
		{label: 'inflammation', thumbs: [PLATES.vesselCrop], lit: 0},
		{label: 'phagocytes', thumbs: [PLATES.digest], lit: 0},
		{label: 'days: adaptive', lit: 1, color: 'amber', steps: STEPS7.map((label, i) => ({label, at: i < n ? -100 : 1e9, lit: i < n ? 1 : 0, ...(over[i] ?? {})}))},
	],
	bracket: {from: 0, to: 2, at: -100, label: 'innate', lit: 0},
	...STRIP7,
	...extra,
});
