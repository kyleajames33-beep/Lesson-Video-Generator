// Helpers for the chem-y12-m8 "drug chemistry" kinds (Ionisation, Delivery,
// Green). Lane-local; `AcidParticle`, `popSlots` and `Crate` could be promoted
// if other lanes want them.

import {TOK} from '../../../../styles/tokens';
import {hash01, shade} from './shared';

/** Weak-acid colours: HA (unionised) teal, A⁻ (ionised) violet. */
export const HA_COLOR = '#1f9477';
export const A_COLOR = '#7454c8';
export const ACID_GLOSS = {ha: HA_COLOR, a: A_COLOR, h: '#f2f2ef', grey: '#9c9890', teal: HA_COLOR};

/** Henderson–Hasselbalch: fraction of a weak acid present as A⁻ at this pH. */
export const fracIonised = (pH: number, pKa: number) => 1 / (1 + Math.pow(10, pKa - pH));

/**
 * 0..1 "ionised" state for the molecule of flip-rank `rank` when `nA` (a real
 * number, n × fraction ionised) molecules are A⁻. Ranks below round(nA) are
 * fully A⁻ at rest, so the picture always shows round(nA) A⁻.
 */
export const flipState = (nA: number, rank: number) => Math.max(0, Math.min(1, (nA - rank - 0.5) * 3 + 0.5));

/** A deterministic shuffle: rank[i] is the order in which molecule i flips. */
export const flipRanks = (n: number, seed = 1) => {
	const order = Array.from({length: n}, (_, i) => i).sort((a, b) => hash01(seed * 97 + a) - hash01(seed * 97 + b));
	const rank: number[] = new Array(n);
	order.forEach((mol, r) => (rank[mol] = r));
	return rank;
};

/** 0..1..0 triangle wave. */
export const tri = (x: number) => {
	const m = ((x % 2) + 2) % 2;
	return m < 1 ? m : 2 - m;
};

/**
 * Molecule slots on a plinth top, rows staggered (hex packing) so no ball
 * hides another's label. Returned back-to-front. (x, y) is where the ball's
 * foot touches the stone.
 */
export const popSlots = (cx: number, cy: number, rows: number[], dx: number, dy: number) => {
	const out: {x: number; y: number}[] = [];
	rows.forEach((count, r) => {
		const y = cy + (r - (rows.length - 1) / 2) * dy;
		for (let c = 0; c < count; c++) out.push({x: cx + (c - (count - 1) / 2) * dx, y});
	});
	return out;
};

/**
 * A weak-acid particle. `s` = 0 is HA (teal ball with a small white H), s = 1
 * is A⁻ (violet ball, "A⁻"). In between, the H lifts off as H⁺ and fades.
 * Uses GlossDefs colours `ha`, `a`, `h` under `id`.
 */
export const AcidParticle = ({
	id, x, y, r, s, scale = 1, opacity = 1, labels = true, labelHA = 'HA', labelA = 'A⁻',
}: {id: string; x: number; y: number; r: number; s: number; scale?: number; opacity?: number; labels?: boolean; labelHA?: string; labelA?: string}) => {
	const fs = Math.max(15, r * 0.82);
	const hr = r * 0.46;
	const hx = r * 0.78, hy = -r * 0.72;
	const lift = s * r * 1.6;
	const hOp = s <= 0 ? 1 : s >= 1 ? 0 : 1 - s;
	return (
		<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
			<ellipse cx={0} cy={r * 0.92} rx={r * 1.1} ry={r * 0.26} fill="rgba(40,36,30,0.22)" />
			{s < 1 && (
				<g opacity={1 - s}>
					<circle r={r} fill={`url(#${id}-g-ha)`} stroke={shade(HA_COLOR, -0.3)} strokeWidth={1} />
					{labels && <text y={fs * 0.36} textAnchor="middle" fill="#ffffff" fontSize={fs} fontWeight={800}>{labelHA}</text>}
				</g>
			)}
			{s > 0 && (
				<g opacity={s}>
					<circle r={r} fill={`url(#${id}-g-a)`} stroke={shade(A_COLOR, -0.3)} strokeWidth={1} />
					{labels && <text y={fs * 0.36} textAnchor="middle" fill="#ffffff" fontSize={fs} fontWeight={800}>{labelA}</text>}
				</g>
			)}
			{hOp > 0 && <circle cx={hx + s * r * 0.4} cy={hy - lift} r={hr} fill={`url(#${id}-g-h)`} stroke="#9a9a92" strokeWidth={1} opacity={hOp} />}
		</g>
	);
};

