// Drawing parts for Y11 Chem M1 V08. Reuses the M1 V06 parts (V01's text, chips, framed answers, readouts, pen marks,
// plates, the task strip and the pause hold). New here, all coded: the nuclide label (symbol with mass number, atomic
// number and charge, each number able to glow amber), the atom model (packed nucleus of red protons and slate neutrons,
// blue electrons on Stage 5 rings, counts read from props so label, readouts and model agree), a single nucleus
// cluster, the charge meter, a large particle icon and a short periodic table (rows 1 to 3).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMB, AMB_INK, INK, PURE, Sx, TEAL, TEAL_INK, prog, tw} from '../chem-y11-m1-v06/parts';
import {SYM} from './common';

export * from '../chem-y11-m1-v06/parts';

export const P_RED = '#d24a3c', P_INK = '#a8322a';
export const N_SLATE = '#9aa3ad', N_INK = '#4f5862';
export const E_BLUE = '#2f6fd0', E_INK = '#1f4f9e';

// ---------- nuclide label ----------
export type NucG = {x: number; y: number; size: number; symX: number; symW: number; qx: number};
/** Geometry: x is the right edge of the number column, y the symbol baseline. */
export const nucGeo = (x: number, y: number, sym: string, size = 120): NucG => {
	const symX = x + size * 0.08, symW = tw(sym, size, false, 800);
	return {x, y, size, symX, symW, qx: symX + symW + size * 0.06};
};
/** A number glows amber from `hi` (when given). */
const glow = (f: number, hi?: number) => (hi === undefined ? 0 : prog(f, hi, 8));
export const Nuclide: React.FC<{x: number; y: number; sym: string; A?: number | string; Z?: number | string; q?: string; size?: number; hiA?: number; hiZ?: number; hiQ?: number; qAt?: number; at?: number; out?: number; color?: string; numSize?: number; showZ?: boolean}> = ({x, y, sym, A, Z, q, size = 120, hiA, hiZ, hiQ, qAt = -1000, at = -1000, out, color = INK, numSize, showZ = true}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.01) return null;
	const g = nucGeo(x, y, sym, size);
	const ns = numSize ?? Math.round(size * 0.44);
	const nc = (h?: number) => (glow(f, h) > 0.5 ? AMB_INK : INK);
	const hb = (h: number | undefined, yy: number, txt: string) => glow(f, h) > 0.01 ? <rect x={x - tw(txt, ns, false, 800) - 10} y={yy - ns * 0.86} width={tw(txt, ns, false, 800) + 20} height={ns * 1.1} rx={8} fill="#fde7c2" opacity={glow(f, h)} /> : null;
	return (
		<g opacity={o}>
			{A !== undefined ? <>{hb(hiA, y - size * 0.62, `${A}`)}<Sx x={x} y={y - size * 0.62} text={`${A}`} size={ns} color={nc(hiA)} anchor="end" weight={800} at={-1000} /></> : null}
			{Z !== undefined && showZ ? <>{hb(hiZ, y + ns * 0.1, `${Z}`)}<Sx x={x} y={y + ns * 0.1} text={`${Z}`} size={ns} color={nc(hiZ)} anchor="end" weight={800} at={-1000} /></> : null}
			<Sx x={g.symX} y={y} text={sym} size={size} color={color} weight={800} at={-1000} />
			{q ? <Sx x={g.qx} y={y - size * 0.62} text={q} size={ns} color={glow(f, hiQ) > 0.5 ? AMB_INK : TEAL_INK} weight={800} at={qAt} /> : null}
		</g>
	);
};

