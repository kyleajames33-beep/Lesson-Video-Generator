// M7 B06 drawing parts: a plate seen through a soft (feathered) mask, the dermis close-up whose inflamed changes are
// revealed region by region in place (mast cell, small vessel, fluid, then each neutrophil), the four-state engulf set
// (short crossfades where the rod stays put, a masked change where it moves, so it never appears twice), a coded
// vessel channel with cells travelling along it, gradient rings, moving specks, a temperature set-point gauge (no
// thermometer icon), a step counter, a zoom box and a travelling dot. B05 (M7) and B04 (M7) parts are imported, never
// edited. The response strip lives in ./strip.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CARD, CTag, ClockMark, DROP, DrawPath, EDGE, GREEN, GREYT, GREY_INK, GTag, INK, INK_SOFT, Pl, PlateB, Ring, Sx, TEAL, TEAL_SOFT, TERRA,
	clamp01, fitW, lerp, plH, prog, ptOf, pulse, rng, smooth, tw, vis, CardBox, CurveArrow,
} from '../bio-m7-b05/parts';
import type {PB, Pt} from '../bio-m7-b05/parts';
import {MistakeChip} from '../bio-m5-b13/shared';
import {PlainArrow} from '../bio-m5-b06b/shared';
import {MASKS, PLATES} from './assets';

export {
	AMBER, AMBER_INK, CARD, CTag, ClockMark, DROP, DrawPath, EDGE, GREEN, GREYT, GREY_INK, GTag, INK, INK_SOFT, Pl, PlateB, Ring, Sx, TEAL, TEAL_SOFT, TERRA,
	clamp01, fitW, lerp, plH, prog, ptOf, pulse, rng, smooth, tw, vis, CardBox, CurveArrow, MistakeChip, PlainArrow,
};
export type {PB, Pt};
export const RED_V = '#c0473c';
export const PALE_RED = '#f4cfc8';

/** A screen point on a plate drawn at (cx, cy, w). */
export const P = (p: PB, cx: number, cy: number, w: number) => (uv: Pt): Pt => ptOf(p, cx, cy, w, uv);

// ---------- a plate through a soft mask ----------
/**
 * A plate (uniform scale, never stretched) shown only inside `shape` (a path in the plate's natural pixels, even-odd so
 * ellipses inside a polygon are holes), with a feathered edge. `id` must be unique in the frame.
 */
export const PlateMask: React.FC<{p: PB; cx: number; cy: number; w: number; id: string; shape: string; o?: number; feather?: number; filter?: string}> = ({p, cx, cy, w, id, shape, o = 1, feather = 26, filter}) => {
	if (o <= 0.01) return null;
	const k = w / (p.box[2] - p.box[0]);
	const bx = (p.box[0] + p.box[2]) / 2, by = (p.box[1] + p.box[3]) / 2;
	return (
		<g opacity={o} transform={`translate(${cx},${cy}) scale(${k}) translate(${-bx},${-by})`} style={filter ? {filter} : undefined}>
			<defs>
				<filter id={id + '-f'} x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation={feather} /></filter>
				<mask id={id} maskUnits="userSpaceOnUse" x={0} y={0} width={p.nat[0]} height={p.nat[1]}>
					<path d={shape} fill="white" fillRule="evenodd" filter={`url(#${id}-f)`} />
				</mask>
			</defs>
			<image href={staticFile(p.src)} x={0} y={0} width={p.nat[0]} height={p.nat[1]} mask={`url(#${id})`} />
		</g>
	);
};

