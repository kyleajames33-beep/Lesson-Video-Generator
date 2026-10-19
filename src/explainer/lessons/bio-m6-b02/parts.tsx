// M6 B02 drawing parts on top of B01's strand system: base damage marks, a repair enzyme blob, a copying-fork marker,
// the electromagnetic spectrum bar with the ionising threshold, a coded atom and water molecule, the intercalating slab,
// a chemical adduct blob, radon wisp and cosmic starburst, and the mutagen board strip (four groups, one row per scene).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {PlateB, Sx} from '../bio-m5-b13/shared';
import type {PB} from '../bio-m5-b07/shared';
import {PLATES} from '../bio-m6-b01/assets';
import {CARD, EDGE, PLUM, PLUM_SOFT, RED, SlimStrand, clamp01, rungX, vis} from '../bio-m6-b01/parts';

export * from '../bio-m6-b01/parts';
/** The sun alone, cut from the UV-on-skin plate (clipped to its own box, never stretched). */
export const SUN: PB = {...PLATES.uvSkin, box: [280, 200, 820, 740]};
export const BEAKER: PB = {src: 'assets/chemistry/m6-beaker-v1.png', nat: [2048, 2048], box: [278, 164, 1769, 1884]};

/** An amber damage mark on a base (a small starred dot on the top strand at rung x). */
export const Damage: React.FC<{x: number; y: number; o?: number; pulse?: number; r?: number}> = ({x, y, o = 1, pulse = 0, r = 9}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{pulse > 0.01 ? <circle cx={x} cy={y} r={r * 2.6} fill={AMBER} opacity={0.3 * pulse} /> : null}
		<path d={Array.from({length: 10}, (_, i) => { const a = -Math.PI / 2 + (i * Math.PI) / 5, rr = i % 2 ? r * 0.55 : r * 1.25; return `${i ? 'L' : 'M'}${x + rr * Math.cos(a)},${y + rr * Math.sin(a)}`; }).join(' ') + 'Z'} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} />
	</g>
));
/** A repair enzyme: a soft plum blob with a small label. */
export const RepairBlob: React.FC<{x: number; y: number; o?: number; s?: number; label?: boolean}> = ({x, y, o = 1, s = 1, label = false}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-34,4 C-36,-22 -12,-34 8,-30 C30,-27 40,-8 36,10 C32,28 8,34 -10,30 C-26,27 -33,18 -34,4 Z" fill={PLUM_SOFT} stroke={PLUM} strokeWidth={3} />
		<path d="M-8,-30 L0,-14 L8,-30" fill="#f6f1e7" stroke={PLUM} strokeWidth={2.5} />
		{label ? <text x={0} y={60} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 24}} fill={PLUM}>repair enzyme</text> : null}
	</g>
));
/** A copying fork marker: the two strands open into a V at x. */
export const Fork: React.FC<{x: number; y: number; gap?: number; o?: number}> = ({x, y, gap = 44, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${x - 40},${y} L${x},${y} M${x - 40},${y + gap} L${x},${y + gap}`} stroke="#4f86ad" strokeWidth={5} strokeLinecap="round" />
		<path d={`M${x},${y - 6} L${x + 18},${y + gap / 2} L${x},${y + gap + 6}`} fill="#dcebf6" stroke="#4f86ad" strokeWidth={3} strokeLinejoin="round" />
		<text x={x + 26} y={y - 12} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 24}} fill="#4f86ad">copying</text>
	</g>
));

// ---------- the electromagnetic spectrum ----------
const BANDS = ['radio', 'microwave', 'infrared', 'visible', 'UV', 'X-rays', 'gamma rays'];
const BAND_C = ['#d9d3c6', '#d6cfc0', '#e7c9b0', '#f3e2a0', '#c9b2e6', '#a9c3e2', '#8fb0d9'];
export const SpectrumBar: React.FC<{x: number; y: number; w: number; h?: number; o?: number; lit?: number; ion?: number; arrow?: number; size?: number}> = ({x, y, w, h = 56, o = 1, lit = 0, ion = 0, arrow = 1, size = 24}) => {
	if (o <= 0.01) return null;
	const bw = w / BANDS.length;
	return (
		<g opacity={o}>
			{BANDS.map((b, i) => {
				const hi = i >= 3 ? lit : 0;
				return (
					<g key={b}>
						<rect x={x + i * bw} y={y} width={bw - 4} height={h} rx={10} fill={BAND_C[i]} opacity={0.55 + 0.45 * hi} stroke={hi > 0.5 ? AMBER : 'none'} strokeWidth={3} />
						<text x={x + i * bw + bw / 2 - 2} y={y + h / 2 + size * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={INK}>{b}</text>
					</g>
				);
			})}
			{arrow > 0.01 ? (
				<g opacity={arrow}>
					<line x1={x + w * 0.55} y1={y + h + 26} x2={x + w - 10} y2={y + h + 26} stroke={INK_SOFT} strokeWidth={3} />
					<path d={`M${x + w - 24},${y + h + 16} L${x + w - 8},${y + h + 26} L${x + w - 24},${y + h + 36}`} fill="none" stroke={INK_SOFT} strokeWidth={3} />
					<text x={x + w * 0.55} y={y + h + 18} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 26}} fill={INK_SOFT}>more energy</text>
				</g>
			) : null}
			{ion > 0.01 ? (
				<g opacity={ion}>
					<line x1={x + 5 * bw - 2} y1={y - 22} x2={x + 5 * bw - 2} y2={y + h + 50} stroke={RED} strokeWidth={4} strokeDasharray="9 7" />
					<text x={x + 5 * bw + 8} y={y - 10} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill={RED}>ionising →</text>
					<text x={x + 5 * bw - 12} y={y - 10} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill={INK_SOFT}>← not ionising</text>
				</g>
			) : null}
		</g>
	);
};

// ---------- atom and water (coded, abstract) ----------
export const Atom: React.FC<{x: number; y: number; o?: number; lose?: number}> = ({x, y, o = 1, lose = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<ellipse cx={x} cy={y} rx={70} ry={26} fill="none" stroke={INK_SOFT} strokeWidth={2.5} />
		<ellipse cx={x} cy={y} rx={70} ry={26} fill="none" stroke={INK_SOFT} strokeWidth={2.5} transform={`rotate(60 ${x} ${y})`} />
		<circle cx={x} cy={y} r={14} fill="#d9604f" stroke={INK} strokeWidth={2} />
		<circle cx={x - 70 * Math.cos(0.4)} cy={y + 26 * Math.sin(0.4)} r={7} fill="#4f86ad" />
		<circle cx={x + 70 * Math.cos(0.3) + lose * 160} cy={y - 26 * Math.sin(0.3) - lose * 90} r={7} fill="#4f86ad" opacity={1 - 0.4 * lose} />
		{lose > 0.05 ? <text x={x + 70 + lose * 170} y={y - 30 - lose * 90} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 24}} fill="#4f86ad" opacity={lose}>electron</text> : null}
	</g>
));
export const Water: React.FC<{x: number; y: number; o?: number; split?: number; to?: [number, number]; travel?: number}> = ({x, y, o = 1, split = 0, to, travel = 0}) => {
	if (o <= 0.01) return null;
	const t = clamp01(travel);
	const fx = to ? (to[0] - x) * t : 0, fy = to ? (to[1] - y) * t : 0;
	return (
		<g opacity={o}>
			<g transform={`translate(${-split * 40 + fx * 0.9},${fy})`}>
				<circle cx={x} cy={y} r={20} fill="#d9604f" stroke={INK} strokeWidth={2} />
				<circle cx={x - 26} cy={y + 18} r={11} fill="#ffffff" stroke={INK} strokeWidth={2} />
				{split > 0.5 ? <circle cx={x + 12} cy={y - 18} r={5} fill={AMBER} /> : null}
			</g>
			<g transform={`translate(${split * 40 + fx * 1.1},${fy})`}>
				<circle cx={x + 26} cy={y + 18} r={11} fill="#ffffff" stroke={INK} strokeWidth={2} />
				{split > 0.5 ? <circle cx={x + 38} cy={y + 4} r={5} fill={AMBER} /> : null}
			</g>
		</g>
	);
};
/** A flat intercalating slab sliding down between two rungs. */
export const Slab: React.FC<{x: number; y: number; gap: number; p: number}> = ({x, y, gap, p}) => (p <= 0.01 ? null : (
	<g opacity={clamp01(p * 2)}>
		<rect x={x - 9} y={y - 90 * (1 - p) + 4} width={18} height={gap - 8} rx={4} fill="#c98a3a" stroke={AMBER_INK} strokeWidth={2.5} />
	</g>
));
/** A bulky chemical adduct attached on top of a base. */
export const Adduct: React.FC<{x: number; y: number; o?: number; p?: number}> = ({x, y, o = 1, p = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y - 60 * (1 - p)})`}>
		<path d="M-14,-6 L-4,-22 L12,-20 L18,-6 L8,6 L-8,6 Z" fill="#8a6a4a" stroke="#4f3a26" strokeWidth={2.5} />
		<circle cx={-14} cy={-24} r={6} fill="#8a6a4a" stroke="#4f3a26" strokeWidth={2} />
	</g>
));
export const Wisp: React.FC<{x: number; y: number; p: number}> = ({x, y, p}) => (p <= 0.01 ? null : (
	<g opacity={clamp01(p * 1.5)}>
		{[0, 1].map(k => <path key={k} d={`M${x + k * 22},${y} C${x - 20 + k * 22},${y - 40} ${x + 30 + k * 22},${y - 70} ${x + 6 + k * 22},${y - 120 * p}`} fill="none" stroke="#9aa7b0" strokeWidth={5} strokeLinecap="round" strokeDasharray="10 8" />)}
	</g>
));
export const Starburst: React.FC<{x: number; y: number; p: number; r?: number}> = ({x, y, p, r = 30}) => (p <= 0.01 ? null : (
	<g opacity={p}>
		{Array.from({length: 8}, (_, i) => { const a = (i * Math.PI) / 4; return <line key={i} x1={x + Math.cos(a) * r * 0.3} y1={y + Math.sin(a) * r * 0.3} x2={x + Math.cos(a) * r * p} y2={y + Math.sin(a) * r * p} stroke="#7b8fb8" strokeWidth={4} strokeLinecap="round" />; })}
		<circle cx={x} cy={y} r={6} fill="#7b8fb8" />
	</g>
));