// ---------- nucleus and atom model ----------
/** Packed nucleon positions (sunflower spiral); type of slot i for p protons among t nucleons. */
export const nucPos = (i: number, d: number): [number, number] => {
	const r = d * 0.56 * Math.sqrt(i + 0.3), a = i * 2.39996;
	return [r * Math.cos(a), r * Math.sin(a)];
};
export const isProton = (i: number, p: number, t: number) => t > 0 && Math.floor(((i + 1) * p) / t) > Math.floor((i * p) / t);
/** A nucleus cluster of p protons and n neutrons (counts may be fractional while particles arrive). */
export const Nucleus: React.FC<{cx: number; cy: number; p: number; n: number; r?: number; scale?: number; pulseN?: number; ringLast?: boolean}> = ({cx, cy, p, n, r = 12, scale = 1, pulseN = 0}) => {
	const f = useCurrentFrame();
	const P = Math.ceil(p - 1e-6), N = Math.ceil(n - 1e-6), T = P + N;
	const fp = p - Math.floor(p), fn = n - Math.floor(n);
	const out: React.ReactNode[] = [];
	for (let i = T - 1; i >= 0; i--) {
		const pr = isProton(i, P, T);
		const [x, y] = nucPos(i, 2 * r);
		const last = i === T - 1 && ((pr && fp > 0) || (!pr && fn > 0));
		const s = last ? (pr ? fp : fn) : 1;
		const pulse = !pr && pulseN > 0 ? 1 + 0.12 * pulseN * Math.sin(f * 0.4 + i) : 1;
		out.push(<circle key={i} cx={cx + x * scale} cy={cy + y * scale} r={r * scale * s * pulse} fill={pr ? P_RED : N_SLATE} stroke={pr ? P_INK : N_INK} strokeWidth={Math.max(1.2, r * 0.14)} />);
	}
	return <g>{out}</g>;
};
/** Screen position of nucleon slot i (for rings and arrows). */
export const slotXY = (cx: number, cy: number, i: number, r: number, scale = 1): [number, number] => {
	const [x, y] = nucPos(i, 2 * r);
	return [cx + x * scale, cy + y * scale];
};
const SHELLS = [2, 8, 8, 18];
/** Electron positions on Stage 5 rings for e electrons, ring radii R * [0.42, 0.7, 1]. */
export const elecPos = (e: number, cx: number, cy: number, R: number, f: number): [number, number][] => {
	const out: [number, number][] = [];
	let left = e;
	SHELLS.forEach((cap, k) => {
		const m = Math.min(cap, left);
		left -= m;
		const rr = R * [0.42, 0.7, 1, 1.25][k];
		for (let j = 0; j < m; j++) {
			const a = (j / Math.max(m, cap === 2 ? 2 : 8)) * Math.PI * 2 + f * 0.004 * (k + 1) + k * 0.3;
			out.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)]);
		}
	});
	return out;
};
export const Atom: React.FC<{cx: number; cy: number; R: number; p: number; n: number; e: number; r?: number; rings?: number; nucScale?: number; pulseN?: number; ringGlow?: number}> = ({cx, cy, R, p, n, e, r = 11, rings = 3, nucScale = 1, pulseN = 0, ringGlow = 0}) => {
	const f = useCurrentFrame();
	const E = Math.floor(e + 1e-6);
	return (
		<g>
			{[0.42, 0.7, 1].slice(0, rings).map((k, i) => <circle key={i} cx={cx} cy={cy} r={R * k} fill="none" stroke={i === rings - 1 && ringGlow > 0 ? E_BLUE : 'rgba(38,35,31,0.45)'} strokeWidth={i === rings - 1 && ringGlow > 0 ? 3 + 4 * ringGlow : 3} />)}
			<Nucleus cx={cx} cy={cy} p={p} n={n} r={r} scale={nucScale} pulseN={pulseN} />
			{elecPos(E, cx, cy, R, f).map(([x, y], i) => <circle key={i} cx={x} cy={y} r={Math.max(7, r * 0.75)} fill={E_BLUE} stroke={E_INK} strokeWidth={2} />)}
		</g>
	);
};
/** A large particle icon. */
export const Particle: React.FC<{kind: 'p' | 'n' | 'e'; x: number; y: number; r: number; o?: number}> = ({kind, x, y, r, o = 1}) => {
	const fill = kind === 'p' ? P_RED : kind === 'n' ? N_SLATE : E_BLUE, ink = kind === 'p' ? P_INK : kind === 'n' ? N_INK : E_INK;
	const t = kind === 'p' ? '+' : kind === 'n' ? '0' : '−';
	return (
		<g opacity={o}>
			<circle cx={x} cy={y} r={r} fill={fill} stroke={ink} strokeWidth={4} />
			<circle cx={x - r * 0.3} cy={y - r * 0.32} r={r * 0.22} fill="#fff" opacity={0.35} />
			<Sx x={x} y={y + r * 0.36} text={t} size={r} color="#fff" anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
/** Charge meter: protons (+) against electrons (−) and the net charge. */
export const ChargeMeter: React.FC<{x: number; y: number; p: number; e: number; w?: number}> = ({x, y, p, e, w = 380}) => {
	const q = p - e;
	return (
		<g>
			<rect x={x} y={y} width={w} height={230} rx={18} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
			<Sx x={x + 24} y={y + 40} text="charge meter" size={30} color={INK} weight={700} at={-1000} />
			<Sx x={x + 24} y={y + 104} text={`+${p}`} size={52} color={P_INK} weight={800} at={-1000} />
			<Sx x={x + w / 2 + 10} y={y + 104} text={`−${e}`} size={52} color={E_INK} weight={800} at={-1000} />
			<Sx x={x + 24} y={y + 184} text={q === 0 ? '= 0: neutral' : `= ${q > 0 ? '+' : '−'}${Math.abs(q)}`} size={52} color={TEAL_INK} weight={800} at={-1000} />
		</g>
	);
};

// ---------- short periodic table (rows 1 to 3; groups 3 to 12 omitted, as in a Year 11 data sheet strip) ----------
export const ptCol = (z: number) => (z === 1 ? 0 : z === 2 ? 7 : z <= 4 ? z - 3 : z <= 10 ? z - 3 : z <= 12 ? z - 11 : z - 11);
export const ptRow = (z: number) => (z <= 2 ? 0 : z <= 10 ? 1 : 2);
export const ptXY = (x: number, y: number, z: number, b = 64, h = 74) => [x + ptCol(z) * b + (ptCol(z) >= 2 ? 24 : 0), y + ptRow(z) * h] as [number, number];
export const PTStrip: React.FC<{x: number; y: number; b?: number; h?: number; hi?: number; hiAt?: number; flash?: number; flashAt?: number; flashOut?: number}> = ({x, y, b = 64, h = 74, hi, hiAt = 1e9, flash, flashAt = 1e9, flashOut = 1e9}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{Array.from({length: 18}, (_, k) => {
				const z = k + 1;
				const [bx, by] = ptXY(x, y, z, b, h);
				const isHi = hi === z && f >= hiAt, isFl = flash === z && f >= flashAt && f < flashOut;
				return (
					<g key={z}>
						<rect x={bx} y={by} width={b - 4} height={h - 4} rx={6} fill={isHi || isFl ? '#fde7c2' : '#fffdf8'} stroke={isHi || isFl ? AMB : INK} strokeWidth={isHi || isFl ? 6 : 2.5} />
						<Sx x={bx + 6} y={by + 26} text={`${z}`} size={26} color={INK} weight={700} at={-1000} />
						<Sx x={bx + (b - 4) / 2} y={by + h - 14} text={SYM[z]} size={32} color={INK} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
void PURE; void AMB;
