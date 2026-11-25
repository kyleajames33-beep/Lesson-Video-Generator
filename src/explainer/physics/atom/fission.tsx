// Module 8 kit, part 10: nuclear fission (additive kit file, 26 November 2026; first used by phys-y12-m8-v17's handoff
// and v18). Course-neutral: every label, number and colour of meaning comes from the lesson.
// - FissionSplit: a heavy nucleus (a packed cluster of red "p" and grey "n" discs) that stretches into a peanut and
//   pinches into two fragment clusters, which fly apart along an axis. The lighter fragment travels further (equal and
//   opposite momentum, so distance is in inverse proportion to nucleon number). `splitAt` gives both centres so the
//   lesson can place labels, arrows and neutrons.
// - clusterR: the drawn radius of a packed cluster of n discs of radius r (for spacing labels).
import React from 'react';
import {NucleonCluster, clusterLayout} from './decay';
import type {ClusterDisc} from './decay';

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const ease = (t: number) => { const c = clamp(t); return c * c * (3 - 2 * c); };
/** Drawn radius (px) of a packed cluster of n discs of radius r. */
export const clusterR = (n: number, r: number) => 2 * r * Math.sqrt(n / 3.2) + r;
export type SplitSpec = {big: readonly ClusterDisc[]; a: readonly ClusterDisc[]; b: readonly ClusterDisc[]; nA: number; nB: number};
/** Layouts for a split of (Z, N) into fragment A (zA, nA) and fragment B (the rest after `free` neutrons leave). */
export const splitSpec = (Z: number, N: number, zA: number, aA: number, zB: number, aB: number, seed = 3): SplitSpec => ({
	big: clusterLayout(Z, N, seed), a: clusterLayout(zA, aA - zA, seed + 1), b: clusterLayout(zB, aB - zB, seed + 2), nA: aA, nB: aB,
});
/** Fragment centres at split progress u (0 to 1): stretch to 0.45, pinch by 0.5, then apart to `dist` px (fragment A). */
export const splitAt = (s: SplitSpec, cx: number, cy: number, r: number, u: number, dist: number, deg: number) => {
	const a = (deg * Math.PI) / 180, ux = Math.cos(a), uy = Math.sin(a);
	const rA = clusterR(s.nA, r), rB = clusterR(s.nB, r);
	const t = ease((u - 0.45) / 0.55);
	const dA0 = rA * 0.55, dB0 = rB * 0.55;
	const dA = dA0 + (dist - dA0) * t, dB = dB0 + ((dist * s.nA) / s.nB - dB0) * t;
	return {a: [cx + ux * dA, cy + uy * dA] as [number, number], b: [cx - ux * dB, cy - uy * dB] as [number, number], rA, rB, apart: t};
};
export const FissionSplit: React.FC<{s: SplitSpec; cx: number; cy: number; r: number; u: number; dist: number; deg: number; pFill: string; nFill: string; glow?: number; glowColor?: string; f?: number; opacity?: number; wobble?: number}> = ({s, cx, cy, r, u, dist, deg, pFill, nFill, glow = 0, glowColor = '#f2c14e', f = 0, opacity = 1, wobble = 0}) => {
	if (opacity <= 0.001) return null;
	const st = ease(u / 0.45), cross = clamp((u - 0.42) / 0.08);
	const sx = 1 + 0.45 * st + 0.04 * wobble * Math.sin(f * 0.6), sy = 1 - 0.18 * st - 0.04 * wobble * Math.sin(f * 0.6);
	const c = splitAt(s, cx, cy, r, u, dist, deg);
	const R = clusterR(s.big.length, r);
	return (
		<g opacity={opacity}>
			{glow > 0.001 && cross < 1 ? <ellipse cx={cx} cy={cy} rx={R * sx + 26} ry={R * sy + 26} transform={`rotate(${deg} ${cx} ${cy})`} fill={glowColor} opacity={0.4 * glow * (1 - cross)} /> : null}
			{cross < 1 ? <g opacity={1 - cross} transform={`translate(${cx} ${cy}) rotate(${deg}) scale(${sx} ${sy}) rotate(${-deg}) translate(${-cx} ${-cy})`}><NucleonCluster cx={cx} cy={cy} r={r} discs={s.big} pFill={pFill} nFill={nFill} letters={false} tremble={wobble} f={f} /></g> : null}
			{cross > 0 ? <g opacity={cross}>
				<NucleonCluster cx={c.b[0]} cy={c.b[1]} r={r} discs={s.b} pFill={pFill} nFill={nFill} letters={false} />
				<NucleonCluster cx={c.a[0]} cy={c.a[1]} r={r} discs={s.a} pFill={pFill} nFill={nFill} letters={false} />
			</g> : null}
		</g>
	);
};

