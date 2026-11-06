// Drawing parts for Y11 Chem M2 V06 (mole ratios). Text with _2 subscripts and ^{3+} superscripts reuses the C5
// builder (Sx, tw, toks); plates reuse PicF; the coded line graph reuses M8 C04 (CAxes, CPts, CSeg). New here:
// rich multi-colour text, chips with a red strike, hand tags that write on, pen rings and arrows, the framed answer
// (dark-ink box with a green tick), readouts, ball molecules in HSC colours, the mixing slider and the two-colour cup
// fill for the painted foam cup, and a small group mover.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {Sx, toks} from '../chem-m5-c05/parts';
import {PicF} from '../chem-m8-c01/parts';
import {CAxes, CPts, CSeg, gx, gy} from '../chem-m8-c04/parts';
import type {CG, CPt} from '../chem-m8-c04/parts';
import type {PDef} from './common';
import {W_CHARS, W_D600, W_D700, W_D800, W_H700} from './widths';
import {CUP, CUP_LIQ} from './common';

export {Sx, PicF, CAxes, CPts, CSeg, gx, gy, INK, INK_SOFT, AMBER, AMBER_INK, DrawPath, prog, FONT_DISPLAY, FONT_HAND, Countdown};
export type {CG, CPt};

// ---------- colour roles (design, fixed for the whole video) ----------
export const TEAL = '#12827b', TEAL_INK = '#0b625d';
export const AMB = AMBER, AMB_INK = '#a35c00';
export const NAVY = '#24407a', VIOLET = '#7a4fb0';
export const TERRA = '#c4582f', RED = '#c4362f', GREEN = '#2f8a5b', GREY = '#8a8478', GREY_INK = '#6b6358';
export const GOLD = '#b08a1e';
export const H_FILL = '#ffffff', O_FILL = '#d6402e', N_FILL = '#3a63c4', AL_FILL = '#9aa0a8', CL_FILL = '#6cb55a';

// ---------- text width from the real font metrics (widths.ts) ----------
const W_IDX = new Map([...W_CHARS].map((c, i) => [c, i]));
const cw = (ch: string, tab: number[]) => { const i = W_IDX.get(ch); return (i === undefined ? 560 : tab[i]) / 1000; };
export const tw = (text: string, size: number, hand = false, weight = 800) => {
	const tab = hand ? W_H700 : weight <= 650 ? W_D600 : weight <= 750 ? W_D700 : W_D800;
	return toks(text).reduce((w, t) => w + [...t.s].reduce((a, ch) => a + cw(ch, tab), 0) * size * (t.k ? 0.64 : 1), 0);
};

// ---------- small maths ----------
export const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const smooth = (u: number) => { const t = clamp01(u); return t * t * (3 - 2 * t); };
export const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
/** Piecewise value over local frames, eased between keys. */
export const kf = (f: number, pts: [number, number][]): number => {
	if (f <= pts[0][0]) return pts[0][1];
	for (let i = 0; i + 1 < pts.length; i++) {
		const [a, va] = pts[i], [b, vb] = pts[i + 1];
		if (f < b) return va + (vb - va) * smooth((f - a) / Math.max(1, b - a));
	}
	return pts[pts.length - 1][1];
};

// ---------- groups ----------
/** Fade a group in (and out). */
export const Fade: React.FC<{at: number; out?: number; d?: number; children: React.ReactNode}> = ({at, out, d = 12, children}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, d);
	return v > 0.005 ? <g opacity={v}>{children}</g> : null;
};
/** Move and scale a group between keyed states [frame, dx, dy, scale] (scale about the origin of the group's coords). */
export const Move: React.FC<{keys: [number, number, number, number][]; o?: number; children: React.ReactNode}> = ({keys, o = 1, children}) => {
	const f = useCurrentFrame();
	const dx = kf(f, keys.map(k => [k[0], k[1]])), dy = kf(f, keys.map(k => [k[0], k[2]])), s = kf(f, keys.map(k => [k[0], k[3]]));
	return o > 0.005 ? <g opacity={o} transform={`translate(${dx},${dy}) scale(${s})`}>{children}</g> : null;
};

