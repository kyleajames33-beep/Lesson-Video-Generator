// Spectrum and light-path kit for Module 7 (additive kit file, 25 November 2026; first used by phys-y12-m7-v01 to v03).
// Course-neutral: line lists, labels and colours of meaning come from the lesson.
// - wlColor(nm): the colour of a visible wavelength (piecewise-linear approximation after Bruton), so 656 nm is red,
//   589 nm yellow, 486 nm cyan, 434 nm blue-violet and 410 nm violet. Outside 380 to 750 nm it returns a dark grey.
// - SpectrumStrip: a wavelength-linear strip (default 380 to 750 nm): blank outline, continuous fill (with an optional
//   brightness profile), bright emission lines on black, or dark absorption lines on a continuous fill. Lines can be
//   shifted (multiplied by `shift`) or broadened (`broaden`, px); `reveal` draws the fill left to right.
// - EMRibbon: the seven regions of the EM spectrum on a log-frequency ribbon, with the visible band in true colours.
// - EnergyLadder: an atom's energy levels (hydrogen-like spacing, E_n proportional to -1/n^2) with an electron
//   dropping or jumping between two levels.
// - LightPath and pathPoint: an amber path (polyline) drawn on from its start, with pulses placed along it.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';

type Pt = [number, number];
const clamp01 = (u: number) => Math.max(0, Math.min(1, u));
const hex = (r: number, g: number, b: number) => '#' + [r, g, b].map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');

/** Colour of a visible wavelength (nm). */
export const wlColor = (nm: number) => {
	let r = 0, g = 0, b = 0;
	if (nm < 380 || nm > 750) return '#3a3632';
	if (nm < 440) { r = (440 - nm) / 60; b = 1; }
	else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
	else if (nm < 510) { g = 1; b = (510 - nm) / 20; }
	else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
	else if (nm < 645) { r = 1; g = (645 - nm) / 65; }
	else r = 1;
	const k = nm < 420 ? 0.35 + (0.65 * (nm - 380)) / 40 : nm > 700 ? 0.35 + (0.65 * (750 - nm)) / 50 : 1;
	const gam = (v: number) => (v <= 0 ? 0 : 255 * Math.pow(v * k, 0.8));
	return hex(gam(r), gam(g), gam(b));
};

export type StripGeom = {x: number; y: number; w: number; h: number; nm0?: number; nm1?: number};
/** Screen x of a wavelength on a strip. */
export const nmX = (s: StripGeom, nm: number) => s.x + ((nm - (s.nm0 ?? 380)) / ((s.nm1 ?? 750) - (s.nm0 ?? 380))) * s.w;
export type StripKind = 'blank' | 'continuous' | 'emission' | 'absorption';
export const SpectrumStrip: React.FC<{
	s: StripGeom; kind: StripKind; lines?: readonly number[]; strengths?: readonly number[];
	reveal?: number; shift?: number; broaden?: number; lineW?: number; profile?: (nm: number) => number;
	axis?: boolean; ticks?: readonly number[]; tickSize?: number; outline?: string; opacity?: number; glow?: readonly number[]; grey?: boolean; id?: string;
}> = ({s, kind, lines = [], strengths, reveal = 1, shift = 1, broaden = 0, lineW = 6, profile, axis = false, ticks = [400, 500, 600, 700], tickSize = 26, outline = INK, opacity = 1, glow = [], grey = false, id}) => {
	const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
	if (opacity <= 0.001) return null;
	const cid = id ?? `strip-${uid}`;
	const nm0 = s.nm0 ?? 380, nm1 = s.nm1 ?? 750;
	const N = 74;
	const fillW = s.w * clamp01(reveal);
	const band = (nm: number) => (grey ? '#b9b2a6' : wlColor(nm));
	return (
		<g opacity={opacity}>
			<defs><clipPath id={cid}><rect x={s.x} y={s.y} width={fillW} height={s.h} /></clipPath></defs>
			<rect x={s.x} y={s.y} width={s.w} height={s.h} fill={kind === 'emission' ? '#14110f' : CARD} />
			<g clipPath={`url(#${cid})`}>
				{kind === 'continuous' || kind === 'absorption' ? Array.from({length: N}, (_, i) => {
					const nm = nm0 + ((nm1 - nm0) * (i + 0.5)) / N;
					const bright = profile ? clamp01(profile(nm)) : 1;
					return <rect key={i} x={s.x + (s.w * i) / N} y={s.y} width={s.w / N + 1} height={s.h} fill={band(nm)} opacity={0.15 + 0.85 * bright} />;
				}) : null}
				{kind === 'emission' || kind === 'absorption' ? lines.map((l, i) => {
					const nm = l * shift, x = nmX(s, nm), w = lineW + broaden;
					const st = strengths?.[i] ?? 1;
					const col = kind === 'emission' ? (grey ? '#f1ece2' : wlColor(l)) : '#14110f';
					return <g key={i}>
						{broaden > 0.5 ? <rect x={x - w / 2 - broaden * 0.4} y={s.y} width={w + broaden * 0.8} height={s.h} fill={col} opacity={0.35 * st} /> : null}
						<rect x={x - w / 2} y={s.y} width={w} height={s.h} fill={col} opacity={kind === 'absorption' ? 0.55 + 0.45 * st : st} />
						{glow.includes(i) ? <rect x={x - w / 2 - 6} y={s.y - 6} width={w + 12} height={s.h + 12} fill="none" stroke={kind === 'emission' ? col : INK} strokeWidth={3} /> : null}
					</g>;
				}) : null}
			</g>
			<rect x={s.x} y={s.y} width={s.w} height={s.h} fill="none" stroke={outline} strokeWidth={3} />
			{axis ? <g>
				{ticks.map(t => <g key={t}>
					<line x1={nmX(s, t)} y1={s.y + s.h} x2={nmX(s, t)} y2={s.y + s.h + 12} stroke={INK} strokeWidth={3} />
					<text x={nmX(s, t)} y={s.y + s.h + 14 + tickSize} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: tickSize, fill: INK}}>{t}</text>
				</g>)}
			</g> : null}
		</g>
	);
};

