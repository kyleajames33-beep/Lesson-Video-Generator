// Lesson parts for math-a12-i01 (Revision 4: primitives, the + C family and one curve fixed by one point; three
// bean shoots on a three-shelf stepped plant stand), built on the maths studio kit. Lesson-local rigs:
// - ShelfStand: the painted plant stand (ma12-plant-stand-v1, Codex's measured soil centres) with a painted bean
//   shoot (ma12-bean-shoot-v1) rising out of each pot through the kit MaskedPlateRise, masked at the soil line, so
//   each tip stands t² cm above its soil at one plate scale; an optional amber gap bar between two tips and an
//   amber ring on the middle shelf's soil;
// - ShelfGraph and ShelfBoard: the t-h height curves (h = t² + C, C = 20, 50, 80), riding points with parallel
//   violet tangent stubs and the readouts, all from the same t, so the plate, the graph and the board agree;
// - MiniPlot, PLabel, FramedCard and role spans.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, LiveReadoutBoard, MATH_AMBER, MATH_GRADIENT, MaskedPlateRise, PlateImg, StudioPlot, fnPath, plateMap, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec, PlotMap, ReadoutRow} from '../../math/studio';

export {AnswerBox, Attempt, BoxCard, Chip, Frac, GREEN, GREY, GREY_INK, Line, RED, Ring, Tick, V, VIOLET} from '../math-a12-d19/parts';
export const AMB = MATH_AMBER;
export const AMB_INK = '#7a4600';

/** C, the slide and the starting height: amber. */
export const Cc: React.FC<{children?: React.ReactNode}> = ({children = 'C'}) => <span style={{color: AMB_INK}}>{children}</span>;

// ---------- the models (design: numbers used, Revision 3 anchor values) ----------
export const SHELF_C = [20, 50, 80] as const;
export const SHELF_NAME = ['bottom', 'middle', 'top'] as const;
export const tip = (t: number, C: number) => t * t + C;
/** Worked example 1, worked example 2 and the attempts (C = 0 members). */
export const W1 = (x: number) => x ** 3 + 2 * x * x - 5 * x;
export const w1 = (x: number) => 3 * x * x + 4 * x - 5;
export const W2 = (x: number) => x ** 3 - 2 * x * x + 2 * x;
export const w2 = (x: number) => 3 * x * x - 4 * x + 2;
export const A1F = (x: number) => 2 * x ** 4 - 2 * x ** 3 + 5 * x;
export const a1f = (x: number) => 8 * x ** 3 - 6 * x * x + 5;
export const A2F = (x: number) => x ** 4 - 3 * x * x + x;
export const a2f = (x: number) => 4 * x ** 3 - 6 * x + 1;
{
	const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) < tol;
	const d = (F: (x: number) => number, x: number) => (F(x + 1e-5) - F(x - 1e-5)) / 2e-5;
	const all = (F: (x: number) => number, f: (x: number) => number) => [-2, -1.3, -0.4, 0, 0.7, 1.5, 2.2].every(x => near(d(F, x), f(x), 1e-4));
	const checks: [string, boolean][] = [
		['shelves', near(tip(4, 50), 66) && near(tip(0, 20), 20) && near(tip(5, 80), 105) && near(tip(4, 66), 82) && [0, 1.7, 3, 5].every(t => near(tip(t, 50) - tip(t, 20), 30)) && near(d(t => tip(t, 50), 3), 6, 1e-6)],
		['hook', near(1 + 3, 4) && near(2.5 ** 2 + 3, 9.25)],
		['gap', [-2, -1, 0, 1, 2].every(x => near(x * x + 3 - (x * x - 1), 4))],
		['tracer', all(x => x ** 3 / 3, x => x * x) && near(2 ** 3 / 3, 8 / 3)],
		['we-1', all(W1, w1) && near(w1(1), 2)],
		['we-2', all(W2, w2) && near(W2(1), 1) && near(5 - W2(1), 4) && near(W2(1) + 4, 5) && near(W2(2.5) + 6, 14.125) && near(W2(-1) - 2, -7)],
		['A1', all(A1F, a1f)],
		['A2', all(A2F, a2f) && near(A2F(2), 6) && near(9 - A2F(2), 3) && near(A2F(2) + 9, 15) && near(A2F(2.2) + 3, 14.1056, 1e-9)],
		['handoff', [-1, 0, 0.5, 2].every(x => near((2 * x + 1) ** 2, 4 * x * x + 4 * x + 1))],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i01 numbers: ' + bad.join(', '));
}
export const f1 = (v: number) => (Math.abs(v) < 0.05 ? '0.0' : v.toFixed(1));

