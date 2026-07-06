// LessonProgressBar — thin amber strip pinned to the very top edge,
// filling from left to right as the lesson plays. Gives students a
// constant sense of "how much further" without any heavy chrome.

import {useCurrentFrame, interpolate, AbsoluteFill} from 'remotion';
import {TOK} from '../../styles/tokens';

type Props = {
	totalFrames: number;
};

export const LessonProgressBar = ({totalFrames}: Props) => {
	const frame = useCurrentFrame();
	const progress = interpolate(frame, [0, totalFrames], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill style={{pointerEvents: 'none', zIndex: 60}}>
			{/* Background track */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					height: 3,
					background: 'rgba(255,255,255,0.04)',
				}}
			/>
			{/* Filled progress */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					height: 3,
					width: `${progress * 100}%`,
					background: TOK.amber,
					boxShadow: `0 0 12px ${TOK.amber}`,
				}}
			/>
		</AbsoluteFill>
	);
};
