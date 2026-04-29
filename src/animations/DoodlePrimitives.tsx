import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const DoodleArrow = ({
	delay = 0,
	direction = 'right',
}: {
	delay?: number;
	direction?: 'right' | 'down';
}) => {
	const frame = useCurrentFrame();
	const draw = interpolate(frame, [delay, delay + 28], [0, 1], clamp);
	const rotate = direction === 'down' ? 90 : 0;

	return (
		<svg
			className="doodle-arrow"
			viewBox="0 0 160 62"
			style={{transform: `rotate(${rotate}deg)`}}
			aria-hidden
		>
			<path
				d="M8 34 C42 20, 70 48, 112 24 C126 16, 138 15, 150 20"
				pathLength={100}
				strokeDasharray={100}
				strokeDashoffset={(1 - draw) * 100}
			/>
			<path
				d="M132 8 L152 20 L132 34"
				pathLength={100}
				strokeDasharray={100}
				strokeDashoffset={(1 - draw) * 100}
			/>
		</svg>
	);
};

export const MistakeTag = ({text, delay = 0}: {text: string; delay?: number}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const pop = spring({
		frame: frame - delay,
		fps,
		config: {damping: 10, stiffness: 260, mass: 0.65},
	});
	const opacity = interpolate(frame, [delay, delay + 10], [0, 1], clamp);
	const rotate = interpolate(pop, [0, 1], [-4, -1.5], clamp);
	const scale = interpolate(pop, [0, 1], [0.72, 1], clamp);

	return (
		<div
			className="mistake-tag"
			style={{opacity, transform: `rotate(${rotate}deg) scale(${scale})`}}
		>
			{text}
		</div>
	);
};

export const UnitCancel = ({
	left,
	right,
	result,
	delay = 0,
	compact = false,
}: {
	left: string;
	right: string;
	result: string;
	delay?: number;
	compact?: boolean;
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const pop = spring({
		frame: frame - delay,
		fps,
		config: {damping: 15, stiffness: 220, mass: 0.75},
	});
	const opacity = interpolate(frame, [delay, delay + 12], [0, 1], clamp);
	const y = interpolate(pop, [0, 1], [18, 0], clamp);
	const slash = interpolate(frame, [delay + 16, delay + 34], [0, 1], clamp);

	return (
		<div
			className={compact ? 'unit-cancel compact' : 'unit-cancel'}
			style={{opacity, transform: `translateY(${y}px)`}}
		>
			<div className="unit-cancel-pair">
				<span>
					{left}
					<svg viewBox="0 0 100 44" aria-hidden>
						<path d="M12 36 L88 8" pathLength={100} strokeDasharray={100} strokeDashoffset={(1 - slash) * 100} />
					</svg>
				</span>
				<b>×</b>
				<span>
					{right}
					<svg viewBox="0 0 100 44" aria-hidden>
						<path d="M12 36 L88 8" pathLength={100} strokeDasharray={100} strokeDashoffset={(1 - slash) * 100} />
					</svg>
				</span>
			</div>
			<div className="unit-cancel-result">{result}</div>
		</div>
	);
};