// ---------- the dermis close-up ----------
export type Stage = {mast?: number; vessel?: number; fluid?: number; stick?: number; squeeze?: number; tissue?: number; contained?: number};
export const ALL_IN: Stage = {mast: 1, vessel: 1, fluid: 1, stick: 1, squeeze: 1, tissue: 1};
/** The early plate with the inflamed plate revealed region by region in place, then the contained plate over it. */
export const Closeup: React.FC<{cx: number; cy: number; w: number; st: Stage; id: string; o?: number; dim?: number}> = ({cx, cy, w, st, id, o = 1, dim = 0}) => {
	if (o <= 0.01) return null;
	const d = clamp01(dim);
	const flt = d > 0.01 ? `grayscale(${d})` : undefined;
	const full = (['mast', 'vessel', 'fluid', 'stick', 'squeeze', 'tissue'] as const).every(k => (st[k] ?? 0) >= 1);
	const c = clamp01(st.contained ?? 0);
	return (
		<g opacity={o * (1 - 0.45 * d)} style={flt ? {filter: flt} : undefined}>
			{full ? <PlateB p={PLATES.inflamed} cx={cx} cy={cy} w={w} o={c < 1 ? 1 : 0} /> : (
				<g>
					<PlateB p={PLATES.early} cx={cx} cy={cy} w={w} />
					<PlateMask p={PLATES.inflamed} cx={cx} cy={cy} w={w} id={id + '-m'} shape={MASKS.mast} o={st.mast ?? 0} />
					<PlateMask p={PLATES.inflamed} cx={cx} cy={cy} w={w} id={id + '-v'} shape={MASKS.vessel} o={st.vessel ?? 0} />
					<PlateMask p={PLATES.inflamed} cx={cx} cy={cy} w={w} id={id + '-f'} shape={MASKS.fluid} o={st.fluid ?? 0} feather={30} />
					<PlateMask p={PLATES.inflamed} cx={cx} cy={cy} w={w} id={id + '-s'} shape={MASKS.nStick} o={st.stick ?? 0} feather={14} />
					<PlateMask p={PLATES.inflamed} cx={cx} cy={cy} w={w} id={id + '-q'} shape={MASKS.nSqueeze} o={st.squeeze ?? 0} feather={14} />
					<PlateMask p={PLATES.inflamed} cx={cx} cy={cy} w={w} id={id + '-t'} shape={MASKS.nTissue} o={st.tissue ?? 0} feather={14} />
				</g>
			)}
			<PlateB p={PLATES.contained} cx={cx} cy={cy} w={w} o={c} />
		</g>
	);
};
export const cP = (cx: number, cy: number, w: number) => P(PLATES.early, cx, cy, w);

// ---------- the engulf set ----------
/** Phagosome interior colour (sampled from after-v2 beside the rod): the empty bubble shown while the rod is hidden. */
const BUBBLE = '#b9cbe6';
/**
 * Four aligned phagocytosis states. t1: before to wrap (short crossfade; rod in place). t2: wrap to after, masked: the
 * whole wrap plate fades out (old rod gone) while the after plate fades in with its rod hidden under an empty bubble;
 * only then does the new rod fade in. t3: after to digest (short crossfade; rod in place).
 */
export const Engulf: React.FC<{cx: number; cy: number; w: number; t1: number; t2: number; t3: number; id: string; o?: number}> = ({cx, cy, w, t1, t2, t3, id, o = 1}) => {
	if (o <= 0.01) return null;
	const a = clamp01(t2 * 2), b = clamp01(t2 * 2 - 1);
	const u1 = clamp01(t1), u3 = clamp01(t3);
	const rod = ptOf(PLATES.after, cx, cy, w, [1405, 995]);
	const k = w / (PLATES.after.box[2] - PLATES.after.box[0]);
	if (t2 <= 0) {
		return (
			<g opacity={o}>
				<PlateB p={PLATES.before} cx={cx} cy={cy} w={w} o={u1 < 1 ? 1 : 0} />
				<PlateB p={PLATES.wrap} cx={cx} cy={cy} w={w} o={u1} />
			</g>
		);
	}
	if (t2 >= 1) {
		return (
			<g opacity={o}>
				<PlateB p={PLATES.after} cx={cx} cy={cy} w={w} o={u3 < 1 ? 1 : 0} />
				<PlateB p={PLATES.digest} cx={cx} cy={cy} w={w} o={u3} />
			</g>
		);
	}
	return (
		<g opacity={o}>
			<PlateB p={PLATES.wrap} cx={cx} cy={cy} w={w} o={1 - a} />
			{a > 0.01 && b < 1 ? (
				<g opacity={a}>
					<defs><filter id={id + '-bf'} x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation={10 * k * 2} /></filter></defs>
					<ellipse cx={rod[0]} cy={rod[1]} rx={160 * k} ry={112 * k} fill={BUBBLE} filter={`url(#${id}-bf)`} />
				</g>
			) : null}
			<PlateMask p={PLATES.after} cx={cx} cy={cy} w={w} id={id + '-nr'} shape={'M0,0 L2000,0 L2000,2000 L0,2000 Z ' + MASKS.rodIn} o={a} feather={16} />
			<PlateMask p={PLATES.after} cx={cx} cy={cy} w={w} id={id + '-r'} shape={MASKS.rodIn} o={b} feather={16} />
		</g>
	);
};

