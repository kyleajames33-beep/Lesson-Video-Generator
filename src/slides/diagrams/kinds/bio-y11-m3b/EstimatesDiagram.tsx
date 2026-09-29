// EstimatesDiagram (bio11m3Estimates) — reliability versus accuracy, read
// off repeated estimates against the true value.
//
// A number line runs along a stone ledge; the true value (known afterwards
// from an exhaustive count) stands on it as the one amber marker. Each group's
// repeated estimates drop onto its own row as beads. Then, all COMPUTED from
// the props' values:
//   spread  range = max − min, and as a % of the group's mean (reliability:
//           how consistent the repeats are)
//   error   mean − true value, and as a % of the true value (accuracy)
// A group can be tight but far off (reliable, not accurate): the picture
// shows it before any label does. Verdict chips come from props.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {Footer, H, Pill, Title, W, fadeAt, popAt, type FooterLine} from './shared';
import {EcoGloss} from './icons';

export type EstGroup = {name: string; method?: string; values: number[]; at: number; verdict?: {text: string; at: number; amber?: boolean}};
export type EstimatesProps = {
	title?: string;
	truth: number;
	axis: {min: number; max: number; ticks?: number[]; label?: string};
	groups: EstGroup[];
	beats?: Partial<{truth: number; spread: number; error: number}>;
	footer?: FooterLine[];
	delay?: number;
};

const ID = 'b11m3est';
const pct = (v: number) => (v < 1 ? v.toFixed(1) : String(Math.round(v)));

export const EstimatesDiagram = ({title, truth, axis, groups, beats = {}, footer = [], delay = 62}: EstimatesProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = {truth: 0, spread: 9999, error: 9999, ...beats};
	const top = title ? 50 : 10;
	const footH = footer.length * 24 + (footer.length ? 6 : 0);
	const pulse = idlePulse(frame);
	const L = 60;
	const R = W - 40;
	const X = (v: number) => L + ((v - axis.min) / (axis.max - axis.min)) * (R - L);
	const axisY = H - footH - 64;
	const rowH = Math.min(150, (axisY - top - 30) / groups.length);
	const cols = [theme.accent, '#c0562e', '#1f8a7a'];

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Estimates'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<EcoGloss id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{/* ledge + axis */}
			<rect x={L - 30} y={axisY - 6} width={R - L + 60} height={16} rx={6} fill="#d3cfc7" stroke="#bdb8ae" strokeWidth={2} />
			<rect x={L - 30} y={axisY + 10} width={R - L + 60} height={8} rx={3} fill="#b3afa7" />
			{(axis.ticks ?? []).map((t) => (
				<g key={t}>
					<line x1={X(t)} y1={axisY - 6} x2={X(t)} y2={axisY + 10} stroke={TOK.inkDim} strokeWidth={2} />
					<text x={X(t)} y={axisY + 40} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{t}</text>
				</g>
			))}
			{axis.label && <text x={(L + R) / 2} y={axisY + 60} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{axis.label}</text>}
			{/* truth */}
			<g opacity={fadeAt(frame, b.truth, 14)}>
				<line x1={X(truth)} y1={top + 30} x2={X(truth)} y2={axisY - 6} stroke={TOK.amber} strokeWidth={3 + pulse * 1.5} strokeDasharray="8 6" />
				<Pill x={X(truth) + 70} y={axisY - 26} text={`true value ${truth}`} size={15} color={TOK.amber} textColor={TOK.amberInk} />
			</g>
			{groups.map((g, gi) => {
				const y = top + 70 + gi * rowH;
				const col = cols[gi % cols.length];
				const mean = g.values.reduce((a, v) => a + v, 0) / g.values.length;
				const lo = Math.min(...g.values);
				const hi = Math.max(...g.values);
				const spread = hi - lo;
				const err = mean - truth;
				return (
					<g key={gi} opacity={fadeAt(frame, g.at, 12)}>
						<text x={L - 20} y={y - 44} fill={col} fontSize={18} fontWeight={800}>{g.name}</text>
						{g.method && <text x={L - 20 + g.name.length * 11 + 10} y={y - 44} fill={TOK.inkDim} fontSize={15} fontWeight={700}>{g.method}</text>}
						<line x1={L - 20} y1={y} x2={R + 20} y2={y} stroke={TOK.rule} strokeWidth={2} />
						{g.values.map((v, k) => {
							const p = popAt(frame, fps, g.at + 10 + k * 10);
							return (
								<g key={k}>
									<circle cx={X(v)} cy={y + idleBob(frame, gi * 5 + k, 1)} r={10 * Math.min(1, p)} fill={`url(#${ID}-ball-${gi === 0 ? 'dna1' : gi === 1 ? 'red' : 'algae'})`} stroke="#fff" strokeWidth={1.5} />
									<line x1={X(v)} y1={y + 12} x2={X(v)} y2={axisY - 8} stroke={col} strokeWidth={1} strokeOpacity={0.25 * Math.min(1, p)} />
								</g>
							);
						})}
						{frame > b.spread && (
							<g opacity={fadeAt(frame, b.spread + gi * 20, 12)}>
								<path d={`M ${X(lo)} ${y + 22} L ${X(lo)} ${y + 30} L ${X(hi)} ${y + 30} L ${X(hi)} ${y + 22}`} stroke={col} strokeWidth={2.5} fill="none" />
								<text x={(X(lo) + X(hi)) / 2} y={y + 50} textAnchor="middle" fill={col} fontSize={15} fontWeight={800}>{`spread ${spread} (${pct((spread / mean) * 100)}% of mean)`}</text>
							</g>
						)}
						{frame > b.error && (
							<g opacity={fadeAt(frame, b.error + gi * 20, 12)}>
								<path d={`M ${X(mean)} ${y - 16} l 8 -12 l -16 0 Z`} fill={col} />
								<text x={X(mean) + (err > 0 ? -12 : 12)} y={y - 18} textAnchor={err > 0 ? 'end' : 'start'} fill={col} fontSize={15} fontWeight={800}>{`mean ${Math.round(mean)}: ${err >= 0 ? '+' : '−'}${Math.abs(Math.round(err))} (${pct((Math.abs(err) / truth) * 100)}% off)`}</text>
							</g>
						)}
						{g.verdict && frame > g.verdict.at && (
							<Pill x={Math.max(L + 90, Math.min(R - 100, X(mean)))} y={y + 80} text={g.verdict.text} size={15} color={g.verdict.amber ? TOK.amber : col} textColor={g.verdict.amber ? TOK.amberInk : col} opacity={fadeAt(frame, g.verdict.at, 12)} />
						)}
					</g>
				);
			})}
			<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
		</svg>
	);
};
