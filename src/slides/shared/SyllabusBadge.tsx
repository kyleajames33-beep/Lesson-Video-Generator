// SyllabusBadge — discreet NESA outcome chip in the bottom-left corner.
// Tells teachers and students which dot point this scene addresses.
// Defaults to the lesson's first dot point unless the scene overrides.

import {useCurrentFrame, interpolate} from 'remotion';
import {FONT_MONO, TOK} from '../../styles/tokens';

type SyllabusBadgeProps = {
	dotPoints: string[];
	index?: number;
	syllabusModule?: string;
};

const FADE_IN_END = 30;

export const SyllabusBadge = ({dotPoints, index = 0, syllabusModule}: SyllabusBadgeProps) => {
	const frame = useCurrentFrame();
	if (!dotPoints || dotPoints.length === 0 || index < 0) return null;
	const point = dotPoints[index];
	if (!point) return null;

	const opacity = interpolate(frame, [12, FADE_IN_END], [0, 0.85], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	if (opacity <= 0) return null;

	// Try to pull a module code like "Module 2:" -> "M2"
	const code = syllabusModule?.match(/Module\s+(\d+)/i)?.[1];
	const codeLabel = code ? `NESA · M${code}` : 'NESA';

	return (
		<div
			style={{
				position: 'absolute',
				bottom: 88,
				left: 64,
				opacity,
				zIndex: 35,
				pointerEvents: 'none',
				maxWidth: 520,
			}}
		>
			<div
				style={{
					display: 'inline-flex',
					alignItems: 'flex-start',
					gap: 14,
					padding: '8px 16px 10px',
					background: 'rgba(15,22,20,0.55)',
					border: `1px solid rgba(255,255,255,0.06)`,
					borderRadius: 6,
					backdropFilter: 'blur(6px)',
					WebkitBackdropFilter: 'blur(6px)',
				}}
			>
				<span
					style={{
						fontFamily: FONT_MONO,
						fontSize: 11,
						letterSpacing: '0.18em',
						color: TOK.inkMute,
						textTransform: 'uppercase',
						whiteSpace: 'nowrap',
						paddingTop: 2,
					}}
				>
					◆ {codeLabel}
				</span>
				<span
					style={{
						fontSize: 14,
						color: TOK.inkDim,
						lineHeight: 1.3,
						fontWeight: 500,
						letterSpacing: '-0.005em',
						maxWidth: 380,
					}}
				>
					{point}
				</span>
			</div>
		</div>
	);
};
