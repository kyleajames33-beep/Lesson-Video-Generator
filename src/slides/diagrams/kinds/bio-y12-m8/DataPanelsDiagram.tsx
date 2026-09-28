// DataPanelsDiagram — a data table turned into stacked, self-drawing line
// graphs that share one time axis, each with a glossy gauge bead on a stone
// plinth that reads the value under the pen. Every point and value label is
// the table's own number (props), plotted to scale, so the shapes (one falls
// while another rises) are the data's, not a drawing's.
//
// Beats are frames after `delay`: each series draws from its `at`. Hold: a
// reading cursor glides back and forth across the time axis and the gauges
// follow it (re-reading the same data, no new information).

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, clamp, fadeAt, polyD} from './shared';

type Series = {label: string; values: number[]; at: number; color?: 'accent' | 'red' | 'teal'; decimals?: number};
export type DataPanelsProps = {
	x: {label: string; values: number[]};
	series: Series[];
	/** Pair of series indices whose opposite movement is the point, with a caption. */
	link?: {a: number; b: number; text: string; at: number};
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8data';
const W = 760;
const H = 530;
const GX0 = 190, GX1 = 720;
const DRAW = 100;

export const DataPanelsDiagram = ({x, series, link, notes = [], delay = 62}: DataPanelsProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const n = series.length;
	const panelH = n === 3 ? 124 : 170;
	const gap = 20;
	const top0 = 16;
	const xMin = Math.min(...x.values), xMax = Math.max(...x.values);
	const gx = (v: number) => GX0 + 16 + ((v - xMin) / (xMax - xMin)) * (GX1 - GX0 - 40);
	const colorOf = (c?: Series['color']) => (c === 'red' ? COL.red : c === 'teal' ? COL.teal : theme.accent);
	const lastAt = Math.max(...series.map((s) => s.at)) + DRAW + 40;
	// hold cursor (fraction of the x range)
	const cursor = frame > lastAt ? 0.5 - 0.5 * Math.cos((frame - lastAt) / 90) : null;

	const valueAt = (vals: number[], u: number) => {
		const xv = xMin + u * (xMax - xMin);
		for (let i = 1; i < x.values.length; i++) {
			if (xv <= x.values[i]) {
				const t = (xv - x.values[i - 1]) / (x.values[i] - x.values[i - 1]);
				return vals[i - 1] + (vals[i] - vals[i - 1]) * t;
			}
		}
		return vals[vals.length - 1];
	};

	const panel = (s: Series, i: number) => {
		const o = fadeAt(frame, s.at, 14);
		if (o <= 0) return null;
		const y0 = top0 + i * (panelH + gap) + 26, y1 = top0 + i * (panelH + gap) + panelH;
		const lo = Math.min(...s.values), hi = Math.max(...s.values);
		const pad = (hi - lo) * 0.32 || 1;
		const gy = (v: number) => y1 - 8 - ((v - (lo - pad)) / (hi + pad - (lo - pad))) * (y1 - y0 - 16);
		const pen = interpolate(frame, [s.at + 10, s.at + 10 + DRAW], [0, 1], clamp);
		const pts = Array.from({length: 61}, (_, k) => (k / 60) * pen).map((u) => ({x: gx(xMin + u * (xMax - xMin)), y: gy(valueAt(s.values, u))}));
		const col = colorOf(s.color);
		const u = cursor ?? pen;
		const cur = valueAt(s.values, u);
		const beadY = y1 - 14 - ((cur - lo) / (hi - lo || 1)) * (y1 - y0 - 34);
		const inLink = link && (i === link.a || i === link.b) ? fadeAt(frame, link.at, 12) : 0;
		return (
			<g key={i} opacity={o}>
				<text x={20} y={y0 - 8} fill={TOK.ink} fontSize={18} fontWeight={800}>{s.label}</text>
				<DioramaPlinth id={`${ID}${i}`} cx={84} cy={y1 - 6} rx={46} />
				<rect x={74} y={y0 + 4} width={20} height={y1 - y0 - 12} rx={10} fill="rgba(255,255,255,0.75)" stroke="#b9c2cc" strokeWidth={2} />
				<circle cx={84} cy={beadY} r={10} fill={`url(#${ID}-g-${s.color ?? 'accent'})`} stroke="rgba(0,0,0,0.25)" />
				<rect x={GX0} y={y0} width={GX1 - GX0} height={y1 - y0} rx={10} fill="#ffffff" opacity={0.6} stroke={inLink ? TOK.amber : '#e2ded6'} strokeWidth={inLink ? 2 + idlePulse(frame) * 1.5 : 1.5} />
				<path d={polyD(pts)} stroke={col} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
				{x.values.map((xv, k) => {
					const show = fadeAt(frame, s.at + 10 + ((xv - xMin) / (xMax - xMin)) * DRAW - 4, 8);
					const above = k === 0 || s.values[k] >= s.values[k - 1];
					return (
						<g key={k} opacity={show}>
							<circle cx={gx(xv)} cy={gy(s.values[k])} r={5.5} fill={col} stroke="#ffffff" strokeWidth={2} />
							<text x={gx(xv)} y={gy(s.values[k]) + (above ? -11 : 22)} textAnchor="middle" fill={col} fontSize={15} fontWeight={800}>
								{s.values[k].toFixed(s.decimals ?? 0)}
							</text>
						</g>
					);
				})}
			</g>
		);
	};

	const axisY = top0 + n * (panelH + gap) - gap + 22;
	const allDrawn = fadeAt(frame, Math.min(...series.map((s) => s.at)), 14);
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={series.map((s) => s.label).join(', ') + ' against ' + x.label} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{accent: theme.accent, red: COL.red, teal: COL.teal}} />
			{series.map(panel)}
			<g opacity={allDrawn}>
				{x.values.map((xv) => (
					<text key={xv} x={gx(xv)} y={axisY} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{xv}</text>
				))}
				<text x={GX1} y={axisY + 22} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{x.label} →</text>
			</g>
			{cursor !== null && (
				<line x1={gx(xMin + cursor * (xMax - xMin))} y1={top0 + 20} x2={gx(xMin + cursor * (xMax - xMin))} y2={axisY - 16} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="4 4" opacity={0.7} />
			)}
			{link && (
				<text x={W / 2} y={axisY + 50} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, link.at, 12)}>{link.text}</text>
			)}
			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 8 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
