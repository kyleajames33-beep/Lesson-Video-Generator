// M7 C04a scenes 8 to 10: an unsymmetrical alkene gives two possible products (the two-way docker on propene + HBr;
// but-2-ene lands both ways on one structure, the "=" stamp), the addition equation check (one product, the atom count,
// HBr as a second product crossed) and the memory aid (one piece on each carbon; the conditions card large).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {INK, INK_SOFT, Overlay, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {Brace, CHAIN_INK, Crossed, MULTI, NameLbl, Stamp, Tag, TickMark} from '../chem-m7-c01/molecules';
import {sc} from './common';
import {BROM, Box, CT, CondCard, CondEq, Halo, Mol2D, Plus, RxArrow, apt, cmol, ctW, diat, dimAt, loc, vis} from './parts';
import type {El, Fly, SMol} from './parts';

// ---------- 8. An unsymmetrical alkene gives two possible products ----------
const K8 = cues(sc('two-products'), {ethene: 'Ethene is the same', just: 'just one product', propene: 'Propene', when: 'When hydrogen bromide', end: 'end', middle: 'middle', two: 'two possible products', b1: 'one-bromopropane', b2: 'two-bromopropane', both: 'write both', water: 'Water does', sym: 'symmetrical', but2: 'but-two-ene', one: 'only one', whichever: 'whichever'});
const PROP = cmol([{ul: 'H', dl: 'H'}, {u: 'H'}, {u: 'H', d: 'H', r: 'H'}], [2, 1]);
const P1 = cmol([{l: 'H', u: 'Br*', d: 'H'}, {u: 'H', d: 'H*'}, {u: 'H', d: 'H', r: 'H'}]);
const P2 = cmol([{l: 'H', u: 'H*', d: 'H'}, {u: 'H', d: 'Br*'}, {u: 'H', d: 'H', r: 'H'}]);
const BUT = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H'}, {u: 'H'}, {u: 'H', d: 'H', r: 'H'}], [1, 2, 1], 110);
const Q1 = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'Br*'}, {u: 'H', d: 'H*'}, {u: 'H', d: 'H', r: 'H'}], [], 110);
const Q2 = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H*'}, {u: 'H', d: 'Br*'}, {u: 'H', d: 'H', r: 'H'}], [], 110);
const HBR = diat('H', 'Br', 88);
const fl = (rg: SMol, rx: number, ry: number, pr: SMol, px: number, py: number, s: number, pairs: [number, number, number][]): Record<number, Fly> =>
	Object.fromEntries(pairs.map(([ri, pi, at]) => [pi, {from: loc(apt(rg, ri, rx, ry, s), px, py, s), at, dur: 26}]));
