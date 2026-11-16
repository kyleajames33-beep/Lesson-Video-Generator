// Lesson parts for math-a12-s06 (Revision 3: mode, median and quartiles of a density; a choc-chip cookie and the
// distance of a random chip from its centre), on the maths studio kit's probability set 3 (ChipScatter, SlidingWindow,
// QuantileReader) and s05's parts (imported read-only through ../math-a12-s05/parts, which carry s01 to s04's and the
// f-strand board parts). Lesson-local rigs:
// - every density of the lesson and its numbers (checked at load), and the 60 stored chip positions;
// - Cookie: the painted cookie with the chip sprites (kit ChipScatter), with coded circles and rings in cm;
// - Tri: the blue mode triangle under a point of a plot map.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {ChipScatter, FrameSvg, MATH_BLUE, MATH_ROLES} from '../../math/studio';
import type {PlateSpec, PlotMap, StudioPace} from '../../math/studio';

export * from '../math-a12-s05/parts';

// ---------- the densities and numbers (design "Numbers to verify") ----------
export const fH = (x: number) => (x < 0 || x > 2 ? 0 : (3 * x * (2 - x)) / 4);
export const FH = (x: number) => (x < 0 ? 0 : x > 2 ? 1 : (3 * x * x - x * x * x) / 4);
export const fK = (x: number) => (x < 0 || x > 4 ? 0 : x / 8);
export const FK = (x: number) => (x < 0 ? 0 : x > 4 ? 1 : (x * x) / 16);
export const f38 = (x: number) => (x < 0 || x > 2 ? 0 : (3 * x * x) / 8);
export const F38 = (x: number) => (x < 0 ? 0 : x > 2 ? 1 : (x * x * x) / 8);
export const fL = (x: number) => (x < 0 || x > 4 ? 0 : (3 * (4 - x) ** 2) / 64);
export const FL = (x: number) => (x < 0 ? 0 : x > 4 ? 1 : 1 - (4 - x) ** 3 / 64);
export const fA = (x: number) => (x < 0 || x > 1 ? 0 : 12 * x * x * (1 - x));
export const FQ = (x: number) => (x < 0 ? 0 : x > 2 ? 1 : (x * x + 2 * x) / 8);
export const R2 = 2 * Math.SQRT2, R3 = 2 * Math.sqrt(3);
/** 60 chips uniform over a disc of radius 4 (Python random.Random(708), rejection sampling): [distance ÷ 4, angle]. */
export const CHIPS: readonly [number, number][] = '0.72424,0.4121;0.51040,-2.5273;0.86465,0.2279;0.30668,2.4692;0.62957,-2.2041;0.60812,-3.0076;0.87339,0.3451;0.80649,1.8317;0.89386,-2.6298;0.80711,-1.9124;0.34234,-0.1873;0.75634,0.8547;0.97151,0.1724;0.94200,2.4527;0.70688,-1.8570;0.97019,0.3894;0.56962,2.1281;0.87919,-1.0726;0.28530,-1.5654;0.86633,1.9249;0.24699,-1.4658;0.80614,-0.8935;0.73288,2.1393;0.86177,-1.4737;0.22128,-2.0471;0.90681,-0.3156;0.43943,-1.0561;0.66555,2.6955;0.14200,-1.8856;0.29044,2.8864;0.39474,-2.9649;0.87462,-0.7220;0.34190,-0.1817;0.93206,-2.6680;0.74504,1.2013;0.64763,0.9148;0.48177,-3.0434;0.93336,-0.8181;0.57302,1.1180;0.94255,2.5046;0.74499,2.9498;0.75883,3.0727;0.81872,-1.4924;0.51102,-1.1075;0.74630,1.1077;0.88676,-2.0712;0.50808,-2.6522;0.94415,-2.8295;0.66464,1.4671;0.88403,1.1609;0.68062,-2.9959;0.37407,-3.0304;0.55137,-0.2213;0.49246,0.2936;0.71520,-0.1839;0.18195,-0.5105;0.79251,1.0063;0.62577,1.4430;0.53739,-2.9821;0.37143,-2.2494'
	.split(';').map(p => p.split(',').map(Number) as [number, number]);
