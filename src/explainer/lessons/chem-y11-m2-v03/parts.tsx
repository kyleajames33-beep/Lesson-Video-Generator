// Drawing parts for Y11 Chem M2 V03 (molar mass). Reuses the M2 V02 parts (read-only): text, chips, framed answers,
// readouts, pen marks, plates, the balance, the mole tile, the beam outline, the bridge and the question parts.
// New here, all coded (abstract diagrams): the mole heap (a mound of atom dots), periodic cells, atom tiles with
// their data-sheet value, the lots bar (a mass bar with molar-mass segments laid along it) and the chain strip
// (mass -> / MM -> n -> x N_A -> N).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMB_S, AMB_SOFT, AMB_T, EL, INK, NAVY_SOFT, NAVY_T, PAPER, PenRing, Sx, VIO_S, VIO_SOFT, VIO_T, clamp01, prog, smooth} from '../chem-y11-m2-v02/parts';

export * from '../chem-y11-m2-v02/parts';

// ---------- colour roles (design Revision 2): masses navy, mol amber, molar masses teal, N_A violet ----------
export const TEAL_S = '#12827b';
export const TEAL_T = '#0b625d';
export const TEAL_SOFT = '#d6eeee';
export const CU = '#b8703a';

// ---------- mole heap ----------
const hash = (k: number, s: number) => { const v = Math.sin(k * 127.1 + s * 311.7) * 43758.5453; return v - Math.floor(v); };
/** A mound of atom dots, base centre (cx, by), width w, height h; fill 0..1 grows it from the base. */
export const Heap: React.FC<{cx: number; by: number; w: number; h: number; color: string; n?: number; r?: number; fill?: number; seed?: number; o?: number}> = ({cx, by, w, h, color, n = 160, r = 7, fill = 1, seed = 2, o = 1}) => {
	if (o <= 0.005 || fill <= 0.005) return null;
	const out: React.ReactNode[] = [];
	const shown = Math.round(n * fill);
	for (let i = 0; i < shown; i++) {
		// fill from the bottom up: atom i sits at height fraction t
		const t = Math.sqrt(i / n) * 0.0 + i / n;
		const yy = by - r - t * (h - 2 * r);
		const half = (w / 2 - r) * Math.sqrt(Math.max(0, 1 - ((by - yy) / h) ** 2));
		const xx = cx + (hash(i, seed) * 2 - 1) * half;
		out.push(<circle key={i} cx={xx} cy={yy + (hash(i, seed + 5) - 0.5) * r} r={r} fill={color} stroke="rgba(35,28,20,0.6)" strokeWidth={1.4} />);
	}
	return <g opacity={o}>{out}</g>;
};

// ---------- periodic cell ----------
export const Cell: React.FC<{x: number; y: number; s?: number; sym: string; val: string; o?: number; color?: string}> = ({x, y, s = 110, sym, val, o = 1, color = INK}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={s} height={s} rx={10} fill={PAPER} stroke={color} strokeWidth={4} />
		<Sx x={x + s / 2} y={y + s * 0.52} text={sym} size={Math.round(s * 0.42)} color={color} anchor="middle" weight={800} at={-1000} />
		<Sx x={x + s / 2} y={y + s * 0.86} text={val} size={Math.max(26, Math.round(s * 0.26))} color={color} anchor="middle" weight={800} at={-1000} />
	</g>
));

