// Shared pieces for the chem-y12-m8 lane's diorama kinds (Chemistry Y12
// Module 8: Applying Chemical Ideas). Lane-local on purpose: `Glass`, `TestTube`,
// `Flask`, `Pill`, `Arrow` and `GlossDefs` could be promoted into diorama.tsx
// later if other lanes want them.
//
// Timing convention for this lane: every kind takes `delay` (frames; the
// moment ConceptSlide reveals the card, default 62) and a `beats` array of
// frames AFTER `delay`. Beats are placed where the scene's voiceover says the
// matching words; see `beatForWord` for the proportional rule used while the
// narration audio is not yet generated.

import type {ReactNode} from 'react';
import {interpolate, spring} from 'remotion';
import {TOK} from '../../../../styles/tokens';

export const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

/** 0→1 over `len` frames starting at `start`. */
export const ramp = (frame: number, start: number, len = 12) => interpolate(frame, [start, start + len], [0, 1], clamp);

/** Springy 0→1 (slight overshoot) starting at `start`. */
export const pop = (frame: number, fps: number, start: number) =>
	Math.max(0, spring({frame: frame - start, fps, config: {damping: 12, stiffness: 190, mass: 0.7}}));

/** Smoothstep easing on 0..1. */
export const ease = (t: number) => {
	const c = Math.max(0, Math.min(1, t));
	return c * c * (3 - 2 * c);
};

/** Lighten (amt > 0) or darken (amt < 0) a #rrggbb colour. */
export const shade = (hex: string, amt: number) => {
	const n = parseInt(hex.slice(1), 16);
	const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
	return `#${((1 << 24) | (ch((n >> 16) & 255) << 16) | (ch((n >> 8) & 255) << 8) | ch(n & 255)).toString(16).slice(1)}`;
};

/** Deterministic pseudo-random in [0, 1) from an integer seed. */
export const hash01 = (n: number) => {
	const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
	return s - Math.floor(s);
};

/** Rough rendered width of a string (Inter Tight, bold) at `size`. */
export const textW = (s: string, size: number) => s.length * size * 0.56;

/**
 * Where a word lands in a scene, as a frame AFTER `delay`: words are spread
 * evenly over the scene (10 frames in, 30 frames before the end), matching how
 * the narration fills a scene. `wordIndex` is 0-based in voiceover.text.
 */
export const beatForWord = (wordIndex: number, totalWords: number, durationInFrames: number, delay = 62) =>
	Math.round(10 + (wordIndex / totalWords) * (durationInFrames - 40)) - delay;

/** Glossy radial fills for arbitrary named colours: fill={`url(#${id}-g-${name})`}. */
export const GlossDefs = ({id, colors}: {id: string; colors: Record<string, string>}) => (
	<defs>
		{Object.entries(colors).map(([name, base]) => (
			<radialGradient key={name} id={`${id}-g-${name}`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
				<stop offset="0%" stopColor="#ffffff" />
				<stop offset="22%" stopColor={shade(base, 0.08)} />
				<stop offset="75%" stopColor={base} />
				<stop offset="100%" stopColor={shade(base, -0.28)} />
			</radialGradient>
		))}
	</defs>
);

/** A glossy ball in a GlossDefs colour, with an optional centred label. */
export const Ball = ({
	id, name, color, x, y, r, opacity = 1, scale = 1, label, labelColor = '#ffffff', labelSize, stroke,
}: {
	id: string; name: string; color: string; x: number; y: number; r: number; opacity?: number; scale?: number;
	label?: string; labelColor?: string; labelSize?: number; stroke?: string;
}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
		<circle r={r} fill={`url(#${id}-g-${name})`} stroke={stroke ?? shade(color, -0.35)} strokeWidth={stroke ? 3 : 1} />
		{label && (
			<text y={(labelSize ?? r * 0.9) * 0.36} textAnchor="middle" fill={labelColor} fontSize={labelSize ?? r * 0.9} fontWeight={800}>
				{label}
			</text>
		)}
	</g>
);

/** Straight arrow with a solid head. `progress` (0..1) draws it from the tail. */
export const Arrow = ({
	x1, y1, x2, y2, color = TOK.inkDim, width = 3, head = 11, opacity = 1, dash, progress = 1,
}: {x1: number; y1: number; x2: number; y2: number; color?: string; width?: number; head?: number; opacity?: number; dash?: string; progress?: number}) => {
	if (progress <= 0) return null;
	const ex = x1 + (x2 - x1) * progress;
	const ey = y1 + (y2 - y1) * progress;
	const a = Math.atan2(y2 - y1, x2 - x1);
	const bx = ex - Math.cos(a) * head;
	const by = ey - Math.sin(a) * head;
	const px = Math.cos(a + Math.PI / 2) * head * 0.55;
	const py = Math.sin(a + Math.PI / 2) * head * 0.55;
	return (
		<g opacity={opacity}>
			<line x1={x1} y1={y1} x2={bx} y2={by} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} />
			<path d={`M ${ex} ${ey} L ${bx + px} ${by + py} L ${bx - px} ${by - py} Z`} fill={color} />
		</g>
	);
};

