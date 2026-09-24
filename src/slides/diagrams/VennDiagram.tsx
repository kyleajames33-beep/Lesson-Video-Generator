// VennDiagram — two overlapping sets in the subject accent (left) and amber
// (right). Labels are HTML so they wrap inside their region instead of
// running into each other (the legacy SVG labels were single-line and
// collided in the overlap for anything over ~12 characters).

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, FONT_MONO, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';

type Props = {leftLabel: string; rightLabel: string; overlapLabel: string; delay?: number};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// Sized to the concept VisualStage's inner box (~744×554).
const W = 740;
const H = 460;
const R = 185;
const CX_L = 280;
const CX_R = 460;
const CY = 230;

const fit = (text: string, base: number) => (text.length > 30 ? base - 6 : text.length > 18 ? base - 3 : base);

export const VennDiagram = ({leftLabel, rightLabel, overlapLabel, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const leftP = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 120, mass: 1.1}});
	const rightP = spring({frame: frame - delay - 7, fps, config: {damping: 18, stiffness: 120, mass: 1.1}});
	const labelOpacity = interpolate(frame, [delay + 30, delay + 48], [0, 1], clamp);
	const overlapOpacity = interpolate(frame, [delay + 44, delay + 62], [0, 1], clamp);

	const leftX = interpolate(leftP, [0, 1], [CX_L - 120, CX_L]);
	const rightX = interpolate(rightP, [0, 1], [CX_R + 120, CX_R]);

	const label = (text: string, cx: number, width: number, color: string, size: number, weight: number, opacity: number) => (
		<div
			style={{
				position: 'absolute',
				left: cx - width / 2,
				top: 0,
				bottom: 0,
				width,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				fontSize: size,
				fontWeight: weight,
				lineHeight: 1.15,
				letterSpacing: '-0.01em',
				color,
				opacity,
			}}
		>
			{text}
		</div>
	);

	return (
		<div style={{position: 'relative', width: W, height: H, fontFamily: FONT_DISPLAY}}>
			<svg width={W} height={H} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<circle cx={leftX} cy={CY} r={R} fill={`${theme.accent2}1a`} stroke={theme.accent} strokeOpacity={0.55} strokeWidth={3} />
				<circle cx={rightX} cy={CY} r={R} fill={`${TOK.amber}1a`} stroke={TOK.amber} strokeOpacity={0.7} strokeWidth={3} />
			</svg>
			{label(leftLabel, 185, 165, theme.accent, fit(leftLabel, 30), 760, labelOpacity)}
			{label(rightLabel, 555, 165, TOK.amberInk, fit(rightLabel, 30), 760, labelOpacity)}
			{label(overlapLabel, 370, 140, TOK.ink, fit(overlapLabel, 24), 600, overlapOpacity)}
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					bottom: -6,
					textAlign: 'center',
					fontFamily: FONT_MONO,
					fontSize: 15,
					letterSpacing: '0.16em',
					color: TOK.inkMute,
					opacity: overlapOpacity,
				}}
			>
				SHARED ↑
			</div>
		</div>
	);
};
