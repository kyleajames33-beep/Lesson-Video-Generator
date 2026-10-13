// Drawing parts for the C4b lesson: gas tubes, energy profile, graphs, rate bars, count cells, stage table.
import React from 'react';
import {Img, staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng, scribbleEllipse} from '../../kit';
import {ESC, Fade, Overlay, SvgText, TEAL} from '../chem-m5-c01/parts';
import {Pill} from '../chem-m5-c02/parts';
import {RxnChip, WrongChip} from '../chem-m5-c03/parts';
import {CATALYST, HAVE} from './assets';
import {GLASS, H2C, H2_INK, HIC, HI_INK, I2C, I2_INK, METAL, METAL_DARK, METAL_LIGHT, hexMix, tubeColour} from './common';

export {Fade, Overlay, SvgText, TEAL, ESC, Pill, RxnChip, WrongChip};
export const FWD = ESC;
export const REV = AMBER;
export const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
export const pillW = (text: string, size = 36) => Math.round(text.length * size * 0.46 + 60);

// ---------- simple drawing helpers ----------
export const Ring: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number; color?: string; seed?: number; width?: number; dur?: number}> = ({cx, cy, rx, ry, at, out, color = ESC, seed = 3, width = 5, dur = 20}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.01) return null;
	return <g opacity={o}><DrawPath d={scribbleEllipse(cx, cy, rx, ry, seed)} at={at} dur={dur} color={color} width={width} /></g>;
};
export const Arrow: React.FC<{x1: number; y1: number; x2: number; y2: number; at: number; color?: string; width?: number; dur?: number; out?: number}> = ({x1, y1, x2, y2, at, color = INK, width = 6, dur = 16, out}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.01) return null;
	const a = Math.atan2(y2 - y1, x2 - x1), hl = 22;
	const hx = (k: number) => x2 - Math.cos(a + k) * hl, hy = (k: number) => y2 - Math.sin(a + k) * hl;
	return (
		<g opacity={o}>
			<DrawPath d={`M${x1},${y1} L${x2},${y2}`} at={at} dur={dur} color={color} width={width} />
			<path d={`M${hx(0.5)},${hy(0.5)} L${x2},${y2} L${hx(-0.5)},${hy(-0.5)}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at + dur - 4, 8)} />
		</g>
	);
};

// ---------- gas tube with particles ----------
type SlotP = {p1: number; p2: number; p3: number; p4: number; w1: number; w2: number; w3: number; w4: number};
const slotCache = new Map<string, SlotP[]>();
const slotsFor = (seed: number, type: number): SlotP[] => {
	const k = `${seed}-${type}`;
	let s = slotCache.get(k);
	if (!s) {
		const r = rng(seed * 31 + type * 7 + 3);
		s = Array.from({length: 24}, () => ({p1: r() * 6.28, p2: r() * 6.28, p3: r() * 6.28, p4: r() * 6.28, w1: 0.012 + r() * 0.02, w2: 0.012 + r() * 0.02, w3: 0.02 + r() * 0.03, w4: 0.02 + r() * 0.03}));
		slotCache.set(k, s);
	}
	return s;
};
export const slotXY = (seed: number, type: number, i: number, f: number, cx: number, cy: number, ax: number, ay: number) => {
	const s = slotsFor(seed, type)[i % 24];
	return {x: cx + ax * (0.62 * Math.sin(f * s.w1 + s.p1) + 0.38 * Math.sin(f * s.w3 + s.p3)), y: cy + ay * (0.62 * Math.sin(f * s.w2 + s.p2) + 0.38 * Math.sin(f * s.w4 + s.p4))};
};
export type TubeCounts = {h: number; i: number; hi: number};
/** A sealed glass tube (any orientation) with particles. `heavy` draws the catalyst tube with a heavier outline. */
export const GasTube: React.FC<{x: number; y: number; w: number; h: number; counts: TubeCounts; seed?: number; heavy?: boolean; reveal?: number; dots?: boolean; tintI?: number; clamps?: boolean}> = ({x, y, w, h, counts, seed = 5, heavy = false, reveal = 1, dots = true, tintI, clamps = true}) => {
	const f = useCurrentFrame();
	if (reveal <= 0.01) return null;
	const sw = heavy ? 8 : 4.5;
	const rx = Math.min(w, h) * 0.45;
	const cx = x + w / 2, cy = y + h / 2;
	const ax = ((w - 2 * rx * 0.55) / 2) * 0.95 - 14, ay = ((h - 2 * rx * 0.55) / 2) * 0.95 - 14;
	const n = [Math.round(counts.h), Math.round(counts.i), Math.round(counts.hi)];
	const horiz = w > h;
	return (
		<g opacity={reveal}>
			{clamps ? (horiz
				? [0.2, 0.8].map(u => <path key={u} d={`M${x + w * u - 16},${y + h + 4} L${x + w * u - 16},${y + h + 26} M${x + w * u + 16},${y + h + 4} L${x + w * u + 16},${y + h + 26} M${x + w * u - 26},${y + h + 26} L${x + w * u + 26},${y + h + 26}`} stroke={METAL_DARK} strokeWidth={5} strokeLinecap="round" fill="none" />)
				: <path d={`M${x - 14},${y + h + 6} L${x + w + 14},${y + h + 6}`} stroke={METAL_DARK} strokeWidth={6} strokeLinecap="round" />) : null}
			<rect x={x} y={y} width={w} height={h} rx={rx} fill={GLASS} fillOpacity={0.55} />
			<rect x={x + 5} y={y + 5} width={w - 10} height={h - 10} rx={Math.max(4, rx - 5)} fill={tubeColour(tintI ?? counts.i)} fillOpacity={0.5} />
			<rect x={x} y={y} width={w} height={h} rx={rx} fill="none" stroke={INK} strokeWidth={sw} />
			<path d={horiz ? `M${x + rx * 0.9},${y + 14} L${x + w - rx * 0.9},${y + 14}` : `M${x + 14},${y + rx * 0.9} L${x + 14},${y + h - rx * 0.9}`} stroke="#fff" strokeOpacity={0.7} strokeWidth={6} strokeLinecap="round" />
			{dots ? (
				<>
					{Array.from({length: n[0]}, (_, k) => { const p = slotXY(seed, 0, k, f, cx, cy, ax, ay); return <circle key={`h${k}`} cx={p.x} cy={p.y} r={8} fill={H2C} stroke={H2_INK} strokeWidth={2.2} />; })}
					{Array.from({length: n[1]}, (_, k) => { const p = slotXY(seed, 1, k, f, cx, cy, ax, ay); return <circle key={`i${k}`} cx={p.x} cy={p.y} r={11} fill={I2C} stroke={INK} strokeWidth={2.2} />; })}
					{Array.from({length: n[2]}, (_, k) => { const p = slotXY(seed, 2, k, f, cx, cy, ax, ay); return <circle key={`q${k}`} cx={p.x} cy={p.y} r={9} fill={HIC} stroke={HI_INK} strokeWidth={2.4} />; })}
				</>
			) : null}
		</g>
	);
};
export const TubeKey: React.FC<{x: number; y: number; at: number; scale?: boolean}> = ({x, y, at, scale = true}) => (
	<Fade at={at}>
		<circle cx={x} cy={y} r={9} fill={H2C} stroke={H2_INK} strokeWidth={2.5} />
		<SvgText x={x + 18} y={y + 11} text="H_2" size={32} hand={false} weight={600} at={at} />
		<circle cx={x + 100} cy={y} r={11} fill={I2C} stroke={INK} strokeWidth={2.5} />
		<SvgText x={x + 120} y={y + 11} text="I_2" size={32} hand={false} weight={600} at={at} color={I2_INK} />
		<circle cx={x + 200} cy={y} r={9} fill={HIC} stroke={HI_INK} strokeWidth={2.5} />
		<SvgText x={x + 218} y={y + 11} text="HI" size={32} hand={false} weight={600} at={at} color={HI_INK} />
		{scale ? <SvgText x={x - 10} y={y + 52} text="1 dot = 1 unit" size={38} color={INK_SOFT} at={at} /> : null}
	</Fade>
);

/** Coded grey metal crumple (or the painted plate once delivered). */
export const Crumple: React.FC<{x: number; y: number; s: number; rot?: number; opacity?: number}> = ({x, y, s, rot = 0, opacity = 1}) => {
	if (opacity <= 0.01) return null;
	// the plate's metal fills about 40% of its square canvas (alpha box 541..1259 of 1800), so draw the canvas 2.35x to match the coded size
	if (HAVE.has(CATALYST)) { const c = s * 2.35; return <image href={staticFile(CATALYST)} x={x - c / 2} y={y - c / 2} width={c} height={c} opacity={opacity} transform={`rotate(${rot} ${x} ${y})`} />; }
	const k = s / 100;
	return (
		<g transform={`translate(${x},${y}) rotate(${rot}) scale(${k})`} opacity={opacity}>
			<path d="M-46,-8 L-30,-38 L-6,-30 L14,-46 L40,-22 L48,6 L30,34 L2,42 L-26,34 L-44,22 Z" fill={METAL} stroke={METAL_DARK} strokeWidth={4} strokeLinejoin="round" />
			<path d="M-30,-38 L-14,-4 L14,-46 M-14,-4 L-44,22 M-14,-4 L2,42 M-14,-4 L30,34 M-14,-4 L48,6" fill="none" stroke={METAL_DARK} strokeWidth={2.5} strokeLinecap="round" opacity={0.7} />
			<path d="M-26,-26 L-8,-24 L-16,-8 Z M16,-30 L34,-18 L18,-10 Z" fill={METAL_LIGHT} opacity={0.8} />
		</g>
	);
};

// ---------- graph ----------
export type G = {x: number; y: number; w: number; h: number; tMax: number; vMax: number; px: (t: number) => number; py: (v: number) => number};
export const mkG = (x: number, y: number, w: number, h: number, tMax = 16, vMax = 15): G => ({x, y, w, h, tMax, vMax, px: t => x + (t / tMax) * w, py: v => y + h - (v / vMax) * h});
export const GraphAxes: React.FC<{g: G; at: number; xLabel?: string; yLabel?: string; xTicks?: number[]; yTicks?: number[]; fmt?: (v: number) => string}> = ({g, at, xLabel = 'time (made-up clock)', yLabel = 'amount (units)', xTicks = [0, 5, 10, 15], yTicks = [0, 5, 10, 15], fmt = v => String(v)}) => (
	<Fade at={at}>
		<path d={`M${g.x},${g.y - 8} L${g.x},${g.y + g.h} L${g.x + g.w + 10},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
		{xTicks.map(t => <g key={'x' + t}><path d={`M${g.px(t)},${g.y + g.h} L${g.px(t)},${g.y + g.h + 10}`} stroke={INK} strokeWidth={3} /><text x={g.px(t)} y={g.y + g.h + 40} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}}>{fmt(t)}</text></g>)}
		{yTicks.map(v => <g key={'y' + v}><path d={`M${g.x - 10},${g.py(v)} L${g.x},${g.py(v)}`} stroke={INK} strokeWidth={3} /><text x={g.x - 16} y={g.py(v) + 10} textAnchor="end" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}}>{fmt(v)}</text></g>)}
		<text x={g.x + g.w / 2} y={g.y + g.h + 82} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}}>{xLabel}</text>
		<text x={g.x - 8} y={g.y - 24} textAnchor="start" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}}>{yLabel}</text>
	</Fade>
);
export const Curve: React.FC<{g: G; fn: (t: number) => number; upTo: number; from?: number; color: string; width?: number; dash?: string; opacity?: number; outline?: string}> = ({g, fn, upTo, from = 0, color, width = 5, dash, opacity = 1, outline}) => {
	const end = Math.min(g.tMax, upTo);
	if (end <= from + 0.0001) return null;
	const n = Math.max(2, Math.ceil(((end - from) / g.tMax) * 420));
	let d = '';
	for (let k = 0; k <= n; k++) { const t = from + ((end - from) * k) / n; d += `${k ? 'L' : 'M'}${g.px(t).toFixed(1)},${g.py(fn(t)).toFixed(1)} `; }
	return (
		<g opacity={opacity}>
			{outline ? <path d={d} fill="none" stroke={outline} strokeWidth={width + 4} strokeLinecap="round" strokeLinejoin="round" /> : null}
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} />
		</g>
	);
};
/** Moving dot at the head of a curve. */
export const Head: React.FC<{g: G; t: number; v: number; color: string; r?: number; show?: boolean}> = ({g, t, v, color, r = 9, show = true}) => show ? <circle cx={g.px(t)} cy={g.py(v)} r={r} fill={color} stroke={INK} strokeWidth={3} /> : null;
export const VLine: React.FC<{g: G; t: number; at: number; label?: string; color?: string; size?: number; dy?: number; anchor?: 'start' | 'middle' | 'end'; dash?: string; dx?: number; out?: number}> = ({g, t, at, label, color = INK_SOFT, size = 34, dy = -14, anchor = 'middle', dash = '10 8', dx = 0, out}) => (
	<Fade at={at} out={out}>
		<path d={`M${g.px(t)},${g.y - 4} L${g.px(t)},${g.y + g.h}`} stroke={color} strokeWidth={4} strokeDasharray={dash} />
		{label ? <SvgText x={g.px(t) + dx} y={g.y + dy} text={label} size={size} color={color} anchor={anchor} at={at} /> : null}
	</Fade>
);

