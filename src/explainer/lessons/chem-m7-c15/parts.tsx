// M7 C15 board pieces (chem-m7-g04 imports these). README for Claude:
// - Tok / Row / rowGeo: a polymer or monomer drawn as a row of groups (O, CH₂, C with =O above, N with H below, a
//   para benzene ring, a generic box, or a backbone C with H or a side group above and below, or a full-structural
//   side chain). rowGeo gives every group's centre so scenes can ring links, run tracers and drop cut lines. Row draws
//   continuation bonds, brackets with n (dropping in at br.at), glows, per-group colour and opacity.
// - JoinPair: c10's condensation join in row form: the right monomer's leading H and O and the left monomer's trailing
//   H glow, fly together as H₂O (which drops to a tally), the right monomer slides in and the new link bond draws.
// - GrowRow: the two-end join running outwards: units appear from the centre out, each new link rings red and drops
//   a water chip to the tally.
// - EndTag (amber ring on a reactive end; grey "stop" variant), WaterChip, Cut (c10's cut line, dropped vertically),
//   Insert (the water insert: H₂O drops onto a link, the cut line drops, OH docks on the C=O side, H on the O or N
//   side), CCount (carbon counter dots, C=O carbons ringed red), Tracer (pale-blue underline that runs along groups).
// - PolyBox: c14's chain view rebuilt for condensation polymers: amide sites (C=O up, N–H down) with violet hydrogen
//   bonds between neighbouring strands, PET ring segments (stiff) with flexing CH₂ segments, teal dipole dashes,
//   dispersion ticks, the warm slide (hydrogen bonds stretch and break; strands unbroken) and a pulse on one strand.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, Sx, mw, smooth} from '../chem-m6-c01/parts';
import {CARDC, HGREY, NAVY, OXY_INK, VIOLET} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {RED} from '../chem-m7-c08a/parts';
import {INDIGO} from '../chem-m7-c11/parts';
import {DISPC, GREY, HEAT, STRAND, TEALC} from '../chem-m7-c14/parts';

export const WATER = '#4f86ad', WATER_SOFT = '#dcebf6', AMB = '#c98a1b', AMB_SOFT = '#fbedd0', TRACE = '#8fc3ea';
export {GREY, INDIGO, INK, INK_SOFT, NAVY, OXY_INK, RED, TEALC, VIOLET};

// ---------- token rows ----------
export type Tok = {l: string; up?: string; dn?: string; dbl?: boolean; ring?: boolean; box?: boolean; side?: number; c?: string; w?: number};
export const T: Record<'O' | 'CO' | 'CH2' | 'NH' | 'R' | 'H' | 'B' | 'N', Tok> = {
	O: {l: 'O'}, CO: {l: 'C', up: 'O', dbl: true}, CH2: {l: 'CH₂'}, NH: {l: 'N', dn: 'H'}, R: {l: '', ring: true}, H: {l: 'H'}, B: {l: '', box: true}, N: {l: 'N'},
};
export const rep = (t: Tok, n: number): Tok[] => Array.from({length: n}, () => t);
const SZ = 40, GAP = 34, SUB = 72;
const tokW = (t: Tok) => (t.w !== undefined ? t.w : t.ring ? 104 : t.box ? 60 : Math.max(SZ * 0.62, mw(t.l, SZ, false, 800)));
const labCol = (l: string) => (l === 'O' || l === 'OH' ? OXY_INK : l === 'N' ? INDIGO : l === 'H' ? HGREY : INK);
export type Geo = {cx: number[]; hw: number[]; y: number; s: number; x0: number; x1: number; L: number; R: number; mid: (k: number) => V2; up: (i: number) => V2; dn: (i: number) => V2; p: (i: number) => V2};
/** Centres of each group of a row starting at x (anchor 'start', x is the outer end of the left continuation bond) or
 *  centred on x. contL and contR are continuation-bond lengths (unscaled). */
