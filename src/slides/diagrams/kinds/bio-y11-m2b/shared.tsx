// Shared pieces for the bio-y11-m2b lane (Cells to systems: animal organ
// systems, blood, gas exchange, the nephron, feedback and hormones).
//
// Timing and drawing helpers are reused read-only from the merged bio-y12-m8
// and bio-y12-m7 lanes. Lane-local additions: `PAL` (the lane's colours of
// meaning), `Chip2` (a measured pill that can pop in), `Foot` (footer lines)
// and `beatsOf` (merge JSON beats over defaults).

import {TOK} from '../../../../styles/tokens';
import {fadeAt, textWidth} from '../bio-y12-m8/shared';

export {clamp, fadeAt, ease, popAt, shade, mix, hash01, GlossDefs, textWidth, Pill, Arrow, polyD, drawPath, alongPoly} from '../bio-y12-m8/shared';
export {wrap, Lines, Mark, Title} from '../bio-y12-m7/shared';

export const W = 760;
export const H = 530;

/** Lane palette: organs, blood and the few colours of meaning. */
export const PAL = {
	blood: '#c8433a',
	bloodDark: '#8f2a24',
	deoxy: '#7a4a8c',
	oxygen: '#e0433a',
	co2: '#6b7a8f',
	glucose: '#e8b43a',
	amino: '#3f9a52',
	urea: '#2a9d8f',
	water: '#4aa3d8',
	salt: '#8e5bd6',
	fat: '#f0d77a',
	protein: '#3f6fd8',
	lung: '#e8a0a8',
	heart: '#c8433a',
	liver: '#8a3b32',
	gut: '#e7a58f',
	stomach: '#e28f84',
	kidney: '#9c4a3c',
	muscle: '#c85a54',
	brain: '#e8b7c0',
	gland: '#d98a5b',
	pancreas: '#e9c27a',
	thyroid: '#c96a6a',
	adrenal: '#e0a24a',
	skin: '#f0c6a4',
	cell: '#f0c6a4',
	nucleus: '#8e5bd6',
	wbc: '#dfe6f2',
	platelet: '#d9a441',
	plasma: '#f2d98a',
	glass: '#d8eef7',
	machine: '#9fb3c8',
	grey: '#a4a4a4',
	stop: '#b3261e',
	ok: '#2e8b57',
} as const;

export const GLOSS: Record<string, string> = {...PAL};

/** A measured pill; `t` (0..1) scales it in. */
export const Chip2 = ({x, y, text, color, t = 1, size = 16, fill = '#ffffff', textColor}: {
	x: number; y: number; text: string; color: string; t?: number; size?: number; fill?: string; textColor?: string;
}) => {
	if (t <= 0) return null;
	const w = textWidth(text, size) + 24;
	const h = size + 12;
	return (
		<g transform={`translate(${x},${y}) scale(${Math.min(1, t)})`} opacity={Math.min(1, t * 1.5)}>
			<rect x={-w / 2} y={-h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={2} />
			<text y={size * 0.36} textAnchor="middle" fill={textColor ?? color} fontSize={size} fontWeight={800}>{text}</text>
		</g>
	);
};

export type FootLine = {text: string; at: number; amber?: boolean};

/** Footer lines along the bottom edge, each fading in on its beat. */
export const Foot = ({lines, frame, size = 18}: {lines: FootLine[]; frame: number; size?: number}) => (
	<g>
		{lines.map((f, i) => (
			<text key={i} x={W / 2} y={H - 10 - (lines.length - 1 - i) * (size + 7)} textAnchor="middle" fill={f.amber ? TOK.amberInk : TOK.inkDim} fontSize={size} fontWeight={800} opacity={fadeAt(frame, f.at, 14)}>
				{f.text}
			</text>
		))}
	</g>
);

/** Merge JSON beats over a kind's defaults. */
export const beatsOf = <T extends Record<string, number>>(defaults: T, beats?: Partial<T>): T => ({...defaults, ...(beats ?? {})});
