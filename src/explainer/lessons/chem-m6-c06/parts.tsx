// Drawing parts for M6 C06 (conjugate pairs and amphiprotic species). Reuses C05 (and through it C04, C03, C01: the
// proton token and hop, equation underlines and role boxes, crossed chips, glows, question card, countdown).
// New here: pair brackets that join two equation tokens across the arrow (amber above, violet below), the dashed
// reverse hop, a proton chain strip with role outlines (amber gives, violet takes, split for both), a split-outline
// formula tile, a pull meter, a see-saw, a mini pH bar with a direction arrow and no numbers, a faint current meter.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, prog} from '../../kit';
import {ACID, ACID_INK, BASE, BASE_INK, Fade, GREYT, INK, INK_SOFT, PROTON, PROTON_INK, Proton, Sx, clamp01, eSpan, lerp, mw, smooth, vis} from '../chem-m6-c05/parts';
import type {EItem} from '../chem-m6-c05/parts';

export * from '../chem-m6-c05/parts';

// ---------- pair bracket across an equation ----------
/** Joins tokens i and j of an equation line. above: amber-style bracket over the line; else under it. */
export const PairBracket: React.FC<{items: EItem[]; i: number; j: number; size: number; x: number; y: number; at: number; out?: number; o?: number; above?: boolean; color?: string; label?: string; labelAt?: number; labelOut?: number; gap?: number; pulse?: number; lsize?: number}> = ({items, i, j, size, x, y, at, out, o = 1, above = true, color, label, labelAt, labelOut, gap = 24, pulse, lsize = 34}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const a = eSpan(items, i, size, x), b = eSpan(items, j, size, x);
	const col = color ?? (above ? ACID : BASE), ink = col === ACID ? ACID_INK : col === BASE ? BASE_INK : col;
	const by = above ? y - size * 1.05 - gap : y + size * 0.35 + gap;
	const d = above ? 18 : -18;
	const pg = pulse === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - pulse) / 36) * Math.PI));
	return (
		<g opacity={v}>
			<DrawPath d={`M${a.cx},${by + d} L${a.cx},${by} L${b.cx},${by} L${b.cx},${by + d}`} at={at} dur={18} color={col} width={5} />
			{pg > 0.01 ? [a.cx, b.cx].map((cx, k) => <circle key={k} cx={cx} cy={by + d} r={10 + 14 * pg} fill={col} opacity={0.45 * pg} />) : null}
			{label ? <Sx x={(a.cx + b.cx) / 2} y={above ? by - 14 : by + lsize + 6} text={label} size={lsize} color={ink} anchor="middle" weight={700} at={labelAt ?? at + 8} out={labelOut} /> : null}
		</g>
	);
};
export const bracketY = (size: number, y: number, above: boolean, gap = 24) => (above ? y - size * 1.05 - gap : y + size * 0.35 + gap);

// ---------- dashed reverse hop ----------
/** A proton moving from a to b on an arc, with the path drawn dashed (the proton going back). */
export const RevHop: React.FC<{a: [number, number]; b: [number, number]; at: number; dur?: number; s?: number; bow?: number; color?: string; keep?: number}> = ({a, b, at, dur = 30, s = 1, bow = 70, color = PROTON_INK, keep = 30}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const p = smooth(clamp01((f - at) / dur));
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + bow;
	const o = 1 - prog(f, at + dur + keep, 14);
	if (o <= 0.01) return null;
	const x = (1 - p) * (1 - p) * a[0] + 2 * (1 - p) * p * mx + p * p * b[0], y = (1 - p) * (1 - p) * a[1] + 2 * (1 - p) * p * my + p * p * b[1];
	return (
		<g opacity={o}>
			<path d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} fill="none" stroke={color} strokeWidth={4} strokeDasharray="10 9" pathLength={1} strokeDashoffset={0} opacity={0.85} />
			{p < 1 ? <Proton x={x} y={y} s={s} /> : null}
		</g>
	);
};
/** A looping forward hop (solid trail) and reverse hop (dashed), period P, from `at` until `until`. */
export const LoopHops: React.FC<{fa: [number, number]; fb: [number, number]; ra: [number, number]; rb: [number, number]; at: number; until?: number; P?: number; s?: number}> = ({fa, fb, ra, rb, at, until = 1e9, P = 96, s = 0.9}) => {
	const f = useCurrentFrame();
	if (f < at || f > until + 40) return null;
	const k = Math.floor((f - at) / P);
	const t0 = at + k * P;
	const o = 1 - prog(f, until, 20);
	const one = (a: [number, number], b: [number, number], st: number, bow: number, dashed: boolean) => {
		const p = smooth(clamp01((f - st) / 34));
		if (f < st || p >= 1) return null;
		const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + bow;
		const x = (1 - p) * (1 - p) * a[0] + 2 * (1 - p) * p * mx + p * p * b[0], y = (1 - p) * (1 - p) * a[1] + 2 * (1 - p) * p * my + p * p * b[1];
		return (
			<g>
				<path d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} fill="none" stroke={PROTON_INK} strokeWidth={3.5} strokeDasharray={dashed ? '10 9' : undefined} opacity={0.55 * Math.sin(p * Math.PI)} />
				<Proton x={x} y={y} s={s} />
			</g>
		);
	};
	return <g opacity={o}>{one(fa, fb, t0, -70, false)}{one(ra, rb, t0 + P / 2, 70, true)}</g>;
};

