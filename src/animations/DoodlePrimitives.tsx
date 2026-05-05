// Hand-drawn doodle / scribble primitives for HSCScience videos.
//
// Source: docs/design-canvas-reference/doodles.jsx (browser-preview JSX), ported
// to Remotion + TypeScript with frame-driven draw-on animation.
//
// Use rules: see docs/visual-design-handbook.md "The doodle layer".
// Core rule: doodles must focus attention or prevent a mistake — never decoration.

import {useMemo} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_HAND} from '../styles/tokens';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// ─── Seeded PRNG so doodles are stable per render but feel organic ────────
const makeRand = (seed: number) => {
	let s = seed * 9301 + 49297;
	return () => {
		s = (s * 9301 + 49297) % 233280;
		return s / 233280;
	};
};

// Draw-on progress at the current frame.
const useDrawProgress = (delay: number, durationFrames: number): number => {
	const frame = useCurrentFrame();
	return interpolate(frame, [delay, delay + durationFrames], [0, 1], clamp);
};

// ─── Existing primitives (preserved — used by current slides) ─────────────

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

// ─── Scribble vocabulary (10 primitives) ──────────────────────────────────

const drawnPath = (d: string, color: string, strokeWidth: number, draw: number, key?: number) => (
	<path
		key={key}
		d={d}
		fill="none"
		stroke={color}
		strokeWidth={strokeWidth}
		strokeLinecap="round"
		strokeLinejoin="round"
		pathLength={1}
		strokeDasharray={1}
		strokeDashoffset={1 - draw}
	/>
);

type ScribbleBase = {
	delay?: number;
	durationFrames?: number;
	color?: string;
	strokeWidth?: number;
	seed?: number;
};

/**
 * Scribbled circle around content. Multiple offset loops for an
 * "I went around twice" feel. Use to ring a key term.
 */
export const ScribbleCircle = ({
	width = 400,
	height = 200,
	color = '#f0a830',
	strokeWidth = 4,
	seed = 1,
	loops = 2,
	opacity = 1,
	delay = 0,
	durationFrames = 36,
}: ScribbleBase & {
	width?: number;
	height?: number;
	loops?: number;
	opacity?: number;
}) => {
	const draw = useDrawProgress(delay, durationFrames);
	const d = useMemo(() => {
		const r = makeRand(seed);
		const cx = width / 2;
		const cy = height / 2;
		const rx = width * 0.45;
		const ry = height * 0.45;
		let path = '';
		for (let l = 0; l < loops; l++) {
			const off = (r() - 0.5) * 12;
			const start = -Math.PI / 2 + l * 0.3;
			for (let i = 0; i <= 64; i++) {
				const t = start + (i / 64) * Math.PI * 2;
				const jitter = (r() - 0.5) * 8;
				const x = cx + (rx + off + jitter) * Math.cos(t);
				const y = cy + (ry + off + jitter) * Math.sin(t);
				path += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1) + ' ';
			}
		}
		return path;
	}, [width, height, seed, loops]);

	return (
		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{overflow: 'visible', opacity}} aria-hidden>
			{drawnPath(d, color, strokeWidth, draw)}
		</svg>
	);
};

/**
 * Multi-stroke marker underline. Use under a key vocabulary term as it
 * lands. 2 strokes for marker-pen feel.
 */
export const ScribbleUnderline = ({
	width = 300,
	color = '#f0a830',
	strokeWidth = 6,
	seed = 1,
	strokes = 2,
	delay = 0,
	durationFrames = 15,
}: ScribbleBase & {
	width?: number;
	strokes?: number;
}) => {
	const draw = useDrawProgress(delay, durationFrames);
	const paths = useMemo(() => {
		const r = makeRand(seed);
		const out: string[] = [];
		for (let s = 0; s < strokes; s++) {
			let d = '';
			const yBase = 8 + s * 3 + (r() - 0.5) * 4;
			for (let i = 0; i <= 20; i++) {
				const x = (i / 20) * width + (r() - 0.5) * 4;
				const y = yBase + Math.sin(i * 0.7) * 2 + (r() - 0.5) * 2;
				d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1) + ' ';
			}
			out.push(d);
		}
		return out;
	}, [width, seed, strokes]);

	return (
		<svg width={width} height={28} viewBox={`0 0 ${width} 28`} style={{overflow: 'visible'}} aria-hidden>
			{paths.map((d, i) => drawnPath(d, color, strokeWidth, draw, i))}
		</svg>
	);
};

