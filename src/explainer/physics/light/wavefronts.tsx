// Top-view wavefront kit for Module 7 (additive kit file, 25 November 2026; first used by phys-y12-m7-v04 to v06).
// Course-neutral. Every picture is worked out on the waves engine (src/explainer/sims/waves.ts), in screen pixels as
// the engine's units, so the shapes, brightness and readouts agree:
// - HuygensRow: dots on a wavefront, each a source of a growing wavelet, and the line touching the front of every
//   wavelet (the right-hand edge of their union), so an open front stays straight and a cut front curls at its ends.
// - ApertureWaves: straight crests arriving at a barrier with one opening (or a single edge); beyond it each crest is
//   the line at one distance from the opening, drawn with the strength of the summed field (`fieldAt`) of a row of
//   sources across the opening, so a narrow opening gives near semicircles and a wide one a straight middle with
//   faint curled ends. Optional hatching marks the geometric shadow.
// - TwoSlitWaves: crests (solid) and troughs (dashed) from two slits in two role colours, overlapping.
// - MovingSourceFronts: crests from a moving source (`wavefronts`), bunched ahead and stretched behind (Doppler).
import React from 'react';
import {INK} from '../../shared/tokens';
import {fieldAt, wavefronts} from '../../sims/waves';
import type {Source} from '../../sims/waves';

type Pt = [number, number];
type Box = {x: number; y: number; w: number; h: number};
const clamp01 = (u: number) => Math.max(0, Math.min(1, u));
const frac = (u: number) => u - Math.floor(u);

/** Sources spread evenly across an opening at x from y0 to y1. */
export const gapSources = (x: number, y0: number, y1: number, n: number): Source[] => Array.from({length: n}, (_, i) => ({x, y: y0 + ((y1 - y0) * (i + 0.5)) / n}));
/** Relative amplitude (0 to 1) of the summed field of `srcs` at a point (from two quarter-cycle samples). */
export const ampAt = (srcs: readonly Source[], lambda: number, px: number, py: number) => {
	const a = fieldAt(srcs, lambda, 1, px, py, 0), b = fieldAt(srcs, lambda, 1, px, py, 0.25);
	return Math.hypot(a, b) / Math.max(1, srcs.length);
};

/** A clipped group. */
const Clip: React.FC<{box: Box; children: React.ReactNode; id: string}> = ({box, children, id}) => (
	<g><defs><clipPath id={id}><rect x={box.x} y={box.y} width={box.w} height={box.h} /></clipPath></defs><g clipPath={`url(#${id})`}>{children}</g></g>
);

