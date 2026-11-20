// Drawing parts for Y11 Chem M1 V10 (line spectra and energy levels). Reuses the M1 V08 parts (and through them the
// V06, V01 and M2 V06 text, chips, framed answers, pen marks, plates, the nucleus and the pause hold). New here, all
// coded: the spectrum strip (near-black band, red 700 nm at the left to violet 400 nm at the right; thin lines at true
// wavelength positions or a continuous rainbow), wavy photons, the energy-level diagram on hydrogen's true -1/n^2
// scale, the electron dot, the prism with its rays and fan, the staircase that morphs into the level diagram, the
// ramp, tally bars laid along a strip, the Bohr atom and the orbital dot cloud.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, E_BLUE, E_INK, INK, Sx, clamp01, lerp, prog, smooth} from '../chem-y11-m1-v08/parts';
import {levelFrac} from './common';

export * from '../chem-y11-m1-v08/parts';

// ---------- colour key (design Revision 4, fixed for the whole video) ----------
export const NAVY_T = '#24407a';
export const SLATE_T = '#5a6470';
export const GREEN_T = '#2f8a5b';
export const RED_T = '#c4362f';
export const ORANGE = '#e07b12', ORANGE_INK = '#a35400';
export const VIOLET_INK = '#5b2aa8';
export const BLUE_INK = '#1f4f9e';
export const BAND = '#141218';

/** Visible-light colour for a wavelength (nm), interpolated between hand-set stops. */
const STOPS: [number, string][] = [[700, '#b3001f'], [656, '#ff2d1f'], [615, '#ff7a00'], [589, '#ffc21a'], [560, '#c8e62a'], [525, '#35d04a'], [495, '#18cfc2'], [486, '#19c9d6'], [465, '#1f8bff'], [434, '#4a4dff'], [410, '#8a3cff'], [400, '#6a1fb8']];
const hexRgb = (h: string) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const rgbHex = (r: number[]) => '#' + r.map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
export const nmColor = (nm: number) => {
	if (nm >= STOPS[0][0]) return STOPS[0][1];
	for (let i = 0; i + 1 < STOPS.length; i++) {
		const [a, ca] = STOPS[i], [b, cb] = STOPS[i + 1];
		if (nm <= a && nm >= b) { const t = (a - nm) / (a - b); const A = hexRgb(ca), B = hexRgb(cb); return rgbHex(A.map((v, k) => v + (B[k] - v) * t)); }
	}
	return STOPS[STOPS.length - 1][1];
};
/** A darker version of a light colour for strokes and text on paper. */
export const nmInk = (nm: number) => rgbHex(hexRgb(nmColor(nm)).map(v => v * 0.72));

