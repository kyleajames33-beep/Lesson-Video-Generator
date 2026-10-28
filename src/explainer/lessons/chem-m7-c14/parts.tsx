// M7 C14 board pieces (chem-m7-c15 may import these). README for Claude:
// - RU: a repeat unit (two backbone carbons with their side groups); `stamp` drops the brackets and n with the
//   continuation bonds; `unstamp` lifts them, shrinks the continuation bonds and draws the teal second C=C bond (the
//   monomer). Side group 'ring' draws a benzene hexagon. `ghostH` sends a crossed ghost H to each carbon.
// - ChainBox: the chain view: strands (straight, or with short branches), contact ticks between neighbours, optional
//   Cl dots with teal dipole lines, rings, plasticiser beads, the warm slide (amber glow, strands sliding) and the F
//   sheath. All amounts are numbers the scene animates (0 to 1).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {INK, INK_SOFT, Sx, smooth} from '../chem-m6-c01/parts';
import {CARDC, NAVY} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {RED} from '../chem-m7-c08a/parts';

export const TEALC = '#0f8b7d', CL = '#2f7f3a', FL = '#9fb84a', STRAND = '#5d9ccc', DISPC = '#8fbfe3', GREY = '#8a847a', HEAT = '#e8a33a';
export {INK, INK_SOFT, NAVY, RED};

