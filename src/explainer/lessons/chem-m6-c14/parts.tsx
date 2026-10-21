// Drawing parts for M6 C14 (titration curves and conductivity). Reuses C13 (the graph primitives, curves, bands,
// magnifier inset, particle glyphs) and through it C12 to C01 (board, chips, crossed chips, question card, countdown,
// key notes, the burette fill and the C07 pH meter). New here:
// - FeatRing: a numbered feature marker on a curve (the four checks);
// - Caliper: a bracket on the x axis that measures the equivalence volume and folds in half;
// - WaterChain: a proton passed along a row of water molecules (why H3O+ and OH- conduct well);
// - IonTally: two rows of ion tokens sized by how well each ion conducts, swapping as base is added;
// - CondMeter: the conductivity meter plate with a coded level bar on its blank screen;
// - Glow: a soft pulse behind a label.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {An, ClTok, H3O, INK, INK_SOFT, NaTok, OHg, PROTON, PROTON_INK, PicH, Sx, WaterT, clamp01, gx, gy, lerp, smooth, vis} from '../chem-m6-c13/parts';
import type {GG} from '../chem-m6-c13/parts';
import {COND, COND_SCREEN} from './assets';

export * from '../chem-m6-c13/parts';

/** A numbered white ring on a graph point. */
export const FeatRing: React.FC<{g: GG; v: number; p: number; n?: number; at: number; out?: number; o?: number; r?: number; dx?: number; dy?: number}> = ({g, v, p, n, at, out, o = 1, r = 22, dx = -30, dy = -30}) => {
	const f = useCurrentFrame();
	const op = vis(f, at, out, 10) * o;
	if (op <= 0.01) return null;
	const X = gx(g, v), Y = gy(g, p);
	const s = 0.7 + 0.3 * smooth(prog(f, at, 12));
	return (
		<g opacity={op} transform={`translate(${X},${Y}) scale(${s}) translate(${-X},${-Y})`}>
			<circle cx={X} cy={Y} r={r} fill="none" stroke="#ffffff" strokeWidth={8} />
			<circle cx={X} cy={Y} r={r} fill="none" stroke={INK} strokeWidth={3.5} />
			{n !== undefined ? (
				<g>
					<circle cx={X + dx} cy={Y + dy} r={15} fill={INK} />
					<text x={X + dx} y={Y + dy + 7} textAnchor="middle" fill="#ffffff" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 20}}>{n}</text>
				</g>
			) : null}
		</g>
	);
};

/** The half-volume caliper: a bracket on the x axis from 0 to `full`, folding to `half` from `fold`. */
export const Caliper: React.FC<{g: GG; full: number; half: number; at: number; fold: number; out?: number; color?: string; fullLabel: string; halfLabel: string; size?: number; o?: number}> = ({g, full, half, at, fold, out, color = INK, fullLabel, halfLabel, size = 28, o = 1}) => {
	const f = useCurrentFrame();
	const op = vis(f, at, out, 12) * o;
	if (op <= 0.01) return null;
	const grow = smooth(prog(f, at, 20));
	const k = smooth(prog(f, fold, 30));
	const w = lerp(full, half, k) * grow;
	const y = g.y + g.h - 34;
	const x1 = gx(g, 0), x2 = gx(g, w);
	return (
		<g opacity={op}>
			<path d={`M${x1},${y + 14} L${x1},${y} L${x2},${y} L${x2},${y + 14}`} fill="none" stroke={color} strokeWidth={4} />
			<Sx x={(x1 + gx(g, full * grow)) / 2} y={y - 14} text={fullLabel} size={size} color={color} anchor="middle" weight={800} at={at + 8} out={fold} />
			<Sx x={(x1 + x2) / 2} y={y - 14} text={halfLabel} size={size} color={color} anchor="middle" weight={800} at={fold + 20} />
		</g>
	);
};

