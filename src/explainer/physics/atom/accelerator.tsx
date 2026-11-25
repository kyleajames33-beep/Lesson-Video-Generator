// Module 8 kit, part 13: accelerators and detectors (additive kit file, 26 November 2026; first used by phys-y12-m8-v22).
// Course-neutral: every label, number and colour of meaning comes from the lesson.
// - AccRing: a top-view accelerator ring of radius r with one accelerating gap (glow 0 to 1) at the bottom and bending
//   magnet segments round the rest; `dots` places beam particles by angle (turns, 0 = the gap, anticlockwise positive).
// - ringPt: the screen point at a given angle on a ring.
// - DriftTubes: a straight row of drift tubes (lengths grow along the row) with field arrows in the gaps that point
//   forwards or backwards; tubeGaps gives the gap centres so a lesson can time a particle through them.
// - DetectorSection: a layered cross-section (rings from the beam outwards), each layer revealed by its own opacity.
// - BumpHist: a schematic histogram, a falling background with an optional bump, revealed left to right.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';

const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

export const ringPt = (cx: number, cy: number, r: number, turns: number): [number, number] => [cx + r * Math.sin(2 * Math.PI * turns), cy + r * Math.cos(2 * Math.PI * turns)];
export type RingDot = {turns: number; color: string; r?: number; label?: string};
/** A ring with a gap at the bottom (turns 0) and `segments` magnet blocks; `magnets` and `glow` light them. */
export const AccRing: React.FC<{cx: number; cy: number; r: number; segments?: number; glow?: number; magnets?: number; magnetColor?: string; gapColor?: string; dots?: readonly RingDot[]; beamWidth?: number; opacity?: number; squeeze?: number}> = ({cx, cy, r, segments = 8, glow = 0, magnets = 1, magnetColor = '#1f3a68', gapColor = '#d18f1f', dots = [], beamWidth = 6, opacity = 1, squeeze = 0}) => {
	if (opacity <= 0.001) return null;
	const segs = Array.from({length: segments}, (_, i) => (i + 0.5) / segments).filter(t => Math.abs(t - 0) > 0.06 && Math.abs(t - 1) > 0.06);
	const [gx, gy] = ringPt(cx, cy, r, 0);
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth={beamWidth} opacity={0.75} />
			{segs.map((t, i) => {
				const [x, y] = ringPt(cx, cy, r, t), deg = -t * 360;
				return <g key={i} transform={`translate(${x},${y}) rotate(${deg})`}><rect x={-34} y={-20} width={68} height={40} rx={8} fill={magnetColor} opacity={0.35 + 0.65 * magnets} stroke={INK} strokeWidth={2} /></g>;
			})}
			{squeeze > 0.001 ? (() => { const [x, y] = ringPt(cx, cy, r, 0.5); return <g transform={`translate(${x},${y})`}><rect x={-18} y={-30} width={36} height={60} rx={6} fill="#7d62b3" stroke={INK} strokeWidth={2} opacity={squeeze} /></g>; })() : null}
			<g transform={`translate(${gx},${gy})`}>
				{glow > 0.01 ? <circle r={44} fill={gapColor} opacity={0.3 * glow} /> : null}
				<rect x={-10} y={-28} width={8} height={56} fill={gapColor} stroke={INK} strokeWidth={2} />
				<rect x={2} y={-28} width={8} height={56} fill={gapColor} stroke={INK} strokeWidth={2} />
			</g>
			{dots.map((d, i) => { const [x, y] = ringPt(cx, cy, r, d.turns); return <g key={i}><circle cx={x} cy={y} r={d.r ?? 14} fill={d.color} stroke="#fffdf8" strokeWidth={3} />{d.label ? <text x={x} y={y - 24} textAnchor="middle" style={T(26, d.color)}>{d.label}</text> : null}</g>; })}
		</g>
	);
};

/** Gap centres (x) of a drift-tube row from x0 with tube lengths growing by `grow` each time and gaps of `gap` px. */
export const tubeGaps = (x0: number, n: number, len0: number, grow: number, gap: number) => {
	const out: {x0: number; x1: number; gx: number}[] = [];
	let x = x0;
	for (let i = 0; i < n; i++) { const len = len0 + i * grow; out.push({x0: x, x1: x + len, gx: x + len + gap / 2}); x += len + gap; }
	return out;
};
/** The tubes (from tubeGaps) at height y, tube height h; `forward(i)` says whether gap i's field arrow points forwards. */
export const DriftTubes: React.FC<{tubes: ReturnType<typeof tubeGaps>; y: number; h?: number; forward: (i: number) => boolean; arrowColor?: string; hi?: number; opacity?: number}> = ({tubes, y, h = 70, forward, arrowColor = '#d18f1f', hi = 0, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		{tubes.map((t, i) => <rect key={i} x={t.x0} y={y - h / 2} width={t.x1 - t.x0} height={h} rx={10} fill="#d9d4ca" stroke={INK} strokeWidth={3} />)}
		{tubes.slice(0, -1).map((t, i) => {
			const fw = forward(i), x = t.gx, d = fw ? 1 : -1;
			return <g key={i}>
				{hi > 0.01 ? <rect x={x - 22} y={y - h / 2 - 8} width={44} height={h + 16} rx={8} fill={arrowColor} opacity={0.25 * hi} /> : null}
				<line x1={x - 14 * d} y1={y} x2={x + 10 * d} y2={y} stroke={arrowColor} strokeWidth={5} strokeDasharray={fw ? undefined : '5 4'} />
				<path d={`M${x + 16 * d},${y} L${x + 4 * d},${y - 9} L${x + 4 * d},${y + 9} Z`} fill={arrowColor} />
			</g>;
		})}
	</g>
));

export type Layer = {r0: number; r1: number; fill: string; o: number};
/** Concentric layers about (cx, cy); a beam-pipe dot at the centre. */
export const DetectorSection: React.FC<{cx: number; cy: number; layers: readonly Layer[]; opacity?: number}> = ({cx, cy, layers, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		{layers.map((l, i) => l.o <= 0.001 ? null : <path key={i} d={`M${cx - l.r1},${cy} a${l.r1},${l.r1} 0 1,0 ${2 * l.r1},0 a${l.r1},${l.r1} 0 1,0 ${-2 * l.r1},0 M${cx - l.r0},${cy} a${l.r0},${l.r0} 0 1,1 ${2 * l.r0},0 a${l.r0},${l.r0} 0 1,1 ${-2 * l.r0},0 Z`} fill={l.fill} fillRule="evenodd" stroke={INK} strokeWidth={2.5} opacity={clamp01(l.o)} />)}
		<circle cx={cx} cy={cy} r={8} fill={INK} />
	</g>
));

/** A schematic histogram: `bins` heights (fractions of h), drawn as bars revealed left to right. */
export const BumpHist: React.FC<{x: number; y: number; w: number; h: number; bins: readonly number[]; color: string; reveal?: number; hiFrom?: number; hiTo?: number; hiColor?: string; opacity?: number}> = ({x, y, w, h, bins, color, reveal = 1, hiFrom = -1, hiTo = -1, hiColor = '#c9a227', opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		{bins.map((v, i) => {
			const g = clamp01(reveal * bins.length - i);
			if (g <= 0.001) return null;
			const bw = w / bins.length, hh = v * h;
			return <rect key={i} x={x + i * bw + 1} y={y + h - hh} width={bw - 2} height={hh} fill={i >= hiFrom && i <= hiTo ? hiColor : color} opacity={g} />;
		})}
	</g>
));
