// P03 (Biology practical) shared pieces: the measured lesson, plates, the constant board (question heading, method
// step rail, desk strip, card zone), the example data with build checks (every percentage computed), and new coded
// parts: the abstract population field, coded paper slips with tick boxes, tally marks, the earlobe definition line
// diagrams (no ear or face painting), a column graph and a dot-strip chart. B13's shared pieces are reused.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/bp03/measured/lesson.json';
import {sceneOf} from '../bio-m5-b06b/shared';
import {AMBER, AMBER_INK, CARD, DrawPath, EDGE, FONT_DISPLAY, GREYT, GREY_INK, Heading, INK, INK_SOFT, P, Sx, TEAL, clamp01, lerp, prog, rng} from '../bio-m5-b13/shared';
import * as A from './assets';

export * from '../bio-m5-b13/shared';
export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
export const hold = (id: string) => S(id).responseHold as {startFrame: number; endFrame: number};
export const PLP = {
	clipboard: P(A.CLIPBOARD, [2000, 2000], [283, 160, 1716, 1840], A.HAVE),
	pencil: P(A.PENCIL, [2000, 2000], [160, 214, 1840, 1786], A.HAVE),
	mirror: P(A.MIRROR, [2000, 2000], [496, 302, 1606, 1614], A.HAVE),
	slipBox: P(A.SLIPBOX, [2000, 2000], [273, 296, 1799, 1797], A.HAVE),
	slip: P(A.SLIP, [2000, 2000], [210, 502, 1834, 1529], A.HAVE),
	bag: P(A.BAG, [2000, 2000], [458, 287, 1744, 1713], A.HAVE),
	beadRed: P(A.BEAD_RED, [2000, 2000], [363, 363, 1637, 1636], A.HAVE),
	beadWhite: P(A.BEAD_WHITE, [2000, 2000], [366, 363, 1638, 1636], A.HAVE),
};
export const FREE = TEAL, ATT = AMBER_INK, UNS = GREYT;

// ---------- example data (labelled on screen) ----------
export const pctOf = (n: number, d: number) => Math.round((100 * n) / d);
export const CLASS1 = {attached: 9, free: 19, unsure: 2};
export const CLASS1_TOTAL = CLASS1.attached + CLASS1.free + CLASS1.unsure;
export const CLASS1_CLASSIFIED = CLASS1.attached + CLASS1.free;
export const CLASSES = [{a: 9, n: 28}, {a: 6, n: 27}, {a: 8, n: 29}, {a: 7, n: 26}];
export const POOLED = {a: CLASSES.reduce((s, c) => s + c.a, 0), n: CLASSES.reduce((s, c) => s + c.n, 0)};
export const BEADS = {total: 200, red: 50, ten: [1, 4, 2, 3], fifty: [11, 14, 13]};
export const REL = {att: {n: 30, roll: 20}, free: {n: 80, roll: 54}};
export const ITEM = {A: {att: 18, free: 42}, B: {att: 30, free: 30}};
(() => {
	const must = (ok: boolean, m: string) => { if (!ok) throw new Error('P03 check failed: ' + m); };
	must(CLASS1_TOTAL === 30 && CLASS1_CLASSIFIED === 28, 'class 1 totals');
	must(pctOf(9, 28) === 32 && pctOf(19, 28) === 68 && pctOf(9, 28) + pctOf(19, 28) === 100, 'class 1 percentages');
	must(CLASSES.map(c => pctOf(c.a, c.n)).join() === '32,22,28,27', 'four classes');
	must(POOLED.a === 30 && POOLED.n === 110 && pctOf(30, 110) === 27, 'pooled');
	must(pctOf(BEADS.red, BEADS.total) === 25 && BEADS.ten.map(r => r * 10).join() === '10,40,20,30' && BEADS.fifty.map(r => r * 2).join() === '22,28,26', 'beads');
	must(REL.att.n + REL.free.n === POOLED.n && pctOf(REL.att.roll, REL.att.n) === 67 && pctOf(REL.free.roll, REL.free.n) === 68, 'relationship');
	must(pctOf(ITEM.A.att, ITEM.A.att + ITEM.A.free) === 30 && pctOf(ITEM.B.att, ITEM.B.att + ITEM.B.free) === 50 && pctOf(18, 42) === 43, 'attempt');
})();

