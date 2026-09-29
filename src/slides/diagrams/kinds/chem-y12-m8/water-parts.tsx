// Painted-style water objects for the chem-y12-m8 "water" group (water
// quality, eutrophication, treatment): a glass tank cross-section, fish,
// rooted plants, algae, bacteria, O₂, sun, DO gauge, pipes and dots.
//
// Everything is coded SVG and deterministic. Ids are namespaced by the `id`
// prop the caller passes (per component + mode). Could be promoted into
// diorama.tsx if other lanes want water scenes.

import type {ReactNode} from 'react';
import {TOK} from '../../../../styles/tokens';
import {hash01, shade} from './shared';

export const WATER = {
	clean: '#8cc8ea',
	cleanDeep: '#4f97c6',
	green: '#7fae4a',
	greenDeep: '#4f7a2c',
	sand: '#e3d7bd',
	sandDark: '#c7b793',
	alga: '#5fa032',
	algaDark: '#3f7420',
	plant: '#3f9a4e',
	plantDead: '#9a7a45',
	fish: '#e8894a',
	fish2: '#5b8fc9',
	bacteria: '#8a63b8',
	organic: '#8a6a45',
	silt: '#9b7b52',
	nitrate: '#3f6fd8',
	phosphate: '#d0632a',
	mercury: '#3d4450',
	glass: 'rgba(70,90,110,0.55)',
} as const;

/** Triangle-wave bounce inside [lo, hi] for a point starting at p0 moving at v per frame. */
export const bounce = (p0: number, v: number, t: number, lo: number, hi: number) => {
	const span = hi - lo;
	if (span <= 0) return lo;
	let u = (p0 - lo + v * t) % (2 * span);
	if (u < 0) u += 2 * span;
	return lo + (u <= span ? u : 2 * span - u);
};

/** Deterministic wander of item `i` inside a box. */
export const wander = (i: number, t: number, x0: number, x1: number, y0: number, y1: number, speed = 1, seed = 0) => {
	const s = i * 13 + seed * 101;
	const vx = (0.25 + hash01(s + 1) * 0.35) * speed * (hash01(s + 2) > 0.5 ? 1 : -1);
	const vy = (0.12 + hash01(s + 3) * 0.2) * speed * (hash01(s + 4) > 0.5 ? 1 : -1);
	return {
		x: bounce(x0 + hash01(s + 5) * (x1 - x0), vx, t, x0, x1),
		y: bounce(y0 + hash01(s + 6) * (y1 - y0), vy, t, y0, y1),
		dir: vx >= 0 ? 1 : -1,
	};
};

/** Mix two #rrggbb colours: t=0 → a, t=1 → b. */
export const mix = (a: string, b: string, t: number) => {
	const c = Math.max(0, Math.min(1, t));
	const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
	const ch = (sh: number) => Math.round(((pa >> sh) & 255) * (1 - c) + ((pb >> sh) & 255) * c);
	return `#${((1 << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).slice(1)}`;
};

/**
 * Glass tank (a water-body cross-section) standing with its base on y = y + h.
 * `murk` 0..1 tints the water from clear blue to bloom green; `dark` 0..1 dims
 * the lower water (light blocked). Children are clipped to the water.
 */
