// M7 C04a scenes 11 to 16: attempt 1 (propene + chlorine at room temperature), brief feedback (one Cl on each carbon,
// 1,2-dichloropropane; the substitution with HCl crossed), attempt 2 (C₄H₈ that decolourises bromine water and gives
// only one possible alcohol), brief feedback (the ring ruled out, two unsymmetrical alkenes give two alcohols, but-2-ene;
// "but-1-ene" crossed), the handoff (alkanes and alkynes) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {INK, INK_SOFT, KeyNotesBoard, Overlay, PauseHold, Sx, TEAL} from '../chem-m6-c01/parts';
import {AnswerChip, CHAIN_INK, Crossed, HGREY, MULTI, NameLbl, QCardX, Skel, Stamp, Tag, ringBonds, ringPts, zig} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {BRW_PAIR, hold, sc} from './common';
import {CHLOR, Mol2D, Plus, PlateC, RxArrow, apt, cmol, diat, dimAt, loc, vis} from './parts';
import {MemoryRow} from './s3';

// ---------- attempt 1 ----------
const Q1 = ['Propene reacts with chlorine at room temperature.', 'Write a balanced equation for this reaction using structural formulae,', 'and name the organic product.'];
const K11 = cues(sc('attempt-1'), {turn: 'Your turn', propene: 'Propene reacts', write: 'Write a', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K11.turn} />
		<QCardX lines={Q1} at={K11.turn + 6} y={170} size={42} />
		<PauseHold h={hold('attempt-1')} at={K11.pause} x={140} y={860} cx={1650} cy={850} />
		{void K11.propene}{void K11.write}
	</Overlay>
);