export const chipsWithin = (cm: number) => CHIPS.filter(c => c[0] * 4 <= cm).length;
{
	const near = (a: number, b: number, t = 1e-9) => Math.abs(a - b) < t;
	const cnt = (a: number, b: number) => CHIPS.filter(c => c[0] * 4 >= a && c[0] * 4 < b).length;
	const checks: [string, boolean][] = [
		['hump', near(fH(1), 0.75) && near(FH(1), 0.5) && near(FH(1.1) - FH(0.9), 0.1495) && near(FH(0.3) - FH(0.1), 0.0535)],
		['cookie', near(FK(R2), 0.5) && near(FK(2), 0.25) && near(FK(R3), 0.75) && near(fK(4), 0.5) && Math.abs(R3 - 2 - 1.464) < 0.001],
		['chips', CHIPS.length === 60 && [cnt(0, 2), cnt(2, R2), cnt(R2, R3), cnt(R3, 4.01)].join() === '15,15,15,15' && [cnt(0, 1), cnt(1, 2), cnt(2, 3), cnt(3, 4.01)].join() === '4,11,21,24' && chipsWithin(R2) === 30],
		['3x²/8', near(F38(Math.cbrt(4)), 0.5) && near(F38(Math.cbrt(2)), 0.25) && near(f38(2), 1.5)],
		['lifetime', near(FL(4 - Math.cbrt(32)), 0.5) && Math.abs(4 - Math.cbrt(32) - 0.8252) < 1e-4 && near(fL(0), 3 / 4)],
		['A1', near(fA(2 / 3), 16 / 9) && fA(0) === 0 && fA(1) === 0],
		['A2', near(FQ(Math.sqrt(3) - 1), 0.25) && -1 - Math.sqrt(3) < 0],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-s06 numbers: ' + bad.join(', '));
}
export const MODE = MATH_BLUE;
export const QUANT = MATH_ROLES.k;

// ---------- plates (alpha > 32 boxes, measured 16 Nov) ----------
export const COOKIE: PlateSpec = {src: 'assets/maths/ma12-cookie-v1.png', nat: [1254, 1254], box: [86, 87, 1151, 1165]};
export const CHIP: PlateSpec = {src: 'assets/maths/ma12-choc-chip-v1.png', nat: [1254, 1254], box: [334, 301, 918, 947]};
export const S06_PLATES = [COOKIE, CHIP];
/** The cookie's painted circle (native, from ma12-cookie-v1.json): centre (618.4, 627.4), radius 531.2. */
const cookieGeom = (cx: number, cy: number, w: number) => {
	const s = w / (COOKIE.box[2] - COOKIE.box[0]);
	return {R: 531.2 * s, ox: cx + (618.4 - (COOKIE.box[0] + COOKIE.box[2]) / 2) * s, oy: cy + (627.4 - (COOKIE.box[1] + COOKIE.box[3]) / 2) * s};
};
/** The cookie (alpha box centred at cx, cy, w wide) with its chips; `circle` in cm (0 to 4) with a live inside count; `rings` in cm; `tint` pieces. */
export const Cookie: React.FC<{cx: number; cy: number; w: number; pace?: StudioPace; circle?: {cm: number; label?: string}; rings?: readonly number[]; tint?: {o: number; edges: readonly number[]}; ringGlow?: readonly {a: number; b: number; o: number; color?: string}[]; rim?: number; ruler?: number; readout?: {x: number; y: number; width?: number}; at?: number; out?: number}> = ({cx, cy, w, pace = {at: -200, slow: 0, until: -100}, circle, rings = [], tint, ringGlow = [], rim = 0, ruler = 0, readout, at = -30, out}) => {
	const g = cookieGeom(cx, cy, w);
	const ann = (a: number, b: number) => {const r0 = (a / 4) * g.R, r1 = (b / 4) * g.R; return `M${g.ox - r1},${g.oy} a${r1},${r1} 0 1,0 ${2 * r1},0 a${r1},${r1} 0 1,0 ${-2 * r1},0 Z` + (r0 > 0 ? ` M${g.ox - r0},${g.oy} a${r0},${r0} 0 1,1 ${2 * r0},0 a${r0},${r0} 0 1,1 ${-2 * r0},0 Z` : '');};
	const c0 = CHIPS[11];
	return <>
		<ChipScatter cx={g.ox} cy={g.oy} R={g.R} points={CHIPS} pace={pace} plate={{plate: COOKIE, w}} sprite={{plate: CHIP, w: Math.max(18, w * 0.05)}}
			circle={circle ? {r: circle.cm / 4, label: circle.label} : undefined} rings={rings.map(v => v / 4)} at={at} out={out}
			readout={readout && circle ? {x: readout.x, y: readout.y, width: readout.width ?? 480, rows: inside => [
				{label: 'chips inside', value: inside, text: `${inside} of 60`, role: 'a'},
				{label: 'fraction inside', value: (circle.cm ** 2) / 16, digits: 3, role: 'k'},
			]} : undefined} />
		<FrameSvg>
			{tint && tint.o > 0.01 ? tint.edges.slice(0, -1).map((a, i) => <path key={i} d={ann(a, tint.edges[i + 1])} fillRule="evenodd" fill={i % 2 ? 'rgba(31,138,143,0.30)' : 'rgba(209,143,31,0.32)'} opacity={tint.o} />) : null}
			{ringGlow.map((r, i) => (r.o > 0.01 ? <path key={'g' + i} d={ann(r.a, r.b)} fillRule="evenodd" fill={r.color ?? 'rgba(31,111,178,0.40)'} opacity={r.o} /> : null))}
			{rim > 0.01 ? <circle cx={g.ox} cy={g.oy} r={g.R} fill="none" stroke={MODE} strokeWidth={10} opacity={rim} /> : null}
			{ruler > 0.01 ? (() => {const px = g.ox + c0[0] * g.R * Math.cos(c0[1]), py = g.oy - c0[0] * g.R * Math.sin(c0[1]); return <g opacity={ruler}><line x1={g.ox} y1={g.oy} x2={px} y2={py} stroke="#2a2420" strokeWidth={5} /><circle cx={g.ox} cy={g.oy} r={7} fill="#2a2420" /><text x={(g.ox + px) / 2} y={(g.oy + py) / 2 - 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: '#2a2420'}} stroke="#fffdf8" strokeWidth={8} paintOrder="stroke">X cm</text></g>;})() : null}
		</FrameSvg>
	</>;
};
export const cookieRadius = (w: number) => cookieGeom(0, 0, w).R;