/**
 * Wobbly hand-drawn arrow with arrowhead. Pass start and end points
 * relative to the SVG container the arrow lives in.
 */
export const ScribbleArrow = ({
	x1 = 0,
	y1 = 0,
	x2 = 200,
	y2 = 0,
	color = '#f0a830',
	strokeWidth = 4,
	seed = 1,
	curve = 0.2,
	delay = 0,
	durationFrames = 18,
}: ScribbleBase & {
	x1?: number;
	y1?: number;
	x2?: number;
	y2?: number;
	curve?: number;
}) => {
	const draw = useDrawProgress(delay, durationFrames);
	const {body, head} = useMemo(() => {
		const r = makeRand(seed);
		const dx = x2 - x1;
		const dy = y2 - y1;
		const angle = Math.atan2(dy, dx);
		const cx = (x1 + x2) / 2 - dy * curve;
		const cy = (y1 + y2) / 2 + dx * curve;
		const j = () => (r() - 0.5) * 4;
		let bodyPath = `M${x1},${y1} `;
		for (let i = 1; i <= 12; i++) {
			const t = i / 12;
			const x = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cx + t * t * x2 + j();
			const y = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cy + t * t * y2 + j();
			bodyPath += `L${x.toFixed(1)},${y.toFixed(1)} `;
		}
		const ah = 18;
		const a1 = angle + Math.PI - 0.4;
		const a2 = angle + Math.PI + 0.4;
		const hx1 = x2 + Math.cos(a1) * ah;
		const hy1 = y2 + Math.sin(a1) * ah;
		const hx2 = x2 + Math.cos(a2) * ah;
		const hy2 = y2 + Math.sin(a2) * ah;
		const headPath = `M${hx1.toFixed(1)},${hy1.toFixed(1)} L${x2},${y2} L${hx2.toFixed(1)},${hy2.toFixed(1)}`;
		return {body: bodyPath, head: headPath};
	}, [x1, y1, x2, y2, seed, curve]);

	return (
		<svg style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none', width: '100%', height: '100%'}} aria-hidden>
			{drawnPath(body, color, strokeWidth, draw)}
			{drawnPath(head, color, strokeWidth, draw)}
		</svg>
	);
};

/**
 * Sketchy rectangle — wobbly outline. Use to box a side-note or
 * contain a callout group.
 */
