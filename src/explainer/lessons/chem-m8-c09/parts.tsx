// C8-09 coded parts (mass spectrometry). Spectra are coded only, never painted. Exported for c10 to c12 and g03:
// - SpecAxes, StickSpec, PeakLab, GapBracket: an m/z axis (ticks every 10) and a relative abundance axis (0 to 100%,
//   ticks every 20); vertical bars at their exact m/z that grow on cue (left to right); bars repaint (gold molecular ion,
//   teal fragments, violet isotope partner) or pulse on cue; a gap bracket is a horizontal double arrow between two bars
//   with a chip above it.
// - MOLS / MolAt: skeletal structures (the C4H8O isomers, the two pentanones) in the M7 kit style (SkelAt), with
//   optional rings round chosen bonds; MolSplit: the same structure snapping at one bond, the charged piece gaining a
//   "+" and dropping to a target, the neutral piece greying and floating off (break-and-weigh).
// - CandStrip: a row of candidate cards (structure, name, a small mass chip) that glow, dim or strike.
// - IonFlight: coded dots over the cutaway plate (m8-ms-cutaway-v1): grey molecules in, an electron streak, dots turn
//   "+", speed up, three streams bend by different amounts in the magnet (light bends most), a neutral dot drifts on.
// Board, chips, cards and plates are bio-m8-g01's practice board through bio-m8-b12's parts (as chem-m8-c13 uses them).
// Nothing here draws people.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Skel, outward, zig} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import type {Mol2} from '../chem-m7-c02/parts';
import {AMBER, AMBER_INK, CARD, Chip, DrawPath, EDGE, GREYT, INK, INK_SOFT, RED, Sx, TEAL, lerp, mw, prog, pulse, smooth, vis} from '../bio-m8-b12/parts';

export * from '../bio-m8-b12/parts';
export type {Mol2, V2};
export const NAVY = '#24407a';
export const GOLD = '#c99512', GOLD_INK = '#8a6408', FRAG = '#1f8f86', FRAG_INK = '#16655f', ISO = '#7a4fb0', NEUT = '#9a948a', OXI = '#8f3f26';

