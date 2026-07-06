// LineGraphDiagram — flexible coded line/curve graph for time-course and
// titration-style visuals. Curves draw in left→right; optional vertical markers
// (e.g. equivalence point) and horizontal reference lines fade in afterward.
//
// Points are normalized 0..1 inside the plot area: (0,0)=bottom-left,
// (1,1)=top-right. The author supplies a handful of control points; a
// Catmull-Rom pass smooths them so curves read cleanly.
//
// Canonical uses: rate-vs-time at equilibrium (forward falls / reverse rises /
// plateau), concentration-vs-time, titration pH curves, conductometric V-curves.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK} from '../../styles/tokens';

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

export const LineGraphDiagram = ({xLabel, yLabel, series, markers = [], hLines = []}: LineGraphProps) => {
	const frame = useCurrentFrame();

	const axisOpacity = interpolate(frame, [0, 12], [0, 1], clampOpts);
	const drawStart = 12;
	const drawSpan = 42;
	const stagger = 9;
	const refStart = drawStart + series.length * stagger + drawSpan - 6;

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

	return (
		<svg viewBox="0 0 720 470" role="img" aria-label={`Line graph: ${yLabel} versus ${xLabel}`} style={{width: '100%'}}>
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
			{hLines.map((h, i) => {
				const o = interpolate(frame, [refStart, refStart + 14], [0, 1], clampOpts);
				return (
					<g key={`h${i}`} opacity={o}>
						<line x1={X0} y1={sy(h.y)} x2={X1} y2={sy(h.y)} stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="6 7" />
						{h.label ? (
							<text x={X1 - 4} y={sy(h.y) - 8} textAnchor="end" fill={TOK.inkDim} fontSize={17} fontWeight={600}>{h.label}</text>
						) : null}
					</g>
				);
			})}

			{/* vertical markers */}
			{markers.map((m, i) => {
				const o = interpolate(frame, [refStart, refStart + 14], [0, 1], clampOpts);
				return (
					<g key={`m${i}`} opacity={o}>
						<line x1={sx(m.x)} y1={Y0} x2={sx(m.x)} y2={Y1} stroke={TOK.amberDim} strokeWidth={2} strokeDasharray="6 7" />
						<text x={sx(m.x)} y={Y0 - 10} textAnchor="middle" fill={TOK.amberDim} fontSize={17} fontWeight={700}>{m.label}</text>
					</g>
				);
			})}

			{/* series curves */}
			{series.map((s, i) => {
				const dense = smooth(s.points).map(([nx, ny]) => [sx(nx), sy(ny)] as [number, number]);
				const d = toPath(dense);
				const len = pathLen(dense);
				const start = drawStart + i * stagger;
				const progress = interpolate(frame, [start, start + drawSpan], [0, 1], clampOpts);
				const c = col(s.color);
				const last = dense[dense.length - 1];
				if (s.dashed) {
					return (
						<g key={i} opacity={progress}>
							<path d={d} fill="none" stroke={c} strokeWidth={4} strokeDasharray="9 8" strokeLinecap="round" strokeLinejoin="round" />
						</g>
					);
				}
				return (
					<g key={i}>
						<path
							d={d}
							fill="none"
							stroke={c}
							strokeWidth={4.5}
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeDasharray={len}
							strokeDashoffset={len * (1 - progress)}
						/>
						<circle cx={last[0]} cy={last[1]} r={5.5} fill={c} opacity={interpolate(frame, [start + drawSpan - 8, start + drawSpan], [0, 1], clampOpts)} />
					</g>
				);
			})}

			{/* axis labels */}
			<text x={X0 + PW / 2} y={Y1 + 42} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={axisOpacity}>{xLabel}</text>
			<text x={34} y={Y0 + PH / 2} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={axisOpacity} transform={`rotate(-90 34 ${Y0 + PH / 2})`}>{yLabel}</text>

			{/* legend (wrapped rows, each centred) */}
			<g opacity={interpolate(frame, [drawStart, drawStart + 14], [0, 1], clampOpts)}>
				{legendRows.map((row, ri) => {
					const rowTotal = row.reduce((a, s) => a + itemW(s), 0);
					let x = Math.max(8, X0 + (PW - rowTotal) / 2);
					const yTop = LEGEND_TOP + ri * ROW_H;
					return (
						<g key={ri}>
							{row.map((s, i) => {
								const ix = x;
								x += itemW(s);
								return (
									<g key={i}>
										<rect x={ix} y={yTop} width={26} height={8} rx={4} fill={col(s.color)} />
										<text x={ix + 34} y={yTop + 9} fill={TOK.ink} fontSize={18} fontWeight={700}>{s.label}</text>
									</g>
								);
							})}
						</g>
					);
				})}
			</g>
		</svg>
	);
};
