// RateGraphDiagram (bio11m2RateGraph) — a self-drawing rate graph on a stone
// display plinth, for limiting factors and optimum temperature.
//
// plateau  Each curve rises then levels off (rate = level × (1 − e^(−x/k))).
//          `zones` shade the rising part ("light is limiting") and the plateau
//          ("another factor is limiting"). A second, higher curve can show that
//          raising the other factor lifts the plateau.
// optimum  One curve rises to a peak at `peak` and falls steeply after it
//          (enzymes denature); an optional band marks the optimum range, and
//          the x axis is labelled in °C from `xMax`.
// A tracer dot can run along the first curve; measured `points` can pop onto
// the graph. Shapes are qualitative (no rate numbers are shown). All text from
// props. Hold: the tracer keeps breathing at its last position; the amber
// label breathes.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {H, Lines, Notes, Title, W, clamp, fadeAt, popAt, toneColor, wrap, type Note, type Tone} from './shared';

export type RateCurve = {label: string; at: number; level?: number; tone?: Tone; dashed?: boolean; labelX?: number};
export type RateGraphProps = {
	mode?: 'plateau' | 'optimum';
	title?: string;
	xLabel: string;
	yLabel: string;
	curves: RateCurve[];
	/** optimum: peak position 0..1 along x; axis max in °C. */
	peak?: number;
	xMax?: number;
	band?: {from: number; to: number; text: string; at: number};
	zones?: {from: number; to: number; text: string; at: number; tone?: Tone}[];
	tracer?: {at: number; to?: number};
	points?: {x: number; y: number; at: number}[];
	pointers?: {x: number; text: string; at: number; tone?: Tone; dy?: number}[];
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2rg';
const DRAW = 70;

export const RateGraphDiagram = ({
	mode = 'plateau', title, xLabel, yLabel, curves, peak = 0.6, xMax = 50, band, zones = [], tracer, points = [], pointers = [], notes = [], delay = 62,
}: RateGraphProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 60 : 30;
	const footH = notes.length * 25;
	const X0 = 96;
	const X1 = W - 40;
	const Y1 = H - 110 - footH;
	const Y0 = top + 20;
	const gx = (x: number) => X0 + x * (X1 - X0);
	const gy = (y: number) => Y1 - y * (Y1 - Y0);

	const f = (c: RateCurve, x: number) => {
		if (mode === 'plateau') return (c.level ?? 0.8) * (1 - Math.exp(-x / 0.16));
		const lv = c.level ?? 0.85;
		const s = x < peak ? 0.3 : 0.11;
		return lv * Math.exp(-(((x - peak) / s) ** 2));
	};
	const path = (c: RateCurve, upto: number) => {
		const pts: string[] = [];
		const N = 90;
		for (let k = 0; k <= N * upto; k++) {
			const x = k / N;
			pts.push(`${gx(x).toFixed(1)},${gy(f(c, x)).toFixed(1)}`);
		}
		return pts.length > 1 ? `M ${pts.join(' L ')}` : '';
	};

	const tr = tracer ? interpolate(frame, [tracer.at, tracer.at + 150], [0.02, tracer.to ?? 0.95], clamp) : 0;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Rate graph'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g transform={`translate(0 ${Y1 + 20}) scale(1 0.42) translate(0 ${-(Y1 + 20)})`}>
				<DioramaPlinth id={`${ID}p`} cx={(X0 + X1) / 2} cy={Y1 + 20} rx={(X1 - X0) / 2 + 40} />
			</g>
			<rect x={X0 - 14} y={Y0 - 14} width={X1 - X0 + 28} height={Y1 - Y0 + 28} rx={14} fill="#ffffff" stroke="rgba(0,0,0,0.08)" strokeWidth={1.5} />
			{zones.map((z, i) => {
				const o = fadeAt(frame, z.at, 16);
				const c = toneColor(z.tone, theme.accent);
				return (
					<g key={i} opacity={o}>
						<rect x={gx(z.from)} y={Y0} width={gx(z.to) - gx(z.from)} height={Y1 - Y0} fill={c} opacity={z.tone === 'amber' ? 0.1 + 0.06 * idlePulse(frame) : 0.07} />
						<Lines x={(gx(z.from) + gx(z.to)) / 2} y={Y1 - 18 - (wrap(z.text, Math.max(10, Math.floor((gx(z.to) - gx(z.from)) / 9.5))).length - 1) * 20} lines={wrap(z.text, Math.max(10, Math.floor((gx(z.to) - gx(z.from)) / 9.5)))} size={17} color={c} />
					</g>
				);
			})}
			{band && (
				<g opacity={fadeAt(frame, band.at, 16)}>
					<rect x={gx(band.from / xMax)} y={Y0} width={gx(band.to / xMax) - gx(band.from / xMax)} height={Y1 - Y0} fill={TOK.amber} opacity={0.12 + 0.08 * idlePulse(frame)} />
					<text x={gx((band.from + band.to) / 2 / xMax)} y={Y0 + 24} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>{band.text}</text>
				</g>
			)}
			{/* axes */}
			<line x1={X0} y1={Y1} x2={X1} y2={Y1} stroke={TOK.ink} strokeWidth={2.5} />
			<line x1={X0} y1={Y1} x2={X0} y2={Y0} stroke={TOK.ink} strokeWidth={2.5} />
			<text x={(X0 + X1) / 2} y={Y1 + (mode === 'optimum' ? 48 : 30)} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{xLabel}</text>
			<text transform={`translate(${X0 - 24}, ${(Y0 + Y1) / 2}) rotate(-90)`} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{yLabel}</text>
			{mode === 'optimum' && Array.from({length: Math.floor(xMax / 10) + 1}, (_, k) => (
				<g key={k}>
					<line x1={gx((k * 10) / xMax)} x2={gx((k * 10) / xMax)} y1={Y1} y2={Y1 + 6} stroke={TOK.ink} strokeWidth={2} />
					<text x={gx((k * 10) / xMax)} y={Y1 + 24} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>{k * 10}</text>
				</g>
			))}
			{curves.map((c, i) => {
				const t = interpolate(frame, [c.at, c.at + DRAW], [0, 1], clamp);
				if (t <= 0) return null;
				const col = toneColor(c.tone, theme.accent);
				const lx = c.labelX ?? 0.82;
				return (
					<g key={i}>
						<path d={path(c, t)} fill="none" stroke={col} strokeWidth={4} strokeLinecap="round" strokeDasharray={c.dashed ? '9 7' : undefined} />
						<text x={gx(lx)} y={gy(f(c, lx)) - 14} textAnchor="middle" fill={col} fontSize={17} fontWeight={800} opacity={fadeAt(frame, c.at + DRAW - 10)}>{c.label}</text>
					</g>
				);
			})}
			{pointers.map((p, i) => {
				const o = fadeAt(frame, p.at, 14);
				const y = gy(f(curves[0], p.x));
				const c = toneColor(p.tone, theme.accent);
				const dy = p.dy ?? 60;
				return (
					<g key={i} opacity={o}>
						<line x1={gx(p.x)} y1={y + 8} x2={gx(p.x)} y2={y + dy - 16} stroke={c} strokeWidth={2} strokeDasharray="4 4" />
						<circle cx={gx(p.x)} cy={y} r={5} fill={c} />
						<Lines x={Math.min(X1 - 90, Math.max(X0 + 90, gx(p.x)))} y={y + dy} lines={wrap(p.text, 24)} size={18} color={c} />
					</g>
				);
			})}
			{points.map((p, i) => {
				const s = popAt(frame, fps, p.at);
				if (s <= 0) return null;
				return <circle key={i} cx={gx(p.x)} cy={gy(p.y)} r={7 * Math.min(1.2, s)} fill="#ffffff" stroke={TOK.ink} strokeWidth={2.5} />;
			})}
			{tracer && frame >= tracer.at && (
				<g>
					<circle cx={gx(tr)} cy={gy(f(curves[0], tr))} r={16 + 4 * idlePulse(frame)} fill={TOK.amber} opacity={0.25} />
					<circle cx={gx(tr)} cy={gy(f(curves[0], tr))} r={8} fill={TOK.amber} stroke="#ffffff" strokeWidth={2} />
				</g>
			)}
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};