export const SceneTwo: React.FC = () => {
	const f = useCurrentFrame();
	const T = {y: 370, s: 0.88}, B = {y: 830, s: 0.8};
	const top = dimAt(f, K8.sym - 10, 0.55);
	const pc = (i: number) => apt(PROP, i, 270, T.y, T.s);
	return (
		<Overlay>
			<Sx x={96} y={150} text="Propene + HBr: which way round?" size={46} color={INK} hand at={K8.propene} out={K8.sym - 10} />
			<g opacity={top}>
				<Mol2D m={PROP} x={270} y={T.y} s={T.s} at={K8.propene} />
				{['1', '2', '3'].map((t, i) => <Sx key={t} x={pc(i)[0]} y={T.y + 128} text={t} size={26} color="#24407a" anchor="middle" weight={800} at={K8.propene + 10 + i * 6} />)}
				<Halo x={pc(0)[0]} y={pc(0)[1]} r={40} at={K8.end} out={K8.middle} />
				<Halo x={pc(1)[0]} y={pc(1)[1]} r={40} at={K8.middle} out={K8.two} />
				<Plus x={510} y={T.y} at={K8.when} size={46} />
				<Mol2D m={HBR} x={620} y={T.y} s={T.s} at={K8.when} />
				<RxArrow x1={715} x2={835} y={T.y} at={K8.when + 10} />
				<Mol2D m={P1} x={1060} y={T.y} s={T.s} at={K8.end} fly={fl(HBR, 620, T.y, P1, 1060, T.y, T.s, [[1, P1.k['0u'], K8.end], [0, P1.k['1d'], K8.end + 6]])} />
				<Sx x={1310} y={T.y + 14} text="or" size={40} color={INK_SOFT} anchor="middle" hand at={K8.middle} />
				<Mol2D m={P2} x={1560} y={T.y} s={T.s} at={K8.middle} fly={fl(HBR, 620, T.y, P2, 1560, T.y, T.s, [[0, P2.k['0u'], K8.middle], [1, P2.k['1d'], K8.middle + 6]])} />
				<NameLbl x={1060} y={T.y + 160} parts={[['1-bromo', BROM], ['propane', CHAIN_INK]]} at={K8.b1} size={32} />
				<NameLbl x={1560} y={T.y + 160} parts={[['2-bromo', BROM], ['propane', CHAIN_INK]]} at={K8.b2} size={32} />
				<Brace x1={870} x2={1750} y={T.y + 182} text="two possible products" at={K8.two} size={30} />
				<Box x={850} y={T.y - 130} w={920} h={360} at={K8.both} out={K8.water} color="#c98a1b" pulse={K8.both} />
			</g>
			<Tag x={96} y={T.y + 220} text="+ H_2O: propan-1-ol or propan-2-ol" at={K8.water} size={28} o={dimAt(f, K8.sym - 10, 0.4)} />
			<Mol2D m={BUT} x={290} y={B.y} s={B.s} at={K8.sym} />
			<Sx x={290} y={B.y + 120} text="but-2-ene" size={30} color={INK_SOFT} anchor="middle" weight={700} at={K8.but2} />
			<Plus x={545} y={B.y} at={K8.sym + 10} size={44} />
			<Mol2D m={HBR} x={650} y={B.y} s={B.s} at={K8.sym + 10} />
			<RxArrow x1={725} x2={835} y={B.y} at={K8.sym + 16} />
			<Mol2D m={Q1} x={1090} y={B.y} s={B.s} at={K8.but2} fly={fl(HBR, 650, B.y, Q1, 1090, B.y, B.s, [[1, Q1.k['1d'], K8.but2], [0, Q1.k['2d'], K8.but2 + 6]])} />
			<Mol2D m={Q2} x={1590} y={B.y} s={B.s} at={K8.but2 + 20} fly={fl(HBR, 650, B.y, Q2, 1590, B.y, B.s, [[0, Q2.k['1d'], K8.but2 + 20], [1, Q2.k['2d'], K8.but2 + 26]])} />
			<Stamp x={1340} y={B.y} at={K8.one} r={34} />
			<Sx x={1090} y={B.y + 150} text="2-bromobutane" size={28} color={INK_SOFT} anchor="middle" weight={700} at={K8.whichever} />
			<Sx x={1590} y={B.y + 150} text="2-bromobutane" size={28} color={INK_SOFT} anchor="middle" weight={700} at={K8.whichever} />
			<Tag x={1310} y={T.y + 280} text="symmetrical: same groups at both ends → one product" at={K8.whichever} size={30} color={TEAL} fill="#dff2ef" anchor="middle" />
			{void K8.ethene}{void K8.just}{void MULTI}
		</Overlay>
	);
};

