// VennDiagram — two overlapping sets in the diorama family.
//
// The sets are painted discs, lit from the top-left, casting one soft shadow
// on the ground: the subject accent on the left, a warm clay on the right.
// The overlap is what these scenes are about ("like dissolves like", "same
// DNA bases"), so it is the one amber thing on screen: it lands when the
// narration reaches it and breathes gently through the hold.
//
// Labels are HTML so they wrap inside their region instead of running into
// each other (the legacy SVG labels were single-line and collided in the
// overlap for anything over ~12 characters).

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, FONT_MONO, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {idleBob, idlePulse} from './diorama';
import {clamp, idHash, shade} from './kinds/restyle-generic/paint';
import {buildStart, mentionOf, sceneTimingFor} from './kinds/restyle-generic/sceneSync';

type Props = {leftLabel: string; rightLabel: string; overlapLabel: string; delay?: number};

// Sized to the concept VisualStage's inner box (~744×554).
const W = 740;
const H = 460;
const R = 185;
const CX_L = 280;
const CX_R = 460;
const CY = 222;
const CLAY = '#b8683c';

const fit = (text: string, base: number) => (text.length > 30 ? base - 6 : text.length > 18 ? base - 3 : base);

export const VennDiagram = ({leftLabel, rightLabel, overlapLabel, delay}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const ID = `venn-${idHash(leftLabel + rightLabel + overlapLabel)}`;

	const timing = sceneTimingFor('venn', [leftLabel, rightLabel, overlapLabel]);
	const start = buildStart(delay, timing);
	const said = timing ? mentionOf(timing, overlapLabel) : undefined;
	const overlapAt = said ? Math.min(Math.round(timing!.durationInFrames * 0.6), Math.max(start + 44, said.frame - 10)) : start + 44;

	const leftP = spring({frame: frame - start, fps, config: {damping: 18, stiffness: 120, mass: 1.1}});
	const rightP = spring({frame: frame - start - 7, fps, config: {damping: 18, stiffness: 120, mass: 1.1}});
	const labelOpacity = interpolate(frame, [start + 30, start + 48], [0, 1], clamp);
	const overlapOpacity = interpolate(frame, [overlapAt, overlapAt + 18], [0, 1], clamp);
	const hold = interpolate(frame, [overlapAt + 30, overlapAt + 60], [0, 1], clamp);
	const pulse = idlePulse(frame, 72) * hold;

	const leftX = interpolate(leftP, [0, 1], [CX_L - 120, CX_L]);
	const rightX = interpolate(rightP, [0, 1], [CX_R + 120, CX_R]);
	const bobL = idleBob(frame, 1, 1.6) * hold;
	const bobR = idleBob(frame, 4, 1.6) * hold;

	const label = (text: string, cx: number, width: number, color: string, size: number, weight: number, opacity: number) => (
		<div
			style={{
				position: 'absolute',
				left: cx - width / 2,
				top: 0,
				height: CY * 2,
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

	const disc = (key: string, cx: number, cy: number, color: string, o: number) => (
		<g key={key} opacity={o}>
			<circle cx={cx} cy={cy} r={R} fill={`url(#${ID}-${key})`} />
			<circle cx={cx} cy={cy} r={R} fill="none" stroke={shade(color, -0.05)} strokeOpacity={0.6} strokeWidth={3} />
			{/* specular crescent, top-left */}
			<path d={`M ${cx - R * 0.72} ${cy - R * 0.3} A ${R * 0.8} ${R * 0.8} 0 0 1 ${cx - R * 0.2} ${cy - R * 0.78}`} stroke="#ffffff" strokeOpacity={0.55} strokeWidth={7} strokeLinecap="round" fill="none" />
		</g>
	);

	return (
		<div style={{position: 'relative', width: W, height: H, fontFamily: FONT_DISPLAY}}>
			<svg width={W} height={H} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<defs>
					{[
						['l', theme.accent2],
						['r', CLAY],
					].map(([k, c]) => (
						<radialGradient key={k} id={`${ID}-${k}`} cx="38%" cy="30%" r="75%">
							<stop offset="0%" stopColor="#ffffff" stopOpacity={0.55} />
							<stop offset="55%" stopColor={c} stopOpacity={0.14} />
							<stop offset="100%" stopColor={shade(c, -0.1)} stopOpacity={0.3} />
						</radialGradient>
					))}
					<clipPath id={`${ID}-clipL`}>
						<circle cx={leftX} cy={CY + bobL} r={R} />
					</clipPath>
					<clipPath id={`${ID}-clipR`}>
						<circle cx={rightX} cy={CY + bobR} r={R} />
					</clipPath>
					<filter id={`${ID}-blur`} x="-30%" y="-30%" width="160%" height="160%">
						<feGaussianBlur stdDeviation="10" />
					</filter>
				</defs>
				{/* one soft ground shadow under both sets */}
				<ellipse cx={(leftX + rightX) / 2 + 8} cy={CY + R + 16} rx={(rightX - leftX) / 2 + R * 0.9} ry={22} fill="rgba(58,40,18,0.16)" filter={`url(#${ID}-blur)`} opacity={Math.min(leftP, 1)} />
				{disc('l', leftX, CY + bobL, theme.accent2, 1)}
				{disc('r', rightX, CY + bobR, CLAY, 1)}
				{/* the overlap: the one amber thing */}
				<g clipPath={`url(#${ID}-clipL)`} opacity={overlapOpacity}>
					<circle cx={rightX} cy={CY + bobR} r={R} fill={TOK.amber} fillOpacity={0.14 + 0.08 * pulse} />
					<circle cx={rightX} cy={CY + bobR} r={R} fill="none" stroke={TOK.amber} strokeWidth={3 + 2 * pulse} />
				</g>
				<g clipPath={`url(#${ID}-clipR)`} opacity={overlapOpacity}>
					<circle cx={leftX} cy={CY + bobL} r={R} fill="none" stroke={TOK.amber} strokeWidth={3 + 2 * pulse} />
				</g>
			</svg>
			{label(leftLabel, 185, 165, theme.accent, fit(leftLabel, 30), 760, labelOpacity)}
			{label(rightLabel, 555, 165, shade(CLAY, -0.12), fit(rightLabel, 30), 760, labelOpacity)}
			{label(overlapLabel, 370, 150, TOK.ink, fit(overlapLabel, 26), 700, overlapOpacity)}
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					bottom: -6,
					textAlign: 'center',
					fontFamily: FONT_MONO,
					fontSize: 16,
					fontWeight: 700,
					letterSpacing: '0.16em',
					color: TOK.amberInk,
					opacity: overlapOpacity,
				}}
			>
				SHARED ↑
			</div>
		</div>
	);
};