// ---------- the constant board ----------
export const QUESTION = 'How common is it, and how sure are you?';
/** The question heading, shown already written (scenes after the hook). */
export const Question: React.FC<{at?: number}> = ({at = -200}) => <Heading text={QUESTION} at={at} size={54} />;
export const STEPS = ['1. Plan and agree', '2. Define', '3. Collect', '4. Record', '5. Present', '6. Analyse'];
/** The method step rail under the question; `lit` is the current step (0-based) and lights at `at`. */
export const Rail: React.FC<{lit: number; at?: number}> = ({lit, at = 0}) => {
	const f = useCurrentFrame();
	let x = 96;
	return (
		<g>
			{STEPS.map((s, i) => {
				const w = s.length * 13.2 + 36;
				const x0 = x;
				x += w + 12;
				const on = i === lit ? prog(f, at, 12) : 0;
				const done = i < lit;
				return (
					<g key={s}>
						<rect x={x0} y={178} width={w} height={42} rx={21} fill={on > 0.5 ? AMBER : CARD} stroke={on > 0.5 ? AMBER_INK : done ? INK_SOFT : EDGE} strokeWidth={on > 0.5 ? 3 : 2} />
						<text x={x0 + w / 2} y={206} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 22}} fill={on > 0.5 ? INK : done ? INK_SOFT : GREYT}>{s}</text>
					</g>
				);
			})}
		</g>
	);
};
/** The desk strip (lower left). */
export const DESK = {x: 96, y: 700, w: 690, h: 300};
export const Desk: React.FC<{o?: number}> = ({o = 1}) => (o <= 0.01 ? null : <rect x={DESK.x} y={DESK.y} width={DESK.w} height={DESK.h} rx={26} fill="#efe5d1" stroke="rgba(60,45,20,0.12)" strokeWidth={2} opacity={o} />);
/** The card zone (right). */
export const CZ = {x: 830, y: 250, w: 1010};

// ---------- population field ----------
export const Field: React.FC<{x: number; y: number; cols: number; rows: number; p: number; o?: number; size?: number; gap?: number}> = ({x, y, cols, rows, p, o = 1, size = 18, gap = 8}) => {
	if (o <= 0.01) return null;
	const cx = (cols - 1) / 2, cy = (rows - 1) / 2;
	const maxD = Math.hypot(cx, cy);
	return (
		<g opacity={o}>
			{Array.from({length: cols * rows}, (_, i) => {
				const c = i % cols, r = Math.floor(i / cols);
				const d = Math.hypot(c - cx, r - cy) / maxD;
				const a = clamp01(p * 1.6 - d);
				return a > 0.01 ? <rect key={i} x={x + c * (size + gap)} y={y + r * (size + gap)} width={size} height={size} rx={3} fill="#c9cdd1" opacity={a} /> : null;
			})}
		</g>
	);
};

