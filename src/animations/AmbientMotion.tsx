// AmbientMotion — subtle "alive frame" primitives.
//
// These are for motion principle #7 from docs/visual-design-handbook.md:
// no long dead holds. Keep movement quiet: glow, breath, drift. Do not use
// these for primary reveals or attention-grabbing beats.

import type {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../styles/tokens';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

type AmbientGlowProps = {
	left: number | string;
	top: number | string;
	width: number | string;
	height: number | string;
	delay?: number;
	color?: string;
	opacity?: number;
	speedSeconds?: number;
	style?: CSSProperties;
};

export const AmbientGlow = ({
	left,
	top,
	width,
	height,
	delay = 120,
	color = TOK.chem1,
	opacity = 0.16,
	speedSeconds = 8,
	style,
}: AmbientGlowProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const settled = interpolate(frame, [delay, delay + 24], [0, 1], clamp);
	const t = Math.max(0, frame - delay) / fps;
	const pulse = 0.5 + 0.5 * Math.sin((t / speedSeconds) * Math.PI * 2);
	const scale = 1 + pulse * 0.018;
	const liveOpacity = settled * (opacity * (0.72 + pulse * 0.28));

	return (
		<div
			aria-hidden
			style={{
				position: 'absolute',
				left,
				top,
				width,
				height,
				pointerEvents: 'none',
				transform: `scale(${scale})`,
				transformOrigin: 'center',
				opacity: liveOpacity,
				background: `radial-gradient(ellipse at center, ${color}55 0%, ${color}1f 36%, ${color}00 70%)`,
				filter: 'blur(8px)',
				...style,
			}}
		/>
	);
};

type AmbientBreatheProps = {
	children: ReactNode;
	delay?: number;
	amplitude?: number;
	scaleAmount?: number;
	speedSeconds?: number;
	style?: CSSProperties;
};

export const AmbientBreathe = ({
	children,
	delay = 120,
	amplitude = 2,
	scaleAmount = 0.002,
	speedSeconds = 9,
	style,
}: AmbientBreatheProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const settled = interpolate(frame, [delay, delay + 24], [0, 1], clamp);
	const t = Math.max(0, frame - delay) / fps;
	const wave = Math.sin((t / speedSeconds) * Math.PI * 2);
	const y = wave * amplitude * settled;
	const scale = 1 + wave * scaleAmount * settled;

	return (
		<div
			style={{
				transform: `translateY(${y}px) scale(${scale})`,
				transformOrigin: 'center',
				willChange: 'transform',
				...style,
			}}
		>
			{children}
		</div>
	);
};

type AmbientBorderPulseProps = {
	delay?: number;
	color?: string;
	opacity?: number;
	speedSeconds?: number;
	style?: CSSProperties;
};

export const AmbientBorderPulse = ({
	delay = 120,
	color = TOK.chem1,
	opacity = 0.28,
	speedSeconds = 8.5,
	style,
}: AmbientBorderPulseProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const settled = interpolate(frame, [delay, delay + 24], [0, 1], clamp);
	const t = Math.max(0, frame - delay) / fps;
	const pulse = 0.5 + 0.5 * Math.sin((t / speedSeconds) * Math.PI * 2);
	const liveOpacity = settled * opacity * (0.55 + pulse * 0.45);

	return (
		<div
			aria-hidden
			style={{
				position: 'absolute',
				inset: 0,
				pointerEvents: 'none',
				border: `1px solid ${color}`,
				boxShadow: `0 0 ${22 + pulse * 18}px ${color}55`,
				opacity: liveOpacity,
				...style,
			}}
		/>
	);
};
