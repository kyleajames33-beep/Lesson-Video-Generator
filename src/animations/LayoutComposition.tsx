import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import type {CSSProperties, ReactNode} from 'react';
import {TRANSITION_FRAMES} from '../lesson/timing';

const clamp = {
	extrapolateLeft: 'clamp' as const,
	extrapolateRight: 'clamp' as const,
};

// ─── 36. Elastic Stagger ─────────────────────────────────────────────────────

type ElasticStaggerProps = {
	children: ReactNode[];
	baseDelay?: number;
	staggerDelay?: number;
	direction?: 'up' | 'down' | 'left' | 'right';
	className?: string;
	style?: CSSProperties;
};

export const ElasticStagger = ({
	children,
	baseDelay = 0,
	staggerDelay = 6,
	direction = 'up',
	className,
	style,
}: ElasticStaggerProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const dirMap = {
		up: {x: 0, y: 50},
		down: {x: 0, y: -50},
		left: {x: 50, y: 0},
		right: {x: -50, y: 0},
	};
	const {x: startX, y: startY} = dirMap[direction];

	return (
		<div className={className} style={{...style, display: 'flex', flexDirection: 'column', gap: 18}}>
			{children.map((child, index) => {
				const delay = baseDelay + index * staggerDelay;
				const progress = spring({
					frame: frame - delay,
					fps,
					config: {damping: 10, stiffness: 180, mass: 0.9},
				});
				const x = interpolate(progress, [0, 1], [startX, 0], clamp);
				const y = interpolate(progress, [0, 1], [startY, 0], clamp);
				const scale = interpolate(progress, [0, 0.5, 1], [0.86, 1.04, 1], clamp);
				const opacity = interpolate(frame - delay, [0, 8], [0, 1], clamp);

				return (
					<div
						key={index}
						style={{
							transform: `translate(${x}px, ${y}px) scale(${scale})`,
							opacity,
							transformOrigin: 'center',
						}}
					>
						{child}
					</div>
				);
			})}
		</div>
	);
};

// ─── 37. Kinetic Exit ────────────────────────────────────────────────────────

type KineticExitProps = {
	children: ReactNode;
	direction?: 'up' | 'down' | 'left' | 'right';
	distance?: number;
	rotate?: number;
	exitStartOffset?: number;
	className?: string;
	style?: CSSProperties;
};

export const KineticExit = ({
	children,
	direction = 'up',
	distance = 140,
	rotate = 8,
	exitStartOffset = 20,
	className,
	style,
}: KineticExitProps) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const exitStart = Math.max(0, durationInFrames - TRANSITION_FRAMES - exitStartOffset);
	const exitDuration = Math.min(exitStartOffset, durationInFrames - exitStart);
	const progress = interpolate(frame, [exitStart, exitStart + exitDuration], [0, 1], clamp);
	const eased = 1 - Math.pow(1 - progress, 3);

	const dirMap = {
		up: {x: 0, y: -1},
		down: {x: 0, y: 1},
		left: {x: -1, y: 0},
		right: {x: 1, y: 0},
	};
	const {x: dx, y: dy} = dirMap[direction];

	const x = eased * distance * dx;
	const y = eased * distance * dy;
	const rot = eased * rotate * (dx !== 0 ? -1 : 1);
	const opacity = interpolate(progress, [0, 0.55], [1, 0], clamp);
	const scale = interpolate(progress, [0, 1], [1, 0.92], clamp);

	return (
		<div
			className={className}
			style={{
				...style,
				transform: `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${scale})`,
				opacity,
				transformOrigin: 'center',
			}}
		>
			{children}
		</div>
	);
};

// ─── 38. 3D Card Tilt ────────────────────────────────────────────────────────

type Card3DProps = {
	children: ReactNode;
	tiltAmount?: number;
	shadowIntensity?: number;
	pulseSpeed?: number;
	className?: string;
	style?: CSSProperties;
};

