// PriorRecap — the "previously…" callback that flashes at the start of
// each scene with the prior scene's takeaway. Spaced-repetition done in
// micro: the student gets a 3-second recall hit before the new content
// lands.
//
// Driven by the prior scene's `recapSeed` (one short sentence). The
// component fades in immediately, holds for ~3s, then fades away as the
// main slide content reveals.

import {useCurrentFrame, interpolate} from 'remotion';
import {ConceptText} from './ConceptText';
import {FONT_MONO, TOK} from '../../styles/tokens';

type PriorRecapProps = {
	text: string | undefined | null;
};

const FADE_IN_END = 12;
const HOLD_UNTIL = 90;
const FADE_OUT_END = 110;

export const PriorRecap = ({text}: PriorRecapProps) => {
	const frame = useCurrentFrame();
	if (!text) return null;

	const opacity = interpolate(
		frame,
		[0, FADE_IN_END, HOLD_UNTIL, FADE_OUT_END],
		[0, 1, 1, 0],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
	);
	if (opacity <= 0) return null;

	const dy = interpolate(frame, [0, FADE_IN_END], [-10, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				position: 'absolute',
				top: 70,
				left: '50%',
				transform: `translateX(-50%) translateY(${dy}px)`,
				opacity,
				zIndex: 40,
				pointerEvents: 'none',
			}}
		>
			<div
				style={{
					display: 'inline-flex',
					alignItems: 'center',
					gap: 14,
					padding: '8px 22px',
					background: 'rgba(15,22,20,0.66)',
					border: `1px solid rgba(255,255,255,0.08)`,
					borderRadius: 999,
					backdropFilter: 'blur(6px)',
					WebkitBackdropFilter: 'blur(6px)',
				}}
			>
				<span
					style={{
						fontFamily: FONT_MONO,
						fontSize: 12,
						letterSpacing: '0.18em',
						color: TOK.inkMute,
						textTransform: 'uppercase',
					}}
				>
					↻ previously
				</span>
				<span
					style={{
						fontSize: 18,
						color: TOK.inkDim,
						fontWeight: 500,
						letterSpacing: '-0.005em',
					}}
				>
					<ConceptText baseColor={TOK.inkDim}>{text}</ConceptText>
				</span>
			</div>
		</div>
	);
};
