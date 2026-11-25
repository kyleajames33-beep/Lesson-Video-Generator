// Module 8 kit, part 1: the early Universe and cosmology (additive kit file, 25 November 2026; first used by
// phys-y12-m8-v01 and v02). Course-neutral: every label, number and colour of meaning comes from the lesson.
// Plates (visible boxes measured from the alpha channel, threshold 20, on 25 November 2026):
//   painted galaxy (1254 x 1254), painted horn antenna (1514 x 1039, no people), painted molecular cloud (1448 x 1086).
// - Anti: an antiparticle drawn as a hollow ring of its particle's colour with a label (p̄, e⁺).
// - WaveLine: a sinusoidal wave from x0 to x1 (wavelength and amplitude in px), drawn on from the left.
// - DotGrid: a square grid of dots whose spacing grows about a centre (uniform expansion), clipped to a box, with
//   optional small rings between the dots (neutral atoms).
// - logPos: screen position of a value on a log axis.
// - ThresholdGauge: vertical energy bars on a log scale against a dashed threshold line (a pair-making threshold).
// - LogTimeline: a horizontal log time axis with labelled event markers.
// - ZigZag: a photon path that zig-zags through points and straightens as `straight` runs from 0 to 1.
// - MassPie: a two-part pie (share 0 to 1) with labels.
// - BoxParticles: draws a particle-box engine run (src/explainer/sims/particle-box.ts) with a lesson renderer per
//   species, so antiparticles can be hollow and nuclei labelled.
// - Readout: a label and a live value (HTML).
import React from 'react';
import {FONT_DISPLAY, prog} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {boxFrame} from '../../sims/particle-box';
import type {BoxRun} from '../../sims/particle-box';
import type {LightSpec} from '../light/plates';

const P = (name: string) => `assets/physics/${name}.png`;
export const GALAXY: LightSpec = {src: P('phys-y11-galaxy-v1'), W: 1254, H: 1254, box: [96, 293, 1171, 982]};
export const HORN: LightSpec = {src: P('y12p-horn-antenna-v1'), W: 1514, H: 1039, box: [30, 26, 1488, 998]};
export const CLOUD: LightSpec = {src: P('y12p-molecular-cloud-v1'), W: 1448, H: 1086, box: [64, 123, 1369, 969]};
export const ATOM_PLATES = [GALAXY, HORN, CLOUD].map(s => s.src);
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});
const clamp01 = (u: number) => Math.max(0, Math.min(1, u));

/** An antiparticle: a hollow ring in its particle's colour, with its label inside. */
export const Anti: React.FC<{x: number; y: number; r?: number; color: string; text?: string; size?: number; opacity?: number}> = ({x, y, r = 26, color, text, size, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r - 2} fill={CARD} stroke={color} strokeWidth={5} />
		{text ? <text x={x} y={y + (size ?? r * 0.8) * 0.36} textAnchor="middle" style={T(size ?? r * 0.8, color)}>{text}</text> : null}
	</g>
));

/** A sinusoid from x0 to x1 about y; `lambda` and `amp` in px; `draw` (0 to 1) reveals it from the left. */
export const WaveLine: React.FC<{x0: number; x1: number; y: number; lambda: number; amp?: number; color: string; width?: number; phase?: number; draw?: number; opacity?: number; dash?: string}> = ({x0, x1, y, lambda, amp = 22, color, width = 5, phase = 0, draw = 1, opacity = 1, dash}) => {
	if (opacity <= 0.001 || draw <= 0.001) return null;
	const xe = x0 + (x1 - x0) * clamp01(draw), n = Math.max(8, Math.round((xe - x0) / 4));
	const d = Array.from({length: n + 1}, (_, i) => { const x = x0 + ((xe - x0) * i) / n; return `${i ? 'L' : 'M'}${x.toFixed(1)},${(y - amp * Math.sin((2 * Math.PI * (x - x0)) / lambda + phase)).toFixed(1)}`; }).join(' ');
	return <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" opacity={opacity} strokeDasharray={dash} />;
};

