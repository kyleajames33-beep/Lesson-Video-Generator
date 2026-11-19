// Drawing parts for Y11 Chem M1 V07. Reuses the M1 V06 parts (which carry V01's text, chips, framed answers, readouts,
// pen marks, plates, the accounting bar and the task strip). New here: the formula mass bar (one tile per atom, each
// tile as wide as its relative atomic mass, the selected element amber, water groups tinted pale blue), the equal-width
// count bar, the abstract beam balance and a small periodic-table cell.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMB, AMB_INK, INK, PURE, Sx, prog, smooth, vis} from '../chem-y11-m1-v06/parts';
import type {Ent} from './common';

export * from '../chem-y11-m1-v06/parts';

export const EL: Record<string, string> = {C: '#3b3a38', O: '#d8483b', N: '#3f6fb5', H: '#ffffff', Cu: '#b0643a', S: '#e8c547', Mg: '#a9d39a', Na: '#8a5bb5', Cl: '#4f9a5a', H2O: '#cfe6f6'};
const DARK = new Set(['C', 'O', 'N', 'Cu', 'Na', 'Cl']);
export const WATER = '#cfe6f6', WATER_INK = '#2f6f9a';

/** Tile geometry of a formula bar: each entry's x and width (entries hold n atoms of one kind). */
export const tileGeo = (F: Ent[], x: number, w: number) => {
	const tot = F.reduce((a, e) => a + e.ar * e.n, 0);
	let cx = x;
	return F.map(e => {
		const ew = (e.ar * e.n * w) / tot;
		const g = {x: cx, w: ew, e};
		cx += ew;
		return g;
	});
};
/** The mass bar. `at[i]`: when entry i lands; `sel(el)`: frame from which that element's tiles turn amber;
 *  `lift`: 0 to 1 lifts the water entries off the bar (heating). */
export const MassBar: React.FC<{F: Ent[]; x: number; y: number; w?: number; h?: number; at?: number[]; sel?: Record<string, number>; out?: number; lift?: number; labels?: boolean; size?: number; o?: number}> = ({F, x, y, w = 640, h = 84, at, sel = {}, out, lift = 0, labels = true, size = 34, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, -1000, out, 12) * o;
	if (v <= 0.005) return null;
	const G = tileGeo(F, x, w);
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} fill="#fffdf8" stroke={INK} strokeWidth={3} strokeDasharray="10 7" />
			{G.map((g, i) => {
				const a = at ? at[i] : -1000;
				const p = smooth(prog(f, a, 14));
				if (p <= 0.01) return null;
				const am = sel[g.e.el] !== undefined ? prog(f, sel[g.e.el], 12) : 0;
				const base = EL[g.e.el] ?? '#ccc';
				const ly = g.e.water ? -lift * 160 : 0, lo = g.e.water ? 1 - lift : 1;
				const tw1 = g.w / g.e.n;
				const dark = DARK.has(g.e.el) && am < 0.5;
				return (
					<g key={i} opacity={p * lo} transform={`translate(0,${(1 - p) * -30 + ly})`}>
						{Array.from({length: g.e.n}, (_, k) => (
							<g key={k}>
								<rect x={g.x + k * tw1} y={y} width={tw1} height={h} fill={base} stroke={INK} strokeWidth={g.e.n > 3 && tw1 < 12 ? 1.2 : 3} />
								{am > 0.01 ? <rect x={g.x + k * tw1} y={y} width={tw1} height={h} fill={AMB} opacity={am} stroke={INK} strokeWidth={3} /> : null}
							</g>
						))}
						{g.e.water ? <rect x={g.x - 3} y={y - 6} width={g.w + 6} height={h + 12} rx={8} fill="none" stroke={WATER_INK} strokeWidth={4} /> : null}
						{labels ? (g.w / g.e.n > size * 1.2 && !g.e.label
							? Array.from({length: g.e.n}, (_, k) => <Sx key={'l' + k} x={g.x + (k + 0.5) * tw1} y={y + h / 2 + size * 0.36} text={g.e.el} size={size} color={dark ? '#fff' : INK} anchor="middle" weight={800} at={-1000} />)
							: <Sx x={g.x + g.w / 2} y={g.w > size * 2.4 ? y + h / 2 + size * 0.36 : y - 14} text={g.e.label ?? g.e.el} size={size} color={g.w > size * 2.4 ? (dark ? '#fff' : INK) : INK} anchor="middle" weight={800} at={-1000} />) : null}
					</g>
				);
			})}
		</g>
	);
};
/** Equal-width count bar (one tile per atom). */
export const CountBar: React.FC<{els: string[]; x: number; y: number; w?: number; h?: number; at?: number}> = ({els, x, y, w = 640, h = 70, at = -1000}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const tw1 = w / els.length;
	return (
		<g opacity={o}>
			{els.map((e, i) => (
				<g key={i}>
					<rect x={x + i * tw1} y={y} width={tw1} height={h} fill={EL[e]} stroke={INK} strokeWidth={3} />
					<Sx x={x + (i + 0.5) * tw1} y={y + h / 2 + 12} text={e} size={34} color={DARK.has(e) ? '#fff' : INK} anchor="middle" weight={800} at={-1000} />
				</g>
			))}
		</g>
	);
};
/** Abstract beam balance: pivot at (cx, cy), beam half-length L, tilt in degrees (positive: right side down). */
export const Beam: React.FC<{cx: number; cy: number; L?: number; tilt: number; left?: React.ReactNode; right?: React.ReactNode}> = ({cx, cy, L = 280, tilt, left, right}) => {
	const a = (tilt * Math.PI) / 180;
	const lx = cx - L * Math.cos(a), ly = cy - L * Math.sin(a), rx = cx + L * Math.cos(a), ry = cy + L * Math.sin(a);
	const pan = (x: number, y: number, item: React.ReactNode) => (
		<g>
			<path d={`M${x},${y} L${x - 70},${y + 130} M${x},${y} L${x + 70},${y + 130}`} stroke={INK} strokeWidth={3} />
			<path d={`M${x - 90},${y + 130} Q${x},${y + 170} ${x + 90},${y + 130} Z`} fill="#e9e3d6" stroke={INK} strokeWidth={4} />
			<g transform={`translate(${x},${y + 108})`}>{item}</g>
		</g>
	);
	return (
		<g>
			<path d={`M${cx - 70},${cy + 300} L${cx + 70},${cy + 300} M${cx},${cy + 300} L${cx},${cy}`} stroke={INK} strokeWidth={6} strokeLinecap="round" />
			<path d={`M${cx - 18},${cy + 18} L${cx},${cy - 6} L${cx + 18},${cy + 18} Z`} fill={INK} />
			<line x1={lx} y1={ly} x2={rx} y2={ry} stroke={INK} strokeWidth={8} strokeLinecap="round" />
			{pan(lx, ly, left)}
			{pan(rx, ry, right)}
		</g>
	);
};
/** Small periodic-table cell (symbol and relative atomic mass only). */
export const PCell: React.FC<{x: number; y: number; sym: string; ar: string; at?: number}> = ({x, y, sym, ar, at = -1000}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={170} height={190} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<Sx x={x + 85} y={y + 108} text={sym} size={84} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={x + 85} y={y + 166} text={ar} size={40} color={PURE} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
/** Label over a live readout. */
export const RLab: React.FC<{x: number; y: number; t: string}> = ({x, y, t}) => <Sx x={x} y={y} text={t} size={30} color={INK} weight={700} at={-1000} />;
void AMB_INK;
