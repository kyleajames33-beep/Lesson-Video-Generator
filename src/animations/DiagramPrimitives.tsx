import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {useMemo} from 'react';
import type {CSSProperties, ReactNode, SVGProps} from 'react';

// ─── MagnifyLens — animated glass overlay for SVG viewBox 0 0 700 430 ─────────

type MagnifyLensProps = {
	cx?: number;
	cy?: number;
	radius?: number;
	delay?: number;
	color?: string;
};

export const MagnifyLens = ({
	cx = 350,
	cy = 215,
	radius = 90,
	delay = 0,
	color = '#4f46e5',
}: MagnifyLensProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const appear = spring({frame: frame - delay, fps, config: {damping: 14, stiffness: 240, mass: 0.7}});
	const lensScale = interpolate(appear, [0, 1], [0, 1], clamp);
	const opacity = interpolate(appear, [0, 0.4], [0, 1], clamp);

	const hx = cx + radius * 0.68;
	const hy = cy + radius * 0.68;

	return (
		<g opacity={opacity} style={{transformOrigin: `${cx}px ${cy}px`, transform: `scale(${lensScale})`}}>
			{/* Lens fill */}
			<circle cx={cx} cy={cy} r={radius}
				fill="rgba(255,255,255,0.06)"
				stroke={color} strokeWidth="3"
				style={{filter: `drop-shadow(0 0 14px ${color}66)`}} />
			{/* Inner ring */}
			<circle cx={cx} cy={cy} r={radius - 8}
				fill="none" stroke={color} strokeWidth="1" opacity={0.3} strokeDasharray="6 5" />
			{/* Glare */}
			<ellipse cx={cx - radius * 0.28} cy={cy - radius * 0.32}
				rx={radius * 0.28} ry={radius * 0.13}
				fill="rgba(255,255,255,0.22)" transform={`rotate(-30, ${cx}, ${cy})`} />
			{/* Handle */}
			<line x1={hx} y1={hy} x2={hx + 52} y2={hy + 52}
				stroke={color} strokeWidth="8" strokeLinecap="round"
				style={{filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.3))`}} />
		</g>
	);
};

const clamp = {
	extrapolateLeft: 'clamp' as const,
	extrapolateRight: 'clamp' as const,
};

// ─── Hook: SVG stroke-draw progress ───────────────────────────────────────────

type DrawProgressOptions = {
	delay?: number;
	duration?: number;
	easing?: (input: number) => number;
};

export const useDrawProgress = ({delay = 0, duration = 40, easing = Easing.bezier(0.16, 1, 0.3, 1)}: DrawProgressOptions = {}) => {
	const frame = useCurrentFrame();

	const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
		...clamp,
		easing,
	});

	return progress;
};

// ─── 1. DrawPath — self-drawing SVG path ──────────────────────────────────────

type DrawPathProps = SVGProps<SVGPathElement> & DrawProgressOptions;

export const DrawPath = ({delay = 0, duration = 40, easing, d, ...rest}: DrawPathProps) => {
	const progress = useDrawProgress({delay, duration, easing});
	const dashOffset = (1 - progress) * 100;

	return (
		<path
			d={d}
			pathLength={100}
			strokeDasharray={100}
			strokeDashoffset={dashOffset}
			{...rest}
		/>
	);
};

// ─── 2. TravelingDotOnPath — dot that travels along an SVG path ───────────────
// Requires pathLength. For straight lines: Math.hypot(x2-x1, y2-y1).
// For complex curves, measure in-browser with path.getTotalLength().

type TravelingDotOnPathProps = {
	d: string;
	pathLength: number;
	dotSize?: number;
	color?: string;
	delay?: number;
	duration?: number;
	showPath?: boolean;
	pathColor?: string;
	pathStrokeWidth?: number;
	trail?: boolean;
	trailLength?: number;
};

export const TravelingDotOnPath = ({
	d,
	pathLength,
	dotSize = 10,
	color = '#4f46e5',
	delay = 0,
	duration = 60,
	showPath = true,
	pathColor = 'rgba(79, 70, 229, 0.2)',
	pathStrokeWidth = 2,
	trail = false,
	trailLength = 24,
}: TravelingDotOnPathProps) => {
	const frame = useCurrentFrame();

	const progress = interpolate(frame, [delay, delay + duration], [0, 1], clamp);
	const eased = Easing.bezier(0.45, 0, 0.55, 1)(progress);

	// Pre-create detached path so getPointAtLength works on frame 0
	const pathEl = useMemo(() => {
		if (typeof document === 'undefined') return null;
		const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		el.setAttribute('d', d);
		return el;
	}, [d]);

	const point = useMemo(() => {
		if (!pathEl || pathLength <= 0) return {x: 0, y: 0};
		return pathEl.getPointAtLength(eased * pathLength);
	}, [pathEl, pathLength, eased]);

	const traveled = eased * pathLength;

	return (
		<g>
			{showPath && (
				<path
					d={d}
					fill="none"
					stroke={pathColor}
					strokeWidth={pathStrokeWidth}
					strokeLinecap="round"
				/>
			)}
			{trail && traveled > 0 && (
				<path
					d={d}
					fill="none"
					stroke={color}
					strokeWidth={pathStrokeWidth + 1}
					strokeLinecap="round"
					strokeDasharray={`${Math.max(0, traveled - trailLength)} ${pathLength}`}
					opacity={0.55}
				/>
			)}
			<circle cx={point.x} cy={point.y} r={dotSize / 2} fill={color} />
		</g>
	);
};

// ─── 3. SpringNumber — number that counts up with spring physics ──────────────

type SpringNumberProps = {
	value: number;
	start?: number;
	delay?: number;
	decimals?: number;
	durationInFrames?: number;
	className?: string;
	style?: CSSProperties;
	prefix?: string;
	suffix?: string;
};

export const SpringNumber = ({
	value,
	start = 0,
	delay = 0,
	decimals = 0,
	durationInFrames = 45,
	className,
	style,
	prefix = '',
	suffix = '',
}: SpringNumberProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const progress = spring({
		frame: frame - delay,
		fps,
		config: {damping: 15, stiffness: 150, mass: 0.8},
		durationInFrames,
	});

	const current = interpolate(progress, [0, 1], [start, value], clamp);
	const formatted = Number.isFinite(current) ? current.toFixed(decimals) : start.toFixed(decimals);

	return (
		<span className={className} style={style}>
			{prefix}
			{formatted}
			{suffix}
		</span>
	);
};

// ─── 4. PulseBeacon — expanding rings from a centre point ─────────────────────

type PulseBeaconProps = {
	x: number;
	y: number;
	color?: string;
	delay?: number;
	ringCount?: number;
	interval?: number;
	maxRadius?: number;
	strokeWidth?: number;
};

export const PulseBeacon = ({
	x,
	y,
	color = '#4f46e5',
	delay = 0,
	ringCount = 3,
	interval = 18,
	maxRadius = 80,
	strokeWidth = 2.5,
}: PulseBeaconProps) => {
	const frame = useCurrentFrame();

	return (
		<g>
			{Array.from({length: ringCount}, (_, i) => {
				const ringDelay = delay + i * interval;
				const local = frame - ringDelay;
				const progress = interpolate(local, [0, 50], [0, 1], clamp);
				const eased = 1 - Math.pow(1 - progress, 2);
				const radius = eased * maxRadius;
				const opacity = interpolate(local, [0, 12, 50], [0, 0.55, 0], clamp);

				return (
					<circle
						key={i}
						cx={x}
						cy={y}
						r={radius}
						fill="none"
						stroke={color}
						strokeWidth={strokeWidth}
						opacity={opacity}
					/>
				);
			})}
			{/* Centre dot */}
			<circle cx={x} cy={y} r={5} fill={color} />
		</g>
	);
};

// ─── 5. AnimatedArrow — arrow that draws from (x1,y1) to (x2,y2) ──────────────

type AnimatedArrowProps = {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	color?: string;
	strokeWidth?: number;
	headSize?: number;
	delay?: number;
	duration?: number;
	markerId?: string;
};

export const AnimatedArrow = ({
	x1,
	y1,
	x2,
	y2,
	color = '#4f46e5',
	strokeWidth = 3,
	headSize = 10,
	delay = 0,
	duration = 30,
	markerId = 'arrow-head',
}: AnimatedArrowProps) => {
	const progress = useDrawProgress({delay, duration});
	const len = Math.hypot(x2 - x1, y2 - y1);
	const dashOffset = (1 - progress) * len;

	return (
		<g>
			<defs>
				<marker
					id={markerId}
					markerWidth={headSize}
					markerHeight={headSize * 0.7}
					refX={headSize * 0.85}
					refY={(headSize * 0.7) / 2}
					orient="auto"
				>
					<polygon
						points={`0 0, ${headSize} ${(headSize * 0.7) / 2}, 0 ${headSize * 0.7}`}
						fill={color}
						opacity={progress > 0.85 ? 1 : 0}
					/>
				</marker>
			</defs>
			<line
				x1={x1}
				y1={y1}
				x2={x2}
				y2={y2}
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeDasharray={len}
				strokeDashoffset={dashOffset}
				markerEnd={`url(#${markerId})`}
			/>
		</g>
	);
};

// ─── 6. HighlightBox — rectangle that draws itself around an area ─────────────

type HighlightBoxProps = {
	x: number;
	y: number;
	width: number;
	height: number;
	color?: string;
	strokeWidth?: number;
	rx?: number;
	delay?: number;
	duration?: number;
	children?: ReactNode;
};

export const HighlightBox = ({
	x,
	y,
	width,
	height,
	color = '#4f46e5',
	strokeWidth = 2.5,
	rx = 8,
	delay = 0,
	duration = 35,
	children,
}: HighlightBoxProps) => {
	const progress = useDrawProgress({delay, duration});
	const perimeter = 2 * (width + height) - 8 * rx + 2 * Math.PI * rx;
	const dashOffset = (1 - progress) * perimeter;

	return (
		<g>
			<rect
				x={x}
				y={y}
				width={width}
				height={height}
				rx={rx}
				fill={`${color}10`}
				stroke={color}
				strokeWidth={strokeWidth}
				strokeDasharray={perimeter}
				strokeDashoffset={dashOffset}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			{children}
		</g>
	);
};

// ─── 7. PhaseReveal — staged multi-group reveal ───────────────────────────────

type PhaseRevealProps = {
	phases: {children: ReactNode; delay: number}[];
	className?: string;
	style?: CSSProperties;
};

export const PhaseReveal = ({phases, className, style}: PhaseRevealProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<div className={className} style={style}>
			{phases.map((phase, phaseIndex) => {
				const progress = spring({
					frame: frame - phase.delay,
					fps,
					config: {damping: 16, stiffness: 200, mass: 0.7},
				});
				const opacity = interpolate(frame - phase.delay, [0, 10], [0, 1], clamp);
				const scale = interpolate(progress, [0, 1], [0.94, 1], clamp);
				const y = interpolate(progress, [0, 1], [18, 0], clamp);

				return (
					<div
						key={phaseIndex}
						style={{
							opacity,
							transform: `translateY(${y}px) scale(${scale})`,
							transformOrigin: 'center',
						}}
					>
						{phase.children}
					</div>
				);
			})}
		</div>
	);
};