// ---------- energy profile ----------
export type P = {x0: number; y0: number; w: number; h: number; yL: number; yR: number; yT: number; yP: number};
export const mkP = (x0: number, y0: number, w: number, h: number): P => {
	const yL = y0 + 0.72 * h, yT = y0 + 0.08 * h, R = yL - yT;
	return {x0, y0, w, h, yL, yT, yR: yL + 0.2 * R, yP: yL - 0.42 * R};
};
const bez = (p0: number[], p1: number[], p2: number[], p3: number[], u: number) => {
	const a = (1 - u) ** 3, b = 3 * (1 - u) ** 2 * u, c = 3 * (1 - u) * u * u, d = u ** 3;
	return [a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0], a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1]];
};
const segs = (g: P, peak: number) => {
	const X = (u: number) => g.x0 + u * g.w;
	return [
		[[X(0.02), g.yL], [X(0.2), g.yL], [X(0.3), peak], [X(0.5), peak]],
		[[X(0.5), peak], [X(0.7), peak], [X(0.8), g.yR], [X(0.98), g.yR]],
	];
};
export const profPath = (g: P, peak: number) => {
	const [a, b] = segs(g, peak);
	return `M${a[0][0]},${a[0][1]} C${a[1][0]},${a[1][1]} ${a[2][0]},${a[2][1]} ${a[3][0]},${a[3][1]} C${b[1][0]},${b[1][1]} ${b[2][0]},${b[2][1]} ${b[3][0]},${b[3][1]}`;
};
/** Point on the profile for s in [0,2]: 0 left valley, 1 top, 2 right valley. */
export const profPoint = (g: P, peak: number, s: number): [number, number] => {
	const [a, b] = segs(g, peak);
	const c = Math.max(0, Math.min(2, s));
	const [x, y] = c <= 1 ? bez(a[0], a[1], a[2], a[3], c) : bez(b[0], b[1], b[2], b[3], c - 1);
	return [x, y];
};
export const ProfileAxes: React.FC<{g: P; at: number; label?: boolean}> = ({g, at, label = true}) => (
	<Fade at={at}>
		<path d={`M${g.x0 - 30},${g.y0 + g.h + 4} L${g.x0 - 30},${g.y0 - 14} M${g.x0 - 46},${g.y0 + 8} L${g.x0 - 30},${g.y0 - 14} L${g.x0 - 14},${g.y0 + 8}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
		<path d={`M${g.x0 - 30},${g.y0 + g.h + 4} L${g.x0 + g.w + 8},${g.y0 + g.h + 4} M${g.x0 + g.w - 12},${g.y0 + g.h - 12} L${g.x0 + g.w + 8},${g.y0 + g.h + 4} L${g.x0 + g.w - 12},${g.y0 + g.h + 20}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
		{label ? <>
			<text x={g.x0 - 56} y={g.y0 + g.h / 2} textAnchor="middle" transform={`rotate(-90 ${g.x0 - 56} ${g.y0 + g.h / 2})`} fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}}>energy</text>
			<text x={g.x0 + g.w / 2} y={g.y0 + g.h + 52} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}}>reaction pathway</text>
		</> : null}
	</Fade>
);
export const ProfileCurve: React.FC<{g: P; peak: number; at: number; dur?: number; color?: string; dash?: string; width?: number; opacity?: number}> = ({g, peak, at, dur = 30, color = INK, dash, width = 7, opacity = 1}) => {
	const f = useCurrentFrame();
	const d = profPath(g, peak);
	const p = prog(f, at, dur);
	if (p <= 0) return null;
	if (dash) return <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} opacity={opacity * Math.min(1, p * 4)} style={{clipPath: `inset(-20px ${100 - p * 100}% -20px -20px)`}} />;
	return <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} opacity={opacity} />;
};
/** Vertical bracket between two heights with a label. */
export const Bracket: React.FC<{x: number; y1: number; y2: number; color: string; at: number; out?: number; label?: string; sub?: string; side?: 'left' | 'right'; size?: number; lx?: number; ly?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y1, y2, color, at, out, label, sub, side = 'right', size = 40, lx, ly, anchor}) => {
	const dir = side === 'right' ? 1 : -1;
	const ax = anchor ?? (side === 'right' ? 'start' : 'end');
	return (
		<Fade at={at} out={out}>
			<DrawPath d={`M${x - dir * 12},${y1} L${x},${y1} L${x},${y2} L${x - dir * 12},${y2}`} at={at} dur={18} color={color} width={6} />
			{label ? <SvgText x={lx ?? x + dir * 18} y={ly ?? (y1 + y2) / 2 + 12} text={label} size={size} color={color} anchor={ax} at={at + 10} /> : null}
			{sub ? <SvgText x={lx ?? x + dir * 18} y={(ly ?? (y1 + y2) / 2 + 12) + size * 0.95} text={sub} size={size * 0.78} color={INK_SOFT} anchor={ax} at={at + 18} hand={false} weight={600} /> : null}
		</Fade>
	);
};
export const Ball: React.FC<{g: P; peak: number; s: number; color: string; r?: number; opacity?: number}> = ({g, peak, s, color, r = 17, opacity = 1}) => {
	if (opacity <= 0.01) return null;
	const [x, y] = profPoint(g, peak, s);
	return <circle cx={x} cy={y - r - 3} r={r} fill={color} stroke={INK} strokeWidth={3.5} opacity={opacity} />;
};

