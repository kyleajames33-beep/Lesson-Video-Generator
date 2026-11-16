// C8-11a coded parts (carbon-13 NMR). Exported for c11b and c12:
// - NG / dx / NmrAxis / NmrSpec: a reversed chemical shift axis (higher ppm on the left), lines at measured shifts that
//   rise on cue (left or right to left), environment colours, value tags, a grey TMS line at 0; proton mode draws
//   multiplets (n lines, Pascal heights, spacing J in ppm) for c11b.
// - DataSheet13: the NESA carbon-13 shift table as a plain card; rows light on cue, the rest dim.
// - Bore (two pole faces and field lines), Nuclei (tiny magnets with or against the field; one flips), Cloud (an
//   electron halo round a carbon that thins on the oxygen side), Squiggle (a radio wave).
// - Environment colours E1 teal, E2 amber, E3 violet, E4 rust.
// Structures use c09's MolAt (with atom rings). Nothing here draws people.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CARD, EDGE, GREYT, INK, INK_SOFT, NAVY, Sx, prog, pulse, smooth, vis} from '../chem-m8-c10/parts';

export * from '../chem-m8-c10/parts';
export const E1 = '#1f8f86', E2 = '#c9781a', E3 = '#7a4fb0', E4 = '#b5583c', TMSC = '#9a948a';

