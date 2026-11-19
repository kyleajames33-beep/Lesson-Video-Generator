// Lesson parts for math-a12-g01 (Revision 3: mixed differentiation practice; which rule, which domain, which
// equations), on the maths studio kit and t01's board parts (read-only), with d10's coaster track and car (read-only)
// and s12's final frame for the opening. Lesson-local rigs:
// - Desk: the painted exam desk with the question printed on its measured blank left page, and the painted
//   calculator with grey readouts on its measured display;
// - SkateGraph: y = x² − 6 ln x (x > 0) on a studio plot, with the skateboard laid along the tangent at x = 3
//   (rotated to the on-screen angle from the plot's own unequal scales; never stretched);
// - MiniTree: an expression tree whose operation nodes light in evaluation order (the root, lit last, is the
//   outer structure);
// - TreeChips: the decision tree's three questions as a compact row (or column) with their lit results.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, MATHS_KIT2B_ANCHORS, MATHS_KIT2B_PLATES, MATHS_KIT2_PLATES, MATH_ROLES, PlateImg, PlateReadout, StudioPlot, TangentPlate, fnPath, screenAngle, smooth, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';
import {AnswerBox, BoxCard, BROWN, Chip, EqStrip, FramedCard, Hand, RED, Row, Slip, Task} from '../math-a12-t01/parts';
import {QStrip} from '../math-a12-t01/parts';
import {CAR, CarOnRail, HOOK_WIN, TRACK, TrackPlate, rideH, stageMap} from '../math-a12-d10/parts';
import type {Stage} from '../math-a12-d10/parts';

export {AnswerBox, BoxCard, BROWN, Chip, EqStrip, FramedCard, Hand, RED, Row, Slip, Task, QStrip};
export {CAR, CarOnRail, HOOK_WIN, TRACK, TrackPlate, rideH, stageMap};
export type {Stage};
export {S12FinalFrame} from '../math-a12-s12/s3';
export {FONT_DISPLAY, FONT_HAND, INK};
export const PI = Math.PI;
export const GREY = '#6b6358';

// ---------- colour roles (practice series g01) ----------
/** Tangents and gradients violet; the unknown a blue, b teal; lit tree branches amber; answers green; mistakes red. */
export const VIO = MATH_ROLES.gradient, AR = MATH_ROLES.a, BR = MATH_ROLES.b, LIT = MATH_ROLES.k, GOOD = MATH_ROLES.answer;
export const DOMAIN_FILL = '#d6eeee';
const span = (c: string) => {
	const S: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: c}}>{children}</span>;
	return S;
};
export const Ac = span(AR.ink), Bc = span(BR.ink), Vc = span(VIO.ink), Lc = span(LIT.ink), Gc = span(GOOD.ink), Gy = span(GREY);

// ---------- plates (alpha > 20 boxes, measured 19 Nov from the files; anchors from the brief 240 sidecars) ----------
export const DESK: PlateSpec = {src: 'assets/maths/ma12-exam-desk-v1.png', nat: [1619, 972], box: [178, 160, 1441, 811]};
/** Blank left page of the booklet (ma12-exam-desk-v1.json leftPageBlankRect, ±6 px). */
export const DESK_PAGE = [310, 249, 621, 719] as const;
/** Where the separate calculator plate sits on the desk (ma12-exam-desk-v1.json calculatorPlacementRect). */
export const DESK_CALC = [1164, 244, 1395, 731] as const;
export const CALC: PlateSpec = {src: 'assets/maths/ma12-calculator-v1.png', nat: [946, 1663], box: [147, 239, 798, 1462]};
/** Blank display (ma12-calculator-v1.json displayRect, ±5 px). */
export const CALC_DISPLAY = [203, 347, 741, 524] as const;
export const SKATE = MATHS_KIT2_PLATES.skateboard;
export const SKATE_CONTACT = MATHS_KIT2B_ANCHORS.skateboardContact as unknown as [number, number];
export const TORCH = MATHS_KIT2B_PLATES.torch;
/** The torch lens (right end of the plate, mid height): the beam's source (measured 19 Nov). */
export const TORCH_LENS: [number, number] = [1862, 366];
export const G01_PLATES: PlateSpec[] = [DESK, CALC, SKATE, TORCH, TRACK, CAR];