// ---------- a coded vessel channel ----------
/** Point and heading at fraction u along a polyline. */
export const along = (pts: Pt[], u: number): {p: Pt; a: number} => {
	const lens = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
	const total = lens.reduce((s, l) => s + l, 0);
	let dist = clamp01(u) * total, k = 0;
	while (k < lens.length - 1 && dist > lens[k]) { dist -= lens[k]; k++; }
	const t = lens[k] ? clamp01(dist / lens[k]) : 1;
	const a = pts[k], b = pts[k + 1];
	return {p: [lerp(a[0], b[0], t), lerp(a[1], b[1], t)], a: Math.atan2(b[1] - a[1], b[0] - a[0])};
};
export const polyLen = (pts: Pt[]) => pts.slice(1).reduce((s, p, i) => s + Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), 0);
/** A smooth quadratic curve sampled into a polyline. */
export const quad = (a: Pt, c: Pt, b: Pt, n = 16): Pt[] => Array.from({length: n + 1}, (_, i) => {
	const t = i / n;
	return [(1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0], (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1]];
});
const dOf = (pts: Pt[]) => pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
/** Two ink lines with a pale red fill along `pts`, drawing on from `at`; `grey` fades it back. */
export const Channel: React.FC<{pts: Pt[]; at: number; dur?: number; width?: number; o?: number; grey?: number}> = ({pts, at, dur = 26, width = 46, o = 1, grey = 0}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, dur));
	if (p <= 0.01 || o <= 0.01) return null;
	const g = clamp01(grey);
	const d = dOf(pts);
	return (
		<g opacity={o * (1 - 0.5 * g)} style={g > 0.01 ? {filter: `grayscale(${g})`} : undefined}>
			<path d={d} fill="none" stroke={INK_SOFT} strokeWidth={width + 8} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />
			<path d={d} fill="none" stroke={PALE_RED} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />
		</g>
	);
};

// ---------- gradient rings ----------
/** Soft concentric rings centred on (x, y), strongest near the centre, drawing outwards from `at`, with a slow outward pulse. */
export const Gradient: React.FC<{x: number; y: number; r0?: number; dr?: number; n?: number; at: number; o?: number; color?: string; clip?: [number, number, number, number]; id?: string}> = ({x, y, r0 = 40, dr = 58, n = 7, at, o = 1, color = TEAL, clip, id = 'grad'}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const ph = ((f - at) % 60) / 60;
	return (
		<g opacity={o}>
			{clip ? <defs><clipPath id={`${id}-c`} clipPathUnits="userSpaceOnUse"><rect x={clip[0]} y={clip[1]} width={clip[2] - clip[0]} height={clip[3] - clip[1]} /></clipPath></defs> : null}
			<g clipPath={clip ? `url(#${id}-c)` : undefined}>
			<circle cx={x} cy={y} r={r0 + dr * 0.6} fill={color} opacity={0.14 * prog(f, at, 12)} />
			{Array.from({length: n}, (_, i) => {
				const p = prog(f, at + i * 4, 10);
				const r = r0 + i * dr + ph * dr * 0.5;
				return p > 0.01 ? <circle key={i} cx={x} cy={y} r={r} fill="none" stroke={color} strokeWidth={Math.max(1.5, 6 - i * 0.7)} opacity={p * (0.75 - i * 0.09)} /> : null;
			})}
			</g>
		</g>
	);
};