// ---------- text ----------
export type Seg = {t: string; c?: string; w?: number; at?: number};
/** One line of multi-colour text with chemistry markup. */
export const Rich: React.FC<{x: number; y: number; segs: Seg[]; size?: number; anchor?: 'start' | 'middle' | 'end'; at?: number; out?: number; hand?: boolean; weight?: number; opacity?: number}> = ({x, y, segs, size = 44, anchor = 'start', at = -1000, out, hand = false, weight = 800, opacity = 1}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out) * opacity;
	if (o <= 0.005) return null;
	let shift = 0;
	const parts: React.ReactNode[] = [];
	segs.forEach((sg, i) => toks(sg.t).forEach((t, j) => {
		const want = t.k === 1 ? size * 0.2 : t.k === 2 ? -size * 0.42 : 0;
		const dy = want - shift;
		shift = want;
		const so = sg.at === undefined ? 1 : prog(f, sg.at, 10);
		parts.push(<tspan key={i + '-' + j} dy={dy || undefined} fill={sg.c ?? INK} fillOpacity={so} style={{fontSize: t.k ? size * 0.64 : size, fontWeight: sg.w ?? weight}}>{t.s}</tspan>);
	}));
	return <text x={x} y={y} textAnchor={anchor} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size, whiteSpace: 'pre'}}>{parts}</text>;
};
export const richW = (segs: Seg[], size: number, hand = false, weight = 800) => segs.reduce((a, s) => a + tw(s.t, size, hand, s.w ?? weight), 0);
/** Hand-written text that writes on left to right. */
export const Write: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; cps?: number; weight?: number}> = ({x, y, text, at, out, size = 40, color = INK, anchor = 'start', cps = 30, weight = 700}) => {
	const f = useCurrentFrame();
	const n = Math.max(8, Math.round((text.length / cps) * 30));
	const p = prog(f, at, n);
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.005) return null;
	return (
		<g opacity={o} style={p >= 1 ? undefined : {clipPath: `inset(-40% ${100 - p * 100}% -40% -5%)`}}>
			<Sx x={x} y={y} text={text} size={size} color={color} anchor={anchor} hand weight={weight} at={-1000} />
		</g>
	);
};
export const Heading: React.FC<{text: string; at?: number; out?: number; size?: number}> = ({text, at = 0, out, size = 56}) => <Write x={96} y={150} text={text} at={at} out={out} size={size} color={INK} cps={40} />;