// ---------- slips and ticks ----------
/** A coded paper slip with three tick boxes; `tick` is the box index ticked (or -1); `fold` 0..1 folds it. */
export const PaperSlip: React.FC<{x: number; y: number; w?: number; tick?: number; tickP?: number; fold?: number; o?: number; rot?: number; labels?: boolean; nameLine?: number}> = ({x, y, w = 240, tick = -1, tickP = 1, fold = 0, o = 1, rot = 0, labels = true, nameLine = 0}) => {
	if (o <= 0.01) return null;
	const h = w * 0.5;
	const sy = 1 - 0.75 * clamp01(fold);
	const names = ['attached', 'free', 'unsure'];
	return (
		<g opacity={o} transform={`translate(${x},${y}) rotate(${rot}) scale(1,${sy})`}>
			<rect x={-w / 2} y={-h / 2} width={w} height={h} rx={6} fill="#fffdf6" stroke={INK_SOFT} strokeWidth={2} />
			{nameLine > 0.01 ? <g opacity={nameLine}><text x={-w / 2 + 14} y={-h / 2 + 30} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: w * 0.075}} fill={INK_SOFT}>name: ________</text></g> : null}
			{[0, 1, 2].map(i => {
				const bx = -w / 2 + 16 + i * (w / 3);
				return (
					<g key={i}>
						<rect x={bx} y={h * 0.02} width={w * 0.075} height={w * 0.075} rx={3} fill="#fff" stroke={INK} strokeWidth={2} />
						{labels ? <text x={bx + w * 0.09} y={h * 0.02 + w * 0.062} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: w * 0.05}} fill={INK}>{names[i]}</text> : null}
						{tick === i ? <path d={`M${bx + 3},${h * 0.02 + w * 0.045} L${bx + w * 0.035},${h * 0.02 + w * 0.08} L${bx + w * 0.1},${h * 0.02 - w * 0.01}`} fill="none" stroke={INK} strokeWidth={3.5} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - clamp01(tickP)} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** Tally marks for a count n (groups of five), drawn on progressively (p 0..1). */
export const Tally: React.FC<{x: number; y: number; n: number; p?: number; h?: number; color?: string; gap?: number}> = ({x, y, n, p = 1, h = 30, color = INK, gap = 10}) => {
	const shown = Math.floor(clamp01(p) * n + 1e-6);
	const marks: React.ReactNode[] = [];
	for (let i = 0; i < shown; i++) {
		const g = Math.floor(i / 5), k = i % 5;
		const gx = x + g * (4 * gap + 22);
		if (k < 4) marks.push(<line key={i} x1={gx + k * gap} y1={y} x2={gx + k * gap} y2={y + h} stroke={color} strokeWidth={3} strokeLinecap="round" />);
		else marks.push(<line key={i} x1={gx - 6} y1={y + h - 4} x2={gx + 3 * gap + 6} y2={y + 4} stroke={color} strokeWidth={3} strokeLinecap="round" />);
	}
	return <g>{marks}</g>;
};
export const tallyW = (n: number, gap = 10) => Math.ceil(n / 5) * (4 * gap + 22);

// ---------- earlobe definition line diagrams ----------
export type Lobe = 'free' | 'attached' | 'unsure';
/** Panel: a vertical line ("side of head") and the lower ear rim curving into the lobe, with a join dot. */
export const LobeDiagram: React.FC<{x: number; y: number; kind: Lobe; at: number; s?: number; labels?: boolean; color?: string; shade?: number}> = ({x, y, kind, at, s = 1, labels = true, color, shade}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 24);
	if (p <= 0.01) return null;
	const X = (u: number) => x + u * s, Y = (v: number) => y + v * s;
	const top = `M${X(55)},${Y(0)} C${X(100)},${Y(20)} ${X(100)},${Y(80)} ${X(72)},${Y(110)}`;
	const tail = kind === 'free'
		? ` C${X(60)},${Y(130)} ${X(62)},${Y(160)} ${X(38)},${Y(162)} C${X(18)},${Y(163)} ${X(8)},${Y(140)} ${X(0)},${Y(118)}`
		: kind === 'attached'
			? ` C${X(52)},${Y(132)} ${X(20)},${Y(140)} ${X(0)},${Y(142)}`
			: ` C${X(60)},${Y(128)} ${X(40)},${Y(142)} ${X(22)},${Y(142)} C${X(12)},${Y(142)} ${X(5)},${Y(136)} ${X(0)},${Y(130)}`;
	const join = kind === 'free' ? 118 : kind === 'attached' ? 142 : 130;
	const c = color ?? (kind === 'free' ? FREE : kind === 'attached' ? ATT : UNS);
	const sh = shade ?? 1;
	return (
		<g opacity={Math.min(1, p * 2)}>
			<line x1={X(0)} y1={Y(-20)} x2={X(0)} y2={Y(190)} stroke={INK_SOFT} strokeWidth={3} />
			{kind === 'free' ? <path d={`M${X(0)},${Y(118)} C${X(8)},${Y(140)} ${X(18)},${Y(163)} ${X(38)},${Y(162)} C${X(62)},${Y(160)} ${X(60)},${Y(130)} ${X(66)},${Y(118)} Z`} fill={FREE} opacity={0.3 * sh * prog(f, at + 20, 12)} /> : null}
			<DrawPath d={top + tail} at={at} dur={24} color={c} width={5} />
			<circle cx={X(0)} cy={Y(join)} r={7 * Math.max(0.8, s)} fill={INK} opacity={prog(f, at + 18, 8)} />
			{labels ? <text x={X(-10)} y={Y(-28)} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 18}} fill={INK_SOFT} opacity={prog(f, at + 10, 10)}>side of head</text> : null}
		</g>
	);
};