// ---------- desk and calculator ----------
/** Desk at (x, y) width w; the question prints onto the page from `at` (characters per second `cps`). */
export const Desk: React.FC<{x: number; y: number; w: number; q?: string; at?: number; size?: number; cps?: number; calc?: string; o?: number}> = ({x, y, w, q, at = -300, size = 40, cps = 45, calc, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const s = w / (DESK.box[2] - DESK.box[0]);
	const P = (nx: number, ny: number): [number, number] => [x + (nx - DESK.box[0]) * s, y + (ny - DESK.box[1]) * s];
	const [px, py] = P(DESK_PAGE[0], DESK_PAGE[1]), [px1, py1] = P(DESK_PAGE[2], DESK_PAGE[3]);
	const [cx, cy] = P(DESK_CALC[0], DESK_CALC[1]), [, cy1] = P(DESK_CALC[2], DESK_CALC[3]);
	const ch = cy1 - cy, cw = (ch * (CALC.box[2] - CALC.box[0])) / (CALC.box[3] - CALC.box[1]);
	const n = q ? Math.max(0, Math.min(q.length, Math.floor(((f - at) / 30) * cps))) : 0;
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<PlateImg plate={DESK} x={x} y={y} w={w} />
		<Calc x={cx + ((DESK_CALC[2] - DESK_CALC[0]) * s - cw) / 2} y={cy} w={cw} value={calc} />
		{q ? <div style={{position: 'absolute', left: px + 4, top: py + 2, width: px1 - px - 8, height: py1 - py - 4, boxSizing: 'border-box', padding: '10px 14px', background: CARD, borderRadius: 10, boxShadow: '0 4px 12px rgba(60,45,20,0.12)', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, lineHeight: 1.22, color: INK}}>
			<span>{q.slice(0, n)}</span><span style={{visibility: 'hidden'}}>{q.slice(n)}</span>
		</div> : null}
	</div>;
};
/** The painted calculator with a grey readout on its measured display (blank when value is undefined). */
export const Calc: React.FC<{x: number; y: number; w: number; value?: string; at?: number}> = ({x, y, w, value, at = -300}) => (
	value === undefined ? <PlateImg plate={CALC} x={x} y={y} w={w} /> : <PlateReadout plate={CALC} x={x} y={y} w={w} region={CALC_DISPLAY} value={value} regionColor="#3b4a40" at={at} />
);

// ---------- the skate bowl ----------
export const f1 = (x: number) => x * x - 6 * Math.log(x);
export const df1 = (x: number) => 2 * x - 6 / x;
export const F3 = 9 - 6 * Math.log(3);
export const SKATE_WIN = {x: [-2.5, 5] as [number, number], y: [-2, 12] as [number, number]};
export type GraphBox = {x: number; y: number; w: number; h: number};
/**
 * The skate bowl's graph: y = x² − 6 ln x drawn only for x > 0, with optional pale-teal domain band on the x-axis,
 * the dashed verticals at x = 3 and x = −1 (the second through empty space), the skateboard on the tangent at x = 3,
 * a violet rider at xr with its tangent, and the full violet tangent.
 */
export const SkateGraph: React.FC<{g: GraphBox; at?: number; out?: number; board?: number; boardLift?: number; v3?: number; vm1?: number; band?: number; rider?: {x: number; o: number}; tangent?: number; point?: number; children?: (m: PlotMap) => React.ReactNode}> = ({g, at = -300, out, board = 0, boardLift = 0, v3 = 0, vm1 = 0, band = 0, rider, tangent = 0, point = 0, children}) => {
	const html = (m: PlotMap) => (board > 0.01 ? <TangentPlate plate={SKATE} point={m.pf(3, F3)} angle={screenAngle(m.pf, 3, F3, 4)} w={250} contact={SKATE_CONTACT} lift={boardLift} opacity={board} /> : null);
	return <StudioPlot x={g.x} y={g.y} width={g.w} height={g.h} window={SKATE_WIN} xTicks={[-2, -1, 1, 2, 3, 4, 5]} yTicks={[5, 10]} at={at} out={out} html={html}>
		{m => {
			const [, ty] = m.p(0, SKATE_WIN.y[1]), [, by] = m.p(0, 0);
			const tan = (X: number, s: number, o: number, a: number, b: number) => {const [p0, q0] = m.p(a, f1(X) + s * (a - X)), [p1, q1] = m.p(b, f1(X) + s * (b - X)); return <line x1={p0} y1={q0} x2={p1} y2={q1} stroke={VIO.stroke} strokeWidth={6} strokeLinecap="round" opacity={o} />;};
			return <>
				{band > 0.01 ? <g opacity={band}><rect x={m.p(0, 0)[0]} y={by - 12} width={m.p(5, 0)[0] - m.p(0, 0)[0]} height={24} fill={DOMAIN_FILL} stroke={BR.stroke} strokeWidth={3} /><circle cx={m.p(0, 0)[0]} cy={by} r={13} fill={CARD} stroke={BR.stroke} strokeWidth={5} /></g> : null}
				<g clipPath={m.clip}><path d={fnPath(m, f1, 0.115, 5, 400)} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
				{v3 > 0.01 ? <line x1={m.p(3, 0)[0]} x2={m.p(3, 0)[0]} y1={ty} y2={by} stroke={GREY} strokeWidth={4} strokeDasharray="12 9" opacity={v3} /> : null}
				{vm1 > 0.01 ? <g opacity={vm1}><line x1={m.p(-1, 0)[0]} x2={m.p(-1, 0)[0]} y1={ty} y2={by} stroke={GREY} strokeWidth={4} strokeDasharray="12 9" /><circle cx={m.p(-1, 0)[0]} cy={by} r={13} fill={CARD} stroke={GREY} strokeWidth={5} /></g> : null}
				{tangent > 0.01 ? <g clipPath={m.clip}>{tan(3, 4, tangent, 3 - 3.3 * tangent, 3 + 1.9 * tangent)}</g> : null}
				{rider && rider.o > 0.01 ? <g clipPath={m.clip}>{tan(rider.x, df1(rider.x), rider.o, rider.x - 0.6, rider.x + 0.6)}<circle cx={m.p(rider.x, f1(rider.x))[0]} cy={m.p(rider.x, f1(rider.x))[1]} r={13} fill={VIO.stroke} stroke={CARD} strokeWidth={4} opacity={rider.o} /></g> : null}
				{point > 0.01 ? <circle cx={m.p(3, F3)[0]} cy={m.p(3, F3)[1]} r={13} fill={INK} stroke={CARD} strokeWidth={4} opacity={point} /> : null}
				{children ? children(m) : null}
			</>;
		}}
	</StudioPlot>;
};

// ---------- expression trees ----------
export type TreeKind = 'product' | 'chain' | 'quotient' | 'xe2x';
const TREES: Record<TreeKind, {root: string; kids: string[]}> = {
	product: {root: '×', kids: ['x³', 'sin x']},
	chain: {root: 'sin( )', kids: ['x³']},
	quotient: {root: '÷', kids: ['sin x', 'x³']},
	xe2x: {root: '×', kids: ['x', 'e^(2x)']},
};
/**
 * An expression tree centred at cx with its root at top y: the leaves light first (with optional grey values),
 * then the root lights last (amber); until `rootAt` the root shows "?" when `collapsed`. `ring` circles the root.
 */
export const MiniTree: React.FC<{kind: TreeKind; cx: number; y: number; s?: number; leafAt?: readonly number[]; rootAt: number; collapsed?: boolean; vals?: {leaves?: readonly string[]; root?: string}; ring?: number; pulse?: number; o?: number}> = ({kind, cx, y, s = 1, leafAt = [], rootAt, collapsed = false, vals, ring, pulse, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const T = TREES[kind];
	const W = 170 * s, H = 74 * s, dx = T.kids.length === 1 ? [0] : [-125 * s, 125 * s], ky = y + 190 * s;
	const node = (x: number, yy: number, text: string, litO: number, key: string, val?: string, valO = 0, big = false) => (
		<g key={key}>
			<rect x={x - W / 2} y={yy} width={W} height={H} rx={16 * s} fill={litO > 0.5 ? LIT.soft : CARD} stroke={litO > 0.5 ? LIT.stroke : 'rgba(60,45,20,0.35)'} strokeWidth={litO > 0.5 ? 5 : 3} />
			<text x={x} y={yy + H * 0.68} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: (big ? 44 : 40) * s, fill: litO > 0.5 ? LIT.ink : INK}}>{text}</text>
			{val && valO > 0.01 ? <text x={x + W / 2 + 12 * s} y={yy + H * 0.68} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30 * Math.max(1, s), fill: GREY}} opacity={valO}>{val}</text> : null}
		</g>
	);
	const rootLit = prog(f, rootAt, 8);
	const pu = pulse !== undefined ? prog(f, pulse, 8) * (1 - prog(f, pulse + 14, 14)) : 0;
	return <FrameSvg style={{opacity: o}}>
		{T.kids.map((_, i) => <line key={'e' + i} x1={cx} y1={y + H} x2={cx + dx[i]} y2={ky} stroke="rgba(60,45,20,0.45)" strokeWidth={4} />)}
		{T.kids.map((k, i) => node(cx + dx[i], ky, k, leafAt[i] !== undefined ? prog(f, leafAt[i], 8) : 0, 'k' + i, vals?.leaves?.[i], leafAt[i] !== undefined ? prog(f, leafAt[i] + 6, 10) : 0))}
		<g transform={`translate(${cx},${y + H / 2}) scale(${1 + 0.1 * pu}) translate(${-cx},${-(y + H / 2)})`}>{node(cx, y, collapsed && f < rootAt ? '?' : T.root, rootLit, 'r', vals?.root, prog(f, rootAt + 6, 10), true)}</g>
		{ring !== undefined ? <ellipse cx={cx} cy={y + H / 2} rx={W * 0.72} ry={H * 0.95} fill="none" stroke={LIT.stroke} strokeWidth={5} opacity={prog(f, ring, 10)} /> : null}
	</FrameSvg>;
};

