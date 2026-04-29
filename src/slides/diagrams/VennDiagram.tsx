import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Props = {leftLabel: string; rightLabel: string; overlapLabel: string; delay?: number};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const VennDiagram = ({leftLabel, rightLabel, overlapLabel, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Final centres: left=(255,195) right=(445,195) radius=148
	// Left-only centre ≈ x=165, overlap centre ≈ x=350, right-only centre ≈ x=535
	const leftP  = spring({frame: frame - delay,     fps, config: {damping: 18, stiffness: 120, mass: 1.1}});
	const rightP = spring({frame: frame - delay - 7, fps, config: {damping: 18, stiffness: 120, mass: 1.1}});
	const labelOpacity = interpolate(frame, [delay + 34, delay + 54], [0, 1], clamp);

	const leftX  = interpolate(leftP,  [0, 1], [-90, 255]);
	const rightX = interpolate(rightP, [0, 1], [790, 445]);

	return (
		<svg viewBox="0 0 700 390" className="diagram">
			{/* Left circle — indigo */}
			<circle cx={leftX} cy={195} r={148}
				fill="rgba(79,70,229,0.10)" stroke="rgba(79,70,229,0.55)" strokeWidth="2.5" />

			{/* Right circle — amber */}
			<circle cx={rightX} cy={195} r={148}
				fill="rgba(245,158,11,0.10)" stroke="rgba(245,158,11,0.55)" strokeWidth="2.5" />

			{/* Labels fade in once circles have settled */}
			<g opacity={labelOpacity}>
				<text x="168" y="200" textAnchor="middle" fontSize="26" fontWeight="800" fill="#3730a3">{leftLabel}</text>
				<text x="350" y="200" textAnchor="middle" fontSize="21" fontWeight="700" fill="#44403c">{overlapLabel}</text>
				<text x="532" y="200" textAnchor="middle" fontSize="26" fontWeight="800" fill="#92400e">{rightLabel}</text>
			</g>
		</svg>
	);
};
