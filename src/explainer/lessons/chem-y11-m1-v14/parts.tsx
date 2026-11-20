// Drawing parts for Y11 Chem M1 V14 (first ionisation energy and electronegativity). Reuses the M1 V13 parts (and
// through them V12 back to V01: text, chips, framed answers, pen marks, plates, readouts, the periodic grid, the
// radius atom and pull arrows). New here, all coded and all read from the data table in common.ts: vertical and
// horizontal value bars (orange ionisation energy, violet electronegativity), the energy meter, a hatched "no value"
// slot, the tug of war (the shared pair placed by the two Pauling values), the Pauling scale bar and the shaded
// periodic table (two-tone, noble gases hatched).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CELLS, cellRC} from '../chem-y11-m1-v12/common';
import {E_BLUE, E_INK, INK, NUC_INK, P_RED, Sx, clamp01, lerp, prog, smooth} from '../chem-y11-m1-v13/parts';
import {PAULING} from './common';

export * from '../chem-y11-m1-v13/parts';

// ---------- colour key (design Revision 4, fixed for the whole video) ----------
/** First ionisation energy: strokes and fills; text uses OR_T. */
export const OR_S = '#e07b12';
export const OR_T = '#a35400';
export const OR_F = '#f6c891';
/** Electronegativity: strokes and fills; text uses VI_T. */
export const VI_S = '#7a4fb0';
export const VI_T = '#5b2aa8';
export const VI_F = '#d3c2f0';
export const PAPER_F = '#fffdf8';

// ---------- value bars ----------
/** Vertical bar standing on y0 with centre x; h = v * k at full growth p; value text above (34 px). */
export const VBarV: React.FC<{x: number; y0: number; w: number; v: number; k: number; p: number; text: string; color: string; fill: string; tColor: string; vSize?: number; o?: number; outline?: boolean}> = ({x, y0, w, v, k, p, text, color, fill, tColor, vSize = 34, o = 1, outline = false}) => {
	if (o <= 0.005) return null;
	const H = v * k * smooth(p);
	return (
		<g opacity={o}>
			{outline ? <rect x={x - w / 2} y={y0 - v * k} width={w} height={v * k} rx={5} fill={PAPER_F} stroke={INK} strokeWidth={2.5} /> : null}
			{H > 1 ? <rect x={x - w / 2} y={y0 - H} width={w} height={H} rx={5} fill={fill} stroke={color} strokeWidth={3.5} /> : null}
			{p > 0.6 ? <Sx x={x} y={y0 - v * k - 12} text={text} size={vSize} color={tColor} anchor="middle" weight={800} at={-1000} opacity={clamp01((p - 0.6) / 0.4)} /> : null}
		</g>
	);
};
/** Horizontal bar: label at x, bar from x + lw, length v * k, value after the bar. */
export const HBarV: React.FC<{x: number; y: number; lw: number; label: string; v: number; k: number; p: number; text: string; color: string; fill: string; tColor: string; h?: number; size?: number; vSize?: number; o?: number; outline?: boolean}> = ({x, y, lw, label, v, k, p, text, color, fill, tColor, h = 44, size = 40, vSize = 34, o = 1, outline = true}) => {
	if (o <= 0.005) return null;
	const L = v * k * smooth(p);
	return (
		<g opacity={o}>
			<Sx x={x} y={y + h / 2 + size * 0.36} text={label} size={size} color={INK} weight={800} at={-1000} />
			{outline ? <rect x={x + lw} y={y} width={v * k} height={h} rx={6} fill={PAPER_F} stroke={INK} strokeWidth={2.5} /> : null}
			{L > 1 ? <rect x={x + lw} y={y} width={L} height={h} rx={6} fill={fill} stroke={color} strokeWidth={3.5} /> : null}
			{p > 0.6 ? <Sx x={x + lw + v * k + 14} y={y + h / 2 + vSize * 0.36} text={text} size={vSize} color={tColor} weight={800} at={-1000} opacity={clamp01((p - 0.6) / 0.4)} /> : null}
		</g>
	);
};

// ---------- the energy meter (horizontal) ----------
/** Frame x..x+w, height h; fills to v / max. */
export const Meter: React.FC<{x: number; y: number; w: number; h?: number; v: number; max: number; p: number; o?: number}> = ({x, y, w, h = 40, v, max, p, o = 1}) => {
	if (o <= 0.005) return null;
	const L = w * (v / max) * smooth(p);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={h / 2} fill={PAPER_F} stroke={INK} strokeWidth={3.5} />
			{L > 2 ? <rect x={x + 3} y={y + 3} width={Math.max(0, L - 6)} height={h - 6} rx={(h - 6) / 2} fill={OR_S} /> : null}
		</g>
	);
};

