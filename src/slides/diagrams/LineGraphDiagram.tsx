// LineGraphDiagram — flexible coded line/curve graph for time-course and
// titration-style visuals, in the diorama family.
//
// The plot sits on a painted board (lit top-left, soil lip underneath). Each
// curve draws itself left→right behind a glossy marble "pen", starting when
// the card is on screen and, where the narration names a series, when it is
// named. Optional vertical markers (e.g. equivalence point) and horizontal
// reference lines fade in once the curves are drawn. In the hold the pens
// rest at the ends of their curves and breathe, and a single marker pulses.
//
// Points are normalized 0..1 inside the plot area: (0,0)=bottom-left,
// (1,1)=top-right. The author supplies a handful of control points; a
// Catmull-Rom pass smooths them so curves read cleanly.
//
// Canonical uses: rate-vs-time at equilibrium (forward falls / reverse rises /
// plateau), concentration-vs-time, titration pH curves, conductometric V-curves.

import {interpolate, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {DIO, idlePulse} from './diorama';
import {idHash, shade} from './kinds/restyle-generic/paint';
import {buildStart, itemEntryFrames, sceneTimingFor} from './kinds/restyle-generic/sceneSync';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export type LineGraphSeries = {
	label: string;
	/** TOK key (chem1/chem2/bio/math/amber/inkDim…) or a raw hex. */
	color: string;
	/** Normalized control points, 0..1 each axis. */
	points: [number, number][];
	dashed?: boolean;
};

export type LineGraphProps = {
	xLabel: string;
	yLabel: string;
	series: LineGraphSeries[];
	/** Vertical dashed reference lines (e.g. equivalence point). */
	markers?: {x: number; label: string}[];
	/** Horizontal dashed reference lines (e.g. "rates equal"). */
	hLines?: {y: number; label?: string}[];
	delay?: number;
};

const COLORS: Record<string, string> = {
	chem1: TOK.chem1, chem2: TOK.chem2, amber: TOK.amber, amberDim: TOK.amberDim,
	bio: TOK.bio, phys: TOK.phys, math: TOK.math, ink: TOK.ink, inkDim: TOK.inkDim, inkMute: TOK.inkMute,
};
const col = (c: string) => COLORS[c] ?? c;

// Plot box X bounds + bottom are fixed; the top (Y0) is computed from the number
// of legend rows so long multi-series legends never collide with the plot.
const X0 = 92, X1 = 694, Y1 = 396;
const PW = X1 - X0;
const sx = (nx: number) => X0 + nx * PW;

// Catmull-Rom sampling of control points → dense points (normalized).
const smooth = (pts: [number, number][], per = 20): [number, number][] => {
	if (pts.length < 3) return pts;
	const out: [number, number][] = [];
	const P = (i: number) => pts[Math.max(0, Math.min(pts.length - 1, i))];
	for (let i = 0; i < pts.length - 1; i++) {
		const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
		for (let j = 0; j < per; j++) {
			const t = j / per, t2 = t * t, t3 = t2 * t;
			const x = 0.5 * (2 * p1[0] + (-p0[0] + p2[0]) * t + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3);
			const y = 0.5 * (2 * p1[1] + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3);
			out.push([x, y]);
		}
	}
	out.push(pts[pts.length - 1]);
	return out;
};

const toPath = (svgPts: [number, number][]) =>
	svgPts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');

const pathLen = (svgPts: [number, number][]) => {
	let L = 0;
	for (let i = 1; i < svgPts.length; i++) {
		L += Math.hypot(svgPts[i][0] - svgPts[i - 1][0], svgPts[i][1] - svgPts[i - 1][1]);
	}
	return L;
};


/** Point at a fraction (0..1) of the way along a polyline, by length. */
const pointAt = (svgPts: [number, number][], frac: number): [number, number] => {
	const total = pathLen(svgPts);
	let target = Math.max(0, Math.min(1, frac)) * total;
	for (let i = 1; i < svgPts.length; i++) {
		const seg = Math.hypot(svgPts[i][0] - svgPts[i - 1][0], svgPts[i][1] - svgPts[i - 1][1]);
		if (target <= seg && seg > 0) {
			const t = target / seg;
			return [svgPts[i - 1][0] + (svgPts[i][0] - svgPts[i - 1][0]) * t, svgPts[i - 1][1] + (svgPts[i][1] - svgPts[i - 1][1]) * t];
		}
		target -= seg;
	}
	return svgPts[svgPts.length - 1];
};

export const LineGraphDiagram = ({xLabel, yLabel, series, markers = [], hLines = [], delay}: LineGraphProps) => {
	const frame = useCurrentFrame();
	const ID = `lg-${idHash(xLabel + yLabel + series.map((s) => s.label).join('|'))}`;

	// Start when the card is on screen (the legacy graph drew from frame 0,
	// behind the still-hidden card); each series waits for its narration.
	const timing = sceneTimingFor('lineGraph', [xLabel, yLabel, series]);
	const start = buildStart(delay, timing);
	const drawSpan = 60;
	const seriesAt = itemEntryFrames(
		series.map((s) => s.label),
		{timing, start: start + 12, stagger: 18},
	);
	// Curves keep their authored order (the legend reads in that order too).
	for (let i = 1; i < seriesAt.length; i++) seriesAt[i] = Math.max(seriesAt[i], seriesAt[i - 1] + 18);
	const axisOpacity = interpolate(frame, [start, start + 12], [0, 1], clampOpts);
	const refStart = Math.max(...seriesAt) + drawSpan - 6;
	const refOpacity = interpolate(frame, [refStart, refStart + 14], [0, 1], clampOpts);
	const hold = interpolate(frame, [refStart + 20, refStart + 50], [0, 1], clampOpts);

	// Legend: pack items into rows that fit the plot width, so long multi-series
	// labels wrap instead of overflowing. Plot top is pushed down per row count.
	const itemW = (s: LineGraphSeries) => 34 + s.label.length * 9.2 + 24;
	const legendRows: LineGraphSeries[][] = [[]];
	let rowW = 0;
	for (const s of series) {
		const w = itemW(s);
		if (rowW + w > PW && legendRows[legendRows.length - 1].length) {
			legendRows.push([]);
			rowW = 0;
		}
		legendRows[legendRows.length - 1].push(s);
		rowW += w;
	}
	const LEGEND_TOP = 14;
	const ROW_H = 26;
	const Y0 = LEGEND_TOP + legendRows.length * ROW_H + 14;
	const PH = Y1 - Y0;
	const sy = (ny: number) => Y1 - ny * PH;
	const onlyMarker = markers.length === 1;

	return (
		<svg viewBox="0 0 720 470" role="img" aria-label={`Line graph: ${yLabel} versus ${xLabel}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<defs>
				<linearGradient id={`${ID}-board`} x1="0" x2="0.3" y1="0" y2="1">
					<stop offset="0%" stopColor="#ffffff" stopOpacity={0.95} />
					<stop offset="100%" stopColor="#f3f1ea" stopOpacity={0.95} />
				</linearGradient>
				<filter id={`${ID}-soft`} x="-10%" y="-10%" width="120%" height="130%">
					<feGaussianBlur stdDeviation="6" />
				</filter>
				{series.map((s, i) => (
					<radialGradient key={i} id={`${ID}-pen-${i}`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
						<stop offset="0%" stopColor="#ffffff" />
						<stop offset="28%" stopColor={shade(col(s.color), 0.1)} />
						<stop offset="78%" stopColor={col(s.color)} />
						<stop offset="100%" stopColor={shade(col(s.color), -0.25)} />
					</radialGradient>
				))}
			</defs>

			{/* painted board with a soil lip */}
			<g opacity={axisOpacity}>
				<rect x={X0 - 14 + 6} y={Y0 - 4 + 10} width={PW + 34} height={Y1 - Y0 + 18} rx={14} fill="rgba(58,40,18,0.14)" filter={`url(#${ID}-soft)`} />
				<rect x={X0 - 14} y={Y0 - 4 + 6} width={PW + 34} height={Y1 - Y0 + 18} rx={14} fill={DIO.soil} />
				<rect x={X0 - 14} y={Y0 - 4} width={PW + 34} height={Y1 - Y0 + 18} rx={14} fill={`url(#${ID}-board)`} stroke="rgba(0,0,0,0.06)" />
			</g>

			{/* gridlines */}
			<g opacity={axisOpacity * 0.9}>
				{[0.25, 0.5, 0.75, 1].map((g) => (
					<line key={g} x1={X0} y1={sy(g)} x2={X1} y2={sy(g)} stroke={TOK.rule} strokeWidth={1} />
				))}
			</g>

			{/* axes */}
			<g opacity={axisOpacity}>
				<line x1={X0} y1={Y0 - 6} x2={X0} y2={Y1} stroke={TOK.inkDim} strokeWidth={3} strokeLinecap="round" />
				<line x1={X0} y1={Y1} x2={X1 + 6} y2={Y1} stroke={TOK.inkDim} strokeWidth={3} strokeLinecap="round" />
				{/* arrowheads */}
				<path d={`M ${X0} ${Y0 - 12} l -5 10 l 10 0 Z`} fill={TOK.inkDim} />
				<path d={`M ${X1 + 12} ${Y1} l -10 -5 l 0 10 Z`} fill={TOK.inkDim} />
			</g>

			{/* horizontal reference lines */}
			{hLines.map((h, i) => (
				<g key={`h${i}`} opacity={refOpacity}>
					<line x1={X0} y1={sy(h.y)} x2={X1} y2={sy(h.y)} stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="6 7" />
					{h.label ? (
						<text x={X1 - 4} y={sy(h.y) - 8} textAnchor="end" fill={TOK.inkDim} fontSize={17} fontWeight={650}>{h.label}</text>
					) : null}
				</g>
			))}

			{/* vertical markers (amber: the moment the graph is about) */}
			{markers.map((m, i) => {
				const pulse = onlyMarker ? idlePulse(frame, 66) * hold : 0;
				return (
					<g key={`m${i}`} opacity={refOpacity}>
						<line x1={sx(m.x)} y1={Y0} x2={sx(m.x)} y2={Y1} stroke={TOK.amber} strokeWidth={2.5 + pulse * 1.5} strokeDasharray="6 7" />
						<circle cx={sx(m.x)} cy={Y1} r={6 + pulse * 1.5} fill={TOK.amber} stroke="#ffffff" strokeWidth={2} />
						<text x={sx(m.x)} y={Y0 - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={750}>{m.label}</text>
					</g>
				);
			})}

			{/* series curves: a soft shadow line, the curve, and a glossy pen at its head */}
			{series.map((s, i) => {
				const dense = smooth(s.points).map(([nx, ny]) => [sx(nx), sy(ny)] as [number, number]);
				const d = toPath(dense);
				const len = pathLen(dense);
				const progress = interpolate(frame, [seriesAt[i], seriesAt[i] + drawSpan], [0, 1], clampOpts);
				const eased = 1 - Math.pow(1 - progress, 2);
				const c = col(s.color);
				const tip = pointAt(dense, eased);
				const penO = interpolate(frame, [seriesAt[i], seriesAt[i] + 6], [0, 1], clampOpts);
				const penR = 7 * (1 + 0.14 * idlePulse(frame + i * 17, 60) * hold);
				// Dashed series reveal through a clip that follows the pen.
				const clipW = Math.max(0, tip[0] - X0 + 2);
				return (
					<g key={i}>
						{s.dashed ? (
							<>
								<clipPath id={`${ID}-clip-${i}`}>
									<rect x={X0 - 10} y={0} width={clipW + 10} height={470} />
								</clipPath>
								<path d={d} fill="none" stroke={c} strokeWidth={4} strokeDasharray="9 8" strokeLinecap="round" strokeLinejoin="round" clipPath={`url(#${ID}-clip-${i})`} />
							</>
						) : (
							<>
								<path d={d} transform="translate(2 3)" fill="none" stroke="rgba(58,40,18,0.14)" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={len} strokeDashoffset={len * (1 - eased)} />
								<path d={d} fill="none" stroke={c} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={len} strokeDashoffset={len * (1 - eased)} />
							</>
						)}
						{progress > 0 ? <circle cx={tip[0]} cy={tip[1]} r={penR} fill={`url(#${ID}-pen-${i})`} stroke={shade(c, -0.3)} strokeWidth={1} opacity={penO} /> : null}
					</g>
				);
			})}

			{/* axis labels */}
			<text x={X0 + PW / 2} y={Y1 + 48} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={axisOpacity}>{xLabel}</text>
			<text x={34} y={Y0 + PH / 2} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={axisOpacity} transform={`rotate(-90 34 ${Y0 + PH / 2})`}>{yLabel}</text>

			{/* legend (wrapped rows, each centred); each key lands with its curve */}
			{legendRows.map((row, ri) => {
				const rowTotal = row.reduce((a, s) => a + itemW(s), 0);
				let x = Math.max(8, X0 + (PW - rowTotal) / 2);
				const yTop = LEGEND_TOP + ri * ROW_H;
				return (
					<g key={ri}>
						{row.map((s) => {
							const ix = x;
							x += itemW(s);
							const si = series.indexOf(s);
							return (
								<g key={si} opacity={interpolate(frame, [seriesAt[si], seriesAt[si] + 12], [0, 1], clampOpts)}>
									<rect x={ix} y={yTop} width={26} height={8} rx={4} fill={col(s.color)} />
									<text x={ix + 34} y={yTop + 9} fill={TOK.ink} fontSize={18} fontWeight={700}>{s.label}</text>
								</g>
							);
						})}
					</g>
				);
			})}
		</svg>
	);
};
