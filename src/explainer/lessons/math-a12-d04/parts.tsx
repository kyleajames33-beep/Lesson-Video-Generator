// Lesson parts for math-a12-d04, built on the maths studio kit (src/explainer/math/studio).
// Plates are drawn at native aspect (PlateImg / PlateReadout); graphs, readouts and algebra are coded.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {graphTransform} from '../../math/graphs';
import type {Range} from '../../math/graphs';
import {
	CARD, CARD_SHADOW, Card, CardTitle, FrameSvg, QuestionCard, RolesOn, MATH_AMBER, MATH_CURVE_OLIVE, MATH_GRADIENT, MATH_INNER, MATH_MISTAKE, MATH_ROLES, MATHS_SHARED_PLATES,
	PlateImg, plateHeight,
} from '../../math/studio';

export const NAVY = '#2b3f73';
export const OLIVE = MATH_CURVE_OLIVE;
export const GHOST = MATH_INNER;
export const AMB = MATH_AMBER;
export const VIOLET = MATH_GRADIENT;
export const GUITAR = MATHS_SHARED_PLATES.guitar;
export const METER = MATHS_SHARED_PLATES.soundMeter;
export const guitarH = (w: number) => plateHeight(GUITAR, w);
export const meterH = (w: number) => plateHeight(METER, w);

/** The main window shared by the graph scenes (x > 0 only for every log curve). */
export const WIN = {x: [-0.5, 5] as Range, y: [-3, 3] as Range};

export const DISPLAY = (size: number, color: string = INK, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, color, whiteSpace: 'pre', lineHeight: 1.15});

/** Lowered base: log<Sub>2</Sub>. */
export const Sub: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.62em', position: 'relative', top: '0.32em', marginLeft: '0.02em', whiteSpace: 'pre'}}>{children}</span>;
/** log with a lowered base. */
export const Lg: React.FC<{b: React.ReactNode}> = ({b}) => <>log<Sub>{b}</Sub></>;
/** Built-up fraction that inherits the row's font size. */
export const Frac: React.FC<{n: React.ReactNode; d: React.ReactNode; color?: string}> = ({n, d, color}) => (
	<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', fontSize: '0.8em', lineHeight: 1.08, margin: '0 0.1em', color}}>
		<span style={{padding: '0 0.16em'}}>{n}</span>
		<span style={{alignSelf: 'stretch', height: '0.075em', minHeight: 3, background: 'currentColor', borderRadius: 2}} />
		<span style={{padding: '0 0.16em'}}>{d}</span>
	</span>
);
/** The amber factor slot (1/ln a). */
export const Slot: React.FC<{children: React.ReactNode; glow?: number}> = ({children, glow = 0}) => (
	<span style={{display: 'inline-block', color: AMB, border: `0.07em solid ${MATH_ROLES.k.stroke}`, borderRadius: '0.22em', padding: '0 0.1em', background: glow > 0 ? `rgba(248,232,200,${glow})` : undefined}}>{children}</span>
);
/** 1/ln a as an amber built-up fraction. */
export const F: React.FC<{a: React.ReactNode; slot?: boolean}> = ({a, slot = false}) => {
	const fr = <Frac n="1" d={<>ln {a}</>} color={AMB} />;
	return slot ? <Slot>{fr}</Slot> : fr;
};

/** Colour key along the top right (scenes 2 to 15). */
export const Legend: React.FC<{at?: number}> = ({at = -30}) => {
	const f = useCurrentFrame();
	const items: [string, React.ReactNode, string][] = [
		[NAVY, <><Lg b="2" /> x</>, 'octaves'],
		[OLIVE, <><Lg b="10" /> x</>, 'bels'],
		[AMB, '1/ln a', 'factor'],
		[VIOLET, 'm', 'gradient'],
	];
	return (
		<div style={{position: 'absolute', right: 96, top: 26, opacity: prog(f, at, 14), display: 'flex', gap: 26, alignItems: 'baseline'}}>
			{items.map(([c, s, t], i) => (
				<span key={i} style={{display: 'flex', alignItems: 'baseline', gap: 8}}>
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, color: c, whiteSpace: 'pre'}}>{s}</span>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: c}}>{t}</span>
				</span>
			))}
		</div>
	);
};

export type GMap = {pt: (X: number, Y: number) => [number, number]; sx: number; sy: number; box: {left: number; top: number; width: number; height: number}};
/** Frame-space map of a FunctionSimulator placed at (x, y) with this size and window. */
export const gmap = (x: number, y: number, w: number, h: number, win: {x: Range; y: Range} = WIN): GMap => {
	const t = graphTransform({x: win.x, y: win.y, width: w, height: h});
	return {pt: (X, Y) => {const p = t.point(X, Y); return [x + p.x, y + p.y];}, sx: t.sx, sy: t.sy, box: {left: x + t.box.left, top: y + t.box.top, width: t.box.width, height: t.box.height}};
};
const logA = (a: number) => (X: number) => (X > 0 ? Math.log(X) / Math.log(a) : NaN);
/** A base-a log curve for FunctionSimulator `curves` (x > 0 only; starts where it leaves the window). */
export const logCurve = (a: number, o: {at?: number; out?: number; color?: string; dash?: string; width?: number; scale?: number; xMax?: number; label?: {text: string; X: number; color?: string}} = {}) => {
	const s = o.scale ?? 1;
	const fn = (X: number) => s * logA(a)(X);
	const k = Math.abs(s / Math.log(a));
	const lo = Math.exp(-3.8 / Math.max(k, 1e-6));
	return {fn, at: o.at ?? -30, out: o.out, color: o.color, dash: o.dash, width: o.width, domain: [lo, o.xMax ?? WIN.x[1]] as Range, label: o.label};
};
/** Height of log base a at X. */
export const lg = (a: number, X: number) => Math.log(X) / Math.log(a);