// ---------- the mutagen board strip (bottom), one cell per group ----------
export type MCell = {name: string; does: string; result: string; plate?: PB; icon?: 'kink' | 'gap' | 'base' | 'insert'};
export const MCELLS: MCell[] = [
	{name: 'UV', does: "joins neighbouring T's: kink", result: 'wrong base when copied', plate: SUN, icon: 'kink'},
	{name: 'X-rays, gamma rays', does: 'ionising: breaks strands', result: 'pieces lost or swapped', plate: PLATES.xray, icon: 'gap'},
	{name: 'chemicals', does: 'mimic, alter, or slide in', result: 'wrong, extra or missing bases', plate: BEAKER, icon: 'base'},
	{name: 'naturally occurring', does: 'ionising; attaches; inserts DNA', result: 'genes broken or switched on', plate: PLATES.granite, icon: 'insert'},
];
/** A tiny strand icon for each mechanism. */
export const MechIcon: React.FC<{kind: 'kink' | 'gap' | 'base' | 'insert'; x: number; y: number; s?: number}> = ({kind, x, y, s = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<SlimStrand x={0} y={0} n={6} pitch={18} gap={24} lineW={3} kink={kind === 'kink' ? {i: 2, amt: 1} : undefined} breaks={kind === 'gap' ? [{i: 2, line: 'top', amt: 1}, {i: 2, line: 'bot', amt: 1}] : []} insert={kind === 'insert' ? {i0: 2, i1: 3, o: 1} : undefined} rung={i => (kind === 'base' && i === 3 ? {color: PLUM, w: 5} : undefined)} />
	</g>
);
const plateFit = (p: PB, maxW: number, maxH: number) => {
	const bw = p.box[2] - p.box[0], bh = p.box[3] - p.box[1];
	return Math.min(maxW, (maxH * bw) / bh);
};
export const MutBoard: React.FC<{fills: (number | undefined)[]; hot?: (k: number) => number; y?: number}> = ({fills, hot, y = 912}) => {
	const f = useCurrentFrame();
	const W = 422, H = 128, X0 = 100;
	return (
		<g>
			{MCELLS.map((c, k) => {
				const x = X0 + k * (W + 12);
				const at = fills[k];
				const fo = at === undefined ? 0 : prog(f, at, 14);
				const h = hot ? hot(k) : 0;
				return (
					<g key={k}>
						<rect x={x} y={y} width={W} height={H} rx={16} fill={fo > 0.01 ? CARD : 'none'} stroke={h > 0.5 ? AMBER : fo > 0.01 ? EDGE : '#c9bfae'} strokeWidth={h > 0.5 ? 4 : 2.5} strokeDasharray={fo > 0.01 ? undefined : '9 7'} />
						{fo > 0.01 ? (
							<g opacity={fo}>
								{c.plate ? <PlateB p={c.plate} cx={x + 56} cy={y + H / 2} w={plateFit(c.plate, 90, 96)} id={k === 0 ? 'mb-sun' : undefined} /> : null}
								<Sx x={x + 112} y={y + 36} text={c.name} size={28} color={INK} hand />
								<Sx x={x + 112} y={y + 72} text={c.does} size={18} color={INK} weight={600} />
								<Sx x={x + 112} y={y + 102} text={'→ ' + c.result} size={18} color={AMBER_INK} weight={600} />
							</g>
						) : null}
					</g>
				);
			})}
		</g>
	);
};
export {rungX, vis, DrawPath};