// ---------- atom tile (formula tiles) ----------
export const ATile: React.FC<{x: number; y: number; el: string; s?: number; val: string; o?: number; dy?: number}> = ({x, y, el, s = 96, val, o = 1, dy = 0}) => {
	if (o <= 0.005) return null;
	const light = el === 'H' || el === 'Mg' || el === 'Ca';
	return (
		<g opacity={o} transform={`translate(0,${dy})`}>
			<rect x={x} y={y} width={s} height={s} rx={12} fill={EL[el] ?? '#ccc'} stroke={INK} strokeWidth={3.5} />
			<Sx x={x + s / 2} y={y + s * 0.5} text={el} size={Math.round(s * 0.4)} color={light ? INK : '#ffffff'} anchor="middle" weight={800} at={-1000} />
			<Sx x={x + s / 2} y={y + s * 0.85} text={val} size={Math.max(26, Math.round(s * 0.27))} color={light ? INK : '#ffffff'} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

// ---------- the lots bar ----------
/** A navy mass bar (x, y, w for `whole` grams) with teal molar-mass segments of `lot` grams laid on one at a time from
 *  frame `at`, every `every` frames. Returns nothing else; use lotsDone for the counter. */
export const lotsDone = (f: number, at: number, every: number, max: number) => Math.max(0, Math.min(max, Math.floor((f - at) / every) + 1 - (f < at ? 1 : 0)));
export const LotsBar: React.FC<{x: number; y: number; w: number; h?: number; whole: number; lot: number; at: number; every?: number; max: number; label?: string; lotLabel?: string; o?: number; size?: number}> = ({x, y, w, h = 90, whole, lot, at, every = 22, max, label, lotLabel, o = 1, size = 36}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const sw = (lot / whole) * w;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={10} fill={NAVY_SOFT} stroke={NAVY_T} strokeWidth={5} />
			{label ? <Sx x={x} y={y - 16} text={label} size={size + 4} color={NAVY_T} weight={800} at={-1000} /> : null}
			{Array.from({length: max}, (_, i) => {
				const t0 = at + i * every;
				const p = smooth(clamp01((f - t0) / 14));
				if (p <= 0.005) return null;
				const sx = x + i * sw;
				return (
					<g key={i} opacity={p} transform={`translate(0,${(1 - p) * -60})`}>
						<rect x={sx + 3} y={y + 8} width={sw - 6} height={h - 16} rx={8} fill={TEAL_SOFT} stroke={TEAL_S} strokeWidth={4} />
						{lotLabel ? <Sx x={sx + sw / 2} y={y + h / 2 + size * 0.36} text={lotLabel} size={size} color={TEAL_T} anchor="middle" weight={800} at={-1000} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the chain strip ----------
export type ChainG = {x: number; y: number; h: number; size: number};
/** "mass (g)" -> "/ MM" -> "n (mol)" -> "x N_A" -> "N (particles)": boxes and arrow labels appear at their frames;
 *  grow 0..1 enlarges the n box. Returns the n box centre through nBox for pen rings. */
export const chainLayout = (g: ChainG) => {
	const bw = [270, 250, 340], aw = 220;
	const xs = [g.x, g.x + bw[0] + aw, g.x + bw[0] + aw + bw[1] + aw];
	return {bw, aw, xs, w: bw[0] + bw[1] + bw[2] + 2 * aw};
};
export const Chain: React.FC<{g: ChainG; at?: number[]; grow?: number; o?: number}> = ({g, at = [-1000, -1000, -1000, -1000, -1000], grow = 0, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const {bw, aw, xs} = chainLayout(g);
	const boxes = [
		{t: 'mass (g)', c: NAVY_T, soft: NAVY_SOFT},
		{t: 'n (mol)', c: AMB_T, soft: AMB_SOFT},
		{t: 'N (particles)', c: NAVY_T, soft: NAVY_SOFT},
	];
	const arrows = [{t: '÷ MM', c: TEAL_T, s: TEAL_S}, {t: '× N_A', c: VIO_T, s: VIO_S}];
	return (
		<g opacity={o}>
			{boxes.map((b, i) => {
				const v = prog(f, at[i * 2], 12);
				if (v <= 0.005) return null;
				const k = i === 1 ? 1 + 0.1 * grow : 1;
				const cx = xs[i] + bw[i] / 2, cy = g.y + g.h / 2;
				return (
					<g key={i} opacity={v} transform={`translate(${cx},${cy}) scale(${k}) translate(${-cx},${-cy})`}>
						<rect x={xs[i]} y={g.y} width={bw[i]} height={g.h} rx={16} fill={i === 1 && grow > 0.01 ? '#f6dfb0' : b.soft} stroke={b.c} strokeWidth={i === 1 ? 4 + 3 * grow : 4} />
						<Sx x={cx} y={cy + g.size * 0.36} text={b.t} size={g.size} color={b.c} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
			{arrows.map((a, i) => {
				const v = prog(f, at[i * 2 + 1], 12);
				if (v <= 0.005) return null;
				const x0 = xs[i] + bw[i] + 14, x1 = xs[i + 1] - 14, cy = g.y + g.h / 2 + 14;
				return (
					<g key={i} opacity={v}>
						<line x1={x0} y1={cy} x2={x1} y2={cy} stroke={a.s} strokeWidth={6} strokeLinecap="round" />
						<path d={`M${x1 - 16},${cy - 12} L${x1},${cy} L${x1 - 16},${cy + 12}`} fill="none" stroke={a.s} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
						<Sx x={(x0 + x1) / 2} y={cy - 20} text={a.t} size={g.size} color={a.c} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
			{void aw}
		</g>
	);
};
export const ChainRing: React.FC<{g: ChainG; at: number}> = ({g, at}) => {
	const {bw, xs} = chainLayout(g);
	return <PenRing cx={xs[1] + bw[1] / 2} cy={g.y + g.h / 2} rx={bw[1] * 0.72} ry={g.h * 0.95} at={at} color={AMB_S} seed={6} />;
};
void VIO_SOFT;