// ---------------------------------------------------------------- chains, cores and lumps (first used by m8-v18)
// - genTreeExact: the nodes of a chain in which every event causes exactly `k` more (k a whole number).
// - GenTree: generation rows of events joined to their parents (nodes from genTreeExact or from a `sims/chain.ts`
//   run's `tree`), revealed generation by generation.
// - GenBars: events per generation as bars on a log axis (labelled "log scale" by the lesson).
// - Core: a coded reactor core (fuel cells in moderator water) with control rods lowered to a depth from 0 to 1.
// - FuelLump: a lump of fuel drawn as a slightly irregular blob.
// - AtomLattice: a grid of atoms whose jiggle grows with a "temperature" from 0 to 1 (heating, schematic).
export type TreeNode = {generation: number; index: number; parent: number};
export const genTreeExact = (gens: number, k: number): TreeNode[] => {
	const out: TreeNode[] = [];
	let n = 1;
	for (let g = 0; g < gens; g++) {
		for (let i = 0; i < n; i++) out.push({generation: g, index: i, parent: g === 0 ? -1 : Math.floor(i / k)});
		n *= k;
	}
	return out;
};
export const GenTree: React.FC<{nodes: readonly TreeNode[]; x0: number; x1: number; y0: number; dy: number; r: number; upTo: number; fill: string; stroke: string; link: string; opacity?: number; burst?: number}> = ({nodes, x0, x1, y0, dy, r, upTo, fill, stroke, link, opacity = 1, burst = 0}) => {
	if (opacity <= 0.001) return null;
	const count: number[] = [];
	nodes.forEach(n => { count[n.generation] = Math.max(count[n.generation] ?? 0, n.index + 1); });
	const pos = (g: number, i: number): [number, number] => [x0 + ((i + 0.5) / count[g]) * (x1 - x0), y0 + g * dy];
	return (
		<g opacity={opacity}>
			{nodes.map((n, k) => {
				const o = Math.max(0, Math.min(1, upTo - n.generation));
				if (o <= 0.001 || n.parent < 0) return null;
				const [x, y] = pos(n.generation, n.index), [px, py] = pos(n.generation - 1, n.parent);
				return <line key={`l${k}`} x1={px} y1={py + r} x2={px + (x - px) * o} y2={py + r + (y - r - py - r) * o} stroke={link} strokeWidth={Math.max(1.5, r * 0.18)} opacity={0.9} />;
			})}
			{nodes.map((n, k) => {
				const o = Math.max(0, Math.min(1, (upTo - n.generation) * 1.6 - 0.6));
				if (o <= 0.001) return null;
				const [x, y] = pos(n.generation, n.index);
				return <g key={`n${k}`} opacity={o}>
					{burst > 0.001 ? <circle cx={x} cy={y} r={r * (1.6 + 0.5 * burst)} fill={fill} opacity={0.35 * burst} /> : null}
					<circle cx={x} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth={Math.max(1.5, r * 0.14)} />
				</g>;
			})}
		</g>
	);
};
export type BarsG = {x: number; y: number; w: number; h: number; logMin: number; logMax: number};
export const barY = (g: BarsG, v: number) => g.y + g.h - ((Math.log10(Math.max(v, 10 ** g.logMin)) - g.logMin) / (g.logMax - g.logMin)) * g.h;
export const GenBars: React.FC<{g: BarsG; values: readonly number[]; fill: string; stroke: string; ink: string; size?: number; yTicks: readonly number[]; tickLabel: (v: number) => string; opacity?: number}> = ({g, values, fill, stroke, ink, size = 26, yTicks, tickLabel, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const bw = g.w / values.length;
	return (
		<g opacity={opacity}>
			{yTicks.map(v => <g key={v}><line x1={g.x} y1={barY(g, v)} x2={g.x + g.w} y2={barY(g, v)} stroke="rgba(60,45,20,0.18)" strokeWidth={2} /><text x={g.x - 14} y={barY(g, v) + size * 0.35} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: size, fill: ink}}>{tickLabel(v)}</text></g>)}
			{values.map((v, i) => { const top = barY(g, v); return <rect key={i} x={g.x + i * bw + bw * 0.18} y={top} width={bw * 0.64} height={g.y + g.h - top} fill={fill} stroke={stroke} strokeWidth={3} />; })}
			<line x1={g.x} y1={g.y + g.h} x2={g.x + g.w + 10} y2={g.y + g.h} stroke={ink} strokeWidth={4} />
			<line x1={g.x} y1={g.y + g.h} x2={g.x} y2={g.y - 10} stroke={ink} strokeWidth={4} />
			{values.map((_, i) => <text key={i} x={g.x + (i + 0.5) * bw} y={g.y + g.h + size + 10} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: size, fill: ink}}>{i + 1}</text>)}
		</g>
	);
};
export type CoreG = {x: number; y: number; w: number; h: number; cols: number; rows: number; rods: number};
/** Screen x of rod i and the y of its tip at depth d (0 = fully out, above the core; 1 = fully in). */
export const rodAt = (g: CoreG, i: number, d: number) => ({x: g.x + ((i + 1) / (g.rods + 1)) * g.w, tip: g.y - 20 + d * g.h});
export const Core: React.FC<{g: CoreG; depth: number; water: string; waterEdge: string; fuel: string; fuelEdge: string; rod: string; glow?: number; rodPulse?: number; waterPulse?: number; opacity?: number}> = ({g, depth, water, waterEdge, fuel, fuelEdge, rod, glow = 0, rodPulse = 0, waterPulse = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const cw = g.w / g.cols, ch = g.h / g.rows;
	const rodLen = g.h * 0.75;
	return (
		<g opacity={opacity}>
			<rect x={g.x - 30} y={g.y - 30} width={g.w + 60} height={g.h + 60} rx={18} fill={water} stroke={waterEdge} strokeWidth={3 + 4 * waterPulse} />
			{Array.from({length: g.cols * g.rows}, (_, k) => { const c = k % g.cols, r = Math.floor(k / g.cols); return <rect key={k} x={g.x + c * cw + cw * 0.22} y={g.y + r * ch + ch * 0.12} width={cw * 0.56} height={ch * 0.76} rx={6} fill={fuel} stroke={fuelEdge} strokeWidth={2.5} />; })}
			{glow > 0.001 ? <rect x={g.x} y={g.y} width={g.w} height={g.h} fill="#7fc8ff" opacity={0.18 * glow} /> : null}
			{Array.from({length: g.rods}, (_, i) => { const a = rodAt(g, i, depth); return <rect key={`r${i}`} x={a.x - 11} y={a.tip - rodLen} width={22} height={rodLen} rx={5} fill={rod} stroke="#20262c" strokeWidth={2 + 3 * rodPulse} />; })}
		</g>
	);
};
/** A slightly irregular blob of radius r (a lump of fuel). */
export const blobPath = (cx: number, cy: number, r: number, seed = 1) => {
	const n = 48;
	return Array.from({length: n + 1}, (_, i) => { const a = (i / n) * Math.PI * 2, k = 1 + 0.05 * Math.sin(3 * a + seed) + 0.03 * Math.sin(5 * a + 2 * seed); return `${i ? 'L' : 'M'}${(cx + r * k * Math.cos(a)).toFixed(1)},${(cy + r * k * Math.sin(a)).toFixed(1)}`; }).join(' ') + ' Z';
};
export const FuelLump: React.FC<{cx: number; cy: number; r: number; fill: string; stroke: string; seed?: number; opacity?: number}> = ({cx, cy, r, fill, stroke, seed = 1, opacity = 1}) => (opacity <= 0.001 ? null : <path d={blobPath(cx, cy, r, seed)} fill={fill} stroke={stroke} strokeWidth={5} opacity={opacity} />);
export const AtomLattice: React.FC<{x: number; y: number; cols: number; rows: number; gap: number; r: number; heat: number; f: number; fill: string; stroke: string; opacity?: number}> = ({x, y, cols, rows, gap, r, heat, f, fill, stroke, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const amp = 1 + 7 * heat, sp = 0.25 + 0.5 * heat;
	return (
		<g opacity={opacity}>
			{Array.from({length: cols * rows}, (_, k) => { const c = k % cols, rr = Math.floor(k / cols); return <circle key={k} cx={x + c * gap + amp * Math.sin(f * sp + k * 1.7)} cy={y + rr * gap + amp * Math.cos(f * sp * 1.1 + k * 2.3)} r={r} fill={fill} stroke={stroke} strokeWidth={2} />; })}
		</g>
	);
};