export const Tank = ({
	id, x, y, w, h, level = 0.86, murk = 0, dark = 0, sand = true, children, over,
}: {
	id: string; x: number; y: number; w: number; h: number; level?: number; murk?: number; dark?: number; sand?: boolean;
	children?: ReactNode; over?: ReactNode;
}) => {
	const surf = y + h * (1 - level);
	const base = y + h;
	const top = mix(WATER.clean, WATER.green, murk);
	const deep = mix(WATER.cleanDeep, WATER.greenDeep, murk);
	return (
		<g>
			<defs>
				<linearGradient id={`${id}-water`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor={top} stopOpacity={0.55} />
					<stop offset="100%" stopColor={deep} stopOpacity={0.62} />
				</linearGradient>
				<clipPath id={`${id}-clip`}>
					<rect x={x + 3} y={surf} width={w - 6} height={base - surf - 3} rx={10} />
				</clipPath>
			</defs>
			<ellipse cx={x + w / 2 + 8} cy={base + 5} rx={w * 0.52} ry={10} fill="rgba(40,36,30,0.2)" />
			{/* back pane */}
			<rect x={x} y={y} width={w} height={h} rx={12} fill="rgba(235,244,250,0.55)" />
			<rect x={x + 3} y={surf} width={w - 6} height={base - surf - 3} rx={10} fill={`url(#${id}-water)`} />
			<g clipPath={`url(#${id}-clip)`}>
				{dark > 0 && <rect x={x} y={surf + (base - surf) * 0.3} width={w} height={base - surf} fill="#1d2a33" opacity={0.28 * dark} />}
				{sand && (
					<>
						<path d={`M ${x} ${base - 20} Q ${x + w * 0.25} ${base - 30} ${x + w * 0.5} ${base - 22} T ${x + w} ${base - 24} L ${x + w} ${base} L ${x} ${base} Z`} fill={WATER.sand} />
						{Array.from({length: Math.floor(w / 28)}, (_, i) => (
							<ellipse key={i} cx={x + 12 + i * 28 + hash01(i + 3) * 10} cy={base - 9 - hash01(i + 9) * 6} rx={4 + hash01(i) * 3} ry={2.6} fill={WATER.sandDark} />
						))}
					</>
				)}
				{children}
			</g>
			{/* surface line */}
			<path d={`M ${x + 3} ${surf} L ${x + w - 3} ${surf}`} stroke="#ffffff" strokeOpacity={0.9} strokeWidth={2.5} />
			{over}
			{/* glass */}
			<rect x={x} y={y} width={w} height={h} rx={12} fill="none" stroke={WATER.glass} strokeWidth={3} />
			<rect x={x + 10} y={y + 14} width={7} height={h - 40} rx={3.5} fill="#ffffff" opacity={0.45} />
		</g>
	);
};

/** A simple side-on fish. dir 1 faces right. `dead` flips it belly-up and greys it. */
export const Fish = ({
	x, y, s = 1, dir = 1, color = WATER.fish, dead = 0, opacity = 1, dots, dotSeed = 0,
}: {x: number; y: number; s?: number; dir?: number; color?: string; dead?: number; opacity?: number; dots?: number; dotSeed?: number}) => {
	const body = mix(color, '#a9a9a2', dead * 0.45);
	const flip = dead > 0.5 ? -1 : 1;
	const rot = dead * 180;
	return (
		<g opacity={opacity} transform={`translate(${x},${y}) scale(${s * dir},${s}) rotate(${rot * (dir > 0 ? 1 : 1)})`}>
			<path d="M -22 0 L -36 -12 L -33 0 L -36 12 Z" fill={shade(body, -0.12)} />
			<ellipse cx={0} cy={0} rx={26} ry={13} fill={body} stroke={shade(body, -0.3)} strokeWidth={1.2} />
			<path d="M -4 -12 Q 4 -20 12 -11" fill={shade(body, -0.12)} />
			<ellipse cx={2} cy={-5} rx={16} ry={4} fill="#ffffff" opacity={0.28} />
			{dots !== undefined &&
				Array.from({length: dots}, (_, i) => {
					const a = hash01(dotSeed * 31 + i * 7) * Math.PI * 2;
					const r = Math.sqrt(hash01(dotSeed * 17 + i * 3)) * 0.82;
					return <circle key={i} cx={Math.cos(a) * r * 20 - 2} cy={Math.sin(a) * r * 8.5 + 1} r={2.6} fill={WATER.mercury} />;
				})}
			{dead > 0.5 ? (
				<path d={`M 12 ${-4 * flip} l 5 5 m 0 -5 l -5 5`} stroke="#333" strokeWidth={1.8} strokeLinecap="round" />
			) : (
				<>
					<circle cx={14} cy={-3} r={3.6} fill="#ffffff" />
					<circle cx={15} cy={-3} r={2} fill="#1a1a1a" />
				</>
			)}
		</g>
	);
};

/** A rooted water plant: a few curved strands. health 1 = green, 0 = dead brown and drooped. */
export const Plant = ({
	x, baseY, h = 80, health = 1, frame = 0, seed = 0, opacity = 1,
}: {x: number; baseY: number; h?: number; health?: number; frame?: number; seed?: number; opacity?: number}) => {
	const col = mix(WATER.plantDead, WATER.plant, health);
	const hh = h * (0.35 + 0.65 * health);
	return (
		<g opacity={opacity}>
			{[-1, 0, 1].map((k) => {
				const sway = Math.sin(frame / 26 + seed + k) * 6 * (0.3 + 0.7 * health);
				const lean = k * 12 + (1 - health) * 18 * (k === 0 ? 1 : k);
				const tipX = x + lean + sway;
				const tipY = baseY - hh * (k === 0 ? 1 : 0.78);
				return (
					<g key={k}>
						<path d={`M ${x + k * 4} ${baseY} Q ${x + k * 6 + sway * 0.4} ${baseY - hh * 0.55} ${tipX} ${tipY}`} stroke={col} strokeWidth={4} fill="none" strokeLinecap="round" />
						{[0.35, 0.6, 0.82].map((f, j) => {
							const px = x + k * 4 + (tipX - x - k * 4) * f * f;
							const py = baseY + (tipY - baseY) * f;
							const side = j % 2 === 0 ? 1 : -1;
							return <ellipse key={j} cx={px + side * 7} cy={py} rx={8} ry={3.4} fill={col} transform={`rotate(${side * -30} ${px + side * 7} ${py})`} />;
						})}
					</g>
				);
			})}
		</g>
	);
};

/** A rod-shaped bacterium. */
export const Bacterium = ({x, y, s = 1, angle = 0, opacity = 1}: {x: number; y: number; s?: number; angle?: number; opacity?: number}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) rotate(${angle}) scale(${s})`}>
		<rect x={-10} y={-4.5} width={20} height={9} rx={4.5} fill={WATER.bacteria} stroke={shade(WATER.bacteria, -0.3)} strokeWidth={1} />
		<rect x={-6} y={-3} width={9} height={2.4} rx={1.2} fill="#ffffff" opacity={0.45} />
	</g>
);

/** A glossy algal cell. */
export const Alga = ({x, y, r = 6, opacity = 1}: {x: number; y: number; r?: number; opacity?: number}) => (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={WATER.alga} stroke={WATER.algaDark} strokeWidth={1} />
		<circle cx={x - r * 0.3} cy={y - r * 0.35} r={r * 0.32} fill="#ffffff" opacity={0.5} />
	</g>
);

/** A dot with a glossy highlight (nutrient ion, particle, mercury …). */
export const Dot = ({x, y, r = 5, color, opacity = 1}: {x: number; y: number; r?: number; color: string; opacity?: number}) => (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={color} stroke={shade(color, -0.3)} strokeWidth={1} />
		<circle cx={x - r * 0.3} cy={y - r * 0.35} r={r * 0.35} fill="#ffffff" opacity={0.55} />
	</g>
);

/** Brown flecks of dead organic matter. */
export const Organic = ({x, y, s = 1, opacity = 1, seed = 0}: {x: number; y: number; s?: number; opacity?: number; seed?: number}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${s}) rotate(${hash01(seed) * 180})`}>
		<path d="M -7 -2 Q -3 -7 3 -4 Q 8 -1 5 4 Q 0 7 -5 4 Z" fill={WATER.organic} stroke={shade(WATER.organic, -0.25)} strokeWidth={1} />
	</g>
);