/** A row of water molecules with one proton passed from each to the next (Grotthuss picture). */
export const WaterChain: React.FC<{x: number; y: number; n?: number; gap?: number; at: number; step?: number; out?: number; s?: number}> = ({x, y, n = 6, gap = 74, at, step = 12, out, s = 1.3}) => {
	const f = useCurrentFrame();
	const op = vis(f, at - 10, out, 12);
	if (op <= 0.01) return null;
	const t = Math.max(0, (f - at) / step);
	const i = Math.min(n - 1, Math.floor(t));
	const fr = i >= n - 1 ? 0 : smooth(clamp01(t - i));
	return (
		<g opacity={op}>
			{Array.from({length: n}, (_, k) => <WaterT key={k} x={x + k * gap} y={y + (k % 2 ? 10 : -10)} s={s} />)}
			<circle cx={lerp(x + i * gap, x + (i + 1) * gap, fr) + 10 * s} cy={lerp(y + (i % 2 ? 10 : -10), y + ((i + 1) % 2 ? 10 : -10), fr) - 12 * s} r={9 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={2} />
		</g>
	);
};

export type IonK = 'H3O' | 'Na' | 'Cl' | 'OH' | 'Ac';
const IW: Record<IonK, number> = {H3O: 54, Na: 34, Cl: 38, OH: 46, Ac: 36};
const Tok: React.FC<{k: IonK; x: number; y: number}> = ({k, x, y}) => {
	if (k === 'H3O') return <H3O x={x} y={y} s={1.35} />;
	if (k === 'Na') return <NaTok x={x} y={y} s={0.62} grey={1} />;
	if (k === 'Cl') return <ClTok x={x} y={y} s={0.62} grey={1} />;
	if (k === 'OH') return <OHg x={x} y={y} s={1.25} />;
	return <An x={x} y={y} s={1.1} />;
};
/** Rows of ion tokens (positive ions above, negative below), sized by how well each conducts. */
export const IonTally: React.FC<{x: number; y: number; pos: (f: number) => IonK[]; neg: (f: number) => IonK[]; at: number; out?: number; o?: number; lh?: number; labels?: boolean; size?: number}> = ({x, y, pos, neg, at, out, o = 1, lh = 80, labels = true, size = 24}) => {
	const f = useCurrentFrame();
	const op = vis(f, at, out, 12) * o;
	if (op <= 0.01) return null;
	const row = (ks: IonK[], yy: number) => {
		let cx = x + (labels ? 150 : 0);
		return ks.map((k, i) => { const w = IW[k]; const node = <Tok key={i} k={k} x={cx + w / 2} y={yy} />; cx += w + 6; return node; });
	};
	return (
		<g opacity={op}>
			{labels ? <Sx x={x} y={y + 8} text="positive ions" size={size} color={INK_SOFT} hand at={-1000} /> : null}
			{labels ? <Sx x={x} y={y + lh + 8} text="negative ions" size={size} color={INK_SOFT} hand at={-1000} /> : null}
			{row(pos(f), y)}
			{row(neg(f), y + lh)}
		</g>
	);
};
/** Ion lists for HCl (or CH3COOH) titrated with NaOH, five tokens per 25 mL (relative amounts). */
export const tallyHCl = (v: number) => {
	const r = Math.round((5 * Math.min(v, 25)) / 25);
	const ex = Math.round((5 * Math.max(0, v - 25)) / 25);
	return {pos: [...Array(5 - r).fill('H3O'), ...Array(r).fill('Na')] as IonK[], neg: [...Array(5).fill('Cl'), ...Array(ex).fill('OH')] as IonK[]};
};
export const tallyEth = (v: number) => {
	const r = Math.round((5 * Math.min(v, 25)) / 25);
	const ex = Math.round((5 * Math.max(0, v - 25)) / 25);
	return {pos: (r === 0 ? ['H3O'] : Array(r).fill('Na')) as IonK[], neg: [...(r === 0 ? ['Ac'] : Array(r).fill('Ac')), ...Array(ex).fill('OH')] as IonK[]};
};

/** The conductivity meter plate with a coded level bar on its screen (level 0..1). */
export const CondMeter: React.FC<{x: number; y: number; h: number; level: (f: number) => number; at: number; out?: number; o?: number}> = ({x, y, h, level, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const op = vis(f, at, out, 14) * o;
	if (op <= 0.01) return null;
	const k = h / COND.box[3];
	const P = ([nx, ny]: [number, number]): [number, number] => [x + (nx - COND.box[0]) * k, y + (ny - COND.box[1]) * k];
	const q = COND_SCREEN.map(P);
	const L = clamp01(level(f));
	const ins = Math.max(3, (q[2][0] - q[3][0]) * 0.12);
	const x0 = q[3][0] + ins, x1 = q[2][0] - ins, yb = Math.min(q[3][1], q[2][1]) - ins, yt = Math.max(q[0][1], q[1][1]) + ins;
	const n = 5;
	return (
		<g opacity={op}>
			<PicH p={COND} x={x} y={y} h={h} />
			<path d={`M${q.map(p => p.join(',')).join(' L')} Z`} fill="#2b2723" opacity={0.94} />
			{Array.from({length: n}, (_, i) => {
				const on = (i + 0.5) / n <= L;
				const bh = (yb - yt) / n;
				return <rect key={i} x={x0} y={yb - (i + 1) * bh + 1} width={(x1 - x0) * (0.4 + 0.6 * (i / n))} height={Math.max(1, bh - 2)} rx={1.5} fill="#f2b84b" opacity={on ? 1 : 0.12} />;
			})}
		</g>
	);
};

/** A soft glow behind a label at (x, y) of width w, pulsing once from `at`. */
export const Glow: React.FC<{x: number; y: number; w: number; h?: number; at: number; len?: number; color?: string}> = ({x, y, w, h = 44, at, len = 40, color = '#f6d77a'}) => {
	const f = useCurrentFrame();
	const g = Math.max(0, Math.sin(clamp01((f - at) / len) * Math.PI));
	if (g <= 0.01) return null;
	return <rect x={x} y={y - h * 0.75} width={w} height={h} rx={h / 2} fill={color} opacity={0.5 * g} />;
};
void INK_SOFT;
