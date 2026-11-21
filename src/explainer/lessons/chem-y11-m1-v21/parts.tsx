// Drawing parts for Y11 Chem M1 V21 (electronegativity and the bonding spectrum). Reuses the V14 parts (and through
// them the V13 to V01 chains: text, chips, framed answers, pen marks, plates, the shaded periodic table) read-only.
// New here, all coded and all read from the data table in common.ts:
// - Dial: the tug-of-war bond whose shared pair is placed by the two electronegativity values (centred at a
//   difference of 0, pulled toward the stronger atom as the difference grows, handed over at TRANSFER and above,
//   when the rope goes and the two ions take teal charges);
// - SpecBar: the bonding spectrum from 0 to 3.3 with dashed guide lines at about 0.4 and 1.7, band labels and pins;
// - Lewis: a symbol (72 px) with its outer electrons as dots in pairs on four sides; LBrackets: square brackets and
//   a teal charge; Outline: a plain periodic outline with a few cells lit by symbol.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CELLS, cellRC} from '../chem-y11-m1-v12/common';
import {INK, PAPER_F, Sx, clamp01, lerp, prog, smooth, tw} from '../chem-y11-m1-v14/parts';
import {EL, GUIDE, SPAN, TRANSFER, dX, typeOf} from './common';

export * from '../chem-y11-m1-v14/parts';

export const E_BL = '#2f6fd0', E_BL_T = '#1f4f9e', NUC = '#d24a3c', NUC_T = '#a8322a';
export const AMB_DOT = '#e0a01a', AMB_DOT_T = '#9c5a00';
export const SLATE_T2 = '#4f5862', TEAL_C = '#12827b', GREEN_C = '#2f8a5b', RED_C = '#c4362f', NAVY_C = '#24407a';
export const PAPER = '#fffdf8';

// ---------- the tug-of-war dial ----------
export type DialG = {a: [number, number]; b: [number, number]; R: number; nr?: number; rl?: number};
/** Pair offset from the rope's centre (0 centred, 1 at the stronger atom's ring) for a difference d. */
export const pairU = (d: number) => clamp01(d / TRANSFER);
const ringDots = (cx: number, cy: number, R: number, n: number, gap: number, start: number) => Array.from({length: n}, (_, i) => {
	const a = start + gap * (i + 0.5);
	return [cx + R * Math.cos(a), cy + R * Math.sin(a)] as [number, number];
});
/**
 * The bond. lSym and rSym label the nuclei; d is the difference (the right atom is the stronger puller). lOut and rOut
 * are the outer electrons each atom keeps on its ring, apart from the shared pair. hand (0..1) carries the pair
 * from the rope into the right atom's ring (transfer); ionO shows the teal ion charges.
 */