// ---------- hatched slot (no value) ----------
export const Hatch: React.FC<{x: number; y: number; w: number; h: number; id: string; o?: number; color?: string}> = ({x, y, w, h, id, o = 1, color = INK}) => {
	if (o <= 0.005) return null;
	return (
		<g opacity={o}>
			<defs>
				<pattern id={id} width={16} height={16} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
					<line x1={0} y1={0} x2={0} y2={16} stroke={color} strokeWidth={3.5} />
				</pattern>
			</defs>
			<rect x={x} y={y} width={w} height={h} rx={5} fill={`url(#${id})`} stroke={color} strokeWidth={3} />
		</g>
	);
};

// ---------- the tug of war ----------
export type TugProps = {
	/** left and right nucleus centres (same y) */
	a: [number, number]; b: [number, number];
	/** Pauling values of the left and right atoms (the pair sits at pairFrac along the rope) */
	enL: number; enR: number;
	labelL?: string; labelR?: string;
	/** atom outline radii */
	rL: number; rR: number;
	nr?: number;
	/** 0..1: pull arrows drawn */
	pulls?: number;
	/** pair position override (0..1 along the rope), for the neutral start */
	frac?: number;
	o?: number;
	pulse?: number;
	symSize?: number;
};
export const Tug: React.FC<TugProps> = ({a, b, enL, enR, labelL, labelR, rL, rR, nr = 30, pulls = 0, frac, o = 1, pulse = 0, symSize}) => {
	if (o <= 0.005) return null;
	const t = frac ?? enR / (enL + enR);
	const px = lerp(a[0], b[0], t), py = a[1];
	const ss = symSize ?? Math.round(nr * 1.05);
	const arrow = (c: [number, number], dir: number, v: number) => {
		const w = 3 + v * 2.6, len = 70 + v * 22;
		const x0 = c[0] + dir * (nr + 12), x1 = x0 + dir * len;
		const hd = 12 + w * 1.4;
		return (
			<g opacity={pulls}>
				<line x1={x0} y1={c[1] - nr - 26} x2={x1 - dir * hd * 0.6} y2={c[1] - nr - 26} stroke={VI_S} strokeWidth={w} strokeLinecap="round" />
				<path d={`M${x1 - dir * hd},${c[1] - nr - 26 - hd * 0.6} L${x1},${c[1] - nr - 26} L${x1 - dir * hd},${c[1] - nr - 26 + hd * 0.6} Z`} fill={VI_S} stroke={VI_S} strokeWidth={2} strokeLinejoin="round" />
			</g>
		);
	};
	return (
		<g opacity={o}>
			<circle cx={a[0]} cy={a[1]} r={rL} fill="#f3eee4" stroke={INK} strokeWidth={3} />
			<circle cx={b[0]} cy={b[1]} r={rR} fill="#f3eee4" stroke={INK} strokeWidth={3} />
			{/* the rope: solid dark ink, nucleus to nucleus */}
			<line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={INK} strokeWidth={7} strokeLinecap="round" />
			<circle cx={a[0]} cy={a[1]} r={nr} fill={P_RED} stroke={NUC_INK} strokeWidth={3} />
			<circle cx={b[0]} cy={b[1]} r={nr} fill={P_RED} stroke={NUC_INK} strokeWidth={3} />
			{labelL ? <Sx x={a[0]} y={a[1] + ss * 0.36} text={labelL} size={ss} color="#ffffff" anchor="middle" weight={800} at={-1000} /> : null}
			{labelR ? <Sx x={b[0]} y={b[1] + ss * 0.36} text={labelR} size={ss} color="#ffffff" anchor="middle" weight={800} at={-1000} /> : null}
			{arrow(a, -1, enL)}
			{arrow(b, 1, enR)}
			{pulse > 0.005 ? <circle cx={px} cy={py} r={34} fill={E_BLUE} opacity={0.25 * pulse} /> : null}
			<circle cx={px - 12} cy={py} r={12} fill={E_BLUE} stroke={E_INK} strokeWidth={2.5} />
			<circle cx={px + 12} cy={py} r={12} fill={E_BLUE} stroke={E_INK} strokeWidth={2.5} />
		</g>
	);
};
/** Position of the shared pair for a Tug with these props. */
export const pairX = (a: [number, number], b: [number, number], enL: number, enR: number) => lerp(a[0], b[0], enR / (enL + enR));