export type GridBox = {x: number; y: number; w: number; h: number};
/** Grid positions (dot i, j from -n to n) about (cx, cy) at spacing s. */
export const gridPt = (cx: number, cy: number, s: number, i: number, j: number): [number, number] => [cx + i * s, cy + j * s];
/** A square grid of ink dots at spacing `s` about (cx, cy), clipped to `box`; `hi` lists [i, j] dots drawn larger in `hiColor`; `atoms` adds small rings between dots; `links` draws thin lattice lines between neighbours. */
export const DotGrid: React.FC<{box: GridBox; cx: number; cy: number; s: number; n?: number; r?: number; color?: string; hi?: readonly (readonly [number, number])[]; hiColor?: string; atoms?: number; atomColor?: string; opacity?: number; frame?: boolean; links?: number}> = ({box, cx, cy, s, n = 9, r = 9, color = INK, hi = [], hiColor = INK, atoms = 0, atomColor = INK, opacity = 1, frame = true, links = 0}) => {
	const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
	if (opacity <= 0.001) return null;
	const dots: React.ReactNode[] = [];
	for (let i = -n; i <= n; i++) for (let j = -n; j <= n; j++) {
		const [x, y] = gridPt(cx, cy, s, i, j);
		if (x < box.x - 20 || x > box.x + box.w + 20 || y < box.y - 20 || y > box.y + box.h + 20) continue;
		const h = hi.some(q => q[0] === i && q[1] === j);
		if (links > 0.001) dots.unshift(<path key={`l${i}_${j}`} d={`M${x},${y} h${s} M${x},${y} v${s}`} stroke="#c9bfae" strokeWidth={2.5} opacity={links} />);
		dots.push(<circle key={`${i}_${j}`} cx={x} cy={y} r={h ? r * 1.7 : r} fill={h ? hiColor : color} />);
		if (atoms > 0.001) dots.push(<circle key={`a${i}_${j}`} cx={x + s * 0.5} cy={y + s * 0.5} r={Math.max(5, r * 0.75)} fill="none" stroke={atomColor} strokeWidth={2.5} opacity={atoms} />);
	}
	return (
		<g opacity={opacity}>
			<defs><clipPath id={`grid-${uid}`}><rect x={box.x} y={box.y} width={box.w} height={box.h} /></clipPath></defs>
			<g clipPath={`url(#grid-${uid})`}>{dots}</g>
			{frame ? <rect x={box.x} y={box.y} width={box.w} height={box.h} rx={12} fill="none" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} /> : null}
		</g>
	);
};

/** Position of value v on a log axis from 10^lo (at a) to 10^hi (at b). */
export const logPos = (v: number, lo: number, hi: number, a: number, b: number) => a + ((Math.log10(Math.max(v, 1e-300)) - lo) / (hi - lo)) * (b - a);

/** Vertical bars (photon energies) on a log scale from 10^lo to 10^hi between y0 (bottom) and y1 (top), against a dashed threshold. */
export const ThresholdGauge: React.FC<{x: number; w: number; y0: number; y1: number; lo: number; hi: number; values: readonly number[]; line: number; lineLabel?: string; color: string; lineColor: string; ring?: number; ticks?: readonly number[]; tickLabel?: (e: number) => string; size?: number; opacity?: number; extraLine?: {v: number; label: string}; axisLabel?: string}> = ({x, w, y0, y1, lo, hi, values, line, lineLabel, color, lineColor, ring = -1, ticks = [], tickLabel = e => `10^${e}`, size = 28, opacity = 1, extraLine, axisLabel}) => {
	if (opacity <= 0.001) return null;
	const Y = (v: number) => logPos(v, lo, hi, y0, y1);
	const n = values.length, gap = w / n, bw = gap * 0.62;
	const ly = Y(line);
	return (
		<g opacity={opacity}>
			<line x1={x} y1={y0} x2={x + w + 10} y2={y0} stroke={INK} strokeWidth={4} />
			<line x1={x} y1={y0} x2={x} y2={y1 - 10} stroke={INK} strokeWidth={4} />
			{ticks.map(e => <g key={e}><line x1={x - 10} y1={Y(10 ** e)} x2={x} y2={Y(10 ** e)} stroke={INK} strokeWidth={3} /><text x={x - 16} y={Y(10 ** e) + size * 0.35} textAnchor="end" style={T(size, INK, 700)}>{tickLabel(e)}</text></g>)}
			{values.map((v, i) => { const top = Math.max(y1, Y(v)); const above = v >= line; return <rect key={i} x={x + gap * i + (gap - bw) / 2} y={top} width={bw} height={Math.max(2, y0 - top)} rx={3} fill={color} opacity={above ? 0.95 : 0.55} />; })}
			{ring >= 0 && ring < n ? <circle cx={x + gap * ring + gap / 2} cy={Math.max(y1, Y(values[ring])) - 18} r={22} fill="none" stroke={color} strokeWidth={4} /> : null}
			<line x1={x} y1={ly} x2={x + w + 10} y2={ly} stroke={lineColor} strokeWidth={4} strokeDasharray="14 9" />
			{lineLabel ? <text x={x + w + 18} y={ly + size * 0.35} style={T(size, lineColor)}>{lineLabel}</text> : null}
			{extraLine ? <g><line x1={x} y1={Y(extraLine.v)} x2={x + w + 10} y2={Y(extraLine.v)} stroke={lineColor} strokeWidth={4} strokeDasharray="14 9" /><text x={x + w + 18} y={Y(extraLine.v) + size * 0.35} style={T(size, lineColor)}>{extraLine.label}</text></g> : null}
			{axisLabel ? <text x={x} y={y1 - 24} style={T(size, INK)}>{axisLabel}</text> : null}
		</g>
	);
};