// ---------- count cells ----------
export const Cells: React.FC<{x: number; y: number; n: number; cols: number; size: number; gap?: number; lit: number[]; color: string; at: number}> = ({x, y, n, cols, size, gap = 5, lit, color, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, k) => {
				const cx = x + (k % cols) * (size + gap), cy = y + Math.floor(k / cols) * (size + gap);
				const on = k < lit.length ? prog(f, lit[k], 8) : 0;
				return <rect key={k} x={cx} y={cy} width={size} height={size} rx={size * 0.22} fill={on > 0.02 ? color : '#fffdf8'} fillOpacity={on > 0.02 ? 0.35 + 0.65 * on : 1} stroke={on > 0.02 ? color : INK_SOFT} strokeWidth={3} />;
			})}
		</g>
	);
};

// ---------- rate bars ----------
export const RateBars: React.FC<{x0: number; base: number; scale: number; fwd: number; rev: number; at: number; fwdLabel?: string; revLabel?: string; ghost?: {fwd: number; rev: number}; eqAt?: number; bw?: number; gx?: number; axisLabel?: string | null; titles?: boolean; unlabelled?: boolean; maxH?: number; subs?: [string, string]}> = ({x0, base, scale, fwd, rev, at, fwdLabel, revLabel, ghost, eqAt, bw = 110, gx = 230, axisLabel = 'rate (units per tick)', titles = true, unlabelled = false, maxH = 640, subs}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const hF = Math.min(maxH, fwd * scale), hR = Math.min(maxH, rev * scale);
	const topF = base - hF, topR = base - hR;
	const eq = eqAt !== undefined ? prog(f, eqAt, 12) : 0;
	return (
		<g opacity={o}>
			<path d={`M${x0 - 36},${base} L${x0 + gx + bw + 36},${base}`} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{ghost ? <>
				<rect x={x0} y={base - ghost.fwd * scale} width={bw} height={ghost.fwd * scale} fill="none" stroke={FWD} strokeWidth={3} strokeDasharray="8 6" rx={4} opacity={0.6} />
				<rect x={x0 + gx} y={base - ghost.rev * scale} width={bw} height={ghost.rev * scale} fill="none" stroke={REV} strokeWidth={3} strokeDasharray="8 6" rx={4} opacity={0.6} />
			</> : null}
			<rect x={x0} y={topF} width={bw} height={Math.max(0, hF)} fill="#bcd6ee" stroke={FWD} strokeWidth={5} rx={6} />
			<rect x={x0 + gx} y={topR} width={bw} height={Math.max(0, hR)} fill="#f6dfae" stroke={REV} strokeWidth={5} rx={6} />
			{unlabelled ? null : <>
				<text x={x0 + bw / 2} y={topF - 16} textAnchor="middle" fill={FWD} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52}}>{fwdLabel ?? fwd.toFixed(1)}</text>
				<text x={x0 + gx + bw / 2} y={topR - 16} textAnchor="middle" fill={AMBER_INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52}}>{revLabel ?? rev.toFixed(1)}</text>
			</>}
			{titles ? <>
				<text x={x0 + bw / 2} y={base + 46} textAnchor="middle" fill={FWD} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>forward</text>
				<text x={x0 + gx + bw / 2} y={base + 46} textAnchor="middle" fill={AMBER_INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>reverse</text>
			</> : null}
			{subs ? <>
				<text x={x0 + bw / 2} y={base + 84} textAnchor="middle" fill={FWD} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30}}>{subs[0]}</text>
				<text x={x0 + gx + bw / 2} y={base + 84} textAnchor="middle" fill={AMBER_INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30}}>{subs[1]}</text>
			</> : null}
			{axisLabel ? <text x={x0 + (gx + bw) / 2} y={base + (subs ? 128 : 92)} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}}>{axisLabel}</text> : null}
			{eq > 0.02 ? (
				<g opacity={eq}>
					<path d={`M${x0 + bw + 10},${(topF + topR) / 2} L${x0 + gx - 10},${(topF + topR) / 2}`} stroke={TEAL} strokeWidth={6} strokeLinecap="round" strokeDasharray="4 10" />
					<path d={`M${x0 - 18},${topF} L${x0 + gx + bw + 18},${topF}`} stroke={TEAL} strokeWidth={4} strokeDasharray="10 8" />
					<text x={x0 + bw + (gx - bw) / 2} y={topF - 44} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50}}>equal</text>
				</g>
			) : null}
		</g>
	);
};

