// Small painted-look helpers shared by the restyled generic diagrams.
// (Candidates for promotion into diorama.tsx; kept here because that file is
// shared and lanes must not edit it.)

import {Fragment} from 'react';
import type {CSSProperties} from 'react';
import {DIO} from '../../diorama';

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

/** Painted "plinth tab" background: lit top-left, soil lip underneath. */
export const tabStyle = (color: string): CSSProperties => ({
	background: `linear-gradient(160deg, ${shade(color, 0.14)} 0%, ${color} 58%, ${shade(color, -0.1)} 100%)`,
	boxShadow: `inset 0 1px 0 rgba(255,255,255,0.28), 0 5px 0 ${DIO.soil}, 0 8px 12px rgba(58,40,18,0.18)`,
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
