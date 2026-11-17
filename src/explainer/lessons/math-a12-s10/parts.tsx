// Lesson parts for math-a12-s10 (Revision 5: the normal PDF's parts, the global maximum at μ, inflection at μ ± σ,
// the empirical rule measured on a graphing calculator, applied and judged, and the S-shaped CDF; apples graded by
// mass, N(150, 15²)), on the maths studio kit and s09's parts (imported read-only through ../math-a12-s09/parts,
// which carry s01 to s08's and the f-strand board parts). Lesson-local rigs:
// - the numbers (checked at load against the design's "Numbers to verify");
// - Calc: the painted graphing calculator with coded content drawn inside its measured screen rectangle;
// - ScreenGraph: a small bell (or S-curve) with a band and a readout, sized to that screen;
// - Frac, Sup and Lit (a part of a formula that glows on cue).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {CARD, MATH_ROLES, normBetween, normCdf, normPdf, plateHeight, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {Plate} from '../math-a12-s09/parts';

export * from '../math-a12-s09/parts';
export {S09FinalFrame} from '../math-a12-s09/s3';

// ---------- numbers (design "Numbers to verify") ----------
export const AM = 150, AS = 15;
export const pdfA = (v: number) => normPdf(v, AM, AS);
{
	const near = (a: number, b: number, t = 5e-5) => Math.abs(a - b) < t;
	const within = (k: number) => normBetween(AM - k * AS, AM + k * AS, AM, AS);
	const checks: [string, boolean][] = [
		['peak', near(pdfA(150), 0.026596, 1e-6) && near(normPdf(40, 40, 5), 0.079788, 1e-6)],
		['bands', near(within(0.5), 0.3829) && near(within(1), 0.6827) && near(within(2), 0.9545) && near(within(3), 0.9973)],
		['bags', near(normBetween(171, 179, 175, 4), 0.6827)],
		['cdf', near(normCdf(130, AM, AS), 0.0912) && near(normCdf(135, AM, AS), 0.1587) && near(normCdf(165, AM, AS), 0.8413) && near(normCdf(150, AM, AS), 0.5, 1e-9)],
		['inflection', [135, 165].every(v => Math.abs((v - AM) ** 2 - AS ** 2) < 1e-9) && 2 * AS * AS === 450],
		['heights', 170 - 8 === 162 && 170 + 8 === 178 && 170 + 16 === 186 && 170 + 24 === 194 && near(1 - normCdf(194, 170, 8), 0.00135, 1e-5) && near(1 - normCdf(196, 170, 8), 0.000577, 1e-6)],
		['A1', Math.sqrt(36) === 6 && 80 - 12 === 68 && 80 + 12 === 92 && 80 + 6 === 86],
		['A2', 2 * 5 * 5 === 50 && near(40 - Math.sqrt(50), 32.93, 0.005) && near(40 + Math.sqrt(50), 47.07, 0.005)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-s10 numbers: ' + bad.join(', '));
}

// ---------- plates (alpha > 32 boxes, measured 17 Nov) ----------
const M = 'assets/maths/';
export const APPLE: PlateSpec = {src: M + 'ma12-apple-v1.png', nat: [1254, 1254], box: [184, 124, 1002, 1095]};
export const CRATE: PlateSpec = {src: M + 'ma12-apple-crate-v1.png', nat: [1536, 1024], box: [131, 86, 1402, 944]};
export const GCALC: PlateSpec = {src: M + 'ma12-graphing-calculator-v1.png', nat: [887, 1774], box: [112, 219, 769, 1573]};
export const SNAPPER: PlateSpec = {src: 'assets/biology/y11-fish-snapper-v1.png', nat: [1691, 930], box: [126, 150, 1565, 796]};
export const PERCH: PlateSpec = {src: 'assets/biology/y11-fish-golden-perch-v1.png', nat: [1691, 930], box: [128, 144, 1559, 798]};
export const S10_PLATES = [APPLE, CRATE, GCALC, SNAPPER, PERCH];
/** Screen rectangle of the calculator plate in native pixels (ma12-graphing-calculator-v1.json, ±4 px). */
const SCREEN = [183, 337, 699, 662] as const;

// ---------- the calculator ----------
export type ScreenBox = {x: number; y: number; w: number; h: number};
/** Frame geometry of the calculator drawn with its alpha box's top left at (x, y) and the box h tall. */
export const calcGeom = (x: number, y: number, h: number) => {
	const s = h / (GCALC.box[3] - GCALC.box[1]);
	return {w: (GCALC.box[2] - GCALC.box[0]) * s, screen: {x: x + (SCREEN[0] - GCALC.box[0]) * s, y: y + (SCREEN[1] - GCALC.box[1]) * s, w: (SCREEN[2] - SCREEN[0]) * s, h: (SCREEN[3] - SCREEN[1]) * s}};
};
/** The painted graphing calculator; `screen` draws coded content inside its measured screen rectangle. */
export const Calc: React.FC<{x: number; y: number; h: number; at?: number; out?: number; o?: number; screen?: (s: ScreenBox) => React.ReactNode}> = ({x, y, h, at = -30, out, o = 1, screen}) => {
	const f = useCurrentFrame();
	const g = calcGeom(x, y, h);
	const op = vis(f, at, out, 14) * o;
	if (op <= 0.001) return null;
	return <>
		<Plate plate={GCALC} x={x} y={y} w={g.w} at={at} out={out} o={o} />
		{screen ? <div style={{position: 'absolute', left: g.screen.x + 4, top: g.screen.y + 4, width: g.screen.w - 8, height: g.screen.h - 8, overflow: 'hidden', opacity: op, borderRadius: 4}}>{screen({x: 0, y: 0, w: g.screen.w - 8, h: g.screen.h - 8})}</div> : null}
	</>;
};
const SCREEN_INK = '#1f2a24';
/**
 * A small graph for the calculator's screen: the bell N(μ, σ²) (or its CDF) over `win`, drawn up to `draw` (0..1),
 * a shaded band [a, b] and a readout line (at least 32 px) along the bottom.
 */
export const ScreenGraph: React.FC<{s: ScreenBox; mu: number; sigma: number; win: [number, number]; draw?: number; band?: [number, number]; cdf?: {to: number}; readout?: React.ReactNode; size?: number}> = ({s, mu, sigma, win, draw = 1, band, cdf, readout, size = 34}) => {
	const gh = readout ? s.h - size * 1.25 : s.h - 8;
	const X = (v: number) => 8 + ((v - win[0]) / (win[1] - win[0])) * (s.w - 16);
	const peak = normPdf(mu, mu, sigma);
	const Y = (d: number) => 6 + (1 - d / (peak * 1.12)) * (gh - 10);
	const YC = (p: number) => 6 + (1 - p) * (gh - 10);
	const path = (a: number, b: number, fn: (v: number) => number, close: boolean) => {let d = ''; const n = 80; for (let i = 0; i <= n; i++) {const v = a + ((b - a) * i) / n; d += `${i ? 'L' : 'M'}${X(v).toFixed(1)},${fn(v).toFixed(1)} `;} return close ? d + `L${X(b)},${Y(0)} L${X(a)},${Y(0)} Z` : d;};
	const dens = (v: number) => Y(normPdf(v, mu, sigma));
	return <div style={{position: 'absolute', left: s.x, top: s.y, width: s.w, height: s.h}}>
		<svg width={s.w} height={gh} style={{position: 'absolute', left: 0, top: 0}}>
			<line x1={4} x2={s.w - 4} y1={Y(0)} y2={Y(0)} stroke={SCREEN_INK} strokeWidth={2} opacity={0.7} />
			{band ? <path d={path(Math.max(win[0], band[0]), Math.min(win[1], band[1]), dens, true)} fill={SCREEN_INK} opacity={0.32} /> : null}
			{cdf ? <path d={path(win[0], Math.max(win[0], Math.min(win[1], cdf.to)), v => YC(normCdf(v, mu, sigma)), false)} stroke={SCREEN_INK} strokeWidth={3.5} fill="none" /> : null}
			{!cdf && draw > 0.001 ? <path d={path(win[0], win[0] + (win[1] - win[0]) * Math.min(1, draw), dens, false)} stroke={SCREEN_INK} strokeWidth={3.5} fill="none" /> : null}
		</svg>
		{readout ? <div style={{position: 'absolute', right: 8, bottom: 2, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: SCREEN_INK, whiteSpace: 'pre', fontVariantNumeric: 'tabular-nums', lineHeight: 1.1}}>{readout}</div> : null}
	</div>;
};

// ---------- typeset helpers ----------
export const Sup: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.64em', position: 'relative', top: '-0.78em', marginLeft: '0.03em', whiteSpace: 'pre'}}>{children}</span>;
export const Frac: React.FC<{n: React.ReactNode; d: React.ReactNode; color?: string}> = ({n, d, color}) => (
	<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', fontSize: '0.8em', lineHeight: 1.08, margin: '0 0.1em', color}}>
		<span style={{padding: '0 0.16em'}}>{n}</span>
		<span style={{alignSelf: 'stretch', height: '0.075em', minHeight: 3, background: 'currentColor', borderRadius: 2}} />
		<span style={{padding: '0 0.16em'}}>{d}</span>
	</span>
);
/** A part of a formula that glows (amber soft) between `at` and `out`. */
export const Lit: React.FC<{at?: number; out?: number; color?: string; children: React.ReactNode}> = ({at, out, color = 'rgba(243,217,166,0.95)', children}) => {
	const f = useCurrentFrame();
	const g = at === undefined ? 0 : vis(f, at, out, 10);
	return <span style={{background: g > 0.01 ? color.replace(/[\d.]+\)$/, `${(0.95 * g).toFixed(2)})`) : undefined, borderRadius: 10, boxShadow: g > 0.01 ? `0 0 0 ${4 * g}px rgba(209,143,31,${0.5 * g})` : undefined, padding: '0 0.06em'}}>{children}</span>;
};
/** The normal PDF, typeset; each part can glow on cue. */
export const PdfFormula: React.FC<{front?: [number, number?]; power?: [number, number?]; minus?: [number, number?]; sigma?: string; mu?: string; twoSig?: string}> = ({front, power, minus, sigma = 'σ', mu = 'μ', twoSig}) => (
	<span style={{whiteSpace: 'nowrap'}}>f(x) = <Lit at={front?.[0]} out={front?.[1]}><Frac n="1" d={<>{sigma}√(2π)</>} /></Lit> e<Sup><Lit at={power?.[0]} out={power?.[1]}><Lit at={minus?.[0]} out={minus?.[1]} color="rgba(184,50,42,0.35)">−</Lit>(x − {mu})²/{twoSig ?? <>(2{sigma}²)</>}</Lit></Sup></span>
);
export const RED = MATH_ROLES.mistake.ink;
export const plateH = plateHeight;
export {CARD, FONT_HAND, prog};
