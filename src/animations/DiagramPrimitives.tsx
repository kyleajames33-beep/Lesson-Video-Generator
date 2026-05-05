import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {useMemo, Children, cloneElement, isValidElement} from 'react';
import type {CSSProperties, ReactNode, SVGProps} from 'react';
import {TOK, FONT_MONO} from '../styles/tokens';

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

// ─── P0.7 — Chart / graph data reveal ───────────────────────────────────────
// Axes draw first, then bars/lines build sequentially.
// Bar charts: bars grow from height 0 to target, staggered.
// Line charts: path strokes left-to-right.
// Use for any quantitative claim — atomic masses, reaction rates, trends.

type DataPoint = {
	label: string;
	value: number;
	color?: string;
};

type DataChartProps = {
	kind?: 'bar' | 'line';
	data: DataPoint[];
	width?: number;
	height?: number;
	delay?: number;
	axisDurationFrames?: number;
	barDurationFrames?: number;
	barStaggerFrames?: number;
	lineDurationFrames?: number;
	color?: string;
	axisColor?: string;
	labelColor?: string;
	showValues?: boolean;
};

export const DataChart = ({
	kind = 'bar',
	data,
	width = 520,
	height = 320,
	delay = 0,
	axisDurationFrames = 9,
	barDurationFrames = 12,
	barStaggerFrames = 4,
	lineDurationFrames = 24,
	color = TOK.amber,
	axisColor = TOK.inkDim,
	labelColor = TOK.ink,
	showValues = true,
}: DataChartProps) => {
	const frame = useCurrentFrame();

	const padding = {top: 32, right: 24, bottom: 48, left: 56};
	const chartW = width - padding.left - padding.right;
	const chartH = height - padding.top - padding.bottom;

	const maxValue = Math.max(...data.map((d) => d.value));
	const yMax = Math.ceil(maxValue * 1.15) || 1;

	// Axis draw progress
	const axisProgress = interpolate(frame, [delay, delay + axisDurationFrames], [0, 1], clamp);
	const axisEased = 1 - Math.pow(1 - axisProgress, 3);

	// Y-axis ticks
	const tickCount = 4;
	const ticks = Array.from({length: tickCount + 1}, (_, i) => (yMax / tickCount) * i);

	if (kind === 'bar') {
		const barWidth = Math.min(48, (chartW / data.length) * 0.6);
		const gap = data.length > 1 ? (chartW - barWidth * data.length) / (data.length - 1) : 0;

		return (
			<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden>
				{/* Axes */}
				<g opacity={axisEased}>
					<line
						x1={padding.left}
						y1={padding.top}
						x2={padding.left}
						y2={height - padding.bottom}
						stroke={axisColor}
						strokeWidth={2}
					/>
					<line
						x1={padding.left}
						y1={height - padding.bottom}
						x2={width - padding.right}
						y2={height - padding.bottom}
						stroke={axisColor}
						strokeWidth={2}
					/>
					{/* Y ticks */}
					{ticks.map((t, i) => {
						const ty = height - padding.bottom - (t / yMax) * chartH;
						const tickOpacity = interpolate(
							frame,
							[delay + axisDurationFrames + i * 2, delay + axisDurationFrames + i * 2 + 6],
							[0, 1],
							clamp,
						);
						return (
							<g key={`tick-${i}`}>
								<line x1={padding.left - 5} y1={ty} x2={padding.left} y2={ty} stroke={axisColor} strokeWidth={1} opacity={tickOpacity} />
								<text x={padding.left - 10} y={ty + 4} textAnchor="end" fill={labelColor} fontSize={12} fontFamily={FONT_MONO} opacity={tickOpacity}>
									{Math.round(t)}
								</text>
							</g>
						);
					})}
				</g>

				{/* Bars */}
				{data.map((d, i) => {
					const bx = padding.left + i * (barWidth + gap) + (gap > 0 ? 0 : (chartW - barWidth) / 2);
					const targetH = (d.value / yMax) * chartH;
					const barDelay = delay + axisDurationFrames + i * barStaggerFrames;
					const barProgress = interpolate(frame, [barDelay, barDelay + barDurationFrames], [0, 1], clamp);
					const barEased = 1 - Math.pow(1 - barProgress, 3);
					const bh = targetH * barEased;
					const by = height - padding.bottom - bh;

					const valueOpacity = interpolate(frame, [barDelay + barDurationFrames, barDelay + barDurationFrames + 6], [0, 1], clamp);

					return (
						<g key={d.label}>
							<rect
								x={bx}
								y={by}
								width={barWidth}
								height={bh}
								fill={d.color || color}
								rx={3}
								opacity={0.85}
							/>
							{showValues && (
								<text
									x={bx + barWidth / 2}
									y={by - 8}
									textAnchor="middle"
									fill={labelColor}
									fontSize={13}
									fontFamily={FONT_MONO}
									opacity={valueOpacity}
								>
									{d.value}
								</text>
							)}
							<text
								x={bx + barWidth / 2}
								y={height - padding.bottom + 20}
								textAnchor="middle"
								fill={labelColor}
								fontSize={12}
								fontFamily={FONT_MONO}
								opacity={axisEased}
							>
								{d.label}
							</text>
						</g>
					);
				})}
			</svg>
		);
	}

	// Line chart
	const xStep = data.length > 1 ? chartW / (data.length - 1) : 0;
	const points = data.map((d, i) => ({
		x: padding.left + i * xStep,
		y: height - padding.bottom - (d.value / yMax) * chartH,
	}));

	const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
	const pathLen = points.reduce((sum, p, i) => {
		if (i === 0) return 0;
		const prev = points[i - 1];
		return sum + Math.hypot(p.x - prev.x, p.y - prev.y);
	}, 0);

	const lineProgress = interpolate(frame, [delay + axisDurationFrames, delay + axisDurationFrames + lineDurationFrames], [0, 1], clamp);
	const lineEased = 1 - Math.pow(1 - lineProgress, 3);
	const dashOffset = (1 - lineEased) * pathLen;

	return (
		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden>
			{/* Axes */}
			<g opacity={axisEased}>
				<line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} stroke={axisColor} strokeWidth={2} />
				<line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke={axisColor} strokeWidth={2} />
				{ticks.map((t, i) => {
					const ty = height - padding.bottom - (t / yMax) * chartH;
					const tickOpacity = interpolate(frame, [delay + axisDurationFrames + i * 2, delay + axisDurationFrames + i * 2 + 6], [0, 1], clamp);
					return (
						<g key={`tick-${i}`}>
							<line x1={padding.left - 5} y1={ty} x2={padding.left} y2={ty} stroke={axisColor} strokeWidth={1} opacity={tickOpacity} />
							<text x={padding.left - 10} y={ty + 4} textAnchor="end" fill={labelColor} fontSize={12} fontFamily={FONT_MONO} opacity={tickOpacity}>
								{Math.round(t)}
							</text>
						</g>
					);
				})}
			</g>

			{/* Line path */}
			<path
				d={pathD}
				fill="none"
				stroke={color}
				strokeWidth={3}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeDasharray={pathLen}
				strokeDashoffset={dashOffset}
			/>

			{/* Points */}
			{points.map((p, i) => {
				const pointDelay = delay + axisDurationFrames + lineDurationFrames + i * 3;
				const pointOpacity = interpolate(frame, [pointDelay, pointDelay + 6], [0, 1], clamp);
				const pointScale = interpolate(frame, [pointDelay, pointDelay + 8], [0, 1], clamp);
				return (
					<g key={`pt-${i}`} opacity={pointOpacity} transform={`translate(${p.x}, ${p.y}) scale(${pointScale})`}>
						<circle r={5} fill={TOK.bg} stroke={color} strokeWidth={2.5} />
					</g>
				);
			})}

			{/* X labels */}
			{data.map((d, i) => (
				<text
					key={`lab-${i}`}
					x={points[i].x}
					y={height - padding.bottom + 20}
					textAnchor="middle"
					fill={labelColor}
					fontSize={12}
					fontFamily={FONT_MONO}
					opacity={axisEased}
				>
					{d.label}
				</text>
			))}
		</svg>
	);
};