// ---------- feedback 1 ----------
const K12 = cues(sc('feedback-1'), {adds: 'Chlorine adds', each: 'each carbon', old: 'the old C', product: 'The product is', name: 'two-dichloropropane', only: "There's only one", same: 'are the same', writing: 'Writing H', subst: 'substitution', lost: 'nothing is lost'});
const PROP = cmol([{ul: 'H', dl: 'H'}, {u: 'H'}, {u: 'H', d: 'H', r: 'H'}], [2, 1]);
const CL2 = diat('Cl', 'Cl', 92);
const DCP = cmol([{l: 'H', u: 'Cl*', d: 'H'}, {u: 'Cl*', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
export const SceneFeedback1: React.FC = () => {
	const Y = 560, s = 0.95;
	const fl = Object.fromEntries([[0, DCP.k['0u'], K12.each], [1, DCP.k['1u'], K12.each + 8]].map(([ri, pi, at]) => [pi, {from: loc(apt(CL2, ri, 640, Y, s), 1300, Y, s), at, dur: 26}]));
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={90} size={30} under={[{line: 0, phrase: 'Propene', at: 8}, {line: 0, phrase: 'chlorine', at: 16}, {line: 0, phrase: 'room temperature', at: 62}, {line: 1, phrase: 'using structural formulae', at: K12.name}, {line: 2, phrase: 'name the organic product', at: K12.name + 10}]} />
			<Mol2D m={PROP} x={290} y={Y} s={s} at={0} />
			<Plus x={510} y={Y} at={10} />
			<Mol2D m={CL2} x={640} y={Y} s={s} at={14} />
			<RxArrow x1={760} x2={1000} y={Y} at={40} above={[{t: 'room temperature', at: 56}]} />
			<Mol2D m={DCP} x={1300} y={Y} s={s} at={K12.each - 6} fly={fl} />
			<NameLbl x={1300} y={Y + 175} parts={[['1,2-dichloro', CHLOR], ['propane', CHAIN_INK]]} at={K12.name} size={36} />
			<AnswerChip x={96} y={770} text="CH_3CH=CH_2 + Cl_2 → CH_3CHClCH_2Cl, 1,2-dichloropropane" at={K12.only} size={32} />
			<Crossed x={96} y={866} text="CH_3CH=CH_2 + Cl_2 → CH_2=CHCH_2Cl + HCl" at={K12.writing} cross={K12.subst} note="at room temperature, chlorine adds: both Cl atoms, one product" size={34} />
			{void K12.adds}{void K12.old}{void K12.product}{void K12.same}{void K12.lost}
		</Overlay>
	);
};

// ---------- attempt 2 ----------
const Q2 = ['Compound X has the molecular formula C_4H_8. X decolourises bromine water rapidly.', 'When X reacts with steam in the presence of a phosphoric acid catalyst at high', 'temperature and pressure, only one alcohol product is possible.', 'Identify compound X. Justify your answer.'];
const K13 = cues(sc('attempt-2'), {last: 'Last one', compound: 'Compound X', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K13.last} />
		<QCardX lines={Q2} at={K13.last + 6} y={170} size={38} />
		<PauseHold h={hold('attempt-2')} at={K13.pause} x={140} y={860} cx={1650} cy={850} />
		{void K13.compound}
	</Overlay>
);

// ---------- feedback 2 ----------
const K14 = cues(sc('feedback-2'), {dbl: 'double bond', ring: 'ring like', three: 'Three alkenes', but1: 'But-one-ene and', diff: 'different at each', two: 'two possible alcohols', but2: 'But-two-ene is', ol: 'butan-two-ol', x: 'X is but-two-ene', fit: "doesn't fit", alc: 'two alcohols'});
type Sk = {pts: V2[]; bonds: Bond[]; oh?: number};
const at2 = (pts: V2[], x: number, y: number, k = 1): V2[] => pts.map(p => [x + p[0] * k, y + p[1] * k]);
const Z4 = zig(4, -129, 0, 86, 50);
const BUT1: Sk = {pts: Z4, bonds: [{a: 0, b: 1, order: 2, color: MULTI}, {a: 1, b: 2}, {a: 2, b: 3}]};
const BUT2: Sk = {pts: Z4, bonds: [{a: 0, b: 1}, {a: 1, b: 2, order: 2, color: MULTI}, {a: 2, b: 3}]};
const MP: Sk = {pts: [[-86, 25], [0, 0], [86, 25], [0, -86]], bonds: [{a: 1, b: 3, order: 2, color: MULTI}, {a: 0, b: 1}, {a: 1, b: 2}]};
const ol = (base: V2[], bonds: Bond[], on: number, dir: V2): Sk => ({pts: [...base, [base[on][0] + dir[0], base[on][1] + dir[1]]], bonds: [...bonds, {a: on, b: base.length}], oh: base.length});
const plain = (b: Bond[]) => b.map(q => ({a: q.a, b: q.b}));
const B1OL = ol(Z4, plain(BUT1.bonds), 3, [0, -86]), B2OL = ol(Z4, plain(BUT1.bonds), 1, [0, -86]);
const MP1 = ol(MP.pts, plain(MP.bonds), 0, [-60, 60]), MP2 = ol(MP.pts, plain(MP.bonds), 1, [0, 86]);
const SkDraw: React.FC<{m: Sk; x: number; y: number; k?: number; at: number; out?: number; o?: number; width?: number}> = ({m, x, y, k = 1, at, out, o = 1, width = 6}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const P = at2(m.pts, x, y, k);
	return (
		<g opacity={v}>
			<Skel pts={P} bonds={m.bonds} at={at} width={width} />
			{m.oh !== undefined ? <g><rect x={P[m.oh][0] - 30 * k} y={P[m.oh][1] - 22 * k} width={60 * k} height={44 * k} rx={10} fill="#fbf8f1" /><Sx x={P[m.oh][0]} y={P[m.oh][1] + 12 * k} text="OH" size={34 * k} color="#8f3f26" anchor="middle" weight={800} at={-1000} /></g> : null}
		</g>
	);
};
const Badge: React.FC<{x: number; y: number; at: number; o?: number}> = ({x, y, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	return <g opacity={v}><circle cx={x} cy={y} r={30} fill="#fbeec4" stroke="#c98a1b" strokeWidth={3} /><Sx x={x} y={y + 12} text="2" size={34} color="#8a5a0c" anchor="middle" weight={800} at={-1000} /><Sx x={x} y={y + 64} text="alcohols" size={22} color={INK_SOFT} anchor="middle" weight={600} at={-1000} /></g>;
};
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const RY = 610, AY = 830;
	const xs = [380, 900, 1420];
	const alcOut = K14.but2;
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={86} size={28} under={[{line: 0, phrase: 'decolourises bromine water rapidly', at: K14.dbl}, {line: 0, phrase: 'C_4H_8', at: K14.three}, {line: 2, phrase: 'only one alcohol product is possible', at: K14.but2 + 20}, {line: 3, phrase: 'Identify compound X', at: K14.x}]} />
			<PlateC p={BRW_PAIR} cx={1770} top={380} h={190} o={vis(f, K14.dbl) * dimAt(f, K14.three, 0.5)} />
			<Tag x={1770} y={585} text="C=C present" at={K14.dbl} size={26} anchor="middle" o={dimAt(f, K14.three, 0.5)} />
			<g opacity={vis(f, K14.ring) * 0.5}><Skel pts={ringPts(4, 1430, 430, 44, Math.PI / 4)} bonds={ringBonds(4)} at={K14.ring} width={5} color={HGREY} /></g>
			<Tag x={1430} y={490} text="ring: no C=C" at={K14.ring + 10} size={26} anchor="middle" o={dimAt(f, K14.three, 0.5)} />
			<SkDraw m={BUT1} x={xs[0]} y={RY} at={K14.three} />
			<SkDraw m={MP} x={xs[1]} y={RY} at={K14.three + 10} />
			<SkDraw m={BUT2} x={xs[2]} y={RY} at={K14.three + 20} />
			{['but-1-ene', '2-methylpropene', 'but-2-ene'].map((t, i) => <Sx key={t} x={xs[i]} y={RY + 90} text={t} size={28} color={INK_SOFT} anchor="middle" weight={700} at={K14.three + 10 * i} />)}
			{[[B1OL, B2OL, xs[0], 'butan-1-ol', 'butan-2-ol'], [MP1, MP2, xs[1], '2-methylpropan-1-ol', '2-methylpropan-2-ol']].map(([a, b, x, n1, n2], i) => (
				<g key={i}>
					<SkDraw m={a as Sk} x={(x as number) - 120} y={AY} k={0.62} at={K14.two + i * 8} out={alcOut} width={4} />
					<SkDraw m={b as Sk} x={(x as number) + 120} y={AY} k={0.62} at={K14.two + 6 + i * 8} out={alcOut} width={4} />
					<Sx x={(x as number) - 120} y={AY + 70} text={n1 as string} size={20} color={HGREY} anchor="middle" weight={600} at={K14.two + i * 8} out={alcOut} />
					<Sx x={(x as number) + 120} y={AY + 70} text={n2 as string} size={20} color={HGREY} anchor="middle" weight={600} at={K14.two + 6 + i * 8} out={alcOut} />
					<Badge x={(x as number) + 190} y={RY - 30} at={alcOut} />
				</g>
			))}
			<SkDraw m={B2OL} x={xs[2] - 130} y={AY} k={0.62} at={K14.ol} width={4} />
			<SkDraw m={B2OL} x={xs[2] + 130} y={AY} k={0.62} at={K14.ol + 10} width={4} />
			<Stamp x={xs[2]} y={AY} at={K14.ol + 20} r={30} />
			<Sx x={xs[2]} y={AY + 70} text="only butan-2-ol" size={24} color={INK_SOFT} anchor="middle" weight={700} at={K14.ol + 20} />
			<AnswerChip x={96} y={936} text="X = but-2-ene, CH_3CH=CHCH_3 (gives only butan-2-ol)" at={K14.x} size={30} />
			<Crossed x={1130} y={930} text="X = but-1-ene" at={K14.fit} cross={K14.alc} note="unsymmetrical: two possible alcohols" size={30} />
			{void K14.but1}{void K14.diff}{void TEAL}
		</Overlay>
	);
};

// ---------- 15. Handoff ----------
const K15 = cues(sc('handoff'), {so: 'So anything', can: 'can add across', alkanes: 'alkanes,', alkynes: 'And alkynes', next: 'Next:'});
const ETHANE = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
const ETHYNE = cmol([{l: 'H'}, {r: 'H'}], [3]);
export const SceneHandoff: React.FC = () => (
	<Overlay>
		<Sx x={960} y={150} text="Anything that splits into two pieces can add across a C=C" size={40} color={TEAL} anchor="middle" hand at={K15.so} />
		<MemoryRow times={[-100, -100, -100, -100]} y={320} xs={[510, 810, 1110, 1410]} s={0.8} labels={false} />
		<Mol2D m={ETHANE} x={600} y={620} s={1.1} at={K15.alkanes} />
		<Tag x={600} y={760} text="no C=C: ?" at={K15.alkanes + 10} size={32} anchor="middle" />
		<Mol2D m={ETHYNE} x={1320} y={620} s={1.2} at={K15.alkynes} />
		<Tag x={1320} y={760} text="triple bond: ?" at={K15.alkynes + 10} size={32} color={TEAL} fill="#dff2ef" anchor="middle" />
		<Tag x={960} y={880} text="Next: why do alkanes substitute while alkenes and alkynes add?" at={K15.next} size={36} color={TEAL} fill="#dff2ef" anchor="middle" />
		{void K15.can}
	</Overlay>
);

// ---------- 16. Key notes ----------
const NOTES = [
	'Alkenes add because the weaker second bond of the C=C breaks, leaving one spare bond on each carbon. Addition: two reactants → one product, nothing lost; the reagent splits, one piece on each carbon of the old C=C. Alkanes (saturated) cannot add.',
	'CH_2=CH_2 + H_2 → CH_3CH_3 (Ni catalyst, about 150 °C). CH_2=CH_2 + Br_2 → CH_2BrCH_2Br, 1,2-dibromoethane (room temperature; bromine water turns orange → colourless).',
	'CH_2=CH_2 + HBr → CH_3CH_2Br, bromoethane (room temperature; adding HX). CH_2=CH_2 + H_2O ⇌ CH_3CH_2OH, ethanol (steam, acid catalyst: H_3PO_4 industrially, about 300 °C, high pressure; the catalyst is an acid, not HCl, which would add to the alkene itself). Write conditions on the arrow.',
	'Unsymmetrical alkene + HX or H_2O → two possible products, write both (propene + HBr → 1-bromopropane or 2-bromopropane). Symmetrical alkene (but-2-ene) → one product. Halogens are named as prefixes with locants (bromo-, chloro-).',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={28} aidTop={790} aids={['Split the reagent: one piece on each carbon.', 'H H, X X, H X, H OH.', 'Water needs acid, heat and pressure.']} tag="addition across a C=C bond" />
);