export const rowGeo = (toks: Tok[], x: number, y: number, s = 1, anchor: 'start' | 'middle' = 'start', contL = 0, contR = 0): Geo => {
	const hw = toks.map(t => tokW(t) / 2);
	const lc: number[] = [];
	let cur = contL;
	toks.forEach((_, i) => { lc.push(cur + hw[i]); cur += 2 * hw[i] + GAP; });
	const total = cur - GAP + contR;
	const x0 = anchor === 'middle' ? x - (total * s) / 2 : x;
	const cx = lc.map(c => x0 + c * s);
	const n = toks.length;
	const L = cx[0] - hw[0] * s, R = cx[n - 1] + hw[n - 1] * s;
	const mid = (k: number): V2 => (k < 0 ? [L - (contL * s) / 2, y] : k >= n - 1 ? [R + (contR * s) / 2, y] : [(cx[k] + hw[k] * s + cx[k + 1] - hw[k + 1] * s) / 2, y]);
	return {cx, hw: hw.map(h => h * s), y, s, x0, x1: x0 + total * s, L, R, mid, up: i => [cx[i], y - SUB * s], dn: i => [cx[i], y + SUB * s], p: i => [cx[i], y]};
};
const Hexa: React.FC<{x: number; y: number; r: number; o?: number}> = ({x, y, r, o = 1}) => (
	<g opacity={o}>
		<polygon points={Array.from({length: 6}, (_, k) => `${x + r * Math.cos((k * Math.PI) / 3)},${y + r * Math.sin((k * Math.PI) / 3)}`).join(' ')} fill="none" stroke={INK} strokeWidth={4} />
		<circle cx={x} cy={y} r={r * 0.55} fill="none" stroke={GREY} strokeWidth={3} />
	</g>
);
export type Brk = {a: number; b: number; at: number; out?: number; dash?: boolean};
export const Row: React.FC<{toks: Tok[]; x: number; y: number; s?: number; anchor?: 'start' | 'middle'; at: number; out?: number; o?: number; stagger?: number; contL?: number; contR?: number; contO?: number; tokO?: (i: number) => number; tokC?: (i: number) => string | undefined; bondO?: (k: number) => number; glow?: Record<number, [number, number?, string?]>; br?: Brk}> = ({toks, x, y, s = 1, anchor = 'start', at, out, o = 1, stagger = 2, contL = 0, contR = 0, contO = 1, tokO, tokC, bondO, glow = {}, br}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const g = rowGeo(toks, x, y, s, anchor, contL, contR);
	const ap = (i: number) => prog(f, at + i * stagger, 8) * (tokO ? tokO(i) : 1);
	const sub = (i: number, t: Tok, dir: -1 | 1, lab: string) => {
		const cx = g.cx[i], y1 = y + dir * 22 * s, y2 = y + dir * (SUB - 20) * s, ly = y + dir * SUB * s;
		const col = lab === 'O' ? RED : INK;
		return (
			<g key={'s' + dir}>
				{t.dbl && dir < 0 ? <><line x1={cx - 6 * s} y1={y1} x2={cx - 6 * s} y2={y2} stroke={col} strokeWidth={4} /><line x1={cx + 6 * s} y1={y1} x2={cx + 6 * s} y2={y2} stroke={col} strokeWidth={4} /></> : <line x1={cx} y1={y1} x2={cx} y2={y2} stroke={INK} strokeWidth={4} />}
				<Sx x={cx} y={ly + SZ * s * 0.36} text={lab} size={(lab === 'H' ? 0.82 : 0.9) * SZ * s} color={labCol(lab)} anchor="middle" weight={800} at={-1000} />
			</g>
		);
	};
	const side = (i: number, n: number) => {
		const cx = g.cx[i];
		const els: React.ReactNode[] = [];
		for (let j = 1; j <= n; j++) {
			const cy = y + j * 84 * s;
			els.push(<line key={'b' + j} x1={cx} y1={cy - 62 * s} x2={cx} y2={cy - 22 * s} stroke={INK} strokeWidth={4} />);
			els.push(<Sx key={'c' + j} x={cx} y={cy + SZ * s * 0.36} text="C" size={SZ * s} color={INK} anchor="middle" weight={800} at={-1000} />);
			[-1, 1].forEach(d => { els.push(<line key={'hl' + j + d} x1={cx + d * 20 * s} y1={cy} x2={cx + d * 40 * s} y2={cy} stroke={INK} strokeWidth={3.5} />); els.push(<Sx key={'h' + j + d} x={cx + d * 56 * s} y={cy + SZ * s * 0.3} text="H" size={SZ * s * 0.78} color={HGREY} anchor="middle" weight={700} at={-1000} />); });
			if (j === n) { els.push(<line key="bl" x1={cx} y1={cy + 22 * s} x2={cx} y2={cy + 44 * s} stroke={INK} strokeWidth={3.5} />); els.push(<Sx key="hb" x={cx} y={cy + 70 * s} text="H" size={SZ * s * 0.78} color={HGREY} anchor="middle" weight={700} at={-1000} />); }
		}
		return <g key="side">{els}</g>;
	};
	const n = toks.length;
	let bx: [number, number] | null = null, bh = [60, 60];
	if (br) {
		const xl = g.mid(br.a - 1)[0], xr = g.mid(br.b)[0];
		bx = [xl, xr];
		const span = toks.slice(br.a, br.b + 1);
		bh = [span.some(t => t.up || t.ring) ? 112 : 56, span.some(t => t.side) ? 84 * Math.max(...span.map(t => t.side ?? 0)) + 90 : span.some(t => t.dn || t.ring) ? 112 : 56];
	}
	const bo = br ? vis(f, br.at, br.out, 12) : 0;
	const drop = br ? (1 - smooth(prog(f, br.at, 14))) * -30 : 0;
	return (
		<g opacity={v}>
			{Object.entries(glow).map(([k, w]) => {
				const i = Number(k);
				const q = vis(f, w[0], w[1], 10) * ap(i);
				if (q <= 0.01) return null;
				return <ellipse key={'g' + k} cx={g.cx[i]} cy={y} rx={g.hw[i] + 18 * s} ry={34 * s} fill={w[2] ?? '#f6d77a'} opacity={0.75 * q} />;
			})}
			{contL > 0 ? <line x1={g.L - 4 * s} y1={y} x2={g.L - contL * s * contO} y2={y} stroke={NAVY} strokeWidth={5} strokeLinecap="round" opacity={ap(0) * (contO > 0.02 ? 1 : 0)} /> : null}
			{contR > 0 ? <line x1={g.R + 4 * s} y1={y} x2={g.R + contR * s * contO} y2={y} stroke={NAVY} strokeWidth={5} strokeLinecap="round" opacity={ap(n - 1) * (contO > 0.02 ? 1 : 0)} /> : null}
			{toks.slice(0, -1).map((_, k) => {
				const q = Math.min(ap(k), ap(k + 1)) * (bondO ? bondO(k) : 1);
				if (q <= 0.01) return null;
				return <line key={'k' + k} x1={g.cx[k] + g.hw[k] + 4 * s} y1={y} x2={g.cx[k + 1] - g.hw[k + 1] - 4 * s} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" opacity={q} />;
			})}
			{toks.map((t, i) => {
				const q = ap(i);
				if (q <= 0.01) return null;
				const c = tokC?.(i);
				return (
					<g key={i} opacity={q}>
						{t.ring ? <Hexa x={g.cx[i]} y={y} r={50 * s} /> : null}
						{t.box ? <rect x={g.cx[i] - 30 * s} y={y - 30 * s} width={60 * s} height={60 * s} rx={10 * s} fill="#eef2f6" stroke={INK} strokeWidth={4} /> : null}
						{t.l ? <Sx x={g.cx[i]} y={y + SZ * s * 0.36} text={t.l} size={(t.l === 'H' ? 0.82 : 1) * SZ * s} color={c ?? t.c ?? labCol(t.l)} anchor="middle" weight={800} at={-1000} /> : null}
						{t.up ? sub(i, t, -1, t.up) : null}
						{t.dn ? sub(i, t, 1, t.dn) : null}
						{t.side ? side(i, t.side) : null}
					</g>
				);
			})}
			{bx && bo > 0.01 ? (
				<g opacity={bo} transform={`translate(0,${drop})`}>
					<path d={`M${bx[0] + 14 * s},${y - bh[0] * s} L${bx[0]},${y - bh[0] * s} L${bx[0]},${y + bh[1] * s} L${bx[0] + 14 * s},${y + bh[1] * s}`} fill="none" stroke={NAVY} strokeWidth={5} strokeDasharray={br?.dash ? '12 8' : undefined} />
					<path d={`M${bx[1] - 14 * s},${y - bh[0] * s} L${bx[1]},${y - bh[0] * s} L${bx[1]},${y + bh[1] * s} L${bx[1] - 14 * s},${y + bh[1] * s}`} fill="none" stroke={NAVY} strokeWidth={5} strokeDasharray={br?.dash ? '12 8' : undefined} />
					<Sx x={bx[1] + 12 * s} y={y + bh[1] * s + 12 * s} text="n" size={40 * s} color={NAVY} weight={800} at={-1000} />
				</g>
			) : null}
		</g>
	);
};

