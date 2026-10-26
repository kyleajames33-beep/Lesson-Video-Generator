// M7 B08 board state: the response strip with three grey innate thumbnails, then the fourth rung ("days: adaptive")
// holding b07's five B cell chips (grey) and the new T cell branch beside them, five chips lit one at a time ("shown",
// "fit" and "clone" in scene 5, "helpers: signal" in 6, "killers: destroy" in 8).
import type {StripProps, StripStep} from '../bio-m7-b06/strip';
import {PLATES} from './assets';

export const HEAD = 'How do T cells respond to infected cells?';
export const B5 = ['fit', 'go-ahead', 'clone', 'plasma cells', 'antibodies bind'];
export const T5 = ['shown', 'fit', 'clone', 'helpers: signal', 'killers: destroy'];
export const STRIP8 = {x: 1400, y: 186, w: 450, rh: 72, gap: 18, stepH: 54, size: 26};
/** The strip with `n` T chips written and lit; `tOver` / `bOver` patch individual chips (cue-timed). */
export const strip8 = (n: number, tOver: Partial<StripStep>[] = [], extra: Partial<StripProps> = {}, bOver: Partial<StripStep>[] = []): StripProps => ({
	rungs: [
		{label: 'barriers', thumbs: [PLATES.epi], lit: 0},
		{label: 'inflammation', thumbs: [PLATES.vesselCrop], lit: 0},
		{label: 'phagocytes', thumbs: [PLATES.digest], lit: 0},
		{
			label: 'days: adaptive', lit: 1, color: 'amber',
			steps: B5.map((label, i) => ({label, at: -100, lit: 0, ...(bOver[i] ?? {})})),
			branch: {label: 'T cells', steps: T5.map((label, i) => ({label, at: i < n ? -100 : 1e9, lit: i < n ? 1 : 0, ...(tOver[i] ?? {})}))},
		},
	],
	bracket: {from: 0, to: 2, at: -100, label: 'innate', lit: 0},
	...STRIP8,
	...extra,
});
