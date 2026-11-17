// B8-15 coded parts (lesson-local). Abstract diagrams only; the ear, the hair cells and the three devices stay painted
// plates. Nothing here draws people, heads, hands or faces.
// - EarG / earPt / EarStack: the ear section (one union box for its three matched states) and natural-to-screen mapping.
// - Strip: the sound pathway strip (outer ear, eardrum, ossicles, cochlea (hair cells), auditory nerve, brain). Boxes
//   light on cue; red breaks sit in the gaps between boxes (never on text); green ticks; bypass arcs rise from the sound
//   source and drop onto the box where each device rejoins the pathway; a pulse can travel the arcs and the boxes along
//   a track at the top of each box, clear of the box names.
// - Waves (travelling sound arcs), Rings (vibration rings), Uncoiled (the uncoiled cochlea band with bulges and
//   electrode dots), Balance (a level beam with two pans), Bubble (a speech bubble with scrambled grey shapes, no
//   words), VolBar, Call (a label with a leader line to a named part), TickMark.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, CARD, DrawPath, EDGE, GREEN, GREYT, GREY_FILL, INK, INK_SOFT, PlateB, RED, Sx, TEAL, VIOLET, lerp, mw, prog, smooth, vis} from '../bio-m8-b12/parts';
import type {PB} from '../bio-m8-b12/parts';
import {EAR_BOX} from './assets';

export * from '../bio-m8-b12/parts';
export type Pt = [number, number];
export const ON = -1000;
export const C_AID = '#a8651a';
export const C_BC = TEAL;
export const C_CI = VIOLET;

// ---------- the ear section ----------
export type EarG = {cx: number; cy: number; w: number};
export const earK = (g: EarG) => g.w / (EAR_BOX[2] - EAR_BOX[0]);
export const earPt = (g: EarG, p: Pt): Pt => {
	const k = earK(g);
	return [g.cx + (p[0] - (EAR_BOX[0] + EAR_BOX[2]) / 2) * k, g.cy + (p[1] - (EAR_BOX[1] + EAR_BOX[3]) / 2) * k];
};
export const EarStack: React.FC<{g: EarG; base: PB; layers?: {p: PB; o: number}[]; o?: number}> = ({g, base, layers = [], o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<PlateB p={base} cx={g.cx} cy={g.cy} w={g.w} />
		{layers.map((l, i) => (l.o > 0.01 ? <PlateB key={i} p={l.p} cx={g.cx} cy={g.cy} w={g.w} o={l.o} /> : null))}
	</g>
));
/** Screen point of a natural pixel on any plate centred by its box. */
export const plPt = (p: PB, cx: number, cy: number, w: number, q: Pt): Pt => {
	const k = w / (p.box[2] - p.box[0]);
	return [cx + (q[0] - (p.box[0] + p.box[2]) / 2) * k, cy + (q[1] - (p.box[1] + p.box[3]) / 2) * k];
};