// ---------- the plates (brief 238, Nov 12 plant stand; Codex's measured anchors) ----------
/** The stand: 1197 × 1315, alpha (128) box [91, 330, 1092, 1225]. */
export const STAND: PlateSpec = {src: 'assets/maths/ma12-plant-stand-v1.png', nat: [1197, 1315], box: [91, 330, 1092, 1225]};
/** The shoot: 600 × 800, stem base (300, 760), tip y 60 (700 px = 50 cm at 14 px per cm). */
export const SHOOT: PlateSpec = {src: 'assets/maths/ma12-bean-shoot-v1.png', nat: [600, 800], box: [123, 60, 477, 762]};
/** Soil centres, bottom, middle and top shelf (file px). */
export const SOIL: readonly [number, number][] = [[276, 865], [596, 612], [910, 346]];
/**
 * Plate scale (decision 30: fit the code to the plate). The painted soil lines are 253 px (bottom to middle) and
 * 266 px (middle to top) apart, not the briefed 420 and 420, so no single scale makes both gaps 30 cm. The bottom
 * to middle gap is the one scene 4 measures (the gap bar), so it sets the scale: 253 px = 30 cm. A tip's rise
 * above its own soil is t² cm at this scale, the same for all three shoots.
 */
export const K_NAT = 253 / 30;
export const standH = (w: number) => (w * (STAND.box[3] - STAND.box[1])) / (STAND.box[2] - STAND.box[0]);
/** Frame y of the highest tip at t = 5 above the stand's alpha top (how much headroom the shoots need). */
export const shootHead = (w: number) => ((SOIL[2][1] - STAND.box[1]) - 25 * K_NAT) * (w / (STAND.box[2] - STAND.box[0]));