/** A horizontal log time axis from 10^lo to 10^hi seconds between x0 and x1 at y, with ticks and labelled markers. */
export type TimeMarker = {t: number; label: string; sub?: string; color?: string; at?: number; up?: boolean; ring?: boolean};
export const LogTimeline: React.FC<{x0: number; x1: number; y: number; lo: number; hi: number; ticks?: readonly {t: number; label: string}[]; markers: readonly TimeMarker[]; f: number; size?: number; opacity?: number; title?: string; ringColor?: string}> = ({x0, x1, y, lo, hi, ticks = [], markers, f, size = 28, opacity = 1, title, ringColor = INK}) => {
	if (opacity <= 0.001) return null;
	const X = (t: number) => logPos(t, lo, hi, x0, x1);
	return (
		<g opacity={opacity}>
			<line x1={x0} y1={y} x2={x1 + 16} y2={y} stroke={INK} strokeWidth={4} />
			<path d={`M${x1 + 16},${y} l-16,-9 v18 z`} fill={INK} />
			{title ? <text x={x0} y={y - 2 * size - 70} style={T(size - 2, INK, 700)}>{title}</text> : null}
			{ticks.map(k => <g key={k.label}><line x1={X(k.t)} y1={y - 8} x2={X(k.t)} y2={y + 8} stroke={INK} strokeWidth={3} /><text x={X(k.t)} y={y + 14 + size} textAnchor="middle" style={T(size - 2, INK, 700)}>{k.label}</text></g>)}
			{markers.map((m, i) => {
				const o = prog(f, m.at ?? -30, 12);
				if (o <= 0.001) return null;
				const x = X(m.t), c = m.color ?? INK, dy = m.up === false ? 1 : -1, ty = y + dy * 50;
				return <g key={i} opacity={o}>
					<line x1={x} y1={y} x2={x} y2={ty - dy * -4} stroke={c} strokeWidth={4} />
					<circle cx={x} cy={y} r={10} fill={c} />
					{m.ring ? <circle cx={x} cy={y} r={24} fill="none" stroke={ringColor} strokeWidth={4} /> : null}
					<text x={x} y={dy < 0 ? ty - 12 - (m.sub ? size : 0) : ty + size + 6} textAnchor="middle" style={T(size, c)}>{m.label}</text>
					{m.sub ? <text x={x} y={dy < 0 ? ty - 10 : ty + 2 * size + 8} textAnchor="middle" style={T(size - 4, c, 700)}>{m.sub}</text> : null}
				</g>;
			})}
		</g>
	);
};