// ---------- formula boxes and the proton chain ----------
export type Role = {acid?: [number, number?]; base?: [number, number?]; both?: [number, number?]; grey?: number};
/** A rounded box round a formula, outlined by role: amber (gives), violet (takes), split amber and violet (both). */
export const RoleBox: React.FC<{x: number; y: number; w: number; h: number; role?: Role; o?: number}> = ({x, y, w, h, role = {}, o = 1}) => {
	const f = useCurrentFrame();
	const ra = role.acid ? vis(f, role.acid[0], role.acid[1], 12) : 0;
	const rb = role.base ? vis(f, role.base[0], role.base[1], 12) : 0;
	const rs = role.both ? vis(f, role.both[0], role.both[1], 12) : 0;
	const r = Math.min(18, h / 2);
	const left = `M${x + w / 2},${y + h} L${x + r},${y + h} Q${x},${y + h} ${x},${y + h - r} L${x},${y + r} Q${x},${y} ${x + r},${y} L${x + w / 2},${y}`;
	const right = `M${x + w / 2},${y} L${x + w - r},${y} Q${x + w},${y} ${x + w},${y + r} L${x + w},${y + h - r} Q${x + w},${y + h} ${x + w - r},${y + h} L${x + w / 2},${y + h}`;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={r} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
			{ra > 0.01 ? <rect x={x} y={y} width={w} height={h} rx={r} fill="none" stroke={ACID} strokeWidth={5} opacity={ra} /> : null}
			{rb > 0.01 ? <rect x={x} y={y} width={w} height={h} rx={r} fill="none" stroke={BASE} strokeWidth={5} opacity={rb} /> : null}
			{rs > 0.01 ? <g opacity={rs} fill="none" strokeWidth={5.5}><path d={left} stroke={ACID} /><path d={right} stroke={BASE} /></g> : null}
		</g>
	);
};
export const fW = (t: string, size: number) => mw(t, size, false, 800) + size * 0.9;
/** A formula on a box with a role outline. */
export const FBox: React.FC<{x: number; y: number; text: string; size?: number; at: number; out?: number; o?: number; role?: Role; anchor?: 'start' | 'middle'; color?: string}> = ({x, y, text, size = 48, at, out, o = 1, role, anchor = 'start', color = INK}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const w = fW(text, size), h = size * 1.5;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	return (
		<g opacity={v}>
			<RoleBox x={x0} y={y - h * 0.68} w={w} h={h} role={role} />
			<Sx x={x0 + size * 0.45} y={y} text={text} size={size} color={color} weight={800} at={-1000} />
		</g>
	);
};
/** ⇄ between two boxes (top half to the right, bottom half to the left). */
export const TwoArrow: React.FC<{x1: number; x2: number; y: number; at: number; o?: number; lit?: {dir: 'r' | 'l'; at: number; out?: number}[]; w?: number}> = ({x1, x2, y, at, o = 1, lit = [], w = 4}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, undefined, 10) * o;
	if (v <= 0.01) return null;
	const lr = lit.filter(l => l.dir === 'r').reduce((a, l) => Math.max(a, vis(f, l.at, l.out, 10)), 0);
	const ll = lit.filter(l => l.dir === 'l').reduce((a, l) => Math.max(a, vis(f, l.at, l.out, 10)), 0);
	const yt = y - 9, yb = y + 9;
	return (
		<g opacity={v} fill="none" strokeLinecap="round" strokeLinejoin="round">
			<path d={`M${x1},${yt} L${x2},${yt} M${x2 - 12},${yt - 9} L${x2},${yt}`} stroke={lr > 0.5 ? ACID : INK} strokeWidth={w + 2 * lr} />
			<path d={`M${x2},${yb} L${x1},${yb} M${x1 + 12},${yb + 9} L${x1},${yb}`} stroke={ll > 0.5 ? BASE : INK} strokeWidth={w + 2 * ll} />
		</g>
	);
};
export type ChainItem = {t: string; at: number; role?: Role; o?: number};
/** Lay out a chain: returns x of each box start and widths. */
export const chainLayout = (items: ChainItem[], x: number, size: number, gap: number, anchor: 'start' | 'middle' = 'start') => {
	const ws = items.map(it => fW(it.t, size));
	const total = ws.reduce((a, b) => a + b, 0) + gap * (items.length - 1);
	let cx = anchor === 'middle' ? x - total / 2 : x;
	const xs = ws.map(w => { const r = cx; cx += w + gap; return r; });
	return {xs, ws, total};
};
/** A proton chain: boxes one proton apart with ⇄ between. keys: [step index, label above/below shown at]. */
export const Chain: React.FC<{items: ChainItem[]; x: number; y: number; size?: number; gap?: number; anchor?: 'start' | 'middle'; o?: number; lit?: {step: number; dir: 'r' | 'l'; at: number; out?: number}[]; keyStep?: {at: number; out?: number}}> = ({items, x, y, size = 48, gap = 110, anchor = 'start', o = 1, lit = [], keyStep}) => {
	const {xs, ws} = chainLayout(items, x, size, gap, anchor);
	return (
		<g opacity={o}>
			{items.map((it, i) => <FBox key={i} x={xs[i]} y={y} text={it.t} size={size} at={it.at} role={it.role} o={it.o ?? 1} />)}
			{items.slice(1).map((it, i) => <TwoArrow key={'a' + i} x1={xs[i] + ws[i] + 16} x2={xs[i + 1] - 16} y={y - size * 0.32} at={it.at} lit={lit.filter(l => l.step === i).map(l => ({dir: l.dir, at: l.at, out: l.out}))} />)}
			{keyStep ? (
				<Fade at={keyStep.at} out={keyStep.out}>
					<Sx x={(xs[0] + ws[0] + xs[1]) / 2} y={y - size * 1.25} text="−H^{+} →" size={size * 0.62} color={ACID_INK} anchor="middle" weight={700} at={-1000} />
					<Sx x={(xs[0] + ws[0] + xs[1]) / 2} y={y + size * 0.85} text="← +H^{+}" size={size * 0.62} color={BASE_INK} anchor="middle" weight={700} at={-1000} />
				</Fade>
			) : null}
		</g>
	);
};
/** Centre x of box i of a chain. */
export const chainX = (items: ChainItem[], x: number, size: number, gap: number, i: number, anchor: 'start' | 'middle' = 'start') => {
	const {xs, ws} = chainLayout(items, x, size, gap, anchor);
	return xs[i] + ws[i] / 2;
};

