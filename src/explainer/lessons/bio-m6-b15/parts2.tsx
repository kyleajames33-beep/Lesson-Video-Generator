// M6 B15 quality fix (6 Nov 2026): lesson-local variants (parts.tsx is imported by B16, so it is left as it was).
// Rail2: the feature rail with shorter row names at 28 px (were 24 px). DotPair: two labelled place dots joined by a
// dotted arc (the WA farm and the NSW calves in exam item 1). SelfLoop: a curved amber arrow that leaves a flower and
// returns to it (self-pollination).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Sx} from '../bio-m5-b13/shared';
import {AMBER, AMBER_INK, CARD, EDGE, GREY_INK, INK, clamp01, prog, smooth} from './parts';
import {RAIL, railY} from './parts';

export const ROWS2 = ['what both do', 'collect and store', 'deliver + keep out', 'reach', 'gene pool effect'];
/** The feature rail: rows up to `n` shown (the last may be fading in via `last`), `active` bright. */
export const Rail2: React.FC<{n: number; last?: number; active?: number; o?: number}> = ({n, last = 1, active = -1, o = 1}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{ROWS2.slice(0, n).map((t, i) => {
				const a = i === n - 1 ? last : 1;
				const on = i === active;
				const y = railY(i);
				return (
					<g key={i} opacity={a}>
						<rect x={RAIL.x0 - 20} y={y} width={RAIL.x1 - RAIL.x0 + 20} height={68} rx={16} fill={on ? '#fff3d9' : CARD} stroke={on ? AMBER : EDGE} strokeWidth={on ? 3.5 : 2.5} />
						<Sx x={RAIL.x0 - 4} y={y + 44} text={t} size={28} color={on ? INK : GREY_INK} weight={on ? 800 : 700} />
					</g>
				);
			})}
		</g>
	);
};

/** Two place dots joined by a dotted arc drawn from a to b (t 0..1), with hand labels under each dot. */
export const DotPair: React.FC<{a: [number, number]; b: [number, number]; la: string; lb: string; t: number; o?: number; size?: number}> = ({a, b, la, lb, t, o = 1, size = 34}) => {
	if (o <= 0.01) return null;
	const mx = (a[0] + b[0]) / 2, my = Math.min(a[1], b[1]) - 90;
	return (
		<g opacity={o}>
			<path d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="8 9" opacity={clamp01(t * 1.5)} />
			<circle cx={a[0]} cy={a[1]} r={12} fill="#fff3d9" stroke={AMBER_INK} strokeWidth={3.5} />
			<circle cx={b[0]} cy={b[1]} r={12} fill="#fff3d9" stroke={AMBER_INK} strokeWidth={3.5} opacity={clamp01(t * 3 - 2)} />
			<Sx x={a[0]} y={a[1] + size + 22} text={la} size={size} color={INK} hand anchor="middle" />
			<Sx x={b[0]} y={b[1] + size + 22} text={lb} size={size} color={INK} hand anchor="middle" opacity={clamp01(t * 3 - 2)} />
		</g>
	);
};

/** A curved amber loop that leaves (x, y) to the right and comes back (self-pollination). */
export const SelfLoop: React.FC<{x: number; y: number; r?: number; at: number}> = ({x, y, r = 90, at}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, 24));
	if (p <= 0.01) return null;
	const d = `M${x},${y - r * 0.2} C${x + r * 1.4},${y - r * 1.3} ${x + r * 1.6},${y + r * 0.9} ${x + 10},${y + r * 0.35}`;
	return (
		<g>
			<path d={d} fill="none" stroke={AMBER} strokeWidth={6} strokeLinecap="round" pathLength={1} strokeDasharray={`${p} 1`} />
			{p > 0.95 ? <path d={`M${x + 34},${y + r * 0.2} L${x + 8},${y + r * 0.36} L${x + 30},${y + r * 0.56}`} fill="none" stroke={AMBER} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /> : null}
			<Sx x={x + r * 1.55} y={y + 10} text="pollinates itself" size={36} color={AMBER_INK} hand opacity={prog(f, at + 14, 10)} />
		</g>
	);
};
void GREY_INK;
