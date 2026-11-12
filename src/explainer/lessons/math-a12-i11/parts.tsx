// Lesson parts for math-a12-i11 (Revision 3: area using y, and reflecting eˣ and ln x in y = x; a backyard pool
// with a sloping beach entry), built on the maths studio kit. Lesson-local rigs:
// - PoolCut: the painted cutaway (ma12-pool-cutaway-v1) with coded water drawn inside its MEASURED inner surface
//   (Codex's origin (210, 632), floor to x 610, ramp points (710, 584) to (1297, 282)), in flat layers; the painted
//   ramp is not an exact y = ln x (about 40 px off), so the cutaway is a picture beside the coded graph, never
//   overlaid on it (decision 30: fit the code to the plate);
// - Sideways: horizontal strips x = g(y) from the y-axis, signed fills, an optional highlighted strip;
// - SquareGraph: the equal-unit square graph of scenes 1 to 4 with the reflection in y = x (every point moves along
//   its perpendicular to y = x: (x, y) → (y, x)).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK} from '../../kit';
import {CARD, FrameSvg, StudioPlot, SvgPlate, plateMap, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';

export {AnswerBox, Attempt, BoxCard, Chip, FramedCard, GREEN, GREY, Line, MiniPlot, PLabel, RED, Tick} from '../math-a12-i06/parts';
export {Note, SegRow} from '../math-a12-i01/parts';
export {Int} from '../math-a12-i08/parts';
export const BLUE = '#1f6fb2';
export const AMB = '#9c5a00';
export const AMB_INK = '#7a4600';
export const TEAL = '#13767a';
export const VIO = '#6b4fa0';
export const WATER = '#bfe0ee';
export const TEAL_SOFT = '#d6eeee';
export const RED_SOFT = '#f6d3c4';
export const RED_INK = '#b8322a';
export const E = Math.E;
export const Bl: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: BLUE}}>{children}</span>;
export const Am: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: AMB_INK}}>{children}</span>;
export const Tl: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: TEAL}}>{children}</span>;