// ---------------------------------------------------------------- the EM spectrum ribbon
/** Region boundaries in hertz (log scale); order radio to gamma. Boundaries are conventional and approximate. */
export const EM_REGIONS = [
	{name: 'radio', f0: 1e4, f1: 3e9},
	{name: 'microwave', f0: 3e9, f1: 3e11},
	{name: 'infrared', f0: 3e11, f1: 4e14},
	{name: 'visible', f0: 4e14, f1: 7.9e14},
	{name: 'ultraviolet', f0: 7.9e14, f1: 3e16},
	{name: 'X-ray', f0: 3e16, f1: 3e19},
	{name: 'gamma', f0: 3e19, f1: 1e22},
] as const;
export const ribbonX = (x: number, w: number, f: number) => x + ((Math.log10(f) - 4) / (22 - 4)) * w;
const REGION_TINT = ['#e9e1f0', '#e2e9f3', '#f4e1d6', '', '#ece3f5', '#e3e8ee', '#e7e4ee'];
/** The ribbon; the visible band is widened (`visW` px) for legibility, with a tag saying so left to the lesson. */
export const EMRibbon: React.FC<{x: number; y: number; w: number; h: number; labels?: number; size?: number; opacity?: number; hi?: number}> = ({x, y, w, h, labels = 1, size = 28, opacity = 1, hi = -1}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			{EM_REGIONS.map((r, i) => {
				const a = ribbonX(x, w, r.f0), b = ribbonX(x, w, r.f1);
				return <g key={r.name}>
					{r.name === 'visible' ? Array.from({length: 24}, (_, k) => <rect key={k} x={a + ((b - a) * k) / 24} y={y} width={(b - a) / 24 + 0.8} height={h} fill={wlColor(700 - (300 * (k + 0.5)) / 24)} />) : <rect x={a} y={y} width={b - a} height={h} fill={REGION_TINT[i]} />}
					{i ? <line x1={a} y1={y} x2={a} y2={y + h} stroke={INK} strokeWidth={2} /> : null}
					{labels > 0.001 ? <text x={(a + b) / 2} y={i % 2 ? y + h + size + 8 : y - 12} textAnchor="middle" opacity={labels} style={{fontFamily: FONT_DISPLAY, fontWeight: hi === i ? 800 : 700, fontSize: size, fill: INK}}>{r.name}</text> : null}
				</g>;
			})}
			<rect x={x} y={y} width={w} height={h} fill="none" stroke={INK} strokeWidth={3} />
		</g>
	);
};