// ---------- stage table ----------
export type TRow = {label: string; at: number; cells: [string, number][]; color?: string};
const COLX = {label: 700, c: [975, 1075, 1175], fwd: 1315, rev: 1455, sett: 1650};
export const StageTable: React.FC<{rows: TRow[]; at: number; rowH?: number}> = ({rows, at, rowH = 58}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const newest = rows.reduce((s, r) => s + smooth((f - r.at) / 14), 0) - 1;
	const base0 = 862;
	const xs = [...COLX.c, COLX.fwd, COLX.rev, COLX.sett];
	const th = (x: number, text: string, color = INK) => <SvgText key={text + x} x={x} y={812} text={text} size={30} hand={false} weight={700} color={color} anchor="middle" />;
	return (
		<g opacity={o}>
			<SvgText x={COLX.c[1]} y={774} text="amount (units)" size={28} hand={false} weight={600} color={INK_SOFT} anchor="middle" />
			<path d={`M${COLX.c[0] - 50},784 L${COLX.c[2] + 50},784`} stroke={INK_SOFT} strokeWidth={2.5} />
			<SvgText x={(COLX.fwd + COLX.rev) / 2} y={774} text="rate (units per tick)" size={28} hand={false} weight={600} color={INK_SOFT} anchor="middle" />
			<path d={`M${COLX.fwd - 64},784 L${COLX.rev + 64},784`} stroke={INK_SOFT} strokeWidth={2.5} />
			{th(COLX.c[0], 'H_2', H2_INK)}{th(COLX.c[1], 'I_2', I2_INK)}{th(COLX.c[2], 'HI', HI_INK)}{th(COLX.fwd, 'forward', FWD)}{th(COLX.rev, 'reverse', AMBER_INK)}{th(COLX.sett, 'settles at', INK)}
			<path d={`M${COLX.label - 10},826 L${COLX.sett + 100},826`} stroke={INK} strokeWidth={3} />
			{rows.map((r, i) => {
				const p = newest - i;
				const op = p <= -1 ? 0 : p < 0 ? 1 + p : p < 1 ? 1 - 0.32 * p : Math.max(0, 0.68 * (2 - p));
				if (op <= 0.01) return null;
				const y = base0 + (1 - p) * rowH;
				const col = r.color ?? INK;
				return (
					<g key={r.label} opacity={op}>
						{r.color ? <rect x={COLX.label - 14} y={y - 40} width={COLX.sett + 120 - COLX.label} height={54} rx={12} fill="rgba(13,107,82,0.10)" /> : null}
						<SvgText x={COLX.label} y={y} text={r.label} size={30} hand={false} weight={700} color={col} />
						{r.cells.map(([t, at2], k) => <SvgText key={k} x={xs[k]} y={y} text={t} size={34} hand={false} weight={700} color={k === 3 ? FWD : k === 4 ? AMBER_INK : col} anchor="middle" at={at2} />)}
					</g>
				);
			})}
		</g>
	);
};