// ---------- the numbers (design: numbers used) ----------
export const leftSum = (g: (y: number) => number, c: number, d: number, n: number) => {const h = (d - c) / n; let s = 0; for (let i = 0; i < n; i++) s += g(c + i * h) * h; return s;};
{
	const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
	const F = (y: number) => y ** 3 / 3 - 4 * y, G = (y: number) => 1.5 * y * y - y ** 3 / 3;
	const checks: [string, boolean][] = [
		['ln', near(E - 1, 1.718281828, 1e-8) && near(E - (E - 1), 1)],
		['sums', near(leftSum(Math.exp, 0, 1, 5), 1.5522, 1e-4) && near(leftSum(Math.exp, 0, 1, 10), 1.6338, 1e-4) && near(leftSum(Math.exp, 0, 1, 40), 1.6969, 1e-4)],
		['signs', near(F(2) - F(0), -16 / 3) && near(F(3) - F(2), 7 / 3) && near(F(3) - F(0), -3)],
		['base 2', near(8 / Math.LN2 - 1 / Math.LN2, 7 / Math.LN2) && near(7 / Math.LN2, 10.0989, 1e-4)],
		['A1', near(G(3) - G(0), 9 / 2) && near(G(4) - G(3), -11 / 6) && near(G(4) - G(0), 8 / 3) && near(9 / 2 + 11 / 6, 19 / 3)],
		['A2', near(24 - 7 / Math.LN2, 13.9011, 1e-4)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i11 numbers: ' + bad.join(', '));
}
export const SUMS = [5, 10, 40].map(n => leftSum(Math.exp, 0, 1, n));

// ---------- the plates (brief 238; Codex's measured anchors) ----------
export const POOL: PlateSpec = {src: 'assets/maths/ma12-beach-entry-pool-v1.png', nat: [1585, 992], box: [107, 111, 1474, 876]};
export const CUTAWAY: PlateSpec = {src: 'assets/maths/ma12-pool-cutaway-v1.png', nat: [1774, 887], box: [77, 170, 1697, 761]};
/** The painted inner surface (file px): wall, floor, then the measured ramp points, to the right wall. */
const SURF: [number, number][] = [[210, 632], [610, 634], [710, 584], [810, 508], [1010, 392], [1210, 308], [1297, 282], [1440, 258]];
const SURFACE_Y = 232; // 1 m above the deep-end floor at 400 px per metre
const RIGHT_WALL = 1445;
export const cutH = (w: number) => (w * (CUTAWAY.box[3] - CUTAWAY.box[1])) / (CUTAWAY.box[2] - CUTAWAY.box[0]);
export const poolH = (w: number) => (w * (POOL.box[3] - POOL.box[1])) / (POOL.box[2] - POOL.box[0]);

/**
 * The cutaway with water to the level `fill` (0 to 1 of the 1 m depth) inside the measured surface, drawn as `layers`
 * flat bands; an optional concrete highlight (the ramp's section between x = 1 m and x = e) and the rectangle.
 */
export const PoolCut: React.FC<{x: number; y: number; w: number; fill?: number; layers?: number; hiLayer?: number; concrete?: number; rect?: number; tags?: number; at?: number; out?: number; children?: (P: (fx: number, fy: number) => [number, number]) => React.ReactNode}> = ({x, y, w, fill = 1, layers = 0, hiLayer, concrete = 0, rect = 0, tags = 0, at = -30, out, children}) => {
	usePlatePreload([CUTAWAY.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(CUTAWAY, x, y, w);
	const P = (fx: number, fy: number) => m.at(fx, fy);
	const id = `pc-${x}-${y}`;
	const waterPoly = [[210, SURFACE_Y], ...SURF, [RIGHT_WALL, SURFACE_Y]].map(p => P(p[0], p[1]).join(',')).join(' ');
	const lvl = 632 - 400 * Math.max(0, Math.min(1, fill));
	const [, ly] = P(0, lvl), [lx0] = P(150, 0), [lx1] = P(1500, 0), [, y632] = P(0, 632);
	const bands = layers > 0 ? Array.from({length: layers}, (_, i) => {const a = 632 - (400 * i) / layers, b = 632 - (400 * (i + 1)) / layers; return {a: P(0, a)[1], b: P(0, b)[1], i};}) : [];
	const conc = [[610, 632], [710, 584], [810, 508], [1010, 392], [1210, 308], [1297, 282], [1297, 632]].map(p => P(p[0], p[1]).join(',')).join(' ');
	const [rx0, ry0] = P(210, SURFACE_Y), [rx1, ry1] = P(1297, 632);
	return (
		<FrameSvg style={{opacity: o}}>
			<defs><clipPath id={id}><polygon points={waterPoly} /></clipPath></defs>
			<SvgPlate plate={CUTAWAY} x={x} y={y} w={w} />
			<g clipPath={`url(#${id})`}>
				<rect x={lx0} y={ly} width={lx1 - lx0} height={y632 - ly + 10} fill={WATER} opacity={0.85} />
				{bands.map(b => b.b >= ly - 0.5 ? <line key={b.i} x1={lx0} x2={lx1} y1={b.b} y2={b.b} stroke="#4a8fb0" strokeWidth={2.5} opacity={0.8} /> : null)}
				{hiLayer !== undefined && bands[hiLayer] ? <rect x={lx0} y={bands[hiLayer].b} width={lx1 - lx0} height={bands[hiLayer].a - bands[hiLayer].b} fill="none" stroke={AMB} strokeWidth={5} /> : null}
				{fill > 0.001 ? <line x1={lx0} x2={lx1} y1={ly} y2={ly} stroke="#4a8fb0" strokeWidth={4} /> : null}
			</g>
			{concrete > 0.001 ? <polygon points={conc} fill="#f3d9a6" stroke={AMB} strokeWidth={5} opacity={concrete} /> : null}
			{rect > 0.001 ? <rect x={rx0} y={ry0} width={rx1 - rx0} height={ry1 - ry0} fill="none" stroke={INK} strokeWidth={5} strokeDasharray="14 9" opacity={rect} /> : null}
			{tags > 0.001 ? <g opacity={tags} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34}}>
				{([[220, 420, 'wall: y-axis', 'start'], [400, 610, 'floor: y = 0', 'middle'], [960, 470, 'ramp', 'start'], [700, 222, 'surface: y = 1', 'middle']] as const).map(([fx, fy, t, a]) => {const p = P(fx, fy); return <text key={t} x={p[0] + (a === 'start' ? 10 : 0)} y={p[1]} textAnchor={a} fill={INK} stroke={CARD} strokeWidth={7} paintOrder="stroke">{t}</text>;})}
			</g> : null}
			{children ? children(P) : null}
		</FrameSvg>
	);
};

// ---------- sideways strips ----------
/** n strips stacked from y = c to y = d, each from x = 0 to x = g(y) at the strip's lower edge (left-end lengths). */
export const Sideways: React.FC<{m: PlotMap; g: (y: number) => number; c: number; d: number; n: number; signed?: boolean; fill?: string; hi?: number; opacity?: number; flip?: number}> = ({m, g, c, d, n, signed = false, fill = WATER, hi, opacity = 1, flip = 0}) => {
	const h = (d - c) / n;
	return <g opacity={opacity} clipPath={m.clip}>{Array.from({length: n}, (_, i) => {
		const y0 = c + i * h, y1 = y0 + h, X = g(y0 + (signed ? h / 2 : 0));
		const neg = X < 0;
		const XX = neg ? X * (1 - 2 * flip) : X;
		const [ax, ay] = m.p(Math.min(0, XX), y1), [bx, by] = m.p(Math.max(0, XX), y0);
		return <rect key={i} x={ax} y={ay} width={Math.max(1, bx - ax)} height={Math.max(1, by - ay)} fill={signed ? (neg ? RED_SOFT : TEAL_SOFT) : fill} stroke={signed ? (neg ? RED_INK : TEAL) : '#4a8fb0'} strokeWidth={i === hi ? 5 : 2} opacity={0.95} />;
	})}{hi !== undefined ? (() => {const y0 = c + hi * h; const [ax, ay] = m.p(0, y0 + h), [bx, by] = m.p(g(y0), y0); return <rect x={ax} y={ay} width={bx - ax} height={by - ay} fill="none" stroke={AMB} strokeWidth={6} />;})() : null}</g>;
};

// ---------- the square graph with the reflection ----------
export const SQ = {x: 30, y: 150, w: 726, h: 720};
export const SQWIN = {x: [-0.6, 3] as [number, number], y: [-0.6, 3] as [number, number]};
/** (x, y) moved a fraction p of the way to (y, x): along its perpendicular to y = x. */
export const refl = (x: number, y: number, p: number): [number, number] => [x + (y - x) * p, y + (x - y) * p];
const lnRegion = (N = 60): [number, number][] => [...Array.from({length: N + 1}, (_, i) => [Math.exp(i / N), i / N] as [number, number]), [0, 1], [0, 0]];
export const SquareGraph: React.FC<{p?: number; region?: number; layers?: number; diag?: number; ghost?: number; at?: number; children?: (m: PlotMap) => React.ReactNode}> = ({p = 0, region = 1, layers = 0, diag = 0, ghost = 0, at = -30, children}) => (
	<StudioPlot x={SQ.x} y={SQ.y} width={SQ.w} height={SQ.h} window={SQWIN} xTicks={[1, 2, {value: E, label: 'e'}]} yTicks={[1, 2, {value: E, label: 'e'}]} xLabel="x (m)" yLabel="y (m)" at={at}>
		{m => {
			const path = (pts: [number, number][], close = false) => pts.map((q, i) => {const r = refl(q[0], q[1], p); const s = m.p(r[0], r[1]); return `${i ? 'L' : 'M'}${s[0].toFixed(1)},${s[1].toFixed(1)}`;}).join(' ') + (close ? ' Z' : '');
			const curve: [number, number][] = Array.from({length: 121}, (_, i) => {const x = 0.06 + (3 - 0.06) * i / 120; return [x, Math.log(x)];}).filter(q => q[1] > -0.6);
			const bands = layers > 0 ? Array.from({length: layers}, (_, i) => {const y0 = i / layers, y1 = (i + 1) / layers, L = Math.exp(y0); return [[0, y0], [L, y0], [L, y1], [0, y1]] as [number, number][];}) : [];
			const ghostPath = (pts: [number, number][], close = false) => pts.map((q, i) => {const s = m.p(q[0], q[1]); return `${i ? 'L' : 'M'}${s[0].toFixed(1)},${s[1].toFixed(1)}`;}).join(' ') + (close ? ' Z' : '');
			return <>
				{ghost > 0.001 ? <g opacity={0.25 * ghost} clipPath={m.clip}><path d={ghostPath(lnRegion(), true)} fill={WATER} /><path d={ghostPath(curve)} stroke={BLUE} strokeWidth={4} fill="none" strokeDasharray="8 8" /></g> : null}
				<g clipPath={m.clip}>
					<path d={path(lnRegion(), true)} fill={WATER} opacity={0.85 * region} />
					{bands.map((b, i) => <path key={i} d={path(b, true)} fill="none" stroke="#4a8fb0" strokeWidth={2.5} opacity={region} />)}
					{[0, 1].map(Y => <path key={Y} d={path([[-0.6, Y], [3, Y]])} stroke={INK} strokeWidth={3} strokeDasharray="10 9" opacity={0.7} fill="none" />)}
					<path d={path(curve)} stroke={BLUE} strokeWidth={6.5} fill="none" />
					{diag > 0.001 ? <path d={`M${m.p(-0.6, -0.6).join(',')} L${m.p(3, 3).join(',')}`} stroke={VIO} strokeWidth={4} strokeDasharray="14 10" opacity={diag} /> : null}
				</g>
				{children ? children(m) : null}
			</>;
		}}
	</StudioPlot>
);
export {E as EE};