// ---------- pen marks ----------
export const PenRing: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number; color?: string; seed?: number; width?: number}> = ({cx, cy, rx, ry, at, out, color = AMB, seed = 3, width = 5}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.005) return null;
	return <g opacity={o}><DrawPath d={scribbleEllipse(cx, cy, rx, ry, seed)} at={at} dur={18} color={color} width={width} /></g>;
};
/** Curved pen arrow from a to b (bend > 0 bows to the left of travel). */
export const PenArrow: React.FC<{a: [number, number]; b: [number, number]; at: number; out?: number; color?: string; bend?: number; width?: number; head?: number}> = ({a, b, at, out, color = INK, bend = 0.2, width = 4.5, head = 18}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.005) return null;
	const mx = (a[0] + b[0]) / 2 - (b[1] - a[1]) * bend, my = (a[1] + b[1]) / 2 + (b[0] - a[0]) * bend;
	const ang = Math.atan2(b[1] - my, b[0] - mx);
	const hp = prog(f, at + 14, 6);
	return (
		<g opacity={o}>
			<DrawPath d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} at={at} dur={16} color={color} width={width} />
			<path d={`M${b[0] - head * Math.cos(ang - 0.45)},${b[1] - head * Math.sin(ang - 0.45)} L${b[0]},${b[1]} L${b[0] - head * Math.cos(ang + 0.45)},${b[1] - head * Math.sin(ang + 0.45)}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" opacity={hp} />
		</g>
	);
};
export const StrikeLine: React.FC<{x1: number; y1: number; x2: number; y2: number; at: number; color?: string; width?: number}> = ({x1, y1, x2, y2, at, color = RED, width = 6}) => {
	const f = useCurrentFrame();
	return f < at ? null : <DrawPath d={`M${x1},${y1} L${x2},${y2}`} at={at} dur={10} color={color} width={width} />;
};
export const TickMark: React.FC<{x: number; y: number; at: number; s?: number; color?: string}> = ({x, y, at, s = 1, color = GREEN}) => {
	const f = useCurrentFrame();
	return f < at ? null : <DrawPath d={`M${x - 16 * s},${y} L${x - 4 * s},${y + 13 * s} L${x + 20 * s},${y - 16 * s}`} at={at} dur={10} color={color} width={6 * Math.max(0.8, s)} />;
};
export const RedX: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 22}) => (
	<>
		<StrikeLine x1={x - s} y1={y - s} x2={x + s} y2={y + s} at={at} width={7} />
		<StrikeLine x1={x + s} y1={y - s} x2={x - s} y2={y + s} at={at + 5} width={7} />
	</>
);

// ---------- chips, framed answers, readouts ----------
export const chipW = (segs: Seg[], size: number, hand: boolean) => richW(segs, size, hand, 700) + size * 1.1;
/** Rounded chip. y is the top. strike: red line through it from that frame. */
export const Chip: React.FC<{x: number; y: number; segs: Seg[]; at: number; out?: number; size?: number; color?: string; fill?: string; anchor?: 'start' | 'middle' | 'end'; hand?: boolean; strike?: number; dashed?: boolean; o?: number; w?: number}> = ({x, y, segs, at, out, size = 40, color = INK, fill = '#fffdf8', anchor = 'start', hand = false, strike, dashed, o = 1, w}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.005) return null;
	const W = w ?? chipW(segs, size, hand);
	const H = size * 1.55;
	const x0 = anchor === 'middle' ? x - W / 2 : anchor === 'end' ? x - W : x;
	const pop = 0.92 + 0.08 * smooth(prog(f, at, 12));
	return (
		<g opacity={v} transform={`translate(${x0 + W / 2},${y + H / 2}) scale(${pop}) translate(${-(x0 + W / 2)},${-(y + H / 2)})`}>
			<rect x={x0} y={y} width={W} height={H} rx={H / 2} fill={fill} stroke={color} strokeWidth={4} strokeDasharray={dashed ? '12 8' : undefined} />
			<Rich x={x0 + W / 2} y={y + H / 2 + size * 0.36} segs={segs.map(s => ({...s, c: s.c ?? color}))} size={size} anchor="middle" hand={hand} />
			{strike !== undefined ? <StrikeLine x1={x0 + 14} y1={y + H / 2 + 4} x2={x0 + W - 14} y2={y + H / 2 - 4} at={strike} width={7} /> : null}
		</g>
	);
};
/** Framed answer: dark-ink box with a green tick. y is the text baseline. */
export const Framed: React.FC<{x: number; y: number; segs: Seg[]; at: number; out?: number; size?: number; anchor?: 'start' | 'middle'; tick?: boolean; o?: number; stroke?: string}> = ({x, y, segs, at, out, size = 56, anchor = 'start', tick = true, o = 1, stroke = INK}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.005) return null;
	const W = richW(segs, size) + size * 0.9;
	const x0 = anchor === 'middle' ? x - W / 2 : x;
	const s = 0.9 + 0.1 * smooth(prog(f, at, 14));
	const cy = y - size * 0.33;
	return (
		<g opacity={v} transform={`translate(${x0 + W / 2},${cy}) scale(${s}) translate(${-(x0 + W / 2)},${-cy})`}>
			<rect x={x0} y={y - size * 1.05} width={W} height={size * 1.45} rx={12} fill="#fffdf8" stroke={stroke} strokeWidth={5} />
			<Rich x={x0 + size * 0.45} y={y} segs={segs} size={size} weight={800} />
			{tick ? <TickMark x={x0 + W + size * 0.55} y={cy} at={at + 10} s={size / 44} /> : null}
		</g>
	);
};
/** Live readout: framed value (about 52 px). x, y top-left. */
export const Readout: React.FC<{x: number; y: number; w: number; text: string; color?: string; frame?: string; at?: number; out?: number; size?: number; label?: string; fill?: string; anchor?: 'start' | 'middle'; o?: number}> = ({x, y, w, text, color = INK, frame, at = -1000, out, size = 52, label, fill = '#fffdf8', anchor = 'start', o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.005) return null;
	const H = size * 1.5;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={H} rx={14} fill={fill} stroke={frame ?? color} strokeWidth={4} />
			<Sx x={anchor === 'middle' ? x + w / 2 : x + 22} y={y + H / 2 + size * 0.36} text={text} size={size} color={color} anchor={anchor} weight={800} at={-1000} />
			{label ? <Sx x={x + 4} y={y - 12} text={label} size={28} color={INK_SOFT} weight={700} at={-1000} /> : null}
		</g>
	);
};

// ---------- plates ----------
export const plateMap = (p: PDef, x: number, y: number, h: number) => {
	const k = h / p.box[3];
	return {k, w: p.box[2] * k, X: (u: number) => x + (u - p.box[0]) * k, Y: (v: number) => y + (v - p.box[1]) * k};
};
export const Plate: React.FC<{p: PDef; x: number; y: number; h: number; at?: number; out?: number; o?: number; dy?: number}> = ({p, x, y, h, at = -1000, out, o = 1, dy = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	const lift = (1 - smooth(prog(f, at, 18))) * dy;
	return v > 0.005 ? <PicF p={p} x={x} y={y - lift} h={h} o={v} /> : null;
};

// ---------- molecules (HSC colours: H white, O red, N blue, Al grey, Cl green) ----------
export const Atom: React.FC<{x: number; y: number; r: number; fill: string; o?: number}> = ({x, y, r, fill, o = 1}) => (
	<circle cx={x} cy={y} r={r} fill={fill} stroke={fill === H_FILL ? '#8a8478' : 'rgba(40,30,20,0.55)'} strokeWidth={Math.max(2, r * 0.12)} opacity={o} />
);
/** Diatomic: two balls, centre (x, y). */
export const Di: React.FC<{x: number; y: number; r: number; fill: string; o?: number; rot?: number}> = ({x, y, r, fill, o = 1, rot = 0}) => (
	<g transform={`rotate(${rot},${x},${y})`} opacity={o}>
		<Atom x={x - r * 0.72} y={y} r={r} fill={fill} />
		<Atom x={x + r * 0.72} y={y} r={r} fill={fill} />
	</g>
);
/** Bent water: O at (x, y), two H below-left and below-right. */
export const Water: React.FC<{x: number; y: number; r: number; o?: number}> = ({x, y, r, o = 1}) => (
	<g opacity={o}>
		<Atom x={x - r * 0.95} y={y + r * 0.75} r={r * 0.68} fill={H_FILL} />
		<Atom x={x + r * 0.95} y={y + r * 0.75} r={r * 0.68} fill={H_FILL} />
		<Atom x={x} y={y} r={r} fill={O_FILL} />
	</g>
);
export const Ammonia: React.FC<{x: number; y: number; r: number; o?: number}> = ({x, y, r, o = 1}) => (
	<g opacity={o}>
		<Atom x={x - r * 1.0} y={y + r * 0.6} r={r * 0.62} fill={H_FILL} />
		<Atom x={x + r * 1.0} y={y + r * 0.6} r={r * 0.62} fill={H_FILL} />
		<Atom x={x} y={y + r * 1.05} r={r * 0.62} fill={H_FILL} />
		<Atom x={x} y={y} r={r} fill={N_FILL} />
	</g>
);

// ---------- mixing slider and cup fill ----------
export const vx = (x0: number, x1: number, v: number) => x0 + ((v - 5) / 30) * (x1 - x0);
/** Horizontal track 5 to 35 mL: navy left of the handle, violet right. */
export const Slider: React.FC<{x0: number; x1: number; y: number; v: number; at?: number; o?: number; ticks?: boolean; size?: number}> = ({x0, x1, y, v, at = -1000, o = 1, ticks = true, size = 30}) => {
	const f = useCurrentFrame();
	const op = vis(f, at) * o;
	if (op <= 0.005) return null;
	const hx = vx(x0, x1, v);
	return (
		<g opacity={op}>
			<rect x={x0 - 14} y={y - 9} width={hx - x0 + 14} height={18} rx={9} fill={NAVY} />
			<rect x={hx} y={y - 9} width={x1 - hx + 14} height={18} rx={9} fill={VIOLET} />
			{ticks ? [5, 10, 15, 20, 25, 30, 35].map(t => (
				<g key={t}>
					<line x1={vx(x0, x1, t)} x2={vx(x0, x1, t)} y1={y + 16} y2={y + 28} stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={vx(x0, x1, t)} y={y + 28 + size} text={`${t}`} size={size} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
				</g>
			)) : null}
			<circle cx={hx} cy={y} r={24} fill="#fffdf8" stroke={INK} strokeWidth={5} />
			<circle cx={hx} cy={y} r={8} fill={INK} />
		</g>
	);
};
/** The foam cup plate with its cutaway filled as a navy (acid) layer under a violet (base) layer of constant total
 *  height; acid = acid volume in mL of 40. */
export const MixCup: React.FC<{x: number; y: number; h: number; acid?: number; total?: number; o?: number; fill?: number; id: string}> = ({x, y, h, acid = 20, total = 40, o = 1, fill = 1, id}) => {
	if (o <= 0.005) return null;
	const m = plateMap(CUP, x, y, h);
	const pts = CUP_LIQ.map(([u, v]) => `${m.X(u)},${m.Y(v)}`).join(' ');
	const top = m.Y(1052), bot = m.Y(1242);
	const split = lerp(bot, top, clamp01(acid / total));
	return (
		<g opacity={o}>
			<PicF p={CUP} x={x} y={y} h={h} />
			<defs><clipPath id={id}><polygon points={pts} /></clipPath></defs>
			<g clipPath={`url(#${id})`} opacity={0.8 * fill}>
				<rect x={m.X(860)} y={top} width={m.X(1310) - m.X(860)} height={split - top} fill={VIOLET} />
				<rect x={m.X(860)} y={split} width={m.X(1310) - m.X(860)} height={bot - split + 4} fill={NAVY} />
			</g>
		</g>
	);
};
/** Response hold: "Pause here to answer." and the 10 s countdown. */
export const PauseHold: React.FC<{h: {startFrame: number; endFrame: number}; at: number; x: number; y: number; cx: number; cy: number}> = ({h, at, x, y, cx, cy}) => (
	<>
		<Write x={x} y={y} text="Pause here to answer." at={at} size={56} color={AMB_INK} />
		<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={64} />
	</>
);
/** A paper card behind a question. */
export const Card: React.FC<{x?: number; y?: number; w?: number; h: number}> = ({x = 100, y = 185, w = 1720, h}) => <rect x={x} y={y} width={w} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />;
