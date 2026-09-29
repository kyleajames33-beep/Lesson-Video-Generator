// CurvesDiagram (bio11m2Curves) — data series on ONE shared, labelled axis,
// so they can be compared honestly (e.g. a glucose-tolerance test for two
// people). Every point is the scene's own number, plotted to scale, with its
// value printed beside it; lines draw themselves on each series' beat, led by
// a glossy reading bead. An optional band marks a normal range. The chart
// stands on a stone slab. Hold: the beads ride gently back and forth along
// their own lines (re-reading the data, adding nothing new).

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, STONE} from '../../diorama';
import {Foot, FootLine, GLOSS, GlossDefs, H, PAL, W, alongPoly, fadeAt, mix} from './shared';

type Series = {label: string; values: number[]; at: number; color?: 'accent' | 'red' | 'amber'};
export type CurvesProps = {
	x: {label: string; values: number[]};
	y: {label: string; min: number; max: number; step: number};
	series: Series[];
	band?: {from: number; to: number; label: string; at: number};
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2crv';
const L = 92, R = 610, T = 40, B = 380;
const DRAW = 70;

export const CurvesDiagram = ({x, y, series, band, footer = [], delay = 62}: CurvesProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const col = (c?: Series['color']) => (c === 'red' ? PAL.oxygen : c === 'amber' ? TOK.amber : theme.accent);
	const xMin = Math.min(...x.values), xMax = Math.max(...x.values);
	const px = (v: number) => L + ((v - xMin) / (xMax - xMin)) * (R - L);
	const py = (v: number) => B - ((v - y.min) / (y.max - y.min)) * (B - T);
	const ticks: number[] = [];
	for (let v = y.min; v <= y.max + 1e-9; v += y.step) ticks.push(+v.toFixed(3));
	const on = fadeAt(frame, 0, 14);
	const lastAt = Math.max(...series.map((s) => s.at)) + DRAW + 30;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={series.map((s) => `${s.label}: ${s.values.join(', ')}`).join('; ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{...GLOSS, accent: theme.accent, amber: TOK.amber, red: PAL.oxygen}} />
			<g opacity={on}>
				{/* slab */}
				<rect x={24} y={T - 22} width={W - 40} height={B - T + 96} rx={20} fill={STONE.shadow} transform="translate(6, 10)" />
				<rect x={24} y={T - 22} width={W - 40} height={B - T + 96} rx={20} fill="#fbfaf7" stroke={STONE.topEdge} strokeWidth={3} />
				{band && (
					<g opacity={fadeAt(frame, band.at, 14)}>
						<rect x={L} y={py(band.to)} width={R - L} height={py(band.from) - py(band.to)} fill={mix('#ffffff', theme.accent, 0.14)} />
						<text x={R - 6} y={py(band.to) - 6} textAnchor="end" fill={theme.accent} fontSize={15} fontWeight={800}>{band.label}</text>
					</g>
				)}
				{ticks.map((t) => (
					<g key={t}>
						<line x1={L} x2={R} y1={py(t)} y2={py(t)} stroke={TOK.rule} strokeWidth={1.5} />
						<text x={L - 10} y={py(t) + 5} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{t}</text>
					</g>
				))}
				<line x1={L} x2={L} y1={T} y2={B} stroke={TOK.inkMute} strokeWidth={2} />
				<line x1={L} x2={R} y1={B} y2={B} stroke={TOK.inkMute} strokeWidth={2} />
				{x.values.map((v) => (
					<text key={v} x={px(v)} y={B + 22} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{v}</text>
				))}
				<text x={(L + R) / 2} y={B + 46} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>{x.label}</text>
				<text x={36} y={(T + B) / 2} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800} transform={`rotate(-90, 36, ${(T + B) / 2})`}>{y.label}</text>
			</g>

			{series.map((s, si) => {
				const pts = s.values.map((v, i) => ({x: px(x.values[i]), y: py(v)}));
				const t = Math.max(0, Math.min(1, (frame - s.at) / DRAW));
				if (t <= 0) return null;
				const c = col(s.color);
				const d = pts.map((p, i) => `${i ? 'L' : 'M'} ${p.x} ${p.y}`).join(' ');
				const shown = pts.filter((_, i) => i / (pts.length - 1) <= t + 1e-6);
				const hold = frame > lastAt ? 0.5 + 0.5 * Math.sin((frame - lastAt) / 60 + si * 1.3) : t;
				const bead = alongPoly(pts, hold);
				const last = pts[pts.length - 1];
				return (
					<g key={si}>
						<path d={d} fill="none" stroke={c} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - t} />
						{shown.map((p, i) => (
							<g key={i}>
								<circle cx={p.x} cy={p.y} r={6} fill="#ffffff" stroke={c} strokeWidth={3} />
								<text x={p.x} y={p.y - 14} textAnchor="middle" fill={c} fontSize={16} fontWeight={800}>{s.values[i]}</text>
							</g>
						))}
						<circle cx={bead.x} cy={bead.y} r={10} fill={`url(#${ID}-g-${s.color ?? 'accent'})`} stroke="#ffffff" strokeWidth={2} />
						<text x={last.x + 12} y={last.y + 5} fill={c} fontSize={16} fontWeight={800} opacity={fadeAt(frame, s.at + DRAW, 12)}>{s.label}</text>
					</g>
				);
			})}
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};
