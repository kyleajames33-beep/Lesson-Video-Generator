// SceneProgress — ambient "the slide is moving" indicators.
//
// Two pieces, both keyed off the current scene's duration:
//   1. PerimeterTrace — a 1px line that travels the inside of the frame and
//      completes exactly when the scene ends. Starts top-left, runs clockwise.
//   2. CornerDial — a small filling arc in the top-right (next to the chrome
//      year label) that doubles as a quiet countdown.
//
// Both are decorative; they never block content and never reveal during the
// chrome's first 400ms entry.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_MONO, TOK} from '../../styles/tokens';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

type SceneProgressProps = {
	/** The scene's total duration in frames. Required for accurate completion. */
	durationInFrames: number;
	/** Stage width. Default 1920. */
	width?: number;
	/** Stage height. Default 1080. */
	height?: number;
	/** Inset from the stage edges. Default 36. */
	inset?: number;
	/** Trace stroke colour. Default TOK.chem1. */
	color?: string;
	/** Frames before the trace starts drawing. Default 18 (lets chrome land). */
	startDelay?: number;
};

export const SceneProgress = ({
	durationInFrames,
	width = 1920,
	height = 1080,
	inset = 36,
	color = TOK.chem1,
	startDelay = 18,
}: SceneProgressProps) => {
	const frame = useCurrentFrame();

	// Progress runs from startDelay to (durationInFrames - 6) so the line
	// completes a few frames before the cut. Easier on the eye than landing
	// exactly on the transition.
	const tailFrame = Math.max(startDelay + 12, durationInFrames - 6);
	const progress = interpolate(frame, [startDelay, tailFrame], [0, 1], clamp);

	// Settle-in for the trace itself (so it doesn't pop with chrome).
	const settled = interpolate(frame, [startDelay - 6, startDelay + 8], [0, 1], clamp);

	const w = width - inset * 2;
	const h = height - inset * 2;
	const perimeter = 2 * (w + h);
	const dashOffset = perimeter * (1 - progress);

	return (
		<>
			<svg
				aria-hidden
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					pointerEvents: 'none',
					opacity: settled,
				}}
			>
				{/* Faint guide rail (always visible at low opacity) */}
				<rect
					x={inset}
					y={inset}
					width={w}
					height={h}
					fill="none"
					stroke={color}
					strokeOpacity={0.06}
					strokeWidth={1}
					rx={6}
					ry={6}
				/>
				{/* The travelling line */}
				<rect
					x={inset}
					y={inset}
					width={w}
					height={h}
					fill="none"
					stroke={color}
					strokeOpacity={0.55}
					strokeWidth={1.5}
					strokeLinecap="round"
					rx={6}
					ry={6}
					strokeDasharray={perimeter}
					strokeDashoffset={dashOffset}
					style={{
						transition: 'none',
					}}
				/>
				{/* Bright leading head — a subtle dot at the line's tip */}
				<TraceHead
					inset={inset}
					w={w}
					h={h}
					progress={progress}
					color={color}
					settled={settled}
				/>
			</svg>
			<CornerDial
				progress={progress}
				color={color}
				settled={settled}
				totalSeconds={durationInFrames}
				frame={frame}
			/>
		</>
	);
};

type TraceHeadProps = {
	inset: number;
	w: number;
	h: number;
	progress: number;
	color: string;
	settled: number;
};

const TraceHead = ({inset, w, h, progress, color, settled}: TraceHeadProps) => {
	// Walk the rectangle perimeter clockwise from the top-left corner.
	const perim = 2 * (w + h);
	const dist = progress * perim;
	let cx = inset;
	let cy = inset;
	if (dist <= w) {
		cx = inset + dist;
		cy = inset;
	} else if (dist <= w + h) {
		cx = inset + w;
		cy = inset + (dist - w);
	} else if (dist <= 2 * w + h) {
		cx = inset + w - (dist - (w + h));
		cy = inset + h;
	} else {
		cx = inset;
		cy = inset + h - (dist - (2 * w + h));
	}

	if (progress <= 0 || progress >= 1) return null;

	return (
		<g opacity={settled}>
			<circle cx={cx} cy={cy} r={6} fill={color} opacity={0.18} />
			<circle cx={cx} cy={cy} r={2.4} fill={color} />
		</g>
	);
};

type CornerDialProps = {
	progress: number;
	color: string;
	settled: number;
	totalSeconds: number;
	frame: number;
};

const CornerDial = ({progress, color, settled, totalSeconds, frame}: CornerDialProps) => {
	const {fps} = useVideoConfig();
	const remaining = Math.max(0, Math.ceil((totalSeconds - frame) / fps));

	const size = 38;
	const stroke = 2;
	const r = (size - stroke) / 2;
	const c = 2 * Math.PI * r;
	const filled = c * progress;

	// Late-scene urgency — last 25% intensifies.
	const urgency = interpolate(progress, [0.75, 1], [0, 1], clamp);
	const ringOpacity = 0.45 + urgency * 0.45;

	return (
		<div
			style={{
				position: 'absolute',
				top: 36,
				right: 36,
				width: size,
				height: size,
				opacity: settled,
				pointerEvents: 'none',
			}}
		>
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
				{/* Track */}
				<circle
					cx={size / 2}
					cy={size / 2}
					r={r}
					fill="none"
					stroke={color}
					strokeOpacity={0.12}
					strokeWidth={stroke}
				/>
				{/* Sweep */}
				<circle
					cx={size / 2}
					cy={size / 2}
					r={r}
					fill="none"
					stroke={color}
					strokeOpacity={ringOpacity}
					strokeWidth={stroke}
					strokeLinecap="round"
					strokeDasharray={c}
					strokeDashoffset={c - filled}
					transform={`rotate(-90 ${size / 2} ${size / 2})`}
				/>
			</svg>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontFamily: FONT_MONO,
					fontSize: 11,
					letterSpacing: '0.06em',
					color: TOK.inkDim,
					opacity: 0.7 + urgency * 0.3,
				}}
			>
				{remaining}s
			</div>
		</div>
	);
};
