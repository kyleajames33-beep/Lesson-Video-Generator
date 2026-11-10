// Lesson parts for math-a12-i12 (Revision 2: symmetry and numerical checks; garden cut and fill, a stone
// footbridge), on the maths studio kit and i10's parts (imported read-only). Lesson-local rigs:
// - GardenRig: the painted garden section. The plate missed its 600 px per metre profile (238-I12-PLATE-PROFILES),
//   so it is never warped: the blue profile and the soil tints follow a smooth curve through Codex's measured
//   surface samples, and the string line is the measured y 467. The maths graph beside it is a separate coded plot;
//   - BridgeRig: the painted footbridge, its transparent opening filled from behind; the blue profile and the strip
//   pair follow a smooth curve through the measured springing points, quarter points and crown.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, FrameSvg, SvgPlate, integrate, plateMap, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';

export {ABLUE, AMBER, AMBER_STROKE, AnswerBox, Attempt, BoxCard, Chip, FramedCard, GRAD, Hand, Int, Lims, MiniPlot, PLabel, Row, SOFT, TEAL, Task, Tick} from '../math-a12-i10/parts';
export {BPlot} from '../math-a12-i10/s1';

// ---------- the models ----------
export const g = (x: number) => x * x * x * Math.cos(x);
export const cubic = (x: number) => x * x * x + 3 * x * x;
export const recip = (x: number) => 1 / x;
export const trap = (fn: (x: number) => number, a: number, b: number, n: number) => {const h = (b - a) / n; let s = (fn(a) + fn(b)) / 2; for (let i = 1; i < n; i++) s += fn(a + i * h); return s * h;};
export const CUT = integrate(x => Math.max(0, g(x)), 0, 1, 800);
{
	const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
	const F = (x: number) => x ** 3 * Math.sin(x) + 3 * x * x * Math.cos(x) - 6 * x * Math.sin(x) - 6 * Math.cos(x);
	const d = (fn: (x: number) => number, x: number) => (fn(x + 1e-5) - fn(x - 1e-5)) / 2e-5;
	const checks: [string, boolean][] = [
		['odd', near(integrate(g, -1, 1, 800), 0, 1e-9) && near(g(-0.6), -g(0.6)) && near(16 / 4 - 16 / 4, 0)],
		['profile', near(g(0.75), 0.309, 1e-3) && near(g(1), 0.540, 1e-3)],
		['even', near(2 * (Math.sin(Math.PI / 2) - Math.sin(0)), 2)],
		['mixed', near(integrate(cubic, -2, 2, 800), 16, 1e-6) && near(16 / 4 + 8 - (16 / 4 - 8), 16)],
		['trapezoidal', near(trap(recip, 1, 3, 4), 67 / 60) && near(2 / 3 + 1 / 2 + 2 / 5, 47 / 30) && near(Math.log(3), 1.0986, 1e-4)],
		['T_n', near(trap(recip, 1, 3, 1), 4 / 3) && near(trap(recip, 1, 3, 2), 7 / 6) && Math.abs(trap(recip, 1, 3, 8) - 1.1032) < 1e-4],
		['tool', near(d(F, 0.7), g(0.7), 1e-5) && near(F(1) - F(-1), 0, 1e-9)],
		['A1', near(integrate(x => x * x * Math.sin(x) + 3, -Math.PI, Math.PI, 800), 6 * Math.PI, 1e-6)],
		['A2', near(0.25 * (4 + 2 * (3.5 + 3 + 2) + 0), 5.25) && near(2 * 5.25, 10.5) && near(0.25 * (4 + 3.5 + 3 + 2 + 0), 3.125)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i12 numbers: ' + bad.join(', '));
}

/** Catmull-Rom path through points. */
const smoothPath = (pts: readonly (readonly [number, number])[]) => {
	let d = `M${pts[0][0]},${pts[0][1]}`;
	for (let i = 0; i < pts.length - 1; i++) {
		const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
		d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`;
	}
	return d;
};

// ---------- the garden ----------
export const GARDEN: PlateSpec = {src: 'assets/maths/ma12-garden-cut-fill-v1.png', nat: [1600, 1000], box: [162, 189, 1438, 867]};
const SURFACE: [number, number][] = [[280, 661], [387, 623], [524, 532], [661, 479], [798, 465], [935, 457], [1072, 417], [1209, 324], [1316, 243]];
const STRING_Y = 467;
export const GardenRig: React.FC<{x: number; y: number; w: number; soil?: number; profile?: number; tags?: number; ring?: number; at?: number; out?: number}> = ({x, y, w, soil = 1, profile = 1, tags = 0, ring = 0, at = -30, out}) => {
	usePlatePreload([GARDEN.src]);
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(GARDEN, x, y, w);
	const pts = SURFACE.map(([a, b]) => m.at(a, b));
	const [, sy] = m.at(0, STRING_Y);
	const d = smoothPath(pts);
	const region = `${d} L${pts[pts.length - 1][0]},${sy} L${pts[0][0]},${sy} Z`;
	const [lx] = m.at(250, 0), [rx] = m.at(1346, 0);
	const id = `gd${Math.round(x)}${Math.round(y)}`;
	return <FrameSvg style={{opacity: o}}>
		<defs>
			<clipPath id={id + 'u'}><rect x={lx} y={y - 200} width={rx - lx} height={sy - y + 200} /></clipPath>
			<clipPath id={id + 'l'}><rect x={lx} y={sy} width={rx - lx} height={400} /></clipPath>
		</defs>
		<SvgPlate plate={GARDEN} x={x} y={y} w={w} />
		<g opacity={soil}>
			<path d={region} fill="#5fb7b0" opacity={0.55} clipPath={`url(#${id}u)`} />
			<path d={region} fill="#e8913f" opacity={0.6} clipPath={`url(#${id}l)`} />
		</g>
		{ring > 0.01 ? <path d={region} fill="none" stroke="#d18f1f" strokeWidth={6} opacity={ring} /> : null}
		<path d={d} fill="none" stroke="#1f6fb2" strokeWidth={6} opacity={profile} />
		<line x1={lx} x2={rx} y1={sy} y2={sy} stroke={INK} strokeWidth={2} strokeDasharray="10 8" opacity={0.5 * profile} />
		<g opacity={tags}>
			<text x={pts[7][0] - 10} y={pts[7][1] - 30} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: '#13767a'}} stroke={CARD} strokeWidth={7} paintOrder="stroke">mound: soil cut</text>
			<text x={pts[1][0] + 10} y={sy - 20} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: '#9c5a00'}} stroke={CARD} strokeWidth={7} paintOrder="stroke">hollow: soil filled</text>
		</g>
	</FrameSvg>;
};