// ---------- the NMR spectrum ----------
export type NG = {x: number; y: number; w: number; h: number; d0: number; d1?: number};
export const dx = (g: NG, d: number) => g.x + ((g.d0 - d) / (g.d0 - (g.d1 ?? 0))) * g.w;
export const NmrAxis: React.FC<{g: NG; step?: number; at?: number; ticksAt?: number; rtl?: boolean; size?: number; o?: number; title?: string; titleAt?: number; minor?: number}> = ({g, step = 20, at = -1000, ticksAt = -1000, rtl = false, size = 28, o = 1, title = 'chemical shift, δ (ppm)', titleAt = -1000, minor}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const ticks: number[] = [];
	for (let d = g.d1 ?? 0; d <= g.d0 + 0.001; d += step) ticks.push(Math.round(d * 100) / 100);
	const mn: number[] = [];
	if (minor) for (let d = g.d1 ?? 0; d <= g.d0 + 0.001; d += minor) mn.push(d);
	const yb = g.y + g.h;
	return (
		<g opacity={v}>
			<line x1={g.x - 10} x2={g.x + g.w + 10} y1={yb} y2={yb} stroke={INK} strokeWidth={3.5} />
			{mn.map(d => <line key={'m' + d} x1={dx(g, d)} x2={dx(g, d)} y1={yb} y2={yb + 6} stroke={INK} strokeWidth={2} />)}
			{ticks.map((d, i) => {
				const k = rtl ? prog(f, ticksAt + (ticks.length - 1 - (ticks.length - 1 - i)) * 3, 10) : prog(f, ticksAt, 10);
				return <g key={d}><line x1={dx(g, d)} x2={dx(g, d)} y1={yb} y2={yb + 11} stroke={INK} strokeWidth={3} />{k > 0.01 ? <Sx x={dx(g, d)} y={yb + 14 + size} text={`${d}`} size={size} color={INK} anchor="middle" weight={600} at={-1000} opacity={k} /> : null}</g>;
			})}
			{title ? <Sx x={g.x + g.w / 2} y={yb + 26 + size * 2.1} text={title} size={size + 2} color={INK} anchor="middle" weight={800} at={titleAt} /> : null}
		</g>
	);
};
export type Peak = {d: number; h: number; color?: string; at?: number; tag?: string; tagAt?: number; n?: number; J?: number; dim?: number; out?: number; tagDy?: number; tagSize?: number; tagColor?: string};
const pascal = (n: number) => { let r = [1]; for (let i = 1; i < n; i++) r = [1, ...r.slice(1).map((v, k) => v + r[k]), 1]; return r; };
/** Lines (or multiplets) rising from the baseline. h is a share of g.h for the tallest line of the group. */
export const NmrSpec: React.FC<{g: NG; peaks: Peak[]; color?: string; tms?: boolean | number; tmsTag?: string; o?: number; lw?: number}> = ({g, peaks, color = INK, tms = true, tmsTag, o = 1, lw = 5}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const yb = g.y + g.h;
	const tAt = typeof tms === 'number' ? tms : -1000;
	const tv = tms === false ? 0 : prog(f, tAt, 12);
	return (
		<g opacity={o}>
			{tv > 0.01 ? <g opacity={tv}>
				<rect x={dx(g, 0) - lw / 2} y={yb - g.h * 0.3} width={lw} height={g.h * 0.3} fill={TMSC} />
				{tmsTag ? <Sx x={dx(g, 0)} y={yb - g.h * 0.3 - 14} text={tmsTag} size={28} color={GREYT} anchor="end" hand weight={700} at={-1000} /> : null}
			</g> : null}
			{peaks.map((p, i) => {
				const k = smooth(prog(f, p.at ?? -1000, 12)) * (p.out === undefined ? 1 : 1 - prog(f, p.out, 12));
				if (k <= 0.01) return null;
				const dm = p.dim === undefined ? 0 : prog(f, p.dim, 14);
				const n = p.n ?? 1, pc = pascal(n), mx = Math.max(...pc);
				const J = p.J ?? 0.07;
				const col = p.color ?? color;
				const tv = p.tag ? prog(f, p.tagAt ?? p.at ?? -1000, 12) : 0;
				return (
					<g key={i} opacity={1 - 0.6 * dm}>
						{pc.map((c, j) => {
							const H = g.h * p.h * (c / mx) * k;
							const x = dx(g, p.d + (j - (n - 1) / 2) * J);
							return <rect key={j} x={x - lw / 2} y={yb - H} width={lw} height={H} fill={col} />;
						})}
						{tv > 0.01 ? <Sx x={dx(g, p.d)} y={yb - g.h * p.h - 14 + (p.tagDy ?? 0)} text={p.tag as string} size={p.tagSize ?? 32} color={p.tagColor ?? col} anchor="middle" weight={800} at={-1000} opacity={tv} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** An arrow along the axis, right to left, labelled. */
export const AxisArrow: React.FC<{x0: number; x1: number; y: number; text: string; at: number; color?: string; size?: number}> = ({x0, x1, y, text, at, color = NAVY, size = 34}) => {
	const f = useCurrentFrame();
	const k = smooth(prog(f, at, 24));
	if (k <= 0.01) return null;
	const xe = x0 + (x1 - x0) * k;
	return (
		<g opacity={prog(f, at, 8)}>
			<line x1={x0} x2={xe} y1={y} y2={y} stroke={color} strokeWidth={5} />
			<path d={`M${xe + (x1 < x0 ? 18 : -18)},${y - 12} L${xe},${y} L${xe + (x1 < x0 ? 18 : -18)},${y + 12}`} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" />
			<Sx x={(x0 + x1) / 2} y={y - 16} text={text} size={size} color={color} anchor="middle" hand weight={800} at={-1000} />
		</g>
	);
};

// ---------- the carbon-13 data sheet ----------
export const DS13: [string, string][] = [
	['R–C (alkyl)', '5–40'],
	['R–C–Cl or R–C–Br', '10–70'],
	['R–C–C(=O)', '20–50'],
	['R–C–N', '25–60'],
	['C–O (alcohols, ethers, esters)', '50–90'],
	['C=C', '90–150'],
	['R–C≡N', '110–125'],
	['aromatic C', '110–160'],
	['R–C(=O) esters, acids', '160–185'],
	['R–C(=O) aldehydes, ketones', '190–220'],
];
export const DataSheet13: React.FC<{x: number; y: number; w?: number; rowH?: number; size?: number; lit?: {i: number; at: number; out?: number; color?: string}[]; at?: number; o?: number; dimAll?: boolean; strike?: {i: number; at: number}[]}> = ({x, y, w = 720, rowH = 54, size = 30, lit = [], at = -1000, o = 1, dimAll = true, strike = []}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={54 + rowH * DS13.length + 10} rx={16} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
			<Sx x={x + 18} y={y + 38} text="¹³C chemical shifts (data sheet), ppm" size={Math.max(26, Math.round(size * 0.92))} color={GREYT} weight={700} at={-1000} />
			{DS13.map(([t, r], i) => {
				const L = lit.reduce((a, l) => (l.i === i ? Math.max(a, vis(f, l.at, l.out, 12)) : a), 0);
				const col = lit.find(l => l.i === i)?.color ?? NAVY;
				const yy = y + 54 + i * rowH;
				const st = strike.find(s => s.i === i);
				const sk = st ? prog(f, st.at, 10) : 0;
				return (
					<g key={i} opacity={L > 0.5 ? 1 : dimAll ? 0.72 : 1}>
						{L > 0.01 ? <rect x={x + 6} y={yy} width={w - 12} height={rowH - 6} rx={10} fill={col} opacity={0.18 * L} stroke={col} strokeWidth={3 * L} /> : null}
						<Sx x={x + 18} y={yy + rowH * 0.64} text={t} size={size} color={L > 0.5 ? INK : INK_SOFT} weight={700} at={-1000} />
						<Sx x={x + w - 18} y={yy + rowH * 0.64} text={r} size={size} color={L > 0.5 ? INK : INK_SOFT} anchor="end" weight={700} at={-1000} />
						{sk > 0.01 ? <line x1={x + 14} x2={x + 14 + (w - 28) * sk} y1={yy + rowH * 0.45} y2={yy + rowH * 0.45} stroke="#c4432f" strokeWidth={5} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the magnet, nuclei, electron cloud ----------
export const Bore: React.FC<{x: number; y: number; w?: number; h?: number; at?: number; o?: number}> = ({x, y, w = 420, h = 300, at = -1000, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const ph = (f % 60) / 60;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={56} rx={10} fill="#5b6576" stroke={INK} strokeWidth={3} />
			<rect x={x} y={y + h - 56} width={w} height={56} rx={10} fill="#5b6576" stroke={INK} strokeWidth={3} />
			<Sx x={x + w / 2} y={y + 38} text="N" size={32} color={CARD} anchor="middle" weight={800} at={-1000} />
			<Sx x={x + w / 2} y={y + h - 18} text="S" size={32} color={CARD} anchor="middle" weight={800} at={-1000} />
			{[0.15, 0.32, 0.5, 0.68, 0.85].map((k, i) => <line key={i} x1={x + w * k} x2={x + w * k} y1={y + 60} y2={y + h - 60} stroke="#8fb3d9" strokeWidth={3} strokeDasharray="10 8" strokeDashoffset={-ph * 36} />)}
		</g>
	);
};
/** Tiny magnets (arrows) in a field: `up` of them with the field (pointing up), the rest against; `flip` turns one. */
export const Nuclei: React.FC<{x: number; y: number; n?: number; up?: number; at?: number; settle?: number; flip?: number; o?: number}> = ({x, y, n = 9, up = 5, at = -1000, settle = -1000, flip, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const st = smooth(prog(f, settle, 24));
	const fl = flip === undefined ? 0 : smooth(prog(f, flip, 16));
	const fp = flip === undefined ? 0 : pulse(f, flip, 40);
	return (
		<g opacity={v}>
			{Array.from({length: n}, (_, i) => {
				const cx = x + (i % 3) * 110, cy = y + Math.floor(i / 3) * 110;
				const rand = ((i * 73) % 360) - 180;
				const target = i < up ? 0 : 180;
				let a = rand + (target - rand) * st;
				if (i === 0 && fl > 0) a = 180 * fl;
				return (
					<g key={i} transform={`translate(${cx},${cy}) rotate(${a})`}>
						{i === 0 && fp > 0.01 ? <circle r={40} fill="#f3d27a" opacity={0.6 * fp} /> : null}
						<circle r={20} fill={i === 0 && fl > 0.5 ? '#f3d27a' : '#dfe8f3'} stroke={INK} strokeWidth={2.5} />
						<line x1={0} x2={0} y1={26} y2={-30} stroke={i === 0 && fl > 0.5 ? '#c9781a' : NAVY} strokeWidth={5} />
						<path d="M-10,-20 L0,-34 L10,-20" fill="none" stroke={i === 0 && fl > 0.5 ? '#c9781a' : NAVY} strokeWidth={5} strokeLinejoin="round" />
					</g>
				);
			})}
		</g>
	);
};
/** A carbon with an electron halo; from `pull` the halo shifts toward an oxygen on the right and thins. */
export const Cloud: React.FC<{x: number; y: number; at?: number; pull?: number; o?: number; oxy?: number}> = ({x, y, at = -1000, pull, o = 1, oxy}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const p = pull === undefined ? 0 : smooth(prog(f, pull, 30));
	const ov = oxy === undefined ? 0 : prog(f, oxy, 14);
	return (
		<g opacity={v}>
			<ellipse cx={x + 60 * p} cy={y} rx={120 - 20 * p} ry={110 - 30 * p} fill="#9fc3e8" opacity={0.45 - 0.2 * p} />
			<circle cx={x} cy={y} r={44} fill="#5d5d66" stroke={INK} strokeWidth={3} />
			<Sx x={x} y={y + 14} text="C" size={40} color={CARD} anchor="middle" weight={800} at={-1000} />
			{ov > 0.01 ? <g opacity={ov}>
				<line x1={x + 44} x2={x + 176} y1={y} y2={y} stroke={INK} strokeWidth={6} />
				<circle cx={x + 220} cy={y} r={44} fill="#b5583c" stroke={INK} strokeWidth={3} />
				<Sx x={x + 220} y={y + 14} text="O" size={40} color={CARD} anchor="middle" weight={800} at={-1000} />
			</g> : null}
		</g>
	);
};
export const Squiggle: React.FC<{x: number; y: number; w: number; at: number; out?: number; k?: number; color?: string; o?: number}> = ({x, y, w, at, out, k = 1, color = '#c9781a', o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const ph = (f - at) * 5;
	let d = '';
	for (let i = 0; i <= w; i += 5) d += (d ? 'L' : 'M') + (x + i) + ',' + (y + Math.sin(((i - ph) / 22) * k) * 14);
	return <path d={d} fill="none" stroke={color} strokeWidth={4} opacity={v} />;
};

// ---------- molecules (indices noted for environment rings) ----------
import {outward as _out, zig as _zig} from '../chem-m7-c01/molecules';
import type {Mol2 as _M} from '../chem-m8-c09/parts';
const _zz = (n: number) => _zig(n, (-(n - 1) * 92) / 2, 0, 92, 54);
const _ch = (n: number) => Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1}));
/** butan-2-ol: 0 CH3, 1 CH(OH), 2 CH2, 3 CH3, 4 OH. */
export const BUTAN2OL: _M = (() => { const Z = _zz(4); return {pts: [...Z, _out(Z, 1, 84)], bonds: [..._ch(4), {a: 1, b: 4}], labels: [{i: 4, text: 'OH'}]}; })();
/** 2-methylpropan-1-ol: 0 CH3, 1 CH, 2 CH2, 3 OH, 4 CH3 branch. */
export const MEPROP1OL: _M = (() => { const Z = _zz(4); return {pts: [...Z, _out(Z, 1, 92)], bonds: [..._ch(4), {a: 1, b: 4}], labels: [{i: 3, text: 'OH'}]}; })();
/** propanoic acid: 0 CH3, 1 CH2, 2 C, 3 OH, 4 =O. */
export const PROPANOIC: _M = (() => { const Z = _zz(4); return {pts: [...Z, _out(Z, 2, 84)], bonds: [..._ch(4), {a: 2, b: 4, order: 2 as const}], labels: [{i: 3, text: 'OH'}, {i: 4, text: 'O'}]}; })();