// ---------- small pieces ----------
export const WaterChip: React.FC<{a: V2; b?: V2; at: number; move?: number; dur?: number; out?: number; o?: number; size?: number; text?: string}> = ({a, b, at, move, dur = 20, out, o = 1, size = 28, text = 'H₂O'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const t = b && move !== undefined ? smooth(prog(f, move, dur)) : 0;
	const p: V2 = b ? [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t] : a;
	const w = mw(text, size, false, 800) + 26;
	return (
		<g opacity={v}>
			<rect x={p[0] - w / 2} y={p[1] - size * 0.8} width={w} height={size * 1.6} rx={size * 0.8} fill={WATER_SOFT} stroke={WATER} strokeWidth={2.5} />
			<Sx x={p[0]} y={p[1] + size * 0.36} text={text} size={size} color={WATER} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
/** A label that flies from a to b (starting at `at`), optional glow pill, fading at `out`. */
export const FlyLab: React.FC<{text: string; a: V2; b: V2; at: number; show?: number; dur?: number; out?: number; size?: number; color?: string; pill?: boolean}> = ({text, a, b, at, show = -1000, dur = 22, out, size = 34, color = WATER, pill = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, show, out, 8);
	if (v <= 0.01) return null;
	const t = smooth(prog(f, at, dur));
	const p: V2 = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
	const w = mw(text, size, false, 800) + 22;
	return (
		<g opacity={v}>
			{pill ? <rect x={p[0] - w / 2} y={p[1] - size * 0.78} width={w} height={size * 1.56} rx={size * 0.78} fill={WATER_SOFT} stroke={WATER} strokeWidth={2} /> : null}
			<Sx x={p[0]} y={p[1] + size * 0.36} text={text} size={size} color={color} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
export const EndTag: React.FC<{c: V2; rx?: number; ry?: number; at: number; out?: number; o?: number; stop?: boolean; pulse?: number}> = ({c, rx = 70, ry = 44, at, out, o = 1, stop = false, pulse}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const pl = pulse === undefined ? 1 : 1 + 0.18 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - pulse) / 26)) * Math.PI));
	const col = stop ? GREY : AMB;
	return (
		<g opacity={v}>
			<ellipse cx={c[0]} cy={c[1]} rx={rx * pl} ry={ry * pl} fill="none" stroke={col} strokeWidth={4} strokeDasharray={stop ? '9 7' : undefined} />
			{stop ? <><rect x={c[0] - 34} y={c[1] + ry + 6} width={68} height={30} rx={15} fill="#f1efea" stroke={GREY} strokeWidth={2} /><Sx x={c[0]} y={c[1] + ry + 28} text="stop" size={20} color={GREY} anchor="middle" weight={800} at={-1000} /></> : null}
		</g>
	);
};
export const Ring2: React.FC<{c: V2; rx: number; ry: number; at: number; out?: number; o?: number; color?: string; label?: string}> = ({c, rx, ry, at, out, o = 1, color = RED, label}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const t = prog(f, at, 14);
	const L = 2 * Math.PI * Math.sqrt((rx * rx + ry * ry) / 2);
	return (
		<g opacity={v}>
			<ellipse cx={c[0]} cy={c[1]} rx={rx} ry={ry} fill="none" stroke={color} strokeWidth={4} strokeDasharray={`${L * t} ${L}`} transform={`rotate(-90 ${c[0]} ${c[1]})`} />
			{label ? <><circle cx={c[0] + rx * 0.72} cy={c[1] - ry * 0.95} r={17} fill={color} /><Sx x={c[0] + rx * 0.72} y={c[1] - ry * 0.95 + 8} text={label} size={22} color="#fffdf8" anchor="middle" weight={800} at={-1000} /></> : null}
		</g>
	);
};
export const Cut: React.FC<{p: V2; at: number; out?: number; h?: number; o?: number}> = ({p, at, out, h = 100, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 8) * o;
	if (v <= 0.01) return null;
	const t = smooth(prog(f, at, 14));
	return <line x1={p[0]} y1={p[1] - h} x2={p[0]} y2={p[1] - h + 2 * h * t} stroke={RED} strokeWidth={5} strokeDasharray="12 8" strokeLinecap="round" opacity={v} />;
};
/** The water insert at link point p: H₂O drops on, the cut line drops at at+16, then OH docks at cP (the C=O side)
 *  and H at oP (the O or N side) from at+30. */