/** Tangent segment through (X, Y) with slope m, half length in px (frame coordinates). */
export const TanLine: React.FC<{M: GMap; X: number; Y: number; m: number; half?: number; color?: string; opacity?: number; dash?: string; width?: number}> = ({M, X, Y, m, half = 200, color = VIOLET, opacity = 1, dash, width = 6}) => {
	if (opacity <= 0.001) return null;
	const [px, py] = M.pt(X, Y);
	const vx = M.sx, vy = -m * M.sy, l = Math.hypot(vx, vy) || 1;
	return <line x1={px - (vx / l) * half} y1={py - (vy / l) * half} x2={px + (vx / l) * half} y2={py + (vy / l) * half} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} opacity={opacity} />;
};
export const Dot: React.FC<{p: [number, number]; color?: string; r?: number; opacity?: number}> = ({p, color = VIOLET, r = 14, opacity = 1}) => (opacity <= 0.001 ? null : <circle cx={p[0]} cy={p[1]} r={r} fill={color} stroke={CARD} strokeWidth={5} opacity={opacity} />);

/** Label at a frame point, with a paper halo. */
export const CurveLabel: React.FC<{x: number; y: number; at?: number; out?: number; color?: string; children: React.ReactNode; size?: number; anchor?: 'start' | 'end'; opacity?: number}> = ({x, y, at = -30, out, color = INK, children, size = 42, anchor = 'start', opacity = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10)) * opacity;
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, transform: anchor === 'end' ? 'translateX(-100%)' : undefined, opacity: o, ...DISPLAY(size, color), textShadow: '0 0 6px #fffdf8, 0 0 12px #fffdf8, 0 0 3px #fffdf8'}}>{children}</div>;
};

/** Grey "Year 11" / "last video" recall chip. */
export const RecallChip: React.FC<{x: number; y: number; w?: number; at: number; out?: number; children: React.ReactNode; size?: number}> = ({x, y, w, at, out, children, size = 32}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 18px', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, color: '#4f4840', lineHeight: 1.3}}>{children}</div>
	</Enter>
);

/** A 44 px statement chip on a card (role-coloured border). */
export const Chip: React.FC<{x: number; y: number; at: number; out?: number; children: React.ReactNode; size?: number; color?: string; w?: number}> = ({x, y, at, out, children, size = 44, color = 'rgba(60,45,20,0.14)', w}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '6px 24px 8px', boxShadow: CARD_SHADOW, border: `3px solid ${color}`, ...DISPLAY(size, INK, 800), whiteSpace: w ? 'normal' : 'pre'}}>{children}</div>
	</Enter>
);

/** Two-line hand note (counts as one tag). */
export const HandNote: React.FC<{x: number; y: number; lines: string[]; at: number; out?: number; size?: number; color?: string}> = ({x, y, lines, at, out, size = 38, color = INK}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o}}>
			{lines.map((l, i) => <div key={i} style={{height: size * 1.15}}><HandText text={l} at={at + i * 18} size={size} color={color} cps={28} /></div>)}
		</div>
	);
};

/** Ruled, dashed response space under a question card; nothing answer-bearing. */
export const WorkingSpace: React.FC<{x?: number; y?: number; w?: number; h?: number}> = ({x = 96, y = 650, w = 1460, h = 170}) => (
	<div style={{position: 'absolute', left: x, top: y, width: w, height: h, boxSizing: 'border-box', border: '3px dashed rgba(60,45,20,0.28)', borderRadius: 18, background: 'repeating-linear-gradient(to bottom, transparent 0 54px, rgba(60,45,20,0.10) 54px 56px)'}}>
		<span style={{position: 'absolute', left: 22, top: 8, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK_SOFT}}>your working</span>
	</div>
);

/**
 * The countdown ring held full from "Pause here to answer." until the timed countdown starts (build rule).
 * Same place and look as the QuestionCard countdown, which takes over at hold.startFrame.
 */
export const PreRing: React.FC<{from: number; start: number; x?: number; y?: number; r?: number}> = ({from, start, x = 1690, y = 560, r = 70}) => {
	const f = useCurrentFrame();
	if (f < from || f >= start) return null;
	const o = prog(f, from, 10);
	return (
		<FrameSvg>
			<g opacity={o} transform={`translate(${x},${y})`}>
				<circle r={r + 16} fill="#fffdf8" stroke="rgba(0,0,0,0.06)" strokeWidth={2} />
				<circle r={r} fill="none" stroke={PAPER_DEEP} strokeWidth={14} />
				<circle r={r} fill="none" stroke={AMBER} strokeWidth={14} />
				<text y={16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52}} fill={INK}>10</text>
				<text y={r + 62} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK}>think it through</text>
			</g>
		</FrameSvg>
	);
};