/** A photon path through `pts` that straightens towards the line from first to last point as `straight` runs 0 to 1; `draw` reveals it. */
export const ZigZag: React.FC<{pts: readonly (readonly [number, number])[]; straight?: number; draw?: number; color: string; width?: number; opacity?: number; head?: boolean}> = ({pts, straight = 0, draw = 1, color, width = 5, opacity = 1, head = true}) => {
	if (opacity <= 0.001 || pts.length < 2) return null;
	const a = pts[0], b = pts[pts.length - 1], s = clamp01(straight);
	const q = pts.map((p, i) => { const u = i / (pts.length - 1); const lx = a[0] + (b[0] - a[0]) * u, ly = a[1] + (b[1] - a[1]) * u; return [p[0] + (lx - p[0]) * s, p[1] + (ly - p[1]) * s] as [number, number]; });
	const L = q.slice(1).reduce((t, p, i) => t + Math.hypot(p[0] - q[i][0], p[1] - q[i][1]), 0);
	const d = q.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	const e = q[q.length - 1], e0 = q[q.length - 2], ang = Math.atan2(e[1] - e0[1], e[0] - e0[0]);
	return (
		<g opacity={opacity}>
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" strokeLinecap="round" strokeDasharray={L} strokeDashoffset={L * (1 - clamp01(draw))} />
			{head && draw > 0.98 ? <path d={`M${e[0]},${e[1]} l${-20 * Math.cos(ang - 0.45)},${-20 * Math.sin(ang - 0.45)} M${e[0]},${e[1]} l${-20 * Math.cos(ang + 0.45)},${-20 * Math.sin(ang + 0.45)}`} stroke={color} strokeWidth={width} strokeLinecap="round" /> : null}
		</g>
	);
};

/** A two-part pie: `share` (0 to 1) of the disc in colour a from twelve o'clock, the rest in colour b; `fill` reveals it. */
export const MassPie: React.FC<{cx: number; cy: number; r: number; share: number; a: string; b: string; fill?: number; opacity?: number}> = ({cx, cy, r, share, a, b, fill = 1, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const arc = (u0: number, u1: number, c: string) => {
		if (u1 - u0 <= 0.0005) return null;
		const p = (u: number) => [cx + r * Math.sin(2 * Math.PI * u), cy - r * Math.cos(2 * Math.PI * u)];
		const [x0, y0] = p(u0), [x1, y1] = p(u1);
		return <path d={`M${cx},${cy} L${x0},${y0} A${r},${r} 0 ${u1 - u0 > 0.5 ? 1 : 0} 1 ${x1},${y1} Z`} fill={c} stroke={CARD} strokeWidth={3} />;
	};
	const F = clamp01(fill);
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill={CARD} stroke={INK} strokeWidth={3} />
			{arc(0, Math.min(share, F), a)}
			{arc(share, Math.max(share, F), b)}
		</g>
	);
};

/** Draws a particle-box run at (x, y) with a renderer per species id; `clock` maps scene frames to run frames. */
export const BoxParticles: React.FC<{run: BoxRun; f: number; x: number; y: number; at?: number; rate?: number; draw: Record<string, (px: number, py: number, key: number) => React.ReactNode>; opacity?: number}> = ({run, f, x, y, at = 0, rate = 1, draw, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const sf = boxFrame(run, (f - at) * rate), base = sf * run.slots, sp = run.config.species;
	const out: React.ReactNode[] = [];
	for (let i = 0; i < run.slots; i++) {
		const s = run.sp[base + i];
		if (s < 0) continue;
		const fn = draw[sp[s].id];
		if (fn) out.push(fn(x + run.x[base + i], y + run.y[base + i], i));
	}
	return <g opacity={opacity}>{out}</g>;
};

/** A label above a live value (HTML), for readouts at about 52 px. */
export const Readout: React.FC<{x: number; y: number; label: React.ReactNode; value: React.ReactNode; color: string; size?: number; opacity?: number; w?: number}> = ({x, y, label, value, color, size = 52, opacity = 1, w}) => (opacity <= 0.001 ? null : (
	<div style={{position: 'absolute', left: x, top: y, width: w, opacity, background: CARD, border: `3px solid ${color}`, borderRadius: 14, padding: '4px 16px 8px', fontFamily: FONT_DISPLAY}}>
		<div style={{fontWeight: 800, fontSize: 28, color, lineHeight: 1.1}}>{label}</div>
		<div style={{fontWeight: 800, fontSize: size, color: INK, lineHeight: 1.1, whiteSpace: 'nowrap'}}>{value}</div>
	</div>
));
