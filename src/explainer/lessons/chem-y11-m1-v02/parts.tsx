// Drawing parts for Y11 Chem M1 V02. Reuses the M1 V01 parts (glyphs, particle views, lattices, rings, brackets) and
// the pilot's text and chip parts. New here: plain graph axes in dark ink, a live curve sampled from a model up to the
// current frame, rising bubbles, a coded liquid-level marker, a hotplate glow and a small three-box change-of-state strip.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, INK, Sx, clamp01, prog, vis} from '../chem-y11-m1-v01/parts';

export * from '../chem-y11-m1-v01/parts';

export type G = {x: number; y: number; w: number; h: number; x0: number; x1: number; y0: number; y1: number};
export const gx = (g: G, v: number) => g.x + ((v - g.x0) / (g.x1 - g.x0)) * g.w;
export const gy = (g: G, v: number) => g.y + g.h - ((v - g.y0) / (g.y1 - g.y0)) * g.h;
/** Axes with dark-ink labels. `brk` draws a broken-axis zigzag at the foot of the y axis. */
export const Axes: React.FC<{g: G; at?: number; out?: number; xLabel: string; yLabel: string; yTicks?: number[]; fy?: (v: number) => string; size?: number; brk?: boolean; labelAt?: number}> = ({g, at = -1000, out, xLabel, yLabel, yTicks = [], fy = v => `${v}`, size = 30, brk = false, labelAt = -1000}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={g.x - 26} y={g.y - 30} width={g.w + 56} height={g.h + 56} rx={14} fill="#fffdf8" opacity={0.8} />
			{yTicks.map(t => <line key={'g' + t} x1={g.x} x2={g.x + g.w} y1={gy(g, t)} y2={gy(g, t)} stroke="#e2d8c4" strokeWidth={2} />)}
			<path d={`M${g.x},${g.y - 16} L${g.x},${g.y + g.h} L${g.x + g.w + 16},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={4.5} strokeLinecap="round" />
			{brk ? <path d={`M${g.x - 12},${g.y + g.h - 30} l24,-8 M${g.x - 12},${g.y + g.h - 18} l24,-8`} stroke={INK} strokeWidth={3} /> : null}
			{yTicks.map(t => <g key={'y' + t}><line x1={g.x - 10} x2={g.x} y1={gy(g, t)} y2={gy(g, t)} stroke={INK} strokeWidth={2.5} /><Sx x={g.x - 16} y={gy(g, t) + size * 0.34} text={fy(t)} size={size} color={INK} anchor="end" weight={700} at={-1000} /></g>)}
			<Sx x={g.x + g.w} y={g.y + g.h + size + 14} text={xLabel} size={size + 2} color={INK} anchor="end" weight={700} at={labelAt} />
			<Sx x={g.x + 12} y={g.y - 4} text={yLabel} size={size + 2} color={INK} weight={700} at={labelAt} />
		</g>
	);
};
/** Live curve: y = fn(t) for model time t from t0 to the current frame (or to tEnd), x = model time. */
export const Curve: React.FC<{g: G; fn: (t: number) => number; t0: number; tEnd?: number; upto?: number; color: string; width?: number; o?: number; clip?: boolean}> = ({g, fn, t0, tEnd, upto, color, width = 6, o = 1, clip = true}) => {
	const f = useCurrentFrame();
	const t1 = Math.min(tEnd ?? 1e9, upto ?? f);
	if (t1 <= t0 || o <= 0.01) return null;
	const pts: string[] = [];
	const n = Math.max(2, Math.ceil(Math.abs(gx(g, t1) - gx(g, t0)) / 4));
	for (let i = 0; i <= n; i++) {
		const t = t0 + ((t1 - t0) * i) / n;
		const v = fn(t);
		pts.push(`${gx(g, t).toFixed(1)},${(clip ? Math.min(g.y + g.h, Math.max(g.y - 10, gy(g, v))) : gy(g, v)).toFixed(1)}`);
	}
	return <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" strokeLinecap="round" opacity={o} />;
};
/** Bubbles rising inside a box (x, y, w, h) while on; rate grows with `power` (0 to 1). */
export const Bubbles: React.FC<{x: number; y: number; w: number; h: number; on: number; seed?: number; n?: number}> = ({x, y, w, h, on, seed = 1, n = 14}) => {
	const f = useCurrentFrame();
	if (on <= 0.01) return null;
	return (
		<g opacity={on}>
			{Array.from({length: n}, (_, i) => {
				const ph = ((f * (1.6 + (i % 3) * 0.4) + i * 37 + seed * 11) % (h + 20)) / h;
				const bx = x + ((i * 61 + seed * 29) % 100) / 100 * w + Math.sin(f * 0.2 + i) * 4;
				const by = y + h - ph * h;
				const r = 3 + (i % 4) * 1.6 + ph * 3;
				return by > y ? <circle key={i} cx={bx} cy={by} r={r} fill="rgba(255,255,255,0.75)" stroke="rgba(70,110,140,0.85)" strokeWidth={1.8} /> : null;
			})}
		</g>
	);
};
/** Dashed liquid-level marker at y (coded), spanning x0..x1. */
export const Level: React.FC<{x0: number; x1: number; y: number; color: string; o?: number}> = ({x0, x1, y, color, o = 1}) => (
	<g opacity={o}>
		<line x1={x0} x2={x1} y1={y} y2={y} stroke={color} strokeWidth={4} strokeDasharray="10 7" />
		<path d={`M${x1 + 6},${y} l14,-9 l0,18 Z`} fill={color} />
	</g>
);
/** Hotplate indicator glow (coded). */
export const Glow: React.FC<{x: number; y: number; on: number}> = ({x, y, on}) => (
	<g>
		<circle cx={x} cy={y} r={9} fill={on > 0.5 ? '#ff6a2a' : '#5a5148'} stroke="#2a241e" strokeWidth={2} />
		{on > 0.01 ? <circle cx={x} cy={y} r={20} fill="#ff8a3a" opacity={0.35 * on} /> : null}
	</g>
);
/** Three-box strip: solid, liquid, gas; the middle box can take a slate cross and a direct arrow. */
export const StateStrip: React.FC<{x: number; y: number; s?: number; crossAt?: number; arrowAt?: number; at?: number}> = ({x, y, s = 1, crossAt, arrowAt, at = -1000}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const W = 190 * s, H = 74 * s, gap = 60 * s;
	const box = (i: number, t: string) => (
		<g key={t}>
			<rect x={x + i * (W + gap)} y={y} width={W} height={H} rx={12} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<Sx x={x + i * (W + gap) + W / 2} y={y + H / 2 + 14 * s} text={t} size={40 * s} color={INK} anchor="middle" weight={800} at={-1000} />
		</g>
	);
	const arrow = (i: number) => <path key={'a' + i} d={`M${x + i * (W + gap) + W + 8},${y + H / 2} l${gap - 20},0 m-12,-10 l12,10 l-12,10`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />;
	const cx = x + W + gap + W / 2, cy = y + H / 2;
	return (
		<g opacity={o}>
			{box(0, 'solid')}{arrow(0)}{box(1, 'liquid')}{arrow(1)}{box(2, 'gas')}
			{crossAt !== undefined && f >= crossAt ? <><DrawPath d={`M${cx - W * 0.42},${cy - H * 0.42} L${cx + W * 0.42},${cy + H * 0.42}`} at={crossAt} dur={10} color="#5a6470" width={7} /><DrawPath d={`M${cx + W * 0.42},${cy - H * 0.42} L${cx - W * 0.42},${cy + H * 0.42}`} at={crossAt + 5} dur={10} color="#5a6470" width={7} /></> : null}
			{arrowAt !== undefined && f >= arrowAt ? <DrawPath d={`M${x + W / 2},${y - 8} Q${cx},${y - 90 * s} ${x + 2 * (W + gap) + W / 2 - 10},${y - 10}`} at={arrowAt} dur={18} color="#24407a" width={5} /> : null}
			{arrowAt !== undefined ? <path d={`M${x + 2 * (W + gap) + W / 2 - 10},${y - 10} l-4,-20 m4,20 l-20,-6`} fill="none" stroke="#24407a" strokeWidth={5} strokeLinecap="round" opacity={prog(f, arrowAt + 16, 6)} /> : null}
		</g>
	);
};
export const fmtT = (v: number, d = 1) => `${v.toFixed(d)} °C`;
void clamp01;
