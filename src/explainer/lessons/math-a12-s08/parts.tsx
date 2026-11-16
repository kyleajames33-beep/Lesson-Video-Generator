// Lesson parts for math-a12-s08 (Revision 5: continuous expected value and variance; a running playlist on shuffle),
// on the maths studio kit (RunningMeanTrace, SpreadBrackets, FormulaCrosswalk, StudioToolPanel, ClassHistogram) and
// s07's parts (imported read-only through ../math-a12-s07/parts, which carry s01 to s06's and the f-strand board parts).
// Lesson-local rigs:
// - every density of the lesson and its moments (checked at load), the 60 stored songs (seed 808) and the 1,000 stored
//   bag masses' class counts (seed 909);
// - BeamDensity: a density resting on a violet beam (its x axis) over a fulcrum at `t`, tilted `tilt` degrees, with
//   optional midpoint strips that narrow into bars (`strips`) and a "?" or a μ label at the fulcrum;
// - Playlist: the shuffled songs as blue rows (scene 1) or as bars filling a strip end to end (scene 7).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {CARD, FrameSvg, MATH_ROLES, StudioPlot, fnPath, makePlot, regionPath} from '../../math/studio';
import type {PlateSpec, PlotMap, PlotTick} from '../../math/studio';
import {DATA_R, DENS, GREY, INK, TEAL_FILL} from '../math-a12-s07/parts';

export * from '../math-a12-s07/parts';

// ---------- densities and numbers (design "Numbers to verify") ----------
export const f8 = (x: number) => (x < 0 || x > 4 ? 0 : x / 8);
export const fSong = (x: number) => (x < 2 || x > 6 ? 0 : (Math.PI / 8) * Math.sin((Math.PI * (x - 2)) / 4));
export const f2x = (x: number) => (x < 0 || x > 1 ? 0 : 2 * x);
export const fCos = (x: number) => (x < 0 || x > Math.PI / 2 ? 0 : Math.cos(x));
const simpson = (g: (x: number) => number, a: number, b: number, n = 2000) => {const h = (b - a) / n; let s = g(a) + g(b); for (let i = 1; i < n; i++) s += g(a + i * h) * (i % 2 ? 4 : 2); return (s * h) / 3;};
/** Midpoint strips of x/8 on [0, 4]: midpoints, probabilities f(m)Δx, balance point Σ m f(m)Δx. */
export const strips8 = (n: number) => {const d = 4 / n, ms = Array.from({length: n}, (_, i) => (i + 0.5) * d), ps = ms.map(m => f8(m) * d); return {d, ms, ps, bal: ms.reduce((s, m, i) => s + m * ps[i], 0), tot: ps.reduce((s, p) => s + p, 0)};};
export const MU8 = 8 / 3, SIG8 = (2 * Math.SQRT2) / 3;
/** 60 song lengths (minutes), Python random.Random(808), inverse CDF of (1 − cos(π(x − 2)/4))/2, 4 dp (author note k). */
export const SONGS: readonly number[] = '3.6503;4.3878;4.5821;3.8474;5.3571;3.2943;3.6144;3.9668;3.3185;4.0874;4.7645;2.2742;2.6736;4.7028;2.5221;2.8423;5.4063;3.2124;3.3982;4.1667;2.7131;4.2295;5.5356;2.4939;4.6124;4.9228;4.5616;4.1758;4.0173;5.3409;4.7291;4.7908;3.9625;2.2413;3.2865;5.2316;4.7013;4.3059;5.2185;5.4360;4.0276;5.3405;2.8503;4.0330;3.7765;4.2319;2.9706;4.1012;3.8054;3.1622;4.0255;4.3680;4.1710;2.1984;4.1159;5.2362;3.9530;3.9138;4.6150;2.8538'
	.split(';').map(Number);
