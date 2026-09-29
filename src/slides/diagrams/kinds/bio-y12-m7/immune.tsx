// Immune drawing pieces for the bio-y12-m7 kinds: the antibody Y, epitopes and
// receptor-carrying B cells. Specificity is shown by shape AND colour: an
// antibody tip (or B-cell receptor) fits only the epitope drawn with the same
// shape and colour. Stylised, not to scale.

import {shade} from './shared';

export type EpShape = 'tri' | 'sq' | 'round';
export const EP_COLORS: Record<EpShape, string> = {tri: '#d8433a', sq: '#2e9a57', round: '#8e5bd6'};

/** A small epitope bump centred on (x, y). */
export const Epitope = ({x, y, shape, size = 9, color, opacity = 1}: {x: number; y: number; shape: EpShape; size?: number; color?: string; opacity?: number}) => {
	const c = color ?? EP_COLORS[shape];
	const st = shade(c, -0.3);
	if (shape === 'tri') return <path d={`M ${x} ${y - size} L ${x + size} ${y + size * 0.8} L ${x - size} ${y + size * 0.8} Z`} fill={c} stroke={st} strokeWidth={1} opacity={opacity} />;
	if (shape === 'sq') return <rect x={x - size * 0.85} y={y - size * 0.85} width={size * 1.7} height={size * 1.7} rx={2} fill={c} stroke={st} strokeWidth={1} opacity={opacity} />;
	return <circle cx={x} cy={y} r={size * 0.9} fill={c} stroke={st} strokeWidth={1} opacity={opacity} />;
};

/**
 * An antibody: a Y with the stem pointing down at (x, y) being the fork.
 * `rot` rotates about the fork. Tips are cups coloured/shaped to the epitope
 * they fit (`tip`). `hiTips` / `hiStem` tint the variable / constant regions.
 */
export const Antibody = ({
	x, y, s = 1, rot = 0, tip = 'tri', color = '#3f6fd8', opacity = 1, hiTips = 0, hiStem = 0, tipColor,
}: {x: number; y: number; s?: number; rot?: number; tip?: EpShape; color?: string; opacity?: number; hiTips?: number; hiStem?: number; tipColor?: string}) => {
	const tc = tipColor ?? EP_COLORS[tip];
	const arm = (dir: -1 | 1) => {
		const ax = dir * 17;
		const ay = -19;
		return (
			<g>
				<line x1={0} y1={0} x2={ax} y2={ay} stroke={color} strokeWidth={7} strokeLinecap="round" />
				<line x1={dir * 4} y1={2} x2={ax + dir * 4} y2={ay + 3} stroke={shade(color, 0.25)} strokeWidth={4} strokeLinecap="round" />
				<g transform={`translate(${ax + dir * 2},${ay - 4}) rotate(${dir * 42})`}>
					<circle r={7.5} fill={tc} opacity={0.25 + 0.75 * hiTips} />
					{tip === 'tri' && <path d="M -6 -1 L 0 -9 L 6 -1" fill="none" stroke={tc} strokeWidth={3} strokeLinejoin="round" />}
					{tip === 'sq' && <path d="M -6 -9 L -6 -1 L 6 -1 L 6 -9" fill="none" stroke={tc} strokeWidth={3} strokeLinejoin="round" />}
					{tip === 'round' && <path d="M -6 -3 A 6 6 0 0 1 6 -3" fill="none" stroke={tc} strokeWidth={3} />}
				</g>
			</g>
		);
	};
	return (
		<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={opacity}>
			{hiStem > 0 && <rect x={-8} y={-2} width={16} height={30} rx={8} fill={color} opacity={0.25 * hiStem} />}
			<line x1={0} y1={0} x2={0} y2={26} stroke={color} strokeWidth={8} strokeLinecap="round" />
			<line x1={-2.5} y1={2} x2={-2.5} y2={24} stroke={shade(color, 0.3)} strokeWidth={2.5} strokeLinecap="round" />
			{arm(-1)}
			{arm(1)}
		</g>
	);
};

/** Where an antibody's fork must sit so its left/right tip touches (tx, ty) when rotated by rot. */
export const tipOffset = (s: number, rot: number, dir: -1 | 1) => {
	const lx = (dir * 17 + dir * 2) * s;
	const ly = (-19 - 4 - 7) * s;
	const a = (rot * Math.PI) / 180;
	return {dx: lx * Math.cos(a) - ly * Math.sin(a), dy: lx * Math.sin(a) + ly * Math.cos(a)};
};
