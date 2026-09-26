// Small painted-look helpers shared by the restyled generic diagrams.
// (Candidates for promotion into diorama.tsx; kept here because that file is
// shared and lanes must not edit it.)

import {Fragment} from 'react';
import type {CSSProperties, ReactNode} from 'react';

export const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

/** Lighten (amt > 0) or darken (amt < 0) a #rrggbb colour. */
export const shade = (hex: string, amt: number) => {
	if (!/^#[0-9a-f]{6}$/i.test(hex)) return hex;
	const n = parseInt(hex.slice(1), 16);
	const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
	return `#${((1 << 24) | (ch((n >> 16) & 255) << 16) | (ch((n >> 8) & 255) << 8) | ch(n & 255)).toString(16).slice(1)}`;
};

/** CSS for a glossy painted marble (the HTML twin of the diorama atoms). */
export const marbleStyle = (color: string, size: number): CSSProperties => ({
	width: size,
	height: size,
	flex: '0 0 auto',
	borderRadius: '50%',
	background: `radial-gradient(circle at 34% 30%, #ffffff 0%, ${shade(color, 0.12)} 24%, ${color} 70%, ${shade(color, -0.25)} 100%)`,
	boxShadow: `0 ${size * 0.18}px ${size * 0.3}px rgba(40,50,30,0.22)`,
});

/** Painted "plinth tab" background: lit top-left, stone lip underneath. */
export const tabStyle = (color: string): CSSProperties => ({
	background: `linear-gradient(160deg, ${shade(color, 0.14)} 0%, ${color} 58%, ${shade(color, -0.1)} 100%)`,
	boxShadow: `inset 0 1px 0 rgba(255,255,255,0.28), 0 5px 0 ${STONE.lip}, 0 8px 12px rgba(58,40,18,0.18)`,
});

/** Painted SVG gradients for a colour, namespaced by id. */
export const PaintDefs = ({id, colors}: {id: string; colors: Record<string, string>}) => (
	<>
		{Object.entries(colors).map(([k, c]) => (
			<Fragment key={k}>
				<linearGradient id={`${id}-${k}-side`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor={shade(c, 0.1)} />
					<stop offset="32%" stopColor={shade(c, 0.18)} />
					<stop offset="100%" stopColor={shade(c, -0.2)} />
				</linearGradient>
				<radialGradient id={`${id}-${k}-ball`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="24%" stopColor={shade(c, 0.1)} />
					<stop offset="75%" stopColor={c} />
					<stop offset="100%" stopColor={shade(c, -0.28)} />
				</radialGradient>
			</Fragment>
		))}
	</>
);

/** Short deterministic hash, for per-diagram SVG id namespaces. */
export const idHash = (s: string) => {
	let h = 5381;
	for (let i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0;
	return h.toString(36);
};

// Stone plinth palette: a neutral display stand. The grass plinth read as
// cartoony in review, so the generic diagrams stand on stone instead.
export const STONE = {
	topLight: '#f6f5f2',
	top: '#e6e4df',
	topEdge: '#d2cfc8',
	sideLight: '#cfccc5',
	side: '#b3afa7',
	sideDark: '#8f8b83',
	lip: '#a9a59d',
	shadow: 'rgba(40,36,30,0.2)',
} as const;

/**
 * A round stone display plinth, drop-in for DioramaPlinth (same props and
 * geometry: (cx, cy) is the centre of the top face; children stand on it).
 */
export const StonePlinth = ({id, cx, cy, rx, children}: {id: string; cx: number; cy: number; rx: number; children?: ReactNode}) => {
	const ry = rx * 0.34;
	const depth = rx * 0.2;
	return (
		<g>
			<defs>
				<radialGradient id={`${id}-stone-top`} cx="38%" cy="30%" r="80%">
					<stop offset="0%" stopColor={STONE.topLight} />
					<stop offset="70%" stopColor={STONE.top} />
					<stop offset="100%" stopColor={STONE.topEdge} />
				</radialGradient>
				<linearGradient id={`${id}-stone-side`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor={STONE.sideLight} />
					<stop offset="40%" stopColor={STONE.side} />
					<stop offset="100%" stopColor={STONE.sideDark} />
				</linearGradient>
				<filter id={`${id}-stone-blur`} x="-30%" y="-30%" width="160%" height="160%">
					<feGaussianBlur stdDeviation="6" />
				</filter>
			</defs>
			<ellipse cx={cx + rx * 0.06} cy={cy + depth + ry * 0.55} rx={rx * 1.04} ry={ry * 0.9} fill={STONE.shadow} filter={`url(#${id}-stone-blur)`} />
			<path
				d={`M ${cx - rx} ${cy} L ${cx - rx} ${cy + depth} A ${rx} ${ry} 0 0 0 ${cx + rx} ${cy + depth} L ${cx + rx} ${cy} Z`}
				fill={`url(#${id}-stone-side)`}
			/>
			{/* bevel: a thin lighter line where the top meets the side */}
			<ellipse cx={cx} cy={cy + 1.5} rx={rx} ry={ry} fill={STONE.topEdge} />
			<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${id}-stone-top)`} />
			<ellipse cx={cx} cy={cy} rx={rx * 0.9} ry={ry * 0.9} fill="none" stroke="#ffffff" strokeOpacity={0.35} strokeWidth={1.5} />
			{children}
		</g>
	);
};
