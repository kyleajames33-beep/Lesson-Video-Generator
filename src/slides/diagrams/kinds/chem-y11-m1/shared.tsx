// Shared helpers for the chem-y11-m1 diorama kinds. Lane-local on purpose (see
// docs/diorama-system.md): `GlossDefs`/`Ball` (glossy spheres in any colour, not
// just CPK), `BohrAtom`, `Arrow` and `Chip` could be promoted into diorama.tsx
// later if other lanes want them.

import {interpolate, spring} from 'remotion';
import {TOK} from '../../../../styles/tokens';
import {idleBob} from '../../diorama';

export const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

/** 0→1 over `len` frames starting at `d`. */
export const fadeAt = (frame: number, d: number, len = 12) => interpolate(frame, [d, d + len], [0, 1], clamp);

/** Springy 0→1 (overshoots slightly) starting at `d`. */
export const popAt = (frame: number, fps: number, d: number) =>
	Math.max(0, spring({frame: frame - d, fps, config: {damping: 12, stiffness: 180, mass: 0.7}}));

export const shade = (hex: string, amt: number) => {
	const n = parseInt(hex.slice(1), 16);
	const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
	return `#${((1 << 24) | (ch((n >> 16) & 255) << 16) | (ch((n >> 8) & 255) << 8) | ch(n & 255)).toString(16).slice(1)}`;
};

// Particle colours that CPK doesn't cover.
export const PARTICLE = {
	electron: '#3f8fe8',
	proton: '#e0433a',
	neutron: '#9a9a9a',
	nucleus: '#e0433a',
	metal: '#a9b4bf',
	Si: '#d9a86a',
	Fe: '#c8743a',
	Ne: '#b35cc8',
} as const;

/** Glossy radial fills for arbitrary named colours: fill={`url(#${id}-ball-${name})`}. */
export const GlossDefs = ({id, colors}: {id: string; colors: Record<string, string>}) => (
	<defs>
		{Object.entries(colors).map(([name, base]) => (
			<radialGradient key={name} id={`${id}-ball-${name}`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
				<stop offset="0%" stopColor="#ffffff" />
				<stop offset="22%" stopColor={shade(base, 0.08)} />
				<stop offset="75%" stopColor={base} />
				<stop offset="100%" stopColor={shade(base, -0.28)} />
			</radialGradient>
		))}
	</defs>
);

/** A glossy sphere using a GlossDefs colour. */
export const Ball = ({
	id, name, color, x, y, r, opacity = 1, label, labelColor = '#ffffff', labelSize,
}: {id: string; name: string; color: string; x: number; y: number; r: number; opacity?: number; label?: string; labelColor?: string; labelSize?: number}) => (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={`url(#${id}-ball-${name})`} stroke={shade(color, -0.35)} strokeWidth={1} />
		{label && (
			<text x={x} y={y + (labelSize ?? r * 0.9) * 0.36} textAnchor="middle" fill={labelColor} fontSize={labelSize ?? r * 0.9} fontWeight={800}>
				{label}
			</text>
		)}
	</g>
);

/** Straight arrow with a solid head. */
export const Arrow = ({
	x1, y1, x2, y2, color = TOK.inkDim, width = 3, head = 10, opacity = 1, dash,
}: {x1: number; y1: number; x2: number; y2: number; color?: string; width?: number; head?: number; opacity?: number; dash?: string}) => {
	const a = Math.atan2(y2 - y1, x2 - x1);
	const bx = x2 - Math.cos(a) * head;
	const by = y2 - Math.sin(a) * head;
	const px = Math.cos(a + Math.PI / 2) * head * 0.55;
	const py = Math.sin(a + Math.PI / 2) * head * 0.55;
	return (
		<g opacity={opacity}>
			<line x1={x1} y1={y1} x2={bx} y2={by} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} />
			<path d={`M ${x2} ${y2} L ${bx + px} ${by + py} L ${bx - px} ${by - py} Z`} fill={color} />
		</g>
	);
};

/** Rounded label pill. (x, y) is the centre. */
export const Chip = ({
	x, y, text, color = TOK.inkDim, fill = TOK.bgLift, size = 18, padX = 14, h, opacity = 1, weight = 800, textColor,
}: {x: number; y: number; text: string; color?: string; fill?: string; size?: number; padX?: number; h?: number; opacity?: number; weight?: number; textColor?: string}) => {
	const w = text.length * size * 0.56 + padX * 2;
	const hh = h ?? size + 14;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - hh / 2} width={w} height={hh} rx={hh / 2} fill={fill} stroke={color} strokeWidth={2.5} />
			<text x={x} y={y + size * 0.36} textAnchor="middle" fill={textColor ?? color} fontSize={size} fontWeight={weight}>
				{text}
			</text>
		</g>
	);
};

/**
 * Bohr-model atom: a nucleus with electrons on concentric shells. `shells` is
 * electrons per shell, inner first (e.g. [2, 8, 1] for Na). Electrons drift
 * slowly round their shell (never frozen) and `outerR` sets the outermost ring.
 */
export const BohrAtom = ({
	id, x, y, shells, outerR, frame, nucleusLabel, nucleusR, electronR = 6, spin = 1, shellColor = 'rgba(40,60,80,0.28)', outerColor, electronOpacity = 1, highlightOuter = 0,
}: {
	id: string; x: number; y: number; shells: number[]; outerR: number; frame: number;
	nucleusLabel?: string; nucleusR?: number; electronR?: number; spin?: number; shellColor?: string;
	outerColor?: string; electronOpacity?: number; highlightOuter?: number;
}) => {
	const nR = nucleusR ?? Math.max(12, outerR * 0.2);
	const n = shells.length;
	const radii = shells.map((_, i) => nR + 10 + ((outerR - nR - 10) * (i + 1)) / n);
	return (
		<g>
			{radii.map((r, i) => (
				<circle
					key={`s${i}`}
					cx={x}
					cy={y}
					r={r}
					fill="none"
					stroke={i === n - 1 && outerColor ? outerColor : shellColor}
					strokeWidth={i === n - 1 && highlightOuter > 0 ? 2 + highlightOuter * 2 : 2}
					strokeDasharray={i === n - 1 ? undefined : '4 5'}
				/>
			))}
			<circle cx={x} cy={y} r={nR} fill={`url(#${id}-ball-nucleus)`} stroke={shade(PARTICLE.nucleus, -0.35)} strokeWidth={1} />
			{nucleusLabel && (
				<text x={x} y={y + 6} textAnchor="middle" fill="#ffffff" fontSize={Math.min(18, nR * 0.9)} fontWeight={800}>
					{nucleusLabel}
				</text>
			)}
			{shells.map((count, si) =>
				Array.from({length: count}, (_, k) => {
					const a = (k / count) * Math.PI * 2 + (frame / (90 + si * 40)) * spin + si * 0.6;
					return (
						<circle
							key={`e${si}-${k}`}
							cx={x + Math.cos(a) * radii[si]}
							cy={y + Math.sin(a) * radii[si]}
							r={electronR}
							fill={`url(#${id}-ball-electron)`}
							stroke={shade(PARTICLE.electron, -0.35)}
							strokeWidth={1}
							opacity={electronOpacity}
						/>
					);
				}),
			)}
		</g>
	);
};

/** Gentle vertical jostle, re-exported so kinds import from one place. */
export {idleBob};