/** The blue mode triangle under x on a plot (frame coordinates via m.pf). */
export const Tri: React.FC<{m: PlotMap; x: number; o: number; label?: string}> = ({m, x, o, label}) => {
	if (o <= 0.01) return null;
	const [px, py] = m.pf(x, m.win.y[0] < 0 ? 0 : m.win.y[0]);
	return <FrameSvg style={{opacity: o}}>
		<path d={`M${px},${py + 4} l-22,36 h44 Z`} fill={MODE} stroke="#fffdf8" strokeWidth={4} />
		{label ? <text x={px} y={py + 80} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: MODE}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">{label}</text> : null}
	</FrameSvg>;
};
/** Amber across-and-down quantile lines on a paired view's top (F) map, landing on the bottom map's axis. */
export const AcrossDown: React.FC<{top: PlotMap; bot?: PlotMap; F: (x: number) => number; p: number; q: number; o: number; label?: string}> = ({top, bot, F, p, q, o, label}) => {
	if (o <= 0.01) return null;
	const [ax, ay] = top.pf(top.win.x[0], p), [qx, qy] = top.pf(q, F(q)), [, by] = (bot ?? top).pf(q, 0);
	return <FrameSvg style={{opacity: o}}>
		<path d={`M${ax},${ay} H${qx} V${by}`} fill="none" stroke={QUANT.stroke} strokeWidth={5} strokeDasharray="12 8" />
		{label ? <text x={qx + 10} y={by - 14} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: QUANT.ink}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">{label}</text> : null}
	</FrameSvg>;
};
export const useP = (at: number, dur = 14) => prog(useCurrentFrame(), at, dur);