/** A sun with rays. `reach` scales the ray length. */
export const Sun = ({x, y, r = 26, frame = 0, opacity = 1}: {x: number; y: number; r?: number; frame?: number; opacity?: number}) => (
	<g opacity={opacity}>
		{Array.from({length: 10}, (_, i) => {
			const a = (i / 10) * Math.PI * 2 + frame / 200;
			return <line key={i} x1={x + Math.cos(a) * (r + 6)} y1={y + Math.sin(a) * (r + 6)} x2={x + Math.cos(a) * (r + 16)} y2={y + Math.sin(a) * (r + 16)} stroke="#f2c94c" strokeWidth={4} strokeLinecap="round" />;
		})}
		<circle cx={x} cy={y} r={r} fill="#f6d365" stroke="#e8b631" strokeWidth={2} />
		<circle cx={x - r * 0.3} cy={y - r * 0.3} r={r * 0.35} fill="#ffffff" opacity={0.45} />
	</g>
);

/**
 * A vertical DO gauge (a glass column with a falling level, no numbers).
 * `level` 0..1. Below `lowAt` the fill turns `lowColor` and the LOW band shows.
 */
export const DoGauge = ({
	x, top, h, level, label = 'DO', lowAt = 0.3, lowColor = TOK.amber, lowInk = TOK.amberInk, okColor, opacity = 1, pulse = 0,
}: {x: number; top: number; h: number; level: number; label?: string; lowAt?: number; lowColor?: string; lowInk?: string; okColor: string; opacity?: number; pulse?: number}) => {
	const w = 34;
	const base = top + h;
	const fy = base - h * Math.max(0, Math.min(1, level));
	const low = level <= lowAt;
	return (
		<g opacity={opacity}>
			<text x={x} y={top - 16} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>
				{label}
			</text>
			<rect x={x - w / 2} y={top} width={w} height={h} rx={w / 2} fill="rgba(235,244,250,0.9)" stroke={WATER.glass} strokeWidth={3} />
			<rect x={x - w / 2 + 3} y={base - h * lowAt} width={w - 6} height={h * lowAt - 3} rx={8} fill={lowColor} opacity={0.14} />
			<path
				d={`M ${x - w / 2 + 5} ${fy} L ${x + w / 2 - 5} ${fy} L ${x + w / 2 - 5} ${base - 12} Q ${x + w / 2 - 5} ${base - 5} ${x} ${base - 5} Q ${x - w / 2 + 5} ${base - 5} ${x - w / 2 + 5} ${base - 12} Z`}
				fill={low ? lowColor : okColor}
				stroke={low ? lowColor : 'none'}
				strokeWidth={low ? 1 + pulse * 2 : 0}
			/>
			<rect x={x - w / 2 + 7} y={top + 12} width={5} height={h - 30} rx={2.5} fill="#ffffff" opacity={0.55} />
			<text x={x + w / 2 + 8} y={top + 16} fill={TOK.inkDim} fontSize={16} fontWeight={700}>high</text>
			<text x={x + w / 2 + 8} y={base - 6} fill={low ? lowInk : TOK.inkDim} fontSize={16} fontWeight={800}>low</text>
		</g>
	);
};