export const Dial: React.FC<{g: DialG; lSym: string; rSym: string; d: number; lOut: number; rOut: number; hand?: number; ionO?: number; lQ?: string; rQ?: string; pairO?: number; ropeO?: number; o?: number; haze?: number; amber?: boolean; lRing?: boolean; symSize?: number}> = ({g, lSym, rSym, d, lOut, rOut, hand = 0, ionO = 0, lQ = '+', rQ = '−', pairO = 1, ropeO = 1, o = 1, haze = 0, amber = true, lRing = true, symSize}) => {
	if (o <= 0.005) return null;
	const {a, b, R} = g;
	const RL = g.rl ?? R;
	const nr = g.nr ?? R * 0.34;
	const ss = symSize ?? Math.round(nr * 1.05);
	const ra = lerp(1, 0, hand) * (lRing ? 1 : 0);
	const x0 = a[0] + RL, x1 = b[0] - R, cx = (x0 + x1) / 2, half = (x1 - x0) / 2 - 26;
	const u = pairU(d);
	const px = cx + u * half;
	// handed over: the pair travels to the right atom's ring at its left side
	const target: [number, number] = [b[0] - R, b[1]];
	const hx = lerp(px, target[0], smooth(hand)), hy = lerp(a[1], target[1], smooth(hand));
	const dc = amber ? AMB_DOT : E_BL, dk = amber ? AMB_DOT_T : E_BL_T;
	const rope = ropeO * (1 - smooth(clamp01(hand * 1.4)));
	return (
		<g opacity={o}>
			{haze > 0.005 ? <circle cx={b[0]} cy={b[1]} r={R * 1.18} fill="#cfe0f7" stroke={E_BL_T} strokeWidth={3} opacity={haze} /> : null}
			{rope > 0.005 ? <line x1={a[0] + nr} y1={a[1]} x2={b[0] - nr} y2={b[1]} stroke={INK} strokeWidth={7} strokeLinecap="round" opacity={rope} /> : null}
			{ra > 0.005 ? <circle cx={a[0]} cy={a[1]} r={RL} fill="none" stroke={INK} strokeWidth={3} opacity={ra} /> : null}
			<circle cx={b[0]} cy={b[1]} r={R} fill="none" stroke={INK} strokeWidth={3} />
			{ringDots(a[0], a[1], RL, lOut, (Math.PI * 1.5) / Math.max(1, lOut), Math.PI * 0.25).map(([x, y], i) => <circle key={'l' + i} cx={x} cy={y} r={11} fill={E_BL} stroke={E_BL_T} strokeWidth={2} opacity={ra} />)}
			{ringDots(b[0], b[1], R, rOut, (Math.PI * 1.5) / Math.max(1, rOut), -Math.PI * 0.75).map(([x, y], i) => <circle key={'r' + i} cx={x} cy={y} r={11} fill={E_BL} stroke={E_BL_T} strokeWidth={2} />)}
			<circle cx={a[0]} cy={a[1]} r={nr} fill={NUC} stroke={NUC_T} strokeWidth={3} />
			<circle cx={b[0]} cy={b[1]} r={nr} fill={NUC} stroke={NUC_T} strokeWidth={3} />
			<Sx x={a[0]} y={a[1] + ss * 0.36} text={lSym} size={ss} color="#ffffff" anchor="middle" weight={800} at={-1000} />
			<Sx x={b[0]} y={b[1] + ss * 0.36} text={rSym} size={ss} color="#ffffff" anchor="middle" weight={800} at={-1000} />
			{pairO > 0.005 ? (
				<g opacity={pairO}>
					<circle cx={hx - 13 * (1 - hand)} cy={hy - 13 * hand} r={12} fill={dc} stroke={dk} strokeWidth={2.5} />
					<circle cx={hx + 13 * (1 - hand)} cy={hy + 13 * hand} r={12} fill={dc} stroke={dk} strokeWidth={2.5} />
				</g>
			) : null}
			{ionO > 0.005 ? (
				<g opacity={ionO}>
					<Sx x={a[0] + RL * 0.9} y={a[1] - RL * 0.7} text={lQ} size={60} color={TEAL_C} anchor="middle" weight={800} at={-1000} />
					<Sx x={b[0] + R * 0.82} y={b[1] - R * 0.6} text={rQ} size={60} color={TEAL_C} anchor="middle" weight={800} at={-1000} />
				</g>
			) : null}
		</g>
	);
};
/** Screen x of the shared pair for a difference d. */
export const pairXOf = (g: DialG, d: number) => {
	const x0 = g.a[0] + (g.rl ?? g.R), x1 = g.b[0] - g.R;
	return (x0 + x1) / 2 + pairU(d) * ((x1 - x0) / 2 - 26);
};