const subCol = (t: string) => (t === 'Cl' ? CL : t === 'F' ? '#6d8a1f' : t === 'H' ? '#9a948a' : INK);
const Hex: React.FC<{x: number; y: number; r: number}> = ({x, y, r}) => {
	const pts = Array.from({length: 6}, (_, i) => `${x + r * Math.cos(Math.PI / 6 + (i * Math.PI) / 3)},${y + r * Math.sin(Math.PI / 6 + (i * Math.PI) / 3)}`).join(' ');
	return <g><polygon points={pts} fill="none" stroke={INK} strokeWidth={4} /><circle cx={x} cy={y} r={r * 0.55} fill="none" stroke={GREY} strokeWidth={3} /></g>;
};
export const RU: React.FC<{x: number; y: number; s?: number; subs: [string, string][]; at: number; out?: number; o?: number; stamp?: number; unstamp?: number; ghostH?: number; glowBack?: number; glowSide?: number}> = ({x, y, s = 1, subs, at, out, o = 1, stamp, unstamp, ghostH, glowBack, glowSide}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const st = stamp === undefined ? (unstamp !== undefined ? 1 : 0) : prog(f, stamp, 14);
	const un = unstamp === undefined ? 0 : prog(f, unstamp, 20);
	const br = st * (1 - un);
	const cont = (stamp === undefined ? 1 : 0.4 + 0.6 * st) * (1 - un);
	const C = [-65, 65];
	const L = 76;
	const gb = glowBack === undefined ? 0 : vis(f, glowBack), gs = glowSide === undefined ? 0 : vis(f, glowSide);
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s})`}>
			{gb > 0 ? <ellipse cx={0} cy={0} rx={130} ry={40} fill="#f6d77a" opacity={0.5 * gb} /> : null}
			<line x1={C[0] + 20} y1={0} x2={C[1] - 20} y2={0} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{un > 0 ? <line x1={C[0] + 24} y1={-11} x2={C[1] - 24} y2={-11} stroke={TEALC} strokeWidth={5} strokeLinecap="round" opacity={un} /> : null}
			<line x1={C[0] - 20} y1={0} x2={C[0] - 20 - 90 * cont} y2={0} stroke={NAVY} strokeWidth={5} strokeLinecap="round" opacity={cont > 0.02 ? 1 : 0} />
			<line x1={C[1] + 20} y1={0} x2={C[1] + 20 + 90 * cont} y2={0} stroke={NAVY} strokeWidth={5} strokeLinecap="round" opacity={cont > 0.02 ? 1 : 0} />
			{C.map((cx, i) => (
				<g key={i}>
					<Sx x={cx} y={14} text="C" size={40} color={INK} anchor="middle" weight={800} at={-1000} />
					{subs[i].map((t, k) => {
						const yy = k === 0 ? -L : L;
						if (t === 'ring') return <g key={k}><line x1={cx} y1={22} x2={cx} y2={L - 14} stroke={INK} strokeWidth={4} /><Hex x={cx} y={L + 44} r={46} /></g>;
						if (t === 'CH3') return <g key={k}><line x1={cx} y1={k === 0 ? -22 : 22} x2={cx} y2={yy * 0.7} stroke={INK} strokeWidth={4} /><Sx x={cx} y={yy + 14} text="CH₃" size={34} color={INK} anchor="middle" weight={800} at={-1000} /></g>;
						const side = t !== 'H' && gs > 0;
						return (
							<g key={k}>
								<line x1={cx} y1={k === 0 ? -22 : 22} x2={cx} y2={yy * 0.68} stroke={INK} strokeWidth={4} />
								{side ? <circle cx={cx} cy={yy} r={30} fill="#dcefdc" opacity={gs} /> : null}
								<Sx x={cx} y={yy + 13} text={t} size={t === 'H' ? 32 : 36} color={subCol(t)} anchor="middle" weight={800} at={-1000} />
							</g>
						);
					})}
				</g>
			))}
			{br > 0.01 ? (
				<g opacity={br} transform={`translate(0,${(1 - Math.min(1, st)) * -30})`}>
					<path d="M-120,-118 L-136,-118 L-136,118 L-120,118" fill="none" stroke={NAVY} strokeWidth={5} />
					<path d="M120,-118 L136,-118 L136,118 L120,118" fill="none" stroke={NAVY} strokeWidth={5} />
					<Sx x={152} y={130} text="n" size={40} color={NAVY} weight={800} at={-1000} />
				</g>
			) : null}
			{ghostH !== undefined ? C.map((cx, i) => {
				const t = smooth(prog(f, ghostH, 24));
				const gx = cx + (i ? 1 : -1) * (200 - 90 * t);
				const q = vis(f, ghostH, ghostH + 70);
				return <g key={'g' + i} opacity={q}><Sx x={gx} y={14} text="H" size={34} color={GREY} anchor="middle" weight={800} at={-1000} /><line x1={gx - 18} y1={-14} x2={gx + 18} y2={22} stroke={RED} strokeWidth={5} opacity={prog(f, ghostH + 26, 8)} /></g>;
			}) : null}
		</g>
	);
};

// ---------- chain view box ----------
export type CBox = {spread?: number; branch?: number; ticks?: number; cl?: number; dip?: number; rings?: number; beads?: number; slide?: number; heat?: number; cross?: number};
export const ChainBox: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; o?: number; c: CBox; n?: number}> = ({x, y, w, h, at, out, o = 1, c, n = 7}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const sp = c.spread ?? 0, br = c.branch ?? 0, tk = c.ticks ?? 1, sl = c.slide ?? 0;
	const gap = (h - 60) / (n - 1) * (0.78 + 0.22 * sp);
	const y0 = y + 30 + ((h - 60) - gap * (n - 1)) / 2;
	const id = `cb${Math.round(x)}${Math.round(y)}`;
	const strandY = (i: number) => y0 + i * gap + Math.sin(f * 0.25 + i) * 3 * sl;
	const off = (i: number) => (i % 2 ? 1 : -1) * 60 * sl * Math.sin((f / 30) * 1.4 + i);
	return (
		<g opacity={v}>
			<defs><clipPath id={id}><rect x={x} y={y} width={w} height={h} rx={18} /></clipPath></defs>
			{(c.heat ?? 0) > 0 ? <rect x={x - 10} y={y + h - 10} width={w + 20} height={40} rx={20} fill={HEAT} opacity={0.6 * (c.heat ?? 0)} /> : null}
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARDC} stroke={INK_SOFT} strokeWidth={3} />
			<g clipPath={`url(#${id})`}>
				{Array.from({length: n}, (_, i) => {
					const yy = strandY(i);
					const ox = off(i);
					const zig = Array.from({length: 40}, (_, k) => `${x - 80 + ox + k * ((w + 160) / 39)},${yy + (k % 2 ? -5 : 5)}`).join(' ');
					return (
						<g key={i}>
							<polyline points={zig} fill="none" stroke={STRAND} strokeWidth={4} strokeLinejoin="round" />
							{br > 0.01 ? Array.from({length: 6}, (_, k) => { const bx = x + 60 + k * (w / 6) + (i % 3) * 30 + ox; const d = (k + i) % 2 ? -1 : 1; return <line key={k} x1={bx} y1={yy} x2={bx + 12} y2={yy + d * 26 * br} stroke={STRAND} strokeWidth={4} strokeLinecap="round" />; }) : null}
							{(c.cl ?? 0) > 0.01 ? Array.from({length: 7}, (_, k) => <circle key={k} cx={x + 40 + k * (w / 7) + ox} cy={yy + 12} r={7} fill={CL} opacity={c.cl} />) : null}
							{(c.rings ?? 0) > 0.01 ? Array.from({length: 5}, (_, k) => { const cx = x + 60 + k * (w / 5) + (i % 2) * 40 + ox; const cy = yy + ((k + i) % 2 ? -1 : 1) * 22; return <polygon key={k} points={Array.from({length: 6}, (_, j) => `${cx + 14 * Math.cos(j * Math.PI / 3)},${cy + 14 * Math.sin(j * Math.PI / 3)}`).join(' ')} fill="#fffdf8" stroke={INK} strokeWidth={2.5} opacity={c.rings} />; }) : null}
							{i < n - 1 && tk > 0.01 ? Array.from({length: 12}, (_, k) => {
								const kx = x + 30 + k * (w / 12) + ox * 0.5;
								if ((k + i) % (br > 0.5 ? 3 : 1) !== 0) return null;
								return <line key={'t' + k} x1={kx} y1={yy + 8} x2={kx} y2={strandY(i + 1) - 8} stroke={DISPC} strokeWidth={2.5} strokeDasharray="3 5" opacity={tk * (1 - 0.6 * br)} />;
							}) : null}
							{i < n - 1 && (c.dip ?? 0) > 0.01 ? Array.from({length: 4}, (_, k) => { const kx = x + 40 + k * (w / 3.5) + ox; return <line key={'d' + k} x1={kx} y1={yy + 18} x2={kx + 10} y2={strandY(i + 1) - 6} stroke={TEALC} strokeWidth={3} strokeDasharray="4 5" opacity={c.dip} />; }) : null}
							{i < n - 1 && (c.beads ?? 0) > 0.01 ? Array.from({length: 4}, (_, k) => <circle key={'b' + k} cx={x + 80 + k * (w / 4) + (i % 2) * 50} cy={(yy + strandY(i + 1)) / 2} r={11} fill="#d9d4c9" stroke={GREY} strokeWidth={2} opacity={c.beads} />) : null}
						</g>
					);
				})}
				{(c.cross ?? 0) > 0.01 ? <g opacity={c.cross}><line x1={x + w * 0.5} y1={strandY(2)} x2={x + w * 0.5} y2={strandY(3)} stroke={GREY} strokeWidth={5} strokeDasharray="8 6" /><path d={`M${x + w * 0.5 - 18},${(strandY(2) + strandY(3)) / 2 - 18} l36,36 m0,-36 l-36,36`} stroke={RED} strokeWidth={6} /></g> : null}
			</g>
		</g>
	);
};
