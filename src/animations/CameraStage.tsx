import type {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export type CameraKeyframe = {
	at: number;
	zoom?: number;
	x?: number;
	y?: number;
	rotate?: number;
};

const smoothstep = (t: number) => t * t * (3 - 2 * t);

const sample = (kfs: CameraKeyframe[], frame: number) => {
	if (kfs.length === 0) return {zoom: 1, x: 0, y: 0, rotate: 0};

	if (frame <= kfs[0].at) {
		return {
			zoom: kfs[0].zoom ?? 1,
			x: kfs[0].x ?? 0,
			y: kfs[0].y ?? 0,
			rotate: kfs[0].rotate ?? 0,
		};
	}

	for (let i = 0; i < kfs.length - 1; i++) {
		const a = kfs[i];
		const b = kfs[i + 1];
		if (frame >= a.at && frame <= b.at) {
			const span = Math.max(1, b.at - a.at);
			const raw = (frame - a.at) / span;
			const t = smoothstep(Math.min(1, Math.max(0, raw)));
			return {
				zoom: interpolate(t, [0, 1], [a.zoom ?? 1, b.zoom ?? 1]),
				x: interpolate(t, [0, 1], [a.x ?? 0, b.x ?? 0]),
				y: interpolate(t, [0, 1], [a.y ?? 0, b.y ?? 0]),
				rotate: interpolate(t, [0, 1], [a.rotate ?? 0, b.rotate ?? 0]),
			};
		}
	}

	const last = kfs[kfs.length - 1];
	return {
		zoom: last.zoom ?? 1,
		x: last.x ?? 0,
		y: last.y ?? 0,
		rotate: last.rotate ?? 0,
	};
};

type Props = {
	keyframes?: CameraKeyframe[];
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
};

export const CameraStage = ({keyframes, children, className, style}: Props) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const defaultKfs: CameraKeyframe[] = [
		{at: 0, zoom: 1.0, x: 0, y: 0},
		{at: Math.round(durationInFrames * 0.55), zoom: 1.018, x: 0, y: 0},
		{at: durationInFrames, zoom: 1.035, x: 0, y: 0},
	];

	const kfs = keyframes && keyframes.length > 0 ? keyframes : defaultKfs;
	const {zoom, x, y, rotate} = sample(kfs, frame);

	return (
		<div
			className={className}
			style={{
				...style,
				transform: `scale(${zoom}) translate(${x}px, ${y}px) rotate(${rotate}deg)`,
				transformOrigin: 'center center',
				willChange: 'transform',
			}}
		>
			{children}
		</div>
	);
};
