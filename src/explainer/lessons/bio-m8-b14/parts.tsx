// B8-14 coded parts (lesson-local). Abstract diagrams only; cells, embryos, organs and objects stay painted plates.
// Nothing here draws people (pedigree symbols are plain squares and circles).
// - JobsBar: three tabs (find, choose, change), each with a small coded icon; a tab lights on its cue, and the "change"
//   tab can flash grey with a "not this" tag.
// - Prevented: the what's-prevented strip (symptoms, an affected birth, the gene itself); a slot lights green, grey or
//   with a red "prohibited" tag, with a short note.
// - Al: an allele chip with a letter (blue working, amber altered). Punnett: a letters-only grid (HSC style).
// - Chain2: "find early" then "treatment that works early", whose second box can empty.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, CARD, EDGE, GREEN, GREYT, INK, INK_SOFT, RED, Sx, TEAL, mw, prog, pulse, vis} from '../bio-m8-b13/parts';

export * from '../bio-m8-b13/parts';

// ---------- jobs bar ----------
export const JOBS = ['find', 'choose', 'change'];
const JobIcon: React.FC<{i: number; x: number; y: number; c: string}> = ({i, x, y, c}) => i === 0 ? (
	<g><circle cx={x} cy={y - 4} r={12} fill="none" stroke={c} strokeWidth={4} /><line x1={x + 8} y1={y + 5} x2={x + 18} y2={y + 15} stroke={c} strokeWidth={5} strokeLinecap="round" /></g>
) : i === 1 ? (
	<g><circle cx={x - 8} cy={y} r={10} fill="none" stroke={c} strokeWidth={3} /><circle cx={x + 16} cy={y} r={10} fill="none" stroke={c} strokeWidth={3} /><path d={`M${x + 10},${y} l5,6 l9,-12`} fill="none" stroke={c} strokeWidth={3} strokeLinecap="round" /></g>
) : (
	<g><path d={`M${x - 16},${y - 10} q8,10 16,0 t16,0 M${x - 16},${y + 10} q8,-10 16,0 t16,0`} fill="none" stroke={c} strokeWidth={3} /><rect x={x - 3} y={y - 9} width={10} height={18} fill={AMBER} /></g>
);
export const JobsBar: React.FC<{lit?: (number | undefined)[]; dim?: number; notThis?: number; notOut?: number; o?: number; x?: number; y?: number; w?: number; size?: number}> = ({lit = [], dim, notThis, notOut, o = 1, x = 1110, y = 128, w = 230, size = 34}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const d = dim === undefined ? 0 : prog(f, dim, 14);
	const nt = notThis === undefined ? 0 : vis(f, notThis, notOut, 10);
	const h = size * 1.75;
	return (
		<g opacity={o * (1 - 0.55 * d)}>
			{JOBS.map((t, i) => {
				const L = lit[i] === undefined ? 0 : prog(f, lit[i] as number, 12);
				const pu = lit[i] === undefined ? 0 : pulse(f, lit[i] as number, 36);
				const xx = x + i * (w + 12);
				const grey = i === 2 && nt > 0.01;
				const c = grey ? GREYT : L > 0.5 ? CARD : BLUE;
				return (
					<g key={t}>
						{pu > 0.01 ? <rect x={xx - 6} y={y - 6} width={w + 12} height={h + 12} rx={h / 2 + 6} fill={AMBER} opacity={0.45 * pu} /> : null}
						<rect x={xx} y={y} width={w} height={h} rx={h / 2} fill={grey ? '#e9e2d3' : L > 0.5 ? BLUE : CARD} stroke={grey ? GREYT : BLUE} strokeWidth={3} />
						<JobIcon i={i} x={xx + 40} y={y + h / 2} c={c} />
						<Sx x={xx + 80} y={y + h / 2 + size * 0.36} text={t} size={size} color={c} hand weight={700} at={-1000} />
					</g>
				);
			})}
			{nt > 0.01 ? <g opacity={nt}><rect x={x + 2 * (w + 12) + 40} y={y + h + 8} width={150} height={40} rx={20} fill="#f1eee7" stroke={GREYT} strokeWidth={2.5} /><Sx x={x + 2 * (w + 12) + 115} y={y + h + 37} text="not this" size={28} color={GREYT} anchor="middle" hand weight={700} at={-1000} /></g> : null}
		</g>
	);
};

