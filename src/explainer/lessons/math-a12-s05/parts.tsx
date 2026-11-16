// Lesson parts for math-a12-s05 (Revision 4: the density f = F′, probability as area, the two properties of a density,
// moving between f and F; a parcel's delivery window and its tracker), on the maths studio kit's probability set 3
// (dist-parts.tsx) and s04's parts (imported read-only through ../math-a12-s04/parts, which carry s01 to s03's and the
// f-strand board parts). Lesson-local rigs:
// - every function of the lesson and its numbers (checked at load), and the 90 stored simulated arrivals;
// - Van and Parcel plates (and s04's starting blocks for the recalled histogram);
// - Pair: the paired view (violet F upper, teal f lower) with render props for marks on either panel;
// - Int and Ev: an integral sign and an evaluation bracket with small limits, for working rows.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {MATH_ROLES, MATH_TEAL, StudioPlot, assertDerivative, fnPath, integrate, plateHeight, regionPath} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';
import {BLOCKS, F9, Plate} from '../math-a12-s04/parts';

export * from '../math-a12-s04/parts';

// ---------- the functions and numbers (design "Numbers to verify") ----------
export const f9 = (x: number) => (x < 0 || x > 3 ? 0 : (2 * x) / 9);
/** The second courier: f = (4 − x)/8 on [0, 4], F = (8x − x²)/16. */
export const fc = (x: number, k = 1 / 8) => (x < 0 || x > 4 ? 0 : k * (4 - x));
export const Fc = (x: number) => (x < 0 ? 0 : x > 4 ? 1 : (8 * x - x * x) / 16);
/** Site problem 3: F = x²(3 − x)/4 on [0, 2], f = 3x(2 − x)/4. */
export const F3 = (x: number) => (x < 0 ? 0 : x > 2 ? 1 : (x * x * (3 - x)) / 4);
export const f3 = (x: number) => (x < 0 || x > 2 ? 0 : (3 * x * (2 - x)) / 4);
/** A1: f = (x + 1)/4 on [0, 2]. A2: F = (4x − x²)/4, f = (2 − x)/2 on [0, 2]. */
export const fA1 = (x: number) => (x < 0 || x > 2 ? 0 : (x + 1) / 4);
export const FA2 = (x: number) => (x < 0 ? 0 : x > 2 ? 1 : (4 * x - x * x) / 4);
export const fA2 = (x: number) => (x < 0 || x > 2 ? 0 : (2 - x) / 2);
export const REL5 = [0.1, 0.25, 0.35, 0.2, 0.1] as const;
export const DENS5 = [1, 2.5, 3.5, 2, 1] as const;
/** 90 simulated arrivals (hours after nine): x = 3√u, u from Python random.Random(70), stratified so the hours hold 10, 30 and 50 (the model's 1/9, 3/9, 5/9 of 90). */
export const ARRIVALS: readonly number[] = '1400,2892,2316,821,1483,2111,2701,1299,1989,1911,2517,1821,2301,954,2775,1135,393,542,2913,998,2863,2066,1845,2620,1103,1847,2444,2021,2978,2405,2394,1037,1389,2223,845,2594,678,2278,1693,1841,2972,2804,1046,1828,2147,2216,1184,2921,2723,2765,1948,1819,2914,2122,1804,1972,2985,2059,2875,1428,2476,1352,1534,2892,2071,2180,2934,2255,2899,2406,2783,2590,773,1529,1168,1865,2708,2569,369,2153,1603,2987,2939,2568,2363,1463,641,2141,1844,2182'.split(',').map(v => Number(v) / 1000);
{
	const near = (a: number, b: number, t = 1e-6) => Math.abs(a - b) < t;
	const tally = [0, 0, 0];
	ARRIVALS.forEach(v => tally[Math.min(2, Math.floor(v))]++);
	assertDerivative(F9, f9, 0.01, 2.99, 21, 1e-5, 'x²/9');
	assertDerivative(Fc, x => fc(x), 0.01, 3.99, 21, 1e-5, '(8x − x²)/16');
	assertDerivative(F3, f3, 0.01, 1.99, 21, 1e-5, 'x²(3 − x)/4');
	assertDerivative(FA2, fA2, 0.01, 1.99, 21, 1e-5, '(4x − x²)/4');
	const checks: [string, boolean][] = [
		['strips', near(F9(0.6) - F9(0.5), 11 / 900) && near(F9(2.6) - F9(2.5), 51 / 900) && Math.abs((51 / 11) - 4.636) < 0.001 && near((F9(1.6) - F9(1.5)) / 0.1, 0.34444, 1e-4) && near((F9(1.51) - F9(1.5)) / 0.01, 0.33444, 1e-4) && near(f9(1.5), 1 / 3)],
		['arrivals', ARRIVALS.length === 90 && tally.join() === '10,30,50'],
		['density histogram', REL5.every((r, i) => near(r / 0.1, DENS5[i])) && near(REL5.reduce((s: number, v) => s + v, 0), 1)],
		['areas', near(integrate(f9, 1, 2), 1 / 3) && near(integrate(f9, 0, 3), 1) && near(0.5 * 3 * (2 / 3), 1)],
		['courier', near(integrate(x => fc(x, 1), 0, 4), 8) && near(fc(0), 0.5) && near(integrate(x => fc(x), 0, 1), 7 / 16) && near(Fc(1), 7 / 16) && near(Fc(4), 1)],
		['f from F', near(F3(2), 1) && near(integrate(f3, 0, 2), 1)],
		['A1', near(integrate(x => x + 1, 0, 2), 4) && near(integrate(fA1, 1, 2), 5 / 8) && near(fA1(2), 3 / 4)],
		['A2', near(integrate(fA2, 0, 2), 1) && near(FA2(2), 1)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-s05 numbers: ' + bad.join(', '));
}
export const DENS = MATH_ROLES.b;
export const TEAL = MATH_TEAL;

// ---------- plates (alpha > 32 boxes, measured 16 Nov) ----------
export const VAN: PlateSpec = {src: 'assets/maths/ma12-delivery-van-v1.png', nat: [1642, 958], box: [236, 222, 1406, 790]};
export const PARCEL: PlateSpec = {src: 'assets/physics/phys-y11-box-v1.png', nat: [1200, 1000], box: [108, 275, 1092, 725]};
export const S05_PLATES = [VAN, PARCEL, BLOCKS];
export const Van: React.FC<{x: number; y: number; w: number; at?: number; out?: number}> = p => <Plate plate={VAN} {...p} />;
export const Parcel: React.FC<{x: number; y: number; w: number; at?: number; out?: number}> = p => <Plate plate={PARCEL} {...p} />;
export const vanH = (w: number) => plateHeight(VAN, w);
export const parcelH = (w: number) => plateHeight(PARCEL, w);

// ---------- ticks ----------
export const hourTicks = [{value: 0, label: '9 am'}, {value: 1, label: '10'}, {value: 2, label: '11'}, {value: 3, label: '12'}];
export const hour8Ticks = [{value: 0, label: '8 am'}, {value: 1, label: '9'}, {value: 2, label: '10'}, {value: 3, label: '11'}, {value: 4, label: '12'}];
export const xTicksN = (vals: readonly number[]) => vals.map(v => ({value: v, label: String(v)}));

// ---------- the paired view ----------
type Win = {x: [number, number]; y: [number, number]};
export type PairProps = {
	x: number; y: number; w: number; hTop: number; hBot: number; gap?: number; winTop: Win; winBot: Win;
	F?: (x: number) => number; f?: (x: number) => number; drawF?: number; drawf?: number; fFrom?: number;
	xTicks?: readonly {value: number; label: string}[]; yTopTicks?: readonly {value: number; label: string}[]; yBotTicks?: readonly {value: number; label: string}[];
	xLabel?: string; topLabel?: string; botLabel?: string; area?: {a: number; b: number; o: number}; at?: number; out?: number;
	top?: (m: PlotMap) => React.ReactNode; bot?: (m: PlotMap) => React.ReactNode; topOn?: number;
};
/** Violet F in the upper panel, teal f in the lower; `drawF`/`drawf` are the x the pens have reached; `area` shades under f. */
export const Pair: React.FC<PairProps> = ({x, y, w, hTop, hBot, gap = 14, winTop, winBot, F, f, drawF, drawf, fFrom, xTicks, yTopTicks = [{value: 1, label: '1'}], yBotTicks = [], xLabel = 'x', topLabel = 'F(x)', botLabel = 'f(x)', area, at = -30, out, top, bot, topOn = 1}) => {
	const y2 = y + hTop + gap;
	return <>
		{topOn > 0.01 ? <StudioPlot x={x} y={y} width={w} height={hTop} window={winTop} xTicks={xTicks} yTicks={yTopTicks} xLabel="" yLabel={topLabel} grid={false} at={at} out={out} opacity={topOn}>
			{m => <>
				{F ? <g clipPath={m.clip}><path d={fnPath(m, F, winTop.x[0], Math.min(winTop.x[1], drawF ?? winTop.x[1]), 300)} stroke={MATH_ROLES.gradient.stroke} strokeWidth={7} fill="none" strokeLinejoin="round" /></g> : null}
				{top ? top(m) : null}
			</>}
		</StudioPlot> : null}
		<StudioPlot x={x} y={y2} width={w} height={hBot} window={winBot} xTicks={xTicks} yTicks={yBotTicks} xLabel={xLabel} yLabel={botLabel} grid={false} at={at} out={out}>
			{m => <>
				{f && area && area.o > 0.01 ? <path d={regionPath(m, f, area.a, area.b)} fill="#f3d9a6" stroke={MATH_ROLES.k.stroke} strokeWidth={3} opacity={area.o} /> : null}
				{f ? <g clipPath={m.clip}><path d={fnPath(m, f, fFrom ?? winBot.x[0], Math.min(winBot.x[1], drawf ?? winBot.x[1]), 300, [0, 2, 3, 4].filter(b => b > winBot.x[0] && b < winBot.x[1] && Math.abs(f(b - 1e-6) - f(b + 1e-6)) > 1e-3))} stroke={DENS.stroke} strokeWidth={7} fill="none" strokeLinejoin="round" /></g> : null}
				{bot ? bot(m) : null}
			</>}
		</StudioPlot>
	</>;
};

// ---------- integral and evaluation brackets in working rows ----------
const lim: React.CSSProperties = {display: 'inline-flex', flexDirection: 'column', fontSize: '0.6em', lineHeight: 1.0, verticalAlign: 'middle', margin: '0 0.12em 0 0.04em', textAlign: 'left'};
export const Int: React.FC<{lo: React.ReactNode; hi: React.ReactNode}> = ({lo, hi}) => (
	<span style={{display: 'inline-flex', alignItems: 'center'}}><span style={{fontSize: '1.2em', lineHeight: 1}}>∫</span><span style={lim}><span>{hi}</span><span style={{marginTop: '0.35em'}}>{lo}</span></span></span>
);
export const Ev: React.FC<{lo: React.ReactNode; hi: React.ReactNode; children: React.ReactNode}> = ({lo, hi, children}) => (
	<span style={{display: 'inline-flex', alignItems: 'center'}}>[{children}]<span style={lim}><span>{hi}</span><span style={{marginTop: '0.35em'}}>{lo}</span></span></span>
);
/** A small amber bracket and label on a plot (frame coordinates from the plot map), for rises and heights. */
export const RiseBracket: React.FC<{m: PlotMap; x: number; y0: number; y1: number; label?: string; o?: number; side?: 1 | -1}> = ({m, x, y0, y1, label, o = 1, side = 1}) => {
	const [px, a] = m.p(x, y0), [, b] = m.p(x, y1), d = 12 * side;
	return <g opacity={o}>
		<path d={`M${px},${a} h${d} V${b} h${-d}`} fill="none" stroke={MATH_ROLES.k.stroke} strokeWidth={5} />
		{label ? <text x={px + d + 8 * side} y={(a + b) / 2 + 12} textAnchor={side > 0 ? 'start' : 'end'} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: MATH_ROLES.k.ink}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">{label}</text> : null}
	</g>;
};
/** Fades a group in at `at` (frame) for marks inside a plot render prop. */
export const useFade = (at: number, dur = 12) => prog(useCurrentFrame(), at, dur);
export {INK};
