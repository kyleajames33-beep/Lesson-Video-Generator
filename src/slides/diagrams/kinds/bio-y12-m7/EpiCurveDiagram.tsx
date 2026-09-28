// EpiCurveDiagram (bio12m7EpiCurve) — epidemic curves: new cases by day of
// symptom onset, built bar by bar on stone ledges.
//
// Each panel is one classic shape, chosen by `shape`:
//  point       one sharp peak, every case inside one incubation period
//  continuous  a sustained plateau while the exposure continues
//  propagated  successive waves one incubation period apart, each bigger
// Bar heights are a stylised pattern (no case numbers on screen): only the
// shape is the claim. The incubation-period bracket is measured from the bars
// themselves, so it always spans the drawn peak or wave spacing.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idlePulse} from '../../diorama';
import {H, Lines, Title, W, clamp, fadeAt, shade, wrap} from './shared';

type Shape = 'point' | 'continuous' | 'propagated';
export type EpiPanel = {shape: Shape; name: string; note?: string; at: number; drawEnd?: number; bracketAt?: number; noteAt?: number; bracket?: string};
export type EpiCurveProps = {title?: string; xLabel?: string; panels: EpiPanel[]; footer?: {text: string; at: number}; delay?: number};

const ID = 'b12m7epi';
const BARS: Record<Shape, number[]> = {
	point: [0, 1, 3, 8, 12, 9, 5, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	continuous: [0, 1, 3, 6, 8, 9, 8, 9, 9, 8, 9, 8, 9, 9, 8, 9, 8, 7, 4, 2, 1, 0],
	propagated: [0, 1, 2, 1, 0, 0, 1, 3, 4, 2, 1, 0, 2, 5, 9, 8, 5, 2, 1, 1, 0, 0],
};
// Bars that bound one incubation period for the bracket, per shape.
const SPAN: Record<Shape, [number, number]> = {point: [1, 9], continuous: [1, 9], propagated: [2, 8]};

export const EpiCurveDiagram = ({title, xLabel = 'day of symptom onset →', panels, footer, delay = 62}: EpiCurveProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const top = title ? 52 : 12;
	const bottom = footer ? H - 34 : H - 8;
	const rowH = (bottom - top) / panels.length;
	const labelW = 200;
	const cx0 = labelW + 18;
	const cw = W - cx0 - 16;
	const n = BARS.point.length;
	const bw = cw / n;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Epidemic curves'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<linearGradient id={`${ID}-bar`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor={shade(theme.accent, 0.18)} />
					<stop offset="55%" stopColor={theme.accent} />
					<stop offset="100%" stopColor={shade(theme.accent, -0.18)} />
				</linearGradient>
				<linearGradient id={`${ID}-ledge`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#e4e1db" />
					<stop offset="100%" stopColor="#b3afa7" />
				</linearGradient>
			</defs>
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{panels.map((p, i) => {
				const y0 = top + rowH * i;
				const base = y0 + rowH - 30;
				const hMax = rowH - 50;
				const bars = BARS[p.shape];
				const peak = Math.max(...bars);
				const end = p.drawEnd ?? p.at + 150;
				const grown = interpolate(frame, [p.at, end], [0, n], {...clamp, easing: Easing.inOut(Easing.quad)});
				const on = fadeAt(frame, p.at - 8);
				const [s0, s1] = SPAN[p.shape];
				const active = frame >= p.at && (i === panels.length - 1 || frame < panels[i + 1].at);
				return (
					<g key={i} opacity={on}>
						{/* stone ledge */}
						<rect x={cx0 - 8} y={base} width={cw + 16} height={10} rx={3} fill={`url(#${ID}-ledge)`} />
						<rect x={cx0 - 4} y={base + 10} width={cw + 8} height={5} rx={2} fill="rgba(40,36,30,0.18)" />
						{bars.map((v, k) => {
							const g = Math.max(0, Math.min(1, grown - k));
							if (g <= 0 || v === 0) return null;
							const h = (v / peak) * hMax * g;
							return (
								<g key={k}>
									<rect x={cx0 + k * bw + 1.5} y={base - h} width={bw - 3} height={h} rx={2} fill={`url(#${ID}-bar)`} />
									<rect x={cx0 + k * bw + 3} y={base - h + 2} width={3} height={Math.max(0, h - 4)} rx={1.5} fill="#ffffff" opacity={0.35} />
								</g>
							);
						})}
						{/* incubation-period bracket */}
						{p.bracket && (
							<g opacity={fadeAt(frame, p.bracketAt ?? end)}>
								<path d={`M ${cx0 + s0 * bw} ${y0 + 22} L ${cx0 + s0 * bw} ${y0 + 16} L ${cx0 + s1 * bw} ${y0 + 16} L ${cx0 + s1 * bw} ${y0 + 22}`} fill="none" stroke={TOK.amber} strokeWidth={2.5} />
								<text x={cx0 + s1 * bw + 8} y={y0 + 22} fill={TOK.amberInk} fontSize={16} fontWeight={800}>{p.bracket}</text>
							</g>
						)}
						{/* label */}
						<rect x={8} y={y0 + 8} width={labelW - 4} height={rowH - 22} rx={12} fill={active ? theme.soft : '#ffffff'} stroke={active ? theme.accent : TOK.rule} strokeWidth={active ? 1.5 + idlePulse(frame) : 1} />
						<Lines x={20} y={y0 + 34} lines={wrap(p.name, 18)} size={19} color={theme.accent} anchor="start" />
						{p.note && <Lines x={20} y={y0 + 34 + wrap(p.name, 18).length * 22 + 2} lines={wrap(p.note, 22)} size={15} color={TOK.inkDim} weight={700} anchor="start" opacity={fadeAt(frame, p.noteAt ?? end)} />}
					</g>
				);
			})}
			<text x={W - 16} y={bottom + 2} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, panels[0]?.at ?? 0)}>{xLabel}</text>
			{footer && (
				<text x={W / 2} y={H - 8} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={fadeAt(frame, footer.at)}>{footer.text}</text>
			)}
		</svg>
	);
};