// ---------- spectrum strip ----------
export type StripG = {x: number; y: number; w: number; h: number};
/** Screen x of a wavelength on a strip (700 nm at the left edge, 400 nm at the right). */
export const sxOf = (g: StripG, nm: number) => g.x + ((700 - nm) / 300) * g.w;
export type SLine = {nm: number; at?: number; out?: number; color?: string; width?: number; glow?: number};
export const Strip: React.FC<{id: string; g: StripG; lines?: SLine[]; rainbow?: number; labels?: boolean; labelAt?: number; o?: number; children?: React.ReactNode}> = ({id, g, lines = [], rainbow = 0, labels = false, labelAt = -1000, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const lh = labels ? g.h - 44 : g.h - 16;
	const sorted = [...lines].sort((a, b) => b.nm - a.nm);
	return (
		<g opacity={o}>
			<defs>
				<linearGradient id={id + 'rb'} x1={g.x} x2={g.x + g.w} y1={0} y2={0} gradientUnits="userSpaceOnUse">
					{Array.from({length: 31}, (_, i) => <stop key={i} offset={i / 30} stopColor={nmColor(700 - i * 10)} />)}
				</linearGradient>
				<clipPath id={id + 'c'}><rect x={g.x} y={g.y} width={g.w * clamp01(rainbow)} height={g.h} /></clipPath>
			</defs>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} rx={10} fill={BAND} stroke={INK} strokeWidth={3} />
			{rainbow > 0.001 ? <rect x={g.x + 3} y={g.y + 3} width={g.w - 6} height={g.h - 6} rx={8} fill={`url(#${id}rb)`} clipPath={`url(#${id}c)`} /> : null}
			{sorted.map((l, i) => {
				const v = (l.at === undefined ? 1 : prog(f, l.at, 8)) * (l.out === undefined ? 1 : 1 - prog(f, l.out, 10));
				if (v <= 0.005) return null;
				const x = sxOf(g, l.nm), c = l.color ?? nmColor(l.nm), w = l.width ?? 9;
				const grow = l.at === undefined ? 1 : smooth(prog(f, l.at, 10));
				return (
					<g key={i} opacity={v}>
						<rect x={x - w * 1.6} y={g.y + 8} width={w * 3.2} height={lh * grow} rx={4} fill={c} opacity={0.28 + 0.3 * (l.glow ?? 0)} />
						<rect x={x - w / 2} y={g.y + 8} width={w} height={lh * grow} rx={3} fill={c} />
					</g>
				);
			})}
			{labels ? sorted.map((l, i) => {
				// close neighbours: the left label sits left of its line and the right one right of its line
				const x = sxOf(g, l.nm), near = (j: number) => j >= 0 && j < sorted.length && Math.abs(sxOf(g, sorted[j].nm) - x) < 70;
				const anchor = near(i + 1) ? 'end' : 'middle';
				const dx = anchor === 'end' ? -10 : Math.min(0, g.x + g.w - 30 - x);
				return <Sx key={'t' + i} x={x + dx} y={g.y + g.h - 12} text={`${Math.round(l.nm)}`} size={30} color="#ffffff" anchor={anchor} weight={800} at={Math.max(labelAt, l.at ?? -1000)} />;
			}) : null}
			{labels ? <Sx x={g.x + 14} y={g.y + g.h - 12} text="nm" size={30} color="#ffffff" weight={800} at={-1000} /> : null}
		</g>
	);
};
/** Red strike across a strip, from frame `at`. */
export const StripStrike: React.FC<{g: StripG; at: number; color?: string}> = ({g, at, color = RED_T}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return (
		<g>
			<DrawPath d={`M${g.x - 14},${g.y + g.h + 8} L${g.x + g.w + 14},${g.y - 8}`} at={at} dur={10} color={color} width={8} />
			<DrawPath d={`M${g.x - 14},${g.y - 8} L${g.x + g.w + 14},${g.y + g.h + 8}`} at={at + 5} dur={10} color={color} width={8} />
		</g>
	);
};