// ---------- the decision tree's three questions (compact) ----------
export const TREE_Q = ['Last step?', 'Domain?', 'Demand?'] as const;
/** The three questions as pills; `lit[i]` glows node i from that frame; `res[i]` shows its result beside or under it. */
export const TreeChips: React.FC<{x: number; y: number; lit?: readonly (number | undefined)[]; res?: readonly (string | undefined)[]; resAt?: readonly (number | undefined)[]; dir?: 'row' | 'col'; size?: number; at?: number; out?: number; gap?: number}> = ({x, y, lit = [], res = [], resAt = [], dir = 'row', size = 32, at = -300, out, gap = 16}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, display: 'flex', flexDirection: dir === 'row' ? 'row' : 'column', gap, alignItems: 'flex-start'}}>
		{TREE_Q.map((q, i) => {
			const l = lit[i] !== undefined ? prog(f, lit[i]!, 10) : 0;
			const r = res[i] !== undefined && resAt[i] !== undefined ? prog(f, resAt[i]!, 12) : 0;
			return <div key={q} style={{display: 'flex', flexDirection: dir === 'row' ? 'column' : 'row', alignItems: dir === 'row' ? 'flex-start' : 'center', gap: 8}}>
				<div style={{background: l > 0.5 ? LIT.soft : CARD, border: `3px solid ${l > 0.5 ? LIT.stroke : 'rgba(60,45,20,0.25)'}`, borderRadius: 14, padding: '2px 16px 4px', boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: l > 0.5 ? LIT.ink : INK, whiteSpace: 'pre'}}>{q}</div>
				{r > 0.01 ? <div style={{opacity: r, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: LIT.ink, whiteSpace: 'pre'}}>{dir === 'col' ? '→ ' : ''}{res[i]}</div> : null}
			</div>;
		})}
	</div>;
};

