import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import type {CSSProperties, ReactNode} from 'react';

const springBase = (frame: number, fps: number, delay: number) =>
	spring({
		frame: frame - delay,
		fps,
		config: {damping: 15, stiffness: 230, mass: 0.72},
	});

const springPop = (frame: number, fps: number, delay: number) =>
	spring({
		frame: frame - delay,
		fps,
		config: {damping: 9, stiffness: 300, mass: 0.6},
	});

const springSlide = (frame: number, fps: number, delay: number) =>
	spring({
		frame: frame - delay,
		fps,
		config: {damping: 16, stiffness: 220, mass: 0.75},
	});

// ─── Hooks ────────────────────────────────────────────────────────────────────

export const useSlideProgress = (delay = 0) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	return springBase(frame, fps, delay);
};

export const useRevealStyle = (delay = 0): CSSProperties => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = springBase(frame, fps, delay);

	return {
		opacity: interpolate(frame - delay, [0, 14], [0, 1], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}),
		transform: `translateY(${interpolate(progress, [0, 1], [34, 0])}px) scale(${interpolate(progress, [0, 1], [0.94, 1])})`,
	};
};

export const useVisibleAfter = (delay = 0) => useCurrentFrame() >= delay;

type RevealProps = {
	as?: 'div' | 'p' | 'h1';
	children: ReactNode;
	className?: string;
	delay?: number;
	style?: CSSProperties;
};

export const Reveal = ({as: Component = 'div', children, className, delay = 0, style}: RevealProps) => {
	const reveal = useRevealStyle(delay);
	return (
		<Component className={className} style={{...style, ...reveal}}>
			{children}
		</Component>
	);
};

type SimpleRevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	style?: CSSProperties;
};

export const ScaleReveal = ({children, className, delay = 0, style}: SimpleRevealProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = springPop(frame, fps, delay);

	const scale = interpolate(progress, [0, 1], [0.86, 1], {
		extrapolateLeft: 'clamp',
	});
	const opacity = interpolate(progress, [0, 0.28], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div className={className} style={{...style, opacity, transform: `scale(${scale})`}}>
			{children}
		</div>
	);
};

export const SlideReveal = ({children, className, delay = 0, style}: SimpleRevealProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = springSlide(frame, fps, delay);

	const x = interpolate(progress, [0, 1], [-48, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity = interpolate(progress, [0, 0.32], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div className={className} style={{...style, opacity, transform: `translateX(${x}px)`}}>
			{children}
		</div>
	);
};