// ---------- moving specks ----------
/** Small dots streaming from `a` points to `b` points (looping while visible), with a little scatter. */
export const Flow: React.FC<{a: Pt[]; b: Pt[]; at: number; out?: number; n?: number; period?: number; r?: number; color?: string; stroke?: string; seed?: number; spread?: number; loop?: boolean}> = ({a, b, at, out, n = 10, period = 60, r = 6, color = AMBER, stroke = '#7a4a10', seed = 3, spread = 18, loop = true}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (f < at || o <= 0.01) return null;
	const R = rng(seed);
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const s = a[i % a.length], e = b[i % b.length];
				const off = R(), jx = (R() - 0.5) * spread * 2, jy = (R() - 0.5) * spread * 2;
				const born = at + i * 3;
				if (f < born) return null;
				const raw = (f - at) / period + off;
				const ph = loop ? raw % 1 : clamp01((f - born) / period);
				const x = lerp(s[0], e[0] + jx, ph), y = lerp(s[1], e[1] + jy, ph) + Math.sin((f - at) / 9 + i) * 3;
				const fade = loop ? Math.min(1, ph * 5, (1 - ph) * 5) : 1;
				return <circle key={i} cx={x} cy={y} r={r} fill={color} stroke={stroke} strokeWidth={1.2} opacity={fade * prog(f, born, 6)} />;
			})}
		</g>
	);
};
/** Specks spreading outwards from points (alarm signals). */
export const Spread: React.FC<{from: Pt[]; at: number; out?: number; n?: number; dist?: number; r?: number; color?: string; seed?: number}> = ({from, at, out, n = 18, dist = 160, r = 6, color = AMBER, seed = 9}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (f < at || o <= 0.01) return null;
	const R = rng(seed);
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const s = from[i % from.length];
				const ang = R() * Math.PI * 2, d = dist * (0.5 + R() * 0.6), off = R();
				const ph = (((f - at) / 70 + off) % 1);
				const x = s[0] + Math.cos(ang) * d * ph, y = s[1] + Math.sin(ang) * d * ph;
				return <circle key={i} cx={x} cy={y} r={r} fill={color} stroke="#7a4a10" strokeWidth={1} opacity={Math.min(1, (1 - ph) * 3) * prog(f, at + i * 2, 8)} />;
			})}
		</g>
	);
};

// ---------- a dotted path with a traveller ----------
/** A dotted path drawing on from `at`; `children` (drawn at the origin) travel along it from `go` over `dur`. */
export const Travel: React.FC<{pts: Pt[]; at: number; go?: number; dur?: number; color?: string; o?: number; width?: number; children?: React.ReactNode}> = ({pts, at, go, dur = 50, color = TEAL, o = 1, width = 5, children}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const g = go ?? at;
	const u = smooth(clamp01((f - g) / dur));
	const q = along(pts, u).p;
	return (
		<g opacity={o}>
			<DrawPath d={dOf(pts)} at={at} dur={Math.max(14, Math.round(dur * 0.7))} color={color} width={width} dash="3 11" />
			{children && f >= g ? <g transform={`translate(${q[0]},${q[1]})`}>{children}</g> : null}
		</g>
	);
};

