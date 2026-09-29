// AxisDiagram (bio11m2Axis) — a hormone chain from brain to body, with the
// negative feedback that regulates it.
//
// Four stations stand on stone plinths down the left (e.g. hypothalamus →
// pituitary → thyroid → body cells). Between each pair a link carries its
// hormone's name, and glossy hormone particles flow down the chain once the
// link is named. On the right, a gauge shows the level of the final hormone.
// On `feedback.at`, dashed amber arrows run from the rising level back to the
// stations it acts on, each marked "−", and the flow down the chain slows
// (secretion is reduced). All names from props. Hold: particles keep flowing
// (slower after the feedback), the gauge breathes near its set level.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Chip2, Foot, FootLine, GLOSS, GlossDefs, H, W, ease, fadeAt, popAt} from './shared';
import {Organ, OrganName} from './organs';

type Station = {name: string; icon: OrganName; at: number; hot?: boolean; note?: string};
export type AxisProps = {
	stations: Station[];
	links: {text: string; at: number}[];
	level?: {label: string; at: number};
	feedback?: {at: number; text: string; targets: number[]};
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2axis';
const X = 270;
const HORMONE = ['gland', 'thyroid', 'adrenal'] as const;

export const AxisDiagram = ({stations, links, level, feedback, footer = [], delay = 62}: AxisProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = stations.length;
	const top = 78, bottom = 470 - footer.length * 20;
	const ys = stations.map((_, i) => top + ((bottom - top) * i) / (n - 1));
	const fb = feedback ? ease(frame, feedback.at, feedback.at + 40) : 0;
	const speed = 1 - 0.6 * fb;
	const GX = 650, GY0 = 120, GY1 = 360;
	const rise = level ? ease(frame, level.at, level.at + 90) : 0;
	const lv = 0.25 + 0.55 * rise - 0.3 * fb + 0.03 * Math.sin(frame / 30) * fb;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={stations.map((s) => s.name).join(' → ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />

			{/* links + flowing hormone */}
			{links.map((l, i) => {
				if (i >= n - 1) return null;
				const t = fadeAt(frame, l.at - 10, 18);
				const y1 = ys[i] + 26, y2 = ys[i + 1] - 62;
				return (
					<g key={i} opacity={t}>
						<Arrow x1={X} y1={y1} x2={X} y2={y1 + (y2 - y1) * t} color={TOK.inkMute} width={4} head={12} />
						<Chip2 x={X + 150} y={(y1 + y2) / 2} text={l.text} color={theme.accent} t={popAt(frame, fps, l.at)} size={17} />
						{t >= 1 &&
							[0, 1, 2].map((k) => {
								const u = ((((frame - l.at) * speed) / 60 + k / 3) % 1 + 1) % 1;
								return <circle key={k} cx={X + 16} cy={y1 + (y2 - y1) * u} r={6.5} fill={`url(#${ID}-g-${HORMONE[i % 3]})`} stroke="#ffffff" strokeWidth={1} opacity={Math.sin(Math.PI * u)} />;
							})}
					</g>
				);
			})}

			{/* stations */}
			{stations.map((s, i) => {
				const p = popAt(frame, fps, s.at);
				const on = Math.min(1, p * 1.4);
				const hit = feedback && feedback.targets.includes(i) ? fb : 0;
				return (
					<g key={i} opacity={on} transform={`translate(0, ${(1 - Math.min(1, p)) * 20})`}>
						{hit > 0 && <ellipse cx={X} cy={ys[i] - 22} rx={70} ry={46} fill={TOK.amber} opacity={0.12 * hit + 0.08 * hit * idlePulse(frame)} />}
						<DioramaPlinth id={`${ID}${i}`} cx={X} cy={ys[i]} rx={54} />
						<Organ id={ID} name={s.icon} x={X} y={ys[i] - 30 + idleBob(frame, i, 1)} s={0.78} frame={frame} hot={s.hot} />
						<text x={X - 66} y={ys[i] + 2} textAnchor="end" fill={TOK.ink} fontSize={19} fontWeight={800}>{s.name}</text>
						{s.note && <text x={X - 66} y={ys[i] + 22} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{s.note}</text>}
					</g>
				);
			})}

			{/* level gauge */}
			{level && (
				<g opacity={fadeAt(frame, level.at - 10, 16)}>
					<text x={GX} y={GY0 - 22} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{level.label}</text>
					<rect x={GX - 18} y={GY0} width={36} height={GY1 - GY0} rx={18} fill="#ece9e3" stroke="#d3cec5" strokeWidth={2} />
					<rect x={GX - 14} y={GY0 + 4 + (GY1 - GY0 - 8) * (1 - lv)} width={28} height={(GY1 - GY0 - 8) * lv} rx={14} fill={`url(#${ID}-g-${HORMONE[(links.length - 1) % 3]})`} />
				</g>
			)}

			{/* negative feedback */}
			{feedback && fb > 0 && (
				<g opacity={fb}>
					{feedback.targets.map((ti, k) => {
						const y = ys[ti] - 20;
						const x1 = GX - 24, x2 = X + 64;
						return (
							<g key={k}>
								<path d={`M ${x1} ${GY0 + 30 + k * 20} C ${x1 - 80} ${GY0 + 30 + k * 20}, ${x2 + 120} ${y}, ${x2} ${y}`} fill="none" stroke={TOK.amber} strokeWidth={3.5} strokeDasharray="8 6" />
								<path d={`M ${x2} ${y} l 12 -7 l 0 14 Z`} fill={TOK.amber} />
								<circle cx={x2 + 26} cy={y - 18} r={12} fill={TOK.amber} />
								<text x={x2 + 26} y={y - 12} textAnchor="middle" fill="#ffffff" fontSize={20} fontWeight={900}>−</text>
							</g>
						);
					})}
					<Chip2 x={GX - 80} y={GY1 + 50} text={feedback.text} color={TOK.amber} textColor={TOK.amberInk} size={16} t={popAt(frame, fps, feedback.at + 10)} />
				</g>
			)}
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};