export const Card3D = ({
	children,
	tiltAmount = 6,
	shadowIntensity = 0.22,
	pulseSpeed = 5.2,
	className,
	style,
}: Card3DProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = frame / fps;

	const rotY = Math.sin((t / pulseSpeed) * Math.PI * 2) * tiltAmount;
	const rotX = Math.cos((t / pulseSpeed) * Math.PI * 2 * 0.7) * (tiltAmount * 0.6);

	const shadowX = -rotY * 2.8;
	const shadowY = -rotX * 2.8 + 8;
	const shadowBlur = 28 + Math.abs(rotX) * 1.5;
	const shadowAlpha = shadowIntensity + Math.abs(rotY) / tiltAmount * 0.08;

	return (
		<div
			className={className}
			style={{
				...style,
				perspective: 900,
				transformStyle: 'preserve-3d',
			}}
		>
			<div
				style={{
					transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
					transformStyle: 'preserve-3d',
					boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(28,25,23,${shadowAlpha})`,
					transition: 'none',
					borderRadius: (style?.borderRadius as number) ?? 12,
					background: style?.background ?? '#ffffff',
				}}
			>
				{children}
			</div>
		</div>
	);
};

// ─── 39. Traveling Dot Progress ──────────────────────────────────────────────

type TravelingDotProgressProps = {
	color?: string;
	trackColor?: string;
	dotSize?: number;
	className?: string;
	style?: CSSProperties;
};

export const TravelingDotProgress = ({
	color = '#4f46e5',
	trackColor = 'rgba(79, 70, 229, 0.08)',
	dotSize = 10,
	className,
	style,
}: TravelingDotProgressProps) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const progress = interpolate(frame, [0, Math.max(1, durationInFrames - 1)], [0, 1], clamp);

	const trackHeight = Math.max(3, dotSize * 0.3);

	return (
		<div
			className={className}
			style={{
				...style,
				position: 'relative',
				width: '100%',
				height: trackHeight,
				background: trackColor,
				borderRadius: trackHeight / 2,
				overflow: 'visible',
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: 0,
					top: 0,
					height: '100%',
					width: `${progress * 100}%`,
					background: `linear-gradient(90deg, ${color}00, ${color}33)`,
					borderRadius: trackHeight / 2,
					transformOrigin: 'left center',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: `${progress * 100}%`,
					top: '50%',
					width: dotSize,
					height: dotSize,
					marginLeft: -dotSize / 2,
					marginTop: -dotSize / 2,
					borderRadius: '50%',
					background: color,
					boxShadow: `0 0 ${dotSize * 2}px ${color}88, 0 0 ${dotSize * 4}px ${color}44`,
				}}
			/>
		</div>
	);
};

// ─── 40. Reactive Layout Reflow ──────────────────────────────────────────────

type ReactiveReflowProps = {
	children: ReactNode[];
	visibleCount: number;
	baseDelay?: number;
	staggerDelay?: number;
	itemHeight?: number;
	gap?: number;
	className?: string;
	style?: CSSProperties;
};

export const ReactiveReflow = ({
	children,
	visibleCount,
	baseDelay = 0,
	staggerDelay = 8,
	itemHeight = 110,
	gap = 18,
	className,
	style,
}: ReactiveReflowProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<div
			className={className}
			style={{
				...style,
				display: 'flex',
				flexDirection: 'column',
				gap,
				position: 'relative',
			}}
		>
			{children.map((child, index) => {
				const isVisible = index < visibleCount;
				const targetDelay = baseDelay + index * staggerDelay;

				const appearProgress = spring({
					frame: frame - targetDelay,
					fps,
					config: {damping: 16, stiffness: 200, mass: 0.75},
				});

				const shiftSpring = spring({
					frame: frame - (baseDelay + (index + 1) * staggerDelay),
					fps,
					config: {damping: 18, stiffness: 160, mass: 0.8},
				});

				const yShift = isVisible
					? 0
					: interpolate(shiftSpring, [0, 1], [0, itemHeight + gap], clamp);

				const scale = isVisible
					? interpolate(appearProgress, [0, 1], [0.92, 1], clamp)
					: 1;
				const opacity = isVisible
					? interpolate(frame - targetDelay, [0, 10], [0, 1], clamp)
					: interpolate(frame - targetDelay, [0, 6], [1, 0], clamp);

				const maxHeight = isVisible
					? interpolate(appearProgress, [0, 1], [0, itemHeight], clamp)
					: itemHeight;

				return (
					<div
						key={index}
						style={{
							transform: `translateY(${yShift}px) scale(${scale})`,
							opacity,
							maxHeight,
							overflow: 'hidden',
							transformOrigin: 'top center',
						}}
					>
						{child}
					</div>
				);
			})}
		</div>
	);
};