// ---------- what's prevented ----------
export const PREV = ['symptoms', 'an affected birth', 'the gene itself'];
export type PSlot = {at?: number; color?: 'green' | 'grey' | 'red'; note?: string; noteAt?: number; outline?: number};
export const Prevented: React.FC<{slots?: PSlot[]; at?: number; o?: number; x?: number; y?: number; w?: number; h?: number; size?: number; title?: boolean}> = ({slots = [], at = -1000, o = 1, x = 96, y = 906, w = 560, h = 134, size = 36, title = true}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{title ? <Sx x={x} y={y - 12} text="what's prevented?" size={28} color={GREYT} hand weight={700} at={-1000} /> : null}
			{PREV.map((t, i) => {
				const s = slots[i] ?? {};
				const L = s.at === undefined ? 0 : prog(f, s.at, 14);
				const col = s.color === 'red' ? RED : s.color === 'grey' ? GREYT : GREEN;
				const ol = s.outline === undefined ? 0 : prog(f, s.outline, 12);
				const xx = x + i * (w + 24);
				return (
					<g key={t}>
						<rect x={xx} y={y} width={w} height={h} rx={18} fill={L > 0.5 ? (s.color === 'grey' ? '#efe9de' : s.color === 'red' ? '#f7dcd8' : '#dcefe2') : CARD} stroke={L > 0.5 || ol > 0.5 ? col : EDGE} strokeWidth={L > 0.5 || ol > 0.5 ? 4 : 3} strokeDasharray={L > 0.5 || ol > 0.5 ? undefined : '10 8'} />
						<Sx x={xx + 22} y={y + 50} text={t} size={size} color={L > 0.5 ? col : GREYT} hand weight={700} at={-1000} />
						{s.note ? <Sx x={xx + 22} y={y + 100} text={s.note} size={30} color={INK} hand weight={700} at={s.noteAt ?? s.at ?? -1000} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- allele chips, Punnett grid ----------
export const Al: React.FC<{x: number; y: number; t: string; alt?: boolean; s?: number; at?: number; o?: number}> = ({x, y, t, alt = false, s = 56, at = -1000, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={s} height={s} rx={10} fill={alt ? '#f6d48c' : '#dceaf7'} stroke={alt ? AMBER_INK : BLUE} strokeWidth={3.5} />
			<Sx x={x + s / 2} y={y + s * 0.7} text={t} size={s * 0.62} color={alt ? AMBER_INK : BLUE} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
export const Punnett: React.FC<{x: number; y: number; cell?: number; at: number; circle?: number; o?: number}> = ({x, y, cell = 84, at, circle, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const kids = [['AA', 'Aa'], ['Aa', 'aa']];
	const ci = circle === undefined ? 0 : prog(f, circle, 12);
	return (
		<g opacity={v}>
			{['A', 'a'].map((g, i) => <Sx key={'t' + i} x={x + cell * (i + 1) + cell / 2} y={y + cell * 0.66} text={g} size={40} color={INK} anchor="middle" weight={800} at={-1000} />)}
			{['A', 'a'].map((g, i) => <Sx key={'l' + i} x={x + cell / 2} y={y + cell * (i + 1) + cell * 0.66} text={g} size={40} color={INK} anchor="middle" weight={800} at={-1000} />)}
			{kids.map((row, r) => row.map((k, c) => <g key={r + '' + c}>
				<rect x={x + cell * (c + 1)} y={y + cell * (r + 1)} width={cell} height={cell} fill={CARD} stroke={INK} strokeWidth={3} />
				<Sx x={x + cell * (c + 1.5)} y={y + cell * (r + 1.66)} text={k} size={38} color={k === 'aa' ? AMBER_INK : INK} anchor="middle" weight={800} at={-1000} />
			</g>))}
			{ci > 0.01 ? <circle cx={x + cell * 2.5} cy={y + cell * 2.5} r={cell * 0.45} fill="none" stroke={RED} strokeWidth={4} opacity={ci} /> : null}
		</g>
	);
};

// ---------- the find-early chain ----------
export const Chain2: React.FC<{x: number; y: number; w?: number; h?: number; at?: number; empty?: number; size?: number; o?: number}> = ({x, y, w = 330, h = 110, at = -1000, empty, size = 34, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const e = empty === undefined ? 0 : prog(f, empty, 14);
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill={CARD} stroke={BLUE} strokeWidth={4} />
			<Sx x={x + w / 2} y={y + h / 2 + size * 0.34} text="find early" size={size} color={BLUE} anchor="middle" hand weight={700} at={-1000} />
			<path d={`M${x + w + 8},${y + h / 2} L${x + w + 52},${y + h / 2} M${x + w + 38},${y + h / 2 - 12} L${x + w + 52},${y + h / 2} L${x + w + 38},${y + h / 2 + 12}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			<rect x={x + w + 60} y={y} width={w + 60} height={h} rx={16} fill={e > 0.5 ? '#efe9de' : CARD} stroke={e > 0.5 ? GREYT : GREEN} strokeWidth={e > 0.5 ? 3 : 4} strokeDasharray={e > 0.5 ? '10 8' : undefined} />
			<Sx x={x + w + 60 + (w + 60) / 2} y={y + h / 2 + size * 0.34} text="treatment that works early" size={size * 0.9} color={GREEN} anchor="middle" hand weight={700} at={-1000} opacity={1 - e} />
			{e > 0.5 ? <Sx x={x + w + 60 + (w + 60) / 2} y={y + h / 2 + size * 0.34} text="none" size={size} color={GREYT} anchor="middle" hand weight={700} at={-1000} opacity={e} /> : null}
		</g>
	);
};
/** Pedigree symbols: square (male) or circle (female), unshaded. */
export const Ped: React.FC<{x: number; y: number; sq?: boolean; r?: number; shade?: boolean}> = ({x, y, sq = false, r = 20, shade = false}) => sq
	? <rect x={x - r} y={y - r} width={2 * r} height={2 * r} fill={shade ? INK : CARD} stroke={INK} strokeWidth={3} />
	: <circle cx={x} cy={y} r={r} fill={shade ? INK : CARD} stroke={INK} strokeWidth={3} />;
export {mw, TEAL, AMBER};