export const ScribbleBox = ({
	width = 300,
	height = 200,
	color = '#f0a830',
	strokeWidth = 3,
	seed = 1,
	delay = 0,
	durationFrames = 30,
}: ScribbleBase & {
	width?: number;
	height?: number;
}) => {
	const draw = useDrawProgress(delay, durationFrames);
	const d = useMemo(() => {
		const r = makeRand(seed);
		const j = () => (r() - 0.5) * 5;
		const pts: number[][] = [
			[j(), j()],
			[width + j(), j()],
			[width + j(), height + j()],
			[j(), height + j()],
			[j(), j()],
		];
		let path = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)} `;
		for (let i = 1; i < pts.length; i++) {
			const [px, py] = pts[i - 1];
			const [qx, qy] = pts[i];
			for (let t = 0.25; t < 1; t += 0.25) {
				path += `L${(px + (qx - px) * t + (r() - 0.5) * 3).toFixed(1)},${(py + (qy - py) * t + (r() - 0.5) * 3).toFixed(1)} `;
			}
			path += `L${qx.toFixed(1)},${qy.toFixed(1)} `;
		}
		return path;
	}, [width, height, seed]);

	return (
		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{overflow: 'visible'}} aria-hidden>
			{drawnPath(d, color, strokeWidth, draw)}
		</svg>
	);
};

/**
 * Hand-drawn checkmark or X. Use after a quick-check answer or to
 * mark a misconception as wrong.
 */
export const ScribbleMark = ({
	kind = 'check',
	size = 60,
	color = '#1f8a6f',
	strokeWidth = 5,
	seed = 1,
	delay = 0,
	durationFrames = 12,
}: ScribbleBase & {
	kind?: 'check' | 'cross';
	size?: number;
}) => {
	const draw = useDrawProgress(delay, durationFrames);
	const d = useMemo(() => {
		const r = makeRand(seed);
		const j = () => (r() - 0.5) * 3;
		if (kind === 'check') {
			return `M${10 + j()},${size * 0.55 + j()} L${size * 0.4 + j()},${size * 0.85 + j()} L${size * 0.95 + j()},${10 + j()}`;
		}
		return `M${10 + j()},${10 + j()} L${size - 10 + j()},${size - 10 + j()} M${size - 10 + j()},${10 + j()} L${10 + j()},${size - 10 + j()}`;
	}, [kind, size, seed]);

	return (
		<svg width={size} height={size} style={{overflow: 'visible'}} aria-hidden>
			{drawnPath(d, color, strokeWidth, draw)}
		</svg>
	);
};

/**
 * Curly bracket — for grouping a list of items or labelling a span.
 */
export const ScribbleBracket = ({
	height = 200,
	color = '#8a9590',
	strokeWidth = 3,
	seed = 1,
	side = 'left',
	delay = 0,
	durationFrames = 24,
}: ScribbleBase & {
	height?: number;
	side?: 'left' | 'right';
}) => {
	const draw = useDrawProgress(delay, durationFrames);
	const d = useMemo(() => {
		const r = makeRand(seed);
		const j = () => (r() - 0.5) * 2;
		const w = 24;
		const x = side === 'left' ? w : 0;
		const tip = side === 'left' ? 0 : w;
		const mid = height / 2;
		let path = `M${x + j()},${j()} `;
		path += `Q${tip + j()},${j()} ${tip + j()},${20 + j()} `;
		path += `L${tip + j()},${mid - 24 + j()} `;
		path += `Q${tip + j()},${mid + j()} ${(side === 'left' ? -4 : w + 4) + j()},${mid + j()} `;
		path += `Q${tip + j()},${mid + j()} ${tip + j()},${mid + 24 + j()} `;
		path += `L${tip + j()},${height - 20 + j()} `;
		path += `Q${tip + j()},${height + j()} ${x + j()},${height + j()} `;
		return path;
	}, [height, side, seed]);

	return (
		<svg width={32} height={height} style={{overflow: 'visible'}} aria-hidden>
			{drawnPath(d, color, strokeWidth, draw)}
		</svg>
	);
};

/**
 * Diagonal hatch fill — like marker shading. Use behind text to
 * suggest "this region matters" without obscuring the content.
 */
export const ScribbleHatch = ({
	width = 200,
	height = 80,
	color = '#f0a830',
	spacing = 8,
	strokeWidth = 1.5,
	seed = 1,
	opacity = 0.4,
	delay = 0,
	durationFrames = 18,
}: ScribbleBase & {
	width?: number;
	height?: number;
	spacing?: number;
	opacity?: number;
}) => {
	const draw = useDrawProgress(delay, durationFrames);
	const lines = useMemo(() => {
		const r = makeRand(seed);
		const out: {x1: number; y1: number; x2: number; y2: number}[] = [];
		for (let x = -height; x < width; x += spacing) {
			const j1 = (r() - 0.5) * 3;
			const j2 = (r() - 0.5) * 3;
			out.push({x1: x + j1, y1: j1, x2: x + height + j2, y2: height + j2});
		}
		return out;
	}, [width, height, spacing, seed]);

	// Stagger lines so the hatch builds left-to-right rather than all at once.
	return (
		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{overflow: 'hidden', opacity}} aria-hidden>
			{lines.map((line, i) => {
				const lineDraw = interpolate(
					draw,
					[i / lines.length, (i + 1) / lines.length],
					[0, 1],
					clamp,
				);
				return (
					<line
						key={i}
						x1={line.x1}
						y1={line.y1}
						x2={line.x2}
						y2={line.y2}
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						pathLength={1}
						strokeDasharray={1}
						strokeDashoffset={1 - lineDraw}
					/>
				);
			})}
		</svg>
	);
};

/**
 * Highlighter wash — semi-transparent rectangle. Wipes in left-to-right.
 * Use to recall attention to a previously-shown phrase.
 */
export const ScribbleHighlight = ({
	width = 300,
	height = 50,
	color = '#f0a830',
	seed = 1,
	opacity = 0.35,
	delay = 0,
	durationFrames = 12,
}: ScribbleBase & {
	width?: number;
	height?: number;
	opacity?: number;
}) => {
	const draw = useDrawProgress(delay, durationFrames);
	const d = useMemo(() => {
		const r = makeRand(seed);
		const j = () => (r() - 0.5) * 3;
		const pts = [
			[j(), 4 + j()],
			[width + j(), j()],
			[width + j(), height + j()],
			[j(), height - 4 + j()],
		];
		return `M${pts[0][0]},${pts[0][1]} L${pts[1][0]},${pts[1][1]} L${pts[2][0]},${pts[2][1]} L${pts[3][0]},${pts[3][1]} Z`;
	}, [width, height, seed]);

	return (
		<svg
			width={width}
			height={height}
			style={{
				overflow: 'visible',
				clipPath: `inset(0 ${(1 - draw) * 100}% 0 0)`,
			}}
			aria-hidden
		>
			<path d={d} fill={color} opacity={opacity} />
		</svg>
	);
};

/**
 * Hand-drawn star / sparkle / asterisk. Use sparingly as a marginalia
 * decoration ("★ remember this ★") — never just for prettiness.
 */
export const ScribbleStar = ({
	size = 40,
	color = '#f0a830',
	strokeWidth = 3,
	seed = 1,
	delay = 0,
	durationFrames = 12,
}: ScribbleBase & {
	size?: number;
}) => {
	const draw = useDrawProgress(delay, durationFrames);
	const arms = useMemo(() => {
		const r = makeRand(seed);
		const j = () => (r() - 0.5) * 2;
		const c = size / 2;
		const armCount = 4;
		const out: {x1: number; y1: number; x2: number; y2: number}[] = [];
		for (let i = 0; i < armCount; i++) {
			const a = (i / armCount) * Math.PI;
			out.push({
				x1: c + Math.cos(a) * (c - 4) + j(),
				y1: c + Math.sin(a) * (c - 4) + j(),
				x2: c - Math.cos(a) * (c - 4) + j(),
				y2: c - Math.sin(a) * (c - 4) + j(),
			});
		}
		return out;
	}, [size, seed]);

	return (
		<svg width={size} height={size} style={{overflow: 'visible'}} aria-hidden>
			{arms.map((arm, i) => {
				const armDraw = interpolate(draw, [i / arms.length, (i + 1) / arms.length], [0, 1], clamp);
				return (
					<line
						key={i}
						x1={arm.x1}
						y1={arm.y1}
						x2={arm.x2}
						y2={arm.y2}
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						pathLength={1}
						strokeDasharray={1}
						strokeDashoffset={1 - armDraw}
					/>
				);
			})}
		</svg>
	);
};

/**
 * Annotation label — handwritten margin note connected to a target
 * point by a wobbly leader line. Position the parent <div> at the
 * target point (x, y); the label appears at (dx, dy) offset.
 */
export const ScribbleAnnotation = ({
	x,
	y,
	dx = 60,
	dy = -40,
	label,
	color = '#f0a830',
	seed = 1,
	side = 'right',
	delay = 0,
	leaderDurationFrames = 12,
	labelDurationFrames = 12,
}: {
	x: number;
	y: number;
	dx?: number;
	dy?: number;
	label: string;
	color?: string;
	seed?: number;
	side?: 'left' | 'right';
	delay?: number;
	leaderDurationFrames?: number;
	labelDurationFrames?: number;
}) => {
	const frame = useCurrentFrame();
	const leaderDraw = interpolate(frame, [delay, delay + leaderDurationFrames], [0, 1], clamp);
	const labelOpacity = interpolate(
		frame,
		[delay + leaderDurationFrames, delay + leaderDurationFrames + labelDurationFrames],
		[0, 1],
		clamp,
	);
	const labelTy = interpolate(
		frame,
		[delay + leaderDurationFrames, delay + leaderDurationFrames + labelDurationFrames],
		[8, 0],
		clamp,
	);

	const tx = x + dx;
	const ty = y + dy;

	const leaderPath = useMemo(() => {
		const r = makeRand(seed);
		const j = () => (r() - 0.5) * 2;
		let d = `M${x + j()},${y + j()} `;
		for (let i = 1; i <= 6; i++) {
			const t = i / 6;
			d += `L${(x + (tx - x) * t + j()).toFixed(1)},${(y + (ty - y) * t + j()).toFixed(1)} `;
		}
		return d;
	}, [x, y, tx, ty, seed]);

	return (
		<div style={{position: 'absolute', left: 0, top: 0, pointerEvents: 'none'}}>
			<svg style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}} width="1" height="1" aria-hidden>
				<path
					d={leaderPath}
					fill="none"
					stroke={color}
					strokeWidth={2.5}
					strokeLinecap="round"
					pathLength={1}
					strokeDasharray={1}
					strokeDashoffset={1 - leaderDraw}
				/>
				<circle cx={x} cy={y} r={4} fill={color} opacity={leaderDraw} />
			</svg>
			<div
				style={{
					position: 'absolute',
					left: tx,
					top: ty,
					transform:
						side === 'right'
							? `translate(8px, calc(-50% + ${labelTy}px))`
							: `translate(calc(-100% - 8px), calc(-50% + ${labelTy}px))`,
					fontFamily: '"Caveat", "Kalam", cursive',
					fontSize: 28,
					color,
					fontWeight: 600,
					whiteSpace: 'nowrap',
					opacity: labelOpacity,
				}}
			>
				{label}
			</div>
		</div>
	);
};

// ─── P0.5 — Margin annotation (handwritten note + drawn arrow) ──────────────
// Handwritten text in Caveat 48–56px, rotated -4° to -8°, fades up.
// Then ScribbleArrow draws from the note's edge to the diagram point.
// Use for adding marginalia to a main diagram (the Atomi core move).

type MarginNoteProps = {
	text: string;
	x: number;
	y: number;
	angle?: number;
	pointToX: number;
	pointToY: number;
	delay?: number;
	color?: string;
	fontSize?: number;
	noteDurationFrames?: number;
	arrowDelayFrames?: number;
	arrowDurationFrames?: number;
	seed?: number;
};

export const MarginNote = ({
	text,
	x,
	y,
	angle = -6,
	pointToX,
	pointToY,
	delay = 0,
	color = TOK.amber,
	fontSize = 52,
	noteDurationFrames = 12,
	arrowDelayFrames = 6,
	arrowDurationFrames = 6,
	seed = 1,
}: MarginNoteProps) => {
	const frame = useCurrentFrame();
	const noteOpacity = interpolate(frame, [delay, delay + noteDurationFrames], [0, 1], clamp);
	const noteTy = interpolate(frame, [delay, delay + noteDurationFrames], [16, 0], clamp);
	const noteEased = 1 - Math.pow(1 - noteOpacity, 3);

	// Heuristic: start arrow from the edge of the note nearest to target.
	const startFromRight = pointToX > x;
	const arrowStartX = startFromRight ? x + 40 : x - 40;
	const arrowStartY = y + fontSize * 0.3;

	return (
		<div style={{position: 'absolute', left: 0, top: 0, pointerEvents: 'none'}}>
			<div
				style={{
					position: 'absolute',
					left: x,
					top: y,
					transform: `translate(0px, ${noteTy}px) rotate(${angle}deg)`,
					transformOrigin: 'center center',
					opacity: noteEased,
					fontFamily: FONT_HAND,
					fontSize,
					color,
					fontWeight: 600,
					whiteSpace: 'nowrap',
					lineHeight: 1,
				}}
			>
				{text}
			</div>
			<ScribbleArrow
				x1={arrowStartX}
				y1={arrowStartY}
				x2={pointToX}
				y2={pointToY}
				color={color}
				seed={seed}
				delay={delay + arrowDelayFrames}
				durationFrames={arrowDurationFrames}
				curve={0.25}
			/>
		</div>
	);
};
