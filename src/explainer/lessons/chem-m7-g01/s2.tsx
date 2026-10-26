// M7 G01 scenes 3a to 3d: question 2 (pent-2-ene + HCl at room temperature; pentane + Cl2 under UV light): the attempt;
// addition (the equation stage strip, H and Cl docking one on each carbon of the C=C, a grey ghost of the other
// product); substitution (the lamp lights, the swap docker on carbon 1, the swapped H leaving with the other Cl as HCl;
// both products are C5H11Cl); adding Cl across pentane crossed (two hydrogens short).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {INK, Overlay, PauseHold, Sx, TEAL} from '../chem-m6-c01/parts';
import {CHAIN_INK, Crossed, NAVY, NameLbl, QCardX, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {Box, CHLOR, CT, Halo, Mol2D, PlateC, Plus, RxArrow, apt, cmol, diat, dimAt, loc, vis} from '../chem-m7-c04a/parts';
import {FreeAtom, UV, UVGlow, UVWaves, UV_SOFT, withSwap} from '../chem-m7-c04b/parts';
import {AnsBox, Badge, Checks7, QF, QStrip} from './board';
import type {APart} from './board';
import {Heading, LAMP, hold, sc} from './common';

export const Q2 = ['(a) Pent-2-ene reacts with hydrogen chloride at room temperature.', '(b) Pentane reacts with chlorine gas in the presence of UV light.', 'For each reaction, identify the type of reaction and write a balanced equation, using', 'structural formulae, for the formation of one organic product.'];
const A_PARTS = (at: number): APart[] => [{t: 'addition: CH₃CH=CHCH₂CH₃ + HCl → CH₃CHClCH₂CH₂CH₃, ', at}, {t: '2-chloropentane', at, lit: true}, {t: ' (or 3-chloropentane)', at}];
const B_PARTS = (at: number): APart[] => [{t: 'substitution: CH₃CH₂CH₂CH₂CH₃ + Cl₂ → CH₃CH₂CH₂CH₂CH₂Cl + HCl (UV light), ', at}, {t: '1-chloropentane', at, lit: true}];
const AnsQ2: React.FC<{a?: number; b?: number; at?: number}> = ({a = 1e6, b = 1e6, at = -100}) => (
	<>
		<AnsBox x={140} y={866} w={1640} label="(a)" at={at} size={22} parts={A_PARTS(a)} />
		<AnsBox x={140} y={928} w={1640} label="(b)" at={at + 6} size={22} parts={B_PARTS(b)} />
	</>
);

// ---------- 3a. Question 2 (attempt) ----------
const KA = cues(sc('q2-question'), {q: 'Question two', pent: 'Pent-two-ene reacts', pentane: 'pentane reacts', each: 'For each', pause: 'Pause here'});
export const SceneQ2Question: React.FC = () => {
	const h = hold('q2-question');
	return (
		<>
			<Heading text="Question 2" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q2} at={KA.pent} y={QF.y} size={QF.size} />
				<PlateC p={LAMP} cx={1640} top={490} h={110} o={vis(useCurrentFrame(), KA.pentane)} />
				<AnsBox x={140} y={490} w={1340} label="(a)" at={KA.each + 30} />
				<AnsBox x={140} y={570} w={1340} label="(b)" at={KA.each + 36} />
				<PauseHold h={h} at={KA.pause} x={140} y={850} cx={1650} cy={840} />
				<Checks7 hold={h} />
			</Overlay>
		</>
	);
};