// ---------- polyline helper ----------
const polyAt = (pts: Pt[], t: number): Pt => {
	const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
	const L = seg.reduce((a, b) => a + b, 0);
	let d = Math.max(0, Math.min(1, t)) * L;
	for (let i = 0; i < seg.length; i++) {
		if (d <= seg[i] || i === seg.length - 1) {
			const u = seg[i] ? d / seg[i] : 0;
			return [lerp(pts[i][0], pts[i + 1][0], u), lerp(pts[i][1], pts[i + 1][1], u)];
		}
		d -= seg[i];
	}
	return pts[pts.length - 1];
};
const bez = (a: Pt, c1: Pt, c2: Pt, b: Pt, n = 24): Pt[] => Array.from({length: n + 1}, (_, i) => {
	const t = i / n, u = 1 - t;
	return [u * u * u * a[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * b[0], u * u * u * a[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * b[1]];
});

// ---------- the sound pathway strip ----------
export const ST = {x: 150, y: 846, h: 92, gap: 34};
export const ST_WS = [220, 210, 210, 330, 300, 170];
export const ST_HEADS = ['outer ear', 'eardrum', 'ossicles', 'cochlea (hair cells)', 'auditory nerve', 'brain'];
export const bx = (i: number, x = ST.x, ws = ST_WS, gap = ST.gap) => x + ws.slice(0, i).reduce((a, b) => a + b + gap, 0);
export type Win = {at: number; out?: number};
export type Arc = {to: number; color: string; at: number; out?: number; rise: number; label?: string; lx?: number; o?: number};
export type Brk = {a: number; b: number; at: number; out?: number; label: string; color: string; lx?: number};
export type Pulse = {at: number; until?: number; to: number; from?: number; arc?: Arc; every?: number; dur?: number; color?: string};
export type StripS = {lit?: (number | undefined)[]; bad?: ({i: number} & Win)[]; grey?: ({i: number} & Win)[]; tick?: ({i: number} & Win)[]; brk?: ({after: number} & Win)[]; arcs?: Arc[]; pulses?: Pulse[]; brackets?: Brk[]};
export type SG = {x: number; y: number; h: number; gap: number; ws: number[]; heads: string[]; size: number; src: number};
export const SG_FULL: SG = {x: ST.x, y: ST.y, h: ST.h, gap: ST.gap, ws: ST_WS, heads: ST_HEADS, size: 32, src: 112};
/** A small strip (feedback scenes): six boxes in a given span. */
export const sgSmall = (x: number, y: number, w: number): SG => {
	const gap = 16, src = x + 18;
	const x0 = x + 52;
	const unit = (w - 52 - gap * 5) / 6;
	const ws = [unit, unit, unit, unit * 1.15, unit * 1.05, unit * 0.8];
	return {x: x0, y, h: 72, gap, ws, heads: ['outer ear', 'eardrum', 'ossicles', 'cochlea', 'nerve', 'brain'], size: 28, src};
};
const winV = (f: number, w: Win, d = 12) => vis(f, w.at, w.out, d);
export const Strip: React.FC<{s: StripS; g?: SG; o?: number}> = ({s, g = SG_FULL, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const X = (i: number) => bx(i, g.x, g.ws, g.gap);
	const midY = g.y + g.h / 2;
	const trackY = g.y + Math.round(g.h * 0.18);
	const arcPts = (a: Arc): Pt[] => {
		const sx = g.src + 6, tx = X(a.to) + Math.min(40, g.ws[a.to] * 0.25);
		return bez([sx, g.y - 4], [sx, g.y - a.rise], [tx, g.y - a.rise], [tx, g.y - 4]);
	};
	const boxes = g.heads.map((hd, i) => {
		const w = g.ws[i], x0 = X(i);
		const lit = s.lit?.[i] === undefined ? 0 : prog(f, s.lit[i] as number, 12);
		const bad = Math.max(0, ...(s.bad ?? []).filter(b => b.i === i).map(b => winV(f, b)));
		const grey = Math.max(0, ...(s.grey ?? []).filter(b => b.i === i).map(b => winV(f, b)));
		const size = Math.min(g.size, (g.size * (w - 20)) / mw(hd, g.size, true, 700));
		const stroke = bad > 0.5 ? RED : grey > 0.5 ? '#a8a092' : lit > 0.5 ? BLUE : EDGE;
		const fill = bad > 0.01 ? `rgba(196,67,47,${0.14 * bad})` : grey > 0.5 ? GREY_FILL : CARD;
		const ink = bad > 0.5 ? RED : grey > 0.5 ? GREYT : lit > 0.5 ? BLUE : GREYT;
		return (
			<g key={i}>
				<rect x={x0} y={g.y} width={w} height={g.h} rx={16} fill={CARD} stroke="none" />
				<rect x={x0} y={g.y} width={w} height={g.h} rx={16} fill={fill} stroke={stroke} strokeWidth={lit > 0.5 || bad > 0.5 ? 4 : 3} strokeDasharray={lit > 0.5 || bad > 0.5 || grey > 0.5 ? undefined : '10 8'} />
				<Sx x={x0 + w / 2} y={g.y + g.h - Math.round(g.h * 0.3)} text={hd} size={size} color={ink} anchor="middle" hand weight={700} at={ON} />
				{i < g.heads.length - 1 ? <path d={`M${x0 + w + 5},${midY} L${x0 + w + g.gap - 6},${midY} M${x0 + w + g.gap - 16},${midY - 9} L${x0 + w + g.gap - 6},${midY} L${x0 + w + g.gap - 16},${midY + 9}`} fill="none" stroke={INK_SOFT} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" /> : null}
			</g>
		);
	});
	const ticks = (s.tick ?? []).map((t, k) => {
		const v = winV(f, t);
		if (v <= 0.01) return null;
		const x1 = X(t.i) + g.ws[t.i] - 52;
		return <path key={'t' + k} opacity={v} d={`M${x1},${g.y + 4} l12,14 l28,-34`} fill="none" stroke={GREEN} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />;
	});
	const brks = (s.brk ?? []).map((b, k) => {
		const v = winV(f, b);
		if (v <= 0.01) return null;
		const cx = X(b.after) + g.ws[b.after] + g.gap / 2;
		const y0 = g.y - 16, y1 = g.y + g.h + 16, n = 6;
		const d = 'M' + Array.from({length: n + 1}, (_, j) => `${cx + (j % 2 ? 9 : -9)},${lerp(y0, y1, j / n)}`).join(' L');
		return <g key={'b' + k} opacity={v}><path d={d} fill="none" stroke={CARD} strokeWidth={12} strokeLinejoin="round" /><path d={d} fill="none" stroke={RED} strokeWidth={6} strokeLinejoin="round" /></g>;
	});
	const arcs = (s.arcs ?? []).map((a, k) => {
		const v = winV(f, a) * (a.o ?? 1);
		if (v <= 0.01) return null;
		const pts = arcPts(a);
		const d = 'M' + pts.map(p => p.join(',')).join(' L');
		const [ex, ey] = pts[pts.length - 1];
		const topY = g.y - 4 - 0.75 * (a.rise - 4);
		return (
			<g key={'a' + k} opacity={v}>
				<DrawPath d={d} at={a.at} dur={18} color={a.color} width={5} />
				<path opacity={prog(f, a.at + 16, 6)} d={`M${ex - 10},${ey - 14} L${ex},${ey} L${ex + 10},${ey - 14}`} fill="none" stroke={a.color} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
				{a.label ? <Sx x={a.lx ?? (g.src + ex) / 2} y={topY - 12} text={a.label} size={28} color={a.color} anchor="middle" hand weight={700} at={a.at + 8} /> : null}
			</g>
		);
	});
	const brackets = (s.brackets ?? []).map((b, k) => {
		const v = winV(f, b);
		if (v <= 0.01) return null;
		const xa = X(b.a) + 6, xb = X(b.b) + g.ws[b.b] - 6, yy = g.y - 22;
		return (
			<g key={'k' + k} opacity={v}>
				<path d={`M${xa},${g.y - 8} L${xa},${yy} L${xb},${yy} L${xb},${g.y - 8}`} fill="none" stroke={b.color} strokeWidth={5} strokeLinejoin="round" />
				<Sx x={b.lx ?? (xa + xb) / 2} y={yy - 14} text={b.label} size={34} color={b.color} anchor="middle" hand weight={700} at={ON} />
			</g>
		);
	});
	const pulses = (s.pulses ?? []).map((p, k) => {
		if (f < p.at || f > (p.until ?? 1e9) + (p.dur ?? 50)) return null;
		const from = p.from ?? -1;
		const base: Pt[] = [];
		if (p.arc) base.push(...arcPts(p.arc));
		const startBox = p.arc ? p.arc.to : from;
		const sx = startBox < 0 ? g.src + 10 : X(startBox) + 14;
		const ex = X(p.to) + g.ws[p.to] - 16;
		if (p.arc) base.push([base[base.length - 1][0], trackY]);
		base.push([sx, trackY], [ex, trackY]);
		const every = p.every ?? 40, dur = p.dur ?? 50;
		const dots: React.ReactNode[] = [];
		for (let st = p.at; st <= Math.min(f, p.until ?? 1e9); st += every) {
			const t = (f - st) / dur;
			if (t < 0 || t > 1) continue;
			const [x, y] = polyAt(base, smooth(t));
			dots.push(<circle key={st} cx={x} cy={y} r={9} fill={p.color ?? AMBER} stroke={CARD} strokeWidth={2.5} opacity={t > 0.9 ? (1 - t) * 10 : 1} />);
		}
		return <g key={'p' + k}>{dots}</g>;
	});
	return (
		<g opacity={o}>
			<g>
				{[0, 1, 2].map(j => <path key={j} d={`M${g.src - 14 + j * 9},${midY - 14 - j * 5} Q${g.src - 4 + j * 9},${midY} ${g.src - 14 + j * 9},${midY + 14 + j * 5}`} fill="none" stroke={INK_SOFT} strokeWidth={3.5} strokeLinecap="round" />)}
				<path d={`M${g.src + 14},${midY} L${g.x - 6},${midY}`} stroke={INK_SOFT} strokeWidth={3.5} strokeLinecap="round" />
			</g>
			{boxes}
			{brackets}
			{arcs}
			{ticks}
			{brks}
			{pulses}
		</g>
	);
};

// ---------- sound waves and vibration ----------
/** Sound arcs travelling from a to b. amp is the half-height of each arc (can grow with a frame function). */
export const Waves: React.FC<{a: Pt; b: Pt; at: number; out?: number; amp?: number | ((f: number) => number); n?: number; period?: number; color?: string; width?: number; o?: number}> = ({a, b, at, out, amp = 26, n = 4, period = 60, color = AMBER_INK, width = 4, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const A = typeof amp === 'function' ? amp(f) : amp;
	const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
	const nx = -Math.sin(ang), ny = Math.cos(ang), tx = Math.cos(ang), ty = Math.sin(ang);
	const arcs = Array.from({length: n}, (_, k) => {
		const t = (((f - at) / period + k / n) % 1 + 1) % 1;
		const x = lerp(a[0], b[0], t), y = lerp(a[1], b[1], t);
		const fade = Math.min(1, t * 5, (1 - t) * 5);
		const bulge = A * 0.45;
		return <path key={k} d={`M${x + nx * A},${y + ny * A} Q${x + tx * bulge * 2},${y + ty * bulge * 2} ${x - nx * A},${y - ny * A}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" opacity={fade} />;
	});
	return <g opacity={v}>{arcs}</g>;
};
export const Rings: React.FC<{c: Pt; at: number; out?: number; R?: number; n?: number; period?: number; color?: string; o?: number}> = ({c, at, out, R = 90, n = 3, period = 54, color = TEAL, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	return <g opacity={v}>{Array.from({length: n}, (_, k) => { const t = ((((f - at) / period) + k / n) % 1 + 1) % 1; return <circle key={k} cx={c[0]} cy={c[1]} r={8 + t * R} fill="none" stroke={color} strokeWidth={4} opacity={1 - t} />; })}</g>;
};

// ---------- uncoiled cochlea ----------
export type Bulge = {t: number; at: number; out?: number};
export const Uncoiled: React.FC<{x0: number; x1: number; y: number; h0?: number; h1?: number; bulges?: Bulge[]; dots?: number; dotsAt?: number; flash?: {i: number; at: number}[]; at?: number; o?: number}> = ({x0, x1, y, h0 = 96, h1 = 44, bulges = [], dots = 0, dotsAt = ON, flash = [], at = ON, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const N = 60;
	const H = (t: number) => lerp(h0, h1, t);
	const bump = (t: number) => bulges.reduce((s, b) => {
		const bv = vis(f, b.at, b.out, 14);
		return s + bv * 26 * (0.75 + 0.25 * Math.sin((f - b.at) / 4)) * Math.exp(-(((t - b.t) / 0.07) ** 2));
	}, 0);
	const top = Array.from({length: N + 1}, (_, i) => { const t = i / N; return `${lerp(x0, x1, t)},${y - H(t) / 2 - bump(t)}`; });
	const bot = Array.from({length: N + 1}, (_, i) => { const t = 1 - i / N; return `${lerp(x0, x1, t)},${y + H(t) / 2}`; });
	const mem = Array.from({length: N + 1}, (_, i) => { const t = i / N; return `${lerp(x0, x1, t)},${y - bump(t) * 0.7}`; });
	const dv = prog(f, dotsAt, 14);
	return (
		<g opacity={v}>
			<path d={`M${top.join(' L')} L${bot.join(' L')} Z`} fill="#dce7f4" stroke={BLUE} strokeWidth={4} strokeLinejoin="round" />
			<path d={`M${mem.join(' L')}`} fill="none" stroke="#7a95b8" strokeWidth={3} strokeDasharray="8 6" />
			{dv > 0.01 ? Array.from({length: dots}, (_, i) => {
				const t = (i + 0.5) / dots;
				const fl = Math.max(0, ...flash.filter(q => q.i === i).map(q => prog(f, q.at, 10)));
				const pulseR = fl > 0.01 ? 4 * Math.abs(Math.sin((f - (flash.find(q => q.i === i)?.at ?? 0)) / 5)) : 0;
				return <g key={i} opacity={dv}>
					{fl > 0.01 ? <circle cx={lerp(x0, x1, t)} cy={y} r={18 + pulseR} fill={AMBER} opacity={0.45 * fl} /> : null}
					<circle cx={lerp(x0, x1, t)} cy={y} r={9} fill={fl > 0.5 ? C_CI : '#8d857a'} stroke={CARD} strokeWidth={2} />
				</g>;
			}) : null}
		</g>
	);
};

// ---------- balance ----------
export const Balance: React.FC<{x: number; y: number; L?: number; at?: number; o?: number; tilt?: number}> = ({x, y, L = 300, at = ON, o = 1, tilt = 0}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const a = tilt;
	const lx = x - L * Math.cos(a), ly = y - L * Math.sin(a), rx = x + L * Math.cos(a), ry = y + L * Math.sin(a);
	const pan = (px: number, py: number) => <g><path d={`M${px},${py} L${px - 70},${py + 90} M${px},${py} L${px + 70},${py + 90}`} stroke={INK_SOFT} strokeWidth={3} /><path d={`M${px - 90},${py + 90} Q${px},${py + 130} ${px + 90},${py + 90} Z`} fill="#efe6d2" stroke={INK} strokeWidth={4} /></g>;
	return (
		<g opacity={v}>
			<path d={`M${x},${y} L${x - 50},${y + 150} L${x + 50},${y + 150} Z`} fill="#e6dcc6" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
			<line x1={lx} y1={ly} x2={rx} y2={ry} stroke={INK} strokeWidth={8} strokeLinecap="round" />
			<circle cx={x} cy={y} r={10} fill={INK} />
			{pan(lx, ly)}{pan(rx, ry)}
		</g>
	);
};

// ---------- speech bubble with scrambled shapes, volume bar ----------
export const Bubble: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number}> = ({x, y, w, h, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const rows = 3, per = 6;
	const fill = prog(f, at + 6, 30);
	return (
		<g opacity={v}>
			<path d={`M${x + 24},${y} L${x + w - 24},${y} Q${x + w},${y} ${x + w},${y + 24} L${x + w},${y + h - 24} Q${x + w},${y + h} ${x + w - 24},${y + h} L${x + 70},${y + h} L${x + 20},${y + h + 46} L${x + 40},${y + h} L${x + 24},${y + h} Q${x},${y + h} ${x},${y + h - 24} L${x},${y + 24} Q${x},${y} ${x + 24},${y} Z`} fill={CARD} stroke={INK_SOFT} strokeWidth={4} />
			{Array.from({length: rows * per}, (_, i) => {
				const r = Math.floor(i / per), c = i % per;
				const ww = 22 + ((i * 37) % 5) * 9;
				const xx = x + 26 + c * ((w - 52) / per) + ((i * 13) % 7);
				const yy = y + 26 + r * ((h - 40) / rows);
				return i / (rows * per) < fill ? <rect key={i} x={xx} y={yy} width={ww} height={16} rx={8} fill="#b9b3a8" transform={`rotate(${((i * 29) % 9) - 4},${xx},${yy})`} /> : null;
			})}
		</g>
	);
};
export const VolBar: React.FC<{x: number; y: number; h?: number; level: number; at?: number; o?: number}> = ({x, y, h = 260, level, at = ON, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const n = 8, gap = 6, sh = (h - gap * (n - 1)) / n;
	return (
		<g opacity={v}>
			{Array.from({length: n}, (_, i) => {
				const on = (i + 1) / n <= level + 0.001;
				return <rect key={i} x={x} y={y + h - (i + 1) * sh - i * gap} width={46} height={sh} rx={5} fill={on ? (i >= n - 2 ? RED : AMBER) : CARD} stroke={on ? 'none' : EDGE} strokeWidth={2.5} />;
			})}
		</g>
	);
};

// ---------- callouts ----------
/** A hand label with a leader line to a named part. The leader leaves the label's nearer end. */
export const Call: React.FC<{x: number; y: number; text: string; pt: Pt; at: number; out?: number; size?: number; color?: string; from?: Pt; o?: number}> = ({x, y, text, pt, at, out, size = 34, color = INK, from, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const w = mw(text, size, true, 700);
	const a: Pt = from ?? (pt[0] < x ? [x - 10, y - size * 0.32] : [x + w + 10, y - size * 0.32]);
	return (
		<g opacity={v}>
			<DrawPath d={`M${a[0]},${a[1]} L${pt[0]},${pt[1]}`} at={at} dur={10} color={INK_SOFT} width={3} />
			<circle cx={pt[0]} cy={pt[1]} r={7} fill={CARD} stroke={INK} strokeWidth={3} opacity={prog(f, at + 8, 6)} />
			<Sx x={x} y={y} text={text} size={size} color={color} hand weight={700} at={ON} />
		</g>
	);
};
export const TickMark: React.FC<{x: number; y: number; at: number; out?: number; s?: number}> = ({x, y, at, out, s = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	return <path opacity={v} d={`M${x},${y} l${14 * s},${16 * s} l${32 * s},${-40 * s}`} fill="none" stroke={GREEN} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />;
};
/** A soft paper veil that dims part of a plate (an ellipse). */
export const Veil: React.FC<{c: Pt; rx: number; ry: number; v: number; rot?: number}> = ({c, rx, ry, v, rot = 0}) => (v <= 0.01 ? null : <ellipse cx={c[0]} cy={c[1]} rx={rx} ry={ry} fill="#f6f1e7" opacity={0.62 * v} transform={rot ? `rotate(${rot},${c[0]},${c[1]})` : undefined} />);
export {AMBER, AMBER_INK, BLUE, CARD, GREEN, GREYT, INK, INK_SOFT, RED, TEAL, VIOLET};