// ---------------------------------------------------------------- the energy ladder
/** Screen y of level n on a ladder whose level 1 sits at `bot` and whose ionisation limit sits at `top`. */
export const levelY = (n: number, top: number, bot: number) => top + (bot - top) / (n * n);
export const EnergyLadder: React.FC<{x: number; w: number; top: number; bot: number; levels: readonly number[]; color: string; electron?: {from: number; to: number; u: number; color: string}; arrowColor?: string; label?: (n: number) => string; size?: number; opacity?: number; hiLevel?: number}> = ({x, w, top, bot, levels, color, electron, arrowColor, label, size = 26, opacity = 1, hiLevel}) => {
	if (opacity <= 0.001) return null;
	const ex = x + w * 0.62;
	return (
		<g opacity={opacity}>
			{levels.map(n => { const y = levelY(n, top, bot); return <g key={n}>
				<line x1={x} y1={y} x2={x + w} y2={y} stroke={color} strokeWidth={hiLevel === n ? 7 : 4} />
				{label ? <text x={x - 12} y={y + size * 0.35} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, fill: color}}>{label(n)}</text> : null}
			</g>; })}
			{electron ? (() => {
				const y0 = levelY(electron.from, top, bot), y1 = levelY(electron.to, top, bot), u = clamp01(electron.u);
				const ey = y0 + (y1 - y0) * u;
				return <g>
					{u > 0.02 ? <line x1={ex} y1={y0} x2={ex} y2={ey} stroke={arrowColor ?? electron.color} strokeWidth={5} strokeDasharray="10 7" /> : null}
					{u > 0.98 ? <path d={`M${ex},${y1} l-13,${y1 > y0 ? -20 : 20} l26,0 Z`} fill={arrowColor ?? electron.color} /> : null}
					<circle cx={ex} cy={ey} r={13} fill={electron.color} stroke={CARD} strokeWidth={3} />
				</g>;
			})() : null}
		</g>
	);
};

// ---------------------------------------------------------------- light paths
export const pathLength = (pts: readonly Pt[]) => pts.slice(1).reduce((s, p, i) => s + Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), 0);
/** Point at fraction u (0 to 1) of the way along a polyline. */
export const pathPoint = (pts: readonly Pt[], u: number): Pt => {
	let d = clamp01(u) * pathLength(pts);
	for (let i = 0; i + 1 < pts.length; i++) {
		const L = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]);
		if (d <= L || i + 2 === pts.length) { const t = L ? Math.min(1, d / L) : 0; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * t, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * t]; }
		d -= L;
	}
	return [pts[pts.length - 1][0], pts[pts.length - 1][1]];
};
/** The part of a polyline from fraction a to fraction b. */
export const subPath = (pts: readonly Pt[], a: number, b: number): Pt[] => {
	const total = pathLength(pts), out: Pt[] = [pathPoint(pts, a)];
	let acc = 0;
	for (let i = 0; i + 1 < pts.length; i++) { acc += Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]); const u = acc / total; if (u > a && u < b) out.push([pts[i + 1][0], pts[i + 1][1]]); }
	out.push(pathPoint(pts, b));
	return out;
};
/** An amber path drawn from 0 to `draw`, with glowing pulses at fractions `pulses`. */
export const LightPath: React.FC<{pts: readonly Pt[]; color: string; draw?: number; width?: number; pulses?: readonly number[]; pulseLen?: number; opacity?: number; dash?: string}> = ({pts, color, draw = 1, width = 6, pulses = [], pulseLen = 0.06, opacity = 1, dash}) => {
	if (opacity <= 0.001) return null;
	const d = (p: Pt[]) => p.map((q, i) => `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' ');
	return (
		<g opacity={opacity}>
			{draw > 0.001 ? <path d={d(subPath(pts, 0, clamp01(draw)))} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} opacity={0.85} /> : null}
			{pulses.filter(u => u >= 0 && u <= 1).map((u, i) => <g key={i}>
				<path d={d(subPath(pts, Math.max(0, u - pulseLen), u))} fill="none" stroke="#fff3c4" strokeWidth={width * 3.2} strokeLinecap="round" opacity={0.75} />
				<path d={d(subPath(pts, Math.max(0, u - pulseLen), u))} fill="none" stroke={color} strokeWidth={width * 1.8} strokeLinecap="round" />
			</g>)}
		</g>
	);
};
