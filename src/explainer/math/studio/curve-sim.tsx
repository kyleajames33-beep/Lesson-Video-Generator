// CurveSimulator: one timeline drives the curve y = k e^(ax + b), a point riding it, its tangent, the
// tangent triangle and the live readouts, so none of them can disagree.
//
// State: a (magnitude, > 0), b, k, u and flip.
//   u is the point's position on the base curve, measured as the power: u = ax + b. Keying the point by
//   u means a squash (a changing) keeps the point at the same height, as the squash itself does.
//   flip animates a reflection in the y-axis: +1 normal, -1 mirrored (effective a = flip × a). The
//   curve folds through the y-axis instead of sweeping a through the excluded value 0.
// Screen geometry: x = flip (u − b) / a, y = k e^u. Gradient = (effective a) × height.
import React, {useId} from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {graphTransform} from '../graphs';
import type {Range} from '../graphs';
import {CARD, kf, fmtNum, niceNum, vis} from './primitives';
import {MATH_GRADIENT, MATH_INNER} from './roles';
import {LiveReadoutBoard, ReadoutRow} from './readouts';

export type SimParams = {a: number; b: number; k: number; u: number; flip: number};
export type SimKey = {frame: number} & Partial<SimParams>;
const DEFAULTS: SimParams = {a: 1, b: 0, k: 1, u: 0, flip: 1};
const CHANNELS = ['a', 'b', 'k', 'u', 'flip'] as const;

/** Evaluate every channel at a frame. Each channel eases between the keys that set it, and holds otherwise. */
export const simAt = (timeline: readonly SimKey[], frame: number): SimParams => {
	const out = {...DEFAULTS};
	for (const c of CHANNELS) {
		const pts = timeline.filter(k => k[c] !== undefined).map(k => [k.frame, k[c] as number] as const);
		if (pts.length) out[c] = kf(frame, pts);
	}
	if (!(out.a > 0)) throw new RangeError('CurveSimulator: a is a magnitude and must stay above 0; use flip for the sign');
	return out;
};
export const simHeight = (p: SimParams) => p.k * Math.exp(p.u);
export const simX = (p: SimParams) => (p.flip * (p.u - p.b)) / p.a;
/** Effective a, swinging smoothly through the flip (used for readouts during the fold). */
export const simRatio = (p: SimParams) => p.flip * p.a;
export const simGradient = (p: SimParams) => simRatio(p) * simHeight(p);
/** Power u that puts the point at screen x for these parameters (helper for authoring keys). */
export const uAt = (x: number, a: number, b = 0) => a * x + b;

export type SimGeometry = {
	p: SimParams;
	/** Frame-space point on the curve. */
	pt: [number, number];
	toFrame: (x: number, y: number) => [number, number];
	tri?: {start: [number, number]; corner: [number, number]; end: [number, number]};
};

export type CurveSimulatorProps = {
	x: number; y: number; width?: number; height?: number;
	window: {x: Range; y: Range};
	timeline: readonly SimKey[];
	/** Curve writes on from the left. */
	draw?: {at: number; dur?: number};
	color?: string | ((p: SimParams) => string);
	/** HTML label placed near the curve's upper end (role-coloured equation). */
	label?: (p: SimParams) => React.ReactNode;
	labelAt?: number;
	ghost?: {a?: number; b?: number; k?: number; flip?: number; at: number; out?: number};
	point?: {at: number; out?: number};
	tangent?: {at: number; out?: number; halfLength?: number};
	triangle?: {runU: number; at: number; out?: number; dim?: [number, number]; runLabel?: (run: number) => string; riseLabel?: (rise: number) => string};
	dropLine?: {at: number; out?: number};
	xLabel?: string; yLabel?: string;
	xTicks?: number[]; yTicks?: number[];
	/** Readout board built from the same state. */
	readout?: {x: number; y: number; width?: number; at?: number; out?: number; title?: string; inline?: boolean; rows: (Partial<ReadoutRow> & {kind: 'height' | 'gradient' | 'ratio'})[]};
	/** Extra frame-space layer (hand tags, results) that can use the live geometry. */
	overlay?: (g: SimGeometry) => React.ReactNode;
	at?: number; out?: number;
};

const TXT = (size: number, color = INK_SOFT, weight = 700): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, fill: color} as React.CSSProperties);