// ---------- the Pauling scale bar ----------
export const scaleX = (x0: number, x1: number, v: number) => x0 + ((v - PAULING.lo) / (PAULING.hi - PAULING.lo)) * (x1 - x0);
export const PaulingBar: React.FC<{x0: number; x1: number; y: number; p: number; o?: number}> = ({x0, x1, y, p, o = 1}) => {
	if (o <= 0.005 || p <= 0.005) return null;
	const e = smooth(p);
	const ticks = [1, 2, 3, 4];
	return (
		<g opacity={o}>
			<defs>
				<linearGradient id="v14pg" x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor="#efe8fb" />
					<stop offset="100%" stopColor={VI_S} />
				</linearGradient>
			</defs>
			<rect x={x0} y={y - 18} width={(x1 - x0) * e} height={36} rx={18} fill="url(#v14pg)" stroke={VI_T} strokeWidth={3} />
			{ticks.map(t => {
				const x = scaleX(x0, x1, t);
				return x <= x0 + (x1 - x0) * e ? (
					<g key={t}>
						<line x1={x} x2={x} y1={y + 18} y2={y + 32} stroke={INK} strokeWidth={3} />
						<Sx x={x} y={y + 66} text={t.toFixed(1)} size={30} color={INK} anchor="middle" weight={800} at={-1000} />
					</g>
				) : null;
			})}
		</g>
	);
};
/** A marker on the Pauling bar: a violet pin with its value. */
export const ScaleMark: React.FC<{x0: number; x1: number; y: number; v: number; label: string; at: number; out?: number; above?: boolean}> = ({x0, x1, y, v, label, at, out, above = true}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.005) return null;
	const x = scaleX(x0, x1, v);
	return (
		<g opacity={o}>
			<line x1={x} x2={x} y1={y - 26} y2={y + 26} stroke={VI_T} strokeWidth={6} strokeLinecap="round" />
			<Sx x={x} y={above ? y - 40 : y + 112} text={label} size={34} color={VI_T} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

// ---------- the shaded periodic table (main rows; two-tone: bottom left orange, top right violet; noble gases hatched) ----------
export type SG = {x: number; y: number; cw: number; ch: number};
export const sgCell = (g: SG, z: number): [number, number] => { const [, r, c] = cellRC(z); return [g.x + (c - 1) * g.cw, g.y + (r - 1) * g.ch]; };
const mix = (a: string, b: string, t: number) => {
	const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
	const ch = (s: number) => Math.round(((pa >> s) & 255) * (1 - t) + ((pb >> s) & 255) * t);
	return '#' + [16, 8, 0].map(s => ch(s).toString(16).padStart(2, '0')).join('');
};
export const ShadeTable: React.FC<{g: SG; id: string; o?: number; sym?: boolean; symSize?: number; corners?: number}> = ({g, id, o = 1, sym = false, symSize, corners = 1}) => {
	if (o <= 0.005) return null;
	const cells = CELLS.filter(c => c[1] <= 7);
	const ss = symSize ?? Math.max(18, Math.round(g.ch * 0.42));
	return (
		<g opacity={o}>
			<defs>
				<pattern id={id} width={12} height={12} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
					<rect width={12} height={12} fill={PAPER_F} />
					<line x1={0} y1={0} x2={0} y2={12} stroke={INK} strokeWidth={3} />
				</pattern>
			</defs>
			{cells.map(([z, r, c]) => {
				const [x, y] = sgCell(g, z);
				const noble = c === 18;
				// position score: 0 at the bottom left, 1 at the top right (columns 1..17, periods 7..1)
				const t = clamp01(((c - 1) / 16) * 0.62 + ((7 - r) / 6) * 0.38);
				const fill = noble ? `url(#${id})` : t < 0.5 ? mix('#f2a65a', '#f7ecdc', t / 0.5) : mix('#f1ebf8', '#8f6bc6', (t - 0.5) / 0.5);
				return (
					<g key={z}>
						<rect x={x} y={y} width={g.cw} height={g.ch} fill={fill} stroke={INK} strokeWidth={2.5} />
						{sym ? <Sx x={x + g.cw / 2} y={y + g.ch / 2 + ss * 0.36} text={symAt(z)} size={ss} color={noble ? INK : t > 0.8 ? '#ffffff' : INK} anchor="middle" weight={800} at={-1000} /> : null}
					</g>
				);
			})}
			{corners > 0.005 ? (
				<g opacity={corners}>
					{(() => { const [x, y] = sgCell(g, 9); return <rect x={x} y={y} width={g.cw} height={g.ch} fill="none" stroke={VI_T} strokeWidth={6} />; })()}
					{(() => { const [x, y] = sgCell(g, 55); return <rect x={x} y={y} width={g.cw} height={g.ch} fill="none" stroke={OR_T} strokeWidth={6} />; })()}
				</g>
			) : null}
		</g>
	);
};
const SY: Record<number, string> = {1: 'H', 2: 'He', 3: 'Li', 9: 'F', 10: 'Ne', 11: 'Na', 17: 'Cl', 18: 'Ar', 19: 'K', 37: 'Rb', 55: 'Cs', 87: 'Fr', 35: 'Br', 53: 'I'};
const symAt = (z: number) => SY[z] ?? '';