// ---------- pull meter ----------
export const PullMeter: React.FC<{x: number; y: number; fill: number; at: number; out?: number; o?: number; label?: string}> = ({x, y, fill, at, out, o = 1, label = 'pull'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const H = 130, W = 36;
	const fl = fill * smooth(prog(f, at + 8, 24));
	return (
		<g opacity={v}>
			<rect x={x} y={y - H} width={W} height={H} rx={8} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			{fl > 0.01 ? <rect x={x + 4} y={y - 4 - (H - 8) * fl} width={W - 8} height={(H - 8) * fl} rx={5} fill={BASE} /> : null}
			<Sx x={x + W / 2} y={y + 34} text={label} size={32} color={INK_SOFT} anchor="middle" hand at={-1000} />
		</g>
	);
};

// ---------- see-saw ----------
export const SeeSaw: React.FC<{x: number; y: number; at: number; out?: number; o?: number; s?: number; labels?: boolean}> = ({x, y, at, out, o = 1, s = 1, labels = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const t = 13 * smooth(prog(f, at + 6, 26)); // left end up (SVG y runs down)
	const L = 300 * s;
	const rad = (t * Math.PI) / 180;
	const lx = x - Math.cos(rad) * L, ly = y - Math.sin(rad) * L, rx = x + Math.cos(rad) * L, ry = y + Math.sin(rad) * L;
	return (
		<g opacity={v}>
			<path d={`M${x - 34 * s},${y + 64 * s} L${x + 34 * s},${y + 64 * s} L${x},${y + 6 * s} Z`} fill="#fffdf8" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
			<line x1={lx} y1={ly} x2={rx} y2={ry} stroke={INK} strokeWidth={8 * s} strokeLinecap="round" />
			<circle cx={lx} cy={ly - 16 * s} r={14 * s} fill={ACID} stroke={ACID_INK} strokeWidth={2} />
			<circle cx={rx} cy={ry - 16 * s} r={14 * s} fill={BASE} stroke={BASE_INK} strokeWidth={2} />
			{labels ? <>
				<Sx x={lx} y={ly - 46 * s} text="stronger acid" size={42 * s} color={ACID_INK} anchor="middle" hand at={at + 10} />
				<Sx x={rx} y={ry + 62 * s} text="weaker conjugate base" size={42 * s} color={BASE_INK} anchor="middle" hand at={at + 18} />
			</> : null}
		</g>
	);
};

// ---------- mini pH bar: direction only ----------
const STOPS = ['#d6463c', '#ec8a3a', '#f2c94c', '#6cbf5a', '#3f9fd0', '#5b5fc7', '#7b4bb3'];
export const MiniPH: React.FC<{x: number; y: number; w: number; from: number; to: number; move: number; at: number; o?: number}> = ({x, y, w, from, to, move, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, undefined, 12) * o;
	if (v <= 0.01) return null;
	const X = (q: number) => x + (q / 14) * w;
	const p = smooth(prog(f, move, 36));
	const mx = X(lerp(from, to, p));
	const id = `mph-${Math.round(x)}-${Math.round(y)}`;
	return (
		<g opacity={v}>
			<defs><linearGradient id={id} x1="0" x2="1" y1="0" y2="0">{STOPS.map((c, i) => <stop key={i} offset={i / (STOPS.length - 1)} stopColor={c} />)}</linearGradient></defs>
			<rect x={x} y={y} width={w} height={20} rx={10} fill={`url(#${id})`} stroke={INK} strokeWidth={2} />
			<line x1={X(7)} y1={y - 8} x2={X(7)} y2={y + 28} stroke={INK} strokeWidth={3} />
			<path d={`M${mx - 11},${y - 24} L${mx + 11},${y - 24} L${mx},${y - 4} Z`} fill="#ffffff" stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
			{p > 0.05 ? <g opacity={p}>
				<path d={`M${X(from)},${y + 44} L${mx},${y + 44}`} stroke={INK} strokeWidth={4} strokeLinecap="round" />
				<path d={`M${mx + (to > from ? -12 : 12)},${y + 34} L${mx},${y + 44} L${mx + (to > from ? -12 : 12)},${y + 54}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			</g> : null}
		</g>
	);
};

// ---------- faint current meter for pure water ----------
export const CurrentMeter: React.FC<{x: number; y: number; at: number; out?: number; o?: number; to: [number, number][]}> = ({x, y, at, out, o = 1, to}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const a = -Math.PI / 2 - 0.9 + 0.22 * smooth(prog(f, at + 10, 30)) + Math.sin(f * 0.2) * 0.02;
	return (
		<g opacity={v}>
			{to.map(([tx, ty], i) => <g key={i}><path d={`M${x + (i ? 26 : -26)},${y + 20} Q${(x + tx) / 2},${y + 60} ${tx},${ty}`} fill="none" stroke={INK_SOFT} strokeWidth={3.5} /><rect x={tx - 5} y={ty} width={10} height={100} rx={3} fill="#5d5a55" /></g>)}
			<circle cx={x} cy={y} r={40} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<path d={`M${x - 26},${y - 6} A30,30 0 0 1 ${x + 26},${y - 6}`} fill="none" stroke={INK_SOFT} strokeWidth={2.5} />
			<line x1={x} y1={y + 8} x2={x + Math.cos(a) * 30} y2={y + 8 + Math.sin(a) * 30} stroke={PROTON} strokeWidth={4} strokeLinecap="round" />
			<text x={x} y={y + 30} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 16}}>A</text>
		</g>
	);
};
void GREYT;