/** A grey pipe (thick rounded line) with a darker rim at the mouth (x2, y2). */
export const Pipe = ({x1, y1, x2, y2, w = 18, opacity = 1}: {x1: number; y1: number; x2: number; y2: number; w?: number; opacity?: number}) => (
	<g opacity={opacity}>
		<line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8d949b" strokeWidth={w} strokeLinecap="butt" />
		<line x1={x1} y1={y1 - w * 0.22} x2={x2} y2={y2 - w * 0.22} stroke="#c3c9ce" strokeWidth={w * 0.25} />
		<ellipse cx={x2} cy={y2} rx={w * 0.22} ry={w * 0.6} fill="#5f666d" />
	</g>
);

/** An O₂ molecule (two glossy O atoms). Needs <DioramaDefs id={gid} elements={['O']} />. */
export const O2 = ({gid, x, y, r = 8, opacity = 1, scale = 1}: {gid: string; x: number; y: number; r?: number; opacity?: number; scale?: number}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
		{[-1, 1].map((k) => (
			<circle key={k} cx={k * r * 0.78} cy={0} r={r} fill={`url(#${gid}-atom-O)`} stroke="#8e2a24" strokeWidth={1} />
		))}
	</g>
);

/** A small invertebrate: a water snail on the bed. */
export const Snail = ({x, y, s = 1}: {x: number; y: number; s?: number}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M -16 0 Q -18 -6 -10 -6 L 14 -4 Q 18 -2 16 0 Z" fill="#c9b08a" stroke="#9a8260" strokeWidth={1} />
		<circle cx={0} cy={-13} r={12} fill="#b7874f" stroke="#7d5a31" strokeWidth={1.2} />
		<path d="M 0 -13 m -6 0 a 6 6 0 1 1 6 6 a 3.5 3.5 0 1 1 -3 -4" fill="none" stroke="#7d5a31" strokeWidth={1.6} />
		<line x1={14} y1={-4} x2={19} y2={-12} stroke="#9a8260" strokeWidth={1.6} strokeLinecap="round" />
	</g>
);

/** A thermometer standing upright; `level` 0..1 of the red column. */
export const Thermometer = ({x, top, h, level}: {x: number; top: number; h: number; level: number}) => {
	const b = top + h;
	return (
		<g>
			<rect x={x - 6} y={top} width={12} height={h} rx={6} fill="#ffffff" stroke={WATER.glass} strokeWidth={2} />
			<rect x={x - 3} y={b - 6 - (h - 14) * level} width={6} height={(h - 14) * level + 6} rx={3} fill="#d64534" />
			<circle cx={x} cy={b + 6} r={10} fill="#d64534" stroke="#9a2d22" strokeWidth={1.5} />
			<circle cx={x - 3} cy={b + 3} r={3} fill="#ffffff" opacity={0.5} />
		</g>
	);
};

/** A white rounded label box with one or two lines; (x, y) is the centre of the box. */
export const Tag = ({
	x, y, lines, color, fill = '#ffffff', size = 18, opacity = 1, strokeWidth = 2.5, textColor, subColor,
}: {x: number; y: number; lines: string[]; color: string; fill?: string; size?: number; opacity?: number; strokeWidth?: number; textColor?: string; subColor?: string}) => {
	const w = Math.max(...lines.map((l, i) => l.length * (i === 0 ? size : size - 2) * 0.56)) + 28;
	const lh = size + 6;
	const h = lines.length * lh + 14;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={12} fill={fill} stroke={color} strokeWidth={strokeWidth} />
			{lines.map((l, i) => (
				<text key={i} x={x} y={y - h / 2 + 7 + lh * (i + 1) - 6} textAnchor="middle" fill={i === 0 ? textColor ?? color : subColor ?? TOK.inkDim} fontSize={i === 0 ? size : size - 2} fontWeight={i === 0 ? 800 : 700}>
					{l}
				</text>
			))}
		</g>
	);
};