// ---------- the bonding spectrum ----------
export type BarG = {x0: number; x1: number; y: number; h?: number};
export const bx = (g: BarG, v: number) => g.x0 + ((v - SPAN.lo) / (SPAN.hi - SPAN.lo)) * (g.x1 - g.x0);
export const SpecBar: React.FC<{g: BarG; id: string; o?: number; guides?: number; bands?: number; ticks?: boolean; widen?: number; labelSize?: number; bandY?: number}> = ({g, id, o = 1, guides = 1, bands = 1, ticks = true, widen = 0, labelSize = 38, bandY}) => {
	if (o <= 0.005) return null;
	const h = g.h ?? 40;
	const by = bandY ?? g.y + h / 2 + labelSize + 62;
	const gx1 = bx(g, GUIDE.hi), gx0 = bx(g, GUIDE.lo);
	const ww = widen * (bx(g, 2.0) - bx(g, 1.4)) / 2;
	return (
		<g opacity={o}>
			<defs>
				<linearGradient id={id + 'g'} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor="#c9ced6" />
					<stop offset="100%" stopColor="#5fb8ad" />
				</linearGradient>
				<pattern id={id + 'h'} width={14} height={14} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
					<rect width={14} height={14} fill="#f3e9d2" />
					<line x1={0} y1={0} x2={0} y2={14} stroke={INK} strokeWidth={3} />
				</pattern>
			</defs>
			<rect x={g.x0} y={g.y - h / 2} width={g.x1 - g.x0} height={h} rx={h / 2} fill={`url(#${id}g)`} stroke={INK} strokeWidth={3} />
			{ww > 0.5 ? <rect x={gx1 - ww} y={g.y - h / 2 - 16} width={ww * 2} height={h + 32} fill={`url(#${id}h)`} stroke={INK} strokeWidth={3} /> : null}
			{ticks ? [0, 1, 2, 3].map(t => (
				<g key={t}>
					<line x1={bx(g, t)} x2={bx(g, t)} y1={g.y + h / 2} y2={g.y + h / 2 + 12} stroke={INK} strokeWidth={3} />
					<Sx x={bx(g, t)} y={g.y + h / 2 + 44} text={`${t}`} size={30} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
			)) : null}
			{guides > 0.005 ? (
				<g opacity={guides}>
					{[gx0, gx1].map((x, i) => <line key={i} x1={x} x2={x} y1={g.y - h / 2 - 28} y2={g.y + h / 2 + 22} stroke={INK} strokeWidth={4} strokeDasharray="10 7" />)}
					<Sx x={gx0} y={g.y + h / 2 + 44} text="0.4" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
					<Sx x={gx1} y={g.y + h / 2 + 44} text="1.7" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
			) : null}
			{bands > 0.005 ? (
				<g opacity={bands}>
					<Sx x={g.x0} y={by} text="non-polar" size={labelSize} color={SLATE_T2} weight={800} at={-1000} />
					<Sx x={(gx0 + gx1) / 2} y={by} text="polar covalent" size={labelSize} color={INK} anchor="middle" weight={800} at={-1000} />
					<Sx x={(gx1 + g.x1) / 2} y={by} text="ionic" size={labelSize} color={TEAL_C} anchor="middle" weight={800} at={-1000} />
				</g>
			) : null}
		</g>
	);
};
/** A pin on the bar with its label above. */
export const Pin: React.FC<{g: BarG; v: number; label: string; at: number; out?: number; color?: string; size?: number; lift?: number; dx?: number}> = ({g, v, label, at, out, color = INK, size = 30, lift = 0, dx = 0}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.005) return null;
	const h = g.h ?? 40;
	const x = bx(g, v);
	const drop = (1 - smooth(prog(f, at, 14))) * 40;
	return (
		<g opacity={o} transform={`translate(0,${-drop})`}>
			<line x1={x} x2={x} y1={g.y - h / 2 - 10 - lift} y2={g.y + h / 2 - 4} stroke={color} strokeWidth={5} strokeLinecap="round" />
			<circle cx={x} cy={g.y - h / 2 - 14 - lift} r={8} fill={color} />
			<Sx x={x + dx} y={g.y - h / 2 - 32 - lift} text={label} size={size} color={color} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

// ---------- Lewis symbols ----------
export const LS = 72;
/** Dot colour key: b blue (the atom's own), a amber (moving or shared). One string per side: top, right, bottom, left. */
export type Sides = [string, string, string, string];
export const symW = (sym: string, size = LS) => tw(sym, size, false, 800);
/** Screen point of dot k (0 or 1) on side s for a symbol centred at (x, y). */
export const dotXY = (x: number, y: number, sym: string, s: number, k: number, n: number, size = LS): [number, number] => {
	const w = symW(sym, size) / 2 + size * 0.2, hh = size * 0.62;
	const off = n === 1 ? 0 : (k === 0 ? -1 : 1) * size * 0.17;
	if (s === 0) return [x + off, y - hh];
	if (s === 2) return [x + off, y + hh];
	if (s === 1) return [x + w, y + off];
	return [x - w, y + off];
};
export const Lewis: React.FC<{x: number; y: number; sym: string; sides: Sides; size?: number; o?: number; color?: string; hide?: string[]}> = ({x, y, sym, sides, size = LS, o = 1, color = INK, hide = []}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<Sx x={x} y={y + size * 0.36} text={sym} size={size} color={color} anchor="middle" weight={800} at={-1000} />
		{sides.map((str, s) => str.split('').map((c, k) => {
			if (hide.includes(`${s}${k}`)) return null;
			const [dx, dy] = dotXY(x, y, sym, s, k, str.length, size);
			return <circle key={`${s}${k}`} cx={dx} cy={dy} r={size * 0.1} fill={c === 'a' ? AMB_DOT : E_BL} stroke={c === 'a' ? AMB_DOT_T : E_BL_T} strokeWidth={2} />;
		}))}
	</g>
));
/** Square brackets round a Lewis symbol with a teal charge outside, top right. */
export const LBrackets: React.FC<{x: number; y: number; sym: string; q: string; size?: number; o?: number; qColor?: string}> = ({x, y, sym, q, size = LS, o = 1, qColor = TEAL_C}) => {
	if (o <= 0.005) return null;
	const w = symW(sym, size) / 2 + size * 0.42, hh = size * 0.95;
	const t = 16;
	return (
		<g opacity={o} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round">
			<path d={`M${x - w + t},${y - hh} L${x - w},${y - hh} L${x - w},${y + hh} L${x - w + t},${y + hh}`} />
			<path d={`M${x + w - t},${y - hh} L${x + w},${y - hh} L${x + w},${y + hh} L${x + w - t},${y + hh}`} />
			<Sx x={x + w + 8} y={y - hh + size * 0.32} text={q} size={size * 0.6} color={qColor} weight={800} at={-1000} />
		</g>
	);
};
/** A moving dot (amber) from p to q over frames [at, at + d]. */
export const MoveDot: React.FC<{p: [number, number]; q: [number, number]; at: number; d?: number; r?: number; color?: string; stroke?: string}> = ({p, q, at, d = 22, r = 7.2, color = AMB_DOT, stroke = AMB_DOT_T}) => {
	const f = useCurrentFrame();
	const t = smooth(clamp01((f - at) / d));
	const lift = Math.sin(Math.PI * t) * -40;
	return <circle cx={lerp(p[0], q[0], t)} cy={lerp(p[1], q[1], t) + lift} r={r} fill={color} stroke={stroke} strokeWidth={2} />;
};

