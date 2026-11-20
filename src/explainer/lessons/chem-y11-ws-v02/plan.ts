// The plan board's wording, in one place so every scene (and the final frame) says the same thing.
import {GOLD_T, NAVY_T, SEC, TEAL_T, VIOLET_T} from './parts';
import type {PLine, PSec, Seg} from './parts';

export const L = {
	vGloss: [{t: 'measures what it claims to measure', c: TEAL_T}] as Seg[],
	vHand: [{t: 'only water lost, only time changed', c: TEAL_T}] as Seg[],
	vIvdv: [{t: 'IV: heating time', c: NAVY_T}, {t: '    DV: % mass lost'}] as Seg[],
	vCtrl1: [{t: 'controls: ', c: GOLD_T}, {t: '2.50 g, same crucible,'}] as Seg[],
	vCtrl2: [{t: 'small blue flame, '}, {t: 'same cooling'}] as Seg[],
	vCool: [{t: 'cool, lid on, in a desiccator', c: GOLD_T}] as Seg[],
	vRun: [{t: 'control: ', c: TEAL_T}, {t: 'empty crucible to constant mass'}] as Seg[],
	rGloss: [{t: 'repeats give consistent results', c: VIOLET_T}] as Seg[],
	rRuns: [{t: '3 full runs; 0 to 12 min in 2 min steps'}] as Seg[],
	eBal: [{t: '0.01 g balance'}] as Seg[],
	eCru: [{t: 'porcelain crucible, lid ajar'}] as Seg[],
	eTongs: [{t: 'pipeclay triangle; tongs'}] as Seg[],
	sSafe: [{t: 'glasses, tongs, mat, gentle flame'}] as Seg[],
	sWaste: [{t: 'waste container, not the sink'}] as Seg[],
	sSmall: [{t: 'small quantities: 2.50 g'}] as Seg[],
	sRecord: [{t: 'record every reading'}] as Seg[],
};
/** Width of "small blue flame, " at 30 px (700): where the struck "same cooling" starts. */
export const COOL_X = 238, COOL_W = 183;

export const PROMPT = {valid: 'what makes it valid?', reliable: 'how many runs? which times?', equipment: 'which balance? which crucible?', safe: 'risks? waste? records?'};
export const TITLE = {valid: 'valid', reliable: 'reliable', equipment: 'equipment', safe: 'safe and ethical'};

const ln = (segs: Seg[], at?: number, extra: Partial<PLine> = {}): PLine => ({segs, at, ...extra});
export const sec = (k: keyof typeof TITLE, lines: PLine[], o: Partial<PSec> = {}): PSec => ({title: TITLE[k], color: SEC[k], prompt: PROMPT[k], lines, ...o});
export {ln};

/** Collapsed summaries for the compact boards. */
export const SUM = {
	valid: [{t: 'IV, DV, controls, control run'}] as Seg[],
	reliable: [{t: '3 full runs, 7 time points'}] as Seg[],
	equipment: [{t: '0.01 g balance, crucible, lid, tongs'}] as Seg[],
};