// ---------- a set-point gauge (no thermometer) ----------
/** A short vertical scale with a mark that slides up from `riseAt`. */
export const Gauge: React.FC<{x: number; y: number; h?: number; at: number; riseAt: number; o?: number; dim?: number}> = ({x, y, h = 220, at, riseAt, o = 1, dim = 0}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	const u = smooth(prog(f, riseAt, 40));
	const my = y + h - 40 - u * (h - 90);
	const d = clamp01(dim);
	const col = d > 0.5 ? GREYT : TERRA;
	return (
		<g opacity={p * (1 - 0.45 * d)}>
			<rect x={x - 16} y={y} width={32} height={h} rx={16} fill={CARD} stroke={d > 0.5 ? GREYT : INK_SOFT} strokeWidth={3} />
			{[0.2, 0.4, 0.6, 0.8].map(t => <line key={t} x1={x + 16} x2={x + 32} y1={y + h * t} y2={y + h * t} stroke={GREYT} strokeWidth={3} />)}
			<rect x={x - 9} y={my} width={18} height={y + h - 10 - my} rx={9} fill={col} opacity={0.7} />
			<path d={`M${x - 34},${my - 12} L${x - 18},${my} L${x - 34},${my + 12} Z`} fill={col} />
		</g>
	);
};

// ---------- a step counter ----------
export const Steps: React.FC<{x: number; y: number; n: number; lit: number; at: number; gap?: number; labels?: string[]; o?: number}> = ({x, y, n, lit, at, gap = 150, labels = [], o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			<line x1={x} x2={x + (n - 1) * gap} y1={y} y2={y} stroke={GREYT} strokeWidth={4} />
			{Array.from({length: n}, (_, i) => {
				const on = i + 1 === lit, done = i + 1 < lit;
				return (
					<g key={i}>
						<circle cx={x + i * gap} cy={y} r={30} fill={on ? TEAL : done ? TEAL_SOFT : '#eceeef'} stroke={on || done ? TEAL : GREYT} strokeWidth={3} />
						<Sx x={x + i * gap} y={y + 12} text={`${i + 1}`} size={34} color={on ? '#ffffff' : done ? TEAL : GREY_INK} weight={800} anchor="middle" at={-100} />
						{labels[i] ? <Sx x={x + i * gap} y={y + 72} text={labels[i]} size={28} color={on ? TEAL : GREY_INK} hand weight={700} anchor="middle" at={-100} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- a zoom box ----------
export const ZoomBox: React.FC<{x0: number; y0: number; x1: number; y1: number; at: number; out?: number; color?: string}> = ({x0, y0, x1, y1, at, out, color = INK_SOFT}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (f < at || o <= 0.01) return null;
	return <g opacity={o}><DrawPath d={`M${x0},${y0} L${x1},${y0} L${x1},${y1} L${x0},${y1} Z`} at={at} dur={14} color={color} width={4} dash="12 8" /></g>;
};

/** A small grey gloss line (no box): a term's plain meaning. */
export const Gloss: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; dim?: number}> = ({x, y, text, at, out, size = 26, color = INK_SOFT, anchor = 'start', dim = 0}) => (
	<Sx x={x} y={y} text={text} size={size} color={dim > 0.5 ? GREY_INK : color} weight={600} anchor={anchor} at={at} out={out} opacity={1 - 0.35 * clamp01(dim)} />
);

/** Tiny coded protein dots and fluid droplets crossing a wall from a to b. */
export const Leak: React.FC<{a: Pt[]; b: Pt[]; at: number; out?: number}> = ({a, b, at, out}) => (
	<g>
		<Flow a={a} b={b} at={at} out={out} n={8} period={70} r={9} color="#cfe6f2" stroke={DROP} seed={11} spread={26} />
		<Flow a={a} b={b} at={at + 8} out={out} n={10} period={80} r={4.5} color="#e9b04a" stroke="#8a5a14" seed={21} spread={30} />
	</g>
);

/** A plate-sized wash that brightens a region (attention), never covering the plate. */
export const Halo: React.FC<{x: number; y: number; rx: number; ry: number; o: number; color?: string}> = ({x, y, rx, ry, o, color = TEAL}) => (o <= 0.01 ? null : <ellipse cx={x} cy={y} rx={rx} ry={ry} fill={color} opacity={0.14 * o} />);
export const useF = () => useCurrentFrame();
void EDGE; void GREEN; void GTag; void CTag; void ClockMark; void Pl; void Ring; void fitW; void plH; void pulse; void tw; void CardBox; void CurveArrow; void MistakeChip; void PlainArrow; void INK; void AMBER_INK; void RED_V; void polyLen;
