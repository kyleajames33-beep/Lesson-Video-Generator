import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_MONO} from '../styles/tokens';
import type {CSSProperties, ReactNode} from 'react';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

type WrapProps = {children: ReactNode; className?: string; style?: CSSProperties};

// Vignette that dims edges, focuses attention on centre
export const Spotlight = ({intensity = 0.26, delay = 0}: {intensity?: number; delay?: number}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [delay, delay + 30], [0, 1], clamp);
	return (
		<div
			style={{
				position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
				background: `radial-gradient(ellipse 56% 60% at 50% 44%, transparent 26%, rgba(20,18,16,${intensity}) 100%)`,
				opacity,
			}}
		/>
	);
};

// Animated underline that draws itself left-to-right under children
export const UnderlineDraw = ({
	children,
	delay = 0,
	color = '#4f46e5',
	className,
}: {children: ReactNode; delay?: number; color?: string; className?: string}) => {
	const frame = useCurrentFrame();
	const progress = interpolate(frame, [delay, delay + 28], [0, 1], clamp);
	const eased = 1 - Math.pow(1 - progress, 3);
	return (
		<span style={{position: 'relative', display: 'inline-block'}} className={className}>
			{children}
			<span
				style={{
					position: 'absolute', bottom: -4, left: 0, right: 0, height: 4,
					background: color, borderRadius: 2,
					transform: `scaleX(${eased})`, transformOrigin: 'left center',
					boxShadow: `0 0 12px ${color}66`,
				}}
			/>
		</span>
	);
};

// Speech-bubble annotation that pops in
export const Callout = ({
	text,
	delay = 0,
	side = 'left',
}: {text: string; delay?: number; side?: 'left' | 'right'}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = spring({frame: frame - delay, fps, config: {damping: 14, stiffness: 260, mass: 0.6}});
	const scale = interpolate(progress, [0, 1], [0.5, 1], clamp);
	const opacity = interpolate(frame - delay, [0, 8], [0, 1], clamp);
	return (
		<div style={{position: 'relative', display: 'inline-block', opacity, transform: `scale(${scale})`, transformOrigin: `${side} bottom`}}>
			<div className="callout-bubble">{text}</div>
			<svg
				className="callout-tail"
				viewBox="0 0 24 13"
				style={{left: side === 'left' ? 22 : 'auto', right: side === 'right' ? 22 : 'auto'}}
			>
				<path d="M4 0 L12 13 L20 0 Z" fill="#4f46e5" />
			</svg>
		</div>
	);
};

// SVG checkmark that draws itself with a circle
export const Checkmark = ({
	delay = 0,
	size = 68,
	color = '#4f46e5',
}: {delay?: number; size?: number; color?: string}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const circleP = spring({frame: frame - delay, fps, config: {damping: 16, stiffness: 240, mass: 0.6}});
	const drawProgress = interpolate(frame, [delay + 6, delay + 28], [0, 1], clamp);
	const circleScale = interpolate(circleP, [0, 1], [0, 1], clamp);
	const dashOffset = (1 - drawProgress) * 100;
	return (
		<svg width={size} height={size} viewBox="0 0 64 64" style={{overflow: 'visible'}}>
			<circle cx="32" cy="32" r="28" fill={`${color}18`} stroke={color} strokeWidth="2.5"
				style={{transform: `scale(${circleScale})`, transformOrigin: '32px 32px'}} />
			<path
				d="M17 32 L27 44 L47 20"
				fill="none" stroke={color} strokeWidth="4.5"
				strokeLinecap="round" strokeLinejoin="round"
				pathLength={100} strokeDasharray={100} strokeDashoffset={dashOffset}
			/>
		</svg>
	);
};


// ─── P0.2 — Leader-line callout ─────────────────────────────────────────────
// Thin line draws from a diagram point out to a label, then text fades up.
// Use for labelling parts of a diagram simultaneously.

type LeaderLineCalloutProps = {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	label: string;
	delay?: number;
	lineColor?: string;
	labelColor?: string;
	lineDurationFrames?: number;
	labelDelayFrames?: number;
	labelDurationFrames?: number;
};

export const LeaderLineCallout = ({
	x1,
	y1,
	x2,
	y2,
	label,
	delay = 0,
	lineColor = TOK.amber,
	labelColor = TOK.ink,
	lineDurationFrames = 6,
	labelDelayFrames = 5,
	labelDurationFrames = 12,
}: LeaderLineCalloutProps) => {
	const frame = useCurrentFrame();
	const lineProgress = interpolate(frame, [delay, delay + lineDurationFrames], [0, 1], clamp);
	const lineEased = 1 - Math.pow(1 - lineProgress, 3);
	const lineLen = Math.hypot(x2 - x1, y2 - y1);
	const dashOffset = (1 - lineEased) * lineLen;

	const labelStart = delay + lineDurationFrames + labelDelayFrames;
	const labelOpacity = interpolate(frame, [labelStart, labelStart + 8], [0, 1], clamp);
	const labelTy = interpolate(frame, [labelStart, labelStart + labelDurationFrames], [14, 0], clamp);

	return (
		<div style={{position: 'absolute', left: 0, top: 0, pointerEvents: 'none'}}>
			<svg style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}} width="1" height="1" aria-hidden>
				<line
					x1={x1}
					y1={y1}
					x2={x2}
					y2={y2}
					stroke={lineColor}
					strokeWidth={2}
					strokeLinecap="round"
					strokeDasharray={lineLen}
					strokeDashoffset={dashOffset}
				/>
				<circle cx={x1} cy={y1} r={3} fill={lineColor} opacity={lineEased} />
			</svg>
			<div
				style={{
					position: 'absolute',
					left: x2,
					top: y2,
					transform: `translate(8px, calc(-50% + ${labelTy}px))`,
					fontFamily: FONT_MONO,
					fontSize: 18,
					color: labelColor,
					letterSpacing: '0.08em',
					whiteSpace: 'nowrap',
					opacity: labelOpacity,
				}}
			>
				{label}
			</div>
		</div>
	);
};

// ─── P0.3 — Highlight wipe on existing element ──────────────────────────────
// Translucent rectangle draws behind previously-rendered text by animating
// clip-path inset. Use to re-focus attention on a previously-introduced item.

type HighlightWipeProps = {
	children: ReactNode;
	color?: string;
	opacity?: number;
	delay?: number;
	durationFrames?: number;
	paddingX?: number;
	paddingY?: number;
	className?: string;
	style?: CSSProperties;
};

export const HighlightWipe = ({
	children,
	color = TOK.amber,
	opacity = 0.22,
	delay = 0,
	durationFrames = 12,
	paddingX = 6,
	paddingY = 3,
	className,
	style,
}: HighlightWipeProps) => {
	const frame = useCurrentFrame();
	const progress = interpolate(frame, [delay, delay + durationFrames], [0, 1], clamp);
	const eased = 1 - Math.pow(1 - progress, 3);
	const insetRight = (1 - eased) * 100;

	return (
		<span style={{position: 'relative', display: 'inline-block', ...style}} className={className}>
			<span
				style={{
					position: 'absolute',
					inset: `${-paddingY}px ${-paddingX}px`,
					background: color,
					opacity,
					borderRadius: 4,
					clipPath: `inset(0 ${insetRight}% 0 0)`,
					zIndex: 0,
				}}
				aria-hidden
			/>
			<span style={{position: 'relative', zIndex: 1}}>{children}</span>
		</span>
	);
};