export const ShelfStand: React.FC<{x: number; y: number; w: number; t: number | readonly number[]; dim?: readonly number[]; gap?: number; gapLabel?: string; soilRing?: number; tips?: number; at?: number; out?: number}> = ({x, y, w, t, dim = [1, 1, 1], gap = 0, gapLabel = '30 cm', soilRing = 0, tips = 1, at = -30, out}) => {
	usePlatePreload([STAND.src, SHOOT.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(STAND, x, y, w);
	const ts = typeof t === 'number' ? [t, t, t] : t;
	const kS = K_NAT * m.s;
	const shootW = ((SHOOT.box[2] - SHOOT.box[0]) * kS) / 14;
	const P = SOIL.map((s, i) => {const [sx, sy] = m.at(s[0], s[1]); const rise = Math.max(0, ts[i]) ** 2 * kS; return {sx, sy, rise, ty: sy - rise};});
	const bx = m.at(452, 0)[0];
	const [rx, ry] = m.at(SOIL[1][0], SOIL[1][1]);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<PlateImg plate={STAND} x={x} y={y} w={w} />
			{P.map((p, i) => <div key={i} style={{position: 'absolute', inset: 0, opacity: dim[i]}}><MaskedPlateRise plate={SHOOT} cx={p.sx} maskY={p.sy} w={shootW} rise={p.rise} at={-60} /></div>)}
			<FrameSvg>
				{soilRing > 0.001 ? <ellipse cx={rx} cy={ry} rx={110 * m.s} ry={34 * m.s} fill="none" stroke={AMB} strokeWidth={6} opacity={soilRing} /> : null}
				{tips > 0.001 ? P.map((p, i) => p.rise > 2 ? <circle key={i} cx={p.sx} cy={p.ty} r={8} fill={INK} stroke={CARD} strokeWidth={3} opacity={tips * dim[i]} /> : null) : null}
				{gap > 0.001 ? <g opacity={gap}>
					<line x1={P[0].sx + 14} x2={bx} y1={P[0].ty} y2={P[0].ty} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" />
					<line x1={bx} x2={P[1].sx - 14} y1={P[1].ty} y2={P[1].ty} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" />
					<line x1={bx} x2={bx} y1={P[1].ty} y2={P[0].ty} stroke={AMB} strokeWidth={9} strokeLinecap="round" />
					<line x1={bx - 14} x2={bx + 14} y1={P[1].ty} y2={P[1].ty} stroke={AMB} strokeWidth={6} strokeLinecap="round" />
					<line x1={bx - 14} x2={bx + 14} y1={P[0].ty} y2={P[0].ty} stroke={AMB} strokeWidth={6} strokeLinecap="round" />
					<text x={bx - 16} y={(P[0].ty + P[1].ty) / 2 + 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AMB_INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{gapLabel}</text>
				</g> : null}
			</FrameSvg>
		</div>
	);
};

// ---------- the t-h graph ----------
export const SHELF_WIN = {x: [-0.25, 5.4] as [number, number], y: [-6, 116] as [number, number]};
const SOIL_LABEL = ['bottom shelf soil', 'middle shelf soil', 'top shelf soil'];
/** Short violet tangent stub through (X, Y) with slope s (plot-local). */
export const stub = (m: PlotMap, X: number, Y: number, s: number, half = 48) => {
	const [px, py] = m.p(X, Y), vx = m.sx, vy = -s * m.sy, l = Math.hypot(vx, vy);
	return {x1: px - (vx / l) * half, y1: py - (vy / l) * half, x2: px + (vx / l) * half, y2: py + (vy / l) * half};
};
export const ShelfGraph: React.FC<{x: number; y: number; w: number; h: number; t: number; drawn?: number; curveO?: readonly number[]; stubs?: number; points?: number; soil?: number; soilLabels?: boolean; arrows?: number; ring?: number; ringTag?: number; at?: number; out?: number; children?: (m: PlotMap) => React.ReactNode}> = ({x, y, w, h, t, drawn, curveO = [1, 1, 1], stubs = 1, points = 1, soil = 1, soilLabels = true, arrows = 0, ring = 0, ringTag = 0, at = -30, out, children}) => {
	const tt = Math.max(0, Math.min(5, t));
	const dr = Math.max(tt, Math.min(5, drawn ?? tt));
	return (
		<StudioPlot x={x} y={y} width={w} height={h} window={SHELF_WIN} xTicks={[1, 2, 3, 4, 5]} yTicks={[20, 40, 60, 80, 100]} xLabel="time t (weeks)" yLabel="tip height h (cm)" at={at} out={out}>
			{m => <>
				{SHELF_C.map((C, i) => {const a = m.p(0, C), b = m.p(5.4, C); return <g key={C} opacity={soil}>
					<line x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke="#8a8378" strokeWidth={3} strokeDasharray="12 10" />
					{soilLabels ? <text x={b[0] - 4} y={a[1] - 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: '#4f4840'}} stroke={CARD} strokeWidth={6} paintOrder="stroke">{SOIL_LABEL[i]}</text> : null}
				</g>;})}
				<g clipPath={m.clip}>
					{SHELF_C.map((C, i) => dr > 0.01 && curveO[i] > 0.001 ? <path key={C} d={fnPath(m, u => tip(u, C), 0, dr)} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" opacity={curveO[i]} /> : null)}
				</g>
				{arrows > 0.001 ? <g opacity={arrows}>{[0, 1].map(i => {const X = 1.4, a = m.p(X, tip(X, SHELF_C[i])), b = m.p(X, tip(X, SHELF_C[i + 1])); return <g key={i}>
					<line x1={a[0]} x2={a[0]} y1={a[1] - 8} y2={b[1] + 12} stroke={AMB} strokeWidth={6} strokeLinecap="round" />
					<path d={`M${a[0] - 12},${b[1] + 26} L${a[0]},${b[1] + 6} L${a[0] + 12},${b[1] + 26}`} stroke={AMB} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
					<text x={a[0] + 18} y={(a[1] + b[1]) / 2 + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AMB_INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">+ 30 cm</text>
				</g>;})}</g> : null}
				{SHELF_C.map((C, i) => {const o = points * curveO[i]; if (o <= 0.001) return null; const s = stub(m, tt, tip(tt, C), 2 * tt); const p = m.p(tt, tip(tt, C)); return <g key={C} opacity={o}>
					{stubs > 0.001 ? <line {...s} stroke={MATH_GRADIENT} strokeWidth={6} strokeLinecap="round" opacity={stubs} /> : null}
					<circle cx={p[0]} cy={p[1]} r={11} fill={INK} stroke={CARD} strokeWidth={4} />
				</g>;})}
				{ring > 0.001 ? (() => {const p = m.p(4, 66); return <g opacity={ring}>
					<circle cx={p[0]} cy={p[1]} r={24} fill="none" stroke={INK} strokeWidth={5} />
					<text x={p[0] - 34} y={p[1] - 26} textAnchor="end" opacity={ringTag} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: AMB_INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">66 cm at 4 weeks</text>
				</g>;})() : null}
				{children ? children(m) : null}
			</>}
		</StudioPlot>
	);
};

/** week, growth rate 2t (violet, one row for all three), the three tip heights, an optional gap row (amber). */
export const ShelfBoard: React.FC<{x: number; y: number; width: number; t: number; at?: number; out?: number; show?: readonly number[]; gap?: {at: number}; size?: number; dim?: readonly number[]}> = ({x, y, width, t, at = -30, out, show = [0, 1, 2], gap, size = 48, dim = [0, 0, 0]}) => {
	const tt = Math.max(0, Math.min(5, t));
	const rows: ReadoutRow[] = [
		{label: 'week', value: tt, digits: 1},
		{label: <span style={{whiteSpace: 'nowrap'}}>growth rate 2t</span>, value: 2 * tt, digits: 1, role: 'gradient', unit: 'cm/wk'},
		...show.map(i => ({label: `${SHELF_NAME[i]} tip`, value: tip(tt, SHELF_C[i]), digits: 1, unit: 'cm', format: f1, dim: dim[i]} as ReadoutRow)),
		...(gap ? [{label: 'gap', value: tip(tt, 50) - tip(tt, 20), digits: 1, unit: 'cm', role: 'k', at: gap.at, format: f1} as ReadoutRow] : []),
	];
	return <LiveReadoutBoard x={x} y={y} width={width} at={at} out={out} inline size={size} labelSize={30} rows={rows.map(r => (r.label === 'week' ? {...r, format: f1} : r.role === 'gradient' ? {...r, format: f1} : r))} />;
};

// ---------- small plots and labels ----------
export type CurveSpec = {fn: (x: number) => number; from: number; to: number; color: string; dash?: string; width?: number; o?: number};
export const MiniPlot: React.FC<{x: number; y: number; w: number; h: number; win: {x: [number, number]; y: [number, number]}; curves: CurveSpec[]; xTicks?: number[]; yTicks?: number[]; xLabel?: string; yLabel?: string; at?: number; out?: number; children?: (m: PlotMap) => React.ReactNode}> = ({x, y, w, h, win, curves, xTicks, yTicks, xLabel = 'x', yLabel = 'y', at = -30, out, children}) => (
	<StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
		{m => <>
			<g clipPath={m.clip}>{curves.map((c, i) => (c.o ?? 1) > 0.001 ? <path key={i} d={fnPath(m, c.fn, c.from, c.to)} stroke={c.color} strokeWidth={c.width ?? 6} strokeDasharray={c.dash} fill="none" strokeLinecap="round" opacity={c.o ?? 1} /> : null)}</g>
			{children ? children(m) : null}
		</>}
	</StudioPlot>
);
/** A plot label (plot-local coordinates from m.p), stroked on paper. */
export const PLabel: React.FC<{p: [number, number]; text: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end'; hand?: boolean; o?: number; dx?: number; dy?: number}> = ({p, text, color = INK, size = 36, anchor = 'start', hand = false, o = 1, dx = 0, dy = 0}) => (o <= 0.001 ? null :
	<text x={p[0] + dx} y={p[1] + dy} textAnchor={anchor} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill: color}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{text}</text>);
/** Framed card (double ink rule) for the memory aid and the notes card. */
export const FramedCard: React.FC<{x: number; y: number; w: number; h: number; at?: number; children?: React.ReactNode}> = ({x, y, w, h, at = -30, children}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: prog(f, at, 14), boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}}>{children}</div>;
};
/** A plain paper card holding lines. */
export const Note: React.FC<{x: number; y: number; at: number; out?: number; size?: number; color?: string; children: React.ReactNode}> = ({x, y, at, out, size = 34, color = '#4f4840', children}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color, whiteSpace: 'pre'}}>{children}</div>;
};
/** A short horizontal arrow with a label above (the reverse arrows of scene 2). */
export const LabelArrow: React.FC<{x0: number; x1: number; y: number; label: string; color: string; at: number; glow?: number; size?: number}> = ({x0, x1, y, label, color, at, glow = 0, size = 38}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	if (p <= 0.001) return null;
	const dir = x1 > x0 ? 1 : -1;
	const xe = x0 + (x1 - x0) * p;
	return <FrameSvg>
		{glow > 0.001 ? <line x1={x0} x2={x1} y1={y} y2={y} stroke={color} strokeWidth={22} strokeLinecap="round" opacity={0.18 * glow} /> : null}
		<line x1={x0} x2={xe} y1={y} y2={y} stroke={color} strokeWidth={7} strokeLinecap="round" />
		{p > 0.95 ? <path d={`M${x1 - dir * 22},${y - 16} L${x1},${y} L${x1 - dir * 22},${y + 16}`} stroke={color} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round" /> : null}
		<text x={(x0 + x1) / 2} y={y - 22} textAnchor="middle" opacity={p} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, fill: color}}>{label}</text>
	</FrameSvg>;
};
/**
 * A working row built from segments that each fade in whole on their own cue (root: working lines fade in
 * whole), with an optional green answer frame from `answerAt`.
 */
export const SegRow: React.FC<{x: number; y: number; size?: number; segs: readonly {c: React.ReactNode; at: number}[]; out?: number; answerAt?: number; dim?: number; weight?: number}> = ({x, y, size = 52, segs, out, answerAt, dim = 0, weight = 800}) => {
	const f = useCurrentFrame();
	const o = vis(f, segs[0].at, out, 12) * (1 - 0.4 * dim);
	if (o <= 0.001) return null;
	const a = answerAt === undefined ? 0 : prog(f, answerAt, 12);
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, display: 'flex', alignItems: 'center', gap: '0.28em', fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, color: INK, whiteSpace: 'pre', lineHeight: 1.2,
		padding: '2px 18px 4px', margin: '-2px -18px -4px', borderRadius: 16, border: `5px solid rgba(40,115,71,${a})`, background: a > 0.001 ? `rgba(255,253,248,${a})` : undefined, boxShadow: a > 0.001 ? `0 12px 26px rgba(40,115,71,${0.14 * a})` : undefined}}>
		{segs.map((s, i) => <span key={i} style={{opacity: prog(f, s.at, 12)}}>{s.c}</span>)}
	</div>;
};
