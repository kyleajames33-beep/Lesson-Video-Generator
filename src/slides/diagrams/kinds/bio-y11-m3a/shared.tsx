// Shared pieces for the bio-y11-m3a lane (Evolution and adaptations).
// Lane-local on purpose (docs/diorama-system.md). Timing and drawing helpers
// are reused read-only from the merged chem-y11-m1 / chem-y12-m6 lanes; the
// lane adds `Title`, `Foot` (footer lines), `Tag`, `Mark` and a palette.

import {TOK} from '../../../../styles/tokens';
import {STONE, idlePulse} from '../../diorama';
import {textWidth} from '../chem-y12-m6/shared';

export {clamp, fadeAt, popAt, shade, Chip, Arrow, GlossDefs, Ball} from '../chem-y11-m1/shared';
export {textWidth, hash01} from '../chem-y12-m6/shared';

export const W = 760;
export const H = 530;

/** Lane palette: colours of meaning. */
export const PAL = {
	pale: '#e6dcc8',
	dark: '#3d3a36',
	barkPale: '#b9b2a3',
	barkDark: '#4a4238',
	fabric: '#6f9e4a',
	green: '#4f9a3c',
	red: '#d2463c',
	sand: '#e3c98f',
	shadeGreen: '#5d8a58',
	water: '#4aa3d8',
	sea: '#2f7fb0',
	fresh: '#8fcbe6',
	salt: '#f2f2f2',
	bone: '#efe6d2',
	rose: '#d9687a',
	teal: '#2a9d8f',
	violet: '#8e6bd6',
	orange: '#e0843a',
	grey: '#a4a4a4',
	stop: '#b3261e',
	leaf: '#5f9e3a',
	wax: '#e9d98a',
	vapour: '#7fb8e0',
	skin: '#c9a27a',
	kangaroo: '#c8733f',
	lizard: '#9c8a4e',
	rock: '#9c958a',
} as const;

export const GLOSS: Record<string, string> = {...PAL};

export type Beat = {text: string; at: number; amber?: boolean};

export const Title = ({text, opacity = 1, y = 30}: {text: string; opacity?: number; y?: number}) => (
	<text x={W / 2} y={y} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800} opacity={opacity}>
		{text}
	</text>
);

/** Footer lines, bottom-up; the amber one breathes. */
export const Foot = ({lines, frame, fade}: {lines: Beat[]; frame: number; fade: (f: number, at: number) => number}) => (
	<g>
		{lines.map((l, i) => {
			const y = H - 14 - (lines.length - 1 - i) * 28;
			return (
				<text key={i} x={W / 2} y={y} textAnchor="middle" fontSize={19} fontWeight={800} fill={l.amber ? TOK.amberInk : TOK.inkDim} opacity={fade(frame, l.at) * (l.amber ? 0.85 + 0.15 * idlePulse(frame) : 1)}>
					{l.text}
				</text>
			);
		})}
	</g>
);

/** A rounded tag whose width follows its text. (x, y) is the centre. */
export const Tag = ({x, y, text, color, fill = '#ffffff', size = 17, opacity = 1, textColor, strokeW = 2.2}: {x: number; y: number; text: string; color: string; fill?: string; size?: number; opacity?: number; textColor?: string; strokeW?: number}) => {
	const w = textWidth(text, size) + 22;
	const h = size + 14;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={strokeW} />
			<text x={x} y={y + size * 0.36} textAnchor="middle" fill={textColor ?? color} fontSize={size} fontWeight={800}>
				{text}
			</text>
		</g>
	);
};

/** Tick or cross mark centred on (x, y). */
export const Mark = ({x, y, ok, s = 1, opacity = 1}: {x: number; y: number; ok: boolean; s?: number; opacity?: number}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${s})`}>
		<circle r={13} fill={ok ? '#e7f4ea' : '#fbe9e7'} stroke={ok ? '#2f8f46' : PAL.stop} strokeWidth={2} />
		{ok ? (
			<path d="M -6 0 L -1.5 5 L 7 -5" fill="none" stroke="#2f8f46" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
		) : (
			<path d="M -5.5 -5.5 L 5.5 5.5 M 5.5 -5.5 L -5.5 5.5" stroke={PAL.stop} strokeWidth={3} strokeLinecap="round" />
		)}
	</g>
);

/** Merge JSON beats over defaults. */
export const beatsOf = <T extends Record<string, number>>(defaults: T, over?: Partial<T>): T => ({...defaults, ...(over ?? {})});

/** A flat stone ledge (slab) seen slightly from above: graphs and rows stand on it. */
export const Ledge = ({x0, x1, y, depth = 16}: {x0: number; x1: number; y: number; depth?: number}) => (
	<g>
		<rect x={x0 + 6} y={y + 6} width={x1 - x0} height={depth + 6} rx={8} fill="rgba(40,36,30,0.16)" />
		<rect x={x0} y={y + 6} width={x1 - x0} height={depth} rx={6} fill={STONE.side} />
		<rect x={x0} y={y} width={x1 - x0} height={10} rx={5} fill={STONE.top} stroke={STONE.topEdge} strokeWidth={1.2} />
	</g>
);