export const Insert: React.FC<{p: V2; cP: V2; oP: V2; at: number; out?: number; size?: number; slow?: number; cutOut?: number}> = ({p, cP, oP, at, out, size = 28, slow = 1, cutOut}) => {
	const f = useCurrentFrame();
	if (f < at - 2) return null;
	const k = slow;
	const top: V2 = [p[0], p[1] - 120], hover: V2 = [p[0], p[1] - 66];
	return (
		<g>
			<WaterChip a={top} b={hover} at={at} move={at} dur={14 * k} out={at + 30 * k} size={size} />
			<Cut p={p} at={at + 16 * k} out={cutOut ?? out} h={70} />
			<FlyLab text="OH" a={hover} b={cP} at={at + 30 * k} show={at + 28 * k} dur={20 * k} out={out} size={size} color={OXY_INK} />
			<FlyLab text="H" a={hover} b={oP} at={at + 30 * k} show={at + 28 * k} dur={20 * k} out={out} size={size} color={WATER} />
		</g>
	);
};
export const CCount: React.FC<{pts: V2[]; at: number; step?: number; out?: number; o?: number; red?: number[]; dy?: number}> = ({pts, at, step = 9, out, o = 1, red = [], dy = -70}) => {
	const f = useCurrentFrame();
	const v = vis(f, at - 4, out, 10) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{pts.map((p, i) => {
				const q = prog(f, at + i * step, 8);
				if (q <= 0.01) return null;
				const pop = 1 + 0.25 * Math.max(0, Math.sin(Math.min(1, (f - at - i * step) / 10) * Math.PI));
				return (
					<g key={i} opacity={q}>
						{red.includes(i) ? <circle cx={p[0]} cy={p[1] + dy} r={27 * pop} fill="none" stroke={RED} strokeWidth={3.5} /> : null}
						<circle cx={p[0]} cy={p[1] + dy} r={20 * pop} fill="#fff3d6" stroke={AMB} strokeWidth={3} />
						<Sx x={p[0]} y={p[1] + dy + 8} text={String(i + 1)} size={22} color="#8a5a10" anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
/** Pale-blue tracer under groups: lights groups[k] from at[k]. */
export const Tracer: React.FC<{g: Geo; idx: number[]; at: number[]; out?: number; dy?: number}> = ({g, idx, at, out, dy = 48}) => {
	const f = useCurrentFrame();
	const v = vis(f, at[0] - 4, out, 10);
	if (v <= 0.01) return null;
	let k = -1;
	at.forEach((a, i) => { if (f >= a) k = i; });
	if (k < 0) return null;
	const nx = at[k + 1] !== undefined ? smooth(prog(f, at[k], Math.max(4, Math.min(12, at[k + 1] - at[k])))) : 1;
	const i0 = idx[0], ik = idx[k];
	const xEnd = g.cx[ik] - g.hw[ik] + 2 * g.hw[ik] * nx;
	return (
		<g opacity={v}>
			<line x1={g.cx[i0] - g.hw[i0]} y1={g.y + dy * g.s} x2={xEnd} y2={g.y + dy * g.s} stroke={TRACE} strokeWidth={8} strokeLinecap="round" />
			<circle cx={xEnd} cy={g.y + dy * g.s} r={9} fill="#5d9ccc" />
		</g>
	);
};

// ---------- the join ----------
export type JoinT = {glowR: number; glowL: number; join: number; ring?: number; ringOut?: number; nRing?: boolean};
/** Left monomer L ends ...–O–H (or –N(H)–H); right monomer R starts H–O–C(=O)–... The product row (L minus its last
 *  token, then R minus its first two) takes over at join + 44. */
export const joinGeo = (L: Tok[], R: Tok[], x: number, y: number, s: number) => rowGeo([...L.slice(0, -1), ...R.slice(2)], x, y, s);
export const JoinPair: React.FC<{L: Tok[]; R: Tok[]; x: number; y: number; s?: number; at: number; atR?: number; out?: number; o?: number; T: JoinT; water: V2; tally?: V2; waterOut?: number; prod?: {tokO?: (i: number) => number; glow?: Record<number, [number, number?, string?]>; br?: Brk; contL?: number; contR?: number; tokC?: (i: number) => string | undefined}}> = ({L, R, x, y, s = 1, at, atR, out, o = 1, T: J, water, tally, waterOut, prod = {}}) => {
	const f = useCurrentFrame();
	const v = vis(f, -1000, out) * o;
	if (v <= 0.01) return null;
	const nL = L.length;
	const gL = rowGeo(L, x, y, s);
	const gP = joinGeo(L, R, x, y, s);
	const gR0 = rowGeo(R, 0, y, s);
	const finalX = gP.cx[nL - 1] - gR0.cx[2];
	const startX = finalX + 250 * s;
	const slide = smooth(prog(f, J.join + 14, 24));
	const xR = startX + (finalX - startX) * slide;
	const gR = rowGeo(R, xR, y, s);
	const done = J.join + 44;
	const pre = 1 - prog(f, done, 6);
	const post = prog(f, done - 2, 6);
	const lo = (i: number) => (i === nL - 1 ? 1 - prog(f, J.join, 4) : 1);
	const ro = (i: number) => (i < 2 ? 1 - prog(f, J.join, 4) : 1);
	const linkC: V2 = [(gP.cx[nL - 2] + gP.cx[nL - 1]) / 2, y - (R[2].up ? 18 * s : 0)];
	const meet: V2 = [water[0], water[1]];
	return (
		<g opacity={v}>
			{pre > 0.01 ? (
				<g opacity={pre}>
					<Row toks={L} x={x} y={y} s={s} at={at} tokO={lo} glow={{[nL - 1]: [J.glowL, J.join + 2, '#cfe3f3']}} />
					<Row toks={R} x={xR} y={y} s={s} at={atR ?? at} tokO={ro} glow={{0: [J.glowR, J.join + 2, '#cfe3f3'], 1: [J.glowR, J.join + 2, '#cfe3f3']}} />
					{f >= J.join + 30 ? <DrawPath d={`M${gP.cx[nL - 2] + gP.hw[nL - 2] + 4 * s},${y} L${gP.cx[nL - 1] - gP.hw[nL - 1] - 4 * s},${y}`} at={J.join + 30} dur={10} color={INK} width={4} /> : null}
				</g>
			) : null}
			<FlyLab text="H" a={gL.p(nL - 1)} b={[meet[0] - 40, meet[1]]} at={J.join} show={J.join} dur={22} out={J.join + 24} size={34 * s} color={WATER} />
			<FlyLab text="OH" a={[(gR.cx[0] + gR.cx[1]) / 2, y]} b={[meet[0] + 30, meet[1]]} at={J.join} show={J.join} dur={22} out={J.join + 24} size={34 * s} color={OXY_INK} />
			<WaterChip a={meet} b={tally} at={J.join + 22} move={J.join + 40} dur={20} out={waterOut ?? (tally ? J.join + 60 : undefined)} size={30} />
			{post > 0.01 ? <Row toks={[...L.slice(0, -1), ...R.slice(2)]} x={x} y={y} s={s} at={-1000} o={post} tokO={prod.tokO} glow={prod.glow} br={prod.br} contL={prod.contL} contR={prod.contR} tokC={prod.tokC} /> : null}
			{J.ring !== undefined ? <Ring2 c={linkC} rx={(gP.hw[nL - 2] + gP.hw[nL - 1]) + 46 * s} ry={R[2].up ? 74 * s : 50 * s} at={J.ring} out={J.ringOut} color={RED} /> : null}
			{J.ring !== undefined && J.nRing ? <Ring2 c={gP.p(nL - 2)} rx={34 * s} ry={34 * s} at={J.ring + 6} out={J.ringOut} color={INDIGO} /> : null}
		</g>
	);
};

// ---------- the growing chain ----------
export const GrowRow: React.FC<{units: Tok[][]; c: number; x: number; y: number; s: number; at: number; steps: number[]; out?: number; o?: number; tally?: V2; dots?: number; ringO?: number}> = ({units, c, x, y, s, at, steps, out, o = 1, tally, dots, ringO = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const flat: Tok[] = [], uOf: number[] = [];
	units.forEach((u, k) => u.forEach(t => { flat.push(t); uOf.push(k); }));
	const g = rowGeo(flat, x, y, s, 'middle', 60, 60);
	const rev = (u: number) => (u === c || u === c + 1 ? at : steps[(u < c ? c - u : u - c - 1) - 1] ?? 1e9);
	const off = (i: number) => { const u = uOf[i]; const d = u <= c ? -1 : 1; return u === c || u === c + 1 ? 0 : d * 70 * (1 - smooth(prog(f, rev(u), 14))); };
	const lastOf = (u: number) => uOf.lastIndexOf(u);
	const allIn = Math.max(...steps);
	return (
		<g opacity={v}>
			{units.map((_, u) => {
				const idx = flat.map((_t, i) => i).filter(i => uOf[i] === u);
				const q = prog(f, rev(u), 10);
				if (q <= 0.01) return null;
				const sub = idx.map(i => flat[i]);
				return <g key={u} opacity={q} transform={`translate(${off(idx[0])},0)`}><Row toks={sub} x={g.cx[idx[0]] - g.hw[idx[0]]} y={y} s={s} at={-1000} /></g>;
			})}
			{units.slice(0, -1).map((_, u) => {
				const t = Math.max(rev(u), rev(u + 1));
				const q = prog(f, t + 6, 8);
				if (q <= 0.01) return null;
				const i = lastOf(u);
				const a = g.cx[i] + g.hw[i] + 4 * s, b = g.cx[i + 1] - g.hw[i + 1] - 4 * s;
				const coLeft = !!flat[i].up;
				const rc: V2 = coLeft ? [(g.cx[i] + g.cx[i + 1]) / 2, y - 18 * s] : [(g.cx[i] + g.cx[i + 1]) / 2, y - 18 * s];
				return (
					<g key={'l' + u} opacity={q}>
						<line x1={a} y1={y} x2={b} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
						<ellipse cx={rc[0]} cy={rc[1]} rx={(g.hw[i] + g.hw[i + 1]) + 40 * s} ry={74 * s} fill="none" stroke={RED} strokeWidth={3.5} opacity={ringO} />
						{tally && t > at ? <WaterChip a={[rc[0], y + 100 * s]} b={tally} at={t + 4} move={t + 10} dur={18} out={t + 30} size={24} /> : null}
					</g>
				);
			})}
			{dots !== undefined ? <g opacity={prog(f, dots ?? allIn, 12)}>
				<line x1={g.L - 8 * s} y1={y} x2={g.L - 60 * s} y2={y} stroke={NAVY} strokeWidth={5} strokeLinecap="round" />
				<line x1={g.R + 8 * s} y1={y} x2={g.R + 60 * s} y2={y} stroke={NAVY} strokeWidth={5} strokeLinecap="round" />
				<Sx x={g.L - 70 * s} y={y + 12} text="···" size={40} color={NAVY} anchor="end" weight={800} at={-1000} />
				<Sx x={g.R + 70 * s} y={y + 12} text="···" size={40} color={NAVY} weight={800} at={-1000} />
			</g> : null}
		</g>
	);
};
export const linksAt = (f: number, at: number, steps: number[]) => (f < at ? 0 : 1 + 2 * steps.filter(t => f >= t + 6).length);

// ---------- chain view for condensation polymers ----------
export type PB = {sites?: number; hb?: number; disp?: number; rings?: number; co?: number; dip?: number; slide?: number; heat?: number; flex?: number; ghost?: number; ghostX?: number};
export const PolyBox: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; o?: number; c: PB; n?: number; per?: number; pulse?: {strand: number; at: number}}> = ({x, y, w, h, at, out, o = 1, c, n = 6, per = 150, pulse}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const gap = (h - 70) / (n - 1);
	const y0 = y + 35;
	const sl = c.slide ?? 0, rings = c.rings ?? 0, flex = c.flex ?? 0, sites = c.sites ?? 0, co = c.co ?? 0;
	const id = `pb${Math.round(x)}${Math.round(y)}`;
	const off = (i: number) => (i % 2 ? 1 : -1) * sl * (34 + 26 * Math.sin((f / 30) * 1.3 + i));
	const sy = (i: number) => y0 + i * gap + Math.sin(f * 0.22 + i) * 2.5 * sl;
	const siteX = (k: number) => x + 50 + k * per;
	const nS = Math.floor((w - 60) / per) + 1;
	const ringX = (k: number) => x + 50 + per / 2 + k * per;
	const strand = (i: number) => {
		const ox = off(i), yy = sy(i);
		const pts: string[] = [];
		for (let X = x - 100; X <= x + w + 100; X += 14) {
			const lx = X - ox;
			let inRing = false;
			if (rings > 0.01) { for (let k = -1; k <= nS; k++) if (Math.abs(lx - ringX(k)) < 30) inRing = true; }
			const amp = inRing ? 0 : 4 + flex * 7 * Math.sin(f * 0.35 + X * 0.05 + i);
			pts.push(`${X},${yy + (Math.round(X / 14) % 2 ? -amp : amp)}`);
		}
		return pts.join(' ');
	};
	const hbBreak = 1 - Math.max(0, Math.min(1, (sl - 0.2) / 0.4));
	return (
		<g opacity={v}>
			<defs><clipPath id={id}><rect x={x} y={y} width={w} height={h} rx={18} /></clipPath></defs>
			{(c.heat ?? 0) > 0 ? <rect x={x - 10} y={y + h - 10} width={w + 20} height={40} rx={20} fill={HEAT} opacity={0.6 * (c.heat ?? 0)} /> : null}
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARDC} stroke={INK_SOFT} strokeWidth={3} />
			{(c.heat ?? 0) > 0 ? <rect x={x} y={y} width={w} height={h} rx={18} fill={HEAT} opacity={0.08 * (c.heat ?? 0)} /> : null}
			<g clipPath={`url(#${id})`}>
				{Array.from({length: n}, (_, i) => {
					const yy = sy(i), ox = off(i), yn = i < n - 1 ? sy(i + 1) : 0, oxn = i < n - 1 ? off(i + 1) : 0;
					return (
						<g key={i}>
							<polyline points={strand(i)} fill="none" stroke={STRAND} strokeWidth={4} strokeLinejoin="round" />
							{rings > 0.01 ? Array.from({length: nS + 2}, (_, k) => { const cx = ringX(k - 1) + ox; return <polygon key={'r' + k} points={Array.from({length: 6}, (_, j) => `${cx + 17 * Math.cos((j * Math.PI) / 3)},${yy + 17 * Math.sin((j * Math.PI) / 3)}`).join(' ')} fill="#fffdf8" stroke={INK} strokeWidth={2.5} opacity={rings} />; }) : null}
							{sites > 0.01 ? Array.from({length: nS + 1}, (_, k) => { const sx = siteX(k) + ox; return <g key={'s' + k} opacity={sites}><line x1={sx} y1={yy} x2={sx} y2={yy - 16} stroke={RED} strokeWidth={4} /><circle cx={sx} cy={yy - 20} r={5} fill={RED} /><line x1={sx + 12} y1={yy} x2={sx + 12} y2={yy + 15} stroke={INDIGO} strokeWidth={4} /><circle cx={sx + 12} cy={yy + 19} r={4} fill={HGREY} /></g>; }) : null}
							{co > 0.01 ? Array.from({length: nS + 1}, (_, k) => { const sx = siteX(k) + ox; return <g key={'o' + k} opacity={co}><line x1={sx} y1={yy} x2={sx} y2={yy + 16} stroke={RED} strokeWidth={4} /><circle cx={sx} cy={yy + 20} r={5} fill={RED} /></g>; }) : null}
							{i < n - 1 && (c.disp ?? 0) > 0.01 ? Array.from({length: 12}, (_, k) => { const kx = x + 30 + k * (w / 12) + (ox + oxn) / 2; return <line key={'d' + k} x1={kx} y1={yy + 8} x2={kx} y2={yn - 8} stroke={DISPC} strokeWidth={2.5} strokeDasharray="3 5" opacity={c.disp} />; }) : null}
							{i < n - 1 && (c.hb ?? 0) > 0.01 ? Array.from({length: nS + 1}, (_, k) => { const a: V2 = [siteX(k) + 12 + ox, yy + 24], b: V2 = [siteX(k) + oxn, yn - 25]; return <line key={'h' + k} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={VIOLET} strokeWidth={3.5} strokeDasharray="3 6" strokeLinecap="round" opacity={(c.hb ?? 0) * hbBreak} />; }) : null}
							{i < n - 1 && (c.dip ?? 0) > 0.01 ? Array.from({length: nS + 1}, (_, k) => { const a: V2 = [siteX(k) + ox, yy + 26], b: V2 = [siteX(k) + 30 + oxn, yn - 8]; return <line key={'p' + k} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={TEALC} strokeWidth={3} strokeDasharray="4 5" opacity={c.dip} />; }) : null}
						</g>
					);
				})}
				{(c.ghost ?? 0) > 0.01 ? (() => { const gx = c.ghostX ?? x + w * 0.5; const ya = sy(2) + 24, yb = sy(3) - 8; return <g opacity={c.ghost}><line x1={gx} y1={ya} x2={gx} y2={yb} stroke={VIOLET} strokeWidth={3.5} strokeDasharray="3 6" opacity={0.6} /><path d={`M${gx - 16},${(ya + yb) / 2 - 16} l32,32 m0,-32 l-32,32`} stroke={GREY} strokeWidth={5} /></g>; })() : null}
				{pulse && f >= pulse.at ? Array.from({length: nS + 1}, (_, k) => { const q = Math.max(0, Math.sin(Math.min(1, (f - pulse.at) / 40) * Math.PI * 2)) * 0.5 + 0.5 * prog(f, pulse.at, 10); return <circle key={'q' + k} cx={siteX(k) + 6 + off(pulse.strand)} cy={sy(pulse.strand)} r={20} fill="none" stroke={NAVY} strokeWidth={3} opacity={q} />; }) : null}
			</g>
		</g>
	);
};