/** Rounded tag with centred text. (x, y) is the centre. */
export const Pill = ({
	x, y, text, color, fill = '#ffffff', size = 17, padX = 12, opacity = 1, strokeWidth = 2, textColor, weight = 800,
}: {x: number; y: number; text: string; color: string; fill?: string; size?: number; padX?: number; opacity?: number; strokeWidth?: number; textColor?: string; weight?: number}) => {
	const w = textW(text, size) + padX * 2;
	const h = size + 14;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={strokeWidth} />
			<text x={x} y={y + size * 0.36} textAnchor="middle" fill={textColor ?? color} fontSize={size} fontWeight={weight} letterSpacing="0.02em">
				{text}
			</text>
		</g>
	);
};

/** A tick (✓) or cross (✗) stamp drawn as strokes, centred on (x, y). */
export const Mark = ({x, y, ok, size = 16, color, opacity = 1}: {x: number; y: number; ok: boolean; size?: number; color?: string; opacity?: number}) => {
	const c = color ?? (ok ? TOK.chem2 : '#c0392b');
	return (
		<g opacity={opacity} transform={`translate(${x},${y})`}>
			<circle r={size} fill="#ffffff" stroke={c} strokeWidth={2.5} />
			{ok ? (
				<path d={`M ${-size * 0.45} ${0} L ${-size * 0.1} ${size * 0.38} L ${size * 0.5} ${-size * 0.38}`} fill="none" stroke={c} strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" />
			) : (
				<path d={`M ${-size * 0.38} ${-size * 0.38} L ${size * 0.38} ${size * 0.38} M ${size * 0.38} ${-size * 0.38} L ${-size * 0.38} ${size * 0.38}`} stroke={c} strokeWidth={3.2} strokeLinecap="round" />
			)}
		</g>
	);
};

const GLASS_STROKE = 'rgba(70,90,110,0.55)';

/**
 * A test tube standing upright with its round bottom at (cx, baseY).
 * `fill` is the liquid (0..1 of the tube height, colour `liquid`);
 * `solid` (0..1) is a precipitate layer settled at the bottom in `solidColor`,
 * `cloud` (0..1) a suspended cloudiness of the same colour through the liquid.
 * Children draw inside the liquid region (bubbles, particles).
 */
