// G03a/G03b shared board: the five type cards (lit, dim, ticked; method and slip lines for the decision board),
// a corner strip of the five types, the task line, the "HSC-style question" tag, the painted carbon vessel and
// small helpers. Coded except the vessel (painted plate, assets.ts).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER, prog} from '../../kit';
import {slotXY} from '../chem-m5-c04b/parts';
import {Fade, Ring, Sx, Tag, TEAL, Tick, tw} from '../chem-m5-c06/parts';
import {CROSS} from '../chem-m5-c06/common';
import {CARBON_PLATE} from './assets';
import {CARBON, CO2K, COK} from './tokens';

const SHADE = '#cfe6dc';
const GLOW = '#f6d77a';

// ---------- task line (marked-up text, so subscripts work) ----------
export const Task: React.FC<{text: string; at: number; size?: number; y?: number; out?: number}> = ({text, at, size = 58, y = 150, out}) => (
	<Sx x={96} y={y} text={text} size={size} hand at={at} out={out} />
);
/** Every question card carries this tag. */
export const HscTag: React.FC<{at: number; x?: number; y?: number; w?: number}> = ({at, x = 1250, y = 96, w = 574}) => (
	<Tag x={x} y={y} w={w} text="HSC-style question, written for HSCScience" at={at} size={28} />
);

// ---------- mini icon for each type (abstract: which part of an ICE table the question gives) ----------
type Mini = 'E' | 'IE' | 'IK' | 'Q' | 'ADD';
const MINI_OF: Record<number, Mini> = {1: 'E', 2: 'IE', 3: 'IK', 4: 'Q', 5: 'ADD'};
const MiniIcon: React.FC<{kind: Mini; x: number; y: number}> = ({kind, x, y}) => {
	const cw = 34, rh = 24, w = 3 * cw, h = 3 * rh;
	if (kind === 'Q') {
		return (
			<g>
				<path d={`M${x - 6},${y + 40} L${x + w + 6},${y + 40}`} stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
				<path d={`M${x + 72},${y + 36} L${x + 62},${y + 18} Q${x + 72},${y + 10} ${x + 82},${y + 18} Z`} fill={TEAL} stroke={INK} strokeWidth={2} />
				<path d={`M${x + 30},${y + 50} L${x + 39},${y + 59} L${x + 30},${y + 68} L${x + 21},${y + 59} Z`} fill="#3a2f6b" />
				<text x={x + 72} y={y + 6} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 22}}>K</text>
				<text x={x + 50} y={y + 72} fill="#3a2f6b" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 22}}>Q</text>
			</g>
		);
	}
	const fill = (r: number, c: number) => {
		if (kind === 'E') return r === 2;
		if (kind === 'IE') return r === 0 || (r === 2 && c === 2);
		if (kind === 'IK') return r === 0;
		return r === 0 || (r === 2 && c === 0);
	};
	return (
		<g>
			{[0, 1, 2].map(r => [0, 1, 2].map(c => fill(r, c) ? <rect key={`${r}${c}`} x={x + c * cw + 3} y={y + r * rh + 3} width={cw - 6} height={rh - 6} rx={4} fill={SHADE} stroke={TEAL} strokeWidth={1.5} /> : null))}
			{kind === 'IK' ? [0, 1, 2].map(c => <text key={c} x={x + c * cw + cw / 2} y={y + 2 * rh + 19} textAnchor="middle" fill={AMBER_INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 22}}>?</text>) : null}
			{kind === 'ADD' ? <text x={x + 1.5 * cw} y={y + rh - 4} textAnchor="middle" fill={AMBER_INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 24}}>+y</text> : null}
			<rect x={x} y={y} width={w} height={h} rx={5} fill="none" stroke={INK} strokeWidth={2.5} />
			{[1, 2].map(k => <path key={k} d={`M${x},${y + k * rh} L${x + w},${y + k * rh}`} stroke={INK} strokeWidth={1.8} />)}
			{(kind === 'IK' || kind === 'ADD') ? (
				<g>
					<rect x={x + w + 10} y={y + 20} width={34} height={30} rx={8} fill={TEAL} />
					<text x={x + w + 27} y={y + 42} textAnchor="middle" fill="#fffdf8" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 22}}>K</text>
				</g>
			) : null}
		</g>
	);
};

