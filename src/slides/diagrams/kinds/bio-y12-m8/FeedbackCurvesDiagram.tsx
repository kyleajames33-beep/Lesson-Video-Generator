// FeedbackCurvesDiagram — negative versus positive feedback as two
// self-drawing graphs, each with a glossy gauge ball on a stone plinth that
// rides the curve's current value.
//
// Negative: a stimulus kicks the variable off its set point, then the
// correction shrinks as the gap shrinks, so the line oscillates in to the set
// point (self-limiting). Positive: the change feeds itself, so the line climbs
// ever faster until an outside event (props) stops the loop. The curves are
// qualitative (no numbers on the axes) because the scene gives none.
//
// Beats are frames after `delay`. Hold: the gauges jostle, the stop marker
// breathes.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, Pill, clamp, fadeAt, polyD, textWidth} from './shared';

type Neg = {title: string; at: number; doneAt: number; label?: string};
type Pos = {title: string; at: number; stopAt: number; stopLabel: string; loop?: {steps: string[]; at: number}};

export type FeedbackCurvesProps = {negative: Neg; positive: Pos; notes?: Note[]; delay?: number};

const ID = 'b12m8fbc';
const W = 760;
const H = 530;
const GX0 = 196, GX1 = 736;

const negV = (t: number) => {
	if (t < 0.06) return 0;
	if (t < 0.12) return ((t - 0.06) / 0.06) * 0.85;
	const tau = t - 0.12;
	return 0.85 * Math.exp(-tau / 0.2) * Math.cos((tau / 0.26) * Math.PI * 2);
};
const TS = 0.78; // positive: stop time (fraction of the x axis)
const posV = (t: number) => {
	if (t < 0.06) return 0;
	if (t <= TS) return (Math.exp((t - 0.06) * 4.2) - 1) / (Math.exp((TS - 0.06) * 4.2) - 1);
	return Math.max(0, 1 - (t - TS) / 0.05);
};

export const FeedbackCurvesDiagram = ({negative, positive, notes = [], delay = 62}: FeedbackCurvesProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();

	const panel = (kind: 'neg' | 'pos', top: number) => {
		const cfg = kind === 'neg' ? negative : positive;
		const o = fadeAt(frame, cfg.at, 14);
		if (o <= 0) return null;
		const gy0 = top + 40, gy1 = top + 196;
		const base = kind === 'neg' ? (gy0 + gy1) / 2 + 10 : gy1 - 10;
		const amp = kind === 'neg' ? 62 : 122;
		const f = kind === 'neg' ? negV : posV;
		let pen: number;
		if (kind === 'neg') pen = interpolate(frame, [negative.at + 10, negative.doneAt], [0, 1], clamp);
		else pen = frame < positive.stopAt ? interpolate(frame, [positive.at + 10, positive.stopAt], [0, TS], clamp) : interpolate(frame, [positive.stopAt, positive.stopAt + 40], [TS, 1], clamp);
		const gx = (t: number) => GX0 + t * (GX1 - GX0);
		const gy = (v: number) => base - v * amp;
		const pts = Array.from({length: 121}, (_, k) => (k / 120) * pen).map((t) => ({x: gx(t), y: gy(f(t))}));
		const v = f(pen);
		const col = kind === 'neg' ? theme.accent : COL.red;
		// gauge
		const gX = 88, tubeTop = top + 46, tubeBot = top + 176;
		const ballY = Math.max(tubeTop + 10, Math.min(tubeBot - 10, kind === 'neg' ? (tubeTop + tubeBot) / 2 - v * 48 : tubeBot - 12 - v * 104)) + idleBob(frame, kind === 'neg' ? 1 : 2, 1.2);
		const stopO = kind === 'pos' ? fadeAt(frame, positive.stopAt, 12) : 0;
		return (
			<g opacity={o}>
				<text x={20} y={top + 22} fill={TOK.ink} fontSize={21} fontWeight={800}>{cfg.title}</text>
				<DioramaPlinth id={`${ID}${kind}`} cx={gX} cy={tubeBot + 10} rx={56} />
				<rect x={gX - 13} y={tubeTop} width={26} height={tubeBot - tubeTop} rx={13} fill="rgba(255,255,255,0.7)" stroke="#b9c2cc" strokeWidth={2} />
				{kind === 'neg' && <line x1={gX - 20} y1={(tubeTop + tubeBot) / 2} x2={gX + 20} y2={(tubeTop + tubeBot) / 2} stroke={theme.accent} strokeWidth={2.5} strokeDasharray="4 3" />}
				<circle cx={gX} cy={ballY} r={11} fill={`url(#${ID}-g-${kind})`} stroke="rgba(0,0,0,0.3)" />
				{/* axes */}
				<line x1={GX0} y1={gy1} x2={GX1} y2={gy1} stroke={TOK.inkMute} strokeWidth={2} />
				<line x1={GX0} y1={gy0} x2={GX0} y2={gy1} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={GX1} y={gy1 + 20} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>time →</text>
				<text x={GX0 - 8} y={gy0 + 4} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>variable</text>
				{kind === 'neg' && (
					<g>
						<line x1={GX0} y1={base} x2={GX1} y2={base} stroke={theme.accent} strokeWidth={2} strokeDasharray="7 6" opacity={0.7} />
						<text x={GX1} y={base - 8} textAnchor="end" fill={theme.accent} fontSize={15} fontWeight={800}>set point</text>
					</g>
				)}
				<path d={polyD(pts)} stroke={col} strokeWidth={4.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
				{pen > 0 && pen < 1 && <circle cx={gx(pen)} cy={gy(v)} r={6} fill={col} stroke="#ffffff" strokeWidth={2} />}
				{kind === 'neg' && negative.label && (
					<text x={gx(0.62)} y={gy1 - 10} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800} opacity={fadeAt(frame, negative.doneAt - 20, 14)}>{negative.label}</text>
				)}
				{kind === 'pos' && positive.loop && (
					<g opacity={fadeAt(frame, positive.loop.at, 14)}>
						{(() => {
							let x = GX0 + 16;
							return positive.loop.steps.map((st, k) => {
								const text = st + (k < positive.loop!.steps.length - 1 ? ' →' : ' ↺');
								const el = <Pill key={k} x={x} y={gy0 + 2} text={text} color={COL.red} size={15} anchor="start" />;
								x += textWidth(text, 15) + 22 + 8;
								return el;
							});
						})()}
					</g>
				)}
				{kind === 'pos' && (
					<g opacity={stopO}>
						<line x1={gx(TS)} y1={gy0 + 20} x2={gx(TS)} y2={gy1} stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame) * 1.5} strokeDasharray="6 5" />
						<text x={gx(TS) - 8} y={gy1 - 12} textAnchor="end" fill={TOK.amberInk} fontSize={16} fontWeight={800}>{positive.stopLabel}</text>
					</g>
				)}
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Negative feedback settles on the set point; positive feedback runs away until stopped" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{neg: '#3f6fd8', pos: COL.red}} />
			{panel('neg', 0)}
			{panel('pos', 240)}
			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 8 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