// ---------- plain periodic outline with cells lit by symbol ----------
export type OG = {x: number; y: number; cw: number; ch: number};
export const ogCell = (g: OG, z: number): [number, number] => { const [, r, c] = cellRC(z); return [g.x + (c - 1) * g.cw, g.y + (r - 1) * g.ch]; };
export const Outline: React.FC<{g: OG; lit: {z: number; sym: string; at?: number; color?: string}[]; rows?: number; o?: number; symSize?: number}> = ({g, lit, rows = 5, o = 1, symSize}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const cells = CELLS.filter(c => c[1] <= rows);
	const ss = symSize ?? Math.round(g.ch * 0.5);
	return (
		<g opacity={o}>
			{cells.map(([z]) => { const [x, y] = ogCell(g, z); return <rect key={z} x={x} y={y} width={g.cw} height={g.ch} fill={PAPER_F} stroke={INK} strokeWidth={2} />; })}
			{lit.map(({z, sym, at = -1000, color = NAVY_C}) => {
				const v = prog(f, at, 10);
				if (v <= 0.005) return null;
				const [x, y] = ogCell(g, z);
				return (
					<g key={z} opacity={v}>
						<rect x={x} y={y} width={g.cw} height={g.ch} fill="#dfe7f5" stroke={color} strokeWidth={5} />
						<Sx x={x + g.cw / 2} y={y + g.ch / 2 + ss * 0.36} text={sym} size={ss} color={color} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- readouts for the dial ----------
export const DialRead: React.FC<{x: number; y: number; w: number; label: string; text: string; color?: string; size?: number; o?: number; frame?: string}> = ({x, y, w, label, text, color = INK, size = 52, o = 1, frame = INK}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<Sx x={x} y={y - 12} text={label} size={30} color={INK} weight={800} at={-1000} />
		<rect x={x} y={y} width={w} height={size * 1.5} rx={14} fill={PAPER} stroke={frame} strokeWidth={4} />
		<Sx x={x + 20} y={y + size * 1.12} text={text} size={size} color={color} weight={800} at={-1000} />
	</g>
));
export const typeColor = (t: string) => (t.startsWith('ionic') ? TEAL_C : t.startsWith('polar') ? INK : SLATE_T2);
export {EL, dX, typeOf};
/** Ease helper: 0..1 between two frames. */
export const span = (f: number, a: number, b: number) => smooth(clamp01((f - a) / Math.max(1, b - a)));