/**
 * Question-card picture: small coded axes with no curve and no sign, a marked x value on the x-axis
 * (dashed line up) and a violet hand tag, or a shaded x > 0 half. Text 26 px or more.
 */
export const QAxes: React.FC<{w?: number; h?: number; markX?: number; tag: string; shadeRight?: boolean; ticks?: number[]}> = ({w = 420, h = 300, markX, tag, shadeRight = false, ticks = [1, 2, 3, 4]}) => {
	const pad = {l: 24, r: 26, t: 22, b: 48};
	const win = {x: [-0.8, 4.6], y: [-2, 2]};
	const bw = w - pad.l - pad.r, bh = h - pad.t - pad.b;
	const X = (v: number) => pad.l + ((v - win.x[0]) / (win.x[1] - win.x[0])) * bw;
	const Y = (v: number) => pad.t + ((win.y[1] - v) / (win.y[1] - win.y[0])) * bh;
	const ox = X(0), oy = Y(0);
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)'}}>
			{shadeRight ? <><rect x={ox} y={pad.t} width={X(win.x[1]) - ox} height={bh} fill="#f8e8c8" opacity={0.9} /><text x={X(win.x[1]) - 12} y={pad.t + bh - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: AMBER_INK}}>x &gt; 0</text></> : null}
			<path d={`M${pad.l},${oy} H${pad.l + bw} M${ox},${pad.t} V${pad.t + bh}`} stroke={INK} strokeWidth={3.5} fill="none" />
			<text x={pad.l + bw + 4} y={oy - 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK_SOFT}}>x</text>
			<text x={ox + 10} y={pad.t + 26} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK_SOFT}}>y</text>
			{ticks.map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={oy - 8} y2={oy + 8} stroke={INK} strokeWidth={3} /><text x={X(t)} y={h - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{t}</text></g>)}
			{markX !== undefined ? <g>
				<line x1={X(markX)} x2={X(markX)} y1={oy} y2={pad.t + 30} stroke={MATH_GRADIENT} strokeWidth={4} strokeDasharray="8 7" />
				<circle cx={X(markX)} cy={oy} r={10} fill={MATH_GRADIENT} stroke={CARD} strokeWidth={4} />
				<text x={X(markX) + 14} y={pad.t + 40} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: MATH_GRADIENT}}>{tag}</text>
			</g> : <text x={(ox + X(win.x[1])) / 2} y={pad.t + 50} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: MATH_GRADIENT}}>{tag}</text>}
		</svg>
	);
};

/** Guitar plate (native aspect) with an optional small caption. */
export const GuitarImg: React.FC<{x: number; y: number; w: number; opacity?: number}> = ({x, y, w, opacity = 1}) => <PlateImg plate={GUITAR} x={x} y={y} w={w} opacity={opacity} />;
export const MeterImg: React.FC<{x: number; y: number; w: number; opacity?: number}> = ({x, y, w, opacity = 1}) => <PlateImg plate={METER} x={x} y={y} w={w} opacity={opacity} />;

/** A red crossed line (frame coords) for "too steep" style marks. */
export const RedCross: React.FC<{cx: number; cy: number; size?: number; o?: number}> = ({cx, cy, size = 40, o = 1}) => (
	<g opacity={o}><line x1={cx - size / 2} y1={cy - size / 2} x2={cx + size / 2} y2={cy + size / 2} stroke={MATH_MISTAKE} strokeWidth={8} strokeLinecap="round" /><line x1={cx + size / 2} y1={cy - size / 2} x2={cx - size / 2} y2={cy + size / 2} stroke={MATH_MISTAKE} strokeWidth={8} strokeLinecap="round" /></g>
);

/**
 * Attempt stage (the d02/d03 layout): the full worded question card, a "Given" card at 44 px, a large
 * answer-free axes picture (about 720 x 380), the full ring from "Pause here to answer." and the kit countdown.
 */
export const AttemptStage: React.FC<{hold: {startFrame: number; endFrame: number}; pauseAt: number; picture: React.ReactNode; given: React.ReactNode[]; heading?: string; size?: number; children: React.ReactNode}> = ({hold, pauseAt, picture, given, heading, size = 54, children}) => (
	<RolesOn on={false}>
		<QuestionCard at={0} size={size} w={1460} y={214} hold={hold} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
		<Card x={96} y={560} w={700} at={6} pad="14px 26px 16px">
			<CardTitle>Given</CardTitle>
			{given.map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, marginTop: 4, whiteSpace: 'pre'}}>{g}</div>)}
		</Card>
		<Enter at={6} style={{position: 'absolute', left: 860, top: 540}}>{picture}</Enter>
		<PreRing from={pauseAt} start={hold.startFrame} />
	</RolesOn>
);