/** Dots at (x0, ys[i]) with wavelets of radius r; the touching line is the right edge of the union of the wavelets. */
export const HuygensRow: React.FC<{x0: number; ys: readonly number[]; r: number; color: string; dots?: number; wavelets?: number; envelope?: number; hi?: readonly number[]; hiColor?: string; dotR?: number; pulse?: number; width?: number}> = ({x0, ys, r, color, dots = 1, wavelets = 1, envelope = 0, hi = [], hiColor = INK, dotR = 9, pulse = 0, width = 5}) => {
	const env: Pt[] = [];
	if (envelope > 0.001 && r > 1 && ys.length) {
		const y0 = Math.min(...ys) - r, y1 = Math.max(...ys) + r, n = 160;
		for (let i = 0; i <= n; i++) {
			const y = y0 + ((y1 - y0) * i) / n;
			let best = -Infinity;
			for (const yi of ys) { const dy = y - yi; if (Math.abs(dy) <= r) best = Math.max(best, x0 + Math.sqrt(r * r - dy * dy)); }
			if (best > -Infinity) env.push([best, y]);
		}
	}
	return (
		<g>
			{wavelets > 0.001 && r > 1 ? ys.map((y, i) => <path key={i} d={`M${x0},${y - r} A${r},${r} 0 0,1 ${x0},${y + r}`} fill="none" stroke={hi.includes(i) ? hiColor : color} strokeWidth={hi.includes(i) ? 4 : 2.5} opacity={wavelets * (hi.includes(i) ? 1 : 0.8)} />) : null}
			{env.length > 1 ? <path d={env.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')} fill="none" stroke={color} strokeWidth={width + 1} opacity={envelope} strokeLinejoin="round" /> : null}
			{dots > 0.001 ? ys.map((y, i) => <circle key={i} cx={x0} cy={y} r={dotR * (1 + 0.35 * pulse)} fill={hi.includes(i) ? hiColor : color} opacity={dots} />) : null}
		</g>
	);
};

/** Points of the line at distance r beyond an opening from y0 to y1 at x = bx (the right half of a stadium). */
const stadium = (bx: number, y0: number, y1: number, r: number, n = 72): Pt[] => {
	const out: Pt[] = [];
	const arc = Math.PI * r / 2, line = y1 - y0, tot = 2 * arc + line;
	for (let i = 0; i <= n; i++) {
		const s = (tot * i) / n;
		if (s < arc) { const a = -Math.PI / 2 + s / r; out.push([bx + r * Math.cos(a), y0 + r * Math.sin(a)]); }
		else if (s < arc + line) out.push([bx + r, y0 + (s - arc)]);
		else { const a = (s - arc - line) / r; out.push([bx + r * Math.cos(a), y1 + r * Math.sin(a)]); }
	}
	return out;
};
/** A barrier at x = bx (thickness t) across the box, with openings [y0, y1]. */
export const Barrier: React.FC<{box: Box; bx: number; gaps: readonly (readonly [number, number])[]; t?: number; color?: string; opacity?: number}> = ({box, bx, gaps, t = 16, color = '#4a4643', opacity = 1}) => {
	const cuts = [...gaps].sort((a, b) => a[0] - b[0]);
	const segs: [number, number][] = [];
	let y = box.y;
	for (const g of cuts) { if (g[0] > y) segs.push([y, g[0]]); y = Math.max(y, g[1]); }
	if (y < box.y + box.h) segs.push([y, box.y + box.h]);
	return <g opacity={opacity}>{segs.map((s, i) => <rect key={i} x={bx - t / 2} y={s[0]} width={t} height={s[1] - s[0]} fill={color} />)}</g>;
};
/** Pale grey hatching over the geometric shadow behind a barrier (outside the straight-through band). */
export const ShadowHatch: React.FC<{box: Box; bx: number; band: readonly [number, number]; opacity?: number; color?: string}> = ({box, bx, band, opacity = 1, color = '#b9b2a6'}) => {
	if (opacity <= 0.001) return null;
	const id = `hatch-${Math.round(bx)}-${Math.round(band[0])}-${Math.round(band[1])}`;
	const regions = [[box.y, band[0]], [band[1], box.y + box.h]].filter(r => r[1] > r[0] + 1);
	return (
		<g opacity={opacity}>
			<defs><pattern id={id} width={22} height={22} patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1={0} y1={0} x2={0} y2={22} stroke={color} strokeWidth={5} /></pattern></defs>
			{regions.map((r, i) => <rect key={i} x={bx + 8} y={r[0]} width={box.x + box.w - bx - 8} height={r[1] - r[0]} fill={`url(#${id})`} />)}
		</g>
	);
};

/** Straight crests arriving from the left at a barrier with one opening [y0, y1] (y1 may run past the box for a single
 * edge); beyond it each crest is drawn with the strength of the summed field of a row of sources across the opening.
 * `phase` is in cycles (one crest passes the barrier per cycle). */
export const ApertureWaves: React.FC<{box: Box; bx: number; gap: readonly [number, number]; lambda: number; phase: number; color: string; maxR?: number; n?: number; incoming?: number; beyond?: number; width?: number; id?: string; shadow?: number}> = ({box, bx, gap, lambda, phase, color, maxR, n = 24, incoming = 1, beyond = 1, width = 5, id = 'aperture', shadow = 0}) => {
	const fr = frac(phase);
	const y0 = Math.max(gap[0], box.y - 2 * lambda), y1 = Math.min(gap[1], box.y + box.h + 2 * lambda);
	const srcs = gapSources(bx, y0, y1, n);
	const R = maxR ?? box.x + box.w - bx;
	const crests: React.ReactNode[] = [];
	if (beyond > 0.001) for (let k = 0; ; k++) {
		const r = (k + fr) * lambda;
		if (r > R) break;
		if (r < 3) continue;
		const pts = stadium(bx, y0, y1, r);
		const fade = 1 - 0.55 * clamp01(r / R);
		for (let i = 0; i + 1 < pts.length; i++) {
			const m: Pt = [(pts[i][0] + pts[i + 1][0]) / 2, (pts[i][1] + pts[i + 1][1]) / 2];
			const a = Math.pow(clamp01(ampAt(srcs, lambda, m[0], m[1]) * 1.15), 0.8) * fade * beyond;
			if (a < 0.04) continue;
			crests.push(<line key={`${k}-${i}`} x1={pts[i][0]} y1={pts[i][1]} x2={pts[i + 1][0]} y2={pts[i + 1][1]} stroke={color} strokeWidth={width} strokeLinecap="round" opacity={a} />);
		}
	}
	const inc: React.ReactNode[] = [];
	if (incoming > 0.001) for (let k = 1; ; k++) { const x = bx + (fr - k) * lambda; if (x < box.x) break; inc.push(<line key={k} x1={x} y1={box.y} x2={x} y2={box.y + box.h} stroke={color} strokeWidth={width} opacity={incoming} />); }
	return (
		<Clip box={box} id={id}>
			<ShadowHatch box={box} bx={bx} band={[gap[0], gap[1]]} opacity={shadow} />
			{inc}
			{crests}
		</Clip>
	);
};

/** Crests (solid) and troughs (dashed) spreading from two slits at (bx, ya) and (bx, yb) in two role colours. */
export const TwoSlitWaves: React.FC<{box: Box; bx: number; ya: number; yb: number; lambda: number; phase: number; colors: readonly [string, string]; incoming?: string; maxR?: number; troughs?: boolean; width?: number; id?: string; opacity?: number; jitter?: number}> = ({box, bx, ya, yb, lambda, phase, colors, incoming, maxR, troughs = true, width = 4, id = 'twoslit', opacity = 1, jitter = 0}) => {
	if (opacity <= 0.001) return null;
	const R = maxR ?? Math.hypot(box.w, box.h);
	const rings: React.ReactNode[] = [];
	[ya, yb].forEach((y, s) => {
		const fr = frac(phase + (s ? jitter : 0));
		for (let k = 0; ; k++) {
			for (const half of troughs ? [0, 0.5] : [0]) {
				const r = (k + fr + half) * lambda;
				if (r < 3 || r > R) continue;
				const o = 1 - 0.6 * clamp01(r / R);
				rings.push(<path key={`${s}-${k}-${half}`} d={`M${bx},${y - r} A${r},${r} 0 0,1 ${bx},${y + r}`} fill="none" stroke={colors[s]} strokeWidth={half ? width - 1.5 : width} strokeDasharray={half ? '7 9' : undefined} opacity={o * (half ? 0.7 : 1)} />);
			}
			if ((k + frac(phase)) * lambda > R) break;
		}
	});
	const inc: React.ReactNode[] = [];
	if (incoming) for (let k = 1; ; k++) { const x = bx + (frac(phase) - k) * lambda; if (x < box.x) break; inc.push(<line key={k} x1={x} y1={box.y} x2={x} y2={box.y + box.h} stroke={incoming} strokeWidth={width} />); }
	return <g opacity={opacity}><Clip box={box} id={id}>{inc}{rings}</Clip></g>;
};

/** Crests sent out one period apart by a source moving along x (engine `wavefronts`): circles centred where the source
 * was when each crest left. `pos(t)` gives the source position at time t (frames); `speed` px per frame. */
export const MovingSourceFronts: React.FC<{pos: (t: number) => Pt; t: number; speed: number; period: number; maxR: number; color: string | ((x: number, y: number, cx: number) => string); box?: Box; width?: number; id?: string; opacity?: number}> = ({pos, t, speed, period, maxR, color, box, width = 4, id = 'moving', opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const fronts = wavefronts({source: tt => pos(tt), speed, period, t, maxRadius: maxR});
	const now = pos(t);
	const rings = fronts.map((w, i) => {
		const c = typeof color === 'function' ? color(w.x, w.y, now[0]) : color;
		return <circle key={i} cx={w.x} cy={w.y} r={w.r} fill="none" stroke={c} strokeWidth={width} opacity={1 - 0.6 * clamp01(w.r / maxR)} />;
	});
	return <g opacity={opacity}>{box ? <Clip box={box} id={id}>{rings}</Clip> : rings}</g>;
};
