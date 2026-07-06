// ConfidenceCheck — small metacognitive badge that appears late in the
// scene as "By now you should be able to: {text}". Encourages students to
// pause and self-assess.
//
// Visual: bottom-right corner, chem2-teal accent, fades in around 65% of
// the scene's audio length and holds to the end. Sits below callouts so
// it doesn't compete during the climax of the scene.

import {useCurrentFrame, interpolate} from 'remotion';
import {ConceptText} from './ConceptText';
import {FONT_MONO, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';

type ConfidenceCheckProps = {
	text: string | undefined | null;
	/** Frame at which the badge should start appearing. */
	appearAtFrame: number;
};

const FADE_FRAMES = 18;

export const ConfidenceCheck = ({text, appearAtFrame}: ConfidenceCheckProps) => {
	const frame = useCurrentFrame();
	const theme = useAccent();
	if (!text) return null;

	const opacity = interpolate(
		frame,
		[appearAtFrame, appearAtFrame + FADE_FRAMES],
		[0, 1],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
	);
	if (opacity <= 0) return null;

	const dy = interpolate(
		frame,
		[appearAtFrame, appearAtFrame + FADE_FRAMES],
		[14, 0],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
	);

	return (
		<div
			style={{
				position: 'absolute',
				bottom: 142,
				right: 64,
				maxWidth: 540,
				opacity,
				transform: `translateY(${dy}px)`,
				zIndex: 45,
				pointerEvents: 'none',
			}}
		>
			<div
				style={{
					padding: '12px 18px 14px',
					background: 'rgba(15,22,20,0.78)',
					border: `1px solid ${theme.accent2}75`,
					borderLeft: `4px solid ${theme.accent2}`,
					borderRadius: 6,
					boxShadow: '0 14px 40px rgba(0,0,0,0.28)',
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 8,
						marginBottom: 6,
					}}
				>
					<span
						style={{
							fontFamily: FONT_MONO,
							fontSize: 12,
							letterSpacing: '0.18em',
							color: theme.accent2,
							textTransform: 'uppercase',
							fontWeight: 700,
						}}
					>
						✓ You should now be able to
					</span>
				</div>
				<div
					style={{
						fontSize: 18,
						color: TOK.ink,
						fontWeight: 600,
						lineHeight: 1.32,
						letterSpacing: '-0.005em',
					}}
				>
					<ConceptText baseColor={TOK.ink}>{text}</ConceptText>
				</div>
			</div>
		</div>
	);
};