/** 1,000 bag masses (Python random.Random(909), gauss(175, 4)): 2 g classes from 161 to 189 g (author note l). */
export const BAG_EDGES = Array.from({length: 15}, (_, i) => 161 + 2 * i);
export const BAG_COUNTS = [3, 3, 13, 37, 91, 157, 176, 190, 150, 115, 44, 16, 3, 2] as const;
export const mss = (m: number) => {const s = Math.round(m * 60); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;};
{
	const near = (a: number, b: number, t = 1e-6) => Math.abs(a - b) < t;
	const avg = (n: number) => SONGS.slice(0, n).reduce((s, v) => s + v, 0) / n;
	const E = (f: (x: number) => number, a: number, b: number, k = 1) => simpson(x => x ** k * f(x), a, b);
	const checks: [string, boolean][] = [
		['x/8', near(E(f8, 0, 4, 0), 1) && near(E(f8, 0, 4), 8 / 3) && near(E(f8, 0, 4, 2), 8) && near(8 - 64 / 9, 8 / 9) && near(simpson(x => (x - MU8) ** 2 * f8(x), 0, 4), 8 / 9) && near(SIG8, 0.942809, 1e-6)],
		['strips', [4, 8, 16].map(n => strips8(n).bal).every((b, i) => near(b, [2.625, 2.65625, 2.6640625][i], 1e-12)) && [4, 8, 16].every(n => near(strips8(n).tot, 1, 1e-12)) && strips8(4).ps.every((p, i) => near(p, [1, 3, 5, 7][i] / 16, 1e-12))],
		['train', near(simpson(x => x / 4, 1, 5), 3) && near(simpson(x => (x * x) / 4, 1, 5), 31 / 3) && near(31 / 3 - 9, 4 / 3) && near(16 / 12, 4 / 3)],
		['song', near(E(fSong, 2, 6, 0), 1) && near(E(fSong, 2, 6), 4) && near(E(fSong, 2, 6, 2), 20 - 32 / Math.PI ** 2) && near(4 - 32 / Math.PI ** 2, 0.757722, 1e-6) && near(Math.sqrt(4 - 32 / Math.PI ** 2) * 60, 52.228, 1e-3)],
		['songs', SONGS.length === 60 && [1, 5, 10, 20, 40, 60].map(n => avg(n).toFixed(3)).join() === '3.650,4.365,4.011,3.803,4.064,4.005' && SONGS.slice(0, 10).reduce((s, v) => s + v, 0).toFixed(2) === '40.11'],
		['A1', near(E(f2x, 0, 1), 2 / 3) && near(E(f2x, 0, 1, 2), 1 / 2) && near(1 / 2 - 4 / 9, 1 / 18) && near(E(f2x, 0, 1, 0), 1)],
		['A2', near(E(fCos, 0, Math.PI / 2), Math.PI / 2 - 1) && near(E(fCos, 0, Math.PI / 2, 2) - (Math.PI / 2 - 1) ** 2, Math.PI - 3) && near(simpson(x => (x * Math.cos(x)) ** 2, 0, Math.PI / 2) - (Math.PI / 2 - 1) ** 2, -0.07254, 1e-5)],
		['bags', BAG_COUNTS.reduce((s, c) => s + c, 0) === 1000 && BAG_EDGES.length === BAG_COUNTS.length + 1],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-s08 numbers: ' + bad.join(', '));
}

// ---------- plates (alpha > 32 boxes, measured 16 Nov) ----------
export const PHONES: PlateSpec = {src: 'assets/maths/ma12-headphones-v1.png', nat: [1341, 1173], box: [275, 162, 1053, 1008]};
export const CHIP_BAG: PlateSpec = {src: 'assets/maths/ma12-chip-bag-v1.png', nat: [1086, 1448], box: [122, 189, 939, 1265]};
export const S08_PLATES = [PHONES, CHIP_BAG];
export const VIO = MATH_ROLES.gradient;
export const AMBER = MATH_ROLES.k;

// ---------- BeamDensity ----------
export type BeamProps = {
	x: number; y: number; w: number; h: number; win: {x: [number, number]; y: [number, number]}; f: (x: number) => number; from: number; to: number;
	t: number; tilt?: number; tri?: number; q?: number; mu?: {label: string; o: number}; fill?: number; strips?: {n: number; narrow: number; o: number; labels?: number};
	xTicks?: readonly PlotTick[]; yTicks?: readonly PlotTick[]; xLabel?: string; yLabel?: string; at?: number; out?: number; children?: (m: PlotMap) => React.ReactNode;
};
/** A density (teal, 0 elsewhere) resting on a violet beam along its x axis, over a violet fulcrum at `t`, tilted `tilt`
 * degrees about the fulcrum (positive: right end down). `strips` draws n midpoint strips (amber) narrowing into bars
 * (`narrow` 0..1) with their probabilities. */
export const BeamDensity: React.FC<BeamProps> = ({x, y, w, h, win, f, from, to, t, tilt = 0, tri = 1, q = 0, mu, fill = 0.6, strips, xTicks, yTicks = [], xLabel = 'x', yLabel = 'f(x)', at = -30, out, children}) => {
	const fr = useCurrentFrame();
	const m0 = makePlot(x, y, w, h, win);
	const [fx, fy] = m0.pf(t, 0);
	const o = (out === undefined ? 1 : 1 - prog(fr, out, 12)) * prog(fr, at, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<div style={{position: 'absolute', inset: 0, transform: `rotate(${tilt}deg)`, transformOrigin: `${fx}px ${fy}px`}}>
			<StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} grid={false} at={-300}>
				{m => {
					const [xl, y0] = m.p(win.x[0], 0), [xr] = m.p(win.x[1], 0);
					return <>
						{fill > 0.01 ? <path d={regionPath(m, f, from, to)} fill={TEAL_FILL} opacity={fill} /> : null}
						{strips && strips.o > 0.01 ? (() => {
							const d = (to - from) / strips.n, wd = d * (1 - strips.narrow * 0.82);
							return <g opacity={strips.o}>{Array.from({length: strips.n}, (_, i) => {
								const mid = from + (i + 0.5) * d, [a, top] = m.p(mid - wd / 2, f(mid)), [b] = m.p(mid + wd / 2, 0);
								return <g key={i}>
									<rect x={a} y={top} width={b - a} height={y0 - top} fill="#f3d9a6" stroke={AMBER.stroke} strokeWidth={strips.n > 8 ? 2 : 4} />
									{strips.labels && strips.labels > 0.01 ? <text x={(a + b) / 2} y={top - 48} textAnchor="middle" opacity={strips.labels} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: AMBER.ink}} stroke={CARD} strokeWidth={6} paintOrder="stroke">{`${2 * i + 1}/16`}</text> : null}
								</g>;
							})}</g>;
						})() : null}
						<line x1={xl} x2={m.p(from, 0)[0]} y1={y0} y2={y0} stroke={DENS.stroke} strokeWidth={7} />
						<line x1={m.p(to, 0)[0]} x2={xr} y1={y0} y2={y0} stroke={DENS.stroke} strokeWidth={7} />
						<path d={fnPath(m, f, from + 1e-6, to - 1e-6, 300)} stroke={DENS.stroke} strokeWidth={7} fill="none" strokeLinejoin="round" />
						{[from, to].map(v => f(v + (v === from ? 1e-6 : -1e-6)) > 1e-3 ? <line key={v} x1={m.p(v, 0)[0]} x2={m.p(v, 0)[0]} y1={m.p(v, f(v + (v === from ? 1e-6 : -1e-6)))[1]} y2={y0} stroke={DENS.stroke} strokeWidth={3} strokeDasharray="8 7" /> : null)}
						{children ? children(m) : null}
					</>;
				}}
			</StudioPlot>
			<FrameSvg style={{opacity: tri}}><rect x={m0.pf(win.x[0], 0)[0]} y={fy - 5} width={m0.pf(win.x[1], 0)[0] - m0.pf(win.x[0], 0)[0]} height={10} rx={5} fill={VIO.stroke} /></FrameSvg>
		</div>
		<FrameSvg style={{opacity: tri}}>
			<path d={`M${fx},${fy + 8} L${fx - 40},${fy + 80} L${fx + 40},${fy + 80} Z`} fill={VIO.stroke} stroke={CARD} strokeWidth={4} strokeLinejoin="round" />
			<line x1={fx - 110} x2={fx + 110} y1={fy + 82} y2={fy + 82} stroke={GREY} strokeWidth={5} strokeLinecap="round" />
		</FrameSvg>
		{q > 0.01 ? <div style={{position: 'absolute', left: fx + 62, top: fy + 40, opacity: q, background: CARD, border: `4px solid ${VIO.stroke}`, borderRadius: 16, padding: '0 20px 4px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: VIO.ink}}>?</div> : null}
		{mu && mu.o > 0.01 ? <div style={{position: 'absolute', left: fx + 56, top: fy + 84, opacity: mu.o, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: VIO.ink, whiteSpace: 'pre'}}>{mu.label}</div> : null}
	</div>;
};

// ---------- Playlist ----------
/** The first `rows` songs as blue rows, each a bar as long as the song with a play mark and its length (m:ss). */
export const PlaylistRows: React.FC<{x: number; y: number; rows: number; at: number; pxPerMin?: number; gap?: number}> = ({x, y, rows, at, pxPerMin = 120, gap = 50}) => {
	const fr = useCurrentFrame();
	return <FrameSvg>{SONGS.slice(0, rows).map((s, i) => {
		const o = prog(fr, at + i * 4, 10), yy = y + i * gap;
		return <g key={i} opacity={o}>
			<path d={`M${x},${yy + 6} l20,12 l-20,12 Z`} fill={DATA_R.stroke} />
			<rect x={x + 34} y={yy} width={s * pxPerMin * o} height={36} rx={8} fill={DATA_R.soft} stroke={DATA_R.stroke} strokeWidth={3} />
			<text x={x + 44 + s * pxPerMin} y={yy + 30} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: DATA_R.ink}}>{mss(s)}</text>
		</g>;
	})}</FrameSvg>;
};
/** Songs played end to end on a strip (minutes), the first `shown` of them, with a dashed mark at `mark` minutes. */
export const PlaylistStrip: React.FC<{x: number; y: number; w: number; minutes: number; shown: number; mark?: {at: number; label: string; o: number}}> = ({x, y, w, minutes, shown, mark}) => {
	const k = Math.floor(shown), X = (v: number) => x + (v / minutes) * w;
	let t = 0;
	const bars = SONGS.slice(0, k).map((s, i) => {const a = t; t += s; return a < minutes ? <rect key={i} x={X(a) + 1} y={y} width={Math.max(1, X(Math.min(t, minutes)) - X(a) - 2)} height={44} rx={4} fill={i % 2 ? DATA_R.stroke : DATA_R.soft} stroke={DATA_R.stroke} strokeWidth={2} /> : null;});
	return <FrameSvg>
		<rect x={x} y={y} width={w} height={44} rx={6} fill="none" stroke={INK} strokeWidth={3} />
		{bars}
		{[0, 60, 120, 180, 240].filter(v => v <= minutes).map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y + 44} y2={y + 58} stroke={INK} strokeWidth={3} /><text x={X(v)} y={y + 90} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{v} min</text></g>)}
		{mark && mark.o > 0.01 ? <g opacity={mark.o}><line x1={X(mark.at)} x2={X(mark.at)} y1={y - 30} y2={y + 58} stroke={VIO.stroke} strokeWidth={4} strokeDasharray="10 7" /><text x={X(mark.at)} y={y - 40} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: VIO.ink}}>{mark.label}</text></g> : null}
	</FrameSvg>;
};
export {simpson};