// ---------- the footbridge ----------
export const BRIDGE: PlateSpec = {src: 'assets/maths/ma12-stone-footbridge-v1.png', nat: [1400, 900], box: [138, 197, 1261, 756]};
const ARCH: [number, number][] = [[326, 658], [477, 444], [700, 388], [923, 448], [1076, 658]];
export const BridgeRig: React.FC<{x: number; y: number; w: number; fill?: number; mirror?: number; pair?: number; at?: number; out?: number}> = ({x, y, w, fill = 1, mirror = 0, pair = 0, at = -30, out}) => {
	usePlatePreload([BRIDGE.src]);
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(BRIDGE, x, y, w);
	const pts = ARCH.map(([a, b]) => m.at(a, b));
	const d = smoothPath(pts);
	const [cx] = m.at(700, 0), [, by] = m.at(0, 658);
	const left = smoothPath(pts.slice(0, 3));
	const mirrored = pts.slice(0, 3).map(([a, b]) => [2 * cx - a, b] as [number, number]);
	const sw = 34 * m.s;
	const strip = (fx: number, fy: number) => {const [sx, sy] = m.at(fx, fy); return <rect x={sx - sw / 2} y={sy} width={sw} height={by - sy} fill="#f8e8c8" stroke="#d18f1f" strokeWidth={4} />;};
	return <FrameSvg style={{opacity: o}}>
		<path d={`${d} Z`} fill="#d6eeee" opacity={fill} />
		{pair > 0.01 ? <g opacity={pair}>{strip(477, 455)}{strip(923, 459)}</g> : null}
		<SvgPlate plate={BRIDGE} x={x} y={y} w={w} />
		<path d={d} fill="none" stroke="#1f6fb2" strokeWidth={6} />
		<line x1={cx} x2={cx} y1={pts[2][1] - 30} y2={by + 20} stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
		{mirror > 0.01 ? <g opacity={mirror}><path d={left} fill="none" stroke="#d18f1f" strokeWidth={5} strokeDasharray="12 9" transform={`translate(${2 * cx} 0) scale(-1 1)`} /><path d={smoothPath(mirrored)} fill="none" stroke="none" /></g> : null}
		{pair > 0.01 ? <g opacity={pair}>{[477, 923].map(fx => {const [sx, sy] = m.at(fx, 450); return <text key={fx} x={sx} y={sy - 18} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: '#13767a'}} stroke={CARD} strokeWidth={7} paintOrder="stroke">+s</text>;})}</g> : null}
	</FrameSvg>;
};
export const bridgeH = (w: number) => (w * (BRIDGE.box[3] - BRIDGE.box[1])) / (BRIDGE.box[2] - BRIDGE.box[0]);
export const gardenH = (w: number) => (w * (GARDEN.box[3] - GARDEN.box[1])) / (GARDEN.box[2] - GARDEN.box[0]);