/** A chip crossed in red at `crossAt`, with an optional red "?" badge from `qAt`. */
export const MarkChip: React.FC<{x: number; y: number; at: number; out?: number; crossAt?: number; qAt?: number; size?: number; color?: string; children: React.ReactNode}> = ({x, y, at, out, crossAt, qAt, size = 40, color = INK, children}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const s = crossAt !== undefined ? prog(f, crossAt, 12) : 0;
	const dy = (1 - smooth(prog(f, at, 16))) * -40;
	return <div style={{position: 'absolute', left: x, top: y + dy, opacity: o, background: CARD, border: `4px solid ${s > 0.5 ? RED : color}`, borderRadius: 18, padding: '4px 22px 6px', boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: s > 0.5 ? GREY : color, whiteSpace: 'pre'}}>
		<span style={{position: 'relative', display: 'inline-block'}}>{children}
			{s > 0.001 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -8, top: 0, width: 'calc(100% + 16px)', height: '100%', overflow: 'visible'}}><path d="M0,64 Q50,50 100,38" stroke={RED} strokeWidth={6} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - s} /></svg> : null}
		</span>
		{qAt !== undefined ? <span style={{marginLeft: 12, color: RED, opacity: prog(f, qAt, 10)}}>?</span> : null}
	</div>;
};
export {CARD};
