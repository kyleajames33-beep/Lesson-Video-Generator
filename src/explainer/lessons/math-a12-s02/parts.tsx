// Lesson parts for math-a12-s02 (Revision 4: when is a finite distribution uniform; a tear-off desk calendar and two
// dice), on the maths studio kit's probability set and s01's parts (imported read-only through ../math-a12-s01/parts,
// which also carries the f01 to f15 board parts). Lesson-local rigs:
// - the calendar numbers (pages per date over a non-leap year) and the flip pace shared by the pad, bars and readout;
// - WhiteDie: biology/m5x-die-v1 (the white die of the two-dice grid);
// - NumberLine: ticks and labels with optional dots, counts above the dots and amber dots;
// - BalanceTriangle: the amber triangle under a bar axis (the handoff to s03).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {FrameSvg, MONTH_LENGTHS, monthsWithDay, paceCount, vis, yearDates} from '../../math/studio';
import type {PlateSpec, StudioPace} from '../../math/studio';
import {ASK, CAL, DIE_RED, Plate, SPIN_BASE, SPIN_PTR} from '../math-a12-s01/parts';

export * from '../math-a12-s01/parts';

// ---------- the numbers (design "Numbers to verify") ----------
export const DATES = yearDates();
/** Pages per date (1 to 31) among the first k pages of the year. */
export const dateCounts = (k: number) => {
	const c = new Array(31).fill(0);
	for (let i = 0; i < Math.min(k, DATES.length); i++) c[DATES[i].day - 1]++;
	return c;
};
export const FINAL_COUNTS = dateCounts(365);
export const SUMS = Array.from({length: 11}, (_, i) => 6 - Math.abs(i - 5));
{
	const checks: [string, boolean][] = [
		['calendar', DATES.length === 365 && MONTH_LENGTHS.reduce((s, v) => s + v, 0) === 365 && FINAL_COUNTS.slice(0, 28).every(v => v === 12) && FINAL_COUNTS[28] === 11 && FINAL_COUNTS[29] === 11 && FINAL_COUNTS[30] === 7 && monthsWithDay(31) === 7],
		['two dice', SUMS.join() === '1,2,3,4,5,6,5,4,3,2,1' && SUMS.reduce((s, v) => s + v, 0) === 36],
		['counting', 20 - 5 + 1 === 16 && [17, 18, 19, 20].length / 16 === 0.25 && Math.abs(1 / 0.04 - 25) < 1e-9 && !Number.isInteger(1 / 0.3)],
		['A1', [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].filter(v => v > 15).length === 3],
		['A2', [1, 2, 3, 4, 5, 6, 7, 8].map(v => v % 3).filter(r => r === 0).length === 2 && [1, 2, 3, 4, 5, 6, 7, 8].map(v => v % 3).filter(r => r === 1).length === 3],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-s02 numbers: ' + bad.join(', '));
}
/** The year flip in scene 1: January slowly (3 frames a page), then faster to the end of the year. */
export const flipPace = (at: number): StudioPace => ({at, slow: 31, every: 3, until: at + 93 + 140});
export const pagesAt = (f: number, at: number) => paceCount(365, f, flipPace(at));

// ---------- plates ----------
export const DIE_WHITE: PlateSpec = {src: 'assets/biology/m5x-die-v1.png', nat: [2048, 2048], box: [431, 412, 1669, 1725]};
export const WhiteDie: React.FC<{x: number; y: number; w: number; at?: number; out?: number}> = p => <Plate plate={DIE_WHITE} {...p} />;
export const S02_PLATES = [CAL, DIE_RED, DIE_WHITE, SPIN_BASE, SPIN_PTR];

// ---------- number line ----------
export const NumberLine: React.FC<{x: number; y: number; w: number; from: number; to: number; labels?: readonly number[]; dots?: readonly number[]; dotAt?: (v: number) => number;
	counts?: {at: number; every: number}; amber?: {values: readonly number[]; at: number}; at?: number; out?: number}> = ({x, y, w, from, to, labels, dots = [], dotAt, counts, amber, at = -30, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const X = (v: number) => x + 30 + ((v - from) / (to - from)) * (w - 60);
	const T = (s: number, c: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill: c});
	const ticks = Array.from({length: to - from + 1}, (_, i) => from + i);
	return <FrameSvg style={{opacity: o}}>
		<line x1={x} x2={x + w} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{ticks.map(v => <line key={v} x1={X(v)} x2={X(v)} y1={y - 10} y2={y + 10} stroke={INK} strokeWidth={3} />)}
		{(labels ?? ticks).map(v => <text key={'l' + v} x={X(v)} y={y + 46} textAnchor="middle" style={T(30, INK)}>{v}</text>)}
		{dots.map((v, i) => {
			const da = dotAt ? dotAt(v) : -30;
			const amb = amber && amber.values.includes(v) ? prog(f, amber.at, 10) : 0;
			const co = counts ? prog(f, counts.at + i * counts.every, 8) : 0;
			return <g key={'d' + v} opacity={prog(f, da, 8)}>
				<circle cx={X(v)} cy={y} r={14} fill={amb > 0.5 ? ASK.stroke : INK} stroke="#fffdf8" strokeWidth={3} />
				{co > 0.01 ? <text x={X(v)} y={y - 28} textAnchor="middle" opacity={co} style={T(28, amb > 0.5 ? ASK.ink : INK)}>{i + 1}</text> : null}
			</g>;
		})}
	</FrameSvg>;
};

// ---------- the balance triangle (s03's opening question) ----------
/** An amber triangle with its apex just under a bar axis at frame x `cx`. */
export const BalanceTriangle: React.FC<{cx: number; y: number; o?: number}> = ({cx, y, o = 1}) => (o <= 0.01 ? null :
	<FrameSvg style={{opacity: o}}><path d={`M${cx},${y + 6} L${cx - 34},${y + 60} L${cx + 34},${y + 60} Z`} fill={ASK.stroke} stroke="#fffdf8" strokeWidth={4} strokeLinejoin="round" /></FrameSvg>);