// ---------- molecules ----------
const PENTENE = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H'}, {u: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}], [1, 2]);
const P2CL = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'Cl*'}, {u: 'H', d: 'H*'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
const P3CL = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H*'}, {u: 'H', d: 'Cl*'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
export const PENTANE = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
const HCL = diat('H', 'Cl', 90);
const CL2 = diat('Cl', 'Cl', 92);
const Nums: React.FC<{m: ReturnType<typeof cmol>; x: number; y: number; s: number; at: number; out?: number; dy?: number}> = ({m, x, y, s, at, out, dy = -128}) => (
	<g>{m.C.map((c, i) => { const p = apt(m, c, x, y, s); return <Sx key={i} x={p[0] + 26 * s} y={p[1] + dy * s} text={String(i + 1)} size={24} color={NAVY} anchor="middle" weight={800} at={at + i * 4} out={out} />; })}</g>
);

// ---------- 3b. Addition ----------
const KB = cues(sc('q2-addition'), {pent: 'pent-two-ene', double: 'double bond', hcl: 'hydrogen chloride', nolight: 'needs no', addition: 'addition', hgoes: 'the H goes', cl: 'and the Cl', isnt: "isn't the same", two: 'two possible', put: 'Put the', name: 'two-chloropentane', three: 'Three-chloropentane', either: 'Either way', lost: 'nothing is lost'});
const E = {y: 560, s: 0.72, r: 330, p: 640, h: 750, a1: 870, a2: 1070, pr: 1340};
export const SceneQ2Addition: React.FC = () => {
	const f = useCurrentFrame();
	const dock = KB.addition + 20;
	const hc = (i: number) => loc(apt(HCL, i, E.h, E.y, E.s), E.pr, E.y, E.s);
	return (
		<Overlay>
			<Badge text="Addition or substitution" at={6} />
			<QStrip lines={Q2} under={[{line: 0, phrase: 'Pent-2-ene', at: KB.pent}, {line: 0, phrase: 'hydrogen chloride', at: KB.hcl}, {line: 0, phrase: 'room temperature', at: KB.nolight}]} />
			<Mol2D m={PENTENE} x={E.r} y={E.y} s={E.s} at={KB.pent} />
			<Nums m={PENTENE} x={E.r} y={E.y} s={E.s} at={KB.pent + 20} />
			<Halo x={apt(PENTENE, 1, E.r, E.y, E.s)[0] + 47} y={E.y} r={60} at={KB.double} out={KB.addition} color="#bfe6df" />
			<Plus x={E.p} y={E.y} at={KB.hcl} />
			<Mol2D m={HCL} x={E.h} y={E.y} s={E.s * 1.2} at={KB.hcl} out={dock + 4} />
			<RxArrow x1={E.a1} x2={E.a2} y={E.y} at={KB.nolight} above={[{t: 'room temperature', at: KB.nolight + 6}]} />
			<Mol2D m={P2CL} x={E.pr} y={E.y} s={E.s} at={KB.addition} fly={{[P2CL.k['1d']]: {from: hc(1), at: dock, dur: 26}, [P2CL.k['2d']]: {from: hc(0), at: dock + 6, dur: 26}}} glow={{[P2CL.k['1d']]: [KB.cl, KB.isnt], [P2CL.k['2d']]: [KB.hgoes, KB.cl]}} />
			<Tag x={E.pr} y={E.y + 120} text="one piece on each carbon of the C=C" at={KB.hgoes} out={KB.isnt} size={26} color={TEAL} fill="#dff2ef" anchor="middle" />
			<g opacity={0.55 * dimAt(f, KB.name, 0.5)}><Mol2D m={P3CL} x={E.pr} y={E.y + 210} s={0.5} at={KB.two} col={{[P3CL.k['2d']]: '#8f897f'}} /></g>
			<Tag x={E.pr} y={E.y + 290} text="unsymmetrical: 2 possible products" at={KB.two} out={KB.name} size={24} anchor="middle" />
			<NameLbl x={E.pr} y={E.y + 150} parts={[['2-chloro', CHLOR], ['pentane', CHAIN_INK]]} at={KB.name} size={36} />
			<Tag x={E.pr - 120} y={E.y - 170} text="2 molecules → 1 product" at={KB.lost} size={28} color={TEAL} fill="#dff2ef" />
			<AnsQ2 a={KB.name + 14} />
			<Checks7 ticks={{0: [KB.double], 1: [KB.addition]}} />
			{void KB.put}{void KB.three}{void KB.either}{void INK}
		</Overlay>
	);
};

// ---------- 3c. Substitution ----------
const KC = cues(sc('q2-substitution'), {pentane: 'Now pentane', single: 'single bonds', cant: "can't add", uv: 'UV light', subst: 'substitution', one: 'one hydrogen', swaps: 'swaps', leaves: 'leaves', hcl: 'as H', swap: 'Swap one', name: 'one-chloropentane', notice: 'Notice', c5: 'C five', bonds: 'starting bonds', hcl2: ['H Cl', 2]});
const S = {y: 600, s: 0.62, r: 270, p: 540, c: 640, a1: 750, a2: 950, pr: 1200, p2: 1470, hb: 1610};
const SW = withSwap(PENTANE, '0l', 'Cl');
export const SceneQ2Subst: React.FC = () => {
	const f = useCurrentFrame();
	const slot = apt(SW.m, SW.h, S.pr, S.y, S.s);
	const hover: V2 = [slot[0] - 10, slot[1] - 110];
	const boxH = apt(HCL, 0, S.hb, S.y, S.s * 1.2), boxCl = apt(HCL, 1, S.hb, S.y, S.s * 1.2);
	const c0 = apt(CL2, 0, S.c, S.y, S.s * 1.2), c1 = apt(CL2, 1, S.c, S.y, S.s * 1.2);
	const lit = vis(f, KC.uv);
	return (
		<Overlay>
			<Badge text="Addition or substitution" at={-100} />
			<QStrip lines={Q2} under={[{line: 0, phrase: 'Pent-2-ene', at: -100}, {line: 0, phrase: 'hydrogen chloride', at: -100}, {line: 0, phrase: 'room temperature', at: -100}, {line: 1, phrase: 'Pentane', at: KC.pentane}, {line: 1, phrase: 'in the presence of UV light', at: KC.uv}]} />
			<Tag x={140} y={330} text="(a) kept: CH_3CHClCH_2CH_2CH_3" at={0} size={24} o={0.7} />
			<Mol2D m={PENTANE} x={S.r} y={S.y} s={S.s} at={KC.pentane} />
			{[0, 1, 2, 3].map(i => <Halo key={i} x={(apt(PENTANE, i, S.r, S.y, S.s)[0] + apt(PENTANE, i + 1, S.r, S.y, S.s)[0]) / 2} y={S.y} r={30} at={KC.bonds} out={KC.bonds + 40} color="#e8e2d6" />)}
			<Tag x={S.r} y={S.y + 110} text="single bonds only" at={KC.single} out={KC.uv} size={26} anchor="middle" />
			<Plus x={S.p} y={S.y} at={KC.uv - 10} />
			<Mol2D m={CL2} x={S.c} y={S.y} s={S.s * 1.2} at={KC.uv - 10} out={KC.swaps} />
			<PlateC p={LAMP} cx={850} top={380} h={86} o={vis(f, KC.uv - 10)} />
			<UVGlow x={850} y={423} rx={90} ry={50} at={KC.uv} pulse={KC.uv} o={lit} />
			<UVWaves a={[850, 470]} b={[850, S.y - 30]} at={KC.uv + 10} out={KC.name} n={2} />
			<RxArrow x1={S.a1} x2={S.a2} y={S.y} at={KC.uv - 4} above={[{t: 'UV light', at: KC.uv + 4, color: UV, fill: UV_SOFT}]} />
			<Mol2D m={SW.m} x={S.pr} y={S.y} s={S.s} at={KC.subst} hideAt={{[SW.h]: KC.one}} fly={{[SW.i]: {from: loc(c0, S.pr, S.y, S.s), at: KC.swaps, dur: 26}}} glow={{[SW.i]: [KC.swaps + 26, KC.name]}} />
			<FreeAtom el="H" keys={[{at: -1, p: slot}, {at: KC.one, p: hover}, {at: KC.leaves, p: boxH, dur: 26}]} at={KC.one} out={KC.hcl + 16} glow size={30} />
			<FreeAtom el="Cl" keys={[{at: -1, p: c1}, {at: KC.leaves, p: boxCl, dur: 26}]} at={KC.swaps} out={KC.hcl + 16} size={30} />
			<Plus x={S.p2} y={S.y} at={KC.hcl} />
			<Mol2D m={HCL} x={S.hb} y={S.y} s={S.s * 1.2} at={KC.hcl + 12} />
			<Box x={S.hb - 80} y={S.y - 46} w={160} h={92} at={KC.hcl + 12} color={UV} pulse={KC.hcl2} />
			<Tag x={S.hb} y={S.y + 80} text="2 products" at={KC.hcl + 20} out={KC.notice} size={26} color={UV} fill={UV_SOFT} anchor="middle" />
			<NameLbl x={S.pr} y={S.y + 130} parts={[['1-chloro', CHLOR], ['pentane', CHAIN_INK]]} at={KC.name} size={34} />
			<Tag x={560} y={790} text="(a) C_5H_11Cl" at={KC.c5} size={28} color={INK} fill="#fffdf8" anchor="middle" />
			<Sx x={760} y={824} text="=" size={40} color={INK} anchor="middle" weight={800} at={KC.c5 + 10} />
			<Tag x={960} y={790} text="(b) C_5H_11Cl" at={KC.c5 + 6} size={28} color={INK} fill="#fffdf8" anchor="middle" />
			<Tag x={1400} y={790} text="apart: the starting bonds, and HCl" at={KC.bonds} size={26} color={TEAL} fill="#dff2ef" anchor="middle" />
			<AnsQ2 a={-100} b={KC.name + 14} />
			<Checks7 ticks={{0: [-100], 1: [-100], 2: [KC.c5]}} />
			{void KC.cant}{void KC.swap}
		</Overlay>
	);
};

// ---------- 3d. The classic mistake ----------
const KD = cues(sc('q2-mistake'), {mistake: 'classic mistake', putting: 'putting a', count: 'Count the', short: 'hydrogens short', balance: "can't balance", alkane: 'An alkane'});
export const SceneQ2Mistake: React.FC = () => (
	<Overlay>
		<Badge text="Addition or substitution" at={-100} />
		<QStrip lines={Q2} under={[{line: 0, phrase: 'Pent-2-ene', at: -100}, {line: 1, phrase: 'Pentane', at: -100}, {line: 1, phrase: 'in the presence of UV light', at: -100}]} />
		<Crossed x={140} y={400} text="CH_3CH_2CH_2CH_2CH_3 + Cl_2 → CH_3CHClCHClCH_2CH_3" at={0} cross={KD.mistake + 12} note="alkane: no C=C, so swap, don't add" size={40} />
		<CT x={180} y={640} text="left:   C 5,  H 12,  Cl 2" size={38} color={INK} at={KD.count} plain />
		<CT x={180} y={700} text="right:  C 5,  H 10,  Cl 2" size={38} color={INK} at={KD.short} plain />
		<Sx x={720} y={700} text="✗  2 H missing" size={38} color="#c4432f" weight={800} at={KD.balance} />
		<Tag x={1300} y={640} text="no double bond to open" at={KD.alkane} size={32} color={TEAL} fill="#dff2ef" anchor="middle" />
		<AnsQ2 a={-100} b={-100} />
		<Checks7 ticks={{0: [-100], 1: [-100], 2: [-100]}} />
		{void KD.putting}
	</Overlay>
);
