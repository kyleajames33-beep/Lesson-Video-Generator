// TimelineDiagram (bio11m3aTimeline) — deep time as a stone ledge, oldest on
// the left, today on the right, in thousands of years ago.
//
// Each `bar` is a span (e.g. "People on the continent", "Most megafauna"),
// drawn as a glossy band that grows along the ledge on its beat; an open end
// (start before the axis) gets an arrow. Markers are single dated events
// (e.g. an eruption, a dated site). `overlap` highlights the span two bars
// share, computed from the bars themselves, as the one amber thing. Every
// date comes from props (the scene's own numbers) and is placed to scale.
//
// Beats are frames after `delay`. Hold: the overlap band breathes.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idlePulse} from '../../diorama';
import {Beat, Foot, H, Ledge, PAL, Tag, W, clamp, fadeAt} from './shared';

type Bar = {label: string; from: number; to: number; at: number; tone?: 'accent' | 'warm' | 'grey'; openStart?: boolean; sub?: string};
export type TimelineProps = {
	title?: string;
	/** axis, in thousands of years ago: left (older) → right (younger) */
	axis: {from: number; to: number; step: number; unit?: string};
	bars: Bar[];
	markers?: {at: number; ka: number; label: string; sub?: string}[];
	overlap?: {a: number; b: number; label: string; at: number};
	footer?: Beat[];
	delay?: number;
};

const ID = 'b11m3tl';
const ease = Easing.inOut(Easing.cubic);
const X0 = 70;
const X1 = 700;

export const TimelineDiagram = ({title, axis, bars, markers = [], overlap, footer = [], delay = 62}: TimelineProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const gx = (ka: number) => X0 + ((axis.from - ka) / (axis.from - axis.to)) * (X1 - X0);
	const axisY = H - 120 - Math.max(0, footer.length - 1) * 28;
	const barH = 34;
	const barGap = 30;
	const top = title ? 90 : 50;
	const tone = (t?: string) => (t === 'warm' ? PAL.orange : t === 'grey' ? '#8b8f96' : theme.accent);
	const ticks: number[] = [];
	for (let v = axis.from; v >= axis.to; v -= axis.step) ticks.push(v);
	const unit = axis.unit ?? 'thousand years ago';

	// the shared span: from the younger of the two starts to the older of the two ends
	let ov: {x0: number; x1: number} | null = null;
	if (overlap) {
		const A = bars[overlap.a];
		const B = bars[overlap.b];
		const oFrom = Math.min(A.from, B.from);
		const oTo = Math.max(A.to, B.to);
		if (oFrom > oTo) ov = {x0: gx(oFrom), x1: gx(oTo)};
	}

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Timeline'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<linearGradient id={`${ID}-gloss`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#ffffff" stopOpacity={0.55} />
					<stop offset="45%" stopColor="#ffffff" stopOpacity={0} />
					<stop offset="100%" stopColor="#000000" stopOpacity={0.15} />
				</linearGradient>
			</defs>
			{title && (
				<text x={W / 2} y={34} textAnchor="middle" fontSize={23} fontWeight={800} fill={TOK.ink}>
					{title}
				</text>
			)}
			{ov && overlap && (
				<g opacity={fadeAt(frame, overlap.at, 18)}>
					<rect x={ov.x0} y={top - 16} width={ov.x1 - ov.x0} height={axisY - top + 16} rx={10} fill="#fff6e6" stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame) * 1.5} strokeDasharray="8 6" />
					<text x={(ov.x0 + ov.x1) / 2} y={top - 26} textAnchor="middle" fontSize={17} fontWeight={800} fill={TOK.amberInk}>
						{overlap.label}
					</text>
				</g>
			)}
			<Ledge x0={X0 - 40} x1={X1 + 40} y={axisY} />
			{ticks.map((v, i) => (
				<g key={i} opacity={fadeAt(frame, 0)}>
					<line x1={gx(v)} y1={axisY - 8} x2={gx(v)} y2={axisY} stroke={TOK.inkDim} strokeWidth={2} />
					<text x={gx(v)} y={axisY + 48} textAnchor="middle" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
						{v === 0 ? 'today' : v.toLocaleString('en-AU')}
					</text>
				</g>
			))}
			<text x={(X0 + X1) / 2} y={axisY + 74} textAnchor="middle" fontSize={16} fontWeight={800} fill={TOK.ink} opacity={fadeAt(frame, 0)}>
				{unit}
			</text>
			{bars.map((b, i) => {
				const y = top + i * (barH + barGap) + 20;
				const t = interpolate(frame, [b.at, b.at + 40], [0, 1], {...clamp, easing: ease});
				const xa = gx(b.from);
				const xb = xa + (gx(b.to) - xa) * t;
				const c = tone(b.tone);
				return (
					<g key={i} opacity={fadeAt(frame, b.at)}>
						<rect x={xa} y={y} width={Math.max(0, xb - xa)} height={barH} rx={barH / 2} fill={c} />
						<rect x={xa} y={y} width={Math.max(0, xb - xa)} height={barH} rx={barH / 2} fill={`url(#${ID}-gloss)`} />
						{b.openStart && <path d={`M ${xa - 4} ${y + barH / 2} L ${xa + 14} ${y + 4} L ${xa + 14} ${y + barH - 4} Z`} fill="#fff" opacity={0.85} />}
						<text x={b.openStart ? xa + 22 : xa + 12} y={y + barH / 2 + 6} fontSize={16} fontWeight={800} fill="#fff" opacity={fadeAt(frame, b.at + 25)}>
							{b.label}
						</text>
						{b.sub && (
							<text x={xa + 12} y={y + barH + 18} fontSize={14} fontWeight={700} fill={TOK.inkDim} opacity={fadeAt(frame, b.at + 30)}>
								{b.sub}
							</text>
						)}
					</g>
				);
			})}
			{markers.map((m, i) => (
				<g key={i} opacity={fadeAt(frame, m.at)}>
					<line x1={gx(m.ka)} y1={axisY - 2} x2={gx(m.ka)} y2={axisY - 44} stroke={PAL.stop} strokeWidth={2.5} />
					<circle cx={gx(m.ka)} cy={axisY - 48} r={6} fill={PAL.stop} />
					<Tag x={Math.min(X1 - 40, Math.max(X0 + 40, gx(m.ka)))} y={axisY - 72} text={m.label} color={PAL.stop} size={15} />
				</g>
			))}
			<Foot lines={footer} frame={frame} fade={fadeAt} />
		</svg>
	);
};