// ─── P1.3 — DrawOnSchematic: live-draw any SVG diagram ────────────────────
// Higher-order component that wraps SVG children and animates stroke-dashoffset
// on each stroke-capable element sequentially, with configurable stagger and
// a slight hand-drawn jitter. Skip elements that already have strokeDasharray.
//
// Usage:
//   <DrawOnSchematic staggerFrames={8} jitter={1.5} delay={20}>
//     <svg viewBox="0 0 700 430">…paths/circles/lines…</svg>
//   </DrawOnSchematic>

const STROKE_TAG_NAMES = new Set([
	'path', 'line', 'circle', 'rect', 'ellipse', 'polyline', 'polygon',
]);

type DrawOnSchematicProps = {
	children: React.ReactNode;
	/** Frames between each path starting its draw. Default 6 (~200ms). */
	staggerFrames?: number;
	/** Max rotation jitter in degrees. Default 1.2. */
	jitter?: number;
	/** Frame at which the first path starts drawing. */
	delay?: number;
	/** Frames for a single path to fully draw. Default 28. */
	durationFrames?: number;
	/** Apply a sketchy displacement filter to the container. Default true. */
	sketchy?: boolean;
};

export const DrawOnSchematic = ({
	children,
	staggerFrames = 6,
	jitter = 1.2,
	delay = 0,
	durationFrames = 28,
	sketchy = true,
}: DrawOnSchematicProps) => {
	const frame = useCurrentFrame();
	let pathIndex = 0;

	const sketchyFilter = (
		<defs>
			<filter id="drawon-sketchy" x="-20%" y="-20%" width="140%" height="140%">
				<feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="7" result="noise" />
				<feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
			</filter>
		</defs>
	);

	const process = (child: React.ReactNode): React.ReactNode => {
		if (!isValidElement(child)) return child;

		const tag = typeof child.type === 'string' ? child.type : null;
		const props = child.props as Record<string, unknown>;
		const isStrokeable = tag && STROKE_TAG_NAMES.has(tag);
		const hasStroke = props.stroke && props.stroke !== 'none';
		const hasDashArray = props.strokeDasharray && props.strokeDasharray !== 'none';

		if (isStrokeable && hasStroke && !hasDashArray) {
			const idx = pathIndex++;
			const start = delay + idx * staggerFrames;
			const progress = interpolate(frame, [start, start + durationFrames], [0, 1], clamp);
			const eased = 1 - Math.pow(1 - progress, 3);
			const dashOffset = (1 - eased) * 100;

			// Subtle jitter that dies off as the line finishes drawing
			const j = jitter * Math.sin(frame * 0.22 + idx * 2.7) * (1 - eased) * 0.6;

			return cloneElement(child, {
				...props,
				pathLength: 100,
				strokeDasharray: 100,
				strokeDashoffset: dashOffset,
				style: {
					...(props.style as CSSProperties),
					transform: `rotate(${j}deg)`,
					transformBox: 'fill-box',
					transformOrigin: 'center',
				},
			} as SVGProps<SVGElement>);
		}

		if (tag === 'svg' && sketchy) {
			// Inject sketchy filter into the SVG's defs
			const existingChildren = props.children as React.ReactNode;
			return cloneElement(child, {
				...props,
				filter: 'url(#drawon-sketchy)',
				children: (
					<>
						{sketchyFilter}
						{Children.map(existingChildren, process)}
					</>
				),
			} as any);
		}

		if (props.children) {
			return cloneElement(child, {
				...props,
				children: Children.map(props.children as React.ReactNode, process),
			} as any);
		}

		return child;
	};

	return <>{Children.map(children, process)}</>;
};