export const TestTube = ({
	cx, baseY, w = 44, h = 190, fill = 0.55, liquid = 'rgba(150,200,235,0.35)', solid = 0, solidColor = '#f4f4f0', cloud = 0, children,
}: {
	cx: number; baseY: number; w?: number; h?: number; fill?: number; liquid?: string; solid?: number; solidColor?: string; cloud?: number; children?: ReactNode;
}) => {
	const r = w / 2;
	const x0 = cx - r, x1 = cx + r;
	const top = baseY - h;
	const ly = baseY - h * fill;
	const body = (yTop: number) => `M ${x0} ${yTop} L ${x0} ${baseY - r} A ${r} ${r} 0 0 0 ${x1} ${baseY - r} L ${x1} ${yTop} Z`;
	const sy = baseY - r - h * 0.18 * solid; // top of settled solid
	return (
		<g>
			<ellipse cx={cx + 5} cy={baseY + 3} rx={r * 1.05} ry={6} fill="rgba(40,36,30,0.18)" />
			{fill > 0 && <path d={body(ly)} fill={liquid} />}
			{cloud > 0 && <path d={body(ly)} fill={solidColor} opacity={0.55 * cloud} />}
			{solid > 0 && <path d={`M ${x0} ${sy} Q ${cx} ${sy - 6} ${x1} ${sy} L ${x1} ${baseY - r} A ${r} ${r} 0 0 1 ${x0} ${baseY - r} Z`} fill={solidColor} stroke={shade(solidColor.startsWith('#') ? solidColor : '#cccccc', -0.2)} strokeWidth={1} />}
			{fill > 0 && <ellipse cx={cx} cy={ly} rx={r} ry={4} fill={liquid} />}
			{children}
			<path d={`M ${x0 - 4} ${top} L ${x0} ${top + 4} L ${x0} ${baseY - r} A ${r} ${r} 0 0 0 ${x1} ${baseY - r} L ${x1} ${top + 4} L ${x1 + 4} ${top}`} fill="none" stroke={GLASS_STROKE} strokeWidth={3} strokeLinejoin="round" />
			<rect x={x0 + 6} y={top + 14} width={5} height={h - 40} rx={2.5} fill="#ffffff" opacity={0.5} />
		</g>
	);
};

/**
 * A glass beaker standing on its base at (cx, baseY). `level` is the liquid
 * height as a fraction of the beaker. Children draw inside the liquid layer.
 */
export const Beaker = ({
	cx, baseY, w, h, level = 0.72, liquid = 'rgba(120,190,235,0.28)', children,
}: {cx: number; baseY: number; w: number; h: number; level?: number; liquid?: string; children?: ReactNode}) => {
	const x0 = cx - w / 2, x1 = cx + w / 2, top = baseY - h;
	const lip = 8;
	const ly = baseY - h * level;
	return (
		<g>
			<ellipse cx={cx + 6} cy={baseY + 4} rx={w * 0.55} ry={9} fill="rgba(40,36,30,0.18)" />
			{level > 0 && (
				<>
					<path d={`M ${x0} ${ly} L ${x0} ${baseY - 10} Q ${x0} ${baseY} ${x0 + 10} ${baseY} L ${x1 - 10} ${baseY} Q ${x1} ${baseY} ${x1} ${baseY - 10} L ${x1} ${ly} Z`} fill={liquid} />
					<ellipse cx={cx} cy={ly} rx={w / 2} ry={6} fill={liquid} opacity={0.9} />
				</>
			)}
			{children}
			<path
				d={`M ${x0 - lip} ${top} Q ${x0} ${top} ${x0} ${top + lip} L ${x0} ${baseY - 10} Q ${x0} ${baseY} ${x0 + 10} ${baseY} L ${x1 - 10} ${baseY} Q ${x1} ${baseY} ${x1} ${baseY - 10} L ${x1} ${top + lip} Q ${x1} ${top} ${x1 + lip} ${top}`}
				fill="none"
				stroke={GLASS_STROKE}
				strokeWidth={3}
				strokeLinejoin="round"
			/>
			<rect x={x0 + 8} y={top + 16} width={7} height={h - 34} rx={3.5} fill="#ffffff" opacity={0.45} />
		</g>
	);
};

