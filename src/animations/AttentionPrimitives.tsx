import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
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