// ---------- 9. Check the equation ----------
const K9 = cues(sc('check-equation'), {so: 'So check', one: 'one product', every: 'every atom', count: 'Count them', two: 'two carbons', four: 'four hydrogens', br: 'two bromines', side: 'each side', hbr: 'HBr as', swapped: "you've swapped", subst: 'substitution'});
export const SceneCheck: React.FC = () => {
	const f = useCurrentFrame();
	const X = 820, Y = 400, SZ = 56, LEN = 160;
	const rx = X + LEN + 22, rw = ctW('CH_2BrCH_2Br', SZ);
	return (
		<Overlay>
			<Sx x={96} y={150} text="Check every addition equation" size={50} color={INK} hand at={K9.so} />
			<CondEq x={X} y={Y} left="CH_2=CH_2 + Br_2" right="CH_2BrCH_2Br" at={K9.so + 10} len={LEN} size={SZ} />
			<Box x={rx - 16} y={Y - 56} w={rw + 32} h={104} at={K9.one} pulse={K9.one} color="#2f8a5b" />
			<Tag x={rx + rw / 2} y={Y + 70} text="one product, nothing lost" at={K9.one} size={30} anchor="middle" color="#1f6b44" fill="#e3f3e9" />
			<Sx x={560} y={Y + 210} text="left:" size={34} color={INK_SOFT} anchor="end" weight={700} at={K9.count} />
			<CT x={580} y={Y + 210} text="C 2, H 4, Br 2" size={38} at={K9.two} />
			<Sx x={1110} y={Y + 210} text="right:" size={34} color={INK_SOFT} anchor="end" weight={700} at={K9.side - 20} />
			<CT x={1130} y={Y + 210} text="C 2, H 4, Br 2" size={38} at={K9.side - 10} />
			<TickMark x={1440} y={Y + 200} at={K9.side} s={1.2} />
			<Crossed x={480} y={760} text="C_2H_4 + Br_2 → C_2H_3Br + HBr" at={K9.hbr} cross={K9.subst} note="a swap is substitution: addition keeps every atom in one product" size={40} />
			{void K9.every}{void K9.four}{void K9.br}{void K9.swapped}{void vis}
		</Overlay>
	);
};

// ---------- 10. Memory aid ----------
const K10 = cues(sc('memory-aid'), {so: 'So, four', split: 'Split the reagent', piece: 'one piece on each', hh: 'H and H', xx: 'X and X', hx: 'H and X', hoh: 'H and O H', then: 'Then match', nickel: 'nickel and heat', room: 'room temperature', acid: 'acid, heat', pressure: 'pressure'});
const unit = (a: string, b: string): SMol => ({atoms: [{el: 'C', p: [-58, 0]}, {el: 'C', p: [58, 0]}, {el: a as El, p: [-58, -84]}, {el: b as El, p: [58, -84]}], bonds: [{a: 0, b: 1, order: 2, color: MULTI}, {a: 0, b: 2}, {a: 1, b: 3}], C: [0, 1], k: {}});
const PIECES: [string, string, string, string][] = [['H', 'H', '+ H_2', HGREYC()], ['X', 'X', '+ X_2', BROM], ['H', 'X', '+ HX', BROM], ['H', 'OH', '+ H_2O', '#8f3f26']];
function HGREYC() { return '#7a746a'; }
export const MemoryRow: React.FC<{times: number[]; y: number; xs?: number[]; s?: number; o?: number; labels?: boolean}> = ({times, y, xs = [330, 750, 1170, 1590], s = 1, o = 1, labels = true}) => (
	<g opacity={o}>
		{PIECES.map(([a, b, lab, c], i) => {
			const m = unit(a, b);
			const t = times[i];
			const colOf = (q: string) => (q === 'H' ? '#7a746a' : q === 'OH' ? '#8f3f26' : c);
			return (
				<g key={i}>
					<Mol2D m={m} x={xs[i]} y={y} s={s} at={times[0] - 20} size={44} fly={{2: {from: [-90, -230], at: t, dur: 20}, 3: {from: [90, -230], at: t + 4, dur: 20}}} relax={{0: t + 16}} col={{2: colOf(a), 3: colOf(b)}} />
					{labels ? <CT x={xs[i]} y={y + 80 * s} text={lab} size={34} anchor="middle" color={INK_SOFT} at={t} plain /> : null}
				</g>
			);
		})}
	</g>
);
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const rows = ['H_2: Ni, about 150 °C', 'X_2: room temperature', 'HX: room temperature', 'H_2O: steam, H_3PO_4, about 300 °C, high pressure'];
	const lit = [K10.nickel, K10.room, K10.room + 26, K10.acid];
	return (
		<Overlay>
			<TaskLine text="Split the reagent: one piece on each C" at={K10.split} size={58} y={190} color={TEAL} />
			<MemoryRow times={[K10.hh, K10.xx, K10.hx, K10.hoh]} y={390} o={dimAt(f, K10.then, 0.55)} />
			<CondCard x={460} y={560} at={K10.then} size={40} title="Then match the conditions" rows={rows.map((t, i) => ({t, at: lit[i], fill: lit[i]}))} ring={{row: 3, phrase: 'high pressure', at: K10.pressure}} />
			{void K10.so}{void K10.piece}{void INK}
		</Overlay>
	);
};