// ---------- column graph ----------
export type ColDatum = {label: string; v: number; dark?: boolean};
export const ColumnGraph: React.FC<{x: number; y: number; w: number; h: number; data: ColDatum[]; max?: number; step?: number; min?: number; at: number; colAt?: (i: number) => number; o?: number; yLabel?: string; xLabel?: string; size?: number; ghost?: number[]; ghostP?: number; labels?: boolean}> = ({x, y, w, h, data, max = 40, step = 10, min = 0, at, colAt, o = 1, yLabel, xLabel, size = 22, ghost, ghostP = 0, labels = true}) => {
	const f = useCurrentFrame();
	const ao = prog(f, at, 14) * o;
	if (ao <= 0.01) return null;
	const n = data.length;
	const slot = w / n;
	const cw = slot * 0.56;
	const Y = (v: number) => y + h - ((Math.max(min, v) - min) / (max - min)) * h;
	const ticks: number[] = [];
	for (let t = min; t <= max + 1e-9; t += step) ticks.push(t);
	return (
		<g opacity={ao}>
			{ticks.map(t => (
				<g key={t}>
					<line x1={x - 8} y1={Y(t)} x2={x} y2={Y(t)} stroke={INK} strokeWidth={2} />
					<text x={x - 14} y={Y(t) + 7} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size}} fill={INK_SOFT}>{t}</text>
				</g>
			))}
			{data.map((d, i) => {
				const cp = colAt ? prog(f, colAt(i), 20) : 1;
				const cx = x + slot * (i + 0.5);
				const gv = ghost ? ghost[i] : 0;
				return (
					<g key={i}>
						{ghost && ghostP > 0.01 ? <rect x={cx - cw / 2} y={Y(d.v + gv)} width={cw} height={Y(d.v) - Y(d.v + gv)} fill="none" stroke={FREE} strokeWidth={2.5} strokeDasharray="6 5" opacity={ghostP} /> : null}
						<rect x={cx - cw / 2} y={lerp(y + h, Y(d.v), cp)} width={cw} height={(y + h - Y(d.v)) * cp} fill={d.dark ? AMBER_INK : AMBER} stroke={AMBER_INK} strokeWidth={2} />
						{labels ? <text x={cx} y={y + h + size + 10} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={INK}>{d.label}</text> : null}
						{labels && cp > 0.9 ? <text x={cx} y={Y(d.v) - 10} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={INK}>{d.v}</text> : null}
					</g>
				);
			})}
			<line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={INK} strokeWidth={3} />
			<line x1={x} y1={y} x2={x} y2={y + h} stroke={INK} strokeWidth={3} />
			{yLabel ? <text x={x - 64} y={y + h / 2} textAnchor="middle" transform={`rotate(-90 ${x - 64} ${y + h / 2})`} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={INK}>{yLabel}</text> : null}
			{xLabel ? <text x={x + w / 2} y={y + h + size * 2 + 24} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={INK}>{xLabel}</text> : null}
		</g>
	);
};
export const GRAPH_DATA: ColDatum[] = [...CLASSES.map((c, i) => ({label: `class ${i + 1}`, v: pctOf(c.a, c.n)})), {label: 'pooled', v: pctOf(POOLED.a, POOLED.n), dark: true}];

// ---------- dot-strip chart ----------
export const DotStrip: React.FC<{x: number; y: number; w: number; at: number; o?: number}> = ({x, y, w, at, o = 1}) => {
	const f = useCurrentFrame();
	const ao = prog(f, at, 14) * o;
	if (ao <= 0.01) return null;
	const X = (v: number) => x + (v / 50) * w;
	return (
		<g opacity={ao}>
			<line x1={x} y1={y} x2={x + w} y2={y} stroke={INK} strokeWidth={3} />
			{[0, 10, 20, 30, 40, 50].map(t => (
				<g key={t}><line x1={X(t)} y1={y} x2={X(t)} y2={y + 10} stroke={INK} strokeWidth={2} /><text x={X(t)} y={y + 36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>{t}%</text></g>
			))}
			<text x={x + w / 2} y={y + 70} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 22}} fill={INK}>percentage of red beads in the sample</text>
			<line x1={X(25)} y1={y - 330} x2={X(25)} y2={y} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" />
			<text x={X(25) + 8} y={y - 336} style={{fontFamily: 'Caveat', fontWeight: 700, fontSize: 30}} fill={INK_SOFT}>true value</text>
		</g>
	);
};
export const stripX = (x: number, w: number, v: number) => x + (v / 50) * w;
void GREY_INK; void Sx; void rng;