// ---------- small icons ----------
export const Plunger: React.FC<{x: number; y: number; s?: number; at: number; down?: number}> = ({x, y, s = 1, at, down = 0}) => (
	<Fade at={at}>
		<g transform={`translate(${x},${y}) scale(${s})`}>
			<rect x={-40} y={0} width={80} height={60} rx={8} fill={GLASS} fillOpacity={0.7} stroke={INK} strokeWidth={4} />
			<rect x={-34} y={-6 + down * 24} width={68} height={14} rx={5} fill={INK_SOFT} stroke={INK} strokeWidth={3} />
			<path d={`M0,${-44 + down * 24} L0,${-6 + down * 24}`} stroke={INK} strokeWidth={6} strokeLinecap="round" />
			<rect x={-26} y={-60 + down * 24} width={52} height={14} rx={6} fill={INK} />
		</g>
	</Fade>
);
export const Thermo: React.FC<{x: number; y: number; s?: number; at: number; color?: string}> = ({x, y, s = 1, at, color = '#c4582f'}) => (
	<Fade at={at}>
		<g transform={`translate(${x},${y}) scale(${s})`}>
			<rect x={-9} y={-44} width={18} height={62} rx={9} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<circle cx={0} cy={26} r={14} fill={color} stroke={INK} strokeWidth={4} />
			<rect x={-4} y={-14} width={8} height={36} rx={4} fill={color} />
		</g>
	</Fade>
);
export const Dropper: React.FC<{x: number; y: number; s?: number; at: number}> = ({x, y, s = 1, at}) => (
	<Fade at={at}>
		<g transform={`translate(${x},${y}) scale(${s})`}>
			<path d="M-9,-34 L-9,2 L0,22 L9,2 L9,-34 Z" fill="#fffdf8" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
			<rect x={-14} y={-52} width={28} height={18} rx={8} fill={INK_SOFT} stroke={INK} strokeWidth={3} />
			<circle cx={0} cy={44} r={7} fill={FWD} />
		</g>
	</Fade>
);
export const Seesaw: React.FC<{x: number; y: number; at: number; s?: number; tilt?: number}> = ({x, y, at, s = 1, tilt = 0}) => (
	<Fade at={at}>
		<g transform={`translate(${x},${y}) scale(${s})`}>
			<path d="M0,0 L-30,60 L30,60 Z" fill="#fffdf8" stroke={INK} strokeWidth={5} strokeLinejoin="round" />
			<g transform={`rotate(${tilt})`}>
				<path d="M-110,-6 L110,-6" stroke={TEAL} strokeWidth={10} strokeLinecap="round" />
				<circle cx={-90} cy={-30} r={20} fill="#bcd6ee" stroke={FWD} strokeWidth={5} />
				<circle cx={90} cy={-30} r={20} fill="#f6dfae" stroke={AMBER} strokeWidth={5} />
			</g>
		</g>
	</Fade>
);
export const mix = hexMix;
void AMBER; void Overlay; void Img;