// ---------- the stick spectrum ----------
export type SG = {x: number; y: number; w: number; h: number; m0: number; m1: number};
export const sxm = (g: SG, mz: number) => g.x + ((mz - g.m0) / (g.m1 - g.m0)) * g.w;
export const syh = (g: SG, h: number) => g.y + g.h - (h / 100) * g.h;
export type SBar = [number, number];
/** Axes with ticks; labels write on at labelsAt (m/z) and yAt (relative abundance). */
export const SpecAxes: React.FC<{g: SG; at?: number; xLabelAt?: number; yLabelAt?: number; size?: number; o?: number; step?: number; yTicks?: boolean; xTitle?: string; yTitle?: string}> = ({g, at = -1000, xLabelAt = -1000, yLabelAt = -1000, size = 28, o = 1, step = 10, yTicks = true, xTitle = 'm/z', yTitle = 'relative abundance (%)'}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const ticks: number[] = [];
	const minor: number[] = [];
	for (let m = Math.ceil(g.m0 / (step / 2)) * (step / 2); m <= g.m1 + 0.01; m += step / 2) if (Math.abs(m / step - Math.round(m / step)) > 0.01) minor.push(m);
	for (let m = Math.ceil(g.m0 / step) * step; m <= g.m1 + 0.01; m += step) ticks.push(m);
	return (
		<g opacity={v}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD} opacity={0.75} />
			{yTicks ? [20, 40, 60, 80, 100].map(t => <line key={'g' + t} x1={g.x} x2={g.x + g.w} y1={syh(g, t)} y2={syh(g, t)} stroke="#d6c9b2" strokeWidth={1.5} />) : null}
			<path d={`M${g.x},${g.y - 10} L${g.x},${g.y + g.h} L${g.x + g.w + 10},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{minor.map(t => <line key={'n' + t} x1={sxm(g, t)} x2={sxm(g, t)} y1={g.y + g.h} y2={g.y + g.h + 6} stroke={INK} strokeWidth={2} />)}
			{ticks.map(t => <g key={t}><line x1={sxm(g, t)} x2={sxm(g, t)} y1={g.y + g.h} y2={g.y + g.h + 10} stroke={INK} strokeWidth={3} /><Sx x={sxm(g, t)} y={g.y + g.h + 14 + size} text={`${t}`} size={size} color={INK} anchor="middle" weight={600} at={-1000} /></g>)}
			{yTicks ? [0, 20, 40, 60, 80, 100].map(t => <g key={'y' + t}><line x1={g.x - 10} x2={g.x} y1={syh(g, t)} y2={syh(g, t)} stroke={INK} strokeWidth={3} /><Sx x={g.x - 16} y={syh(g, t) + size * 0.35} text={`${t}`} size={size} color={INK} anchor="end" weight={600} at={-1000} /></g>) : null}
			<Sx x={g.x + g.w / 2} y={g.y + g.h + 26 + size * 2.1} text={xTitle} size={size + 4} color={INK} anchor="middle" weight={800} at={xLabelAt} />
			<Sx x={g.x - 60} y={g.y - 24} text={yTitle} size={size + 2} color={INK} weight={800} at={yLabelAt} />
		</g>
	);
};
export type Paint = {mz: number; color: string; at: number; out?: number};
/** Bars grow left to right from `at` (stagger frames apart); `paint` recolours a bar from a frame; `pulse` flashes bars;
 *  `dim` greys every bar not in `keep` from a frame. */
export const StickSpec: React.FC<{g: SG; bars: SBar[]; at?: number; stagger?: number; color?: string; paint?: Paint[]; pulses?: {mzs: number[]; at: number; color?: string}[]; bw?: number; o?: number; dim?: {at: number; keep: number[]; out?: number}}> = ({g, bars, at = -1000, stagger = 6, color = FRAG, paint = [], pulses = [], bw = 9, o = 1, dim}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{bars.map(([mz, h], i) => {
				const k = at < -100 ? 1 : smooth(prog(f, at + i * stagger, 12));
				if (k <= 0.001) return null;
				const p = [...paint].reverse().find(q => q.mz === mz && f >= q.at && (q.out === undefined || f < q.out));
				const pu = pulses.reduce((a, q) => (q.mzs.includes(mz) ? Math.max(a, pulse(f, q.at, 30)) : a), 0);
				const dm = dim && !dim.keep.includes(mz) ? vis(f, dim.at, dim.out, 12) : 0;
				const top = syh(g, Math.max(h, 0.6) * k);
				const x = sxm(g, mz);
				return (
					<g key={mz} opacity={1 - 0.6 * dm}>
						{pu > 0.01 ? <rect x={x - bw / 2 - 7} y={top - 7} width={bw + 14} height={g.y + g.h - top + 7} rx={6} fill={AMBER} opacity={0.45 * pu} /> : null}
						<rect x={x - bw / 2} y={top} width={bw} height={g.y + g.h - top} fill={p ? p.color : color} />
					</g>
				);
			})}
		</g>
	);
};
/** A label above a bar (or at dx, dy from the bar top), with an optional short leader. */
export const PeakLab: React.FC<{g: SG; mz: number; h: number; text: string; at?: number; out?: number; color?: string; size?: number; dx?: number; dy?: number; anchor?: 'start' | 'middle' | 'end'; leader?: boolean; hand?: boolean; weight?: number}> = ({g, mz, h, text, at = -1000, out, color = INK, size = 32, dx = 0, dy = -16, anchor = 'middle', leader = false, hand = true, weight = 700}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const x = sxm(g, mz), y = syh(g, h);
	return (
		<g opacity={v}>
			{leader ? <line x1={x} y1={y - 6} x2={x + dx} y2={y + dy + 10} stroke={color} strokeWidth={2.5} strokeDasharray="5 4" /> : null}
			<Sx x={x + dx} y={y + dy} text={text} size={size} color={color} anchor={anchor} hand={hand} weight={weight} at={-1000} />
		</g>
	);
};
/** A horizontal double arrow between two bars at screen y, with a chip above it. */
export const GapBracket: React.FC<{g: SG; a: number; b: number; y: number; text: string; at: number; out?: number; color?: string; size?: number; dim?: number; chipDx?: number}> = ({g, a, b, y, text, at, out, color = NAVY, size = 32, dim, chipDx = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * (dim === undefined ? 1 : 1 - 0.55 * prog(f, dim, 14));
	if (v <= 0.01) return null;
	const x0 = Math.min(sxm(g, a), sxm(g, b)) + 4, x1 = Math.max(sxm(g, a), sxm(g, b)) - 4;
	const k = smooth(prog(f, at, 16));
	const xm = (x0 + x1) / 2;
	const w = mw(text, size, true, 700) + size * 1.2;
	return (
		<g opacity={v}>
			<line x1={xm - (xm - x0) * k} x2={xm + (x1 - xm) * k} y1={y} y2={y} stroke={color} strokeWidth={4} />
			<path d={`M${x0 + 14},${y - 9} L${x0},${y} L${x0 + 14},${y + 9} M${x1 - 14},${y - 9} L${x1},${y} L${x1 - 14},${y + 9}`} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at + 10, 6)} />
			<line x1={x0} x2={x0} y1={y - 16} y2={y + 16} stroke={color} strokeWidth={3} />
			<line x1={x1} x2={x1} y1={y - 16} y2={y + 16} stroke={color} strokeWidth={3} />
			<g opacity={prog(f, at + 8, 10)}>
				<rect x={xm + chipDx - w / 2} y={y - size * 1.55 - 12} width={w} height={size * 1.55} rx={size * 0.77} fill={CARD} stroke={color} strokeWidth={3} />
				<Sx x={xm + chipDx} y={y - 12 - size * 0.77 + size * 0.34} text={text} size={size} color={color} anchor="middle" hand weight={700} at={-1000} />
			</g>
		</g>
	);
};
/** A dashed line from a bar top to the 100 tick on the y axis. */
export const ToHundred: React.FC<{g: SG; mz: number; at: number; out?: number; color?: string}> = ({g, mz, at, out, color = FRAG_INK}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const k = smooth(prog(f, at, 18));
	const x = sxm(g, mz), y = syh(g, 100);
	return <line opacity={v} x1={x} x2={lerp(x, g.x, k)} y1={y} y2={y} stroke={color} strokeWidth={3.5} strokeDasharray="10 7" />;
};
/** A soft rounded highlight band over a range of m/z. */
export const Spot: React.FC<{g: SG; a: number; b: number; at: number; out?: number; color?: string; top?: number}> = ({g, a, b, at, out, color = AMBER, top = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.01) return null;
	const x0 = sxm(g, a) - 18, x1 = sxm(g, b) + 18;
	return <rect opacity={0.22 * v} x={x0} y={g.y + top} width={x1 - x0} height={g.h - top} rx={16} fill={color} />;
};

// ---------- spectra (NIST 70 eV records; see the design's Numbers to verify) ----------
export const SPEC: Record<string, SBar[]> = {
	butanone: [[15, 4], [27, 8], [29, 17], [43, 100], [57, 8], [72, 25], [73, 1]],
	chloromethane: [[13, 5.4], [14, 8.4], [15, 72.4], [35, 6.2], [47, 7.1], [49, 11.4], [50, 100], [51, 3.8], [52, 31.0]],
	pentan3one: [[27, 12.4], [29, 59.4], [43, 1.6], [57, 100], [58, 3.4], [86, 21.2], [87, 1.2]],
	/** Bromomethane: approximate heights read from the NIST public plot (brief 122): 15 about 47, 94 100, 96 about 94. */
	bromomethane: [[15, 47], [94, 100], [96, 94]],
};
export const hOf = (k: keyof typeof SPEC, mz: number) => (SPEC[k].find(b => b[0] === mz) ?? [mz, 0])[1];

// ---------- molecules ----------
const DX = 92, DY = 54;
const chain = (n: number, extra: Bond[] = []): Bond[] => [...Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1})), ...extra];
const zz = (n: number) => zig(n, (-(n - 1) * DX) / 2, 0, DX, DY);
/** A ketone or chain with =O on carbon i (outward). */
const ketone = (n: number, i: number): Mol2 => { const Z = zz(n); return {pts: [...Z, outward(Z, i, 84)], bonds: chain(n, [{a: i, b: n, order: 2}]), labels: [{i: n, text: 'O'}]}; };
const butanal = (): Mol2 => { const Z = zz(5); return {pts: Z, bonds: chain(4, [{a: 3, b: 4, order: 2}]), labels: [{i: 4, text: 'O'}]}; };
const mepropanal = (): Mol2 => { const Z = zz(4); return {pts: [...Z, outward(Z, 1, 84)], bonds: chain(3, [{a: 2, b: 3, order: 2}, {a: 1, b: 4}]), labels: [{i: 3, text: 'O'}]}; };
const butenol = (): Mol2 => { const Z = zz(4); return {pts: [...Z, outward(Z, 2, 84)], bonds: [{a: 0, b: 1, order: 2}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 2, b: 4}], labels: [{i: 4, text: 'OH'}]}; };
export const MOLS = {
	butanone: ketone(4, 1),
	butanal: butanal(),
	mepropanal: mepropanal(),
	butenol: butenol(),
	pentan2one: ketone(5, 1),
	pentan3one: ketone(5, 2),
	chain4: {pts: zz(4), bonds: chain(4)} as Mol2,
};
export type MK = keyof typeof MOLS;
export const at2 = (m: Mol2, x: number, y: number, s = 1): V2[] => m.pts.map(p => [x + p[0] * s, y + p[1] * s]);
/** Atom labels (O, OH) drawn over their points with a card backing. */
const Labels: React.FC<{m: Mol2; P: V2[]; s: number; color?: string; only?: number[]}> = ({m, P, s, color = OXI, only}) => (
	<g>
		{(m.labels ?? []).filter(l => !only || only.includes(l.i)).map((l, k) => {
			const ls = 40 * Math.max(0.7, s);
			const p = P[l.i];
			const w0 = mw('O', ls, false, 800), w = mw(l.text, ls, false, 800);
			return (
				<g key={k}>
					<rect x={p[0] - w0 / 2 - 6} y={p[1] - ls * 0.6} width={w + 12} height={ls * 1.2} rx={ls * 0.4} fill={CARD} />
					<Sx x={p[0] - w0 / 2} y={p[1] + ls * 0.36} text={l.text} size={ls} color={color} weight={800} at={-1000} />
				</g>
			);
		})}
	</g>
);
/** A skeletal structure. `rings` rings bond k (a, b points) in a colour from a frame. `glow` lays an amber halo. */
export const MolAt: React.FC<{k?: MK; m?: Mol2; x: number; y: number; s?: number; at?: number; out?: number; o?: number; width?: number; rings?: {bond: [number, number]; at: number; color?: string; out?: number}[]; color?: string; labelColor?: string; atoms?: {i: number; at: number; color: string; out?: number; r?: number}[]}> = ({k, m: mm, x, y, s = 1, at = -1000, out, o = 1, width = 5, rings = [], color, labelColor, atoms = []}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const m = mm ?? MOLS[k as MK];
	const P = at2(m, x, y, s);
	return (
		<g opacity={v}>
			{atoms.map((a, i) => { const av = vis(f, a.at, a.out, 12); return av > 0.01 ? <circle key={'a' + i} cx={P[a.i][0]} cy={P[a.i][1]} r={(a.r ?? 26) * Math.max(0.7, s)} fill={a.color} fillOpacity={0.28} stroke={a.color} strokeWidth={4} opacity={av} /> : null; })}
			<Skel pts={P} bonds={m.bonds} at={at} stagger={4} width={width} color={color} />
			<g opacity={prog(f, at + m.bonds.length * 4, 10)}><Labels m={m} P={P} s={s} color={labelColor} /></g>
			{rings.map((r, i) => {
				const rv = vis(f, r.at, r.out, 12);
				if (rv <= 0.01) return null;
				const a = P[r.bond[0]], b = P[r.bond[1]];
				const cx = (a[0] + b[0]) / 2, cy = (a[1] + b[1]) / 2;
				const ang = (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI;
				const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
				return <ellipse key={i} opacity={rv} cx={cx} cy={cy} rx={L * 0.42} ry={22 * Math.max(0.7, s)} transform={`rotate(${ang},${cx},${cy})`} fill="none" stroke={r.color ?? RED} strokeWidth={4} />;
			})}
		</g>
	);
};
/** Break-and-weigh: the structure snaps at bond `cut`; atoms in `keep` form the charged piece (gains "+", moves by
 *  `to`), the rest grey and float by `away`. `chip` labels the neutral piece; `plus` places the + near keep atom. */
export const MolSplit: React.FC<{k: MK; x: number; y: number; s?: number; at?: number; snap: number; keep: number[]; cut: [number, number]; to: V2; away?: V2; chip?: string; ion?: string; ionDy?: number; out?: number; dur?: number; o?: number; plusAt?: number; ionColor?: string}> = ({k, x, y, s = 1, at = -1000, snap, keep, cut, to, away = [60, -120], chip, ion, ionDy = 70, out, dur = 30, o = 1, ionColor = FRAG_INK}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const m = MOLS[k];
	const P = at2(m, x, y, s);
	const t = smooth(prog(f, snap + 10, dur));
	const sn = prog(f, snap, 8);
	const isCut = (b: Bond) => (b.a === cut[0] && b.b === cut[1]) || (b.a === cut[1] && b.b === cut[0]);
	const inK = (i: number) => keep.includes(i);
	const kb = m.bonds.filter(b => !isCut(b) && inK(b.a) && inK(b.b));
	const nb = m.bonds.filter(b => !isCut(b) && !inK(b.a) && !inK(b.b));
	const cb = m.bonds.filter(isCut);
	const Pk: V2[] = P.map(p => [p[0] + to[0] * t, p[1] + to[1] * t]);
	const Pn: V2[] = P.map(p => [p[0] + away[0] * t, p[1] + away[1] * t]);
	const kc = keep.reduce<V2>((a, i) => [a[0] + Pk[i][0] / keep.length, a[1] + Pk[i][1] / keep.length], [0, 0]);
	const others = P.map((_, i) => i).filter(i => !inK(i));
	const nc = others.reduce<V2>((a, i) => [a[0] + Pn[i][0] / others.length, a[1] + Pn[i][1] / others.length], [0, 0]);
	const grey = prog(f, snap + 4, 14);
	const lab = m.labels ?? [];
	return (
		<g opacity={v}>
			<g opacity={1 - sn}><Skel pts={P} bonds={cb} at={-1000} width={5} /></g>
			{sn > 0.01 ? <g opacity={sn}>{cb.map((b, i) => <path key={i} d={`M${(P[b.a][0] + P[b.b][0]) / 2 - 16},${(P[b.a][1] + P[b.b][1]) / 2 - 16} l10,8 l-6,6 l12,10`} fill="none" stroke={RED} strokeWidth={4} opacity={1 - t} />)}</g> : null}
			<Skel pts={Pk} bonds={kb} at={-1000} width={5} />
			<Labels m={{...m, labels: lab}} P={Pk} s={s} only={lab.map(l => l.i).filter(inK)} />
			<g opacity={1 - 0.35 * grey}>
				<Skel pts={Pn} bonds={nb} at={-1000} width={5} color={grey > 0.5 ? NEUT : undefined} />
				<Labels m={m} P={Pn} s={s} only={lab.map(l => l.i).filter(i => !inK(i))} color={grey > 0.5 ? NEUT : OXI} />
			</g>
			{sn > 0.01 ? <g opacity={sn}>
				<circle cx={kc[0] + 50 * s} cy={kc[1] - 44 * s} r={20} fill={FRAG} />
				<Sx x={kc[0] + 50 * s} y={kc[1] - 44 * s + 11} text="+" size={34} color={CARD} anchor="middle" weight={800} at={-1000} />
			</g> : null}
			{ion && t > 0.6 ? <Sx x={kc[0]} y={kc[1] + ionDy} text={ion} size={34} color={ionColor} anchor="middle" weight={800} at={-1000} opacity={prog(f, snap + 10 + dur * 0.6, 10)} /> : null}
			{chip && t > 0.3 ? <g opacity={prog(f, snap + 20, 10)}><Chip x={nc[0]} y={nc[1] - 90} text={chip} size={28} color={NEUT} fill="#f1eee7" ink={GREYT} anchor="middle" /></g> : null}
		</g>
	);
};

// ---------- candidate strip ----------
export type Cand = {k?: MK; m?: Mol2; formula?: string; name: string; at?: number; glow?: number; dim?: number; strike?: number; chip?: string; chipAt?: number; s?: number};
export const CandStrip: React.FC<{c: Cand[]; x?: number; y?: number; w?: number; gap?: number; h?: number; size?: number; o?: number; molY?: number}> = ({c, x = 96, y = 150, w = 410, gap = 30, h = 190, size = 30, o = 1, molY = 0.42}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{c.map((cd, i) => {
				const v = prog(f, cd.at ?? -1000, 12);
				if (v <= 0.01) return null;
				const cx = x + i * (w + gap);
				const gl = cd.glow === undefined ? 0 : prog(f, cd.glow, 12);
				const dm = cd.dim === undefined ? 0 : prog(f, cd.dim, 12);
				const st = cd.strike === undefined ? 0 : prog(f, cd.strike, 12);
				return (
					<g key={i} opacity={v}>
						{gl > 0.01 ? <rect x={cx - 8} y={y - 8} width={w + 16} height={h + 16} rx={24} fill={AMBER} opacity={0.3 * gl} /> : null}
						<rect x={cx} y={y} width={w} height={h} rx={18} fill={gl > 0.5 ? '#fff4d8' : CARD} stroke={gl > 0.5 ? AMBER_INK : EDGE} strokeWidth={gl > 0.5 ? 4 : 2.5} />
						<g opacity={1 - 0.5 * Math.max(dm, st)}>
							{cd.k || cd.m ? <MolAt k={cd.k} m={cd.m} x={cx + w / 2} y={y + h * molY} s={cd.s ?? 0.62} at={cd.at ?? -1000} width={4} /> : null}
							{cd.formula ? <Sx x={cx + w / 2} y={y + h * 0.5} text={cd.formula} size={44} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
							<Sx x={cx + 18} y={y + h - 16} text={cd.name} size={size} color={INK} weight={800} at={-1000} />
						</g>
						{cd.chip ? <g opacity={prog(f, cd.chipAt ?? cd.at ?? -1000, 12)}>
							<rect x={cx + w - 74} y={y + h - 48} width={60} height={38} rx={19} fill="#f1eee7" stroke={NEUT} strokeWidth={2.5} />
							<Sx x={cx + w - 44} y={y + h - 19} text={cd.chip} size={28} color={GREYT} anchor="middle" weight={800} at={-1000} />
						</g> : null}
						{st > 0.01 ? <DrawPath d={`M${cx + 14},${y + h - 14} L${cx + w - 14},${y + 14}`} at={cd.strike as number} dur={10} color={RED} width={6} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- ion flight over the cutaway ----------
/** The cutaway's flight path in plate pixels (m8-ms-cutaway-v1, 2000 x 1200; inspected 16 Nov on a gridded sheet):
 *  the straight tube runs along y 780 from the inlet (x 300) through the vaporiser (x 430), the ionisation chamber
 *  (x 710) and three accelerating plates (x 890, 1010, 1110) to the magnet; the bend is an arc about (1230, 540),
 *  radius 240, into the vertical tube (x 1470) and the detector near y 300. */
export const CUT = {y: 780, inlet: 300, vap: 430, ion: 710, plates: [890, 1010, 1110], bendX: 1230, cy: 540, r: 240, detX: 1470, detY: 300};
type Map2 = (u: number, v: number) => V2;
export const IonFlight: React.FC<{map: Map2; at: number; ionise: number; accel: number; bend: number; count?: number; neutral?: number; out?: number; s?: number}> = ({map, at, ionise, accel, bend, count, neutral, out, s = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const n = 6;
	const dots: React.ReactNode[] = [];
	// 1. grey molecules drift from the inlet to the ionisation chamber
	for (let i = 0; i < n; i++) {
		const u = (((f - at) / 70 + i / n) % 1 + 1) % 1;
		const px = lerp(CUT.inlet, CUT.ion, u);
		const charged = f >= ionise && u > 0.85;
		const [X, Y] = map(px, CUT.y + ((i % 3) - 1) * 14);
		dots.push(<circle key={'m' + i} cx={X} cy={Y} r={9 * s} fill={charged ? FRAG : NEUT} stroke={CARD} strokeWidth={2} />);
	}
	// 2. electron streak across the ionisation chamber
	const es = vis(f, ionise, undefined, 10);
	if (es > 0.01) {
		const [ax, ay] = map(CUT.ion, CUT.y - 150), [bx, by] = map(CUT.ion, CUT.y + 150);
		const ph = ((f - ionise) % 24) / 24;
		dots.push(<g key="e" opacity={es}><line x1={ax} y1={ay} x2={bx} y2={by} stroke="#d7a21a" strokeWidth={3} strokeDasharray="8 8" strokeDashoffset={-ph * 32} /><circle cx={lerp(ax, bx, ph)} cy={lerp(ay, by, ph)} r={5} fill="#d7a21a" /></g>);
	}
	// 3. ions speed up between the plates, then three streams bend (light bends most) from `bend`
	const ak = vis(f, accel, undefined, 12);
	if (ak > 0.01) {
		const streams = [{r: 170, c: '#4aa8a0', lab: 'light'}, {r: 240, c: FRAG, lab: ''}, {r: 330, c: FRAG_INK, lab: 'heavy'}];
		const bk = f >= bend ? 1 : 0;
		for (let i = 0; i < 9; i++) {
			const st = streams[i % 3];
			const u = (((f - accel) / 44 + i / 9) % 1 + 1) % 1;
			const L1 = CUT.bendX - CUT.ion;
			let px: number, py: number;
			if (!bk) { px = lerp(CUT.ion, CUT.bendX + 120, u); py = CUT.y; }
			else {
				const tot = L1 + st.r * Math.PI / 2;
				const d = u * tot;
				if (d <= L1) { px = CUT.ion + d; py = CUT.y; }
				else { const a = Math.min(Math.PI / 2, (d - L1) / st.r); px = CUT.bendX + st.r * Math.sin(a); py = CUT.y - st.r + st.r * Math.cos(a); }
			}
			const [X, Y] = map(px, py + (i % 3 - 1) * 4 * (1 - bk));
			dots.push(<g key={'i' + i}><circle cx={X} cy={Y} r={13 * s} fill={st.c} stroke={CARD} strokeWidth={2} /><Sx x={X} y={Y + 7} text="+" size={22} color={CARD} anchor="middle" weight={800} at={-1000} /></g>);
		}
	}
	// 4. detector flashes once per stream
	if (count !== undefined && f >= count) {
		const [dx, dy] = map(CUT.detX, CUT.detY + 60);
		for (let k = 0; k < 3; k++) { const p = pulse(f, count + k * 14, 14); if (p > 0.01) dots.push(<circle key={'d' + k} cx={dx} cy={dy} r={30 + 20 * p} fill={AMBER} opacity={0.55 * p} />); }
	}
	// 5. a neutral piece drifts straight on and fades
	if (neutral !== undefined && f >= neutral) {
		const u = smooth(prog(f, neutral, 60));
		const [X, Y] = map(lerp(CUT.ion + 100, CUT.bendX + 300, u), CUT.y);
		dots.push(<circle key="n" cx={X} cy={Y} r={10 * s} fill={NEUT} stroke={INK_SOFT} strokeWidth={2} opacity={1 - prog(f, neutral + 50, 20)} />);
	}
	return <g opacity={v}>{dots}</g>;
};
/** A coded balance outline (a scale pan on a stand). */
export const BalanceIcon: React.FC<{x: number; y: number; at?: number; o?: number}> = ({x, y, at = -1000, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinejoin="round">
			<rect x={x - 90} y={y + 40} width={180} height={50} rx={8} fill="#e9e2d3" />
			<line x1={x} x2={x} y1={y + 40} y2={y - 10} />
			<path d={`M${x - 80},${y - 10} L${x + 80},${y - 10} L${x + 60},${y + 6} L${x - 60},${y + 6} Z`} fill="#f1eee7" />
		</g>
	);
};
export const CrossOut: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => (
	<g>
		<DrawPath d={`M${x},${y} L${x + w},${y + h}`} at={at} dur={10} color={RED} width={7} />
		<DrawPath d={`M${x + w},${y} L${x},${y + h}`} at={at + 6} dur={10} color={RED} width={7} />
	</g>
);
export {AMBER, AMBER_INK, CARD, GREYT, INK, INK_SOFT, TEAL};