/** A 3/4-view block (crate) standing with its front-bottom-centre at (x, y). */
export const Crate = ({x, y, size, color, opacity = 1, stroke}: {x: number; y: number; size: number; color: string; opacity?: number; stroke?: string}) => {
	const d = size * 0.32; // depth offset (up-right)
	const x0 = x - size / 2, x1 = x + size / 2, top = y - size;
	return (
		<g opacity={opacity}>
			<path d={`M ${x0} ${top} L ${x0 + d} ${top - d * 0.6} L ${x1 + d} ${top - d * 0.6} L ${x1} ${top} Z`} fill={shade(color, 0.14)} stroke={stroke ?? shade(color, -0.3)} strokeWidth={stroke ? 3 : 1} strokeLinejoin="round" />
			<path d={`M ${x1} ${top} L ${x1 + d} ${top - d * 0.6} L ${x1 + d} ${y - d * 0.6} L ${x1} ${y} Z`} fill={shade(color, -0.14)} stroke={stroke ?? shade(color, -0.3)} strokeWidth={stroke ? 3 : 1} strokeLinejoin="round" />
			<rect x={x0} y={top} width={size} height={size} fill={color} stroke={stroke ?? shade(color, -0.3)} strokeWidth={stroke ? 3 : 1} />
			<rect x={x0 + 5} y={top + 5} width={size * 0.22} height={size - 10} rx={2} fill="#ffffff" opacity={0.28} />
		</g>
	);
};

/** A horizontal fraction: numerator over a rule over denominator, centred on (x, y) = rule centre. */
export const Fraction = ({x, y, num, den, size = 18, color = TOK.ink, opacity = 1}: {x: number; y: number; num: string; den: string; size?: number; color?: string; opacity?: number}) => {
	const w = Math.max(num.length, den.length) * size * 0.56 + 10;
	return (
		<g opacity={opacity}>
			<text x={x} y={y - 8} textAnchor="middle" fill={color} fontSize={size} fontWeight={700}>{num}</text>
			<line x1={x - w / 2} y1={y} x2={x + w / 2} y2={y} stroke={color} strokeWidth={2} />
			<text x={x} y={y + size + 4} textAnchor="middle" fill={color} fontSize={size} fontWeight={700}>{den}</text>
		</g>
	);
};

/**
 * A patch of lipid bilayer: two leaflets of phospholipids (round polar heads,
 * two wavy tails each) with the tails meeting in the middle. Vertical bilayer
 * when `vertical`, spanning [a0..a1] along its length, centred on `c`.
 */
export const Bilayer = ({
	c, a0, a1, thick = 44, vertical = true, head = '#d9a441', tail = '#c9b28a', opacity = 1,
}: {c: number; a0: number; a1: number; thick?: number; vertical?: boolean; head?: string; tail?: string; opacity?: number}) => {
	const step = 15;
	const n = Math.floor((a1 - a0) / step);
	const hr = 6.5;
	const items = [];
	for (let i = 0; i <= n; i++) {
		const a = a0 + i * step;
		for (const side of [-1, 1]) {
			const hc = c + side * (thick / 2 - hr);
			const tEnd = c + side * 2;
			const p = (along: number, across: number) => (vertical ? `${across} ${along}` : `${along} ${across}`);
			items.push(
				<g key={`${i}${side}`}>
					<path d={`M ${p(a - 2.5, hc - side * hr)} Q ${p(a - 4, (hc + tEnd) / 2)} ${p(a - 2.5, tEnd)}`} stroke={tail} strokeWidth={2} fill="none" />
					<path d={`M ${p(a + 2.5, hc - side * hr)} Q ${p(a + 4, (hc + tEnd) / 2)} ${p(a + 2.5, tEnd)}`} stroke={tail} strokeWidth={2} fill="none" />
					<circle cx={vertical ? hc : a} cy={vertical ? a : hc} r={hr} fill={head} stroke={shade(head, -0.25)} strokeWidth={1} />
				</g>,
			);
		}
	}
	return <g opacity={opacity}>{items}</g>;
};