// ---------- photons ----------
/** Wavy path from a toward b, drawn up to fraction t. */
export const wavyD = (a: [number, number], b: [number, number], t: number, amp = 9, lam = 34) => {
	const L = Math.hypot(b[0] - a[0], b[1] - a[1]), ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L, nx = -uy, ny = ux;
	const end = L * clamp01(t), n = Math.max(2, Math.ceil(end / 4));
	let d = '';
	for (let i = 0; i <= n; i++) {
		const s = (end * i) / n, taper = Math.min(1, s / 24, (L - s) / 24 + 0.2);
		const w = amp * taper * Math.sin((2 * Math.PI * s) / lam);
		d += `${i ? 'L' : 'M'}${(a[0] + ux * s + nx * w).toFixed(1)},${(a[1] + uy * s + ny * w).toFixed(1)} `;
	}
	return {d, tip: [a[0] + ux * end, a[1] + uy * end] as [number, number], ang: Math.atan2(uy, ux)};
};
/** A photon flying from a to b over `dur` frames (a wavy arrow in the colour of its light). */
export const Photon: React.FC<{a: [number, number]; b: [number, number]; at: number; dur?: number; color: string; dashed?: boolean; stay?: boolean; width?: number; amp?: number; fadeAt?: number}> = ({a, b, at, dur = 18, color, dashed, stay = false, width = 5, amp = 9, fadeAt}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const t = smooth((f - at) / dur);
	const o = fadeAt !== undefined ? 1 - prog(f, fadeAt, 10) : stay ? 1 : 1 - prog(f, at + dur + 2, 8);
	if (o <= 0.005) return null;
	const {d, tip, ang} = wavyD(a, b, t, amp);
	const hd = 15;
	return (
		<g opacity={o}>
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dashed ? '10 8' : undefined} />
			<path d={`M${tip[0] - hd * Math.cos(ang - 0.5)},${tip[1] - hd * Math.sin(ang - 0.5)} L${tip[0]},${tip[1]} L${tip[0] - hd * Math.cos(ang + 0.5)},${tip[1] - hd * Math.sin(ang + 0.5)}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
		</g>
	);
};

// ---------- energy-level diagram (true scale: level 1 at y1, the n = infinity limit at yInf) ----------
export type LvG = {x0: number; x1: number; y1: number; yInf: number};
export const LY = (g: LvG, n: number) => g.y1 - (g.y1 - g.yInf) * levelFrac(n);
/** Six levels with labels: 1 to 3 at the left, 4 to 6 staggered at the right (they sit close on the true scale). */
export const Levels: React.FC<{g: LvG; n?: number; at?: number; axis?: boolean; o?: number; hi?: Partial<Record<number, number>>; dashed?: boolean}> = ({g, n = 6, at = -1000, axis = true, o = 1, hi = {}, dashed}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.005) return null;
	const ax = g.x0 - 92;
	return (
		<g opacity={v}>
			{axis ? <>
				<line x1={ax} x2={ax} y1={g.y1 + 20} y2={g.yInf + 4} stroke={INK} strokeWidth={4} strokeLinecap="round" />
				<path d={`M${ax - 13},${g.yInf + 22} L${ax},${g.yInf} L${ax + 13},${g.yInf + 22}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
				<g transform={`translate(${ax - 18},${(g.y1 + g.yInf) / 2 + 120}) rotate(-90)`}><Sx x={0} y={0} text="energy" size={38} color={INK} weight={800} at={-1000} /></g>
			</> : null}
			{Array.from({length: n}, (_, i) => {
				const k = i + 1, y = LY(g, k), h = hi[k] !== undefined ? prog(f, hi[k] as number, 10) : 0;
				const lx = k <= 3 ? g.x0 - 18 : g.x1 + 16 + (k - 4) * 30;
				return (
					<g key={k}>
						<line x1={g.x0} x2={g.x1} y1={y} y2={y} stroke={h > 0 ? NAVY_T : INK} strokeWidth={4 + 3 * h} strokeLinecap="round" strokeDasharray={dashed ? '14 9' : undefined} />
						<Sx x={lx} y={y + 12} text={`${k}`} size={34} color={INK} anchor={k <= 3 ? 'end' : 'start'} weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
/** The electron dot (blue), with an amber glow when excited. */
export const Electron: React.FC<{x: number; y: number; r?: number; glow?: number; o?: number}> = ({x, y, r = 15, glow = 0, o = 1}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		{glow > 0.01 ? <circle cx={x} cy={y} r={r * 2.3} fill="#ffc46b" opacity={0.55 * glow} /> : null}
		<circle cx={x} cy={y} r={r} fill={E_BLUE} stroke={E_INK} strokeWidth={3} />
		<circle cx={x - r * 0.3} cy={y - r * 0.32} r={r * 0.25} fill="#fff" opacity={0.45} />
	</g>
));
/** Straight drop or jump arrow between two y values at x. */
export const VArrow: React.FC<{x: number; y0: number; y1: number; at: number; color: string; width?: number; dashed?: boolean; out?: number; dur?: number}> = ({x, y0, y1, at, color, width = 6, dashed, out, dur = 12}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (o <= 0.005) return null;
	const dir = Math.sign(y1 - y0), p = smooth(prog(f, at, dur)), ye = y0 + (y1 - y0) * p;
	return (
		<g opacity={o}>
			<line x1={x} x2={x} y1={y0} y2={ye - dir * 6} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dashed ? '12 9' : undefined} />
			{p > 0.6 ? <path d={`M${x - 13},${ye - dir * 20} L${x},${ye} L${x + 13},${ye - dir * 20}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /> : null}
		</g>
	);
};

// ---------- prism and rays ----------
export const Prism: React.FC<{cx: number; cy: number; s?: number; o?: number}> = ({cx, cy, s = 70, o = 1}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<path d={`M${cx},${cy - s} L${cx + s * 0.9},${cy + s * 0.6} L${cx - s * 0.9},${cy + s * 0.6} Z`} fill="#e3eef4" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
		<path d={`M${cx - s * 0.25},${cy - s * 0.45} L${cx - s * 0.55},${cy + s * 0.4}`} stroke="#ffffff" strokeWidth={5} strokeLinecap="round" opacity={0.8} />
	</g>
));
/** A straight ray drawn on from a to b. */
export const Ray: React.FC<{a: [number, number]; b: [number, number]; at: number; color: string; width?: number; o?: number; dur?: number}> = ({a, b, at, color, width = 4, o = 1, dur = 12}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.005) return null;
	return <g opacity={o}><DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={dur} color={color} width={width} /></g>;
};
/** A rainbow fan from a point onto a strip's top edge (reveal 0..1, left to right). */
export const Fan: React.FC<{id: string; apex: [number, number]; g: StripG; reveal: number; o?: number}> = ({id, apex, g, reveal, o = 0.5}) => {
	if (reveal <= 0.001) return null;
	const xe = g.x + g.w * clamp01(reveal);
	return (
		<g opacity={o}>
			<defs><linearGradient id={id} x1={g.x} x2={g.x + g.w} y1={0} y2={0} gradientUnits="userSpaceOnUse">{Array.from({length: 16}, (_, i) => <stop key={i} offset={i / 15} stopColor={nmColor(700 - i * 20)} />)}</linearGradient></defs>
			<path d={`M${apex[0]},${apex[1]} L${g.x},${g.y} L${xe},${g.y} Z`} fill={`url(#${id})`} />
		</g>
	);
};

// ---------- staircase and ramp ----------
/** Stylised uneven staircase (tread heights shrink upward like hydrogen's levels) that can morph into a level diagram. */
export const STEP_Y = [880, 700, 560, 452, 372, 316];
export const Stairs: React.FC<{sx0: number; step: number; ys?: number[]; morph?: number; g?: LvG; o?: number; color?: string}> = ({sx0, step, ys = STEP_Y, morph = 0, g, o = 1, color = INK}) => {
	if (o <= 0.005) return null;
	const m = smooth(morph);
	const n = ys.length;
	const tread = (k: number) => {
		const y0 = ys[k], ly = g ? LY(g, k + 1) : y0;
		return {xa: lerp(sx0 + k * step, g ? g.x0 : sx0 + k * step, m), xb: lerp(sx0 + (k + 1) * step, g ? g.x1 : sx0 + (k + 1) * step, m), y: lerp(y0, ly, m)};
	};
	let fillD = `M${sx0},${ys[0]}`;
	for (let k = 0; k < n; k++) fillD += ` L${sx0 + k * step},${ys[k]} L${sx0 + (k + 1) * step},${ys[k]}`;
	fillD += ` L${sx0 + n * step},${ys[0]} Z`;
	return (
		<g opacity={o}>
			<path d={fillD} fill="#efe6d4" opacity={1 - m} />
			{Array.from({length: n - 1}, (_, k) => <line key={'r' + k} x1={sx0 + (k + 1) * step} x2={sx0 + (k + 1) * step} y1={ys[k]} y2={ys[k + 1]} stroke={color} strokeWidth={5} opacity={1 - m} strokeLinecap="round" />)}
			{Array.from({length: n}, (_, k) => { const t = tread(k); return <line key={'t' + k} x1={t.xa} x2={t.xb} y1={t.y} y2={t.y} stroke={color} strokeWidth={5} strokeLinecap="round" />; })}
		</g>
	);
};
/** Centre of tread k (0-based) of a stylised staircase. */
export const stepXY = (sx0: number, step: number, k: number, ys = STEP_Y): [number, number] => [sx0 + (k + 0.5) * step, ys[k]];
export const Ball: React.FC<{x: number; y: number; r?: number; color?: string}> = ({x, y, r = 22, color = E_BLUE}) => (
	<g>
		<circle cx={x} cy={y - r} r={r} fill={color} stroke={E_INK} strokeWidth={3} />
		<circle cx={x - r * 0.3} cy={y - r * 1.32} r={r * 0.25} fill="#fff" opacity={0.45} />
	</g>
);

// ---------- tally bars laid along a strip ----------
export const LineTally: React.FC<{g: StripG; nms: number[]; counts: number[]; base: number; maxH: number; top?: number; colors?: string[]; o?: number}> = ({g, nms, counts, base, maxH, top, colors, o = 1}) => {
	if (o <= 0.005) return null;
	const T = top ?? Math.max(8, ...counts) * 1.15;
	return (
		<g opacity={o}>
			<line x1={g.x} x2={g.x + g.w} y1={base} y2={base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			{nms.map((nm, i) => {
				const x = sxOf(g, nm), h = (counts[i] / T) * maxH, c = colors?.[i] ?? nmInk(nm);
				return (
					<g key={i}>
						<line x1={x} x2={x} y1={g.y + g.h} y2={base} stroke={c} strokeWidth={2} strokeDasharray="4 6" opacity={0.6} />
						{counts[i] > 0 ? <rect x={x - 22} y={base - h} width={44} height={h} rx={6} fill={c} stroke={INK} strokeWidth={2} /> : null}
						<Sx x={x} y={base - h - 10} text={`${counts[i]}`} size={30} color={INK} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- atoms ----------
/** A small nucleus (red protons, slate neutrons) of a few particles. */
export const MiniNucleus: React.FC<{cx: number; cy: number; r?: number; one?: boolean}> = ({cx, cy, r = 9, one}) => (one ? (
	<circle cx={cx} cy={cy} r={r * 1.3} fill="#d24a3c" stroke="#a8322a" strokeWidth={2.5} />
) : (
	<g>
		{[[-0.6, -0.4, 1], [0.6, -0.3, 0], [0, 0.55, 1], [-0.1, -0.1, 0], [0.55, 0.5, 1], [-0.62, 0.45, 0]].map(([a, b, p], i) => <circle key={i} cx={cx + a * r * 1.5} cy={cy + b * r * 1.5} r={r} fill={p ? '#d24a3c' : '#9aa3ad'} stroke={p ? '#a8322a' : '#4f5862'} strokeWidth={2} />)}
	</g>
));
/** Bohr's hydrogen atom: nucleus, circular orbits (solid, or dashed navy), the electron on orbit `on`. */
export const BohrAtom: React.FC<{cx: number; cy: number; R: number; dashed?: number; on?: number; o?: number; speed?: number}> = ({cx, cy, R, dashed = 0, on = 0, o = 1, speed = 0.03}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const radii = [0.32, 0.62, 1].map(k => R * k);
	const a = f * speed;
	return (
		<g opacity={o}>
			{radii.map((r, i) => <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={dashed > 0.5 ? NAVY_T : INK} strokeWidth={4} strokeDasharray={dashed > 0.5 ? '14 10' : undefined} />)}
			<MiniNucleus cx={cx} cy={cy} r={11} one />
			<Electron x={cx + radii[on] * Math.cos(a)} y={cy + radii[on] * Math.sin(a)} r={14} />
		</g>
	);
};
/** Seeded generator (deterministic). */
export const rng = (seed: number) => { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
const CLOUD: [number, number][] = (() => {
	const r = rng(1926), out: [number, number][] = [];
	for (let i = 0; i < 1100; i++) {
		// radial density falling off from the centre (a school picture of a 1s orbital)
		const u = r(), rad = Math.min(1, -Math.log(1 - u * 0.985) * 0.27), th = r() * Math.PI * 2;
		out.push([rad * Math.cos(th), rad * Math.sin(th)]);
	}
	return out;
})();
/** The orbital dot cloud, denser near the nucleus; `p` reveals it (0..1). */
export const Cloud: React.FC<{cx: number; cy: number; R: number; p?: number; pulse?: number}> = ({cx, cy, R, p = 1, pulse = 0}) => {
	const f = useCurrentFrame();
	if (p <= 0.005) return null;
	const n = Math.round(CLOUD.length * clamp01(p));
	const glow = pulse > 0 ? 0.5 + 0.5 * Math.sin(f * 0.15) : 0;
	return (
		<g>
			{pulse > 0 ? <circle cx={cx} cy={cy} r={R * 0.38} fill="#9cc3ff" opacity={0.35 * pulse * (0.6 + 0.4 * glow)} /> : null}
			{CLOUD.slice(0, n).map(([x, y], i) => <circle key={i} cx={cx + x * R} cy={cy + y * R} r={3.4} fill="#2f6fd0" opacity={0.85} />)}
			<MiniNucleus cx={cx} cy={cy} r={11} one />
		</g>
	);
};