/** Small coded flame (type 5, "the hard one"). */
export const Flame: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const k = 1 + 0.06 * Math.sin(f * 0.4);
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s * o},${s * o * k})`}>
			<path d="M0,-34 C16,-16 22,-4 18,10 C14,24 -14,24 -18,10 C-22,-4 -10,-12 0,-34 Z" fill="#e8742f" stroke={INK} strokeWidth={2.5} />
			<path d="M0,-10 C8,0 10,6 7,13 C4,19 -4,19 -7,13 C-10,6 -5,0 0,-10 Z" fill="#f6d77a" />
		</g>
	);
};

// ---------- the five type cards ----------
export const FIVE = [
	{n: 1, title: 'Settled amounts: find K'},
	{n: 2, title: 'Start + one settled value: ICE, find K'},
	{n: 3, title: 'Start + K: how much of each?'},
	{n: 4, title: 'Mixture + K: which way? (Q)'},
	{n: 5, title: 'Old equilibrium + something added: how much?'},
];
export type FiveCardProps = {
	n: number; x: number; y: number; w: number; h?: number; at: number; title?: string; titleAt?: number;
	lit?: number; dim?: number; tick?: number; tag?: {text: string; at: number; out?: number}; method?: {text: string; at: number}; slip?: {text: string; at: number};
	flame?: number; icon?: boolean; children?: React.ReactNode;
};
export const FiveCard: React.FC<FiveCardProps> = ({n, x, y, w, h = 130, at, title, titleAt, lit = 0, dim = 0, tick, tag, method, slip, flame, icon = true, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * (1 - 0.6 * dim);
	if (o <= 0.01) return null;
	const t = title ?? FIVE[n - 1].title;
	const lines = method ? (slip ? 3 : 2) : 1;
	const ty = lines === 1 ? h / 2 + 15 : lines === 2 ? h / 2 - 8 : 48;
	const dx = (1 - prog(f, at, 18)) * -40;
	return (
		<g opacity={o} transform={`translate(${x + dx},${y - 8 * lit})`}>
			<rect x={0} y={0} width={w} height={h} rx={22} fill="#fffdf8" stroke={lit > 0.05 ? TEAL : 'rgba(60,45,20,0.18)'} strokeWidth={3 + 2.5 * lit} />
			{lit > 0.02 ? <rect x={6} y={6} width={w - 12} height={h - 12} rx={18} fill={GLOW} opacity={0.24 * lit} /> : null}
			<circle cx={56} cy={h / 2} r={30} fill={TEAL} />
			<text x={56} y={h / 2 + 12} textAnchor="middle" fill="#fffdf8" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34}}>{n}</text>
			<Sx x={110} y={ty} text={t} size={42} color={INK} hand at={titleAt ?? at + 4} />
			{method ? <Sx x={110} y={ty + 42} text={method.text} size={29} color={TEAL} weight={600} at={method.at} /> : null}
			{slip ? <Sx x={110} y={ty + 76} text={'slip: ' + slip.text} size={30} color={CROSS} hand at={slip.at} /> : null}
			{icon ? <MiniIcon kind={MINI_OF[n]} x={w - 170} y={h / 2 - 36} /> : null}
			{/* the tag sits after the title, and only when it fits before the icon (otherwise the tick or the board says it) */}
			{tag && 110 + tw(t, 42, true) + 30 + 190 < w - 220 ? <Tag x={Math.max(110 + tw(t, 42, true) + 30, w - 440)} y={(method ? 14 : h / 2 - 28)} w={190} text={tag.text} at={tag.at} out={tag.out} size={28} /> : null}
			{tick !== undefined ? <Tick x={w - 205} y={h / 2} at={tick} s={40} /> : null}
			{flame !== undefined ? <Flame x={w - 214} y={h / 2 + 6} at={flame} /> : null}
			{children}
		</g>
	);
};
/** Card y for a column of five. */
export const cardY = (i: number, y0 = 176, h = 130, gap = 10) => y0 + i * (h + gap);

// ---------- corner strip of the five types ----------
export const MiniStrip: React.FC<{x?: number; y?: number; at: number; lit: number[]; dim?: number[]; ticked?: number[]; flash?: number; bracket?: {a: number; b: number; at: number; text: string; out?: number}; out?: number}> = ({x = 1440, y = 168, at, lit, dim = [], ticked = [], flash, bracket, out}) => {
	const f = useCurrentFrame();
	const S = 56, G = 14;
	const fl = flash === undefined || f < flash ? 0 : Math.max(0, Math.sin(Math.min(1, (f - flash) / 30) * Math.PI));
	const cx = (i: number) => x + i * (S + G) + S / 2;
	return (
		<Fade at={at} out={out}>
			{[1, 2, 3, 4, 5].map((n, i) => {
				const on = lit.includes(n), dm = dim.includes(n);
				const sc = on ? 1 + 0.18 * fl : 1;
				return (
					<g key={n} opacity={dm ? 0.35 : 1} transform={`translate(${cx(i)},${y + S / 2}) scale(${sc})`}>
						<rect x={-S / 2} y={-S / 2} width={S} height={S} rx={12} fill={on ? TEAL : '#fffdf8'} stroke={on ? TEAL : INK_SOFT} strokeWidth={3} />
						<text x={0} y={12} textAnchor="middle" fill={on ? '#fffdf8' : INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32}}>{n}</text>
						{ticked.includes(n) ? <path d="M14,-34 l8,9 l14,-18" fill="none" stroke="#2f8a5b" strokeWidth={5} strokeLinecap="round" /> : null}
					</g>
				);
			})}
			{dim.length ? <Sx x={cx(dim[0] - 1)} y={y + S + 34} text="part two" size={26} color={INK_SOFT} hand at={at} /> : null}
			{bracket ? (
				<Fade at={bracket.at} out={bracket.out}>
					<DrawPath d={`M${cx(bracket.a - 1)},${y - 8} L${cx(bracket.a - 1)},${y - 26} L${cx(bracket.b - 1)},${y - 26} L${cx(bracket.b - 1)},${y - 8}`} at={bracket.at} dur={14} color={AMBER_INK} width={4} />
				</Fade>
			) : null}
		</Fade>
	);
};

// ---------- painted carbon vessel (g03-carbon-vessel-v1, 1600 x 2400) ----------
// Object box 347,341 to 1288,1984; glass about x 462 to 1182, y 816 to 1668; carbon lump x 618 to 1008, y 1362 to 1662.
const CV = {bx: 347, by: 341, bh: 1643, lump: [813, 1512, 210, 160] as [number, number, number, number]};
export const carbonVesselW = (h: number) => (941 / CV.bh) * h;
export const CarbonVessel: React.FC<{x: number; y: number; h: number; at: number; grey?: number; counts?: (f: number) => [number, number]; label?: number}> = ({x, y, h, at, grey = 0, counts, label}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 16);
	if (o <= 0.01) return null;
	const s = h / CV.bh;
	const X = (u: number) => x + (u - CV.bx) * s, Y = (v: number) => y + (v - CV.by) * s;
	const [nCO2, nCO] = counts ? counts(f) : [0, 0];
	const gas = (n: number, type: number, col: string) => Array.from({length: Math.round(n)}, (_, i) => {
		const p = slotXY(5, type, i, f, X(822), Y(1080), 270 * s, 220 * s);
		return type === 1 ? (
			<g key={'c' + type + i}><circle cx={p.x - 9} cy={p.y} r={6} fill="#fffdf8" stroke={col} strokeWidth={2.5} /><circle cx={p.x} cy={p.y} r={7} fill={col} stroke={INK} strokeWidth={1.8} /><circle cx={p.x + 9} cy={p.y} r={6} fill="#fffdf8" stroke={col} strokeWidth={2.5} /></g>
		) : (
			<g key={'c' + type + i}><circle cx={p.x - 4} cy={p.y} r={7} fill={col} stroke={INK} strokeWidth={1.8} /><circle cx={p.x + 6} cy={p.y} r={6} fill="#fffdf8" stroke={col} strokeWidth={2.5} /></g>
		);
	});
	const [lx, ly, lw, lh] = CV.lump;
	return (
		<g opacity={o}>
			<image href={staticFile(CARBON_PLATE)} x={X(0)} y={Y(0)} width={1600 * s} height={2400 * s} />
			{gas(nCO2, 1, CO2K)}
			{gas(nCO, 2, COK)}
			{grey > 0.01 ? (
				<g opacity={grey}>
					<ellipse cx={X(lx)} cy={Y(ly)} rx={lw * s} ry={lh * s} fill={PAPER} opacity={0.62} />
					<ellipse cx={X(lx)} cy={Y(ly)} rx={lw * s + 8} ry={lh * s + 8} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" />
				</g>
			) : null}
			{label !== undefined ? <Sx x={X(lx)} y={Y(1984) + 44} text="carbon: solid" size={32} color={CARBON} anchor="middle" hand at={label} /> : null}
		</g>
	);
};
/** Key for the vessel's gas particles. */
export const GasKey: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => (
	<Fade at={at}>
		<circle cx={x - 9} cy={y} r={6} fill="#fffdf8" stroke={CO2K} strokeWidth={2.5} /><circle cx={x} cy={y} r={7} fill={CO2K} stroke={INK} strokeWidth={1.8} /><circle cx={x + 9} cy={y} r={6} fill="#fffdf8" stroke={CO2K} strokeWidth={2.5} />
		<Sx x={x + 26} y={y + 10} text="CO_2" size={30} color={CO2K} at={at} />
		<circle cx={x + 116} cy={y} r={7} fill={COK} stroke={INK} strokeWidth={1.8} /><circle cx={x + 126} cy={y} r={6} fill="#fffdf8" stroke={COK} strokeWidth={2.5} />
		<Sx x={x + 142} y={y + 10} text="CO" size={30} color={COK} at={at} />
	</Fade>
);

// ---------- small reusable cards ----------
/** A teal result card that can slide from one place to another. */
export const MoveCard: React.FC<{text: string; sub?: string; at: number; from: [number, number]; to?: [number, number]; moveAt?: number; w?: number; out?: number; size?: number}> = ({text, sub, at, from, to, moveAt, w = 470, out, size = 38}) => {
	const f = useCurrentFrame();
	const u = to && moveAt !== undefined ? prog(f, moveAt, 26) : 0;
	const x = from[0] + ((to ?? from)[0] - from[0]) * u, y = from[1] + ((to ?? from)[1] - from[1]) * u;
	const h = sub ? 96 : 64;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={h} rx={18} fill="#e5f2ec" stroke={TEAL} strokeWidth={3.5} />
			<Sx x={x + 22} y={y + 44} text={text} size={size} color={TEAL} at={at} />
			{sub ? <Sx x={x + 22} y={y + 80} text={sub} size={26} color={INK_SOFT} hand at={at} /> : null}
		</Fade>
	);
};
/** The "vessel 1" thumbnail: its mol/L column only (no K value). */
export const VesselOne: React.FC<{x: number; y: number; at: number; pulse?: number; out?: number}> = ({x, y, at, pulse, out}) => {
	const f = useCurrentFrame();
	const pu = pulse === undefined || f < pulse ? 0 : Math.max(0, Math.sin(Math.min(1, (f - pulse) / 36) * Math.PI));
	return (
		<Fade at={at} out={out}>
			<g transform={`translate(${x + 150},${y + 90}) scale(${1 + 0.08 * pu}) translate(${-x - 150},${-y - 90})`}>
				<rect x={x} y={y} width={300} height={180} rx={18} fill="#fffdf8" stroke={pu > 0.05 ? AMBER : INK_SOFT} strokeWidth={3 + 3 * pu} strokeDasharray={pu > 0.05 ? undefined : '8 6'} />
				<Sx x={x + 20} y={y + 40} text="vessel 1 (mol/L)" size={30} color={INK_SOFT} hand at={at} />
				<Sx x={x + 20} y={y + 82} text="SO_2  0.150" size={30} at={at} />
				<Sx x={x + 20} y={y + 120} text="O_2   0.0750" size={30} at={at} />
				<Sx x={x + 20} y={y + 158} text="SO_3  0.300" size={30} at={at} />
			</g>
		</Fade>
	);
};
/** A crossed wrong-move chip with an optional correction caption. */
export const SlipChip: React.FC<{x: number; y: number; w: number; text: string; at: number; out?: number; note?: string; noteColor?: string; size?: number}> = ({x, y, w, text, at, out, note, noteColor = TEAL, size = 32}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={60} rx={30} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
		<Sx x={x + 26} y={y + 41} text={text} size={size} color={INK_SOFT} hand at={at} />
		<DrawPath d={`M${x + w - 56},${y + 18} L${x + w - 22},${y + 42}`} at={at + 12} dur={8} color={CROSS} width={7} />
		<DrawPath d={`M${x + w - 22},${y + 18} L${x + w - 56},${y + 42}`} at={at + 18} dur={8} color={CROSS} width={7} />
		{note ? <Sx x={x + 26} y={y + 100} text={note} size={32} color={noteColor} hand at={at + 20} /> : null}
	</Fade>
);
/** A pen ring that follows the measured width of marked-up text. */
export const RingText: React.FC<{x: number; y: number; w: number; at: number; out?: number; seed?: number}> = ({x, y, w, at, out, seed = 3}) => (
	<Ring cx={x + w / 2} cy={y - 14} rx={w / 2 + 22} ry={30} at={at} out={out} color={AMBER} seed={seed} width={5} />
);
void AMBER;