export const CurveSimulator: React.FC<CurveSimulatorProps> = props => {
	const {x, y, width = 1100, height = 760, window: win, timeline, draw, color = INK, label, labelAt, ghost, point, tangent, triangle, dropLine, xLabel = 'x', yLabel = 'y', readout, overlay, at = 0, out} = props;
	const f = useCurrentFrame();
	const id = `sim-${useId().replace(/:/g, '')}`;
	const p = simAt(timeline, f);
	const t = graphTransform({x: win.x, y: win.y, width, height});
	const b = t.box;
	const col = typeof color === 'function' ? color(p) : color;
	const o = vis(f, at, out, 14);
	if (o <= 0.001 && !readout) return null;

	// Curve path for given params, sampled over screen x (folded curves are steep near flip = 0).
	const curvePath = (q: {a: number; b: number; k: number; flip: number}) => {
		if (Math.abs(q.flip) < 0.03) return '';
		const n = 260;
		let d = '';
		for (let i = 0; i <= n; i++) {
			const X = win.x[0] + ((win.x[1] - win.x[0]) * i) / n;
			const Y = Math.min(win.y[1] * 4 + 10, q.k * Math.exp(q.b + (q.a * X) / q.flip));
			const s = t.point(X, Y);
			d += `${i ? 'L' : 'M'}${s.x.toFixed(2)},${s.y.toFixed(2)} `;
		}
		return d;
	};
	const drawP = draw ? prog(f, draw.at, draw.dur ?? 36) : 1;
	const h = simHeight(p), X0 = simX(p);
	const P = t.point(X0, h);
	const absFlip = Math.abs(p.flip);
	const geomVis = Math.max(0, Math.min(1, (absFlip - 0.9) / 0.08));
	const geoSlope = (p.a * h) / (p.flip === 0 ? 1e-6 : p.flip);
	const toFrame = (mx: number, my: number): [number, number] => {const s = t.point(mx, my); return [x + s.x, y + s.y];};

	// Tangent triangle: run along x of runU / a (direction follows flip), rise = height × runU.
	let tri: SimGeometry['tri'];
	if (triangle) {
		const run = (Math.sign(p.flip) * triangle.runU) / p.a;
		tri = {start: [X0, h], corner: [X0 + run, h], end: [X0 + run, h + h * triangle.runU]};
	}
	const geo: SimGeometry = {p, pt: [x + P.x, y + P.y], toFrame, tri: tri ? {start: toFrame(...tri.start), corner: toFrame(...tri.corner), end: toFrame(...tri.end)} : undefined};

	// Tangent segment of fixed screen length through P.
	const half = tangent?.halfLength ?? 250;
	const dx = t.sx, dy = -geoSlope * t.sy, len = Math.hypot(dx, dy) || 1;
	const tx = (dx / len) * half, ty = (dy / len) * half;

	const xt = props.xTicks ?? range(Math.ceil(win.x[0]), Math.floor(win.x[1]));
	const yt = props.yTicks ?? range(Math.ceil(win.y[0]), Math.floor(win.y[1])).filter(v => v % 2 === 0);
	const O = t.point(Math.max(win.x[0], Math.min(win.x[1], 0)), Math.max(win.y[0], Math.min(win.y[1], 0)));

	const labelPos = (() => {
		if (!label) return null;
		const yT = win.y[1] * 0.82;
		const uT = Math.log(yT / p.k);
		const XT = Math.abs(p.flip) < 0.03 ? 0 : (p.flip * (uT - p.b)) / p.a;
		const s = t.point(Math.max(win.x[0], Math.min(win.x[1], XT)), yT);
		return {left: x + s.x + (p.flip >= 0 ? 26 : -26), top: y + s.y - 34, right: p.flip < 0};
	})();

	const triO = triangle ? vis(f, triangle.at, triangle.out) * geomVis * (triangle.dim ? 1 - 0.65 * vis(f, triangle.dim[0], triangle.dim[1]) : 1) : 0;

	return (
		<>
			<div style={{position: 'absolute', left: x, top: y, width, height, opacity: o}}>
				<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{overflow: 'visible'}}>
					<defs>
						<clipPath id={id}><rect x={b.left} y={b.top} width={b.width} height={b.height} /></clipPath>
						<clipPath id={`${id}-d`}><rect x={b.left} y={b.top - 10} width={b.width * drawP} height={b.height + 20} /></clipPath>
					</defs>
					{/* grid, axes and ticks */}
					{xt.map(v => {const s = t.point(v, 0); return <g key={'x' + v}><line x1={s.x} x2={s.x} y1={b.top} y2={b.top + b.height} stroke="#e4dccd" strokeWidth={2} /><text x={s.x} y={b.top + b.height + 40} textAnchor="middle" style={TXT(30)}>{niceNum(v)}</text></g>;})}
					{yt.map(v => {const s = t.point(0, v); return <g key={'y' + v}><line x1={b.left} x2={b.left + b.width} y1={s.y} y2={s.y} stroke="#e4dccd" strokeWidth={2} /><text x={b.left - 16} y={s.y + 10} textAnchor="end" style={TXT(30)}>{niceNum(v)}</text></g>;})}
					<path d={`M${b.left},${O.y} H${b.left + b.width} M${O.x},${b.top} V${b.top + b.height}`} stroke={INK} strokeWidth={3.5} fill="none" strokeLinecap="round" />
					<text x={b.left + b.width} y={b.top + b.height + 82} textAnchor="end" style={TXT(30, INK, 700)}>{xLabel}</text>
					<text x={b.left} y={b.top - 16} textAnchor="start" style={TXT(30, INK, 700)}>{yLabel}</text>
					<g clipPath={`url(#${id})`}>
						{ghost ? <path d={curvePath({a: ghost.a ?? 1, b: ghost.b ?? 0, k: ghost.k ?? 1, flip: ghost.flip ?? 1})} stroke={MATH_INNER} strokeWidth={4} strokeDasharray="12 10" fill="none" opacity={0.75 * vis(f, ghost.at, ghost.out)} /> : null}
						<g clipPath={`url(#${id}-d)`}><path d={curvePath(p)} stroke={col} strokeWidth={7} fill="none" strokeLinejoin="round" strokeLinecap="round" /></g>
						{dropLine ? <path d={`M${P.x},${P.y} V${O.y}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" opacity={vis(f, dropLine.at, dropLine.out) * geomVis} /> : null}
						{triangle && tri ? (() => {
							const a0 = t.point(...tri.start), c0 = t.point(...tri.corner), e0 = t.point(...tri.end);
							return <g opacity={triO}>
								<path d={`M${a0.x},${a0.y} H${c0.x} V${e0.y}`} fill="none" stroke={MATH_GRADIENT} strokeWidth={4.5} strokeDasharray="12 8" strokeLinecap="round" />
							</g>;
						})() : null}
						{tangent ? <line x1={P.x - tx} y1={P.y - ty} x2={P.x + tx} y2={P.y + ty} stroke={MATH_GRADIENT} strokeWidth={6} strokeLinecap="round" opacity={vis(f, tangent.at, tangent.out) * geomVis} /> : null}
					</g>
					{triangle && tri ? (() => {
						const a0 = t.point(...tri.start), c0 = t.point(...tri.corner), e0 = t.point(...tri.end);
						const run = tri.corner[0] - tri.start[0], rise = tri.end[1] - tri.corner[1];
						const runText = triangle.runLabel ? triangle.runLabel(Math.abs(run)) : `run ${niceNum(Math.abs(run))}`;
						const riseText = triangle.riseLabel ? triangle.riseLabel(rise) : `rise ${fmtNum(rise)}`;
						const right = run >= 0;
						return <g opacity={triO}>
							<text x={(a0.x + c0.x) / 2} y={a0.y + 40} textAnchor="middle" style={TXT(32, MATH_GRADIENT, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{runText}</text>
							<text x={c0.x + (right ? 14 : -14)} y={(c0.y + e0.y) / 2 + 11} textAnchor={right ? 'start' : 'end'} style={TXT(32, MATH_GRADIENT, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{riseText}</text>
						</g>;
					})() : null}
					{point ? <circle cx={P.x} cy={P.y} r={14 * prog(f, point.at, 10)} fill={MATH_GRADIENT} stroke={CARD} strokeWidth={5} opacity={vis(f, point.at, point.out) * (0.3 + 0.7 * geomVis)} /> : null}
				</svg>
			</div>
			{label && labelPos ? (
				<div style={{position: 'absolute', left: labelPos.left, top: labelPos.top, transform: labelPos.right ? 'translateX(-100%)' : undefined, opacity: o * vis(f, labelAt ?? at), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: col, whiteSpace: 'pre', textShadow: `0 0 6px ${CARD}, 0 0 12px ${CARD}`}}>{label(p)}</div>
			) : null}
			{readout ? (
				<LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width} at={readout.at ?? at} out={readout.out} title={readout.title} inline={readout.inline} rows={readout.rows.map(r => ({
					...r,
					label: r.label ?? (r.kind === 'height' ? 'height y' : r.kind === 'gradient' ? 'gradient' : 'gradient ÷ height'),
					role: r.role ?? (r.kind === 'height' ? 'height' : r.kind === 'gradient' ? 'gradient' : 'a'),
					value: r.kind === 'height' ? h : r.kind === 'gradient' ? simGradient(p) : simRatio(p),
					// While the curve folds through the y-axis the signed values are in transit: dim them so a
					// passing 0.00 never reads as a = 0.
					dim: r.kind === 'height' ? r.dim : Math.max(r.dim ?? 0, 1 - geomVis),
				}))} />
			) : null}
			{overlay ? <div style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>{overlay(geo)}</div> : null}
		</>
	);
};
const range = (a: number, b: number) => Array.from({length: Math.max(0, b - a + 1)}, (_, i) => a + i);