/** A conical (Erlenmeyer) flask, base centred at (cx, baseY). */
export const Flask = ({
	cx, baseY, w = 110, h = 130, level = 0.4, liquid = 'rgba(120,190,235,0.3)', children,
}: {cx: number; baseY: number; w?: number; h?: number; level?: number; liquid?: string; children?: ReactNode}) => {
	const neckW = w * 0.3, neckH = h * 0.28;
	const top = baseY - h;
	const shoulder = top + neckH;
	const halfAt = (y: number) => {
		if (y <= shoulder) return neckW / 2;
		return neckW / 2 + ((y - shoulder) / (baseY - shoulder)) * (w / 2 - neckW / 2);
	};
	const ly = baseY - (baseY - shoulder) * level;
	const outline = `M ${cx - neckW / 2 - 5} ${top} L ${cx - neckW / 2} ${top + 4} L ${cx - neckW / 2} ${shoulder} L ${cx - w / 2} ${baseY - 6} Q ${cx - w / 2} ${baseY} ${cx - w / 2 + 8} ${baseY} L ${cx + w / 2 - 8} ${baseY} Q ${cx + w / 2} ${baseY} ${cx + w / 2} ${baseY - 6} L ${cx + neckW / 2} ${shoulder} L ${cx + neckW / 2} ${top + 4} L ${cx + neckW / 2 + 5} ${top}`;
	return (
		<g>
			<ellipse cx={cx + 6} cy={baseY + 4} rx={w * 0.55} ry={8} fill="rgba(40,36,30,0.18)" />
			{level > 0 && (
				<path d={`M ${cx - halfAt(ly)} ${ly} L ${cx - w / 2} ${baseY - 6} Q ${cx - w / 2} ${baseY} ${cx - w / 2 + 8} ${baseY} L ${cx + w / 2 - 8} ${baseY} Q ${cx + w / 2} ${baseY} ${cx + w / 2} ${baseY - 6} L ${cx + halfAt(ly)} ${ly} Z`} fill={liquid} />
			)}
			{children}
			<path d={outline} fill="none" stroke={GLASS_STROKE} strokeWidth={3} strokeLinejoin="round" />
			<path d={`M ${cx - w / 2 + 16} ${baseY - 14} L ${cx - neckW / 2 + 6} ${shoulder + 12}`} stroke="#ffffff" strokeWidth={5} strokeLinecap="round" opacity={0.45} />
		</g>
	);
};

/** Rising bubbles inside a liquid column [x0..x1] from y0 (bottom) to y1 (surface). */
export const Bubbles = ({
	frame, x0, x1, y0, y1, n = 8, seed = 1, opacity = 1, r = 4, speed = 1.4,
}: {frame: number; x0: number; x1: number; y0: number; y1: number; n?: number; seed?: number; opacity?: number; r?: number; speed?: number}) => {
	if (opacity <= 0) return null;
	const span = y0 - y1;
	return (
		<g opacity={opacity}>
			{Array.from({length: n}, (_, i) => {
				const h = hash01(seed * 31 + i);
				const t = ((frame * speed + h * span * 3) % span) / span;
				const x = x0 + (x1 - x0) * hash01(seed * 17 + i * 3) + Math.sin(frame / 9 + i) * 2;
				return <circle key={i} cx={x} cy={y0 - t * span} r={r * (0.6 + 0.6 * h)} fill="none" stroke="rgba(255,255,255,0.95)" strokeWidth={1.6} />;
			})}
		</g>
	);
};

/** Small caption line under an object: bold title, optional dim sub-line. */
export const Caption = ({
	x, y, title, sub, color = TOK.ink, subColor = TOK.inkDim, size = 19, subSize = 15, opacity = 1, anchor = 'middle',
}: {x: number; y: number; title: string; sub?: string; color?: string; subColor?: string; size?: number; subSize?: number; opacity?: number; anchor?: 'start' | 'middle' | 'end'}) => (
	<g opacity={opacity}>
		<text x={x} y={y} textAnchor={anchor} fill={color} fontSize={size} fontWeight={800}>
			{title}
		</text>
		{sub && (
			<text x={x} y={y + subSize + 6} textAnchor={anchor} fill={subColor} fontSize={subSize} fontWeight={600}>
				{sub}
			</text>
		)}
	</g>
);
